const quizAudioSrc = "";
const quizInfoHTML = `<h1 style="color: #2c3e50;">ÔN TẬP CHƯƠNG 6 – XÁC SUẤT CÓ ĐIỀU KIỆN</h1>
        <div style="text-align: left; max-width: 500px; margin: 0 auto; line-height: 1.6;">
            <p>📝 <strong>Số câu:</strong> 28 câu hỏi trắc nghiệm</p>
            <p>⏱️ <strong>Thời gian:</strong> 50 phút</p>
            <p>📚 <strong>Nội dung:</strong> Đề 1 đầy đủ – xác suất có điều kiện, công thức toàn phần, Bayes, đúng/sai và trả lời ngắn</p>
        </div>
        <div style="margin-top: 18px; padding: 14px 20px; background: linear-gradient(135deg, #fff8e1, #fff3cd); border-radius: 16px; border-left: 5px solid #e74c3c; display: flex; align-items: center; gap: 16px; max-width: 500px; margin-left: auto; margin-right: auto;">
            <img src="asset/troll.png" alt="Cổ vũ" style="width: 140px; height: 140px; object-fit: cover; border-radius: 50%; border: 3px solid #e74c3c; flex-shrink: 0;" />
            <div style="text-align: left;">
                <p style="margin: 0; font-size: 1.05em; font-weight: bold; color: #c0392b;">🌟 Đề 1 đầy đủ – sát đề kiểm tra thật nhất!</p>
                <p style="margin: 6px 0 0; font-size: 0.92em; color: #7f4f24;">Tập trung làm hết sức là em sẽ làm được 💪✨</p>
            </div>
        </div>
        <div style="display:none">`;

const theoryHTML = `<h3>📖 LÝ THUYẾT: XÁC SUẤT CÓ ĐIỀU KIỆN, TOÀN PHẦN VÀ BAYES</h3>
<p><strong>1. Xác suất có điều kiện:</strong></p>
<p>Xác suất xảy ra biến cố \\(A\\) khi biết biến cố \\(B\\) đã xảy ra \\((P(B) > 0)\\):</p>
<p style="text-align:center; font-size: 1.2em;">\\( P(A|B) = \\dfrac{P(AB)}{P(B)} \\)</p>
<p><strong>2. Công thức nhân xác suất:</strong></p>
<p style="text-align:center; font-size: 1.1em;">\\( P(AB) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B) \\)</p>
<p><strong>3. Công thức Xác suất Toàn phần:</strong></p>
<p>Nếu \\(\\{B, \\overline{B}\\}\\) là hệ đầy đủ:</p>
<p style="text-align:center; font-size: 1.1em;">\\( P(A) = P(B) \\cdot P(A|B) + P(\\overline{B}) \\cdot P(A|\\overline{B}) \\)</p>
<p><strong>4. Công thức Bayes:</strong></p>
<p style="text-align:center; font-size: 1.1em;">\\( P(B|A) = \\dfrac{P(B) \\cdot P(A|B)}{P(A)} \\)</p>
<p><strong>5. Hai biến cố độc lập:</strong></p>
<p>A và B độc lập khi: \\(P(AB) = P(A) \\cdot P(B)\\), suy ra \\(P(A|B) = P(A)\\) và \\(P(B|A) = P(B)\\).</p>`;

// Link Google Apps Script
const scriptURL = "https://script.google.com/macros/s/AKfycbzHsdXCSB8_eIfFzqyA-PMjz77FezLBhsoI-KmJGD9GQOgSQsdZarL_7U8YGgVi0DW9gQ/exec";

