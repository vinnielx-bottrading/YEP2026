
// ===== DANH MỤC CÔNG VIỆC (duyệt GIỮ / LOẠI BỎ / CHƯA CHỐT) =====
// Gốc: SVI_YEP_Duyet_Danh_Muc_Cong_Viec.html — 41 mục giữ nguyên ID; 17 mục bổ sung ID mới. Khóa lưu giữ nguyên để không mất quyết định đã lưu.
(function(){
 const root=document.getElementById('tk-root');if(!root)return;
 const ITEMS=[{"id": "cs-01", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.1", "title": "Chốt chủ đề và mạch câu chuyện nối tiếp YEP 2025 (Tầm nhìn → Vị thế)", "sourceNote": "", "owner": "svi", "due": "2026-11-25"}, {"id": "cs-02", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.2", "title": "Hoàn thiện brief và gửi agency (khung cứng: địa điểm, LED có sẵn, trần 4,2 m, ngân sách, hạn nộp)", "sourceNote": "", "owner": "svi", "due": "2026-11-25"}, {"id": "cs-03", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.3", "title": "Agency đề xuất: concept, key visual, tối thiểu 3 khoảnh khắc “wow”, kịch bản sơ bộ, báo giá", "sourceNote": "", "owner": "agency", "due": "2026-12-08"}, {"id": "cs-04", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.4", "title": "Agency thuyết trình, chấm điểm và chọn agency", "sourceNote": "", "owner": "svi", "due": "2026-12-12"}, {"id": "cs-05", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.5", "title": "Ký hợp đồng agency", "sourceNote": "", "owner": "svi", "due": "2026-12-15"}, {"id": "cs-06", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.6", "title": "Chốt concept sáng tạo tổng thể và các khoảnh khắc “wow”", "sourceNote": "", "owner": "svi-agency", "due": "2026-12-20"}, {"id": "cs-07", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.7", "title": "Tiết mục mở màn và nghi thức khai mạc “Thắp sáng vị thế” trên LED", "sourceNote": "", "owner": "agency", "due": "2027-01-10"}, {"id": "cs-08", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.8", "title": "Nghi thức vinh danh và nghi thức khai tiệc", "sourceNote": "", "owner": "agency", "due": "2027-01-10"}, {"id": "cs-09", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.9", "title": "Hoạt động tương tác: mosaic chân dung, bàn tiệc mang tên dấu mốc", "sourceNote": "", "owner": "svi-agency", "due": "2027-01-10"}, {"id": "cs-10", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.10", "title": "Chốt danh sách khách mời và danh sách vinh danh", "sourceNote": "", "owner": "svi", "due": "2027-01-05"}, {"id": "cs-11", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.11", "title": "Bài phát biểu của Ban Lãnh đạo", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "01-01", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.1", "title": "Set Menu (Platinum)", "sourceNote": "", "owner": "svi-hotel", "due": "2027-01-10"}, {"id": "01-02", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.2", "title": "Nước uống (Free Flow package – 3 giờ)", "sourceNote": "Local beer, soft drink, water", "owner": "svi-hotel", "due": "2027-01-10"}, {"id": "01-04", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.3", "title": "Chốt địa điểm: Le Méridien Saigon (đã chọn sau khi so sánh Lotte, GEM Center)", "owner": "svi", "due": "2026-11-17", "done": true}, {"id": "01-05", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.4", "title": "Thử món (food tasting) và chốt thực đơn", "owner": "svi-hotel", "due": "2027-01-08"}, {"id": "01-06", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.5", "title": "Sơ đồ bố trí bàn tiệc và chỗ ngồi (seating plan)", "owner": "svi", "due": "2027-01-22"}, {"id": "01-07", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.6", "title": "Tổng duyệt chương trình tại ballroom (rehearsal kỹ thuật + MC + tiết mục)", "owner": "svi-agency", "due": "2027-01-28"}, {"id": "n-1-7", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.7", "title": "Ký hợp đồng, đặt cọc với Le Méridien", "sourceNote": "", "owner": "svi", "due": "2026-11-30"}, {"id": "n-1-8", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.8", "title": "Chốt giờ setup, thi công và tổng duyệt với khách sạn", "sourceNote": "", "owner": "svi-hotel", "due": "2026-12-15"}, {"id": "02-01", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.1", "title": "Thiết kế & in mẫu thiệp mời + bao lì xì (theo key visual)", "sourceNote": "", "owner": "svi", "due": "2026-12-31"}, {"id": "02-02", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.2", "title": "Sản xuất thiệp chúc Tết + bao lì xì", "sourceNote": "", "owner": "svi", "due": "2027-01-15"}, {"id": "02-03", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.3", "title": "Bộ nhận diện chủ đề: key visual, logo chủ đề (giao file gốc cho SVI)", "owner": "agency", "due": "2026-12-20"}, {"id": "02-04", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.4", "title": "Thẻ tên bàn, menu card, bảng chỉ dẫn", "owner": "svi", "due": "2027-01-22"}, {"id": "02-05", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.5", "title": "Kịch bản chương trình chi tiết (run-down theo phút)", "owner": "svi-agency", "due": "2027-01-10"}, {"id": "n-2-6", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.6", "title": "Thư mời điện tử (e-invite) – gửi khách mời và CBNV", "sourceNote": "", "owner": "svi", "due": "2027-01-12"}, {"id": "n-2-7", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.7", "title": "Ấn phẩm vinh danh: bằng khen, giấy chứng nhận, slide vinh danh", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "n-2-8", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.8", "title": "Dress code và thông báo nội bộ về chương trình", "sourceNote": "", "owner": "svi", "due": "2027-01-12"}, {"id": "03-01", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.1", "title": "MC (1 nam, 1 nữ)", "sourceNote": "", "owner": "agency", "due": "2026-12-31"}, {"id": "03-02", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.2", "title": "PG", "sourceNote": "Đón khách, hỗ trợ khu tiểu cảnh", "owner": "agency", "due": "2027-01-15"}, {"id": "03-03", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.3", "title": "Vũ đoàn", "sourceNote": "8 dancer: 4 nam + 4 nữ", "owner": "agency", "due": "2026-12-31"}, {"id": "03-04", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.4", "title": "Ca sĩ nữ 1", "sourceNote": "", "owner": "agency", "due": "2026-12-31"}, {"id": "03-05", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.5", "title": "Ca sĩ nữ 2", "sourceNote": "", "owner": "agency", "due": "2026-12-31"}, {"id": "03-06", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.6", "title": "Ban tổ chức và phân công (check-in, hậu cần, kỹ thuật, quà)", "owner": "svi", "due": "2026-11-30"}, {"id": "03-07", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.7", "title": "Tiết mục văn nghệ nội bộ (đăng ký, tập luyện)", "owner": "svi", "due": "2027-01-20"}, {"id": "n-3-8", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.8", "title": "Ông đồ cho chữ (liên hệ, chốt lịch, chuẩn bị bộ chữ theo chủ đề)", "sourceNote": "", "owner": "svi", "due": "2026-12-31"}, {"id": "04-01", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.1", "title": "Hashtag cầm tay (Formex dán PP)", "sourceNote": "", "owner": "agency", "due": "2027-01-22"}, {"id": "04-02", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.2", "title": "Ứng dụng quay số may mắn", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "04-03", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.3", "title": "Backdrop + Mockup Logo SVI", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-04", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.4", "title": "Photobooth chính", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-05", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.5", "title": "Khu vực tiểu cảnh – góc ông đồ cho chữ", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-06", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.6", "title": "Logo hộp đèn SVI trên sân khấu", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-07", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.7", "title": "Bảng giải thưởng", "sourceNote": "", "owner": "agency", "due": "2027-01-22"}, {"id": "04-08", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.8", "title": "In thiệp mời YEP (khách mời + CBNV cũ)", "sourceNote": "Dự kiến 60 bộ", "owner": "svi", "due": "2027-01-08"}, {"id": "04-09", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.9", "title": "Màn hình LED 12 m (10 tấm di động – có sẵn tại Le Méridien)", "sourceNote": "Loại P3; số thứ tự trong tài liệu trùng mục trước", "owner": "hotel", "due": "2027-01-28"}, {"id": "04-10", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.10", "title": "Âm thanh (khách sạn có sẵn – chỉ thuê bổ sung nếu cần)", "sourceNote": "", "owner": "hotel", "due": "2027-01-28"}, {"id": "04-11", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.11", "title": "Ánh sáng (28 đèn beam + 28 đèn PAR có sẵn – agency bổ sung hiệu ứng)", "sourceNote": "", "owner": "hotel", "due": "2027-01-28"}, {"id": "04-12", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.12", "title": "Màn sao", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-13", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.13", "title": "Photoshoot – khu vực chụp ảnh theo concept sự kiện", "owner": "agency", "due": "2027-01-26"}, {"id": "04-14", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.14", "title": "Trang trí bàn tiệc và hoa theo chủ đề", "owner": "svi-hotel", "due": "2027-01-28"}, {"id": "04-15", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.15", "title": "Nội dung trình chiếu LED theo chủ đề (opening, chuyển cảnh)", "owner": "agency", "due": "2027-01-20"}, {"id": "n-4-16", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.16", "title": "Hành lang “Hành trình” dẫn vào ballroom (YEP 2025 · Tầm nhìn → YEP 2026 · Vị thế)", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "n-4-17", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.17", "title": "Check-in và bức tường “Mảnh ghép vị thế”", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "n-4-18", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.18", "title": "Hiệu ứng sân khấu bổ sung (pháo giấy, khói lạnh…)", "sourceNote": "", "owner": "agency", "due": "2027-01-28"}, {"id": "05-01", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.1", "title": "Quay hình sự kiện", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "05-02", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.2", "title": "Chụp hình sự kiện", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "05-03", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.3", "title": "TVC giới thiệu công ty đầu giờ + clip recap sau sự kiện", "sourceNote": "", "owner": "agency", "due": "2027-01-20"}, {"id": "05-04", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.4", "title": "Đăng tải hình ảnh, video lên kênh nội bộ / mạng xã hội", "owner": "svi", "due": "2027-02-05"}, {"id": "n-5-5", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.5", "title": "Thu thập tư liệu, số liệu năm 2026 cho video và vinh danh", "sourceNote": "", "owner": "svi", "due": "2026-12-20"}, {"id": "n-5-6", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.6", "title": "Video tổng kết hoạt động năm 2026 của SVI Group và các đơn vị thành viên", "sourceNote": "", "owner": "svi-agency", "due": "2027-01-20"}, {"id": "06-01", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.1", "title": "Chi phí vận chuyển", "sourceNote": "", "owner": "agency", "due": "2027-01-28"}, {"id": "06-02", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.2", "title": "Chi phí lắp đặt, tháo dỡ", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "06-03", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.3", "title": "Chi phí quản lý, giám sát, điều phối, chạy chương trình", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "06-04", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.4", "title": "Đưa đón khách mời / xe di chuyển", "owner": "svi", "due": "2027-01-29"}, {"id": "06-05", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.5", "title": "Hướng dẫn gửi xe, đón tiếp, check-in khách", "owner": "svi-hotel", "due": "2027-01-29"}, {"id": "06-06", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.6", "title": "Giấy phép biểu diễn (nếu địa điểm yêu cầu)", "owner": "agency", "due": "2027-01-15"}, {"id": "07-01", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.1", "title": "Giải đặc biệt (Voucher – số lượng 1 giải)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-02", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.2", "title": "Giải nhất (Voucher – số lượng 2 giải)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-03", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.3", "title": "Giải nhì – 3 giải (1 chỉ vàng SJC)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-04", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.4", "title": "Giải ba – 4 giải (iPad Mini 7 128GB)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-05", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.5", "title": "Giải khuyến khích – 6 giải (Máy lọc không khí)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-06", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.6", "title": "Giải tinh thần – Tiền mặt", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-07", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.7", "title": "Quà tặng Mini-Game – 3 giải nhất", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-08", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.8", "title": "Thể lệ quay số và mini-game", "owner": "svi", "due": "2027-01-15"}, {"id": "08-01", "group": "08", "groupName": "Chi phí khác", "ref": "8.1", "title": "Tiền hỗ trợ nhân sự chạy chương trình (Nghệ sĩ, kỹ thuật,...)", "sourceNote": "Phát sinh sau sự kiện", "owner": "svi", "due": "2027-01-29"}, {"id": "n-8-2", "group": "08", "groupName": "Chi phí khác", "ref": "8.2", "title": "Nghiệm thu, quyết toán chi phí với agency và khách sạn", "sourceNote": "", "owner": "svi", "due": "2027-02-05"}, {"id": "09-01", "group": "09", "groupName": "Quà tặng", "ref": "B.1a", "title": "Quà tặng khách mời – Chủ tịch", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-02", "group": "09", "groupName": "Quà tặng", "ref": "B.1b", "title": "Quà tặng cơ quan, sở ban ngành", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-03", "group": "09", "groupName": "Quà tặng", "ref": "B.1c", "title": "Quà tặng CBNV đang làm việc", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-04", "group": "09", "groupName": "Quà tặng", "ref": "B.1d", "title": "Quà tặng CBNV cũ", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-05", "group": "09", "groupName": "Quà tặng", "ref": "B.1e", "title": "Vinh danh cá nhân và tập thể xuất sắc (cúp, kỷ niệm chương)", "owner": "svi", "due": "2027-01-20"}, {"id": "n-b-1f", "group": "09", "groupName": "Quà tặng", "ref": "B.1f", "title": "Quà ra về / quà tiễn khách kèm lì xì, thiệp chúc Tết", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}];
 const KEY='svi-yep-2025-work-items-approval-v1', THEME_KEY='svi-yep-theme-v1';
 const THEMES=[
  {id:'tnvt',name:'TẦM NHÌN MỚI – VỊ THẾ MỚI',msg:'Kế thừa trực tiếp YEP 2025: từ tầm nhìn đã xác lập, hướng đến xác lập vị thế mới.',kw:'Hành động – Bứt phá – Nâng tầm',slogans:[{t:'Từ tầm nhìn – Đến vị thế',d:'Nối thẳng chủ đề năm trước sang năm nay; ai từng dự YEP 2025 đều hiểu ngay mạch câu chuyện.'},{t:'Tầm nhìn dẫn lối – Vị thế khẳng định',d:'Tầm nhìn là định hướng, vị thế là kết quả của hành động trong năm.'}],look:'Đỏ đậm & vàng kim · con đường đi lên từ ánh bình minh',c1:'#8e1b1b',c2:'#f2c45a'},
  {id:'vungtamnhin',name:'VỮNG TẦM NHÌN – VƯƠN VỊ THẾ',msg:'Kiên định mục tiêu đã đặt ra, không ngừng nâng cao vị thế.',kw:'Kiên định – Bứt phá – Vươn lên',slogans:[{t:'Vững từ gốc – Vươn tới tầm',d:'Ngắn, có nhịp, dễ đưa lên LED và ấn phẩm.'},{t:'Kiên định hôm nay – Vững vàng ngày mai',d:'Thông điệp ổn định, tin cậy gửi tới CBNV và đối tác.'}],look:'Đỏ đậm & vàng kim · rễ vững, cành vươn cao',c1:'#7f1d1d',c2:'#f5c76b'}];
 const JOURNEY=[
  {y:'2025',full:'Year End Party 2025 – Mừng Xuân 2026',when:'Đã tổ chức đầu năm 2026',name:'KỶ NGUYÊN MỚI – TẦM NHÌN MỚI',kw:'Định hướng – Chuyển mình – Khai mở',d:'Nhận diện cơ hội trong kỷ nguyên mới, xác lập tầm nhìn, đổi mới tư duy và định hướng phát triển.'}];
 const $=id=>document.getElementById(id);
 const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let decisions={};try{decisions=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){decisions={}}
 let theme='';try{theme=localStorage.getItem(THEME_KEY)||''}catch(e){}
 const sections=[...new Map(ITEMS.map(i=>[i.group,i.groupName])).entries()];
 const CUSTOM_KEY='svi-yep-custom-items-v1';
 let custom={};try{custom=JSON.parse(localStorage.getItem(CUSTOM_KEY)||'{}')||{}}catch(e){custom={}}
 function saveCustom(){try{localStorage.setItem(CUSTOM_KEY,JSON.stringify(custom))}catch(e){}}
 const gno=code=>String(sections.findIndex(s=>s[0]===code)+1).padStart(2,'0');
 function allItems(){
  const out=[];
  for(const [g,name] of sections){
   const base=ITEMS.filter(i=>i.group===g);out.push(...base);
   const extra=Object.entries(custom).filter(([k,v])=>v&&v.group===g).sort((a,b)=>(a[1].at||0)-(b[1].at||0)||a[0].localeCompare(b[0]));
   const nums=base.map(i=>/^([0-9A-Z]+)\.(\d+)$/.exec(i.ref)).filter(Boolean).map(m=>+m[2]);const pre=(base.map(i=>/^([0-9A-Z]+)\.\d+$/.exec(i.ref)).find(Boolean)||[])[1];
   const letters=base.map(i=>/^B\.1([a-z])$/.exec(i.ref)).filter(Boolean).map(m=>m[1].charCodeAt(0));
   extra.forEach(([k,v],n)=>{
    const ref=nums.length&&pre?pre+'.'+(Math.max(...nums)+1+n):letters.length?'B.1'+String.fromCharCode(Math.max(...letters)+1+n):String(n+1);
    out.push({id:'c-'+k,k,group:g,groupName:name,ref,title:v.title||'',sourceNote:'',custom:true})});
  }
  // Mã thống nhất: NN.MM (NN = số thứ tự nhóm, MM = thứ tự trong nhóm)
  const cnt={};out.forEach(i=>{cnt[i.group]=(cnt[i.group]||0)+1;i.srcRef=i.ref;i.ref=gno(i.group)+'.'+String(cnt[i.group]).padStart(2,'0')});
  return out}
 const state=id=>decisions[id]?.status||'pending';
 function save(){try{localStorage.setItem(KEY,JSON.stringify(decisions))}catch(e){}}
 function renderTheme(){
  const t=THEMES.find(x=>x.id===theme);
  const b=$('tk-theme-banner');
  const journey='<div class="tk-journey">'+JOURNEY.map(j=>'<div class="tk-jy"><span class="tk-jy-y">YEP '+j.y+'</span><small class="tk-jy-when">'+esc(j.when)+'</small><small class="tk-jy-full">'+esc(j.full)+'</small><b>'+esc(j.name)+'</b><em>'+esc(j.kw)+'</em><p>'+esc(j.d)+'</p></div>').join('<i class="tk-jy-arrow">→</i>')+'<i class="tk-jy-arrow">→</i><div class="tk-jy now"><span class="tk-jy-y">YEP 2026</span><small class="tk-jy-when">Sắp diễn ra</small><small class="tk-jy-full">Year End Party 2026 – Mừng Xuân 2027</small><b>'+(t?esc(t.name):'Đề xuất 2 chủ đề')+'</b>'+(t?'':'<ol class="tk-jy-opts">'+THEMES.map(x=>'<li>'+esc(x.name)+'</li>').join('')+'</ol>')+'<em>'+(t?esc(t.kw):'Hành động – Bứt phá – Nâng tầm')+'</em><p>'+(t?esc(t.msg):'Hiện thực hóa tầm nhìn bằng hành động, phát huy sức mạnh các đơn vị thành viên, hướng đến xác lập vị thế mới. Chọn một trong 2 chủ đề bên dưới.')+'</p></div></div>';
  const intro='<div class="tk-eyebrow">HÀNH TRÌNH CHỦ ĐỀ YEAR END PARTY</div><p class="tk-jy-lead">Mỗi năm là một chương nối tiếp. Tết theo âm lịch nên YEP của năm nào được tổ chức vào đầu năm dương lịch kế tiếp: <b>YEP 2025 · Tầm nhìn</b> (biết mình đi đâu) → <b>YEP 2026 · Vị thế</b> (hiện thực hóa tầm nhìn, khẳng định chỗ đứng).</p>'+journey;
  if(t){b.style.setProperty('--c1',t.c1);b.style.setProperty('--c2',t.c2);b.className='tk-theme-banner on';b.innerHTML=intro+'<div class="tk-theme-main"><div class="tk-eyebrow">ĐỀ XUẤT CHỦ ĐỀ · YEAR END PARTY 2026 – MỪNG XUÂN 2027</div><h2>'+esc(t.name)+'</h2><p><b>Thông điệp chủ đạo:</b> '+esc(t.msg)+'</p><p><b>Từ khóa:</b> '+esc(t.kw)+'</p><div class="tk-slogans">'+t.slogans.map((s,i)=>'<div class="tk-slogan"><span>Slogan '+(i+1)+'</span><b>'+esc(s.t)+'</b><p>'+esc(s.d)+'</p></div>').join('')+'</div><small>Gợi ý hình ảnh: '+esc(t.look)+'</small></div>'}
  else{b.style.removeProperty('--c1');b.style.removeProperty('--c2');b.className='tk-theme-banner';b.innerHTML=intro}
  $('tk-themes').innerHTML=THEMES.map(x=>'<button type="button" class="tk-theme'+(x.id===theme?' on':'')+'" data-theme="'+x.id+'" style="--c1:'+x.c1+';--c2:'+x.c2+'"><b>'+esc(x.name)+'</b><span>'+esc(x.msg)+'</span><small class="tk-theme-kw">'+esc(x.kw)+'</small><em>'+x.slogans.map(s=>esc(s.t)).join(' · ')+'</em></button>').join('');
 }
 // ===== Timeline: đơn vị phụ trách, hạn hoàn thành, tiến độ =====
 const OWNERS={svi:'BTC','agency':'Agency','hotel':'Khách sạn','svi-agency':'BTC + Agency','svi-hotel':'BTC + Khách sạn'};
 const PHASES=[
  {no:1,name:'Chốt định hướng & brief agency',from:'2026-11-17',to:'2026-11-30'},
  {no:2,name:'Agency đề xuất & chọn agency',from:'2026-12-01',to:'2026-12-15'},
  {no:3,name:'Concept, key visual & tư liệu',from:'2026-12-16',to:'2026-12-31'},
  {no:4,name:'Kịch bản, ấn phẩm & thư mời',from:'2027-01-01',to:'2027-01-15'},
  {no:5,name:'Sản xuất, hoàn thiện & tổng duyệt',from:'2027-01-16',to:'2027-01-28'},
  {no:6,name:'Ngày sự kiện – Gala Dinner',from:'2027-01-29',to:'2027-01-29'},
  {no:7,name:'Sau sự kiện & chúc Tết',from:'2027-01-30',to:'2027-02-15'}];
 const VIEW_KEY='svi-yep-tk-view';let view='timeline';try{view=localStorage.getItem(VIEW_KEY)||'timeline'}catch(_){}
 const pad=n=>String(n).padStart(2,'0');
 function todayStr(){const d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
 const fmt=s=>s?s.slice(8,10)+'/'+s.slice(5,7)+'/'+s.slice(0,4):'';
 const fmtShort=s=>s?s.slice(8,10)+'/'+s.slice(5,7):'';
 const dayDiff=(a,b)=>Math.round((Date.UTC(+b.slice(0,4),+b.slice(5,7)-1,+b.slice(8,10))-Date.UTC(+a.slice(0,4),+a.slice(5,7)-1,+a.slice(8,10)))/864e5);
 function eff(it){const d=decisions[it.id]||{};return{owner:d.owner||it.owner||'svi',due:d.due!=null?d.due:(it.due||''),done:d.done!=null?!!d.done:!!it.done,doer:d.doer||'',sup:d.sup||'',rep:d.rep||''}}
 const PEOPLE=[['doer','Người thực hiện'],['sup','Người giám sát'],['rep','Báo cáo cho']];
 function peopleList(){const s=new Set();Object.values(decisions).forEach(d=>PEOPLE.forEach(([k])=>{const v=(d&&d[k]||'').trim();if(v)s.add(v)}));return[...s].sort((a,b)=>a.localeCompare(b,'vi'))}
 function phaseOf(due){if(!due)return null;for(const p of PHASES)if(due<=p.to)return p;return PHASES[PHASES.length-1]}
 function timing(it){const e=eff(it),st=state(it.id);
  if(st==='drop')return{cls:'is-dropped',txt:'Đã loại bỏ'};
  if(e.done)return{cls:'is-done',txt:'Đã hoàn thành'};
  if(!e.due)return{cls:'',txt:'Chưa có hạn'};
  const n=dayDiff(todayStr(),e.due);
  if(n<0)return{cls:'is-overdue',txt:'Quá hạn '+(-n)+' ngày'};
  if(n===0)return{cls:'is-soon',txt:'Đến hạn hôm nay'};
  if(n<=7)return{cls:'is-soon',txt:'Còn '+n+' ngày'};
  return{cls:'',txt:'Còn '+n+' ngày'}}
 function filtered(){
  const term=$('tk-search').value.trim().toLocaleLowerCase('vi'),group=$('tk-group').value,status=$('tk-status').value,owner=$('tk-owner').value;
  return allItems().filter(it=>{const e=eff(it);
   if(group!=='all'&&it.group!==group)return false;
   if(owner!=='all'&&!(e.owner===owner||(owner!=='svi-agency'&&owner!=='svi-hotel'&&e.owner.split('-').includes(owner))))return false;
   if(status==='done'&&!e.done)return false;
   if(status==='open'&&(e.done||state(it.id)==='drop'))return false;
   if(status==='overdue'&&timing(it).cls!=='is-overdue')return false;
   if(['keep','drop','pending'].includes(status)&&state(it.id)!==status)return false;
   return !term||[it.title,it.ref,it.groupName,OWNERS[e.owner],fmt(e.due),e.doer,e.sup,e.rep].join(' ').toLocaleLowerCase('vi').includes(term)})}
 function sortByDue(a,b){const x=eff(a).due||'9999',y=eff(b).due||'9999';return x<y?-1:x>y?1:0}
 function rowHtml(it,showGroup){const cur=state(it.id),e=eff(it),tm=timing(it);
  return '<article class="tk-item tk-row is-'+cur+' '+tm.cls+'" data-id="'+it.id+'">'
   +'<div class="tk-ref">'+esc(it.ref)+'</div>'
   +'<div class="tk-titleblock">'+(it.custom?'<div class="tk-custrow"><input class="tk-cust-title" type="text" maxlength="200" value="'+esc(it.title)+'" placeholder="Nhập tên công việc..."/><button type="button" class="tk-cust-del" title="Xóa công việc này" aria-label="Xóa">×</button></div>':'<div class="tk-name">'+esc(it.title)+'</div>')
   +'<div class="tk-meta"><select class="tk-own own-'+e.owner+'" aria-label="Đơn vị phụ trách">'+Object.entries(OWNERS).map(([k,l])=>'<option value="'+k+'"'+(k===e.owner?' selected':'')+'>'+l+'</option>').join('')+'</select>'+(showGroup?'<span class="tk-grp">'+esc(gno(it.group))+' · '+esc(it.groupName)+'</span>':'')+'</div><div class="tk-people">'+PEOPLE.map(([k,l])=>'<label><span>'+l+'</span><input type="text" class="tk-person" data-field="'+k+'" list="tk-people-list" maxlength="60" value="'+esc(e[k])+'" placeholder="Nhập tên"/></label>').join('')+'</div></div>'
   +'<div class="tk-duebox"><input type="date" class="tk-due" value="'+esc(e.due)+'" aria-label="Hạn hoàn thành"/><small class="tk-left">'+(e.due?'Hạn '+fmt(e.due)+' · ':'')+tm.txt+'</small></div>'
   +'<textarea class="tk-note" aria-label="Ghi chú cho '+esc(it.title)+'" placeholder="Ghi chú...">'+esc(decisions[it.id]?.note||'')+'</textarea>'
   +'<div class="tk-choices">'+[['keep','GIỮ'],['drop','LOẠI'],['pending','CHƯA CHỐT']].map(([a,l])=>'<button type="button" data-action="'+a+'" class="tk-choice'+(cur===a?' on':'')+'" aria-pressed="'+(cur===a)+'">'+l+'</button>').join('')+'</div>'
   +'<label class="tk-donebox" title="Đánh dấu hoàn thành"><input type="checkbox" class="tk-done"'+(e.done?' checked':'')+'/><span>Xong</span></label>'
   +'</article>'}
 const HEAD='<div class="tk-item-head tk-row-head"><div>Mã</div><div>Công việc · Phụ trách</div><div>Hạn hoàn thành</div><div>Ghi chú</div><div>Phê duyệt</div><div>Tiến độ</div></div>';
 function renderStats(ALL){
  const live=ALL.filter(i=>state(i.id)!=='drop');
  const done=live.filter(i=>eff(i).done).length;
  $('tk-stat-total').textContent=ALL.length;
  $('tk-stat-done').textContent=done;
  $('tk-stat-overdue').textContent=ALL.filter(i=>timing(i).cls==='is-overdue').length;
  $('tk-stat-soon').textContent=ALL.filter(i=>timing(i).cls==='is-soon').length;
  ['keep','drop','pending'].forEach(s=>$('tk-stat-'+s).textContent=ALL.filter(it=>state(it.id)===s).length);
  const pct=live.length?Math.round(done*100/live.length):0;
  $('tk-progress').innerHTML='<div class="tk-pbar"><i style="width:'+pct+'%"></i></div><span>Tiến độ chung: <b>'+pct+'%</b> ('+done+'/'+live.length+' việc) · Còn <b>'+Math.max(0,dayDiff(todayStr(),'2027-01-29'))+'</b> ngày đến Gala Dinner 29/01/2027</span>'}
 function render(){
  const ALL=allItems();renderStats(ALL);
  const visible=filtered();
  document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('on',b.dataset.view===view);b.setAttribute('aria-pressed',b.dataset.view===view)});
  let out='';const today=todayStr();
  if(view==='timeline'){
   const buckets=PHASES.map(p=>({p,items:[]}));const none=[];
   visible.forEach(it=>{const p=phaseOf(eff(it).due);if(p)buckets[p.no-1].items.push(it);else none.push(it)});
   buckets.forEach(({p,items})=>{if(!items.length)return;items.sort(sortByDue);
    const live=items.filter(i=>state(i.id)!=='drop'),dn=live.filter(i=>eff(i).done).length,pct=live.length?Math.round(dn*100/live.length):0;
    const now=today>=p.from&&today<=p.to,past=today>p.to;
    out+='<section class="tk-section tk-phase'+(now?' is-now':'')+(past?' is-past':'')+'"><div class="tk-section-head"><h3><span class="tk-ph-no">GĐ '+p.no+'</span>'+esc(p.name)+(now?'<em class="tk-ph-now">Đang diễn ra</em>':'')+'</h3><div class="tk-head-r"><span class="tk-ph-date">'+(p.from===p.to?fmt(p.from):fmtShort(p.from)+' – '+fmt(p.to))+'</span><span>'+dn+'/'+live.length+' xong</span><div class="tk-ph-bar"><i style="width:'+pct+'%"></i></div></div></div>'+HEAD+items.map(i=>rowHtml(i,true)).join('')+'</section>'});
   if(none.length)out+='<section class="tk-section tk-phase"><div class="tk-section-head"><h3><span class="tk-ph-no">?</span>Chưa xếp lịch</h3><div class="tk-head-r"><span>Chọn hạn hoàn thành để đưa vào timeline</span></div></div>'+HEAD+none.map(i=>rowHtml(i,true)).join('')+'</section>';
  }else{
   for(const [code,name] of sections){const m=visible.filter(i=>i.group===code);if(!m.length)continue;
    out+='<section class="tk-section"><div class="tk-section-head"><h3>'+esc(gno(code))+' · '+esc(name)+'</h3><div class="tk-head-r"><span>'+m.length+' hạng mục</span><button type="button" class="tk-add" data-add-group="'+esc(code)+'" title="Thêm công việc vào nhóm này" aria-label="Thêm công việc vào nhóm '+esc(name)+'">+</button></div></div>'+HEAD+m.map(i=>rowHtml(i,false)).join('')+'</section>'}
  }
  $('tk-sections').innerHTML=(out||'<div class="tk-empty">Không có hạng mục phù hợp với bộ lọc.</div>')+'<datalist id="tk-people-list">'+peopleList().map(n=>'<option value="'+esc(n)+'">').join('')+'</datalist>';
 }
 for(const [code,name] of sections){const o=document.createElement('option');o.value=code;o.textContent=gno(code)+' · '+name;$('tk-group').appendChild(o)}
 for(const [k,l] of Object.entries(OWNERS)){const o=document.createElement('option');o.value=k;o.textContent=l;$('tk-owner').appendChild(o)}
 ['tk-search','tk-group','tk-status','tk-owner'].forEach(id=>$(id).addEventListener('input',render));
 document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{view=b.dataset.view;try{localStorage.setItem(VIEW_KEY,view)}catch(_){};render()}));
 // ===== Đồng bộ Firebase Realtime Database (localStorage vẫn làm bản lưu tạm khi mất mạng) =====
 let cloud=null, editing=false, pendingRender=false;
 const who=(()=>{let n='';try{n=localStorage.getItem('svi-yep-user')||''}catch(_){};return n})();
 function setSync(state,msg){const el=$('tk-sync');if(!el)return;el.className='tk-sync '+state;el.querySelector('span').textContent=msg}
 function cacheTheme(){try{localStorage.setItem(THEME_KEY,theme)}catch(_){}}
 function titleOf(id){const c=(typeof CONCEPTS!=='undefined')&&CONCEPTS.find(x=>x.id===id);return c?'Chương trình: '+c.title:(allItems().find(i=>i.id===id)||{}).title||id}
 function log(action,id,value){if(!cloud)return;cloud.child('log').push({at:firebase.database.ServerValue.TIMESTAMP,action,id:id||'',title:id?titleOf(id):'',value:value==null?'':String(value).slice(0,300),by:$('tk-user').value.trim()||'Không tên'}).catch(()=>{})}
 const LBL={keep:'GIỮ',drop:'LOẠI BỎ',pending:'CHƯA CHỐT'};
 function renderSafe(){if(editing){pendingRender=true;return}render()}
 function renderLog(list){const box=$('tk-log-list');if(!box)return;
  if(!list.length){box.innerHTML='<p class="muted">Chưa có hoạt động.</p>';return}
  box.innerHTML=list.slice().reverse().map(x=>{const d=x.at?new Date(x.at).toLocaleString('vi-VN'):'';
   const txt=x.action==='status'?'chọn <b>'+esc(LBL[x.value]||x.value)+'</b> cho “'+esc(x.title)+'”':x.action==='note'?'ghi chú “'+esc(x.title)+'”: '+esc(x.value):x.action==='theme'?(x.value?'chọn chủ đề <b>'+esc((THEMES.find(t=>t.id===x.value)||{}).name||x.value)+'</b>':'bỏ chọn chủ đề'):x.action==='concept'?'ghi chú “'+esc(x.title)+'”: '+esc(x.value):x.action==='add'?'thêm công việc vào nhóm '+esc(x.value)+': “'+esc(x.title)+'”':x.action==='del'?'xóa công việc “'+esc(x.value)+'”':x.action==='owner'?'giao “'+esc(x.title)+'” cho <b>'+esc(x.value)+'</b>':x.action==='due'?'đặt hạn “'+esc(x.title)+'”: <b>'+esc(x.value||'không có')+'</b>':x.action==='done'?(x.value==='1'?'đánh dấu <b>hoàn thành</b>':'bỏ đánh dấu hoàn thành')+' “'+esc(x.title)+'”':x.action==='doer'||x.action==='sup'||x.action==='rep'?'đặt '+({doer:'người thực hiện',sup:'người giám sát',rep:'báo cáo cho'})[x.action]+' “'+esc(x.title)+'”: <b>'+esc(x.value||'(trống)')+'</b>':x.action==='export'?'xuất file <b>'+esc(x.value)+'</b>':x.action==='reset'?'<b>đặt lại</b> toàn bộ lựa chọn':esc(x.action);
   return '<div class="tk-log-row"><time>'+esc(d)+'</time><b class="tk-log-by">'+esc(x.by||'')+'</b> '+txt+'</div>'}).join('')}
 function initCloud(){
  if(!window.firebase||!window.SVI_FIREBASE_CONFIG){setSync('local','Chỉ lưu trên máy này (không tải được Firebase)');return}
  try{
   const app=firebase.apps.length?firebase.app():firebase.initializeApp(window.SVI_FIREBASE_CONFIG);
   const db=firebase.database(app); cloud=db.ref(window.SVI_FIREBASE_PATH||'svi-yep-2026/tasks');
   setSync('wait','Đang kết nối Firebase…');
   db.ref('.info/connected').on('value',s=>{if(s.val())setSync('on','Đã đồng bộ Firebase');else setSync('off','Mất kết nối – thay đổi sẽ tự gửi khi có mạng')});
   const fail=err=>{setSync('err','Firebase từ chối truy cập ('+(err&&err.code||'lỗi')+') – kiểm tra Rules');console.warn(err)};
   cloud.child('decisions').once('value').then(snap=>{
    if(!snap.exists()&&Object.keys(decisions).length){cloud.child('decisions').set(decisions).then(()=>log('import','',Object.keys(decisions).length+' mục từ máy này'))}
    cloud.child('decisions').on('value',s=>{decisions=s.val()||{};save();renderSafe()},fail);
   },fail);
   cloud.child('custom').once('value').then(snap=>{
    if(!snap.exists()&&Object.keys(custom).length)cloud.child('custom').set(custom);
    cloud.child('custom').on('value',s=>{custom=s.val()||{};saveCustom();renderSafe()},fail);
   },fail);
   cloud.child('concepts').on('value',s=>{cnotes=s.val()||{};saveC();renderConcept()},fail);
   cloud.child('theme').once('value').then(snap=>{
    if(!snap.exists()&&theme)cloud.child('theme').set(theme);
    cloud.child('theme').on('value',s=>{if(!s.exists())return;theme=s.val()||'';cacheTheme();renderTheme()},fail);
   },fail);
   cloud.child('log').limitToLast(40).on('value',s=>{const v=s.val()||{};renderLog(Object.values(v).sort((a,b)=>(a.at||0)-(b.at||0)))},fail);
  }catch(e){setSync('err','Không khởi tạo được Firebase');console.warn(e)}
 }
 function setStatus(id,status){decisions[id]={...(decisions[id]||{}),status};save();render();
  if(cloud){cloud.child('decisions/'+id).update({status,updatedAt:firebase.database.ServerValue.TIMESTAMP});log('status',id,status)}}
 const noteTimers={};
 function setNote(id,note){decisions[id]={...(decisions[id]||{}),note};save();
  if(cloud){clearTimeout(noteTimers[id]);noteTimers[id]=setTimeout(()=>{cloud.child('decisions/'+id).update({note,updatedAt:firebase.database.ServerValue.TIMESTAMP});log('note',id,note)},800)}}
 $('tk-sections').addEventListener('click',e=>{const b=e.target.closest('button[data-action]');if(!b)return;setStatus(b.closest('[data-id]').dataset.id,b.dataset.action)});
 $('tk-sections').addEventListener('input',e=>{if(!e.target.matches('textarea.tk-note'))return;setNote(e.target.closest('[data-id]').dataset.id,e.target.value)});
 $('tk-sections').addEventListener('focusin',e=>{if(e.target.matches('textarea.tk-note,input.tk-cust-title,input.tk-person'))editing=true});
 $('tk-sections').addEventListener('focusout',e=>{if(!e.target.matches('textarea.tk-note,input.tk-cust-title,input.tk-person'))return;if(e.relatedTarget&&e.relatedTarget.matches&&e.relatedTarget.matches('textarea.tk-note,input.tk-cust-title,input.tk-person'))return;editing=false;if(pendingRender){pendingRender=false;setTimeout(render,0)}});
 $('tk-themes').addEventListener('click',e=>{const b=e.target.closest('[data-theme]');if(!b)return;theme=theme===b.dataset.theme?'':b.dataset.theme;cacheTheme();renderTheme();if(cloud){cloud.child('theme').set(theme);log('theme','',theme)}});
 $('tk-reset').addEventListener('click',()=>{if(!confirm('Đặt lại toàn bộ lựa chọn và ghi chú đã nhập? (áp dụng cho mọi người dùng chung Firebase)'))return;decisions={};save();render();if(cloud){cloud.child('decisions').remove();log('reset','','')}});
  // ----- Phụ trách / hạn / hoàn thành -----
 function setField(id,field,value,quiet){decisions[id]={...(decisions[id]||{}),[field]:value};save();if(!quiet)render();
  if(cloud){cloud.child('decisions/'+id).update({[field]:value,updatedAt:firebase.database.ServerValue.TIMESTAMP});log(field,id,field==='owner'?OWNERS[value]:field==='due'?fmt(value):field==='done'?(value?'1':'0'):value)}}
 $('tk-sections').addEventListener('change',e=>{const row=e.target.closest('[data-id]');if(!row)return;const id=row.dataset.id;
  if(e.target.matches('select.tk-own'))setField(id,'owner',e.target.value);
  else if(e.target.matches('input.tk-due'))setField(id,'due',e.target.value);
  else if(e.target.matches('input.tk-done'))setField(id,'done',e.target.checked);
  else if(e.target.matches('input.tk-person'))setField(id,e.target.dataset.field,e.target.value.trim(),true)});
 // ----- Xuất PDF / Excel -----
 function exportRows(){const list=filtered().slice();
  const pIdx=it=>{const p=phaseOf(eff(it).due);return p?p.no:99};
  list.sort((a,b)=>pIdx(a)-pIdx(b)||sortByDue(a,b));
  return list.map((it,i)=>{const e=eff(it),p=phaseOf(e.due),tm=timing(it);
   return{stt:i+1,phase:p?'GĐ '+p.no+' · '+p.name:'Chưa xếp lịch',phaseNo:p?p.no:99,ref:it.ref,title:it.title||'(chưa đặt tên)',group:gno(it.group)+' · '+it.groupName,owner:OWNERS[e.owner]||e.owner,doer:e.doer,sup:e.sup,rep:e.rep,due:e.due,approve:LBL[state(it.id)],progress:tm.txt,overdue:tm.cls==='is-overdue',done:e.done,note:decisions[it.id]?.note||''}})}
 function themeName(){const t=THEMES.find(x=>x.id===theme);return t?t.name:'(chưa chốt chủ đề)'}
 function exportPdf(){
  const rows=exportRows(),now=new Date().toLocaleString('vi-VN');
  let body='',cur='';
  rows.forEach(r=>{if(r.phase!==cur){cur=r.phase;const p=PHASES[r.phaseNo-1];body+='<tr class="ph"><td colspan="12">'+esc(r.phase)+(p?' <span>('+(p.from===p.to?fmt(p.from):fmt(p.from)+' – '+fmt(p.to))+')</span>':'')+'</td></tr>'}
   body+='<tr class="'+(r.overdue?'od':'')+(r.done?' dn':'')+'"><td class="c">'+r.stt+'</td><td class="c">'+esc(r.ref)+'</td><td>'+esc(r.title)+'</td><td>'+esc(r.group)+'</td><td class="c"><b>'+esc(r.owner)+'</b></td><td>'+esc(r.doer)+'</td><td>'+esc(r.sup)+'</td><td>'+esc(r.rep)+'</td><td class="c">'+fmt(r.due)+'</td><td class="c">'+esc(r.approve)+'</td><td class="c">'+esc(r.progress)+'</td><td>'+esc(r.note)+'</td></tr>'});
  const own={};rows.forEach(r=>{own[r.owner]=(own[r.owner]||0)+1});
  const html='<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><title>Timeline cong viec - Year End Party 2026 - Mung Xuan 2027</title><style>@page{size:A4 landscape;margin:11mm 10mm}body{font-family:Inter,"Segoe UI",Arial,sans-serif;color:#17233d;font-size:9.5pt;margin:0}h1{font-size:16pt;margin:0 0 2px;color:#7f1d1d}.sub{color:#5b6d86;font-size:9pt;margin-bottom:8px}.sum{display:flex;gap:14px;flex-wrap:wrap;font-size:8.8pt;margin:0 0 8px}.sum b{color:#7f1d1d}table{width:100%;border-collapse:collapse;table-layout:fixed}th{background:#24446f;color:#fff;font-size:8.5pt;padding:5px 4px;border:1px solid #24446f}td{border:1px solid #cfd8e5;padding:4px;vertical-align:top;font-size:8.6pt;line-height:1.35;word-wrap:break-word}td.c{text-align:center}tr.ph td{background:#f6ead0;color:#5c3a00;font-weight:800;font-size:9.2pt;padding:5px 6px}tr.ph td span{font-weight:600}tr.od td{color:#a11d2b}tr.dn td{color:#5f7a66}thead{display:table-header-group}tr{page-break-inside:avoid}.foot{margin-top:8px;font-size:8pt;color:#6a7c95}</style></head><body><h1>TIMELINE CÔNG VIỆC – YEAR END PARTY 2026 – MỪNG XUÂN 2027</h1><div class="sub">Gala Dinner · Le Méridien Saigon · 29/01/2027 · Chủ đề: '+esc(themeName())+' · Xuất lúc '+esc(now)+'</div><div class="sum"><span>Tổng: <b>'+rows.length+'</b> việc</span>'+Object.entries(own).map(([k,v])=>'<span>'+esc(k)+': <b>'+v+'</b></span>').join('')+'<span>Quá hạn: <b>'+rows.filter(r=>r.overdue).length+'</b></span><span>Đã xong: <b>'+rows.filter(r=>r.done).length+'</b></span></div><table><colgroup><col style="width:3.2%"><col style="width:4.4%"><col style="width:20.5%"><col style="width:9.6%"><col style="width:7.4%"><col style="width:8%"><col style="width:8%"><col style="width:8%"><col style="width:7.6%"><col style="width:6.4%"><col style="width:7.6%"><col style="width:9.3%"></colgroup><thead><tr><th>STT</th><th>Mã</th><th>Công việc</th><th>Nhóm</th><th>Phụ trách</th><th>Người thực hiện</th><th>Người giám sát</th><th>Báo cáo cho</th><th>Hạn hoàn thành</th><th>Phê duyệt</th><th>Tiến độ</th><th>Ghi chú</th></tr></thead><tbody>'+body+'</tbody></table><div class="foot">Danh sách theo bộ lọc đang chọn trên trang. Màu đỏ: quá hạn · Màu xanh xám: đã hoàn thành.</div></body></html>';
  let f=document.getElementById('tk-print-frame');if(f)f.remove();
  f=document.createElement('iframe');f.id='tk-print-frame';f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden';document.body.appendChild(f);
  const d=f.contentWindow.document;d.open();d.write(html);d.close();
  setTimeout(()=>{try{f.contentWindow.focus();f.contentWindow.print()}catch(err){console.warn(err)}},350)}
 window.__tkExportHtml=()=>{exportPdf();return document.getElementById('tk-print-frame').contentWindow.document.documentElement.outerHTML};
 function loadXlsx(){return window.XLSX?Promise.resolve(window.XLSX):new Promise((ok,no)=>{const s=document.createElement('script');s.src='vendor/xlsx.min.js?v=1.2.0';s.onload=()=>ok(window.XLSX);s.onerror=()=>no(new Error('Không tải được thư viện Excel'));document.head.appendChild(s)})}
 function serial(s){return(Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10))-Date.UTC(1899,11,30))/864e5}
 async function exportXlsx(){
  let X;try{X=await loadXlsx()}catch(err){alert(err.message);return}
  const rows=exportRows(),now=new Date().toLocaleString('vi-VN');
  const bd={top:{style:'thin',color:{rgb:'CFD8E5'}},bottom:{style:'thin',color:{rgb:'CFD8E5'}},left:{style:'thin',color:{rgb:'CFD8E5'}},right:{style:'thin',color:{rgb:'CFD8E5'}}};
  const font={name:'Arial',sz:10};
  const S={title:{font:{name:'Arial',sz:15,bold:true,color:{rgb:'7F1D1D'}}},sub:{font:{name:'Arial',sz:10,color:{rgb:'5B6D86'}}},
   head:{font:{name:'Arial',sz:10,bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'24446F'}},alignment:{horizontal:'center',vertical:'center',wrapText:true},border:bd},
   ph:{font:{name:'Arial',sz:10.5,bold:true,color:{rgb:'5C3A00'}},fill:{fgColor:{rgb:'F6EAD0'}},border:bd,alignment:{vertical:'center'}},
   cell:{font,border:bd,alignment:{vertical:'top',wrapText:true}},c:{font,border:bd,alignment:{vertical:'top',horizontal:'center',wrapText:true}}};
  const red={...font,color:{rgb:'A11D2B'}},grn={...font,color:{rgb:'4F7A5C'}};
  const cols=['STT','Giai đoạn','Mã','Công việc','Nhóm','Phụ trách','Người thực hiện','Người giám sát','Báo cáo cho','Hạn hoàn thành','Phê duyệt','Tiến độ','Ghi chú'];const LC=cols.length-1;
  const aoa=[[{v:'TIMELINE CÔNG VIỆC – YEAR END PARTY 2026 – MỪNG XUÂN 2027',s:S.title}],[{v:'Gala Dinner · Le Méridien Saigon · 29/01/2027 · Chủ đề: '+themeName()+' · Xuất lúc '+now,s:S.sub}],[],cols.map(c=>({v:c,s:S.head}))];
  const merges=[{s:{r:0,c:0},e:{r:0,c:LC}},{s:{r:1,c:0},e:{r:1,c:LC}}];let cur='';
  rows.forEach(r=>{if(r.phase!==cur){cur=r.phase;const p=PHASES[r.phaseNo-1];merges.push({s:{r:aoa.length,c:0},e:{r:aoa.length,c:LC}});
    aoa.push([{v:r.phase+(p?'  ('+(p.from===p.to?fmt(p.from):fmt(p.from)+' – '+fmt(p.to))+')':''),s:S.ph},...Array(LC).fill({v:'',s:S.ph})])}
   const tone=r.overdue?red:r.done?grn:font;const cs={...S.cell,font:tone},cc={...S.c,font:tone};
   aoa.push([{v:r.stt,t:'n',s:cc},{v:r.phase,s:cs},{v:r.ref,s:cc},{v:r.title,s:cs},{v:r.group,s:cs},{v:r.owner,s:{...cc,font:{...tone,bold:true}}},{v:r.doer,s:cs},{v:r.sup,s:cs},{v:r.rep,s:cs},r.due?{v:serial(r.due),t:'n',z:'dd/mm/yyyy',s:cc}:{v:'',s:cc},{v:r.approve,s:cc},{v:r.progress,s:cc},{v:r.note,s:cs}])});
  const ws=X.utils.aoa_to_sheet(aoa);ws['!merges']=merges;
  ws['!cols']=[6,28,7,50,28,15,20,20,20,14,12,16,34].map(w=>({wch:w}));
  ws['!rows']=[{hpt:24},{hpt:16},{hpt:6},{hpt:22}];
  ws['!autofilter']={ref:'A4:M'+aoa.length};
  // Sheet 2: tổng hợp theo đơn vị phụ trách
  const own={};rows.forEach(r=>{const o=own[r.owner]||(own[r.owner]={n:0,dn:0,od:0});o.n++;if(r.done)o.dn++;if(r.overdue)o.od++});
  const a2=[[{v:'TỔNG HỢP THEO ĐƠN VỊ PHỤ TRÁCH',s:S.title}],[],['Đơn vị phụ trách','Số việc','Đã xong','Quá hạn','Còn lại'].map(c=>({v:c,s:S.head}))];
  Object.entries(own).forEach(([k,o])=>a2.push([{v:k,s:{...S.cell,font:{...font,bold:true}}},{v:o.n,t:'n',s:S.c},{v:o.dn,t:'n',s:S.c},{v:o.od,t:'n',s:{...S.c,font:red}},{v:o.n-o.dn,t:'n',s:S.c}]));
  a2.push([{v:'Tổng cộng',s:{...S.cell,font:{...font,bold:true}}},{v:rows.length,t:'n',s:S.c},{v:rows.filter(r=>r.done).length,t:'n',s:S.c},{v:rows.filter(r=>r.overdue).length,t:'n',s:{...S.c,font:red}},{v:rows.filter(r=>!r.done).length,t:'n',s:S.c}]);
  a2.push([],[{v:'CÁC GIAI ĐOẠN',s:{font:{name:'Arial',sz:11,bold:true,color:{rgb:'24446F'}}}}],['Giai đoạn','Từ ngày','Đến ngày','Số việc'].map(c=>({v:c,s:S.head})));
  PHASES.forEach(p=>a2.push([{v:'GĐ '+p.no+' · '+p.name,s:S.cell},{v:serial(p.from),t:'n',z:'dd/mm/yyyy',s:S.c},{v:serial(p.to),t:'n',z:'dd/mm/yyyy',s:S.c},{v:rows.filter(r=>r.phaseNo===p.no).length,t:'n',s:S.c}]));
  const ws2=X.utils.aoa_to_sheet(a2);ws2['!cols']=[{wch:44},{wch:12},{wch:12},{wch:12},{wch:12}];ws2['!merges']=[{s:{r:0,c:0},e:{r:0,c:4}}];
  const wb=X.utils.book_new();X.utils.book_append_sheet(wb,ws,'Timeline');X.utils.book_append_sheet(wb,ws2,'Tong hop');
  const d=new Date(),name='SVI_YEP_2026_Timeline_cong_viec_'+d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+'.xlsx';
  X.writeFile(wb,name);if(cloud)log('export','','Excel')}
 $('tk-print').addEventListener('click',()=>{exportPdf();if(cloud)log('export','','PDF')});
 $('tk-xls').addEventListener('click',exportXlsx);

 $('tk-user').value=who;$('tk-user').addEventListener('change',e=>{try{localStorage.setItem('svi-yep-user',e.target.value.trim())}catch(_){}});
 function newKey(){return cloud?cloud.push().key:'k'+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
 const custTimers={};
 $('tk-sections').addEventListener('click',e=>{
  const add=e.target.closest('[data-add-group]');
  if(add){const g=add.dataset.addGroup,k=newKey(),v={group:g,title:'',at:Date.now(),by:$('tk-user').value.trim()};
   custom[k]=v;saveCustom();
   if($('tk-group').value!=='all'&&$('tk-group').value!==g)$('tk-group').value=g;
   $('tk-status').value='all';$('tk-search').value='';editing=false;render();
   if(cloud)cloud.child('custom/'+k).set(v);
   const inp=document.querySelector('[data-id="c-'+k+'"] .tk-cust-title');if(inp){inp.focus();inp.scrollIntoView({block:'center'})}return}
  const del=e.target.closest('.tk-cust-del');
  if(del){const id=del.closest('[data-id]').dataset.id,k=id.slice(2),title=custom[k]?.title||'';
   if(!confirm('Xóa công việc “'+(title||'chưa đặt tên')+'”?'))return;
   delete custom[k];delete decisions[id];saveCustom();save();editing=false;render();
   if(cloud){cloud.child('custom/'+k).remove();cloud.child('decisions/'+id).remove();log('del','',title)}}
 });
 $('tk-sections').addEventListener('input',e=>{if(!e.target.matches('input.tk-cust-title'))return;
  const k=e.target.closest('[data-id]').dataset.id.slice(2);if(!custom[k])return;custom[k]={...custom[k],title:e.target.value};saveCustom();
  if(cloud){clearTimeout(custTimers[k]);const title=e.target.value;custTimers[k]=setTimeout(()=>cloud.child('custom/'+k).update({title}),700)}});
 $('tk-sections').addEventListener('change',e=>{if(!e.target.matches('input.tk-cust-title'))return;const id=e.target.closest('[data-id]').dataset.id,k=id.slice(2),v=custom[k];
  if(v&&v.title.trim()&&!v.logged){custom[k]={...v,logged:true};saveCustom();if(cloud){cloud.child('custom/'+k).update({logged:true});log('add',id,(sections.find(s=>s[0]===v.group)||[v.group,''])[1])}}});
 $('tk-sections').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('input.tk-cust-title')){e.preventDefault();e.target.blur()}});
 // ===== Ý tưởng trang trí (ảnh minh họa + ghi chú thay đổi) =====
 // ===== Ý tưởng chương trình (bản tóm tắt cho Ban Lãnh đạo) =====
 const FLOW=[
  {zone:'SẢNH ĐÓN',sub:'Foyer · trước giờ khai mạc',steps:[
   {id:'f-checkin',icon:'①',title:'Check-in',d:'Đón khách, nhận số bàn; lễ tân áo dài.'},
   {id:'f-wish',icon:'②',title:'Bức tường điều ước',d:'Mỗi khách viết một lời chúc, dán thành chữ SVI. Lời chúc sẽ xuất hiện lại trên LED ở phần opening.'},
   {id:'f-ongdo',icon:'③',title:'Ông đồ cho chữ',d:'Khách xin chữ đầu năm: Phúc, An, Tâm, Vươn…'},
   {id:'f-photo',icon:'④',title:'Photobooth',d:'Chụp ảnh lưu niệm theo chủ đề chương trình.'}]},
  {zone:'BALLROOM',sub:'Chương trình chính',steps:[
   {id:'b-opening',icon:'1',title:'Múa opening hiện đại',time:'4–5 phút',d:'Kể câu chuyện chủ đề qua 3 màn, vũ công tương tác với màn hình LED:',sub:['TẦM NHÌN – ánh sáng mở đường, bình minh trên LED','HÀNH ĐỘNG – BỨT PHÁ – nhịp mạnh, vũ công “đẩy” các khối hình trên LED','VỊ THẾ – đội hình vươn cao; kết bài: lời chúc từ bức tường điều ước bay lên LED và hợp lại thành logo SVI']},
   {id:'b-mc',icon:'2',title:'MC chào mừng',time:'3 phút',d:'Giới thiệu chương trình và khách mời.'},
   {id:'b-speech',icon:'3',title:'Phát biểu của Chủ tịch',time:'10 phút',d:'Nhìn lại năm 2026, định hướng năm mới.'},
   {id:'b-show',icon:'4',title:'Tiết mục hát / múa',time:'5 phút',d:'Tiết mục chuyển tiếp trước khi khai tiệc.'},
   {id:'b-key',icon:'5',title:'Key moment & khai tiệc',time:'5 phút',pending:true,d:'Khoảnh khắc ấn tượng nhất chương trình, sau đó nâng ly khai tiệc. Nội dung key moment đang được cân nhắc.'},
   {id:'b-after',icon:'6',title:'Tiệc & các phần tiếp theo',d:'Vinh danh, văn nghệ, giao lưu, bốc thăm may mắn, chúc Tết và kết thúc (theo khung chương trình BTC).'}]}];
 const CONCEPTS=FLOW.flatMap(z=>z.steps);
 const CONCEPT_KEY='svi-yep-flow-notes-v1';
 let cnotes={};try{cnotes=JSON.parse(localStorage.getItem(CONCEPT_KEY)||'{}')||{}}catch(e){cnotes={}}
 let cEditing=false;
 function saveC(){try{localStorage.setItem(CONCEPT_KEY,JSON.stringify(cnotes))}catch(e){}}
 function renderConcept(){if(cEditing)return;
  const step=s=>{const n=cnotes[s.id]||{};
   return '<li class="tk-step'+(s.pending?' is-pending':'')+'" data-cid="'+s.id+'"><span class="tk-step-no">'+s.icon+'</span><div class="tk-step-body"><div class="tk-step-top"><b>'+esc(s.title)+'</b>'+(s.time?'<em>'+esc(s.time)+'</em>':'')+(s.pending?'<span class="tk-step-flag">Đang cân nhắc</span>':'')+'</div><p>'+esc(s.d)+'</p>'+(s.sub?'<ol class="tk-step-sub">'+s.sub.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ol>':'')
    +'<details class="tk-step-note"'+(n.note?' open':'')+'><summary>Ghi chú'+(n.note?' ✎':'')+'</summary><textarea class="tk-cc-note" rows="2" placeholder="Ghi chú, góp ý cho phần này...">'+esc(n.note||'')+'</textarea>'+(n.by||n.at?'<small class="tk-cc-meta">Cập nhật: '+[n.by,n.at?new Date(n.at).toLocaleString('vi-VN'):''].filter(Boolean).map(esc).join(' · ')+'</small>':'')+'</details></div></li>'};
  $('tk-concept').innerHTML='<div class="tk-flow">'+FLOW.map((z,i)=>'<section class="tk-zone tk-zone-'+i+'"><header><b>'+esc(z.zone)+'</b><span>'+esc(z.sub)+'</span></header><ol class="tk-steps">'+z.steps.map(step).join('')+'</ol></section>').join('<div class="tk-flow-arrow" aria-hidden="true">→</div>')+'</div>'}
 const cTimers={};
 $('tk-concept').addEventListener('input',e=>{if(!e.target.matches('.tk-cc-note'))return;const id=e.target.closest('[data-cid]').dataset.cid,note=e.target.value,by=$('tk-user').value.trim();
  cnotes[id]={...(cnotes[id]||{}),note,by,at:Date.now()};saveC();
  if(cloud){clearTimeout(cTimers[id]);cTimers[id]=setTimeout(()=>{cloud.child('concepts/'+id).set({note,by,at:firebase.database.ServerValue.TIMESTAMP});log('concept',id,note)},900)}});
 $('tk-concept').addEventListener('focusin',e=>{if(e.target.matches('.tk-cc-note'))cEditing=true});
 $('tk-concept').addEventListener('focusout',e=>{if(e.target.matches('.tk-cc-note')){cEditing=false;setTimeout(renderConcept,0)}});
 renderConcept();
 initCloud();
 renderTheme();render();
 window.__tk={ITEMS,allItems};
})();
