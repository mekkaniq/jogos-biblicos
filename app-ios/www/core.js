/* Jogos Bíblicos — núcleo: progresso, rotas, ícones, avisos, sons */
(function () {
  'use strict';
  const KEY = window.__BETA ? 'jogos-biblicos-beta' : 'jogos-biblicos';   // nunca muda: o progresso sobrevive às atualizações (o beta tem o seu, separado)
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');

  // ---------- Progresso (salvo no aparelho) ----------
  const blank = () => ({ v: 1, settings: { big: false, sound: true }, last: null, caca: { found: {}, hints: {} }, cruzada: { fill: {}, solved: {}, hints: {}, stars: {} }, cartas: { done: {}, cur: null }, quiz: { best: 0, runs: 0, right: 0, wins: 0, seen: {}, cur: null } });
  let mem = null;
  function load() {
    if (mem) return mem;
    try { mem = JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { mem = null; }
    // beta: começa com uma cópia do progresso do app oficial (o oficial nunca é alterado)
    if (!mem && window.__BETA) { try { mem = JSON.parse(localStorage.getItem('jogos-biblicos')) || null; } catch (e) { mem = null; } if (mem) save(); }
    if (!mem) { mem = blank(); migrateOld(mem); save(); }
    const b = blank();
    for (const k of Object.keys(b)) if (mem[k] === undefined) mem[k] = b[k];
    for (const k of Object.keys(b.cruzada)) if (!mem.cruzada[k]) mem.cruzada[k] = {};
    return mem;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* modo privado: segue só na memória */ } }
  // Traz o progresso das versões antigas, se estiverem neste mesmo endereço
  function migrateOld(st) {
    try {
      const oldWs = JSON.parse(localStorage.getItem('cpb-v5-progress') || '{}');
      const per = {}; Object.keys(oldWs).forEach(k => { const m = /^p(\d+):/.exec(k); if (m && oldWs[k]) per[m[1]] = (per[m[1]] || 0) + 1; });
      Object.entries(per).forEach(([id, n]) => { if (n >= 8) st.caca.found[id] = 'all'; });
      for (const k of ['pcb-v17', 'pcb-v5', 'pcb-v2']) {
        const o = JSON.parse(localStorage.getItem(k) || '{}');
        Object.keys(o).filter(x => /^\d+$/.test(x) && o[x] === true).forEach(id => { st.cruzada.stars[id] = st.cruzada.stars[id] || 2; st.cruzada.solved[id] = 'all'; });
      }
    } catch (e) { }
  }
  function setLast(game, route, label, sub) { load().last = { game, route, label, sub, at: Date.now() }; save(); }

  // ---------- Ícones ----------
  const I = {
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/></svg>',
    shuffle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h3.5c2 0 3.2 1 4.3 2.7l2.4 4.6c1 1.7 2.3 2.7 4.3 2.7H21"/><path d="M3 17h3.5c1.4 0 2.4-.5 3.3-1.4M14.2 8.4c.9-.9 1.9-1.4 3.3-1.4H21"/><path d="M18 4l3 3-3 3M18 14l3 3-3 3"/></svg>',
    wheel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="5.6" r="1.5"/><circle cx="18" cy="10" r="1.5"/><circle cx="15.8" cy="17" r="1.5"/><circle cx="8.2" cy="17" r="1.5"/><circle cx="6" cy="10" r="1.5"/></svg>',
    who: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4.5 21c.8-4.2 3.8-6.5 7.5-6.5s6.7 2.3 7.5 6.5"/><path d="M10.6 6.7a1.6 1.6 0 1 1 2.2 1.5c-.5.2-.8.6-.8 1.1"/></svg>',
    timeline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="18" r="2"/><path d="M14 6h6M4 12h6M14 18h5"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="8" height="11" rx="1.6"/><rect x="13" y="8" width="8" height="11" rx="1.6"/><path d="M7 9v3M17 12v3"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M9.3 9.2a2.8 2.8 0 0 1 5.4 1c0 1.9-2.7 2.4-2.7 4.2"/><circle cx="12" cy="17.6" r=".6" fill="currentColor"/></svg>',
    skip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5l8 7-8 7zM14 5l6 7-6 7"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c.6-3.6 3-5.6 6-5.6s5.4 2 6 5.6"/><circle cx="17" cy="9" r="2.6"/><path d="M16.5 14.2c2.4.2 4 1.9 4.5 4.8"/></svg>',
    half: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="8" height="14" rx="2"/><rect x="13" y="5" width="8" height="14" rx="2" stroke-dasharray="2.5 2.5"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v18M6 4h11l-2.5 4L17 12H6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z"/></svg>',
    undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10.5 5 8 4.5 4 4.5v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-13c-4 0-6.5.5-8 2z"/><path d="M12 6.5v13"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',
    del: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 5H9l-6 7 6 7h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/><path d="M17 9l-5 6M12 9l5 6"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="9" width="5" height="5" rx="1"/><rect x="9.5" y="9" width="5" height="5" rx="1"/><rect x="16" y="9" width="5" height="5" rx="1"/><rect x="9.5" y="2.5" width="5" height="5" rx="1"/><rect x="9.5" y="15.5" width="5" height="5" rx="1"/></svg>',
    cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="6" width="11" height="15" rx="2" transform="rotate(-8 8 13)"/><rect x="10" y="3" width="11" height="15" rx="2" fill="currentColor" fill-opacity=".25"/></svg>',
    crown: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>'
  };
  // Cruz dourada para os títulos
  const cross = `<svg class="cross" viewBox="0 0 34 46"><defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8e6ad"/><stop offset=".5" stop-color="#d9b154"/><stop offset="1" stop-color="#a47b2a"/></linearGradient></defs><path d="M13 0h8v12h13v8H21v26h-8V20H0v-8h13z" fill="url(#cg)" stroke="#7a5a1a" stroke-width=".8"/></svg>`;
  // Ícones grandes em dourado (arcos, jogos)
  const goldIcon = (kind) => {
    const g = '<defs><linearGradient id="gi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8e6ad"/><stop offset=".55" stop-color="#d4a94a"/><stop offset="1" stop-color="#9b7224"/></linearGradient></defs>';
    const P = {
      livro: '<path d="M32 18c-5-4-13-5-24-5v32c11 0 19 1 24 5 5-4 13-5 24-5V13c-11 0-19 1-24 5z" fill="url(#gi)" stroke="#6e5216" stroke-width="1.5"/><path d="M32 18v32" stroke="#6e5216" stroke-width="2"/><path d="M14 22c6 0 10 1 13 3M14 28c6 0 10 1 13 3M37 25c3-2 7-3 13-3M37 31c3-2 7-3 13-3" stroke="#8a6a24" stroke-width="1.4" fill="none"/>',
      pessoa: '<circle cx="32" cy="22" r="11" fill="url(#gi)" stroke="#6e5216" stroke-width="1.5"/><path d="M12 54c1-12 9-19 20-19s19 7 20 19z" fill="url(#gi)" stroke="#6e5216" stroke-width="1.5"/>',
      lugar: '<path d="M8 50l14-6 20 6 14-6v-30l-14 6-20-6-14 6z" fill="url(#gi)" stroke="#6e5216" stroke-width="1.5" opacity=".75"/><path d="M32 6c-8 0-13 6-13 13 0 9 13 23 13 23s13-14 13-23c0-7-5-13-13-13z" fill="url(#gi)" stroke="#6e5216" stroke-width="1.5"/><circle cx="32" cy="19" r="5" fill="#7a5a1a"/>',
      coroa: '<path d="M8 22l12 10 12-18 12 18 12-10-5 26H13z" fill="url(#gi)" stroke="#6e5216" stroke-width="1.5"/><rect x="13" y="48" width="38" height="6" rx="2" fill="url(#gi)" stroke="#6e5216" stroke-width="1.5"/><circle cx="8" cy="20" r="3" fill="url(#gi)"/><circle cx="56" cy="20" r="3" fill="url(#gi)"/><circle cx="32" cy="12" r="3" fill="url(#gi)"/>',
      templo: '<path d="M6 22L32 8l26 14z" fill="url(#gi)" stroke="#6e5216" stroke-width="1.5"/><rect x="8" y="22" width="48" height="4" fill="url(#gi)" stroke="#6e5216" stroke-width="1.2"/><g fill="url(#gi)" stroke="#6e5216" stroke-width="1.2"><rect x="12" y="27" width="6" height="20"/><rect x="23" y="27" width="6" height="20"/><rect x="35" y="27" width="6" height="20"/><rect x="46" y="27" width="6" height="20"/></g><rect x="6" y="47" width="52" height="6" rx="1" fill="url(#gi)" stroke="#6e5216" stroke-width="1.5"/>'
    };
    return `<svg class="ic" viewBox="0 0 64 64">${g}${P[kind] || P.livro}</svg>`;
  };

  // ---------- Interface: avisos, janelas, folhas ----------
  function toast(msg, ms = 2400) {
    $$('.toast').forEach(t => t.remove());
    const t = document.createElement('div'); t.className = 'toast' + (document.querySelector('#kb') ? '' : ' bottom'); t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.remove(), ms);
  }
  function modal(html, { onClose, dismiss = true } = {}) {
    const o = document.createElement('div'); o.className = 'overlay';
    o.innerHTML = `<div class="modal parch" role="dialog" aria-modal="true">${html}</div>`;
    document.body.appendChild(o);
    const close = () => { o.remove(); onClose && onClose(); };
    if (dismiss) o.addEventListener('click', e => { if (e.target === o) close(); });
    o.addEventListener('click', e => { const b = e.target.closest('[data-close]'); if (b) close(); });
    return { el: o, close };
  }
  function sheet(html) {
    const o = document.createElement('div'); o.className = 'overlay'; o.style.placeItems = 'end stretch'; o.style.padding = '0';
    o.innerHTML = `<div class="sheet parch">${html}</div>`;
    document.body.appendChild(o);
    const close = () => o.remove();
    o.addEventListener('click', e => { if (e.target === o || e.target.closest('[data-close]')) close(); });
    return { el: o, close };
  }
  function confetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('div'); c.className = 'confetti';
    const cols = ['#e9cf8c', '#c49a3e', '#8fbf6e', '#f4e4b6', '#3b7454', '#ecc9c4'];
    for (let i = 0; i < 45; i++) { const p = document.createElement('i'); p.style.left = Math.random() * 100 + 'vw'; p.style.background = cols[i % cols.length]; p.style.animationDuration = 1.4 + Math.random() * 1.2 + 's'; p.style.animationDelay = Math.random() * .5 + 's'; c.appendChild(p); }
    document.body.appendChild(c); setTimeout(() => c.remove(), 4200);
  }

  // ---------- Sons suaves ----------
  let ac = null;
  function tone(freqs, dur = .18, gap = .09, vol = .06) {
    if (!load().settings.sound) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
      freqs.forEach((f, i) => {
        const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + i * gap;
        o.type = 'sine'; o.frequency.value = f; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + dur + .25);
        o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + dur + .3);
      });
    } catch (e) { }
  }
  const sfx = { tap: () => tone([660], .05, 0, .025), good: () => tone([523, 659, 784], .16, .08), win: () => tone([523, 659, 784, 1047], .3, .12, .07), bad: () => tone([220], .12, 0, .04) };

  // ---------- Ajustes ----------
  function applySettings() { document.documentElement.classList.toggle('big', !!load().settings.big); }
  const NATIVE = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  function openSettings() {
    const st = load().settings;
    let changed = false;
    const m = modal(`<h2>Ajustes</h2>
      <div style="margin-top:10px">
        <button class="setting" style="width:100%" data-s="big"><div><b>Letras grandes</b><span>Aumenta textos e botões</span></div><i class="switch ${st.big ? 'on' : ''}"></i></button>
        <button class="setting" style="width:100%" data-s="sound"><div><b>Sons</b><span>Toques suaves ao acertar</span></div><i class="switch ${st.sound ? 'on' : ''}"></i></button>
        <button class="setting" style="width:100%" data-aboutset><div><b>Sobre o texto bíblico</b><span>Almeida Corrigida Fiel (ACF)</span></div>${I.next}</button>
        ${NATIVE ? `<button class="setting" style="width:100%" data-remind><div><b>Lembrete diário</b><span>Uma notificação por dia, no horário que escolher</span></div>${I.next}</button>` : `<button class="setting" style="width:100%" data-install><div><b>Instalar no iPhone</b><span>Ter o ícone na tela inicial</span></div>${I.next}</button>`}
        <button class="setting" style="width:100%;border:0" data-reset><div><b>Recomeçar do zero</b><span>Apaga o progresso deste aparelho</span></div>${I.next}</button>
      </div>
      <div class="actions"><button class="btn btn-green" data-close>Pronto</button></div>`, { onClose: () => { if (changed) App.rerender(); } });
    m.el.addEventListener('click', e => {
      const s = e.target.closest('[data-s]');
      if (s) { const k = s.dataset.s; st[k] = !st[k]; save(); applySettings(); $('.switch', s).classList.toggle('on', st[k]); if (k === 'sound' && st[k]) sfx.good(); if (k === 'big') changed = true; }
      if (e.target.closest('[data-install]')) { m.close(); installHelp(); }
      if (e.target.closest('[data-remind]')) { m.close(); App.reminderSheet && App.reminderSheet(); }
      if (e.target.closest('[data-aboutset]')) { m.close(); about(); }
      if (e.target.closest('[data-reset]')) {
        m.close();
        const c = modal(`<h2>Recomeçar?</h2><p>Todo o progresso de todos os jogos neste aparelho será apagado.</p><div class="actions"><button class="btn btn-ghost" data-close>Cancelar</button><button class="btn btn-green" data-yes>Sim, apagar</button></div>`);
        c.el.addEventListener('click', ev => { if (ev.target.closest('[data-yes]')) { const s2 = load().settings; mem = blank(); mem.settings = s2; save(); c.close(); go('#/'); toast('Progresso apagado.'); } });
      }
    });
  }
  function installHelp() {
    modal(`<div class="badge">📱</div><h2>Instalar no iPhone</h2>
      <p>Assim os jogos ficam com um ícone na tela inicial, como um aplicativo, e funcionam até sem internet.</p>
      <div class="steps-ios">
        <div><i>1</i><span>Abra este endereço no <b>Safari</b>.</span></div>
        <div><i>2</i><span>Toque no botão <b>Compartilhar</b> ${I.share.replace('<svg', '<svg style="width:20px;height:20px;vertical-align:-4px"')} na parte de baixo.</span></div>
        <div><i>3</i><span>Escolha <b>Adicionar à Tela de Início</b> e toque em <b>Adicionar</b>.</span></div>
      </div>
      <div class="actions"><button class="btn btn-green" data-close>Entendi</button></div>`);
  }

  // ---------- Rotas ----------
  const routes = [];
  function route(re, fn) { routes.push([re, fn]); }
  let current = null;
  // A rota fica guardada na memória; o endereço (#) é atualizado quando o navegador permite
  let curRoute = /^#\//.test(location.hash) ? location.hash : '#/';
  function render() {
    const h = curRoute.replace(/^#/, '') || '/';
    const app = $('#app');
    if (current && current.leave) current.leave();
    current = null;
    $$('.overlay,.toast').forEach(x => x.remove());
    for (const [re, fn] of routes) {
      const m = h.match(re);
      if (m) {
        app.className = ''; document.body.classList.remove('kids', 'turma'); try { speechSynthesis.cancel(); } catch (e) { } document.body.removeAttribute('data-scene'); document.body.style.removeProperty('--scene');
        app.innerHTML = '';
        const div = document.createElement('div'); div.className = 'screen'; app.appendChild(div);
        current = fn(div, ...m.slice(1)) || null;
        window.scrollTo(0, 0);
        try { document.dispatchEvent(new CustomEvent('app:route', { detail: '#' + h })); } catch (e) { }
        return;
      }
    }
    curRoute = '#/'; render();
  }
  const sceneUrl = name => `url('${new URL('' + name + '.svg', location.href).href}')`;
  function setScene(name) { document.body.dataset.scene = name; document.body.style.setProperty('--scene', sceneUrl(name)); }
  function go(h) { curRoute = h; render(); try { if (location.hash !== h) history.pushState(null, '', h); } catch (e) { } }

  function about() {
    modal(`<div class="badge">📖</div><h2>Sobre o texto bíblico</h2>
      <p>Todos os versículos e referências deste aplicativo seguem a <b>Bíblia Almeida Corrigida Fiel (ACF)</b>, que adotamos como base e fonte oficial.</p>
      <p style="font-size:.85rem;margin-top:10px">Citações bíblicas extraídas de A Bíblia Sagrada - Almeida Corrigida Fiel (ACF) © 1994, 1995, 2007, 2011 Sociedade Bíblica Trinitariana do Brasil, Trinitarian Bible Society. Todos os direitos reservados.</p>
      <p style="font-size:.85rem">As explicações e pistas dos jogos são textos nossos, escritos com base nas Escrituras. Encontrou algo para corrigir? Fale com a gente.</p>
      ${NATIVE ? '<p style="font-size:.85rem">Este app não coleta dados: o progresso fica só neste aparelho. <a href="https://mekkaniq.github.io/jogos-biblicos/privacidade.html" style="color:inherit;font-weight:700">Política de privacidade</a></p>' : ''}
      <div class="actions"><button class="btn btn-gold" data-close>Fechar</button></div>`);
  }
  window.App = { native: NATIVE, about, $, $$, esc, pad, I, cross, goldIcon, load, save, setLast, toast, modal, sheet, confetti, sfx, route, go, setScene, sceneUrl, openSettings, installHelp, rerender: render, applySettings };
  const fromUrl = () => { if (/^#\//.test(location.hash) && location.hash !== curRoute) { curRoute = location.hash; render(); } };
  window.addEventListener('hashchange', fromUrl); window.addEventListener('popstate', fromUrl);
  document.addEventListener('DOMContentLoaded', () => { applySettings(); render(); });
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { }));
  }
})();
