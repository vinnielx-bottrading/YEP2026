"""Bộ test đối chiếu báo giá GEM Center (chạy: python3 tests/gem_test.py)"""
import asyncio, pathlib
from playwright.async_api import async_playwright
URL=(pathlib.Path(__file__).resolve().parent.parent/'index.html').as_uri()
async def main():
    ok=True
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(); errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e)))
        await pg.goto(URL); await pg.evaluate("localStorage.clear()"); await pg.reload()
        await pg.click('#tab-gem')
        async def total(setup, gi=2):
            return await pg.evaluate("""(setup)=>{const G=window.__gem;const s=G.fresh();['led_p3','wireless_mic','corkage_wine','corkage_spirits'].forEach(k=>s.items[k].on=false);s.items.motorbike_parking.qty=0;s.items.car_parking.qty=0;eval(setup);G.S=s;return Math.round(G.compute()[%d].total)}"""%gi, setup)
        def chk(name,got,exp):
            nonlocal ok; r=got==exp; ok&=r; print(('PASS' if r else 'FAIL'),name,got,'' if r else f'(cần {exp})')
        era=await total("s.hall='era';s.menu=1;s.drink='beer'")
        cas=await total("s.hall='castor';s.menu=1;s.drink='beer'")
        chk('1 ERA 150 Menu01',era,344016750)
        chk('2 Castor 3 lines',cas,466793250)
        chk('3 Chênh lệch',cas-era,122776500)
        chk('4 ERA Menu03',await total("s.menu=3"),376068000)
        chk('5 ERA Menu05',await total("s.menu=5"),417648000)
        park=await total("s.items.motorbike_parking.qty=100;s.items.car_parking.qty=20")
        chk('6 Gửi xe 100+20 nett',park-era,2000000)
        chk('7 Tắt phí thiết bị ngoài',await total("s.items.external_equipment.on=false"),era-17325000)
        un=await pg.evaluate("()=>{const G=window.__gem;const s=G.fresh();['led_p3','wireless_mic','corkage_wine','corkage_spirits'].forEach(k=>s.items[k].on=false);s.items.motorbike_parking.qty=0;s.items.car_parking.qty=0;G.S=s;const r=G.compute()[2];return [r.unpriced,Math.round(r.total)]}")
        chk('8 Không còn khoản chưa có giá',(un[0], un[1]),([],era))
        g120=await total("",0)
        chk('9 120 khách vẫn tính 150 suất',g120,era)
        chk('9b Bảo đảm 120 (mô phỏng)',await total("s.guarantee=120",0),290482500)
        dflt=await pg.evaluate("()=>{const G=window.__gem;G.S=G.fresh();return G.compute().map(r=>Math.round(r.total))}")
        exp=344016750+round((24*1800000+4*500000+2*550000+6*825000)*1.155)+80*10000+50*50000
        chk('10 Mặc định đồng bộ SL (150 khách)',dflt[2],exp)
        chk('Không lỗi JS',errs,[])
        await b.close()
    print('KẾT QUẢ:', 'TẤT CẢ ĐẠT' if ok else 'CÓ LỖI')
asyncio.run(main())
