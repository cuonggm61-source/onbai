const quizAudioSrc = "asset/Close to You - YouTube.mp3";
const quizInfoHTML = `<h1 style="color: #2c3e50;">CHUYÊN ĐỀ: XÁC SUẤT TOÀN PHẦN </h1>
        <div style="text-align: left; max-width: 500px; margin: 0 auto; line-height: 1.6;">
            <p>📝 <strong>Số câu:</strong> 15 câu hỏi trắc nghiệm</p>
            <p>⏱️ <strong>Thời gian:</strong> 25 phút</p>
            <p>📚 <strong>Nội dung:</strong> 15 câu</p>
        </div>`;

const theoryHTML = `<h3>📖 LÝ THUYẾT: XÁC SUẤT TOÀN PHẦN VÀ CÔNG THỨC BAYES</h3>
<p><strong>1. Công thức Xác suất Toàn phần:</strong></p>
<p>Nếu hệ các biến cố \\(B_1, B_2, ..., B_n\\) tạo thành một hệ đầy đủ và xung khắc từng đôi một, thì với mọi biến cố \\(A\\) ta có:</p>
<p style="text-align:center; font-size: 1.2em;">\\( P(A) = P(B_1)P(A|B_1) + P(B_2)P(A|B_2) + ... + P(B_n)P(A|B_n) \\)</p>
<p>Đơn giản nhất với hệ 2 biến cố \\(B\\) và \\(\\overline{B}\\): <br> \\(P(A) = P(B)P(A|B) + P(\\overline{B})P(A|\\overline{B})\\)</p>
<p><strong>2. Cách làm bài:</strong></p>
<ul>
    <li><strong>Bước 1:</strong> Phân chia trường hợp (Hệ biến cố đầy đủ) - Thường là các tình huống song song như Chọn Máy 1 hoặc Máy 2.</li>
    <li><strong>Bước 2:</strong> Vẽ sơ đồ cây hoặc liệt kê các xác suất điều kiện (tỉ lệ phế phẩm từng máy...).</li>
    <li><strong>Bước 3:</strong> Nhân xác suất dọc theo các nhánh và cộng tổng các nhánh lại theo công thức Xác suất Toàn phần.</li>
</ul>`;

// Link Google Apps Script
const scriptURL = "https://script.google.com/macros/s/AKfycbzHsdXCSB8_eIfFzqyA-PMjz77FezLBhsoI-KmJGD9GQOgSQsdZarL_7U8YGgVi0DW9gQ/exec";

