# hanasaki.dev — Julian Manaois

Minimal, responsive portfolio. Plain HTML, CSS, and JavaScript; no packages or build step required.

## Develop in VS Code

Open this folder, run `npm run dev` in the terminal, then visit http://localhost:5173. Refresh after edits. Stop with Ctrl+C. Run `npm run check` for syntax checks.

## Personalize

- `public/index.html`: edit the bio, project covers, and blog section. The three project names and contact email are real; Holowish uses custom tile artwork.
- `public/app.js`: update project dialog content when details and links are ready.
- `public/styles.css`: colors, typography, layout, and cover illustrations.
- Photography files live in `public/assets/photography/`; their display order, titles, categories, and alt text are defined in the `photographs` list in `public/app.js`. The gallery paginates as a single responsive row.
- Blog currently displays a coming-soon state until real entries are supplied.
- The get in touch buttons open the visitor's email app. No backend is needed.

Google Fonts require internet access. System font fallbacks are provided. Dialogs support Escape and focus restoration; reduced-motion preferences are respected.

## Deploy

Deployed to Cloudflare Workers static assets: `wrangler.jsonc` publishes only the `public/` directory, so every push to `main` redeploys. No build command is required. The local preview server (`npm run dev`) binds only to localhost and serves files from `public/`.

Design references: https://www.curated.supply/, https://ishback.com/, https://personligarkitektur.no/, https://www.bjle.photography/.
