/* Jogos Bíblicos — funciona sem internet. Versão: claude-v1.1 */
const CACHE = 'jogos-biblicos-claude-v1.1';
const ASSETS = ['./', './Lora-Italic-Variable.woff', './Lora-Variable.woff', './app.css', './aurora.svg', './campo.svg', './cidade.svg', './confins.svg', './core.js', './dados-caca.js', './dados-cartas.js', './dados-cruzada.js', './dados-quiz.js', './deserto.svg', './galileia.svg', './hub.js', './icon-180.png', './icon-192.png', './icon-512.png', './index.html', './jardim.svg', './jogo-caca.js', './jogo-cartas.js', './jogo-cruzada.js', './jogo-quiz.js', './manifest.webmanifest', './mar.svg', './monte.svg', './noite.svg', './palacio.svg', './solver.js', './tumba.jpg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k.startsWith('jogos-biblicos')).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // fontes do Google: guarda depois do primeiro uso
  if (/fonts\.(googleapis|gstatic)\.com/.test(url.host)) {
    e.respondWith(caches.open(CACHE + '-fonts').then(c => c.match(req).then(r => r || fetch(req).then(res => { c.put(req, res.clone()); return res; }).catch(() => r))));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; }).catch(() => caches.match('./index.html'))));
});
