const quizAudioSrc = "asset/Ấn Độ Mixi (Nà Ná Na Na Anh Độ Mixi).mp3";
const quizInfoHTML = `<h1 style="color: #2c3e50;">CHUYÊN ĐỀ: NGUYÊN HÀM LŨY THỪA & LƯỢNG GIÁC</h1>
        <div style="text-align: left; max-width: 500px; margin: 0 auto; line-height: 1.6;">
            <p>📝 <strong>Số câu:</strong> 20 câu hỏi trắc nghiệm</p>
            <p>⏱️ <strong>Thời gian:</strong> 20 phút</p>
            <p>📚 <strong>Nội dung:</strong> Bám sát 100% nguyên hàm đa thức, lũy thừa, phân thức cơ bản và lượng giác.</p>
        </div>`;

// Dán link Google Apps Script vào đây nếu muốn lưu điểm online
        const scriptURL = "https://script.google.com/macros/s/AKfycbzHsdXCSB8_eIfFzqyA-PMjz77FezLBhsoI-KmJGD9GQOgSQsdZarL_7U8YGgVi0DW9gQ/exec"; 
        const quizData = [
            {   
                q: "Câu 1: Họ nguyên hàm của hàm số \\( f(x) = x^3 \\) là:", 
                a: ["\\( \\frac{x^4}{4} + C \\)", "\\( 3x^2 + C \\)", "\\( \\frac{x^3}{3} + C \\)", "\\( x^4 + C \\)"], 
                correct: 0, 
                explain: "Áp dụng công thức \\( \\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\) với \\( n = 3 \\)." 
            },
            { 
                q: "Câu 2: Họ nguyên hàm của hàm số \\( f(x) = x^4 - 2x^2 \\) là:", 
                a: ["\\( 4x^3 - 4x + C \\)", "\\( \\frac{x^5}{5} - \\frac{2x^3}{3} + C \\)", "\\( \\frac{x^5}{5} - \\frac{x^3}{3} + C \\)", "\\( 5x^5 - 6x^3 + C \\)"], 
                correct: 1, 
                explain: "Áp dụng nguyên hàm cơ bản: \\( \\int (x^4 - 2x^2) dx = \\frac{x^5}{5} - \\frac{2x^3}{3} + C \\)." 
            },
            { 
                q: "Câu 3: Họ nguyên hàm của hàm số \\( f(x) = \\frac{1}{x^2} \\) là:", 
                a: ["\\( \\frac{1}{x} + C \\)", "\\( -\\frac{2}{x^3} + C \\)", "\\( -\\frac{1}{x} + C \\)", "\\( \\frac{1}{x^3} + C \\)"], 
                correct: 2, 
                explain: "Ta có \\( \\int x^{-2} dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C \\)." 
            },
            { 
                q: "Câu 4: Họ nguyên hàm của hàm số \\( f(x) = \\sqrt{x} \\) (với \\( x > 0 \\)) là:", 
                a: ["\\( \\frac{2}{3}x\\sqrt{x} + C \\)", "\\( \\frac{1}{2\\sqrt{x}} + C \\)", "\\( \\frac{3}{2}x\\sqrt{x} + C \\)", "\\( \\frac{2}{3\\sqrt{x}} + C \\)"], 
                correct: 0, 
                explain: "\\( \\int x^{\\frac{1}{2}} dx = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{2}{3}x\\sqrt{x} + C \\)." 
            },
            { 
                q: "Câu 5: Họ nguyên hàm của hàm số \\( f(x) = (2x-1)^2 \\) là:", 
                a: ["\\( \\frac{(2x-1)^3}{2} + C \\)", "\\( 2(2x-1) + C \\)", "\\( \\frac{(2x-1)^3}{3} + C \\)", "\\( \\frac{(2x-1)^3}{6} + C \\)"], 
                correct: 3, 
                explain: "Sử dụng công thức mở rộng \\( \\int (ax+b)^n dx = \\frac{1}{a}\\cdot\\frac{(ax+b)^{n+1}}{n+1} + C \\). Ta được \\( \\frac{1}{2}\\cdot\\frac{(2x-1)^3}{3} = \\frac{(2x-1)^3}{6} + C \\)." 
            },
            { 
                q: "Câu 6: Họ nguyên hàm của hàm số \\( f(x) = x^2 + \\frac{1}{x^3} \\) là:", 
                a: ["\\( \\frac{x^3}{3} + \\frac{1}{2x^2} + C \\)", "\\( \\frac{x^3}{3} - \\frac{1}{2x^2} + C \\)", "\\( 2x - \\frac{3}{x^4} + C \\)", "\\( \\frac{x^3}{3} - \\frac{1}{x^2} + C \\)"], 
                correct: 1, 
                explain: "Ta có: \\( \\int \\left(x^2 + x^{-3}\\right) dx = \\frac{x^3}{3} + \\frac{x^{-2}}{-2} + C = \\frac{x^3}{3} - \\frac{1}{2x^2} + C \\)." 
            },
            { 
                q: "Câu 7: Tìm nguyên hàm của hàm số \\( f(x) = \\sin x \\).", 
                a: ["\\( \\int \\sin x dx = -\\cos x + C \\)", "\\( \\int \\sin x dx = \\cos x + C \\)", "\\( \\int \\sin x dx = -\\sin x + C \\)", "\\( \\int \\sin x dx = \\sin x + C \\)"], 
                correct: 0, 
                explain: "Theo bảng nguyên hàm cơ bản: \\( \\int \\sin x dx = -\\cos x + C \\)." 
            },
            { 
                q: "Câu 8: Tìm nguyên hàm của hàm số \\( f(x) = \\cos x \\).", 
                a: ["\\( \\int \\cos x dx = -\\cos x + C \\)", "\\( \\int \\cos x dx = -\\sin x + C \\)", "\\( \\int \\cos x dx = \\sin x + C \\)", "\\( \\int \\cos x dx = \\cos x + C \\)"], 
                correct: 2, 
                explain: "Theo bảng nguyên hàm cơ bản: \\( \\int \\cos x dx = \\sin x + C \\)." 
            },
            { 
                q: "Câu 9: Họ nguyên hàm của hàm số \\( f(x) = \\sin 3x \\) là:", 
                a: ["\\( \\frac{1}{3}\\cos 3x + C \\)", "\\( -3\\cos 3x + C \\)", "\\( 3\\cos 3x + C \\)", "\\( -\\frac{1}{3}\\cos 3x + C \\)"], 
                correct: 3, 
                explain: "Sử dụng công thức \\( \\int \\sin(ax+b) dx = -\\frac{1}{a}\\cos(ax+b) + C \\). Ta được \\( -\\frac{1}{3}\\cos 3x + C \\)." 
            },
            { 
                q: "Câu 10: Họ nguyên hàm của hàm số \\( f(x) = \\cos 2x \\) là:", 
                a: ["\\( \\frac{1}{2}\\sin 2x + C \\)", "\\( -\\frac{1}{2}\\sin 2x + C \\)", "\\( 2\\sin 2x + C \\)", "\\( -2\\sin 2x + C \\)"], 
                correct: 0, 
                explain: "Sử dụng công thức \\( \\int \\cos(ax+b) dx = \\frac{1}{a}\\sin(ax+b) + C \\). Ta được \\( \\frac{1}{2}\\sin 2x + C \\)." 
            },
            { 
                q: "Câu 11: Tìm nguyên hàm của hàm số \\( f(x) = \\frac{1}{\\cos^2 x} \\).", 
                a: ["\\( \\int \\frac{1}{\\cos^2 x} dx = \\cot x + C \\)", "\\( \\int \\frac{1}{\\cos^2 x} dx = \\tan x + C \\)", "\\( \\int \\frac{1}{\\cos^2 x} dx = -\\tan x + C \\)", "\\( \\int \\frac{1}{\\cos^2 x} dx = -\\cot x + C \\)"], 
                correct: 1, 
                explain: "Đạo hàm của \\( \\tan x \\) là \\( \\frac{1}{\\cos^2 x} \\). Do đó nguyên hàm là \\( \\tan x + C \\)." 
            },
            { 
                q: "Câu 12: Tìm nguyên hàm của hàm số \\( f(x) = \\frac{1}{\\sin^2 x} \\).", 
                a: ["\\( \\int \\frac{1}{\\sin^2 x} dx = \\tan x + C \\)", "\\( \\int \\frac{1}{\\sin^2 x} dx = \\cot x + C \\)", "\\( \\int \\frac{1}{\\sin^2 x} dx = -\\cot x + C \\)", "\\( \\int \\frac{1}{\\sin^2 x} dx = -\\tan x + C \\)"], 
                correct: 2, 
                explain: "Đạo hàm của \\( \\cot x \\) là \\( -\\frac{1}{\\sin^2 x} \\). Do đó nguyên hàm là \\( -\\cot x + C \\)." 
            },
            { 
                q: "Câu 13: Họ nguyên hàm của hàm số \\( f(x) = 2\\sin x - 3\\cos x \\) là:", 
                a: ["\\( -2\\cos x - 3\\sin x + C \\)", "\\( -2\\cos x + 3\\sin x + C \\)", "\\( 2\\cos x - 3\\sin x + C \\)", "\\( 2\\cos x + 3\\sin x + C \\)"], 
                correct: 0, 
                explain: "\\( \\int (2\\sin x - 3\\cos x) dx = 2(-\\cos x) - 3(\\sin x) + C = -2\\cos x - 3\\sin x + C \\)." 
            },
            { 
                q: "Câu 14: Họ nguyên hàm của hàm số \\( f(x) = x - \\sin 2x \\) là:", 
                a: ["\\( \\frac{x^2}{2} - \\frac{1}{2}\\cos 2x + C \\)", "\\( \\frac{x^2}{2} + \\frac{1}{2}\\cos 2x + C \\)", "\\( 1 - 2\\cos 2x + C \\)", "\\( \\frac{x^2}{2} + \\cos 2x + C \\)"], 
                correct: 1, 
                explain: "\\( \\int (x - \\sin 2x) dx = \\frac{x^2}{2} - \\left(-\\frac{1}{2}\\cos 2x\\right) + C = \\frac{x^2}{2} + \\frac{1}{2}\\cos 2x + C \\)." 
            },
            { 
                q: "Câu 15: Họ nguyên hàm của hàm số \\( f(x) = \\cos^2 x \\) là:", 
                a: ["\\( \\frac{\\cos^3 x}{3} + C \\)", "\\( \\frac{x}{2} - \\frac{\\sin 2x}{4} + C \\)", "\\( \\frac{x}{2} + \\frac{\\sin 2x}{4} + C \\)", "\\( x + \\frac{\\sin 2x}{2} + C \\)"], 
                correct: 2, 
                explain: "Hạ bậc: \\( \\cos^2 x = \\frac{1 + \\cos 2x}{2} \\). Nguyên hàm: \\( \\int \\left(\\frac{1}{2} + \\frac{1}{2}\\cos 2x\\right) dx = \\frac{x}{2} + \\frac{\\sin 2x}{4} + C \\)." 
            },
            { 
                q: "Câu 16: Họ nguyên hàm của hàm số \\( f(x) = \\sin^2 x \\) là:", 
                a: ["\\( \\frac{x}{2} - \\frac{\\sin 2x}{4} + C \\)", "\\( \\frac{x}{2} + \\frac{\\sin 2x}{4} + C \\)", "\\( \\frac{\\sin^3 x}{3} + C \\)", "\\( x - \\frac{\\sin 2x}{2} + C \\)"], 
                correct: 0, 
                explain: "Hạ bậc: \\( \\sin^2 x = \\frac{1 - \\cos 2x}{2} \\). Nguyên hàm: \\( \\int \\left(\\frac{1}{2} - \\frac{1}{2}\\cos 2x\\right) dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C \\)." 
            },
            { 
                q: "Câu 17: Họ nguyên hàm của hàm số \\( f(x) = \\tan^2 x \\) là:", 
                a: ["\\( \\cot x - x + C \\)", "\\( \\tan x + x + C \\)", "\\( -\\tan x - x + C \\)", "\\( \\tan x - x + C \\)"], 
                correct: 3, 
                explain: "Ta có: \\( \\tan^2 x = \\frac{1}{\\cos^2 x} - 1 \\). Lấy nguyên hàm ta được: \\( \\tan x - x + C \\)." 
            },
            { 
                q: "Câu 18: Họ nguyên hàm của hàm số \\( f(x) = \\frac{\\sin^3 x + 1}{\\sin^2 x} \\) là:", 
                a: ["\\( -\\cos x + \\cot x + C \\)", "\\( -\\cos x - \\cot x + C \\)", "\\( \\cos x - \\cot x + C \\)", "\\( \\cos x + \\cot x + C \\)"], 
                correct: 1, 
                explain: "Biến đổi: \\( \\frac{\\sin^3 x + 1}{\\sin^2 x} = \\sin x + \\frac{1}{\\sin^2 x} \\). Lấy nguyên hàm ta được: \\( -\\cos x - \\cot x + C \\)." 
            },
            { 
                q: "Câu 19: Họ nguyên hàm của hàm số \\( f(x) = \\sin x \\cdot \\cos x \\) là:", 
                a: ["\\( -\\frac{1}{2}\\cos 2x + C \\)", "\\( \\frac{1}{4}\\cos 2x + C \\)", "\\( -\\frac{1}{4}\\cos 2x + C \\)", "\\( \\frac{1}{2}\\sin^2 x + C \\)"], 
                correct: 2, 
                explain: "Sử dụng công thức nhân đôi: \\( \\sin x \\cos x = \\frac{1}{2}\\sin 2x \\). Lấy nguyên hàm ta được: \\( -\\frac{1}{4}\\cos 2x + C \\)." 
            },
            { 
                q: "Câu 20: Tìm một nguyên hàm \\( F(x) \\) của hàm số \\( f(x) = 3x^2 + 2x \\) biết \\( F(1) = 3 \\).", 
                a: ["\\( F(x) = x^3 + x^2 + 1 \\)", "\\( F(x) = x^3 + x^2 + 3 \\)", "\\( F(x) = x^3 + x^2 - 1 \\)", "\\( F(x) = 3x^3 + 2x^2 - 2 \\)"], 
                correct: 0, 
                explain: "\\( F(x) = \\int (3x^2 + 2x) dx = x^3 + x^2 + C \\). Do \\( F(1) = 3 \\Rightarrow 1^3 + 1^2 + C = 3 \\Rightarrow C = 1 \\). Vậy \\( F(x) = x^3 + x^2 + 1 \\)." 
            }
        ];

        let timeRemaining = 20 * 60; // 20 phút
        let timerInterval;
        let userName = "";

        // --- HÀM LOAD LỊCH SỬ LÀM BÀI TỪ LOCAL STORAGE ---