/* Edição de Natal — "Caminho até Belém": histórias (mesmo jeito do Kids) e desenhos para colorir. Sem pressa, sem contagem de dias. */
(function () {
  const { I, esc, route, go, kit: K } = App;
  const st = () => K.st('kids', { band: 'small', stickers: {}, voice: 1 });
  const cl = () => K.st('colorir', { p: {}, trk: 1 });

  route(/^\/natal$/, el => {
    App.setScene('noite');
    const stories = window.NATAL_DATA.stories, s = st(), c = cl();
    const draws = window.COLORIR_DATA.items.filter(x => x.t === 4);
    const doneS = stories.filter(x => s.stickers[x.id]).length, doneD = draws.filter(x => (c.done || {})[x.n]).length;
    el.innerHTML = `
      <div class="topbar"><button class="icon-btn" data-back="#/" aria-label="Voltar">${I.back}</button><div class="ttl"><b>EDIÇÃO DE NATAL</b><small>Caminho até Belém</small></div><span style="width:44px"></span></div>
      <section class="nt-hero"><i class="nt-glow"></i><div class="nt-big">⭐</div>
        <h1>Caminho até Belém</h1>
        <p class="nt-verse">“Hoje, na cidade de Davi, vos nasceu o Salvador, que é Cristo, o Senhor.”<cite>Lucas 2:11 · ACF</cite></p>
        <small>Sem pressa e sem contagem de dias: siga no seu ritmo.</small></section>
      <div class="section-title"><h2>As histórias</h2><span>${doneS} de ${stories.length}</span></div>
      <div class="nt-list">${stories.map((x, i) => `<button class="nt-story parch ${s.stickers[x.id] ? 'ok' : ''}" data-go="#/kids/h/${x.id}"><span class="nt-n">${i + 1}</span><span class="nt-ic">${x.icon}</span><span class="nt-tx"><b>${esc(x.name)}</b><small>${I.book} ${esc(x.ref)}</small></span><em>${s.stickers[x.id] ? '✓' : ''}</em></button>`).join('')}</div>
      <div class="section-title"><h2>Colorir o Natal</h2><span>${doneD} de ${draws.length}</span></div>
      <div class="nt-draws">${draws.map(x => `<button class="nt-draw ${(c.done || {})[x.n] ? 'ok' : ''}" data-go="#/colorir/${x.n}"><img src="colorir-${x.n}.th.webp" alt="" loading="lazy"><b>${esc(x.nome)}</b><small>${esc(x.ref)}</small></button>`).join('')}</div>
      <p class="nt-foot">Todas as histórias apontam para Jesus, o Salvador que Deus prometeu e enviou por amor a nós.</p>`;
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-back]'); if (b) { go(b.dataset.back); return; }
      const g = e.target.closest('[data-go]'); if (g) go(g.dataset.go);
    });
  });
})();
