/* Roda de Letras — passe o dedo pelas letras para formar as palavras da cruzadinha */
(function () {
  const { $, $$, esc, I, save, route, go, setLast, toast, sfx } = App;
  const K = App.kit;
  const D = () => window.RODA_DATA;
  const SCN = ['mar', 'galileia', 'campo', 'aurora', 'jardim', 'deserto', 'monte', 'cidade', 'palacio', 'noite', 'confins'];
  const scene = n => SCN[Math.floor((n - 1) / 4) % SCN.length];
  const S = () => K.st('roda', { cur: {} });

  route(/^\/roda$/, el => {
    const ls = D().levels.map(l => ({ n: l.n, t: l.t, i: l.i, label: `${l.words.length} palavras`, scene: scene(l.i) }));
    K.home(el, {
      id: 'roda', title: 'RODA', sub: 'de letras', scene: 'mar', icon: I.wheel, heroTitle: 'Roda de Letras', heroSub: 'Passe o dedo pelas letras e forme as palavras escondidas.', unit: 'fase', unitPl: 'fases',
      trackDesc: ['', 'Rodas de 5 letras para começar.', 'Rodas de 6 letras e mais palavras.', 'Rodas de 7 letras: muitas palavras escondidas!'], levels: ls,
      howto: ['<b>Arraste o dedo</b> de uma letra para outra para formar uma palavra e solte.', 'Se preferir, toque nas letras uma a uma e depois no botão <b>✓</b>.', 'Cada palavra certa aparece na cruzadinha. Palavras extras valem como <b>bônus</b>.', 'Os acentos não importam: LEAO vale LEÃO.', 'Travou? A <b>dica</b> revela uma letra. Sem dicas, 3 estrelas.']
    });
  });

  route(/^\/roda\/(\d+)$/, (el, nStr) => {
    const L = D().levels.find(l => l.n === +nStr); if (!L) return go('#/roda');
    App.setScene(scene(L.i));
    setLast('roda', '#/roda/' + L.n, `Roda de Letras · ${K.label(L)}`, `${L.words.length} palavras para achar`);
    const s = S(); const P = s.cur[L.n] = s.cur[L.n] || { found: [], bonus: [], hints: [] };
    let letters = [...L.letters];
    const cellsOf = w => [...w.p].map((_, i) => (w.y + (w.dir === 'v' ? i : 0)) + ',' + (w.x + (w.dir === 'h' ? i : 0)));
    const cellCh = {}; L.words.forEach(w => cellsOf(w).forEach((k, i) => cellCh[k] = w.p[i]));
    const shown = () => { const o = new Set(P.hints); L.words.filter(w => P.found.includes(w.p)).forEach(w => cellsOf(w).forEach(k => o.add(k))); return o; };
    const csz = Math.min(42, Math.floor((Math.min(window.innerWidth, 560) - 40) / L.cols));
    el.innerHTML = `${K.topbar('#/roda', `FASE ${L.i}`, `Roda de Letras · ${K.TRK[L.t]}`)}
      <div class="rd-board" style="--cs:${csz}px;grid-template-columns:repeat(${L.cols},var(--cs));grid-template-rows:repeat(${L.rows},var(--cs))" id="board"></div>
      <div id="disc"></div>
      <div class="rd-play">
        <div class="rd-word" id="word">&nbsp;</div>
        <div class="rd-wheel" id="wheel"><svg id="lines"></svg></div>
        <div class="rd-tools">
          <button class="btn btn-ghost" data-shuf>${I.shuffle}<span>Misturar</span></button>
          <button class="btn btn-ghost" data-bonus>⭐<span>Bônus <em id="nb">${P.bonus.length}</em></span></button>
          <button class="btn btn-ghost" data-hint>${I.bulb}<span>Dica</span></button>
          <button class="btn btn-gold" data-go>✓<span>Pronto</span></button>
        </div>
      </div>`;
    K.common(el);
    const board = $('#board', el), wheel = $('#wheel', el), lines = $('#lines', el);
    function drawBoard(flash) {
      const sh = shown(); let html = '';
      for (let y = 0; y < L.rows; y++) for (let x = 0; x < L.cols; x++) {
        const k = y + ',' + x;
        html += cellCh[k] ? `<div class="rd-c ${sh.has(k) ? 'on' : ''} ${flash && flash.includes(k) ? 'new' : ''}" style="grid-row:${y + 1};grid-column:${x + 1}">${sh.has(k) ? cellCh[k] : ''}</div>` : '';
      }
      board.innerHTML = html;
    }
    function drawWheel() {
      const n = letters.length, R = 38;
      wheel.querySelectorAll('.rd-l').forEach(b => b.remove());
      letters.forEach((ch, i) => {
        const a = -Math.PI / 2 + i * 2 * Math.PI / n;
        const b = document.createElement('button'); b.className = 'rd-l'; b.dataset.i = i; b.textContent = ch;
        b.style.left = (50 + R * Math.cos(a)) + '%'; b.style.top = (50 + R * Math.sin(a)) + '%';
        wheel.appendChild(b);
      });
    }
    let path = [];
    const word = () => path.map(i => letters[i]).join('');
    function showPath() {
      $('#word', el).innerHTML = path.length ? esc(word()) : '&nbsp;';
      $$('.rd-l', wheel).forEach(b => b.classList.toggle('sel', path.includes(+b.dataset.i)));
      const wr = wheel.getBoundingClientRect();
      const pts = path.map(i => { const r = $(`.rd-l[data-i="${i}"]`, wheel).getBoundingClientRect(); return [r.left + r.width / 2 - wr.left, r.top + r.height / 2 - wr.top]; });
      lines.setAttribute('viewBox', `0 0 ${wr.width} ${wr.height}`);
      lines.innerHTML = pts.length > 1 ? `<polyline points="${pts.map(p => p.join(',')).join(' ')}" />` : '';
    }
    function submit() {
      const w = word(); path = []; showPath();
      if (w.length < 3) { if (w.length) toast('As palavras têm pelo menos 3 letras.'); return; }
      const hit = L.words.find(x => x.p === w);
      if (hit) {
        if (P.found.includes(w)) { toast('Essa você já achou!'); return; }
        P.found.push(w); save(); sfx.good(); drawBoard(cellsOf(hit));
        $('#disc', el).innerHTML = `<div class="rd-disc parch pop"><b>${esc(hit.w)}</b>${hit.d ? `<span>${esc(hit.d)} <i>${esc(hit.r)}</i></span>` : '<span>Muito bem!</span>'}</div>`;
        if (L.words.every(x => P.found.includes(x.p))) {
          const h = P.hints.length; const stars = h === 0 ? 3 : h <= 2 ? 2 : 1;
          delete s.cur[L.n]; save();
          setTimeout(() => K.finish({ el, id: 'roda', n: L.n, stars, title: 'Roda completa!', text: `Você achou ${L.words.length} palavras${P.bonus.length ? ` e mais ${P.bonus.length} de bônus` : ''}.`, learned: L.words.filter(x => x.d).map(x => `<div><b>${esc(x.w)}</b> — ${esc(x.d)}</div>`).join(''), next: (x => x && '#/roda/' + x.n)(K.nextOf(D().levels, L)) }), 900);
        }
      } else if (L.bonus.includes(w)) {
        if (P.bonus.includes(w)) { toast('Esse bônus você já tem.'); return; }
        P.bonus.push(w); save(); sfx.good(); $('#nb', el).textContent = P.bonus.length; toast(`⭐ Palavra bônus: ${w}`);
      } else { sfx.bad(); const we = $('#word', el); we.textContent = w; we.classList.remove('shake'); void we.offsetWidth; we.classList.add('shake'); setTimeout(() => { if (!path.length) we.innerHTML = '&nbsp;'; }, 700); }
    }
    // arrastar o dedo pelas letras
    let dragging = false, moved = false;
    const letterAt = (x, y) => { const t = document.elementFromPoint(x, y); const b = t && t.closest('.rd-l'); if (!b) return -1; const r = b.getBoundingClientRect(); const cx = r.left + r.width / 2, cy = r.top + r.height / 2; return Math.hypot(x - cx, y - cy) < r.width * 0.42 ? +b.dataset.i : -1; };
    wheel.addEventListener('pointerdown', e => {
      const b = e.target.closest('.rd-l'); if (!b) return; e.preventDefault();
      const i = +b.dataset.i; dragging = true; moved = false;
      if (path.includes(i)) { if (path[path.length - 1] === i) path.pop(); else return; } else path.push(i);
      sfx.tap(); showPath(); try { wheel.setPointerCapture(e.pointerId); } catch (err) { }
    });
    wheel.addEventListener('pointermove', e => {
      if (!dragging) return; const i = letterAt(e.clientX, e.clientY); if (i < 0) return;
      if (path.length > 1 && path[path.length - 2] === i) { path.pop(); moved = true; showPath(); return; }
      if (!path.includes(i)) { path.push(i); moved = true; sfx.tap(); showPath(); }
    });
    const up = () => { if (!dragging) return; dragging = false; if (moved && path.length >= 2) submit(); };
    wheel.addEventListener('pointerup', up); wheel.addEventListener('pointercancel', up);
    el.addEventListener('click', e => {
      if (e.target.closest('[data-go]')) return submit();
      if (e.target.closest('[data-shuf]')) { path = []; letters = K.shuffle(letters); drawWheel(); showPath(); sfx.tap(); }
      if (e.target.closest('[data-bonus]')) toast(P.bonus.length ? `Bônus: ${P.bonus.join(', ')}` : 'Ainda sem bônus. Ache palavras que não estão na cruzadinha!', 3200);
      if (e.target.closest('[data-hint]')) {
        const sh = shown(); const miss = L.words.filter(w => !P.found.includes(w.p)).flatMap(w => cellsOf(w)).filter(k => !sh.has(k));
        if (!miss.length) return;
        const k = miss[Math.floor(Math.random() * miss.length)]; P.hints.push(k);
        // se a dica completar uma palavra, ela conta como achada
        L.words.forEach(w => { if (!P.found.includes(w.p) && cellsOf(w).every(c => shown().has(c))) P.found.push(w.p); });
        save(); sfx.good(); drawBoard([k]);
        if (L.words.every(x => P.found.includes(x.p))) { delete s.cur[L.n]; save(); setTimeout(() => K.finish({ el, id: 'roda', n: L.n, stars: 1, title: 'Roda completa!', next: (x => x && '#/roda/' + x.n)(K.nextOf(D().levels, L)) }), 900); }
      }
    });
    drawBoard(); drawWheel(); showPath();
  });
})();
