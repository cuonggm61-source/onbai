// Hàm dùng chung cho tất cả các bài thi
let audio = null;

document.addEventListener("DOMContentLoaded", () => {
    audio = document.getElementById("bg-music");
    if (audio) audio.volume = 0.4;
});

function beginQuiz() {
    const input = document.getElementById("username");
    if (!input.value.trim()) {
        alert("❗ Vui lòng nhập họ tên để bắt đầu.");
        input.focus();
        return;
    }
    userName = input.value.trim();
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("sticky-header").style.display = "flex";
    document.getElementById("quiz-container").style.display = "block";
    
    let displayNameHeader = document.getElementById("display-name-header");
    if (displayNameHeader) displayNameHeader.textContent = userName;

    if (audio) {
        if (typeof quizAudioSrc !== 'undefined' && quizAudioSrc !== "") {
            audio.src = quizAudioSrc;
        }
        audio.play().catch(e => console.log("Audio autoplay blocked"));
    }
    renderQuestions();
    startTimer();
}

function startTimer() {
    const timerEl = document.getElementById("timer");
    timerInterval = setInterval(() => {
        timeRemaining--;
        let m = Math.floor(timeRemaining / 60);
        let s = timeRemaining % 60;
        if (timerEl) timerEl.textContent = `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function toggleMusic() {
    if (audio) {
        if (audio.paused) audio.play();
        else audio.pause();
    }
}

function renderQuestions() {
    const container = document.getElementById("quiz-content");
    container.innerHTML = "";
    quizData.forEach((item, idx) => {
        const html = `
            <div class="question-card" id="q${idx}">
                <div class="question-title"><strong>Câu ${idx + 1}:</strong> ${item.q.replace(/^Câu\s*\d+[\.\:]?\s*/i, '')}</div>
                <div class="options">
                    ${item.a.map((opt, optIdx) => `
                        <label class="option-label" id="label-${idx}-${optIdx}">
                            <input type="radio" name="q${idx}" value="${optIdx}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
                <div class="explanation" id="explain${idx}" style="display: none; margin-top: 15px; padding: 15px; background: #e8f4fd; border-left: 5px solid #3498db; border-radius: 5px; line-height: 1.5;">
                    <strong>Lời giải:</strong> ${item.explain || "Không có lời giải chi tiết."}
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
    if (typeof MathJax !== 'undefined') MathJax.typesetPromise();
}

function submitQuiz() {
    clearInterval(timerInterval);
    if (audio) audio.pause();

    let score = 0;
    quizData.forEach((item, idx) => {
        const inputs = document.getElementsByName(`q${idx}`);
        const explainDiv = document.getElementById(`explain${idx}`);
        
        let selected = -1;
        inputs.forEach(input => {
            if (input.checked) selected = parseInt(input.value);
            input.disabled = true; 
        });

        const correctLabel = document.getElementById(`label-${idx}-${item.correct}`);
        if (correctLabel) correctLabel.classList.add("correct-answer");

        if (selected !== -1) {
            if (selected === item.correct) {
                score++;
            } else {
                const wrongLabel = document.getElementById(`label-${idx}-${selected}`);
                if (wrongLabel) wrongLabel.classList.add("wrong-answer");
            }
        }
        if (explainDiv) explainDiv.style.display = "block";
    });

    // GỬI ĐIỂM VỀ GOOGLE SHEETS NẾU CÓ CẤU HÌNH
    let reviewBtn = document.querySelector(".btn-review");
    if (reviewBtn) {
        reviewBtn.textContent = "Đang lưu điểm...";
        reviewBtn.disabled = true;
    }

    if (typeof scriptURL !== 'undefined' && scriptURL && scriptURL !== "DÁN_LINK_CỦA_BẠN_VÀO_ĐÂY") {
        let formData = new FormData();
        formData.append("name", userName);
        formData.append("score", score);
        formData.append("total", quizData.length);

        fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            body: formData
        }).then(() => {
            if (reviewBtn) {
                reviewBtn.textContent = "🔍 Xem lại bài làm";
                reviewBtn.disabled = false;
            }
        }).catch(err => {
            console.error("Lỗi khi gửi kết quả", err);
            if (reviewBtn) {
                reviewBtn.textContent = "🔍 Xem lại bài làm";
                reviewBtn.disabled = false;
            }
        });
    } else {
        if (reviewBtn) {
            reviewBtn.textContent = "🔍 Xem lại bài làm";
            reviewBtn.disabled = false;
        }
    }

    // Hiện kết quả
    let finalName = document.getElementById("final-name");
    if (finalName) finalName.textContent = userName;
    
    let finalScore = document.getElementById("final-score");
    if (finalScore) finalScore.textContent = `${score}/${quizData.length}`;
    
    // ===== LƯU LỊCH SỬ HOẠT ĐỘNG (HEATMAP) =====
    try {
        const tzoffset = (new Date()).getTimezoneOffset() * 60000;
        const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().split('T')[0];
        let activityData = JSON.parse(localStorage.getItem('quiz_activity') || '{}');
        activityData[localISOTime] = (activityData[localISOTime] || 0) + 1;
        localStorage.setItem('quiz_activity', JSON.stringify(activityData));
    } catch (e) {
        console.error("Could not save activity", e);
    }

    // ====== PHẦN MỚI: HIỂN THỊ ẢNH VÀ PHÁT ÂM THANH DỰA VÀO ĐIỂM SỐ ======
    let msg = "";
    let imgUrl = "";
    let soundUrl = "";
    let resultImgObj = document.getElementById("result-image");

    let percent = score / quizData.length;

    if (percent >= 0.8) {
        // XUẤT SẮC (GIỎI)
        msg = "Đúng em tôi ve ry gút ";
        imgUrl = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHd6M2o1M3JiZHEzZHI3ZjQ1NHowZDd2bGxrbnRraXZvb3Rzc3pmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D63HGAzG15LQrjBPRE/giphy.gif"; 
        soundUrl = "https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3"; // Tiếng reo hò
    } else if (percent >= 0.6) {
        // KHÁ TỐT (KHÁ)
        msg = "làm được vậy là tốt dồi :>>";
        imgUrl = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3lpa3d1aTQxZTRoYnZ6bGJ0d3N0YTVrNzlrNGp1dDA4dm93cmFqYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fu3OjBQiCs3s0ZuLY3/giphy.gif"; // Thumbs up
        soundUrl = "https://www.myinstants.com/media/sounds/an-do-mixi.mp3"; // Tiếng vỗ tay
    } else if (percent >= 0.4) {
        // TRUNG BÌNH
        msg = "Nếu mãi không hiểu được toán thì sao ....";
        imgUrl = "https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif"; // Obama Hmm
        soundUrl = "https://www.myinstants.com/media/sounds/mario-coin.mp3"; // Tiếng Ting (Mario)
    } else {
        // YẾU
        msg = "Thôi hết cứu !";
        imgUrl = "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif"; // Khóc nhè
        soundUrl = "https://www.myinstants.com/media/sounds/y2mate-mp3cut_d1tt0z9.mp3"; // Tiếng kèn buồn thất bại
    }

    // Gán ảnh và hiện ảnh
    if (resultImgObj) {
        resultImgObj.src = imgUrl;
        resultImgObj.style.display = "inline-block";
    }

    // Phát âm thanh kết quả
    let resultAudio = new Audio(soundUrl);
    resultAudio.play().catch(e => console.log("Không thể tự động phát nhạc kết quả"));
    
    let scoreMessage = document.getElementById("score-message");
    if (scoreMessage) scoreMessage.textContent = msg;

    let overlay = document.getElementById("overlay");
    if (overlay) overlay.style.display = "block";
    
    let resultModal = document.getElementById("resultModal");
    if (resultModal) resultModal.style.display = "block";

    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn) {
        submitBtn.textContent = "THOÁT";
        submitBtn.style.background = "#95a5a6";
        submitBtn.onclick = () => window.location.href = 'index.html';
    }
    
    if (typeof MathJax !== 'undefined') MathJax.typesetPromise();
}

function reviewQuiz() {
    let overlay = document.getElementById("overlay");
    if (overlay) overlay.style.display = "none";
    let resultModal = document.getElementById("resultModal");
    if (resultModal) resultModal.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    // Render thông tin chuyên đề động
    if (typeof quizInfoHTML !== 'undefined') {
        let quizInfoContainer = document.getElementById("quiz-info-container");
        if (quizInfoContainer) {
            quizInfoContainer.innerHTML = quizInfoHTML;
        }
    }

    // Render lý thuyết động
    if (typeof theoryHTML !== 'undefined' && theoryHTML.trim() !== "") {
        let theoryBtn = document.getElementById("toggle-theory-btn");
        let theoryContainer = document.getElementById("quiz-theory-container");
        if (theoryBtn && theoryContainer) {
            theoryBtn.style.display = "inline-block";
            theoryContainer.innerHTML = theoryHTML;
        }
    }
});

function toggleTheory() {
    let container = document.getElementById("quiz-theory-container");
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

// ====== HIỆU ỨNG ÁNH SÁNG THEO CHUỘT (CURSOR GLOW) ======
const updateGlow = (x, y) => {
    document.body.style.setProperty("--mouse-x", `${x}px`);
    document.body.style.setProperty("--mouse-y", `${y}px`);
};
document.addEventListener("mousemove", (e) => updateGlow(e.clientX, e.clientY));
document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
        updateGlow(e.touches[0].clientX, e.touches[0].clientY);
    }
});
