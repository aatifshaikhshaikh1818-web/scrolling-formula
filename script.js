const button = document.getElementById("exploreBtn");

button.addEventListener("click", () => {
  // ---------- Fonts ----------
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Poppins:wght@300;400;600&display=swap";
  document.head.appendChild(fontLink);

  // ---------- Styles ----------
  const style = document.createElement("style");
  style.textContent = `
    html { scroll-behavior:smooth; }
    body { margin:0; background:#05050d; color:#fff; font-family:'Poppins',sans-serif; overflow-x:hidden; }
    * { box-sizing:border-box; }

    /* progress bar */
    .progress { position:fixed; top:0; left:0; height:4px; width:100%; z-index:50;
      background:linear-gradient(90deg,#8b5cf6,#7dd3fc,#ec4899);
      transform-origin:left; transform:scaleX(0); box-shadow:0 0 12px #8b5cf6; }

    /* parallax stars */
    .stars { position:fixed; inset:-20% 0; z-index:0; pointer-events:none; will-change:transform; }
    .stars i { position:absolute; border-radius:50%; background:#fff; animation:twinkle 3s ease-in-out infinite; }
    @keyframes twinkle { 0%,100% { opacity:.25; } 50% { opacity:1; } }

    section { position:relative; z-index:1; }

    /* shared */
    .grad { background:linear-gradient(90deg,#c4a1ff,#7dd3fc,#f0abfc,#c4a1ff); background-size:300% 100%;
      -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
      animation:shine 5s linear infinite; }
    @keyframes shine { to { background-position:300% 0; } }

    /* 1. hero */
    .hero { min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:24px; }
    .hero h1 { font-family:'Orbitron',sans-serif; font-weight:900; font-size:clamp(28px,7vw,72px); letter-spacing:4px; margin:0;
      animation:slideDown 1.1s ease-out both; will-change:transform,opacity; }
    .hero p { color:#a5a5c0; font-weight:300; letter-spacing:2px; animation:fadeUp 1s .6s ease-out both; }
    @keyframes slideDown { from { opacity:0; transform:translateY(-50px); } to { opacity:1; transform:none; } }
    @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:none; } }
    .hint { margin-top:40px; font-size:13px; letter-spacing:4px; color:#c4a1ff; animation:fadeUp 1s 1s ease-out both; }
    .mouse { width:26px; height:42px; border:2px solid #c4a1ff; border-radius:14px; margin:14px auto 0; position:relative; }
    .mouse::after { content:""; position:absolute; left:50%; top:8px; width:4px; height:8px; margin-left:-2px; border-radius:2px;
      background:#c4a1ff; animation:wheel 1.6s ease-in-out infinite; }
    @keyframes wheel { 0% { opacity:0; transform:translateY(0); } 30% { opacity:1; } 100% { opacity:0; transform:translateY(16px); } }

    /* 2. sticky photo scene */
    .scene { height:300vh; }
    .scene .stick { position:sticky; top:0; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; overflow:hidden; padding:24px; }
    .photo { width:min(86%,440px); max-height:58vh; object-fit:contain; border-radius:18px; will-change:transform,filter;
      box-shadow:0 0 40px #7b5cff, 0 0 100px rgba(123,92,255,.4); }
    .scene .cap { margin-top:26px; font-size:clamp(18px,3.5vw,26px); text-align:center; will-change:transform,opacity; }

    /* 3. word reveal */
    .reveal { min-height:200vh; }
    .reveal .stick { position:sticky; top:0; height:100vh; display:flex; align-items:center; justify-content:center; padding:8vw; }
    .reveal p { font-family:'Orbitron',sans-serif; font-weight:700; font-size:clamp(24px,5vw,56px); line-height:1.35; text-align:center; max-width:1000px; margin:0; }
    .reveal .w { color:#2c2c44; transition:color .25s, text-shadow .25s; }
    .reveal .w.on { color:#fff; text-shadow:0 0 18px rgba(196,161,255,.7); }
    .reveal small { display:block; margin-top:20px; font-family:'Poppins'; font-weight:300; font-size:16px; color:#a5a5c0; letter-spacing:2px; }

    /* 4. horizontal scroll */
    .hscroll { height:400vh; }
    .hscroll .stick { position:sticky; top:0; height:100vh; display:flex; align-items:center; overflow:hidden; }
    .track { display:flex; gap:5vw; padding:0 10vw; will-change:transform; }
    .card { flex:0 0 min(72vw,420px); height:min(56vh,440px); border-radius:24px; padding:32px; display:flex; flex-direction:column; justify-content:flex-end;
      background:linear-gradient(160deg,rgba(139,92,246,.35),rgba(236,72,153,.12)); border:1px solid rgba(196,161,255,.35);
      backdrop-filter:blur(8px); transition:transform .4s, box-shadow .4s; }
    .card:hover { transform:translateY(-10px) scale(1.03); box-shadow:0 20px 60px rgba(139,92,246,.45); }
    .card .big { font-family:'Orbitron',sans-serif; font-size:clamp(32px,6vw,54px); font-weight:900; color:#fbbf24; text-shadow:0 0 16px rgba(251,191,36,.6); }
    .card h3 { margin:10px 0 6px; font-size:22px; } .card p { margin:0; color:#c9c9de; font-weight:300; }
    .hscroll h2 { position:absolute; top:9vh; left:10vw; margin:0; font-family:'Orbitron',sans-serif; font-size:clamp(20px,3vw,32px); letter-spacing:3px; }

    /* 5. zoom formula */
    .zoom { height:250vh; }
    .zoom .stick { position:sticky; top:0; height:100vh; display:flex; align-items:center; justify-content:center; overflow:hidden; }
    .zoom .f { font-family:'Orbitron',sans-serif; font-weight:900; font-size:clamp(48px,14vw,180px); color:#fbbf24; white-space:nowrap;
      text-shadow:0 0 30px rgba(251,191,36,.7), 0 0 80px rgba(251,191,36,.35); will-change:transform,opacity; }

    /* 6. finale */
    .finale { min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:24px; }
    .finale h2 { font-family:'Orbitron',sans-serif; font-size:clamp(24px,5vw,48px); margin:0 0 30px; }
    .back-btn { padding:16px 34px; border:0; border-radius:999px; font-family:'Poppins',sans-serif; font-weight:600; font-size:16px; color:#fff; cursor:pointer;
      background:linear-gradient(135deg,#8b5cf6,#ec4899); box-shadow:0 6px 24px rgba(139,92,246,.5); transition:transform .25s, box-shadow .25s; }
    .back-btn:hover { transform:translateY(-3px) scale(1.06); box-shadow:0 10px 32px rgba(236,72,153,.6); }

    /* fade-in on enter */
    .fx { opacity:0; transform:translateY(40px); transition:opacity .9s, transform .9s; }
    .fx.in { opacity:1; transform:none; }

    @media (prefers-reduced-motion: reduce) { * { animation:none !important; transition:none !important; } html { scroll-behavior:auto; } }
  `;
  document.head.appendChild(style);

  // ---------- Markup ----------
  const quote = "Imagination is more important than knowledge.";
  const words = quote.split(" ").map((w) => `<span class="w">${w}</span>`).join(" ");

  document.body.innerHTML = `
    <div class="progress"></div>
    <div class="stars"></div>

    <section class="hero">
      <h1 class="grad">WELCOME TO THE WORLD</h1>
      <p>OF GENIUS</p>
      <div class="hint">SCROLL<div class="mouse"></div></div>
    </section>

    <section class="scene">
      <div class="stick">
        <img class="photo" src="einstein.jpg" alt="Einstein funny photo">
        <p class="cap">Genius Mode Activated 🤯</p>
      </div>
    </section>

    <section class="reveal">
      <div class="stick"><p>${words}<small>— ALBERT EINSTEIN</small></p></div>
    </section>

    <section class="hscroll">
      <div class="stick">
        <h2 class="grad">POWER OF FORMULA</h2>
        <div class="track">
          <div class="card"><div class="big">E = mc²</div><h3>Energy</h3><p>Mass aur energy ek hi sikke ke do pehlu hain.</p></div>
          <div class="card"><div class="big">c ≈ 3×10⁸</div><h3>Speed of Light</h3><p>Universe ki sabse tez speed, m/s mein.</p></div>
          <div class="card"><div class="big">t′ = γt</div><h3>Time Dilation</h3><p>Tez chalo to time dheere chalta hai.</p></div>
          <div class="card"><div class="big">G = 8πT</div><h3>Relativity</h3><p>Gravity matlab space-time ka jhukna.</p></div>
        </div>
      </div>
    </section>

    <section class="zoom">
      <div class="stick"><div class="f">E = mc²</div></div>
    </section>

    <section class="finale">
      <h2 class="fx grad">Thanks for scrolling 🚀</h2>
      <button class="back-btn fx" onclick="location.reload()">Back to Black Hole</button>
    </section>
  `;
  window.scrollTo(0, 0);

  // ---------- Stars ----------
  const starBox = document.querySelector(".stars");
  for (let i = 0; i < 120; i++) {
    const s = document.createElement("i");
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${size}px;height:${size}px;animation-delay:${Math.random() * 3}s;`;
    starBox.appendChild(s);
  }

  // ---------- Scroll engine ----------
  const $ = (sel) => document.querySelector(sel);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  // progress (0..1) of a tall section while its sticky child is pinned
  const prog = (el) => {
    const r = el.getBoundingClientRect();
    return clamp(-r.top / (r.height - window.innerHeight));
  };

  const bar = $(".progress");
  const hero = $(".hero h1");
  const scene = $(".scene"), photo = $(".photo"), cap = $(".scene .cap");
  const reveal = $(".reveal"), ws = [...document.querySelectorAll(".reveal .w")];
  const hs = $(".hscroll"), track = $(".track");
  const zoom = $(".zoom"), formula = $(".zoom .f");

  let ticking = false;
  function update() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    bar.style.transform = `scaleX(${clamp(y / max)})`;
    starBox.style.transform = `translateY(${-y * 0.12}px)`;           // parallax

    hero.style.transform = `translateY(${y * 0.35}px) scale(${1 - clamp(y / 900) * 0.2})`;
    hero.style.opacity = 1 - clamp(y / 600);

    // photo: zoom in, tilt, then settle; caption slides in late
    const p1 = prog(scene);
    const e1 = 1 - Math.pow(1 - clamp(p1 * 1.4), 3);
    photo.style.transform = `scale(${0.45 + e1 * 0.65}) rotate(${(1 - e1) * -14}deg) translateY(${(1 - e1) * 80}px)`;
    photo.style.filter = `blur(${(1 - e1) * 10}px) brightness(${0.5 + e1 * 0.5})`;
    const c = clamp((p1 - 0.45) * 2.2);
    cap.style.opacity = c;
    cap.style.transform = `translateY(${(1 - c) * 40}px)`;

    // word-by-word highlight
    const p2 = clamp(prog(reveal) * 1.25);
    ws.forEach((w, i) => w.classList.toggle("on", p2 > (i + 0.5) / ws.length));

    // horizontal scroll
    const p3 = prog(hs);
    const dist = track.scrollWidth - window.innerWidth + window.innerWidth * 0.1;
    track.style.transform = `translateX(${-p3 * Math.max(dist, 0)}px)`;

    // formula zoom
    const p4 = prog(zoom);
    formula.style.transform = `scale(${0.3 + p4 * 1.6})`;
    formula.style.opacity = p4 < 0.8 ? clamp(p4 * 4) : 1 - (p4 - 0.8) * 5;

    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();

  // fade-in elements when they enter view
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.3 });
  document.querySelectorAll(".fx").forEach((el, i) => { el.style.transitionDelay = i * 0.2 + "s"; io.observe(el); });
});