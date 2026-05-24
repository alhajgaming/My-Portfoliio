/* ================================================================
   SCRIPT.JS — Alhajkhan Pathan Portfolio (Final Edition)
   ─────────────────────────────────────────────────────────────
    1.  QUOTES      — Loading screen quote pool
    2.  DEFAULT_PROJECTS — Fallback data (when localStorage empty)
    3.  CONFIG      — Typewriter words, tech stack, settings
    4.  Storage     — localStorage helpers
    5.  Loader      — 5-second cinematic screen
    6.  Theme       — Dark / light toggle
    7.  Navbar      — Scroll, active links, hamburger
    8.  Typewriter  — Animated word cycling
    9.  Counters    — Animated number counting
   10.  Reveal      — Scroll-triggered fade-ins
   11.  Skill Bars  — Animated progress bars
   12.  Tech Cloud  — Renders tech pills
   13.  Admin Mode  — Ctrl+Shift+A, logo×5, password gate
   14.  Projects    — Render, filter, immersive hover
   15.  Project CRUD — Add / Edit / Delete with localStorage
   16.  Charts      — Chart.js dashboard
   17.  Contact     — mailto form
   18.  Back To Top
================================================================ */

/* ═══════════════════════════════════════════════════════════
   1. QUOTES
═══════════════════════════════════════════════════════════ */
const QUOTES = [
  // Data Analytics
  { q: "In God we trust. All others must bring data.",                    by: "W. Edwards Deming" },
  { q: "Data is the new oil. Valuable, but only if refined.",             by: "Clive Humby" },
  { q: "Without big data, you are blind in the middle of a freeway.",     by: "Geoffrey Moore" },
  { q: "The goal is to turn data into information, and information into insight.", by: "Carly Fiorina" },
  { q: "Torture the data long enough and it will confess to anything.",   by: "Ronald Coase" },
  { q: "The best analysts don't just find answers — they find better questions.", by: "Unknown" },
  { q: "Data beats opinions. Every single time.",                         by: "Jim Barksdale" },
  // Star Wars / Clone Wars
  { q: "Your focus determines your reality. Choose your dataset wisely.", by: "Qui-Gon Jinn (adapted)" },
  { q: "There is no such thing as missing data. Only data not yet cleaned.", by: "Obi-Wan Kenobi (adapted)" },
  { q: "Do. Or do not. There is no try... unless you're debugging regex.", by: "Yoda (adapted)" },
  { q: "I find your lack of data validation disturbing.",                 by: "Darth Vader (adapted)" },
  { q: "Many truths depend greatly on our point of view — and sampling bias.", by: "Obi-Wan Kenobi (adapted)" },
  { q: "The Force is strong with this one. And so is their SQL query.",   by: "Darth Vader (adapted)" },
  // Anime / Manga
  { q: "One who cannot perceive the pattern in data cannot know true strategy.", by: "Light Yagami (adapted)" },
  { q: "The moment you think of giving up, think of why you started analyzing.", by: "Natsu Dragneel (adapted)" },
  { q: "Power comes in response to a need. You need clean data before a dashboard.", by: "Goku (adapted)" },
  { q: "If you don't take risks, you can't create a future. Run the model.", by: "Monkey D. Luffy (adapted)" },
  { q: "A lesson without pain is meaningless. That's what it means to analyze real data.", by: "Edward Elric (adapted)" },
  { q: "I am the one who analyzes. I am not in danger — I am the danger.", by: "Walter White (adapted)" },
  // Dev Jokes
  { q: "Garbage in, garbage out. Clean your data before presenting to the board.", by: "Classic CS Proverb" },
  { q: "There are only 10 types of people: those who understand binary, and those who don't.", by: "Programmer Humor" },
  { q: "A SQL query walks into a bar, walks up to two tables: 'Can I join you?'", by: "Classic Dev Joke" },
  { q: "Why do programmers prefer dark mode? Because light attracts bugs.", by: "Dev Community" },
  { q: "My code never has bugs. It just develops random features.",       by: "Unknown Developer" },
  { q: "An Excel spreadsheet is just a database with PTSD.",              by: "Data Analyst Humor" },
  { q: "I don't always test my code, but when I do, I do it in production.", by: "The Most Interesting Dev" },
  { q: "Weeks of coding can save you hours of planning.",                 by: "Unknown" },
];

