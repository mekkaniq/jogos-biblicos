/* Edição de Natal — "Caminho até Belém": histórias (mesmo jeito do Kids) e desenhos para colorir. Sem pressa, sem contagem de dias. */
(function () {
  const { I, esc, route, go, kit: K } = App;
  const st = () => K.st('kids', { band: 'small', stickers: {}, voice: 1 });
  const cl = () => K.st('colorir', { p: {}, trk: 1 });


  // fundo animado, bem devagar: vermelho e verde de Natal (WebGL; sem WebGL fica um degradê parado)
  const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  // Noite de Natal em Belém: céu azul profundo, estrelas piscando e a estrela de Belém brilhando no alto
  const FS = `precision mediump float;uniform vec2 r;uniform float t;
    float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
    float stars(vec2 uv,float sc,float th){vec2 g=uv*sc,id=floor(g),f=fract(g)-.5;float rnd=h(id);if(rnd<th)return 0.;vec2 o=vec2(h(id+3.1),h(id+7.7))-.5;float d=length(f-o*.7);float tw=.55+.45*sin(t*(1.+rnd*3.)+rnd*40.);return smoothstep(.07,0.,d)*tw*(rnd-th)/(1.-th);}
    void main(){vec2 uv=gl_FragCoord.xy/r;float asp=r.x/r.y;vec2 q=vec2(uv.x*asp,uv.y);
      vec3 top=vec3(.035,.06,.17),mid=vec3(.08,.13,.32),low=vec3(.22,.16,.30),hor=vec3(.55,.33,.22);
      vec3 c=mix(low,mid,smoothstep(.05,.55,uv.y));c=mix(c,top,smoothstep(.55,1.,uv.y));c=mix(hor,c,smoothstep(0.,.22,uv.y));
      c+=vec3(.05,.07,.16)*n(q*2.+vec2(t*.01,0.))*smoothstep(.2,.9,uv.y);
      float s=stars(q,38.,.9)+stars(q+5.,70.,.93)*.6;c+=vec3(1.,.96,.85)*s*smoothstep(.15,.5,uv.y);
      vec2 sp=vec2(.5*asp,.84),d=q-sp;float L=length(d);
      float glow=exp(-L*7.)*.45+exp(-L*22.)*.8;
      float rays=(exp(-abs(d.x)*90.)*exp(-abs(d.y)*2.2)+exp(-abs(d.y)*90.)*exp(-abs(d.x)*3.))*.55;
      vec2 e=vec2(d.x+d.y,d.x-d.y)*.7071;rays+=(exp(-abs(e.x)*140.)+exp(-abs(e.y)*140.))*exp(-L*5.)*.5;
      float pulse=.88+.12*sin(t*1.3);c+=vec3(1.,.88,.6)*(glow+rays)*pulse;
      c+=vec3(.25,.18,.08)*exp(-L*2.2)*.6;
      gl_FragColor=vec4(c,1.);}`;
  // silhueta de Belém no rodapé (arte fornecida, com transparência)
  const TOWN = '<img src="natal-belem.webp" alt="" draggable="false">';
  // ícones da edição de Natal (traço dourado, todos no mesmo estilo)
  const NI = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10.3 5 7.8 4.5 4 4.5v13c3.8 0 6.3.5 8 2 1.7-1.5 4.2-2 8-2v-13c-3.8 0-6.3.5-8 2z"/><path d="M12 6.5v13"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.9 0-1.6-1.3-1.8-1.3-3 0-1 .8-1.7 1.9-1.7H17a4 4 0 0 0 4-4c0-3.9-4-7.4-9-7.4z"/><circle cx="7.5" cy="11.5" r="1.1" fill="currentColor"/><circle cx="10" cy="7.5" r="1.1" fill="currentColor"/><circle cx="14.5" cy="7.5" r="1.1" fill="currentColor"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M8 7l4-4 4 4"/><path d="M5 11v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/></svg>',
    talk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'
  };
  function startShader() {
    const cv = document.createElement('canvas'); cv.className = 'nt-bg'; cv.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cv);
    const town = document.createElement('div'); town.className = 'nt-town'; town.setAttribute('aria-hidden', 'true'); town.innerHTML = TOWN; document.body.appendChild(town);
    const rm = () => { cv.remove(); town.remove(); };
    const gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) return rm;
    const sh = (ty, src) => { const o = gl.createShader(ty); gl.shaderSource(o, src); gl.compileShader(o); return o; };
    const pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return rm;
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
    return () => { dead = true; cancelAnimationFrame(raf); rm(); };
  }


  // neve caindo bem devagar (flocos pequenos e suaves, por cima de tudo, sem atrapalhar o toque nem a leitura)
  function startSnow() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => { };
    const cv = document.createElement('canvas'); cv.className = 'nt-snow'; cv.setAttribute('aria-hidden', 'true'); document.body.appendChild(cv);
    const cx = cv.getContext('2d'); let W = 0, H = 0, dpr = Math.min(devicePixelRatio || 1, 2), raf = 0, last = 0, dead = false;
    const N = innerWidth < 600 ? 36 : 67;
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
  // para testar (so no beta): ?hoje=2026-12-10 grava localStorage 'adv-hoje'
  function advNow() { try { const o = window.__BETA && localStorage.getItem('adv-hoje'); if (o) return new Date(o + 'T12:00:00'); } catch (e) { } return new Date(); }
  function dayDate(d) { const now = advNow(); let y = now.getFullYear(); if (now.getMonth() < 10) y -= 1; return new Date(y, d.m - 1, d.d); } // jan a out: o Advento que passou
  const isOpen = d => advNow() >= dayDate(d);
  const isToday = d => { const a = advNow(), b = dayDate(d); return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); };
  const advStory = id => ADV().stories.find(s => s.id === id) || window.NATAL_DATA.stories.find(s => s.id === id);
  const DRAW = { natal1: 401, natal3: 402, natal4: 403, natal5: 404, adv1: 501 }; // desenhos novos entram aqui quando ficarem prontos

  // Caminho até Belém: 27 paradas em 5 etapas, numa trilha que vai acendendo
  const STAGES = [
    { a: 1, b: 3, name: 'A promessa', sub: 'Deus promete um Salvador' },
    { a: 4, b: 10, name: 'Os profetas', sub: 'Reis e profetas anunciam o Rei' },
    { a: 11, b: 18, name: 'Os anúncios', sub: 'Anjos e sonhos: o Rei está chegando' },
    { a: 19, b: 25, name: 'Rumo a Belém', sub: 'A viagem, e quem é esse menino' },
    { a: 26, b: 27, name: 'Belém', sub: 'Nasceu o Salvador!' }
  ];
  const stageOf = n => STAGES.find(g => n >= g.a && n <= g.b);
  function mapHTML(s) {
    const days = ADV().days, per = 7, X0 = 40, X1 = 300, DY = 66, Y0 = 34, R = DY / 2;
    const pos = i => { const r = Math.floor(i / per), c = i % per, x = X0 + (X1 - X0) * c / (per - 1); return { x: r % 2 ? X0 + X1 - x : x, y: Y0 + r * DY, r }; };
    const N = days.length, rows = Math.ceil(N / per), H = Y0 + (rows - 1) * DY + 34;
    let cur = -1; days.forEach((d, i) => { if (isOpen(d)) cur = i; });
    const seg = i => { const a = pos(i), b = pos(i + 1); if (a.r === b.r) return `M${a.x} ${a.y}L${b.x} ${b.y}`; const sw = a.x > 170 ? 1 : 0; return `M${a.x} ${a.y}A${R} ${R} 0 0 ${sw} ${b.x} ${b.y}`; };
    let path = '';
    for (let i = 0; i < N - 1; i++) path += `<path d="${seg(i)}" class="${i < cur ? 'on' : 'off'}"/>`;
    const labels = STAGES.map(g => { const p = pos(g.a - 1); return `<text x="${p.x}" y="${p.y - 17}" class="mp-lb ${cur + 1 >= g.a ? 'on' : ''}">${g.name}</text>`; }).join('');
    const stops = days.map((d, i) => { const p = pos(i), open = isOpen(d), done = open && s.stickers[d.story], today = isToday(d), x = advStory(d.story), last = i === N - 1;
      return `<g class="mp-st ${open ? 'open' : 'lock'} ${done ? 'done' : ''} ${today ? 'now' : ''} ${last ? 'end' : ''}" data-adv="${i}" role="button" aria-label="Parada ${i + 1}: ${open ? esc(x.name) : 'fechada'}">
        ${today ? `<circle cx="${p.x}" cy="${p.y}" r="17" class="mp-halo"/>` : ''}<circle cx="${p.x}" cy="${p.y}" r="${last ? 14 : 11.5}"/>
        <text x="${p.x}" y="${p.y + 4.5}" class="mp-ic">${last ? '⭐' : open ? x.icon : d.d}</text></g>`; }).join('');
    const g = stageOf(Math.max(cur, 0) + 1);
    return `<section class="adv mp"><div class="adv-h"><b>O caminho até Belém</b><small>Do jardim até a manjedoura: cada porta acende uma parada</small></div>
      <svg class="mp-svg" viewBox="0 0 340 ${H}" aria-label="Mapa do caminho">${path}${labels}${stops}</svg>
      <p class="mp-now">${cur < 0 ? 'O caminho começa em 29 de novembro, no jardim.' : `<b>${g.name}</b> · ${g.sub}`}</p></section>`;
  }
  // faixa pequena no topo da porta: onde estamos no caminho
  function stripHTML(n) {
    const N = ADV().days.length, g = stageOf(n);
    return `<div class="mp-strip"><div class="mp-dots">${Array.from({ length: N }, (_, i) => `<i class="${i + 1 < n ? 'on' : i + 1 === n ? 'now' : ''} ${STAGES.some(x => x.a === i + 1) && i ? 'gap' : ''}"></i>`).join('')}</div>
      <small>Parada ${n} · <b>${g.name}</b></small></div>`;
  }

  // cartão "Hoje aprendi" em pé (1080x1920) para compartilhar no WhatsApp ou no Instagram
  function wrap(cx, text, maxW) { const out = []; let line = ''; for (const w of text.split(' ')) { const t = line ? line + ' ' + w : w; if (cx.measureText(t).width > maxW && line) { out.push(line); line = w; } else line = t; } if (line) out.push(line); return out; }
  async function shareCard({ title, learn, ref, kicker }) {
    try { await Promise.all([document.fonts.load('700 60px Cinzel'), document.fonts.load('italic 400 60px Lora'), document.fonts.load('400 40px Lora')]); } catch (e) { }
    const W = 1080, H = 1920, cv = document.createElement('canvas'); cv.width = W; cv.height = H; const cx = cv.getContext('2d');
    const g = cx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#1b2a54'); g.addColorStop(.55, '#1c140a'); g.addColorStop(1, '#0f281c'); cx.fillStyle = g; cx.fillRect(0, 0, W, H);
    const rg = cx.createRadialGradient(W / 2, 520, 40, W / 2, 520, 620); rg.addColorStop(0, 'rgba(255,226,150,.35)'); rg.addColorStop(1, 'rgba(255,226,150,0)'); cx.fillStyle = rg; cx.fillRect(0, 0, W, H);
    cx.fillStyle = 'rgba(255,255,255,.55)'; for (let i = 0; i < 70; i++) { const x = (i * 337) % W, y = (i * 211) % 900, r = (i % 3) + 1; cx.beginPath(); cx.arc(x, y, r, 0, 6.283); cx.fill(); }
    cx.textAlign = 'center';
    cx.fillStyle = '#f0cd7e'; cx.font = '700 34px Cinzel'; cx.fillText((kicker || 'VERSO VIVO').toUpperCase().split('').join(' '), W / 2, 300);
    try { const img = new Image(); img.src = 'nine-lendo.webp'; await img.decode(); const w = 400, h = w * img.height / img.width; cx.drawImage(img, (W - w) / 2, 360, w, h); } catch (e) { }
    let y = 900;
    cx.fillStyle = '#f0cd7e'; cx.font = '700 56px Cinzel'; cx.fillText('Hoje aprendi', W / 2, y); y += 90;
    cx.fillStyle = '#fbf1d8'; cx.font = 'italic 400 58px Lora';
    for (const l of wrap(cx, learn, W - 180)) { cx.fillText(l, W / 2, y); y += 78; }
    y += 50; cx.fillStyle = '#f0cd7e'; cx.font = '700 40px Cinzel';
    for (const l of wrap(cx, title, W - 200)) { cx.fillText(l, W / 2, y); y += 54; }
    cx.fillStyle = 'rgba(251,241,216,.85)'; cx.font = '400 36px Lora'; cx.fillText(ref, W / 2, y + 10);
    cx.fillStyle = 'rgba(251,241,216,.9)'; cx.font = '400 34px Lora'; y += 170; cx.fillText('Jogue também:', W / 2, y);
    cx.fillStyle = '#f0cd7e'; cx.font = '700 40px Cinzel'; cx.fillText('editoraversovivo.com.br/jogos', W / 2, y + 56);
    const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
    const file = new File([blob], 'verso-vivo-hoje-aprendi.png', { type: 'image/png' });
    const text = `Hoje aprendi: ${learn} (${ref}) · editoraversovivo.com.br/jogos`;
    try { if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], text }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = file.name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    App.toast('Imagem salva. Agora é só compartilhar!');
  }
  App.shareCard = shareCard;

  function calendarHTML(s) {
    const days = ADV().days;
    return `<section class="adv"><div class="adv-h"><b>Calendário do Advento</b><small>Uma porta por dia, de 29 de novembro ao Natal</small></div>
      <div class="adv-grid">${days.map((d, i) => { const open = isOpen(d), done = open && s.stickers[d.story], today = isToday(d);
        return `<button class="adv-door ${open ? 'open' : 'lock'} ${today ? 'is-today' : ''} ${done ? 'done' : ''}" data-adv="${i}" aria-label="Porta ${i + 1}, ${d.d} de ${MES[d.m - 1]}${open ? '' : ', fechada'}"><b>${d.d}</b><small>${MESC[d.m - 1]}</small>${done ? `<i class="adv-ok">${NI.check}</i>` : open ? '' : `<i class="adv-lk">${NI.lock}</i>`}</button>`; }).join('')}</div></section>`;
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
      <div class="nt-heroW"><img class="nt-hat" src="hat.png" alt="" draggable="false"><section class="nt-hero"><i class="nt-glow"></i><div class="nt-art"><img class="nt-star" src="natal-estrela.webp" alt="" draggable="false"><img class="nt-crib" src="natal-manjedoura.webp" alt="Manjedoura iluminada" draggable="false"></div>
        <h1>Caminho até Belém</h1>
        <p class="nt-verse">“Hoje, na cidade de Davi, vos nasceu o Salvador, que é Cristo, o Senhor.”<cite>Lucas 2:11 · ACF</cite></p>
        <small>Sem pressa e sem contagem de dias: siga no seu ritmo.</small></section></div>
      ${mapHTML(s)}
      ${calendarHTML(s)}
      <div class="nt-tabs">
        <button class="nt-tab ${open === 'h' ? 'on' : ''}" data-tab="h" aria-expanded="${open === 'h'}"><span class="nt-ti">${NI.book}</span><span class="nt-tt"><b>Histórias</b><small>${doneS} de ${stories.length} ouvidas</small></span><i>▾</i></button>
        <div class="nt-panel" data-panel="h" ${open === 'h' ? '' : 'hidden'}>
          <div class="nt-list">${stories.map((x, i) => `<button class="nt-story parch ${s.stickers[x.id] ? 'ok' : ''}" data-go="#/kids/h/${x.id}"><span class="nt-n">${i + 1}</span><span class="nt-ic">${x.icon}</span><span class="nt-tx"><b>${esc(x.name)}</b><small>${I.book} ${esc(x.ref)}</small></span><em>${s.stickers[x.id] ? '✓' : ''}</em></button>`).join('')}</div>
        </div>
        <button class="nt-tab ${open === 'd' ? 'on' : ''}" data-tab="d" aria-expanded="${open === 'd'}"><span class="nt-ti">${NI.palette}</span><span class="nt-tt"><b>Desenhos para colorir</b><small>${doneD} de ${draws.length} prontos</small></span><i>▾</i></button>
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
      if (dv) { const d = ADV().days[+dv.dataset.adv]; if (!isOpen(d)) { App.toast(`Esta porta abre em ${d.d} de ${MES[d.m - 1]}. 🌙`); return; } App.sfx.tap(); go('#/natal/dia/' + (+dv.dataset.adv + 1)); return; }
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
    window.__advDoor = { id: x.id, go: '#/natal/dia/' + n };
    el.innerHTML = `
      <div class="topbar"><button class="icon-btn" data-back="#/natal" aria-label="Voltar">${I.back}</button><div class="ttl"><b>PORTA ${n}</b><small>${d.d} de ${MES[d.m - 1]}</small></div><span style="width:44px"></span></div>
      ${stripHTML(+n)}
      <section class="adv-day parch">
        <img class="adv-lantern" src="natal-lanterna.webp" alt="" draggable="false">
        <h1>${esc(x.name)}</h1>
        <p class="adv-ref">${esc(x.ref)} · ACF</p>
        <button class="btn btn-gold adv-go" data-go="#/kids/h/${x.id}">${heard ? NI.check + ' Ouvir de novo' : NI.book + ' Ouvir a lição'}</button>
      </section>
      ${heard ? `
      ${d.verse ? `<section class="adv-day parch adv-verse"><small>Versículo para guardar</small><p>“${esc(d.verse)}”</p><cite>${esc(d.vref)} · ACF</cite></section>` : ''}
      <section class="adv-day parch">
        <h2>Para fazer juntos</h2>
        <p class="adv-talk"><i class="adv-ti">${NI.talk}</i>${esc(d.talk)}</p>
        ${d.pray ? `<div class="adv-pray"><small>Vamos orar</small><p>${esc(d.pray)}</p></div>` : ''}
        ${draw ? `<button class="btn btn-ghost adv-go" data-go="#/colorir/${draw}">${NI.palette} Pintar o desenho do dia</button>` : ''}
        <div class="adv-learn"><small>Hoje aprendi</small><p>${esc(d.learn)}</p></div>
        <button class="btn btn-green adv-go" data-share>${NI.share} Compartilhar o que aprendi</button>
      </section>
      ${d.next ? `<section class="adv-next"><small>${+n < ADV().days.length ? 'Amanhã no caminho' : 'E agora?'}</small><p>${esc(d.next.replace(/^Amanhã no caminho: /, ''))}</p></section>` : ''}
` : `<p class="adv-wait">Ouça a lição até o fim. Depois, aqui aparecem o versículo para guardar, a conversa em família, a oração e o que vem amanhã.</p>`}
      <p class="nt-foot">Sem pressa: as portas que já abriram ficam sempre abertas.</p>`;
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-back]'); if (b) { go(b.dataset.back); return; }
      if (e.target.closest('[data-share]')) { shareCard({ title: x.name, learn: d.learn, ref: x.ref, kicker: 'Verso Vivo · Advento' }); return; }
      const g = e.target.closest('[data-go]'); if (g) go(g.dataset.go);
    });
    return { leave() { stopBg(); stopSnow(); document.documentElement.classList.remove('nt-on'); } };
  });
})();
