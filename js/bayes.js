const quizAudioSrc = "asset/Close to You - YouTube.mp3";
const quizInfoHTML = `<h1 style="color: #2c3e50;">CHUYÊN ĐỀ: BÀI TẬP TRẮC NGHIỆM - CÔNG THỨC BAYES</h1>
        <div style="text-align: left; max-width: 500px; margin: 0 auto; line-height: 1.6;">
            <p>📝 <strong>Số câu:</strong> 24 câu hỏi trắc nghiệm</p>
            <p>⏱️ <strong>Thời gian:</strong> 45 phút</p>
            <p>📚 <strong>Nội dung:</strong> Đề số 02</p>
        </div>
        <div style="margin-top: 18px; padding: 14px 20px; background: linear-gradient(135deg, #fff8e1, #fff3cd); border-radius: 16px; border-left: 5px solid #f39c12; display: flex; align-items: center; gap: 16px; max-width: 500px; margin-left: auto; margin-right: auto;">
            <img src="asset/colennn .jpg" alt="Cổ vũ" style="width: 140px; height: 140px; object-fit: cover; border-radius: 50%; border: 3px solid #f39c12; flex-shrink: 0;" />
            <div style="text-align: left;">
                <p style="margin: 0; font-size: 1.05em; font-weight: bold; color: #c0392b;">🌟 Cố lên, hành trình không còn dài!</p>
                <p style="margin: 6px 0 0; font-size: 0.92em; color: #7f4f24;"> Anh tin em làm được:>>  ✨</p>
            </div>
        </div>
        <div style="display:none">`;

const theoryHTML = `<h3>📖 LÝ THUYẾT & CÔNG THỨC BAYES</h3>
<p><strong>1. Định lý Bayes:</strong></p>
<p>Cho \\(A\\) và \\(B\\) là hai biến cố, trong đó \\(P(A) > 0\\) và \\(P(B) > 0\\). Công thức Bayes được phát biểu như sau:</p>
<p style="text-align:center; font-size: 1.2em;">\\( P(B|A) = \\frac{P(A|B) \\cdot P(B)}{P(A)} \\)</p>
<p>Trong đó:</p>
<ul>
    <li>\\(P(B|A)\\): Xác suất xảy ra \\(B\\) khi biết \\(A\\) đã xảy ra (Xác suất hậu nghiệm).</li>
    <li>\\(P(A|B)\\): Xác suất xảy ra \\(A\\) khi biết \\(B\\) đã xảy ra.</li>
    <li>\\(P(B)\\), \\(P(A)\\): Xác suất tiên nghiệm của \\(B\\) và \\(A\\).</li>
</ul>
<p><strong>2. Cách làm dạng bài:</strong></p>
<ul>
    <li><strong>Bước 1:</strong> Gọi tên các định danh biến cố. Liệt kê các xác suất đề bài đã cho.</li>
    <li><strong>Bước 2:</strong> Áp dụng công thức Xác suất Toàn phần để tính mẫu số \\(P(A)\\) trước.</li>
    <li><strong>Bước 3:</strong> Thay vào công thức Bayes và tính kết quả cuối cùng.</li>
</ul>`;

const scriptURL = "https://script.google.com/macros/s/AKfycbzHsdXCSB8_eIfFzqyA-PMjz77FezLBhsoI-KmJGD9GQOgSQsdZarL_7U8YGgVi0DW9gQ/exec";

