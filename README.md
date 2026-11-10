# SVI YEP 2026–2027 – GitHub Pages package

Website tĩnh gồm 3 tab:
1. Bảng tổng hợp báo giá 4 khách sạn
2. Hình ảnh minh họa không gian khách sạn (17 ảnh)
3. Thực đơn: menu mở/thu gọn theo khách sạn, có ảnh trang bìa Hilton và hai PDF Hilton gốc

## Đăng lên GitHub
Giải nén ZIP, upload **toàn bộ nội dung bên trong thư mục** `SVI_YEP_GitHub_Package` lên thư mục gốc của repository; cần giữ nguyên các thư mục `assets/` và `menus/`. Kích hoạt GitHub Pages từ branch `main`, folder `/ (root)`.

## Cấu trúc
- `index.html` – giao diện 3 tab
- `styles.css` – giao diện
- `app.js` – dữ liệu báo giá + bộ lọc/tab
- `assets/venues/` – ảnh khách sạn nén WebP
- `assets/menus/` – ảnh bìa thực đơn Hilton
- `menus/` – hai bản PDF menu Hilton để xem chi tiết ký hiệu dị ứng

Giá và điều kiện là dữ liệu Working chưa chốt. Le Méridien, Lotte và Sheraton hiện chưa cung cấp danh sách món chi tiết trong các tài liệu đã nhận; chỉ trình bày tên gói và giá của họ.

CẢNH BÁO: GitHub Pages thường công khai. Cần xem xét quyền chia sẻ thông tin thương mại trước khi publish.

## Cập nhật Working – 07/11/2026
- Lotte Saigon: Sapphire Ballroom, diện tích 405 m², tối thiểu 100 khách (người dùng cung cấp).
- Dòng sân khấu Lotte, Le Méridien, Sheraton: “Sân khấu tiêu chuẩn theo thiết kế LED”; chưa có kích thước cụ thể.
- Hilton: giữ nguyên kích thước sân khấu trong báo giá.
- Không thay đổi các tab Thực đơn và Hình ảnh minh họa.


### Cập nhật thực đơn Lotte

Tab THỰC ĐƠN có đầy đủ Set Menu A/B/C và Buffet 1–5 (mở/thu gọn từng menu). Hai PDF gốc nằm trong `menus/` và được liên kết ngay trong tab. Mức giá giữ theo báo giá Lotte: Set A/B/C lần lượt 1.200.000 / 1.300.000 / 1.400.000đ nett; Buffet 1–2: 1.300.000đ nett, 3–4: 1.400.000đ nett, 5: 1.500.000đ nett. Giá chưa bao gồm đồ uống.


