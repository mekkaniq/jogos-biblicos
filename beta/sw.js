/* Jogos Bíblicos — funciona sem internet. Versão: claude-v1.5-beta7 */
const CACHE = 'jb-beta-claude-v1.5-beta7';
const ASSETS = ['./', './Lora-Italic-Variable.woff', './Lora-Variable.woff', './app.css', './aurora.svg', './campo.svg', './cidade.svg', './confins.svg', './core.js', './dados-caca.js', './dados-cartas.js', './dados-cruzada.js', './dados-historia1.js', './dados-historia10.js', './dados-historia11.js', './dados-historia12.js', './dados-historia13.js', './dados-historia14.js', './dados-historia15.js', './dados-historia16.js', './dados-historia17.js', './dados-historia18.js', './dados-historia19.js', './dados-historia2.js', './dados-historia20.js', './dados-historia21.js', './dados-historia22.js', './dados-historia23.js', './dados-historia24.js', './dados-historia3.js', './dados-historia4.js', './dados-historia5.js', './dados-historia6.js', './dados-historia7.js', './dados-historia8.js', './dados-historia9.js', './dados-kids.js', './dados-ligacoes.js', './dados-memoria.js', './dados-palavra.js', './dados-quem.js', './dados-quiz.js', './dados-roda.js', './dados-tempo.js', './dados-versiculos.js', './deserto.svg', './galileia.svg', './hub.js', './icon-180.png', './icon-192.png', './icon-512.png', './index.html', './jardim.svg', './jogo-caca.js', './jogo-cartas.js', './jogo-cruzada.js', './jogo-historia.js', './jogo-kids.js', './jogo-ligacoes.js', './jogo-memoria.js', './jogo-palavra.js', './jogo-quem.js', './jogo-quiz.js', './jogo-roda.js', './jogo-tempo.js', './jogo-versiculo.js', './kit.js', './lumi-dica-pisca.webp', './lumi-dica.webp', './lumi-dormindo.webp', './lumi-festa.webp', './lumi-lendo-pisca.webp', './lumi-lendo.webp', './lumi-oi-pisca.webp', './lumi-oi.webp', './lumi-pensando-pisca.webp', './lumi-pensando.webp', './lumi-rosto.webp', './lumi-sarca.webp', './lumi.js', './manifest.webmanifest', './mar.svg', './monte.svg', './noite.svg', './palacio.svg', './solver.js', './tumba.jpg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k.startsWith('jb-beta')).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
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
