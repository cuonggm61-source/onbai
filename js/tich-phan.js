const quizAudioSrc = "asset/angvan.mp3";
const quizInfoHTML = `<h1 style="color: #2c3e50;">CHUYÊN ĐỀ: TÍCH PHÂN CƠ BẢN </h1>
        <div style="text-align: left; max-width: 500px; margin: 0 auto; line-height: 1.6;">
            <p>📝 <strong>Số câu:</strong> 15 câu hỏi trắc nghiệm</p>
            <p>⏱️ <strong>Thời gian:</strong> 15 phút</p>
            <p>📚 <strong>Nội dung:</strong> Tính chất tích phân, tích phân hàm cơ bản</p>
        </div>
        <div style="margin-top: 18px; padding: 14px 20px; background: linear-gradient(135deg, #fff8e1, #fff3cd); border-radius: 16px; border-left: 5px solid #f39c12; display: flex; align-items: center; gap: 16px; max-width: 500px; margin-left: auto; margin-right: auto;">
            <img src="asset/colennn .jpg" alt="Cổ vũ" style="width: 140px; height: 140px; object-fit: cover; border-radius: 50%; border: 3px solid #f39c12; flex-shrink: 0;" />
            <div style="text-align: left;">
                <p style="margin: 0; font-size: 1.05em; font-weight: bold; color: #c0392b;">🌟 Cố lên, hành trình không còn dài!</p>
                <p style="margin: 6px 0 0; font-size: 0.92em; color: #7f4f24;">Anh tin em làm được :>> 💪✨</p>
            </div>
        </div>
        <div style="display:none">`;

const theoryHTML = `<h3>📖 LÝ THUYẾT: TÍCH PHÂN VÀ CÁC TÍNH CHẤT</h3>
<p><strong>1. Định nghĩa Tích phân:</strong></p>
<p>Nếu \\(F(x)\\) là một nguyên hàm của \\(f(x)\\) trên đoạn \\([a; b]\\) thì:</p>
<p style="text-align:center; font-size: 1.2em;">\\( \\int_a^b f(x) dx = F(x) \\big|_a^b = F(b) - F(a) \\)</p>
<p><strong>2. Các tính chất cơ bản:</strong></p>
<ul>
    <li>\\( \\int_a^a f(x) dx = 0 \\)</li>
    <li>\\( \\int_a^b f(x) dx = -\\int_b^a f(x) dx \\)</li>
    <li>\\( \\int_a^b k f(x) dx = k \\int_a^b f(x) dx \\)</li>
    <li>\\( \\int_a^b [f(x) \\pm g(x)] dx = \\int_a^b f(x) dx \\pm \\int_a^b g(x) dx \\)</li>
    <li>\\( \\int_a^b f(x) dx = \\int_a^c f(x) dx + \\int_c^b f(x) dx \\) (với \\(c \\in (a; b)\\))</li>
</ul>`;

// Link Google Apps Script
const scriptURL = "https://script.google.com/macros/s/AKfycbzHsdXCSB8_eIfFzqyA-PMjz77FezLBhsoI-KmJGD9GQOgSQsdZarL_7U8YGgVi0DW9gQ/exec";