/* ═══════════════════════════════════════════════════════════
   2. DEFAULT PROJECTS (shown first time / if localStorage empty)
   ─────────────────────────────────────────────────────────
   Fields:
     title    string  — Project name
     desc     string  — Short description for card body
     insight  string  — One-liner shown in hover overlay
     tools    array   — List of tools used
     category string  — "Python" | "Power BI" | "Excel"
     icon     string  — Emoji icon
     color    string  — Hex accent color for hover glow
     github   string  — URL or "" for none
     image    string  — Path to image or "" for none
═══════════════════════════════════════════════════════════ */
/**
 * Projects will be added here like this make sure to make them like this
 */
const DEFAULT_PROJECTS = [
  
  // {
  //   title:    "Demo Project title",
  //   desc:     "Description for demo local and real project.",
  //   insight:  "You're good enough, maybe insight i've put here",
  //   tools:    ["Excel", "Advanced Formulas"],
  //   category: "Excel",
  //   icon:     "🏥",
  //   color:    "#f43f5e",
  //   github:   "",
  //   image:    "/assets/image.png"
  // },
  {
    title:    "Social Medial Analyzer",
    desc:     "Parses 100+ raw Instagram profiles into clean, structured JSON using Python string processing and file I/O.Project : Coders of Banglore",
    insight:  "Real-world data is messy — this project taught me how to transform unstructured text into analysis-ready data from scratch.",
    tools:    ["Python"],
    category: "Python",
    icon:     "🐍",
    color:    "#f43f5e",
    github:   "https://github.com/alhajgaming/epic-dataScience",
    image:    "/assets/Coders Of Banglore Preview.png"
  },
   {
    title:    "CodeBook social media reccomendation System",
    desc:     "Builds Facebook-style \"People You May Know\" and \"Pages You Might Like\" features using graph traversal and collaborating filtering in Python.Project : Coders of Delhi",
    insight:  "Implementing recommendation algorithms from scratch showed me how the simplest graph logic can power the features millions of people use daily.",
    tools:    ["Python"],
    category: "Python",
    icon:     "🐍",
    color:    "#18beb1",
    github:   "https://github.com/alhajgaming/epic-dataScience",
    image:    "/assets/CoderOfDelhi Project.png"
  },
  {
    title:    "HR Analytics Dashboard",
    desc:     "HR Analytics Dashboard in Power BI — Analyzed over 10,000 employees, 10 departments, 10 Indian cities, built with DAX, Python & Excel.",
    insight:  "Contract staff churn at 31% vs 16% Full-Time — Customer Support leads attrition at 25% with the lowest satisfaction score of 5.9/10.",
    tools:    ["Power BI"],
    category: "Power BI",
    icon:     "📊",
    color:    "#b6fd0f",
    github:   "https://github.com/alhajgaming/Powerbi_Projects/tree/main/hr-analytics-powerbi",
    image:    "/assets/Hr analysis_page-0001.jpg"
  }
];

/* ═══════════════════════════════════════════════════════════
   3. CONFIG
═══════════════════════════════════════════════════════════ */

// ── Change this password to protect your admin mode ──
const ADMIN_PASSWORD = "ALHAJ123rr@@";

const TYPE_WORDS = [
  "Data Analytics", "Power BI Dashboards", "Python & Pandas",
  "Excel Modeling", "Data Visualization", "Exploratory Analysis"
];

const TECH_STACK = [
  "Python","Pandas","NumPy","Matplotlib","Seaborn",
  "Power BI","DAX","Microsoft Excel","Pivot Tables",
  "SQL","Data Cleaning","EDA","Data Visualization",
  "Dashboard Design","Jupyter Notebook","Git & GitHub","VS Code"
];

