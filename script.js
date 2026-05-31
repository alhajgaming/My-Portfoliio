/* ================================================================
   script.js — Alhajkhan Pathan Portfolio
================================================================ */

/* ── Security helpers ─────────────────────────────────────── */
function sanitize(s) {
  if (s == null) return "";
  const d = document.createElement("div");
  d.textContent = String(s);
  return d.innerHTML;
}
function safeUrl(u) {
  if (!u || typeof u !== "string") return "";
  const t = u.trim();
  return (t.startsWith("https://") || t.startsWith("http://")) ? t : "";
}

/* ── Data ─────────────────────────────────────────────────── */
const QUOTES = [
  { q: "In God we trust. All others must bring data.",                    by: "W. Edwards Deming" },
  { q: "Data is the new oil. Valuable, but only if refined.",             by: "Clive Humby" },
  { q: "Without big data, you are blind in the middle of a freeway.",     by: "Geoffrey Moore" },
  { q: "The goal is to turn data into information, and information into insight.", by: "Carly Fiorina" },
  { q: "Torture the data long enough and it will confess to anything.",   by: "Ronald Coase" },
  { q: "Data beats opinions. Every single time.",                         by: "Jim Barksdale" },
  { q: "Do. Or do not. There is no try… unless you're debugging regex.",  by: "Yoda (adapted)" },
  { q: "I find your lack of data validation disturbing.",                 by: "Darth Vader (adapted)" },
  { q: "Garbage in, garbage out. Clean before you present.",             by: "Classic CS Proverb" },
  { q: "A SQL query walks into a bar and asks two tables: 'Can I join you?'", by: "Dev Humor" },
  { q: "Why do programmers prefer dark mode? Light attracts bugs.",       by: "Dev Community" },
  { q: "An Excel spreadsheet is just a database with PTSD.",              by: "Data Analyst Humor" },
];

const LOGO = {
  py:  '<img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" width="32" height="32" loading="lazy">',
  pbi: '<img src="https://img.icons8.com/color/48/power-bi.png" alt="Power BI" width="32" height="32" loading="lazy">',
  xl:  '<img src="https://img.icons8.com/color/48/microsoft-excel-2019.png" alt="Excel" width="32" height="32" loading="lazy">',
};

const PROJECTS = [
  {
    title:    "Social Media Analyzer",
    desc:     "Parses 100+ raw Instagram profiles into clean, structured JSON using Python string processing and file I/O.",
    insight:  "Real-world data is messy — this project taught me how to transform unstructured text into analysis-ready data from scratch.",
    tools:    ["Python"],
    category: "Python",
    icon:     LOGO.py,
    color:    "#3776AB",
    github:   "https://github.com/alhajgaming/epic-dataScience",
    image:    "assets/Coders%20Of%20Banglore%20Preview.png"
  },
  {
    title:    "CodeBook Recommendation System",
    desc:     "Builds Facebook-style 'People You May Know' using graph traversal and collaborative filtering in Python.",
    insight:  "Simple graph logic powers features millions use daily — understanding this was a key insight from building it from scratch.",
    tools:    ["Python"],
    category: "Python",
    icon:     LOGO.py,
    color:    "#3776AB",
    github:   "https://github.com/alhajgaming/epic-dataScience",
    image:    "assets/CoderOfDelhi%20Project.png"
  },
  {
    title:    "HR Analytics Dashboard",
    desc:     "Power BI dashboard analyzing 10,000+ employees across 10 departments and 10 Indian cities, built with DAX, Python & Excel.",
    insight:  "Contract staff churn at 31% vs 16% Full-Time. Customer Support leads attrition at 25% — lowest satisfaction at 5.9/10.",
    tools:    ["Power BI"],
    category: "Power BI",
    icon:     LOGO.pbi,
    color:    "#F2C811",
    github:   "https://github.com/alhajgaming/Powerbi_Projects/tree/main/hr-analytics-powerbi",
    image:    "assets/Hr%20analysis_page-0001.jpg"
  }
];

