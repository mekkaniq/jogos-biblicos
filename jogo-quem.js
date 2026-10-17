/* Quem Sou Eu? — descubra o personagem, lugar ou objeto com até três pistas */
(function () {
  const { $, $$, esc, I, save, route, go, setLast, toast, sfx } = App;
  const K = App.kit;
  const D = () => window.QUEM_DATA;

  route(/^\/quem$/, el => {
    const d = D(); const done = K.st('quem').done;
    const ls = d.levels.map(l => { const it = d.items.find(x => x.id === l.id); return { n: l.n, t: l.t, i: l.i, j: it.j, label: done[l.n] ? it.a : '?', scene: d.journeys.find(j => j.n === it.j).scene }; });
    K.home(el, {
      id: 'quem', title: 'QUEM SOU EU?', sub: 'Pistas bíblicas', scene: 'deserto', icon: I.who, heroTitle: 'Quem Sou Eu?', heroSub: 'Leia as pistas e descubra de quem (ou do que) se trata.', unit: 'desafio', unitPl: 'desafios',
      groups: (t, lv) => d.journeys.map(j => ({ name: j.name, levels: lv.filter(l => l.j === j.n) })), levels: ls,
      trackDesc: ['', 'As 4 alternativas aparecem desde o começo. É só escolher!', 'Digite a resposta. Se travar, peça as alternativas.', 'Só digitando, sem alternativas. Dá para pedir uma letra de ajuda.'],
      howto: ['Leia a primeira pista. Se já souber, <b>digite a resposta</b> no teclado e toque em OK.', 'Ainda não sabe? Toque em <b>Próxima pista</b>. São três pistas, da mais difícil à mais fácil.', 'Errar não tira pontos: tente quantas vezes quiser.', '<b>Fácil:</b> escolha entre 4 alternativas. <b>Médio:</b> digite, e se travar peça as alternativas. <b>Difícil:</b> só digitando, com ajuda de letras.', 'Acertou na 1ª pista: 3 estrelas. Na 2ª: 2 estrelas. Depois: 1 estrela.']
    });
  });

  route(/^\/quem\/(\d+)$/, (el, nStr) => {
    const d = D(); const L = d.levels.find(x => x.n === +nStr); if (!L) return go('#/quem');
    const it = d.items.find(x => x.id === L.id), T = L.t;
    const J = d.journeys.find(j => j.n === it.j);
    App.setScene(J.scene);
    setLast('quem', '#/quem/' + L.n, `Quem Sou Eu? · ${K.label(L)}`, J.name);
    let clues = 1, alts = T === 1, typed = '', done = false, shown = 0, wrongs = 0; const cut = new Set();
    const N = it.p.length;
    el.innerHTML = `${K.topbar('#/quem', `DESAFIO ${L.i}`, `${K.TRK[T]} · ${esc(J.name)}`)}
      <div class="qs-head"><span class="qs-q">?</span><div><b>Quem sou eu?</b><small>Pista <span id="cn">1</span> de 3</small></div></div>
      <div id="clues" class="qs-clues"></div>
      <div class="qs-row"><button class="btn btn-ghost" data-more>${I.bulb} Próxima pista</button>${T === 1 ? '' : T === 2 ? `<button class="btn btn-ghost" data-alts>${I.list} Ver alternativas</button>` : `<button class="btn btn-ghost" data-letter>🔤 Mostrar uma letra</button>`}</div>
      <div id="alts" class="qs-alts"></div>
      <div id="after"></div>
      <div class="qs-ans" id="ans" ${T === 1 ? 'style="display:none"' : ''}>${Array.from({ length: N }, () => '<i></i>').join('')}</div>
      <div class="kb" id="kb" ${T === 1 ? 'style="display:none"' : ''}>
        ${['QWERTYUIOP', 'ASDFGHJKL'].map(r => `<div class="kb-row">${[...r].map(l => `<button class="key" data-key="${l}">${l}</button>`).join('')}</div>`).join('')}
        <div class="kb-row"><button class="key wide" data-key="DEL" aria-label="Apagar">${I.del}</button>${[...'ZXCVBNM'].map(l => `<button class="key" data-key="${l}">${l}</button>`).join('')}<button class="key wide go pd-enter" data-key="OK">OK</button></div>
      </div>`;
    K.common(el);
    function render() {
      $('#cn', el).textContent = clues;
      $('#clues', el).innerHTML = it.c.slice(0, clues).map((c, i) => `<div class="qs-clue parch ${i === clues - 1 ? 'pop' : ''}"><span>${i + 1}</span><p>${esc(c)}</p></div>`).join('');
      $('[data-more]', el).disabled = clues >= 3 || done;
      const ab = $('[data-alts]', el); if (ab) ab.disabled = alts || done;
      const lb = $('[data-letter]', el); if (lb) lb.disabled = done || shown >= N - 1;
      $('#alts', el).innerHTML = alts && !done ? it.o.map(x => x).sort().map(o => `<button class="qs-alt ${cut.has(o) ? 'cut' : ''}" data-o="${esc(o)}" ${cut.has(o) ? 'disabled' : ''}>${esc(o)}</button>`).join('') : '';
      $$('#ans i', el).forEach((b, i) => { b.textContent = typed[i] || ''; b.classList.toggle('caret', i === typed.length && !done); });
    }
    function win(how) {
      done = true; sfx.good();
      const stars = T === 1 ? Math.max(1, 4 - clues - wrongs) : how === 'alt' ? 1 : Math.max(1, 4 - clues - shown);
      typed = it.p; render();
      $('#ans', el).classList.add('ok'); $$('#ans i', el).forEach((b, i) => b.textContent = [...it.a.toUpperCase()][i] || it.p[i]);
      $('#kb', el).style.display = 'none'; $('.qs-row', el).style.display = 'none';
      $('#after', el).innerHTML = `<div class="discovery parch pop"><div class="lbl">Eu sou</div><h3>${esc(it.a)}</h3><p>${esc(it.e)}</p><div class="ref">${I.book}<span>${esc(it.r)}</span></div></div>`;
      const nx = K.nextOf(d.levels, L);
      setTimeout(() => K.finish({ el, id: 'quem', n: L.n, stars, badge: '🔍', title: `Isso! ${esc(it.a)}`, text: how === 'alt' && T !== 1 ? 'Você descobriu com a ajuda das alternativas.' : `Você descobriu com ${clues} ${clues === 1 ? 'pista' : 'pistas'}${shown ? ` e ${shown} ${shown === 1 ? 'letra' : 'letras'} de ajuda` : ''}.`, next: nx ? '#/quem/' + nx.n : null, nextLabel: 'Próximo desafio', listLabel: 'Ver os desafios' }), 700);
    }
    function check() {
      if (typed.length < N) { toast(`A resposta tem ${N} letras.`); return; }
      if (typed === it.p) return win('type');
      sfx.bad(); const a = $('#ans', el); a.classList.remove('shake'); void a.offsetWidth; a.classList.add('shake');
      toast(clues < 3 ? 'Ainda não. Que tal ver a próxima pista?' : T === 3 ? 'Ainda não. Peça uma letra de ajuda!' : 'Ainda não. Tente as alternativas!');
      typed = it.p.slice(0, shown); setTimeout(render, 500);
    }
    $('#kb', el).addEventListener('pointerdown', e => {
      const b = e.target.closest('[data-key]'); if (!b || done) return; e.preventDefault();
      b.classList.add('down'); setTimeout(() => b.classList.remove('down'), 120);
      const v = b.dataset.key; if (v === 'OK') return check(); if (v === 'DEL') { if (typed.length > shown) typed = typed.slice(0, -1); } else if (typed.length < N) typed += v;
      sfx.tap(); render();
    });
    el.addEventListener('click', e => {
      if (done) return;
      if (e.target.closest('[data-more]') && clues < 3) { clues++; sfx.tap(); render(); $('#clues', el).lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      if (e.target.closest('[data-alts]')) { alts = true; sfx.tap(); render(); }
      if (e.target.closest('[data-letter]') && shown < N - 1) { shown++; typed = it.p.slice(0, shown); sfx.good(); render(); }
      const o = e.target.closest('[data-o]');
      if (o) { if (K.plain(o.dataset.o) === it.p) win('alt'); else { cut.add(o.dataset.o); wrongs++; sfx.bad(); render(); } }
    });
    render();
  });
})();
