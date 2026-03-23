const quizAudioSrc = "asset/Close to You - YouTube.mp3";
const quizInfoHTML = `<p>📝 <strong>Số câu:</strong> 30 câu hỏi trắc nghiệm</p>
            <p>⏱️ <strong>Thời gian:</strong> 20 phút</p>
            <p>🎵 <strong>;> </strong> Cố gắng làm hết khả năng của mình</p>
        </div>`;

const quizData = [
            { q: "Vectơ pháp tuyến \\(\\vec{n}\\) của mặt phẳng (P) thỏa mãn điều kiện nào?", a: ["\\(\\vec{n} = \\vec{0}\\) và vuông góc", "\\(\\vec{n} \\neq \\vec{0}\\) và vuông góc", "\\(\\vec{n} \\neq \\vec{0}\\) và song song", "\\(\\vec{n} = \\vec{0}\\) và song song"], correct: 1 },
            { q: "Phương trình tổng quát của mặt phẳng đi qua \\(M(x_0; y_0; z_0)\\) có VTPT \\(\\vec{n}=(A;B;C)\\):", a: ["\\(A(x-x_0)+B(y-y_0)+C(z-z_0)=0\\)", "\\(Ax+By+Cz+D=0\\)", "\\(\\frac{x}{A}+\\frac{y}{B}+\\frac{z}{C}=1\\)", "\\(x+y+z=1\\)"], correct: 0 },
            { q: "Mặt phẳng (P): 3x - 2y + z - 1 = 0 có VTPT là:", a: ["(3; 2; 1)", "(3; -2; 1)", "(3; -2; -1)", "(-3; 2; 1)"], correct: 1 },
            { q: "Điểm nào thuộc mặt phẳng x + y - z - 2 = 0?", a: ["M(1;1;0)", "N(1;1;1)", "P(2;1;1)", "Q(0;0;2)"], correct: 2 },
            { q: "Phương trình mặt phẳng đoạn chắn qua A(2;0;0), B(0;-3;0), C(0;0;1)?", a: ["x/2 + y/-3 + z/1 = 0", "x/2 + y/-3 + z/1 = 1", "2x - 3y + z = 1", "x/2 + y/3 + z/1 = 1"], correct: 1 },
            { q: "Khoảng cách từ O(0;0;0) đến mặt phẳng 2x - 2y + z - 6 = 0 là:", a: ["1", "2", "3", "6"], correct: 1 },
            { q: "Mặt phẳng (Oxy) có phương trình là:", a: ["z = 0", "x = 0", "y = 0", "x + y = 0"], correct: 0 },
            { q: "Điều kiện để hai mặt phẳng vuông góc?", a: ["Tích có hướng VTPT = 0", "Tích vô hướng VTPT = 0", "Hai VTPT bằng nhau", "Hai VTPT tỉ lệ"], correct: 1 },
            { q: "Mặt phẳng đi qua M(1;2;3) và nhận \\(\\vec{k}=(0;0;1)\\) làm VTPT có pt:", a: ["z - 3 = 0", "z + 3 = 0", "x + y + z - 6 = 0", "z = 0"], correct: 0 },
            { q: "Cho A(1;0;1), B(0;1;2). VTPT của mặt phẳng trung trực đoạn AB là:", a: ["(1; -1; -1)", "(-1; 1; 1)", "(1; -1; 1)", "(1; 1; 1)"], correct: 1 },
            { q: "Nếu mặt phẳng (P) có cặp VTCP \\(\\vec{u}, \\vec{v}\\) thì VTPT \\(\\vec{n}\\) bằng:", a: ["\\(\\vec{u}.\\vec{v}\\)", "\\([\\vec{u}, \\vec{v}]\\)", "\\(\\vec{u} + \\vec{v}\\)", "\\(|[\\vec{u}, \\vec{v}]|\\)"], correct: 1 },
            { q: "Mặt phẳng (P) qua 3 điểm A, B, C không thẳng hàng có VTPT là:", a: ["\\(\\vec{AB}\\)", "\\(\\vec{AC}\\)", "\\([\\vec{AB}, \\vec{AC}]\\)", "\\(\\vec{AB} . \\vec{AC}\\)"], correct: 2 },
            { q: "Phương trình mặt phẳng đi qua A(1;1;1) và song song với 2x - y + z + 5 = 0:", a: ["2x - y + z - 2 = 0", "2x - y + z + 2 = 0", "2x - y + z = 0", "x - y + z = 0"], correct: 0 },
            { q: "Viết phương trình mặt phẳng chứa trục Oz và đi qua A(1;2;3):", a: ["2x - y = 0", "x - 2y = 0", "x + y = 0", "2x + y = 0"], correct: 0 },
            { q: "Mặt phẳng (P) song song với (Q): x + y + z - 3 = 0 và đi qua gốc tọa độ O:", a: ["x + y + z = 0", "x + y + z + 3 = 0", "x - y - z = 0", "3x + 3y + 3z = 1"], correct: 0 },
            { q: "VTPT của mặt phẳng đi qua 3 điểm A(1;0;0), B(0;2;0), C(0;0;3) là:", a: ["(6; 3; 2)", "(1; 2; 3)", "(3; 2; 1)", "(2; 3; 6)"], correct: 0 },
            { q: "Cho mặt phẳng 2x + my + 3z - 5 = 0 và x - 2y + 2z + 1 = 0. Tìm m để chúng vuông góc:", a: ["m = 4", "m = -4", "m = 2", "m = 1"], correct: 0 },
            { q: "Góc giữa hai mặt phẳng (P) và (Q) được tính thông qua:", a: ["Góc giữa hai VTPT", "Trị tuyệt đối cos góc giữa hai VTPT", "Sin góc giữa hai VTPT", "Tích vô hướng"], correct: 1 },
            { q: "Mặt phẳng trung trực của đoạn thẳng AB đi qua:", a: ["Điểm A", "Điểm B", "Trung điểm I của AB", "Gốc O"], correct: 2 },
            { q: "Phương trình mặt phẳng (Oxz) là:", a: ["x = 0", "y = 0", "z = 0", "x + z = 0"], correct: 1 },
            { q: "Khoảng cách từ A(1;1;1) đến mặt phẳng x + y + z - 6 = 0 là:", a: ["\\(\\sqrt{3}\\)", "3", "1", "0"], correct: 0 },
            { q: "Vị trí tương đối của (P): x+y+z-1=0 và (Q): 2x+2y+2z-2=0?", a: ["Cắt nhau", "Song song", "Trùng nhau", "Vuông góc"], correct: 2 },
            { q: "Mặt phẳng (P) đi qua M(1; -1; 1), N(2; 1; 2) và song song Oz:", a: ["2x - y - 3 = 0", "x - 2y - 3 = 0", "2x + y - 3 = 0", "x + 2y + z = 0"], correct: 0 },
            { q: "Cho A(0;1;0), B(2;3;1), (Q): x+2y-z=0. Mp (P) qua A, B và vuông góc (Q):", a: ["4x - 3y - 2z + 3 = 0", "4x + 3y - 2z + 3 = 0", "x + y + z - 1 = 0", "2x - 3y - z + 3 = 0"], correct: 0 },
            { q: "Mặt phẳng (P) cách gốc O một khoảng bằng 1 và song song với x+y+z=0:", a: ["x+y+z-\\(\\sqrt{3}\\)=0", "x+y+z-3=0", "x+y+z-1=0", "x+y+z+1=0"], correct: 0 },
            { q: "Hình chiếu của M(1;2;3) lên trục Oy là B. Mp qua B vuông góc Oy là:", a: ["y - 2 = 0", "y + 2 = 0", "x + z = 0", "y = 0"], correct: 0 },
            { q: "Cho A(1;0;-2), B(-1;-1;3). Mp qua A, B và vuông góc với 2x - y + 2z + 11 = 0:", a: ["3x + 14y + 4z + 5 = 0", "3x - 14y + 4z + 5 = 0", "2x - y + 2z = 0", "x + y + z = 0"], correct: 0 },
            { q: "Phương trình mặt phẳng (P) chứa trục Oy và điểm M(1;1;1):", a: ["x - z = 0", "x + z = 0", "x - y = 0", "y - z = 0"], correct: 0 },
            { q: "Cho tứ diện OABC có OA, OB, OC đôi một vuông góc. OA=a, OB=b, OC=c. Pt mp (ABC):", a: ["x/a + y/b + z/c = 1", "x/a + y/b + z/c = 0", "ax+by+cz=1", "x+y+z=1"], correct: 0 },
            { q: "Tìm m để hai mặt phẳng song song: 2x - my + 3z - 6 = 0 và nx - 2y + 6z + 3 = 0:", a: ["m=1, n=4", "m=1, n=-4", "m=-1, n=4", "m=4, n=1"], correct: 0 },
        ];

        let timeRemaining = 20 * 60;
        let timerInterval;
        let userName = "";