const TYPE_WORDS = ["Data Analytics","Power BI Dashboards","Python & Pandas","Excel Modeling","Data Visualization","Exploratory Analysis"];

const TECH = ["Python","Pandas","NumPy","Matplotlib","Seaborn","Power BI","DAX","Microsoft Excel","Pivot Tables","SQL","Data Cleaning","EDA","Data Visualization","Dashboard Design","Jupyter Notebook","Git & GitHub","VS Code"];

const LOADER_STEPS = ["Initializing portfolio...","Loading modules...","Importing datasets...","Building dashboards...","Rendering charts...","Applying themes...","Ready."];

/* ── Loader ───────────────────────────────────────────────── */
(function () {
  const loader   = document.getElementById("loader");
  const bar      = document.getElementById("loaderBar");
  const prog     = document.getElementById("loaderProgress");
  const statusEl = document.getElementById("loaderStatus");
  const pctEl    = document.getElementById("loaderPct");
  const quoteEl  = document.getElementById("loaderQuote");
  const byEl     = document.getElementById("loaderBy");
  const clockEl  = document.getElementById("loaderClock");
  if (!loader) return;

  const clockT = setInterval(() => {
    if (clockEl) clockEl.textContent = new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit", second:"2-digit" });
  }, 1000);

  function nextQuote() {
    if (!quoteEl || !byEl) return;
    quoteEl.classList.add("fading"); byEl.classList.add("fading");
    setTimeout(() => {
      const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
      quoteEl.textContent = "\u201C" + q.q + "\u201D";
      byEl.textContent    = "\u2014 " + q.by;
      quoteEl.classList.remove("fading"); byEl.classList.remove("fading");
    }, 500);
  }
  nextQuote();
  const quoteT = setInterval(nextQuote, 2400);

  const DURATION = 4000;
  let elapsed = 0, stepIdx = 0;
  const tick = setInterval(() => {
    elapsed += 60;
    const pct = Math.min((elapsed / DURATION) * 100, 100);
    bar.style.width = pct + "%";
    if (pctEl) pctEl.textContent = Math.round(pct) + "%";
    if (prog)  prog.setAttribute("aria-valuenow", Math.round(pct));
    const si = Math.min(Math.floor((pct / 100) * LOADER_STEPS.length), LOADER_STEPS.length - 1);
    if (si !== stepIdx) { stepIdx = si; if (statusEl) statusEl.textContent = LOADER_STEPS[si]; }
    if (elapsed >= DURATION) {
      clearInterval(tick); clearInterval(quoteT); clearInterval(clockT);
      setTimeout(() => loader.classList.add("done"), 300);
    }
  }, 60);
})();

/* ── Image fallbacks ──────────────────────────────────────── */
// Image fallbacks — if img fails to load show initials instead
const imgFallbacks = [
  ["heroImg",  "heroInitials"],
  ["aboutImg", "aboutInitials"],
];
imgFallbacks.forEach(([imgId, initId]) => {
  const img  = document.getElementById(imgId);
  const init = document.getElementById(initId);
  if (img && init) img.addEventListener("error", () => {
    img.style.display = "none";
    init.style.display = "flex";
  }, { once: true });
});
// Nav avatar fallback
const navAvImg = document.querySelector(".nav-av-img");
const navAvInit = document.getElementById("navInitials");
if (navAvImg && navAvInit) navAvImg.addEventListener("error", () => {
  navAvImg.style.display = "none";
  navAvInit.style.display = "flex";
}, { once: true });

