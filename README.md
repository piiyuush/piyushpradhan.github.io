# Piyush Pradhan — Resume Site

Static, zero-build. Edit → commit → live.

## Files

- `index.html` — all content (sections, text, links)
- `styles.css` — design tokens, layout, animations
- `script.js` — scroll-driven fade-ins + staggered reveal
- `piyush.jpg` — portrait (drop here; falls back to "PP" initials)
- `dmt-logo.svg` — DMT product logo
- `dmt/` — folder for DMT screenshots/GIFs (optional)

## Preview locally

```
open index.html
```

Or a mini server for faster reload:

```
python3 -m http.server 8000
# → http://localhost:8000
```

## Edit on GitHub (web)

1. Open the repo on github.com
2. Click `index.html` → pencil icon
3. Search for `EDIT:` comments — those mark editable fields
4. Change text → Commit changes
5. Live in ~30s

## Key edit anchors in index.html

| What to change | Grep for |
|----------------|----------|
| Name / title | `hero-title` |
| Hero tagline | `hero-tagline` |
| About paragraphs | `id="about"` |
| Experience bullets | `id="experience"` |
| Skills pills | `id="skills"` → `.pill` |
| Spot awards citations | `id="awards"` → `details class="award"` |
| DMT engineering details | `id="dmt"` → `.eng-list` |
| Education | `id="education"` |
| Certifications + verification URLs | `id="certs"` → `href=`  |
| Contact (email · LinkedIn) | `id="contact"` |

## Add new experience / award / cert

Copy an existing block (`<div class="card">` or `<details class="award">` or `<a class="cert cert-clickable">`), paste below it, change the text.

## Change colors / theme

`styles.css` → `:root` block at top → change `--accent`, `--bg`, `--fg`.

## Deploy to GitHub Pages

1. Create repo named `<your-github-username>.github.io` (public)
2. Push these files to `main`
3. Settings → Pages → Source: `main` → `/root`
4. Live at `https://<your-github-username>.github.io`
