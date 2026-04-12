# 📊 Pathan Alhajkhan — Portfolio (Final Edition)

A modern, minimal, and interactive personal portfolio for a data analytics student.
project live here: https://alhajgaming.github.io/Portfoliio/

---

## 🚀 Features

- Dark, premium UI (black & white theme with cyan accents)
- Mobile-first, fully responsive design
- Dynamic project system with **localStorage persistence**
- Built-in **Admin Mode** (keyboard shortcut + hidden trigger)
- Dashboard-style analytics section (Chart.js)
- Cinematic 5-second loading screen with random quotes
- Profile picture support with automatic fallback to initials
- Immersive hover effects on project cards

---

## 📂 Project Structure

```
project/
├── index.html        ← HTML structure (sections, modals)
├── styles.css        ← All styling (design tokens, components, responsive)
├── script.js         ← All JavaScript (data, logic, animations)
├── README.md         ← This file
└── assets/
    ├── profile.jpg   ← Your profile photo (put it here)
    └── resume.pdf    ← Your resume (put it here)
```

---

## 🔐 Admin Mode

### How to Access:

**Option A — Keyboard shortcut:**
```
Ctrl + Shift + A
```

**Option B — Hidden UI trigger:**
Click the `AK.` logo in the navbar **5 times quickly** (within 3 seconds).

---

### Default Password:

```
analyst2026
```

To change it, open `script.js` and edit line:
```js
const ADMIN_PASSWORD = "analyst2026";
```

---

### What Admins Can Do:

- ✅ Add new projects (full form with all fields)
- ✅ Edit existing projects (hover card → click ✏️)
- ✅ Delete projects (hover card → click 🗑️ → confirm)
- ✅ Changes are saved to **localStorage** instantly
- ✅ Visitors see zero admin controls (read-only)

---

## 📊 Project Data System

Projects are stored in:
- **`localStorage`** (browser-based, persists across sessions)
- Key: `ak_portfolio_projects`
- Fallback: `DEFAULT_PROJECTS` in `script.js` (shown on first visit)

Each project includes:

| Field      | Type   | Description                            |
|------------|--------|----------------------------------------|
| `title`    | string | Project name                           |
| `desc`     | string | Short description for card body        |
| `insight`  | string | One-liner shown in hover overlay       |
| `tools`    | array  | List of tools/tech used                |
| `category` | string | `"Python"` / `"Power BI"` / `"Excel"` |
| `icon`     | string | Emoji icon for the card                |
| `color`    | string | Hex accent color for hover glow        |
| `github`   | string | GitHub URL or `""` for none            |
| `image`    | string | Image path e.g. `"assets/project1.jpg"` or `""` |

### To add a project permanently (in code):
Open `script.js`, find `DEFAULT_PROJECTS` and add an object:

```js
{
  title:    "Your Project Name",
  desc:     "What you built and what it does.",
  insight:  "Key insight or metric this produced.",
  tools:    ["Python", "Pandas"],
  category: "Python",
  icon:     "📈",
  color:    "#a78bfa",
  github:   "https://github.com/yourusername/project",
  image:    "assets/project-screenshot.jpg"
}
```

---

## 🧠 Categories

| Category   | Filter Button | Example Tools           |
|------------|---------------|-------------------------|
| `Python`   | 🐍 Python     | Pandas, Seaborn, NumPy  |
| `Power BI` | 📊 Power BI   | DAX, Power Query        |
| `Excel`    | 📗 Excel      | Pivot Tables, VBA       |

---

## 🎞 Loading Screen

- Shows for **5 seconds** on every page load
- Displays a random quote each time from a pool of **27 quotes**
- Categories: Data analytics, Star Wars (adapted), Anime (adapted), Dev jokes
- Fully responsive, scales on all screen sizes
- Live clock display in top-right corner
- Scan-line animation for cinematic feel

---

## 🖼 Profile Picture

**Step 1:** Place your photo in the `/assets/` folder:
```
assets/profile.jpg
```

**Step 2:** The HTML already points to this path:
```html
<img src="assets/profile.jpg" alt="Alhajkhan Pathan" ... />
```

**If no image is found**, it automatically shows `AP` initials — no broken image icon.

---

## 📱 Mobile Optimization

- Fully responsive layout at 380px, 480px, 600px, 900px breakpoints
- No hover-dependency for core content (hover effects gracefully degrade)
- Touch-friendly buttons and form fields
- Hamburger menu for mobile navigation
- Font sizes scale with `clamp()` for every screen
- Loading screen hides corner labels on very small screens

---

## ⚡ Performance

- No frameworks, no npm, no build step
- Only 1 external library: **Chart.js** (loaded via CDN)
- Google Fonts: Bebas Neue, Outfit, JetBrains Mono
- Intersection Observer for lazy animations
- `will-change` only on actively animated elements
- Images load with `loading="lazy"`

---

## 🛠 How to Run

**Option 1 — Double click:**
```
Open index.html directly in your browser
```

**Option 2 — Local server (recommended):**
```bash
python -m http.server 8000
# Then open http://localhost:8000
```

**Option 3 — VS Code Live Server:**
Right-click `index.html` → Open with Live Server

---

## 🚀 Deploy (Free)

**Netlify Drop (30 seconds):**
1. Go to https://app.netlify.com/drop
2. Drag and drop the entire project folder
3. Get a live URL instantly ✅

**GitHub Pages:**
1. Push to a GitHub repo
2. Settings → Pages → Source: main branch
3. Live at `https://yourusername.github.io/repo-name/` ✅

---

## 🎯 Goal

This portfolio is designed to:
- Showcase data analytics skills professionally
- Present projects with immersive visual storytelling
- Demonstrate structured, analytical thinking
- Allow easy updates without touching UI code

---

## 🧠 Tips

1. Update `alhajkhan@example.com` in `index.html` and `script.js` with your real email.
2. Replace the phone number in the Contact section of `index.html`.
3. Update LinkedIn and GitHub links in `index.html` (search for `linkedin.com` and `github.com`).
4. Keep adding projects regularly — a portfolio that doesn't evolve is just decoration.
5. Change `ADMIN_PASSWORD` in `script.js` before deploying publicly.
