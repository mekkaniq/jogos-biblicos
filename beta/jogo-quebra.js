/* Quebra-Cabeça — monte as cenas da Bíblia trocando as peças de lugar. Calmo, sem tempo. */
(function () {
  const { $, esc, I, route, go, setLast, sfx } = App;
  const K = App.kit;

  // cena do app + a Lumi (para as peças terem detalhes) + uma frase curta e a referência
  const TEMAS = [
    { sc: 'aurora', lumi: ['lumi-festa', .30, .60, .62], nome: 'No princípio', win: 'Deus disse: haja luz. E houve luz. Mais tarde, Jesus diria: Eu sou a luz do mundo.', ref: 'Gênesis 1:3 · João 8:12' },
    { sc: 'campo', lumi: ['lumi-oi', .30, .62, .60], nome: 'Os campos de Belém', win: 'Pastores guardavam as suas ovelhas à noite quando ouviram a boa notícia do nascimento do Salvador.', ref: 'Lucas 2:8-11' },
    { sc: 'cidade', lumi: ['lumi-lendo', .30, .08, .64], nome: 'Jerusalém', win: 'O povo de Deus se alegrava em subir à casa do Senhor.', ref: 'Salmos 122:1' },
    { sc: 'confins', lumi: ['lumi-dica', .28, .62, .56], nome: 'Até os confins da terra', win: 'Jesus enviou os seus discípulos para levar a boa notícia a todos os povos.', ref: 'Atos 1:8' },
    { sc: 'deserto', lumi: ['lumi-pensando', .28, .08, .60], nome: 'O pão no deserto', win: 'Deus deu pão do céu ao povo no deserto. Jesus disse: Eu sou o pão da vida.', ref: 'Êxodo 16:4 · João 6:35' },
    { sc: 'galileia', lumi: ['lumi-oi', .30, .62, .62], nome: 'O mar da Galileia', win: 'Ali Jesus chamou pescadores para o seguirem.', ref: 'Mateus 4:18-19' },
    { sc: 'jardim', lumi: ['lumi-festa', .30, .06, .62], nome: 'O jardim do Éden', win: 'Deus plantou um jardim e colocou ali o homem que tinha formado.', ref: 'Gênesis 2:8' },
    { sc: 'mar', lumi: ['lumi-dica', .28, .64, .58], nome: 'A arca sobre as águas', win: 'Deus se lembrou de Noé, e a arca repousou sobre os montes.', ref: 'Gênesis 8:1-4' },
    { sc: 'monte', lumi: ['lumi-lendo', .30, .60, .62], nome: 'O monte Sinai', win: 'O Senhor falou ao seu povo no monte e deu a sua lei.', ref: 'Êxodo 19:20' },
    { sc: 'noite', lumi: ['lumi-pensando', .28, .08, .62], nome: 'A noite em Belém', win: 'Uma estrela guiou os magos até onde estava o menino.', ref: 'Mateus 2:9-10' },
    { sc: 'palacio', lumi: ['lumi-oi', .30, .62, .60], nome: 'O rei Salomão', win: 'Salomão pediu a Deus um coração sábio para governar o povo.', ref: '1 Reis 3:9' }
  ];
  const LEVELS = [];
  [[1, 3, 3], [2, 4, 4], [3, 5, 5]].forEach(([t, cols, rows]) => TEMAS.forEach((tema, k) => {
    const idx = (k + (t - 1) * 4) % TEMAS.length, T = TEMAS[idx];
    LEVELS.push({ n: (t - 1) * 100 + k + 1, t, i: k + 1, cols, rows, tema: T, label: `${cols * rows} peças`, scene: T.sc });
  }));
  window.QUEBRA_DATA = { levels: LEVELS };

  route(/^\/quebra$/, el => {
    K.home(el, {
      id: 'quebra', title: 'QUEBRA-CABEÇA', sub: 'Cenas da Bíblia', scene: 'jardim', icon: I.puzzle, heroTitle: 'Quebra-Cabeça', heroSub: 'Troque as peças de lugar e monte a cena, sem pressa.', unit: 'fase', unitPl: 'fases',
      trackDesc: ['', '9 peças: para começar com calma.', '16 peças: um pouco mais de atenção.', '25 peças: para os pacientes!'],
      levels: LEVELS.map(l => ({ n: l.n, t: l.t, i: l.i, label: l.label, scene: l.scene })),
      howto: ['Arraste uma peça até outra para <b>trocar as duas de lugar</b>. Ou toque numa peça e depois em outra.', 'Peça no lugar certo fica fixa e acende uma bordinha dourada.', 'Precisa de ajuda? Toque em <b>Ver modelo</b> para espiar a cena, ou em <b>Números</b>.']
    });
  });

  route(/^\/quebra\/(\d+)$/, (el, nStr) => {
    const L = LEVELS.find(l => l.n === +nStr); if (!L) return go('#/quebra');
    App.setScene(L.scene);
    const { cols, rows, tema } = L;
    setLast('quebra', '#/quebra/' + L.n, `Quebra-cabeça · ${K.label(L)}`, tema.nome);
    const avail = Math.min(400, (el.clientWidth || window.innerWidth) - 8);
    const W = Math.floor(avail / cols) * cols, H = Math.round(W * 3 / 4 / rows) * rows;
    const pw = W / cols, ph = H / rows, N = cols * rows;
    // fundo "cobrindo" o quadro: cena 3:2 + Lumi por cima
    const sc = Math.max(W / 1200, H / 800), sw = 1200 * sc, sh = 800 * sc, sx = (W - sw) / 2, sy = (H - sh) / 2;
    const [lname, lfrac, lx, ly] = tema.lumi, lw = W * lfrac, lh = lw * 1.0, lxx = W * lx, lyy = H * ly - lh * .4;
    const bg = (i) => {
      const c = i % cols, r = Math.floor(i / cols), ox = c * pw, oy = r * ph;
      return `background-image:url('${lname}.webp'),url('${tema.sc}.svg');background-repeat:no-repeat;background-size:${lw}px ${lh}px,${sw}px ${sh}px;background-position:${lxx - ox}px ${lyy - oy}px,${sx - ox}px ${sy - oy}px`;
    };
    el.innerHTML = `${K.topbar('#/quebra', `FASE ${L.i}`, `Quebra-cabeça · ${K.TRK[L.t]}`)}
      <div class="lb-story parch"><b>${esc(tema.nome)}</b><span>Monte a cena trocando as peças de lugar.</span></div>
      <div class="qb-wrap"><div class="qb" id="qb" style="width:${W}px;height:${H}px">
        ${Array.from({ length: N }, (_, i) => `<div class="qb-p" data-p="${i}" style="width:${pw}px;height:${ph}px;${bg(i)}"><i>${i + 1}</i></div>`).join('')}
        <div class="qb-model" id="qm" style="${bg(0).replace(/background-position:[^;]*/, '').replace(/background-size:[^;]*/, '')}background-size:${lw}px ${lh}px,${sw}px ${sh}px;background-position:${lxx}px ${lyy}px,${sx}px ${sy}px"></div>
      </div></div>
      <div class="lb-tools"><button class="btn btn-ghost" data-model>Ver modelo</button><button class="btn btn-ghost" data-nums>Números</button></div>
      <p class="vs-tip" id="qtip">Arraste uma peça até outra para trocar de lugar.</p>`;
    K.common(el);
    const board = $('#qb', el), model = $('#qm', el), tip = $('#qtip', el);
    // embaralha de modo que nenhuma peça comece no lugar certo
    const R = K.rng(L.n * 104729 + 7);
    let order = Array.from({ length: N }, (_, i) => i);
    for (let tries = 0; tries < 50; tries++) {
      order = K.shuffle(order, R);
      if (order.every((p, s) => p !== s)) break;
    }
    // order[slot] = peça que está nesse slot
    const pos = s => `translate(${(s % cols) * pw}px,${Math.floor(s / cols) * ph}px)`;
    const pieceEl = i => board.querySelector(`.qb-p[data-p="${i}"]`);
    let helped = false, sel = null, done = false;
    function place() {
      order.forEach((p, s) => { const e = pieceEl(p); e.style.transform = pos(s); e.classList.toggle('ok', p === s); });
    }
    place(); board.__order = order;
    const slotAt = (x, y) => { const b = board.getBoundingClientRect(); const c = Math.floor((x - b.left) / pw), r = Math.floor((y - b.top) / ph); return c < 0 || r < 0 || c >= cols || r >= rows ? -1 : r * cols + c; };
    function swap(a, b) {   // a, b = slots
      if (a === b || a < 0 || b < 0 || order[a] === a || order[b] === b) return false;
      [order[a], order[b]] = [order[b], order[a]]; place(); sfx.tap();
      if (order[a] === a || order[b] === b) sfx.good();
      if (order.every((p, s) => p === s)) win();
      return true;
    }
    function clearSel() { board.querySelectorAll('.sel').forEach(x => x.classList.remove('sel')); sel = null; }
    let drag = null;
    board.addEventListener('pointerdown', e => {
      const pe = e.target.closest('.qb-p'); if (!pe || done || pe.classList.contains('ok')) return;
      e.preventDefault();
      const slot = order.indexOf(+pe.dataset.p), b = board.getBoundingClientRect();
      drag = { pe, slot, sx: e.clientX, sy: e.clientY, moved: false, ox: (slot % cols) * pw, oy: Math.floor(slot / cols) * ph };
      try { board.setPointerCapture(e.pointerId); } catch (x) { }
    });
    board.addEventListener('pointermove', e => {
      if (!drag) return;
      const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
      if (!drag.moved && Math.hypot(dx, dy) < 8) return;
      if (!drag.moved) { drag.moved = true; drag.pe.classList.add('lift'); }
      drag.pe.style.transform = `translate(${drag.ox + dx}px,${drag.oy + dy}px) scale(1.04)`;
    });
    const end = e => {
      if (!drag) return; const d = drag; drag = null;
      d.pe.classList.remove('lift');
      if (d.moved) { clearSel(); const to = slotAt(e.clientX, e.clientY); if (!swap(d.slot, to)) place(); return; }
      // toque: seleciona / troca
      if (sel === null) { sel = d.slot; d.pe.classList.add('sel'); }
      else if (sel === d.slot) clearSel();
      else { const a = sel; clearSel(); swap(a, d.slot); }
    };
    board.addEventListener('pointerup', end); board.addEventListener('pointercancel', e => { if (drag) { drag.pe.classList.remove('lift'); drag = null; place(); } });
    el.addEventListener('click', e => {
      if (e.target.closest('[data-model]')) { model.classList.add('on'); sfx.tap(); setTimeout(() => model.classList.remove('on'), 2600); }
      const nb = e.target.closest('[data-nums]');
      if (nb) { helped = true; board.classList.toggle('nums'); sfx.tap(); }
    });
    function win() {
      done = true; clearSel(); board.classList.add('full'); tip.textContent = 'Cena montada!';
      const stars = helped ? 2 : 3;
      setTimeout(() => K.finish({ el, id: 'quebra', n: L.n, stars, badge: '🧩', title: tema.nome, text: esc(tema.win), learned: `${I.book} <b>${esc(tema.ref)}</b>`, next: (x => x && '#/quebra/' + x.n)(K.nextOf(LEVELS, L)), nextLabel: 'Próximo quebra-cabeça' }), 500);
    }
  });
})();
