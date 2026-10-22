# hanasaki.dev — Julian Manaois

Minimal, responsive portfolio. Plain HTML, CSS, and JavaScript; no packages or build step required.

## Develop in VS Code

Open this folder, run `npm run dev` in the terminal, then visit http://localhost:5173. Refresh after edits. Stop with Ctrl+C. Run `npm run check` for syntax checks.

## Personalize

- `public/index.html`: edit the bio, project covers, and blog section. The three project names and contact email are real; Holowish uses custom tile artwork.
- `public/projects.js`: edit the three case studies. Each has a shareable page in `public/projects/`, rendered by `public/project-page.js`. Keep the page title and description in its HTML updated when changing project copy.
- `public/navigation.js`: responsive menu, active section indication, and the mobile gear disclosure.
- `public/styles.css`: colors, typography, layout, and cover illustrations.
- Photography files live in `public/assets/photography/`; their display order, titles, categories, alt text, and camera metadata are in `public/photo-data.js`. The homepage offers a slideshow, an animated full grid, and a link to the dedicated `/photography.html` archive. Both galleries use the same data. Grids load 800px-wide copies from `public/assets/photography/thumbs/` (same filename) and open the full file in the viewer, so add a thumbnail whenever you add a photo.
- Blog currently displays a coming-soon state until real entries are supplied. When there are posts, give each post its own HTML page and link to it from the homepage, following the project-page pattern. Add new page paths to the local server allowlist.
- Link previews: each page has Open Graph tags pointing to a 1200×630 image in `public/assets/share/`. Update the tags and image together when a page's title or description changes.
- `public/404.html` is served for any missing path, locally and on Cloudflare (`not_found_handling` in `wrangler.jsonc`).
- The get in touch buttons open the visitor's email app. No backend is needed.

Google Fonts require internet access. System font fallbacks are provided. Dialogs support Escape and focus restoration; reduced-motion preferences are respected.

Project pages use standard links, so browser back, bookmarks, and direct visits work. On phones, the menu is collapsible, gear details start closed, and the photo viewer fills the screen. Desktop keeps the navigation and gear details visible. All project pages retain a sticky return link.

## Deploy

Deployed to Cloudflare Workers static assets: `wrangler.jsonc` publishes only the `public/` directory, so every push to `main` redeploys. No build command is required. The local preview server (`npm run dev`) binds only to localhost and serves files from `public/`.

Design references: https://www.curated.supply/, https://ishback.com/, https://personligarkitektur.no/, https://www.bjle.photography/.
