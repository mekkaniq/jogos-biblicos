/* Jogo da Memória — junte cada história à sua carta */
(function () {
  const { $, $$, esc, I, save, route, go, setLast, sfx } = App;
  const K = App.kit;
  const D = () => window.MEMORIA_DATA;
  const story = id => window.CARTAS_DATA.stories.find(s => s.id === id);
  const SCN = ['jardim', 'aurora', 'campo', 'galileia', 'mar', 'monte'];
  const scene = n => SCN[(n - 1) % SCN.length];

  route(/^\/memoria$/, el => {
    const ls = D().levels.map(l => ({ n: l.n, t: l.t, i: l.i, label: `${l.pairs.length} pares`, scene: scene(l.i) }));
    K.home(el, {
      id: 'memoria', title: 'MEMÓRIA', sub: 'Bíblica', scene: 'aurora', icon: I.brain, heroTitle: 'Jogo da Memória', heroSub: 'Vire as cartas e junte cada história com o que faz parte dela.', unit: 'fase', unitPl: 'fases',
      trackDesc: ['', '3 e 4 pares para aquecer a memória.', '5 e 6 pares: mais cartas na mesa.', '8 pares: um desafio para os campeões!'], levels: ls,
      howto: ['Toque numa carta para virá-la e depois em outra.', 'Junte a <b>história</b> (carta dourada 👑) com a <b>carta</b> que pertence a ela. Ex.: Noé com a Arca.', 'Se não formar par, as cartas viram de novo: tente lembrar onde estavam!', 'Quanto menos jogadas, mais estrelas.']
    });
  });

  route(/^\/memoria\/(\d+)$/, (el, nStr) => {
    const L = D().levels.find(l => l.n === +nStr); if (!L) return go('#/memoria');
    App.setScene(scene(L.i));
    setLast('memoria', '#/memoria/' + L.n, `Memória · ${K.label(L)}`, `${L.pairs.length} pares`);
    const cards = K.shuffle(L.pairs.flatMap(([sid, ii]) => { const s = story(sid); const it = s.items[ii]; return [{ k: sid, t: 1, e: s.icon, n: s.name }, { k: sid, t: 0, e: it.e, n: it.n, d: it.d, r: it.r }]; }));
    const cols = cards.length <= 6 ? 3 : 4;
    let open = [], got = new Set(), moves = 0, lock = false;
    el.innerHTML = `${K.topbar('#/memoria', `FASE ${L.i}`, `Memória · ${K.TRK[L.t]}`)}
      <div class="lg-info"><span>Encontre <b>${L.pairs.length} pares</b></span><span>Jogadas: <b id="mv">0</b></span></div>
      <div class="mm-grid" style="grid-template-columns:repeat(${cols},1fr)">${cards.map((c, i) => `<button class="mm-c" data-i="${i}" aria-label="carta"><div class="in"><div class="back">✝</div><div class="face ${c.t ? 'theme' : ''}"><span class="e">${c.e}</span><span class="n">${esc(c.n)}</span>${c.t ? '<i>👑</i>' : ''}</div></div></button>`).join('')}</div>
      <div id="disc"><p class="vs-tip">Toque numa carta para começar.</p></div>`;
    K.common(el);
    el.addEventListener('click', e => {
      const b = e.target.closest('.mm-c'); if (!b || lock) return;
      const i = +b.dataset.i; if (open.includes(i) || got.has(i)) return;
      b.classList.add('up'); sfx.tap(); open.push(i);
      if (open.length < 2) return;
      moves++; $('#mv', el).textContent = moves;
      const [a, c] = open.map(x => cards[x]);
      if (a.k === c.k && a.t !== c.t) {
        open.forEach(x => { got.add(x); $(`.mm-c[data-i="${x}"]`, el).classList.add('ok'); }); open = []; sfx.good();
        const it = a.t ? c : a, s = a.t ? a : c;
        $('#disc', el).innerHTML = `<div class="discovery parch pop"><div class="lbl">${esc(s.e)} ${esc(s.n)}</div><h3>${it.e} ${esc(it.n)}</h3><p>${esc(it.d)}</p><div class="ref">${I.book}<span>${esc(it.r)}</span></div></div>`;
        if (got.size === cards.length) {
          const P = L.pairs.length; const stars = moves <= Math.ceil(P * 1.6) ? 3 : moves <= Math.ceil(P * 2.4) ? 2 : 1;
          setTimeout(() => K.finish({ el, id: 'memoria', n: L.n, stars, badge: '🧠', title: 'Todos os pares!', text: `Você juntou ${P} pares em <b>${moves}</b> jogadas.`, next: (x => x && '#/memoria/' + x.n)(K.nextOf(D().levels, L)) }), 1200);
        }
      } else {
        lock = true; setTimeout(() => { open.forEach(x => $(`.mm-c[data-i="${x}"]`, el).classList.remove('up')); open = []; lock = false; }, 1100);
      }
    });
  });
})();
