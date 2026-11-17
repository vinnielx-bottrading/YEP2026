
// ===== DANH MỤC CÔNG VIỆC (duyệt GIỮ / LOẠI BỎ / CHƯA CHỐT) =====
// Gốc: SVI_YEP_Duyet_Danh_Muc_Cong_Viec.html — 41 mục giữ nguyên ID; 17 mục bổ sung ID mới. Khóa lưu giữ nguyên để không mất quyết định đã lưu.
(function(){
 const root=document.getElementById('tk-root');if(!root)return;
 const ITEMS=[{"id": "cs-01", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.1", "title": "Chốt chủ đề và mạch câu chuyện 3 năm (Tầm nhìn → Vị thế → Tầm vóc)", "sourceNote": "", "owner": "svi", "due": "2026-11-25"}, {"id": "cs-02", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.2", "title": "Hoàn thiện brief và gửi agency (khung cứng: địa điểm, LED có sẵn, trần 4,2 m, ngân sách, hạn nộp)", "sourceNote": "", "owner": "svi", "due": "2026-11-25"}, {"id": "cs-03", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.3", "title": "Agency đề xuất: concept, key visual, tối thiểu 3 khoảnh khắc “wow”, kịch bản sơ bộ, báo giá", "sourceNote": "", "owner": "agency", "due": "2026-12-08"}, {"id": "cs-04", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.4", "title": "Agency thuyết trình, chấm điểm và chọn agency", "sourceNote": "", "owner": "svi", "due": "2026-12-12"}, {"id": "cs-05", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.5", "title": "Ký hợp đồng agency", "sourceNote": "", "owner": "svi", "due": "2026-12-15"}, {"id": "cs-06", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.6", "title": "Chốt concept sáng tạo tổng thể và các khoảnh khắc “wow”", "sourceNote": "", "owner": "svi-agency", "due": "2026-12-20"}, {"id": "cs-07", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.7", "title": "Tiết mục mở màn và nghi thức khai mạc “Thắp sáng tầm vóc” trên LED", "sourceNote": "", "owner": "agency", "due": "2027-01-10"}, {"id": "cs-08", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.8", "title": "Nghi thức vinh danh và nghi thức khai tiệc", "sourceNote": "", "owner": "agency", "due": "2027-01-10"}, {"id": "cs-09", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.9", "title": "Hoạt động tương tác: mosaic chân dung, bàn tiệc mang tên dấu mốc", "sourceNote": "", "owner": "svi-agency", "due": "2027-01-10"}, {"id": "cs-10", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.10", "title": "Chốt danh sách khách mời và danh sách vinh danh", "sourceNote": "", "owner": "svi", "due": "2027-01-05"}, {"id": "cs-11", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.11", "title": "Bài phát biểu của Ban Lãnh đạo", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "01-01", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.1", "title": "Set Menu (Platinum)", "sourceNote": "", "owner": "svi-hotel", "due": "2027-01-10"}, {"id": "01-02", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.2", "title": "Nước uống (Free Flow package – 3 giờ)", "sourceNote": "Local beer, soft drink, water", "owner": "svi-hotel", "due": "2027-01-10"}, {"id": "01-04", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.3", "title": "Chốt địa điểm: Le Méridien Saigon (đã chọn sau khi so sánh Lotte, GEM Center)", "owner": "svi", "due": "2026-11-17", "done": true}, {"id": "01-05", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.4", "title": "Thử món (food tasting) và chốt thực đơn", "owner": "svi-hotel", "due": "2027-01-08"}, {"id": "01-06", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.5", "title": "Sơ đồ bố trí bàn tiệc và chỗ ngồi (seating plan)", "owner": "svi", "due": "2027-01-22"}, {"id": "01-07", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.6", "title": "Tổng duyệt chương trình tại ballroom (rehearsal kỹ thuật + MC + tiết mục)", "owner": "svi-agency", "due": "2027-01-28"}, {"id": "n-1-7", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.7", "title": "Ký hợp đồng, đặt cọc với Le Méridien", "sourceNote": "", "owner": "svi", "due": "2026-11-30"}, {"id": "n-1-8", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.8", "title": "Chốt giờ setup, thi công và tổng duyệt với khách sạn", "sourceNote": "", "owner": "svi-hotel", "due": "2026-12-15"}, {"id": "02-01", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.1", "title": "Thiết kế & in mẫu thiệp mời + bao lì xì (theo key visual)", "sourceNote": "", "owner": "svi", "due": "2026-12-31"}, {"id": "02-02", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.2", "title": "Sản xuất thiệp chúc Tết + bao lì xì", "sourceNote": "", "owner": "svi", "due": "2027-01-15"}, {"id": "02-03", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.3", "title": "Bộ nhận diện chủ đề: key visual, logo chủ đề (giao file gốc cho SVI)", "owner": "agency", "due": "2026-12-20"}, {"id": "02-04", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.4", "title": "Thẻ tên bàn, menu card, bảng chỉ dẫn", "owner": "svi", "due": "2027-01-22"}, {"id": "02-05", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.5", "title": "Kịch bản chương trình chi tiết (run-down theo phút)", "owner": "svi-agency", "due": "2027-01-10"}, {"id": "n-2-6", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.6", "title": "Thư mời điện tử (e-invite) – gửi khách mời và CBNV", "sourceNote": "", "owner": "svi", "due": "2027-01-12"}, {"id": "n-2-7", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.7", "title": "Ấn phẩm vinh danh: bằng khen, giấy chứng nhận, slide vinh danh", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "n-2-8", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.8", "title": "Dress code và thông báo nội bộ về chương trình", "sourceNote": "", "owner": "svi", "due": "2027-01-12"}, {"id": "03-01", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.1", "title": "MC (1 nam, 1 nữ)", "sourceNote": "", "owner": "agency", "due": "2026-12-31"}, {"id": "03-02", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.2", "title": "PG", "sourceNote": "Đón khách, hỗ trợ khu tiểu cảnh", "owner": "agency", "due": "2027-01-15"}, {"id": "03-03", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.3", "title": "Vũ đoàn", "sourceNote": "8 dancer: 4 nam + 4 nữ", "owner": "agency", "due": "2026-12-31"}, {"id": "03-04", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.4", "title": "Ca sĩ nữ 1", "sourceNote": "", "owner": "agency", "due": "2026-12-31"}, {"id": "03-05", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.5", "title": "Ca sĩ nữ 2", "sourceNote": "", "owner": "agency", "due": "2026-12-31"}, {"id": "03-06", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.6", "title": "Ban tổ chức và phân công (check-in, hậu cần, kỹ thuật, quà)", "owner": "svi", "due": "2026-11-30"}, {"id": "03-07", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.7", "title": "Tiết mục văn nghệ nội bộ (đăng ký, tập luyện)", "owner": "svi", "due": "2027-01-20"}, {"id": "n-3-8", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.8", "title": "Ông đồ cho chữ (liên hệ, chốt lịch, chuẩn bị bộ chữ theo chủ đề)", "sourceNote": "", "owner": "svi", "due": "2026-12-31"}, {"id": "04-01", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.1", "title": "Hashtag cầm tay (Formex dán PP)", "sourceNote": "", "owner": "agency", "due": "2027-01-22"}, {"id": "04-02", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.2", "title": "Ứng dụng quay số may mắn", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "04-03", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.3", "title": "Backdrop + Mockup Logo SVI", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-04", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.4", "title": "Photobooth chính", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-05", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.5", "title": "Khu vực tiểu cảnh – góc ông đồ cho chữ", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-06", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.6", "title": "Logo hộp đèn SVI trên sân khấu", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-07", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.7", "title": "Bảng giải thưởng", "sourceNote": "", "owner": "agency", "due": "2027-01-22"}, {"id": "04-08", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.8", "title": "In thiệp mời YEP (khách mời + CBNV cũ)", "sourceNote": "Dự kiến 60 bộ", "owner": "svi", "due": "2027-01-08"}, {"id": "04-09", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.9", "title": "Màn hình LED 12 m (10 tấm di động – có sẵn tại Le Méridien)", "sourceNote": "Loại P3; số thứ tự trong tài liệu trùng mục trước", "owner": "hotel", "due": "2027-01-28"}, {"id": "04-10", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.10", "title": "Âm thanh (khách sạn có sẵn – chỉ thuê bổ sung nếu cần)", "sourceNote": "", "owner": "hotel", "due": "2027-01-28"}, {"id": "04-11", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.11", "title": "Ánh sáng (28 đèn beam + 28 đèn PAR có sẵn – agency bổ sung hiệu ứng)", "sourceNote": "", "owner": "hotel", "due": "2027-01-28"}, {"id": "04-12", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.12", "title": "Màn sao", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-13", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.13", "title": "Photoshoot – khu vực chụp ảnh theo concept sự kiện", "owner": "agency", "due": "2027-01-26"}, {"id": "04-14", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.14", "title": "Trang trí bàn tiệc và hoa theo chủ đề", "owner": "svi-hotel", "due": "2027-01-28"}, {"id": "04-15", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.15", "title": "Nội dung trình chiếu LED theo chủ đề (opening, chuyển cảnh)", "owner": "agency", "due": "2027-01-20"}, {"id": "n-4-16", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.16", "title": "Hành lang “3 chương” dẫn vào ballroom (2025 · 2026 · 2027)", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "n-4-17", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.17", "title": "Check-in và bức tường “Mảnh ghép vị thế”", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "n-4-18", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.18", "title": "Hiệu ứng sân khấu bổ sung (pháo giấy, khói lạnh…)", "sourceNote": "", "owner": "agency", "due": "2027-01-28"}, {"id": "05-01", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.1", "title": "Quay hình sự kiện", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "05-02", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.2", "title": "Chụp hình sự kiện", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "05-03", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.3", "title": "TVC giới thiệu công ty đầu giờ + clip recap sau sự kiện", "sourceNote": "", "owner": "agency", "due": "2027-01-20"}, {"id": "05-04", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.4", "title": "Đăng tải hình ảnh, video lên kênh nội bộ / mạng xã hội", "owner": "svi", "due": "2027-02-05"}, {"id": "n-5-5", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.5", "title": "Thu thập tư liệu, số liệu năm 2026 cho video và vinh danh", "sourceNote": "", "owner": "svi", "due": "2026-12-20"}, {"id": "n-5-6", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.6", "title": "Video tổng kết hoạt động năm 2026 của SVI Group và các đơn vị thành viên", "sourceNote": "", "owner": "svi-agency", "due": "2027-01-20"}, {"id": "06-01", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.1", "title": "Chi phí vận chuyển", "sourceNote": "", "owner": "agency", "due": "2027-01-28"}, {"id": "06-02", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.2", "title": "Chi phí lắp đặt, tháo dỡ", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "06-03", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.3", "title": "Chi phí quản lý, giám sát, điều phối, chạy chương trình", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "06-04", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.4", "title": "Đưa đón khách mời / xe di chuyển", "owner": "svi", "due": "2027-01-29"}, {"id": "06-05", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.5", "title": "Hướng dẫn gửi xe, đón tiếp, check-in khách", "owner": "svi-hotel", "due": "2027-01-29"}, {"id": "06-06", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.6", "title": "Giấy phép biểu diễn (nếu địa điểm yêu cầu)", "owner": "agency", "due": "2027-01-15"}, {"id": "07-01", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.1", "title": "Giải đặc biệt (Voucher – số lượng 1 giải)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-02", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.2", "title": "Giải nhất (Voucher – số lượng 2 giải)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-03", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.3", "title": "Giải nhì – 3 giải (1 chỉ vàng SJC)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-04", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.4", "title": "Giải ba – 4 giải (iPad Mini 7 128GB)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-05", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.5", "title": "Giải khuyến khích – 6 giải (Máy lọc không khí)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-06", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.6", "title": "Giải tinh thần – Tiền mặt", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-07", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.7", "title": "Quà tặng Mini-Game – 3 giải nhất", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-08", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.8", "title": "Thể lệ quay số và mini-game", "owner": "svi", "due": "2027-01-15"}, {"id": "08-01", "group": "08", "groupName": "Chi phí khác", "ref": "8.1", "title": "Tiền hỗ trợ nhân sự chạy chương trình (Nghệ sĩ, kỹ thuật,...)", "sourceNote": "Phát sinh sau sự kiện", "owner": "svi", "due": "2027-01-29"}, {"id": "n-8-2", "group": "08", "groupName": "Chi phí khác", "ref": "8.2", "title": "Nghiệm thu, quyết toán chi phí với agency và khách sạn", "sourceNote": "", "owner": "svi", "due": "2027-02-05"}, {"id": "09-01", "group": "09", "groupName": "Quà tặng", "ref": "B.1a", "title": "Quà tặng khách mời – Chủ tịch", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-02", "group": "09", "groupName": "Quà tặng", "ref": "B.1b", "title": "Quà tặng cơ quan, sở ban ngành", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-03", "group": "09", "groupName": "Quà tặng", "ref": "B.1c", "title": "Quà tặng CBNV đang làm việc", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-04", "group": "09", "groupName": "Quà tặng", "ref": "B.1d", "title": "Quà tặng CBNV cũ", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-05", "group": "09", "groupName": "Quà tặng", "ref": "B.1e", "title": "Vinh danh cá nhân và tập thể xuất sắc (cúp, kỷ niệm chương)", "owner": "svi", "due": "2027-01-20"}, {"id": "n-b-1f", "group": "09", "groupName": "Quà tặng", "ref": "B.1f", "title": "Quà ra về / quà tiễn khách kèm lì xì, thiệp chúc Tết", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}];
 const KEY='svi-yep-2025-work-items-approval-v1', THEME_KEY='svi-yep-theme-v1';
 const THEMES=[
  {id:'vungvithe',name:'VỮNG VỊ THẾ – VƯƠN TẦM VÓC',msg:'Giữ chắc những gì đã đạt được, từ đó vươn lên quy mô và tầm ảnh hưởng lớn hơn.',kw:'Củng cố – Mở rộng – Vươn xa',slogans:[{t:'Vững từ gốc – Vươn tới tầm',d:'Nền tảng vững chắc là điều kiện để vươn xa; khẳng định SVI đã đủ lực để bước sang giai đoạn tăng trưởng mới.'},{t:'Đứng vững hôm nay – Vươn xa ngày mai',d:'Nối tiếp trực tiếp hành trình Tầm nhìn → Vị thế → Tầm vóc, dễ truyền thông và dễ nhớ.'}],look:'Đỏ đậm & vàng kim · đường đi lên từ nền vững',c1:'#8e1b1b',c2:'#f2c45a'},
  {id:'hopluc',name:'HỢP LỰC VỊ THẾ – LAN TỎA GIÁ TRỊ',msg:'Các đơn vị thành viên cùng cộng hưởng thành hệ sinh thái, tạo giá trị cho khách hàng, đối tác và cộng đồng.',kw:'Kết nối – Cộng hưởng – Lan tỏa',slogans:[{t:'Một tập đoàn – Muôn giá trị',d:'Nhấn mạnh sức mạnh đa ngành của SVI khi các đơn vị cùng chung một hướng.'},{t:'Cùng vị thế – Chung khát vọng',d:'Mỗi đơn vị là một mảnh ghép, cùng nhau tạo nên vị thế của tập đoàn; thuận lợi cho phần vinh danh từng đơn vị.'}],look:'Đỏ burgundy & vàng champagne · các vòng tròn giao nhau, lan tỏa',c1:'#6e1530',c2:'#e9c27a'},
  {id:'khangdinh',name:'KHẲNG ĐỊNH VỊ THẾ – KIẾN TẠO TƯƠNG LAI',msg:'Vị thế đã được chứng minh; giờ là lúc chủ động tạo ra tương lai thay vì chờ cơ hội.',kw:'Khẳng định – Kiến tạo – Dẫn dắt',slogans:[{t:'Vị thế hôm nay – Tương lai do ta kiến tạo',d:'Trang trọng, nhiều khát vọng; phù hợp phần phát biểu của Chủ tịch và tầm nhìn 2027.'},{t:'Vững bước tiên phong – Kiến tạo tầm cao',d:'Thể hiện tinh thần chủ động, đi trước của SVI trong giai đoạn mới.'}],look:'Đỏ & vàng kim · ánh bình minh, kiến trúc vươn cao',c1:'#9b1c1c',c2:'#ffd27a'},
  {id:'taamvoc',name:'VỊ THẾ MỚI – TẦM VÓC MỚI',msg:'Chương tiếp theo của một hành trình nhất quán: từ tầm nhìn, đến vị thế, đến tầm vóc.',kw:'Khẳng định – Trưởng thành – Nâng tầm',slogans:[{t:'Từ vị thế – Đến tầm vóc',d:'Giữ nguyên công thức chủ đề hai năm trước; ban lãnh đạo nhìn vào là hiểu mạch câu chuyện.'},{t:'Tầm vóc mới – Hành trình mới',d:'Mở ra giai đoạn phát triển kế tiếp sau khi vị thế đã được xác lập.'}],look:'Đỏ & vàng · ba bậc thang/ba cột mốc nối tiếp',c1:'#7f1d1d',c2:'#f5c76b'},
  {id:'dandat',name:'NÂNG TẦM VỊ THẾ – DẪN DẮT TƯƠNG LAI',msg:'Từ người có chỗ đứng trở thành người dẫn đường, đặt chuẩn mới cho thị trường.',kw:'Tiên phong – Dẫn dắt – Định chuẩn',slogans:[{t:'Đi trước – Dẫn đầu – Định hướng',d:'Mạnh mẽ, hướng ra thị trường; phù hợp nếu năm 2027 có sản phẩm hoặc dự án lớn.'},{t:'Dẫn dắt bằng giá trị – Vươn xa bằng khát vọng',d:'Cân bằng giữa sức mạnh dẫn đầu và giá trị mang lại cho khách hàng, cộng đồng.'}],look:'Đỏ thẫm & vàng ánh kim · mũi tên/ánh sáng dẫn đường',c1:'#5c1020',c2:'#f0b84a'}];
 const JOURNEY=[
  {y:'2025',name:'KỶ NGUYÊN MỚI – TẦM NHÌN MỚI',kw:'Định hướng – Chuyển mình – Khai mở',d:'Nhận diện cơ hội trong kỷ nguyên mới, xác lập tầm nhìn, đổi mới tư duy và định hướng phát triển.'},
  {y:'2026',name:'TẦM NHÌN MỚI – VỊ THẾ MỚI',kw:'Hành động – Bứt phá – Nâng tầm',d:'Hiện thực hóa tầm nhìn bằng hành động, phát huy sức mạnh các đơn vị thành viên, hướng đến xác lập vị thế mới.'}];
 const $=id=>document.getElementById(id);
 const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let decisions={};try{decisions=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){decisions={}}
 let theme='';try{theme=localStorage.getItem(THEME_KEY)||''}catch(e){}
 const sections=[...new Map(ITEMS.map(i=>[i.group,i.groupName])).entries()];
 const CUSTOM_KEY='svi-yep-custom-items-v1';
 let custom={};try{custom=JSON.parse(localStorage.getItem(CUSTOM_KEY)||'{}')||{}}catch(e){custom={}}
 function saveCustom(){try{localStorage.setItem(CUSTOM_KEY,JSON.stringify(custom))}catch(e){}}
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
  return out}
 const state=id=>decisions[id]?.status||'pending';
 function save(){try{localStorage.setItem(KEY,JSON.stringify(decisions))}catch(e){}}
 function renderTheme(){
  const t=THEMES.find(x=>x.id===theme);
  const b=$('tk-theme-banner');
  const journey='<div class="tk-journey">'+JOURNEY.map(j=>'<div class="tk-jy"><span class="tk-jy-y">YEP '+j.y+'</span><b>'+esc(j.name)+'</b><em>'+esc(j.kw)+'</em><p>'+esc(j.d)+'</p></div>').join('<i class="tk-jy-arrow">→</i>')+'<i class="tk-jy-arrow">→</i><div class="tk-jy now"><span class="tk-jy-y">YEP 2027</span><b>'+(t?esc(t.name):'Đang chọn chủ đề')+'</b><em>'+(t?esc(t.kw):'Đứng ở vị thế đó để làm gì?')+'</em><p>'+(t?esc(t.msg):'Chọn một trong 5 phương án bên dưới.')+'</p></div></div>';
  const intro='<div class="tk-eyebrow">HÀNH TRÌNH CHỦ ĐỀ YEAR END PARTY</div><p class="tk-jy-lead">Mỗi năm là một chương nối tiếp: <b>Tầm nhìn</b> (biết mình đi đâu) → <b>Vị thế</b> (đứng được ở đâu) → <b>2027</b> (đứng ở đó để làm gì).</p>'+journey;
  if(t){b.style.setProperty('--c1',t.c1);b.style.setProperty('--c2',t.c2);b.className='tk-theme-banner on';b.innerHTML=intro+'<div class="tk-theme-main"><div class="tk-eyebrow">ĐỀ XUẤT CHỦ ĐỀ GALA DINNER 2027</div><h2>'+esc(t.name)+'</h2><p><b>Thông điệp chủ đạo:</b> '+esc(t.msg)+'</p><p><b>Từ khóa:</b> '+esc(t.kw)+'</p><div class="tk-slogans">'+t.slogans.map((s,i)=>'<div class="tk-slogan"><span>Slogan '+(i+1)+'</span><b>'+esc(s.t)+'</b><p>'+esc(s.d)+'</p></div>').join('')+'</div><small>Gợi ý hình ảnh: '+esc(t.look)+'</small></div>'}
  else{b.style.removeProperty('--c1');b.style.removeProperty('--c2');b.className='tk-theme-banner';b.innerHTML=intro}
  $('tk-themes').innerHTML=THEMES.map(x=>'<button type="button" class="tk-theme'+(x.id===theme?' on':'')+'" data-theme="'+x.id+'" style="--c1:'+x.c1+';--c2:'+x.c2+'"><b>'+esc(x.name)+'</b><span>'+esc(x.msg)+'</span><small class="tk-theme-kw">'+esc(x.kw)+'</small><em>'+x.slogans.map(s=>esc(s.t)).join(' · ')+'</em></button>').join('');
 }
 // ===== Timeline: đơn vị phụ trách, hạn hoàn thành, tiến độ =====
 const OWNERS={svi:'SVI','agency':'Agency','hotel':'Khách sạn','svi-agency':'SVI + Agency','svi-hotel':'SVI + Khách sạn'};
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
   +'<div class="tk-meta"><select class="tk-own own-'+e.owner+'" aria-label="Đơn vị phụ trách">'+Object.entries(OWNERS).map(([k,l])=>'<option value="'+k+'"'+(k===e.owner?' selected':'')+'>'+l+'</option>').join('')+'</select>'+(showGroup?'<span class="tk-grp">'+esc(it.group)+' · '+esc(it.groupName)+'</span>':'')+'</div><div class="tk-people">'+PEOPLE.map(([k,l])=>'<label><span>'+l+'</span><input type="text" class="tk-person" data-field="'+k+'" list="tk-people-list" maxlength="60" value="'+esc(e[k])+'" placeholder="Nhập tên"/></label>').join('')+'</div></div>'
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
    out+='<section class="tk-section"><div class="tk-section-head"><h3>'+esc(code)+' · '+esc(name)+'</h3><div class="tk-head-r"><span>'+m.length+' hạng mục</span><button type="button" class="tk-add" data-add-group="'+esc(code)+'" title="Thêm công việc vào nhóm này" aria-label="Thêm công việc vào nhóm '+esc(name)+'">+</button></div></div>'+HEAD+m.map(i=>rowHtml(i,false)).join('')+'</section>'}
  }
  $('tk-sections').innerHTML=(out||'<div class="tk-empty">Không có hạng mục phù hợp với bộ lọc.</div>')+'<datalist id="tk-people-list">'+peopleList().map(n=>'<option value="'+esc(n)+'">').join('')+'</datalist>';
 }
 for(const [code,name] of sections){const o=document.createElement('option');o.value=code;o.textContent=code+' · '+name;$('tk-group').appendChild(o)}
 for(const [k,l] of Object.entries(OWNERS)){const o=document.createElement('option');o.value=k;o.textContent=l;$('tk-owner').appendChild(o)}
 ['tk-search','tk-group','tk-status','tk-owner'].forEach(id=>$(id).addEventListener('input',render));
 document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{view=b.dataset.view;try{localStorage.setItem(VIEW_KEY,view)}catch(_){};render()}));
 // ===== Đồng bộ Firebase Realtime Database (localStorage vẫn làm bản lưu tạm khi mất mạng) =====
 let cloud=null, editing=false, pendingRender=false;
 const who=(()=>{let n='';try{n=localStorage.getItem('svi-yep-user')||''}catch(_){};return n})();
 function setSync(state,msg){const el=$('tk-sync');if(!el)return;el.className='tk-sync '+state;el.querySelector('span').textContent=msg}
 function cacheTheme(){try{localStorage.setItem(THEME_KEY,theme)}catch(_){}}
 function titleOf(id){const c=(typeof CONCEPTS!=='undefined')&&CONCEPTS.find(x=>x.id===id);return c?'Ý tưởng: '+c.title:(allItems().find(i=>i.id===id)||{}).title||id}
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
   return{stt:i+1,phase:p?'GĐ '+p.no+' · '+p.name:'Chưa xếp lịch',phaseNo:p?p.no:99,ref:it.ref,title:it.title||'(chưa đặt tên)',group:it.group+' · '+it.groupName,owner:OWNERS[e.owner]||e.owner,doer:e.doer,sup:e.sup,rep:e.rep,due:e.due,approve:LBL[state(it.id)],progress:tm.txt,overdue:tm.cls==='is-overdue',done:e.done,note:decisions[it.id]?.note||''}})}
 function themeName(){const t=THEMES.find(x=>x.id===theme);return t?t.name:'(chưa chốt chủ đề)'}
 function exportPdf(){
  const rows=exportRows(),now=new Date().toLocaleString('vi-VN');
  let body='',cur='';
  rows.forEach(r=>{if(r.phase!==cur){cur=r.phase;const p=PHASES[r.phaseNo-1];body+='<tr class="ph"><td colspan="12">'+esc(r.phase)+(p?' <span>('+(p.from===p.to?fmt(p.from):fmt(p.from)+' – '+fmt(p.to))+')</span>':'')+'</td></tr>'}
   body+='<tr class="'+(r.overdue?'od':'')+(r.done?' dn':'')+'"><td class="c">'+r.stt+'</td><td class="c">'+esc(r.ref)+'</td><td>'+esc(r.title)+'</td><td>'+esc(r.group)+'</td><td class="c"><b>'+esc(r.owner)+'</b></td><td>'+esc(r.doer)+'</td><td>'+esc(r.sup)+'</td><td>'+esc(r.rep)+'</td><td class="c">'+fmt(r.due)+'</td><td class="c">'+esc(r.approve)+'</td><td class="c">'+esc(r.progress)+'</td><td>'+esc(r.note)+'</td></tr>'});
  const own={};rows.forEach(r=>{own[r.owner]=(own[r.owner]||0)+1});
  const html='<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><title>Timeline cong viec Gala Dinner 2027</title><style>@page{size:A4 landscape;margin:11mm 10mm}body{font-family:Inter,"Segoe UI",Arial,sans-serif;color:#17233d;font-size:9.5pt;margin:0}h1{font-size:16pt;margin:0 0 2px;color:#7f1d1d}.sub{color:#5b6d86;font-size:9pt;margin-bottom:8px}.sum{display:flex;gap:14px;flex-wrap:wrap;font-size:8.8pt;margin:0 0 8px}.sum b{color:#7f1d1d}table{width:100%;border-collapse:collapse;table-layout:fixed}th{background:#24446f;color:#fff;font-size:8.5pt;padding:5px 4px;border:1px solid #24446f}td{border:1px solid #cfd8e5;padding:4px;vertical-align:top;font-size:8.6pt;line-height:1.35;word-wrap:break-word}td.c{text-align:center}tr.ph td{background:#f6ead0;color:#5c3a00;font-weight:800;font-size:9.2pt;padding:5px 6px}tr.ph td span{font-weight:600}tr.od td{color:#a11d2b}tr.dn td{color:#5f7a66}thead{display:table-header-group}tr{page-break-inside:avoid}.foot{margin-top:8px;font-size:8pt;color:#6a7c95}</style></head><body><h1>TIMELINE CÔNG VIỆC – GALA DINNER YEAR END PARTY 2027</h1><div class="sub">Le Méridien Saigon · 29/01/2027 · Chủ đề: '+esc(themeName())+' · Xuất lúc '+esc(now)+'</div><div class="sum"><span>Tổng: <b>'+rows.length+'</b> việc</span>'+Object.entries(own).map(([k,v])=>'<span>'+esc(k)+': <b>'+v+'</b></span>').join('')+'<span>Quá hạn: <b>'+rows.filter(r=>r.overdue).length+'</b></span><span>Đã xong: <b>'+rows.filter(r=>r.done).length+'</b></span></div><table><colgroup><col style="width:3.2%"><col style="width:4.4%"><col style="width:20.5%"><col style="width:9.6%"><col style="width:7.4%"><col style="width:8%"><col style="width:8%"><col style="width:8%"><col style="width:7.6%"><col style="width:6.4%"><col style="width:7.6%"><col style="width:9.3%"></colgroup><thead><tr><th>STT</th><th>Mã</th><th>Công việc</th><th>Nhóm</th><th>Phụ trách</th><th>Người thực hiện</th><th>Người giám sát</th><th>Báo cáo cho</th><th>Hạn hoàn thành</th><th>Phê duyệt</th><th>Tiến độ</th><th>Ghi chú</th></tr></thead><tbody>'+body+'</tbody></table><div class="foot">Danh sách theo bộ lọc đang chọn trên trang. Màu đỏ: quá hạn · Màu xanh xám: đã hoàn thành.</div></body></html>';
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
  const aoa=[[{v:'TIMELINE CÔNG VIỆC – GALA DINNER YEAR END PARTY 2027',s:S.title}],[{v:'Le Méridien Saigon · 29/01/2027 · Chủ đề: '+themeName()+' · Xuất lúc '+now,s:S.sub}],[],cols.map(c=>({v:c,s:S.head}))];
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
  const d=new Date(),name='SVI_YEP_2027_Timeline_cong_viec_'+d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+'.xlsx';
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
 const CONCEPTS=[
  {id:'activities',set:'A',no:'01',title:'Các hoạt động',lead:'Khách đi qua câu chuyện 3 năm từ lúc bước vào đến khi ra về.',items:[
   ['Ông đồ cho chữ','Đặt tại sảnh chờ, từ giờ đón khách đến trước khai tiệc (45–60 phút). Chuẩn bị sẵn khoảng 10 chữ hợp chủ đề: Vươn, Tầm, Phúc, An, Lộc, Tâm, Thịnh, Hợp…'],
   ['Hành lang “3 chương”','Ba khung tre mở dọc sảnh dẫn vào ballroom: 2025 · TẦM NHÌN → 2026 · VỊ THẾ → 2027 · TẦM VÓC; ánh sáng tăng dần về phía cửa ballroom.'],
   ['Check-in & “Mảnh ghép vị thế”','Mỗi CBNV nhận một mảnh ghép khi check-in, ghi tên hoặc cam kết 2027 rồi gắn lên tường; cuối giờ đón khách các mảnh ghép tạo thành chữ SVI.'],
   ['Khai mạc “Thắp sáng tầm vóc”','LED đang tách thành 3 cụm (3 chương) di chuyển hợp lại thành một màn 12 m, bùng sáng chủ đề; lãnh đạo các đơn vị cùng thực hiện nghi thức.'],
   ['Bàn tiệc mang tên dấu mốc','Thay số bàn bằng tên dấu mốc, dự án nổi bật hoặc đơn vị thành viên, kèm một dòng giới thiệu ngắn.'],
   ['Mosaic chân dung','Ảnh chụp CBNV khi check-in được ghép thành logo/chủ đề, trình chiếu trên LED ở phần kết.']]},
  {id:'style',set:'A',no:'02',title:'Phong cách thiết kế',lead:'Tết Việt thanh lịch – nhẹ, thoáng, sang; rõ chất Việt Nam, không nặng trang trí.',items:[
   ['Màu chủ đạo','Đỏ đậm – vàng kim – trắng ngà; nền sáng, đỏ dùng làm điểm nhấn.'],
   ['Chất liệu & biểu tượng','Tre, mây đan, lụa, sơn mài, gốm Bát Tràng, hoa văn trống đồng Đông Sơn, hoa sen, mai vàng, đào hồng, quất.'],
   ['Bố cục','Trang trí thấp và trải ngang (trần ballroom chỉ 4,2 m); tận dụng view sông và vách kính ở sảnh chờ.'],
   ['Sảnh chờ','Góc ông đồ, hành lang 3 chương, check-in và bức tường mảnh ghép nối liền một mạch dọc hành lang 6 × 25 m.'],
   ['Ballroom','Khăn đỏ đậm, áo ghế vàng champagne, hoa mai thấp giữa bàn, uplight hổ phách hắt tường, mai thấp hai bên sân khấu.'],
   ['Tránh','Yếu tố kiến trúc Trung Hoa: mái cong đầu đao, rồng, nút thắt đỏ, chữ Hán, khung lưới, dãy đèn lồng đỏ tròn.']]},
  {id:'led',set:'A',no:'03',title:'Màn hình LED & ánh sáng – futuristic',lead:'Trang trí mang chất Việt truyền thống, LED mang chất tương lai: thể hiện đúng câu chuyện “từ nền tảng vươn tới tầm vóc”.',items:[
   ['Thiết bị','LED 12 m ngang ghép từ 10 tấm di động có sẵn tại Le Méridien; kết hợp 28 đèn beam và 28 đèn PAR của khách sạn.'],
   ['Ngôn ngữ hình ảnh','Motion graphics hạt vàng, đường line-art phát sáng, chiều sâu 3D, typography hiện đại; hoa mai/đào cách điệu dạng ánh sáng thay vì hình vẽ truyền thống.'],
   ['Đón khách','Vòng lặp chuyển động chậm: hạt vàng trôi, hoa mai ánh sáng nở dần, tên chủ đề xuất hiện nhẹ.'],
   ['Khai mạc','LED tách 3 cụm kể 3 chương → hợp thành một, hạt sáng bùng nổ thành tên chủ đề; đèn beam quét đồng bộ nhạc.'],
   ['Tổng kết & vinh danh','Số liệu năm dạng biểu đồ 3D chuyển động; tên và chân dung người được vinh danh bay vào khung sáng.'],
   ['Quay số & kết','Giao diện quay số dạng 3D futuristic; kết bằng mosaic chân dung CBNV ghép thành logo/chủ đề.']]},
  {id:'a-show',set:'A',no:'04',title:'Biểu diễn & tương tác',lead:'Tiết mục mang hồn Việt được phối mới, sang trọng; cảm xúc ấm áp, gắn kết.',items:[
   ['Mở màn','Múa đương đại chất liệu dân gian (nón, quạt, lụa) kết hợp hình ảnh LED kể 3 chương.'],
   ['Âm nhạc','Hòa tấu nhạc cụ dân tộc phối mới (đàn tranh, sáo, trống) cùng ban nhạc; ca sĩ hát nhạc xuân.'],
   ['Trình diễn áo dài','Màn trình diễn áo dài tông đỏ – vàng của CBNV các đơn vị thành viên, giới thiệu từng đơn vị.'],
   ['Tương tác','Ông đồ cho chữ, bức tường mảnh ghép, mini-game đố vui về hành trình 3 năm của SVI.'],
   ['Dress code','Áo dài hoặc trang phục dạ tiệc tông đỏ – vàng – trắng ngà.']]},
  {id:'b-activities',set:'B',no:'01',title:'Các hoạt động',lead:'Câu chuyện 3 năm được kể bằng công nghệ: khách tương tác bằng điện thoại, ánh sáng và màn hình.',items:[
   ['Check-in QR & chân dung','Quét QR check-in, chụp chân dung tại chỗ; ảnh tự động đưa vào mosaic hiển thị cuối chương trình.'],
   ['Hành lang ánh sáng “3 chương”','Ba khung LED dây dọc sảnh chờ: 2025 · TẦM NHÌN → 2026 · VỊ THẾ → 2027 · TẦM VÓC; ánh sáng chạy theo bước chân khách.'],
   ['Bức tường “Mảnh ghép vị thế”','Mảnh ghép lục giác mica phát sáng khắc tên CBNV, ghép dần thành chữ SVI.'],
   ['Khai mạc đếm ngược','Đếm ngược digital, LED tách 3 cụm hợp thành một, light show 2–3 phút; lãnh đạo cùng kích hoạt nghi thức.'],
   ['Live wall lời chúc','Khách gửi lời chúc, cam kết 2027 qua điện thoại; nội dung hiện trực tiếp trên LED giữa các tiết mục.'],
   ['Photobooth 360°','Quay video xoay 360° tại sảnh, gửi ngay về điện thoại khách.']]},
  {id:'b-style',set:'B',no:'02',title:'Phong cách thiết kế',lead:'Hiện đại, năng động, công nghệ: nền navy tối để ánh sáng và LED tỏa sáng, vàng kim làm điểm nhấn sang trọng.',items:[
   ['Màu chủ đạo','Xanh navy đậm – vàng kim ánh kim – trắng sáng. Có thể chọn thiên vàng kim (sang, lễ hội) hoặc thiên navy (công nghệ, trẻ trung).'],
   ['Chất liệu','Mica/acrylic, gương, kim loại xước vàng, đèn LED dây, neon line-art, vải satin navy.'],
   ['Yếu tố Tết','Mai, đào cách điệu dạng hình học hoặc line-art phát sáng, hoa kim loại vàng; không dùng hoa văn truyền thống nặng.'],
   ['Sảnh chờ','Hành lang 3 chương bằng khung LED dây, check-in QR, bức tường mảnh ghép lục giác mica phát sáng, photobooth 360°.'],
   ['Ballroom','Khăn bàn navy, runner vàng kim, ghế chiavari vàng, bình thủy tinh hoa trắng kèm đèn, uplight navy – vàng đổi màu theo từng phần.'],
   ['Ánh sáng nền','Tông tối, ánh sáng tập trung vào sân khấu và lối đi; mỗi phần chương trình một bảng màu riêng.']]},
  {id:'b-led',set:'B',no:'03',title:'Màn hình LED & ánh sáng – digital',lead:'LED 12 m là “nhân vật chính”: đồ họa digital chuyển động theo nhịp nhạc, đồng bộ toàn bộ đèn sân khấu.',items:[
   ['Ngôn ngữ hình ảnh','Lưới hạt sáng, đồ họa dữ liệu, đường quét neon, glitch nhẹ, typography chuyển động nhanh; tông navy – vàng kim.'],
   ['Mở màn','Đếm ngược digital → LED tách 3 cụm kể 3 chương → hợp nhất thành một, logo và chủ đề dựng từ hạt sáng.'],
   ['Light show','28 đèn beam + 28 đèn PAR của khách sạn lập trình theo timecode cùng nhạc và LED: màn light show 2–3 phút mở màn.'],
   ['Hiệu ứng bổ sung (agency)','Laser mảnh, khói lạnh nền, thanh LED pixel quanh sân khấu, pháo giấy vàng kim. Cần kiểm tra quy định khói, laser và báo cháy với khách sạn (trần 4,2 m).'],
   ['Vinh danh','Tên, chân dung và số liệu bay vào khung dạng thẻ 3D; nhạc và ánh sáng riêng cho từng hạng mục.'],
   ['Quay số & tương tác','Giao diện số digital dạng slot/particle; kết quả bình chọn và lời chúc từ điện thoại hiển thị trực tiếp trên LED.']]},
  {id:'b-show',set:'B',no:'04',title:'Biểu diễn & tương tác',lead:'Tiết mục trẻ trung, có nhịp, kết hợp ánh sáng và LED; giữ chất Tết bằng âm nhạc xuân phối mới.',items:[
   ['Mở màn','Vũ đoàn LED / light dance đồng bộ với màn hình, hoặc múa đương đại kết hợp hình ảnh LED.'],
   ['Trống hiện đại','Trống LED, trống điện tử phối cùng trống truyền thống: không khí Tết nhưng mang năng lượng mới.'],
   ['Âm nhạc','Violin điện / saxophone cùng DJ remix nhạc xuân; ca sĩ trẻ phong cách pop; phần kết là dance party.'],
   ['Tương tác','Check-in QR, bình chọn tiết mục yêu thích, gửi lời chúc qua điện thoại hiện lên LED (live wall), photobooth 360°.'],
   ['Dress code','Navy – vàng kim hoặc “sparkle” (lấp lánh) để ảnh đồng bộ với không gian.']]}];
 const CONCEPT_KEY='svi-yep-concept-notes-v1';
 let cnotes={};try{cnotes=JSON.parse(localStorage.getItem(CONCEPT_KEY)||'{}')||{}}catch(e){cnotes={}}
 let cEditing=false;
 function saveC(){try{localStorage.setItem(CONCEPT_KEY,JSON.stringify(cnotes))}catch(e){}}
 let ideaTab='A';try{ideaTab=localStorage.getItem('svi-yep-idea-tab')||'A'}catch(_){}
 function renderConcept(){if(cEditing)return;
  const card=c=>{const n=cnotes[c.id]||{};
   return '<article class="tk-cc tk-cc-'+c.id+'" data-cid="'+c.id+'"><div class="tk-cc-top"><span class="tk-cc-no">'+c.no+'</span><h3>'+esc(c.title)+'</h3></div><p class="tk-cc-lead">'+esc(c.lead)+'</p><ul class="tk-cc-list">'+c.items.map(([k,v])=>'<li><b>'+esc(k)+'</b><span>'+esc(v)+'</span></li>').join('')+'</ul><textarea class="tk-cc-note" rows="3" placeholder="Ghi chú thay đổi cho nhóm ý tưởng này...">'+esc(n.note||'')+'</textarea>'+(n.by||n.at?'<small class="tk-cc-meta">Cập nhật: '+[n.by,n.at?new Date(n.at).toLocaleString('vi-VN'):''].filter(Boolean).map(esc).join(' · ')+'</small>':'')+'</article>'};
  const IDEAS=[['A','Ý tưởng 1','Tết Việt thanh lịch','Đỏ đậm · vàng kim · trắng ngà – trang trí chất Việt, LED futuristic','#8e1b1b','#f2c45a'],['B','Ý tưởng 2','Digital Gala hiện đại','Xanh navy · vàng kim – LED digital, năng động, hiệu ứng ánh sáng, biểu diễn hiện đại','#0b1f3a','#d4af37']];
  if(!IDEAS.some(x=>x[0]===ideaTab))ideaTab='A';
  const cur=IDEAS.find(x=>x[0]===ideaTab);
  $('tk-concept').innerHTML='<div class="tk-itabs" role="tablist">'+IDEAS.map(([k,l,n,d,c1,c2])=>'<button type="button" role="tab" class="tk-itab'+(k===ideaTab?' on':'')+'" aria-selected="'+(k===ideaTab)+'" data-idea="'+k+'" style="--c1:'+c1+';--c2:'+c2+'"><i></i><i></i><span>'+l+'</span><b>'+n+'</b></button>').join('')+'</div><div class="tk-cset tk-cset-'+cur[0]+'" style="--c1:'+cur[4]+';--c2:'+cur[5]+'"><div class="tk-cset-head"><b>'+cur[1]+' · '+cur[2]+'</b><span>'+cur[3]+'</span></div><div class="tk-concept-grid">'+CONCEPTS.filter(c=>(c.set||'A')===cur[0]).map(card).join('')+'</div></div>'}
 const cTimers={};
 $('tk-concept').addEventListener('input',e=>{if(!e.target.matches('.tk-cc-note'))return;const id=e.target.closest('[data-cid]').dataset.cid,note=e.target.value,by=$('tk-user').value.trim();
  cnotes[id]={...(cnotes[id]||{}),note,by,at:Date.now()};saveC();
  if(cloud){clearTimeout(cTimers[id]);cTimers[id]=setTimeout(()=>{cloud.child('concepts/'+id).set({note,by,at:firebase.database.ServerValue.TIMESTAMP});log('concept',id,note)},900)}});
 $('tk-concept').addEventListener('click',e=>{const b=e.target.closest('[data-idea]');if(!b)return;ideaTab=b.dataset.idea;try{localStorage.setItem('svi-yep-idea-tab',ideaTab)}catch(_){};cEditing=false;renderConcept()});
 $('tk-concept').addEventListener('focusin',e=>{if(e.target.matches('.tk-cc-note'))cEditing=true});
 $('tk-concept').addEventListener('focusout',e=>{if(e.target.matches('.tk-cc-note')){cEditing=false;setTimeout(renderConcept,0)}});
 renderConcept();
 initCloud();
 renderTheme();render();
 window.__tk={ITEMS,allItems};
})();
