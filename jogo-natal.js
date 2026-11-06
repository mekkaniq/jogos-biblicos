/* Edição de Natal — "Caminho até Belém": histórias (mesmo jeito do Kids) e desenhos para colorir. Sem pressa, sem contagem de dias. */
(function () {
  const { I, esc, route, go, kit: K } = App;
  const st = () => K.st('kids', { band: 'small', stickers: {}, voice: 1 });
  const cl = () => K.st('colorir', { p: {}, trk: 1 });


  // fundo animado, bem devagar: vermelho e verde de Natal (WebGL; sem WebGL fica um degradê parado)
  const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  const FS = `precision mediump float;uniform vec2 r;uniform float t;
    float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
    void main(){
      vec2 uv=gl_FragCoord.xy/r; uv.x*=r.x/r.y;
      vec2 q=uv*1.6; float k=t*.06;
      q+=vec2(n(q+k),n(q-k+3.7))*1.1;
      float a=n(q*1.3+vec2(k,-k));
      float b=n(q*.9+vec2(-k*.7,k)+9.1);
      vec3 red=vec3(.62,.10,.17), red2=vec3(.80,.17,.23), grn=vec3(.08,.38,.25), grn2=vec3(.18,.55,.36), gold=vec3(.91,.78,.42);
      vec3 c=mix(mix(red,red2,b),mix(grn,grn2,b),smoothstep(.32,.68,a));
      c=mix(c,gold,.10*smoothstep(.62,.9,n(q*2.2-k*2.)));
      float v=smoothstep(1.25,.25,length(gl_FragCoord.xy/r-.5)); c*=.72+.28*v;
      gl_FragColor=vec4(c,1.);}`;
  function startShader() {
    const cv = document.createElement('canvas'); cv.className = 'nt-bg'; cv.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cv);
    const gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) return () => cv.remove();
    const sh = (ty, src) => { const o = gl.createShader(ty); gl.shaderSource(o, src); gl.compileShader(o); return o; };
    const pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return () => cv.remove();
    gl.useProgram(pr);
    const bf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, bf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const lp = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp, 2, gl.FLOAT, false, 0, 0);
    const ur = gl.getUniformLocation(pr, 'r'), ut = gl.getUniformLocation(pr, 't');
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0, last = 0, t0 = performance.now(), dead = false;
    function size() { const sc = .5, w = Math.max(2, Math.round(innerWidth * sc)), hh = Math.max(2, Math.round(innerHeight * sc)); if (cv.width !== w || cv.height !== hh) { cv.width = w; cv.height = hh; gl.viewport(0, 0, w, hh); } }
    function draw(now) {
      if (dead) return;
      if (!document.hidden && now - last > 33) { last = now; size(); gl.uniform2f(ur, cv.width, cv.height); gl.uniform1f(ut, (now - t0) / 1000 + 20); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); }
      if (!still) raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    if (still) setTimeout(() => draw(performance.now() + 100), 50);
    return () => { dead = true; cancelAnimationFrame(raf); cv.remove(); };
  }


  // neve caindo bem devagar (flocos pequenos e suaves, por cima de tudo, sem atrapalhar o toque nem a leitura)
  function startSnow() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => { };
    const cv = document.createElement('canvas'); cv.className = 'nt-snow'; cv.setAttribute('aria-hidden', 'true'); document.body.appendChild(cv);
    const cx = cv.getContext('2d'); let W = 0, H = 0, dpr = Math.min(devicePixelRatio || 1, 2), raf = 0, last = 0, dead = false;
    const N = innerWidth < 600 ? 38 : 70;
    const fl = Array.from({ length: N }, () => ({ x: Math.random(), y: Math.random(), r: .8 + Math.random() * 2.4, v: 12 + Math.random() * 22, ph: Math.random() * 6.28, sw: 6 + Math.random() * 14, a: .3 + Math.random() * .4 }));
    function size() { W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    size(); addEventListener('resize', size);
    function draw(now) {
      if (dead) return; raf = requestAnimationFrame(draw);
      if (document.hidden) { last = 0; return; }
      const dt = last ? Math.min(.05, (now - last) / 1000) : 0; last = now;
      cx.clearRect(0, 0, W, H);
      for (const f of fl) {
        f.y += f.v * dt / H; f.ph += dt * .8;
        if (f.y > 1.02) { f.y = -.02; f.x = Math.random(); }
        const x = f.x * W + Math.sin(f.ph) * f.sw, y = f.y * H;
        cx.beginPath(); cx.arc(x, y, f.r, 0, 6.283); cx.fillStyle = `rgba(255,255,255,${f.a})`; cx.fill();
      }
    }
    raf = requestAnimationFrame(draw);
    return () => { dead = true; cancelAnimationFrame(raf); removeEventListener('resize', size); cv.remove(); };
  }


  // ---------- Calendário do Advento (29/11 a 25/12): cada porta abre à meia-noite do horário do aparelho ----------
  const ADV = () => window.ADVENTO_DATA;
  const MES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const MESC = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  // para testar: localStorage 'adv-hoje' = '2026-12-10'
  function advNow() { try { const o = localStorage.getItem('adv-hoje'); if (o) return new Date(o + 'T12:00:00'); } catch (e) { } return new Date(); }
  function dayDate(d) { const now = advNow(); let y = now.getFullYear(); if (now.getMonth() < 10) y -= 1; return new Date(y, d.m - 1, d.d); } // jan a out: o Advento que passou
  const isOpen = d => advNow() >= dayDate(d);
  const isToday = d => { const a = advNow(), b = dayDate(d); return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); };
  const advStory = id => ADV().stories.find(s => s.id === id) || window.NATAL_DATA.stories.find(s => s.id === id);
  const DRAW = { natal1: 401, natal3: 402, natal4: 403, natal5: 404 }; // desenhos novos entram aqui quando ficarem prontos

  // cartão "Hoje aprendi" em pé (1080x1920) para compartilhar no WhatsApp ou no Instagram
  function wrap(cx, text, maxW) { const out = []; let line = ''; for (const w of text.split(' ')) { const t = line ? line + ' ' + w : w; if (cx.measureText(t).width > maxW && line) { out.push(line); line = w; } else line = t; } if (line) out.push(line); return out; }
  async function shareCard({ title, learn, ref, kicker }) {
    try { await Promise.all([document.fonts.load('700 60px Cinzel'), document.fonts.load('italic 400 60px Lora'), document.fonts.load('400 40px Lora')]); } catch (e) { }
    const W = 1080, H = 1920, cv = document.createElement('canvas'); cv.width = W; cv.height = H; const cx = cv.getContext('2d');
    const g = cx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#16224a'); g.addColorStop(.5, '#1c140a'); g.addColorStop(1, '#0d2418'); cx.fillStyle = g; cx.fillRect(0, 0, W, H);
    let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    for (let i = 0; i < 140; i++) { const x = rnd() * W, y = rnd() * H * .62, r = rnd() * 2.2 + .5; cx.fillStyle = `rgba(255,247,218,${.25 + rnd() * .6})`; cx.beginPath(); cx.arc(x, y, r, 0, 6.283); cx.fill(); }
    // medir o texto para centralizar o bloco na tela
    cx.font = 'italic 400 60px Lora'; const L = wrap(cx, learn, W - 220);
    cx.font = '700 42px Cinzel'; const T = wrap(cx, title, W - 240);
    const nineH = 430, blockH = 60 + 30 + nineH + 70 + 64 + L.length * 82 + 60 + 40 + T.length * 56 + 50 + 150;
    let y = Math.max(230, (H - blockH) / 2);
    // luz e raios atrás da Nine
    const cyN = y + 90 + nineH / 2;
    const rg = cx.createRadialGradient(W / 2, cyN, 30, W / 2, cyN, 520); rg.addColorStop(0, 'rgba(255,226,150,.55)'); rg.addColorStop(.45, 'rgba(255,214,120,.16)'); rg.addColorStop(1, 'rgba(255,214,120,0)'); cx.fillStyle = rg; cx.fillRect(0, 0, W, H);
    cx.save(); cx.translate(W / 2, cyN); for (let k = 0; k < 18; k++) { cx.rotate(Math.PI / 9); cx.fillStyle = 'rgba(255,230,160,.06)'; cx.beginPath(); cx.moveTo(0, 0); cx.lineTo(-38, -640); cx.lineTo(38, -640); cx.closePath(); cx.fill(); } cx.restore();
    // moldura dourada
    cx.strokeStyle = 'rgba(240,205,126,.75)'; cx.lineWidth = 3; cx.beginPath(); cx.roundRect ? cx.roundRect(54, 54, W - 108, H - 108, 44) : cx.rect(54, 54, W - 108, H - 108); cx.stroke();
    cx.strokeStyle = 'rgba(240,205,126,.3)'; cx.lineWidth = 1.5; cx.beginPath(); cx.roundRect ? cx.roundRect(70, 70, W - 140, H - 140, 36) : cx.rect(70, 70, W - 140, H - 140); cx.stroke();
    cx.textAlign = 'center';
    cx.fillStyle = '#f0cd7e'; cx.font = '700 32px Cinzel'; cx.fillText((kicker || 'VERSO VIVO').toUpperCase().split('').join(' '), W / 2, y + 30); y += 90;
    try { const img = new Image(); img.src = 'nine-lendo.webp'; await img.decode(); const h = nineH, w = h * img.width / img.height; cx.shadowColor = 'rgba(0,0,0,.45)'; cx.shadowBlur = 40; cx.shadowOffsetY = 18; cx.drawImage(img, (W - w) / 2, y, w, h); cx.shadowColor = 'transparent'; } catch (e) { }
    y += nineH + 70;
    const gg = cx.createLinearGradient(0, y - 50, 0, y + 10); gg.addColorStop(0, '#fff0bf'); gg.addColorStop(1, '#d8a94a'); cx.fillStyle = gg; cx.font = '700 60px Cinzel'; cx.fillText('Hoje aprendi', W / 2, y); y += 92;
    cx.fillStyle = '#fbf1d8'; cx.font = 'italic 400 60px Lora'; for (const l of L) { cx.fillText(l, W / 2, y); y += 82; }
    y += 20; cx.fillStyle = 'rgba(240,205,126,.8)'; cx.font = '400 40px Cinzel'; cx.fillText('— ✦ —', W / 2, y); y += 70;
    cx.fillStyle = '#f0cd7e'; cx.font = '700 42px Cinzel'; for (const l of T) { cx.fillText(l, W / 2, y); y += 56; }
    cx.fillStyle = 'rgba(251,241,216,.85)'; cx.font = '400 38px Lora'; cx.fillText(ref + ' · ACF', W / 2, y + 6); y += 120;
    cx.fillStyle = 'rgba(251,241,216,.9)'; cx.font = '400 34px Lora'; cx.fillText('Jogue também, de graça:', W / 2, y);
    cx.fillStyle = '#f0cd7e'; cx.font = '700 42px Cinzel'; cx.fillText('editoraversovivo.com.br/jogos', W / 2, y + 58);
    const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
    const file = new File([blob], 'verso-vivo-hoje-aprendi.png', { type: 'image/png' });
    const text = `Hoje aprendi: ${learn} (${ref}) · editoraversovivo.com.br/jogos`;
    try { if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], text }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = file.name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    App.toast('Imagem salva. Agora é só compartilhar!');
  }
  App.shareCard = shareCard;

  function calendarHTML(s) {
    const days = ADV().days; const opened = days.filter(isOpen).length;
    const today = days.findIndex(isToday);
    const sub = today >= 0 ? `Hoje é dia ${days[today].d}: toque na porta que brilha` : opened ? 'Abra as portas no seu ritmo, sem pressa' : 'A primeira porta abre em 29 de novembro';
    return `<section class="adv"><div class="adv-h"><span class="adv-star" aria-hidden="true">✦</span><div><b>Calendário do Advento</b><small>${sub}</small></div></div>
      <div class="adv-grid">${days.map((d, i) => { const open = isOpen(d), x = advStory(d.story), done = open && s.stickers[d.story], td = isToday(d);
        return `<button class="adv-door ${open ? 'open' : 'lock'} ${td ? 'is-today' : ''} ${done ? 'done' : ''}" style="--i:${i}" data-adv="${i}" aria-label="Porta ${i + 1}, ${d.d} de ${MES[d.m - 1]}${open ? '' : ', fechada'}">
          <span class="adv-in">${done ? `<em>${x.icon}</em>` : ''}<b>${d.d}</b><small>${MESC[d.m - 1]}</small></span>
          ${open ? '' : '<i class="adv-lock" aria-hidden="true"></i>'}${td ? '<i class="adv-twinkle" aria-hidden="true">✦</i>' : ''}</button>`; }).join('')}</div></section>`;
  }

  // efeito de abrir a porta: duas folhas se abrem e a luz enche a tela
  function openDoorFx(btn, then) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return then();
    const r = btn.getBoundingClientRect(), fx = document.createElement('div');
    fx.className = 'adv-fx';
    fx.innerHTML = `<div class="adv-fx-door" style="left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px"><i class="l"></i><i class="r"></i><span class="adv-fx-light"></span></div><div class="adv-fx-flood" style="--x:${r.left + r.width / 2}px;--y:${r.top + r.height / 2}px"></div>`;
    document.body.appendChild(fx);
    for (let k = 0; k < 14; k++) { const sp = document.createElement('b'); sp.className = 'adv-spark'; const a = Math.random() * 6.283, d = 40 + Math.random() * 70; sp.style.cssText = `left:${r.left + r.width / 2}px;top:${r.top + r.height / 2}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px;animation-delay:${.15 + Math.random() * .2}s`; sp.textContent = '✦'; fx.appendChild(sp); }
    try { App.sfx.good(); } catch (e) { }
    setTimeout(then, 820); setTimeout(() => fx.remove(), 1500);
  }


  route(/^\/natal$/, el => {
    App.setScene('noite');
    const stopBg = startShader(), stopSnow = startSnow(), stop = () => { stopBg(); stopSnow(); }; document.documentElement.classList.add('nt-on');
    const stories = window.NATAL_DATA.stories, s = st(), c = cl();
    const open = window.__ntOpen || '';
    const draws = window.COLORIR_DATA.items.filter(x => x.t === 4);
    const doneS = stories.filter(x => s.stickers[x.id]).length, doneD = draws.filter(x => (c.done || {})[x.n]).length;
    el.innerHTML = `
      <div class="topbar"><button class="icon-btn" data-back="#/" aria-label="Voltar">${I.back}</button><div class="ttl"><b>EDIÇÃO DE NATAL</b><small>Caminho até Belém</small></div><span style="width:44px"></span></div>
      <div class="nt-heroW"><img class="nt-hat" src="hat.png" alt="" draggable="false"><section class="nt-hero"><i class="nt-glow"></i><div class="nt-big">⭐</div>
        <h1>Caminho até Belém</h1>
        <p class="nt-verse">“Hoje, na cidade de Davi, vos nasceu o Salvador, que é Cristo, o Senhor.”<cite>Lucas 2:11 · ACF</cite></p>
        <small>Sem pressa e sem contagem de dias: siga no seu ritmo.</small></section></div>
      ${calendarHTML(s)}
      <div class="nt-tabs">
        <button class="nt-tab ${open === 'h' ? 'on' : ''}" data-tab="h" aria-expanded="${open === 'h'}"><span class="nt-ti">📖</span><span class="nt-tt"><b>Histórias</b><small>${doneS} de ${stories.length} ouvidas</small></span><i>▾</i></button>
        <div class="nt-panel" data-panel="h" ${open === 'h' ? '' : 'hidden'}>
          <div class="nt-list">${stories.map((x, i) => `<button class="nt-story parch ${s.stickers[x.id] ? 'ok' : ''}" data-go="#/kids/h/${x.id}"><span class="nt-n">${i + 1}</span><span class="nt-ic">${x.icon}</span><span class="nt-tx"><b>${esc(x.name)}</b><small>${I.book} ${esc(x.ref)}</small></span><em>${s.stickers[x.id] ? '✓' : ''}</em></button>`).join('')}</div>
        </div>
        <button class="nt-tab ${open === 'd' ? 'on' : ''}" data-tab="d" aria-expanded="${open === 'd'}"><span class="nt-ti">🎨</span><span class="nt-tt"><b>Desenhos para colorir</b><small>${doneD} de ${draws.length} prontos</small></span><i>▾</i></button>
        <div class="nt-panel" data-panel="d" ${open === 'd' ? '' : 'hidden'}>
          <div class="nt-draws">${draws.map(x => `<button class="nt-draw ${(c.done || {})[x.n] ? 'ok' : ''}" data-go="#/colorir/${x.n}"><span class="nt-th"><img src="${(c.p && c.p[x.n] && c.p[x.n].th) || 'colorir-' + x.n + '.th.webp'}" alt="" loading="lazy">${(c.done || {})[x.n] ? '<em>✓ Pronto</em>' : (c.p && c.p[x.n] && Object.keys(c.p[x.n].r || {}).length) ? '<em class="wip">Pintando</em>' : ''}</span><b>${esc(x.nome)}</b><small>${esc(x.ref)}</small></button>`).join('')}</div>
        </div>
      </div>
      <p class="nt-foot">Todas as histórias apontam para Jesus, o Salvador que Deus prometeu e enviou por amor a nós.</p>`;
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-back]'); if (b) { go(b.dataset.back); return; }
      const t = e.target.closest('[data-tab]');
      if (t) { const k = t.dataset.tab, was = t.classList.contains('on'); window.__ntOpen = was ? '' : k;
        el.querySelectorAll('[data-tab]').forEach(x => { const on = !was && x.dataset.tab === k; x.classList.toggle('on', on); x.setAttribute('aria-expanded', on); });
        el.querySelectorAll('[data-panel]').forEach(x => { x.hidden = was || x.dataset.panel !== k; });
        if (!was) t.scrollIntoView({ block: 'start', behavior: 'smooth' }); return; }
      const dv = e.target.closest('[data-adv]');
      if (dv) { const d = ADV().days[+dv.dataset.adv]; if (!isOpen(d)) { App.toast(`Esta porta abre em ${d.d} de ${MES[d.m - 1]}. 🌙`); return; } openDoorFx(dv, () => go('#/natal/dia/' + (+dv.dataset.adv + 1))); return; }
      const g = e.target.closest('[data-go]'); if (g) go(g.dataset.go);
    });
    return { leave() { stop(); document.documentElement.classList.remove('nt-on'); } };
  });

  route(/^\/natal\/dia\/(\d+)$/, (el, n) => {
    const d = ADV().days[+n - 1]; if (!d) return go('#/natal');
    if (!isOpen(d)) { App.toast(`Esta porta abre em ${d.d} de ${MES[d.m - 1]}. 🌙`); return go('#/natal'); }
    App.setScene('noite');
    const stopBg = startShader(), stopSnow = startSnow(); document.documentElement.classList.add('nt-on');
    const x = advStory(d.story), s = st(), heard = !!s.stickers[x.id], draw = DRAW[x.id];
    el.innerHTML = `
      <div class="topbar"><button class="icon-btn" data-back="#/natal" aria-label="Voltar">${I.back}</button><div class="ttl"><b>PORTA ${n}</b><small>${d.d} de ${MES[d.m - 1]}</small></div><span style="width:44px"></span></div>
      <section class="adv-hero">
        <div class="adv-rays" aria-hidden="true"></div>
        <div class="adv-ic">${x.icon}</div>
        <small class="adv-kick">Porta ${n} · ${d.d} de ${MES[d.m - 1]}</small>
        <h1>${esc(x.name)}</h1>
        <p class="adv-ref">📖 ${esc(x.ref)} · ACF</p>
        <button class="btn btn-gold adv-go" data-go="#/kids/h/${x.id}">${heard ? '✓ Ouvir de novo' : '▶ Ouvir a lição'}</button>
      </section>
      <section class="adv-day parch adv-rise">
        <h2>Para fazer juntos</h2>
        <p class="adv-talk">💬 ${esc(d.talk)}</p>
        ${draw ? `<button class="btn btn-ghost adv-go" data-go="#/colorir/${draw}">🎨 Pintar o desenho do dia</button>` : ''}
        <div class="adv-learn"><small>Hoje aprendi</small><p>${esc(d.learn)}</p></div>
        <button class="btn btn-green adv-go" data-share>📤 Compartilhar o que aprendi</button>
      </section>
      <p class="nt-foot">Sem pressa: as portas que já abriram ficam sempre abertas.</p>`;
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-back]'); if (b) { go(b.dataset.back); return; }
      if (e.target.closest('[data-share]')) { shareCard({ title: x.name, learn: d.learn, ref: x.ref, kicker: 'Verso Vivo · Advento' }); return; }
      const g = e.target.closest('[data-go]'); if (g) go(g.dataset.go);
    });
    return { leave() { stopBg(); stopSnow(); document.documentElement.classList.remove('nt-on'); } };
  });
})();