const LOADER_STEPS = [
  "Waiting for My love...",
  "Initializing system...",
  "Loading modules...",
  "Importing datasets...",
  "Building dashboards...",
  "Rendering charts...",
  "Portfolio ready."
];

const LOADER_DURATION = 5000; // ms

/* ═══════════════════════════════════════════════════════════
   4. STORAGE HELPERS (localStorage)
═══════════════════════════════════════════════════════════ */
const STORAGE_KEY = "ak_portfolio_projects";

function loadProjects() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) { /* ignore parse errors */ }
  return DEFAULT_PROJECTS.map(p => ({ ...p })); // return fresh copy
}

function saveProjects(arr) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  } catch(e) {
    console.warn("localStorage unavailable:", e);
  }
}

// Working project array (all mutations go through this + saveProjects)
let PROJECTS = loadProjects();

/* ═══════════════════════════════════════════════════════════
   5. CINEMATIC LOADER
═══════════════════════════════════════════════════════════ */
(function initLoader() {
  const loader  = document.getElementById("loader");
  const bar     = document.getElementById("loaderBar");
  const status  = document.getElementById("loaderStatus");
  const pctEl   = document.getElementById("loaderPct");
  const qEl     = document.getElementById("loaderQuote");
  const byEl    = document.getElementById("loaderQuoteBy");
  const timeEl  = document.getElementById("loaderTime");

  // Live clock in corner
  function updateClock() {
    if (!timeEl) return;
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString([], { hour:"2-digit", minute:"2-digit", second:"2-digit" });
  }
  const clockTimer = setInterval(updateClock, 1000);
  updateClock();

  // Show a random quote with fade transition
  function showQuote() {
    if (!qEl || !byEl) return;
    qEl.classList.add("fading");
    byEl.classList.add("fading");
    setTimeout(() => {
      const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
      qEl.textContent  = `"${q.q}"`;
      byEl.textContent = `— ${q.by}`;
      qEl.classList.remove("fading");
      byEl.classList.remove("fading");
    }, 500);
  }
  showQuote();
  const quoteTimer = setInterval(showQuote, 2000);

  // Progress
  let elapsed = 0;
  const interval = 60;
  let stepIdx = 0;

  const tick = setInterval(() => {
    elapsed += interval;
    const pct = Math.min((elapsed / LOADER_DURATION) * 100, 100);
    bar.style.width   = pct + "%";
    pctEl.textContent = Math.round(pct) + "%";

    const si = Math.min(Math.floor((pct / 100) * LOADER_STEPS.length), LOADER_STEPS.length - 1);
    if (si !== stepIdx) { stepIdx = si; status.textContent = LOADER_STEPS[si]; }

    if (elapsed >= LOADER_DURATION) {
      clearInterval(tick);
      clearInterval(quoteTimer);
      clearInterval(clockTimer);
      setTimeout(() => loader.classList.add("done"), 300);
    }
  }, interval);
})();

/* ═══════════════════════════════════════════════════════════
   6. THEME TOGGLE
═══════════════════════════════════════════════════════════ */
(function initTheme() {
  const btn  = document.getElementById("themeBtn");
  const icon = document.getElementById("themeIcon");
  const html = document.documentElement;
  const saved= localStorage.getItem("ak_theme");

  if (saved) { html.setAttribute("data-theme", saved); icon.textContent = saved === "dark" ? "☀️" : "🌙"; }

  btn?.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    const next   = isDark ? "light" : "dark";
    html.setAttribute("data-theme", next);
    icon.textContent = next === "dark" ? "☀️" : "🌙";
    localStorage.setItem("ak_theme", next);
    if (Object.keys(charts).length) setTimeout(buildCharts, 120);
  });
})();

