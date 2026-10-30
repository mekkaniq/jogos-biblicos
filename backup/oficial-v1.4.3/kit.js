/* Peças compartilhadas pelos jogos da v1.2: cabeçalho, lista de fases, tela de conclusão, datas */
(function () {
  const { $, esc, pad, I, load, save, go, modal, confetti, sfx, openSettings } = App;
  const topbar = (back, title, sub) => `<div class="topbar"><button class="icon-btn" data-back="${back}" aria-label="Voltar">${I.back}</button><div class="ttl"><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</div><button class="icon-btn" data-settings aria-label="Ajustes">${I.gear}</button></div>`;
  function common(el) { el.addEventListener('click', e => { const b = e.target.closest('[data-back]'); if (b) go(b.dataset.back); if (e.target.closest('[data-settings]')) openSettings(); }); }
  // progresso de cada jogo: load()[nome] = { done: {n: estrelas}, ... }
  function st(name, extra) { const s = load(); if (!s[name]) s[name] = {}; const o = s[name]; if (!o.done) o.done = {}; for (const [k, v] of Object.entries(extra || {})) if (o[k] === undefined) o[k] = JSON.parse(JSON.stringify(v)); return o; }
  const today = () => { const n = new Date(); return n.getFullYear() + '-' + pad(n.getMonth() + 1) + '-' + pad(n.getDate()); };
  const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const dateLabel = k => { const [y, m, d] = k.split('-').map(Number); return `${d} de ${MESES[m - 1]}`; };
  const dayIndex = (k, start) => Math.round((Date.UTC(...k.split('-').map((v, i) => i === 1 ? v - 1 : +v)) - Date.UTC(...start.split('-').map((v, i) => i === 1 ? v - 1 : +v))) / 864e5);
  function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  const shuffle = (a, r = Math.random) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const plain = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().replace(/[^A-Z]/g, '');
  const stars = n => [1, 2, 3].map(i => `<span class="${i <= n ? '' : 'off'}">★</span>`).join('');
  const gicon = icon => `<div class="gicon" style="width:58px;height:58px;border-radius:16px;display:grid;place-items:center;background:var(--gold-grad);color:#3b2a0c;margin-bottom:6px">${icon.replace('<svg', '<svg style="width:32px;height:32px"')}</div>`;
  const signature = `<div class="signature"><b>Feito por Eduardo de Souza</b><i>com muito amor, para a minha família. ❤️</i></div>`;

  // Tela inicial padrão de um jogo com fases
  // Trilhas de dificuldade: cada fase tem t (1 fácil, 2 médio, 3 difícil) e i (número dentro da trilha)
  const TRK = ['', 'Fácil', 'Médio', 'Difícil'];
  const TRK_IC = ['', '🌱', '🔥', '👑'];
  const label = L => L.t ? `${TRK[L.t]} · fase ${L.i}` : `fase ${L.n}`;
  const nextOf = (levels, L) => { const nx = levels.find(x => x.n === L.n + 1); return nx && (!L.t || nx.t === L.t) ? nx : null; };
  function home(el, o) {
    App.setScene(o.scene);
    const S = st(o.id); const done = S.done;
    const hasT = o.levels.some(l => l.t);
    let trk = hasT ? (S.trk || 1) : 0;
    function draw() {
      const levels = hasT ? o.levels.filter(l => l.t === trk) : o.levels;
      const next = levels.find(l => !done[l.n]) || levels[0];
      const groups = (o.groups ? o.groups(trk, levels) : null) || [{ name: null, levels }];
      const desc = hasT && o.trackDesc ? o.trackDesc[trk] : '';
      el.innerHTML = `${topbar('#/', o.title, o.sub)}
      <section class="hero" style="background-image:url('${App.sceneUrl(o.scene).slice(5, -2)}');min-height:220px">
        ${App.lumi ? App.lumi.html('lendo', 'quiet hero-lumi') : ''}${gicon(o.icon)}<h1 style="font-size:2rem"><span class="gold-text">${o.heroTitle}</span></h1><div class="sub">${o.heroSub}</div>
      </section>
      ${o.top || ''}
      ${hasT ? `<div class="trk-tabs">${[1, 2, 3].map(t => { const ls = o.levels.filter(l => l.t === t); const d = ls.filter(l => done[l.n]).length; return `<button class="trk ${t === trk ? 'on' : ''}" data-trk="${t}"><span>${TRK_IC[t]}</span><b>${TRK[t]}</b><small>${d}/${ls.length}</small></button>`; }).join('')}</div>
      ${desc ? `<p class="trk-desc">${desc}</p>` : ''}` : ''}
      <button class="btn btn-gold btn-block" style="margin:12px 0 6px" data-play="${next.n}">${levels.some(l => done[l.n]) ? 'Continuar' : 'Começar'}: ${o.unit} ${next.i || next.n} ${I.arrow}</button>
      ${groups.map(g => `<div class="section-title"><h2>${g.name || (o.unitPl[0].toUpperCase() + o.unitPl.slice(1))}</h2><span>${g.levels.filter(l => done[l.n]).length} de ${g.levels.length}</span></div>
      <div class="level-grid">${g.levels.map(l => `<button class="level ${done[l.n] ? 'done' : ''} ${l.n === next.n ? 'next' : ''}" data-play="${l.n}" style="background-image:url('${App.sceneUrl(l.scene || o.scene).slice(5, -2)}')">
        ${done[l.n] ? `<span class="ok">${'★'.repeat(done[l.n])}</span>` : ''}<b>${l.i || l.n}</b><small>${esc(l.label || '')}</small></button>`).join('')}</div>`).join('')}
      <div class="howto parch"><h3>Como jogar</h3><ol>${o.howto.map(h => `<li>${h}</li>`).join('')}</ol></div>${signature}`;
    }
    draw();
    common(el);
    el.addEventListener('click', e => {
      const tb = e.target.closest('[data-trk]'); if (tb) { trk = +tb.dataset.trk; S.trk = trk; save(); sfx.tap(); draw(); return; }
      const p = e.target.closest('[data-play]'); if (p) { sfx.tap(); go(`#/${o.id}/${p.dataset.play}`); }
    });
  }
  // Conclusão de fase: estrelas, o que aprendeu e próxima fase
  function finish(o) {
    const s = st(o.id); s.done[o.n] = Math.max(s.done[o.n] || 0, o.stars); save();
    confetti(); sfx.win();
    const html = `<div class="win-card parch"><div class="wc-top"><div class="wc-badge">${o.badge || '👑'}</div><div><h2>${o.title || 'Fase concluída!'}</h2><div class="wc-stars">${stars(o.stars)}</div></div></div>
      ${o.text ? `<p class="wc-text">${o.text}</p>` : ''}${o.learned ? `<div class="wc-learned">${o.learned}</div>` : ''}
      <div class="wc-actions">${o.next ? `<button class="btn btn-gold btn-block" data-wn>${o.nextLabel || 'Próxima fase'} ${I.arrow}</button>` : '<p><b>Você completou todas as fases desta trilha! 🎉</b></p>'}<button class="btn btn-ghost btn-block" data-wl>${o.listLabel || 'Ver as fases'}</button></div></div>`;
    if (o.el) {
      // cartão de vitória logo abaixo do jogo: a pessoa lê com calma e segue quando quiser
      let box = o.el.querySelector('.win-slot'); if (!box) { box = document.createElement('div'); box.className = 'win-slot'; o.el.appendChild(box); }
      box.innerHTML = html;
      box.addEventListener('click', e => { if (e.target.closest('[data-wn]')) go(o.next); if (e.target.closest('[data-wl]')) go(o.back || '#/' + o.id); });
      setTimeout(() => box.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
      return;
    }
    const m = modal(html, { dismiss: false });
    m.el.addEventListener('click', e => { if (e.target.closest('[data-wn]')) { m.close(); go(o.next); } if (e.target.closest('[data-wl]')) { m.close(); go(o.back || '#/' + o.id); } });
  }
  App.kit = { TRK, label, nextOf, topbar, common, st, today, dateLabel, dayIndex, rng, shuffle, plain, stars, gicon, signature, home, finish };
})();
