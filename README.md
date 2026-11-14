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

- **Thanh công cụ:** 3 kịch bản số khách (mặc định 120 / 140 / 150), đồ uống cố định 3 giờ (free flow giờ thứ 3 luôn tính để không hụt ngân sách), Khôi phục mặc định, Xuất PDF (A4 dọc/ngang; chi tiết kịch bản đang xem hoặc cả 3).
- **1 · Tổng chi phí dự trù:** Lotte | Le Méridien | Chênh lệch cho từng kịch bản, chia A · Ăn uống, B · LED/âm thanh/kỹ thuật, C · Đồ uống mang vào & mua thêm, D · Vận hành, tổng và bình quân/khách.
- **2 · Bảng đối chiếu chi tiết:** cùng hàng đầu chi phí, mỗi khách sạn một cột (Đơn giá · SL · Thành tiền). Ô “Miễn phí” = khách sạn không thu.
- **Ăn uống:** Lotte Set A/B/C 1.200.000 / 1.300.000 / 1.400.000đ++; đồ uống 2 giờ 250.000 / 450.000 / 600.000đ++; giờ thứ 3 = 50% gói 2 giờ. Le Méridien gói Festive Standard/Premium/Deluxe 1.550.000 / 1.750.000 / 2.000.000đ++ = món ăn + đồ uống free flow 2 giờ 450.000đ++; giờ thứ 3 250.000đ++.
- **Khoản bổ sung đang dùng:** LED, âm thanh & micro, phí mang thiết bị ngoài vào, rượu vang khách sạn, corkage vang/champagne, corkage rượu mạnh/soju, gửi xe máy, gửi ô tô. Le Méridien miễn phí LED (đến 3,375 × 7,2 m), âm thanh/micro, thiết bị ngoài, gửi xe; LED mở rộng tối đa 12 × 3,375 m cộng thêm 20.000.000đ++. Welcome Le Méridien chỉ miễn phí khi ≥150 khách hoặc doanh thu ≥250 triệu++; chưa đạt thì tính phí (tạm tính 300.000đ++/khách).
- **Dự phòng phát sinh:** chọn 0 / 5 / 10 / 15% để ra "Ngân sách đề xuất".
- Số liệu nhập lưu trong trình duyệt (khóa `svi-yep-compare-v8`). Bản trước khi chỉnh sửa lưu ở `_backup_truoc_sua_10-11/`.

## Tab thứ 5: GEM CENTER (địa điểm sự kiện, 11/2026)

- Nguồn: báo giá sự kiện GEM Center cho VPS Global ngày 29/01/2027 (150 khách bảo đảm, hiệu lực đến 18/11/2026, waiting list) và Set Menu 2026. Giá ++ = +5% phí phục vụ (hệ số 1,05); giá nett không cộng thêm.
- Tab 1 có thêm cột GEM Center và 9 hạng mục mới (đồ uống 2,5 giờ, module sân khấu, máy chiếu, máy lạnh setup, vệ sinh kim tuyến, dọn hoa, quá giờ). Dữ liệu 4 khách sạn giữ nguyên.
- Tab Thực đơn có thẻ GEM Center với 6 Set Menu dạng chữ; tab Hình ảnh có ô "Chưa có hình minh họa". PDF menu GEM chưa có trong `menus/`.
- Tab GEM CENTER (`gem.js`, lưu `svi-yep-gem-v1`): chọn sảnh ERA / Castor 4, 6 Set Menu, 3 gói đồ uống, 3 kịch bản số khách, số khách bảo đảm (tính tiền theo max(số khách, bảo đảm)). Ba nhóm: Set Menu & Đồ uống, LED, Các chi phí khác; mỗi khoản có tích chọn, đơn giá, ++/nett, SL, trạng thái (Dự tính / Đã chốt nội bộ / Chờ báo giá / Nhà cung cấp xác nhận), nguồn, ghi chú; gửi xe chọn SVI hoặc khách tự trả. Sửa khoản đã chốt sẽ tự chuyển về "Dự tính". Xuất PDF A4.
- Kiểm thử: `python3 tests/gem_test.py` (cần Playwright) — đối chiếu ERA 312.742.500đ, Castor 424.357.500đ, chênh 111.615.000đ, Menu 03 341.880.000đ, Menu 05 379.680.000đ, gửi xe nett, tắt khoản, khoản chưa giá, bảo đảm 150.

