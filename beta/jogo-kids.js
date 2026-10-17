/* Área Kids — histórias narradas com a Lumi (animada), perguntas, álbum de figurinhas e Modo Turma */
(function () {
  const { $, $$, esc, save, route, go, setLast, sfx, confetti, toast } = App;
  const K = App.kit;
  const D = () => window.KIDS_DATA;
  const S = () => K.st('kids', { band: 'small', stickers: {}, voice: 1 });
  const storyOf = id => D().stories.find(s => s.id === id);
  const pick = a => a[Math.floor(Math.random() * a.length)];

  // a Lumi animada vem do arquivo lumi.js (compartilhada com os jogos dos adultos)
  const { html: lumiHTML, pose: setPose, anim, burst, react: Lumi } = App.lumi;

  // ---------- narração com a voz do próprio aparelho (a Lumi "fala" junto) ----------
  let voice = null, talkT = 0;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    // prefere as vozes de alta qualidade que a pessoa baixou no aparelho (Premium / Aprimorada)
    const pt = speechSynthesis.getVoices().filter(v => /^pt[-_]?BR/i.test(v.lang) || /^pt/i.test(v.lang));
    const score = v => (/premium/i.test(v.name) ? 40 : 0) + (/enhanced|aprimorad|melhorad|natural|neural/i.test(v.name) ? 30 : 0) + (/pt[-_]BR/i.test(v.lang) ? 10 : 0) + (/Luciana|Fernanda|Francisca|Thalita|Google/i.test(v.name) ? 5 : 0);
    voice = pt.sort((a, b) => score(b) - score(a))[0] || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  // referências bíblicas faladas por extenso: "Gênesis 1:3" → "Gênesis, capítulo 1, versículo 3" (antes virava "1 hora e 3 minutos")
  const ORD = { 1: 'Primeiro', 2: 'Segundo', 3: 'Terceiro' };
  function forSpeech(t) {
    return t.replace(/[“”"]/g, '').replace(/[\u{1F300}-\u{1FAFF}☀-➿]️?/gu, '')
      .replace(/\b([123]) (?=[A-ZÁÉÍÓÚ][a-záéíóúâêôãõç]+ \d)/g, (_, n) => ORD[n] + ' ')
      .replace(/(\d+):(\d+)\s*[-–]\s*(\d+)/g, ', capítulo $1, versículos $2 a $3')
      .replace(/(\d+):(\d+)/g, ', capítulo $1, versículo $2')
      .replace(/(\d+)\s*[–-]\s*(\d+)/g, '$1 a $2').replace(/ ,/g, ',');
  }
  const talking = on => $$('.lumi:not(.sleep)').forEach(lu => lu.classList.toggle('talk', on));
  function speak(t, words) {
    const txt = forSpeech(t);
    clearTimeout(talkT);
    if (!S().voice || !('speechSynthesis' in window)) { talking(true); talkT = setTimeout(() => talking(false), Math.min(2600, 500 + txt.length * 25)); return; }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(txt); u.lang = 'pt-BR'; u.rate = .9; u.pitch = 1.15; if (voice) u.voice = voice;
      u.onstart = () => talking(true);
      u.onend = u.onerror = () => { clearTimeout(talkT); talking(false); words && words.forEach(w => w.classList.remove('rd')); };
      if (words) u.onboundary = e => { if (e.name && e.name !== 'word') return; const w = words.find(w => +w.dataset.c <= e.charIndex && e.charIndex < +w.dataset.e); if (w) words.forEach(x => x.classList.toggle('rd', x === w)); };
      speechSynthesis.speak(u);
      talking(true); talkT = setTimeout(() => talking(false), 900 + txt.length * 85);
    } catch (e) { }
  }
  const hush = () => { clearTimeout(talkT); talking(false); try { speechSynthesis.cancel(); } catch (e) { } };
  // texto com cada palavra marcada, para destacar enquanto a Lumi lê
  function wordsHTML(t) { const src = t.replace(/[“”"]/g, ''); let i = 0; return t.split(/(\s+)/).map(p => { const clean = p.replace(/[“”"]/g, ''); const s = src.indexOf(clean, i); const e = s + clean.length; if (s >= 0) i = e; return /^\s+$/.test(p) ? p : `<span data-c="${s}" data-e="${e}">${esc(p)}</span>`; }).join(''); }

  // ---------- relógios da tela (sono da Lumi etc.) ----------
  let timers = [];
  const later = (f, ms) => timers.push(setTimeout(f, ms));
  const every = (f, ms) => timers.push(setInterval(f, ms));
  const reset = () => { timers.forEach(t => { clearTimeout(t); clearInterval(t); }); timers = []; };

  const top = (back, title, sub) => `<div class="topbar kd-top"><button class="icon-btn" data-back="${back}" aria-label="Voltar">${App.I.back}</button><div class="ttl"><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</div><button class="icon-btn" data-voice aria-label="Voz">${S().voice ? '🔊' : '🔇'}</button></div>`;
  const TAPS = ['Hihi! Que cosquinha!', 'Bééé! 🐑', 'Deus te ama muito!', 'Você é muito especial!', 'Oba! Vamos brincar?', 'Eu adoro histórias da Bíblia!'];
  // balão da Lumi: monta uma vez e depois só troca a fala
  const bubble = (pose, text, cls = 'enter') => `<div class="kd-lumi">${lumiHTML(pose, cls)}<div class="kd-bubble">${text}</div></div>`;
  function say(el, text, pose, react, voiceText) {
    const lu = $('.kd-lumi .lumi', el), b = $('.kd-bubble', el);
    if (b) { b.innerHTML = text; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
    if (pose) setPose(lu, pose);
    if (react) Lumi[react](lu);
    speak(voiceText || (b ? b.textContent : ''));
  }
  function common(el, onTap) {
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-back]'); if (b) { hush(); reset(); go(b.dataset.back); return; }
      const v = e.target.closest('[data-voice]'); if (v) { const s = S(); s.voice = s.voice ? 0 : 1; save(); v.textContent = s.voice ? '🔊' : '🔇'; if (!s.voice) hush(); toast(s.voice ? 'Narração ligada' : 'Narração desligada'); return; }
      const lu = e.target.closest('[data-lumi]');
      if (lu) {
        if (onTap && onTap(lu) !== false) return;
        sfx.tap(); const t = pick(TAPS);
        if (lu.closest('.kd-lumi') && $('.kd-bubble', lu.closest('.kd-lumi'))) say(el, t, null, 'love'); else { Lumi.love(lu); speak(t); }
      }
    });
  }
  // a Lumi cochila quando ninguém mexe por um tempo; um toque acorda
  function sleepy(el, wakeText) {
    let idle = 0;
    el.addEventListener('pointerdown', () => { idle = 0; });
    every(() => {
      const lu = $('.kd-lumi .lumi', el); if (!lu || !document.contains(lu)) return;
      if (lu.classList.contains('sleep')) { burst(lu, ['z', 'Z', 'z'], 1); return; }
      if (++idle >= 14 && !(window.speechSynthesis && speechSynthesis.speaking)) { hush(); lu.classList.add('sleep'); setPose(lu, 'dormindo'); const b = $('.kd-bubble', el); if (b) b.innerHTML = 'Zzz… <small>Toque em mim para me acordar!</small>'; }
    }, 2000);
    return lu => {
      if (!lu.classList.contains('sleep')) return false;
      lu.classList.remove('sleep'); idle = 0; sfx.good(); say(el, wakeText, 'oi', 'love');
    };
  }

  // ---------- cenário animado da cena ----------
  const EMO = /\p{Extended_Pictographic}(?:️|[\u{1F3FB}-\u{1F3FF}])?(?:‍\p{Extended_Pictographic}(?:️|[\u{1F3FB}-\u{1F3FF}])?)*|./gu;
  function artHTML(art) {
    const em = art.match(EMO).filter(x => x.trim() && x !== '️');
    return `<div class="kd-art n${Math.min(em.length, 4)}">${em.map((e, i) => `<span style="--d:${(i * .28).toFixed(2)}s;--f:${(2.6 + (i % 3) * .5).toFixed(1)}s">${e}</span>`).join('')}</div>`;
  }
  function fxHTML(fx) {
    const R = (a, b) => (a + Math.random() * (b - a)).toFixed(2);
    const many = (n, f) => Array.from({ length: n }, (_, i) => f(i)).join('');
    switch (fx) {
      case 'chuva': return `<div class="kfx chuva">${many(26, () => `<i style="left:${R(0, 100)}%;animation-delay:-${R(0, 1)}s;animation-duration:${R(.55, .9)}s"></i>`)}</div>`;
      case 'estrelas': return `<div class="kfx estrelas">${many(16, () => `<i style="left:${R(2, 96)}%;top:${R(2, 55)}%;animation-delay:-${R(0, 2)}s;font-size:${R(8, 16)}px">✦</i>`)}</div>`;
      case 'brilho': return `<div class="kfx brilho">${many(9, () => `<i style="left:${R(5, 92)}%;animation-delay:-${R(0, 3)}s">✨</i>`)}</div>`;
      case 'coracoes': return `<div class="kfx brilho">${many(8, () => `<i style="left:${R(5, 92)}%;animation-delay:-${R(0, 3)}s">${pick(['💛', '❤️', '💕'])}</i>`)}</div>`;
      case 'vento': return `<div class="kfx vento">${many(6, () => `<i style="top:${R(10, 80)}%;animation-delay:-${R(0, 3)}s">🍃</i>`)}</div>`;
      case 'luz': return `<div class="kfx luz"></div>`;
      case 'ondas': return `<div class="kfx ondas"><i></i><i></i></div>`;
      default: return '';
    }
  }

  // ---------- Entrada da área Kids ----------
  route(/^\/kids$/, el => {
    reset(); App.setScene('aurora'); document.body.classList.add('kids');
    const s = S(); const d = D();
    const got = d.stories.filter(st => s.stickers[st.id]).length;
    const hi = got ? `Oi de novo! Você já tem <b>${got}</b> ${got === 1 ? 'figurinha' : 'figurinhas'}. Qual história vamos ouvir hoje?` : 'Oi! Eu sou a <b>Lumi</b>! Vamos ouvir uma história da Bíblia e brincar juntos?';
    el.innerHTML = `${top('#/', 'CANTINHO KIDS', 'com a Lumi')}
      ${bubble('oi', hi)}
      <div class="kd-band">
        <button class="${s.band === 'small' ? 'on' : ''}" data-band="small"><span>🐣</span><b>Pequeninos</b><small>4 a 6 anos</small></button>
        <button class="${s.band === 'big' ? 'on' : ''}" data-band="big"><span>📚</span><b>Leitores</b><small>7 a 10 anos</small></button>
      </div>
      <div class="section-title"><h2>Histórias</h2><span>${got} de ${d.stories.length} figurinhas</span></div>
      <div class="kd-stories">
        ${d.stories.map((st, i) => `<button class="kd-story" data-story="${st.id}" style="background-image:${App.sceneUrl(st.scene)};--d:${i * 40}ms"><span class="ic">${st.icon}</span><b>${esc(st.name)}</b>${s.stickers[st.id] ? `<em>${st.sticker} já tenho</em>` : '<em class="new">Começar ▶</em>'}</button>`).join('')}
      </div>
      <div class="kd-row">
        <button class="btn btn-gold" data-go="#/kids/album">📒 Meu álbum</button>
        <button class="btn btn-ghost" data-go="#/kids/turma">👨‍👩‍👧‍👦 Modo Turma</button>
      </div>
      <p class="kd-note">Para os pais e professores: toque em 🔊 lá em cima para ligar ou desligar a narração. A criança pode tocar na Lumi! 🐑</p>
      ${K.signature}`;
    const wake = sleepy(el, 'Ah! Eu cochilei um pouquinho! 😊 Vamos ouvir uma história?');
    common(el, wake);
    later(() => { Lumi.wave($('.kd-lumi .lumi', el)); speak($('.kd-bubble', el).textContent); }, 450);
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-band]'); if (b) { s.band = b.dataset.band; save(); sfx.tap(); $$('[data-band]', el).forEach(x => x.classList.toggle('on', x === b)); say(el, b.dataset.band === 'small' ? 'Pequeninos! As respostas vão ter figuras. 🐣' : 'Leitores! Agora as perguntas são com palavras. Você consegue! 📚', 'oi', 'love'); return; }
      const st = e.target.closest('[data-story]'); if (st) { sfx.tap(); hush(); go('#/kids/h/' + st.dataset.story); return; }
      const g = e.target.closest('[data-go]'); if (g) { sfx.tap(); hush(); go(g.dataset.go); }
    });
  });

  // ---------- História: cenas narradas → perguntas → figurinha ----------
  route(/^\/kids\/h\/(\w+)$/, (el, id) => {
    reset();
    const st = storyOf(id); if (!st) return go('#/kids');
    document.body.classList.add('kids');
    const s = S(); const small = s.band === 'small';
    setLast('kids', '#/kids/h/' + id, `Kids · ${st.name}`, small ? 'Pequeninos' : 'Leitores');
    let step = 0, qi = 0, mist = 0, qmist = 0;
    const Q = small ? st.small : st.big;
    let order = null;
    function scene(dir = 1) {
      const sc = st.scenes[step]; App.setScene(sc.bg);
      el.innerHTML = `${top('#/kids', st.name.toUpperCase(), `${step + 1} de ${st.scenes.length}`)}
        <div class="kd-dots">${st.scenes.map((_, i) => `<i class="${i < step ? 'on' : i === step ? 'now' : ''}"></i>`).join('')}</div>
        <div class="kd-scene ${dir < 0 ? 'back' : ''}" style="--bgimg:${App.sceneUrl(sc.bg)}">${fxHTML(sc.fx)}${artHTML(sc.art)}${lumiHTML('lendo', 'mini')}</div>
        <div class="kd-text ${small ? 'small' : ''}">${wordsHTML(sc.text)}</div>
        <div class="kd-nav">
          <button class="btn btn-ghost" data-prev ${step ? '' : 'disabled'} aria-label="Voltar">◀</button>
          <button class="btn btn-ghost" data-say>🔊 Ouvir</button>
          <button class="btn btn-gold" data-next>${step < st.scenes.length - 1 ? 'Próxima ▶' : 'Vamos brincar! 🎈'}</button>
        </div>`;
      read();
    }
    const read = () => speak(st.scenes[step].text, $$('.kd-text span', el));
    function question() {
      const q = Q[qi]; App.setScene(st.scene); qmist = 0;
      if (!order) order = K.shuffle(q.o.map((_, i) => i));
      el.innerHTML = `${top('#/kids', st.name.toUpperCase(), `Pergunta ${qi + 1} de ${Q.length}`)}
        <div class="kd-dots">${Q.map((_, i) => `<i class="${i < qi ? 'on' : i === qi ? 'now' : ''}"></i>`).join('')}</div>
        ${bubble('pensando', esc(q.q), qi ? 'swap' : 'enter')}
        <div class="kd-opts ${small ? 'pics' : 'words'}">${order.map((i, k) => small
          ? `<button class="kd-pic" data-o="${i}" style="--d:${k * 90}ms"><span>${q.o[i][0]}</span><b>${esc(q.o[i][1])}</b></button>`
          : `<button class="kd-word" data-o="${i}" style="--d:${k * 70}ms">${esc(q.o[i])}</button>`).join('')}</div>
        <div id="kdAfter"></div>
        <div class="kd-nav one"><button class="btn btn-ghost" data-sayq>🔊 Ouvir a pergunta</button></div>`;
      sayQ();
    }
    const sayQ = () => { const q = Q[qi]; speak(q.q + (small ? ' ' + order.map(i => q.o[i][1]).join('? ') + '?' : '')); };
    function answer(i, btn) {
      const q = Q[qi];
      if (i === 0) {
        sfx.good(); btn.classList.add('ok'); $$('.kd-pic,.kd-word', el).forEach(b => { b.disabled = true; b.classList.remove('hint'); });
        const msg = ['Muito bem!', 'Isso mesmo!', 'Você acertou!', 'Que lindo!', 'Uhuu! Acertou!'][qi % 5];
        say(el, `<b>${msg}</b>${!small && q.e ? ' ' + esc(q.e) : ''}`, null, 'yay', msg + (!small && q.e ? ' ' + q.e : ''));
        $('#kdAfter', el).innerHTML = `<button class="btn btn-gold btn-block pop" data-qnext>${qi < Q.length - 1 ? 'Próxima pergunta ▶' : 'Ganhar minha figurinha! 🌟'}</button>`;
      } else {
        mist++; qmist++; sfx.bad(); btn.classList.add('no'); btn.disabled = true;
        if (qmist >= 2) {
          // errou duas vezes: a Lumi aponta a resposta certa
          const ok = $('[data-o="0"]', el); ok && ok.classList.add('hint');
          say(el, 'Quase! Olha, eu te ajudo: é <b>esta aqui</b> que está pulando! 👇', null, 'hint', 'Quase! Eu te ajudo: é esta aqui que está pulando!');
        } else say(el, pick(['Quase! Tente de novo. 💛', 'Hmm, não foi essa. Tente outra! 💛', 'Ops! Vamos tentar de novo? 💛']), null, 'oops');
      }
    }
    function sticker() {
      App.setScene('aurora'); hush();
      const first = !s.stickers[id]; s.stickers[id] = 1; save(); sfx.win();
      const left = D().stories.filter(x => !s.stickers[x.id]).length;
      el.innerHTML = `${top('#/kids', 'PARABÉNS!', st.name)}
        <div class="kd-win">
          <div class="kd-lumi solo">${lumiHTML('festa', 'enter party')}</div>
          <div class="kd-sticker"><span>${st.sticker}</span><b>${esc(st.name)}</b><small>${esc(st.ref)}</small></div>
          <h2>${first ? 'Você ganhou uma figurinha!' : 'Você ouviu de novo!'}</h2>
          <p>${small ? 'A Lumi está muito feliz com você!' : `Você respondeu tudo${mist ? '' : ' sem errar nenhuma'}! A figurinha já está no seu álbum.`}${left ? '' : '<br><b>Você completou o álbum inteiro! 🎉</b>'}</p>
        </div>
        <div class="kd-row"><button class="btn btn-gold" data-go="#/kids/album">📒 Meu álbum</button><button class="btn btn-ghost" data-go="#/kids">Outras histórias</button></div>`;
      later(() => { confetti(); burst($('.lumi', el), ['✨', '⭐', '🌟', '💛'], 12); }, 350);
      every(() => { const lu = $('.lumi', el); lu && burst(lu, ['✨', '⭐'], 3); }, 1600);
      speak(first ? 'Parabéns! Você ganhou uma figurinha!' : 'Parabéns! Você ouviu a história de novo!');
    }
    common(el);
    el.addEventListener('click', e => {
      if (e.target.closest('[data-next]')) { sfx.tap(); if (step < st.scenes.length - 1) { step++; scene(1); } else { hush(); question(); } return; }
      if (e.target.closest('[data-prev]') && step) { step--; scene(-1); return; }
      if (e.target.closest('[data-say]')) return read();
      if (e.target.closest('[data-sayq]')) return sayQ();
      const o = e.target.closest('[data-o]'); if (o && !o.disabled) return answer(+o.dataset.o, o);
      if (e.target.closest('[data-qnext]')) { sfx.tap(); order = null; if (qi < Q.length - 1) { qi++; question(); } else sticker(); return; }
      const g = e.target.closest('[data-go]'); if (g) { reset(); go(g.dataset.go); }
    });
    // deslizar o dedo para passar as cenas
    let sx = null;
    el.addEventListener('touchstart', e => { sx = $('.kd-scene', el) ? e.touches[0].clientX : null; }, { passive: true });
    el.addEventListener('touchend', e => { if (sx == null || !$('.kd-scene', el)) return; const dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) < 60) return; if (dx < 0) $('[data-next]', el).click(); else if (step) $('[data-prev]', el).click(); }, { passive: true });
    scene();
  });

  // ---------- Álbum de figurinhas ----------
  route(/^\/kids\/album$/, el => {
    reset(); App.setScene('aurora'); document.body.classList.add('kids');
    const s = S(); const d = D();
    const got = d.stories.filter(x => s.stickers[x.id]).length, all = d.stories.length;
    el.innerHTML = `${top('#/kids', 'MEU ÁLBUM', `${got} de ${all} figurinhas`)}
      ${bubble(got ? 'festa' : 'dica', got === all ? 'Uau! Você completou o álbum! A Lumi está muuuito feliz! 🎉' : got ? `Você já tem <b>${got}</b> ${got === 1 ? 'figurinha' : 'figurinhas'}! Faltam ${all - got}. Vamos completar?` : 'Ouça uma história e ganhe sua primeira figurinha!')}
      <div class="kd-prog"><i style="width:${Math.round(got / all * 100)}%"></i></div>
      <div class="kd-album">${d.stories.map((x, i) => s.stickers[x.id]
        ? `<button class="kd-stk got" data-story="${x.id}" style="--d:${i * 50}ms;--r:${(i % 3 - 1) * 2.5}deg"><span>${x.sticker}</span><b>${esc(x.name)}</b></button>`
        : `<button class="kd-stk" data-story="${x.id}" style="--d:${i * 50}ms"><span>${x.icon}</span><b>${esc(x.name)}</b><small>toque para ouvir</small></button>`).join('')}</div>`;
    common(el);
    later(() => { const lu = $('.lumi', el); got ? Lumi.yay(lu) : Lumi.hint(lu); speak($('.kd-bubble', el).textContent); }, 400);
    el.addEventListener('click', e => { const b = e.target.closest('[data-story]'); if (b) { sfx.tap(); hush(); go('#/kids/h/' + b.dataset.story); } });
  });

  // ---------- Modo Turma (escola dominical) ----------
  route(/^\/kids\/turma$/, el => {
    reset(); App.setScene('aurora'); document.body.classList.add('kids', 'turma');
    const d = D(); let st = null, qi = 0, shown = false, pts = [0, 0];
    const T = [['🦁', 'Leões'], ['🐑', 'Ovelhinhas']];
    function pickStory() {
      el.innerHTML = `${top('#/kids', 'MODO TURMA', 'para a escola dominical')}
        <div class="kd-turma-intro parch"><h3>Como funciona</h3><ol><li>Ligue o celular na TV ou no projetor.</li><li>Divida a turma em <b>🦁 Leões</b> e <b>🐑 Ovelhinhas</b>.</li><li>Leia a pergunta, deixe as equipes responderem e toque em <b>Mostrar resposta</b>.</li><li>Marque o ponto de quem acertou. No fim, festa para todos!</li></ol></div>
        <div class="section-title"><h2>Escolha a história da aula</h2></div>
        <div class="kd-stories">${d.stories.map((s, i) => `<button class="kd-story" data-st="${s.id}" style="background-image:${App.sceneUrl(s.scene)};--d:${i * 40}ms"><span class="ic">${s.icon}</span><b>${esc(s.name)}</b><em class="new">Começar ▶</em></button>`).join('')}</div>`;
    }
    const score = big => `<div class="kd-score ${big ? 'big' : ''}"><div><span>${T[0][0]}</span><b>${pts[0]}</b><small>${T[0][1]}</small></div>${big ? '' : `<div class="kd-lumi solo mid">${lumiHTML(shown ? 'festa' : 'pensando', shown ? 'hop' : '')}</div>`}<div><span>${T[1][0]}</span><b>${pts[1]}</b><small>${T[1][1]}</small></div></div>`;
    function board() {
      const q = st.big[qi];
      el.innerHTML = `${top('#/kids/turma', st.name.toUpperCase(), `Pergunta ${qi + 1} de ${st.big.length}`)}
        ${score()}
        <div class="kd-tq parch">${esc(q.q)}</div>
        <div class="kd-topts">${q.show.map((o, i) => `<div class="${shown && o === q.o[0] ? 'ok' : shown ? 'dim' : ''}"><i>${'ABCD'[i]}</i>${esc(o)}</div>`).join('')}</div>
        ${shown ? `<p class="kd-te">${esc(q.e)}</p><div class="kd-row three"><button class="btn btn-gold" data-pt="0">+1 ${T[0][0]}</button><button class="btn btn-ghost" data-pt="-1">Ninguém</button><button class="btn btn-gold" data-pt="1">+1 ${T[1][0]}</button></div>`
          : `<button class="btn btn-gold btn-block" data-show>Mostrar resposta</button>`}`;
      if (shown) burst($('.lumi', el), ['✨', '⭐', '💛'], 8);
    }
    function end() {
      sfx.win();
      el.innerHTML = `${top('#/kids/turma', 'FIM DO JOGO', st.name)}
        <div class="kd-win"><div class="kd-lumi solo">${lumiHTML('festa', 'enter party')}</div>
          ${score(true)}
          <h2>Todo mundo venceu, porque todo mundo aprendeu! 🎉</h2><p>${esc(st.name)} · ${esc(st.ref)}</p></div>
        <div class="kd-row"><button class="btn btn-gold" data-again>Jogar de novo</button><button class="btn btn-ghost" data-back="#/kids">Sair</button></div>`;
      later(() => { confetti(); burst($('.lumi', el), ['✨', '⭐', '🌟', '💛'], 12); }, 300);
    }
    // a ordem das alternativas é embaralhada uma vez por partida, guardando qual é a certa
    const prep = s => ({ ...s, big: s.big.map(q => ({ ...q, show: K.shuffle(q.o) })) });
    common(el);
    el.addEventListener('click', e => {
      const p = e.target.closest('[data-st]'); if (p) { st = prep(storyOf(p.dataset.st)); qi = 0; pts = [0, 0]; shown = false; board(); return; }
      if (e.target.closest('[data-show]')) { shown = true; sfx.good(); board(); return; }
      const t = e.target.closest('[data-pt]'); if (t) { const k = +t.dataset.pt; if (k >= 0) pts[k]++; sfx.tap(); shown = false; if (qi < st.big.length - 1) { qi++; board(); } else end(); return; }
      if (e.target.closest('[data-again]')) { qi = 0; pts = [0, 0]; shown = false; board(); }
    });
    pickStory();
  });
})();
