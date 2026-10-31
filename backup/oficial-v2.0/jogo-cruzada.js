/* Palavra Cruzada Bíblica */
(function () {
  const { $, $$, esc, pad, I, cross, goldIcon, load, save, route, go, setScene, setLast, modal, sheet, sfx, confetti, toast, openSettings } = App;
  const D = () => window.CRUZADA_DATA;
  const plain = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().replace(/[^A-Z]/g, '');
  const stars = id => load().cruzada.stars[id] || 0;
  const starHtml = n => [1, 2, 3].map(i => `<span class="${i <= n ? '' : 'off'}">★</span>`).join('');
  const nextChal = () => D().challenges.find(c => !stars(c.id)) || D().challenges[D().challenges.length - 1];
  const topbar = (back, title, sub) => `<div class="topbar"><button class="icon-btn" data-back="${back}" aria-label="Voltar">${I.back}</button><div class="ttl"><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</div><button class="icon-btn" data-settings aria-label="Ajustes">${I.gear}</button></div>`;
  function common(el) { el.addEventListener('click', e => { const b = e.target.closest('[data-back]'); if (b) go(b.dataset.back); if (e.target.closest('[data-settings]')) openSettings(); }); }

  // ---------- Arcos ----------
  route(/^\/cruzada$/, (el) => {
    setScene('jardim');
    const d = D(); const nx = nextChal();
    el.innerHTML = `${topbar('#/', 'PALAVRA CRUZADA', 'Bíblica')}
      <section class="hero" style="background-image:url('jardim.svg');min-height:270px">
        ${cross}
        <h1 style="font-size:2rem;line-height:1.1"><span class="gold-text">Palavra Cruzada<br>Bíblica</span></h1>
        <div class="kicker">CONHECIMENTO QUE APROXIMA</div>
      </section>
      <button class="btn btn-gold btn-block" style="margin:14px 0 18px" data-play="${nx.id}">Continuar · Desafio ${nx.id} ${I.arrow}</button>
      ${d.arcs.map(a => {
        const cs = d.challenges.filter(c => c.arc === a.n); const dn = cs.filter(c => stars(c.id)).length;
        return `<button class="arc-card parch ${nx.arc === a.n ? 'cur' : ''}" data-arc="${a.n}">
          ${goldIcon(a.icon)}
          <div class="txt"><b>Arco ${a.n}</b><strong>${esc(a.name)}</strong><span>Desafios ${cs[0].id} – ${cs[cs.length - 1].id}</span>
            <div class="meta"><div class="bar"><i style="width:${dn / cs.length * 100}%"></i></div><em>${dn}/${cs.length}</em></div></div>
          <span class="chev">${I.next}</span></button>`;
      }).join('')}
      <div class="signature"><span class="divider">★</span><b>Feito por Eduardo de Souza</b><i>com muito amor, para a minha família. ❤️</i></div>`;
    common(el);
    el.addEventListener('click', e => {
      const a = e.target.closest('[data-arc]'); if (a) go('#/cruzada/arco/' + a.dataset.arc);
      const p = e.target.closest('[data-play]'); if (p) go('#/cruzada/' + p.dataset.play);
    });
  });

  route(/^\/cruzada\/arco\/(\d+)$/, (el, nStr) => {
    const d = D(); const a = d.arcs.find(x => x.n === +nStr); if (!a) { go('#/cruzada'); return; }
    setScene(a.scene);
    const cs = d.challenges.filter(c => c.arc === a.n); const nx = cs.find(c => !stars(c.id));
    const max = Math.max(...cs.map(c => c.w.length)), min = Math.min(...cs.map(c => c.w.length)) - 1;
    el.innerHTML = `${topbar('#/cruzada', 'PALAVRA CRUZADA', 'Bíblica')}
      <div class="arc-head parch">${goldIcon(a.icon)}<h2>Arco ${a.n}</h2><b>${esc(a.name)}</b><p>${esc(a.sub)}</p></div>
      <div class="tiles">${cs.map(c => `<button class="tile ${c.s ? 'special' : ''} ${nx && nx.id === c.id ? 'next' : ''}" data-play="${c.id}" aria-label="Desafio ${c.id}">
          ${c.s ? '<span class="crown">👑</span>' : ''}<b>${c.id}</b><span class="stars">${starHtml(stars(c.id))}</span></button>`).join('')}</div>
      ${nx ? `<button class="btn btn-gold btn-block" data-play="${nx.id}" style="margin-bottom:12px">Jogar o desafio ${nx.id} ${I.arrow}</button>` : ''}
      <div class="chart parch"><h3>Progressão deste arco</h3><small>Número de palavras por desafio</small>
        <div class="bars">${cs.map(c => `<div><span>${c.w.length}</span><i class="${c.s ? 'sp' : ''}" style="height:${25 + 75 * ((c.w.length - min) / (max - min))}%"></i></div>`).join('')}</div>
        <div class="labels">${cs.map(c => `<span>${c.id}</span>`).join('')}</div>
        <p style="margin-top:10px;font-size:.85rem;color:var(--ink-500)">👑 Os desafios ${cs.filter(c => c.s).map(c => c.id).join(' e ')} são especiais deste arco.</p>
      </div>
      <div class="verse-foot parch"><div class="ic">${I.book}</div><p>“${esc(a.verse)}”<cite>${esc(a.ref)} · ACF</cite></p></div>`;
    common(el);
    el.addEventListener('click', e => { const p = e.target.closest('[data-play]'); if (p) go('#/cruzada/' + p.dataset.play); });
  });

  // ---------- Jogo ----------
  route(/^\/cruzada\/(\d+)$/, (el, idStr) => {
    const d = D(); const ch = d.challenges.find(c => c.id === +idStr); if (!ch) { go('#/cruzada'); return; }
    const arc = d.arcs.find(a => a.n === ch.arc);
    setScene(arc.scene);
    setLast('cruzada', '#/cruzada/' + ch.id, `Palavra Cruzada · Desafio ${ch.id}`, ch.t);
    const st = load().cruzada;
    if (st.solved[ch.id] === 'all') { st.solved[ch.id] = ch.w.map((_, i) => i); st.fill[ch.id] = {}; ch.w.forEach(w => cellsOf(w).forEach((k, i) => st.fill[ch.id][k] = w.a[i])); save(); }
    const fill = st.fill[ch.id] = st.fill[ch.id] || {};
    const solved = new Set(st.solved[ch.id] || []);
    const revealed = new Set(Object.keys(st.hints[ch.id + '_cells'] || {}));
    const total = ch.w.length;

    function cellsOf(w) { return [...w.a].map((_, i) => (w.y + (w.d === 'v' ? i : 0)) + ',' + (w.x + (w.d === 'h' ? i : 0))); }
    const cellMap = new Map(); // "y,x" -> {ch, words:[]}
    ch.w.forEach((w, wi) => cellsOf(w).forEach((k, i) => { const c = cellMap.get(k) || { ch: w.a[i], words: [], disp: {} }; c.words.push(wi); c.disp[wi] = [...w.w.toUpperCase().replace(/[\s\-]/g, '')][i]; cellMap.set(k, c); }));
    const locked = k => cellMap.get(k).words.some(wi => solved.has(wi));
    const firstUnsolved = () => { const i = ch.w.findIndex((_, k) => !solved.has(k)); return i < 0 ? 0 : i; };
    let cur = { w: firstUnsolved(), i: 0 };
    { const cs = cellsOf(ch.w[cur.w]); const e = cs.findIndex(k => !fill[k]); cur.i = e < 0 ? 0 : e; }

    el.innerHTML = `${topbar('#/cruzada/arco/' + ch.arc, 'PALAVRA CRUZADA', `Arco ${ch.arc} · ${esc(arc.name)}`)}
      <div class="cw-info parch">${goldIcon(arc.icon)}
        <div class="txt"><b>${ch.s ? '👑 ' : ''}Desafio ${ch.id}</b><span>${esc(ch.t)}</span></div>
        <div class="cnt"><b id="cnt">0/${total}</b><span>palavras</span><div class="bar"><i id="cbar" style="width:0"></i></div></div>
      </div>
      <div class="cw-board"><div class="cw-grid" id="grid" style="grid-template-columns:repeat(${ch.cols},var(--cell))">
        ${Array.from({ length: ch.rows }, (_, y) => Array.from({ length: ch.cols }, (_, x) => {
          const k = y + ',' + x; const c = cellMap.get(k);
          if (!c) return '<div class="cw-cell void"></div>';
          const num = ch.w.find(w => w.y === y && w.x === x);
          return `<button class="cw-cell" data-k="${k}" aria-label="casa">${num ? `<span class="num">${num.n}</span>` : ''}<span class="l"></span></button>`;
        }).join('')).join('')}
      </div></div>
      <div class="cw-tools"><button class="btn btn-ghost" data-reveal>${I.bulb} Revelar letra</button><button class="btn btn-ghost" data-list>${I.list} Todas as pistas</button></div>
      <div id="after"></div>
      <div class="kb" id="kb">
        <div class="cw-clue parch"><button class="nav" data-prev aria-label="Pista anterior">${I.back}</button><div class="mid" id="clue"></div><button class="nav" data-nextw aria-label="Próxima pista">${I.next}</button></div>
        ${['QWERTYUIOP', 'ASDFGHJKL'].map(r => `<div class="kb-row">${[...r].map(l => `<button class="key" data-key="${l}">${l}</button>`).join('')}</div>`).join('')}
        <div class="kb-row"><button class="key wide" data-key="DEL" aria-label="Apagar">${I.del}</button>${[...'ZXCVBNM'].map(l => `<button class="key" data-key="${l}">${l}</button>`).join('')}<button class="key wide go" data-key="NEXT" aria-label="Próxima palavra">${I.arrow}</button></div>
      </div>`;
    common(el);
    const gridEl = $('#grid', el);
    function sizeCells() {
      const avail = Math.min($('.cw-board', el).getBoundingClientRect().width - 28, 620);
      const c = Math.max(24, Math.min(46, Math.floor((avail - (ch.cols - 1) * 3) / ch.cols)));
      gridEl.style.setProperty('--cell', c + 'px');
    }
    sizeCells(); const onResize = () => sizeCells(); addEventListener('resize', onResize);

    function paint() {
      const curCells = cellsOf(ch.w[cur.w]);
      $$('.cw-cell[data-k]', el).forEach(b => {
        const k = b.dataset.k; const c = cellMap.get(k); const isLocked = locked(k);
        let letter = fill[k] || '';
        if (isLocked) { const wi = c.words.find(x => solved.has(x)); const dc = c.disp[wi]; letter = plain(dc) === c.ch ? dc : c.ch; }
        $('.l', b).textContent = letter;
        b.classList.toggle('solved', isLocked);
        b.classList.toggle('inword', !isLocked && curCells.includes(k));
        b.classList.toggle('cur', !done() && curCells[cur.i] === k);
        b.classList.toggle('revealed', revealed.has(k) && !isLocked);
      });
      const w = ch.w[cur.w];
      const L = w.a.length; const two = w.w.includes(' ') || w.w.includes('-');
      $('#clue', el).innerHTML = done() ? `<b>Parabéns! Você completou o desafio.</b>` : `<b>${w.n}. ${esc(w.c)}</b><span class="len">${L} letras${two ? ' · duas palavras' : ''} · ${w.d === 'h' ? 'horizontal' : 'vertical'}</span>`;
      // mantém a casa atual visível acima do teclado
      const cb = $('.cw-cell.cur', el), kbEl = $('#kb', el);
      if (cb && kbEl && kbEl.style.display !== 'none') { const r = cb.getBoundingClientRect(), lim = kbEl.getBoundingClientRect().top - 12; if (r.bottom > lim) window.scrollBy({ top: r.bottom - lim + 8, behavior: 'smooth' }); else if (r.top < 70) window.scrollBy({ top: r.top - 80, behavior: 'smooth' }); }
      $('#cnt', el).textContent = `${solved.size}/${total}`; $('#cbar', el).style.width = (solved.size / total * 100) + '%';
    }
    const done = () => solved.size === total;
    function persist() { st.solved[ch.id] = [...solved]; save(); }

    function selectCell(k) {
      const c = cellMap.get(k); if (!c) return;
      const curCells = cellsOf(ch.w[cur.w]);
      if (curCells[cur.i] === k && c.words.length > 1) { const other = c.words.find(x => x !== cur.w); cur = { w: other, i: cellsOf(ch.w[other]).indexOf(k) }; }
      else { const wi = c.words.includes(cur.w) ? cur.w : (c.words.find(x => !solved.has(x)) ?? c.words[0]); cur = { w: wi, i: cellsOf(ch.w[wi]).indexOf(k) }; }
      sfx.tap(); paint();
    }
    function gotoWord(wi) { const cs = cellsOf(ch.w[wi]); let i = cs.findIndex(k => !fill[k] && !locked(k)); if (i < 0) i = 0; cur = { w: wi, i }; paint(); }
    function nextWord(dir = 1) {
      for (let s = 1; s <= total; s++) { const wi = (cur.w + dir * s + total * 2) % total; if (!solved.has(wi)) { gotoWord(wi); return; } }
    }
    function checkWord(wi) {
      const w = ch.w[wi]; const cs = cellsOf(w);
      if (solved.has(wi) || cs.some(k => !fill[k] && !locked(k))) return null;
      const ok = cs.every((k, i) => (locked(k) ? cellMap.get(k).ch : fill[k]) === w.a[i]);
      if (ok) { solved.add(wi); cs.forEach((k, i) => fill[k] = w.a[i]); return true; }
      return false;
    }
    function afterType() {
      const touched = cellMap.get(cellsOf(ch.w[cur.w])[cur.i]).words;
      let anyOk = false, anyBad = false;
      for (const wi of new Set([cur.w, ...touched])) { const r = checkWord(wi); if (r === true) anyOk = true; if (r === false && wi === cur.w) anyBad = true; }
      if (anyOk) {
        persist(); sfx.good();
        if (done()) { paint(); finish(); return true; }
        if (solved.has(cur.w)) { nextWord(); return true; }
      }
      if (anyBad) {
        sfx.bad();
        const w = ch.w[cur.w];
        cellsOf(w).forEach((k, i) => { if (!locked(k) && fill[k] !== w.a[i]) { const b = $(`.cw-cell[data-k="${k}"]`, el); b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong'); } });
        toast('Quase! As letras em vermelho não conferem.');
      }
      return false;
    }
    function type(L) {
      if (done()) return;
      const cs = cellsOf(ch.w[cur.w]);
      // casa já resolvida: se a letra digitada é a mesma, apenas avança
      if (locked(cs[cur.i]) && cellMap.get(cs[cur.i]).ch === L) { if (cur.i + 1 < cs.length) cur.i++; paint(); return; }
      while (cur.i < cs.length && locked(cs[cur.i])) cur.i++;
      if (cur.i >= cs.length) { cur.i = cs.length - 1; }
      const k = cs[cur.i]; if (locked(k)) return;
      fill[k] = L; save();
      $$('.cw-cell.wrong', el).forEach(b => b.classList.remove('wrong'));
      // avança para a próxima casa livre
      const j = cur.i + 1;
      const moved = afterType();
      if (!moved) { if (j < cs.length) cur.i = j; }
      paint();
    }
    function del() {
      if (done()) return;
      const cs = cellsOf(ch.w[cur.w]); let k = cs[cur.i];
      if (fill[k] && !locked(k)) { delete fill[k]; }
      else { let j = cur.i - 1; while (j >= 0 && locked(cs[j])) j--; if (j >= 0) { cur.i = j; delete fill[cs[j]]; } }
      save(); $$('.cw-cell.wrong', el).forEach(b => b.classList.remove('wrong')); paint();
    }
    function reveal() {
      if (done()) return;
      const w = ch.w[cur.w]; const cs = cellsOf(w);
      let i = cs.findIndex((k, n) => !locked(k) && fill[k] !== w.a[n]); if (i < 0) return;
      const k = cs[i]; fill[k] = w.a[i]; revealed.add(k);
      st.hints[ch.id] = (st.hints[ch.id] || 0) + 1; const rc = st.hints[ch.id + '_cells'] = st.hints[ch.id + '_cells'] || {}; rc[k] = 1; save();
      cur.i = i; const moved = afterType(); if (!moved) { let j = i + 1; while (j < cs.length && (locked(cs[j]) || fill[cs[j]] === w.a[j])) j++; if (j < cs.length) cur.i = j; } paint();
    }
    function finish() {
      const h = st.hints[ch.id] || 0; const sN = h === 0 ? 3 : h <= 2 ? 2 : 1;
      st.stars[ch.id] = Math.max(st.stars[ch.id] || 0, sN); save();
      sfx.win(); confetti();
      const nextId = ch.id < d.challenges.length ? ch.id + 1 : null;
      $('#after', el).innerHTML = `<div style="display:grid;gap:10px;margin-bottom:14px">${nextId ? `<button class="btn btn-green btn-block" data-go="${nextId}">Próximo desafio ${I.arrow}</button>` : ''}<button class="btn btn-ghost btn-block" data-replay>Jogar de novo</button></div>`;
      $('#kb', el).style.display = 'none';
      const learned = ch.w.slice(0, 4).map(w => `<div><b>${esc(w.w)}</b> — ${esc(w.c)} <i style="color:var(--gold-700)">${esc(w.r)}</i></div>`).join('');
      const m = modal(`<div class="badge">${ch.s ? '👑' : '📖'}</div><h2>Desafio concluído!</h2>
        <div class="stars-big">${starHtml(sN)}</div>
        <p>${sN === 3 ? 'Sem nenhuma ajuda. Que memória!' : sN === 2 ? 'Muito bem! Usou pouca ajuda.' : 'Muito bem! Cada desafio ensina algo novo.'}</p>
        <div class="learned">${learned}</div>
        <div class="actions">${nextId ? `<button class="btn btn-gold" data-n>Próximo desafio ${I.arrow}</button>` : '<p><b>Você completou todos os desafios! Glória a Deus!</b></p>'}<button class="btn btn-ghost" data-a>Ver os desafios do arco</button></div>`);
      m.el.addEventListener('click', e => { if (e.target.closest('[data-n]')) { m.close(); go('#/cruzada/' + nextId); } if (e.target.closest('[data-a]')) { m.close(); go('#/cruzada/arco/' + ch.arc); } });
    }
    function clueList() {
      const s = sheet(`<h3>Pistas</h3><div class="clue-list">${['h', 'v'].map(dd => `<h4>${dd === 'h' ? 'Horizontais' : 'Verticais'}</h4>${ch.w.map((w, i) => w.d === dd ? `<button data-w="${i}" class="${solved.has(i) ? 'ok' : ''}"><b>${w.n}.</b><span>${esc(w.c)} (${w.a.length})</span></button>` : '').join('')}`).join('')}</div><button class="btn btn-green btn-block" style="margin-top:14px" data-close>Fechar</button>`);
      s.el.addEventListener('click', e => { const b = e.target.closest('[data-w]'); if (b) { s.close(); gotoWord(+b.dataset.w); } });
    }

    gridEl.addEventListener('click', e => { const b = e.target.closest('.cw-cell[data-k]'); if (b) selectCell(b.dataset.k); });
    const kb = $('#kb', el);
    kb.addEventListener('pointerdown', e => { const k = e.target.closest('[data-key]'); if (!k) return; e.preventDefault(); k.classList.add('down'); setTimeout(() => k.classList.remove('down'), 120); const v = k.dataset.key; if (v === 'DEL') del(); else if (v === 'NEXT') nextWord(); else { sfx.tap(); type(v); } });
    el.addEventListener('click', e => {
      if (e.target.closest('[data-prev]')) nextWord(-1);
      if (e.target.closest('[data-nextw]')) nextWord(1);
      if (e.target.closest('[data-reveal]')) reveal();
      if (e.target.closest('[data-list]')) clueList();
      const g = e.target.closest('[data-go]'); if (g) go('#/cruzada/' + g.dataset.go);
      if (e.target.closest('[data-replay]')) { st.fill[ch.id] = {}; st.solved[ch.id] = []; st.hints[ch.id] = 0; delete st.hints[ch.id + '_cells']; save(); App.rerender(); }
    });
    const onKey = e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'Backspace') { e.preventDefault(); del(); }
      else if (e.key === 'Enter' || e.key === 'Tab') { e.preventDefault(); nextWord(e.shiftKey ? -1 : 1); }
      else { const L = plain(e.key); if (L.length === 1 && e.key.length === 1) type(L); }
    };
    addEventListener('keydown', onKey);
    paint();
    if (done()) { $('#kb', el).style.display = 'none'; $('#after', el).innerHTML = `<div style="display:grid;gap:10px;margin-bottom:14px">${ch.id < d.challenges.length ? `<button class="btn btn-green btn-block" data-go="${ch.id + 1}">Próximo desafio ${I.arrow}</button>` : ''}<button class="btn btn-ghost btn-block" data-replay>Jogar de novo</button></div>`; }
    return { leave() { removeEventListener('resize', onResize); removeEventListener('keydown', onKey); } };
  });
})();