### Cập nhật 11/11/2026 (chiều)
- Tab Hình ảnh: thêm 6 ảnh GEM Center (`assets/venues/gem-01…06.webp`); trình bày lại theo khối địa điểm, lọc theo địa điểm, chọn cỡ lưới, bấm ảnh xem lớn (phím ← → / Esc).
- Tab Thực đơn: thêm "bảng giá nhanh" 5 địa điểm, lọc theo địa điểm, Mở/Thu gọn tất cả; ảnh trang menu mở trong khung xem lớn.
- Tab GEM CENTER: số lượng mặc định đồng bộ với Lotte/Le Méridien (LED 24 m², 4 micro, vang 5 chai, corkage vang 2 / rượu mạnh 6 chai, 80 xe máy, 50 ô tô, welcome & giờ thêm theo số khách — chưa có giá GEM). Kịch bản 120/140/150. Khóa lưu đổi sang `svi-yep-gem-v2`.
- (18:00) Tab GEM CENTER chuyển sang dự toán chốt: bỏ các khoản chưa có báo giá và khoản không dùng; bảng chi tiết hiển thị số cố định (không ô nhập), vẫn chọn được sảnh, Set Menu, gói đồ uống, số khách. Tổng mặc định (ERA, Menu 01, Heineken): 369.855.000đ.


### Cập nhật 13/11/2026
- Tab So sánh và tab GEM tính đúng đơn giá × số lượng theo báo giá, chưa bao gồm 5% phí phục vụ (PDF ghi rõ). Bỏ ô chọn phí phục vụ.
- Le Méridien thêm khoản LED mở rộng 12 × 3,375 m: 20.000.000đ.
- Đồ uống luôn tính free flow 3 giờ (Lotte giờ 3 = 50% gói 2 giờ; Le Méridien 250.000đ/khách); bỏ ô chọn số giờ. Kiểm thử `python3 tests/compare_test.py`: 81 tổ hợp menu × số khách, tổng = cộng chi tiết = công thức tính tay.
- Le Méridien: welcome miễn phí khi ≥150 khách hoặc tổng chi tiêu tại khách sạn ≥250 triệu (ăn uống + LED mở rộng + vang + corkage; không tính welcome) — theo thương lượng 13/11/2026.
- (14/11/2026) Bỏ toàn bộ chi phí welcome drink khỏi tab So sánh; nhóm còn lại: A Ăn uống, B LED/âm thanh/kỹ thuật, C Đồ uống mang vào & mua thêm, D Vận hành.

## Tab thứ 6: DANH MỤC CÔNG VIỆC (14/11/2026)

- Chuyển từ `SVI_YEP_Duyet_Danh_Muc_Cong_Viec.html` vào `tasks.js`: giữ nguyên 41 mục, ID, mã gốc, tên nhóm và khóa lưu `svi-yep-2025-work-items-approval-v1` (quyết định đã lưu vẫn còn).
- Bổ sung 17 mục chuẩn bị Gala Dinner với ID mới (01-04…01-07, 02-03…02-05, 03-06, 03-07, 04-14, 04-15, 05-04, 06-04…06-06, 07-08, 09-05), mã "Bổ sung", mặc định CHƯA CHỐT. Tổng 58 mục / 9 nhóm; ngày 14/11 bỏ mục 01-03 (phụ thu setup) theo yêu cầu → còn 57 mục; 01-02 đổi thành Free Flow 3 giờ; 04-05 đổi thành "Khu vực tiểu cảnh".
- Đầu tab có băng chủ đề Gala Dinner (thông điệp chủ đạo + 2 slogan kèm diễn giải); chọn 1 trong 5 chủ đề (Vươn Xa, Bứt Phá 2027, Chân Trời Mới, Hội Tụ & Vươn Tầm, Thắp Sáng Hành Trình), lưu `svi-yep-theme-v1`.
- Giữ: thống kê, tìm kiếm, lọc nhóm/trạng thái, ghi chú, In/PDF, Đặt lại. Không có xuất CSV (đã bỏ theo yêu cầu).

## Đồng bộ Firebase (tab Danh mục công việc)
- Cấu hình trong `firebase-config.js`; dữ liệu lưu tại nhánh `svi-yep-2026/tasks` của Realtime Database (`decisions`, `theme`, `log`).
- Mọi người mở trang dùng chung một bộ lựa chọn; mất mạng thì lưu tạm trên máy và tự gửi lại.
- Nút + ở mỗi hạng mục để thêm chi tiết công việc (đánh số 1, 2, 3…; Enter để thêm dòng tiếp, × để xóa); lưu tại `decisions/{mã}/subs`.
- Ô "Người thao tác" ghi tên vào Lịch sử hoạt động (40 thao tác gần nhất).
- Rules cần bật trên Firebase Console → Realtime Database → Rules:
```json
{ "rules": { "svi-yep-2026": { ".read": true, ".write": true }, "$other": { ".read": false, ".write": false } } }
```
