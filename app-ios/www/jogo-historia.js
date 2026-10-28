/* A Grande História da Bíblia — a Bíblia inteira, em ordem, lição por lição, com a Lumi.
   Regra do app: nenhuma imagem de Jesus nem de Deus (segundo mandamento). Usamos só símbolos: ✨ luz, ✝️ cruz, 🔥, ☁️. */
(function () {
  const { $, $$, esc, save, route, go, setLast, sfx, confetti } = App;
  const U = App.kidsUI;
  const H = () => window.HISTORIA || { arcs: {} };
  // os 20 arcos da grande história; os que já têm lições aparecem abertos
  const ARCS = [
    ['comeco', 'O Começo', 'Gênesis 1–11', '🌍', 'AT'], ['abraao', 'Abraão, o amigo de Deus', 'Gênesis 12–25', '⭐', 'AT'], ['jaco', 'Isaque e Jacó', 'Gênesis 25–36', '🪜', 'AT'],
    ['jose', 'José', 'Gênesis 37–50', '🌾', 'AT'], ['jo', 'Jó: a fé no sofrimento', 'Jó', '🌪️', 'AT'], ['exodo', 'Êxodo: a libertação', 'Êxodo 1–18', '🌊', 'AT'],
    ['sinai', 'No Sinai: a Lei e o tabernáculo', 'Êxodo 19–40 e Levítico', '⛰️', 'AT'], ['deserto', 'Quarenta anos no deserto', 'Números', '⛺', 'AT'], ['despedida', 'Moisés se despede', 'Deuteronômio', '📜', 'AT'],
    ['josue', 'A terra prometida', 'Josué', '🧱', 'AT'], ['juizes', 'Juízes e Rute', 'Juízes e Rute', '🎺', 'AT'], ['samuel', 'Samuel e o primeiro rei', '1 Samuel 1–15', '🪔', 'AT'],
    ['davi', 'Davi, o pastor e rei', '1 Samuel 16 – 2 Samuel, 1 Crônicas', '🪨', 'AT'], ['salmos', 'Os cânticos do povo de Deus', 'Salmos', '🎶', 'AT'], ['salomao', 'Salomão: sabedoria e templo', '1 Reis 1–11, Provérbios, Eclesiastes, Cantares', '🏛️', 'AT'],
    ['divisao', 'O reino se divide', '1 Reis 12–16', '💔', 'AT'], ['elias', 'Elias e Eliseu', '1 Reis 17 – 2 Reis 13', '🔥', 'AT'], ['norte', 'Os profetas do Norte', 'Jonas, Amós, Oseias', '🐋', 'AT'],
    ['isaias', 'Os reis de Judá e Isaías', 'Isaías, Miqueias, Joel, Naum, Sofonias, Habacuque', '📯', 'AT'], ['jeremias', 'Jeremias e a queda de Jerusalém', 'Jeremias, Lamentações, Obadias', '😢', 'AT'], ['exilio', 'Longe de casa', 'Daniel e Ezequiel', '🦁', 'AT'],
    ['volta', 'A volta para casa', 'Esdras, Ageu, Zacarias', '🏗️', 'AT'], ['ester', 'Ester, a rainha corajosa', 'Ester', '👑', 'AT'], ['muros', 'Os muros e a espera', 'Neemias, Malaquias e os 400 anos', '🧱', 'AT'],
    ['nasce', 'Jesus nasce e cresce', 'Mateus e Lucas', '⭐', 'NT'], ['ensina', 'Jesus ensina', 'Sermão do Monte e parábolas', '🌄', 'NT'], ['milagres', 'Jesus cura e faz milagres', 'Os Evangelhos', '🐟', 'NT'],
    ['jerusalem', 'A caminho de Jerusalém', 'A semana santa', '🌿', 'NT'], ['cruz', 'A cruz e a ressurreição', 'Os Evangelhos', '✝️', 'NT'], ['igreja', 'A igreja nasce', 'Atos 1–12', '🕊️', 'NT'],
    ['paulo', 'Paulo leva o evangelho', 'Atos 13–28', '⛵', 'NT'], ['cartas', 'As cartas de Paulo', 'Romanos a Filemom', '✉️', 'NT'], ['outras', 'As outras cartas', 'Hebreus a Judas', '📨', 'NT'],
    ['esperanca', 'A grande esperança', 'Apocalipse', '🌅', 'NT']
  ];
  const arcOf = id => H().arcs[id];
  const all = () => ARCS.map(a => arcOf(a[0])).filter(Boolean);
  const lessonOf = id => { for (const a of all()) { const i = a.lessons.findIndex(l => l.id === id); if (i >= 0) return { ...a.lessons[i], arc: a, idx: i }; } return null; };
  App.historia = { arcs: all, lesson: lessonOf };
  const P = () => { const s = U.S(); if (!s.hist) s.hist = { done: {} }; return s.hist; };
  const doneIn = a => a.lessons.filter(l => P().done[l.id]).length;
  const total = () => all().reduce((n, a) => n + a.lessons.length, 0);
  const doneAll = () => all().reduce((n, a) => n + doneIn(a), 0);
  App.historia.progress = () => ({ done: doneAll(), total: total() });

  // ---------- A trilha dos 20 arcos ----------
  route(/^\/kids\/historia$/, el => {
    U.reset(); App.setScene('aurora'); document.body.classList.add('kids');
    const next = (() => { for (const a of all()) { const l = a.lessons.find(x => !P().done[x.id]); if (l) return { a, l }; } return null; })();
    el.innerHTML = `${U.top('#/kids', 'A GRANDE HISTÓRIA', 'da Bíblia, do começo ao fim')}
      ${U.bubble('lendo', `A Bíblia é <b>uma história só</b>, do começo ao fim, e toda ela aponta para Jesus! Vamos caminhar juntos, uma parte de cada vez?`)}
      ${next ? `<button class="btn btn-gold btn-block kd-hnext" data-go="#/kids/licao/${next.l.id}">${doneAll() ? 'Continuar' : 'Começar'}: ${next.l.icon} ${esc(next.l.title)} ▶</button>` : ''}
      <div class="kd-trail">
        ${ARCS.map((x, i) => { const a = arcOf(x[0]); const open = !!a; const d = open ? doneIn(a) : 0; const n = open ? a.lessons.length : 0;
          const sep = i === 0 ? '<div class="kd-tsep">Antigo Testamento</div>' : ARCS[i - 1][4] !== x[4] ? '<div class="kd-tsep">Novo Testamento</div>' : '';
          return `${sep}<button class="kd-tnode ${open ? 'open' : 'soon'} ${open && d === n ? 'full' : ''} ${i % 2 ? 'r' : 'l'}" ${open ? `data-go="#/kids/historia/${x[0]}"` : 'disabled'} style="--d:${i * 35}ms">
            <span class="dot">${x[3]}</span><span class="tx"><small>Parte ${i + 1}</small><b>${esc(x[1])}</b><em>${esc(x[2])}</em>
            ${open ? `<i class="bar"><u style="width:${Math.round(d / n * 100)}%"></u></i><small>${d} de ${n} lições</small>` : '<small class="sn">em breve</small>'}</span></button>`; }).join('')}
      </div>
      <p class="kd-note">Para os pais e professores: cada lição traz uma parte "Aponta para Jesus" e um recado sobre como conversar em casa. As lições também funcionam no Modo Turma.</p>`;
    U.common(el);
    U.later(() => U.speak('A Bíblia é uma história só, do começo ao fim, e toda ela aponta para Jesus!'), 400);
    el.addEventListener('click', e => { const g = e.target.closest('[data-go]'); if (g) { sfx.tap(); U.hush(); go(g.dataset.go); } });
  });

  // ---------- Um arco: a lista de lições ----------
  route(/^\/kids\/historia\/(\w+)$/, (el, id) => {
    U.reset(); const a = arcOf(id); if (!a) return go('#/kids/historia');
    App.setScene(a.scene); document.body.classList.add('kids');
    const next = a.lessons.find(l => !P().done[l.id]);
    el.innerHTML = `${U.top('#/kids/historia', `PARTE ${a.n}`, a.name)}
      <div class="kd-arc parch" style="--bgimg:${App.sceneUrl(a.scene)}"><span class="ic">${a.icon}</span><h2>${esc(a.name)}</h2><small>${esc(a.ref)} · ${a.lessons.length} lições</small><p>${esc(a.intro)}</p></div>
      <div class="kd-steps">${a.lessons.map((l, i) => `<button class="kd-step ${P().done[l.id] ? 'ok' : ''} ${next && l.id === next.id ? 'now' : ''}" data-go="#/kids/licao/${l.id}" style="--d:${i * 40}ms">
        <i>${P().done[l.id] ? '✓' : i + 1}</i><span class="ic">${l.icon}</span><span class="tx"><b>${esc(l.title)}</b><small>${esc(l.ref)}</small></span></button>`).join('')}</div>
      ${K().signature}`;
    U.common(el);
    U.later(() => U.speak(a.name + '. ' + a.intro), 350);
    el.addEventListener('click', e => { const g = e.target.closest('[data-go]'); if (g) { sfx.tap(); U.hush(); go(g.dataset.go); } });
  });
  const K = () => App.kit;

  // ---------- A lição: onde paramos → cenas → sobre Deus → aponta para Jesus → versículo → perguntas → concluída ----------
  route(/^\/kids\/licao\/(\w+)$/, (el, id) => {
    U.reset(); const L = lessonOf(id); if (!L) return go('#/kids/historia');
    document.body.classList.add('kids');
    const a = L.arc, small = U.S().band === 'small', Q = small ? L.small : L.big;
    setLast('kids', '#/kids/licao/' + id, `Grande História · ${L.title}`, a.name);
    const sub = `Parte ${a.n} · lição ${L.idx + 1} de ${a.lessons.length}`;
    let stage = 'recap', step = 0, qi = 0, order = null, qmist = 0;
    const steps = ['recap', ...L.scenes.map((_, i) => 's' + i), 'deus', 'jesus', 'verso', 'q', 'fim'];
    const dots = cur => `<div class="kd-dots lesson">${L.scenes.map((_, i) => `<i class="${i < cur ? 'on' : i === cur ? 'now' : ''}"></i>`).join('')}<b>✨</b><b class="cr">${App.cross}</b><b>📖</b></div>`;
    const nav = (label, prev = true) => `<div class="kd-nav"><button class="btn btn-ghost" data-prev ${prev ? '' : 'disabled'} aria-label="Voltar">◀</button><button class="btn btn-ghost" data-say>🔊 Ouvir</button><button class="btn btn-gold" data-next>${label}</button></div>`;
    function show() {
      U.hush();
      if (stage === 'recap') {
        App.setScene(a.scene);
        el.innerHTML = `${U.top('#/kids/historia/' + a.id, L.title.toUpperCase(), sub)}
          <div class="kd-lhead parch"><span class="ic">${L.icon}</span><h2>${esc(L.title)}</h2><small>${esc(L.ref)} · ACF</small></div>
          ${U.bubble('pensando', `<small>Onde paramos?</small>${esc(L.recap)}`)}
          <button class="btn btn-gold btn-block kd-big" data-next>Começar a história ▶</button>`;
        U.speak('Onde paramos? ' + L.recap);
      } else if (stage === 'scene') {
        const sc = L.scenes[step]; App.setScene(sc.bg);
        el.innerHTML = `${U.top('#/kids/historia/' + a.id, L.title.toUpperCase(), `${step + 1} de ${L.scenes.length}`)}
          ${dots(step)}
          <div class="kd-scene" style="--bgimg:${App.sceneUrl(sc.bg)}">${U.fxHTML(sc.fx)}${U.artHTML(sc.art)}${U.lumiHTML('lendo', 'mini')}</div>
          <div class="kd-text ${small ? 'small' : ''}">${U.wordsHTML(sc.text)}</div>
          ${sc.r ? `<div class="kd-ref">📖 ${esc(sc.r)}</div>` : ''}
          ${nav(step < L.scenes.length - 1 ? 'Próxima ▶' : 'Continuar ▶')}`;
        read();
      } else if (stage === 'deus') {
        App.setScene('aurora');
        el.innerHTML = `${U.top('#/kids/historia/' + a.id, L.title.toUpperCase(), 'O que aprendemos')}
          ${dots(L.scenes.length)}
          <div class="kd-card deus"><span class="sym">✨</span><small>O que aprendemos sobre Deus</small><p>${esc(L.god)}</p></div>
          ${U.bubble('dica', 'Guarde isso no coração! 💛', 'swap')}
          ${nav('Continuar ▶')}`;
        U.speak('O que aprendemos sobre Deus. ' + L.god);
      } else if (stage === 'jesus') {
        App.setScene('aurora');
        el.innerHTML = `${U.top('#/kids/historia/' + a.id, L.title.toUpperCase(), 'Aponta para Jesus')}
          ${dots(L.scenes.length + 1)}
          <div class="kd-card jesus"><span class="sym">${App.cross}</span><small>Esta história aponta para Jesus</small><p>${esc(L.jesus)}</p></div>
          ${nav('Continuar ▶')}`;
        U.speak('Esta história aponta para Jesus. ' + L.jesus);
      } else if (stage === 'verso') {
        App.setScene('aurora');
        el.innerHTML = `${U.top('#/kids/historia/' + a.id, L.title.toUpperCase(), 'Versículo para guardar')}
          ${dots(L.scenes.length + 2)}
          <div class="kd-card verso"><span class="sym">📖</span><small>Versículo para guardar no coração</small><p>“${esc(L.verse.tx)}”</p><cite>${esc(L.verse.ref)} · ACF</cite></div>
          ${U.bubble('lendo', 'Vamos ler juntos em voz alta? Depois tente falar sem olhar!', 'swap')}
          ${nav(small ? 'Brincar! 🎈' : 'Perguntas ▶')}`;
        U.speak(L.verse.tx + ' ' + L.verse.ref);
      } else if (stage === 'q') question();
      else end();
    }
    const read = () => U.speak(L.scenes[step].text, $$('.kd-text span', el));
    function question() {
      const q = Q[qi]; App.setScene(a.scene); qmist = 0;
      if (!order) order = K().shuffle(q.o.map((_, i) => i));
      el.innerHTML = `${U.top('#/kids/historia/' + a.id, L.title.toUpperCase(), `Pergunta ${qi + 1} de ${Q.length}`)}
        <div class="kd-dots">${Q.map((_, i) => `<i class="${i < qi ? 'on' : i === qi ? 'now' : ''}"></i>`).join('')}</div>
        ${U.bubble('pensando', esc(q.q), qi ? 'swap' : 'enter')}
        <div class="kd-opts ${small ? 'pics' : 'words'}">${order.map((i, k) => small
          ? `<button class="kd-pic" data-o="${i}" style="--d:${k * 90}ms"><span>${q.o[i][0]}</span><b>${esc(q.o[i][1])}</b></button>`
          : `<button class="kd-word" data-o="${i}" style="--d:${k * 70}ms">${esc(q.o[i])}</button>`).join('')}</div>
        <div id="kdAfter"></div>
        <div class="kd-nav one"><button class="btn btn-ghost" data-sayq>🔊 Ouvir a pergunta</button></div>`;
      sayQ();
    }
    const sayQ = () => { const q = Q[qi]; U.speak(q.q + (small ? ' ' + order.map(i => q.o[i][1]).join('? ') + '?' : '')); };
    function answer(i, btn) {
      const q = Q[qi];
      if (i === 0) {
        sfx.good(); btn.classList.add('ok'); $$('.kd-pic,.kd-word', el).forEach(b => { b.disabled = true; b.classList.remove('hint'); });
        const msg = U.pick(['Muito bem!', 'Isso mesmo!', 'Você acertou!', 'Uhuu! Acertou!']);
        U.say(el, `<b>${msg}</b>${!small && q.e ? ' ' + esc(q.e) : ''}`, null, 'yay', msg + (!small && q.e ? ' ' + q.e : ''));
        $('#kdAfter', el).innerHTML = `<button class="btn btn-gold btn-block pop" data-qnext>${qi < Q.length - 1 ? 'Próxima pergunta ▶' : 'Terminar a lição 🌟'}</button>`;
      } else {
        qmist++; sfx.bad(); btn.classList.add('no'); btn.disabled = true;
        if (qmist >= 2) { const ok = $('[data-o="0"]', el); ok && ok.classList.add('hint'); U.say(el, 'Quase! Olha, eu te ajudo: é <b>esta aqui</b> que está pulando! 👇', null, 'hint', 'Quase! Eu te ajudo: é esta aqui que está pulando!'); }
        else U.say(el, U.pick(['Quase! Tente de novo. 💛', 'Hmm, não foi essa. Tente outra! 💛', 'Ops! Vamos tentar de novo? 💛']), null, 'oops');
      }
    }
    function end() {
      App.setScene('aurora');
      const first = !P().done[id]; P().done[id] = 1; save(); sfx.win();
      const nx = a.lessons[L.idx + 1];
      const full = doneIn(a) === a.lessons.length;
      el.innerHTML = `${U.top('#/kids/historia/' + a.id, 'LIÇÃO CONCLUÍDA!', L.title)}
        <div class="kd-win">
          <div class="kd-lumi solo">${U.lumiHTML('festa', 'enter party')}</div>
          <div class="kd-sticker small"><span>${L.icon}</span><b>${esc(L.title)}</b><small>${esc(L.ref)}</small></div>
          <h2>${full ? `Você completou a parte ${a.n}: ${esc(a.name)}! 🎉` : first ? 'Mais um passo na grande história!' : 'Você ouviu de novo!'}</h2>
          <p>${doneAll()} de ${total()} lições da Grande História.</p>
        </div>
        <div class="kd-row">${nx ? `<button class="btn btn-gold" data-go="#/kids/licao/${nx.id}">Próxima lição ▶</button>` : `<button class="btn btn-gold" data-go="#/kids/historia">Ver a trilha ▶</button>`}<button class="btn btn-ghost" data-go="#/kids/historia/${a.id}">Ver as lições</button></div>
        <details class="kd-parents parch"><summary>👨‍👩‍👧 Para os pais e professores</summary><p>${esc(L.parents)}</p></details>`;
      U.later(() => { confetti(); U.burst($('.lumi', el), ['✨', '⭐', '🌟', '💛'], 12); }, 350);
      U.speak(full ? 'Parabéns! Você completou a parte ' + a.n + '!' : 'Parabéns! Mais um passo na grande história!');
    }
    function move(d) {
      const i = steps.indexOf(stage === 'scene' ? 's' + step : stage) + d; if (i < 0) return;
      const t = steps[i]; if (t[0] === 's' && t !== 'q') { stage = 'scene'; step = +t.slice(1); } else stage = t;
      show(); window.scrollTo(0, 0);
    }
    U.common(el);
    el.addEventListener('click', e => {
      if (e.target.closest('[data-next]')) { sfx.tap(); return move(1); }
      if (e.target.closest('[data-prev]')) return move(-1);
      if (e.target.closest('[data-say]')) { if (stage === 'scene') return read(); return show(); }
      if (e.target.closest('[data-sayq]')) return sayQ();
      const o = e.target.closest('[data-o]'); if (o && !o.disabled) return answer(+o.dataset.o, o);
      if (e.target.closest('[data-qnext]')) { sfx.tap(); order = null; if (qi < Q.length - 1) { qi++; question(); } else { stage = 'fim'; show(); } return; }
      const g = e.target.closest('[data-go]'); if (g) { U.reset(); U.hush(); go(g.dataset.go); }
    });
    // deslizar o dedo nas cenas
    let sx = null;
    el.addEventListener('touchstart', e => { sx = $('.kd-scene', el) ? e.touches[0].clientX : null; }, { passive: true });
    el.addEventListener('touchend', e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) < 60) return; move(dx < 0 ? 1 : -1); }, { passive: true });
    show();
  });
})();
