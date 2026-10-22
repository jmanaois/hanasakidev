# hanasaki.dev — Julian Manaois

Minimal, responsive portfolio. Plain HTML, CSS, and JavaScript; no packages or build step required.

## Develop in VS Code

Open this folder, run `npm run dev` in the terminal, then visit http://localhost:5173. Refresh after edits. Stop with Ctrl+C. Run `npm run check` for syntax checks.

## Personalize

- `public/index.html`: edit the bio, project covers, and blog section. The three project names and contact email are real; Holowish uses custom tile artwork.
- `public/projects.js`: edit the three case studies. Each has a shareable page in `public/projects/`, rendered by `public/project-page.js`. Keep the page title and description in its HTML updated when changing project copy.
- `public/navigation.js`: responsive menu, active section indication, and the mobile gear disclosure.
- `public/styles.css`: colors, typography, layout, and cover illustrations.
- Photography files live in `public/assets/photography/`; their display order, titles, categories, and alt text are defined in the `photographs` list in `public/app.js`. Visitors can browse a responsive slideshow (with horizontal swipe/drag and previous/next controls) or view the full filtered grid.
- Blog currently displays a coming-soon state until real entries are supplied.
- The get in touch buttons open the visitor's email app. No backend is needed.

Google Fonts require internet access. System font fallbacks are provided. Dialogs support Escape and focus restoration; reduced-motion preferences are respected.

Project pages use standard links, so browser back, bookmarks, and direct visits work. On phones, the menu is collapsible, gear details start closed, and the photo viewer fills the screen. Desktop keeps the navigation and gear details visible. All project pages retain a sticky return link.

## Deploy

Deployed to Cloudflare Workers static assets: `wrangler.jsonc` publishes only the `public/` directory, so every push to `main` redeploys. No build command is required. The local preview server (`npm run dev`) binds only to localhost and serves files from `public/`.

Design references: https://www.curated.supply/, https://ishback.com/, https://personligarkitektur.no/, https://www.bjle.photography/.
