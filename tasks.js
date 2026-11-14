
// ===== DANH MỤC CÔNG VIỆC (duyệt GIỮ / LOẠI BỎ / CHƯA CHỐT) =====
// Gốc: SVI_YEP_Duyet_Danh_Muc_Cong_Viec.html — 41 mục giữ nguyên ID; 17 mục bổ sung ID mới. Khóa lưu giữ nguyên để không mất quyết định đã lưu.
(function(){
 const root=document.getElementById('tk-root');if(!root)return;
 const ITEMS=[{"id": "01-01", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.1", "title": "Set Menu (Platinum)", "sourceNote": ""}, {"id": "01-02", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.2", "title": "Nước uống (Free Flow package – 3 giờ)", "sourceNote": "Local beer, soft drink, water"}, {"id": "01-04", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.3", "title": "Khảo sát và chốt địa điểm (Lotte / Le Méridien / GEM Center)"}, {"id": "01-05", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.4", "title": "Thử món (food tasting) và chốt thực đơn"}, {"id": "01-06", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.5", "title": "Sơ đồ bố trí bàn tiệc và chỗ ngồi (seating plan)"}, {"id": "01-07", "group": "01", "groupName": "Thuê sảnh & tổ chức tiệc", "ref": "1.6", "title": "Tổng duyệt chương trình tại sảnh (rehearsal)"}, {"id": "02-01", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.1", "title": "In mẫu thiệp + bao lì xì", "sourceNote": ""}, {"id": "02-02", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.2", "title": "In thiệp chúc Tết + bao lì xì", "sourceNote": ""}, {"id": "02-03", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.3", "title": "Bộ nhận diện chủ đề (key visual, logo chủ đề)"}, {"id": "02-04", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.4", "title": "Thẻ tên bàn, menu card, bảng chỉ dẫn"}, {"id": "02-05", "group": "02", "groupName": "Ấn phẩm chuẩn bị trước YEP", "ref": "2.5", "title": "Kịch bản chương trình chi tiết (run-down)"}, {"id": "03-01", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.1", "title": "MC (1 nam, 1 nữ)", "sourceNote": ""}, {"id": "03-02", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.2", "title": "PG", "sourceNote": "Đón khách, hỗ trợ khu tiểu cảnh"}, {"id": "03-03", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.3", "title": "Vũ đoàn", "sourceNote": "8 dancer: 4 nam + 4 nữ"}, {"id": "03-04", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.4", "title": "Ca sĩ nữ 1", "sourceNote": ""}, {"id": "03-05", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.5", "title": "Ca sĩ nữ 2", "sourceNote": ""}, {"id": "03-06", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.6", "title": "Ban tổ chức và phân công (check-in, hậu cần, kỹ thuật, quà)"}, {"id": "03-07", "group": "03", "groupName": "Chi phí nhân sự", "ref": "3.7", "title": "Tiết mục văn nghệ nội bộ (đăng ký, tập luyện)"}, {"id": "04-01", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.1", "title": "Hashtag cầm tay (Formex dán PP)", "sourceNote": ""}, {"id": "04-02", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.2", "title": "Ứng dụng quay số may mắn", "sourceNote": ""}, {"id": "04-03", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.3", "title": "Backdrop + Mockup Logo SVI", "sourceNote": ""}, {"id": "04-04", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.4", "title": "Photobooth chính", "sourceNote": ""}, {"id": "04-05", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.5", "title": "Khu vực tiểu cảnh", "sourceNote": ""}, {"id": "04-06", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.6", "title": "Logo hộp đèn SVI trên sân khấu", "sourceNote": ""}, {"id": "04-07", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.7", "title": "Bảng giải thưởng", "sourceNote": ""}, {"id": "04-08", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.8 (trang 5)", "title": "Thiệp mời YEP (khách + CBNV cũ)", "sourceNote": "Dự kiến 60 bộ"}, {"id": "04-09", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.7 (trang 5)", "title": "Bộ màn hình LED (7,2 × 4 m; 28,8 m²)", "sourceNote": "Loại P3; số thứ tự trong tài liệu trùng mục trước"}, {"id": "04-10", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.8 (trang 5)", "title": "Âm thanh", "sourceNote": ""}, {"id": "04-11", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.9", "title": "Ánh sáng", "sourceNote": ""}, {"id": "04-12", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.10", "title": "Màn sao", "sourceNote": ""}, {"id": "04-13", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.11", "title": "Photoshoot – khu vực chụp ảnh theo concept sự kiện"}, {"id": "04-14", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.12", "title": "Trang trí bàn tiệc và hoa theo chủ đề"}, {"id": "04-15", "group": "04", "groupName": "Thiết kế, sản xuất & âm thanh ánh sáng", "ref": "4.13", "title": "Nội dung trình chiếu LED theo chủ đề (opening, chuyển cảnh)"}, {"id": "05-01", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.1", "title": "Quay hình sự kiện", "sourceNote": ""}, {"id": "05-02", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.2", "title": "Chụp hình sự kiện", "sourceNote": ""}, {"id": "05-03", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.3", "title": "TVC giới thiệu công ty trình chiếu đầu giờ – Clip Recap", "sourceNote": ""}, {"id": "05-04", "group": "05", "groupName": "Quay phim + chụp hình", "ref": "5.4", "title": "Đăng tải hình ảnh, video lên kênh nội bộ / mạng xã hội"}, {"id": "06-01", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.1", "title": "Chi phí vận chuyển", "sourceNote": ""}, {"id": "06-02", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.2", "title": "Chi phí lắp đặt, tháo dỡ", "sourceNote": ""}, {"id": "06-03", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.3", "title": "Chi phí quản lý, giám sát, điều phối, chạy chương trình", "sourceNote": ""}, {"id": "06-04", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.4", "title": "Đưa đón khách mời / xe di chuyển"}, {"id": "06-05", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.5", "title": "Hướng dẫn gửi xe, đón tiếp, check-in khách"}, {"id": "06-06", "group": "06", "groupName": "Chi phí vận hành", "ref": "6.6", "title": "Giấy phép biểu diễn (nếu địa điểm yêu cầu)"}, {"id": "07-01", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.1", "title": "Giải đặc biệt (Voucher – số lượng 1 giải)", "sourceNote": ""}, {"id": "07-02", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.2", "title": "Giải nhất (Voucher – số lượng 2 giải)", "sourceNote": ""}, {"id": "07-03", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.3", "title": "Giải nhì – 3 giải (1 chỉ vàng SJC)", "sourceNote": ""}, {"id": "07-04", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.4", "title": "Giải ba – 4 giải (iPad Mini 7 128GB)", "sourceNote": ""}, {"id": "07-05", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.5", "title": "Giải khuyến khích – 6 giải (Máy lọc không khí)", "sourceNote": ""}, {"id": "07-06", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.6", "title": "Giải tinh thần – Tiền mặt", "sourceNote": ""}, {"id": "07-07", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.7", "title": "Quà tặng Mini-Game – 3 giải nhất", "sourceNote": ""}, {"id": "07-08", "group": "07", "groupName": "Giải thưởng – Quay số may mắn", "ref": "7.8", "title": "Thể lệ quay số và mini-game"}, {"id": "08-01", "group": "08", "groupName": "Chi phí khác", "ref": "8.1", "title": "Tiền hỗ trợ nhân sự chạy chương trình (Nghệ sĩ, kỹ thuật,...)", "sourceNote": "Phát sinh sau sự kiện"}, {"id": "09-01", "group": "09", "groupName": "Quà tặng", "ref": "B.1a", "title": "Quà tặng khách mời – Chủ tịch", "sourceNote": ""}, {"id": "09-02", "group": "09", "groupName": "Quà tặng", "ref": "B.1b", "title": "Quà tặng cơ quan, sở ban ngành", "sourceNote": ""}, {"id": "09-03", "group": "09", "groupName": "Quà tặng", "ref": "B.1c", "title": "Quà tặng CBNV đang làm việc", "sourceNote": ""}, {"id": "09-04", "group": "09", "groupName": "Quà tặng", "ref": "B.1d", "title": "Quà tặng CBNV cũ", "sourceNote": ""}, {"id": "09-05", "group": "09", "groupName": "Quà tặng", "ref": "B.1e", "title": "Vinh danh cá nhân và tập thể xuất sắc (cúp, kỷ niệm chương)"}];
 const KEY='svi-yep-2025-work-items-approval-v1', THEME_KEY='svi-yep-theme-v1';
 const THEMES=[
  {id:'rise',name:'VƯƠN XA – RISE BEYOND',msg:"Kế thừa nền tảng đã xây dựng, vượt qua giới hạn để phát triển lên tầm cao mới.",slogans:[{"t": "Vững nền tảng – Vươn tầm cao", "d": "Nhấn mạnh nền tảng vững chắc về con người, năng lực và giá trị đã xây dựng, từ đó tạo động lực để SVI tiếp tục nâng cao vị thế và phát triển bền vững."}, {"t": "Bứt qua giới hạn – Chinh phục tương lai", "d": "Thể hiện tinh thần không ngừng đổi mới, sẵn sàng vượt qua những giới hạn hiện tại để nắm bắt cơ hội và chinh phục những mục tiêu lớn hơn."}],look:'Xanh navy & vàng ánh kim · bậc thang, đường bay đi lên',c1:'#14284f',c2:'#c9a24a'},
  {id:'break',name:'BỨT PHÁ 2027 – BREAKTHROUGH',msg:"Đổi mới tư duy, tạo động lực tăng trưởng và hướng đến những thành tựu mới.",slogans:[{"t": "Đổi mới tư duy – Bứt phá tương lai", "d": "Đề cao tư duy đổi mới như yếu tố khởi đầu cho sự phát triển, khuyến khích tập thể chủ động thay đổi để tạo ra những bước tiến khác biệt."}, {"t": "Khơi nguồn khát vọng – Bứt phá vươn xa", "d": "Khơi dậy tinh thần nhiệt huyết và khát vọng phát triển trong mỗi thành viên, biến động lực cá nhân thành sức mạnh thúc đẩy doanh nghiệp vươn xa."}],look:'Đen, cam, đỏ · ánh sáng xuyên qua vết nứt',c1:'#1a1a1a',c2:'#e8641e'},
  {id:'horizon',name:'CHÂN TRỜI MỚI – NEW HORIZONS',msg:"Mở rộng tầm nhìn, đón nhận cơ hội và kiến tạo giai đoạn phát triển mới.",slogans:[{"t": "Mở chân trời mới – Kiến tạo tương lai", "d": "Tượng trưng cho việc mở ra những hướng đi và cơ hội kinh doanh mới, khẳng định tinh thần chủ động kiến tạo tương lai thay vì chỉ thích ứng với thay đổi."}, {"t": "Tầm nhìn rộng mở – Cơ hội vươn xa", "d": "Nhấn mạnh tầm quan trọng của tư duy chiến lược và khả năng nhìn nhận cơ hội, tạo tiền đề để SVI mở rộng hoạt động và nâng cao vị thế."}],look:'Xanh dương & trắng · đường chân trời lúc bình minh',c1:'#0f4c8a',c2:'#7cc4f2'},
  {id:'together',name:'HỘI TỤ & VƯƠN TẦM – STRONGER TOGETHER',msg:"Phát huy sức mạnh đoàn kết, kết nối các nguồn lực và cùng nhau phát triển.",slogans:[{"t": "Hội tụ sức mạnh – Vươn tầm tương lai", "d": "Khẳng định sức mạnh tập thể được hình thành từ sự đồng lòng, hợp tác và gắn kết giữa các thành viên, tạo nền tảng để SVI cùng hướng đến những mục tiêu lớn."}, {"t": "Kết nối giá trị – Nâng tầm vị thế", "d": "Đề cao sự liên kết giữa con người, đơn vị và các lĩnh vực hoạt động, qua đó phát huy giá trị cộng hưởng và nâng cao vị thế chung của SVI Group."}],look:'Xanh lục & vàng · mảnh ghép kết nối thành logo SVI',c1:'#145a3c',c2:'#d9b44a'},
  {id:'ignite',name:'THẮP SÁNG HÀNH TRÌNH – IGNITE THE JOURNEY',msg:"Lan tỏa nhiệt huyết, tiếp nối những thành tựu và truyền cảm hứng cho hành trình phía trước.",slogans:[{"t": "Thắp sáng khát vọng – Tiếp nối thành công", "d": "Tôn vinh những thành tựu đã đạt được, đồng thời khơi dậy niềm tin và khát vọng để mỗi thành viên tiếp tục đóng góp vào hành trình phát triển mới."}, {"t": "Chung một ngọn lửa – Sáng một hành trình", "d": "Sử dụng hình ảnh ngọn lửa tượng trưng cho nhiệt huyết, niềm tin và sự gắn kết, thể hiện tinh thần mỗi cá nhân cùng góp sức tạo nên thành công chung."}],look:'Tím đậm & vàng đồng · ánh nến, ánh đèn lan tỏa',c1:'#3b1f63',c2:'#d39b4a'}];
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
   const nums=base.map(i=>/^(\d+)\.(\d+)/.exec(i.ref)).filter(Boolean).map(m=>+m[2]);
   const letters=base.map(i=>/^B\.1([a-z])$/.exec(i.ref)).filter(Boolean).map(m=>m[1].charCodeAt(0));
   extra.forEach(([k,v],n)=>{
    const ref=nums.length?(+g)+'.'+(Math.max(...nums)+1+n):letters.length?'B.1'+String.fromCharCode(Math.max(...letters)+1+n):String(n+1);
    out.push({id:'c-'+k,k,group:g,groupName:name,ref,title:v.title||'',sourceNote:'',custom:true})});
  }
  return out}
 const state=id=>decisions[id]?.status||'pending';
 function save(){try{localStorage.setItem(KEY,JSON.stringify(decisions))}catch(e){}}
 function renderTheme(){
  const t=THEMES.find(x=>x.id===theme);
  const b=$('tk-theme-banner');
  if(t){b.style.setProperty('--c1',t.c1);b.style.setProperty('--c2',t.c2);b.className='tk-theme-banner on';b.innerHTML='<div class="tk-eyebrow">CHỦ ĐỀ GALA DINNER</div><h2>'+esc(t.name)+'</h2><p><b>Thông điệp chủ đạo:</b> '+esc(t.msg)+'</p><div class="tk-slogans">'+t.slogans.map((s,i)=>'<div class="tk-slogan"><span>Slogan '+(i+1)+'</span><b>'+esc(s.t)+'</b><p>'+esc(s.d)+'</p></div>').join('')+'</div><small>Gợi ý hình ảnh: '+esc(t.look)+'</small>'}
  else{b.className='tk-theme-banner';b.innerHTML='<div class="tk-eyebrow">CHỦ ĐỀ GALA DINNER</div><h2>Chưa chọn chủ đề</h2><p>Chọn một trong 5 chủ đề bên dưới.</p>'}
  $('tk-themes').innerHTML=THEMES.map(x=>'<button type="button" class="tk-theme'+(x.id===theme?' on':'')+'" data-theme="'+x.id+'" style="--c1:'+x.c1+';--c2:'+x.c2+'"><b>'+esc(x.name)+'</b><span>'+esc(x.msg)+'</span><em>'+x.slogans.map(s=>esc(s.t)).join(' · ')+'</em></button>').join('');
 }
 function render(){
  const term=$('tk-search').value.trim().toLocaleLowerCase('vi'),group=$('tk-group').value,status=$('tk-status').value;
  const ALL=allItems();
  const visible=ALL.filter(it=>(group==='all'||it.group===group)&&(status==='all'||state(it.id)===status)&&(!term||[it.title,it.ref,it.groupName,it.sourceNote,it.id].join(' ').toLocaleLowerCase('vi').includes(term)));
  $('tk-stat-total').textContent=ALL.length;
  ['keep','drop','pending'].forEach(s=>$('tk-stat-'+s).textContent=ALL.filter(it=>state(it.id)===s).length);
  let out='';
  for(const [code,name] of sections){const m=visible.filter(i=>i.group===code);if(!m.length)continue;
   out+='<section class="tk-section"><div class="tk-section-head"><h3>'+esc(code)+' · '+esc(name)+'</h3><div class="tk-head-r"><span>'+m.length+' hạng mục</span><button type="button" class="tk-add" data-add-group="'+esc(code)+'" title="Thêm công việc vào nhóm này" aria-label="Thêm công việc vào nhóm '+esc(name)+'">+</button></div></div><div class="tk-item-head"><div>Mã</div><div>Hạng mục công việc</div><div>Ghi chú của bạn</div><div>Phê duyệt</div></div>';
   for(const it of m){const cur=state(it.id);
    out+='<article class="tk-item is-'+cur+''+'" data-id="'+it.id+'"><div class="tk-ref">'+esc(it.ref)+''+(it.custom?'':'<small>'+esc(it.id)+'</small>')+'</div><div class="tk-titleblock">'+(it.custom?'<div class="tk-custrow"><input class="tk-cust-title" type="text" maxlength="200" value="'+esc(it.title)+'" placeholder="Nhập tên công việc..."/><button type="button" class="tk-cust-del" title="Xóa công việc này" aria-label="Xóa">×</button></div>':'<div class="tk-name">'+esc(it.title)+'</div>')+(it.sourceNote?'<div class="tk-source">'+esc(it.sourceNote)+'</div>':'')+'</div><textarea class="tk-note" aria-label="Ghi chú cho '+esc(it.title)+'" placeholder="Ghi chú nếu cần...">'+esc(decisions[it.id]?.note||'')+'</textarea><div class="tk-choices">'+[['keep','GIỮ'],['drop','LOẠI BỎ'],['pending','CHƯA CHỐT']].map(([a,l])=>'<button type="button" data-action="'+a+'" class="tk-choice'+(cur===a?' on':'')+'" aria-pressed="'+(cur===a)+'">'+l+'</button>').join('')+'</div></article>'}
   out+='</section>'}
  $('tk-sections').innerHTML=out||'<div class="tk-empty">Không có hạng mục phù hợp với bộ lọc.</div>';
 }
 for(const [code,name] of sections){const o=document.createElement('option');o.value=code;o.textContent=code+' · '+name;$('tk-group').appendChild(o)}
 ['tk-search','tk-group','tk-status'].forEach(id=>$(id).addEventListener('input',render));
 // ===== Đồng bộ Firebase Realtime Database (localStorage vẫn làm bản lưu tạm khi mất mạng) =====
 let cloud=null, editing=false, pendingRender=false;
 const who=(()=>{let n='';try{n=localStorage.getItem('svi-yep-user')||''}catch(_){};return n})();
 function setSync(state,msg){const el=$('tk-sync');if(!el)return;el.className='tk-sync '+state;el.querySelector('span').textContent=msg}
 function cacheTheme(){try{localStorage.setItem(THEME_KEY,theme)}catch(_){}}
 function titleOf(id){return (allItems().find(i=>i.id===id)||{}).title||id}
 function log(action,id,value){if(!cloud)return;cloud.child('log').push({at:firebase.database.ServerValue.TIMESTAMP,action,id:id||'',title:id?titleOf(id):'',value:value==null?'':String(value).slice(0,300),by:$('tk-user').value.trim()||'Không tên'}).catch(()=>{})}
 const LBL={keep:'GIỮ',drop:'LOẠI BỎ',pending:'CHƯA CHỐT'};
 function renderSafe(){if(editing){pendingRender=true;return}render()}
 function renderLog(list){const box=$('tk-log-list');if(!box)return;
  if(!list.length){box.innerHTML='<p class="muted">Chưa có hoạt động.</p>';return}
  box.innerHTML=list.slice().reverse().map(x=>{const d=x.at?new Date(x.at).toLocaleString('vi-VN'):'';
   const txt=x.action==='status'?'chọn <b>'+esc(LBL[x.value]||x.value)+'</b> cho “'+esc(x.title)+'”':x.action==='note'?'ghi chú “'+esc(x.title)+'”: '+esc(x.value):x.action==='theme'?(x.value?'chọn chủ đề <b>'+esc((THEMES.find(t=>t.id===x.value)||{}).name||x.value)+'</b>':'bỏ chọn chủ đề'):x.action==='add'?'thêm công việc vào nhóm '+esc(x.value)+': “'+esc(x.title)+'”':x.action==='del'?'xóa công việc “'+esc(x.value)+'”':x.action==='reset'?'<b>đặt lại</b> toàn bộ lựa chọn':esc(x.action);
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
 $('tk-sections').addEventListener('focusin',e=>{if(e.target.matches('textarea.tk-note,input.tk-cust-title'))editing=true});
 $('tk-sections').addEventListener('focusout',e=>{if(!e.target.matches('textarea.tk-note,input.tk-cust-title'))return;editing=false;if(pendingRender){pendingRender=false;setTimeout(render,0)}});
 $('tk-themes').addEventListener('click',e=>{const b=e.target.closest('[data-theme]');if(!b)return;theme=theme===b.dataset.theme?'':b.dataset.theme;cacheTheme();renderTheme();if(cloud){cloud.child('theme').set(theme);log('theme','',theme)}});
 $('tk-reset').addEventListener('click',()=>{if(!confirm('Đặt lại toàn bộ lựa chọn và ghi chú đã nhập? (áp dụng cho mọi người dùng chung Firebase)'))return;decisions={};save();render();if(cloud){cloud.child('decisions').remove();log('reset','','')}});
 $('tk-print').addEventListener('click',()=>{document.body.classList.add('tk-printing');window.print();setTimeout(()=>document.body.classList.remove('tk-printing'),500)});
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
 initCloud();
 renderTheme();render();
 window.__tk={ITEMS,allItems};
})();
