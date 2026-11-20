// Tab GÓP Ý HỢP ĐỒNG – đối chiếu hợp đồng Le Méridien, khách sạn phản hồi trực tiếp (đồng bộ Firebase)
(function(){
 const $=id=>document.getElementById(id);
 const root=$('ct-root');if(!root)return;
 const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const COMPARE=[
  ['h01','Người liên hệ','Chức vụ: Phó quản lý','Ban HCNS (Quyền Trưởng Ban HCNS)'],
  ['h02','Tên sự kiện ở tiêu đề','VPS Global – Dinner – 29 Jan 2027','SVI Group – Dinner – 29 Jan 2027'],
  ['h03','Lịch trình sự kiện','29/01/2027, 18:00–22:00, tiệc tối, Ballroom (365 m² – tầng 1), bàn tròn, 130 khách đảm bảo / 140 khách dự phòng','Bổ sung giờ setup bàn tiệc để SVI kiểm tra, nghiệm thu trước giờ tiệc; 10 khách/bàn tròn; bổ sung thông tin sảnh'],
  ['h04','Sắp xếp lại sảnh','Khách sạn thỏa thuận với Bên Tổ Chức để sắp xếp lại vị trí tiệc khi cần thiết; quyết định cuối cùng phụ thuộc sự đồng ý của đôi bên','SVI không đồng ý đổi sảnh tiệc khác sảnh đã đặt'],
  ['h05','Phí phục vụ và thuế trong bảng tổng','Chỉ có tổng chưa gồm phí và thuế (250.000.000) và đã gồm (283.500.000), không tách dòng','Thêm dòng 5% phí phục vụ và 8% thuế GTGT, bổ sung giá trị từng dòng'],
  ['h06','Doanh thu tối thiểu','Tổng doanh thu tối thiểu đã gồm phí dịch vụ và thuế: 283.500.000','Điều chỉnh để tổng đã gồm phí và thuế là 250.000.000'],
  ['h07','Số tiền hai đợt cọc','Mỗi đợt 141.750.000 (50% doanh thu ước tính); đợt 1 không hoàn trả','Điều chỉnh tương ứng với 250.000.000'],
  ['h08','Hạn thanh toán đợt 2','Chậm nhất 15/12/2026','Ngày sự kiện là 29/01, đề nghị hạn đợt 2 là 20/01'],
  ['h09','Thanh toán và nghiệm thu','Hai đợt cọc trước sự kiện; chi phí phát sinh trả tiền mặt hoặc thẻ khi trả phòng','Làm rõ thời điểm thanh toán và nghiệm thu sau tiệc'],
  ['h10','Bảo đảm sảnh và thời gian','Không có','Thêm: khách sạn luôn bảo đảm sảnh, thời gian và điều kiện; nếu hủy hoặc yêu cầu dời địa điểm, thời gian thì hoàn cọc, bồi thường một khoản bằng tiền cọc và toàn bộ thiệt hại trong 03 ngày'],
  ['h11','Điều khoản hủy','Từ ngày ký đến ngày tổ chức: phí hủy 100% tổng doanh thu tối thiểu','Điều chỉnh các mốc thời gian hủy tương ứng với tỷ lệ SVI phải chịu'],
  ['h12','Hủy do bất khả kháng','Không tính phí hủy; 100% tiền cọc được giữ lại cho lần đặt sau','Hoàn lại cho khách hàng trong 03 ngày kể từ ngày xảy ra sự kiện bất khả kháng'],
  ['h13','Đặt lại trong tương lai','Tín dụng 100% số tiền hủy cho sự kiện thay thế tổ chức trong vòng 01 tháng','Xóa điều khoản'],
  ['h14','Hút thuốc','Cấm hút thuốc trong phòng và khu vực công cộng; phạt 4.000.000 net mỗi vi phạm','Bổ sung “ngoại trừ nơi được quy định hút thuốc”'],
  ['h15','Nhà cung ứng bên ngoài','Khách sạn có toàn quyền yêu cầu nhà cung ứng ký thỏa thuận bồi thường theo mẫu của khách sạn và chứng minh mức bảo hiểm','Đề nghị khách sạn làm rõ yêu cầu cụ thể']];
 const EXTRA=[
  ['v01','Giờ sử dụng sảnh','Ghi rõ giờ vào setup, giờ SVI nghiệm thu, giờ tiệc 18:00–22:00 và giờ tháo dỡ; các khung này không tính phí vượt giờ.'],
  ['v02','Bố trí sảnh','Ballroom 365 m² tầng 1, 10 khách/bàn tròn, kèm sơ đồ bố trí làm phụ lục.'],
  ['v03','Không đổi sảnh','Chỉ thay đổi khi có văn bản đồng ý của SVI; khách sạn hủy hoặc dời thì hoàn cọc và bồi thường thêm một khoản bằng tiền cọc.'],
  ['v04','Doanh thu tối thiểu','Chốt một con số và ghi rõ đã hay chưa gồm phí phục vụ, thuế; thuế GTGT tính theo quy định tại thời điểm xuất hóa đơn.'],
  ['v05','Ưu đãi đi kèm','Ghi vào hợp đồng welcome drink miễn phí và LED 12 m (nếu dùng) cùng giá trị.'],
  ['v06','Lịch thanh toán','Đợt 2 hạn 20/01/2027; bỏ chữ “Không hoàn trả” ở đợt 1; chi phí phát sinh thanh toán sau khi ký biên bản nghiệm thu và có hóa đơn.'],
  ['v07','Phí hủy','Chia theo mốc thời gian thay vì 100% từ ngày ký: hủy trước 60 ngày: 25%; từ 60 đến 30 ngày: 50%; từ 30 đến 15 ngày: 75%; dưới 15 ngày: 100% tổng doanh thu tối thiểu.'],
  ['v08','Bất khả kháng','Hoàn cọc trong 07 ngày làm việc kể từ ngày nhận thông báo hủy.'],
  ['v09','Nhà cung ứng bên ngoài','Khách sạn gửi mẫu cam kết, mức bảo hiểm và các phí thi công, phí điện (nếu có) trước 14 ngày.'],
  ['v10','Quy định vận hành','Ngoại lệ âm lượng trên 80 decibel cho tiết mục biểu diễn; ngoại lệ hút thuốc tại khu vực được phép; khách sạn liệt kê giấy phép sự kiện cần nộp.']];
 const KEY='svi-yep-contract-lm-v1',WHO='svi-yep-contract-who';
 let data={};try{data=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(_){data={}}
 let ref=null,editing=false,pending=false;const timers={};
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(data))}catch(_){}};
 const meta=v=>v&&(v.by||v.at)?'<small class="ct-meta">'+esc([v.by,v.at?new Date(v.at).toLocaleString('vi-VN'):''].filter(Boolean).join(' · '))+'</small>':'';
 const box=id=>'<textarea class="ct-reply" data-row="'+id+'" rows="3" placeholder="Ý kiến của khách sạn...">'+esc((data[id]||{}).text||'')+'</textarea>'+meta(data[id]);
 function render(){if(editing){pending=true;return}
  $('ct-compare').innerHTML='<table class="ct-table"><colgroup><col style="width:15%"><col style="width:27%"><col style="width:27%"><col style="width:31%"></colgroup><thead><tr><th>Loại nội dung</th><th>Hợp đồng gốc của khách sạn</th><th>Góp ý của SVI</th><th class="ct-hotel">Ý kiến khách sạn</th></tr></thead><tbody>'+COMPARE.map(([id,a,b,c])=>'<tr><th scope="row">'+esc(a)+'</th><td>'+esc(b)+'</td><td>'+esc(c)+'</td><td class="ct-hotel">'+box(id)+'</td></tr>').join('')+'</tbody></table>';
  $('ct-extra').innerHTML='<table class="ct-table"><colgroup><col style="width:5%"><col style="width:15%"><col style="width:49%"><col style="width:31%"></colgroup><thead><tr><th>#</th><th>Nội dung</th><th>Ý kiến bổ sung của SVI</th><th class="ct-hotel">Ý kiến khách sạn</th></tr></thead><tbody>'+EXTRA.map(([id,a,b],i)=>'<tr><td class="c">'+(i+1)+'</td><th scope="row">'+esc(a)+'</th><td>'+esc(b)+'</td><td class="ct-hotel">'+box(id)+'</td></tr>').join('')+'</tbody></table>';
  $('ct-general').innerHTML=box('general');
  const n=[...COMPARE,...EXTRA].filter(r=>((data[r[0]]||{}).text||'').trim()).length;
  $('ct-count').textContent=n+'/'+(COMPARE.length+EXTRA.length)+' mục đã có ý kiến khách sạn'}
 function setSync(cls,msg){const el=$('ct-sync');el.className='tk-sync '+cls;el.querySelector('span').textContent=msg}
 root.addEventListener('input',e=>{if(!e.target.matches('.ct-reply'))return;const id=e.target.dataset.row,text=e.target.value,by=$('ct-who').value.trim();
  data[id]={text,by,at:Date.now()};save();
  if(ref){clearTimeout(timers[id]);timers[id]=setTimeout(()=>ref.child('replies/'+id).set({text,by,at:firebase.database.ServerValue.TIMESTAMP}).catch(()=>{}),800)}});
 root.addEventListener('focusin',e=>{if(e.target.matches('.ct-reply'))editing=true});
 root.addEventListener('focusout',e=>{if(!e.target.matches('.ct-reply'))return;if(e.relatedTarget&&e.relatedTarget.matches&&e.relatedTarget.matches('.ct-reply'))return;editing=false;if(pending){pending=false;setTimeout(render,0)}else setTimeout(render,0)});
 try{$('ct-who').value=localStorage.getItem(WHO)||''}catch(_){}
 $('ct-who').addEventListener('change',e=>{try{localStorage.setItem(WHO,e.target.value.trim())}catch(_){}});
 $('ct-print').addEventListener('click',()=>{document.body.classList.add('ct-printing');window.print();setTimeout(()=>document.body.classList.remove('ct-printing'),600)});
 render();
 if(!window.firebase||!window.SVI_FIREBASE_CONFIG){setSync('local','Chỉ lưu trên máy này (không kết nối được Firebase)');return}
 try{const app=firebase.apps.length?firebase.app():firebase.initializeApp(window.SVI_FIREBASE_CONFIG);const db=firebase.database(app);
  ref=db.ref('svi-yep-2026/contract-lm');setSync('wait','Đang kết nối…');
  db.ref('.info/connected').on('value',s=>setSync(s.val()?'on':'off',s.val()?'Đã đồng bộ – ý kiến được lưu tự động':'Mất kết nối – ý kiến sẽ tự gửi khi có mạng'));
  ref.child('replies').on('value',s=>{const v=s.val()||{};Object.keys(v).forEach(k=>{data[k]=v[k]});save();render()},err=>{setSync('err','Không lưu được lên máy chủ ('+(err&&err.code||'lỗi')+')')});
 }catch(e){setSync('err','Không khởi tạo được kết nối')}
})();
