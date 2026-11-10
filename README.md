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


## Tab thứ 4: SO SÁNH CHI PHÍ (Lotte Saigon · Le Méridien)

- **Thanh công cụ:** 3 kịch bản số khách (mặc định 120 / 140 / 150), 2 hoặc 3 giờ đồ uống, phí phục vụ chung cho cả hai khách sạn (mặc định 5%); bảng tính không bao gồm VAT, Khôi phục mặc định, Xuất CSV, Xuất PDF (A4 dọc/ngang; chi tiết kịch bản đang xem hoặc cả 3).
- **1 · Tổng chi phí dự trù:** Lotte | Le Méridien | Chênh lệch cho từng kịch bản, chia A · Ăn uống, B · LED/âm thanh/kỹ thuật, C · Welcome/đồ uống mang vào/vận hành, tổng và bình quân/khách.
- **2 · Bảng đối chiếu chi tiết:** cùng hàng đầu chi phí, mỗi khách sạn một cột (Đơn giá · SL · Thành tiền). Ô “Miễn phí” = khách sạn không thu.
- **Ăn uống:** Lotte Set A/B/C 1.200.000 / 1.300.000 / 1.400.000đ++; đồ uống 2 giờ 250.000 / 450.000 / 600.000đ++; giờ thứ 3 = 50% gói 2 giờ. Le Méridien gói Festive Standard/Premium/Deluxe 1.550.000 / 1.750.000 / 2.000.000đ++ = món ăn + đồ uống free flow 2 giờ 450.000đ++; giờ thứ 3 250.000đ++.
- **Khoản bổ sung đang dùng:** LED, âm thanh & micro, phí mang thiết bị ngoài vào, welcome, rượu vang khách sạn, corkage vang/champagne, corkage rượu mạnh/soju, gửi xe máy, gửi ô tô. Le Méridien miễn phí LED (đến 3,375 × 7,2 m), âm thanh/micro, thiết bị ngoài, gửi xe; LED mở rộng tối đa 12 × 3,375 m cộng thêm 20.000.000đ++. Welcome Le Méridien chỉ miễn phí khi ≥150 khách hoặc doanh thu ≥250 triệu++; chưa đạt thì tính phí (tạm tính 300.000đ++/khách).
- **Dự phòng phát sinh:** chọn 0 / 5 / 10 / 15% để ra "Ngân sách đề xuất".
- Số liệu nhập lưu trong trình duyệt (khóa `svi-yep-compare-v8`). Bản trước khi chỉnh sửa lưu ở `_backup_truoc_sua_10-11/`.
