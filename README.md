# Bar Mor — Portfolio / Landing Page

Personal portfolio & landing page for **Bar Mor** — Software Engineer, Automation Expert & Full Stack Developer.

🌐 Live: **https://barmordev.com**

A single-page, bilingual (Hebrew RTL / English) static site with a bold, futuristic gradient + glassmorphism design.

## ✨ Features

- **Bilingual** Hebrew (RTL) / English with persisted language preference
- **Dark / Light** theme with persisted preference
- **Futuristic interactive UI** built with vanilla JS (no framework):
  - Live particle-network canvas that reacts to the cursor
  - 3D mouse-tilt cards with dynamic glare
  - Cursor spotlight & magnetic buttons
  - Floating glass "code terminal" with live syntax-highlighted typing
  - Typed rotating role text, scroll-progress bar, animated gradient borders
  - Scroll-reveal + animated counters
- **Accessible & performant**: SVG icons (no emoji icons), `prefers-reduced-motion` respected, focus states, gzip, security headers
- **Zero build step** — pure HTML/CSS/JS

## 🧱 Tech

| | |
|---|---|
| Frontend | HTML5, CSS3, vanilla JavaScript, `<canvas>` |
| Fonts | Space Grotesk + Heebo (Google Fonts) |
| Serving | nginx (Alpine) in Docker |
| CI/CD | GitHub Actions → self-hosted runner on the VPS |
| Monitoring | Docker healthchecks + optional Uptime Kuma |

## 🚀 Local development

```bash
# any static server works
python3 -m http.server 8000
# open http://localhost:8000
```

## 🐳 Docker

```bash
# build & run (site on http://127.0.0.1:8088)
docker compose up -d --build

# with the uptime monitor (dashboard on http://127.0.0.1:3011)
docker compose --profile monitoring up -d --build

# health
curl http://127.0.0.1:8088/healthz   # -> {"status":"ok"}
```

The host's nginx reverse-proxies `barmordev.com` → `127.0.0.1:8088`.

## 🔁 Deployment (CI/CD)

Every push to `main` triggers `.github/workflows/deploy.yml`, which runs on the
project's **self-hosted runner** on the VPS and:

1. Checks out the code
2. Builds the Docker image
3. Recreates the container (`docker compose up -d`)
4. Prunes old images
5. Runs a health check against `/healthz`

## 📂 Structure

```
.
├── index.html              # the landing page (design + interactions)
├── resume.html             # CV (served at /cv)
├── family-brief.html
├── fonts/                  # Hebrew + pdfmake fonts
├── Dockerfile
├── docker/nginx.conf       # container nginx config
├── docker-compose.yml      # web + optional uptime monitor
└── .github/workflows/deploy.yml
```

---
© Bar Mor. All rights reserved.
