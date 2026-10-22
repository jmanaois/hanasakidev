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
- Blog posts are plain HTML pages in `public/blog/` (see `public/blog/spring-in-japan.html` for an example). Write each paragraph as a `<p>`; add photos with `<figure class="post-figure">` (full width) or `<figure class="post-figure post-figure--pair">` (two side by side), and keep each post's images in `public/assets/blog/<post-name>/`. The local server serves any `public/blog/<name>.html` automatically. A draft carries `<meta name="robots" content="noindex">` and isn't linked anywhere; to publish, remove that tag, replace the homepage's coming-soon `.blog-empty` block with a link to the post, and add the post to the sitemap.
- Link previews: each page has Open Graph tags pointing to a 1200×630 image in `public/assets/share/`. Update the tags and image together when a page's title or description changes.
- `public/404.html` is served for any missing path, locally and on Cloudflare (`not_found_handling` in `wrangler.jsonc`).
- `public/resume.pdf` is linked from the about section's icon row; replace the file to update it.
- `public/robots.txt` and `public/sitemap.xml` help search engines find pages. Add new pages (such as blog posts) to the sitemap.
- The get in touch buttons open the visitor's email app. No backend is needed.

Google Fonts require internet access. System font fallbacks are provided. Dialogs support Escape and focus restoration; reduced-motion preferences are respected.

Project pages use standard links, so browser back, bookmarks, and direct visits work. On phones, the menu is collapsible, gear details start closed, and the photo viewer fills the screen. Desktop keeps the navigation and gear details visible. All project pages retain a sticky return link.

## Deploy

Deployed to Cloudflare Workers static assets: `wrangler.jsonc` publishes only the `public/` directory, so every push to `main` redeploys. No build command is required. The local preview server (`npm run dev`) binds only to localhost and serves files from `public/`.

Design references: https://www.curated.supply/, https://ishback.com/, https://personligarkitektur.no/, https://www.bjle.photography/.