/* ═══════════════════════════════════════════════════════════
   7. NAVBAR
═══════════════════════════════════════════════════════════ */
(function initNavbar() {
  const navbar = document.getElementById("navbar");
  const burger = document.getElementById("hamburger");
  const mobNav = document.getElementById("mobileNav");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
    let cur = "";
    document.querySelectorAll("section[id]").forEach(s => {
      if (window.scrollY >= s.offsetTop - 160) cur = s.id;
    });
    document.querySelectorAll(".nav-a").forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + cur);
    });
    document.getElementById("backTop")?.classList.toggle("hidden", window.scrollY <= 400);
  });

  burger?.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobNav.classList.toggle("open");
  });

  document.querySelectorAll(".mob-a").forEach(l => {
    l.addEventListener("click", () => { burger.classList.remove("open"); mobNav.classList.remove("open"); });
  });

  // Smooth scroll for all #hash links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const t = document.querySelector(a.getAttribute("href"));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth" }); }
    });
  });
})();

/* ═══════════════════════════════════════════════════════════
   8. TYPEWRITER
═══════════════════════════════════════════════════════════ */
(function initTypewriter() {
  const el = document.getElementById("typeTarget");
  if (!el) return;
  let wi=0, ci=0, del=false;
  function tick() {
    const w = TYPE_WORDS[wi];
    if (!del) { el.textContent = w.slice(0, ++ci); if (ci===w.length){del=true;setTimeout(tick,2200);return;} }
    else       { el.textContent = w.slice(0, --ci); if (ci===0){del=false;wi=(wi+1)%TYPE_WORDS.length;} }
    setTimeout(tick, del ? 40 : 75);
  }
  tick();
})();

/* ═══════════════════════════════════════════════════════════
   9. COUNTERS
═══════════════════════════════════════════════════════════ */
function animCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const start  = parseInt(el.textContent.replace(/,/g,""), 10) || 0;
  const dur    = 1400;
  const step   = (target - start) / (dur / 16);
  let cur = start;
  const t = setInterval(() => {
    cur += step;
    if ((step>0&&cur>=target)||(step<0&&cur<=target)) { cur=target; clearInterval(t); }
    el.textContent = Math.round(cur).toLocaleString();
  }, 16);
}
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animCount(e.target); cntObs.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll(".hcount-num[data-target], .kpi-num[data-target]")
  .forEach(el => cntObs.observe(el));

/* ═══════════════════════════════════════════════════════════
   10. SCROLL REVEAL
═══════════════════════════════════════════════════════════ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); revObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => revObs.observe(el));

/* ═══════════════════════════════════════════════════════════
   11. SKILL BARS
═══════════════════════════════════════════════════════════ */
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.w + "%"; barObs.unobserve(e.target); } });
}, { threshold: 0.2 });
document.querySelectorAll(".bar-fill").forEach(b => barObs.observe(b));

/* ═══════════════════════════════════════════════════════════
   12. TECH CLOUD
═══════════════════════════════════════════════════════════ */
(function buildCloud() {
  const c = document.getElementById("techCloud");
  if (!c) return;
  TECH_STACK.forEach(t => {
    const s = document.createElement("span");
    s.className = "tc-pill"; s.textContent = t;
    c.appendChild(s);
  });
})();

/* ═══════════════════════════════════════════════════════════
   13. ADMIN MODE
   ─────────────────────────────────────────────────────────
   TRIGGERS:
     A) Keyboard: Ctrl + Shift + A
     B) UI:       Click the "AK." logo 5 times within 3 seconds
   PASSWORD: Set in ADMIN_PASSWORD constant above.
═══════════════════════════════════════════════════════════ */
let isAdmin = false;
let logoClicks = 0, logoTimer = null;

// Keyboard shortcut
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.shiftKey && e.key === "A") { e.preventDefault(); openAdminOverlay(); }
});

// Logo click trigger
document.getElementById("navLogo")?.addEventListener("click", e => {
  e.preventDefault();
  logoClicks++;
  clearTimeout(logoTimer);
  if (logoClicks >= 5) { logoClicks = 0; openAdminOverlay(); }
  else logoTimer = setTimeout(() => { logoClicks = 0; }, 3000);
});

