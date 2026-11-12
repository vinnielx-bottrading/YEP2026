
// ===== GEM CENTER — dự toán chi phí (svi-yep-gem-v1) =====
// Nguồn: Báo giá sự kiện GEM Center cho VPS Global 29/01/2027 + Set Menu 2026.
(function(){
 const $=id=>document.getElementById(id);
 if(!$('gem-root'))return;
 const KEY='svi-yep-gem-v3', SVC=0.05, VAT=0.10;
 const fmt=n=>Math.round(n).toLocaleString('vi-VN')+'đ';
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const pay=(base,basis)=>basis==='nett'?base:base*(1+SVC)*(1+VAT);

 const HALLS={era:{name:'ERA · tầng 6 (khoảng 43 × 10 m)'},castor:{name:'CASTOR 4 · tầng 5 · 3 lines'}};
 const MENUS=[
  {id:1,price:1090000,page:2,dishes:['Súp tôm ngân nhĩ','Sò điệp đút lò sốt phô mai trứng muối – xà lách','Bò hầm sốt truffle – bánh mì','Thăn heo áp chảo sốt cay – cơm chiên','Bánh kem bắp sô-cô-la']},
  {id:2,price:1090000,page:3,dishes:['Súp dumpling hải sản trứng tôm','Gà nướng phô mai – xà lách','Bò hầm sốt bí cay – bánh mì sấy','Tôm càng hấp rượu Hoa Điêu – miến sốt xì dầu','Kem dừa cà phê']},
  {id:3,price:1275000,page:4,dishes:['Súp vịt đút lò Hoisin','Hải sản chiên giòn – xà lách','Bò hầm sốt rượu Porto – bánh mì','Tôm càng nướng sốt kem truffle – mì Fettuccine','Kem ổi hồng']},
  {id:4,price:1275000,page:5,dishes:['Súp gà hạt sen atiso','Cá chẽm cuộn phô mai chiên giòn sốt chanh cay – xà lách táo','Tôm càng gyoza sốt giấm đen','Bò hầm sốt truffle – mì Fettuccine','Bánh nam việt quất dừa trà xanh']},
  {id:5,price:1515000,page:6,dishes:['Súp kem cà rốt với tôm chiên Kadaif','Gà nướng lá mắc mật – gỏi hoa chuối','Bò hầm sốt hành caramel','Cua lột chiên giòn sốt trứng muối – miến','Bánh mousse phô mai đậu phộng caramel']},
  {id:6,price:1515000,page:7,dishes:['Súp bắp cua lột','Tôm càng Kadaif – xà lách củ sen','Cá mú hấp sốt bào ngư','Gà nướng sốt mắc mật – cơm chiên','Kem dừa trái cây']}
 ];
 const DRINKS={beer:{name:'Pepsi + nước tinh khiết + bia Heineken',price:455000},wine:{name:'Pepsi + nước tinh khiết + rượu vang',price:635000},beer_wine:{name:'Pepsi + nước tinh khiết + Heineken + rượu vang',price:685000}};
 const STATUS=[['draft','Dự tính'],['internal','Đã chốt nội bộ'],['pending','Chờ báo giá'],['vendor','Nhà cung cấp xác nhận']];
 const GROUPS={1:'1 · Set Menu & Đồ uống',2:'2 · LED',3:'3 · Các chi phí khác'};
 // Khoản ngoài gói ăn uống. hall: chỉ áp dụng khi chọn sảnh đó.
 const ITEMS=[
  {k:'led_p3',g:2,name:'LED P3 sân khấu của GEM',unit:'m²',price:1800000,qty:24,basis:'++',on:true,status:'internal',src:'Báo giá GEM tr.2',note:'24 m² — cùng diện tích LED đang tính cho Lotte / Le Méridien.'},
  {k:'era_venue_setup',g:3,hall:'era',name:'Thuê/setup sảnh ERA 08:00–12:00',unit:'nửa ngày',price:51100000,qty:1,basis:'++',on:true,status:'internal',src:'Báo giá GEM tr.1',note:'Không có máy lạnh khi setup.'},
  {k:'castor_venue_setup',g:3,hall:'castor',name:'Thuê/setup sảnh Castor 4 08:00–12:00',unit:'nửa ngày',price:92400000,qty:1,basis:'++',on:true,status:'internal',src:'Báo giá GEM tr.1',note:'Không có máy lạnh khi setup.'},
  {k:'castor_line3',g:3,hall:'castor',name:'Mở line thứ 3 Castor 4 (18:00–22:00)',unit:'line',price:65000000,qty:1,basis:'++',on:true,status:'internal',src:'Báo giá GEM tr.1',note:'GEM đề nghị khi thi công lớn; giá 2 lines chưa có báo giá.'},
  {k:'external_equipment',g:3,name:'Phí mang âm thanh/ánh sáng/sân khấu/LED ngoài vào',unit:'sảnh/ngày',price:15000000,qty:1,basis:'++',on:true,status:'internal',src:'Báo giá GEM tr.1',note:'Là phí mang vào, không phải tiền thuê thiết bị.'},
  {k:'wireless_mic',g:3,name:'Micro không dây',unit:'cái',price:500000,qty:4,basis:'++',on:true,note:'4 micro — như Lotte / Le Méridien.',status:'internal',src:'Báo giá GEM tr.2'},
  {k:'corkage_wine',g:3,name:'Phí phục vụ rượu vang mang vào',unit:'chai 750 ml',price:550000,qty:2,basis:'++',on:true,note:'2 chai như Lotte / Le Méridien.',status:'internal',src:'Báo giá GEM tr.2'},
  {k:'corkage_spirits',g:3,name:'Phí phục vụ rượu mạnh mang vào',unit:'chai 750 ml',price:825000,qty:6,basis:'++',on:true,note:'6 chai như Lotte / Le Méridien.',status:'internal',src:'Báo giá GEM tr.2'},
  {k:'motorbike_parking',g:3,name:'Gửi xe máy',unit:'xe',price:10000,qty:80,basis:'nett',on:true,status:'internal',src:'Báo giá GEM tr.2',payer:true,note:'80 xe như Lotte / Le Méridien.'},
  {k:'car_parking',g:3,name:'Gửi ô tô',unit:'xe',price:50000,qty:50,basis:'nett',on:true,status:'internal',src:'Báo giá GEM tr.2',payer:true,note:'50 xe như Lotte / Le Méridien.'},
 ];
 const COLL=new Set();
 const DEF={hall:'era',menu:1,drink:'beer',guests:[120,140,150],guarantee:150,view:2,items:{}};
 let S;
 function fresh(){const s=JSON.parse(JSON.stringify(DEF));ITEMS.forEach(it=>s.items[it.k]={on:it.on,qty:it.qty,price:it.price,basis:it.basis,status:it.status,note:'',payer:'svi'});return s}
 function load(){S=fresh();try{const d=JSON.parse(localStorage.getItem(KEY)||'null');if(d)['hall','menu','drink','guests','guarantee','view'].forEach(k=>{if(d[k]!=null)S[k]=d[k]})}catch(_){}}
 function save(){try{const o={};['hall','menu','drink','guests','guarantee','view'].forEach(k=>o[k]=S[k]);localStorage.setItem(KEY,JSON.stringify(o))}catch(_){}}

 function compute(){
  const G=S.guests.map(g=>Math.max(1,Math.floor(Number(g)||1)));
  const guar=Math.max(0,Math.floor(Number(S.guarantee)||0));
  const menu=MENUS[S.menu-1], drink=DRINKS[S.drink];
  return G.map(g=>{
   const bill=Math.max(g,guar);
   const lines=[];
   lines.push({k:'menu',g:1,name:'Set Menu '+String(menu.id).padStart(2,'0'),unit:'suất',qty:bill,price:menu.price,basis:'++',fixed:true,src:'Set Menu 2026 tr.'+menu.page});
   lines.push({k:'drink',g:1,name:'Gói đồ uống 2,5 giờ: '+drink.name,unit:'suất',qty:bill,price:drink.price,basis:'++',fixed:true,src:'Báo giá GEM tr.1'});
   ITEMS.forEach(it=>{const st=S.items[it.k];
    const applies=!it.hall||it.hall===S.hall;
    lines.push({k:it.k,g:it.g,it,st,name:it.name,unit:it.unit,qty:Math.max(0,Number(st.qty)||0)*(it.mode==='guest'?bill:1),price:Math.max(0,Number(st.price)||0),basis:st.basis,applies,on:applies&&st.on,src:it.src});
   });
   const sum={1:0,2:0,3:0},base={pp:0,nett:0};let internal=0,vendor=0,unpriced=[],payerOut=0;
   lines.forEach(l=>{
    l.base=0;l.pay=0;l.kind='amt';
    if(!l.fixed&&!l.on){l.kind=l.applies?'off':'na';return}
    if(l.price<=0){l.kind='unpriced';if(!l.fixed)unpriced.push(l.name);return}
    if(l.qty<=0){l.kind='zero';return}
    l.base=l.qty*l.price;l.pay=pay(l.base,l.basis);
    if(l.st&&l.st.payer==='guest'){l.kind='guestpay';payerOut+=l.pay;return}
    sum[l.g]+=l.pay;if(l.basis==='nett')base.nett+=l.base;else base.pp+=l.base;
    const status=l.st?l.st.status:'internal';
    if(status==='internal'||status==='vendor')internal+=l.pay;
    if(status==='vendor')vendor+=l.pay;
   });
   const total=sum[1]+sum[2]+sum[3];
   return {g,bill,guar,lines,sum,total,internal,vendor,pending:total-internal,unpriced,base,svc:base.pp*SVC,vat:base.pp*(1+SVC)*VAT,payerOut};
  });
 }

 // ===== Hiển thị =====
 function summaryHTML(R){
  let h='<thead><tr><th>Kịch bản</th><th class="num">1 · Set Menu &amp; Đồ uống</th><th class="num">2 · LED</th><th class="num">3 · Các chi phí khác</th><th class="num">Tổng dự toán</th><th class="num">Bình quân / khách</th></tr></thead><tbody>';
  R.forEach((r,i)=>{
   const warn=r.guar<150?'<small class="gem-warn">CẦN GEM XÁC NHẬN bảo đảm '+r.guar+' khách</small>':'';
   h+='<tr'+(i===S.view?' class="gem-cur"':'')+'><th>'+r.g+' khách<small>tính '+r.bill+' suất'+(r.bill>r.g?' (theo số bảo đảm)':'')+'</small>'+warn+'</th><td class="num">'+fmt(r.sum[1])+'</td><td class="num">'+fmt(r.sum[2])+'</td><td class="num">'+fmt(r.sum[3])+'</td><td class="num gem-total">'+fmt(r.total)+'</td><td class="num">'+fmt(r.total/r.g)+'</td></tr>';
  });
  return h+'</tbody>';
 }
 function checkHTML(r){
  return '<div class="gem-check"><span>Đối chiếu kiểu báo giá GEM · '+r.g+' khách</span><span>Cộng các khoản ++: <b>'+fmt(r.base.pp)+'</b></span><span>Phí phục vụ 5%: <b>'+fmt(r.svc)+'</b></span><span>VAT 10%: <b>'+fmt(r.vat)+'</b></span><span>Khoản nett: <b>'+fmt(r.base.nett)+'</b></span><span class="gem-check-total">Tổng: <b>'+fmt(r.total)+'</b></span>'+(r.payerOut?'<span>Khách tự trả (không tính): '+fmt(r.payerOut)+'</span>':'')+'</div>';
 }
 function detailHTML(r,pr){
  let t='<thead><tr><th>Hạng mục</th><th class="num">Đơn giá</th><th>Giá</th><th class="num">SL</th><th class="num">Trước phí/thuế</th><th class="num">Phải trả</th><th>Trạng thái</th>'+(pr?'':'<th>Nguồn · ghi chú</th>')+'</tr></thead>';
  [1,2,3].forEach(gk=>{
   const rows=r.lines.filter(l=>l.g===gk&&l.applies!==false&&(l.fixed||l.on));
   t+='<tbody class="gem-grp"><tr class="gem-grp-row"><th colspan="'+(pr?7:8)+'">'+GROUPS[gk]+'<span>'+fmt(r.sum[gk])+'</span></th></tr>';
   rows.forEach(l=>{const it=l.it;
    const q=it&&it.mode==='guest'?(l.qty/r.bill)+' × '+r.bill:l.qty;
    t+='<tr><td>'+esc(l.name)+'</td><td class="num">'+fmt(l.price)+'</td><td>'+l.basis+'</td><td class="num">'+q+'<small>'+esc(l.unit)+'</small></td><td class="num">'+fmt(l.base)+'</td><td class="num gem-pay">'+fmt(l.pay)+'</td><td>'+(l.fixed?'<span class="muted">Theo báo giá</span>':'<span class="gem-ok">✓ Đã chốt</span>')+'</td>'+(pr?'':'<td class="gem-src"><small>'+esc(l.src||'')+'</small>'+(it&&it.note?'<small>'+esc(it.note)+'</small>':'')+'</td>')+'</tr>';
   });
   t+='</tbody>';
  });
  return t;
 }
 function menuHTML(){const m=MENUS[S.menu-1];
  return '<div class="gem-menu-card"><h4>SET MENU '+String(m.id).padStart(2,'0')+' · '+fmt(m.price)+'++/khách <small>chỉ thức ăn, chưa gồm đồ uống, phí và VAT</small></h4><ol>'+m.dishes.map(d=>'<li>'+esc(d)+'</li>').join('')+'</ol><p class="muted">Nguồn: GEM Center – Set Menu 2026, trang '+m.page+'. PDF gốc chưa có trong thư mục <code>menus/</code>.</p></div>';
 }
 function render(){
  const R=compute();
  $('gem-summary').innerHTML=summaryHTML(R);
  const r=R[S.view]||R[1];
  $('gem-view').innerHTML=R.map((x,i)=>'<button type="button" class="cx-seg-btn'+(i===S.view?' active':'')+'" data-gview="'+i+'">'+x.g+' khách</button>').join('');
  $('gem-detail').innerHTML=detailHTML(r,false);
  $('gem-check').innerHTML=checkHTML(r);
  $('gem-menu-card').innerHTML=menuHTML();
  $('gem-guar-warn').textContent=S.guarantee<150?'CẦN GEM XÁC NHẬN: báo giá gốc bảo đảm 150 khách.':'';
  return R;
 }
 function sync(){$('gem-hall').value=S.hall;$('gem-menu').value=S.menu;$('gem-drink').value=S.drink;$('gem-guar').value=S.guarantee;S.guests.forEach((g,i)=>$('gem-g'+i).value=g)}

 // ===== Sự kiện =====
 const root=$('gem-root');
 [['gem-hall','hall',String],['gem-menu','menu',Number],['gem-drink','drink',String]].forEach(([id,k,f])=>$(id).addEventListener('change',e=>{S[k]=f(e.target.value);render();save()}));
 $('gem-guar').addEventListener('change',e=>{S.guarantee=Math.max(0,Math.floor(Number(e.target.value)||0));e.target.value=S.guarantee;render();save()});
 [0,1,2].forEach(i=>$('gem-g'+i).addEventListener('change',e=>{S.guests[i]=Math.max(1,Math.floor(Number(e.target.value)||1));e.target.value=S.guests[i];render();save()}));
 root.addEventListener('click',e=>{const b=e.target.closest('[data-gview]');if(b){S.view=Number(b.dataset.gview);render();save();return}
  const g=e.target.closest('[data-ggrp]');if(g){const k=Number(g.dataset.ggrp);COLL.has(k)?COLL.delete(k):COLL.add(k);render()}});
 root.addEventListener('change',e=>{const t=e.target,k=t.dataset.k,f=t.dataset.f;if(!k||!f)return;const st=S.items[k];
  const wasLocked=st.status==='internal'||st.status==='vendor';
  if(f==='on')st.on=t.checked;else if(f==='price')st.price=Math.max(0,Number(t.value)||0);else if(f==='qty'){st.qty=Math.max(0,Number(t.value)||0);if(st.qty>0)st.on=true}else st[f]=t.value;
  if(wasLocked&&['on','price','qty','basis'].includes(f)){st.status='draft';flash('Khoản “'+ITEMS.find(x=>x.k===k).name+'” đã đổi số liệu nên chuyển về “Dự tính”. Chốt lại nếu cần.')}
  render();save();
 });
 function flash(msg){const el=$('gem-flash');el.textContent=msg;el.hidden=false;clearTimeout(flash.t);flash.t=setTimeout(()=>el.hidden=true,6000)}
 $('gem-reset')&&$('gem-reset').addEventListener('click',()=>{if(!confirm('Khôi phục toàn bộ số liệu GEM theo báo giá gốc?'))return;S=fresh();sync();render();save()});
 $('gem-json')&&$('gem-json').addEventListener('click',()=>dl(JSON.stringify(S,null,1),'GEM_Center_so_lieu.json','application/json'));
 $('gem-json-in')&&$('gem-json-in').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;f.text().then(x=>{try{const d=JSON.parse(x);S=fresh();Object.keys(DEF).forEach(k=>{if(k!=='items'&&d[k]!=null)S[k]=d[k]});if(d.items)Object.keys(S.items).forEach(k=>{if(d.items[k])Object.assign(S.items[k],d.items[k])});sync();render();save()}catch(_){alert('File không hợp lệ.')}});e.target.value=''});
 $('gem-csv').addEventListener('click',()=>{const R=compute();const rows=[['Kịch bản','Nhóm','Hạng mục','Đơn giá','Giá','SL','ĐVT','Trước phí/thuế','Phải trả','Trạng thái','Nguồn','Ghi chú']];
  R.forEach(r=>{r.lines.filter(l=>l.applies!==false&&(l.fixed||l.on)).forEach(l=>rows.push([r.g+' khách',GROUPS[l.g],l.name,l.price,l.basis,l.qty,l.unit,Math.round(l.base),l.kind==='amt'?Math.round(l.pay):l.kind==='unpriced'?'Chưa có đơn giá':l.kind==='zero'?0:'Khách tự trả',l.st?STATUS.find(s=>s[0]===l.st.status)[1]:'Theo báo giá',l.src||'',l.st?l.st.note:'']));
   rows.push([r.g+' khách','','TỔNG DỰ TOÁN','','','','','',Math.round(r.total),'','',''])});
  dl('﻿'+rows.map(x=>x.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n'),'GEM_Center_du_toan.csv','text/csv;charset=utf-8')});
 function dl(txt,name,type){const u=URL.createObjectURL(new Blob([txt],{type}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)}
 $('gem-pdf').addEventListener('click',()=>{const R=compute(),r=R[S.view],o=$('gem-orient').value,land=o==='landscape';
  const css='@page{size:A4 '+o+';margin:10mm}*{box-sizing:border-box}body{font-family:"Segoe UI",Arial,sans-serif;color:#17233d;font-size:8pt;margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}h1{font-size:14pt;margin:0 0 2px;color:#5b2a86}h2{font-size:10pt;margin:8px 0 4px;padding:4px 8px;color:#fff;background:#6b3fa0;border-radius:4px}.meta{color:#5b6a80;font-size:7.6pt;margin-bottom:5px}table{width:100%;border-collapse:collapse;margin-bottom:4px}thead{display:table-header-group}tr{break-inside:avoid}th,td{border-bottom:1px solid #e3e8ef;padding:2.6px 4px;text-align:left;vertical-align:top;font-size:'+(land?'8pt':'7.4pt')+'}thead th{background:#efe8f8}.num{text-align:right;white-space:nowrap}small{display:block;color:#6b778a;font-size:6.6pt}.gem-grp-row th{background:#f4f0fa;color:#4a2a73}.gem-grp-row th span{float:right}.gem-total{font-weight:800}.gem-unp{color:#a35a00;font-style:italic}.muted{color:#8a95a5}.gem-warn{color:#b23a2a;font-weight:700}.gem-check span{display:inline-block;margin-right:12px}.gem-cur th,.gem-cur td{background:#faf6ff}ol{margin:2px 0 0 16px;padding:0}.pb{break-before:page}';
  const m=MENUS[S.menu-1];
  const html='<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><title>GEM Center – Dự toán</title><style>'+css+'</style></head><body><h1>GEM Center · Dự toán Gala Dinner 29/01/2027</h1><div class="meta">Dự toán chốt · xuất ngày '+new Date().toLocaleDateString('vi-VN')+' · Sảnh: <b>'+HALLS[S.hall].name+'</b> · Set Menu '+String(m.id).padStart(2,'0')+' ('+fmt(m.price)+'++) · '+DRINKS[S.drink].name+' 2,5 giờ ('+fmt(DRINKS[S.drink].price)+'++) · Bảo đảm '+S.guarantee+' khách · Giá ++ = +5% phí phục vụ rồi 10% VAT</div>'+
   '<h2>1 · TỔNG DỰ TOÁN THEO KỊCH BẢN</h2><table>'+summaryHTML(R)+'</table><div class="gem-check">'+checkHTML(r).replace(/<\/?div[^>]*>/g,'')+'</div><p><b>Món Set Menu '+String(m.id).padStart(2,'0')+':</b> '+m.dishes.map(esc).join(' · ')+'</p>'+
   
   '<div class="pb"></div><h2>2 · CHI TIẾT · '+r.g+' KHÁCH (tính '+r.bill+' suất)</h2><table>'+detailHTML(r,true)+'</table></body></html>';
  let f=document.getElementById('gem-print-frame');if(f)f.remove();f=document.createElement('iframe');f.id='gem-print-frame';f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden';document.body.appendChild(f);const d=f.contentWindow.document;d.open();d.write(html);d.close();setTimeout(()=>{f.contentWindow.focus();f.contentWindow.print()},250)});

 load();sync();render();
 window.__gem={compute,get S(){return S},set S(v){S=v},render,fresh};
})();
