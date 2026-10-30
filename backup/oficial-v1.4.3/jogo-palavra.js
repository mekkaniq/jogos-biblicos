/* Palavra do Dia — uma palavra bíblica de 5 letras por dia, 6 tentativas */
(function () {
  const { $, $$, esc, I, save, route, go, setScene, setLast, toast, sfx, confetti } = App;
  const K = App.kit;
  const D = () => window.PALAVRA_DATA;
  const S = () => K.st('palavra', { days: {}, streak: 0, best: 0, played: 0, won: 0, dist: [0, 0, 0, 0, 0, 0], lastWin: null });
  const numOf = k => K.dayIndex(k, D().start) + 1;
  const wordOf = k => { const ws = D().words; const i = ((numOf(k) - 1) % ws.length + ws.length) % ws.length; return ws[i]; };
  // pinta cada letra: 2 = lugar certo, 1 = existe em outro lugar, 0 = não existe
  function score(g, ans) {
    const res = Array(5).fill(0), left = {};
    for (let i = 0; i < 5; i++) { if (g[i] === ans[i]) res[i] = 2; else left[ans[i]] = (left[ans[i]] || 0) + 1; }
    for (let i = 0; i < 5; i++) if (!res[i] && left[g[i]]) { res[i] = 1; left[g[i]]--; }
    return res;
  }
  const yesterday = k => { const d = new Date(k + 'T12:00:00'); d.setDate(d.getDate() - 1); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

  function game(el, mode) {
    const daily = mode === 'dia';
    const k = K.today();
    const W = daily ? wordOf(k) : D().words[Math.floor(Math.random() * D().words.length)];
    const s = S();
    const rec = daily ? (s.days[k] = s.days[k] || { g: [], end: 0 }) : { g: [], end: 0 };
    let cur = '';
    setScene('aurora');
    if (daily) setLast('palavra', '#/palavra', 'Palavra do Dia', K.dateLabel(k));
    el.innerHTML = `${K.topbar('#/', daily ? 'PALAVRA DO DIA' : 'TREINO', daily ? `nº ${numOf(k)} · ${K.dateLabel(k)}` : 'palavra surpresa')}
      <div class="pd-legend"><span><i class="pd-mini ok">✓</i> lugar certo</span><span><i class="pd-mini near">↔</i> em outra casa</span><span><i class="pd-mini no">✕</i> não tem</span><button class="pd-help" data-help aria-label="Como jogar">?</button></div>
      <div class="pd-board" id="pdb">${Array.from({ length: 6 }, (_, r) => `<div class="pd-row" data-r="${r}">${Array.from({ length: 5 }, () => '<div class="pd-t"></div>').join('')}</div>`).join('')}</div>
      <div id="pdEnd"></div>
      <div class="kb" id="kb">
        <div id="pdClues" class="pd-clues parch"></div>
        ${['QWERTYUIOP', 'ASDFGHJKL'].map(r => `<div class="kb-row">${[...r].map(l => `<button class="key" data-key="${l}">${l}</button>`).join('')}</div>`).join('')}
        <div class="kb-row"><button class="key wide" data-key="DEL" aria-label="Apagar">${I.del}</button>${[...'ZXCVBNM'].map(l => `<button class="key" data-key="${l}">${l}</button>`).join('')}<button class="key wide go pd-enter" data-key="OK">OK</button></div>
      </div>`;
    K.common(el);
    const rows = $$('.pd-row', el);
    function paintRow(r, g, anim) {
      const sc = score(g, W.p); const tiles = $$('.pd-t', rows[r]);
      tiles.forEach((t, i) => {
        const set = () => { t.className = 'pd-t on ' + ['no', 'near', 'ok'][sc[i]]; t.dataset.m = ['✕', '↔', '✓'][sc[i]]; t.textContent = sc[i] === 2 ? [...W.w.toUpperCase()][i] : g[i]; };
        if (anim) { setTimeout(() => { t.classList.add('flip'); setTimeout(set, 180); }, i * 230); } else set();
      });
      return sc;
    }
    function paintKeys() {
      const best = {};
      rec.g.forEach(g => score(g, W.p).forEach((v, i) => { best[g[i]] = Math.max(best[g[i]] ?? -1, v); }));
      $$('.key[data-key]', el).forEach(b => { const v = best[b.dataset.key]; b.classList.remove('k0', 'k1', 'k2'); if (v !== undefined) b.classList.add('k' + v); });
    }
    function paintClues() {
      const box = $('#pdClues', el); if (!rec.g.length || rec.end) { box.style.display = 'none'; return; }
      box.style.display = '';
      const known = Array(5).fill(null), near = new Set(), no = new Set(), has = new Set();
      rec.g.forEach(g => score(g, W.p).forEach((v, i) => { if (v === 2) { known[i] = [...W.w.toUpperCase()][i]; has.add(g[i]); } else if (v === 1) { near.add(g[i]); has.add(g[i]); } }));
      rec.g.forEach(g => score(g, W.p).forEach((v, i) => { if (v === 0 && !has.has(g[i])) no.add(g[i]); }));
      // letras amarelas que já foram encontradas no lugar certo saem da lista "em outra casa"
      const nearOnly = [...near].filter(ch => W.p.split(ch).length - 1 > known.filter((k, i) => k && W.p[i] === ch).length);
      box.innerHTML = `<div class="pc-row"><b>Já sabemos:</b><span class="pc-known">${known.map(k => `<i>${k || '_'}</i>`).join('')}</span></div>
        <div class="pc-row"><b>Tem na palavra, em outra casa:</b><span>${nearOnly.length ? nearOnly.join(', ') : '—'}</span></div>
        <div class="pc-row"><b>Não tem:</b><span>${no.size ? [...no].join(', ') : '—'}</span></div>`;
    }
    function help() {
      App.modal(`<h2>Como jogar</h2><p>Descubra a palavra de <b>5 letras</b> em até <b>6 tentativas</b>. Depois de cada tentativa, as cores mostram o quanto você chegou perto.</p>
        <p style="margin-top:12px"><b>Exemplo:</b> a palavra secreta é <b>PEDRO</b> e você tentou <b>PERTO</b>:</p>
        <div class="pd-row pd-ex"><div class="pd-t on ok">P</div><div class="pd-t on ok">E</div><div class="pd-t on near">R</div><div class="pd-t on no">T</div><div class="pd-t on ok">O</div></div>
        <div class="pd-explain"><div><i class="pd-mini ok">✓</i><span><b>Verde:</b> a letra existe e está no <b>lugar certo</b> (P, E e O).</span></div>
        <div><i class="pd-mini near">↔</i><span><b>Laranja:</b> a letra existe, mas está em <b>outra casa</b> (o R vem depois do D).</span></div>
        <div><i class="pd-mini no">✕</i><span><b>Cinza:</b> a letra <b>não existe</b> na palavra (T).</span></div></div>
        <p style="margin-top:10px">Embaixo do tabuleiro, o quadro de <b>pistas</b> resume tudo para você. Os acentos não importam.</p>
        <div class="actions"><button class="btn btn-gold" data-close>Entendi, vamos jogar!</button></div>`);
      s.help = 1; save();
    }
    function paintCur() {
      const r = rec.g.length; if (r >= 6 || rec.end) return;
      $$('.pd-t', rows[r]).forEach((t, i) => { t.textContent = cur[i] || ''; t.className = 'pd-t' + (cur[i] ? ' typed' : '') + (i === cur.length ? ' caret' : ''); });
    }
    rec.g.forEach((g, r) => paintRow(r, g, false)); paintKeys(); paintCur(); paintClues();
    if (!s.help && !rec.g.length) setTimeout(help, 350);
    if (rec.end) showEnd(false);

    function submit() {
      if (rec.end) return;
      if (cur.length < 5) { rows[rec.g.length].classList.remove('shake'); void rows[rec.g.length].offsetWidth; rows[rec.g.length].classList.add('shake'); toast('A palavra tem 5 letras.'); return; }
      const g = cur; cur = ''; const r = rec.g.length; rec.g.push(g);
      const sc = paintRow(r, g, true);
      const win = sc.every(v => v === 2);
      if (win || rec.g.length === 6) rec.end = win ? 1 : 2;
      if (daily) {
        if (rec.end) {
          s.played++; if (win) { s.won++; s.dist[rec.g.length - 1]++; s.streak = s.lastWin === yesterday(k) ? s.streak + 1 : 1; s.best = Math.max(s.best, s.streak); s.lastWin = k; } else s.streak = 0;
          s.done[numOf(k)] = win ? (rec.g.length <= 3 ? 3 : rec.g.length <= 5 ? 2 : 1) : 0;
        }
        save();
      }
      setTimeout(() => { paintKeys(); paintCur(); paintClues(); if (rec.end) { if (win) { sfx.win(); confetti(); rows[r].classList.add('glow'); } else sfx.bad(); setTimeout(() => showEnd(true), 500); } else sfx.tap(); }, 1250);
    }
    function showEnd(anim) {
      $('#kb', el).style.display = 'none';
      const win = rec.end === 1;
      const total = s.played || 0, pct = total ? Math.round(s.won / total * 100) : 0, mx = Math.max(1, ...s.dist);
      $('#pdEnd', el).innerHTML = `
        <div class="discovery parch pd-res ${anim ? 'pop' : ''}">
          <div class="lbl">${win ? ['Inacreditável!', 'Excelente!', 'Muito bem!', 'Boa!', 'Conseguiu!', 'Ufa, na última!'][rec.g.length - 1] : 'A palavra era'}</div>
          <h3>${esc(W.w)}</h3><p>${esc(W.d)}</p><div class="ref">${I.book}<span>${esc(W.r)}</span></div>
        </div>
        ${daily ? `<div class="pd-stats parch">
          <div class="nums"><div><b>${total}</b><span>jogos</span></div><div><b>${pct}%</b><span>vitórias</span></div><div><b>${s.streak}</b><span>sequência</span></div><div><b>${s.best}</b><span>recorde</span></div></div>
          <div class="dist">${s.dist.map((v, i) => `<div><i>${i + 1}</i><span class="${win && rec.g.length === i + 1 ? 'me' : ''}" style="width:${Math.max(8, v / mx * 100)}%">${v}</span></div>`).join('')}</div>
          <p class="pd-next">Nova palavra amanhã, à meia-noite. 🌅</p>
        </div>
        <button class="btn btn-gold btn-block" data-share>${I.share} Compartilhar com a família</button>` : ''}
        <button class="btn ${daily ? 'btn-ghost' : 'btn-gold'} btn-block" style="margin-top:10px" data-train>Treinar com outra palavra ${I.arrow}</button>`;
      if (anim) $('#pdEnd', el).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function type(v) { if (rec.end) return; if (v === 'DEL') cur = cur.slice(0, -1); else if (v === 'OK') return submit(); else if (cur.length < 5) cur += v; sfx.tap(); paintCur(); }
    $('#kb', el).addEventListener('pointerdown', e => { const b = e.target.closest('[data-key]'); if (!b) return; e.preventDefault(); b.classList.add('down'); setTimeout(() => b.classList.remove('down'), 120); type(b.dataset.key); });
    const onKey = e => { if (!el.isConnected) return document.removeEventListener('keydown', onKey); if (e.key === 'Enter') type('OK'); else if (e.key === 'Backspace') type('DEL'); else if (/^[a-z]$/i.test(e.key)) type(e.key.toUpperCase()); };
    document.addEventListener('keydown', onKey);
    el.addEventListener('click', async e => {
      if (e.target.closest('[data-help]')) help();
      if (e.target.closest('[data-train]')) { sfx.tap(); if (daily) go('#/palavra/treino'); else App.rerender(); }
      if (e.target.closest('[data-share]')) {
        const grid = rec.g.map(g => score(g, W.p).map(v => ['⬜', '🟨', '🟩'][v]).join('')).join('\n');
        const txt = `Palavra do Dia nº ${numOf(k)} ✝️ ${rec.end === 1 ? rec.g.length : 'X'}/6\n\n${grid}\n\nJogos Bíblicos: ${location.origin + location.pathname}`;
        try { if (navigator.share) await navigator.share({ text: txt }); else { await navigator.clipboard.writeText(txt); toast('Copiado! Agora é só colar no WhatsApp.'); } } catch (err) { }
      }
    });
  }
  route(/^\/palavra$/, el => game(el, 'dia'));
  route(/^\/palavra\/treino$/, el => game(el, 'treino'));
  App.palavra = { today: () => { const k = K.today(); const r = S().days[k]; return { num: numOf(k), done: !!(r && r.end), win: r && r.end === 1, tries: r ? r.g.length : 0 }; } };
})();
