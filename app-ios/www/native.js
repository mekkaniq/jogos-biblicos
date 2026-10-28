/* Lumi · camada do aplicativo do iPhone (Capacitor). Só funciona dentro do app; no navegador não faz nada.
   Carrega ANTES do core.js: guarda o progresso também no armazenamento nativo (o iOS pode limpar o do navegador). */
(function () {
  const C = window.Capacitor;
  if (!(C && C.isNativePlatform && C.isNativePlatform())) return;
  const P = C.Plugins || {};
  document.documentElement.classList.add('in-app');

  // ---------- 1) Progresso guardado em dobro (localStorage + Preferences nativo) ----------
  const KEYS = ['jogos-biblicos', 'lumi-lembrete'];
  const Pref = P.Preferences;
  const origSet = Storage.prototype.setItem;
  let pending = 0; const timers = {};
  if (Pref) {
    KEYS.forEach(k => {
      let has = null; try { has = localStorage.getItem(k); } catch (e) { }
      if (has) return;
      pending++;
      Pref.get({ key: k }).then(r => {
        if (r && r.value) { try { origSet.call(localStorage, k, r.value); } catch (e) { } location.reload(); return; }
        pending--;
      }).catch(() => { pending--; });
    });
    Storage.prototype.setItem = function (k, v) {
      origSet.call(this, k, v);
      if (this === window.localStorage && KEYS.includes(k) && !pending) {
        clearTimeout(timers[k]);
        timers[k] = setTimeout(() => { Pref.set({ key: k, value: String(v) }).catch(() => { }); }, 300);
      }
    };
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState !== 'hidden' || pending) return;
      KEYS.forEach(k => { try { const v = localStorage.getItem(k); if (v) Pref.set({ key: k, value: v }); } catch (e) { } });
    });
  }

  // ---------- 2) Barra de status, abertura, links externos ----------
  const SB = P.StatusBar;
  try { SB && SB.setOverlaysWebView && SB.setOverlaysWebView({ overlay: true }); } catch (e) { }
  function statusStyle() {
    // Cantinho Kids tem fundo claro (texto escuro); o resto do app tem topo escuro (texto claro)
    const kids = /^#\/kids/.test(location.hash);
    try { SB && SB.setStyle({ style: kids ? 'LIGHT' : 'DARK' }); } catch (e) { }
  }
  addEventListener('hashchange', statusStyle);

  // ---------- 2b) Barra de abas do aplicativo (nas telas principais) ----------
  const TABS = [
    ['#/', '🏠', 'Início'], ['#/palavra', '☀️', 'Do Dia'], ['#/kids', '🐑', 'Kids'], ['#/kids/historia', '📖', 'História'], ['set', '⚙️', 'Ajustes']
  ];
  function tabbar() {
    let bar = document.getElementById('appTabs');
    if (!bar) {
      bar = document.createElement('nav'); bar.id = 'appTabs'; bar.setAttribute('aria-label', 'Navegação do aplicativo');
      bar.innerHTML = TABS.map(t => `<button data-tab="${t[0]}"><i>${t[1]}</i><span>${t[2]}</span></button>`).join('');
      bar.addEventListener('click', e => {
        const b = e.target.closest('[data-tab]'); if (!b || !window.App) return;
        try { H && H.selectionChanged && H.selectionChanged(); } catch (x) { }
        if (b.dataset.tab === 'set') App.openSettings(); else App.go(b.dataset.tab);
      });
      document.body.appendChild(bar);
    }
    return bar;
  }
  function onRoute(r) {
    statusStyle();
    const h = (r || location.hash || '#/').split('?')[0];
    const show = ['#/', '#', '#/kids', '#/kids/historia', '#/kids/album', '#/kids/turma'].includes(h) || /^#\/kids\/historia\/\w+$/.test(h);
    const bar = tabbar();
    document.documentElement.classList.toggle('has-tabs', show);
    bar.querySelectorAll('[data-tab]').forEach(b => {
      const t = b.dataset.tab;
      const on = t === '#/' ? (h === '#/' || h === '#') : (t !== 'set' && (h === t || (t === '#/kids/historia' && h.startsWith('#/kids/historia'))));
      b.classList.toggle('on', on);
    });
  }
  document.addEventListener('app:route', e => onRoute(e.detail));
  addEventListener('load', () => onRoute());
  addEventListener('load', () => { statusStyle(); setTimeout(() => { try { P.SplashScreen && P.SplashScreen.hide(); } catch (e) { } }, 250); });
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    const h = a.getAttribute('href') || '';
    if (/^https?:\/\//i.test(h) && P.Browser && P.Browser.open) { e.preventDefault(); P.Browser.open({ url: h }); }
  }, true);

  // ---------- 3) Vibração leve ao acertar / concluir ----------
  const H = P.Haptics;
  function hookApp() {
    const A = window.App; if (!A || A.__nativeHooked) return; A.__nativeHooked = 1;
    if (H && A.confetti) { const c = A.confetti; A.confetti = function () { try { H.notification({ type: 'SUCCESS' }); } catch (e) { } return c.apply(this, arguments); }; }
    if (H && A.sfx && A.sfx.good) { const g = A.sfx.good; A.sfx.good = function () { try { H.impact({ style: 'LIGHT' }); } catch (e) { } return g.apply(this, arguments); }; }
    A.reminderSheet = reminderSheet;
    rescheduleIfOn();
  }
  document.addEventListener('DOMContentLoaded', hookApp); addEventListener('load', hookApp);

  // ---------- 4) Lembrete diário (notificação local, sem servidor e sem coletar dados) ----------
  const LN = P.LocalNotifications;
  const MSGS = [
    ['Sua Palavra do Dia está esperando', '"Escondi a tua palavra no meu coração." Salmos 119:11'],
    ['Hora do Desafio do Dia', 'Um caça-palavras novo, feito para hoje.'],
    ['Que tal uma história com a Lumi?', 'Uma lição da Grande História da Bíblia leva poucos minutos.'],
    ['Guarde um versículo hoje', '"Lâmpada para os meus pés é tua palavra." Salmos 119:105'],
    ['Um minutinho com a Bíblia', 'Jogue uma fase e aprenda algo novo hoje.'],
    ['A Lumi lembrou de você', '"Provai e vede que o Senhor é bom." Salmos 34:8'],
    ['Palavra do Dia', 'Descubra a palavra bíblica de hoje em até 6 tentativas.']
  ];
  const readCfg = () => { try { return JSON.parse(localStorage.getItem('lumi-lembrete')) || { on: false, h: 19 }; } catch (e) { return { on: false, h: 19 }; } };
  const writeCfg = c => { try { localStorage.setItem('lumi-lembrete', JSON.stringify(c)); } catch (e) { } };
  async function clearAll() {
    if (!LN) return;
    try { const p = await LN.getPending(); if (p.notifications.length) await LN.cancel({ notifications: p.notifications.map(n => ({ id: n.id })) }); } catch (e) { }
  }
  async function schedule(h) {
    await clearAll();
    const now = new Date(), list = [];
    for (let d = 0; d < 30; d++) {
      const at = new Date(now.getFullYear(), now.getMonth(), now.getDate() + d, h, 0, 0);
      if (at <= now) continue;
      const m = MSGS[(at.getDate() + d) % MSGS.length];
      list.push({ id: 1000 + d, title: m[0], body: m[1], schedule: { at, allowWhileIdle: true }, extra: { route: d % 2 ? '#/palavra' : '#/caca/dia' } });
    }
    if (list.length) await LN.schedule({ notifications: list });
  }
  async function rescheduleIfOn() {
    const c = readCfg(); if (!c.on || !LN) return;
    try { const p = await LN.checkPermissions(); if (p.display === 'granted') schedule(c.h); } catch (e) { }
  }
  if (LN) LN.addListener('localNotificationActionPerformed', ev => {
    const r = ev && ev.notification && ev.notification.extra && ev.notification.extra.route;
    if (r && window.App) App.go(r);
  });
  function reminderSheet() {
    const A = window.App; if (!A) return;
    const c = readCfg();
    const HOURS = [7, 8, 9, 12, 15, 18, 19, 20, 21];
    const m = A.modal(`<div class="badge">🔔</div><h2>Lembrete diário</h2>
      <p>Uma notificação por dia para a Palavra do Dia e o Desafio do Dia. Nada é enviado para fora do aparelho.</p>
      <button class="setting" style="width:100%" data-ron><div><b>Lembrar todos os dias</b><span>${c.on ? 'Ligado' : 'Desligado'}</span></div><i class="switch ${c.on ? 'on' : ''}"></i></button>
      <div class="rem-hours" style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 4px">${HOURS.map(h => `<button class="btn ${h === c.h ? 'btn-gold' : 'btn-ghost'}" style="min-height:44px;padding:0 14px" data-rh="${h}">${h}h</button>`).join('')}</div>
      <p class="rem-msg" style="min-height:1.2em;color:#9b3b2a"></p>
      <div class="actions"><button class="btn btn-green" data-close>Pronto</button></div>`);
    const msg = t => { const p = m.el.querySelector('.rem-msg'); if (p) p.textContent = t; };
    m.el.addEventListener('click', async e => {
      const on = e.target.closest('[data-ron]'), hb = e.target.closest('[data-rh]');
      if (hb) {
        c.h = +hb.dataset.rh; writeCfg(c);
        m.el.querySelectorAll('[data-rh]').forEach(b => { b.classList.toggle('btn-gold', +b.dataset.rh === c.h); b.classList.toggle('btn-ghost', +b.dataset.rh !== c.h); });
        if (c.on) schedule(c.h);
      }
      if (on) {
        if (!c.on) {
          let ok = false;
          try { let p = await LN.checkPermissions(); if (p.display !== 'granted') p = await LN.requestPermissions(); ok = p.display === 'granted'; } catch (x) { }
          if (!ok) { msg('Permita as notificações em Ajustes do iPhone → Lumi → Notificações.'); return; }
          c.on = true; writeCfg(c); await schedule(c.h);
        } else { c.on = false; writeCfg(c); await clearAll(); }
        on.querySelector('.switch').classList.toggle('on', c.on);
        on.querySelector('span').textContent = c.on ? 'Ligado' : 'Desligado';
        msg('');
      }
    });
  }
})();
