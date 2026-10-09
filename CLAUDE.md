# Piyush Pradhan — Resume Site

Static personal resume site. Zero build step. Edit → commit → live.

## Files

```
piyush-pradhan/
├── index.html       all page content (sections, text, links)
├── styles.css       design system, layout, animations
├── script.js        scroll-driven fade-in + stagger
├── piyush.png       portrait photo (shown on hero)
├── dmt-logo.svg     DMT product logo (shown in DMT section)
├── README.md        human-friendly overview + deploy steps
└── CLAUDE.md        this file — operator guide
```

## Preview locally

```bash
open index.html
```

Or a tiny server for faster reload:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Edit on GitHub (web UI)

1. Open repo on github.com
2. Click `index.html` → pencil icon
3. Search for `EDIT:` or the section's `id="..."` to locate
4. Change text → Commit changes
5. Site updates in ~30 seconds

## Quick-edit anchors in index.html

| Section | Grep for | What's there |
|---------|----------|--------------|
| Hero / name | `hero-title` | Big name on landing |
| Hero tagline | `hero-tagline` | Role list under name |
| Credential strip | `class="strip"` | 4 impact numbers |
| About | `id="about"` | Who you are |
| Skills | `id="skills"` → `.pill` | 7 skill-card groups |
| Experience | `id="experience"` | FICO role bullets |
| Honors & Awards | `id="awards"` | 9× Spot Award citations |
| DMT product | `id="dmt"` | Tool previews + engineering details |
| Education | `id="education"` | MBA, BSc, 12th, 10th |
| Certifications | `id="certs"` | SAFe, Power BI, ExcelR, Google, Adobe |
| Contact | `id="contact"` | Email + LinkedIn |

## Add a new experience / award / cert

Copy an existing block and paste below it, then change the text.

- **New award**: duplicate a `<details class="award">` block in `#awards`
- **New cert**: duplicate an `<a class="cert cert-clickable">` block in `#certs`
- **New experience**: duplicate a `<div class="card">` block in `#experience`
- **New DMT tool preview**: duplicate a `<details class="dmt-expand">` block in `#dmt`

## Change colors / theme

Open `styles.css` → `:root` block at top. Change these:

```css
--accent: #0071e3;   /* primary blue — hero gradient, links, buttons */
--bg: #fbfbfd;       /* light section bg */
--fg: #1d1d1f;       /* text */
--muted: #6e6e73;    /* muted text */
--dark-bg: #0a0a0c;  /* dark section bg */
```

## Replace the photo

- Save new photo as `piyush.png` (or `.jpg`) in this folder
- If using `.jpg`, update `src="piyush.png"` to `src="piyush.jpg"` in `index.html` (one occurrence)
- Square or portrait aspect works; it's cropped to a circle

## Update certification verification links

In `index.html` under `id="certs"`, each cert is an `<a href="...">`. Replace the placeholder URL with your real one from LinkedIn / Credly / Coursera.

## Deploy to GitHub Pages

1. Create personal GitHub account → github.com/signup
2. Create repo named `<username>.github.io` (public, empty)
3. Upload all these files via "uploading an existing file" link
4. Settings → Pages → Source: `main` → `/ (root)` → Save
5. Live at `https://<username>.github.io`

## Deploy to Netlify (alternative, drag-and-drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `piyush-pradhan` folder onto the drop zone
3. Live at `<random-name>.netlify.app` in ~10 seconds
4. Sign up free to claim/rename the site

## Common tweaks

- **Reorder sections**: swap entire `<section>` blocks in `index.html`
- **Hide a section**: wrap it in `<!-- -->` HTML comments
- **Change section title icon**: update the `<svg class="section-icon">` inside each `.section-head`
- **Shorter hero**: change `.hero { min-height: 68vh }` in `styles.css`

## Cache / stale CSS

If edits don't show after reload:
- Hard reload: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
- Bump the `?v=` number on `<link rel="stylesheet" href="styles.css?v=N" />` in `index.html`
