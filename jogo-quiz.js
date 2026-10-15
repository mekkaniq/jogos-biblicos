/* Quiz Bíblico — no estilo do Show do Milhão: 16 perguntas, ajudas, sem tempo */
(function () {
  const { $, $$, esc, I, load, save, route, go, setScene, setLast, modal, sfx, confetti, toast, openSettings } = App;
  const Q = () => window.QUIZ_DATA.questions;
  const byId = id => Q().find(q => q.id === id);
  const PRIZE = [1e3, 2e3, 3e3, 4e3, 5e3, 1e4, 2e4, 3e4, 4e4, 5e4, 1e5, 2e5, 3e5, 4e5, 5e5, 1e6];
  const LEVEL = i => i < 5 ? 1 : i < 10 ? 2 : 3;
  const LVNAME = ['', 'Fácil', 'Médio', 'Difícil'];
  const money = v => v >= 1e6 ? '1 milhão' : v >= 1e3 ? (v / 1e3) + ' mil' : String(v);
  const LET = ['A', 'B', 'C', 'D'];
  const st = () => { const s = load(); if (!s.quiz.seen) s.quiz.seen = {}; return s.quiz; };
  const topbar = (back, title, sub) => `<div class="topbar"><button class="icon-btn" data-back="${back}" aria-label="Voltar">${I.back}</button><div class="ttl"><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</div><button class="icon-btn" data-settings aria-label="Ajustes">${I.gear}</button></div>`;
  function common(el) { el.addEventListener('click', e => { const b = e.target.closest('[data-back]'); if (b) go(b.dataset.back); if (e.target.closest('[data-settings]')) openSettings(); }); }
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // escolhe uma pergunta ainda não vista daquele nível (quando acabam, recomeça o ciclo)
  function pick(level, avoid) {
    const s = st();
    let pool = Q().filter(q => q.l === level && !s.seen[q.id] && !avoid.includes(q.id));
    if (!pool.length) { Q().filter(q => q.l === level).forEach(q => delete s.seen[q.id]); pool = Q().filter(q => q.l === level && !avoid.includes(q.id)); }
    const q = pool[Math.floor(Math.random() * pool.length)];
    s.seen[q.id] = 1; return q.id;
  }
  function newRun() {
    const used = [];
    const qs = PRIZE.map((_, i) => { const id = pick(LEVEL(i), used); used.push(id); return id; });
    const s = st(); s.runs = (s.runs || 0) + 1;
    s.cur = { qs, i: 0, order: shuffle([0, 1, 2, 3]), skips: 3, half: 1, crowd: 1, cut: [], bars: null, ans: null, end: null };
    save();
  }

  // ---------- Tela inicial do quiz ----------
  route(/^\/quiz$/, (el) => {
    setScene('palacio');
    const s = st(); const cur = s.cur && !s.cur.end ? s.cur : null;
    el.innerHTML = `${topbar('#/', 'QUIZ BÍBLICO', 'Rumo ao milhão')}
      <section class="hero" style="background-image:url('palacio.svg');min-height:250px">
        <div class="gicon" style="width:58px;height:58px;border-radius:16px;display:grid;place-items:center;background:var(--gold-grad);color:#3b2a0c;margin-bottom:6px">${I.quiz.replace('<svg', '<svg style="width:32px;height:32px"')}</div>
        <h1 style="font-size:2.1rem"><span class="gold-text">Quiz Bíblico</span></h1>
        <div class="sub">16 perguntas, das fáceis às difíceis. Responda com calma: não tem relógio!</div>
      </section>
      <button class="btn btn-gold btn-block" style="margin:14px 0 6px" data-play>${cur ? `Continuar · pergunta ${cur.i + 1}` : 'Começar uma partida'} ${I.arrow}</button>
      ${cur ? `<button class="btn btn-ghost btn-block" style="margin:6px 0" data-new>Começar outra partida</button>` : ''}
      <div class="qz-stats parch">
        <div><b>${money(s.best || 0)}</b><span>maior prêmio</span></div>
        <div><b>${s.right || 0}</b><span>acertos</span></div>
        <div><b>${s.wins || 0}</b><span>${(s.wins || 0) === 1 ? 'milhão' : 'milhões'}</span></div>
      </div>
      <div class="section-title"><h2>Os prêmios</h2><span>em pontos</span></div>
      <div class="qz-ladder-mini parch">${[1, 2, 3].map(l => `<div><i class="lv lv${l}">${LVNAME[l]}</i><span>${PRIZE.filter((_, i) => LEVEL(i) === l).map(v => `<b>${money(v)}</b>`).join(' · ')}</span></div>`).join('')}</div>
      <div class="howto parch"><h3>Como jogar</h3><ol>
        <li>Toque na resposta e depois em <b>Confirmar</b>. Não tem tempo: pense com calma.</li>
        <li>A cada acerto você sobe um degrau e lê a <b>explicação com o versículo</b>.</li>
        <li><b>Ajudas:</b> pular a pergunta (3 vezes), eliminar duas erradas e perguntar aos irmãos da igreja.</li>
        <li>Se não tiver certeza, pode <b>parar</b> e levar os pontos que já ganhou.</li>
        <li>Se errar, leva a metade. Acertando as 16, você ganha <b>1 milhão</b>! 👑</li>
      </ol></div>
      <div class="signature"><b>Feito por Eduardo de Souza</b><i>com muito amor, para a minha família. ❤️</i></div>`;
    common(el);
    el.addEventListener('click', e => {
      if (e.target.closest('[data-play]')) { if (!cur) newRun(); sfx.tap(); go('#/quiz/jogo'); }
      if (e.target.closest('[data-new]')) { newRun(); sfx.tap(); go('#/quiz/jogo'); }
    });
  });

  // ---------- Partida ----------
  route(/^\/quiz\/jogo$/, (el) => {
    const s = st();
    if (!s.cur) newRun();
    setScene('palacio');
    let C = s.cur;
    const persist = () => { s.cur = C; save(); };

    function render() {
      if (C.end) return renderEnd();
      const q = byId(C.qs[C.i]); const lv = LEVEL(C.i);
      setLast('quiz', '#/quiz/jogo', `Quiz Bíblico · pergunta ${C.i + 1}`, `Valendo ${money(PRIZE[C.i])} pontos`);
      const answered = C.ans !== null; const right = answered && C.ans === 0;
      const stopV = C.i ? PRIZE[C.i - 1] : 0, wrongV = Math.floor(stopV / 2);
      el.innerHTML = `${topbar('#/quiz', `PERGUNTA ${C.i + 1} DE 16`, `${LVNAME[lv]} · valendo ${money(PRIZE[C.i])}`)}
        <div class="qz-steps" aria-hidden="true">${PRIZE.map((_, i) => `<i class="${i < C.i || (i === C.i && right) ? 'ok' : i === C.i ? 'now' : ''} lv${LEVEL(i)}"></i>`).join('')}</div>
        <div class="qz-values">
          <div><small>Parar</small><b>${money(stopV)}</b></div>
          <div class="mid"><small>Acertar</small><b>${money(PRIZE[C.i])}</b></div>
          <div><small>Errar</small><b>${money(wrongV)}</b></div>
        </div>
        <div class="qz-q parch"><span class="lv lv${lv}">${LVNAME[lv]}</span><p>${esc(q.q)}</p></div>
        <div class="qz-opts">${C.order.map((oi, k) => {
          const cut = C.cut.includes(oi);
          const cls = answered ? (oi === 0 ? 'right' : oi === C.ans ? 'wrong' : 'dim') : (C.pick === oi ? 'sel' : '');
          return `<button class="qz-opt ${cls} ${cut ? 'cut' : ''}" data-o="${oi}" ${cut || answered ? 'disabled' : ''}>
            <span class="l">${LET[k]}</span><span class="t">${esc(q.o[oi])}</span>
            ${C.bars ? `<span class="bar"><i style="width:${C.bars[oi]}%"></i></span><em>${C.bars[oi]}%</em>` : ''}
          </button>`;
        }).join('')}</div>
        <div id="qzAct">${answered ? explain(q, right) : C.pick !== undefined && C.pick !== null ? `<button class="btn btn-gold btn-block" data-confirm>Confirmar a resposta ${LET[C.order.indexOf(C.pick)]}</button>` : `<p class="qz-tip">Toque na resposta que você acha certa.</p>`}</div>
        ${answered ? '' : `<div class="qz-help">
          <button class="btn btn-ghost" data-skip ${C.skips ? '' : 'disabled'}>${I.skip}<span>Pular</span><em class="badge-n">${C.skips}</em></button>
          <button class="btn btn-ghost" data-half ${C.half && !C.cut.length ? '' : 'disabled'}>${I.half}<span>Eliminar 2</span></button>
          <button class="btn btn-ghost" data-crowd ${C.crowd && !C.bars ? '' : 'disabled'}>${I.people}<span>Irmãos</span></button>
          <button class="btn btn-ghost" data-stop>${I.stop}<span>Parar</span></button>
        </div>`}`;
      if (answered) { const a = $('#qzAct', el); setTimeout(() => a.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80); }
    }
    function explain(q, right) {
      const last = C.i === PRIZE.length - 1;
      return `<div class="discovery parch qz-exp ${right ? 'good' : 'bad'}">
          <div class="lbl">${right ? 'Resposta certa!' : 'Não foi desta vez'}</div>
          <h3>${right ? '✓ ' : ''}${esc(q.o[0])}</h3>
          <p>${esc(q.e)}</p>
          <div class="ref">${I.book}<span>${esc(q.r)}</span></div>
        </div>
        ${right ? `<button class="btn btn-gold btn-block" data-next>${last ? 'Receber o prêmio 👑' : `Próxima pergunta · ${money(PRIZE[C.i + 1])}`} ${I.arrow}</button>
          ${last ? '' : `<button class="btn btn-ghost btn-block" style="margin-top:8px" data-stopnow>Parar aqui e levar ${money(PRIZE[C.i])}</button>`}`
          : `<button class="btn btn-gold btn-block" data-finish>Ver o resultado ${I.arrow}</button>`}`;
    }
    function finish(kind, value) {
      C.end = { kind, value }; const s2 = st();
      s2.best = Math.max(s2.best || 0, value); if (kind === 'win') s2.wins = (s2.wins || 0) + 1;
      persist(); load().last = null; save(); renderEnd();
      if (kind === 'win') { confetti(); sfx.win(); } else if (value) sfx.good();
    }
    function renderEnd() {
      const E = C.end; const s2 = st();
      const title = E.kind === 'win' ? 'Você ganhou 1 milhão!' : E.kind === 'stop' ? 'Você parou na hora certa' : 'Fim da partida';
      const msg = E.kind === 'win' ? 'Acertou as 16 perguntas! Que conhecimento da Palavra! 👏' : E.kind === 'stop' ? `Você respondeu ${C.i} ${C.i === 1 ? 'pergunta' : 'perguntas'} e decidiu levar o prêmio.` : `Você acertou ${C.i} ${C.i === 1 ? 'pergunta' : 'perguntas'}. Cada erro é uma chance de aprender algo novo.`;
      el.innerHTML = `${topbar('#/quiz', 'QUIZ BÍBLICO', 'Resultado')}
        <div class="qz-end dark-card">
          <div class="badge">${E.kind === 'win' ? '👑' : E.kind === 'stop' ? '🏛️' : '📖'}</div>
          <h2><span class="gold-text">${title}</span></h2>
          <div class="prize">${money(E.value)}<small>pontos</small></div>
          <p>${msg}</p>
          ${E.value && E.value >= (s2.best || 0) ? '<div class="pill rec">★ Seu melhor resultado</div>' : `<div class="pill">Recorde: ${money(s2.best || 0)}</div>`}
        </div>
        <button class="btn btn-gold btn-block" style="margin-top:14px" data-again>Jogar outra partida ${I.arrow}</button>
        <button class="btn btn-ghost btn-block" style="margin-top:8px" data-back="#/quiz">Voltar</button>
        <div class="verse-foot parch" style="margin-top:14px"><div class="ic">${I.book}</div><p>“Toda a Escritura é inspirada por Deus e útil para o ensino.”<cite>2 Timóteo 3:16</cite></p></div>`;
    }
    common(el);
    el.addEventListener('click', e => {
      const t = e.target;
      const o = t.closest('[data-o]');
      if (o && !o.disabled && C.ans === null) { C.pick = +o.dataset.o; sfx.tap(); persist(); render(); $('[data-confirm]', el)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); return; }
      if (t.closest('[data-confirm]')) {
        C.ans = C.pick; C.pick = null;
        if (C.ans === 0) { st().right = (st().right || 0) + 1; sfx.good(); } else sfx.bad();
        persist(); render(); return;
      }
      if (t.closest('[data-next]')) {
        if (C.i === PRIZE.length - 1) { C.i++; return finish('win', PRIZE[PRIZE.length - 1]); }
        C.i++; C.ans = null; C.pick = null; C.cut = []; C.bars = null; C.order = shuffle([0, 1, 2, 3]); persist(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); sfx.tap(); return;
      }
      if (t.closest('[data-stopnow]')) { C.i++; return finish('stop', PRIZE[C.i - 1]); }
      if (t.closest('[data-finish]')) { const v = C.i ? Math.floor(PRIZE[C.i - 1] / 2) : 0; return finish('wrong', v); }
      if (t.closest('[data-again]')) { newRun(); C = st().cur; sfx.tap(); render(); window.scrollTo(0, 0); return; }
      if (t.closest('[data-skip]') && C.skips) {
        C.skips--; const id = pick(LEVEL(C.i), C.qs); C.qs[C.i] = id; C.pick = null; C.cut = []; C.bars = null; C.order = shuffle([0, 1, 2, 3]);
        persist(); render(); toast(`Pergunta trocada. Restam ${C.skips} ${C.skips === 1 ? 'pulo' : 'pulos'}.`); return;
      }
      if (t.closest('[data-half]') && C.half && !C.cut.length) {
        C.half = 0; C.cut = shuffle([1, 2, 3]).slice(0, 2); if (C.cut.includes(C.pick)) C.pick = null;
        persist(); render(); sfx.good(); return;
      }
      if (t.closest('[data-crowd]') && C.crowd && !C.bars) {
        C.crowd = 0; C.bars = crowd(LEVEL(C.i)); persist(); render(); toast('Os irmãos da igreja deram a opinião deles.'); return;
      }
      if (t.closest('[data-stop]')) {
        const v = C.i ? PRIZE[C.i - 1] : 0;
        const m = modal(`<div class="badge">🏛️</div><h2>Parar agora?</h2><p>Você leva <b>${money(v)}</b> pontos e a partida termina.</p><div class="actions"><button class="btn btn-gold" data-y>Sim, parar</button><button class="btn btn-ghost" data-close>Continuar jogando</button></div>`);
        m.el.addEventListener('click', ev => { if (ev.target.closest('[data-y]')) { m.close(); finish('stop', v); } });
      }
    });
    // palpite dos irmãos: quanto mais difícil, mais dividido (e, às vezes, enganado)
    function crowd(lv) {
      const live = [0, 1, 2, 3].filter(x => !C.cut.includes(x));
      const trust = [0, .9, .75, .6][lv];
      const fav = Math.random() < trust ? 0 : live.filter(x => x)[Math.floor(Math.random() * (live.length - 1))];
      const w = live.map(x => x === fav ? 40 + Math.random() * 30 : 5 + Math.random() * 18);
      if (fav !== 0) w[live.indexOf(0)] += 10;
      const sum = w.reduce((a, b) => a + b, 0); const out = [0, 0, 0, 0];
      live.forEach((x, k) => out[x] = Math.round(w[k] / sum * 100));
      const diff = 100 - out.reduce((a, b) => a + b, 0); out[fav] += diff;
      return out;
    }
    render();
  });
})();
