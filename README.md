<div align="center">

```
██████╗  █████╗ ██████╗     ███╗   ███╗ ██████╗ ██████╗
██╔══██╗██╔══██╗██╔══██╗    ████╗ ████║██╔═══██╗██╔══██╗
██████╔╝███████║██████╔╝    ██╔████╔██║██║   ██║██████╔╝
██╔══██╗██╔══██║██╔══██╗    ██║╚██╔╝██║██║   ██║██╔══██╗
██████╔╝██║  ██║██║  ██║    ██║ ╚═╝ ██║╚██████╔╝██║  ██║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝
```

### Software Engineer · Automation Expert · Full Stack Developer

<br/>

[![Deploy](https://img.shields.io/github/actions/workflow/status/barmor12/barmor-portfolio/deploy.yml?branch=main&style=for-the-badge&logo=github-actions&logoColor=white&label=CI%2FCD&color=7c3aed)](https://github.com/barmor12/barmor-portfolio/actions)
[![Docker](https://img.shields.io/badge/Docker-nginx%3A1.27--alpine-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/_/nginx)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-d946ef?style=for-the-badge)](LICENSE)
[![Live](https://img.shields.io/website?url=https%3A%2F%2Fbarmordev.com&style=for-the-badge&logo=firefox-browser&logoColor=white&label=LIVE&color=06b6d4)](https://barmordev.com)

<br/>

> **Personal portfolio site — zero dependencies, zero build steps, 100% hand-crafted.**  
> Glass-morphism UI · Bilingual HE/EN · Dark/Light mode · Docker + GitHub Actions CI/CD

<br/>

[🌐 Live Site](https://barmordev.com) &nbsp;·&nbsp; [📄 View CV](https://barmordev.com/cv) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/barmor12/barmor-portfolio/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Pages](#pages)
- [Performance & Optimizations](#performance--optimizations)

---

## Overview

A production-grade personal portfolio built as a **zero-dependency, zero-build static site** — pure HTML, CSS, and TypeScript compiled to plain JS. Served by **nginx inside Docker**, deployed automatically via **GitHub Actions** to a self-hosted VPS on every push to `main`.

The design language draws from **glass-morphism** and **futuristic UI** — animated gradient blobs, interactive particle network canvas, 3D tilt-on-hover cards with specular glare, magnetic CTA buttons, and a live cursor spotlight. Every pixel is hand-crafted without any UI framework.

---

## Features

### UI & Design

| Feature | Description |
|---------|-------------|
| 🎨 **Glass-morphism** | Frosted-glass cards with `backdrop-filter: blur` and gradient borders |
| 🌈 **Gradient system** | Violet → Fuchsia → Cyan brand gradient applied consistently via CSS custom property |
| ✨ **Particle network** | `<canvas>` background with mouse-repel physics and animated connection lines |
| 🃏 **3D tilt cards** | `pointermove`-reactive `rotateX/Y` with dynamic specular glare highlight |
| 🔦 **Cursor spotlight** | Radial gradient spotlight element that follows the cursor in real time |
| 🧲 **Magnetic buttons** | Primary CTA buttons subtly follow the cursor for a tactile, physical feel |
| 🎞️ **Scroll reveal** | `IntersectionObserver`-powered fade-in + slide-up for every section |
| 🔢 **Animated counters** | Smooth cubic-ease counter animation triggered on scroll-into-view |
| ⌨️ **Typed roles** | Typewriter effect cycling through role titles in both languages |
| 🖥️ **Live store preview** | Scaled browser mockup with a live `<iframe>` of [barmorpc.com](https://barmorpc.com) |

### Functionality

| Feature | Description |
|---------|-------------|
| 🌐 **Bilingual** | Full Hebrew RTL ↔ English LTR toggle, persisted to `localStorage` |
| 🌙 **Dark / Light mode** | Theme toggle with smooth CSS variable transition, persisted to `localStorage` |
| 📜 **Scroll progress** | Thin gradient bar at the top of the viewport tracking scroll depth |
| ⬆️ **Back to top** | Fixed floating button that fades in after 400 px of scroll |
| ♿ **Accessibility** | `prefers-reduced-motion`, `aria-label` on all icon buttons, `:focus-visible` ring, semantic HTML5 |

### Mobile

| Feature | Description |
|---------|-------------|
| 📱 **Responsive nav** | Hamburger → slide-in sidebar below 860 px |
| 🃏 **Compact project cards** | Horizontal layout (colour strip + text row) on ≤ 600 px |
| 🔲 **2-col Why-me grid** | 6 feature cards reflow to 2 × 3 on mobile |

---

## Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)

</div>

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Markup** | HTML5 | Semantic elements, ARIA, bilingual `data-lang` attributes, inline SVG sprite |
| **Styles** | CSS3 | Custom properties, logical properties (RTL-safe), `clamp()`, `@media` |
| **Logic** | TypeScript → ES2020 | Zero runtime dependencies, compiled to `js/main.js` |
| **Server** | nginx 1.27-alpine | Gzip, security headers, immutable cache for static assets |
| **Container** | Docker | Minimal alpine image, HEALTHCHECK, OCI labels |
| **CI/CD** | GitHub Actions | Self-hosted runner on VPS, auto-deploy on `main` push |
| **Monitoring** | Uptime Kuma | Optional `--profile monitoring` sidecar |
| **Fonts** | Space Grotesk + Heebo | Google Fonts with `display=swap`, Hebrew support |

---

## Architecture

### Repository Structure

```
barmor-portfolio/
│
├── index.html                  ← Main page (pure HTML structure + SVG sprite)
├── resume.html                 ← CV / résumé (served at /cv)
│
├── css/
│   └── styles.css              ← All styles (variables → components → sections → responsive)
│
├── src/
│   └── main.ts                 ← TypeScript source (theme, language, animations, particles)
│
├── js/
│   └── main.js                 ← Compiled output (do not edit directly — edit main.ts)
│
├── fonts/                      ← Self-hosted font files (Hebrew + pdfmake)
│
├── docker/
│   └── nginx.conf              ← nginx site config (gzip, headers, routing, caching)
│
├── .github/
│   └── workflows/
│       └── deploy.yml          ← CI/CD pipeline definition
│
├── Dockerfile                  ← nginx:alpine image — copies static assets
├── docker-compose.yml          ← Web service + optional Uptime Kuma sidecar
├── tsconfig.json               ← TypeScript compiler config
└── package.json                ← Dev dependency: typescript
```

### Infrastructure Diagram

```
  User's Browser
       │  HTTPS
       ▼
  Host nginx (reverse proxy)
  barmordev.com ──────────────► 127.0.0.1:8088
                                      │
                                      ▼
                         ┌────────────────────────────┐
                         │  Docker: barmor-portfolio  │
                         │                            │
                         │  nginx 1.27-alpine         │
                         │  ├── /           index.html│
                         │  ├── /cv       resume.html │
                         │  ├── /css/     styles.css  │
                         │  ├── /js/      main.js     │
                         │  ├── /fonts/   *.woff2     │
                         │  └── /healthz  {"ok"}      │
                         └────────────────────────────┘

  (optional --profile monitoring)
                         ┌────────────────────────────┐
                         │  Docker: barmor-portfolio  │
                         │          -uptime           │
                         │                            │
                         │  Uptime Kuma               │
                         │  Dashboard: :3011          │
                         │  Monitor: http://web/healthz│
                         └────────────────────────────┘
```

### CI/CD Pipeline

```
  git push origin main
         │
         ▼
  GitHub Actions — self-hosted runner (VPS)
         │
         ├─ 1. actions/checkout@v4
         ├─ 2. docker compose build
         ├─ 3. docker compose up -d --remove-orphans
         ├─ 4. docker image prune -f
         └─ 5. Health check (20 retries × 3s)
                    │
                    ├── ✅  curl /healthz → {"status":"ok"}   → pipeline green
                    └── ❌  timeout after 60s                 → pipeline fails + logs
```

### CSS Architecture

`css/styles.css` is organised into clearly labelled sections:

```
 1. CSS custom properties  — brand gradient tokens, theme palettes (dark/light)
 2. Base reset + body      — *, html, body, scroll-behavior
 3. Utility classes        — .container, .grad-text, .icon
 4. Navbar                 — floating pill nav, brand mark, nav-links, lang toggle
 5. Sidebar                — slide-in settings panel, overlay, seg control, toggle switch
 6. Section helpers        — .eyebrow, .sec-head, .sec-title, .pad
 7. Hero section           — hero grid, h1, typed role, lead text, CTA row
 8. Buttons                — .btn, .btn-primary, .btn-ghost, glass card base
 9. Cards grid             — .grid, .g-3, .g-2, .card, .card-icon
10. Quick facts            — .facts, .fact
11. Skills                 — marquee + marquee-track animation, .chip, .skills-grid
12. Portfolio              — .proj, .proj-cover (nth-child gradients), .proj-body
13. Featured store         — browser mockup, live badge, scaled iframe
14. Testimonials           — .quote, stars, who
15. Contact + footer       — contact card, c-icons, footer grid, socials
16. Scroll-to-top          — fixed floating button
17. Reveal animations      — .reveal / .in, reduced-motion override
18. Responsive             — 860px (mobile nav), 600px (compact cards + 2-col grid)
19. Futuristic layer       — particle canvas, cursor spotlight, 3D tilt + glare,
                             floating code tokens, glass terminal, floaty animation
```

### TypeScript Module Structure (`src/main.ts`)

```
main.ts
 ├── UI helpers          openSidebar / closeSidebar
 ├── Theme               applyThemeIcon / toggleTheme
 ├── Language            setLanguage / toggleLanguageQuick
 ├── Navigation          goTo / scrollToTop
 ├── Initialisation      IIFE — restore theme & language from localStorage
 ├── Scroll reveal       IntersectionObserver + animateCount + bar fills
 ├── Scroll events       toTop visibility + progress bar width
 ├── Typed role          typewriter loop (HE / EN word lists)
 ├── Code terminal       syntax-highlighted line-by-line typing animation
 ├── 3D tilt + glare     pointermove handler on .card / .proj / .terminal
 ├── Spotlight + magnet  cursor spotlight + magnetic .btn-primary
 ├── Floating tokens     reveal + parallax mouse effect on .tok elements
 └── Particle canvas     canvas resize, draw loop, mouse-repel physics
```

---

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) ≥ 24 + [Docker Compose](https://docs.docker.com/compose/) v2
- _(TypeScript dev only)_ Node.js ≥ 18

### Run with Docker

```bash
# Clone
git clone https://github.com/barmor12/barmor-portfolio.git
cd barmor-portfolio

# Build image and start container
docker compose up --build

# Site → http://localhost:8088
# Health → http://localhost:8088/healthz
```

### Run without Docker

```bash
# Python (built-in)
python3 -m http.server 3000

# Node
npx serve .

# Open http://localhost:3000
```

### TypeScript development

```bash
# Install dev dependency (TypeScript compiler only)
npm install

# Watch mode — recompiles src/main.ts → js/main.js on every save
npx tsc --watch

# One-shot compile
npx tsc
```

---

## Deployment

Every push to `main` triggers the CI/CD pipeline automatically. Manual steps are only needed for initial server setup.

### Manual deploy

```bash
ssh user@your-vps
cd /path/to/barmor-portfolio

git pull origin main
docker compose build
docker compose up -d --remove-orphans
docker image prune -f

curl http://127.0.0.1:8088/healthz   # → {"status":"ok"}
```

### Enable uptime monitoring

```bash
docker compose --profile monitoring up -d
# Dashboard → http://127.0.0.1:3011
# Add a monitor for: http://web/healthz
```

### Secrets & environment variables

| Secret | Location | Purpose |
|--------|----------|---------|
| _(none required)_ | — | Static site — no runtime secrets needed |

---

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `index.html` | Main portfolio page |
| `/cv` | `resume.html` | Printable CV / résumé |
| `/healthz` | nginx inline | Docker health-check (`{"status":"ok"}`) |

### Sections on the main page

| Anchor | Section |
|--------|---------|
| `#hero` | Animated hero — typewriter role, stats card, CTA buttons, floating code tokens |
| `#about` | Bio, quick facts, animated code terminal |
| `#services` | Service cards — automation, full-stack, landing pages, AI solutions |
| `#skills` | Infinite skill marquee + interactive skills grid |
| `#portfolio` | Project cards with GitHub links |
| `#store` | Live scaled browser preview of barmorpc.com |
| `#why-me` | 6 differentiator cards |
| `#contact` | WhatsApp / email CTA + social icon row |

---

## Performance & Optimizations

| Optimisation | Implementation |
|-------------|---------------|
| **Zero JS runtime deps** | Pure browser APIs — no npm packages shipped to the client |
| **Gzip compression** | nginx compresses HTML, CSS, JS, SVG, and fonts |
| **Immutable cache** | CSS, JS, and fonts served with `Cache-Control: public, immutable` (30 days) |
| **Lazy iframe** | Store live preview uses `loading="lazy"` and `pointer-events: none` |
| **Passive scroll listener** | Registered with `{ passive: true }` — no jank on scroll |
| **Reduced motion** | All animations respect `prefers-reduced-motion: reduce` |
| **IntersectionObserver** | Counters, skill bars, and terminal typing trigger only on visibility |
| **Canvas pause** | Particle canvas cancels `requestAnimationFrame` on `visibilitychange` |
| **Resize debounce** | Canvas `resize` handler debounced to 200 ms |
| **Font display swap** | Google Fonts loaded with `display=swap` — no invisible text flash |

---

<div align="center">

**Built with craft by [Bar Mor](https://barmordev.com)**

[![GitHub](https://img.shields.io/badge/GitHub-barmor12-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/barmor12)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bar%20Mor-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bar-mor-42a1421a1/)
[![Website](https://img.shields.io/badge/Website-barmordev.com-7c3aed?style=flat-square&logo=firefox-browser&logoColor=white)](https://barmordev.com)

<br/>

*© Bar Mor. All rights reserved.*

</div>
