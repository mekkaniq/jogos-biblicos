/* Colorir — pinte as cenas da Bíblia tocando nas áreas. Calmo: sem tempo, sem nota, sem recompensa. */
(function () {
  const { $, esc, I, route, go, setLast, sfx, save, modal } = App;
  const K = App.kit;
  const D = window.COLORIR_DATA.items;
  // poucas cores, suaves; e algumas vivas
  // a ordem das 14 primeiras não muda (o progresso salvo guarda o número da cor); as novas entram no fim
  const SOFT0 = [['Rosa', '#F6C9D3'], ['Pêssego', '#F8D7BE'], ['Amarelo', '#F9EDA9'], ['Menta', '#C3E8D2'], ['Céu', '#C4DEF3'], ['Lavanda', '#DACFF0'], ['Areia', '#E7D4AE'], ['Cacau', '#C9A788']];
  const VIVID0 = [['Vermelho', '#E4545E'], ['Laranja', '#F2A03B'], ['Ouro', '#F2C230'], ['Verde', '#4DB366'], ['Azul', '#3E8EDE'], ['Marrom', '#8A5C3B']];
  const SOFT1 = [['Salmão', '#F4B3A3'], ['Limão', '#E1EEA9'], ['Turquesa', '#B4E4E2'], ['Lilás', '#E6C5E9'], ['Pele clara', '#F2D2B0'], ['Pele morena', '#DBA97E'], ['Pele escura', '#A8704B'], ['Cinza', '#D6D7DC']];
  const VIVID1 = [['Rosa vivo', '#E8629F'], ['Roxo', '#8E5CC7']];
  // 4ª linha (v2.1): tons que faltavam. Fica no fim para não mudar o número das cores já salvas.
  const DEEP = [['Vinho', '#8E2F4F'], ['Verde-pinho', '#2E6B4F'], ['Musgo', '#7C9A3C'], ['Azul-marinho', '#2D4A8A'],
                ['Celeste vivo', '#4FC3F7'], ['Água-marinha', '#22B8A6'], ['Coral vivo', '#FF7062'], ['Grafite', '#5B6068']];
  // 5ª e 6ª linhas: ouro, tons de pele/cabelo e cores médias e escuras de vários matizes
  const RICH = [['Ouro', '#D4AF37'], ['Marfim', '#F4E8D2'], ['Caramelo', '#BD8259'], ['Canela', '#966044'],
                ['Ébano', '#573D35'], ['Terracota', '#C87556'], ['Ocre', '#C99A45'], ['Verde-oliva', '#A4A66F']];
  const RICH2 = [['Sálvia', '#8DAE91'], ['Petróleo', '#2F8F8B'], ['Cerúleo', '#679FC2'], ['Vinho rosado', '#A66B7C'],
                 ['Ameixa', '#5E3A7A'], ['Violeta', '#9A7AB5'], ['Bordô', '#7A1F2B'], ['Preto suave', '#2B2B30']];
  // v3 (Natal 2026): cores que faltavam. Sempre no fim.
  const NOVAS = [['Amarelo vivo', '#FFD84D'], ['Laranja queimado', '#D9772B'], ['Azul-noite', '#1F2A5A'], ['Madeira', '#C49A6C'], ['Cinza médio', '#A3A6AD']];
  RICH[0][0] = 'Dourado';                         // havia dois "Ouro"
  const ALL = SOFT0.concat(VIVID0, SOFT1, VIVID1, DEEP, RICH, RICH2, NOVAS);   // cor número c (1..) = ALL[c-1]; 0 = sem cor
  // Na tela, as cores aparecem por família (do claro ao escuro). Os números acima não mudam.
  const FAM = [
    ['Vermelhos e rosas', [1, 15, 23, 31, 9, 44, 25, 47]],
    ['Amarelos e laranjas', [3, 49, 11, 33, 2, 10, 50, 39]],
    ['Verdes', [16, 4, 41, 30, 12, 27, 40, 26]],
    ['Azuis', [5, 17, 29, 43, 13, 42, 28, 51]],
    ['Roxos', [6, 18, 46, 24, 45]],
    ['Peles e cabelos', [34, 19, 7, 20, 35, 21, 36, 37]],
    ['Terra e madeira', [8, 52, 38, 14]],
    ['Cinzas', [22, 53, 32, 48]]
  ];
  const famOf = c => Math.max(0, FAM.findIndex(f => f[1].includes(c)));
  const rgb = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const C32 = [0xFFFFFFFF].concat(ALL.map(([, h]) => { const [r, g, b] = rgb(h); return (0xFF000000 | (b << 16) | (g << 8) | r) >>> 0; }));
  const TRK = ['', 'Fáceis', 'Médios', 'Detalhados', 'Natal'], TRK_IC = ['', '🌱', '🌼', '🌳', '⭐'];
  const TRK_DESC = ['', 'Áreas grandes, para começar com calma.', 'Mais detalhes para colorir.', 'Cenas cheias de detalhes, para os pacientes. Use o zoom de dois dedos!', 'O caminho até Belém, para colorir com calma e pensar em Jesus.'];

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
        ${App.nine ? App.nine.html('lendo', 'quiet hero-nine') : ''}${K.gicon(I.palette)}<h1 style="font-size:2rem"><span class="gold-text">Colorir</span></h1><div class="sub">Pinte as cenas da Bíblia, no seu ritmo.</div>
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
    const sw = n => `<button class="cl-sw" data-c="${n}" style="background:${ALL[n - 1][1]}" aria-label="${ALL[n - 1][0]}" title="${ALL[n - 1][0]}"></button>`;
    const fb = (f, i) => { const t = f[1], g = [t[0], t[Math.floor(t.length / 2)], t[t.length - 1]].map(n => ALL[n - 1][1]);
      return `<button class="cl-fb" data-f="${i}" style="background:linear-gradient(135deg,${g[0]} 0 33%,${g[1]} 33% 66%,${g[2]} 66%)" aria-label="${f[0]}" title="${f[0]}"></button>`; };
    const tones = i => FAM[i][1].map(sw).join('');
    el.innerHTML = '';
    const full = document.createElement('div'); full.className = 'cl-full'; full.id = 'clfull';
    full.innerHTML = `<header class="cl-head">
        <button class="icon-btn" data-back="${it.t === 4 ? '#/natal' : '#/colorir'}" aria-label="Voltar">${I.back}</button>
        <div class="ttl"><b>${esc(it.nome)}</b><small>${I.book} ${esc(it.ref)}</small></div>
        <div class="cl-zoom"><button class="icon-btn" data-zo aria-label="Afastar">－</button><button class="icon-btn" data-zi aria-label="Ampliar">＋</button></div>
      </header>
      <div class="cl-view" id="clv"><div class="cl-world" id="clw"><canvas id="clc" width="${w}" height="${h}"></canvas><img class="cl-lines" id="cll" src="colorir-${it.n}.lines.png" alt="" draggable="false"></div>
        <div class="cl-load" id="cld">Preparando o desenho…</div><div class="cl-hint" id="cltip">Toque para pintar · dois dedos para ampliar</div></div>
      <footer class="cl-dock">
        <div class="cl-pal"><div class="cl-row cl-fams">${FAM.map(fb).join('')}</div><div class="cl-famname" id="clfn"></div><div class="cl-row" id="clt"></div></div>
        <div class="cl-act"><button class="btn btn-ghost" data-undo>↶ Desfazer</button><button class="btn btn-ghost" data-erase>⌫ Borracha</button><button class="btn btn-ghost" data-clear>Limpar</button><button class="btn btn-gold" data-fin>Pronto ✓</button></div>
      </footer>`;
    document.body.appendChild(full); document.documentElement.classList.add('cl-on');
    K.common(full);
    const view = $('#clv', full), world = $('#clw', full), cv = $('#clc', full), linesImg = $('#cll', full), loadEl = $('#cld', full), tip = $('#cltip', full);
    const ctx = cv.getContext('2d');
    let reg = null, bb = null, pix = null, pix32 = null, ready = false;
    let cur = S.cor && ALL[S.cor - 1] ? S.cor : 1, erase = false; const undo = [];
    let fam = famOf(cur);
    const showFam = i => { fam = i; $('#clt', full).innerHTML = tones(i); $('#clfn', full).textContent = FAM[i][0]; };
    showFam(fam);
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
      full.querySelectorAll('.cl-fb').forEach(b => { b.classList.toggle('on', +b.dataset.f === fam); b.classList.toggle('has', +b.dataset.f === famOf(cur)); });
      $('[data-erase]', full).classList.toggle('on', erase);
    }
    mark();
    full.addEventListener('click', e => {
      const f = e.target.closest('.cl-fb'); if (f) { showFam(+f.dataset.f); mark(); sfx.tap(); return; }
      const s = e.target.closest('.cl-sw'); if (s) { cur = +s.dataset.c; S.cor = cur; erase = false; mark(); sfx.tap(); return; }
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
        <div class="wc-actions"><button class="btn btn-gold btn-block" data-ws>Compartilhar meu desenho</button>${nx ? `<button class="btn btn-ghost btn-block" data-wn>Próximo desenho ${I.arrow}</button>` : ''}<button class="btn btn-ghost btn-block" data-wl>Ver todos os desenhos</button><button class="btn btn-ghost btn-block" data-close>Continuar pintando</button></div></div>`);
      m.el.addEventListener('click', ev => {
        const b = ev.target.closest('[data-ws]');
        if (b) { b.disabled = true; b.textContent = 'Preparando a imagem…'; shareDrawing().finally(() => { b.disabled = false; b.textContent = 'Compartilhar meu desenho'; }); return; }
        if (ev.target.closest('[data-wn]')) { m.close(); go('#/colorir/' + nx.n); } if (ev.target.closest('[data-wl]')) { m.close(); go(it.t === 4 ? '#/natal' : '#/colorir'); }
      });
      sfx.good();
    }

    // ---- compartilhar: imagem 9:16 (status e stories) com o desenho no miolo 3:4 que o WhatsApp mostra ----
    function wrapTx(c, t, mw) { const out = []; let l = ''; for (const p of t.split(/\s+/)) { const k = l ? l + ' ' + p : p; if (c.measureText(k).width > mw && l) { out.push(l); l = p; } else l = k; } if (l) out.push(l); return out; }
    function rrect(c, x, y, ww, hh, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + ww, y, x + ww, y + hh, r); c.arcTo(x + ww, y + hh, x, y + hh, r); c.arcTo(x, y + hh, x, y, r); c.arcTo(x, y, x + ww, y, r); c.closePath(); }
    async function shareDrawing() {
      try { await Promise.all([document.fonts.load('700 60px Cinzel'), document.fonts.load('italic 400 46px Lora'), document.fonts.load('400 34px Lora')]); } catch (e) { }
      const W = 1080, H = 1920, out = document.createElement('canvas'); out.width = W; out.height = H; const c = out.getContext('2d');
      const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#141a3c'); g.addColorStop(.5, '#1d2347'); g.addColorStop(1, '#120f1e'); c.fillStyle = g; c.fillRect(0, 0, W, H);
      c.fillStyle = 'rgba(255,255,255,.6)'; for (let i = 0; i < 110; i++) { const x = (i * 337 + 41) % W, y = (i * 211 + 17) % H, r = (i % 4 === 0) ? 2.4 : (i % 3) * .6 + .8; c.globalAlpha = .35 + (i % 5) * .12; c.beginPath(); c.arc(x, y, r, 0, 6.283); c.fill(); }
      c.globalAlpha = 1; c.textAlign = 'center';
      const DW = 940, DH = Math.round(DW * h / w), MW = W - 200;
      c.font = '700 58px Cinzel'; const T = wrapTx(c, it.nome, MW);
      c.font = 'italic 400 44px Lora'; const L = wrapTx(c, it.win, MW);
      const total = 44 + 30 + T.length * 70 + 40 + DH + 50 + L.length * 60 + 20 + 44 + 70 + 34 + 50;
      let y = Math.round((H - total) / 2);
      c.fillStyle = '#f0cd7e'; c.font = '700 40px Cinzel'; y += 44; c.fillText('EU PINTEI', W / 2, y); y += 30;
      c.fillStyle = '#fbf1d8'; c.font = '700 58px Cinzel'; for (const l of T) { y += 70; c.fillText(l, W / 2, y - 10); } y += 40;
      const x0 = (W - DW) / 2;
      c.save(); c.shadowColor = 'rgba(0,0,0,.5)'; c.shadowBlur = 40; c.shadowOffsetY = 14; c.fillStyle = '#fff'; rrect(c, x0 - 14, y - 14, DW + 28, DH + 28, 30); c.fill(); c.restore();
      c.save(); rrect(c, x0, y, DW, DH, 18); c.clip(); c.drawImage(cv, x0, y, DW, DH); c.globalCompositeOperation = 'multiply'; c.drawImage(linesImg, x0, y, DW, DH); c.restore();
      c.strokeStyle = '#e9cf8c'; c.lineWidth = 4; rrect(c, x0 - 14, y - 14, DW + 28, DH + 28, 30); c.stroke();
      y += DH + 50;
      c.fillStyle = '#fbf1d8'; c.font = 'italic 400 44px Lora'; for (const l of L) { y += 60; c.fillText(l, W / 2, y - 12); }
      y += 20; c.fillStyle = '#f0cd7e'; c.font = '700 40px Cinzel'; y += 44; c.fillText(it.ref, W / 2, y);
      y += 70; c.fillStyle = 'rgba(251,241,216,.8)'; c.font = '400 34px Lora'; c.fillText('Pintado no app Verso Vivo · pinte também', W / 2, y);
      y += 50; c.fillStyle = '#f0cd7e'; c.font = '700 38px Cinzel'; c.fillText('editoraversovivo.com.br/jogos', W / 2, y);
      const blob = await new Promise(r => out.toBlob(r, 'image/png'));
      const file = new File([blob], 'verso-vivo-meu-desenho.png', { type: 'image/png' });
      const text = `Eu pintei "${it.nome}" (${it.ref}) no app Verso Vivo. Pinte também: editoraversovivo.com.br/jogos`;
      try { if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], text }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = file.name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
      if (App.toast) App.toast('Imagem salva. Agora é só compartilhar!');
    }
    return { leave };
  });
})();
