/* Lumi — a ovelhinha animada do app. Usada no Cantinho Kids (com fala) e, de forma discreta, nos jogos dos adultos (só animação). */
(function () {
  const { $, $$ } = App;
  const pick = a => a[Math.floor(Math.random() * a.length)];
  // =====================================================================
  //  LUMI — a ovelhinha animada
  //  Poses: oi, festa, pensando, dica, lendo, dormindo, rosto, sarca.
  //  Quatro poses têm um quadro de "piscar" (olhos fechados) por cima.
  // =====================================================================
  const lumiSrc = n => 'lumi-' + n + '.webp';
  const BLINK = { oi: [33.76, 21.67, 46.82], pensando: [32.11, 21.94, 48.16], dica: [31.39, 17.70, 41.39], lendo: [29.17, 26.01, 40.83] };
  const body = p => { const b = BLINK[p]; return `<img class="lu-i" src="${lumiSrc(p)}" alt="" draggable="false">${b ? `<img class="lu-e" src="${lumiSrc(p + '-pisca')}" style="left:${b[0]}%;top:${b[1]}%;width:${b[2]}%" alt="" draggable="false">` : ''}`; };
  const lumiHTML = (p, cls = '') => `<button class="lumi ${cls}" data-pose="${p}" data-lumi aria-label="Lumi"><span class="lu-sh"></span><span class="lu-b">${body(p)}</span><span class="lu-fx"></span></button>`;
  function setPose(lu, p) {
    if (!lu || lu.dataset.pose === p) return;
    lu.dataset.pose = p; $('.lu-b', lu).innerHTML = body(p);
    anim(lu, 'swap', 450);
  }
  function anim(lu, cls, ms) {
    if (!lu) return; lu.classList.remove(cls); void lu.offsetWidth; lu.classList.add(cls);
    clearTimeout(lu['_' + cls]); lu['_' + cls] = setTimeout(() => lu.classList.remove(cls), ms || 900);
  }
  function burst(lu, chars, n = 7) {
    const fx = lu && $('.lu-fx', lu); if (!fx) return;
    for (let i = 0; i < n; i++) {
      const s = document.createElement('i'); s.textContent = pick(chars);
      s.style.cssText = `--x:${((Math.random() * 2 - 1) * 70).toFixed(0)}px;--y:${(-50 - Math.random() * 60).toFixed(0)}px;--r:${((Math.random() * 2 - 1) * 40).toFixed(0)}deg;left:${(30 + Math.random() * 40).toFixed(0)}%;animation-delay:${i * 45}ms;font-size:${(14 + Math.random() * 12).toFixed(0)}px`;
      fx.appendChild(s); setTimeout(() => s.remove(), 1600);
    }
  }
  // reações prontas
  const Lumi = {
    yay(lu) { setPose(lu, 'festa'); anim(lu, 'hop', 800); burst(lu, ['✨', '⭐', '💛', '🌟'], 9); },
    oops(lu) { setPose(lu, 'pensando'); anim(lu, 'no', 700); burst(lu, ['💭'], 1); },
    hint(lu) { setPose(lu, 'dica'); anim(lu, 'lean', 1000); },
    love(lu) { anim(lu, 'hop', 800); burst(lu, ['💛', '❤️', '💕'], 6); },
    wave(lu) { anim(lu, 'wave', 1700); }
  };
  // piscar: um só relógio para todas as Lumis da tela
  (function blinkLoop() {
    $$('.lumi:not(.sleep)').forEach(lu => {
      if (Math.random() < .55) { lu.classList.add('blink'); setTimeout(() => lu.classList.remove('blink'), 140); if (Math.random() < .25) setTimeout(() => { lu.classList.add('blink'); setTimeout(() => lu.classList.remove('blink'), 120); }, 300); }
    });
    setTimeout(blinkLoop, 1800 + Math.random() * 2400);
  })();


  // ---------- participação discreta nos jogos dos adultos: sem fala, só animação ----------
  // toque numa Lumi "quieta": um pulinho com corações
  document.addEventListener('click', e => { const lu = e.target.closest('.lumi.quiet'); if (lu) { e.preventDefault(); Lumi.love(lu); } });
  // em toda vitória (confete), a Lumi aparece no canto, comemora e vai embora
  const confetti0 = App.confetti;
  App.confetti = function () {
    confetti0.apply(this, arguments);
    if (document.body.classList.contains('kids')) return;
    const old = document.querySelector('.lumi-peek'); if (old) old.remove();
    const w = document.createElement('div'); w.className = 'lumi-peek'; w.innerHTML = lumiHTML('festa');
    document.body.appendChild(w);
    const lu = w.firstElementChild;
    setTimeout(() => { anim(lu, 'hop', 800); burst(lu, ['✨', '⭐', '🌟'], 8); }, 550);
    setTimeout(() => { anim(lu, 'hop', 800); burst(lu, ['✨', '💛'], 5); }, 1500);
    setTimeout(() => w.classList.add('out'), 2800);
    setTimeout(() => w.remove(), 3400);
  };
  App.lumi = { html: lumiHTML, pose: setPose, anim, burst, react: Lumi };
})();
