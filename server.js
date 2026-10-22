const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const port = Number(process.env.PORT || 5173);
const publicFiles = new Set(['index.html', 'styles.css', 'app.js', 'favicon.svg', 'projects.js', 'project-page.js', 'navigation.js', 'theme.js', 'photo-data.js', 'photography.js', 'photography.html', 'projects/koto.html', 'projects/projectjim.html', 'projects/grembot.html', 'projects/holowish.html', '404.html', 'robots.txt', 'sitemap.xml', 'resume.pdf']);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.pdf': 'application/pdf', '.mp4': 'video/mp4' };
const assetExtensions = new Set(['.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp', '.mp4']);
const publicRoot = path.resolve(__dirname, 'public');
const assetRoot = path.resolve(publicRoot, 'assets');
http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Bad request'); return; }
  let filename = pathname === '/' ? 'index.html' : pathname.slice(1);
  if (filename === 'photography' || filename === 'photography/') filename = 'photography.html';
  if (/^projects\/(koto|projectjim|grembot|holowish)\/?$/.test(filename)) filename = filename.replace(/\/$/, '') + '.html';
  if (/^blog\/[a-z0-9-]+\/?$/.test(filename)) filename = filename.replace(/\/$/, '') + '.html';
  const isPost = /^blog\/[a-z0-9-]+\.html$/.test(filename);
  const filepath = path.resolve(publicRoot, filename);
  const isAsset = filepath.startsWith(`${assetRoot}${path.sep}`) && assetExtensions.has(path.extname(filepath).toLowerCase());
  if (!publicFiles.has(filename) && !isAsset && !isPost) { res.writeHead(404, { 'Content-Type': types['.html'] }); res.end(fs.readFileSync(path.join(publicRoot, '404.html'))); return; }
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  fs.readFile(filepath, (error, data) => {
    if (error?.code === 'ENOENT') { res.writeHead(404, { 'Content-Type': types['.html'] }); res.end(fs.readFileSync(path.join(publicRoot, '404.html'))); return; }
    if (error) { res.writeHead(500); res.end('Unable to read file'); return; }
    const headers = { 'Content-Type': types[path.extname(filepath).toLowerCase()], 'Cache-Control': 'no-cache', 'Accept-Ranges': 'bytes' };
    // Safari only plays video served with byte ranges.
    const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '');
    if (range && (range[1] || range[2])) {
      const start = range[1] ? Number(range[1]) : Math.max(0, data.length - Number(range[2]));
      const end = range[1] && range[2] ? Math.min(Number(range[2]), data.length - 1) : data.length - 1;
      if (start > end || start >= data.length) { res.writeHead(416, { 'Content-Range': `bytes */${data.length}` }); res.end(); return; }
      res.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${data.length}` });
      res.end(req.method === 'HEAD' ? undefined : data.subarray(start, end + 1));
      return;
    }
    res.writeHead(200, headers);
    res.end(req.method === 'HEAD' ? undefined : data);
  });
}).listen(port, '127.0.0.1', () => console.log(`Portfolio available at http://localhost:${port}`));
