const quizAudioSrc = "asset/Close to You - YouTube.mp3";
const quizInfoHTML = `<h1 style="color: #2c3e50;">CHUYÊN ĐỀ: NGUYÊN HÀM CỦA HÀM SỐ MŨ</h1>
        <div style="text-align: left; max-width: 500px; margin: 0 auto; line-height: 1.6;">
            <p>📝 <strong>Số câu:</strong> 20 câu hỏi trắc nghiệm</p>
            <p>⏱️ <strong>Thời gian:</strong> 20 phút</p>
            <p>📚 <strong>Nội dung:</strong> Luyện tập các công thức nguyên hàm cơ bản và mở rộng của hàm số mũ.</p>
        </div>`;

const scriptURL = "https://script.google.com/macros/s/AKfycbzHsdXCSB8_eIfFzqyA-PMjz77FezLBhsoI-KmJGD9GQOgSQsdZarL_7U8YGgVi0DW9gQ/exec"; 
        
        // 20 CÂU HỎI VỀ NGUYÊN HÀM HÀM SỐ MŨ
        const quizData = [
            {
                q: ": Công thức nguyên hàm cơ bản của hàm số \\( f(x) = e^x \\) là:",
                a: ["\\( \\int e^x dx = e^x + C \\)", "\\( \\int e^x dx = \\frac{e^{x+1}}{x+1} + C \\)", "\\( \\int e^x dx = e^x \\ln e + C \\)", "\\( \\int e^x dx = \\frac{e^x}{\\ln x} + C \\)"],
                correct: 0,
                explain: "Đạo hàm của \\( e^x \\) là chính nó, do đó nguyên hàm của nó cũng là \\( e^x + C \\)."
            },
            {
                q: ": Công thức nguyên hàm cơ bản của hàm số \\( f(x) = a^x \\) (với \\( a > 0, a \\ne 1 \\)) là:",
                a: ["\\( \\int a^x dx = a^x + C \\)", "\\( \\int a^x dx = a^x \\ln a + C \\)", "\\( \\int a^x dx = \\frac{a^{x+1}}{x+1} + C \\)", "\\( \\int a^x dx = \\frac{a^x}{\\ln a} + C \\)"],
                correct: 3,
                explain: "Nguyên hàm của hàm số mũ cơ số \\( a \\) (khác e) thì phải chia cho logarit tự nhiên của cơ số đó."
            },
            {
                q: ": Một nguyên hàm của hàm số \\( f(x) = 2025^x \\) là:",
                a: ["\\( F(x) = x \\cdot 2025^{x-1} \\)", "\\( F(x) = 2025 \\cdot 2024^x \\)", "\\( F(x) = 2025^x \\ln 2025 \\)", "\\( F(x) = \\frac{2025^x}{\\ln 2025} \\)"],
                correct: 3,
                explain: "Áp dụng đúng công thức \\( \\int a^x dx = \\frac{a^x}{\\ln a} + C \\) với \\( a = 2025 \\)."
            },
            {
                q: ": Họ nguyên hàm của hàm số \\( f(x) = 1 + e^x \\) là:",
                a: ["\\( \\int f(x)dx = x + xe^{x-1} + C \\)", "\\( \\int f(x)dx = 1 + e^x + C \\)", "\\( \\int f(x)dx = x + e^x + C \\)", "\\( \\int f(x)dx = 1 + xe^{x-1} + C \\)"],
                correct: 2,
                explain: "\\( \\int (1 + e^x) dx = \\int 1 dx + \\int e^x dx = x + e^x + C \\)."
            },
            {
                q: ": Họ tất cả các nguyên hàm của hàm số \\( f(x) = 5^{2x-1} \\) là:",
                a: ["\\( \\frac{1}{2} \\cdot 5^{2x-1} \\ln 5 + C \\)", "\\( 2 \\cdot 5^{2x-1} \\ln 5 + C \\)", "\\( 5^{2x-1} \\ln 5 + C \\)", "\\( \\frac{1}{2 \\ln 5} \\cdot 5^{2x-1} + C \\)"],
                correct: 3,
                explain: "Áp dụng công thức nguyên hàm mở rộng: \\( \\int a^{kx+b} dx = \\frac{1}{k} \\cdot \\frac{a^{kx+b}}{\\ln a} + C \\) với \\( a=5, k=2 \\)."
            },
            {
                q: ": Tìm họ nguyên hàm của hàm số \\( f(x) = e^{-x} \\).",
                a: ["\\( e^{-x} + C \\)", "\\( -e^{-x} + C \\)", "\\( \\frac{e^{-x}}{\\ln(-1)} + C \\)", "\\( e^x + C \\)"],
                correct: 1,
                explain: "Sử dụng công thức \\( \\int e^{ax+b} dx = \\frac{1}{a} e^{ax+b} + C \\) với \\( a = -1 \\)."
            },
            {
                q: ": Hàm số nào dưới đây có họ tất cả các nguyên hàm là hàm số \\( F(x) = \\frac{a^x}{\\ln a} + C \\) (với \\( a > 0, a \\ne 1 \\))?",
                a: ["\\( f(x) = a^x \\)", "\\( f(x) = \\frac{1}{x} \\)", "\\( f(x) = \\ln x \\)", "\\( f(x) = x^a \\)"],
                correct: 0,
                explain: "Hàm số cần tìm chính là đạo hàm của \\( F(x) \\). Đạo hàm của \\( F(x) = \\frac{a^x}{\\ln a} + C \\) là \\( f(x) = a^x \\)."
            },
            {
                q: ": Họ nguyên hàm của hàm số \\( f(x) = 3^x + 2x \\) là:",
                a: ["\\( \\frac{3^x}{\\ln 3} + 2 + C \\)", "\\( \\frac{3^x}{\\ln 3} + x^2 + C \\)", "\\( 3^x \\ln 3 + 2 + C \\)", "\\( 3^x \\ln 3 + x^2 + C \\)"],
                correct: 1,
                explain: "Tính từng phần: \\( \\int 3^x dx = \\frac{3^x}{\\ln 3} \\) và \\( \\int 2x dx = x^2 \\)."
            },
            {
                q: ": Một nguyên hàm của hàm số \\( f(x) = e^{3x+1} - 2x^2 \\) là:",
                a: ["\\( \\frac{e^{3x+1} - 2x^3}{3} \\)", "\\( \\frac{e^{3x+1}}{3} - x^3 \\)", "\\( \\frac{e^{3x+1}}{3} - 2x^3 \\)", "\\( \\frac{e^{3x+1} - x^3}{3} \\)"],
                correct: 0,
                explain: "\\( \\int e^{3x+1} dx = \\frac{1}{3}e^{3x+1} \\) và \\( \\int 2x^2 dx = \\frac{2}{3}x^3 \\). Gộp chung mẫu số 3."
            },
            {
                q: ": Họ nguyên hàm của hàm số \\( f(x) = 4^x + \\cos 2x \\) là:",
                a: ["\\( \\frac{4^x}{\\ln 4} - \\frac{\\sin 2x}{2} + C \\)", "\\( 4^x \\ln 4 - \\frac{\\sin 2x}{2} + C \\)", "\\( 4^x \\ln 4 + \\frac{\\sin 2x}{2} + C \\)", "\\( \\frac{4^x}{\\ln 4} + \\frac{\\sin 2x}{2} + C \\)"],
                correct: 3,
                explain: "\\( \\int 4^x dx = \\frac{4^x}{\\ln 4} \\) và \\( \\int \\cos 2x dx = \\frac{\\sin 2x}{2} \\)."
            },
            {
                q: ": Họ nguyên hàm của hàm số \\( y = 2^x \\) là:",
                a: ["\\( \\frac{2^{x+1}}{x+1} + C \\)", "\\( 2^x \\ln 2 + C \\)", "\\( \\frac{2^x}{\\ln 2} + C \\)", "\\( 2^x + C \\)"],
                correct: 2,
                explain: "Áp dụng trực tiếp định lý cơ bản \\( \\int a^x dx = \\frac{a^x}{\\ln a} + C \\)."
            },
            {
                q: ": Họ nguyên hàm của hàm số \\( y = \\frac{1}{3^x} \\) là:",
                a: ["\\( -\\frac{1}{3^x \\ln 3} + C \\)", "\\( \\frac{1}{3^x \\ln 3} + C \\)", "\\( -\\frac{3^x}{\\ln 3} + C \\)", "\\( \\frac{3^{-x}}{\\ln(-3)} + C \\)"],
                correct: 0,
                explain: "Viết lại \\( y = 3^{-x} \\). Khi đó \\( \\int 3^{-x} dx = \\frac{3^{-x}}{-1 \\cdot \\ln 3} + C = -\\frac{1}{3^x \\ln 3} + C \\)."
            },
            {
                q: ": Kết quả của \\( \\int (x + e^{2020x}) dx \\) bằng:",
                a: ["\\( x^2 + \\frac{e^{2020x}}{2020} + C \\)", "\\( x^3 + \\frac{e^{2020x}}{2020} + C \\)", "\\( \\frac{x^2}{2} + \\frac{e^{2020x}}{2020} + C \\)", "\\( x + \\frac{e^{2020x}}{2020} + C \\)"],
                correct: 2,
                explain: "\\( \\int x dx = \\frac{x^2}{2} \\) và \\( \\int e^{2020x} dx = \\frac{e^{2020x}}{2020} \\)."
            },
            {
                q: ": Họ nguyên hàm của hàm số \\( y = \\frac{1}{e^x} \\) là:",
                a: ["\\( \\frac{1}{e^x} + C \\)", "\\( \\ln(e^x) + C \\)", "\\( -\\frac{1}{e^x} + C \\)", "\\( e^x + C \\)"],
                correct: 2,
                explain: "Chuyển biểu thức về dạng lũy thừa số mũ âm: \\( e^{-x} \\). Khi đó \\( \\int e^{-x} dx = -e^{-x} + C = -\\frac{1}{e^x} + C \\)."
            },
            {
                q: ": Khẳng định nào sau đây đúng đối với hàm số \\( f(x) = 2^x + 3 \\)?",
                a: ["\\( \\int f(x) dx = 2^{x-3} + C \\)", "\\( \\int f(x) dx = 2^x \\ln 2 + 3x + C \\)", "\\( \\int f(x) dx = \\frac{2^x}{\\ln 2} + 3 + C \\)", "\\( \\int f(x) dx = \\frac{2^x}{\\ln 2} + 3x + C \\)"],
                correct: 3,
                explain: "\\( \\int 2^x dx = \\frac{2^x}{\\ln 2} \\) và \\( \\int 3 dx = 3x \\)."
            },
            {
                q: ": Tìm họ nguyên hàm của hàm số \\( f(x) = 5^x + 1 \\).",
                a: ["\\( \\frac{5^x}{\\ln 5} + 1 + C \\)", "\\( \\frac{5^x}{\\ln 5} + x + C \\)", "\\( 5^x \\ln 5 + x + C \\)", "\\( \\frac{5^{x+1}}{x+1} + x + C \\)"],
                correct: 1,
                explain: "Áp dụng đúng \\( \\int 5^x dx \\) và nhớ rằng \\( \\int 1 dx = x + C \\)."
            },
            {
                q: ": Tìm họ nguyên hàm của hàm số \\( y = 2e^x - 5^x \\).",
                a: ["\\( 2e^x - 5^x \\ln 5 + C \\)", "\\( 2e^x - \\frac{5^x}{\\ln 5} + C \\)", "\\( e^{2x} - \\frac{5^x}{\\ln 5} + C \\)", "\\( 2e^x + \\frac{5^x}{\\ln 5} + C \\)"],
                correct: 1,
                explain: "Hằng số nhân với hàm số được giữ nguyên khi lấy nguyên hàm. Áp dụng công thức cho \\( e^x \\) và \\( a^x \\)."
            },
            {
                q: ": Rút gọn rồi tìm họ nguyên hàm của hàm số \\( y = \\frac{e^{3x}+1}{e^x+1} \\).",
                a: ["\\( \\frac{1}{2}e^{2x} - e^x + x + C \\)", "\\( e^{2x} - e^x + x + C \\)", "\\( \\frac{1}{2}e^{2x} + e^x + x + C \\)", "\\( \\frac{1}{3}e^{3x} - e^x + x + C \\)"],
                correct: 0,
                explain: "Dùng hằng đẳng thức \\( a^3+b^3 = (a+b)(a^2-ab+b^2) \\). Ta có \\( \\frac{e^{3x}+1}{e^x+1} = e^{2x}-e^x+1 \\). Lấy nguyên hàm ra kết quả này."
            },
            {
                q: ": Mở rộng công thức cơ bản, nguyên hàm của hàm số \\( f(x) = e^{ax+b} \\) (với \\( a \\ne 0 \\)) là:",
                a: ["\\( \\int e^{ax+b} dx = e^{ax+b} + C \\)", "\\( \\int e^{ax+b} dx = a e^{ax+b} + C \\)", "\\( \\int e^{ax+b} dx = \\frac{1}{a} e^{ax+b} + C \\)", "\\( \\int e^{ax+b} dx = \\frac{e^{ax+b}}{b} + C \\)"],
                correct: 2,
                explain: "Khi bậc của số mũ là một nhị thức bậc nhất \\( ax+b \\), ta cần nhân thêm hệ số \\( \\frac{1}{a} \\) bên ngoài."
            },
            {
                q: ": Tìm họ nguyên hàm của hàm số \\( f(x) = 8^x \\cdot 9^x \\).",
                a: ["\\( \\frac{8^x}{\\ln 8} \\cdot \\frac{9^x}{\\ln 9} + C \\)", "\\( \\frac{72^x}{\\ln 72} + C \\)", "\\( 72^x \\ln 72 + C \\)", "\\( \\frac{17^x}{\\ln 17} + C \\)"],
                correct: 1,
                explain: "Gộp cơ số lại trước bằng công thức \\( a^x \\cdot b^x = (ab)^x \\). Gộp \\( 8^x \\cdot 9^x = (8 \\cdot 9)^x = 72^x \\). Từ đó áp dụng công thức nguyên hàm cơ bản."
            }
        ];

        let timeRemaining = 20 * 60;
        let timerInterval;
        let userName = "";