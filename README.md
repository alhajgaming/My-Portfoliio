# Alhajkhan Pathan — Portfolio

Personal data analytics portfolio built with plain HTML, CSS, and JavaScript. No frameworks, no build step.

---

## Stack

- HTML / CSS / JavaScript
- Chart.js (via CDN) — dashboard charts
- Google Fonts — Bebas Neue, Outfit, JetBrains Mono

---

## Project Structure

```
portfolio/
├── index.html       — Page structure and all sections
├── styles.css       — All styling and responsive layout
├── script.js        — All JavaScript logic
├── README.md        — This file
└── assets/
    ├── profile.jpg  — Profile photo
    └── resume.pdf   — Resume download
```

---

## How to Run

**Option 1 — Open directly:**
```
Double-click index.html in your browser
```

**Option 2 — Local server (recommended):**
```bash
python -m http.server 8000
# Open http://localhost:8000
```

**Option 3 — VS Code:**
Right-click `index.html` → Open with Live Server

---

## Adding Projects

Open `script.js` and add an object to `DEFAULT_PROJECTS`:

```js
{
  title:    "Project Name",
  desc:     "What you built and what it does.",
  insight:  "Key finding or metric.",
  tools:    ["Python", "Pandas"],
  category: "Python",   // "Python" | "Power BI" | "Excel"
  icon:     LOGOS.python,
  color:    "#3776AB",
  github:   "https://github.com/...",
  image:    "assets/screenshot.jpg"
}
```

---

## Deploy

**Netlify (fastest):**
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the project folder
3. Live in 30 seconds

**GitHub Pages:**
1. Push to a GitHub repo
2. Settings → Pages → Source: main branch

---

## Contact

- Email: logical.alhaj@gmail.com
- LinkedIn: [alhaj-khan-611211292](https://www.linkedin.com/in/alhaj-khan-611211292/)
- GitHub: [alhajgaming](https://github.com/alhajgaming)