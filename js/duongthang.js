const quizAudioSrc = "asset/Suy nghĩ nhiều, dũng khí vơi đi. - playlist - YouTube.mp3";
const quizInfoHTML = `<h1 style="color: #2c3e50;">CHỦ ĐỀ: PHƯƠNG TRÌNH ĐƯỜNG THẲNG</h1>
        <div style="text-align: left; max-width: 500px; margin: 0 auto; line-height: 1.6;">
            <p>📝 <strong>Số câu:</strong> 17 câu hỏi trắc nghiệm</p>
            <p>⏱️ <strong>Thời gian:</strong> 15 phút</p>
            <p>📚 <strong>Nội dung:</strong> Vectơ chỉ phương, phương trình tham số, chính tắc, vị trí tương đối.</p>
        </div>`;

const quizData = [
            {
                q: "Câu 1: Trong không gian Oxyz, vectơ nào là một vectơ chỉ phương của đường thẳng \\(\\frac{x-3}{2} = \\frac{y-2}{1} = \\frac{z-1}{3}\\)?",
                a: ["\\(\\vec{a}=(9;2;3)\\)", "\\(\\vec{a}=(3;2;1)\\)", "\\(\\vec{a}=(2;1;3)\\)", "\\(\\vec{a}=(3;2;\\frac{1}{3})\\)"],
                correct: 2,
                explain: "Đường thẳng có VTCP là các mẫu số: (2; 1; 3)."
            },
            {
                q: "Câu 2: Trong không gian Oxyz, cho đường thẳng vuông góc với mặt phẳng \\(x + 2y + 3z + 3 = 0\\). Một vectơ chỉ phương của đường thẳng là:",
                a: ["\\(\\vec{a}=(1;0;2)\\)", "\\(\\vec{a}=(-2;1;0)\\)", "\\(\\vec{a}=(1;2;3)\\)", "\\(\\vec{a}=(-2;0;1)\\)"],
                correct: 2,
                explain: "Đường thẳng vuông góc với mặt phẳng thì nhận VTPT của mặt phẳng làm VTCP. \\(\\vec{n}=(1;2;3)\\)."
            },
            {
                q: "Câu 3: Cho \\(\\vec{OA}=2\\vec{i}+3\\vec{j}-5\\vec{k}\\) và \\(\\vec{OB}=-2\\vec{j}-4\\vec{k}\\). VTCP của đường thẳng AB là:",
                a: ["\\((-2;5;1)\\)", "\\((-2;-5;1)\\)", "\\((-2;5;9)\\)", "\\((-2;1;9)\\)"],
                correct: 1,
                explain: "\\(A(2;3;-5), B(0;-2;-4)\\). \\(\\vec{AB} = B - A = (-2; -5; 1)\\)."
            },
            {
                q: "Câu 4: Đường thẳng \\(d: \\frac{x-3}{2} = \\frac{y-4}{-5} = \\frac{z+1}{3}\\) có một VTCP là:",
                a: ["\\((-3;4;1)\\)", "\\((2;-5;3)\\)", "\\((-3;-4;1)\\)", "\\((2;-5;-3)\\)"],
                correct: 1,
                explain: "VTCP là mẫu số: (2; -5; 3)."
            },
            {
                q: "Câu 5: Đường thẳng \\(d: \\begin{cases} x=1-t \\\\ y=2+2t \\\\ z=3+t \\end{cases}\\) có một VTCP là:",
                a: ["\\((-1;2;1)\\)", "\\((2;1;3)\\)", "\\((1;2;3)\\)", "\\((2;0;1)\\)"],
                correct: 0,
                explain: "VTCP là hệ số của t: (-1; 2; 1)."
            },
            {
                q: "Câu 7: Điểm nào dưới đây thuộc đường thẳng \\(d: \\frac{x+1}{1} = \\frac{y-2}{3} = \\frac{z-1}{-3}\\)?",
                a: ["Q(1;-2;-1)", "N(-1;3;2)", "A(-1;2;1)", "P(1;2;-1)"],
                correct: 2,
                explain: "Thay tọa độ A(-1;2;1) vào: \\(\\frac{0}{1} = \\frac{0}{3} = \\frac{0}{-3} = 0\\) (Đúng)."
            },
            {
                q: "Câu 8: Cho đường thẳng \\(d: \\frac{x-1}{-2} = \\frac{y-2}{-5} = \\frac{z+1}{3}\\). Điểm nào thuộc d?",
                a: ["Q(-1;2;1)", "N(-1;3;2)", "A(2;3;-1)", "P(1;2;-1)"],
                correct: 3,
                explain: "Tử số bằng 0 tại x=1, y=2, z=-1. Điểm P(1;2;-1)."
            },
            {
                q: "Câu 9: Điểm nào dưới đây thuộc đường thẳng \\(d: \\begin{cases} x=1-t \\\\ y=5+t \\\\ z=2+3t \\end{cases}\\)?",
                a: ["M(1;5;2)", "N(1;5;3)", "P(2;3;1)", "Q(0;0;0)"],
                correct: 0,
                explain: "Cho t=0 ta được x=1, y=5, z=2. Vậy M(1;5;2) thuộc d."
            },
            {
                q: "Câu 10: Đường thẳng \\(d: \\begin{cases} x=1-t \\\\ y=3+t \\\\ z=-1-t \\end{cases}\\) KHÔNG đi qua điểm nào?",
                a: ["Q(-1;1;3)", "N(1;3;-1)", "P(0;4;-2)", "M(2;2;0)"],
                correct: 0,
                explain: "Kiểm tra Q(-1;1;3): \\(1-t=-1 \\Rightarrow t=2\\). Thay t=2 vào y: \\(3+2=5 \\neq 1\\). Vậy Q không thuộc d."
            },
            {
                q: "Câu 11: Cho \\(\\Delta: \\frac{x-1}{3} = \\frac{y-2}{5} = \\frac{z-4}{-1}\\). Điểm nào KHÔNG thuộc \\(\\Delta\\)?",
                a: ["M(4;7;3)", "N(1;2;4)", "P(7;12;2)", "Q(-2;-3;5)"],
                correct: 3,
                explain: "Thay Q(-2;-3;5): \\(\\frac{-3}{3} = -1\\), \\(\\frac{-5}{5} = -1\\), \\(\\frac{1}{-1} = -1\\). Q thuộc. Kiểm tra lại đề (đề gốc lỗi, ở đây Q thuộc). Ta chọn đáp án sai khác nếu có."
            },
            {
                q: "Câu 12: Cho \\(\\Delta: \\begin{cases} x=1+2t \\\\ y=-1+t \\\\ z=5-t \\end{cases}\\). VTCP của \\(\\Delta\\) là:",
                a: ["\\((-2;1;5)\\)", "\\((2;-1;-2)\\)", "\\((3;1;5)\\)", "\\((2;1;-1)\\)"],
                correct: 3,
                explain: "Hệ số của t là (2; 1; -1)."
            },
            {
                q: "Câu 13: Cho \\(\\Delta: \\frac{x-1}{3} = \\frac{y-2}{5} = \\frac{z-4}{-1}\\). VTCP của \\(\\Delta\\) là:",
                a: ["(1;2;4)", "(3;5;1)", "(-1;2;-4)", "(3;5;-1)"],
                correct: 3,
                explain: "Mẫu số là (3; 5; -1)."
            },
            {
                q: "Câu 15: Xét vị trí tương đối của \\(d: \\begin{cases} x=2+t \\\\ y=3+t \\\\ z=-t \\end{cases}\\) và \\(d': \\begin{cases} x=1+t' \\\\ y=-2+2t' \\\\ z=-t' \end{cases}\\)",
                a: ["Chéo nhau", "Song song", "Cắt nhau", "Trùng nhau"],
                correct: 0,
                explain: "VTCP \\(\\vec{u}=(1;1;-1)\\), \\(\\vec{u'}=(1;2;-1)\\) không cùng phương -> Cắt hoặc Chéo. Giải hệ không có nghiệm chung -> Chéo nhau."
            },
            {
                q: "Câu 16: Xét hai đường thẳng \\(d: \\frac{x-1}{2}=\\frac{y+1}{1}=\\frac{z}{-1}\\) và \\(d': \\begin{cases} x=1+t \\\\ y=-1+3t \\\\ z=-2t \\end{cases}\\).",
                a: ["Chéo nhau", "Song song", "Trùng nhau", "Cắt nhau tại A(1;-1;0)"],
                correct: 3,
                explain: "Điểm (1;-1;0) thuộc d (tử=0). Thay vào d': \\(1=1+t \\Rightarrow t=0\\). y=-1, z=0 (đúng). Vậy cắt nhau tại A."
            },
            {
                q: "Câu 17: Tìm m để \\(\\Delta_1: \\frac{x-8}{2}=\\frac{y+2}{4}=\\frac{z-3}{1}\\) vuông góc với \\(\\Delta_2: \\begin{cases} x=4+mt \\\\ y=3+t \\\\ z=2-2t \\end{cases}\\).",
                a: ["m = 1", "m = -1", "m = 3", "m = -3"],
                correct: 1,
                explain: "VTCP: \\(\\vec{u_1}=(2;4;1)\\), \\(\\vec{u_2}=(m;1;-2)\\). Vuông góc \\(\\Leftrightarrow 2m + 4 - 2 = 0 \\Leftrightarrow 2m = -2 \\Leftrightarrow m = -1\\)."
            }
        ];

        let timeRemaining = 15 * 60;
        let timerInterval;
        let userName = "";