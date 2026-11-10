document.getElementById('total').textContent=64;
const rows=[{"group": "01 · Sảnh tiệc & thời gian", "label": "Tên sảnh / vị trí", "values": ["Sapphire Ballroom", "Ballroom · tầng 1", "Saigon Ballroom · tầng 5", "Altitude 23 · tầng 23"], "note": "", "notes": {"0": "Thông tin sảnh do người dùng cập nhật."}}, {"group": "01 · Sảnh tiệc & thời gian", "label": "Diện tích sảnh", "values": ["405 m²", "365 m²", "375 m²", "Tầng 23: 250 m²\nTầng 5: 240 m² / ballroom"], "note": "", "notes": {}}, {"group": "01 · Sảnh tiệc & thời gian", "label": "Quy mô / khách bảo đảm", "values": ["Tối thiểu 100 khách", "Tối thiểu 100 khách", "Tối thiểu 100 khách", "100–150 khách"], "note": "", "notes": {"3": "Giá dựa trên số khách được ghi trong báo giá; số lượng thay đổi có thể điều chỉnh giá."}}, {"group": "01 · Sảnh tiệc & thời gian", "label": "Thời gian tiệc trưa", "values": ["12:00–14:00", "", "", ""], "note": "", "notes": {}}, {"group": "01 · Sảnh tiệc & thời gian", "label": "Thời gian tiệc tối", "values": ["18:00–22:00", "18:00–22:00", "17:00–22:00", "18:00–22:00"], "note": "", "notes": {}}, {"group": "01 · Sảnh tiệc & thời gian", "label": "Thời gian setup", "values": ["Thêm 1 giờ trước tiệc", "Từ 15:00, nếu các ballroom xung quanh trống hỗ trợ mượn miễn phí để phục vụ hậu cần", "15:00–17:00 · miễn phí", "14:00–18:00"], "note": "", "notes": {"3": "Không cung cấp điều hòa lúc setup; có phụ thu nếu yêu cầu."}}, {"group": "01 · Sảnh tiệc & thời gian", "label": "Bố trí bàn", "values": ["Bàn tròn 10 hoặc 12 ghế", "Bàn tròn", "Bàn tròn 10 khách", "Bàn tròn"], "note": "", "notes": {}}, {"group": "01 · Sảnh tiệc & thời gian", "label": "Sân khấu / kích thước", "values": ["Sân khấu tiêu chuẩn theo thiết kế LED", "Sân khấu tiêu chuẩn theo thiết kế LED", "3,6 × 7,2 × 0,6 m", "Sân khấu tiêu chuẩn theo thiết kế LED"], "note": "", "notes": {}}, {"group": "01 · Sảnh tiệc & thời gian", "label": "Phí thuê sảnh", "values": ["", "Phụ thu nếu dưới mức bảo đảm", "Miễn phí nếu đủ 100 khách", "Bao gồm trong gói tiệc"], "note": "", "notes": {"0": "Chưa nêu phí thuê phòng riêng trong nội dung nhận được.", "2": "Có thể áp dụng phí nếu không đạt tối thiểu hoặc mức chi tiêu yêu cầu."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Set món Á · mức 1", "values": ["1.200.000đ nett/khách", "", "", "1.200.000đ++/khách"], "note": "", "notes": {"0": "Menu A; 10–12 khách/bàn, chỉ thức ăn.", "3": "Menu 1–3, chỉ thức ăn."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Set món Á · mức 2", "values": ["1.300.000đ nett/khách", "", "", "1.400.000đ++/khách"], "note": "", "notes": {"0": "Menu B.", "3": "Menu 4–6."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Set món Á · mức 3", "values": ["1.400.000đ nett/khách", "", "", "1.600.000đ++/khách"], "note": "", "notes": {"0": "Menu C.", "3": "Menu 7–9."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Set món Á · mức 4", "values": ["", "", "", "1.800.000đ++/khách"], "note": "", "notes": {"3": "Menu 10–12."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Buffet quốc tế · mức 1", "values": ["1.300.000đ nett/khách", "", "", "1.350.000đ++/khách"], "note": "", "notes": {"0": "Menu 1–2; tối thiểu 50 khách, chỉ thức ăn.", "3": "Menu 1–2; chỉ thức ăn."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Buffet quốc tế · mức 2", "values": ["1.400.000đ nett/khách", "", "", "1.450.000đ++/khách"], "note": "", "notes": {"0": "Menu 3–4.", "3": "Menu 3–4."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Buffet quốc tế · mức 3", "values": ["1.500.000đ nett/khách", "", "", "1.650.000đ++/khách"], "note": "", "notes": {"0": "Menu 5.", "3": "Menu 5–6."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Buffet quốc tế · mức 4", "values": ["", "", "", "1.750.000đ++/khách"], "note": "", "notes": {"3": "Menu 7."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Gói tiệc tích hợp · mức 1", "values": ["", "1.550.000đ++/khách", "1.780.000đ++/khách (T2–T5) / 1.980.000đ++/khách (T6–CN)", ""], "note": "", "notes": {"1": "Festive Package 1, gồm 2 giờ bia/nước ngọt/nước lọc; chưa nêu thực đơn cụ thể.", "2": "Year End & New Year Package, gồm menu lễ hội và 3 giờ bia/nước ngọt/nước/fruit punch."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Gói tiệc tích hợp · mức 2", "values": ["", "1.750.000đ++/khách", "", ""], "note": "", "notes": {"1": "Festive Package 2; 2 giờ bia/nước ngọt/nước lọc."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Gói tiệc tích hợp · mức 3", "values": ["", "2.000.000đ++/khách", "", ""], "note": "", "notes": {"1": "Festive Package 3; 2 giờ bia/nước ngọt/nước lọc."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Welcome canapé / mocktail", "values": ["300.000đ nett/khách/giờ", "Miễn phí có điều kiện", "Welcome snacks", ""], "note": "", "notes": {"0": "Bao gồm 3 canapé và 1 mocktail hoặc nước ép; chỉ dùng khi chọn thực đơn.", "1": "01 lượt mocktail HOẶC 02 món canapé; chỉ áp dụng khi đạt 150 khách hoặc 250 triệu đồng++ doanh thu.", "2": "Áp dụng quyền lợi gói từ 100 khách; báo giá không nêu số lượng."}}, {"group": "02 · Thực đơn / ẩm thực", "label": "Sparkling wine / quà F&B", "values": ["", "Voucher buffet hải sản 2 người", "02 chai sparkling wine + voucher F&B 2.000.000đ", ""], "note": "", "notes": {"1": "Quyền lợi chỉ áp dụng cho 150 khách hoặc doanh thu tối thiểu 250 triệu đồng++.", "2": "Quyền lợi với tối thiểu 100 khách."}}, {"group": "03 · Gói đồ uống", "label": "Không giới hạn 2 giờ · nước ngọt/nước lọc", "values": ["250.000đ nett/khách", "", "", "300.000đ++/khách"], "note": "", "notes": {"3": "Báo giá ghi soft drinks; không xác nhận nước lọc trong gói này."}}, {"group": "03 · Gói đồ uống", "label": "Không giới hạn 2 giờ · bia + nước ngọt", "values": ["450.000đ nett/khách", "Đã gồm trong 3 gói festive", "", "550.000đ++/khách"], "note": "", "notes": {"0": "Bia Tiger và nước suối.", "1": "Bia, nước ngọt, nước lọc.", "3": "Bia Tiger."}}, {"group": "03 · Gói đồ uống", "label": "Không giới hạn 2 giờ · bia + vang nhà", "values": ["600.000đ nett/khách", "", "", "650.000đ++/khách"], "note": "", "notes": {"0": "Bia Tiger, nước ngọt/nước suối và rượu vang nhà.", "3": "Bia Tiger, nước ngọt và vang đỏ/trắng."}}, {"group": "03 · Gói đồ uống", "label": "Không giới hạn 3 giờ · nước ngọt", "values": ["", "", "", "400.000đ++/khách"], "note": "", "notes": {}}, {"group": "03 · Gói đồ uống", "label": "Không giới hạn 3 giờ · bia + nước ngọt", "values": ["", "", "Đã gồm trong gói tiệc", "650.000đ++/khách"], "note": "", "notes": {"2": "Bia, nước ngọt, fruit punch, nước lọc.", "3": "Bia Tiger."}}, {"group": "03 · Gói đồ uống", "label": "Không giới hạn 3 giờ · bia + vang nhà", "values": ["", "", "", "750.000đ++/khách"], "note": "", "notes": {}}, {"group": "03 · Gói đồ uống", "label": "Giờ đồ uống phát sinh", "values": ["50% đơn giá gói/giờ", "250.000đ++/khách/giờ", "400.000đ++/khách/giờ", ""], "note": "", "notes": {"0": "Báo giá ghi giờ phát sinh 50% đơn giá, cần xác nhận cách áp dụng cho từng gói.", "1": "Thêm giờ bia/nước ngọt/nước lọc.", "2": "Thêm giờ nước ngọt/nước lọc/bia."}}, {"group": "03 · Gói đồ uống", "label": "Nâng cấp thêm vang nhà (3 giờ)", "values": ["", "", "300.000đ++/khách", ""], "note": "", "notes": {}}, {"group": "03 · Gói đồ uống", "label": "Đổi bia Tiger sang Heineken", "values": ["70.000đ nett/khách", "", "", ""], "note": "", "notes": {}}, {"group": "03 · Gói đồ uống", "label": "Rượu vang chai tại khách sạn", "values": ["1.300.000đ nett/chai 750 ml", "", "", ""], "note": "", "notes": {"0": "Chiara Terra Merlot (đỏ) hoặc Trebbiano (trắng)."}}, {"group": "04 · Đồ uống mang vào / corkage", "label": "Bia, nước ngọt, nước suối", "values": ["400.000đ nett/thùng 24 chai/lon", "", "", ""], "note": "", "notes": {}}, {"group": "04 · Đồ uống mang vào / corkage", "label": "Soju", "values": ["600.000đ nett/thùng 20 chai", "", "", ""], "note": "", "notes": {"0": "Mỗi chai 360 ml."}}, {"group": "04 · Đồ uống mang vào / corkage", "label": "Vang / champagne", "values": ["400.000đ nett/chai 750 ml", "", "", "400.000đ++/chai 750 ml"], "note": "", "notes": {"3": "Báo giá ghi “house wine” mang vào."}}, {"group": "04 · Đồ uống mang vào / corkage", "label": "Rượu mạnh", "values": ["600.000đ nett/chai 750 ml", "", "", "750.000đ++/chai 750 ml"], "note": "", "notes": {}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Backdrop tiêu chuẩn", "values": ["", "Miễn phí · 3 × 4 m", "", ""], "note": "", "notes": {"1": "Chỉ cho 150 khách hoặc doanh thu bảo đảm ≥250 triệu đồng++."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Backdrop Hiflex tính phí", "values": ["250.000đ nett/m²", "", "", "5.000.000đ nett/cái"], "note": "", "notes": {"3": "Kích thước 4 × 3 m hoặc 2,4 × 5,4 m; gửi nội dung trước 7 ngày làm việc."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Standee", "values": ["950.000đ nett/cái", "", "", ""], "note": "", "notes": {"0": "Kích thước 2 × 0,8 m."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "LED tích hợp / miễn phí", "values": ["", "P1.5 · 3,375 × 7,2 m", "Saigon Ballroom I: 4,8 × 2,7 m", ""], "note": "", "notes": {"1": "Chỉ áp dụng 150 khách hoặc tối thiểu 250 triệu đồng++.", "2": "Gói tối thiểu 100 khách; báo giá còn liệt kê LED Grand Ballroom I 5,7 × 3,2 m nhưng phụ thuộc phòng dùng."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Thuê LED bổ sung", "values": ["1.200.000đ nett/m²/ngày", "", "", "1.200.000đ++/m²"], "note": "", "notes": {"0": "Tối thiểu 10 m², bao gồm laptop điều khiển, bộ điều khiển và 1 kỹ thuật viên; không gồm các thiết bị phụ.", "3": "Các phương án kích thước 2 × 4 m hoặc 3 × 4 m."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Nâng cấp LED", "values": ["", "20.000.000đ++", "", ""], "note": "", "notes": {"1": "Nâng LED lên 12 × 3,375 m; phải kiểm tra điều kiện ưu đãi gói LED cơ sở."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Bút laser trình chiếu LED", "values": ["1.100.000đ nett/ngày", "", "", ""], "note": "", "notes": {}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Âm thanh / ánh sáng tiêu chuẩn", "values": ["Máy chiếu, màn chiếu, bục, 2 micro, flipchart", "Âm thanh + ánh sáng, 4 micro không dây", "", "Máy chiếu LCD, màn chiếu, bục và 2 micro"], "note": "", "notes": {"1": "Chỉ trong gói quyền lợi đáp ứng điều kiện 150 khách hoặc doanh thu 250 triệu đồng++.", "2": "Báo giá không liệt kê chi tiết gói âm thanh ánh sáng tiêu chuẩn."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Micro không dây bổ sung", "values": ["1.000.000đ nett/micro/ngày", "", "", ""], "note": "", "notes": {"0": "Gồm loại cổ ngỗng, cầm tay, đeo tai/đầu."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Ánh sáng chuyên nghiệp", "values": ["", "", "Từ 9.000.000đ++/show", ""], "note": "", "notes": {}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "MC chuyên nghiệp (tiếng Việt)", "values": ["", "", "Từ 9.000.000đ++/show", ""], "note": "", "notes": {}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Photobooth", "values": ["", "", "Miễn phí · 2 giờ", ""], "note": "", "notes": {"2": "Quyền lợi với tối thiểu 100 khách."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Bàn lễ tân / hoa trang trí", "values": ["Bàn lễ tân, hoa tươi tiêu chuẩn", "Hoa bàn lễ tân & bàn tròn", "Hoa trang trí bàn ăn", "Bàn lễ tân & bàn cocktail có hoa"], "note": "", "notes": {"1": "Quyền lợi theo ngưỡng 150 khách hoặc 250 triệu đồng++."}}, {"group": "05 · Trang trí, sân khấu, LED & kỹ thuật", "label": "Phí mang thiết bị ngoài vào", "values": ["8.000.000đ nett/sự kiện (4 giờ)", "", "", ""], "note": "", "notes": {"0": "Áp dụng thiết bị âm thanh, ánh sáng, LED hoặc chương trình giải trí do bên ngoài mang vào."}}, {"group": "06 · Gửi xe, tiện ích & vận hành", "label": "Gửi xe máy", "values": ["6.000đ nett/xe/4 giờ", "Miễn phí có điều kiện", "", "Miễn phí theo chỗ trống"], "note": "", "notes": {"1": "Quyền lợi cho số khách bảo đảm, khi đáp ứng ngưỡng ưu đãi.", "3": "Ưu đãi đặc biệt, tùy tình trạng chỗ."}}, {"group": "06 · Gửi xe, tiện ích & vận hành", "label": "Gửi ô tô", "values": ["50.000đ nett/xe/4 giờ", "Miễn phí có điều kiện", "", "250.000đ nett/lượt"], "note": "", "notes": {"1": "Theo số khách bảo đảm và điều kiện ưu đãi."}}, {"group": "06 · Gửi xe, tiện ích & vận hành", "label": "Wi-Fi", "values": ["Miễn phí theo tiêu chuẩn", "Miễn phí tốc độ cao", "", ""], "note": "", "notes": {"1": "Theo điều kiện ưu đãi 150 khách hoặc doanh thu 250 triệu đồng++."}}, {"group": "06 · Gửi xe, tiện ích & vận hành", "label": "Giới hạn âm thanh / giờ kết thúc", "values": ["Giảm âm lượng từ 21:30; dừng trước 22:00", "", "Phải trả sảnh đúng giờ, thêm giờ tùy tình trạng", ""], "note": "", "notes": {"0": "Khách sạn có quyền chỉnh âm lượng."}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Cách ghi giá", "values": ["nett = đã gồm phí & thuế", "++ = chưa rõ tỷ lệ phí, thuế", "++ = +5% phí phục vụ, rồi VAT hiện hành", "++ = +5% phí phục vụ & 8% VAT"], "note": "", "notes": {"1": "Không tự quy đổi khi chưa xác nhận tỷ lệ.", "3": "Giá nett của Sheraton đã gồm 5% phí và 8% VAT."}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Ưu đãi giá gói", "values": ["", "", "Giảm 15% (T2–T5) / 10% (T6–CN)", ""], "note": "", "notes": {"2": "Early Bird: xác nhận và đặt cọc trước 30/11/2026, áp dụng inquiry mới; phải xác minh hiệu lực."}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Ngưỡng quyền lợi bổ sung", "values": ["", "150 khách HOẶC ≥250.000.000đ++", "Tối thiểu 100 khách", ""], "note": "", "notes": {"1": "Ưu đãi gồm LED, backdrop, welcome, âm thanh/ánh sáng, gửi xe, Wi-Fi và voucher.", "2": "Gồm LED, photobooth, welcome snacks, sparkling wine và voucher F&B."}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Hiệu lực báo giá", "values": ["05 ngày kể từ ngày gửi", "Không nêu", "Đến 07/11/2026", "Đến 11/11/2026"], "note": "", "notes": {}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Giữ sảnh / tình trạng", "values": ["Chưa giữ chỗ", "Chưa giữ sảnh; xác nhận tối đa 30 ngày trước sự kiện", "Chưa giữ sảnh, có dòng chờ xác minh waitlist", "Đang waitlist; chưa giữ sảnh"], "note": "", "notes": {"1": "Ưu tiên đoàn lưu trú, ký hợp đồng và cọc mới giữ sảnh.", "2": "Có đoạn waitlist kèm “Delete if not applicable”; cần hỏi lại."}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Đặt cọc / thanh toán", "values": ["80% khi ký; 20% trước 3 ngày làm việc", "", "30% khi xác nhận; 50% trước 3 tháng; còn lại trước 1 tháng", ""], "note": "", "notes": {"0": "Các khoản thanh toán trước không hoàn lại.", "2": "Phát sinh trả cuối tiệc."}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Phí hủy", "values": ["", "", "30% / 80% / 100% theo thời điểm", ""], "note": "", "notes": {"2": "30% ban đầu; 80% nếu hủy từ 90–30 ngày; 100% nếu còn ≤29 ngày."}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Hạn chốt số khách / thực đơn", "values": ["", "", "7 ngày làm việc trước sự kiện", "Khách: trước 72 giờ; menu: 7 ngày làm việc"], "note": "", "notes": {"2": "Thanh toán theo số bảo đảm hoặc thực tế, lấy số cao hơn.", "3": "Báo giá ghi tối đa 5% biến động số khách."}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Giấy phép sự kiện / biểu diễn", "values": ["", "", "", "Phải xin phép nếu thuộc diện yêu cầu"], "note": "", "notes": {"3": "Khách sạn nêu giấy phép biểu diễn/chương trình liên quan phải cung cấp ít nhất 3 ngày làm việc trước sự kiện."}}, {"group": "07 · Thuế, ưu đãi & điều kiện thương mại", "label": "Điểm cần xác minh về thời gian", "values": ["", "Gói đề tên Festive 2025/2026, sự kiện Jan 2027", "Lịch ghi Feb 2026", "Tiêu đề Jan 2027, bảng ghi Jan 2026"], "note": "", "notes": {"1": "Cần xác nhận báo giá có áp dụng cho tháng 1/2027.", "2": "Đề nghị cập nhật lại năm tổ chức.", "3": "Đề nghị sửa ngày trong bảng báo giá."}}];
const groups=[...new Set(rows.map(r=>r.group))];
const select=document.getElementById('group');
groups.forEach(g=>{const o=document.createElement('option');o.value=g;o.textContent=g;select.appendChild(o)});
const esc=(s)=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let visible=[];
function render(){const q=document.getElementById('search').value.trim().toLowerCase();const group=select.value;const priced=document.getElementById('onlyprice').checked;visible=rows.filter(r=>(!group||r.group===group)&&(!priced||r.values.some(v=>/\d[.,]\d{3}\s*đ|\d{3}\.000đ|\d+%/.test(v)))&&(!q||[r.label,r.group,r.note,...r.values,...Object.values(r.notes)].join(' ').toLowerCase().includes(q)));let prev='';let html='';visible.forEach(r=>{if(r.group!==prev){prev=r.group;html+=`<tr class="group-row"><th colspan="5">${esc(prev)}</th></tr>`;}html+=`<tr><th scope="row">${esc(r.label)}${r.note?'<div class="note">'+esc(r.note)+'</div>':''}</th>`;r.values.forEach((v,i)=>{html+='<td>'+(v?'<div class="val">'+esc(v)+'</div>':'<div class="empty"></div>')+(r.notes[i]?'<div class="note">'+esc(r.notes[i])+'</div>':'')+'</td>'});html+='</tr>'});document.getElementById('body').innerHTML=html||'<tr><td colspan="5" style="padding:34px;text-align:center" class="muted">Không tìm thấy hạng mục phù hợp.</td></tr>';document.getElementById('counter').textContent=visible.length+' / '+rows.length+' hạng mục';}
['search','group','onlyprice'].forEach(id=>document.getElementById(id).addEventListener(id==='search'?'input':'change',render));
document.getElementById('reset').addEventListener('click',()=>{document.getElementById('search').value='';select.value='';document.getElementById('onlyprice').checked=false;render()});
document.getElementById('csv').addEventListener('click',()=>{const headers=['Nhóm','Hạng mục','Lotte Saigon','Le Méridien','Hilton Saigon','Sheraton Saigon','Ghi chú chung'];const lines=[headers,...visible.map(r=>[r.group,r.label,...r.values.map((v,i)=>v+(r.notes[i]?' | Ghi chú: '+r.notes[i]:'')),r.note])];const blob=new Blob(['\ufeff'+lines.map(a=>a.map(x=>'"'+String(x??'').replace(/"/g,'""')+'"').join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='YEP_SVI_So_Sanh_4_Khach_San.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});
document.getElementById('print').addEventListener('click',()=>window.print());render();

// Separate quote and photo panels without external dependencies.
(function(){
 const buttons=[...document.querySelectorAll('.content-tab')];
 function selectTab(name){
  buttons.forEach(btn=>{const on=btn.dataset.panel===name;btn.classList.toggle('active',on);btn.setAttribute('aria-selected',String(on));btn.tabIndex=on?0:-1});
  ['prices','gallery','menus','compare'].forEach(id=>{document.getElementById('panel-'+id).hidden=id!==name});
 }
 buttons.forEach((button,index)=>{
  button.addEventListener('click',()=>selectTab(button.dataset.panel));
  button.addEventListener('keydown',ev=>{if(ev.key!=='ArrowLeft'&&ev.key!=='ArrowRight')return;ev.preventDefault();const next=buttons[(index+(ev.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length];selectTab(next.dataset.panel);next.focus()})
 });
 selectTab('prices');
})();

// Keep menu cover images inside the menu tab; filter hotel cards without loading more pages.
document.querySelectorAll('[data-filter-menu]').forEach(button=>button.addEventListener('click',()=>{
 const hotel=button.dataset.filterMenu;
 document.querySelectorAll('[data-filter-menu]').forEach(b=>b.classList.toggle('active',b===button));
 document.querySelectorAll('[data-menu-hotel]').forEach(card=>card.hidden=hotel!=='all'&&card.dataset.menuHotel!==hotel);
}));

// Set Menu comparison: full itemized fees, editable costs and readable menus.
(function(){
 const ids=['cp-guests','cp-hours','cp-lotte-menu','cp-lotte-drink','cp-lotte-service','cp-lotte-vat','cp-lotte-extras','cp-lm-menu','cp-lm-included-drink','cp-lm-extra-hour','cp-lm-service','cp-lm-vat','cp-lm-extras','cp-meal-status-lotte','cp-meal-status-lm'];
 const defaults={'cp-guests':'120','cp-hours':'3','cp-lotte-menu':'1200000','cp-lotte-drink':'450000','cp-lotte-extra-hour':'225000','cp-lotte-service':'5','cp-lotte-vat':'8','cp-lotte-extras':'0','cp-lm-menu':'1100000','cp-lm-included-drink':'450000','cp-lm-extra-hour':'250000','cp-lm-service':'5','cp-lm-vat':'8','cp-lm-extras':'0','cp-meal-status-lotte':'draft','cp-meal-status-lm':'draft'};
 const el=id=>document.getElementById(id),num=id=>Math.max(0,Number(el(id).value)||0),fmt=n=>Math.round(n).toLocaleString('vi-VN')+'đ',set=(id,v)=>{el(id).textContent=v};
 const keys=['lotte','lm'];const lineRows=[...document.querySelectorAll('tr[data-cp-extra]')];
 const key='svi-yep-comparison-itemized-v6';const oldKey='svi-yep-comparison-itemized-v5';
 function store(){try{
    const fields={};ids.forEach(id=>fields[id]=el(id).value);
    const costs={};lineRows.forEach(row=>{
      costs[row.dataset.cpExtra+':'+row.dataset.extraKey]={
        qty:row.querySelector('.cp-qty').value,price:row.querySelector('.cp-price').value,
        use:row.querySelector('.cp-use').checked,status:row.querySelector('.cp-status').value
      }
    });localStorage.setItem(key,JSON.stringify({fields,costs}));
  }catch(_){}}
 function restore(){let data={};try{data=JSON.parse(localStorage.getItem(key)||localStorage.getItem(oldKey)||localStorage.getItem('svi-yep-comparison-itemized-v4')||'{}')}catch(_){}
  if(!localStorage.getItem(key)&&data.fields){
    data.fields['cp-lotte-service']=data.fields['cp-lotte-service']??'5';
    data.fields['cp-lotte-vat']=data.fields['cp-lotte-vat']??'8';
    const map={'1550000':'1100000','1750000':'1300000','2000000':'1550000'};
    data.fields['cp-lm-menu']=map[data.fields['cp-lm-menu']]||data.fields['cp-lm-menu'];
  }
  ids.forEach(id=>{const v=String(data.fields?.[id]??defaults[id]);el(id).value=(el(id).tagName==='SELECT' && ![...el(id).options].some(o=>o.value===v))?defaults[id]:v});
  lineRows.forEach(row=>{
    const d=data.costs?.[row.dataset.cpExtra+':'+row.dataset.extraKey];
    if(d){row.querySelector('.cp-qty').value=d.qty;row.querySelector('.cp-price').value=d.price;}
    row.querySelector('.cp-use').checked=d?.use??(Boolean(d)&&Number(d.qty)>0);
    row.querySelector('.cp-status').value=d?.status||((d?.use??Number(d?.qty)>0)?'draft':'draft');
  });
 }
 function menuPreview(){const a=el('cp-lotte-menu').selectedIndex,b=el('cp-lm-menu').selectedIndex;document.querySelectorAll('.cp-menu-panel').forEach(p=>{p.hidden=Number(p.dataset.menuIndex)!==(p.dataset.cpMenu==='lotte'?a:b)})}
 function calcExtras(hotel,servicePct,vatPct){
   let subtotal=0,ledTotal=0,otherTotal=0,selected=0,confirmed=0,pending=0,unpriced=0,approvedTotal=0;
   const ledKeys=new Set(['led','ledupgrade','ledbase']);
   lineRows.filter(r=>r.dataset.cpExtra===hotel).forEach(row=>{
     const checked=row.querySelector('.cp-use').checked;
     const qty=Math.max(0,Number(row.querySelector('.cp-qty').value)||0);
     const price=Math.max(0,Number(row.querySelector('.cp-price').value)||0);
     const base=checked?qty*price:0;
     const fee=row.dataset.basis==='++'?base*servicePct/100:0;
     const tax=row.dataset.basis==='++'?(base+fee)*vatPct/100:0;
     const total=base+fee+tax;
     const statusControl=row.querySelector('.cp-status');
     if(checked){
       selected++;
       if(statusControl.value==='confirmed'&&(price<=0||qty<=0)){statusControl.value='pending'}
       if(statusControl.value==='confirmed'){confirmed++;approvedTotal+=total}
       if(statusControl.value==='pending')pending++;
       if(price<=0||qty<=0)unpriced++;
     }
     row.classList.toggle('cp-cost-inactive',!checked);
     row.classList.toggle('cp-cost-confirmed',checked&&statusControl.value==='confirmed');
     row.querySelector('.cp-row-total').textContent=fmt(total);
     subtotal+=total;
     if(ledKeys.has(row.dataset.extraKey))ledTotal+=total;else otherTotal+=total;
   });
   set('cp-cost-sum-'+hotel,fmt(subtotal));
   set('cp-selected-'+hotel,selected+' khoản được tính');
   set('cp-status-overview-'+hotel,' · '+confirmed+' đã chốt'+(unpriced?' · '+unpriced+' thiếu giá/số lượng':''));
   return {subtotal,ledTotal,otherTotal,selected,confirmed,pending,unpriced,approvedTotal};
 }
 function renderProgress(hotel,mealBase,guests,costs,manual){
    const mealStatus=el('cp-meal-status-'+hotel).value;
    const confirmedMeal=mealStatus==='confirmed'?mealBase*guests:0;
    const confirmedTotal=confirmedMeal+costs.approvedTotal;
    const plannedTotal=mealBase*guests+costs.subtotal+manual;
    const unconfirmed=plannedTotal-confirmedTotal;
    el('cp-progress-'+hotel).innerHTML=
      '<div class="cp-progress-line"><span>Đã chốt nội bộ</span><strong>'+fmt(confirmedTotal)+'</strong></div>'+
      '<div class="cp-progress-line"><span>Đang dự tính/chưa chốt</span><strong>'+fmt(unconfirmed)+'</strong></div>'+
      '<div class="cp-progress-line"><span>Đã chọn</span><strong>'+costs.selected+' khoản</strong></div>'+
      '<div class="cp-progress-line"><span>Còn thiếu đơn giá / số lượng</span><strong>'+costs.unpriced+' khoản</strong></div>'+
      '<div class="cp-progress-line cp-progress-total"><span>Tổng dự toán hiện tại</span><strong>'+fmt(plannedTotal)+'</strong></div>';
 }
 function calc(){
  const guests=Math.max(1,Math.floor(num('cp-guests'))||1),hours=num('cp-hours');
  const lMenu=num('cp-lotte-menu'),lD2=num('cp-lotte-drink'),lD3=hours===3?lD2*0.5:0;el('cp-lotte-extra-hour').value=String(lD2*0.5);
  const lPre=lMenu+lD2+lD3,lSvc=lPre*num('cp-lotte-service')/100,lVat=(lPre+lSvc)*num('cp-lotte-vat')/100,lBase=lPre+lSvc+lVat;
  const mFood=num('cp-lm-menu'),mAlloc=num('cp-lm-included-drink'),mPackage=mFood+mAlloc,mD3=hours===3?num('cp-lm-extra-hour'):0,mPre=mPackage+mD3,mSvc=mPre*num('cp-lm-service')/100,mVat=(mPre+mSvc)*num('cp-lm-vat')/100,mBase=mPre+mSvc+mVat;
  const lExtraBreakdown=calcExtras('lotte',num('cp-lotte-service'),num('cp-lotte-vat'));
  const mExtraBreakdown=calcExtras('lm',num('cp-lm-service'),num('cp-lm-vat'));
  const lManual=num('cp-lotte-extras'),mManual=num('cp-lm-extras');
  const lLed=lExtraBreakdown.ledTotal,mLed=mExtraBreakdown.ledTotal;
  const lOtherItems=lExtraBreakdown.otherTotal,mOtherItems=mExtraBreakdown.otherTotal;
  const lOther=lOtherItems+lManual,mOther=mOtherItems+mManual;
  const lExtra=lLed+lOther,mExtra=mLed+mOther;
  set('cp-line-menu-l',fmt(lMenu)+' nett');set('cp-line-menu-m',fmt(mFood)+'++');
  set('cp-line-included-l',fmt(lD2)+' nett');set('cp-line-included-m',fmt(mAlloc)+'++');
  set('cp-line-extrahour-l',hours===3?fmt(lD3)+' nett':'0đ');set('cp-line-extrahour-m',hours===3?fmt(mD3)+'++':'0đ');
  set('cp-line-tax-l',fmt(lSvc+lVat));set('cp-line-tax-m',fmt(mSvc+mVat));
  set('cp-line-person-l',fmt(lBase));set('cp-line-person-m',fmt(mBase));
  set('cp-line-led-l',fmt(lLed));set('cp-line-led-m',fmt(mLed));
  set('cp-line-otheritems-l',fmt(lOtherItems));set('cp-line-otheritems-m',fmt(mOtherItems));
  set('cp-line-manual-l',fmt(lManual));set('cp-line-manual-m',fmt(mManual));
  set('cp-line-other-l',fmt(lOther));set('cp-line-other-m',fmt(mOther));
  for(const n of [120,150]){set('cp-line-'+n+'-l',fmt(n*lBase));set('cp-line-'+n+'-m',fmt(n*mBase));set('cp-line-'+n+'full-l',fmt(n*lBase+lExtra));set('cp-line-'+n+'full-m',fmt(n*mBase+mExtra))}
  renderProgress('lotte',lBase,guests,lExtraBreakdown,lManual);
  renderProgress('lm',mBase,guests,mExtraBreakdown,mManual);
  set('cp-line-custom-label',guests+' khách · set menu & đồ uống');
  const lBaseTotal=guests*lBase,mBaseTotal=guests*mBase;
  set('cp-line-custombase-l',fmt(lBaseTotal));set('cp-line-custombase-m',fmt(mBaseTotal));
  const lt=lBaseTotal+lExtra,mt=mBaseTotal+mExtra;set('cp-line-custom-l',fmt(lt));set('cp-line-custom-m',fmt(mt));
  set('cp-difference',(lt===mt?'Hai phương án bằng nhau':(lt<mt?'Lotte thấp hơn ':'Le Méridien thấp hơn ')+fmt(Math.abs(lt-mt))));
  set('cp-context','Bảng so sánh '+hours+' giờ đồ uống; phí phục vụ '+num('cp-lotte-service')+'% / VAT '+num('cp-lotte-vat')+'% cho Lotte và '+num('cp-lm-service')+'% / '+num('cp-lm-vat')+'% cho Le Méridien. Lưu ý giá Lotte vốn nett đã gồm thuế/phí: nên đặt hai ô Lotte về 0% khi lập dự toán chi trả để tránh cộng trùng. Các khoản chưa có đơn giá và để 0 chưa được cộng vào tổng.');
  const qualifies=guests>=150 || guests*mPackage>=250000000;
  el('cp-benefits').innerHTML='<div><strong>LOTTE · GIÁ NỀN THẤP NHƯNG ÍT QUYỀN LỢI KỸ THUẬT</strong><p>405 m²; 1.200.000–1.400.000đ nett suất ăn; đồ uống 450.000đ nett/2 giờ. Phí welcome, màn LED, backdrop, thiết bị ngoài, nâng cấp kỹ thuật được kê ở bảng chi phí dưới thẻ Lotte. Chưa có báo giá sân khấu hoặc âm thanh biểu diễn hoàn chỉnh.</p></div>'+
  '<div><strong>LE MÉRIDIEN · QUYỀN LỢI PHỤ THUỘC NGƯỠNG</strong><p>'+(qualifies?'<b>Đạt ngưỡng về số khách/doanh thu trong phép tính; vẫn cần xác nhận với khách sạn.</b>':'<b>Chưa đạt ngưỡng quyền lợi theo giả định.</b>')+' LED P1.5 3,375 × 7,2 m, backdrop 3 × 4 m, âm thanh/ánh sáng tiêu chuẩn, 4 micro, hoa, gửi xe và 01 lượt welcome mocktail <b>HOẶC</b> 02 canapé. Điều kiện ≥150 khách HOẶC doanh thu bảo đảm ≥250 triệu đồng++ trước thuế (cần xác minh). Đây không phải tất cả dịch vụ được miễn phí ở 120 khách.</p></div>';
  menuPreview();return {guests,hours,lMenu,lD2,lD3,lSvc,lVat,lBase,lLed,lOtherItems,lManual,lOther,lExtra,mPackage,mFood,mAlloc,mD3,mSvc,mVat,mBase,mLed,mOtherItems,mManual,mOther,mExtra,lt,mt}
 }
 [...ids.map(el),...lineRows.flatMap(r=>[r.querySelector('.cp-qty'),r.querySelector('.cp-price'),r.querySelector('.cp-use'),r.querySelector('.cp-status')])].forEach(input=>{input.addEventListener('input',()=>{
    const row=input.closest('tr[data-cp-extra]');
    if(row){
      if(input.classList.contains('cp-use') && input.checked && Number(row.querySelector('.cp-qty').value)===0)row.querySelector('.cp-qty').value='1';
      if(input.classList.contains('cp-qty') && Number(input.value)>0)row.querySelector('.cp-use').checked=true;
      if((input.classList.contains('cp-qty') || input.classList.contains('cp-price')) && row.querySelector('.cp-status').value==='confirmed')row.querySelector('.cp-status').value='draft';
      if(input.classList.contains('cp-status') && input.value==='confirmed'){
        row.querySelector('.cp-use').checked=true;
        if(Number(row.querySelector('.cp-qty').value)===0)row.querySelector('.cp-qty').value='1';
      }
    }
    if(!row && (input.id==='cp-lotte-menu'||input.id==='cp-lm-menu'||input.id==='cp-lotte-drink'||input.id==='cp-lm-included-drink'||input.id==='cp-hours'||input.id==='cp-lotte-service'||input.id==='cp-lotte-vat'||input.id==='cp-lm-service'||input.id==='cp-lm-vat')){
      if(input.id==='cp-lotte-menu'||input.id==='cp-lotte-drink'||input.id==='cp-lotte-service'||input.id==='cp-lotte-vat')el('cp-meal-status-lotte').value='draft';
      if(input.id==='cp-lm-menu'||input.id==='cp-lm-included-drink'||input.id==='cp-lm-service'||input.id==='cp-lm-vat')el('cp-meal-status-lm').value='draft';
      if(input.id==='cp-hours'){el('cp-meal-status-lotte').value='draft';el('cp-meal-status-lm').value='draft';}
    }
    calc();store();
  });if(input.tagName==='SELECT')input.addEventListener('change',()=>{calc();store()})});
 el('cp-reset').addEventListener('click',()=>{ids.forEach(id=>el(id).value=defaults[id]);lineRows.forEach(r=>{r.querySelector('.cp-qty').value='0';r.querySelector('.cp-use').checked=false;r.querySelector('.cp-status').value='draft'});calc();store()});
 el('cp-export').addEventListener('click',()=>{const d=calc();
const rows=[['Hạng mục','Lotte','Le Méridien'],
['1. Chi phí Set Menu & đồ uống','',''],
['Set Menu / khách',d.lMenu,d.mFood],
['Đồ uống 2 giờ / khách',d.lD2,d.mAlloc],
['Đồ uống giờ thứ 3 / khách',d.hours===3?d.lD3:0,d.hours===3?d.mD3:0],
['Phí phục vụ & VAT / khách',d.lSvc+d.lVat,d.mSvc+d.mVat],
['Tổng set menu & đồ uống / khách',d.lBase,d.mBase],
['120 khách · set menu & đồ uống',120*d.lBase,120*d.mBase],
['150 khách · set menu & đồ uống',150*d.lBase,150*d.mBase],
['2. Chi phí LED','',''],
['LED đang chọn (toàn sự kiện)',d.lLed,d.mLed],
['3. Các chi phí khác','',''],
['Các khoản khác từ bảng kê',d.lOtherItems,d.mOtherItems],
['Phát sinh chưa phân loại',d.lManual,d.mManual],
['Tổng chi phí khác',d.lOther,d.mOther],
['Tổng dự trù · số khách tự chọn',d.lt,d.mt],
['120 khách · gồm LED & chi phí khác',120*d.lBase+d.lExtra,120*d.mBase+d.mExtra],
['150 khách · gồm LED & chi phí khác',150*d.lBase+d.lExtra,150*d.mBase+d.mExtra]];
  lineRows.forEach(r=>{const hotel=r.dataset.cpExtra;const used=r.querySelector('.cp-use').checked;const qty=Math.max(0,Number(r.querySelector('.cp-qty').value)||0);const price=Math.max(0,Number(r.querySelector('.cp-price').value)||0);const subtotal=used?qty*price:0;rows.push(['Khoản thêm: '+r.querySelectorAll('td')[1].textContent+' | '+(used?'Tính':'Không tính')+' | '+r.querySelector('.cp-status').selectedOptions[0].textContent+' | SL '+qty,hotel==='lotte'?subtotal:'',hotel==='lm'?subtotal:''])});
  const csv='\ufeff'+rows.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(',')).join('\r\n');const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='SVI_Lotte_LeMeridien_ChiPhi_ChiTiet.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)
 });
 restore();calc();
})();
