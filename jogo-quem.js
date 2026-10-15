/* Quem Sou Eu? — descubra o personagem, lugar ou objeto com até três pistas */
(function () {
  const { $, $$, esc, I, save, route, go, setLast, toast, sfx } = App;
  const K = App.kit;
  const D = () => window.QUEM_DATA;

  route(/^\/quem$/, el => {
    const d = D(); const done = K.st('quem').done;
    const ls = d.items.map(it => ({ n: it.id, label: done[it.id] ? it.a : '?', scene: d.journeys.find(j => j.n === it.j).scene }));
    K.home(el, {
      id: 'quem', title: 'QUEM SOU EU?', sub: 'Pistas bíblicas', scene: 'deserto', icon: I.who, heroTitle: 'Quem Sou Eu?', heroSub: 'Leia as pistas e descubra de quem (ou do que) se trata.', unit: 'desafio', unitPl: 'desafios',
      groups: d.journeys.map(j => ({ name: j.name, levels: ls.filter((_, i) => d.items[i].j === j.n) })), levels: ls,
      howto: ['Leia a primeira pista. Se já souber, <b>digite a resposta</b> no teclado e toque em OK.', 'Ainda não sabe? Toque em <b>Próxima pista</b>. São três pistas, da mais difícil à mais fácil.', 'Errar não tira pontos: tente quantas vezes quiser.', 'Se travar, toque em <b>Ver alternativas</b> e escolha entre quatro respostas.', 'Acertou na 1ª pista: 3 estrelas. Na 2ª: 2 estrelas. Depois: 1 estrela.']
    });
  });

  route(/^\/quem\/(\d+)$/, (el, nStr) => {
    const d = D(); const it = d.items.find(x => x.id === +nStr); if (!it) return go('#/quem');
    const J = d.journeys.find(j => j.n === it.j);
    App.setScene(J.scene);
    setLast('quem', '#/quem/' + it.id, `Quem Sou Eu? · desafio ${it.id}`, J.name);
    let clues = 1, alts = false, typed = '', done = false; const cut = new Set();
    const N = it.p.length;
    el.innerHTML = `${K.topbar('#/quem', `DESAFIO ${it.id}`, esc(J.name))}
      <div class="qs-head"><span class="qs-q">?</span><div><b>Quem sou eu?</b><small>Pista <span id="cn">1</span> de 3</small></div></div>
      <div id="clues" class="qs-clues"></div>
      <div class="qs-row"><button class="btn btn-ghost" data-more>${I.bulb} Próxima pista</button><button class="btn btn-ghost" data-alts>${I.list} Ver alternativas</button></div>
      <div id="alts" class="qs-alts"></div>
      <div id="after"></div>
      <div class="qs-ans" id="ans">${Array.from({ length: N }, () => '<i></i>').join('')}</div>
      <div class="kb" id="kb">
        ${['QWERTYUIOP', 'ASDFGHJKL'].map(r => `<div class="kb-row">${[...r].map(l => `<button class="key" data-key="${l}">${l}</button>`).join('')}</div>`).join('')}
        <div class="kb-row"><button class="key wide" data-key="DEL" aria-label="Apagar">${I.del}</button>${[...'ZXCVBNM'].map(l => `<button class="key" data-key="${l}">${l}</button>`).join('')}<button class="key wide go pd-enter" data-key="OK">OK</button></div>
      </div>`;
    K.common(el);
    function render() {
      $('#cn', el).textContent = clues;
      $('#clues', el).innerHTML = it.c.slice(0, clues).map((c, i) => `<div class="qs-clue parch ${i === clues - 1 ? 'pop' : ''}"><span>${i + 1}</span><p>${esc(c)}</p></div>`).join('');
      $('[data-more]', el).disabled = clues >= 3 || done;
      $('[data-alts]', el).disabled = alts || done;
      $('#alts', el).innerHTML = alts && !done ? it.o.map(x => x).sort().map(o => `<button class="qs-alt ${cut.has(o) ? 'cut' : ''}" data-o="${esc(o)}" ${cut.has(o) ? 'disabled' : ''}>${esc(o)}</button>`).join('') : '';
      $$('#ans i', el).forEach((b, i) => { b.textContent = typed[i] || ''; b.classList.toggle('caret', i === typed.length && !done); });
    }
    function win(how) {
      done = true; sfx.good();
      const stars = how === 'alt' ? 1 : clues === 1 ? 3 : clues === 2 ? 2 : 1;
      typed = it.p; render();
      $('#ans', el).classList.add('ok'); $$('#ans i', el).forEach((b, i) => b.textContent = [...it.a.toUpperCase()][i] || it.p[i]);
      $('#kb', el).style.display = 'none'; $('.qs-row', el).style.display = 'none';
      $('#after', el).innerHTML = `<div class="discovery parch pop"><div class="lbl">Eu sou</div><h3>${esc(it.a)}</h3><p>${esc(it.e)}</p><div class="ref">${I.book}<span>${esc(it.r)}</span></div></div>`;
      const nx = d.items.find(x => x.id === it.id + 1);
      setTimeout(() => K.finish({ id: 'quem', n: it.id, stars, badge: '🔍', title: `Isso! ${esc(it.a)}`, text: how === 'alt' ? 'Você descobriu com a ajuda das alternativas.' : `Você descobriu com ${clues} ${clues === 1 ? 'pista' : 'pistas'}.`, next: nx ? '#/quem/' + nx.id : null, nextLabel: 'Próximo desafio', listLabel: 'Ver os desafios' }), 1800);
    }
    function check() {
      if (typed.length < N) { toast(`A resposta tem ${N} letras.`); return; }
      if (typed === it.p) return win('type');
      sfx.bad(); const a = $('#ans', el); a.classList.remove('shake'); void a.offsetWidth; a.classList.add('shake');
      toast(clues < 3 ? 'Ainda não. Que tal ver a próxima pista?' : 'Ainda não. Tente as alternativas!');
      typed = ''; setTimeout(render, 500);
    }
    $('#kb', el).addEventListener('pointerdown', e => {
      const b = e.target.closest('[data-key]'); if (!b || done) return; e.preventDefault();
      b.classList.add('down'); setTimeout(() => b.classList.remove('down'), 120);
      const v = b.dataset.key; if (v === 'OK') return check(); if (v === 'DEL') typed = typed.slice(0, -1); else if (typed.length < N) typed += v;
      sfx.tap(); render();
    });
    el.addEventListener('click', e => {
      if (done) return;
      if (e.target.closest('[data-more]') && clues < 3) { clues++; sfx.tap(); render(); $('#clues', el).lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      if (e.target.closest('[data-alts]')) { alts = true; sfx.tap(); render(); }
      const o = e.target.closest('[data-o]');
      if (o) { if (K.plain(o.dataset.o) === it.p) win('alt'); else { cut.add(o.dataset.o); sfx.bad(); render(); } }
    });
    render();
  });
})();