// Admin badge click
document.getElementById("adminBadge")?.addEventListener("click", openAdminOverlay);

function openAdminOverlay() {
  document.getElementById("adminOverlay").classList.remove("hidden");
  document.getElementById("adminLoginView").classList.toggle("hidden", isAdmin);
  document.getElementById("adminDashView").classList.toggle("hidden", !isAdmin);
  document.getElementById("adminErr").classList.add("hidden");
  document.getElementById("adminPwdInput").value = "";
  document.body.style.overflow = "hidden";
  if (!isAdmin) setTimeout(() => document.getElementById("adminPwdInput").focus(), 100);
}
function closeAdminOverlay() {
  document.getElementById("adminOverlay").classList.add("hidden");
  document.body.style.overflow = "";
}
document.getElementById("closeAdmin")?.addEventListener("click", closeAdminOverlay);
document.getElementById("adminOverlay")?.addEventListener("click", e => {
  if (e.target === document.getElementById("adminOverlay")) closeAdminOverlay();
});

function doAdminLogin() {
  const pwd = document.getElementById("adminPwdInput").value;
  if (pwd === ADMIN_PASSWORD) {
    isAdmin = true;
    document.getElementById("adminLoginView").classList.add("hidden");
    document.getElementById("adminDashView").classList.remove("hidden");
    document.getElementById("adminBadge").classList.remove("hidden");
    document.getElementById("projectsAdminHint").classList.remove("hidden");
    renderProjects(currentFilter);
    setTimeout(closeAdminOverlay, 1400);
  } else {
    document.getElementById("adminErr").classList.remove("hidden");
    document.getElementById("adminPwdInput").value = "";
    document.getElementById("adminPwdInput").focus();
  }
}
document.getElementById("adminLoginBtn")?.addEventListener("click", doAdminLogin);
document.getElementById("adminPwdInput")?.addEventListener("keydown", e => { if (e.key === "Enter") doAdminLogin(); });

document.getElementById("adminLogoutBtn")?.addEventListener("click", () => {
  isAdmin = false;
  document.getElementById("adminBadge").classList.add("hidden");
  document.getElementById("projectsAdminHint").classList.add("hidden");
  renderProjects(currentFilter);
  closeAdminOverlay();
});

document.getElementById("openAddProject")?.addEventListener("click", () => {
  closeAdminOverlay();
  openProjectModal(-1);
});

/* ═══════════════════════════════════════════════════════════
   14. PROJECTS — render + filter + immersive hover
═══════════════════════════════════════════════════════════ */
let currentFilter = "all";
let hoverTimeout  = null;

function hexToRgb(hex) {
  const h = hex.replace("#","");
  return { r:parseInt(h.slice(0,2),16), g:parseInt(h.slice(2,4),16), b:parseInt(h.slice(4,6),16) };
}

