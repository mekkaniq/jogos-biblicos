/* Complete o Versículo — preencha as lacunas ou monte o versículo na ordem certa */
(function () {
  const { $, $$, esc, I, save, route, go, setLast, toast, sfx } = App;
  const K = App.kit;
  const D = () => window.VERSOS_DATA;

  route(/^\/versiculo$/, el => {
    const d = D(); const ls = d.levels.map(l => ({ n: l.n, t: l.t, i: l.i, j: l.j, label: l.ref.replace(/ \d.*$/, ''), scene: d.journeys[l.j].scene }));
    K.home(el, {
      id: 'versiculo', title: 'COMPLETE', sub: 'o versículo', scene: 'jardim', icon: I.book, heroTitle: 'Complete o Versículo', heroSub: '“Escondi a tua palavra no meu coração.” Aprenda de cor os versículos mais amados.', unit: 'versículo', unitPl: 'versículos',
      groups: (t, lv) => d.journeys.map(j => ({ name: j.name, levels: lv.filter(l => l.j === j.j) })), levels: ls,
      trackDesc: ['', 'Complete 2 palavras de cada versículo.', 'Complete 3 ou 4 palavras, com mais opções para confundir.', 'Monte o versículo inteiro, pedaço por pedaço, na ordem certa.'],
      howto: ['Toque na lacuna e depois na palavra que completa o versículo.', 'Se a palavra estiver certa, ela fica no lugar. Se não, tente outra, sem pressa.', 'Nas últimas jornadas, monte o versículo tocando nos pedaços <b>na ordem certa</b>.', 'Sem nenhum erro, você ganha 3 estrelas.']
    });
  });

  route(/^\/versiculo\/(\d+)$/, (el, nStr) => {
    const d = D(); const L = d.levels.find(l => l.n === +nStr); if (!L) return go('#/versiculo');
    const J = d.journeys[L.j];
    App.setScene(J.scene);
    setLast('versiculo', '#/versiculo/' + L.n, `Versículo · ${K.TRK[L.t]} · ${L.ref}`, J.name);
    let mist = 0, done = false;
    el.innerHTML = `${K.topbar('#/versiculo', `VERSÍCULO ${L.i}`, `${K.TRK[L.t]} · ${esc(J.name)}`)}
      <div class="vs-card parch"><div class="vs-ref">${I.book}<span>${esc(L.ref)} · ACF</span></div><div class="vs-text" id="vt"></div></div>
      <p class="vs-tip" id="tip"></p>
      <div class="vs-bank" id="bank"></div>
      <div id="after"></div>`;
    K.common(el);
    const end = () => {
      done = true; sfx.good();
      $('#bank', el).innerHTML = ''; $('#tip', el).textContent = '';
      $('.vs-card', el).classList.add('complete');
      $('#vt', el).innerHTML = `“${esc(L.tx)}”`;
      const stars = mist === 0 ? 3 : mist <= 2 ? 2 : 1;
      setTimeout(() => K.finish({ el, id: 'versiculo', n: L.n, stars, badge: '📖', title: 'Versículo completo!', text: mist ? `Você completou com ${mist} ${mist === 1 ? 'erro' : 'erros'}. Leia o versículo em voz alta mais uma vez. 🙏` : 'Sem nenhum erro! Leia o versículo em voz alta mais uma vez. 🙏', next: (x => x && '#/versiculo/' + x.n)(K.nextOf(d.levels, L)), nextLabel: 'Próximo versículo', listLabel: 'Ver os versículos' }), 500);
    };
    if (L.m < 3) {
      const blanks = L.p.filter(p => typeof p === 'object');
      const fill = blanks.map(() => null); let act = 0;
      const opts = K.shuffle([...blanks.map(b => b.b), ...L.x]);
      const used = new Set();
      function render() {
        let bi = 0;
        $('#vt', el).innerHTML = '“' + L.p.map(p => typeof p === 'string' ? esc(p) : (k => `<button class="vs-slot ${fill[k] ? 'ok' : ''} ${k === act && !fill[k] ? 'act' : ''}" data-s="${k}">${fill[k] ? esc(fill[k]) : '&nbsp;'.repeat(Math.max(6, blanks[k].b.length + 2))}</button>`)(bi++)).join('') + '”';
        $('#bank', el).innerHTML = opts.map((w, i) => `<button class="vs-w" data-w="${i}" ${used.has(i) ? 'disabled' : ''}>${esc(w)}</button>`).join('');
        $('#tip', el).textContent = 'Toque na palavra que completa a lacuna destacada.';
      }
      el.addEventListener('click', e => {
        if (done) return;
        const sl = e.target.closest('[data-s]'); if (sl && !fill[+sl.dataset.s]) { act = +sl.dataset.s; sfx.tap(); render(); return; }
        const b = e.target.closest('[data-w]'); if (!b || b.disabled) return;
        const i = +b.dataset.w, w = opts[i];
        if (K.plain(w) === K.plain(blanks[act].b)) {
          fill[act] = blanks[act].b; used.add(i); sfx.good();
          const nx = fill.findIndex(f => !f); act = nx;
          render(); if (nx < 0) end();
        } else { mist++; sfx.bad(); b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); const s = $(`[data-s="${act}"]`, el); s && (s.classList.remove('shake'), void s.offsetWidth, s.classList.add('shake')); }
      });
      render();
    } else {
      const order = K.shuffle(L.c.map((_, i) => i)); let got = 0;
      if (order.every((v, i) => v === i)) order.reverse();
      function render() {
        $('#vt', el).innerHTML = '“' + L.c.slice(0, got).map(esc).join(' ') + (got < L.c.length ? ' <span class="vs-gap">…</span>' : '') + '”';
        $('#bank', el).innerHTML = order.map(i => `<button class="vs-w chunk" data-c="${i}" ${i < got ? 'disabled' : ''}>${esc(L.c[i])}</button>`).join('');
        $('#tip', el).textContent = got ? 'Muito bem! Qual vem agora?' : 'Toque no pedaço que começa o versículo.';
      }
      el.addEventListener('click', e => {
        if (done) return;
        const b = e.target.closest('[data-c]'); if (!b || b.disabled) return;
        const i = +b.dataset.c;
        if (i === got || L.c[i] === L.c[got]) { if (i !== got) { const j = order.indexOf(got); order[order.indexOf(i)] = got; order[j] = i; } got++; sfx.good(); render(); if (got === L.c.length) end(); }
        else { mist++; sfx.bad(); b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); }
      });
      render();
    }
  });
})();