/* ── Theme ────────────────────────────────────────────────── */
(function () {
  const btn  = document.getElementById("themeBtn");
  const icon = document.getElementById("themeIcon");
  const html = document.documentElement;
  const saved = localStorage.getItem("ak_theme");
  if (saved === "dark" || saved === "light") {
    html.setAttribute("data-theme", saved);
    if (icon) icon.textContent = saved === "dark" ? "☀️" : "🌙";
  }
  btn?.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    if (icon) icon.textContent = next === "dark" ? "☀️" : "🌙";
    localStorage.setItem("ak_theme", next);
    if (Object.keys(charts).length) setTimeout(buildCharts, 100);
  });
})();

/* ── Navbar ───────────────────────────────────────────────── */
(function () {
  const navbar  = document.getElementById("navbar");
  const burger  = document.getElementById("hamburger");
  const mobNav  = document.getElementById("mobileNav");
  const backTop = document.getElementById("backTop");

  document.getElementById("navLogo")?.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 30);
    let cur = "";
    document.querySelectorAll("section[id]").forEach(s => { if (window.scrollY >= s.offsetTop - 160) cur = s.id; });
    document.querySelectorAll(".nav-a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
    if (backTop) {
      const show = window.scrollY > 400;
      backTop.classList.toggle("visible", show);
      backTop.setAttribute("aria-hidden", String(!show));
    }
  }, { passive:true });

  burger?.addEventListener("click", () => {
    const open = burger.classList.toggle("open");
    mobNav?.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  document.querySelectorAll(".mob-a").forEach(a => a.addEventListener("click", () => {
    burger?.classList.remove("open");
    mobNav?.classList.remove("open");
    burger?.setAttribute("aria-expanded","false");
    burger?.setAttribute("aria-label","Open menu");
  }));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const sel = a.getAttribute("href");
      if (sel === "#") return;
      const t = document.querySelector(sel);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior:"smooth" }); }
    });
  });
})();

/* ── Typewriter ───────────────────────────────────────────── */
(function () {
  const el = document.getElementById("typeTarget");
  if (!el) return;
  let wi = 0, ci = 0, del = false;
  function tick() {
    const w = TYPE_WORDS[wi];
    if (!del) { el.textContent = w.slice(0, ++ci); if (ci === w.length) { del = true; setTimeout(tick, 2200); return; } }
    else       { el.textContent = w.slice(0, --ci); if (ci === 0)       { del = false; wi = (wi+1) % TYPE_WORDS.length; } }
    setTimeout(tick, del ? 40 : 75);
  }
  tick();
})();

/* ── Counters ─────────────────────────────────────────────── */
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;
    const step = target / (1400/16);
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = Math.round(cur).toLocaleString();
    }, 16);
    cntObs.unobserve(el);
  });
}, { threshold:0.5 });
document.querySelectorAll("[data-target]").forEach(el => cntObs.observe(el));

/* ── Scroll reveal ────────────────────────────────────────── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); revObs.unobserve(e.target); } });
}, { threshold:0.1, rootMargin:"0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => revObs.observe(el));

/* ── Skill bars ───────────────────────────────────────────── */
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.w + "%"; barObs.unobserve(e.target); } });
}, { threshold:0.2 });
document.querySelectorAll(".bar-fill").forEach(b => barObs.observe(b));

/* ── Tech cloud ───────────────────────────────────────────── */
const cloud = document.getElementById("techCloud");
if (cloud) TECH.forEach(t => { const s = document.createElement("span"); s.className = "tc-pill"; s.textContent = t; cloud.appendChild(s); });

/* ── Projects ─────────────────────────────────────────────── */
let hoverT = null;

function rgb(hex) {
  const h = (hex||"#00e5ff").replace("#","");
  return { r:parseInt(h.slice(0,2),16)||0, g:parseInt(h.slice(2,4),16)||229, b:parseInt(h.slice(4,6),16)||255 };
}

