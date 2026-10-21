const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const port = Number(process.env.PORT || 5173);
const publicFiles = new Set(['index.html', 'styles.css', 'app.js', 'favicon.svg']);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
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
