import sys
import traceback

def extract_docx(doc_path, txt_path):
    try:
        import docx
        doc = docx.Document(doc_path)
        with open(txt_path, 'w', encoding='utf-8') as f:
            for p in doc.paragraphs:
                if p.text.strip():
                    f.write(p.text + '\n')
        print("Success extracting docx.")
    except ImportError:
        print("python-docx missing")
    except Exception as e:
        print("Error:")
        traceback.print_exc()

if __name__ == '__main__':
    doc_path = r'C:\Users\cuong\Documents\Filedaytoan\PHAN NHẬT LINH FULL 3 khối\PHAN NHẬT LINH FULL 3 khối\TOÁN 12\Chương 06. Xác suất có điều kiện\Bài 02. Công thức xác suất toàn phần. Công thức Bayes\Bài 02_Dạng 01. Công thức xác suất toàn phần_GV.docx'
    txt_path = r'C:\Users\cuong\Documents\project\baitap\raw_text.txt'
    extract_docx(doc_path, txt_path)
