import base64,hashlib,hmac,json,re,time,pathlib
from patchright.sync_api import sync_playwright
s=re.search(r"^SESSION_SECRET=(.+)$",open("/host/home/sams/sams-mission-control/.env.local").read(),re.M).group(1).strip().strip('"').strip("'")
p=base64.urlsafe_b64encode(json.dumps({"exp":int(time.time()*1000)+3600*1000}).encode()).rstrip(b"=").decode()
tok=p+"."+hmac.new(s.encode(),p.encode(),hashlib.sha256).hexdigest()
o=pathlib.Path("/opt/data/builds/agents-free/shots");o.mkdir(exist_ok=True)
with sync_playwright() as pw:
    b=pw.chromium.launch(executable_path="/opt/data/.playwright/chromium-1248/chrome-linux64/chrome",args=["--no-sandbox","--disable-dev-shm-usage"])
    for name,(w,h) in {"ipad_portrait":(820,1180),"desktop":(1440,900)}.items():
        c=b.new_context(viewport={"width":w,"height":h},device_scale_factor=2,is_mobile=(w<900),has_touch=(w<900))
        c.add_cookies([{"name":"sams_session","value":tok,"domain":"sams.samsystem.org","path":"/","secure":True,"sameSite":"Lax"}])
        pg=c.new_page()
        try: pg.goto("https://sams.samsystem.org/mission-control",wait_until="networkidle",timeout=45000)
        except Exception as e: print("nav",name,e)
        time.sleep(3); pg.screenshot(path=str(o/f"{name}.png")); print("shot",name); c.close()
    b.close()
