/* Linha do Tempo — coloque os acontecimentos (ou os livros da Bíblia) na ordem certa */
(function () {
  const { $, $$, esc, I, save, route, go, setLast, toast, sfx } = App;
  const K = App.kit;
  const D = () => window.TEMPO_DATA;
  const SCN = ['jardim', 'deserto', 'monte', 'palacio', 'galileia', 'confins'];
  const scene = n => SCN[Math.floor((n - 1) / 7) % SCN.length];
  const item = (L, id) => L.k === 'b' ? { o: id, e: '📖', t: D().books[id], d: `${id < 39 ? 'Antigo' : 'Novo'} Testamento · ${id + 1}º livro da Bíblia`, r: '' } : D().events[id];

  route(/^\/tempo$/, el => {
    const ls = D().levels.map(l => ({ n: l.n, t: l.t, i: l.i, label: l.k === 'b' ? 'livros' : `${l.ids.length} fatos`, scene: scene(l.i) }));
    K.home(el, {
      id: 'tempo', title: 'LINHA DO TEMPO', sub: 'da Bíblia', scene: 'deserto', icon: I.timeline, heroTitle: 'Linha do Tempo', heroSub: 'Da criação ao Apocalipse: coloque cada acontecimento no seu lugar.', unit: 'fase', unitPl: 'fases', levels: ls, trackDesc: ['', '4 acontecimentos bem distantes no tempo.', '5 acontecimentos, mais próximos entre si.', '6 acontecimentos vizinhos: só para quem conhece bem a história!'],
      howto: ['Coloque os cartões na ordem em que aconteceram, <b>do mais antigo (em cima) ao mais recente</b>.', '<b>Arraste</b> um cartão com o dedo ou use as setas ▲ ▼.', 'Toque em <b>Conferir</b>: os que estiverem no lugar certo ficam verdes.', 'A cada 5 fases, um desafio diferente: a <b>ordem dos livros da Bíblia</b>.', 'Acertando de primeira, 3 estrelas.']
    });
  });

  route(/^\/tempo\/(\d+)$/, (el, nStr) => {
    const L = D().levels.find(l => l.n === +nStr); if (!L) return go('#/tempo');
    App.setScene(scene(L.i));
    const books = L.k === 'b';
    setLast('tempo', '#/tempo/' + L.n, `Linha do Tempo · ${K.label(L)}`, books ? 'Ordem dos livros' : `${L.ids.length} acontecimentos`);
    let order = K.shuffle(L.ids); while (order.every((v, i) => v === L.ids[i])) order = K.shuffle(L.ids);
    let tries = 0, okSet = new Set(), done = false;
    el.innerHTML = `${K.topbar('#/tempo', `FASE ${L.i} · ${K.TRK[L.t].toUpperCase()}`, books ? 'Livros da Bíblia' : 'Linha do Tempo')}
      <div class="tm-label top">${books ? '📖 Primeiro livro' : '🌅 Mais antigo'}</div>
      <div class="tm-list" id="list"></div>
      <div class="tm-label">${books ? 'Último livro 📖' : 'Mais recente ⏳'}</div>
      <button class="btn btn-gold btn-block" data-check style="margin-top:12px">Conferir a ordem</button>
      <div id="after"></div>`;
    K.common(el);
    const list = $('#list', el);
    function render() {
      list.innerHTML = order.map((id, i) => { const x = item(L, id); const ok = okSet.has(i); return `<div class="tm-c ${ok ? 'ok' : ''} ${done ? 'open' : ''}" data-p="${i}">
        <span class="h">${ok ? '✓' : '≡'}</span><span class="e">${x.e}</span><div class="t"><b>${esc(x.t)}</b>${done ? `<small>${esc(x.d)}${x.r ? ` · <i>${esc(x.r)}</i>` : ''}</small>` : ''}</div>
        ${done ? '' : `<span class="ar"><button data-up="${i}" ${i === 0 ? 'disabled' : ''} aria-label="Subir">▲</button><button data-dn="${i}" ${i === order.length - 1 ? 'disabled' : ''} aria-label="Descer">▼</button></span>`}</div>`; }).join('');
    }
    const move = (a, b) => { if (b < 0 || b >= order.length) return; const [x] = order.splice(a, 1); order.splice(b, 0, x); okSet.clear(); sfx.tap(); render(); };
    el.addEventListener('click', e => {
      if (done) return;
      const u = e.target.closest('[data-up]'); if (u) return move(+u.dataset.up, +u.dataset.up - 1);
      const dn = e.target.closest('[data-dn]'); if (dn) return move(+dn.dataset.dn, +dn.dataset.dn + 1);
      if (e.target.closest('[data-check]')) {
        tries++; okSet = new Set(order.map((id, i) => id === L.ids[i] ? i : -1).filter(i => i >= 0));
        if (okSet.size === order.length) {
          done = true; sfx.good(); render(); $('[data-check]', el).style.display = 'none';
          const stars = tries === 1 ? 3 : tries === 2 ? 2 : 1;
          $('#after', el).innerHTML = `<p class="vs-tip">${books ? 'Essa é a ordem na Bíblia!' : 'Essa é a ordem da história!'} Leia cada cartão. 📜</p>`;
          setTimeout(() => K.finish({ el, id: 'tempo', n: L.n, stars, badge: '⏳', title: 'Ordem certa!', text: tries === 1 ? 'Acertou de primeira! 👏' : `Você acertou em ${tries} tentativas.`, next: (x => x && '#/tempo/' + x.n)(K.nextOf(D().levels, L)) }), 900);
        } else { sfx.bad(); render(); toast(`${okSet.size} de ${order.length} no lugar certo. Continue!`); }
      }
    });
    // arrastar para reordenar
    let drag = null;
    list.addEventListener('pointerdown', e => {
      if (done || e.target.closest('button')) return; const c = e.target.closest('.tm-c'); if (!c) return;
      drag = { c, i: +c.dataset.p, y0: e.clientY, moved: false, rects: $$('.tm-c', list).map(x => x.getBoundingClientRect()) };
      try { c.setPointerCapture(e.pointerId); } catch (err) { }
    });
    list.addEventListener('pointermove', e => {
      if (!drag) return; const dy = e.clientY - drag.y0; if (!drag.moved && Math.abs(dy) < 8) return;
      e.preventDefault(); drag.moved = true; drag.c.classList.add('drag'); drag.c.style.transform = `translateY(${dy}px)`;
    });
    const end = e => {
      if (!drag) return; const d0 = drag; drag = null; d0.c.classList.remove('drag'); d0.c.style.transform = '';
      if (!d0.moved) return;
      const y = e.clientY; let to = d0.rects.findIndex(r => y < r.top + r.height / 2); if (to < 0) to = d0.rects.length - 1; else if (to > d0.i) to--;
      move(d0.i, Math.max(0, to));
    };
    list.addEventListener('pointerup', end); list.addEventListener('pointercancel', end);
    render();
  });
})();