const quizData = [
    {
        q: "Câu 1: Cho 2 biến cố \\(A\\) và \\(B\\). Tìm \\(P(B|A)\\) biết \\(P(A) = 0.4\\); \\(P(A \\cap B) = 0.1\\).",
        a: ["0.25", "0.50", "0.30", "0.20"],
        correct: 0,
        explain: "Ta có: \\(P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.1}{0.4} = 0.25\\)."
    },
    {
        q: "Câu 2: Cho hai biến cố \\(A\\) và \\(B\\) biết \\(P(A) = 0.2\\), \\(P(B|A) = 0.3\\), \\(P(B|\\overline{A}) = 0.4\\). Khi đó xác suất xảy ra biến cố \\(B\\) là bao nhiêu?",
        a: ["0.38", "0.35", "0.42", "0.50"],
        correct: 0,
        explain: "Theo công thức xác suất toàn phần: \\(P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A}) = 0.2 \\times 0.3 + 0.8 \\times 0.4 = 0.06 + 0.32 = 0.38\\)."
    },
    {
        q: "Câu 3: Cho hai biến cố \\(A\\) và \\(B\\) với \\(P(B) > 0\\). Khẳng định nào sau đây là đúng về công thức xác suất toàn phần?",
        a: ["\\(P(A) = P(B)P(A|B) + P(\\overline{B})P(A|\\overline{B})\\)", "\\(P(A) = P(B)P(A|B)\\)", "\\(P(A \\cap B) = P(A) + P(B)\\)", "\\(P(A \\cup B) = P(A)P(B)\\)"],
        correct: 0,
        explain: "Đây là định nghĩa chuẩn của công thức xác suất toàn phần đối với hệ đầy đủ \\(\\{B, \\overline{B}\\}\\)."
    },
    {
        q: "Câu 4: Cho hai biến cố \\(A\\) và \\(B\\). Biết \\(P(A)=0.3\\); \\(P(B|A)=0.5\\); \\(P(B|\\overline{A})=0.2\\). Khi đó \\(P(B)\\) bằng",
        a: ["0.29", "0.30", "0.35", "0.25"],
        correct: 0,
        explain: "Ta có: \\(P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A}) = 0.3 \\times 0.5 + 0.7 \\times 0.2 = 0.15 + 0.14 = 0.29\\)."
    },
    {
        q: "Câu 5: Cho hai biến cố \\(A\\) và \\(B\\) với \\(P(A)=0.4\\), \\(P(B)=0.5\\), \\(P(A \\cup B)=0.7\\). Tính \\(P(A|B)\\).",
        a: ["0.4", "0.5", "0.2", "0.3"],
        correct: 0,
        explain: "Ta có \\(P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.4+0.5-0.7=0.2\\). Vậy \\(P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.5} = 0.4\\)."
    },
    {
        q: "Câu 6: Cho \\(A\\), \\(B\\) là hai biến cố. Biết \\(P(A)=0.2\\). Nếu \\(A\\) không xảy ra thì tỉ lệ \\(B\\) xảy ra là 0.3. Nếu \\(A\\) xảy ra thì tỉ lệ \\(B\\) xảy ra là 0.6. Xác suất của biến cố \\(B\\) là bao nhiêu?",
        a: ["0.36", "0.30", "0.45", "0.42"],
        correct: 0,
        explain: "Ta có \\(P(A)=0.2, P(\\overline{A})=0.8\\). Dữ kiện cho \\(P(B|\\overline{A})=0.3\\) và \\(P(B|A)=0.6\\). Vậy \\(P(B) = 0.2 \\times 0.6 + 0.8 \\times 0.3 = 0.12 + 0.24 = 0.36\\)."
    },
    {
        q: "Câu 7: Cho hai biến cố \\(A, B\\) thỏa mãn \\(A \\subset B\\). Khi đó, xác suất \\(P(A \\cap B)\\) bằng",
        a: ["\\(P(A)\\)", "\\(P(B)\\)", "0", "1"],
        correct: 0,
        explain: "Vì \\(A \\subset B\\) nên phần giao của \\(A\\) và \\(B\\) chính là \\(A\\). Do đó \\(P(A \\cap B) = P(A)\\)."
    },
    {
        q: "Câu 8: Cho hai biến cố \\(A, B\\) thỏa mãn \\(P(A \\cup B) = P(A) + P(B)\\). Khi đó, \\(P(A \\cap B)\\) bằng",
        a: ["0", "\\(P(A)P(B)\\)", "1", "0.5"],
        correct: 0,
        explain: "Theo công thức cộng xác suất: \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\). Suy ra ngay \\(P(A \\cap B) = 0\\) (iki hai biến cố xung khắc)."
    },
    {
        q: "Câu 9: Cho hai biến cố \\(A\\) và \\(B\\) với \\(P(A)=0.5\\), \\(P(B)=0.4\\) và \\(P(A \\cap B)=0.2\\). Khi đó, \\(P(\\overline{A} \\cap \\overline{B})\\) bằng",
        a: ["0.3", "0.5", "0.7", "0.1"],
        correct: 0,
        explain: "\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.5+0.4-0.2=0.7\\). Theo luật De Morgan: \\(\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}\\). Vậy xác suất là \\(1 - 0.7 = 0.3\\)."
    },
    {
        q: "Câu 10: Hai máy tự động sản xuất cùng một loại chi tiết, trong đó máy I sản xuất 60%, máy II sản xuất 40% tổng sản lượng. Tỉ lệ phế phẩm của các máy lần lượt là 2% và 3%. Chọn ngẫu nhiên một sản phẩm từ kho. Tính xác suất để chọn được phế phẩm.",
        a: ["0.024", "0.025", "0.026", "0.012"],
        correct: 0,
        explain: "\\(P(Phế phẩm) = P(M_1)P(F_1) + P(M_2)P(F_2) = 0.6 \\times 0.02 + 0.4 \\times 0.03 = 0.012 + 0.012 = 0.024\\)."
    },
    {
        q: "Câu 11: Có 2 xạ thủ loại I và 8 xạ thủ loại II, xác suất bắn trúng đích của các xạ thủ loại I là 0.9 và loại II là 0.7. Chọn ngẫu nhiên ra một xạ thủ và xạ thủ đó bắn một viên đạn. Tìm xác suất để viên đạn đó trúng đích.",
        a: ["0.74", "0.76", "0.18", "0.56"],
        correct: 0,
        explain: "Tỉ lệ chọn xạ thủ loại 1 là \\(2/10 = 0.2\\), loại 2 là \\(0.8\\). Tính xác suất trúng: \\(0.2 \\times 0.9 + 0.8 \\times 0.7 = 0.18 + 0.56 = 0.74\\)."
    },
    {
        q: "Câu 12: Hộp thứ nhất có 3 viên bi xanh và 6 viên bi đỏ. Hộp thứ hai có 3 viên bi xanh và 7 viên bi đỏ. Các viên bi có cùng kích thước và khối lượng. Lấy ra ngẫu nhiên 1 viên bi từ hộp thứ nhất chuyển sang hộp thứ hai. Sau đó lại lấy ra ngẫu nhiên đồng thời 2 viên bi từ hộp thứ hai. Xác suất để lấy ra hai viên bi đỏ ở hộp thứ hai là:",
        a: ["\\(\\frac{7}{15}\\)", "\\(\\frac{21}{55}\\)", "\\(\\frac{28}{55}\\)", "\\(\\frac{8}{15}\\)"],
        correct: 0,
        explain: "Trường hợp 1 (chuyển bi xanh, xác suất \\(3/9 = 1/3\\)): Hộp II sẽ có 4 xanh, 7 đỏ. Xác suất lấy 2 đỏ = \\(C_{7}^{2}/C_{11}^{2} = 21/55\\).<br>Trường hợp 2 (chuyển bi đỏ, xác suất \\(6/9 = 2/3\\)): Hộp II sẽ có 3 xanh, 8 đỏ. Xác suất lấy 2 đỏ = \\(C_{8}^{2}/C_{11}^{2} = 28/55\\).<br>Tổng xác suất = \\(\\frac{1}{3} \\times \\frac{21}{55} + \\frac{2}{3} \\times \\frac{28}{55} = \\frac{21}{165} + \\frac{56}{165} = \\frac{77}{165} = \\frac{7}{15}\\)."
    },
    {
        q: "Câu 13: Một công ty may có hai chi nhánh cùng sản xuất một loại áo, trong đó có 60% áo ở chi nhánh I và 40% áo ở chi nhánh II. Tại chi nhánh I có 80% áo chất lượng cao và tại chi nhánh II có 70% áo chất lượng cao (kích thước và hình dáng bề ngoài của các áo là như nhau). Chọn ngẫu nhiên 1 áo. Xác suất chọn được áo chất lượng cao là (làm tròn đến chữ số thập phân thứ hai).",
        a: ["0.76", "0.78", "0.74", "0.80"],
        correct: 0,
        explain: "\\(P(Tốt) = P(CN_1)P(Tốt|CN_1) + P(CN_2)P(Tốt|CN_2) = 0.6 \\times 0.8 + 0.4 \\times 0.7 = 0.48 + 0.28 = 0.76\\)."
    },
    {
        q: "Câu 14: Người ta khảo sát khả năng chơi nhạc cụ của một nhóm học sinh tại trường X. Nhóm này có 40% học sinh là nam. Kết quả khảo sát cho thấy có 20% học sinh nam và 15% học sinh nữ biết chơi ít nhất một nhạc cụ. Chọn ngẫu nhiên một học sinh trong nhóm này. Tính xác suất để chọn được học sinh biết chơi ít nhất một nhạc cụ.",
        a: ["0.17", "0.15", "0.20", "0.18"],
        correct: 0,
        explain: "Tỉ lệ nam là 0.4, nên tỉ lệ nữ là 0.6. Xác suất chọn người biết chơi nhạc cụ: \\(0.4 \\times 0.20 + 0.6 \\times 0.15 = 0.08 + 0.09 = 0.17\\)."
    },
    {
        q: "Câu 15: Một trạm chỉ phát hai tín hiệu A và B với xác suất tương ứng 0.85 và 0.15 do có nhiễu trên đường truyền nên 10% tín hiệu A bị méo và thu được như tín hiệu B; còn 20% tín hiệu B bị méo thành và thu được như A. Xác suất thu được tín hiệu B là",
        a: ["0.205", "0.185", "0.225", "0.250"],
        correct: 0,
        explain: "Thu được tín hiệu B trong hai trường hợp: <br>- Phát A bị nhiễu thành B (xác suất 0.1).<br>- Phát B truyền đúng không bị méo (xác suất 1 - 0.2 = 0.8).<br>Vậy xác suất thu B là: \\(0.85 \\times 0.1 + 0.15 \\times 0.8 = 0.085 + 0.120 = 0.205\\)."
    }
];

let timeRemaining = 25 * 60;
let timerInterval;
let userName = "";
