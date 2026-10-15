/* Ligações Bíblicas — encontre os grupos de quatro palavras ligadas entre si */
(function () {
  const { $, $$, esc, I, save, route, go, setLast, toast, sfx } = App;
  const K = App.kit;
  const D = () => window.LIGACOES_DATA;
  const SCN = ['jardim', 'deserto', 'monte', 'cidade', 'aurora', 'palacio', 'mar', 'galileia', 'campo', 'noite', 'confins'];
  const scene = n => SCN[(n - 1) % SCN.length];
  const S = () => K.st('ligacoes', { cur: {} });
  const fs = w => w.length > 10 ? 'xs' : w.length > 7 ? 'sm' : '';

  route(/^\/ligacoes$/, el => {
    const ls = D().levels.map(l => ({ n: l.n, label: `${l.g.length} grupos`, scene: scene(l.n) }));
    K.home(el, {
      id: 'ligacoes', title: 'LIGAÇÕES', sub: 'Bíblicas', scene: 'campo', icon: I.link, heroTitle: 'Ligações Bíblicas', heroSub: 'Descubra o que as palavras têm em comum e forme os grupos.', unit: 'fase', unitPl: 'fases',
      groups: [{ name: 'Primeiros passos', levels: ls.slice(0, 10) }, { name: 'Pede atenção', levels: ls.slice(10, 25) }, { name: 'Para os sábios', levels: ls.slice(25) }],
      levels: ls,
      howto: ['Toque em <b>quatro palavras</b> que tenham algo em comum e depois em <b>Confirmar</b>.', 'Quando acertar, o grupo se junta e aparece a explicação com o versículo.', 'Errou? Sem problema: as palavras continuam lá. Se faltar só uma, o jogo avisa.', 'Cuidado com as pegadinhas: uma palavra pode parecer de dois grupos!', 'Use a <b>dica</b> para ver o nome de um grupo. Menos erros e dicas, mais estrelas.']
    });
  });

  route(/^\/ligacoes\/(\d+)$/, (el, nStr) => {
    const L = D().levels.find(l => l.n === +nStr); if (!L) return go('#/ligacoes');
    App.setScene(scene(L.n));
    setLast('ligacoes', '#/ligacoes/' + L.n, `Ligações · fase ${L.n}`, `${L.g.length} grupos para descobrir`);
    const s = S(); const P = s.cur[L.n] = s.cur[L.n] || { found: [], mist: 0, hints: [], order: null };
    const all = L.g.flatMap((g, gi) => g.w.map(w => ({ w, gi })));
    if (!P.order || P.order.length !== all.length) P.order = K.shuffle(all.map((_, i) => i));
    let sel = [];
    const guessed = new Set(); // combinações já tentadas
    el.innerHTML = `${K.topbar('#/ligacoes', `FASE ${L.n}`, 'Ligações Bíblicas')}
      <div class="lg-info"><span>Forme <b>${L.g.length} grupos</b> de 4 palavras</span><span class="lg-mist" id="mist"></span></div>
      <div id="found" class="lg-found"></div>
      <div id="grid" class="lg-grid"></div>
      <div class="lg-tools"><button class="btn btn-ghost" data-shuf>${I.shuffle} Misturar</button><button class="btn btn-ghost" data-clear>Limpar</button><button class="btn btn-ghost" data-hint>${I.bulb} Dica</button></div>
      <button class="btn btn-gold btn-block" data-ok disabled>Confirmar grupo</button>
      <div id="disc"></div>`;
    K.common(el);
    function render() {
      $('#found', el).innerHTML = P.found.map(gi => { const g = L.g[gi]; return `<button class="lg-group c${L.g.indexOf(g) % 4}" data-g="${gi}"><b>${esc(g.name)}</b><span>${g.w.map(esc).join(' · ')}</span></button>`; }).join('');
      const left = P.order.filter(i => !P.found.includes(all[i].gi));
      $('#grid', el).innerHTML = left.map(i => `<button class="lg-t ${fs(all[i].w)} ${sel.includes(i) ? 'sel' : ''}" data-i="${i}">${esc(all[i].w)}</button>`).join('');
      $('[data-ok]', el).disabled = sel.length !== 4;
      $('[data-ok]', el).textContent = sel.length === 4 ? 'Confirmar grupo' : `Escolha 4 palavras (${sel.length}/4)`;
      const hintsLeft = L.g.length - 1 - P.hints.length;
      $('[data-hint]', el).disabled = hintsLeft <= 0;
      $('#mist', el).innerHTML = P.mist ? `${P.mist} ${P.mist === 1 ? 'erro' : 'erros'}` : '';
      const hintTxt = P.hints.filter(gi => !P.found.includes(gi)).map(gi => `<div class="lg-hint">💡 Um dos grupos é: <b>${esc(L.g[gi].name)}</b></div>`).join('');
      if (hintTxt) $('#disc', el).innerHTML = hintTxt;
    }
    function explain(gi, pop) {
      const g = L.g[gi];
      $('#disc', el).innerHTML = `<div class="discovery parch ${pop ? 'pop' : ''}"><div class="lbl">Ligação descoberta</div><h3>${esc(g.name)}</h3><p>${esc(g.e)}</p><div class="ref">${I.book}<span>${esc(g.r)}</span></div></div>`;
    }
    function confirm() {
      if (sel.length !== 4) return;
      const key = sel.slice().sort().join(',');
      if (guessed.has(key)) { toast('Você já tentou essas quatro.'); return; }
      guessed.add(key);
      const cnt = {}; sel.forEach(i => cnt[all[i].gi] = (cnt[all[i].gi] || 0) + 1);
      const top = Math.max(...Object.values(cnt));
      if (top === 4) {
        const gi = all[sel[0]].gi; P.found.push(gi); sel = []; save(); sfx.good(); render(); explain(gi, true);
        if (P.found.length === L.g.length) {
          const used = P.mist + P.hints.length; const stars = used <= 1 ? 3 : used <= 3 ? 2 : 1;
          delete s.cur[L.n]; save();
          setTimeout(() => K.finish({ id: 'ligacoes', n: L.n, stars, title: 'Todas as ligações!', text: used ? `Você terminou com ${P.mist} ${P.mist === 1 ? 'erro' : 'erros'}${P.hints.length ? ` e ${P.hints.length} ${P.hints.length === 1 ? 'dica' : 'dicas'}` : ''}.` : 'Sem nenhum erro! 👏', learned: L.g.map(g => `<div><b>${esc(g.name)}</b> — <i style="color:var(--gold-700)">${esc(g.r)}</i></div>`).join(''), next: L.n < D().levels.length ? '#/ligacoes/' + (L.n + 1) : null }), 900);
        }
      } else {
        P.mist++; save(); sfx.bad();
        $$('.lg-t.sel', el).forEach(t => { t.classList.remove('shake'); void t.offsetWidth; t.classList.add('shake'); });
        toast(top === 3 ? 'Quase! Falta só uma palavra.' : 'Esse grupo não está certo. Tente outra combinação.');
        render();
      }
    }
    el.addEventListener('click', e => {
      const t = e.target.closest('.lg-t');
      if (t) { const i = +t.dataset.i; if (sel.includes(i)) sel = sel.filter(x => x !== i); else if (sel.length < 4) sel.push(i); sfx.tap(); render(); return; }
      if (e.target.closest('[data-ok]')) return confirm();
      if (e.target.closest('[data-clear]')) { sel = []; render(); }
      if (e.target.closest('[data-shuf]')) { P.order = K.shuffle(P.order); save(); sfx.tap(); render(); }
      const g = e.target.closest('[data-g]'); if (g) explain(+g.dataset.g, false);
      if (e.target.closest('[data-hint]')) {
        const opts = L.g.map((_, gi) => gi).filter(gi => !P.found.includes(gi) && !P.hints.includes(gi));
        if (!opts.length) return toast('Não há mais dicas nesta fase.');
        P.hints.push(opts[0]); save(); sfx.good(); render();
      }
    });
    render();
    if (P.found.length) explain(P.found[P.found.length - 1], false);
  });
})();
