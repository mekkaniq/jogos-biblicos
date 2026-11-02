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

  route(/^\/natal$/, el => {
    App.setScene('noite');
    const stopBg = startShader(), stopSnow = startSnow(), stop = () => { stopBg(); stopSnow(); }; document.documentElement.classList.add('nt-on');
    const stories = window.NATAL_DATA.stories, s = st(), c = cl();
    const open = window.__ntOpen || '';
    const draws = window.COLORIR_DATA.items.filter(x => x.t === 4);
    const doneS = stories.filter(x => s.stickers[x.id]).length, doneD = draws.filter(x => (c.done || {})[x.n]).length;
    el.innerHTML = `
      <div class="topbar"><button class="icon-btn" data-back="#/" aria-label="Voltar">${I.back}</button><div class="ttl"><b>EDIÇÃO DE NATAL</b><small>Caminho até Belém</small></div><span style="width:44px"></span></div>
      <section class="nt-hero"><i class="nt-glow"></i><div class="nt-big">⭐</div>
        <h1>Caminho até Belém</h1>
        <p class="nt-verse">“Hoje, na cidade de Davi, vos nasceu o Salvador, que é Cristo, o Senhor.”<cite>Lucas 2:11 · ACF</cite></p>
        <small>Sem pressa e sem contagem de dias: siga no seu ritmo.</small></section>
      <div class="nt-tabs">
        <button class="nt-tab ${open === 'h' ? 'on' : ''}" data-tab="h" aria-expanded="${open === 'h'}"><span class="nt-ti">📖</span><span class="nt-tt"><b>Histórias</b><small>${doneS} de ${stories.length} ouvidas</small></span><i>▾</i></button>
        <div class="nt-panel" data-panel="h" ${open === 'h' ? '' : 'hidden'}>
          <div class="nt-list">${stories.map((x, i) => `<button class="nt-story parch ${s.stickers[x.id] ? 'ok' : ''}" data-go="#/kids/h/${x.id}"><span class="nt-n">${i + 1}</span><span class="nt-ic">${x.icon}</span><span class="nt-tx"><b>${esc(x.name)}</b><small>${I.book} ${esc(x.ref)}</small></span><em>${s.stickers[x.id] ? '✓' : ''}</em></button>`).join('')}</div>
        </div>
        <button class="nt-tab ${open === 'd' ? 'on' : ''}" data-tab="d" aria-expanded="${open === 'd'}"><span class="nt-ti">🎨</span><span class="nt-tt"><b>Desenhos para colorir</b><small>${doneD} de ${draws.length} prontos</small></span><i>▾</i></button>
        <div class="nt-panel" data-panel="d" ${open === 'd' ? '' : 'hidden'}>
          <div class="nt-draws">${draws.map(x => `<button class="nt-draw ${(c.done || {})[x.n] ? 'ok' : ''}" data-go="#/colorir/${x.n}"><img src="colorir-${x.n}.th.webp" alt="" loading="lazy"><b>${esc(x.nome)}</b><small>${esc(x.ref)}</small></button>`).join('')}</div>
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
      const g = e.target.closest('[data-go]'); if (g) go(g.dataset.go);
    });
    return { leave() { stop(); document.documentElement.classList.remove('nt-on'); } };
  });
})();
