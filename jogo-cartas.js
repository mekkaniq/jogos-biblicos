/* Solitaire Bíblico — junte as cartas de cada história */
(function () {
  const { $, $$, esc, pad, I, load, save, route, go, setScene, setLast, modal, sfx, confetti, toast, openSettings } = App;
  const D = () => window.CARTAS_DATA;
  const story = id => D().stories.find(s => s.id === id);
  // id de carta: "T_<historia>" (carta-tema) ou "<historia>_<n>" (carta da história)
  const info = id => {
    if (id.startsWith('T_')) { const s = story(id.slice(2)); return { id, t: 1, g: s.id, n: s.name, e: s.icon, s }; }
    const k = id.lastIndexOf('_'); const s = story(id.slice(0, k)); const it = s.items[+id.slice(k + 1)];
    return { id, t: 0, g: s.id, n: it.n, e: it.e, d: it.d, r: it.r, s };
  };
  const topbar = (back, title, sub) => `<div class="topbar"><button class="icon-btn" data-back="${back}" aria-label="Voltar">${I.back}</button><div class="ttl"><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</div><button class="icon-btn" data-settings aria-label="Ajustes">${I.gear}</button></div>`;
  function common(el) { el.addEventListener('click', e => { const b = e.target.closest('[data-back]'); if (b) go(b.dataset.back); if (e.target.closest('[data-settings]')) openSettings(); }); }
  const doneMap = () => load().cartas.done;
  const starsOf = n => { const v = load().cartas.stars && load().cartas.stars[n]; return v || (doneMap()[n] ? 1 : 0); };
  const HINTS = 3, UNDOS = 5;
  const nextLevel = () => D().levels.find(l => !doneMap()[l.n]) || D().levels[0];

  // ---------- Lista de partidas ----------
  route(/^\/cartas$/, (el) => {
    setScene('aurora');
    const d = D(); const nx = nextLevel(); const cur = load().cartas.cur;
    el.innerHTML = `${topbar('#/', 'SOLITAIRE', 'Bíblico')}
      <section class="hero" style="background-image:url('aurora.svg');min-height:250px">
        <div class="gicon" style="width:58px;height:58px;border-radius:16px;display:grid;place-items:center;background:var(--gold-grad);color:#3b2a0c;margin-bottom:6px">${I.cards.replace('<svg', '<svg style="width:32px;height:32px"')}</div>
        <h1 style="font-size:2.1rem"><span class="gold-text">Descubra a história</span></h1>
        <div class="sub">Revele as cartas, descubra a qual história cada uma pertence e complete as histórias.</div>
      </section>
      <button class="btn btn-gold btn-block" style="margin:14px 0 6px" data-play="${cur ? cur.n : nx.n}">${cur ? `Continuar a partida ${cur.n}` : `Jogar a partida ${nx.n}`} ${I.arrow}</button>
      <div class="section-title"><h2>Partidas</h2><span>${d.levels.filter(l => doneMap()[l.n]).length} de ${d.levels.length}</span></div>
      <div class="level-grid">${d.levels.map(l => `<button class="level ${doneMap()[l.n] ? 'done' : ''} ${l.n === nx.n ? 'next' : ''}" data-play="${l.n}" style="background-image:url('${story(l.stories[0]).scene}.svg')">
          ${doneMap()[l.n] ? `<span class="ok">${'★'.repeat(starsOf(l.n))}</span>` : ''}<b>${l.n}</b><small>${l.stories.length} histórias</small></button>`).join('')}</div>
      <div class="howto parch"><h3>Como jogar</h3><ol>
        <li><b>Arraste</b> as cartas com o dedo, ou toque numa carta e depois no lugar onde ela vai.</li>
        <li>Coloque uma <b>carta-tema</b> dourada 👑 numa casa vazia para abrir uma história.</li>
        <li>Junte nela as cartas daquela história. Quando completar, a casa fica livre de novo.</li>
        <li>Nas colunas, só dá para empilhar cartas <b>da mesma história</b>. Coluna vazia aceita qualquer carta.</li>
        <li>Toque no baralho para revelar novas cartas. Há mais histórias do que casas: escolha bem quais abrir!</li>
        <li>Cada partida tem <b>3 dicas</b> e <b>5 desfazer</b>. Sem usar nenhum, você ganha 3 estrelas.</li>
      </ol></div>
      <div class="signature"><b>Feito por Eduardo de Souza</b><i>com muito amor, para a minha família. ❤️</i></div>`;
    common(el);
    el.addEventListener('click', e => { const p = e.target.closest('[data-play]'); if (p) go('#/cartas/' + p.dataset.play); });
  });

  // ---------- Partida ----------
  route(/^\/cartas\/(\d+)$/, (el, nStr) => {
    const L = D().levels.find(l => l.n === +nStr); if (!L) { go('#/cartas'); return; }
    setScene(story(L.stories[0]).scene);
    setLast('cartas', '#/cartas/' + L.n, `Solitaire · Partida ${L.n}`, `${L.stories.length} histórias para descobrir`);
    const need = L.m; // cartas por história (fora a carta-tema)
    const total = L.stories.length;
    const fresh = () => ({ cols: L.cols.map(c => c.map((id, i) => ({ id, up: i === c.length - 1 }))), stock: L.stock.slice().reverse(), waste: [], slots: [null, null, null, null], done: [], moves: 0, hints: HINTS, undos: UNDOS });
    const saved = load().cartas.cur;
    let S = saved && saved.n === L.n ? saved.state : fresh();
    if (S.hints === undefined) { S.hints = HINTS; S.undos = UNDOS; }
    let sel = null; // carta(s) escolhida(s) com um toque, esperando o destino
    let hist = [];
    let won = false;
    const persist = () => { if (won) return; load().cartas.cur = { n: L.n, state: S }; save(); };

    el.innerHTML = `${topbar('#/cartas', `PARTIDA ${L.n}`, `${total} histórias · ${need} cartas cada`)}
      <div class="so-top"><div class="so-moves"><b id="moves">0</b><span>movimentos</span></div><div class="waste" id="waste"></div><div class="stock" id="stock"></div></div>
      <div class="so-table" id="table">
        <div class="so-slots" id="slots"></div>
        <div class="so-cols" id="cols"></div>
      </div>
      <div class="so-tools"><button class="btn btn-ghost" data-undo>${I.undo} Desfazer <span class="badge-n" id="nU"></span></button><button class="btn btn-ghost" data-hint>${I.bulb} Dica <span class="badge-n" id="nH"></span></button><button class="btn btn-ghost" data-restart>Recomeçar</button></div>
      <div class="discovery parch so-bottom" id="disc"><div class="lbl">Descoberta bíblica</div><p>Toque numa carta para ver o que ela significa. Descubra a qual história ela pertence!</p></div>
      <div class="so-bottom parch" id="doneBox" style="display:none"><h4>Histórias concluídas</h4><div class="done-chips" id="doneChips"></div></div>`;
    common(el);
    const table = $('#table', el);
    function sizes() {
      const w = $('#cols', el).getBoundingClientRect().width; const cw = (w - 24) / 4;
      el.style.setProperty('--ch', Math.round(Math.min(cw * 1.32, 150)) + 'px');
      return cw;
    }

    const cardHtml = (id, extra = '', style = '') => {
      const c = info(id);
      if (c.t) return `<div class="card theme ${extra}" data-id="${id}" style="${style}"><span class="crown">👑</span><span class="nm">${esc(c.n)}</span><span class="em">${c.e}</span><span class="cnt">0/${need}</span></div>`;
      return `<div class="card ${extra}" data-id="${id}" style="${style}"><span class="nm">${esc(c.n)}</span><span class="em">${c.e}</span></div>`;
    };
    function render() {
      sizes();
      const ch = parseFloat(getComputedStyle(el).getPropertyValue('--ch')) || 110;
      const offDown = Math.round(ch * .17), offUp = Math.round(ch * .3);
      $('#moves', el).textContent = S.moves; $('#nU', el).textContent = S.undos; $('#nH', el).textContent = S.hints;
      // baralho
      $('#stock', el).className = 'stock' + (S.stock.length ? '' : ' empty');
      $('#stock', el).innerHTML = S.stock.length ? `<div class="card back" style="top:0"></div><div class="card back" style="top:-3px;left:3px;right:-3px"></div><span class="left">${S.stock.length}</span>` : `<div class="recycle">${S.waste.length ? '↻<br>recomeçar<br>baralho' : 'vazio'}</div>`;
      // descarte em leque
      const wv = S.waste.slice(-3);
      $('#waste', el).innerHTML = wv.map((id, i) => cardHtml(id, i === wv.length - 1 ? 'top' : '', `left:${i * 12}px;width:68px;z-index:${i + 1}`)).join('');
      // casas
      $('#slots', el).innerHTML = S.slots.map((sl, i) => {
        if (!sl) return `<div class="slot" data-slot="${i}"><span><span class="plus">+</span>Nova<br>história</span></div>`;
        const t = info('T_' + sl.g); const last = sl.ids.length > 1 ? info(sl.ids[sl.ids.length - 1]) : null;
        return `<div class="slot filled" data-slot="${i}"><div class="card theme" style="top:0"><span class="crown">👑</span><span class="nm">${esc(t.n)}</span><span class="em">${last ? last.e : t.e}</span><span class="cnt">${sl.ids.length - 1}/${need}</span></div></div>`;
      }).join('');
      // colunas
      $('#cols', el).innerHTML = S.cols.map((col, ci) => {
        let y = 0; const parts = col.map((c, j) => {
          const html = c.up ? cardHtml(c.id, '', `top:${y}px;z-index:${j + 1}`).replace('data-id=', `data-col="${ci}" data-row="${j}" data-id=`) : `<div class="card back" style="top:${y}px;z-index:${j + 1}"></div>`;
          y += c.up ? offUp : offDown; return html;
        });
        const h = col.length ? y - (col[col.length - 1].up ? offUp : offDown) + ch : ch;
        return `<div class="so-col ${col.length ? '' : 'empty'}" data-colbox="${ci}" style="height:${h}px">${parts.join('')}</div>`;
      }).join('');
      // histórias concluídas
      $('#doneBox', el).style.display = S.done.length ? '' : 'none';
      $('#doneChips', el).innerHTML = S.done.map(g => `<span>✓ ${esc(story(g).name)}</span>`).join('');
      fitNames(); markSel();
    }
    function fitNames() {
      $$('.card .nm', el).forEach(n => { n.style.fontSize = ''; let f = parseFloat(getComputedStyle(n).fontSize); let k = 0; while (n.scrollWidth > n.clientWidth + 1 && f > 9 && k++ < 8) { f -= 1; n.style.fontSize = f + 'px'; } });
    }
    const snap = () => JSON.stringify(S);
    function push() { hist.push(snap()); if (hist.length > 200) hist.shift(); }
    function showInfo(id, placed) {
      const c = info(id); const box = $('#disc', el); box.classList.remove('pop'); void box.offsetWidth; box.classList.add('pop');
      if (c.t) box.innerHTML = `<div class="lbl">Carta-tema</div><h3>${c.e} ${esc(c.n)}</h3><p>${esc(c.s.desc)}</p><div class="ref">${I.book}<span>${esc(c.s.ref)}</span></div>`;
      else box.innerHTML = `<div class="lbl">${placed ? esc(c.s.name) : 'Descoberta bíblica'}</div><h3>${c.e} ${esc(c.n)}</h3><p>${esc(c.d)}</p><div class="ref">${I.book}<span>${esc(c.r)}</span></div>`;
    }

    // ----- regras -----
    // pilha que pode sair da coluna a partir da linha j
    function movable(ci, j) {
      const col = S.cols[ci]; if (!col[j] || !col[j].up) return null;
      const ids = col.slice(j).map(c => c.id); const a = info(ids[0]);
      if (ids.length > 1 && ids.slice(1).some(id => { const x = info(id); return x.t || x.g !== a.g; })) return null;
      return ids;
    }
    // destino preferido para um conjunto de cartas
    function target(ids, from) {
      const a = info(ids[0]);
      if (a.t) { const e = S.slots.indexOf(null); if (e >= 0) return { slot: e }; if (ids.length > 1) return null; }
      else { const si = S.slots.findIndex(s => s && s.g === a.g); if (si >= 0) return { slot: si }; }
      for (let ci = 0; ci < 4; ci++) {
        if (from && from.col === ci) continue; const col = S.cols[ci]; if (!col.length) continue;
        const top = info(col[col.length - 1].id); if (!a.t && !top.t && top.g === a.g) return { col: ci };
        if (!a.t && top.t && top.g === a.g) return { col: ci };
      }
      const useful = !from || from.waste || from.row > 0;
      if (a.t && ids.length > 1) return null;
      if (useful) { const e = S.cols.findIndex((c, ci) => !c.length && (!from || from.col !== ci)); if (e >= 0) return { col: e }; }
      return null;
    }
    function apply(ids, from, to) {
      push();
      if (from.waste) S.waste.pop(); else { S.cols[from.col].splice(from.row); const c = S.cols[from.col]; if (c.length && !c[c.length - 1].up) c[c.length - 1].up = true; }
      S.moves++;
      if (to.slot !== undefined) {
        const a = info(ids[0]);
        if (a.t) S.slots[to.slot] = { g: a.g, ids: ids.slice() }; else S.slots[to.slot].ids.push(...ids);
        sfx.good(); showInfo(ids[ids.length - 1], true);
        const sl = S.slots[to.slot];
        if (sl.ids.length === need + 1) {
          const g = sl.g; render();
          // a casa é liberada já no estado; a animação é só visual
          const box = $(`[data-slot="${to.slot}"] .card`, el);
          const ghost = box && box.cloneNode(true);
          S.slots[to.slot] = null; S.done.push(g); persist(); render();
          if (ghost) { const slotEl = $(`[data-slot="${to.slot}"]`, el); ghost.style.zIndex = 20; slotEl.appendChild(ghost); ghost.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.15)', filter: 'brightness(1.3)', offset: .35 }, { transform: 'scale(.2) translateY(-40px)', opacity: 0 }], { duration: 900, easing: 'ease-in' }).onfinish = () => ghost.remove(); }
          toast(`📖 História completa: ${story(g).name}!`, 2600); sfx.win();
          const s = story(g); $('#disc', el).innerHTML = `<div class="lbl">História concluída</div><h3>${s.icon} ${esc(s.name)}</h3><p>${esc(s.desc)}</p><div class="ref">${I.book}<span>${esc(s.ref)}</span></div>`;
          if (S.done.length === total) setTimeout(win, 900); else checkStuck();
          return;
        }
      } else { S.cols[to.col].push(...ids.map(id => ({ id, up: true }))); sfx.tap(); showInfo(ids[0], false); }
      persist(); render(); checkStuck();
    }
    // ----- destinos válidos para uma carta (ou pilha) -----
    function canDrop(ids, from, to) {
      const a = info(ids[0]);
      if (to.slot !== undefined) {
        const sl = S.slots[to.slot];
        if (a.t) return !sl; // carta-tema abre uma casa vazia (pode levar junto as cartas dela)
        return !!sl && sl.g === a.g;
      }
      if (from.col === to.col) return false;
      const col = S.cols[to.col];
      if (!col.length) return true; // coluna vazia aceita qualquer carta
      const top = info(col[col.length - 1].id);
      return !a.t && top.g === a.g;
    }
    function destsFor(ids, from) {
      const out = [];
      S.slots.forEach((_, i) => { if (canDrop(ids, from, { slot: i })) out.push({ slot: i }); });
      S.cols.forEach((_, i) => { if (canDrop(ids, from, { col: i })) out.push({ col: i }); });
      return out;
    }
    function pick(cardEl) {
      if (cardEl.closest('#waste')) { if (!cardEl.classList.contains('top')) return null; return { ids: [S.waste[S.waste.length - 1]], from: { waste: true } }; }
      if (cardEl.dataset.col === undefined) return null;
      const from = { col: +cardEl.dataset.col, row: +cardEl.dataset.row }; const ids = movable(from.col, from.row);
      if (!ids) { nope(cardEl, 'Só dá para mover juntas cartas da mesma história.'); return null; }
      return { ids, from };
    }
    function clearSel() { sel = null; $$('.card.sel,.can-drop', el).forEach(x => x.classList.remove('sel', 'can-drop')); }
    function markSel() {
      if (!sel) return;
      const src = sel.from.waste ? [$('#waste .card.top', el)] : $$(`.card[data-col="${sel.from.col}"]`, el).filter(c => +c.dataset.row >= sel.from.row);
      src.forEach(c => c && c.classList.add('sel'));
      destsFor(sel.ids, sel.from).forEach(d => { const t = d.slot !== undefined ? $(`[data-slot="${d.slot}"]`, el) : $(`[data-colbox="${d.col}"]`, el); t && t.classList.add('can-drop'); });
    }
    function tryDrop(p, to, cardEl) {
      if (!canDrop(p.ids, p.from, to)) {
        const a = info(p.ids[0]);
        let msg = 'Esta carta não pode ir aí.';
        if (to.slot !== undefined) msg = a.t ? 'Essa casa já tem uma história aberta.' : (S.slots[to.slot] ? 'Essa carta é de outra história.' : 'Abra a história com a carta-tema 👑 antes.');
        else if (S.cols[to.col].length) msg = a.t ? 'A carta-tema só vai para uma casa ou coluna vazia.' : 'Só dá para empilhar cartas da mesma história.';
        nope(cardEl, msg); return false;
      }
      clearSel(); apply(p.ids, p.from, to); return true;
    }
    // toque numa carta
    function tapCard(cardEl) {
      // já havia uma carta escolhida: tocar numa coluna de destino solta ali
      if (sel) {
        const box = cardEl.closest('[data-colbox]');
        const same = sel.from.waste ? !!cardEl.closest('#waste') : (box && +box.dataset.colbox === sel.from.col);
        if (same) { clearSel(); return; }
        if (box) { tryDrop(sel, { col: +box.dataset.colbox }, cardEl); return; }
        clearSel();
      }
      const p = pick(cardEl); if (!p) return;
      showInfo(p.ids[0], false);
      const ds = destsFor(p.ids, p.from);
      const toSlot = ds.find(d => d.slot !== undefined);
      if (toSlot) { apply(p.ids, p.from, toSlot); return; } // a casa da história é o destino óbvio
      if (!ds.length) { const a = info(p.ids[0]); nope(cardEl, a.t ? 'As 4 casas estão ocupadas. Complete uma história para liberar uma casa.' : 'Esta carta ainda não tem lugar.'); return; }
      sel = p; sfx.tap(); markSel();
    }
    // ----- arrastar com o dedo -----
    let drag = null;
    el.addEventListener('pointerdown', e => {
      const cardEl = e.target.closest('.card[data-id]');
      if (!cardEl || cardEl.closest('.slot')) return;
      if (!(cardEl.closest('#waste') ? cardEl.classList.contains('top') : cardEl.dataset.col !== undefined)) return;
      drag = { cardEl, x: e.clientX, y: e.clientY, on: false, id: e.pointerId };
    });
    el.addEventListener('pointermove', e => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.on) {
        if (Math.hypot(dx, dy) < 10) return;
        const p = pick(drag.cardEl); if (!p) { drag = null; return; }
        clearSel(); drag.p = p; drag.on = true;
        const src = p.from.waste ? [drag.cardEl] : $$(`.card[data-col="${p.from.col}"]`, el).filter(c => +c.dataset.row >= p.from.row);
        const r0 = src[0].getBoundingClientRect();
        const ghost = document.createElement('div'); ghost.className = 'drag-ghost'; ghost.style.width = r0.width + 'px';
        src.forEach((c, i) => { const g = c.cloneNode(true); g.style.top = (c.getBoundingClientRect().top - r0.top) + 'px'; g.style.left = '0'; g.style.right = '0'; g.style.width = r0.width + 'px'; ghost.appendChild(g); c.style.opacity = '.25'; });
        document.body.appendChild(ghost); drag.ghost = ghost; drag.src = src; drag.ox = drag.x - r0.left; drag.oy = drag.y - r0.top;
        el.setPointerCapture && el.setPointerCapture(e.pointerId);
        markSelFor(p);
      }
      e.preventDefault();
      drag.ghost.style.transform = `translate(${e.clientX - drag.ox}px, ${e.clientY - drag.oy}px)`;
      $$('.drop-over', el).forEach(x => x.classList.remove('drop-over'));
      const t = targetAt(e.clientX, e.clientY); if (t) t.el.classList.add('drop-over');
    }, { passive: false });
    function markSelFor(p) { sel = p; markSel(); sel = null; }
    function targetAt(x, y) {
      if (drag && drag.ghost) drag.ghost.style.display = 'none';
      const hit = document.elementFromPoint(x, y);
      if (drag && drag.ghost) drag.ghost.style.display = '';
      if (!hit) return null;
      const sl = hit.closest('[data-slot]'); if (sl) return { el: sl, to: { slot: +sl.dataset.slot } };
      const cb = hit.closest('[data-colbox]'); if (cb) return { el: cb, to: { col: +cb.dataset.colbox } };
      return null;
    }
    function endDrag(e, cancel) {
      if (!drag) return; const d = drag; drag = null;
      if (!d.on) { if (!cancel) tapCard(d.cardEl); return; }
      const t = cancel ? null : targetAt(e.clientX, e.clientY);
      d.ghost.remove(); d.src.forEach(c => c.style.opacity = '');
      $$('.drop-over,.can-drop', el).forEach(x => x.classList.remove('drop-over', 'can-drop'));
      if (t) tryDrop(d.p, t.to, d.cardEl);
    }
    el.addEventListener('pointerup', e => endDrag(e, false));
    el.addEventListener('pointercancel', e => endDrag(e, true));
    function nope(cardEl, msg) { cardEl.classList.remove('nope'); void cardEl.offsetWidth; cardEl.classList.add('nope'); sfx.bad(); toast(msg, 2600); }
    function tapStock() {
      push();
      if (S.stock.length) { S.waste.push(S.stock.pop()); S.moves++; sfx.tap(); showInfo(S.waste[S.waste.length - 1], false); }
      else if (S.waste.length) { S.stock = S.waste.reverse(); S.waste = []; sfx.tap(); }
      else { hist.pop(); return; }
      persist(); render();
    }
    // ----- resolvedor: encontra um caminho até a vitória a partir do estado atual -----
    const toSolver = src => ({ cols: src.cols.map(c => c.map(x => [x.id, x.up])), pool: [...src.stock, ...src.waste], slots: src.slots.map(x => x && { g: x.g, n: x.ids.length - 1 }), done: src.done.length });
    // cartas do baralho que aparecem logo têm preferência na dica (a do topo do descarte, mais ainda)
    const meta = { G: id => info(id).g, T: id => !!info(id).t, need, total, near: id => {
      if (S.waste[S.waste.length - 1] === id) return 0.9;
      const i = S.stock.lastIndexOf(id); if (i >= 0) return 0.6 - (S.stock.length - 1 - i) * 0.02;
      return 0;
    } };
    let plan = null; // caminho já calculado: segue usando enquanto o jogador acompanhar
    function solveFrom(src, limit = 40000) {
      const st = toSolver(src); const k = SolitaireSolver.key(st);
      if (plan) { const idx = plan.findIndex(p => p.before === k); if (idx >= 0) { plan = plan.slice(idx); return { ok: true, first: plan[0].move }; } }
      const r = SolitaireSolver.solve(st, meta, limit);
      if (r.ok) { plan = r.path; return { ok: true, first: r.path[0] && r.path[0].move }; }
      return { ok: r.ok };
    }
    let rescueShown = false;
    function rescue() {
      // volta jogadas até encontrar um ponto em que ainda dá para vencer
      let back = 0; const saved = S; const u = S.undos, h = S.hints;
      while (hist.length) { S = JSON.parse(hist.pop()); back++; if (solveFrom(S, 8000).ok !== false) break; }
      S.undos = u; S.hints = h;
      if (!back) { S = saved; return; }
      persist(); render(); toast(`Voltei ${back} ${back === 1 ? 'jogada' : 'jogadas'}. Agora é possível vencer!`, 3200);
    }
    function checkStuck() {
      if (S.done.length >= total) return;
      setTimeout(() => {
        const r = solveFrom(S);
        if (r.ok === false && !rescueShown) {
          rescueShown = true;
          const m = modal(`<div class="badge">🧭</div><h2>Caminho sem saída</h2><p>Do jeito que as cartas estão, não dá mais para completar todas as histórias. Posso voltar as jogadas até um ponto em que ainda dá para vencer.</p><div class="actions"><button class="btn btn-gold" data-r>Voltar as jogadas</button><button class="btn btn-ghost" data-close>Agora não</button></div>`, { onClose: () => { rescueShown = false; } });
          m.el.addEventListener('click', e => { if (e.target.closest('[data-r]')) { m.close(); rescue(); } });
        }
      }, 300);
    }
    function hint() {
      $$('.hint-src,.hint-dst', el).forEach(x => x.classList.remove('hint-src', 'hint-dst'));
      if (S.done.length >= total) return;
      if (S.hints <= 0) { toast('As dicas desta partida acabaram.'); return; }
      S.hints--; persist(); render();
      const r = solveFrom(S);
      if (r.ok === false) { checkStuck(); return; }
      const m = r.first;
      if (!m) { toast('Toque no baralho para revelar outra carta.'); return; }
      const clear = () => setTimeout(() => $$('.hint-src,.hint-dst', el).forEach(x => x.classList.remove('hint-src', 'hint-dst')), 3200);
      let srcEl;
      if (m.k === 's') {
        if (S.waste[S.waste.length - 1] === m.id) srcEl = $('#waste .card.top', el);
        else { const st = $('#stock', el); st.classList.add('hint-dst'); toast(`Toque no baralho até aparecer a carta ${info(m.id).n}.`, 3200); clear(); return; }
      } else srcEl = $(`.card[data-col="${m.ci}"][data-row="${m.j}"]`, el);
      const dst = m.to === 's' ? $(`[data-slot="${m.si}"]`, el) : $(`[data-colbox="${m.ci2}"]`, el);
      srcEl && srcEl.classList.add('hint-src'); dst && dst.classList.add('hint-dst'); clear();
    }
    function win() {
      if (won) return; won = true;
      const best = doneMap()[L.n]; doneMap()[L.n] = best ? Math.min(best, S.moves) : S.moves; load().cartas.cur = null;
      const used = (HINTS - S.hints) + (UNDOS - S.undos); const stars = used === 0 ? 3 : used <= 3 ? 2 : 1;
      const st = load().cartas; st.stars = st.stars || {}; st.stars[L.n] = Math.max(st.stars[L.n] || 0, stars); save();
      confetti();
      const nx = L.n < D().levels.length ? L.n + 1 : null;
      const m = modal(`<div class="badge">👑</div><h2>Partida concluída!</h2><div class="stars-big">${[1, 2, 3].map(i => `<span class="${i <= stars ? '' : 'off'}">★</span>`).join('')}</div><p>Você completou ${total} histórias em <b>${S.moves}</b> movimentos${used ? `, usando ${used} ajuda${used > 1 ? 's' : ''}` : ', sem nenhuma ajuda'}.</p>
        <div class="learned">${L.stories.map(g => { const s = story(g); return `<div>${s.icon} <b>${esc(s.name)}</b> — <i style="color:var(--gold-700)">${esc(s.ref)}</i></div>`; }).join('')}</div>
        <div class="actions">${nx ? `<button class="btn btn-gold" data-n>Próxima partida ${I.arrow}</button>` : '<p><b>Você completou todas as partidas!</b></p>'}<button class="btn btn-ghost" data-l>Ver as partidas</button></div>`);
      m.el.addEventListener('click', e => { if (e.target.closest('[data-n]')) { m.close(); go('#/cartas/' + nx); } if (e.target.closest('[data-l]')) { m.close(); go('#/cartas'); } });
    }

    el.addEventListener('click', e => {
      const card = e.target.closest('.card[data-id]'); if (card && !card.closest('.slot')) return;
      if (sel) {
        const slT = e.target.closest('[data-slot]'); if (slT) { tryDrop(sel, { slot: +slT.dataset.slot }, slT); return; }
        const cb = e.target.closest('[data-colbox]'); if (cb) { tryDrop(sel, { col: +cb.dataset.colbox }, cb); return; }
        if (!e.target.closest('button')) clearSel();
      }
      const sl = e.target.closest('.slot.filled'); if (sl) { const s = S.slots[+sl.dataset.slot]; const st = story(s.g); const box = $('#disc', el); box.innerHTML = `<div class="lbl">História aberta · ${s.ids.length - 1}/${need}</div><h3>${st.icon} ${esc(st.name)}</h3><p>${esc(st.desc)}</p><div class="ref">${I.book}<span>${esc(st.ref)}</span></div>`; return; }
      if (e.target.closest('#stock')) { tapStock(); return; }
      if (e.target.closest('[data-undo]')) {
        if (!hist.length) { toast('Não há jogada para desfazer.'); return; }
        if (S.undos <= 0) { toast('Os “desfazer” desta partida acabaram. Você pode recomeçar a partida.'); return; }
        const u = S.undos - 1, h = S.hints; S = JSON.parse(hist.pop()); S.undos = u; S.hints = h; clearSel(); persist(); render(); sfx.tap();
      }
      if (e.target.closest('[data-hint]')) hint();
      if (e.target.closest('[data-restart]')) {
        const c = modal(`<h2>Recomeçar a partida?</h2><p>As cartas voltam para a posição inicial.</p><div class="actions"><button class="btn btn-green" data-y>Sim, recomeçar</button><button class="btn btn-ghost" data-close>Cancelar</button></div>`);
        c.el.addEventListener('click', ev => { if (ev.target.closest('[data-y]')) { c.close(); S = fresh(); hist = []; clearSel(); persist(); render(); } });
      }
    });
    const onResize = () => render(); addEventListener('resize', onResize);
    render(); persist();
    return { leave() { removeEventListener('resize', onResize); } };
  });
})();
