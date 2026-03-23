const quizAudioSrc = "";
const quizInfoHTML = `<h1 style="color: #2c3e50;">DẠNG 02: VIẾT PHƯƠNG TRÌNH MẶT CẦU</h1>
        <div style="text-align: left; max-width: 500px; margin: 0 auto; line-height: 1.6;">
            <p>📝 <strong>Số câu:</strong> 16 câu hỏi (Cả lý thuyết và bài tập thực tế)</p>
            <p>⏱️ <strong>Thời gian:</strong> 20 phút</p>
        </div>`;

const scriptURL = "https://script.google.com/macros/s/AKfycbzHsdXCSB8_eIfFzqyA-PMjz77FezLBhsoI-KmJGD9GQOgSQsdZarL_7U8YGgVi0DW9gQ/exec"; 
        
        const quizData = [
            // LÝ THUYẾT
            { 
                q: "Câu 1: (Lý thuyết) Theo phương pháp viết phương trình mặt cầu, để lập được phương trình mặt cầu ta cần xác định được các yếu tố nào?", 
                a: ["Tọa độ tâm và độ dài đường sinh.", "Tọa độ tâm I(a;b;c) và độ dài bán kính r.", "Tọa độ tâm I và một điểm bất kỳ trên mặt phẳng.", "Tọa độ tâm I và độ dài đường kính."], 
                correct: 1, 
                explain: "Dạng 2 (Phương pháp): Cần xác định được tọa độ tâm I(a;b;c) và độ dài bán kính r." 
            },
            { 
                q: "Câu 2: (Lý thuyết) Mặt cầu (S) có đường kính AB thì tọa độ tâm I của mặt cầu là:", 
                a: ["Giao điểm của đường thẳng AB và mặt phẳng trung trực của đoạn AB.", "Điểm A hoặc điểm B.", "Trung điểm của đoạn thẳng AB.", "Trọng tâm của tam giác OAB."], 
                correct: 2, 
                explain: "Bài toán 2: Mặt cầu (S) có đường kính AB thì tâm I(a;b;c) là trung điểm của AB." 
            },
            { 
                q: "Câu 3: (Lý thuyết) Mặt cầu (S) có tâm I và tiếp xúc với mặt phẳng (\\(\\alpha\\)) thì bán kính R của mặt cầu bằng:", 
                a: ["Khoảng cách từ tâm I đến điểm gốc tọa độ O.", "Khoảng cách từ gốc tọa độ O đến mặt phẳng (\\(\\alpha\\)).", "Khoảng cách từ tâm I đến mặt phẳng (\\(\\alpha\\)).", "Một nửa khoảng cách từ tâm I đến mặt phẳng (\\(\\alpha\\))."], 
                correct: 2, 
                explain: "Bài toán 3: Mặt cầu có tâm I(a;b;c) và tiếp xúc với (\\(\\alpha\\)) thì bán kính r = d(I, (\\(\\alpha\\)))." 
            },
            
            // BÀI TẬP ÁP DỤNG
            { 
                q: "Câu 4: (Bài tập 1a) Phương trình mặt cầu (S) có tâm I(7; -3; 0) và bán kính R = 8 là:", 
                a: ["\\((x-7)^2+(y+3)^2+z^2=8\\)", "\\((x-7)^2+(y+3)^2+z^2=64\\)", "\\((x+7)^2+(y-3)^2+z^2=64\\)", "\\((x-7)^2+(y+3)^2+z^2=16\\)"], 
                correct: 1, 
                explain: "Lời giải: \\((x-7)^2 + (y+3)^2 + z^2 = 8^2\\) hay \\((x-7)^2 + (y+3)^2 + z^2 = 64\\)." 
            },
            { 
                q: "Câu 5: (Bài tập 1b) Viết phương trình mặt cầu (S) có tâm M(3; 1; -4) và đi qua điểm N(1; 0; 1).", 
                a: ["\\((x-3)^2+(y-1)^2+(z+4)^2=30\\)", "\\((x-3)^2+(y-1)^2+(z+4)^2=\\sqrt{30}\\)", "\\((x+3)^2+(y+1)^2+(z-4)^2=30\\)", "\\((x-1)^2+y^2+(z-1)^2=30\\)"], 
                correct: 0, 
                explain: "Bán kính \\(R = MN = \\sqrt{(1-3)^2+(0-1)^2+(1+4)^2} = \\sqrt{30}\\). Phương trình: \\((x-3)^2+(y-1)^2+(z+4)^2=30\\)." 
            },
            { 
                q: "Câu 6: (Bài tập 1c) Phương trình mặt cầu có đường kính AB với A(4; 6; 8) và B(2; 4; 4) là:", 
                a: ["\\((x-3)^2+(y-5)^2+(z-6)^2=24\\)", "\\((x-3)^2+(y-5)^2+(z-6)^2=\\sqrt{6}\\)", "\\((x-3)^2+(y-5)^2+(z-6)^2=6\\)", "\\((x-3)^2+(y-5)^2+(z-6)^2=12\\)"], 
                correct: 2, 
                explain: "Tâm J là trung điểm của AB nên J(3; 5; 6). Bán kính \\(R = AJ = \\sqrt{1^2+1^2+2^2} = \\sqrt{6}\\). PT: \\((x-3)^2+(y-5)^2+(z-6)^2=6\\)." 
            },
            { 
                q: "Câu 7: (Bài tập 2) Trong không gian Oxyz, cho điểm I(1; -2; 3). Viết phương trình mặt cầu tâm I, cắt trục Ox tại hai điểm A và B sao cho \\(AB = 2\\sqrt{3}\\).", 
                a: ["\\((x-1)^2+(y+2)^2+(z-3)^2=4\\)", "\\((x-1)^2+(y+2)^2+(z-3)^2=16\\)", "\\((x-1)^2+(y+2)^2+(z-3)^2=13\\)", "\\((x-1)^2+(y+2)^2+(z-3)^2=3\\)"], 
                correct: 1, 
                explain: "Gọi H là trung điểm AB, IH vuông góc với Ox tại H(1;0;0). \\(IH = \\sqrt{(-2)^2+3^2}=\\sqrt{13}\\). Bán kính \\(R = \\sqrt{(\\sqrt{3})^2+13} = 4\\). Phương trình: \\((x-1)^2+(y+2)^2+(z-3)^2=16\\)." 
            },
            { 
                q: "Câu 8: (Bài tập 3) Viết phương trình mặt cầu (S) có tâm A(1; 2; -3) và tiếp xúc với trục Ox.", 
                a: ["\\((x-1)^2+(y-2)^2+(z+3)^2=13\\)", "\\((x-1)^2+(y-2)^2+(z+3)^2=\\sqrt{13}\\)", "\\((x-1)^2+(y-2)^2+(z+3)^2=4\\)", "\\((x-1)^2+(y-2)^2+(z+3)^2=9\\)"], 
                correct: 0, 
                explain: "\\(R = d(A, Ox) = \\sqrt{2^2+(-3)^2} = \\sqrt{13}\\). Phương trình: \\((x-1)^2+(y-2)^2+(z+3)^2=13\\)." 
            },
            { 
                q: "Câu 9: (Bài tập 4) Cho A(6; 0; 0), B(0; 4; 0), C(0; 0; 2). Mặt cầu ngoại tiếp tứ diện OABC có tâm và bán kính là:", 
                a: ["Tâm I(6; 4; 2), R = 14", "Tâm I(3; 2; 1), R = 14", "Tâm I(3; 2; 1), R = \\(\\sqrt{14}\\)", "Tâm I(6; 4; 2), R = \\(\\sqrt{14}\\)"], 
                correct: 2, 
                explain: "Thay tọa độ 4 điểm vào pt tổng quát giải ra a=3, b=2, c=1, d=0. Tâm I(3;2;1), R = \\(\\sqrt{3^2+2^2+1^2-0} = \\sqrt{14}\\)." 
            },
            { 
                q: "Câu 10: (Bài tập 5) Mặt cầu có tâm nằm trên mặt phẳng (Oyz) và đi qua các điểm A(0; 8; 0), B(4; 6; 2), C(0; 12; 4) có phương trình là:", 
                a: ["\\(x^2+(y-7)^2+(z-5)^2=26\\)", "\\(x^2+(y-7)^2+(z-5)^2=\\sqrt{26}\\)", "\\((x-4)^2+(y-6)^2+(z-2)^2=26\\)", "\\(x^2+(y+7)^2+(z+5)^2=26\\)"], 
                correct: 0, 
                explain: "Gọi tâm mặt cầu là I(0;b;c). Giải hệ phương trình IA=IB=IC tìm được b=7, c=5. Bán kính \\(R = \\sqrt{26}\\)." 
            },
            { 
                q: "Câu 11: (Bài tập 6) Gọi (P) là mặt phẳng đi qua A(1; 4; -3) và chứa trục Ox. Viết phương trình mặt cầu tâm I(1; 2; 1) tiếp xúc với (P).", 
                a: ["\\((x-1)^2+(y-2)^2+(z-1)^2=2\\)", "\\((x-1)^2+(y-2)^2+(z-1)^2=4\\)", "\\((x-1)^2+(y-2)^2+(z-1)^2=16\\)", "\\((x-1)^2+(y-2)^2+(z-1)^2=5\\)"], 
                correct: 1, 
                explain: "Mặt phẳng (P) đi qua A và chứa Ox có PT: 3y + 4z = 0. Bán kính \\(R = d(I, P) = \\frac{|3(2)+4(1)|}{5} = 2\\). Vậy phương trình có VP là \\(R^2 = 4\\)." 
            },
            { 
                q: "Câu 12: (Bài tập 8) Cho điểm A(-2; -4; 5). Mặt cầu tâm A cắt trục Oz tại hai điểm B, C sao cho tam giác ABC vuông. Phương trình mặt cầu là:", 
                a: ["\\((x+2)^2+(y+4)^2+(z-5)^2=20\\)", "\\((x+2)^2+(y+4)^2+(z-5)^2=40\\)", "\\((x+2)^2+(y+4)^2+(z-5)^2=\\sqrt{40}\\)", "\\((x-2)^2+(y-4)^2+(z+5)^2=40\\)"], 
                correct: 1, 
                explain: "Tam giác ABC vuông cân tại A. Gọi H là hình chiếu của A lên Oz. \\(AH = d(A, Oz) = \\sqrt{2^2+4^2} = \\sqrt{20}\\). Bán kính \\(R = AH\\sqrt{2} = \\sqrt{40}\\). PT: \\((x+2)^2+(y+4)^2+(z-5)^2=40\\)." 
            },
            { 
                q: "Câu 13: (Bài tập 9) Cho A(1;-1;1) và đường thẳng d: x=t, y=-1-2t, z=2-2t. Mặt phẳng (P) qua A và chứa d. Phương trình mặt cầu tâm I(2;3;-1) tiếp xúc với (P) là:", 
                a: ["\\((x-2)^2+(y-3)^2+(z+1)^2=4\\)", "\\((x-2)^2+(y-3)^2+(z+1)^2=2\\)", "\\((x-2)^2+(y-3)^2+(z+1)^2=16\\)", "\\((x-2)^2+(y-3)^2+(z+1)^2=\\sqrt{2}\\)"], 
                correct: 0, 
                explain: "PT mặt phẳng (P): 2x - y + 2z - 5 = 0. Bán kính \\(R = d(I, P) = \\frac{|2(2)-3+2(-1)-5|}{3} = 2\\). Phương trình mặt cầu có VP = 4." 
            },
            { 
                q: "Câu 14: (Bài tập 10) Phần mềm mô phỏng thiết bị thám hiểm có dạng hình cầu tọa độ tâm I(360; 200; 400) và bán kính r = 2m. Phương trình mặt cầu là:", 
                a: ["\\((x-360)^2+(y-200)^2+(z-400)^2=2\\)", "\\((x-360)^2+(y-200)^2+(z-400)^2=4\\)", "\\((x+360)^2+(y+200)^2+(z+400)^2=4\\)", "\\((x-360)^2+(y-200)^2+(z-400)^2=16\\)"], 
                correct: 1, 
                explain: "Bán kính bằng 2m nên vế phải của phương trình là \\(2^2 = 4\\)." 
            },
            
            // TOÁN THỰC TẾ
            { 
                q: "Câu 15: (Câu 11 - Thực tế) Một vòm được thiết kế có bề mặt là mặt cầu tâm I(1; 2; 20), bán kính bằng 50m và có đáy nằm trên mặt phẳng (Oxy). Chiều cao của vòm là bao nhiêu?", 
                a: ["50 m", "70 m", "20 m", "30 m"], 
                correct: 1, 
                explain: "Khoảng cách từ tâm I đến đáy (Oxy) là \\(z_I = 20m\\). Do bán kính bằng 50m, điểm cao nhất của vòm cách mặt đất: 20 + 50 = 70m." 
            },
            { 
                q: "Câu 16: (Câu 12 - Hệ thống GPS) Xác định vị trí M dựa vào 4 vệ tinh A(-1;6;3), B(4;8;1), C(9;6;7), D(-15;18;7). Biết MA=6, MB=7, MC=12, MD=24. Tính tổng T = \\(x_M + y_M + z_M\\).", 
                a: ["T = 2", "T = 3", "T = 4", "T = 5"], 
                correct: 0, 
                explain: "M là giao điểm của 4 mặt cầu. Gọi M(a;b;c). Giải hệ phương trình khoảng cách ta được a=1, b=2, c=-1. Vậy M(1;2;-1) và T = 1 + 2 - 1 = 2." 
            }
        ];

        let timeRemaining = 20 * 60; // 20 phút
        let timerInterval;
        let userName = "";

        // --- HÀM LOAD LỊCH SỬ LÀM BÀI TỪ LOCAL STORAGE ---