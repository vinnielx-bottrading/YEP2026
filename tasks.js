
// ===== DANH MỤC CÔNG VIỆC (duyệt GIỮ / LOẠI BỎ / CHƯA CHỐT) =====
// Gốc: SVI_YEP_Duyet_Danh_Muc_Cong_Viec.html — 41 mục giữ nguyên ID; 17 mục bổ sung ID mới. Khóa lưu giữ nguyên để không mất quyết định đã lưu.
(function(){
 const root=document.getElementById('tk-root');if(!root)return;
 const ITEMS=[{"id": "cs-01", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.1", "title": "Xác định và thống nhất chủ đề, mục tiêu, thông điệp theo hướng kế thừa chủ đề năm trước (tên chưa chốt)", "sourceNote": "", "owner": "svi", "due": "2026-11-25", "sup": "Tạ Thị Thu Hồng", "deliv": "Chủ đề, mục tiêu, thông điệp được BTC thống nhất"}, {"id": "cs-02", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.2", "title": "Hoàn thiện brief và gửi agency (khung cứng: địa điểm, LED có sẵn, trần 4,2 m, ngân sách, hạn nộp)", "sourceNote": "", "owner": "svi", "due": "2026-11-25", "sup": "Tạ Thị Thu Hồng", "deliv": "Brief hoàn chỉnh, gửi agency"}, {"id": "cs-03", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.3", "title": "Agency đề xuất: concept, key visual, tối thiểu 3 khoảnh khắc “wow”, kịch bản sơ bộ, báo giá", "sourceNote": "", "owner": "agency", "due": "2026-12-08", "deliv": "Concept, key visual, kịch bản sơ bộ, báo giá"}, {"id": "cs-04", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.4", "title": "Agency thuyết trình, chấm điểm và chọn agency", "sourceNote": "", "owner": "svi", "due": "2026-12-12", "deliv": "Bảng đánh giá, so sánh và đề xuất agency"}, {"id": "cs-05", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.5", "title": "Ký hợp đồng agency", "sourceNote": "", "owner": "svi", "due": "2026-12-15"}, {"id": "cs-06", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.6", "title": "Chốt concept sáng tạo tổng thể và các khoảnh khắc “wow”", "sourceNote": "", "owner": "svi", "due": "2026-12-20", "coop": "Agency"}, {"id": "cs-07", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.7", "title": "Tiết mục mở màn và nghi thức khai mạc trên LED (ý tưởng do agency đề xuất)", "sourceNote": "", "owner": "agency", "due": "2027-01-10"}, {"id": "cs-08", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.8", "title": "Nghi thức vinh danh và nghi thức khai tiệc", "sourceNote": "", "owner": "agency", "due": "2027-01-10"}, {"id": "cs-09", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.9", "title": "Hoạt động tương tác (mosaic chân dung, tên bàn theo dấu mốc là ý tưởng tham khảo)", "sourceNote": "", "owner": "svi", "due": "2027-01-10", "coop": "Agency"}, {"id": "cs-10", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.10", "title": "Chốt danh sách khách mời và danh sách vinh danh", "sourceNote": "", "owner": "svi", "due": "2027-01-05"}, {"id": "cs-11", "group": "CS", "groupName": "Concept, sáng tạo & agency", "ref": "CS.11", "title": "Bài phát biểu Ban Lãnh đạo (lồng ghép tổng kết và định hướng 2027)", "sourceNote": "", "owner": "svi", "due": "2027-01-20", "deliv": "Bài phát biểu hoàn chỉnh"}, {"id": "01-01", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.1", "title": "Set Menu (Platinum)", "sourceNote": "", "owner": "svi", "due": "2027-01-10", "coop": "Khách sạn", "note": "1.750.000", "dec": "keep"}, {"id": "01-02", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.2", "title": "Nước uống (Free Flow package – 3 giờ)", "sourceNote": "Local beer, soft drink, water", "owner": "svi", "due": "2027-01-10", "coop": "Khách sạn", "note": "250.000"}, {"id": "01-04", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.3", "title": "Chốt địa điểm: Le Méridien Saigon (đã chọn sau khi so sánh Lotte, GEM Center)", "owner": "svi", "due": "2026-11-17", "doer": "Nguyễn Hoàng Vinh", "sup": "Tạ Thị Thu Hồng", "deliv": "Địa điểm được thống nhất", "note": "Le Meridien", "dec": "keep", "prog": "done", "check": "approved"}, {"id": "01-05", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.4", "title": "Thử món (food tasting) và chốt thực đơn", "owner": "svi", "due": "2027-01-08", "coop": "Khách sạn"}, {"id": "01-06", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.5", "title": "Sơ đồ bố trí bàn tiệc và chỗ ngồi (seating plan)", "owner": "svi", "due": "2027-01-22"}, {"id": "01-07", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.6", "title": "Tổng duyệt chương trình tại ballroom (rehearsal kỹ thuật + MC + tiết mục)", "owner": "svi", "due": "2027-01-28", "coop": "Agency"}, {"id": "n-1-7", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.7", "title": "Ký hợp đồng, đặt cọc với Le Méridien", "sourceNote": "", "owner": "svi", "due": "2026-11-30", "sup": "Tạ Thị Thu Hồng"}, {"id": "n-1-8", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.8", "title": "Chốt giờ setup, thi công và tổng duyệt với khách sạn", "sourceNote": "", "owner": "svi", "due": "2026-12-15", "coop": "Khách sạn"}, {"id": "02-01", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.1", "title": "Thiết kế & in mẫu thiệp mời + bao lì xì (theo key visual)", "sourceNote": "", "owner": "svi", "due": "2026-12-31", "deliv": "File thiết kế và mẫu in thiệp mời, bao lì xì"}, {"id": "02-02", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.2", "title": "Sản xuất thiệp chúc Tết + bao lì xì (tích hợp agency hoặc thuê đơn vị riêng)", "sourceNote": "", "owner": "svi", "due": "2027-01-15", "deliv": "Ấn phẩm Tết hoàn chỉnh, đủ số lượng theo yêu cầu"}, {"id": "02-03", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.3", "title": "Bộ nhận diện chủ đề: key visual, logo chủ đề (giao file gốc cho SVI)", "owner": "agency", "due": "2026-12-20"}, {"id": "02-04", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.4", "title": "Thẻ tên bàn, menu card, bảng chỉ dẫn", "owner": "svi", "due": "2027-01-22"}, {"id": "02-05", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.5", "title": "Kịch bản chương trình chi tiết (run-down theo phút)", "owner": "svi", "due": "2027-01-10", "coop": "Agency"}, {"id": "n-2-6", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.6", "title": "Thư mời điện tử (e-invite) – gửi khách mời và CBNV", "sourceNote": "", "owner": "svi", "due": "2027-01-12"}, {"id": "n-2-7", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.7", "title": "Ấn phẩm vinh danh: bằng khen, giấy chứng nhận, slide vinh danh", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "n-2-8", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.8", "title": "Dress code và thông báo nội bộ về chương trình", "sourceNote": "", "owner": "svi", "due": "2027-01-12"}, {"id": "03-01", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.1", "title": "MC (1 nam, 1 nữ)", "sourceNote": "", "owner": "agency", "due": "2026-12-31"}, {"id": "03-02", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.2", "title": "PG", "sourceNote": "Đón khách, hỗ trợ khu tiểu cảnh", "owner": "agency", "due": "2027-01-15"}, {"id": "03-03", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.3", "title": "Vũ đoàn", "sourceNote": "8 dancer: 4 nam + 4 nữ", "owner": "agency", "due": "2026-12-31"}, {"id": "03-04", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.4", "title": "Ca sĩ nữ 1", "sourceNote": "", "owner": "agency", "due": "2026-12-31"}, {"id": "03-05", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.5", "title": "Ca sĩ nữ 2", "sourceNote": "", "owner": "agency", "due": "2026-12-31"}, {"id": "03-06", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.6", "title": "Ban tổ chức và phân công (check-in, hậu cần, kỹ thuật, quà)", "owner": "svi", "due": "2026-11-30", "sup": "Tạ Thị Thu Hồng"}, {"id": "03-07", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.7", "title": "Tiết mục văn nghệ nội bộ (đăng ký, tập luyện)", "owner": "svi", "due": "2027-01-20"}, {"id": "n-3-8", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.8", "title": "Ông đồ cho chữ (liên hệ, chốt lịch, chuẩn bị bộ chữ theo chủ đề)", "sourceNote": "", "owner": "svi", "due": "2026-12-31"}, {"id": "04-01", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.1", "title": "Hashtag cầm tay (Formex dán PP)", "sourceNote": "", "owner": "agency", "due": "2027-01-22"}, {"id": "04-02", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.2", "title": "Ứng dụng quay số may mắn", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "04-03", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.3", "title": "Backdrop + Mockup Logo SVI", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-04", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.4", "title": "Photobooth chính", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-05", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.5", "title": "Khu vực tiểu cảnh – góc ông đồ cho chữ", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-06", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.6", "title": "Logo hộp đèn SVI trên sân khấu", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-07", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.7", "title": "Bảng giải thưởng", "sourceNote": "", "owner": "agency", "due": "2027-01-22"}, {"id": "04-08", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.8", "title": "In thiệp mời YEP (khách mời + CBNV cũ)", "sourceNote": "Dự kiến 60 bộ", "owner": "svi", "due": "2027-01-08"}, {"id": "04-09", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.9", "title": "Màn hình LED 12 m (10 tấm di động – có sẵn tại Le Méridien)", "sourceNote": "Loại P3; số thứ tự trong tài liệu trùng mục trước", "owner": "hotel", "due": "2027-01-28"}, {"id": "04-10", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.10", "title": "Âm thanh (khách sạn có sẵn – chỉ thuê bổ sung nếu cần)", "sourceNote": "", "owner": "hotel", "due": "2027-01-28"}, {"id": "04-11", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.11", "title": "Ánh sáng (28 đèn beam + 28 đèn PAR có sẵn – agency bổ sung hiệu ứng)", "sourceNote": "", "owner": "hotel", "due": "2027-01-28"}, {"id": "04-12", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.12", "title": "Màn sao", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "04-13", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.13", "title": "Photoshoot – khu vực chụp ảnh theo concept sự kiện", "owner": "agency", "due": "2027-01-26"}, {"id": "04-14", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.14", "title": "Trang trí bàn tiệc và hoa theo chủ đề", "owner": "svi", "due": "2027-01-28", "coop": "Khách sạn"}, {"id": "04-15", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.15", "title": "Nội dung trình chiếu LED theo chủ đề (opening, chuyển cảnh)", "owner": "agency", "due": "2027-01-20"}, {"id": "n-4-16", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.16", "title": "Hành lang dẫn vào ballroom (ý tưởng 3 chương tham khảo, chưa chốt)", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "n-4-17", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.17", "title": "Check-in và bức tường tương tác (ý tưởng tham khảo, chưa chốt)", "sourceNote": "", "owner": "agency", "due": "2027-01-26"}, {"id": "n-4-18", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.18", "title": "Hiệu ứng sân khấu bổ sung (pháo giấy, khói lạnh…)", "sourceNote": "", "owner": "agency", "due": "2027-01-28"}, {"id": "05-01", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.1", "title": "Quay hình sự kiện", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "05-02", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.2", "title": "Chụp hình sự kiện", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "05-03", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.3", "title": "TVC giới thiệu công ty đầu giờ + clip recap sau sự kiện", "sourceNote": "", "owner": "agency", "due": "2027-01-20"}, {"id": "05-04", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.4", "title": "Đăng tải hình ảnh, video lên kênh nội bộ / mạng xã hội", "owner": "svi", "due": "2027-02-05"}, {"id": "n-5-5", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.5", "title": "Thu thập tư liệu, số liệu năm 2026 cho video và vinh danh", "sourceNote": "", "owner": "svi", "due": "2026-12-20"}, {"id": "n-5-6", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.6", "title": "Video tổng kết hoạt động năm 2026 của SVI Group và các đơn vị thành viên", "sourceNote": "", "owner": "svi", "due": "2027-01-20", "coop": "Agency", "deliv": "Video tổng kết hoàn chỉnh đã duyệt"}, {"id": "06-01", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.1", "title": "Chi phí vận chuyển", "sourceNote": "", "owner": "agency", "due": "2027-01-28"}, {"id": "06-02", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.2", "title": "Chi phí lắp đặt, tháo dỡ", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "06-03", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.3", "title": "Chi phí quản lý, giám sát, điều phối, chạy chương trình", "sourceNote": "", "owner": "agency", "due": "2027-01-29"}, {"id": "06-04", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.4", "title": "Đưa đón khách mời / xe di chuyển", "owner": "svi", "due": "2027-01-29"}, {"id": "06-05", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.5", "title": "Hướng dẫn gửi xe, đón tiếp, check-in khách", "owner": "svi", "due": "2027-01-29", "coop": "Khách sạn"}, {"id": "06-06", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.6", "title": "Giấy phép biểu diễn (nếu địa điểm yêu cầu)", "owner": "agency", "due": "2027-01-15"}, {"id": "07-01", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.1", "title": "Giải đặc biệt (Voucher – số lượng 1 giải)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-02", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.2", "title": "Giải nhất (Voucher – số lượng 2 giải)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-03", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.3", "title": "Giải nhì – 3 giải (1 chỉ vàng SJC)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-04", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.4", "title": "Giải ba – 4 giải (iPad Mini 7 128GB)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-05", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.5", "title": "Giải khuyến khích – 6 giải (Máy lọc không khí)", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-06", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.6", "title": "Giải tinh thần – Tiền mặt", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-07", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.7", "title": "Quà tặng Mini-Game – 3 giải nhất", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "07-08", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.8", "title": "Thể lệ quay số và mini-game", "owner": "svi", "due": "2027-01-15"}, {"id": "08-01", "group": "08", "groupName": "Chi phí khác", "ref": "8.1", "title": "Tiền hỗ trợ nhân sự chạy chương trình (Nghệ sĩ, kỹ thuật,...)", "sourceNote": "Phát sinh sau sự kiện", "owner": "svi", "due": "2027-01-29"}, {"id": "n-8-2", "group": "08", "groupName": "Chi phí khác", "ref": "8.2", "title": "Nghiệm thu, quyết toán chi phí với agency và khách sạn", "sourceNote": "", "owner": "svi", "due": "2027-02-05", "deliv": "Hồ sơ nghiệm thu, quyết toán"}, {"id": "09-01", "group": "09", "groupName": "Quà tặng", "ref": "B.1a", "title": "Quà tặng khách mời – Chủ tịch", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-02", "group": "09", "groupName": "Quà tặng", "ref": "B.1b", "title": "Quà tặng cơ quan, sở ban ngành", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-03", "group": "09", "groupName": "Quà tặng", "ref": "B.1c", "title": "Quà tặng CBNV đang làm việc", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-04", "group": "09", "groupName": "Quà tặng", "ref": "B.1d", "title": "Quà tặng CBNV cũ", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}, {"id": "09-05", "group": "09", "groupName": "Quà tặng", "ref": "B.1e", "title": "Vinh danh cá nhân và tập thể xuất sắc (cúp, kỷ niệm chương)", "owner": "svi", "due": "2027-01-20"}, {"id": "n-b-1f", "group": "09", "groupName": "Quà tặng", "ref": "B.1f", "title": "Quà ra về / quà tiễn khách kèm lì xì, thiệp chúc Tết", "sourceNote": "", "owner": "svi", "due": "2027-01-20"}];
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
 const ITEM_DEC=Object.fromEntries(ITEMS.filter(i=>i.dec).map(i=>[i.id,i.dec]));
 const state=id=>decisions[id]?.status||ITEM_DEC[id]||'pending';
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
 // ===== Timeline phân công: đơn vị chủ trì, người chủ trì, phối hợp, giám sát, trạng thái, kiểm tra, thời hạn =====
 const OWNERS={svi:'BTC',agency:'Agency',hotel:'Khách sạn'};
 const PROG=[['todo','Chưa thực hiện'],['doing','Đang thực hiện'],['review','Chờ kiểm tra'],['fix','Cần điều chỉnh'],['done','Đã hoàn thành']];
 const CHECK=[['none','Chưa trình'],['wait','Chờ xem xét'],['pass','Đạt'],['approved','Đã duyệt'],['redo','Yêu cầu điều chỉnh'],['na','Không yêu cầu phê duyệt']];
 const CHECK_OK=['pass','approved','na'];
 const DEC={keep:'GIỮ',drop:'LOẠI',pending:'CHƯA CHỐT'};
 const TSTAT=[['ok','Trong hạn'],['soon','Sắp đến hạn'],['overdue','Quá hạn'],['ontime','Hoàn thành đúng hạn'],['late','Hoàn thành trễ hạn']];
 const SOON_DAYS=3;
 const HEAD_BOSS='Tạ Thị Thu Hồng';
 const ROLES=[
  ['Đơn vị chủ trì','Đầu mối tổ chức, bố trí nguồn lực và nhân sự. Mỗi việc có một đơn vị chủ trì.'],
  ['Người chủ trì thực hiện','Chủ động triển khai, điều phối, đôn đốc, kiểm soát chất lượng, cập nhật tiến độ và chịu trách nhiệm chính về kết quả.'],
  ['Người phối hợp','Hỗ trợ chuyên môn, cung cấp thông tin và hoàn thành phần việc được giao đúng hạn.'],
  ['Người giám sát','Kiểm tra tiến độ, chất lượng, yêu cầu điều chỉnh, xác nhận kết quả; báo cáo vấn đề vượt thẩm quyền.'],
  ['Trưởng BTC – '+HEAD_BOSS,'Người giám sát, phê duyệt; chỉ đạo, điều phối, giám sát tổng thể; chịu trách nhiệm chung về tổ chức chương trình. Phê duyệt theo thẩm quyền hoặc trình Ban Lãnh đạo.']];
 const ROLE_TIP={unit:ROLES[0][1],doer:ROLES[1][1],coop:ROLES[2][1],sup:ROLES[3][1]};
 const PHASES=[
  {no:1,name:'Chốt định hướng & brief agency',from:'2026-11-17',to:'2026-11-30'},
  {no:2,name:'Agency đề xuất & chọn agency',from:'2026-12-01',to:'2026-12-15'},
  {no:3,name:'Concept, key visual & tư liệu',from:'2026-12-16',to:'2026-12-31'},
  {no:4,name:'Kịch bản, ấn phẩm & thư mời',from:'2027-01-01',to:'2027-01-15'},
  {no:5,name:'Sản xuất, hoàn thiện & tổng duyệt',from:'2027-01-16',to:'2027-01-28'},
  {no:6,name:'Ngày sự kiện – Gala Dinner',from:'2027-01-29',to:'2027-01-29'},
  {no:7,name:'Sau sự kiện & chúc Tết',from:'2027-01-30',to:'2027-02-15'}];
 const VIEW_KEY='svi-yep-tk-view';let view='timeline';try{view=localStorage.getItem(VIEW_KEY)||'timeline'}catch(_){}
 const openRows=new Set();
 const pad=n=>String(n).padStart(2,'0');
 function todayStr(){const d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
 const fmt=s=>s?s.slice(8,10)+'/'+s.slice(5,7)+'/'+s.slice(0,4):'';
 const fmtShort=s=>s?s.slice(8,10)+'/'+s.slice(5,7):'';
 const dayDiff=(a,b)=>Math.round((Date.UTC(+b.slice(0,4),+b.slice(5,7)-1,+b.slice(8,10))-Date.UTC(+a.slice(0,4),+a.slice(5,7)-1,+a.slice(8,10)))/864e5);
 const lbl=(arr,k)=>(arr.find(x=>x[0]===k)||[k,k])[1];
 const pick=(d,it,k,def)=>d[k]!=null?d[k]:(it[k]!=null?it[k]:def);
 function eff(it){const d=decisions[it.id]||{};
  let owner=d.owner||it.owner||'svi',coopDef=it.coop||'';
  if(owner.includes('-')){const p=owner.split('-')[1];owner='svi';if(!coopDef)coopDef=OWNERS[p]||''}
  return{owner,due:pick(d,it,'due',''),doer:pick(d,it,'doer',''),coop:d.coop!=null?d.coop:coopDef,sup:pick(d,it,'sup',''),deliv:pick(d,it,'deliv',''),note:pick(d,it,'note',''),doneAt:pick(d,it,'doneAt',''),
   prog:d.prog||(d.done?'done':'')||it.prog||'todo',check:d.check||it.check||'none'}}
 const splitNames=s=>String(s||'').split(/[,;\n]/).map(x=>x.trim()).filter(Boolean);
 function peopleList(){const s=new Set();allItems().forEach(it=>{const e=eff(it);[e.doer,e.sup].forEach(n=>splitNames(n).forEach(x=>s.add(x)));splitNames(e.coop).forEach(x=>{if(!Object.values(OWNERS).includes(x))s.add(x)})});return[...s].sort((a,b)=>a.localeCompare(b,'vi'))}
 function phaseOf(due){if(!due)return null;for(const p of PHASES)if(due<=p.to)return p;return PHASES[PHASES.length-1]}
 function timing(it){const e=eff(it);
  if(state(it.id)==='drop')return{key:'na',cls:'t-none',txt:'Không thực hiện',sub:''};
  if(e.prog==='done'){
   if(!e.doneAt)return{key:'done',cls:'t-ok',txt:'Đã hoàn thành',sub:'chưa nhập ngày hoàn thành'};
   if(!e.due||e.doneAt<=e.due)return{key:'ontime',cls:'t-ok',txt:'Hoàn thành đúng hạn',sub:'xong '+fmt(e.doneAt)};
   return{key:'late',cls:'t-late',txt:'Hoàn thành trễ hạn',sub:'trễ '+dayDiff(e.due,e.doneAt)+' ngày'}}
  if(!e.due)return{key:'nodue',cls:'t-none',txt:'Chưa có hạn',sub:''};
  const n=dayDiff(todayStr(),e.due);
  if(n<0)return{key:'overdue',cls:'t-over',txt:'Quá hạn',sub:'trễ '+(-n)+' ngày'};
  if(n<=SOON_DAYS)return{key:'soon',cls:'t-soon',txt:'Sắp đến hạn',sub:n===0?'hạn hôm nay':'còn '+n+' ngày'};
  return{key:'ok',cls:'t-in',txt:'Trong hạn',sub:'còn '+n+' ngày'}}
 const needsCheck=e=>e.prog==='done'&&!CHECK_OK.includes(e.check);
 function filtered(){
  const term=$('tk-search').value.trim().toLocaleLowerCase('vi'),group=$('tk-group').value,status=$('tk-status').value,owner=$('tk-owner').value,person=$('tk-person').value;
  return allItems().filter(it=>{const e=eff(it);
   if(group!=='all'&&it.group!==group)return false;
   if(owner!=='all'&&e.owner!==owner)return false;
   if(person!=='all'&&![e.doer,e.sup,e.coop].some(v=>splitNames(v).includes(person)))return false;
   if(status!=='all'){const [k,v]=status.split(':');
    if(k==='p'&&e.prog!==v)return false;
    if(k==='c'&&e.check!==v)return false;
    if(k==='t'&&timing(it).key!==v&&!(v==='ontime'&&timing(it).key==='done'))return false;
    if(k==='d'&&state(it.id)!==v)return false;
    if(k==='x'&&v==='open'&&(e.prog==='done'||state(it.id)==='drop'))return false;
    if(k==='x'&&v==='warn'&&!needsCheck(e))return false}
   return !term||[it.title,it.ref,it.groupName,OWNERS[e.owner],fmt(e.due),e.doer,e.sup,e.coop,e.deliv,e.note].join(' ').toLocaleLowerCase('vi').includes(term)})}
 function sortByDue(a,b){const x=eff(a).due||'9999',y=eff(b).due||'9999';return x<y?-1:x>y?1:0}
 const opts=(arr,cur)=>arr.map(([k,l])=>'<option value="'+k+'"'+(k===cur?' selected':'')+'>'+l+'</option>').join('');
 function rowHtml(it,showGroup){const cur=state(it.id),e=eff(it),tm=timing(it),open=openRows.has(it.id);
  const title=it.custom?'<div class="tk-custrow"><input class="tk-cust-title" type="text" maxlength="200" value="'+esc(it.title)+'" placeholder="Nhập tên công việc..."/><button type="button" class="tk-cust-del" title="Xóa công việc này" aria-label="Xóa">×</button></div>':'<div class="tk-name">'+esc(it.title)+'</div>';
  const fld=(f,l,tip,html)=>'<label class="tk-fl"><span'+(tip?' title="'+esc(tip)+'"':'')+'>'+l+(tip?' <i class="tk-q">?</i>':'')+'</span>'+html+'</label>';
  const inp=(f,ph)=>'<input type="text" class="tk-f" data-f="'+f+'" list="tk-people-list" maxlength="120" value="'+esc(e[f])+'" placeholder="'+ph+'"/>';
  const panel=!open?'':'<div class="tk-panel">'
   +'<div class="tk-pgrid">'
   +fld('owner','Đơn vị chủ trì',ROLE_TIP.unit,'<select class="tk-f" data-f="owner">'+opts(Object.entries(OWNERS),e.owner)+'</select>')
   +fld('doer','Người chủ trì thực hiện',ROLE_TIP.doer,inp('doer','Nhập tên'))
   +fld('coop','Người phối hợp',ROLE_TIP.coop,inp('coop','Tên người / đơn vị, cách nhau dấu phẩy'))
   +fld('sup','Người giám sát',ROLE_TIP.sup,inp('sup','Nhập tên'))
   +fld('due','Hạn hoàn thành','', '<input type="date" class="tk-f" data-f="due" value="'+esc(e.due)+'"/>')
   +fld('doneAt','Ngày hoàn thành thực tế','Người dùng tự nhập khi công việc hoàn thành; dùng để xác định hoàn thành đúng hạn hay trễ hạn.','<div class="tk-datewrap"><input type="date" class="tk-f" data-f="doneAt" value="'+esc(e.doneAt)+'"/><button type="button" class="tk-today">Hôm nay</button></div>')
   +fld('dec','Quyết định thực hiện','','<div class="tk-choices">'+[['keep','GIỮ'],['drop','LOẠI'],['pending','CHƯA CHỐT']].map(([a,l])=>'<button type="button" data-action="'+a+'" class="tk-choice'+(cur===a?' on':'')+'" aria-pressed="'+(cur===a)+'">'+l+'</button>').join('')+'</div>')
   +'</div><div class="tk-pgrid two">'
   +fld('deliv','Kết quả cần bàn giao','','<textarea class="tk-f" data-f="deliv" rows="2" placeholder="Sản phẩm / kết quả cần bàn giao...">'+esc(e.deliv)+'</textarea>')
   +fld('note','Ghi chú','','<textarea class="tk-f" data-f="note" rows="2" placeholder="Ghi chú...">'+esc(e.note)+'</textarea>')
   +'</div></div>';
  return '<article class="tk-item tk-row2 is-'+cur+' '+tm.cls+(open?' open':'')+'" data-id="'+it.id+'">'
   +'<div class="tk-ref">'+esc(it.ref)+'</div>'
   +'<div class="tk-titleblock tk-toggle">'+title+'<div class="tk-meta"><span class="tk-unit own-'+e.owner+'" title="Đơn vị chủ trì">'+OWNERS[e.owner]+'</span>'+(e.coop?'<span class="tk-coop" title="Người phối hợp">+ '+esc(e.coop)+'</span>':'')+(cur!=='pending'?'<span class="tk-dec dec-'+cur+'" title="Quyết định thực hiện">'+DEC[cur]+'</span>':'')+(needsCheck(e)?'<span class="tk-warn" title="Đã đánh dấu hoàn thành nhưng chưa được kiểm tra/phê duyệt">⚠ Chưa kiểm tra</span>':'')+(showGroup?'<span class="tk-grp">'+esc(gno(it.group))+' · '+esc(it.groupName)+'</span>':'')+'</div></div>'
   +'<div class="tk-doer'+(e.doer?'':' empty')+'">'+(e.doer?esc(e.doer):'Chưa giao')+(e.sup?'<small>GS: '+esc(e.sup)+'</small>':'')+'</div>'
   +'<div class="tk-duecell">'+(e.due?fmt(e.due):'—')+'</div>'
   +'<select class="tk-prog prog-'+e.prog+'" aria-label="Trạng thái thực hiện">'+opts(PROG,e.prog)+'</select>'
   +'<select class="tk-check chk-'+e.check+'" aria-label="Kết quả kiểm tra / phê duyệt">'+opts(CHECK,e.check)+'</select>'
   +'<div class="tk-tstat '+tm.cls+'"><b>'+tm.txt+'</b>'+(tm.sub?'<small>'+tm.sub+'</small>':'')+'</div>'
   +'<button type="button" class="tk-expand" aria-expanded="'+open+'" title="Xem / sửa chi tiết phân công">'+(open?'▴':'▾')+'</button>'
   +panel+'</article>'}
 const HEAD='<div class="tk-item-head tk-row2-head"><div>Mã</div><div>Công việc</div><div title="'+esc(ROLE_TIP.doer)+'">Người chủ trì</div><div>Hạn</div><div>Trạng thái thực hiện</div><div>Kiểm tra / phê duyệt</div><div>Tình trạng thời hạn</div><div></div></div>';
 function renderStats(ALL){
  const live=ALL.filter(i=>state(i.id)!=='drop');
  $('tk-stat-total').textContent=live.length;
  PROG.forEach(([k])=>{$('tk-stat-'+k).textContent=live.filter(i=>eff(i).prog===k).length});
  $('tk-stat-overdue').textContent=live.filter(i=>timing(i).key==='overdue').length;
  $('tk-stat-soon').textContent=live.filter(i=>timing(i).key==='soon').length;
  const done=live.filter(i=>eff(i).prog==='done').length,pct=live.length?Math.round(done*100/live.length):0;
  const unassigned=live.filter(i=>!eff(i).doer).length,warn=live.filter(i=>needsCheck(eff(i))).length,pend=ALL.filter(i=>state(i.id)==='pending').length;
  $('tk-progress').innerHTML='<div class="tk-pbar"><i style="width:'+pct+'%"></i></div><span>Hoàn thành <b>'+pct+'%</b> ('+done+'/'+live.length+') · <b>'+unassigned+'</b> việc chưa giao người chủ trì · <b>'+pend+'</b> việc chưa chốt thực hiện'+(warn?' · <b class="tk-warn-t">'+warn+'</b> việc hoàn thành chưa kiểm tra':'')+' · Còn <b>'+Math.max(0,dayDiff(todayStr(),'2027-01-29'))+'</b> ngày đến Gala Dinner 29/01/2027</span>'}
 function renderGuide(){const g=$('tk-guide');if(!g)return;
  g.innerHTML='<summary>Hướng dẫn vai trò, trạng thái & quy trình kiểm soát</summary><div class="tk-guide-body"><div><h4>Vai trò & trách nhiệm</h4><table>'+ROLES.map(([r,d])=>'<tr><th>'+esc(r)+'</th><td>'+esc(d)+'</td></tr>').join('')+'</table></div><div><h4>Quy trình</h4><p class="tk-flowline">Giao việc → Triển khai → Bàn giao → Kiểm tra → Xác nhận hoàn thành</p><p>Không đánh dấu <b>Đã hoàn thành</b> khi chưa được kiểm tra: Kết quả kiểm tra phải là <b>Đạt</b>, <b>Đã duyệt</b> hoặc <b>Không yêu cầu phê duyệt</b>.</p><h4>Trạng thái thực hiện</h4><p>'+PROG.map(([k,l])=>'<span class="tk-pill prog-'+k+'">'+l+'</span>').join(' ')+'</p><h4>Kết quả kiểm tra / phê duyệt</h4><p>'+CHECK.map(([k,l])=>'<span class="tk-pill chk-'+k+'">'+l+'</span>').join(' ')+'</p><p class="muted"><b>Đạt</b>: người giám sát kiểm tra đạt yêu cầu · <b>Đã duyệt</b>: Trưởng BTC / Ban Lãnh đạo phê duyệt.</p><h4>Tình trạng thời hạn (tự động)</h4><p><span class="tk-pill t-in">Trong hạn</span> <span class="tk-pill t-soon">Sắp đến hạn (≤ 3 ngày)</span> <span class="tk-pill t-over">Quá hạn</span> <span class="tk-pill t-ok">Hoàn thành đúng hạn</span> <span class="tk-pill t-late">Hoàn thành trễ hạn</span></p><p class="tk-five">Rõ người – Rõ việc – Rõ trách nhiệm – Rõ thời hạn – Rõ kết quả</p></div></div>'}
 function fillPeople(){const sel=$('tk-person'),cur=sel.value,list=peopleList();sel.innerHTML='<option value="all">Tất cả mọi người</option>'+list.map(n=>'<option'+(n===cur?' selected':'')+'>'+esc(n)+'</option>').join('');if(cur!=='all'&&!list.includes(cur))sel.value='all'}
 function render(){
  const ALL=allItems();renderStats(ALL);fillPeople();
  const visible=filtered();
  document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('on',b.dataset.view===view);b.setAttribute('aria-pressed',b.dataset.view===view)});
  let out='';const today=todayStr();
  if(view==='timeline'){
   const buckets=PHASES.map(p=>({p,items:[]}));const none=[];
   visible.forEach(it=>{const p=phaseOf(eff(it).due);if(p)buckets[p.no-1].items.push(it);else none.push(it)});
   buckets.forEach(({p,items})=>{if(!items.length)return;items.sort(sortByDue);
    const live=items.filter(i=>state(i.id)!=='drop'),dn=live.filter(i=>eff(i).prog==='done').length,pct=live.length?Math.round(dn*100/live.length):0;
    const now=today>=p.from&&today<=p.to,past=today>p.to;
    out+='<section class="tk-section tk-phase'+(now?' is-now':'')+(past?' is-past':'')+'"><div class="tk-section-head"><h3><span class="tk-ph-no">GĐ '+p.no+'</span>'+esc(p.name)+(now?'<em class="tk-ph-now">Đang diễn ra</em>':'')+'</h3><div class="tk-head-r"><span class="tk-ph-date">'+(p.from===p.to?fmt(p.from):fmtShort(p.from)+' – '+fmt(p.to))+'</span><span>'+dn+'/'+live.length+' hoàn thành</span><div class="tk-ph-bar"><i style="width:'+pct+'%"></i></div></div></div>'+HEAD+items.map(i=>rowHtml(i,true)).join('')+'</section>'});
   if(none.length)out+='<section class="tk-section tk-phase"><div class="tk-section-head"><h3><span class="tk-ph-no">?</span>Chưa xếp lịch</h3><div class="tk-head-r"><span>Nhập hạn hoàn thành để đưa vào timeline</span></div></div>'+HEAD+none.map(i=>rowHtml(i,true)).join('')+'</section>';
  }else{
   for(const [code,name] of sections){const m=visible.filter(i=>i.group===code);if(!m.length)continue;
    out+='<section class="tk-section"><div class="tk-section-head"><h3>'+esc(gno(code))+' · '+esc(name)+'</h3><div class="tk-head-r"><span>'+m.length+' việc</span><button type="button" class="tk-add" data-add-group="'+esc(code)+'" title="Thêm công việc vào nhóm này" aria-label="Thêm công việc vào nhóm '+esc(name)+'">+</button></div></div>'+HEAD+m.map(i=>rowHtml(i,false)).join('')+'</section>'}
  }
  $('tk-sections').innerHTML=(out||'<div class="tk-empty">Không có công việc phù hợp với bộ lọc.</div>')+'<datalist id="tk-people-list">'+peopleList().map(n=>'<option value="'+esc(n)+'">').join('')+'</datalist>';
 }
 for(const [code,name] of sections){const o=document.createElement('option');o.value=code;o.textContent=gno(code)+' · '+name;$('tk-group').appendChild(o)}
 for(const [k,l] of Object.entries(OWNERS)){const o=document.createElement('option');o.value=k;o.textContent=l;$('tk-owner').appendChild(o)}
 $('tk-status').innerHTML='<option value="all">Tất cả trạng thái</option><option value="x:open">Chưa hoàn thành</option><option value="x:warn">Hoàn thành nhưng chưa kiểm tra</option><optgroup label="Trạng thái thực hiện">'+PROG.map(([k,l])=>'<option value="p:'+k+'">'+l+'</option>').join('')+'</optgroup><optgroup label="Kiểm tra / phê duyệt">'+CHECK.map(([k,l])=>'<option value="c:'+k+'">'+l+'</option>').join('')+'</optgroup><optgroup label="Tình trạng thời hạn">'+TSTAT.map(([k,l])=>'<option value="t:'+k+'">'+l+'</option>').join('')+'</optgroup><optgroup label="Quyết định thực hiện">'+Object.entries(DEC).map(([k,l])=>'<option value="d:'+k+'">'+l+'</option>').join('')+'</optgroup>';
 ['tk-search','tk-group','tk-status','tk-owner','tk-person'].forEach(id=>$(id).addEventListener('input',render));
 document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{view=b.dataset.view;try{localStorage.setItem(VIEW_KEY,view)}catch(_){};render()}));
 renderGuide();
 // ===== Đồng bộ Firebase Realtime Database (localStorage vẫn làm bản lưu tạm khi mất mạng) =====
 let cloud=null, editing=false, pendingRender=false;
 const who=(()=>{let n='';try{n=localStorage.getItem('svi-yep-user')||''}catch(_){};return n})();
 function setSync(state,msg){const el=$('tk-sync');if(!el)return;el.className='tk-sync '+state;el.querySelector('span').textContent=msg}
 function cacheTheme(){try{localStorage.setItem(THEME_KEY,theme)}catch(_){}}
 function titleOf(id){const c=(typeof CONCEPTS!=='undefined')&&CONCEPTS.find(x=>x.id===id);return c?'Chương trình: '+c.title:(allItems().find(i=>i.id===id)||{}).title||id}
 function log(action,id,value){if(!cloud)return;cloud.child('log').push({at:firebase.database.ServerValue.TIMESTAMP,action,id:id||'',title:id?titleOf(id):'',value:value==null?'':String(value).slice(0,300),by:$('tk-user').value.trim()||'Không tên'}).catch(()=>{})}
 const LBL={keep:'GIỮ',drop:'LOẠI',pending:'CHƯA CHỐT'};
 function renderSafe(){if(editing){pendingRender=true;return}render()}
 function renderLog(list){const box=$('tk-log-list');if(!box)return;
  if(!list.length){box.innerHTML='<p class="muted">Chưa có hoạt động.</p>';return}
  box.innerHTML=list.slice().reverse().map(x=>{const d=x.at?new Date(x.at).toLocaleString('vi-VN'):'';
   const txt=x.action==='status'?'chọn <b>'+esc(LBL[x.value]||x.value)+'</b> cho “'+esc(x.title)+'”':x.action==='note'?'ghi chú “'+esc(x.title)+'”: '+esc(x.value):x.action==='theme'?(x.value?'chọn chủ đề <b>'+esc((THEMES.find(t=>t.id===x.value)||{}).name||x.value)+'</b>':'bỏ chọn chủ đề'):x.action==='concept'?'ghi chú “'+esc(x.title)+'”: '+esc(x.value):x.action==='add'?'thêm công việc vào nhóm '+esc(x.value)+': “'+esc(x.title)+'”':x.action==='del'?'xóa công việc “'+esc(x.value)+'”':x.action==='owner'?'giao “'+esc(x.title)+'” cho <b>'+esc(x.value)+'</b>':x.action==='due'?'đặt hạn “'+esc(x.title)+'”: <b>'+esc(x.value||'không có')+'</b>':x.action==='done'?(x.value==='1'?'đánh dấu <b>hoàn thành</b>':'bỏ đánh dấu hoàn thành')+' “'+esc(x.title)+'”':(typeof FIELD_LBL!=='undefined'&&FIELD_LBL[x.action])?'cập nhật '+FIELD_LBL[x.action]+' “'+esc(x.title)+'”: <b>'+esc(x.value||'(trống)')+'</b>':x.action==='export'?'xuất file <b>'+esc(x.value)+'</b>':x.action==='reset'?'<b>đặt lại</b> toàn bộ lựa chọn':esc(x.action);
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
 const EDIT_SEL='textarea.tk-f,input.tk-f[type=text],input.tk-cust-title';
 $('tk-sections').addEventListener('click',e=>{
  const b=e.target.closest('button[data-action]');if(b){setStatus(b.closest('[data-id]').dataset.id,b.dataset.action);return}
  const td=e.target.closest('.tk-today');if(td){setField(td.closest('[data-id]').dataset.id,'doneAt',todayStr());return}
  const ex=e.target.closest('.tk-expand')||(!e.target.closest('input,select,textarea,button,a')&&e.target.closest('.tk-toggle'));
  if(ex){const id=ex.closest('[data-id]').dataset.id;openRows.has(id)?openRows.delete(id):openRows.add(id);editing=false;render()}});
 $('tk-sections').addEventListener('focusin',e=>{if(e.target.matches(EDIT_SEL))editing=true});
 $('tk-sections').addEventListener('focusout',e=>{if(!e.target.matches(EDIT_SEL))return;if(e.relatedTarget&&e.relatedTarget.matches&&e.relatedTarget.matches(EDIT_SEL))return;editing=false;if(pendingRender){pendingRender=false;setTimeout(render,0)}});
 $('tk-themes').addEventListener('click',e=>{const b=e.target.closest('[data-theme]');if(!b)return;theme=theme===b.dataset.theme?'':b.dataset.theme;cacheTheme();renderTheme();if(cloud){cloud.child('theme').set(theme);log('theme','',theme)}});
 $('tk-reset').addEventListener('click',()=>{if(!confirm('Đặt lại toàn bộ phân công, trạng thái và ghi chú đã nhập về mặc định? (áp dụng cho mọi người dùng chung Firebase)'))return;decisions={};save();render();if(cloud){cloud.child('decisions').remove();log('reset','','')}});
 // ----- Cập nhật từng trường -----
 const FIELD_LBL={owner:'đơn vị chủ trì',doer:'người chủ trì',coop:'người phối hợp',sup:'người giám sát',due:'hạn hoàn thành',doneAt:'ngày hoàn thành',deliv:'kết quả bàn giao',note:'ghi chú',prog:'trạng thái',check:'kiểm tra / phê duyệt'};
 function fieldText(f,v){return f==='owner'?OWNERS[v]:f==='due'||f==='doneAt'?fmt(v):f==='prog'?lbl(PROG,v):f==='check'?lbl(CHECK,v):v}
 function setField(id,field,value,quiet){decisions[id]={...(decisions[id]||{}),[field]:value};save();if(quiet)pendingRender=true;else render();
  if(cloud){cloud.child('decisions/'+id).update({[field]:value,updatedAt:firebase.database.ServerValue.TIMESTAMP});log(field,id,fieldText(field,value))}}
 $('tk-sections').addEventListener('change',e=>{const row=e.target.closest('[data-id]');if(!row)return;const id=row.dataset.id,it=allItems().find(x=>x.id===id);
  if(e.target.matches('select.tk-prog')){const v=e.target.value,ef=eff(it);
   if(v==='done'&&!CHECK_OK.includes(ef.check)&&!confirm('Theo quy trình, công việc chỉ được đánh dấu “Đã hoàn thành” sau khi được kiểm tra (Kết quả: Đạt / Đã duyệt / Không yêu cầu phê duyệt).\n\nKết quả hiện tại: '+lbl(CHECK,ef.check)+'. Vẫn đánh dấu hoàn thành?')){render();return}
   if(v==='done'&&!ef.doneAt)openRows.add(id);
   setField(id,'prog',v)}
  else if(e.target.matches('select.tk-check'))setField(id,'check',e.target.value);
  else if(e.target.matches('.tk-f')){const f=e.target.dataset.f,v=e.target.type==='text'||e.target.tagName==='TEXTAREA'?e.target.value.trim():e.target.value;setField(id,f,v,e.target.type==='text'||e.target.tagName==='TEXTAREA')}});
 // ----- Xuất PDF / Excel -----
 const TITLE='TIMELINE CÔNG VIỆC – SVI GROUP YEAR END PARTY 2026 – MỪNG XUÂN 2027';
 function exportRows(){const list=filtered().slice();
  const pIdx=it=>{const p=phaseOf(eff(it).due);return p?p.no:99};
  list.sort((a,b)=>pIdx(a)-pIdx(b)||sortByDue(a,b));
  return list.map((it,i)=>{const e=eff(it),p=phaseOf(e.due),tm=timing(it);
   return{stt:i+1,phase:p?'GĐ '+p.no+' · '+p.name:'Chưa xếp lịch',phaseNo:p?p.no:99,ref:it.ref,title:it.title||'(chưa đặt tên)',group:gno(it.group)+' · '+it.groupName,
    owner:OWNERS[e.owner],doer:e.doer,coop:e.coop,sup:e.sup,due:e.due,doneAt:e.doneAt,dec:DEC[state(it.id)],prog:lbl(PROG,e.prog),check:lbl(CHECK,e.check),tstat:tm.txt,tkey:tm.key,deliv:e.deliv,note:e.note}})}
 function themeName(){const t=THEMES.find(x=>x.id===theme);return t?t.name:'(chưa chốt chủ đề)'}
 function exportPdf(){
  const rows=exportRows(),now=new Date().toLocaleString('vi-VN');
  let body='',cur='';
  rows.forEach(r=>{if(r.phase!==cur){cur=r.phase;const p=PHASES[r.phaseNo-1];body+='<tr class="ph"><td colspan="13">'+esc(r.phase)+(p?' <span>('+(p.from===p.to?fmt(p.from):fmt(p.from)+' – '+fmt(p.to))+')</span>':'')+'</td></tr>'}
   body+='<tr class="k-'+r.tkey+'"><td class="c">'+r.stt+'</td><td class="c">'+esc(r.ref)+'</td><td>'+esc(r.title)+'</td><td class="c"><b>'+esc(r.owner)+'</b></td><td>'+esc(r.doer)+'</td><td>'+esc(r.coop)+'</td><td>'+esc(r.sup)+'</td><td class="c">'+fmt(r.due)+'</td><td class="c">'+fmt(r.doneAt)+'</td><td class="c">'+esc(r.prog)+'</td><td class="c">'+esc(r.check)+'</td><td class="c st">'+esc(r.tstat)+'</td><td>'+esc([r.deliv,r.note].filter(Boolean).join(' · '))+'</td></tr>'});
  const cnt=k=>rows.filter(r=>r.tkey===k).length;
  const html='<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><title>Timeline phan cong - SVI YEP 2026 - Mung Xuan 2027</title><style>@page{size:A4 landscape;margin:10mm 8mm}body{font-family:Inter,"Segoe UI",Arial,sans-serif;color:#17233d;font-size:8.5pt;margin:0}h1{font-size:14.5pt;margin:0 0 2px;color:#7f1d1d}.sub{color:#5b6d86;font-size:8.5pt;margin-bottom:6px}.sum{display:flex;gap:12px;flex-wrap:wrap;font-size:8.5pt;margin:0 0 7px}.sum b{color:#7f1d1d}table{width:100%;border-collapse:collapse;table-layout:fixed}th{background:#24446f;color:#fff;font-size:7.8pt;padding:4px 3px;border:1px solid #24446f}td{border:1px solid #cfd8e5;padding:3px 4px;vertical-align:top;font-size:7.9pt;line-height:1.3;word-wrap:break-word}td.c{text-align:center}tr.ph td{background:#f6ead0;color:#5c3a00;font-weight:800;font-size:8.6pt;padding:4px 6px}tr.ph td span{font-weight:600}tr.k-overdue td.st{color:#a11d2b;font-weight:800}tr.k-soon td.st{color:#b46a00;font-weight:800}tr.k-ontime td.st,tr.k-done td.st{color:#1f7a4d;font-weight:800}tr.k-late td.st{color:#c2410c;font-weight:800}tr.k-na td{color:#8a95a5}thead{display:table-header-group}tr{page-break-inside:avoid}.foot{margin-top:6px;font-size:7.5pt;color:#6a7c95}</style></head><body><h1>'+TITLE+'</h1><div class="sub">Gala Dinner · Le Méridien Saigon · 29/01/2027 · Chủ đề: '+esc(themeName())+' · Trưởng BTC (giám sát, phê duyệt): '+HEAD_BOSS+' · Xuất lúc '+esc(now)+'</div><div class="sum"><span>Tổng: <b>'+rows.length+'</b> việc</span>'+PROG.map(([k,l])=>'<span>'+l+': <b>'+rows.filter(r=>r.prog===l).length+'</b></span>').join('')+'<span>Quá hạn: <b>'+cnt('overdue')+'</b></span><span>Sắp đến hạn: <b>'+cnt('soon')+'</b></span></div><table><colgroup><col style="width:2.8%"><col style="width:3.8%"><col style="width:16%"><col style="width:5.4%"><col style="width:7.4%"><col style="width:7.4%"><col style="width:7.4%"><col style="width:6.6%"><col style="width:6.6%"><col style="width:6.8%"><col style="width:7.2%"><col style="width:7.6%"><col style="width:15%"></colgroup><thead><tr><th>STT</th><th>Mã</th><th>Công việc</th><th>Đơn vị chủ trì</th><th>Người chủ trì thực hiện</th><th>Người phối hợp</th><th>Người giám sát</th><th>Hạn hoàn thành</th><th>Ngày hoàn thành</th><th>Trạng thái thực hiện</th><th>Kiểm tra / phê duyệt</th><th>Tình trạng thời hạn</th><th>Kết quả bàn giao · Ghi chú</th></tr></thead><tbody>'+body+'</tbody></table><div class="foot">Danh sách theo bộ lọc đang chọn trên trang. Nguyên tắc: Rõ người – Rõ việc – Rõ trách nhiệm – Rõ thời hạn – Rõ kết quả.</div></body></html>';
  let f=document.getElementById('tk-print-frame');if(f)f.remove();
  f=document.createElement('iframe');f.id='tk-print-frame';f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden';document.body.appendChild(f);
  const d=f.contentWindow.document;d.open();d.write(html);d.close();
  setTimeout(()=>{try{f.contentWindow.focus();f.contentWindow.print()}catch(err){console.warn(err)}},350)}
 window.__tkExportHtml=()=>{exportPdf();return document.getElementById('tk-print-frame').contentWindow.document.documentElement.outerHTML};
 function loadExcel(){return window.ExcelJS?Promise.resolve(window.ExcelJS):new Promise((ok,no)=>{const s=document.createElement('script');s.src='vendor/exceljs.min.js?v=4.4.0';s.onload=()=>ok(window.ExcelJS);s.onerror=()=>no(new Error('Không tải được thư viện Excel'));document.head.appendChild(s)})}
 const toDate=s=>s?new Date(Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10))):null;
 async function buildXlsx(){
  const EJ=await loadExcel();const rows=exportRows(),now=new Date().toLocaleString('vi-VN');
  const wb=new EJ.Workbook();wb.creator='SVI YEP';wb.created=new Date();
  const thin={style:'thin',color:{argb:'FFCFD8E5'}},border={top:thin,left:thin,bottom:thin,right:thin};
  const F=(o={})=>({name:'Arial',size:10,...o});
  const fill=c=>({type:'pattern',pattern:'solid',fgColor:{argb:'FF'+c}});
  // ---- Sheet Timeline ----
  const ws=wb.addWorksheet('Timeline',{views:[{state:'frozen',xSplit:4,ySplit:4}],pageSetup:{orientation:'landscape',paperSize:9,fitToPage:true,fitToWidth:1,fitToHeight:0}});
  const cols=[['STT',6],['Giai đoạn',26],['Mã',7],['Công việc',46],['Nhóm',24],['Đơn vị chủ trì',13],['Người chủ trì thực hiện',20],['Người phối hợp',20],['Người giám sát',20],['Hạn hoàn thành',13],['Ngày hoàn thành thực tế',13],['Quyết định thực hiện',12],['Trạng thái thực hiện',16],['Kết quả kiểm tra / phê duyệt',18],['Tình trạng thời hạn',18],['Kết quả cần bàn giao',32],['Ghi chú',28]];
  ws.columns=cols.map(([h,w])=>({width:w}));
  ws.mergeCells('A1:Q1');ws.getCell('A1').value=TITLE;ws.getCell('A1').font=F({size:15,bold:true,color:{argb:'FF7F1D1D'}});ws.getRow(1).height=24;
  ws.mergeCells('A2:Q2');ws.getCell('A2').value='Gala Dinner · Le Méridien Saigon · 29/01/2027 · Chủ đề: '+themeName()+' · Trưởng BTC (giám sát, phê duyệt): '+HEAD_BOSS+' · Xuất lúc '+now;ws.getCell('A2').font=F({color:{argb:'FF5B6D86'}});
  ws.getRow(3).height=6;
  const hr=ws.getRow(4);cols.forEach(([h],i)=>{const c=hr.getCell(i+1);c.value=h;c.font=F({bold:true,color:{argb:'FFFFFFFF'}});c.fill=fill('24446F');c.alignment={horizontal:'center',vertical:'middle',wrapText:true};c.border=border});hr.height=32;
  const tips={F:ROLE_TIP.unit,G:ROLE_TIP.doer,H:ROLE_TIP.coop,I:ROLE_TIP.sup};Object.entries(tips).forEach(([k,v])=>{ws.getCell(k+'4').note=v});
  let r=5,cur='';const dataRows=[];
  const list=(a)=>({type:'list',allowBlank:true,formulae:['"'+a.join(',')+'"'],showErrorMessage:true,errorTitle:'Giá trị không hợp lệ',error:'Chọn trong danh sách.'});
  rows.forEach(x=>{
   if(x.phase!==cur){cur=x.phase;const p=PHASES[x.phaseNo-1];ws.mergeCells('A'+r+':Q'+r);const c=ws.getCell('A'+r);c.value=x.phase+(p?'  ('+(p.from===p.to?fmt(p.from):fmt(p.from)+' – '+fmt(p.to))+')':'');c.font=F({bold:true,size:10.5,color:{argb:'FF5C3A00'}});c.fill=fill('F6EAD0');c.border=border;ws.getRow(r).height=20;r++}
   const row=ws.getRow(r);
   const vals=[x.stt,x.phase,x.ref,x.title,x.group,x.owner,x.doer,x.coop,x.sup,toDate(x.due),toDate(x.doneAt),x.dec,x.prog,x.check,null,x.deliv,x.note];
   vals.forEach((v,i)=>{const c=row.getCell(i+1);if(v!==null&&v!=='')c.value=v;c.font=F();c.border=border;c.alignment={vertical:'top',wrapText:true,horizontal:[0,2,5,9,10,11,12,13,14].includes(i)?'center':'left'}});
   row.getCell(10).numFmt='dd/mm/yyyy';row.getCell(11).numFmt='dd/mm/yyyy';row.getCell(6).font=F({bold:true});
   row.getCell(15).value={formula:'IF(L'+r+'="LOẠI","Không thực hiện",IF(M'+r+'="Đã hoàn thành",IF(K'+r+'="","Đã hoàn thành",IF(J'+r+'="","Hoàn thành đúng hạn",IF(K'+r+'<=J'+r+',"Hoàn thành đúng hạn","Hoàn thành trễ hạn"))),IF(J'+r+'="","Chưa có hạn",IF(J'+r+'<TODAY(),"Quá hạn",IF(J'+r+'-TODAY()<='+SOON_DAYS+',"Sắp đến hạn","Trong hạn")))))',result:x.tstat};
   row.getCell(15).font=F({bold:true});
   row.getCell(6).dataValidation=list(Object.values(OWNERS));row.getCell(12).dataValidation=list(Object.values(DEC));row.getCell(13).dataValidation=list(PROG.map(p=>p[1]));row.getCell(14).dataValidation=list(CHECK.map(p=>p[1]));
   row.getCell(10).dataValidation={type:'date',operator:'greaterThan',allowBlank:true,formulae:[new Date(2026,0,1)]};row.getCell(11).dataValidation={type:'date',operator:'greaterThan',allowBlank:true,formulae:[new Date(2026,0,1)]};
   dataRows.push(r);r++});
  const last=Math.max(5,r-1);
  ws.autoFilter={from:'A4',to:'Q'+last};
  const ct=(text,bg,fg)=>({type:'containsText',operator:'containsText',text,style:{fill:{type:'pattern',pattern:'solid',bgColor:{argb:'FF'+bg}},font:{color:{argb:'FF'+fg},bold:true}}});
  ws.addConditionalFormatting({ref:'O5:O'+last,rules:[ct('Quá hạn','FDE2E4','A11D2B'),ct('Sắp đến hạn','FFF1D6','B46A00'),ct('trễ hạn','FFE8D6','C2410C'),ct('đúng hạn','E2F3EA','17613D'),ct('Đã hoàn thành','E2F3EA','17613D'),ct('Không thực hiện','EEF1F5','8A95A5')]});
  ws.addConditionalFormatting({ref:'M5:M'+last,rules:[ct('Đã hoàn thành','E2F3EA','17613D'),ct('Đang thực hiện','E6EFFC','24446F'),ct('Chờ kiểm tra','F2ECFA','6B3FA0'),ct('Cần điều chỉnh','FDE2E4','A11D2B')]});
  ws.addConditionalFormatting({ref:'N5:N'+last,rules:[ct('Đã duyệt','E2F3EA','17613D'),ct('Đạt','E2F3EA','17613D'),ct('Yêu cầu điều chỉnh','FDE2E4','A11D2B'),ct('Chờ xem xét','FFF1D6','B46A00')]});
  // ---- Sheet Tổng hợp ----
  const s2=wb.addWorksheet('Tong hop');s2.columns=[{width:30},{width:11},{width:13},{width:13},{width:13},{width:13},{width:11},{width:13}];
  const R='Timeline!$',rg=c=>R+c+'$5:$'+c+'$'+last;
  const head=(rr,arr)=>{const row=s2.getRow(rr);arr.forEach((h,i)=>{const c=row.getCell(i+1);c.value=h;c.font=F({bold:true,color:{argb:'FFFFFFFF'}});c.fill=fill('24446F');c.alignment={horizontal:'center',vertical:'middle',wrapText:true};c.border=border});row.height=30};
  const title=(rr,t)=>{const c=s2.getCell('A'+rr);c.value=t;c.font=F({size:13,bold:true,color:{argb:'FF7F1D1D'}})};
  const H=['Số việc','Chưa thực hiện','Đang triển khai','Đã hoàn thành','Quá hạn','Sắp đến hạn','Chưa giao người'];
  const block=(rr,col,names,label)=>{head(rr,[label,...H]);rr++;
   names.forEach(n=>{const row=s2.getRow(rr),k='$A'+rr,m=x=>rows.filter(o=>(col==='F'?o.owner:splitNames(o.doer).join(', '))===n&&x(o)).length;
    const cells=[n,
     {formula:'COUNTIF('+rg(col)+','+k+')',result:m(()=>true)},
     {formula:'COUNTIFS('+rg(col)+','+k+','+rg('M')+',"Chưa thực hiện")',result:m(o=>o.prog==='Chưa thực hiện')},
     {formula:'COUNTIFS('+rg(col)+','+k+','+rg('M')+',"Đang thực hiện")+COUNTIFS('+rg(col)+','+k+','+rg('M')+',"Chờ kiểm tra")+COUNTIFS('+rg(col)+','+k+','+rg('M')+',"Cần điều chỉnh")',result:m(o=>['Đang thực hiện','Chờ kiểm tra','Cần điều chỉnh'].includes(o.prog))},
     {formula:'COUNTIFS('+rg(col)+','+k+','+rg('M')+',"Đã hoàn thành")',result:m(o=>o.prog==='Đã hoàn thành')},
     {formula:'COUNTIFS('+rg(col)+','+k+','+rg('O')+',"Quá hạn")',result:m(o=>o.tkey==='overdue')},
     {formula:'COUNTIFS('+rg(col)+','+k+','+rg('O')+',"Sắp đến hạn")',result:m(o=>o.tkey==='soon')},
     col==='F'?{formula:'COUNTIFS('+rg(col)+','+k+','+rg('G')+',"")',result:m(o=>!o.doer)}:''];
    cells.forEach((v,i)=>{const c=row.getCell(i+1);c.value=v;c.font=F({bold:i===0});c.border=border;c.alignment={horizontal:i?'center':'left'}});rr++});
   return rr};
  title(1,'TỔNG HỢP THEO ĐƠN VỊ CHỦ TRÌ');let rr=block(3,'F',Object.values(OWNERS),'Đơn vị chủ trì');
  rr+=1;title(rr,'TỔNG HỢP THEO NGƯỜI CHỦ TRÌ THỰC HIỆN');rr+=2;
  const doers=[...new Set(rows.map(o=>splitNames(o.doer).join(', ')).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'vi'));
  rr=doers.length?block(rr,'G',doers,'Người chủ trì thực hiện'):(s2.getCell('A'+rr).value='(chưa giao người chủ trì)',rr+1);
  rr+=1;title(rr,'CÁC GIAI ĐOẠN');rr+=2;head(rr,['Giai đoạn','Từ ngày','Đến ngày','Số việc']);rr++;
  PHASES.forEach(p=>{const row=s2.getRow(rr),n='GĐ '+p.no+' · '+p.name;[n,toDate(p.from),toDate(p.to),{formula:'COUNTIF('+rg('B')+',$A'+rr+')',result:rows.filter(o=>o.phase===n).length}].forEach((v,i)=>{const c=row.getCell(i+1);c.value=v;c.border=border;c.font=F();c.alignment={horizontal:i?'center':'left'};if(i===1||i===2)c.numFmt='dd/mm/yyyy'});rr++});
  // ---- Sheet Hướng dẫn ----
  const s3=wb.addWorksheet('Huong dan');s3.columns=[{width:30},{width:100}];
  s3.getCell('A1').value='NGUYÊN TẮC PHÂN CÔNG VÀ KIỂM SOÁT';s3.getCell('A1').font=F({size:14,bold:true,color:{argb:'FF7F1D1D'}});
  s3.getCell('A2').value='Rõ người – Rõ việc – Rõ trách nhiệm – Rõ thời hạn – Rõ kết quả';s3.getCell('A2').font=F({bold:true,color:{argb:'FF24446F'}});
  let q=4;const sec=(t,arr)=>{const c=s3.getCell('A'+q);c.value=t;c.font=F({size:11.5,bold:true,color:{argb:'FF24446F'}});q++;arr.forEach(([a,b])=>{const row=s3.getRow(q);row.getCell(1).value=a;row.getCell(2).value=b;row.getCell(1).font=F({bold:true});row.getCell(2).font=F();[1,2].forEach(i=>{row.getCell(i).border=border;row.getCell(i).alignment={vertical:'top',wrapText:true}});q++});q++};
  sec('VAI TRÒ & TRÁCH NHIỆM',ROLES);
  sec('QUY TRÌNH',[['Các bước','Giao việc → Triển khai → Bàn giao → Kiểm tra → Xác nhận hoàn thành'],['Nguyên tắc','Không đánh dấu “Đã hoàn thành” khi chưa được kiểm tra: Kết quả kiểm tra / phê duyệt phải là Đạt, Đã duyệt hoặc Không yêu cầu phê duyệt.'],['Ngày hoàn thành thực tế','Người dùng tự nhập khi công việc hoàn thành; dùng để xác định hoàn thành đúng hạn hay trễ hạn.']]);
  sec('TRẠNG THÁI THỰC HIỆN',PROG.map(([k,l])=>[l,{todo:'Chưa bắt đầu triển khai.',doing:'Đang triển khai.',review:'Đã bàn giao, chờ người giám sát kiểm tra.',fix:'Người giám sát yêu cầu điều chỉnh, đang sửa.',done:'Đã kiểm tra đạt / được duyệt, công việc kết thúc.'}[k]]));
  sec('KẾT QUẢ KIỂM TRA / PHÊ DUYỆT',CHECK.map(([k,l])=>[l,{none:'Chưa trình kiểm tra.',wait:'Đã trình, đang chờ xem xét.',pass:'Người giám sát kiểm tra đạt yêu cầu.',approved:'Trưởng BTC / Ban Lãnh đạo phê duyệt.',redo:'Yêu cầu điều chỉnh trước khi duyệt.',na:'Việc không cần qua phê duyệt.'}[k]]));
  sec('TÌNH TRẠNG THỜI HẠN (tự động)',[['Trong hạn','Còn hơn '+SOON_DAYS+' ngày đến hạn.'],['Sắp đến hạn','Còn '+SOON_DAYS+' ngày trở xuống.'],['Quá hạn','Đã qua hạn mà chưa hoàn thành.'],['Hoàn thành đúng hạn','Ngày hoàn thành thực tế ≤ hạn hoàn thành.'],['Hoàn thành trễ hạn','Ngày hoàn thành thực tế > hạn hoàn thành.']]);
  return wb}
 async function exportXlsx(){let wb;try{wb=await buildXlsx()}catch(err){alert(err.message||err);console.warn(err);return}
  const buf=await wb.xlsx.writeBuffer(),blob=new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  const d=new Date(),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='SVI_YEP_2026_Timeline_phan_cong_'+d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+'.xlsx';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);
  if(cloud)log('export','','Excel')}
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