const quizData = [
    // =========================================================
    // PHẦN 1 – TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (12 CÂU)
    // =========================================================
    {
        q: "Câu 1. Cho hai biến cố \\(A\\) và \\(B\\) bất kì với \\(P(B) > 0\\). Khẳng định nào dưới đây <strong>đúng</strong>?",
        a: [
            "\\(P(A|B) = \\dfrac{P(AB)}{P(B)}\\)",
            "\\(P(A|B) = \\dfrac{P(A)}{P(AB)}\\)",
            "\\(P(A|B) = \\dfrac{P(B)}{P(AB)}\\)",
            "\\(P(A|B) = \\dfrac{P(AB)}{P(A)}\\)"
        ],
        correct: 0,
        explain: "Theo định nghĩa xác suất có điều kiện: \\(P(A|B) = \\dfrac{P(AB)}{P(B)}\\)."
    },
    {
        q: "Câu 2. Cho hai biến cố \\(A\\) và \\(B\\). Chọn mệnh đề <strong>đúng</strong>?",
        a: [
            "\\(P(AB) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)\\)",
            "\\(P(A|B) = P(A|\\overline{B})\\)",
            "\\(P(B) = P(B|A)\\)",
            "\\(P(AB) = P(A) + P(B)\\)"
        ],
        correct: 0,
        explain: "Theo công thức nhân xác suất: \\(P(AB) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)\\)."
    },
    {
        q: "Câu 3. Cho hai biến cố \\(A\\) và \\(B\\). Công thức tính <strong>xác suất toàn phần</strong> là",
        a: [
            "\\(P(A) = P(B) \\cdot P(A|B) + P(\\overline{B}) \\cdot P(A|\\overline{B})\\)",
            "\\(P(B) = P(A) \\cdot P(A|B) + P(A) \\cdot P(A|\\overline{B})\\)",
            "\\(P(A) = P(B) \\cdot P(A|B)\\)",
            "\\(P(A) = P(B) + P(A|B)\\)"
        ],
        correct: 0,
        explain: "Công thức xác suất toàn phần (hệ đầy đủ \\(\\{B, \\overline{B}\\}\\)): \\(P(A) = P(B) \\cdot P(A|B) + P(\\overline{B}) \\cdot P(A|\\overline{B})\\)."
    },
    {
        q: "Câu 4. Cho hai biến cố \\(A\\) và \\(B\\) với \\(P(A) > 0, P(B) > 0\\). Công thức <strong>Bayes</strong> là",
        a: [
            "\\(P(B|A) = \\dfrac{P(B) \\cdot P(A|B)}{P(A)}\\)",
            "\\(P(B|A) = \\dfrac{P(A) \\cdot P(A|B)}{P(B)}\\)",
            "\\(P(B|A) = \\dfrac{P(B) \\cdot P(B|A)}{P(A)}\\)",
            "\\(P(B|A) = \\dfrac{P(A) \\cdot P(B|A)}{P(B)}\\)"
        ],
        correct: 0,
        explain: "Công thức Bayes: \\(P(B|A) = \\dfrac{P(B) \\cdot P(A|B)}{P(A)}\\)."
    },
    {
        q: "Câu 5. Cho hai biến cố \\(A, B\\) với \\(P(B) = 0{,}8\\) và \\(P(AB) = 0{,}1\\). Kết quả của \\(P(A|B)\\) bằng",
        a: ["\\(\\dfrac{1}{8}\\)", "\\(\\dfrac{3}{7}\\)", "\\(\\dfrac{3}{5}\\)", "\\(\\dfrac{1}{6}\\)"],
        correct: 0,
        explain: "Ta có: \\(P(A|B) = \\dfrac{P(AB)}{P(B)} = \\dfrac{0{,}1}{0{,}8} = \\dfrac{1}{8}\\)."
    },
    {
        q: "Câu 6. Cho hai biến cố \\(A, B\\) với \\(P(A) = \\dfrac{7}{15}\\) và \\(P(AB) = \\dfrac{23}{145}\\). Kết quả của \\(P(B|A)\\) bằng",
        a: ["\\(\\dfrac{69}{203}\\)", "\\(\\dfrac{19}{135}\\)", "\\(\\dfrac{9}{23}\\)", "\\(\\dfrac{41}{105}\\)"],
        correct: 0,
        explain: "Ta có: \\(P(B|A) = \\dfrac{P(AB)}{P(A)} = \\dfrac{23}{145} \\div \\dfrac{7}{15} = \\dfrac{23 \\times 15}{145 \\times 7} = \\dfrac{345}{1015} = \\dfrac{69}{203}\\)."
    },
    {
        q: "Câu 7. Một trường THPT có 600 học sinh (245 nam, 355 nữ). Học kỳ I có 170 học sinh giỏi, trong đó có 80 học sinh nam. Chọn ngẫu nhiên 1 học sinh. Xác suất học sinh đó <strong>đạt danh hiệu giỏi biết học sinh đó là nam</strong> là",
        a: ["\\(\\dfrac{16}{49}\\)", "\\(\\dfrac{5}{19}\\)", "\\(\\dfrac{12}{31}\\)", "\\(\\dfrac{11}{45}\\)"],
        correct: 0,
        explain: "Gọi A: học sinh giỏi, B: học sinh nam. \\(P(AB) = \\dfrac{80}{600} = \\dfrac{2}{15}\\), \\(P(B) = \\dfrac{245}{600} = \\dfrac{49}{120}\\). Vậy \\(P(A|B) = \\dfrac{2/15}{49/120} = \\dfrac{2}{15} \\times \\dfrac{120}{49} = \\dfrac{16}{49}\\)."
    },
    {
        q: "Câu 8. Hộp có 10 viên bi vàng và 6 viên bi đỏ. Phong lấy ngẫu nhiên 1 viên (không trả lại). Sau đó Trung lấy 1 viên trong 15 viên còn lại. Tính xác suất để <strong>Phong lấy được bi đỏ và Trung lấy được bi vàng</strong>.",
        a: ["\\(\\dfrac{1}{4}\\)", "\\(\\dfrac{3}{17}\\)", "\\(\\dfrac{1}{2}\\)", "\\(\\dfrac{2}{5}\\)"],
        correct: 0,
        explain: "Gọi A: Phong lấy bi đỏ → \\(P(A) = \\dfrac{6}{16} = \\dfrac{3}{8}\\). Nếu A xảy ra, hộp còn 15 viên có 10 bi vàng → \\(P(B|A) = \\dfrac{10}{15} = \\dfrac{2}{3}\\). Vậy \\(P(AB) = \\dfrac{3}{8} \\times \\dfrac{2}{3} = \\dfrac{1}{4}\\)."
    },
    {
        q: "Câu 9. Nhóm 20 học sinh: 12 thích Toán, 10 thích Văn, 2 không thích cả hai. Chọn ngẫu nhiên 1 học sinh. Xác suất học sinh đó thích Toán <strong>biết học sinh đó thích Văn</strong> là",
        a: ["\\(\\dfrac{2}{5}\\)", "\\(\\dfrac{1}{5}\\)", "\\(\\dfrac{3}{10}\\)", "\\(\\dfrac{3}{5}\\)"],
        correct: 0,
        explain: "Thích ít nhất một môn: \\(20 - 2 = 18\\). Thích cả hai: \\(12 + 10 - 18 = 4\\). \\(P(AB) = \\dfrac{4}{20} = \\dfrac{1}{5}\\), \\(P(B) = \\dfrac{10}{20} = \\dfrac{1}{2}\\). Vậy \\(P(A|B) = \\dfrac{1/5}{1/2} = \\dfrac{2}{5}\\)."
    },
    {
        q: "Câu 10. Hộp có 6 bi xanh, còn lại là bi đỏ. Minh lấy không hoàn lại 2 lần liên tiếp ngẫu nhiên mỗi lần 1 viên. Biết xác suất cả 2 lần đều được bi xanh là \\(\\dfrac{5}{7}\\). Hỏi ban đầu có bao nhiêu bi đỏ?",
        a: ["1", "2", "3", "4"],
        correct: 0,
        explain: "Gọi n là tổng số bi. \\(\\dfrac{6}{n} \\times \\dfrac{5}{n-1} = \\dfrac{5}{7}\\) → \\(n(n-1) = 42\\) → \\(n = 7\\). Số bi đỏ = \\(7 - 6 = 1\\)."
    },
    {
        q: "Câu 11. Tuấn ăn sáng bằng xôi hoặc bún. Nếu hôm nay ăn xôi, xác suất hôm sau ăn bún là \\(0{,}7\\). Thứ Ba Tuấn ăn xôi. Xác suất thứ Năm Tuấn ăn bún là \\(0{,}63\\). Hỏi nếu hôm nay ăn bún thì xác suất hôm sau ăn xôi là",
        a: ["0,4", "0,1", "0,2", "0,3"],
        correct: 0,
        explain: "Gọi x là xác xuất hôm nay ăn bún thì hôm sau ăn xôi. P(thứ Tư ăn bún) = 0,7; P(thứ Tư ăn xôi) = 0,3. Theo XSTP: \\(0,63 = 0,7 \\times (1-x) + 0,3 \\times 0,7\\) → \\(0,7(1-x) = 0,42\\) → \\(x = 0,4\\)."
    },
    {
        q: "Câu 12. Tỉ lệ mắc bệnh là \\(0{,}1\\%\\). Xét nghiệm dương tính đúng (có bệnh): 95%, dương tính giả (không bệnh): 8%. Khả năng mắc bệnh khi xét nghiệm dương tính là \\(a\\%\\). Giá trị \\(a\\) gần số nào nhất?",
        a: ["1,17", "1,07", "1,12", "1,22"],
        correct: 0,
        explain: "\\(P(A) = 0{,}001\\); \\(P(\\overline{A}) = 0{,}999\\); \\(P(B|A) = 0{,}95\\); \\(P(B|\\overline{A}) = 0{,}08\\). Theo Bayes: \\(P(A|B) = \\dfrac{0{,}001 \\times 0{,}95}{0{,}001 \\times 0{,}95 + 0{,}999 \\times 0{,}08} \\approx 1{,}17\\%\\)."
    },

    // =========================================================
    // PHẦN 2 – ĐÚNG / SAI (GHI RÕ ĐỂ NGƯỜI HỌC PHÂN BIỆT)
    // Mỗi ý a/b/c/d được đặt thành 1 câu riêng dạng "Đúng/Sai"
    // =========================================================
    {
        q: "Câu 13 (Đúng/Sai). Cho \\(A\\) và \\(B\\) là hai biến cố <strong>độc lập</strong> với \\(P(A) = 0{,}4\\) và \\(P(B) = 0{,}7\\). Khẳng định: <em>\"\\(P(\\overline{A}) = 0{,}6\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 0,
        explain: "Vì \\(P(A) = 0{,}4\\) nên \\(P(\\overline{A}) = 1 - P(A) = 1 - 0{,}4 = 0{,}6\\). → Đúng."
    },
    {
        q: "Câu 14 (Đúng/Sai). Cho \\(A\\) và \\(B\\) là hai biến cố <strong>độc lập</strong> với \\(P(A) = 0{,}4\\) và \\(P(B) = 0{,}7\\). Khẳng định: <em>\"\\(P(A\\overline{B}) = 0{,}4\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 1,
        explain: "A và B độc lập nên \\(\\overline{B}\\) và A cũng độc lập. \\(P(\\overline{B}) = 0{,}3\\). Vậy \\(P(A\\overline{B}) = P(A) \\cdot P(\\overline{B}) = 0{,}4 \\times 0{,}3 = 0{,}12 \\neq 0{,}4\\). → Sai."
    },
    {
        q: "Câu 15 (Đúng/Sai). Cho \\(A\\) và \\(B\\) là hai biến cố <strong>độc lập</strong> với \\(P(A) = 0{,}4\\) và \\(P(B) = 0{,}7\\). Khẳng định: <em>\"\\(P(\\overline{A}B) = P(\\overline{A}) = 0{,}6\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 1,
        explain: "\\(\\overline{B}\\) và \\(\\overline{A}\\) cũng độc lập. Do đó \\(P(\\overline{A}\\overline{B}) = P(\\overline{A}) \\cdot P(\\overline{B}) = 0{,}6 \\times 0{,}3 = 0{,}18 \\). Nhưng đề hỏi \\(P(\\overline{A}B)\\) (B không gạch). Theo SGK: \\(\\overline{A}\\) và \\(B\\) độc lập → \\(P(\\overline{A}B) = P(\\overline{A}) \\cdot P(B) = 0{,}6 \\times 0{,}7 = 0{,}42 \\neq 0{,}4\\). → Sai. Riêng ý c trong đề gốc hỏi \\(P(\\overline{A}B) = P(\\overline{A})\\) là Đúng vì \\(P(\\overline{A}B) = P(\\overline{A}) \\cdot P(B) = 0{,}6 \\times 0{,}7 = 0{,}42\\), nhưng không bằng \\(P(\\overline{A})\\). <br><em>Lưu ý: Trong đề gốc ý c đúng là: A và B độc lập thì \\(\\overline{B}\\) và A cũng độc lập, do đó \\(P(\\overline{A}B) = P(\\overline{A}) \\cdot P(B) = 0{,}6 \\times 0{,}7 = 0{,}42 \\neq 0{,}4\\).</em>"
    },
    {
        q: "Câu 16 (Đúng/Sai). Hộp có 10 bi xanh và 8 bi đen. Nam lấy ngẫu nhiên 1 viên (không trả lại), sau đó Lan lấy ngẫu nhiên 1 viên. Gọi A: Nam lấy bi xanh; B: Lan lấy bi đen. Khẳng định: <em>\"\\(n(A) = 10\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 0,
        explain: "Hộp có 10 bi xanh nên số phần tử của biến cố A (Nam lấy được bi xanh) là \\(n(A) = 10\\). → Đúng."
    },
    {
        q: "Câu 17 (Đúng/Sai). (Tiếp câu 16) Khẳng định: <em>\"\\(P(A) = \\dfrac{5}{9}\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 0,
        explain: "Tổng: 18 viên bi. \\(P(A) = \\dfrac{10}{18} = \\dfrac{5}{9}\\). → Đúng."
    },
    {
        q: "Câu 18 (Đúng/Sai). (Tiếp câu 16) Khẳng định: <em>\"\\(P(B|A) = \\dfrac{4}{9}\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 1,
        explain: "Nếu A xảy ra, hộp còn 17 viên bi với 8 bi đen. \\(P(B|A) = \\dfrac{8}{17} \\neq \\dfrac{4}{9}\\). → Sai."
    },
    {
        q: "Câu 19 (Đúng/Sai). (Tiếp câu 16) Khẳng định: <em>\"\\(P(AB) \\approx 0{,}3\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 1,
        explain: "\\(P(AB) = P(A) \\cdot P(B|A) = \\dfrac{5}{9} \\times \\dfrac{8}{17} = \\dfrac{40}{153} \\approx 0{,}261\\). Không bằng 0,3 nhưng câu gốc kết quả là \\(\\dfrac{40}{153}\\). → Sai (đáp án đề gốc là Sai)."
    },
    {
        q: "Câu 20 (Đúng/Sai). Cửa hàng có 65% bóng trắng và 35% bóng đỏ. Tỉ lệ hỏng: trắng 2%, đỏ 3%. Xét A: chọn bóng trắng; B: chọn bóng không hỏng. Khẳng định: <em>\"\\(P(A) = 0{,}65\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 0,
        explain: "Theo bài: 65% bóng là màu trắng, nên \\(P(A) = 0{,}65\\). → Đúng."
    },
    {
        q: "Câu 21 (Đúng/Sai). (Tiếp câu 20) Khẳng định: <em>\"\\(P(B|A) = 0{,}02\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 1,
        explain: "Tỉ lệ hỏng của bóng trắng là 2%, nên \\(P(\\overline{B}|A) = 0{,}02\\). Vậy \\(P(B|A) = 1 - 0{,}02 = 0{,}98 \\neq 0{,}02\\). → Sai."
    },
    {
        q: "Câu 22 (Đúng/Sai). (Tiếp câu 20) Khẳng định: <em>\"\\(P(B) = 0{,}9765\\)\"</em> là",
        a: ["Đúng", "Sai"],
        correct: 0,
        explain: "Theo XSTP: \\(P(B) = 0{,}65 \\times 0{,}98 + 0{,}35 \\times 0{,}97 = 0{,}637 + 0{,}3395 = 0{,}9765\\). → Đúng."
    },

    // =========================================================
    // PHẦN 3 – TRẢ LỜI NGẮN (6 CÂU TỰ ĐIỀN)
    // =========================================================
    {
        type: 'short',
        q: "Câu 23. Cho \\(P(A) = 0{,}21\\); \\(P(B) = 0{,}52\\); \\(P(B|A) = 0{,}6\\). Khi đó \\(P(A|B) = \\dfrac{a}{b}\\) với \\(\\dfrac{a}{b}\\) tối giản. Giá trị \\(D = a + b\\) bằng bao nhiêu?",
        correct_answer: "323",
        explain: "\\(P(AB) = P(A) \\cdot P(B|A) = 0{,}21 \\times 0{,}6 = 0{,}126\\). \\(P(A|B) = \\dfrac{P(AB)}{P(B)} = \\dfrac{0{,}126}{0{,}52} = \\dfrac{63}{260}\\). \\(a = 63\\), \\(b = 260\\) \\(\\Rightarrow D = 63 + 260 = 323\\)."
    },
    {
        type: 'short',
        q: "Câu 24. Hộp có 20 bi trắng và 10 bi đen. Bình lấy ngẫu nhiên 1 viên (không trả lại), sau đó An lấy 1 viên. Gọi A: An lấy bi trắng; B: Bình lấy bi đen. Khi đó \\(P(A|B) = \\dfrac{a}{b}\\) tối giản. Giá trị \\(C = a - b\\) bằng bao nhiêu?",
        correct_answer: "-9",
        explain: "Nếu B xảy ra (Bình lấy bi đen), hộp còn 29 viên với 20 bi trắng \\(\\Rightarrow P(A|B) = \\dfrac{20}{29}\\). \\(a = 20\\), \\(b = 29\\) \\(\\Rightarrow C = 20 - 29 = -9\\)."
    },
    {
        type: 'short',
        q: "Câu 25. Lớp 11A1 có 20% học sinh tham gia CLB Tiếng Anh, trong đó 85% có chứng chỉ IELTS ≥ 5.5. Ngoài CLB, 10% học sinh cũng có IELTS ≥ 5.5. Xác suất chọn được học sinh có IELTS ≥ 5.5 bằng bao nhiêu? <em>(Ghi dạng số thập phân, dùng dấu phẩy, vd: 0,25)</em>",
        correct_answer: "0,25",
        explain: "Gọi A: học sinh thuộc CLB; B: có IELTS ≥ 5.5. \\(P(A) = 0{,}2\\), \\(P(\\overline{A}) = 0{,}8\\), \\(P(B|A) = 0{,}85\\), \\(P(B|\\overline{A}) = 0{,}1\\). Theo XSTP: \\(P(B) = 0{,}2 \\times 0{,}85 + 0{,}8 \\times 0{,}1 = 0{,}17 + 0{,}08 = 0{,}25\\)."
    },
    {
        type: 'short',
        q: "Câu 26. Kho có 85% sản phẩm loại I (99% tốt) và 15% loại II (96% tốt). Một khách hàng chọn ngẫu nhiên 1 sản phẩm. Tính xác suất <strong>chọn được sản phẩm loại I biết sản phẩm đó tốt</strong> (làm tròn đến 2 chữ số thập phân, dùng dấu phẩy).",
        correct_answer: "0,85",
        explain: "\\(P(B) = 0{,}85 \\times 0{,}99 + 0{,}15 \\times 0{,}96 = 0{,}9855\\). Theo Bayes: \\(P(A|B) = \\dfrac{0{,}85 \\times 0{,}99}{0{,}9855} \\approx 0{,}854 \\approx 0{,}85\\)."
    },
    {
        type: 'short',
        q: "Câu 27. Trường X có 60% học sinh chọn tổ hợp D00 (Toán-Văn-Ngoại ngữ). Nếu chọn D00, xác suất đỗ đại học là 0,7; nếu không chọn D00, xác suất đỗ là 0,5. Chọn ngẫu nhiên 1 học sinh đã <strong>đỗ đại học</strong>. Tính xác suất học sinh đó chọn D00 (làm tròn đến 2 chữ số thập phân, dùng dấu phẩy).",
        correct_answer: "0,68",
        explain: "Gọi A: chọn D00; B: đỗ ĐH. \\(P(B) = 0{,}6 \\times 0{,}7 + 0{,}4 \\times 0{,}5 = 0{,}62\\). Theo Bayes: \\(P(A|B) = \\dfrac{0{,}6 \\times 0{,}7}{0{,}62} = \\dfrac{0{,}42}{0{,}62} \\approx 0{,}68\\)."
    },
    {
        type: 'short',
        q: "Câu 28. Cuộc thi có 36 bộ câu hỏi (16 tự nhiên, 20 xã hội). Hạnh lấy ngẫu nhiên 1 bộ (không hoàn lại), sau đó Phúc lấy 1 bộ. Xác suất Phúc lấy được bộ câu hỏi <strong>tự nhiên</strong> bằng \\(\\dfrac{a}{b}\\) tối giản. Giá trị \\(100a - 99b\\) bằng bao nhiêu?",
        correct_answer: "-491",
        explain: "Gọi A: Hạnh lấy xã hội \\((P(A) = 5/9)\\). \\(P(B|A) = 16/35\\), \\(P(B|\\overline{A}) = 15/35\\). Theo XSTP: \\(P(B) = \\dfrac{4}{9}\\). \\(a=4, b=9\\) \\(\\Rightarrow 100 \\times 4 - 99 \\times 9 = 400 - 891 = -491\\)."
    }
];

let timeRemaining = 50 * 60;
let timerInterval;
let userName = "";
