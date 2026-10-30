/* Labirinto — guie a Lumi com o dedo até o fim do caminho. Calmo, sem tempo e sem pressão. */
(function () {
  const { $, esc, I, route, go, setLast, sfx } = App;
  const K = App.kit;

  // 10 pequenas histórias (cada fase usa uma). Só referência e frase própria; nada de imagem de Jesus.
  const TEMAS = [
    { sc: 'campo', goal: '🐑', nome: 'A ovelha perdida', go: 'Ajude a Lumi a achar a ovelhinha que se perdeu.', win: 'O pastor deixou as outras e foi buscar a que se perdeu, e ficou alegre ao achá-la.', ref: 'Lucas 15:4-6' },
    { sc: 'mar', goal: '🚢', nome: 'A arca de Noé', go: 'Leve a Lumi até a arca antes de a chuva começar.', win: 'Deus abriu um caminho de salvação para Noé e a sua família.', ref: 'Gênesis 7:1' },
    { sc: 'deserto', goal: '🔥', nome: 'A coluna de fogo', go: 'Siga a luz que guiava o povo pelo deserto.', win: 'O Senhor ia adiante do povo, de dia numa coluna de nuvem e de noite numa coluna de fogo.', ref: 'Êxodo 13:21' },
    { sc: 'noite', goal: '⭐', nome: 'A estrela de Belém', go: 'Siga a estrela com os magos até Belém.', win: 'Os magos viram a estrela e se alegraram muito.', ref: 'Mateus 2:9-10' },
    { sc: 'jardim', goal: '🌿', nome: 'O Senhor é o meu pastor', go: 'Leve a Lumi para as águas tranquilas.', win: 'O Senhor é o meu pastor; nada me faltará.', ref: 'Salmos 23:1' },
    { sc: 'cidade', goal: '🌳', nome: 'Zaqueu', go: 'Ajude Zaqueu a chegar à árvore para ver quem passava.', win: 'Zaqueu subiu numa árvore para ver Jesus, e Jesus o chamou pelo nome.', ref: 'Lucas 19:4-5' },
    { sc: 'galileia', goal: '🏡', nome: 'Os pastores de Belém', go: 'Os pastores foram depressa: leve a Lumi com eles.', win: 'Os pastores foram depressa e acharam o menino deitado numa manjedoura.', ref: 'Lucas 2:15-16' },
    { sc: 'monte', goal: '🌅', nome: 'O Jordão', go: 'Atravesse o povo em terra seca.', win: 'Os sacerdotes ficaram firmes em terra seca no meio do Jordão, e todo o povo passou.', ref: 'Josué 3:17' },
    { sc: 'aurora', goal: '🌷', nome: 'O túmulo vazio', go: 'Corra com as mulheres até o túmulo, ao amanhecer.', win: 'O anjo disse: Não está aqui, porque ressuscitou, como disse.', ref: 'Mateus 28:5-6' },
    { sc: 'palacio', goal: '🍞', nome: 'A estrada de Emaús', go: 'Caminhe com os dois discípulos até Emaús.', win: 'Jesus mesmo se aproximou e ia com eles.', ref: 'Lucas 24:15' }
  ];

  // níveis: n = (trilha-1)*100 + i
  const LEVELS = [];
  for (let t = 1; t <= 3; t++) for (let i = 1; i <= 20; i++) {
    const g = Math.floor((i - 1) / 7);
    const cols = t === 1 ? 5 + g : t === 2 ? 8 + g : 10 + g;
    const rows = cols + (t === 1 ? 2 : t === 2 ? 3 : 4);
    const tema = TEMAS[(i - 1 + (t - 1) * 3) % TEMAS.length];
    LEVELS.push({ n: (t - 1) * 100 + i, t, i, cols, rows, extra: t === 1 ? .14 : t === 2 ? .05 : 0, tema, label: `${cols}×${rows}`, scene: tema.sc });
  }
  window.LABIRINTO_DATA = { levels: LEVELS, temas: TEMAS };

  // ---------- geração: caminho único (backtracker) + algumas passagens extras nas fases fáceis ----------
  function build(L) {
    const R = K.rng(L.n * 7919 + 13), { cols, rows } = L;
    // paredes: right[r][c] (entre c e c+1), down[r][c] (entre r e r+1); true = parede
    const right = Array.from({ length: rows }, () => Array(cols).fill(true));
    const down = Array.from({ length: rows }, () => Array(cols).fill(true));
    const seen = Array.from({ length: rows }, () => Array(cols).fill(false));
    const stack = [[0, 0]]; seen[0][0] = true;
    while (stack.length) {
      const [r, c] = stack[stack.length - 1];
      const nb = [];
      if (r > 0 && !seen[r - 1][c]) nb.push([r - 1, c, 'u']);
      if (r < rows - 1 && !seen[r + 1][c]) nb.push([r + 1, c, 'd']);
      if (c > 0 && !seen[r][c - 1]) nb.push([r, c - 1, 'l']);
      if (c < cols - 1 && !seen[r][c + 1]) nb.push([r, c + 1, 'r']);
      if (!nb.length) { stack.pop(); continue; }
      const [nr, nc, d] = nb[Math.floor(R() * nb.length)];
      if (d === 'u') down[nr][nc] = false; else if (d === 'd') down[r][c] = false; else if (d === 'l') right[nr][nc] = false; else right[r][c] = false;
      seen[nr][nc] = true; stack.push([nr, nc]);
    }
    // passagens extras (fases fáceis): menos becos sem saída
    const total = Math.floor(rows * cols * L.extra);
    for (let k = 0; k < total; k++) {
      const r = Math.floor(R() * rows), c = Math.floor(R() * cols);
      if (R() < .5 && c < cols - 1) right[r][c] = false; else if (r < rows - 1) down[r][c] = false;
    }
    return { right, down };
  }
  const open = (M, r, c, d) => d === 'r' ? !M.right[r][c] : d === 'l' ? !M.right[r][c - 1] : d === 'd' ? !M.down[r][c] : !M.down[r - 1][c];
  const DIRS = { r: [0, 1], l: [0, -1], d: [1, 0], u: [-1, 0] };
  function solve(M, rows, cols, from, to) {
    const key = (r, c) => r * cols + c, prev = new Map([[key(...from), null]]), q = [from];
    while (q.length) {
      const [r, c] = q.shift();
      if (r === to[0] && c === to[1]) break;
      for (const d in DIRS) {
        const nr = r + DIRS[d][0], nc = c + DIRS[d][1];
        if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || prev.has(key(nr, nc)) || !open(M, r, c, d)) continue;
        prev.set(key(nr, nc), [r, c]); q.push([nr, nc]);
      }
    }
    const out = []; let cur = to;
    while (cur) { out.unshift(cur); const p = prev.get(key(...cur)); cur = p; }
    return out;
  }

  route(/^\/labirinto$/, el => {
    K.home(el, {
      id: 'labirinto', title: 'LABIRINTO', sub: 'Caminhos', scene: 'campo', icon: I.maze, heroTitle: 'Labirinto', heroSub: 'Guie a Lumi com o dedo, sem pressa, até o fim do caminho.', unit: 'fase', unitPl: 'fases',
      trackDesc: ['', 'Caminhos curtos, com várias saídas.', 'Labirintos maiores, para quem já pegou o jeito.', 'Os maiores: calma e atenção!'],
      levels: LEVELS.map(l => ({ n: l.n, t: l.t, i: l.i, label: l.label, scene: l.scene })),
      howto: ['Encoste o dedo na <b>Lumi</b> (no canto de cima) e arraste pelo caminho.', 'Se chegar a um beco sem saída, volte arrastando para trás: não há pressa nem pontos perdidos.', 'Chegue ao fim para ouvir a pequena história da fase. Precisa de ajuda? Toque em <b>Dica</b>.']
    });
  });

  route(/^\/labirinto\/(\d+)$/, (el, nStr) => {
    const L = LEVELS.find(l => l.n === +nStr); if (!L) return go('#/labirinto');
    App.setScene(L.scene);
    setLast('labirinto', '#/labirinto/' + L.n, `Labirinto · ${K.label(L)}`, L.tema.nome);
    const M = build(L), { cols, rows, tema } = L;
    const goal = [rows - 1, cols - 1];
    const W = Math.min(380, (el.clientWidth || window.innerWidth) - 8);
    const cs = Math.max(22, Math.floor(W / cols)), PAD = 6, wpx = cols * cs, hpx = rows * cs;
    let walls = '';
    const seg = (x1, y1, x2, y2) => `M${x1} ${y1}L${x2} ${y2}`;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      if (c < cols - 1 && M.right[r][c]) walls += seg((c + 1) * cs, r * cs, (c + 1) * cs, (r + 1) * cs);
      if (r < rows - 1 && M.down[r][c]) walls += seg(c * cs, (r + 1) * cs, (c + 1) * cs, (r + 1) * cs);
    }
    const ctr = (r, c) => [c * cs + cs / 2, r * cs + cs / 2];
    el.innerHTML = `${K.topbar('#/labirinto', `FASE ${L.i}`, `Labirinto · ${K.TRK[L.t]}`)}
      <div class="lb-story parch"><b>${esc(tema.nome)}</b><span>${esc(tema.go)}</span></div>
      <div class="lb-tools"><button class="btn btn-ghost" data-reset>Recomeçar</button><button class="btn btn-ghost" data-hint>${I.bulb} Dica</button></div>
      <div class="lb-wrap"><svg class="lb" id="lb" viewBox="${-PAD} ${-PAD} ${wpx + PAD * 2} ${hpx + PAD * 2}" width="${wpx + PAD * 2}" height="${hpx + PAD * 2}" aria-label="Labirinto">
        <rect x="${-PAD}" y="${-PAD}" width="${wpx + PAD * 2}" height="${hpx + PAD * 2}" rx="14" class="lb-bg"/>
        <path d="M0 0H${wpx}V${hpx}H0Z" class="lb-border"/>
        <path d="${walls}" class="lb-walls"/>
        <polyline id="trail" class="lb-trail" points=""/>
        <polyline id="hint" class="lb-hint" points=""/>
        <text x="${ctr(...goal)[0]}" y="${ctr(...goal)[1]}" class="lb-goal" font-size="${cs * .7}" text-anchor="middle" dominant-baseline="central">${tema.goal}</text>
        <g id="me"><circle r="${cs * .42}" class="lb-me"/><image href="lumi-rosto.webp" x="${-cs * .38}" y="${-cs * .38}" width="${cs * .76}" height="${cs * .76}"/></g>
      </svg></div>
      <p class="vs-tip" id="lbtip">Arraste a Lumi pelo caminho até o fim.</p>`;
    K.common(el);
    const svg = $('#lb', el), me = $('#me', el), trail = $('#trail', el), hint = $('#hint', el);
    svg.__sol = () => solve(M, rows, cols, [0, 0], goal).map(p => ctr(...p));
    let path = [[0, 0]], dragging = false, done = false, hinted = false, last = null;
    const draw = () => {
      const [r, c] = path[path.length - 1], [x, y] = ctr(r, c);
      me.setAttribute('transform', `translate(${x} ${y})`);
      trail.setAttribute('points', path.map(p => ctr(...p).join(',')).join(' '));
    };
    const cellAt = (cx, cy) => {
      const p = svg.createSVGPoint(); p.x = cx; p.y = cy; const q = p.matrixTransform(svg.getScreenCTM().inverse());
      return [Math.floor(q.y / cs), Math.floor(q.x / cs)];
    };
    function step(r, c) {
      if (done || r < 0 || c < 0 || r >= rows || c >= cols) return;
      const [pr, pc] = path[path.length - 1];
      if (r === pr && c === pc) return;
      if (path.length > 1) { const [br, bc] = path[path.length - 2]; if (r === br && c === bc) { path.pop(); draw(); return; } }
      const d = r === pr + 1 && c === pc ? 'd' : r === pr - 1 && c === pc ? 'u' : r === pr && c === pc + 1 ? 'r' : r === pr && c === pc - 1 ? 'l' : null;
      if (!d || !open(M, pr, pc, d)) return;
      path.push([r, c]); draw();
      if (r === goal[0] && c === goal[1]) win();
    }
    function move(x, y) {
      if (last) {
        const n = Math.max(1, Math.ceil(Math.hypot(x - last[0], y - last[1]) / (cs * .35)));
        for (let k = 1; k <= n; k++) { const [r, c] = cellAt(last[0] + (x - last[0]) * k / n, last[1] + (y - last[1]) * k / n); step(r, c); }
      }
      last = [x, y];
    }
    svg.style.touchAction = 'none';
    svg.addEventListener('pointerdown', e => {
      e.preventDefault(); if (done) return;
      const [r, c] = cellAt(e.clientX, e.clientY), [pr, pc] = path[path.length - 1];
      if (Math.abs(r - pr) + Math.abs(c - pc) > 1) return; // precisa começar perto da Lumi
      dragging = true; last = [e.clientX, e.clientY]; try { svg.setPointerCapture(e.pointerId); } catch (x) { }
      hint.setAttribute('points', ''); step(r, c);
    });
    svg.addEventListener('pointermove', e => { if (dragging) { e.preventDefault(); move(e.clientX, e.clientY); } });
    const stop = () => { dragging = false; last = null; };
    svg.addEventListener('pointerup', stop); svg.addEventListener('pointercancel', stop);
    el.addEventListener('click', e => {
      if (e.target.closest('[data-reset]') && !done) { path = [[0, 0]]; hint.setAttribute('points', ''); draw(); sfx.tap(); }
      if (e.target.closest('[data-hint]') && !done) {
        hinted = true; const sol = solve(M, rows, cols, path[path.length - 1], goal).slice(0, 7);
        hint.setAttribute('points', sol.map(p => ctr(...p).join(',')).join(' ')); sfx.tap();
        setTimeout(() => hint.setAttribute('points', ''), 3000);
      }
    });
    function win() {
      done = true; sfx.good();
      $('#lbtip', el).textContent = 'Você chegou!';
      const stars = hinted ? 2 : 3;
      setTimeout(() => K.finish({ el, id: 'labirinto', n: L.n, stars, badge: tema.goal, title: tema.nome, text: esc(tema.win), learned: `${I.book} <b>${esc(tema.ref)}</b>`, next: (x => x && '#/labirinto/' + x.n)(K.nextOf(LEVELS, L)), nextLabel: 'Próximo labirinto' }), 450);
    }
    draw();
  });
})();