function renderProjects(filter) {
  const grid = document.getElementById("projGrid");
  if (!grid) return;
  while (grid.firstChild) grid.removeChild(grid.firstChild);

  const list = (!filter || filter === "all") ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  if (!list.length) {
    const el = document.createElement("div");
    el.className = "proj-empty";
    el.textContent = "No projects in this category yet.";
    grid.appendChild(el);
    return;
  }

  list.forEach(p => {
    const color  = /^#[0-9a-fA-F]{3,6}$/.test(p.color||"") ? p.color : "#00e5ff";
    const github = safeUrl(p.github);
    const { r, g, b } = rgb(color);

    const tools  = (p.tools||[]).map(t => `<span class="pj-tool">${sanitize(t)}</span>`).join("");
    const rtools = (p.tools||[]).map(t => `<span class="pj-rt">${sanitize(t)}</span>`).join("");
    const cta    = github
      ? `<a href="${github}" target="_blank" rel="noopener noreferrer" class="pj-cta" style="background:${color};color:#000">View on GitHub ↗</a>`
      : `<span class="pj-cta" style="background:${color};color:#000;opacity:.6;cursor:default">No Link</span>`;
    const thumb  = p.image ? `<img src="${p.image}" alt="${sanitize(p.title)}" class="pj-thumb-img" loading="lazy" width="300" height="168">` : "";
    const icon   = (typeof p.icon === "string" && p.icon.startsWith("<img")) ? p.icon : sanitize(p.icon||"📁");

    const card = document.createElement("div");
    card.className = "pj-card";
    card.tabIndex  = 0;
    card.setAttribute("role","article");
    card.setAttribute("aria-label", p.title);
    card.style.setProperty("--c",  color);
    card.style.setProperty("--r",  r);
    card.style.setProperty("--g",  g);
    card.style.setProperty("--b",  b);

    card.innerHTML = `
      <div class="pj-thumb" aria-hidden="true">
        <div class="pj-glow" style="background:radial-gradient(circle,${color}20 0%,transparent 70%)"></div>
        ${thumb}
        <div class="pj-word">${sanitize(p.category).slice(0,4).toUpperCase()}</div>
        <div class="pj-icon">${icon}</div>
      </div>
      <div class="pj-body">
        <div class="pj-tools">${tools}</div>
        <div class="pj-title">${sanitize(p.title)}</div>
        <div class="pj-desc">${sanitize(p.desc)}</div>
      </div>
      <div class="pj-reveal">
        <p class="pj-insight">${sanitize(p.insight||p.desc)}</p>
        <div class="pj-rtools">${rtools}</div>
        ${cta}
      </div>`;

    function enter() {
      clearTimeout(hoverT);
      grid.classList.add("hovering");
      grid.querySelectorAll(".pj-card").forEach(c => c.classList.remove("focused"));
      card.classList.add("focused");
      const atm = document.getElementById("projAtm");
      if (atm) { atm.style.background = `radial-gradient(ellipse 80% 60% at 50% 50%,${color}0d 0%,transparent 70%)`; atm.classList.add("lit"); }
    }
    function leave() {
      hoverT = setTimeout(() => {
        grid.classList.remove("hovering");
        card.classList.remove("focused");
        const atm = document.getElementById("projAtm");
        if (atm) atm.classList.remove("lit");
      }, 150);
    }
    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);
    card.addEventListener("focus",      enter);
    card.addEventListener("blur",       leave);
    grid.appendChild(card);
  });
}

