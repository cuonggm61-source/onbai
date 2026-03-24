import sys
try:
    import fitz # PyMuPDF
except ImportError:
    print("PyMuPDF not installed")
    sys.exit(1)

def extract_pdf(pdf_path, txt_path):
    try:
        doc = fitz.open(pdf_path)
        with open(txt_path, 'w', encoding='utf-8') as f:
            for page in doc:
                f.write(page.get_text())
        print("Success extracting PDF.")
    except Exception as e:
        print("Error:", e)

if __name__ == '__main__':
    extract_pdf(r'C:\Users\cuong\Documents\Filedaytoan\PHAN NHẬT LINH FULL 3 khối\PHAN NHẬT LINH FULL 3 khối\TOÁN 12\Chương 06. Xác suất có điều kiện\Bài 02. Công thức xác suất toàn phần. Công thức Bayes\Bài 02_Dạng 01. Công thức xác suất toàn phần_GV.pdf', r'C:\Users\cuong\Documents\project\baitap\pdf_text.txt')
