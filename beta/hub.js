/* Tela inicial: desafios do dia e todos os jogos */
(function () {
  const { I, cross, esc, load, route, go, openSettings, installHelp } = App;
  const cnt = name => Object.values((load()[name] || {}).done || {}).filter(Boolean).length;

  function stats() {
    const st = load();
    const C = window.CACA_DATA, X = window.CRUZADA_DATA, K = window.CARTAS_DATA;
    const q = st.quiz || {};
    return [
      { id: 'caca', name: 'Caça-Palavras', sub: 'Ache as palavras e aprenda o que significam.', icon: I.search, scene: 'cidade', done: C.phases.filter(p => App.caca.isDone(p)).length, total: C.phases.length },
      { id: 'cruzada', name: 'Palavra Cruzada', sub: 'Responda às pistas com teclado grande.', icon: I.grid, scene: 'jardim', done: X.challenges.filter(c => st.cruzada.stars[c.id]).length, total: X.challenges.length },
      { id: 'quiz', name: 'Quiz Bíblico', sub: '16 perguntas rumo ao milhão.', icon: I.quiz, scene: 'palacio', note: q.best ? `Recorde: ${q.best >= 1e6 ? '1 milhão' : (q.best / 1e3) + ' mil'}` : 'Sem relógio!' },
      { id: 'ligacoes', name: 'Ligações', sub: 'Forme grupos de palavras ligadas.', icon: I.link, scene: 'campo', done: cnt('ligacoes'), total: window.LIGACOES_DATA.levels.length, isNew: 1 },
      { id: 'versiculo', name: 'Complete o Versículo', sub: 'Guarde a Palavra no coração.', icon: I.book, scene: 'aurora', done: cnt('versiculo'), total: window.VERSOS_DATA.levels.length, isNew: 1 },
      { id: 'roda', name: 'Roda de Letras', sub: 'Deslize o dedo e forme palavras.', icon: I.wheel, scene: 'mar', done: cnt('roda'), total: window.RODA_DATA.levels.length, isNew: 1 },
      { id: 'quem', name: 'Quem Sou Eu?', sub: 'Descubra o personagem pelas pistas.', icon: I.who, scene: 'deserto', done: cnt('quem'), total: window.QUEM_DATA.levels.length, isNew: 1 },
      { id: 'tempo', name: 'Linha do Tempo', sub: 'Coloque a história em ordem.', icon: I.timeline, scene: 'monte', done: cnt('tempo'), total: window.TEMPO_DATA.levels.length, isNew: 1 },
      { id: 'memoria', name: 'Jogo da Memória', sub: 'Junte cada história à sua carta.', icon: I.brain, scene: 'galileia', done: cnt('memoria'), total: window.MEMORIA_DATA.levels.length, isNew: 1 },
      { id: 'cartas', name: 'Solitaire Bíblico', sub: 'Junte as cartas de cada história.', icon: I.cards, scene: 'noite', done: K.levels.filter(l => st.cartas.done[l.n]).length, total: K.levels.length }
    ];
  }

  route(/^\/$/, (el) => {
    App.setScene('jardim');
    const st = load();
    const games = stats();
    const last = st.last;
    const scenes = { palavra: 'aurora', ...Object.fromEntries(games.map(g => [g.id, g.scene])) };
    const standalone = window.navigator.standalone || matchMedia('(display-mode: standalone)').matches;
    const pd = App.palavra.today(), cd = App.caca.dailyDone();
    el.innerHTML = `
      <section class="hero" style="background-image:url('tumba.jpg');background-position:center 38%;min-height:340px">
        ${cross}
        <h1><span class="gold-text">Jogos Bíblicos</span></h1>${window.__BETA ? '<div class="beta-tag">VERSÃO BETA · TESTE</div>' : ''}
        <div class="kicker">APRENDA · LEMBRE · DESCUBRA</div>
        <div class="verse">“Escondi a tua palavra no meu coração, para eu não pecar contra ti.”<cite>Salmos 119:11 · ACF</cite></div>
      </section>
      ${last ? `<button class="continue parch" data-go="${esc(last.route)}">
          <div class="thumb" style="background-image:url('${scenes[last.game] || 'jardim'}.svg')"></div>
          <div class="txt"><small>Continuar de onde parei</small><b>${esc(last.label)}</b><span>${esc(last.sub || '')}</span></div>
          <span class="btn btn-gold" style="min-height:46px;padding:0 16px">${I.arrow}</span>
        </button>` : ''}
      <div class="section-title"><h2>Todos os dias</h2><span>${(pd.done ? 1 : 0) + (cd ? 1 : 0)} de 2 feitos</span></div>
      <div class="today-row">
        <button class="today parch ${pd.done ? 'ok' : ''}" data-go="#/palavra"><span class="ti">${I.sun}</span><b>Palavra do Dia</b><small>${pd.done ? (pd.win ? `Acertou em ${pd.tries}/6 ✓` : 'Feita ✓') : `nº ${pd.num} · 5 letras`}</small><em class="nw">${pd.done ? '' : 'NOVO'}</em></button>
        <button class="today parch ${cd ? 'ok' : ''}" data-go="#/caca/dia"><span class="ti">${I.search}</span><b>Desafio do Dia</b><small>${cd ? 'Feito ✓' : 'Caça-palavras'}</small></button>
      </div>
      <button class="kids-banner" data-go="#/kids"><img src="lumi-oi.webp" alt="Lumi"><div><b>Cantinho Kids</b><span>12 histórias da Bíblia com a Lumi, para crianças de 4 a 10 anos</span></div><em class="nw">NOVO</em></button>
      <div class="section-title"><h2>Escolha um jogo</h2><span>${games.length + 1} jogos</span></div>
      <div class="gtiles">${games.map(g => `
        <button class="gtile" data-go="#/${g.id}" style="background-image:url('${g.scene}.svg')">
          ${g.isNew && !g.done ? '<em class="nw">NOVO</em>' : ''}
          <span class="gi">${g.icon}</span>
          <b>${g.name}</b><small>${g.sub}</small>
          ${g.note ? `<span class="pg"><span>${g.note}</span></span>` : `<span class="pg"><i><u style="width:${Math.round(g.done / g.total * 100)}%"></u></i><span>${g.done}/${g.total}</span></span>`}
        </button>`).join('')}</div>
      <div class="signature"><span class="divider">✦</span><b>Feito por Eduardo de Souza</b><i>com muito amor, para a minha família. ❤️</i></div>
      <div class="footer-links">
        <button class="btn" data-settings>${I.gear} Ajustes</button>
        ${standalone ? '' : `<button class="btn" data-install>${I.share} Instalar no iPhone</button>`}
      </div>
      <p class="credit">Textos bíblicos: Almeida Corrigida Fiel (ACF), fonte oficial deste app · <button class="lnk" data-about>Sobre</button> · Foto da capa: Pisit Heng / Unsplash · versão claude v1.4${window.__BETA ? ' beta ' + window.__BETA : ''}</p>`;
    el.addEventListener('click', e => {
      const g = e.target.closest('[data-go]'); if (g) { App.sfx.tap(); go(g.dataset.go); }
      if (e.target.closest('[data-settings]')) openSettings();
      if (e.target.closest('[data-install]')) installHelp();
      if (e.target.closest('[data-about]')) App.about();
    });
  });
})();