function renderProjects(filter) {
  currentFilter = filter;
  const grid = document.getElementById("projGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const list = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  list.forEach((p, vi) => {
    const realIdx = PROJECTS.indexOf(p);
    const tools   = p.tools.map(t => `<span class="pj-tool">${t}</span>`).join("");
    const rTools  = p.tools.map(t => `<span class="pj-rt">${t}</span>`).join("");
    const rgb     = hexToRgb(p.color || "#00e5ff");

    const ghBtn = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener" class="pj-cta" style="background:${p.color};color:#000">View on GitHub ↗</a>`
      : `<span class="pj-cta" style="background:${p.color};color:#000;cursor:default;opacity:.7">No Link</span>`;

    const imgEl = p.image
      ? `<img src="${p.image}" alt="${p.title}" class="pj-thumb-img" loading="lazy"
              onerror="this.style.display='none'" />`
      : "";

    const adminCtrl = isAdmin
      ? `<div class="pj-admin">
           <button class="pj-ab pj-edit"   data-ri="${realIdx}" title="Edit">✏️</button>
           <button class="pj-ab pj-delete" data-ri="${realIdx}" title="Delete">🗑️</button>
         </div>` : "";

    const card = document.createElement("div");
    card.className = "pj-card";
    card.style.setProperty("--pj-color", p.color || "#00e5ff");
    card.style.setProperty("--pj-r", rgb.r);
    card.style.setProperty("--pj-g", rgb.g);
    card.style.setProperty("--pj-b", rgb.b);

    card.innerHTML = `
      ${adminCtrl}
      <div class="pj-thumb">
        <div class="pj-thumb-glow" style="background:radial-gradient(circle,${p.color}1a 0%,transparent 70%)"></div>
        <div class="pj-thumb-bg"></div>
        ${imgEl}
        <div class="pj-thumb-word">${p.category.slice(0,4).toUpperCase()}</div>
        <div class="pj-thumb-icon">${p.icon}</div>
      </div>
      <div class="pj-body">
        <div class="pj-tools">${tools}</div>
        <div class="pj-title">${p.title}</div>
        <div class="pj-desc">${p.desc}</div>
      </div>
      <div class="pj-reveal">
        <p class="pj-insight">${p.insight || p.desc}</p>
        <div class="pj-reveal-tools">${rTools}</div>
        ${ghBtn}
      </div>`;

    // Immersive hover (desktop)
    card.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimeout);
      grid.classList.add("hovering");
      grid.querySelectorAll(".pj-card").forEach(c => c.classList.remove("pj-focused"));
      card.classList.add("pj-focused");
      const atm = document.getElementById("projectAtm");
      atm.style.background = `radial-gradient(ellipse 80% 60% at 50% 50%, ${p.color}10 0%, transparent 70%)`;
      atm.classList.add("lit");
    });
    card.addEventListener("mouseleave", () => {
      hoverTimeout = setTimeout(() => {
        grid.classList.remove("hovering");
        card.classList.remove("pj-focused");
        document.getElementById("projectAtm").classList.remove("lit");
      }, 150);
    });

    // Admin controls
    if (isAdmin) {
      card.querySelector(".pj-edit")?.addEventListener("click", e => {
        e.stopPropagation(); openProjectModal(parseInt(e.currentTarget.dataset.ri, 10));
      });
      card.querySelector(".pj-delete")?.addEventListener("click", e => {
        e.stopPropagation(); initDelete(parseInt(e.currentTarget.dataset.ri, 10));
      });
    }

    grid.appendChild(card);
  });

  // Admin: show add button
  if (isAdmin) {
    const add = document.createElement("button");
    add.className = "pj-add";
    add.innerHTML = `<div class="pj-add-plus">＋</div><div class="pj-add-lbl">Add New Project</div><div class="pj-add-hint">Admin mode only</div>`;
    add.addEventListener("click", () => openProjectModal(-1));
    grid.appendChild(add);
  }
}

