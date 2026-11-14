"""Rà soát tab So sánh: tổng = cộng chi tiết, và khớp công thức tính tay (python3 tests/compare_test.py)"""
import asyncio, pathlib, itertools, re
from playwright.async_api import async_playwright
URL=(pathlib.Path(__file__).resolve().parent.parent/'index.html').as_uri()
LM=[1200000,1300000,1400000]; LD=[250000,450000,600000]; MP=[1550000,1750000,2000000]
def expect(g,lm,ld,mp):
    # A ăn uống; B LED/micro/thiết bị ngoài (LM: LED mở rộng 20tr); C vang + corkage; D gửi xe
    LA=g*(LM[lm]+LD[ld]+LD[ld]*0.5); LB=24*1200000+4*1000000+8000000; LDD=5*1300000+2*400000+6*600000; LE=80*6000+50*50000
    MA=g*(MP[mp]+250000); MB=20000000; MD=5*800000+2*900000+6*1000000; ME=0
    return (LA,LB,LDD,LE,LA+LB+LDD+LE),(MA,MB,MD,ME,MA+MB+MD+ME)
num=lambda s:int(re.sub(r'[^\d]','',s) or 0)*(-1 if '−' in s else 1)
async def main():
    bad=0;n=0
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(); errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e)))
        await pg.goto(URL); await pg.evaluate("localStorage.setItem('svi-yep-compare-choices',JSON.stringify({hours:2}))"); await pg.reload()
        await pg.click('#tab-compare')
        for lm,ld,mp in itertools.product(range(3),range(3),range(3)):
            await pg.select_option('#cx-lotte-menu',str(lm)); await pg.select_option('#cx-lotte-drink',str(ld)); await pg.select_option('#cx-lm-menu',str(mp))
            for si,g in enumerate([120,140,150]):
                await pg.click(f'[data-view="{si}"]')
                d=await pg.evaluate("""()=>{const t=document.getElementById('cx-cmp');const out={rows:[],subs:[],grand:null};
                  t.querySelectorAll('tbody tr').forEach(tr=>{const td=[...tr.children];if(tr.classList.contains('cx-grp'))return;
                   const cells=td.map(x=>x.innerText.trim());
                   if(tr.classList.contains('cx-sub'))out.subs.push([cells[3],cells[6]]);
                   else if(tr.classList.contains('cx-grand'))out.grand=[cells[3],cells[6]];
                   else if(!tr.classList.contains('cx-avgrow')){ // dòng chi tiết: lấy ô thành tiền của mỗi bên
                     const L=td[1].colSpan===3?td[1]:td[3], M=td[1].colSpan===3?(td[2].colSpan===3?td[2]:td[4]):(td[4].colSpan===3?td[4]:td[6]);
                     out.rows.push([L.innerText.trim(),M.innerText.trim()])}});
                  const s=[...document.querySelectorAll('#cx-summary-table tr.cx-total td')].map(x=>x.innerText.trim());
                  return {...out,sum:s}}""")
                L,M=expect(g,lm,ld,mp)
                # cộng chi tiết theo nhóm
                money=lambda s:(lambda f:num(f) if re.fullmatch(r'[−+]?[\d.]+đ',f) else 0)(s.split('\n')[0].strip())
                rows=[[money(a),money(c)] for a,c in d['rows']]
                detL=sum(r[0] for r in rows); detM=sum(r[1] for r in rows)
                subs=[[num(a),num(c)] for a,c in d['subs']]
                gL,gM=num(d['grand'][0]),num(d['grand'][1])
                sumL,sumM=num(d['sum'][4*si+1]),num(d['sum'][4*si+2])
                ok=(detL==gL==sum(s[0] for s in subs)==L[4]==sumL) and (detM==gM==sum(s[1] for s in subs)==M[4]==sumM) and [s[0] for s in subs]==list(L[:4]) and [s[1] for s in subs]==list(M[:4])
                n+=1
                if not ok: bad+=1; print('LỆCH',lm,ld,mp,g,'| Lotte',detL,gL,L[4],sumL,'| LM',detM,gM,M[4],sumM)
        print(f'Đã kiểm {n} tổ hợp; lệch {bad}; lỗi JS {errs}')
        await b.close()
asyncio.run(main())
