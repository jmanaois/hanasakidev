# hanasaki.dev — Julian Manaois

Minimal, responsive portfolio. Plain HTML, CSS, and JavaScript; no packages or build step required.

## Develop in VS Code

Open this folder, run `npm run dev` in the terminal, then visit http://localhost:5173. Refresh after edits. Stop with Ctrl+C. Run `npm run check` for syntax checks.

## Personalize

- `index.html`: edit the bio, project covers, photography, and blog section. Bio copy is provisional. The three project names and contact email are real; covers are placeholder illustrations.
- `app.js`: update project dialog content when details and links are ready.
- `styles.css`: colors, typography, layout, and cover illustrations.
- Replace the two Unsplash sample URLs and alt text with personal photos. Remove sample captions in both HTML and JavaScript after replacement.
- Blog currently displays a coming-soon state until real entries are supplied.
- The get in touch buttons open the visitor's email app. No backend is needed.

Google Fonts and sample Unsplash images require internet access. System font fallbacks are provided. Dialogs support Escape and focus restoration; reduced-motion preferences are respected.

## Deploy

Publish `index.html`, `styles.css`, `app.js`, and `favicon.svg` to a static host. No build command is required. The local preview server binds only to localhost. Add future image files to the server's public allowlist and your static deployment.

Design references: https://www.curated.supply/, https://ishback.com/, https://personligarkitektur.no/, https://www.bjle.photography/.