### Le Méridien – thực đơn mới (11/2026)
Tab THỰC ĐƠN đã bổ sung 3 Asian Set (Standard/Premium/Deluxe), 5 Buffet tiêu chuẩn (#1, #2.1, #2.2, #3.1, #3.2), 2 Buffet Luxury riêng (#3.1, #3.2). Nội dung menu được giữ nguyên theo bố cục ảnh từng trang PDF, thu gọn cho đến khi mở; nhấp ảnh để xem lớn. Các PDF gốc trong `menus/`, ảnh thực đơn ở `assets/menus/lemeridien/`. Giá Luxury 2.200.000đ++ là mức riêng chưa nằm trong 3 gói cơ sở, cần xác nhận quyền lợi.


## Tab thứ 4: SO SÁNH CHI PHÍ

So sánh riêng LOTTE SAIGON và LE MÉRIDIEN theo 120 / 150 khách hoặc quy mô tùy chỉnh. Chọn loại menu, 2/3 giờ đồ uống, nhập các khoản phát sinh và giả định thuế/phí để cập nhật tổng tiền. Lotte 450.000đ nett đồ uống 2 giờ, giờ thứ ba tạm tính +50%. Le Méridien đã gồm 2 giờ, giờ thứ ba 250.000đ++/khách; phí phục vụ/VAT tạm tính 5% và 8%, chưa xác nhận. Các khoản phát sinh không được điền không phải miễn phí. Giá và lựa chọn nhập lưu ở localStorage trên trình duyệt, không ảnh hưởng tab báo giá gốc. Có nút xuất CSV.

### Cập nhật Set Menu so sánh
Tab SO SÁNH CHI PHÍ chỉ so sánh các Set Menu Á (không chọn buffet). Le Méridien đã gồm 2 giờ bia/nước ngọt/nước lọc trong gói: 450.000đ++ là phân bổ tham khảo để bóc tách, không cộng hai lần; giờ 3: 250.000đ++/khách. Khi đổi menu, nội dung set menu gốc hiện ngay bên dưới thẻ khách sạn. Tab THỰC ĐƠN lưu lại buffet gốc như thư viện tài liệu, không dùng vào so sánh.


### Chi phí hai khách sạn (v4)
Le Méridien tách gói Set Menu thành giá món ăn quy đổi (giá gói trừ 450.000đ++ tham khảo) và đồ uống 2 giờ đã gồm 450.000đ++; phép tính tổng không trừ tiền đồ uống khỏi số thực thanh toán. Lotte có thêm ô phí phục vụ và VAT giả định (mặc định đều bằng 0 vì giá nett đã gồm thuế/phí). Le Méridien hiện có thực đơn chữ song ngữ, không phải ảnh trong tab so sánh. Bảng kê khoản bổ sung theo khách sạn cho phép sửa số lượng/giá, có những dòng chưa báo giá = 0 nhưng KHÔNG có nghĩa miễn phí. Tất cả chỉ là ngân sách mô phỏng; chưa chốt.

### Cập nhật biểu mẫu so sánh
Hai khách sạn có 6 trường cùng nhãn, thứ tự và bố cục. Đồ uống 2 giờ Le Méridien là phần phân bổ đã bao gồm giá gói, không cộng trùng. Giờ thứ 3 Lotte được nhập bằng số tiền nett/khách (mặc định 225.000đ, tương đương 50% của 450.000đ), Le Méridien mặc định 250.000đ++/khách. Lotte có giả định 0% phí bổ sung và VAT do giá nett, Le Méridien 5%/8% giả định. Dữ liệu trình duyệt được khởi tạo lại ở phiên bản v4 để tránh xung đột với trường phần trăm giờ thứ 3 cũ.


### Cập nhật biểu mẫu chi phí 10/11/2026
- Cả Lotte và Le Méridien mặc định phí phục vụ 5%, VAT giả định 8%. **Lotte giá nett đã gồm phí và thuế**, hai tỷ lệ 5%/8% ở Lotte chỉ là kịch bản cộng bổ sung theo yêu cầu, có thể gây cộng trùng: đặt về 0% để lập ngân sách theo báo giá.
- Le Méridien hiển thị Set Standard/Premium/Deluxe theo phần món ăn quy đổi: 1.100.000 / 1.300.000 / 1.550.000đ++; đồ uống 2 giờ 450.000đ++ được nhập riêng, không tính hai lần. Tổng gói chuẩn vẫn lần lượt 1.550.000 / 1.750.000 / 2.000.000đ++.
- Chuyển phiên bản lưu thiết lập từ v4 sang v5; chuyển giá gói cũ thành phần món ăn, bảo toàn bảng chi phí đã nhập.


### Bản cập nhật: Lotte giờ đồ uống thứ ba tự động (10/11/2026)
- Giá giờ thứ ba = 50% giá gói đồ uống hai giờ hiện đang chọn. Trường chỉ đọc, tự cập nhật khi đổi giá gói; không lưu giá cố định 225.000đ nữa. Khi chọn thời lượng 2 giờ thì chi phí giờ 3 không được cộng.
- Đã lược bỏ các đoạn giải thích dài, trùng lặp trong tab SO SÁNH CHI PHÍ. Các ghi chú thương mại cụ thể tại bảng giá và từng hạng mục vẫn giữ để đối chiếu.
