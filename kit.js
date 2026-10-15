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
  function home(el, o) {
    App.setScene(o.scene);
    const done = st(o.id).done; const levels = o.levels;
    const next = levels.find(l => !done[l.n]) || levels[0];
    const groups = o.groups || [{ name: null, levels }];
    el.innerHTML = `${topbar('#/', o.title, o.sub)}
      <section class="hero" style="background-image:url('${App.sceneUrl(o.scene).slice(5, -2)}');min-height:240px">
        ${gicon(o.icon)}<h1 style="font-size:2rem"><span class="gold-text">${o.heroTitle}</span></h1><div class="sub">${o.heroSub}</div>
      </section>
      ${o.top || ''}
      <button class="btn btn-gold btn-block" style="margin:14px 0 6px" data-play="${next.n}">${Object.keys(done).length ? 'Continuar' : 'Começar'}: ${o.unit} ${next.n} ${I.arrow}</button>
      ${groups.map(g => `<div class="section-title"><h2>${g.name || (o.unitPl[0].toUpperCase() + o.unitPl.slice(1))}</h2><span>${g.levels.filter(l => done[l.n]).length} de ${g.levels.length}</span></div>
      <div class="level-grid">${g.levels.map(l => `<button class="level ${done[l.n] ? 'done' : ''} ${l.n === next.n ? 'next' : ''}" data-play="${l.n}" style="background-image:url('${App.sceneUrl(l.scene || o.scene).slice(5, -2)}')">
        ${done[l.n] ? `<span class="ok">${'★'.repeat(done[l.n])}</span>` : ''}<b>${l.n}</b><small>${esc(l.label || '')}</small></button>`).join('')}</div>`).join('')}
      <div class="howto parch"><h3>Como jogar</h3><ol>${o.howto.map(h => `<li>${h}</li>`).join('')}</ol></div>${signature}`;
    common(el);
    el.addEventListener('click', e => { const p = e.target.closest('[data-play]'); if (p) { sfx.tap(); go(`#/${o.id}/${p.dataset.play}`); } });
  }
  // Conclusão de fase: estrelas, o que aprendeu e próxima fase
  function finish(o) {
    const s = st(o.id); s.done[o.n] = Math.max(s.done[o.n] || 0, o.stars); save();
    confetti(); sfx.win();
    const m = modal(`<div class="badge">${o.badge || '👑'}</div><h2>${o.title || 'Fase concluída!'}</h2><div class="stars-big">${stars(o.stars)}</div>
      ${o.text ? `<p>${o.text}</p>` : ''}${o.learned ? `<div class="learned">${o.learned}</div>` : ''}
      <div class="actions">${o.next ? `<button class="btn btn-gold" data-n>${o.nextLabel || 'Próxima fase'} ${I.arrow}</button>` : '<p><b>Você completou todas as fases! 🎉</b></p>'}<button class="btn btn-ghost" data-l>${o.listLabel || 'Ver as fases'}</button></div>`, { dismiss: false });
    m.el.addEventListener('click', e => { if (e.target.closest('[data-n]')) { m.close(); go(o.next); } if (e.target.closest('[data-l]')) { m.close(); go('#/' + o.id); } });
  }
  App.kit = { topbar, common, st, today, dateLabel, dayIndex, rng, shuffle, plain, stars, gicon, signature, home, finish };
})();