const quizData = [
    {
        q: "Câu 1: Cho hai biến cố \\(A, B\\) thỏa mãn \\(P(A)=0.4\\), \\(P(B)=0.3\\), \\(P(A|B)=0.25\\). Khi đó, \\(P(B|A)\\) bằng",
        a: ["0.1875", "0.48", "0.333", "0.95"],
        correct: 0,
        explain: "Ta có \\(P(A \\cap B) = P(B)P(A|B) = 0.3 \\times 0.25 = 0.075\\). Suy ra \\(P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.075}{0.4} = 0.1875\\)."
    },
    {
        q: "Câu 2: Giả sử \\(A\\) và \\(B\\) là hai biến cố ngẫu nhiên thỏa mãn \\(P(A)>0\\) và \\(0<P(B)<1\\). Khẳng định nào sau đây đúng?",
        a: ["\\(P(B|A) = \\frac{P(B) + P(A|B)}{P(B)P(A|B) + P(\\overline{B})P(A|\\overline{B})}\\)", "\\(P(B|A) = \\frac{P(B)P(A|B)}{P(B)P(A|B) + P(\\overline{B})P(A|\\overline{B})}\\)", "\\(P(B|A) = \\frac{P(B)P(A|B)}{P(B)P(A|\\overline{B}) + P(\\overline{B})P(A|B)}\\)", "\\(P(B|A) = \\frac{P(B)P(A|B)}{P(B)P(A|B) + P(\\overline{B})P(A|B)}\\)"],
        correct: 1,
        explain: "Đây chính là dạng biểu diễn chuẩn của công thức Bayes: \\(P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{P(B)P(A|B)}{P(B)P(A|B) + P(\\overline{B})P(A|\\overline{B})}\\)."
    },
    {
        q: "Câu 3: Cho hai biến cố \\(A\\) và \\(B\\), với \\(P(A)=0.2\\), \\(P(B)=0.26\\), \\(P(B|A)=0.7\\). Tính \\(P(A|B)\\).",
        a: ["\\(\\frac{7}{13}\\)", "\\(\\frac{6}{13}\\)", "\\(\\frac{4}{13}\\)", "\\(\\frac{9}{13}\\)"],
        correct: 0,
        explain: "Ta có \\(P(A \\cap B) = P(A)P(B|A) = 0.2 \\times 0.7 = 0.14\\). Từ đó \\(P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.14}{0.26} = \\frac{14}{26} = \\frac{7}{13}\\)."
    },
    {
        q: "Câu 4: Cho hai biến cố \\(A\\) và \\(B\\), với \\(P(B)=0.8\\), \\(P(A|B)=0.7\\), \\(P(A|\\overline{B})=0.45\\). Tính \\(P(B|A)\\).",
        a: ["0.25", "\\(\\frac{56}{65}\\)", "0.65", "0.5"],
        correct: 1,
        explain: "\\(P(A) = P(B)P(A|B) + P(\\overline{B})P(A|\\overline{B}) = 0.8 \\times 0.7 + 0.2 \\times 0.45 = 0.56 + 0.09 = 0.65\\). Từ đó \\(P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.56}{0.65} = \\frac{56}{65}\\)."
    },
    {
        q: "Câu 5: Cho hai biến cố \\(A\\) và \\(B\\), với \\(P(A)=0.2\\), \\(P(B|A)=0.7\\), \\(P(B|\\overline{A})=0.15\\). Tính \\(P(A|B)\\).",
        a: ["\\(\\frac{7}{13}\\)", "\\(\\frac{6}{13}\\)", "\\(\\frac{4}{13}\\)", "\\(\\frac{9}{13}\\)"],
        correct: 0,
        explain: "\\(P(B) = P(A)P(B|A) + P(\\overline{A})P(B|\\overline{A}) = 0.2 \\times 0.7 + 0.8 \\times 0.15 = 0.14 + 0.12 = 0.26\\). Từ đó \\(P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.14}{0.26} = \\frac{7}{13}\\)."
    },
    {
        q: "Câu 6: Người ta điều tra thấy ở một địa phương nọ có 3% tài xế sử dụng điện thoại di động khi lái xe. Khảo sát vụ tai nạn thì 21% tai nạn là do tài xế sử dụng điện thoại. Việc sử dụng điện thoại di động khi lái xe làm tăng xác suất gây tai nạn lên bao nhiêu lần?",
        a: ["3", "7", "5", "6"],
        correct: 1,
        explain: "Gọi D là biến cố dùng ĐT, T là biến cố tai nạn. \\(P(D)=0.03\\), \\(P(D|T)=0.21\\). Tỉ lệ rủi ro so với trung bình: \\(P(T|D) / P(T) = P(D|T) / P(D) = 0.21 / 0.03 = 7\\) lần."
    },
    {
        q: "Câu 7: Cho hai biến cố \\(A\\) và \\(B\\) sao cho \\(P(A)=0.6\\); \\(P(B)=0.4\\); \\(P(A|B)=0.3\\). Khi đó \\(P(B|A)\\) bằng?",
        a: ["0.2", "0.3", "0.4", "0.6"],
        correct: 0,
        explain: "\\(P(A \\cap B) = P(B)P(A|B) = 0.4 \\times 0.3 = 0.12\\). Do đó \\(P(B|A) = \\frac{0.12}{P(A)} = \\frac{0.12}{0.6} = 0.2\\)."
    },
    {
        q: "Câu 8: Giả sử \\(A\\) và \\(B\\) là hai biến cố ngẫu nhiên thỏa mãn \\(P(A)>0\\) và \\(0<P(B)<1\\). Khẳng định nào dưới đây sai?",
        a: ["\\(P(B|A) = \\frac{P(B)P(A|B)}{P(B)P(A|B)+P(A)P(B|A)}\\)", "\\(P(B|A) = \\frac{P(B)P(A|B)}{P(B)P(A|B)+P(\\overline{B})P(A|\\overline{B})}\\)", "\\(P(B|A) = \\frac{P(B)P(A|B)}{P(A)}\\)", "\\(P(A) = P(B)P(A|B) + P(\\overline{B})P(A|\\overline{B})\\)"],
        correct: 0,
        explain: "Công thức ở phương án A sai vì mẫu số phân kì lạ so với biểu thức đúng của định luật Bayes hoặc định lý xác suất toàn phần."
    },
    {
        q: "Câu 9: Cho hai biến cố \\(A\\) và \\(B\\). Biết rằng \\(P(B)=0.8\\); \\(P(A|B)=0.7\\) và \\(P(A|\\overline{B})=0.45\\). Khi đó giá trị của \\(P(B|A)\\) bằng",
        a: ["0.25", "0.65", "\\(\\frac{56}{65}\\)", "0.5"],
        correct: 2,
        explain: "\\(P(A) = 0.8 \\times 0.7 + 0.2 \\times 0.45 = 0.56 + 0.09 = 0.65\\). Suy ra \\(P(B|A) = \\frac{0.56}{0.65} = \\frac{56}{65}\\)."
    },
    {
        q: "Câu 10: Giả sử tỉ lệ người dân của tỉnh X nghiện thuốc lá là 20%; tỉ lệ người bị bệnh phổi trong số những người nghiện thuốc lá là 70%, trong số những người không nghiện thuốc là 15%. Khi gặp ngẫu nhiên một người bị bệnh phổi, xác suất người đó nghiện thuốc lá là:",
        a: ["\\(\\frac{7}{13}\\)", "\\(\\frac{6}{13}\\)", "\\(\\frac{4}{13}\\)", "\\(\\frac{9}{13}\\)"],
        correct: 0,
        explain: "Gọi N là nghiện thuốc, P là bệnh phổi. \\(P(N)=0.2\\). \\(P(P) = P(N)P(P|N) + P(\\overline{N})P(P|\\overline{N}) = 0.2 \\times 0.7 + 0.8 \\times 0.15 = 0.14 + 0.12 = 0.26\\). XS cần tìm \\(P(N|P) = \\frac{0.14}{0.26} = \\frac{7}{13}\\)."
    },
    {
        q: "Câu 11: Hai máy tự động sản xuất cùng một loại chi tiết, trong đó máy I sản xuất 35%, máy II 65% tổng sản lượng. Tỉ lệ phế phẩm của các máy lần lượt là 0.3% và 0.7%. Chọn ngẫu nhiên 1 sản phẩm bị phế phẩm từ kho. Tính xác suất để sản phẩm đó do máy I sản xuất?",
        a: ["0.0056", "0.1875", "0.1785", "0.1587"],
        correct: 1,
        explain: "\\(P(F) = 0.35 \\times 0.003 + 0.65 \\times 0.007 = 0.00105 + 0.00455 = 0.00560\\). Xác suất do máy I sản xuất biết nó là phế phẩm: \\(P(I|F) = \\frac{0.00105}{0.00560} = 0.1875\\)."
    },
    {
        q: "Câu 12: Một căn bệnh X có 1% dân số mắc phải. Một phương pháp chẩn đoán đúng 99% trường hợp bệnh và cũng chuẩn đoán đúng (âm tính) 99% trường hợp không bệnh. Nếu một người xét nghiệm trả về dương tính, xác suất thực sự mang bệnh X là bao nhiêu?",
        a: ["0.4", "0.35", "0.5", "0.65"],
        correct: 2,
        explain: "\\(P(+) = P(Bện)P(+|Bện) + P(Khỏe)P(+|Khỏe) = 0.01 \\times 0.99 + 0.99 \\times 0.01 = 0.0198\\). Áp dụng Bayes: \\(P(Bệnh|+) = \\frac{0.0099}{0.0198} = 0.5\\)."
    },
    {
        q: "Câu 13: Cho hai biến cố \\(A, B\\) thỏa mãn \\(P(A)=0.3\\); \\(P(B)=0.2\\) và \\(P(A|B)=0.15\\). Khi đó, \\(P(B|A)\\) bằng",
        a: ["0.1", "0.4", "0.225", "0.009"],
        correct: 0,
        explain: "Ta có \\(P(A \\cap B) = P(B)P(A|B) = 0.2 \\times 0.15 = 0.03\\). Do đó \\(P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.03}{0.3} = 0.1\\)."
    },
    {
        q: "Câu 14: Xét nghiệm có độ tin cậy 95% phát hiện bệnh, đồng thời tỷ lệ dương tính giả là 2% ở những người khỏe mạnh. Biết tỷ lệ dân số thực sự mắc bệnh là 1%. Nếu kết quả dương tính, xác suất người đó mắc bệnh là bao nhiêu?",
        a: ["Khoảng 32%", "Khoảng 47%", "Khoảng 83%", "Khoảng 95%"],
        correct: 0,
        explain: "\\(P(+) = 0.01 \\times 0.95 + 0.99 \\times 0.02 = 0.0095 + 0.0198 = 0.0293\\). Xét suất thực sự bệnh: \\(P(B|+) = \\frac{0.0095}{0.0293} \\approx 32.42\\%\\)."
    },
    {
        q: "Câu 15: Bộ lọc thư rác có xác suất 0.95 chặn thành công nếu là thư rác. Xác suất chặn nhầm một thư đúng là 0.01. Thống kê tỷ lệ thư rác là 3%. Chọn một thư bị chặn, tính xác suất để đó là thư rác.",
        a: ["0.095", "0.746", "0.476", "0.003"],
        correct: 1,
        explain: "\\(P(Bị Chặn) = 0.03 \\times 0.95 + 0.97 \\times 0.01 = 0.0285 + 0.0097 = 0.0382\\). \\(P(Thư Rác | Bị Chặn) = \\frac{0.0285}{0.0382} \\approx 0.746\\)."
    },
    {
        q: "Câu 16: Được biết 5% đàn ông mù màu và 0.25% phụ nữ mù màu. Giả sử số nam bằng số nữ. Chọn ngẫu nhiên một người mù màu. Xác suất người đó là đàn ông?",
        a: ["\\(\\frac{19}{21}\\)", "\\(\\frac{20}{21}\\)", "\\(\\frac{24}{25}\\)", "\\(\\frac{18}{25}\\)"],
        correct: 1,
        explain: "\\(P(Mù) = 0.5 \\times 0.05 + 0.5 \\times 0.0025 = 0.025 + 0.00125 = 0.02625\\). \\(P(Nam|Mù) = \\frac{0.025}{0.02625} = \\frac{2500}{2625} = \\frac{100}{105} = \\frac{20}{21}\\)."
    },
    {
        q: "Câu 17: Kết quả khảo sát một xã cho thấy 25% cư dân hút thuốc. Tỉ lệ mắc bệnh hô hấp trong người hút là 60%, ở người không hút là 25%. Nếu ta gặp một cư dân xã mắc bệnh hô hấp thì xác suất người đó có hút thuốc là bao nhiêu?",
        a: ["\\(\\frac{4}{9}\\)", "\\(\\frac{5}{9}\\)", "\\(\\frac{7}{9}\\)", "\\(\\frac{8}{9}\\)"],
        correct: 0,
        explain: "\\(P(Bệnh) = 0.25 \\times 0.6 + 0.75 \\times 0.25 = 0.15 + 0.1875 = 0.3375\\). \\(P(Hút|Bệnh) = \\frac{0.15}{0.3375} = \\frac{1500}{3375} = \\frac{4}{9}\\)."
    },
    {
        q: "Câu 18: Áo sơ mi An Phước phải qua 2 lần kiểm tra. Bình quân 98% qua kiểm tra lần 1. Và 95% số sản phẩm đó sẽ tiếp tục vượt qua lần 2. Tìm xác suất để 1 chiếc áo vượt qua cả 2 lần (đủ đk XK)?",
        a: ["\\(\\frac{95}{98}\\)", "\\(\\frac{931}{1000}\\)", "\\(\\frac{95}{100}\\)", "\\(\\frac{98}{100}\\)"],
        correct: 1,
        explain: "Đây là quy tắc nhân xác suất. \\(P(Qua 1 \\cap Qua 2) = P(Qua 1)P(Qua 2 | Qua 1) = 0.98 \\times 0.95 = 0.931 = \\frac{931}{1000}\\)."
    },
    {
        q: "Câu 19: Giả sử bệnh S có tỉ lệ phổ biến là 0.1%. Khi mắc bệnh thì 100% test dương tính. Tuy nhiên với người khỏe mạnh thì mắc dương tính giả tới 5%. Khi một người dương tính, xác suất thực sự mắc bệnh là:",
        a: ["1.96%", "1.69%", "1.97%", "0.5%"],
        correct: 0,
        explain: "\\(P(+) = P(S)\\times1 + P(\\overline{S})\\times0.05 = 0.001\\times 1 + 0.999\\times 0.05 = 0.05095\\). \\(P(S|+) = \\frac{0.001}{0.05095} \\approx 0.01962\\) tức khoảng 1.96%."
    },
    {
        q: "Câu 20: Giả sử tỉ lệ nghiện thuốc ở Hà Nội là 30%; tỉ lệ người bệnh phổi là 38% và tỉ lệ bị bệnh phổi TẬP TRUNG ở nhóm nghiện thuốc lá chiếm tới 80%? Không, 'tỉ lệ có bệnh phổi ở người dị ứng... v.v' (Nguyên bản: tỉ lệ bệnh phổi trong số người nghiện thuốc là 80%). Gặp 1 người bị bệnh phổi. Tính XS họ nghiện thuốc.",
        a: ["\\(\\frac{7}{13}\\)", "\\(\\frac{6}{19}\\)", "\\(\\frac{4}{13}\\)", "\\(\\frac{12}{19}\\)"],
        correct: 3,
        explain: "Dịch đề: \\(P(N) = 0.3\\), \\(P(Bệnh) = 0.38\\), \\(P(Bệnh|N) = 0.8\\). Áp dụng quy tắc ngược của Bayes: \\(P(N|Bệnh) = \\frac{P(Bệnh|N)P(N)}{P(Bệnh)} = \\frac{0.8 \\times 0.3}{0.38} = \\frac{0.24}{0.38} = \\frac{12}{19}\\)."
    },
    {
        q: "Câu 21: Đội I có 4 vđv, Đội II có 6 vđv. XS đạt HCB của vđv đội I là 0.7 và đội II là 0.6. Chọn một vđv. Giả sử vđv đó đạt HCB. Tính XS thuộc đội I.",
        a: ["\\(\\frac{8}{11}\\)", "\\(\\frac{11}{16}\\)", "\\(\\frac{3}{16}\\)", "\\(\\frac{7}{16}\\)"],
        correct: 3,
        explain: "\\(P(I) = \\frac{4}{10} = 0.4\\); \\(P(II) = 0.6\\). \\(P(HCB) = 0.4 \\times 0.7 + 0.6 \\times 0.6 = 0.28 + 0.36 = 0.64\\). \\(P(I|HCB) = \\frac{0.28}{0.64} = \\frac{28}{64} = \\frac{7}{16}\\)."
    },
    {
        q: "Câu 22: Ứng dụng dọn rác đt có xác suất chặn rác thực thụ là 0.8, và lỡ chặn nhầm cuộc gọi sạch là 0.01. Thống kê tỷ lệ rác là 10%. Chọn 1 cuộc NGHE ĐƯỢC (không bị chặn). XS là cuộc gọi sạch.",
        a: ["\\(\\frac{891}{911}\\)", "\\(\\frac{891}{1000}\\)", "\\(\\frac{123}{892}\\)", "\\(\\frac{213}{911}\\)"],
        correct: 0,
        explain: "\\(P(Sạch) = 0.9\\), \\(P(Rác) = 0.1\\). XS không bị chặn: \\(P(O) = P(R)\\times 0.2 + P(S)\\times 0.99 = 0.1 \\times 0.2 + 0.9 \\times 0.99 = 0.02 + 0.891 = 0.911\\). XS là gọi sạch: \\(0.891 / 0.911 = \\frac{891}{911}\\)."
    },
    {
        q: "Câu 23: Cộng đồng Châu Âu kiểm tra bệnh bò điên B. Nếu bò bệnh, phản ứng (+) là 70%, bò khỏe (+) sai là 10%. Tỉ lệ bò bệnh toàn châu Âu là 13 con/Triệu (0.000013). Khi bò test dương, tỉ lệ mắc thực sự là:",
        a: ["\\(\\frac{91}{100078}\\)", "\\(\\frac{91}{1000078}\\)", "\\(\\frac{91}{3000052}\\)", "\\(\\frac{91}{8999974}\\)"],
        correct: 1,
        explain: "\\(P(+) = \\frac{13}{10^6} \\times 0.7 + (1 - \\frac{13}{10^6}) \\times 0.1 = 0.0000091 + 0.0999987 = 0.1000078\\). XS tỷ lệ mắc thực sự là: \\(\\frac{0.0000091}{0.1000078} = \\frac{91}{1000078}\\)."
    },
    {
        q: "Câu 24: Trường THPT Hòa Bình có 20% HS thuộc CLB Nhạc. 85% nhóm đó biết chơi Guitar. Và 10% HS ngoài đàn CLB cũng biết Guitar. Chọn 1 cậu bé đang cầm đàn Guitar. Xác suất cậu ta thuộc CLB Nhạc.",
        a: ["\\(\\frac{17}{25}\\)", "\\(\\frac{7}{25}\\)", "\\(\\frac{17}{29}\\)", "\\(\\frac{17}{75}\\)"],
        correct: 0,
        explain: "\\(P(Guitar) = P(CLB) \\times 0.85 + P(Ngoài) \\times 0.10 = 0.2 \\times 0.85 + 0.8 \\times 0.1 = 0.17 + 0.08 = 0.25\\). XS câu ta thuộc nhóm NS: \\(P(CLB|Guitar) = \\frac{0.17}{0.25} = \\frac{17}{25}\\)."
    }
];

let timeRemaining = 45 * 60;
let timerInterval;
let userName = "";