const quizData = [
    {
        q: "Câu 1: Cho \\(\\int_{-1}^2 f(x)dx = 2\\), \\(\\int_{-1}^2 g(x)dx = -1\\). Khi đó \\(I = \\int_{-1}^2 [x + 2f(x) - 3g(x)]dx\\) bằng:",
        a: ["10", "\\(\\frac{21}{2}\\)", "\\(\\frac{19}{2}\\)", "\\(\\frac{17}{2}\\)"],
        correct: 3,
        explain: "Ta có: \\(I = \\int_{-1}^2 x dx + 2\\int_{-1}^2 f(x)dx - 3\\int_{-1}^2 g(x)dx = \\left(\\frac{x^2}{2}\\right)\\bigg|_{-1}^2 + 2(2) - 3(-1) = \\frac{3}{2} + 4 + 3 = \\frac{17}{2}\\)."
    },
    {
        q: "Câu 2: Biết \\(F(x) = x^3\\) là một nguyên hàm của hàm số \\(f(x)\\) trên \\(\\mathbb{R}\\). Giá trị của \\(\\int_1^2 [2 + f(x)]dx\\) bằng:",
        a: ["7", "9", "\\(\\frac{15}{4}\\)", "\\(\\frac{23}{4}\\)"],
        correct: 1,
        explain: "Ta có: \\(\\int_1^2 [2 + f(x)]dx = \\int_1^2 2dx + \\int_1^2 f(x)dx = 2x\\big|_1^2 + F(2) - F(1) = 2(2-1) + (2^3 - 1^3) = 2 + 7 = 9\\)."
    },
    {
        q: "Câu 3: Cho \\(\\int_1^2 f(t)dt = 2\\) và \\(\\int_1^2 g(x)dx = -1\\). Tính \\(I = \\int_1^2 [x + 2f(x) - 3g(x)]dx\\).",
        a: ["\\(\\frac{17}{2}\\)", "\\(\\frac{7}{2}\\)", "\\(\\frac{5}{2}\\)", "\\(\\frac{11}{2}\\)"],
        correct: 0,
        explain: "Ta có: \\(I = \\int_1^2 x dx + 2\\int_1^2 f(x)dx - 3\\int_1^2 g(x)dx = \\left(\\frac{x^2}{2}\\right)\\bigg|_1^2 + 2(2) - 3(-1) = \\frac{3}{2} + 4 + 3 = \\frac{17}{2}\\)."
    },
    {
        q: "Câu 4: Nếu \\(\\int_1^4 f(x)dx = -2\\) và \\(\\int_1^4 g(x)dx = -6\\) thì \\(\\int_1^4 [\\frac{1}{2}f(x) - g(x)]dx\\) bằng:",
        a: ["2", "-4", "5", "3"],
        correct: 2,
        explain: "Ta có: \\(\\int_1^4 [\\frac{1}{2}f(x) - g(x)]dx = \\frac{1}{2}\\int_1^4 f(x)dx - \\int_1^4 g(x)dx = \\frac{1}{2}(-2) - (-6) = -1 + 6 = 5\\)."
    },
    {
        q: "Câu 5: Giả sử \\(\\int_0^9 f(x)dx = 7\\) và \\(\\int_0^9 g(x)dx = 1\\). Khi đó \\(I = \\int_0^9 [2f(x) + 3g(x)]dx\\) bằng:",
        a: ["11", "17", "23", "8"],
        correct: 1,
        explain: "Ta có: \\(I = 2\\int_0^9 f(x)dx + 3\\int_0^9 g(x)dx = 2(7) + 3(1) = 14 + 3 = 17\\)."
    },
    {
        q: "Câu 6: Nếu \\(\\int_1^4 f(x)dx = -2\\) và \\(\\int_1^4 g(x)dx = -3\\). Khi đó \\(\\int_1^4 [f(x) - g(x)]dx\\) bằng:",
        a: ["5", "6", "1", "-1"],
        correct: 2,
        explain: "Ta có: \\(\\int_1^4 [f(x) - g(x)]dx = \\int_1^4 f(x)dx - \\int_1^4 g(x)dx = -2 - (-3) = 1\\)."
    },
    {
        q: "Câu 7: Cho hàm số \\(y = f(x)\\) liên tục trên đoạn \\([-6; 11]\\) và thỏa mãn \\(\\int_{-6}^{11} f(x)dx = 8\\), \\(\\int_{-6}^{2} f(x)dx = 3\\). Giá trị của biểu thức \\(P = \\int_2^{11} f(x)dx\\) bằng:",
        a: ["4", "11", "5", "2"],
        correct: 2,
        explain: "Ta có: \\(\\int_{-6}^{11} f(x)dx = \\int_{-6}^{2} f(x)dx + \\int_{2}^{11} f(x)dx \\Rightarrow 8 = 3 + P \\Rightarrow P = 5\\)."
    },
    {
        q: "Câu 8: Cho hàm số \\(f(x)\\) liên tục trên \\(\\mathbb{R}\\). Gọi \\(F(x)\\) là một nguyên hàm của \\(f(x)\\) trên \\(\\mathbb{R}\\) thỏa mãn \\(F(2) - F(0) = 5\\). Khi đó \\(\\int_0^2 3f(x)dx\\) bằng:",
        a: ["6", "15", "10", "5"],
        correct: 1,
        explain: "Ta có: \\(\\int_0^2 3f(x)dx = 3\\int_0^2 f(x)dx = 3(F(2) - F(0)) = 3(5) = 15\\)."
    },
    {
        q: "Câu 9: Cho hàm số \\(y = f(x)\\) liên tục trên \\(\\mathbb{R}\\) và \\(\\int_1^5 f(x)dx = 10\\), \\(\\int_3^5 f(x)dx = 1\\). Khi đó \\(\\int_1^3 f(x)dx\\) bằng:",
        a: ["9", "10", "11", "-9"],
        correct: 0,
        explain: "Ta có: \\(\\int_1^5 f(x)dx = \\int_1^3 f(x)dx + \\int_3^5 f(x)dx \\Rightarrow 10 = \\int_1^3 f(x)dx + 1 \\Rightarrow \\int_1^3 f(x)dx = 9\\)."
    },
    {
        q: "Câu 10: Nếu \\(\\int_0^1 f(x)dx = 6\\) thì \\(\\int_0^1 [2x + \\frac{1}{2}f(x)]dx\\) bằng:",
        a: ["4", "7", "3", "2"],
        correct: 0,
        explain: "Ta có: \\(\\int_0^1 [2x + \\frac{1}{2}f(x)]dx = \\int_0^1 2x dx + \\frac{1}{2}\\int_0^1 f(x)dx = x^2\\big|_0^1 + \\frac{1}{2}(6) = 1 + 3 = 4\\)."
    },
    {
        q: "Câu 11: Giá trị của \\(\\int_0^{\\pi/2} \\sin x dx\\) bằng:",
        a: ["-1", "\\(\\frac{\\pi}{2}\\)", "0", "1"],
        correct: 3,
        explain: "Ta có: \\(\\int_0^{\\pi/2} \\sin x dx = -\\cos x\\big|_0^{\\pi/2} = -(\\cos\\frac{\\pi}{2} - \\cos 0) = -(0 - 1) = 1\\)."
    },
    {
        q: "Câu 12: Kết quả tích phân \\(I = \\int_0^1 5^x dx\\) bằng:",
        a: ["\\(\\frac{4}{\\ln 5}\\)", "\\(4\\ln 5\\)", "\\(5\\ln 5\\)", "\\(\\frac{5}{\\ln 5}\\)"],
        correct: 0,
        explain: "Ta có: \\(I = \\int_0^1 5^x dx = \\left(\\frac{5^x}{\\ln 5}\\right)\\bigg|_0^1 = \\frac{5^1 - 5^0}{\\ln 5} = \\frac{4}{\\ln 5}\\)."
    },
    {
        q: "Câu 13: Tích phân \\(I = \\int_0^1 \\frac{1}{x+2} dx\\) bằng:",
        a: ["\\(-\\ln 3\\)", "\\(\\ln 3\\)", "\\(1 - \\ln 3\\)", "\\(\\ln 3 - \\ln 2\\)"],
        correct: 3,
        explain: "Ta có: \\(I = \\int_0^1 \\frac{1}{x+2} dx = \\ln|x+2|\\big|_0^1 = \\ln(1+2) - \\ln(0+2) = \\ln 3 - \\ln 2\\)."
    },
    {
        q: "Câu 14: Cho \\(\\int_0^{\\ln 2} [f(x) + e^x]dx = 2\\). Khi đó \\(\\int_0^{\\ln 2} f(x)dx\\) bằng:",
        a: ["3", "1", "2", "\\(\\frac{5}{2}\\)"],
        correct: 1,
        explain: "Ta có: \\(\\int_0^{\\ln 2} [f(x) + e^x]dx = \\int_0^{\\ln 2} f(x)dx + \\int_0^{\\ln 2} e^x dx = \\int_0^{\\ln 2} f(x)dx + e^x\\big|_0^{\\ln 2} = \\int_0^{\\ln 2} f(x)dx + (2 - 1) = 2 \\Rightarrow \\int_0^{\\ln 2} f(x)dx = 1\\)."
    },
    {
        q: "Câu 15: Cho \\(\\int_0^2 (3x^2 - 2x + m)dx = 6\\). Giá trị của tham số \\(m\\) thuộc khoảng nào sau đây?",
        a: ["\\((-1; 2)\\)", "\\((-\\infty; 0)\\)", "\\((0; 4)\\)", "\\((-3; -1)\\)"],
        correct: 2,
        explain: "Ta có: \\(\\int_0^2 (3x^2 - 2x + m)dx = (x^3 - x^2 + mx)\\big|_0^2 = (8 - 4 + 2m) - 0 = 4 + 2m\\). Theo đề bài, ta có \\(4 + 2m = 6 \\Leftrightarrow 2m = 2 \\Leftrightarrow m = 1\\). Vì vậy, \\(m = 1 \\in (0; 4)\\)."
    }
];

let timeRemaining = 15 * 60;
let timerInterval;
let userName = "";
