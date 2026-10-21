const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const port = Number(process.env.PORT || 5173);
const publicFiles = new Set(['index.html', 'styles.css', 'app.js', 'favicon.svg', 'assets/grembot/showcase-cover.png', 'assets/grembot/iphone-cover.png', 'assets/grembot/card-query.png', 'assets/grembot/card-output.png', 'assets/grembot/card-variants.png', 'assets/projectjim/workout-setup.png', 'assets/projectjim/watch-ready.png', 'assets/projectjim/workout-active.png', 'assets/projectjim/rest-timer.png', 'assets/projectjim/workout-history.png']);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png' };
http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Bad request'); return; }
  const filename = pathname === '/' ? 'index.html' : pathname.slice(1);
  if (!publicFiles.has(filename)) { res.writeHead(404); res.end('Not found'); return; }
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  fs.readFile(path.join(__dirname, filename), (error, data) => {
    if (error) { res.writeHead(500); res.end('Unable to read file'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(filename)], 'Cache-Control': 'no-cache' });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
}).listen(port, '127.0.0.1', () => console.log(`Portfolio available at http://localhost:${port}`));
