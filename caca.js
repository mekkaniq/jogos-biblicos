/* Caça-Palavras Bíblico */
(function () {
  const { $, $$, esc, pad, I, cross, load, save, route, go, setScene, setLast, modal, sfx, confetti, toast, openSettings } = App;
  const D = () => window.CACA_DATA;
  const COLORS = [['#cfe5bf', '#8fbb72'], ['#f5df9e', '#d2ac46'], ['#cadcec', '#7fa6c9'], ['#efcdc6', '#cc8b7c'], ['#ddcde8', '#a98bc2'], ['#f3d4b2', '#d39a5c'], ['#cfe6e2', '#7fb8ad'], ['#e7e0b0', '#b5a54e']];

  const found = id => { const f = load().caca.found[id]; return f === 'all' ? null : (f || []); };
  function isDone(p) { const f = load().caca.found[p.id]; return f === 'all' || (Array.isArray(f) && f.length >= p.w.length); }
  function nextPhase() { return D().phases.find(p => !isDone(p)) || D().phases[D().phases.length - 1]; }
  App.caca = { isDone };

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
      <section class="hero" style="background-image:url('img/scenes/cidade.svg');min-height:280px">
        <svg class="cross" viewBox="0 0 64 40" style="width:58px;height:36px">${''}<path d="M32 9c-5-4-13-5-24-5v26c11 0 19 1 24 5 5-4 13-5 24-5V4c-11 0-19 1-24 5z" fill="none" stroke="#e9cf8c" stroke-width="2.5"/><path d="M32 9v26" stroke="#e9cf8c" stroke-width="2.5"/></svg>
        <div class="kicker" style="margin:0">CAÇA-PALAVRAS</div>
        <h1 style="font-size:2.5rem"><span class="gold-text">BÍBLICO</span></h1>
        <div class="kicker">DESCUBRA · APRENDA · APROFUNDE</div>
        <div class="verse">“Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos.”<cite>Salmos 119:105</cite></div>
      </section>
      <button class="btn btn-gold btn-block" style="margin:14px 0 6px" data-play="${nx.id}">${doneAll ? 'Continuar' : 'Começar'} · Fase ${pad(nx.id)} ${I.arrow}</button>
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
    });
  });

  // ---------- Jogo ----------
  route(/^\/caca\/(\d+)$/, (el, idStr) => {
    const d = D(); const ph = d.phases.find(p => p.id === +idStr); if (!ph) { go('#/caca'); return; }
    const jr = d.journeys.find(j => j.n === ph.j);
    setScene(jr.scene);
    const wide = innerWidth >= 900; $('#app').classList.toggle('wide', wide);
    const st = load();
    if (st.caca.found[ph.id] === 'all') st.caca.found[ph.id] = ph.w.map((_, i) => i);
    let got = new Set(found(ph.id) || []);
    setLast('caca', '#/caca/' + ph.id, `Caça-Palavras · Fase ${pad(ph.id)}`, ph.t);
    const N = ph.n; const grid = ph.g.map(r => [...r]);
    const total = ph.w.length;

    el.innerHTML = `${topbar('#/caca', `Jornada ${pad(ph.j)} · ${esc(jr.name)}`, `Fase ${pad(ph.id)} · ${esc(ph.t)}`, `<div class="progress-badge"><div class="ring" style="--p:0"><span id="cnt">0/${total}</span></div></div>`)}
      <div class="ws-layout">
        <div>
          <div class="play-head parch">
            <div class="kick">${ph.s ? '⭐ Fase especial · ' : ''}Fase ${ph.id}</div>
            <h2>${esc(ph.t)}</h2>
            <p>${esc(ph.p)} · Toque na primeira e na última letra, ou arraste o dedo.</p>
          </div>
          <div class="ws-board parch">
            <div class="ws-stage" id="stage" style="--n:${N}">
              <div class="ws-tiles" style="grid-template-columns:repeat(${N},1fr)">${'<i></i>'.repeat(N * N)}</div>
              <svg class="ws-marks" id="marks" viewBox="0 0 ${N} ${N}" preserveAspectRatio="none"></svg>
              <div class="ws-grid" id="grid" style="grid-template-columns:repeat(${N},1fr)">${grid.map((row, r) => row.map((ch, c) => `<div class="ws-cell" data-r="${r}" data-c="${c}">${ch}</div>`).join('')).join('')}</div>
            </div>
          </div>
        </div>
        <div class="ws-side">
          <div class="ws-words parch">
            <div class="head"><h3>Palavras para encontrar</h3><button class="btn btn-ghost" style="min-height:44px;padding:0 14px;font-size:.9rem" id="hint">${I.bulb} Dica</button></div>
            <div class="chips" id="chips">${ph.w.map((w, i) => `<button class="chip" data-w="${i}" style="--c:${COLORS[i % 8][0]};--cs:${COLORS[i % 8][1]}"><span class="ck"></span>${esc(w.w)}</button>`).join('')}</div>
          </div>
          <div class="discovery parch empty" id="disc"><div class="lbl">Palavra descoberta</div><h3>Encontre uma palavra para conhecer a sua história.</h3></div>
          <div class="verse-foot parch"><div class="ic">${I.book}</div><p>“${esc(jr.verse)}”<cite>${esc(jr.ref)}</cite></p></div>
          <div id="after"></div>
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
    // aviso flutuante quando o cartão de descoberta está fora da tela
    function popFound(i) {
      const box = $('#disc', el).getBoundingClientRect(); if (box.top < innerHeight - 80) return;
      $$('.found-pop').forEach(x => x.remove());
      const w = ph.w[i]; const d2 = document.createElement('button'); d2.className = 'found-pop parch';
      d2.innerHTML = `<small>Você descobriu</small><b>${esc(w.w)}</b><span>${esc(w.d)}</span><em>${esc(w.r)}</em>`;
      d2.onclick = () => d2.remove(); document.body.appendChild(d2); setTimeout(() => d2.remove(), 4200);
    }
    drawFound();
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
        got.add(hit); load().caca.found[ph.id] = [...got]; save();
        sfx.good(); drawFound(); showDisc(hit); popFound(hit);
        const chip = $(`.chip[data-w="${hit}"]`, el); chip.classList.remove('flash'); void chip.offsetWidth; chip.classList.add('flash');
        if (got.size === total) setTimeout(() => afterDone(true), 650);
      } else if (a[0] !== b[0] || a[1] !== b[1]) {
        sfx.bad();
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
      if (e.target.closest('[data-next]')) go('#/caca/' + (ph.id < d.phases.length ? ph.id + 1 : 1));
      if (e.target.closest('[data-replay]')) { load().caca.found[ph.id] = []; save(); App.rerender(); }
    });

    function afterDone(celebrate) {
      const nextId = ph.id < d.phases.length ? ph.id + 1 : null;
      $('#after', el).innerHTML = `<div style="display:grid;gap:10px;margin-top:12px">
        ${nextId ? `<button class="btn btn-green btn-block" data-next>Próxima fase ${I.arrow}</button>` : ''}
        <button class="btn btn-ghost btn-block" data-replay>Jogar esta fase de novo</button></div>`;
      if (!celebrate) return;
      sfx.win(); confetti();
      const jPhases = d.phases.filter(p => p.j === ph.j); const jDone = jPhases.every(isDone);
      const m = modal(`<div class="badge">${jDone ? '👑' : '✨'}</div>
        <h2>${jDone ? 'Jornada concluída!' : 'Fase concluída!'}</h2>
        <p>Você encontrou as ${total} palavras de <b>${esc(ph.t)}</b>.${jDone ? ` E completou a jornada <b>${esc(jr.name)}</b>!` : ''}</p>
        <div class="actions">
          ${nextId ? `<button class="btn btn-gold" data-n>Próxima fase ${I.arrow}</button>` : '<p><b>Você completou as 100 fases! Glória a Deus!</b></p>'}
          <button class="btn btn-ghost" data-close>Rever as palavras</button>
          <button class="btn btn-ghost" data-j>Voltar às jornadas</button>
        </div>`);
      m.el.addEventListener('click', e => { if (e.target.closest('[data-n]')) { m.close(); go('#/caca/' + nextId); } if (e.target.closest('[data-j]')) { m.close(); go('#/caca'); } });
    }
    return { leave() { removeEventListener('resize', onResize); $$('.found-pop').forEach(x => x.remove()); } };
  });
})();