document.getElementById("filterBar")?.addEventListener("click", e => {
  const btn = e.target.closest(".fbtn");
  if (!btn) return;
  document.querySelectorAll(".fbtn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.f);
});

renderProjects("all");

/* ── Charts ───────────────────────────────────────────────── */
let charts = {};

function cssVar(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }

function buildCharts() {
  if (typeof Chart === "undefined") return;
  Object.values(charts).forEach(c => { try { c.destroy(); } catch(_){} });
  charts = {};
  const ac = cssVar("--accent") || "#00e5ff";
  const a2 = cssVar("--accent2")|| "#0097a7";
  const t2 = cssVar("--text2")  || "#888";
  const br = cssVar("--border") || "rgba(255,255,255,0.08)";
  const sc = { x:{ ticks:{color:t2,font:{size:11,family:"'Outfit',sans-serif"}},grid:{color:br} }, y:{ ticks:{color:t2,font:{size:11,family:"'Outfit',sans-serif"}},grid:{color:br} } };
  const nl = { legend:{display:false} };

  const lc = document.getElementById("cLine");
  if (lc) charts.line = new Chart(lc, { type:"line", data:{ labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], datasets:[{ data:[900,1400,1100,2200,1900,2800,2400,3100,2700,3500,3200,3900], borderColor:ac, backgroundColor:ac+"18", borderWidth:2, tension:0.4, fill:true, pointBackgroundColor:ac, pointRadius:4, pointHoverRadius:7 }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:nl, scales:sc } });

  const bc = document.getElementById("cBar");
  if (bc) charts.bar = new Chart(bc, { type:"bar", data:{ labels:["Excel","Power BI","Python","Pandas","SQL","DAX"], datasets:[{ data:[90,80,75,78,62,68], backgroundColor:[ac+"dd",ac+"bb",ac+"99",ac+"88",ac+"66",ac+"55"], borderRadius:6, borderSkipped:false }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:nl, scales:sc } });

  const dc = document.getElementById("cDonut");
  if (dc) charts.donut = new Chart(dc, { type:"doughnut", data:{ labels:["Excel","Power BI","Python"], datasets:[{ data:[33,34,33], backgroundColor:[ac+"cc",a2+"cc","#00bcd4cc"], borderColor:"transparent", borderWidth:0 }] }, options:{ responsive:true, maintainAspectRatio:false, cutout:"65%", plugins:{ legend:{ display:true, position:"bottom", labels:{ color:t2, font:{size:11,family:"'Outfit',sans-serif"}, padding:16, boxWidth:12 } } } } });

  const rc = document.getElementById("cRadar");
  if (rc) charts.radar = new Chart(rc, { type:"radar", data:{ labels:["Excel","Power BI","Python","Comm.","Teamwork","Data Viz"], datasets:[{ data:[90,80,75,88,90,82], backgroundColor:ac+"22", borderColor:ac, borderWidth:2, pointBackgroundColor:ac, pointRadius:3 }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:nl, scales:{ r:{ ticks:{display:false}, grid:{color:br}, pointLabels:{color:t2,font:{size:10,family:"'Outfit',sans-serif"}}, suggestedMin:0, suggestedMax:100 } } } });
}

const dashObs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { buildCharts(); dashObs.disconnect(); } }); }, { threshold:0.1 });
const dash = document.getElementById("dashboard");
if (dash) dashObs.observe(dash);

/* ── Contact ──────────────────────────────────────────────── */
document.getElementById("sendBtn")?.addEventListener("click", () => {
  const name    = document.getElementById("cName")?.value.trim()    || "";
  const email   = document.getElementById("cEmail")?.value.trim()   || "";
  const subject = document.getElementById("cSubject")?.value.trim() || "";
  const message = document.getElementById("cMessage")?.value.trim() || "";
  if (!name || !email || !message) { alert("Please fill in Name, Email and Message."); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert("Please enter a valid email address."); return; }
  window.location.href = "mailto:logical.alhaj@gmail.com"
    + "?subject=" + encodeURIComponent(subject || "Portfolio Inquiry — " + name)
    + "&body="    + encodeURIComponent("Hello Alhajkhan,\n\nMy name is " + name + " (" + email + ").\n\n" + message);
  const form = document.getElementById("contactForm");
  const ok   = document.getElementById("formOk");
  if (form) form.style.display = "none";
  if (ok)   ok.classList.remove("hidden");
});

/* ── Back to top ──────────────────────────────────────────── */
document.getElementById("backTop")?.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
const bt = document.getElementById("backTop");
if (bt) bt.setAttribute("aria-hidden","true");
