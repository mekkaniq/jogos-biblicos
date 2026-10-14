/* Tela inicial: os três jogos */
(function () {
  const { I, cross, esc, load, route, go, openSettings, installHelp } = App;

  function stats() {
    const st = load();
    const C = window.CACA_DATA, X = window.CRUZADA_DATA, K = window.CARTAS_DATA;
    const cacaDone = C.phases.filter(p => App.caca.isDone(p)).length;
    const cruzDone = X.challenges.filter(c => st.cruzada.stars[c.id]).length;
    const cartDone = K.levels.filter(l => st.cartas.done[l.n]).length;
    return [
      { id: 'cruzada', name: 'Palavra Cruzada', sub: 'Responda às pistas e complete a grade, com teclado grande.', icon: I.grid, scene: 'jardim', done: cruzDone, total: X.challenges.length, unit: 'desafios' },
      { id: 'caca', name: 'Caça-Palavras', sub: 'Encontre as palavras e descubra a história de cada uma.', icon: I.search, scene: 'cidade', done: cacaDone, total: C.phases.length, unit: 'fases' },
      { id: 'cartas', name: 'Solitaire Bíblico', sub: 'Junte as cartas de cada história bíblica.', icon: I.cards, scene: 'aurora', done: cartDone, total: K.levels.length, unit: 'partidas' }
    ];
  }

  route(/^\/$/, (el) => {
    App.setScene('jardim');
    const st = load();
    const games = stats();
    const last = st.last;
    const standalone = window.navigator.standalone || matchMedia('(display-mode: standalone)').matches;
    el.innerHTML = `
      <section class="hero" style="background-image:url('tumba.jpg');background-position:center 38%;min-height:360px">
        ${cross}
        <h1><span class="gold-text">Jogos Bíblicos</span></h1>
        <div class="kicker">APRENDA · LEMBRE · DESCUBRA</div>
        <div class="verse">“Guardo no coração as tuas palavras, para não pecar contra ti.”<cite>Salmos 119:11</cite></div>
      </section>
      ${last ? `<button class="continue parch" data-go="${esc(last.route)}">
          <div class="thumb" style="background-image:url('${games.find(g => g.id === last.game)?.scene || 'jardim'}.svg')"></div>
          <div class="txt"><small>Continuar de onde parei</small><b>${esc(last.label)}</b><span>${esc(last.sub || '')}</span></div>
          <span class="btn btn-gold" style="min-height:46px;padding:0 16px">${I.arrow}</span>
        </button>` : ''}
      <div class="section-title"><h2>Escolha um jogo</h2><span>3 jogos</span></div>
      ${games.map(g => `
        <button class="game-card" data-go="#/${g.id}" style="background-image:url('${g.scene}.svg')">
          <div class="in">
            <div class="gicon">${g.icon}</div>
            <h3>${g.name}</h3>
            <p>${g.sub}</p>
            <div class="meta"><div class="bar"><i style="width:${Math.round(g.done / g.total * 100)}%"></i></div><span>${g.done}/${g.total} ${g.unit}</span></div>
          </div>
          <span class="go btn btn-gold" style="min-height:46px;padding:0 18px">Jogar</span>
        </button>`).join('')}
      <div class="signature"><span class="divider">✦</span><b>Feito por Eduardo de Souza</b><i>com muito amor, para a minha família. ❤️</i></div>
      <div class="footer-links">
        <button class="btn" data-settings>${I.gear} Ajustes</button>
        ${standalone ? '' : `<button class="btn" data-install>${I.share} Instalar no iPhone</button>`}
      </div>
      <p class="credit">Textos bíblicos: Almeida Revista e Atualizada · Foto da capa: Pisit Heng / Unsplash · versão 1.0</p>`;
    el.addEventListener('click', e => {
      const g = e.target.closest('[data-go]'); if (g) { App.sfx.tap(); go(g.dataset.go); }
      if (e.target.closest('[data-settings]')) openSettings();
      if (e.target.closest('[data-install]')) installHelp();
    });
  });
})();