// Filter buttons
document.getElementById("filterBar")?.addEventListener("click", e => {
  const btn = e.target.closest(".fbtn");
  if (!btn) return;
  document.querySelectorAll(".fbtn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.f);
});

renderProjects("all"); // Initial render

/* ═══════════════════════════════════════════════════════════
   15. PROJECT CRUD — Add / Edit / Delete
═══════════════════════════════════════════════════════════ */

// ── Project modal ──
function openProjectModal(idx) {
  const isEdit = idx >= 0;
  document.getElementById("editIdx").value           = idx;
  document.getElementById("projectModalTitle").textContent = isEdit ? "Edit Project" : "Add Project";
  document.getElementById("saveProjectBtn").textContent   = isEdit ? "Save Changes" : "Save Project";

  if (isEdit) {
    const p = PROJECTS[idx];
    document.getElementById("fTitle").value   = p.title   || "";
    document.getElementById("fDesc").value    = p.desc    || "";
    document.getElementById("fInsight").value = p.insight || "";
    document.getElementById("fTools").value   = (p.tools  || []).join(", ");
    document.getElementById("fCat").value     = p.category|| "Python";
    document.getElementById("fColor").value   = p.color   || "#00e5ff";
    document.getElementById("fIcon").value    = p.icon    || "📊";
    document.getElementById("fGithub").value  = p.github  || "";
    document.getElementById("fImage").value   = p.image   || "";
  } else {
    ["fTitle","fDesc","fInsight","fTools","fGithub","fImage"].forEach(id => {
      document.getElementById(id).value = "";
    });
    document.getElementById("fColor").value = "#00e5ff";
    document.getElementById("fIcon").value  = "📊";
    document.getElementById("fCat").value   = "Python";
  }

  document.getElementById("projectOverlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.getElementById("fTitle").focus();
}

function closeProjectModal() {
  document.getElementById("projectOverlay").classList.add("hidden");
  document.body.style.overflow = "";
}

document.getElementById("closeProjectModal")?.addEventListener("click", closeProjectModal);
document.getElementById("cancelProjectBtn")?.addEventListener("click", closeProjectModal);
document.getElementById("projectOverlay")?.addEventListener("click", e => {
  if (e.target === document.getElementById("projectOverlay")) closeProjectModal();
});

document.getElementById("saveProjectBtn")?.addEventListener("click", () => {
  const title   = document.getElementById("fTitle").value.trim();
  const desc    = document.getElementById("fDesc").value.trim();
  const insight = document.getElementById("fInsight").value.trim();
  const toolsRaw= document.getElementById("fTools").value.trim();
  const cat     = document.getElementById("fCat").value;
  const color   = document.getElementById("fColor").value.trim() || "#00e5ff";
  const icon    = document.getElementById("fIcon").value.trim()  || "📁";
  const github  = document.getElementById("fGithub").value.trim();
  const image   = document.getElementById("fImage").value.trim();
  const idx     = parseInt(document.getElementById("editIdx").value, 10);

  if (!title || !desc || !toolsRaw) {
    alert("Please fill in Title, Description, and Tools."); return;
  }

  const tools = toolsRaw.split(",").map(s => s.trim()).filter(Boolean);
  const proj  = { title, desc, insight, tools, category:cat, color, icon, github, image };

  if (idx >= 0) {
    PROJECTS[idx] = proj;
  } else {
    PROJECTS.unshift(proj);
    document.querySelectorAll(".fbtn").forEach((b,i) => b.classList.toggle("active", i===0));
    currentFilter = "all";
  }

  saveProjects(PROJECTS);
  renderProjects(currentFilter);
  closeProjectModal();
});

// ── Delete ──
let deleteIdx = -1;

function initDelete(idx) {
  deleteIdx = idx;
  document.getElementById("deleteOverlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
document.getElementById("confirmDeleteBtn")?.addEventListener("click", () => {
  if (deleteIdx >= 0) {
    PROJECTS.splice(deleteIdx, 1);
    saveProjects(PROJECTS);
    deleteIdx = -1;
    renderProjects(currentFilter);
  }
  document.getElementById("deleteOverlay").classList.add("hidden");
  document.body.style.overflow = "";
});
document.getElementById("cancelDeleteBtn")?.addEventListener("click", () => {
  document.getElementById("deleteOverlay").classList.add("hidden");
  document.body.style.overflow = "";
  deleteIdx = -1;
});

/* ═══════════════════════════════════════════════════════════
   16. CHARTS
═══════════════════════════════════════════════════════════ */
let charts = {};

function getCSSVar(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }

function buildCharts() {
  const ac  = getCSSVar("--accent")   || "#00e5ff";
  const ac2 = getCSSVar("--accent2")  || "#0097a7";
  const t2  = getCSSVar("--text2")    || "#888";
  const br  = getCSSVar("--border")   || "rgba(255,255,255,0.08)";

  Object.values(charts).forEach(c => c.destroy());
  charts = {};

  const sc = {
    x:{ ticks:{color:t2,font:{size:11,family:"'Outfit',sans-serif"}}, grid:{color:br} },
    y:{ ticks:{color:t2,font:{size:11,family:"'Outfit',sans-serif"}}, grid:{color:br} }
  };
  const nl = { legend:{display:false} };

  const lc = document.getElementById("cLine");
  if (lc) charts.line = new Chart(lc, {
    type:"line",
    data:{ labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      datasets:[{ data:[900,1400,1100,2200,1900,2800,2400,3100,2700,3500,3200,3900],
        borderColor:ac, backgroundColor:ac+"18", borderWidth:2, tension:0.4,
        fill:true, pointBackgroundColor:ac, pointRadius:4, pointHoverRadius:7 }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:nl, scales:sc }
  });

  const bc = document.getElementById("cBar");
  if (bc) charts.bar = new Chart(bc, {
    type:"bar",
    data:{ labels:["Excel","Power BI","Python","Pandas","SQL","DAX"],
      datasets:[{ data:[90,80,75,78,62,68],
        backgroundColor:[ac+"dd",ac+"bb",ac+"99",ac+"88",ac+"66",ac+"55"],
        borderRadius:6, borderSkipped:false }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:nl, scales:sc }
  });

  const dc = document.getElementById("cDonut");
  if (dc) charts.donut = new Chart(dc, {
    type:"doughnut",
    data:{ labels:["Excel","Power BI","Python"],
      datasets:[{ data:[33,34,33], backgroundColor:[ac+"cc",ac2+"cc","#00bcd4cc"],
        borderColor:"transparent", borderWidth:0 }]},
    options:{ responsive:true, maintainAspectRatio:false, cutout:"65%",
      plugins:{ legend:{ display:true, position:"bottom",
        labels:{ color:t2,font:{size:11,family:"'Outfit',sans-serif"},padding:16,boxWidth:12}}}}
  });

  const rc = document.getElementById("cRadar");
  if (rc) charts.radar = new Chart(rc, {
    type:"radar",
    data:{ labels:["Excel","Power BI","Python","Comm.","Teamwork","Data Viz"],
      datasets:[{ data:[90,80,75,88,90,82],
        backgroundColor:ac+"22", borderColor:ac, borderWidth:2,
        pointBackgroundColor:ac, pointRadius:3 }]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:nl,
      scales:{ r:{ ticks:{display:false}, grid:{color:br},
        pointLabels:{color:t2,font:{size:10,family:"'Outfit',sans-serif"}},
        suggestedMin:0, suggestedMax:100 }}}
  });
}

const dashObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { buildCharts(); dashObs.disconnect(); } });
}, { threshold: 0.1 });
const dashSection = document.getElementById("dashboard");
if (dashSection) dashObs.observe(dashSection);

/* ═══════════════════════════════════════════════════════════
   17. CONTACT FORM
═══════════════════════════════════════════════════════════ */
document.getElementById("contactSendBtn")?.addEventListener("click", () => {
  const name    = document.getElementById("cName").value.trim();
  const email   = document.getElementById("cEmail").value.trim();
  const subject = document.getElementById("cSubject").value.trim();
  const message = document.getElementById("cMessage").value.trim();

  if (!name || !email || !message) { alert("Please fill in Name, Email, and Message."); return; }

  const body = `Hello Alhajkhan,\n\nMy name is ${name} (${email}).\n\n${message}`;
  window.location.href =
    `mailto:alhajgamingofficial@gmail.com` +
    `?subject=${encodeURIComponent(subject || "Portfolio Inquiry — " + name)}` +
    `&body=${encodeURIComponent(body)}`;

  document.getElementById("contactForm").style.display = "none";
  document.getElementById("formOk").classList.remove("hidden");
});

/* ═══════════════════════════════════════════════════════════
   18. BACK TO TOP
═══════════════════════════════════════════════════════════ */
document.getElementById("backTop")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
