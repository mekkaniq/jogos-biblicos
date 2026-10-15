/* Caça-Palavras Bíblico */
(function () {
  const { $, $$, esc, pad, I, cross, load, save, route, go, setScene, setLast, modal, sfx, confetti, toast, openSettings } = App;
  const D = () => window.CACA_DATA;
  const COLORS = [['#cfe5bf', '#8fbb72'], ['#f5df9e', '#d2ac46'], ['#cadcec', '#7fa6c9'], ['#efcdc6', '#cc8b7c'], ['#ddcde8', '#a98bc2'], ['#f3d4b2', '#d39a5c'], ['#cfe6e2', '#7fb8ad'], ['#e7e0b0', '#b5a54e']];

  // progresso guardado pelas palavras encontradas (e não pela posição), para sobreviver a revisões de conteúdo
  const pw = w => w.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z]/g, '');
  function migrate() {
    const st = load().caca; if (st.v2) return;
    st.fw = st.fw || {};
    Object.entries(st.found || {}).forEach(([id, f]) => { if (f === 'all' || (Array.isArray(f) && f.length >= 8)) st.fw[id] = 'all'; });
    st.v2 = 1; save();
  }
  const fw = () => { migrate(); return load().caca.fw; };
  function isDone(p) { const f = fw()[p.id]; return f === 'all' || (Array.isArray(f) && p.w.every(w => f.includes(pw(w.w)))); }
  function nextPhase() { return D().phases.find(p => !isDone(p)) || D().phases[D().phases.length - 1]; }
  let dictCache = null;
  function dict() {
    if (dictCache) return dictCache; dictCache = {};
    const pl = x => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z]/g, '');
    const add = w => { const k = pl(w.w); if (k.length >= 3 && !dictCache[k]) dictCache[k] = { w: w.w, d: w.d, r: w.r }; };
    D().phases.forEach(p => p.w.forEach(add)); (D().extra || []).forEach(add);
    return dictCache;
  }
  App.caca = { isDone, dict };

  const topbar = (back, title, sub, right = '') => `<div class="topbar"><button class="icon-btn" data-back="${back}" aria-label="Voltar">${I.back}</button><div class="ttl"><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</div>${right || `<button class="icon-btn" data-settings aria-label="Ajustes">${I.gear}</button>`}</div>`;
  function common(el) {
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-back]'); if (b) go(b.dataset.back);
      if (e.target.closest('[data-settings]')) openSettings();
    });
  }

  // ---------- Jornadas ----------
  route(/^\/caca$/, (el) => {
    setScene('cidade');
    const d = D(); const nx = nextPhase();
    const doneAll = d.phases.filter(isDone).length;
    el.innerHTML = `${topbar('#/', 'CAÇA-PALAVRAS', 'Bíblico')}
      <section class="hero" style="background-image:url('cidade.svg');min-height:280px">
        <svg class="cross" viewBox="0 0 64 40" style="width:58px;height:36px">${''}<path d="M32 9c-5-4-13-5-24-5v26c11 0 19 1 24 5 5-4 13-5 24-5V4c-11 0-19 1-24 5z" fill="none" stroke="#e9cf8c" stroke-width="2.5"/><path d="M32 9v26" stroke="#e9cf8c" stroke-width="2.5"/></svg>
        <div class="kicker" style="margin:0">CAÇA-PALAVRAS</div>
        <h1 style="font-size:2.5rem"><span class="gold-text">BÍBLICO</span></h1>
        <div class="kicker">DESCUBRA · APRENDA · APROFUNDE</div>
        <div class="verse">“Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos.”<cite>Salmos 119:105</cite></div>
      </section>
      <button class="btn btn-gold btn-block" style="margin:14px 0 10px" data-play="${nx.id}">${doneAll ? 'Continuar' : 'Começar'} · Fase ${pad(nx.id)} ${I.arrow}</button>
      ${(() => { const k = todayKey(); const dp = daily(k); const ok = dp && isDone(dp); return dp ? `<button class="daily-card parch" data-daily>
          <span class="dc-sun">☀️</span><span class="txt"><b>Desafio do dia</b><span>${dateLabel(k)} · 8 palavras de toda a Bíblia</span></span>
          <span class="${ok ? 'dc-ok' : 'btn btn-green'}" style="${ok ? '' : 'min-height:44px;padding:0 14px'}">${ok ? '✓ Feito' : 'Jogar'}</span></button>` : ''; })()}
      <div class="section-title"><h2>Minha jornada</h2><span>${doneAll} de ${d.phases.length} fases</span></div>
      ${d.journeys.map(j => {
        const ps = d.phases.filter(p => p.j === j.n); const dn = ps.filter(isDone).length;
        const open = nx.j === j.n;
        return `<div class="journey ${open ? 'open' : ''}" style="--scene:${App.sceneUrl(j.scene)}">
          <button class="journey-head" data-toggle aria-expanded="${open}">
            <span class="medal ${dn === ps.length ? 'done' : ''}">${j.n}</span>
            <span class="txt"><b>${esc(j.name)}</b><span>${esc(j.sub)}</span></span>
            <span class="count">${dn}/${ps.length}</span>
            <span class="chev">${I.next}</span>
          </button>
          <div class="journey-body">
            <div class="phase-grid">${ps.map(p => `<button class="phase-dot ${p.s ? 'special' : ''} ${isDone(p) ? 'done' : ''} ${p.id === nx.id && !isDone(p) ? 'next' : ''}" data-play="${p.id}" aria-label="Fase ${p.id}: ${esc(p.t)}">${p.s ? '<span class="star">⭐</span>' : ''}${pad(p.id)}</button>`).join('')}</div>
            <div class="verse">“${esc(j.verse)}”<cite>${esc(j.ref)}</cite></div>
          </div>
        </div>`;
      }).join('')}
      <div class="signature"><b>Feito por Eduardo de Souza</b><i>com muito amor, para a minha família. ❤️</i></div>`;
    common(el);
    el.addEventListener('click', e => {
      const t = e.target.closest('[data-toggle]'); if (t) { const j = t.parentElement; j.classList.toggle('open'); t.setAttribute('aria-expanded', j.classList.contains('open')); App.sfx.tap(); }
      const p = e.target.closest('[data-play]'); if (p) go('#/caca/' + p.dataset.play);
      if (e.target.closest('[data-daily]')) go('#/caca/dia');
    });
  });

  // ---------- Jogo ----------
  route(/^\/caca\/(\d+)$/, (el, idStr) => {
    const d0 = D(); const ph = d0.phases.find(p => p.id === +idStr); if (!ph) { go('#/caca'); return; }
    return play(el, ph, d0.journeys.find(j => j.n === ph.j));
  });
  route(/^\/caca\/dia$/, (el) => { const t = todayKey(); return play(el, daily(t), dailyJr(t)); });
  function play(el, ph, jr) {
    const d = D();
    setScene(jr.scene);
    const wide = innerWidth >= 900; $('#app').classList.toggle('wide', wide);
    const st = load();
    if (fw()[ph.id] === 'all') fw()[ph.id] = ph.w.map(w => pw(w.w));
    let got = new Set(ph.w.map((w, i) => (fw()[ph.id] || []).includes(pw(w.w)) ? i : -1).filter(i => i >= 0));
    if (ph.daily) setLast('caca', '#/caca/dia', 'Caça-Palavras · Desafio do dia', ph.p); else setLast('caca', '#/caca/' + ph.id, `Caça-Palavras · Fase ${pad(ph.id)}`, ph.t);
    const N = ph.n; const grid = ph.g.map(r => [...r]);
    const total = ph.w.length;

    el.innerHTML = `${topbar('#/caca', ph.daily ? 'Desafio do dia' : `Jornada ${pad(ph.j)} · ${esc(jr.name)}`, ph.daily ? esc(ph.p) : `Fase ${pad(ph.id)} · ${esc(ph.t)}`, `<div class="progress-badge"><div class="ring" style="--p:0"><span id="cnt">0/${total}</span></div></div>`)}
      <div class="ws-layout">
        <div>
          <div class="play-head parch">
            <div class="kick">${ph.daily ? '☀️ Uma fase nova a cada dia' : (ph.s ? '⭐ Fase especial · ' : '') + 'Fase ' + ph.id}</div>
            <h2>${esc(ph.t)}</h2>
            <p>${ph.daily ? 'Palavras de toda a Bíblia' : esc(ph.p)} · Toque na primeira e na última letra, ou arraste o dedo.</p>
          </div>
          <div class="ws-board parch">
            <div class="ws-stage" id="stage" style="--n:${N}">
              <div class="ws-tiles" style="grid-template-columns:repeat(${N},1fr)">${'<i></i>'.repeat(N * N)}</div>
              <svg class="ws-marks" id="marks" viewBox="0 0 ${N} ${N}" preserveAspectRatio="none"></svg>
              <div class="ws-grid" id="grid" style="grid-template-columns:repeat(${N},1fr)">${grid.map((row, r) => row.map((ch, c) => `<div class="ws-cell" data-r="${r}" data-c="${c}">${ch}</div>`).join('')).join('')}</div>
            </div>
          </div>
          <div style="margin-top:12px" class="discovery parch empty" id="disc"><div class="lbl">Palavra descoberta</div><h3>Encontre uma palavra para conhecer a sua história.</h3></div>
          <div id="after"></div>
        </div>
        <div class="ws-side">
          <div class="ws-words parch">
            <div class="head"><h3>Palavras para encontrar</h3><button class="btn btn-ghost" style="min-height:44px;padding:0 14px;font-size:.9rem" id="hint">${I.bulb} Dica</button></div>
            <div class="chips" id="chips">${ph.w.map((w, i) => `<button class="chip" data-w="${i}" style="--c:${COLORS[i % 8][0]};--cs:${COLORS[i % 8][1]}"><span class="ck"></span>${esc(w.w)}</button>`).join('')}</div>
          </div>
          <div class="verse-foot parch"><div class="ic">${I.book}</div><p>“${esc(jr.verse)}”<cite>${esc(jr.ref)}</cite></p></div>
        </div>
      </div>`;
    common(el);
    const stage = $('#stage', el), marks = $('#marks', el), cells = $$('.ws-cell', el);
    const cellAt = (r, c) => cells[r * N + c];

    function sizeCells() { const w = stage.getBoundingClientRect().width; stage.style.setProperty('--cell', (w / N) + 'px'); }
    sizeCells(); const onResize = () => sizeCells(); addEventListener('resize', onResize);

    function capsule(r0, c0, r1, c1, color, edge, cls = '') {
      const ns = 'http://www.w3.org/2000/svg';
      const g = document.createElementNS(ns, 'g'); if (cls) g.setAttribute('class', cls);
      const mk = (w, col, op) => { const l = document.createElementNS(ns, 'line'); l.setAttribute('x1', c0 + .5); l.setAttribute('y1', r0 + .5); l.setAttribute('x2', c1 + .5); l.setAttribute('y2', r1 + .5); l.setAttribute('stroke', col); l.setAttribute('stroke-width', w); l.setAttribute('stroke-opacity', op); l.setAttribute('class', 'cap'); return l; };
      g.appendChild(mk(.84, edge, .55)); g.appendChild(mk(.74, color, .95));
      return g;
    }
    function drawFound() {
      $$('g.f', marks).forEach(x => x.remove());
      [...got].forEach(i => { const [r, c, dr, dc, L] = ph.w[i].at; const col = COLORS[i % 8]; marks.appendChild(capsule(r, c, r + dr * (L - 1), c + dc * (L - 1), col[0], col[1], 'f')); });
      $$('.chip', el).forEach(ch => ch.classList.toggle('found', got.has(+ch.dataset.w)));
      $('#cnt', el).textContent = `${got.size}/${total}`; $('.ring', el).style.setProperty('--p', got.size / total * 100);
    }
    function showDisc(i, pop = true) {
      const w = ph.w[i]; const box = $('#disc', el);
      box.classList.remove('empty', 'pop'); void box.offsetWidth; if (pop) box.classList.add('pop');
      box.innerHTML = `<div class="lbl">Você descobriu</div><h3>${esc(w.w)}</h3><p>${esc(w.d)}</p><div class="ref">${I.book}<span>${esc(w.r)}</span></div>`;
    }
    // ----- palavras bônus: palavras bíblicas do jogo que aparecem no quadro sem estar na lista -----
    const plainW = x => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z]/g, '');
    const DICT = App.caca.dict();
    const listed = new Set(ph.w.map(w => plainW(w.w)));
    function cellsLine(a, b) { const dr = Math.sign(b[0] - a[0]), dc = Math.sign(b[1] - a[1]); const L = Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1])) + 1; return Array.from({ length: L }, (_, i) => [a[0] + dr * i, a[1] + dc * i]); }
    function bonusAt(a, b) {
      const cs = cellsLine(a, b); if (cs.length < 3) return null;
      // pedaço de uma palavra da lista não conta como bônus
      const inside = ph.w.some(w => { const [r, c, dr, dc, L] = w.at; const set = new Set(Array.from({ length: L }, (_, i) => (r + dr * i) + ',' + (c + dc * i))); return cs.every(([y, x]) => set.has(y + ',' + x)); });
      if (inside) return null;
      const s1 = cs.map(([r, c]) => plainW(grid[r][c])).join(''), s2 = [...s1].reverse().join('');
      for (const k of [s1, s2]) { if (DICT[k] && !listed.has(k)) return { key: k, a, b, ...DICT[k] }; }
      return null;
    }
    function drawBonus() {
      $$('g.bn', marks).forEach(x => x.remove());
      // as marcas bônus ficam guardadas como texto; redesenha procurando no quadro
      const keys = ((load().caca.bonus || {})[ph.id] || []);
      keys.forEach(k => { const pos = findInGrid(k); if (pos) marks.insertBefore(capsule(pos[0][0], pos[0][1], pos[1][0], pos[1][1], 'rgba(255,236,170,.9)', 'rgba(196,154,62,.95)', 'bn'), marks.firstChild); });
    }
    function findInGrid(k) {
      const dirs = [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]];
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) for (const [dr, dc] of dirs) {
        let ok = true; for (let i = 0; i < k.length; i++) { const rr = r + dr * i, cc = c + dc * i; if (rr < 0 || rr >= N || cc < 0 || cc >= N || plainW(grid[rr][cc]) !== k[i]) { ok = false; break; } }
        if (ok) return [[r, c], [r + dr * (k.length - 1), c + dc * (k.length - 1)]];
      }
      return null;
    }
    function showBonus(w) {
      const box = $('#disc', el); box.classList.remove('empty', 'pop'); void box.offsetWidth; box.classList.add('pop');
      box.innerHTML = `<div class="lbl">⭐ Palavra bônus</div><h3>${esc(w.w)}</h3><p>${esc(w.d)}</p><div class="ref">${I.book}<span>${esc(w.r)}</span></div><p class="bonus-note">Ela não estava na lista, mas também faz parte da Bíblia. Muito bem!</p>`;
      popFound(null, w);
    }
    // aviso flutuante quando o cartão de descoberta está fora da tela
    function popFound(i, wb) {
      const box = $('#disc', el).getBoundingClientRect(); if (box.top < innerHeight - 80) return;
      $$('.found-pop').forEach(x => x.remove());
      const w = wb || ph.w[i]; const d2 = document.createElement('button'); d2.className = 'found-pop parch';
      d2.innerHTML = `<small>Você descobriu</small><b>${esc(w.w)}</b><span>${esc(w.d)}</span><em>${esc(w.r)}</em>`;
      d2.onclick = () => d2.remove(); document.body.appendChild(d2); setTimeout(() => d2.remove(), 4200);
    }
    drawFound(); drawBonus();
    if (got.size) showDisc([...got].pop(), false);
    if (got.size === total) afterDone(false);

    // ----- seleção -----
    let anchor = null, dragging = false, start = null, live = null, moved = false;
    function rc(e) {
      const b = stage.getBoundingClientRect(); const cw = b.width / N;
      return [Math.max(0, Math.min(N - 1, Math.floor((e.clientY - b.top) / cw))), Math.max(0, Math.min(N - 1, Math.floor((e.clientX - b.left) / cw)))];
    }
    function snap(a, b) {
      let dr = b[0] - a[0], dc = b[1] - a[1]; if (!dr && !dc) return [a, a];
      const ang = Math.atan2(dr, dc), k = Math.round(ang / (Math.PI / 4));
      const sd = [Math.round(Math.sin(k * Math.PI / 4)), Math.round(Math.cos(k * Math.PI / 4))];
      let L = Math.max(Math.abs(dr), Math.abs(dc));
      while (L > 0) { const r = a[0] + sd[0] * L, c = a[1] + sd[1] * L; if (r >= 0 && r < N && c >= 0 && c < N) break; L--; }
      return [a, [a[0] + sd[0] * L, a[1] + sd[1] * L]];
    }
    function drawLive(a, b) { if (live) live.remove(); live = capsule(a[0], a[1], b[0], b[1], 'rgba(233,207,140,.85)', 'rgba(196,154,62,.9)'); marks.appendChild(live); }
    function clearLive() { if (live) live.remove(); live = null; $$('.ws-cell.anchor', el).forEach(x => x.classList.remove('anchor')); }
    function check(a, b) {
      const hit = ph.w.findIndex((w, i) => {
        if (got.has(i)) return false; const [r, c, dr, dc, L] = w.at; const er = r + dr * (L - 1), ec = c + dc * (L - 1);
        return (a[0] === r && a[1] === c && b[0] === er && b[1] === ec) || (b[0] === r && b[1] === c && a[0] === er && a[1] === ec);
      });
      clearLive();
      if (hit >= 0) {
        got.add(hit); fw()[ph.id] = [...got].map(i => pw(ph.w[i].w)); save();
        sfx.good(); drawFound(); showDisc(hit); popFound(hit);
        const chip = $(`.chip[data-w="${hit}"]`, el); chip.classList.remove('flash'); void chip.offsetWidth; chip.classList.add('flash');
        if (got.size === total) afterDone(true);
      } else if (a[0] !== b[0] || a[1] !== b[1]) {
        const bonus = bonusAt(a, b);
        if (bonus) {
          const st = load().caca; st.bonus = st.bonus || {}; const list = st.bonus[ph.id] = st.bonus[ph.id] || [];
          if (!list.includes(bonus.key)) { list.push(bonus.key); save(); }
          drawBonus(); sfx.good(); showBonus(bonus);
        } else { sfx.bad(); if (Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1])) >= 2) toast('Essa não está na lista. Continue procurando!', 1800); }
      }
    }
    stage.addEventListener('pointerdown', e => {
      if (got.size === total) return;
      e.preventDefault(); stage.setPointerCapture(e.pointerId);
      start = rc(e); dragging = true; moved = false;
      if (!anchor) drawLive(start, start);
    });
    stage.addEventListener('pointermove', e => {
      if (!dragging) return; const p = rc(e);
      if (p[0] !== start[0] || p[1] !== start[1]) moved = true;
      if (moved) { const [a, b] = snap(start, p); drawLive(a, b); }
    });
    const up = e => {
      if (!dragging) return; dragging = false; const p = rc(e);
      if (moved) { const [a, b] = snap(start, p); anchor = null; check(a, b); return; }
      // toque simples: primeira letra, depois a última
      if (!anchor) { anchor = start; clearLive(); drawLive(start, start); cellAt(start[0], start[1]).classList.add('anchor'); sfx.tap(); }
      else { const [a, b] = snap(anchor, start); anchor = null; if (a[0] === b[0] && a[1] === b[1]) { clearLive(); return; } check(a, b); }
    };
    stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', () => { dragging = false; clearLive(); anchor = null; });

    el.addEventListener('click', e => {
      const ch = e.target.closest('.chip'); if (ch) { const i = +ch.dataset.w; if (got.has(i)) showDisc(i); else toast('Procure esta palavra no quadro.'); }
      if (e.target.closest('#hint')) {
        const i = ph.w.findIndex((_, k) => !got.has(k)); if (i < 0) return;
        const [r, c] = ph.w[i].at; const cell = cellAt(r, c);
        cell.classList.remove('hint'); void cell.offsetWidth; cell.classList.add('hint');
        load().caca.hints[ph.id] = (load().caca.hints[ph.id] || 0) + 1; save();
        toast(`A palavra ${ph.w[i].w} começa na letra que está piscando.`, 3200);
      }
      if (e.target.closest('[data-next]')) go(ph.daily ? '#/caca' : '#/caca/' + (ph.id < d.phases.length ? ph.id + 1 : 1));
      if (e.target.closest('[data-replay]')) { fw()[ph.id] = []; save(); App.rerender(); }
    });

    function afterDone(celebrate) {
      const nextId = ph.daily ? null : ph.id < d.phases.length ? ph.id + 1 : null;
      const jPhases = d.phases.filter(p => p.j === ph.j); const jDone = !ph.daily && jPhases.every(isDone);
      const nb = (load().caca.bonus || {})[ph.id] || [];
      $('#after', el).innerHTML = `<div class="done-card parch">
          <div class="dc-top"><span class="dc-ic">${jDone ? '👑' : '✨'}</span><div><b>${jDone ? 'Jornada concluída!' : 'Fase concluída!'}</b>
          <span>Você encontrou as ${total} palavras${nb.length ? ` e ${nb.length} palavra${nb.length > 1 ? 's' : ''} bônus ⭐` : ''}.${jDone ? ` Completou a jornada “${esc(jr.name)}”!` : ''}</span></div></div>
          <p class="dc-tip">Leia com calma a última descoberta acima. Quando quiser, siga em frente.</p>
          ${nextId ? `<button class="btn btn-gold btn-block" data-next>Próxima fase ${I.arrow}</button>` : ph.daily ? '<p><b>Volte amanhã para um novo desafio! ☀️</b></p>' : '<p><b>Você completou todas as fases! Glória a Deus!</b></p>'}
          <div class="dc-row"><button class="btn btn-ghost" data-replay>Repetir</button><button class="btn btn-ghost" data-back="#/caca">Jornadas</button></div>
        </div>`;
      if (!celebrate) return;
      setTimeout(() => { sfx.win(); confetti(); }, 500);
    }
    return { leave() { removeEventListener('resize', onResize); $$('.found-pop').forEach(x => x.remove()); } };
  }

  // ---------- Desafio do dia: uma fase nova por dia, montada com o banco de palavras ----------
  function todayKey() { const n = new Date(); return n.getFullYear() + '-' + pad(n.getMonth() + 1) + '-' + pad(n.getDate()); }
  function dateLabel(k) { const [y, m, dd] = k.split('-').map(Number); const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']; return `${dd} de ${meses[m - 1]} de ${y}`; }
  function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  const SCENES = ['jardim', 'deserto', 'monte', 'cidade', 'aurora', 'palacio', 'mar', 'galileia', 'campo', 'noite', 'confins'];
  function dailyJr(k) { const seed = +k.replace(/-/g, ''); const js = D().journeys; const j = js[seed % js.length]; return { n: 0, name: 'Desafio do dia', scene: SCENES[seed % SCENES.length], verse: j.verse, ref: j.ref }; }
  const dailyCache = {};
  function daily(k) {
    if (dailyCache[k]) return dailyCache[k];
    const all = Object.values(dict()).filter(w => { const L = pw(w.w).length; return L >= 3 && L <= 10; });
    const seed = +k.replace(/-/g, '');
    for (let t = 0; t < 400; t++) {
      const r = rng(seed * 31 + t);
      const pick = [];
      const pool = all.slice();
      while (pick.length < 8 && pool.length) {
        const w = pool.splice(Math.floor(r() * pool.length), 1)[0]; const P = pw(w.w);
        if (pick.some(x => { const Q = pw(x.w); return Q.includes(P) || P.includes(Q); })) continue;
        pick.push(w);
      }
      const ph = placeWords(pick, 11, r);
      if (ph) { ph.id = 'dia-' + k; ph.daily = 1; ph.t = 'Desafio do dia'; ph.p = dateLabel(k); ph.j = 0; return (dailyCache[k] = ph); }
    }
    return null;
  }
  function placeWords(words, N, r) {
    const FILL = 'AAAAAAAEEEEEEOOOOOSSSSRRRRIIIIINNNNDDDMMMUUUTTTCCCLLLPPVVGGHQBFZJX';
    const dirs = [[0, 1], [1, 0], [1, 1]];
    const g = Array.from({ length: N }, () => Array(N).fill(null));
    const list = words.map(w => ({ ...w, L: [...w.w.toUpperCase().replace(/[\s\-]/g, '')] })).sort((a, b) => b.L.length - a.L.length);
    const out = [];
    for (const w of list) {
      const n = w.L.length; const c = [];
      for (const [dr, dc] of dirs) for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        const y1 = y + dr * (n - 1), x1 = x + dc * (n - 1); if (y1 >= N || x1 >= N) continue;
        let ok = true, cross = 0;
        for (let i = 0; i < n; i++) { const ch = g[y + dr * i][x + dc * i]; if (ch === null) continue; if (ch === w.L[i]) cross++; else { ok = false; break; } }
        if (ok && cross < n) c.push([y, x, dr, dc, cross * 2 + r() * 2]);
      }
      if (!c.length) return null;
      c.sort((a, b) => b[4] - a[4]); const [y, x, dr, dc] = c[Math.floor(r() * Math.min(4, c.length))];
      for (let i = 0; i < n; i++) g[y + dr * i][x + dc * i] = w.L[i];
      out.push({ w: w.w, d: w.d, r: w.r, at: [y, x, dr, dc, n] });
    }
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (g[y][x] === null) g[y][x] = FILL[Math.floor(r() * FILL.length)];
    // cada palavra deve aparecer uma vez só
    const P = g.map(row => row.map(pw));
    const all8 = [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]];
    for (const o of out) {
      const T = pw(o.w); let cnt = 0;
      for (const [dr, dc] of all8) for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        let s2 = ''; for (let i = 0; i < T.length; i++) { const yy = y + dr * i, xx = x + dc * i; if (yy < 0 || yy >= N || xx < 0 || xx >= N) { s2 = null; break; } s2 += P[yy][xx]; }
        if (s2 === T) cnt++;
      }
      if (cnt !== (T === [...T].reverse().join('') ? 2 : 1)) return null;
    }
    const order = words.map(w => out.find(o => o.w === w.w));
    return { n: N, g: g.map(row => row.join('')), w: order };
  }
  App.caca.daily = { todayKey, daily };
})();
