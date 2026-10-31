/* Colorir — pinte as cenas da Bíblia tocando nas áreas. Calmo: sem tempo, sem nota, sem recompensa. */
(function () {
  const { $, esc, I, route, go, setLast, sfx, save, modal } = App;
  const K = App.kit;
  const D = window.COLORIR_DATA.items;
  // poucas cores, suaves; e algumas vivas
  const SOFT = [['Rosa', '#F6C9D3'], ['Pêssego', '#F8D7BE'], ['Amarelo', '#F9EDA9'], ['Menta', '#C3E8D2'], ['Céu', '#C4DEF3'], ['Lavanda', '#DACFF0'], ['Areia', '#E7D4AE'], ['Cacau', '#C9A788']];
  const VIVID = [['Vermelho', '#E4545E'], ['Laranja', '#F2A03B'], ['Ouro', '#F2C230'], ['Verde', '#4DB366'], ['Azul', '#3E8EDE'], ['Marrom', '#8A5C3B']];
  const ALL = SOFT.concat(VIVID);                 // cor número c (1..14) = ALL[c-1]; 0 = sem cor
  const rgb = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const C32 = [0xFFFFFFFF].concat(ALL.map(([, h]) => { const [r, g, b] = rgb(h); return (0xFF000000 | (b << 16) | (g << 8) | r) >>> 0; }));
  const TRK = ['', 'Fáceis', 'Médios', 'Detalhados'], TRK_IC = ['', '🌱', '🌼', '🌳'];
  const TRK_DESC = ['', 'Áreas grandes, para começar com calma.', 'Mais detalhes para colorir.', 'Cenas cheias de detalhes, para os pacientes. Use o zoom de dois dedos!'];

  // ---------- galeria ----------
  route(/^\/colorir$/, el => {
    App.setScene('jardim');
    const S = K.st('colorir', { p: {}, trk: 1 });
    let trk = S.trk || 1;
    const started = it => S.p[it.n] && Object.keys(S.p[it.n].r || {}).length > 0;
    function draw() {
      const items = D.filter(x => x.t === trk);
      const doneC = items.filter(x => S.done[x.n]).length;
      el.innerHTML = `${K.topbar('#/', 'COLORIR', 'Cenas da Bíblia')}
      <section class="hero" style="background-image:url('${App.sceneUrl('aurora').slice(5, -2)}');min-height:220px">
        ${App.lumi ? App.lumi.html('lendo', 'quiet hero-lumi') : ''}${K.gicon(I.palette)}<h1 style="font-size:2rem"><span class="gold-text">Colorir</span></h1><div class="sub">Pinte as cenas da Bíblia, no seu ritmo.</div>
      </section>
      <div class="trk-tabs">${[1, 2, 3].map(t => { const ls = D.filter(x => x.t === t); return `<button class="trk ${t === trk ? 'on' : ''}" data-trk="${t}"><span>${TRK_IC[t]}</span><b>${TRK[t]}</b><small>${ls.filter(x => S.done[x.n]).length}/${ls.length}</small></button>`; }).join('')}</div>
      <p class="trk-desc">${TRK_DESC[trk]}</p>
      <div class="section-title"><h2>Desenhos</h2><span>${doneC} de ${items.length} prontos</span></div>
      <div class="cl-grid">${items.map(x => `<button class="cl-card ${S.done[x.n] ? 'done' : ''}" data-open="${x.n}">
        <span class="cl-th"><img src="${(S.p[x.n] && S.p[x.n].th) || 'colorir-' + x.n + '.th.webp'}" alt="" loading="lazy" draggable="false">${S.done[x.n] ? '<em>✓ Pronto</em>' : started(x) ? '<em class="wip">Pintando</em>' : ''}</span>
        <b>${esc(x.nome)}</b><small>${esc(x.ref)}</small></button>`).join('')}</div>
      <div class="howto parch"><h3>Como pintar</h3><ol>
        <li>Escolha uma cor e <b>toque numa área</b> do desenho.</li>
        <li>Use <b>dois dedos</b> para ampliar as partes pequenas, e um dedo para arrastar.</li>
        <li>Errou? Toque em <b>Desfazer</b> ou na <b>Borracha</b>. Tudo fica salvo sozinho.</li></ol></div>${K.signature}`;
    }
    draw(); K.common(el);
    el.addEventListener('click', e => {
      const tb = e.target.closest('[data-trk]'); if (tb) { trk = +tb.dataset.trk; S.trk = trk; save(); sfx.tap(); draw(); return; }
      const c = e.target.closest('[data-open]'); if (c) { sfx.tap(); go('#/colorir/' + c.dataset.open); }
    });
  });

  // ---------- tela de pintar (tela cheia) ----------
  route(/^\/colorir\/(\d+)$/, (el, nStr) => {
    document.querySelectorAll('.cl-full').forEach(o => o.remove());
    const it = D.find(x => x.n === +nStr); if (!it) return go('#/colorir');
    App.setScene('jardim');
    setLast('colorir', '#/colorir/' + it.n, `Colorir · ${it.nome}`, it.ref);
    const S = K.st('colorir', { p: {}, trk: 1 });
    const rec = S.p[it.n] || (S.p[it.n] = { r: {} });
    const { w, h } = it;
    const sw = (c, i) => `<button class="cl-sw" data-c="${i}" style="background:${c[1]}" aria-label="${c[0]}" title="${c[0]}"></button>`;
    el.innerHTML = '';
    const full = document.createElement('div'); full.className = 'cl-full'; full.id = 'clfull';
    full.innerHTML = `<header class="cl-head">
        <button class="icon-btn" data-back="#/colorir" aria-label="Voltar">${I.back}</button>
        <div class="ttl"><b>${esc(it.nome)}</b><small>${I.book} ${esc(it.ref)}</small></div>
        <div class="cl-zoom"><button class="icon-btn" data-zo aria-label="Afastar">－</button><button class="icon-btn" data-zi aria-label="Ampliar">＋</button></div>
      </header>
      <div class="cl-view" id="clv"><div class="cl-world" id="clw"><canvas id="clc" width="${w}" height="${h}"></canvas><img class="cl-lines" id="cll" src="colorir-${it.n}.lines.png" alt="" draggable="false"></div>
        <div class="cl-load" id="cld">Preparando o desenho…</div><div class="cl-hint" id="cltip">Toque para pintar · dois dedos para ampliar</div></div>
      <footer class="cl-dock">
        <div class="cl-pal"><div class="cl-row">${SOFT.map((c, i) => sw(c, i + 1)).join('')}</div><div class="cl-row v">${VIVID.map((c, i) => sw(c, SOFT.length + i + 1)).join('')}</div></div>
        <div class="cl-act"><button class="btn btn-ghost" data-undo>↶ Desfazer</button><button class="btn btn-ghost" data-erase>⌫ Borracha</button><button class="btn btn-ghost" data-clear>Limpar</button><button class="btn btn-gold" data-fin>Pronto ✓</button></div>
      </footer>`;
    document.body.appendChild(full); document.documentElement.classList.add('cl-on');
    K.common(full);
    const view = $('#clv', full), world = $('#clw', full), cv = $('#clc', full), linesImg = $('#cll', full), loadEl = $('#cld', full), tip = $('#cltip', full);
    const ctx = cv.getContext('2d');
    let reg = null, bb = null, pix = null, pix32 = null, ready = false;
    let cur = 1, erase = false; const undo = [];
    const colors = rec.r;                          // { regiao: cor }
    setTimeout(() => { tip.classList.add('off'); }, 5000);

    // ---- carrega o mapa de regiões ----
    const mi = new Image();
    mi.onload = () => {
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(mi, 0, 0);
      const d = x.getImageData(0, 0, w, h).data, N = w * h;
      reg = new Uint16Array(N); bb = new Int32Array((it.r + 2) * 4);
      for (let k = 0; k <= it.r + 1; k++) { bb[k * 4] = w; bb[k * 4 + 1] = h; bb[k * 4 + 2] = -1; bb[k * 4 + 3] = -1; }
      for (let y = 0, i = 0; y < h; y++) for (let xx = 0; xx < w; xx++, i++) {
        const id = (d[i * 4] << 8) | d[i * 4 + 1]; reg[i] = id;
        if (id) { const b = id * 4; if (xx < bb[b]) bb[b] = xx; if (y < bb[b + 1]) bb[b + 1] = y; if (xx > bb[b + 2]) bb[b + 2] = xx; if (y > bb[b + 3]) bb[b + 3] = y; }
      }
      pix = ctx.createImageData(w, h); pix32 = new Uint32Array(pix.data.buffer); pix32.fill(0xFFFFFFFF);
      for (const id of Object.keys(colors)) paintRegion(+id, colors[id], true);
      ctx.putImageData(pix, 0, 0);
      ready = true; loadEl.remove();
    };
    mi.onerror = () => { loadEl.textContent = 'Não consegui abrir este desenho. Volte e tente de novo.'; };
    mi.src = `colorir-${it.n}.map.png`;

    function paintRegion(id, c, noPut) {
      const b = id * 4, x0 = bb[b], y0 = bb[b + 1], x1 = bb[b + 2], y1 = bb[b + 3]; if (x1 < 0) return;
      const col = C32[c] >>> 0;
      for (let y = y0; y <= y1; y++) { let i = y * w + x0; for (let x = x0; x <= x1; x++, i++) if (reg[i] === id) pix32[i] = col; }
      if (!noPut) ctx.putImageData(pix, 0, 0, x0, y0, x1 - x0 + 1, y1 - y0 + 1);
    }
    function setColor(id, c, record) {
      const prev = colors[id] || 0; if (prev === c) return false;
      if (record) { undo.push([id, prev]); if (undo.length > 300) undo.shift(); }
      if (c) colors[id] = c; else delete colors[id];
      paintRegion(id, c); persist(); return true;
    }

    // ---- salvar (sozinho) e miniatura ----
    let tmr = 0;
    function persist(now) { clearTimeout(tmr); tmr = setTimeout(flush, now ? 0 : 700); }
    function flush() {
      try {
        const tw = 300, th = Math.round(tw * h / w), t = document.createElement('canvas'); t.width = tw; t.height = th;
        const x = t.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, tw, th); x.drawImage(cv, 0, 0, tw, th);
        x.globalCompositeOperation = 'multiply'; x.drawImage(linesImg, 0, 0, tw, th);
        rec.th = Object.keys(colors).length ? t.toDataURL('image/jpeg', .7) : null;
        if (!rec.th) delete rec.th;
      } catch (e) { }
      save();
    }
    const onHide = () => { if (document.visibilityState === 'hidden') flush(); };
    const onResize = () => { fit(); };
    document.addEventListener('visibilitychange', onHide); window.addEventListener('resize', onResize);
    const leave = () => {
      flush(); full.remove(); document.documentElement.classList.remove('cl-on');
      document.removeEventListener('visibilitychange', onHide); window.removeEventListener('resize', onResize);
    };

    // ---- paleta / ferramentas ----
    function mark() {
      full.querySelectorAll('.cl-sw').forEach(b => b.classList.toggle('on', !erase && +b.dataset.c === cur));
      $('[data-erase]', full).classList.toggle('on', erase);
    }
    mark();
    full.addEventListener('click', e => {
      const s = e.target.closest('.cl-sw'); if (s) { cur = +s.dataset.c; erase = false; mark(); sfx.tap(); return; }
      if (e.target.closest('[data-erase]')) { erase = !erase; mark(); sfx.tap(); return; }
      if (e.target.closest('[data-undo]')) { const u = undo.pop(); if (u && ready) { setColor(u[0], u[1], false); sfx.tap(); } return; }
      if (e.target.closest('[data-zi]')) { zoomAt(VW / 2, VH / 2, sc * 1.5); return; }
      if (e.target.closest('[data-zo]')) { zoomAt(VW / 2, VH / 2, sc / 1.5); return; }
      if (e.target.closest('[data-clear]')) {
        if (!Object.keys(colors).length) return;
        const m = modal(`<h3 style="font-family:var(--display);color:var(--green-800)">Limpar o desenho?</h3><p style="margin:8px 0 0">Todas as cores deste desenho serão apagadas.</p><div class="wc-actions" style="display:grid;gap:8px;margin-top:14px"><button class="btn btn-gold btn-block" data-yes>Limpar</button><button class="btn btn-ghost btn-block" data-no>Voltar</button></div>`);
        m.el.addEventListener('click', ev => {
          if (ev.target.closest('[data-no]')) m.close();
          if (ev.target.closest('[data-yes]')) { m.close(); for (const k of Object.keys(colors)) delete colors[k]; undo.length = 0; pix32.fill(0xFFFFFFFF); ctx.putImageData(pix, 0, 0); delete S.done[it.n]; persist(true); }
        });
        return;
      }
      if (e.target.closest('[data-fin]')) finish();
    });

    // ---- encaixe na tela, zoom e arrastar ----
    let VW = 0, VH = 0, FW = 0, FH = 0, sc = 1, tx = 0, ty = 0; const MAXS = 5;
    function fit() {
      VW = view.clientWidth; VH = view.clientHeight; if (!VW || !VH) return;
      const f = Math.min(VW / w, VH / h); FW = Math.floor(w * f); FH = Math.floor(h * f);
      world.style.width = FW + 'px'; world.style.height = FH + 'px'; sc = 1; clampPan(); apply();
    }
    function clampPan() {
      const sw_ = FW * sc, sh_ = FH * sc;
      tx = sw_ <= VW ? (VW - sw_) / 2 : Math.min(0, Math.max(VW - sw_, tx));
      ty = sh_ <= VH ? (VH - sh_) / 2 : Math.min(0, Math.max(VH - sh_, ty));
    }
    const apply = () => { world.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`; };
    function zoomAt(cx, cy, ns) { ns = Math.max(1, Math.min(MAXS, ns)); tx = cx - (cx - tx) * ns / sc; ty = cy - (cy - ty) * ns / sc; sc = ns; clampPan(); apply(); }
    requestAnimationFrame(() => { fit(); requestAnimationFrame(fit); });
    const ptrs = new Map(); let tap = null, multi = false, pinch = null;
    const rectOf = () => view.getBoundingClientRect();
    view.addEventListener('pointerdown', e => {
      try { view.setPointerCapture(e.pointerId); } catch (x) { }
      ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (ptrs.size === 1) { multi = false; tap = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false, tx, ty }; }
      else if (ptrs.size === 2) {
        multi = true; tap = null; const [a, b] = [...ptrs.values()]; const r = rectOf();
        pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) || 1, sc, cx: (a.x + b.x) / 2 - r.left, cy: (a.y + b.y) / 2 - r.top, tx, ty };
      }
    });
    view.addEventListener('pointermove', e => {
      const p = ptrs.get(e.pointerId); if (!p) return; p.x = e.clientX; p.y = e.clientY;
      if (ptrs.size >= 2 && pinch) {
        const [a, b] = [...ptrs.values()]; const r = rectOf(); const d = Math.hypot(a.x - b.x, a.y - b.y);
        const mx = (a.x + b.x) / 2 - r.left, my = (a.y + b.y) / 2 - r.top;
        const ns = Math.max(1, Math.min(MAXS, pinch.sc * d / pinch.d));
        tx = mx - (pinch.cx - pinch.tx) * ns / pinch.sc; ty = my - (pinch.cy - pinch.ty) * ns / pinch.sc; sc = ns; clampPan(); apply();
      } else if (tap && tap.id === e.pointerId) {
        const dx = e.clientX - tap.x, dy = e.clientY - tap.y;
        if (!tap.moved && Math.hypot(dx, dy) > 9) tap.moved = true;
        if (tap.moved && sc > 1) { tx = tap.tx + dx; ty = tap.ty + dy; clampPan(); apply(); }
      }
    });
    const up = e => {
      const t = tap; ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch = null;
      if (t && t.id === e.pointerId && !t.moved && !multi && e.type === 'pointerup') paintAt(e.clientX, e.clientY);
      if (!ptrs.size) { tap = null; multi = false; }
    };
    view.addEventListener('pointerup', up); view.addEventListener('pointercancel', up);
    view.addEventListener('wheel', e => { e.preventDefault(); const r = rectOf(); zoomAt(e.clientX - r.left, e.clientY - r.top, sc * (e.deltaY < 0 ? 1.2 : 1 / 1.2)); }, { passive: false });

    function paintAt(cx, cy) {
      if (!ready || !FW) return;
      const r = rectOf(); const lx = (cx - r.left - tx) / sc, ly = (cy - r.top - ty) / sc;
      const px = Math.floor(lx / FW * w), py = Math.floor(ly / FH * h);
      if (lx < 0 || ly < 0 || px < 0 || py < 0 || px >= w || py >= h) return;
      const id = reg[py * w + px]; if (!id) return;     // tinta preta grossa: não pinta
      if (setColor(id, erase ? 0 : cur, true)) sfx.tap();
    }

    // ---- terminei ----
    function finish() {
      if (!Object.keys(colors).length) { tip.textContent = 'Pinte alguma coisa primeiro. Sem pressa!'; tip.classList.remove('off'); setTimeout(() => tip.classList.add('off'), 2500); return; }
      S.done[it.n] = 1; persist(true);
      const nx = D.find(x => x.n === it.n + 1 && x.t === it.t);
      const m = modal(`<div class="win-card" style="box-shadow:none;border:0;background:none;padding:0"><div class="wc-top"><div class="wc-badge">🎨</div><div><h2>${esc(it.nome)}</h2></div></div>
        <p class="wc-text">${esc(it.win)}</p><div class="wc-learned"><div>${I.book} <b>${esc(it.ref)}</b></div></div>
        <div class="wc-actions">${nx ? `<button class="btn btn-gold btn-block" data-wn>Próximo desenho ${I.arrow}</button>` : ''}<button class="btn btn-ghost btn-block" data-wl>Ver todos os desenhos</button><button class="btn btn-ghost btn-block" data-close>Continuar pintando</button></div></div>`);
      m.el.addEventListener('click', ev => { if (ev.target.closest('[data-wn]')) { m.close(); go('#/colorir/' + nx.n); } if (ev.target.closest('[data-wl]')) { m.close(); go('#/colorir'); } });
      sfx.good();
    }
    return { leave };
  });
})();
