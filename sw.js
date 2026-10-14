/* Jogos Bíblicos — funciona sem internet. Versão: claude-v1.0 */
const CACHE = 'jogos-biblicos-claude-v1.0';
const ASSETS = ['./', './css/app.css', './data/caca.js', './data/cartas.js', './data/cruzada.js', './fonts/Lora-Italic-Variable.woff', './fonts/Lora-Variable.woff', './img/icon-180.png', './img/icon-192.png', './img/icon-512.png', './img/scenes/aurora.svg', './img/scenes/campo.svg', './img/scenes/cidade.svg', './img/scenes/confins.svg', './img/scenes/deserto.svg', './img/scenes/galileia.svg', './img/scenes/jardim.svg', './img/scenes/mar.svg', './img/scenes/monte.svg', './img/scenes/noite.svg', './img/scenes/palacio.svg', './img/tumba.jpg', './index.html', './js/caca.js', './js/cartas.js', './js/core.js', './js/cruzada.js', './js/hub.js', './js/solver.js', './manifest.webmanifest'];
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
