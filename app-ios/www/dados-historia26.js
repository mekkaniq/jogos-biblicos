/* A Grande História da Bíblia — Arco 26: Jesus ensina (Mateus 3 – 7; 13; Marcos 1; Lucas 5; 10; 15; João 3 – 4) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.ensina = {
  id: 'ensina', n: 26, name: 'Jesus ensina', sub: 'O Mestre que veio do céu', ref: 'Os Evangelhos', icon: '🌄', scene: 'galileia',
  intro: 'Jesus cresceu em Nazaré. Quando tinha uns trinta anos, começou o seu ministério: foi batizado, venceu a tentação, chamou discípulos e começou a ensinar sobre o Reino de Deus. Ninguém nunca tinha ensinado como Ele! Neste arco, vamos ouvir os seus encontros e as suas histórias, as parábolas. (Lembrete: Jesus aparece só como luz ✨, porque não fazemos imagem dele.)',
  lessons: [
    {
      id: 'en1', title: 'João Batista prepara o caminho', ref: 'Mateus 3:1-12; Lucas 3:1-18', icon: '🏜️',
      recap: 'No arco passado, Jesus nasceu em Belém e cresceu em Nazaré, em sabedoria e graça.',
      scenes: [
        { art: '🧔🏜️📣', bg: 'deserto', fx: 'vento', text: 'João, o filho de Zacarias, cresceu e começou a pregar no deserto da Judeia. Ele dizia: "Arrependam-se, porque o Reino dos céus está próximo!"', r: 'Mateus 3:1-2' },
        { art: '🐫🍯🦗', bg: 'deserto', text: 'João usava uma roupa feita de pelos de camelo, com um cinto de couro, e comia gafanhotos e mel silvestre. Ele parecia o profeta Elias!', r: 'Mateus 3:4; 2 Reis 1:8' },
        { art: '📜🛤️✨', bg: 'deserto', fx: 'luz', text: 'Ele era a voz de que Isaías tinha falado: "Voz do que clama no deserto: preparem o caminho do Senhor, endireitem as suas veredas!"', r: 'Mateus 3:3; Isaías 40:3' },
        { art: '👥👥🌊', bg: 'mar', fx: 'ondas', text: 'Gente de Jerusalém e de toda a região ia até ele. As pessoas confessavam os seus pecados, e João as batizava no rio Jordão.', r: 'Mateus 3:5-6' },
        { art: '👥❓🧔', bg: 'mar', text: 'O povo perguntava: "O que devemos fazer?" João respondia: "Quem tiver duas túnicas, reparta com quem não tem nenhuma. E quem tiver comida, faça o mesmo." Arrependimento aparece no jeito de viver!', r: 'Lucas 3:10-11' },
        { art: '🧔⬇️✨⬆️', bg: 'deserto', fx: 'luz', text: 'Alguns pensavam que João era o Cristo. Mas ele disse: "Depois de mim vem alguém mais poderoso do que eu. Eu não sou digno nem de desamarrar as suas sandálias!"', r: 'Lucas 3:15-16' },
        { art: '💧➡️🔥🕊️', bg: 'aurora', fx: 'luz', text: '"Eu batizo vocês com água. Mas Ele vai batizar vocês com o Espírito Santo e com fogo." João estava preparando todos para a chegada de Jesus!', r: 'Mateus 3:11' }
      ],
      god: 'Deus prepara os corações antes de agir. Ele chama todos ao arrependimento, que muda a nossa vida.',
      jesus: 'Toda a missão de João era apontar para Jesus. Depois ele diria: "Eis o Cordeiro de Deus, que tira o pecado do mundo" (João 1:29). Os profetas Isaías e Malaquias tinham prometido esse mensageiro. Quando João apareceu, era sinal de que o Rei estava chegando!',
      verse: { ref: 'Mateus 3:2', tx: 'Arrependei-vos, porque é chegado o reino dos céus.' },
      small: [
        { q: 'Onde João pregava?', o: [['🏜️', 'No deserto'], ['🏙️', 'No palácio'], ['🌊', 'No navio']] },
        { q: 'O que João comia?', o: [['🦗', 'Gafanhotos e mel'], ['🍕', 'Pizza'], ['🍦', 'Sorvete']] },
        { q: 'Para quem João preparava o caminho?', o: [['✨', 'Para Jesus'], ['👑', 'Para Herodes'], ['🐪', 'Para os camelos']] }
      ],
      big: [
        { q: 'O que João pregava?', o: ['"Arrependam-se, porque o Reino dos céus está próximo"', '"Fiquem ricos"', '"Façam guerra"', '"Fujam"'], e: 'Mateus 3:2.' },
        { q: 'Em que rio João batizava?', o: ['Jordão', 'Nilo', 'Eufrates', 'Tigre'], e: 'Mateus 3:6.' },
        { q: 'O que João disse a quem tinha duas túnicas?', o: ['Repartir com quem não tem', 'Guardar as duas', 'Vender', 'Jogar fora'], e: 'Lucas 3:11.' },
        { q: 'Com o que Jesus ia batizar?', o: ['Com o Espírito Santo e com fogo', 'Só com água', 'Com óleo', 'Com areia'], e: 'Mateus 3:11.' }
      ],
      parents: 'As palavras duras aos fariseus ("raça de víboras", 3:7-10) foram omitidas. Ponto central: arrependimento real (Lucas 3:10-14) e João como o "Elias" prometido. Leitura junto: Mateus 3:1-12.'
    },
    {
      id: 'en2', title: 'O batismo de Jesus', ref: 'Mateus 3:13-17; João 1:29-34', icon: '🕊️',
      recap: 'Na lição passada, João Batista preparou o caminho para Jesus no deserto.',
      scenes: [
        { art: '✨🛤️🌊', bg: 'mar', fx: 'luz', text: 'Um dia, Jesus veio da Galileia até o rio Jordão, onde João estava batizando. Ele tinha uns trinta anos.', r: 'Mateus 3:13; Lucas 3:23' },
        { art: '🧔👀✨', bg: 'mar', fx: 'luz', text: 'Quando João viu Jesus, disse: "Eis o Cordeiro de Deus, que tira o pecado do mundo!"', r: 'João 1:29' },
        { art: '🧔✋✨', bg: 'mar', text: 'Jesus pediu para ser batizado. Mas João não queria: "Eu é que preciso ser batizado por ti, e tu vens a mim?"', r: 'Mateus 3:14' },
        { art: '✨💬🧔', bg: 'mar', fx: 'luz', text: 'Jesus respondeu: "Deixe por agora, porque assim nos convém cumprir toda a justiça." Jesus não tinha pecado, mas quis ficar no lugar dos pecadores, junto com eles.', r: 'Mateus 3:15' },
        { art: '🌊💧✨', bg: 'mar', fx: 'ondas', text: 'Então João o batizou no rio Jordão.', r: 'Mateus 3:15-16' },
        { art: '☁️🕊️✨', bg: 'aurora', fx: 'luz', text: 'Logo que Jesus saiu da água, os céus se abriram, e Ele viu o Espírito de Deus descendo como uma pomba e vindo sobre Ele.', r: 'Mateus 3:16' },
        { art: '☁️📣💛', bg: 'aurora', fx: 'luz', text: 'E uma voz do céu disse: "Este é o meu Filho amado, em quem me comprazo."', r: 'Mateus 3:17' },
        { art: '✨🕊️📣', bg: 'aurora', fx: 'brilho', text: 'Que momento! O Pai falando do céu, o Filho no rio, e o Espírito Santo descendo como pomba. Um só Deus, em três Pessoas: o Pai, o Filho e o Espírito Santo!', r: 'Mateus 3:16-17; 28:19' }
      ],
      god: 'Deus é Pai, Filho e Espírito Santo. O Pai ama o Filho e se alegra nele.',
      jesus: 'João chamou Jesus de "Cordeiro de Deus": todos os cordeiros sacrificados desde Abel, a Páscoa no Egito e o tabernáculo apontavam para Ele (Êxodo 12; Isaías 53:7). E a voz do Pai juntou dois textos antigos: o Salmo 2:7 ("Tu és meu Filho") e Isaías 42:1 ("o meu escolhido, em quem a minha alma se agrada"). Jesus é o Rei e o Servo ao mesmo tempo.',
      verse: { ref: 'Mateus 3:17', tx: 'Este é o meu Filho amado, em quem me comprazo.' },
      small: [
        { q: 'Onde Jesus foi batizado?', o: [['🌊', 'No rio Jordão'], ['🏊', 'Numa piscina'], ['🏛️', 'No templo']] },
        { q: 'O que desceu sobre Jesus?', o: [['🕊️', 'O Espírito, como pomba'], ['🦅', 'Uma águia'], ['🌧️', 'Granizo']] },
        { q: 'Como João chamou Jesus?', o: [['🐑', 'Cordeiro de Deus'], ['🦁', 'Leão bravo'], ['🐴', 'Cavalo']] }
      ],
      big: [
        { q: 'Quantos anos Jesus tinha mais ou menos?', o: ['Trinta', 'Doze', 'Cinquenta', 'Vinte'], e: 'Lucas 3:23.' },
        { q: 'Por que João não queria batizar Jesus?', o: ['Achava que ele é que precisava ser batizado por Jesus', 'Estava cansado', 'O rio estava frio', 'Não conhecia Jesus'], e: 'Mateus 3:14.' },
        { q: 'O que a voz do céu disse?', o: ['"Este é o meu Filho amado"', '"Este é um profeta"', '"Este é João"', '"Fujam"'], e: 'Mateus 3:17.' },
        { q: 'Que verdade sobre Deus vemos no batismo?', o: ['Pai, Filho e Espírito Santo: um só Deus', 'Que há muitos deuses', 'Que Deus está longe', 'Nenhuma'], e: 'Mateus 3:16-17; 28:19.' }
      ],
      parents: 'O Pai é representado só pela voz (📣) e a nuvem; o Espírito pela pomba, como o próprio texto; Jesus pela luz. Ponto central: a Trindade revelada e Jesus como Cordeiro substituto que se identifica com os pecadores. Leitura junto: Mateus 3:13-17.'
    },
    {
      id: 'en3', title: 'Jesus vence a tentação', ref: 'Mateus 4:1-11', icon: '🛡️',
      recap: 'Na lição passada, Jesus foi batizado, e o Pai disse: "Este é o meu Filho amado."',
      scenes: [
        { art: '✨🏜️🕊️', bg: 'deserto', fx: 'vento', text: 'Depois do batismo, o Espírito levou Jesus para o deserto. Ali Ele jejuou quarenta dias e quarenta noites, e depois teve fome.', r: 'Mateus 4:1-2' },
        { art: '🐍🪨🍞', bg: 'deserto', text: 'Então o tentador, o diabo, veio e disse: "Se você é o Filho de Deus, mande que estas pedras virem pães."', r: 'Mateus 4:3' },
        { art: '✨📖🛡️', bg: 'deserto', fx: 'luz', text: 'Jesus respondeu com a Palavra de Deus: "Está escrito: nem só de pão viverá o homem, mas de toda palavra que sai da boca de Deus."', r: 'Mateus 4:4; Deuteronômio 8:3' },
        { art: '🐍🏛️⬇️', bg: 'cidade', text: 'O diabo levou Jesus ao ponto mais alto do templo e disse: "Se você é o Filho de Deus, jogue-se daqui, porque está escrito que os anjos vão te segurar." Ele até usou a Bíblia, mas de um jeito torto!', r: 'Mateus 4:5-6' },
        { art: '✨📖🛡️', bg: 'cidade', fx: 'luz', text: 'Jesus respondeu: "Também está escrito: não tentarás o Senhor teu Deus."', r: 'Mateus 4:7; Deuteronômio 6:16' },
        { art: '🐍⛰️👑🌍', bg: 'monte', text: 'Por fim, o diabo levou Jesus a um monte muito alto, mostrou todos os reinos do mundo e a sua glória, e disse: "Eu te dou tudo isso, se você se ajoelhar e me adorar."', r: 'Mateus 4:8-9' },
        { art: '✨🚫🐍', bg: 'monte', fx: 'luz', text: 'Jesus disse: "Vá embora, Satanás! Porque está escrito: ao Senhor teu Deus adorarás, e só a Ele servirás."', r: 'Mateus 4:10; Deuteronômio 6:13' },
        { art: '🐍💨✨🪽', bg: 'aurora', fx: 'brilho', text: 'Então o diabo o deixou, e anjos vieram e o serviam. Jesus venceu!', r: 'Mateus 4:11' }
      ],
      god: 'Deus nos dá a sua Palavra como espada contra a tentação. Ele merece ser o único adorado.',
      jesus: 'Adão foi tentado num jardim cheio de comida e caiu. Israel foi provado quarenta anos no deserto e caiu muitas vezes. Jesus foi tentado no deserto, com fome, e não caiu nenhuma vez! As três respostas de Jesus vêm de Deuteronômio, o livro do deserto. Ele venceu onde nós falhamos, e por isso pode nos ajudar quando somos tentados (Hebreus 2:18; 4:15).',
      verse: { ref: 'Mateus 4:4', tx: 'Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus.' },
      small: [
        { q: 'Quantos dias Jesus jejuou?', o: [['4️⃣0️⃣', 'Quarenta'], ['1️⃣', 'Um'], ['💯', 'Cem']] },
        { q: 'Com o que Jesus respondeu ao diabo?', o: [['📖', 'Com a Palavra de Deus'], ['⚔️', 'Com uma espada'], ['🏃', 'Fugindo']] },
        { q: 'Jesus venceu a tentação?', o: [['🛡️', 'Sim!'], ['❌', 'Não'], ['🤷', 'Mais ou menos']] }
      ],
      big: [
        { q: 'Quem levou Jesus ao deserto?', o: ['O Espírito', 'João', 'Os discípulos', 'Satanás'], e: 'Mateus 4:1.' },
        { q: 'O que o diabo pediu na primeira tentação?', o: ['Transformar pedras em pães', 'Pular do templo', 'Adorá-lo', 'Ir embora'], e: 'Mateus 4:3.' },
        { q: 'De que livro vêm as três respostas de Jesus?', o: ['Deuteronômio', 'Gênesis', 'Salmos', 'Apocalipse'], e: 'Deuteronômio 8:3; 6:16; 6:13.' },
        { q: 'O que aconteceu no fim?', o: ['O diabo foi embora, e anjos serviram Jesus', 'Jesus desistiu', 'Jesus pulou', 'Nada'], e: 'Mateus 4:11.' }
      ],
      parents: 'O diabo é mostrado como a serpente (🐍), ligando com Gênesis 3. Ponto central: Jesus como o novo Adão e o verdadeiro Israel, e o uso da Escritura contra a tentação. Sugestão: decorar um versículo para usar quando for tentado. Leitura junto: Mateus 4:1-11.'
    },
    {
      id: 'en4', title: 'Pescadores de gente', ref: 'Lucas 5:1-11; Marcos 1:16-20', icon: '🎣',
      recap: 'Na lição passada, Jesus venceu a tentação no deserto com a Palavra de Deus.',
      scenes: [
        { art: '👥👥🌊✨', bg: 'mar', fx: 'ondas', text: 'Jesus estava na beira do lago da Galileia, e uma multidão se apertava em volta dele para ouvir a Palavra de Deus.', r: 'Lucas 5:1' },
        { art: '⛵⛵🧔🥅', bg: 'mar', text: 'Ele viu dois barcos na beira. Os pescadores tinham saído deles e estavam lavando as redes. Jesus entrou num dos barcos, que era de Simão, e pediu que ele o afastasse um pouco da terra. Dali, Jesus ensinava a multidão.', r: 'Lucas 5:2-3' },
        { art: '✨💬🧔⛵', bg: 'mar', fx: 'luz', text: 'Quando terminou de falar, Jesus disse a Simão: "Vá para o lugar fundo e jogue as redes para pescar."', r: 'Lucas 5:4' },
        { art: '🧔😓🌙🥅', bg: 'mar', text: 'Simão respondeu: "Mestre, trabalhamos a noite inteira e não pegamos nada. Mas, porque o Senhor está mandando, vou jogar as redes."', r: 'Lucas 5:5' },
        { art: '🥅🐟🐟🐟🐟', bg: 'mar', fx: 'ondas', text: 'Eles jogaram as redes e pegaram tantos peixes que as redes começaram a se rasgar! Chamaram os companheiros do outro barco, e encheram os dois barcos, que quase afundavam!', r: 'Lucas 5:6-7' },
        { art: '🧔🙇✨', bg: 'mar', fx: 'luz', text: 'Quando Simão Pedro viu isso, caiu de joelhos diante de Jesus e disse: "Afasta-te de mim, Senhor, porque sou um homem pecador!" Ele percebeu que estava diante de alguém santo.', r: 'Lucas 5:8-9' },
        { art: '✨💬🐟➡️👥', bg: 'mar', fx: 'luz', text: 'Jesus disse: "Não tenha medo. De agora em diante, você vai ser pescador de gente!" Em vez de peixes, Pedro ia ajudar a trazer pessoas para Deus.', r: 'Lucas 5:10' },
        { art: '🧔🧔🧔🧔👣✨', bg: 'campo', fx: 'brilho', text: 'Simão Pedro, seu irmão André, e os irmãos Tiago e João levaram os barcos para a terra, deixaram tudo e seguiram Jesus. Mais tarde, Jesus escolheu doze discípulos para andarem com Ele.', r: 'Lucas 5:11; Marcos 1:16-20; 3:13-19' }
      ],
      god: 'Deus chama pessoas comuns para a sua obra. Vale a pena obedecer mesmo quando não entendemos.',
      jesus: 'Jesus mostrou que é o Senhor da criação: até os peixes obedeceram à sua palavra. E Pedro, diante de Jesus, sentiu-se pecador, como Isaías diante do trono de Deus (Isaías 6:5). Jesus não mandou Pedro embora: Ele veio chamar os pecadores. E hoje Jesus continua chamando gente comum para segui-lo e contar a boa notícia.',
      verse: { ref: 'Marcos 1:17', tx: 'Vinde após mim, e eu farei que sejais pescadores de homens.' },
      small: [
        { q: 'Qual era o trabalho de Pedro?', o: [['🎣', 'Pescador'], ['🔨', 'Carpinteiro'], ['👑', 'Rei']] },
        { q: 'Quantos peixes eles pegaram?', o: [['🐟', 'Muitos, as redes rasgavam!'], ['0️⃣', 'Nenhum'], ['1️⃣', 'Só um']] },
        { q: 'O que eles fizeram depois?', o: [['👣', 'Deixaram tudo e seguiram Jesus'], ['🏠', 'Foram para casa'], ['💰', 'Venderam os peixes']] }
      ],
      big: [
        { q: 'Quanto tempo Pedro tinha pescado sem pegar nada?', o: ['A noite inteira', 'Uma hora', 'Uma semana', 'Um mês'], e: 'Lucas 5:5.' },
        { q: 'O que Pedro disse quando viu o milagre?', o: ['"Afasta-te de mim, sou um homem pecador"', '"Que sorte!"', '"Vamos vender"', 'Nada'], e: 'Lucas 5:8.' },
        { q: 'O que Jesus disse que Pedro ia ser?', o: ['Pescador de gente', 'Rei', 'Sacerdote', 'Soldado'], e: 'Lucas 5:10.' },
        { q: 'Quantos discípulos Jesus escolheu para andar com Ele?', o: ['Doze', 'Sete', 'Setenta', 'Três'], e: 'Marcos 3:14.' }
      ],
      parents: 'Os discípulos aparecem como emojis comuns; Jesus só como luz. Ponto central: a obediência à palavra de Jesus, a consciência do pecado diante do Santo, e o chamado. Leitura junto: Lucas 5:1-11.'
    },
    {
      id: 'en5', title: 'Nicodemos e o novo nascimento', ref: 'João 3:1-21', icon: '🌙',
      recap: 'Na lição passada, Jesus chamou pescadores para serem pescadores de gente.',
      scenes: [
        { art: '👴📜🌙', bg: 'noite', fx: 'estrelas', text: 'Havia um homem chamado Nicodemos, um fariseu e líder dos judeus, que conhecia muito bem a Lei. Ele foi falar com Jesus de noite, talvez para ninguém ver.', r: 'João 3:1-2' },
        { art: '👴💬✨', bg: 'noite', fx: 'luz', text: 'Nicodemos disse: "Mestre, sabemos que vens de Deus, porque ninguém pode fazer os sinais que tu fazes, se Deus não estiver com ele."', r: 'João 3:2' },
        { art: '✨💬👶', bg: 'noite', fx: 'luz', text: 'Jesus respondeu: "Eu te digo a verdade: ninguém pode ver o Reino de Deus se não nascer de novo."', r: 'João 3:3' },
        { art: '👴🤔❓', bg: 'noite', text: 'Nicodemos ficou confuso: "Como alguém pode nascer sendo velho? Pode entrar de novo na barriga da mãe?"', r: 'João 3:4' },
        { art: '💧🕊️🌬️', bg: 'noite', fx: 'vento', text: 'Jesus explicou: "É preciso nascer da água e do Espírito. O vento sopra onde quer: você ouve o barulho, mas não sabe de onde vem nem para onde vai. Assim é quem nasce do Espírito." É Deus quem dá um coração novo!', r: 'João 3:5-8; Ezequiel 36:26' },
        { art: '🐍🪵⬆️👀', bg: 'deserto', fx: 'luz', text: 'E lembrou uma história antiga: "Assim como Moisés levantou a serpente no deserto, assim é necessário que o Filho do homem seja levantado, para que todo aquele que nele crê tenha a vida eterna."', r: 'João 3:14-15; Números 21:8-9' },
        { art: '🌍💛🎁', bg: 'aurora', fx: 'coracoes', text: '"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."', r: 'João 3:16' },
        { art: '💡🌑➡️🌅', bg: 'aurora', fx: 'luz', text: '"Deus não enviou o seu Filho ao mundo para condenar o mundo, mas para que o mundo seja salvo por Ele." Nicodemos veio no escuro e encontrou a Luz.', r: 'João 3:17-21' },
        { art: '👴🌿✨', bg: 'aurora', fx: 'brilho', text: 'Mais tarde, depois da cruz, Nicodemos levou especiarias para sepultar o corpo de Jesus. Ele tinha aprendido a confiar em Jesus!', r: 'João 19:39' }
      ],
      god: 'Deus amou o mundo inteiro e deu o seu Filho. É Ele quem dá vida nova pelo seu Espírito.',
      jesus: 'No deserto, quem olhava para a serpente de bronze levantada era curado (Números 21). Jesus disse que Ele seria "levantado" na cruz, e quem olha para Ele com fé recebe vida eterna. João 3:16 resume a Bíblia inteira: o amor do Pai, o presente do Filho e a vida para quem crê.',
      verse: { ref: 'João 3:16', tx: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.' },
      small: [
        { q: 'Quando Nicodemos foi falar com Jesus?', o: [['🌙', 'De noite'], ['☀️', 'Ao meio-dia'], ['🌅', 'De manhã']] },
        { q: 'O que é preciso para ver o Reino de Deus?', o: [['👶', 'Nascer de novo'], ['💰', 'Ser rico'], ['💪', 'Ser forte']] },
        { q: 'Quem Deus amou?', o: [['🌍', 'O mundo'], ['🐟', 'Só os peixes'], ['👑', 'Só os reis']] }
      ],
      big: [
        { q: 'Quem era Nicodemos?', o: ['Um fariseu e líder dos judeus', 'Um pescador', 'Um soldado romano', 'Um rei'], e: 'João 3:1.' },
        { q: 'Com o que Jesus comparou o Espírito?', o: ['Com o vento', 'Com o fogo', 'Com a pedra', 'Com o mar'], e: 'João 3:8.' },
        { q: 'Que história antiga Jesus lembrou?', o: ['A serpente levantada por Moisés', 'A arca de Noé', 'Davi e Golias', 'Jonas'], e: 'João 3:14; Números 21:9.' },
        { q: 'Para que Deus enviou o seu Filho?', o: ['Para que o mundo seja salvo por Ele', 'Para condenar o mundo', 'Para ser rei de Roma', 'Para ficar rico'], e: 'João 3:17.' }
      ],
      parents: 'Ponto central: o novo nascimento é obra do Espírito (3:5-8; Ezequiel 36:25-27) e a fé em Cristo crucificado (3:14-16). João 3:16 é ótimo para decorar em família. Leitura junto: João 3:1-17.'
    },
    {
      id: 'en6', title: 'A mulher samaritana no poço', ref: 'João 4:1-42', icon: '🏺',
      recap: 'Na lição passada, Jesus explicou a Nicodemos que é preciso nascer de novo.',
      scenes: [
        { art: '✨🛤️☀️', bg: 'deserto', text: 'Jesus estava viajando com os discípulos e passou pela região de Samaria. Cansado da viagem, sentou-se perto de um poço, o poço de Jacó, ao meio-dia.', r: 'João 4:4-6' },
        { art: '👩🏺☀️', bg: 'deserto', text: 'Uma mulher samaritana veio buscar água, sozinha, naquele calor. Jesus disse a ela: "Dê-me de beber."', r: 'João 4:7' },
        { art: '👩😮❓', bg: 'deserto', text: 'Ela ficou espantada: "Como o senhor, que é judeu, pede água a mim, que sou samaritana?" Os judeus e os samaritanos não se davam bem, e quase nem conversavam!', r: 'João 4:9' },
        { art: '✨💧♾️', bg: 'aurora', fx: 'luz', text: 'Jesus respondeu: "Se você soubesse quem está pedindo água, você é que pediria, e Ele te daria água viva. Quem beber desta água vai ter sede de novo. Mas quem beber da água que eu der nunca mais vai ter sede!"', r: 'João 4:10, 13-14' },
        { art: '👩🙏🏺', bg: 'deserto', text: 'A mulher disse: "Senhor, me dá dessa água!" Então Jesus mostrou que sabia toda a vida dela, até coisas tristes que ela não tinha contado.', r: 'João 4:15-18' },
        { art: '👩🤔⛰️', bg: 'monte', text: 'Ela percebeu que Ele era um profeta e falou de religião: "Nossos pais adoravam neste monte, e vocês dizem que é em Jerusalém." Jesus disse: "Os verdadeiros adoradores vão adorar o Pai em espírito e em verdade."', r: 'João 4:19-24' },
        { art: '👩💬✨', bg: 'aurora', fx: 'luz', text: 'A mulher disse: "Eu sei que o Messias vai vir e vai explicar tudo." Jesus respondeu: "Sou eu, que estou falando com você."', r: 'João 4:25-26' },
        { art: '👩🏃🏘️📣', bg: 'cidade', fx: 'brilho', text: 'A mulher deixou o cântaro, correu para a cidade e disse a todos: "Venham ver um homem que me disse tudo o que eu fiz! Será que Ele não é o Cristo?"', r: 'João 4:28-29' },
        { art: '👥👥🙌✨', bg: 'cidade', fx: 'brilho', text: 'Muitos samaritanos vieram, ouviram Jesus e creram. Eles disseram: "Agora nós mesmos ouvimos e sabemos que Ele é de verdade o Salvador do mundo!"', r: 'João 4:39-42' }
      ],
      god: 'Deus conhece tudo sobre nós e mesmo assim nos ama. Ele quer adoradores verdadeiros de todos os povos.',
      jesus: 'Jesus quebrou as barreiras: falou com uma mulher, samaritana, que todos desprezavam. Ele é a água viva que mata a sede da alma, como os profetas tinham prometido (Isaías 55:1; Jeremias 2:13). E os samaritanos chamaram Jesus do nome mais bonito: "o Salvador do mundo".',
      verse: { ref: 'João 4:14', tx: 'Mas aquele que beber da água que eu lhe der nunca terá sede.' },
      small: [
        { q: 'Onde Jesus encontrou a mulher?', o: [['🏺', 'No poço'], ['🏪', 'Na feira'], ['🏛️', 'No templo']] },
        { q: 'Que água Jesus ofereceu?', o: [['💧', 'A água viva'], ['🥤', 'Refrigerante'], ['🧊', 'Gelo']] },
        { q: 'O que a mulher fez depois?', o: [['📣', 'Contou para a cidade toda'], ['🤐', 'Ficou calada'], ['😴', 'Dormiu']] }
      ],
      big: [
        { q: 'De quem era o poço?', o: ['De Jacó', 'De Davi', 'De Moisés', 'De Elias'], e: 'João 4:6.' },
        { q: 'Por que a mulher se espantou?', o: ['Judeus e samaritanos não se davam bem', 'Jesus estava molhado', 'O poço estava seco', 'Era de noite'], e: 'João 4:9.' },
        { q: 'Como devem ser os verdadeiros adoradores?', o: ['Em espírito e em verdade', 'Só num monte', 'Só com dinheiro', 'Em silêncio'], e: 'João 4:23-24.' },
        { q: 'Como os samaritanos chamaram Jesus?', o: ['O Salvador do mundo', 'Um mago', 'Um rei de Roma', 'Um pescador'], e: 'João 4:42.' }
      ],
      parents: 'A vida conjugal da mulher (cinco maridos, 4:16-18) foi resumida como "coisas tristes que ela não tinha contado". Ponto central: Jesus vê tudo e oferece graça; ele derruba barreiras étnicas e sociais. Leitura junto: João 4:5-15 e 39-42.'
    },
    {
      id: 'en7', title: 'O Sermão do Monte: os felizes', ref: 'Mateus 5:1-16', icon: '⛰️',
      recap: 'Na lição passada, Jesus ofereceu água viva à mulher samaritana.',
      scenes: [
        { art: '👥👥⛰️✨', bg: 'monte', fx: 'luz', text: 'Vendo as multidões, Jesus subiu a um monte e sentou-se, e os seus discípulos se aproximaram. Então Ele começou a ensinar. É o famoso Sermão do Monte!', r: 'Mateus 5:1-2' },
        { art: '🙏😊👑', bg: 'monte', fx: 'brilho', text: '"Felizes os pobres de espírito, porque deles é o Reino dos céus." São os que sabem que precisam de Deus para tudo.', r: 'Mateus 5:3' },
        { art: '😢🤗💛', bg: 'monte', fx: 'coracoes', text: '"Felizes os que choram, porque serão consolados. Felizes os mansos, porque herdarão a terra."', r: 'Mateus 5:4-5' },
        { art: '🍽️⚖️💛', bg: 'campo', fx: 'brilho', text: '"Felizes os que têm fome e sede de justiça, porque serão saciados. Felizes os misericordiosos, porque receberão misericórdia."', r: 'Mateus 5:6-7' },
        { art: '❤️👀🕊️', bg: 'aurora', fx: 'luz', text: '"Felizes os limpos de coração, porque verão a Deus. Felizes os que promovem a paz, porque serão chamados filhos de Deus."', r: 'Mateus 5:8-9' },
        { art: '🧂🍲😋', bg: 'cidade', text: 'Jesus disse aos discípulos: "Vocês são o sal da terra." O sal dá sabor e conserva a comida. Assim os filhos de Deus fazem diferença no mundo.', r: 'Mateus 5:13' },
        { art: '💡⛰️🏘️', bg: 'noite', fx: 'estrelas', text: '"Vocês são a luz do mundo. Uma cidade no alto de um monte não pode ficar escondida. E ninguém acende uma lâmpada para colocar debaixo de um cesto."', r: 'Mateus 5:14-15' },
        { art: '💡😊🙌', bg: 'aurora', fx: 'luz', text: '"Assim brilhe a luz de vocês diante das pessoas, para que vejam as suas boas obras e glorifiquem o Pai de vocês, que está nos céus."', r: 'Mateus 5:16' }
      ],
      god: 'A felicidade verdadeira vem de Deus. Ele se alegra com os humildes, os mansos e os de coração limpo.',
      jesus: 'Moisés recebeu a Lei num monte. Agora Jesus, num monte, ensina com autoridade o coração da Lei. As Bem-aventuranças descrevem perfeitamente o próprio Jesus: Ele foi manso, misericordioso, limpo de coração e pacificador. E Ele mesmo é "a luz do mundo" (João 8:12); nós brilhamos porque refletimos a luz dele.',
      verse: { ref: 'Mateus 5:16', tx: 'Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem o vosso Pai, que está nos céus.' },
      small: [
        { q: 'Onde Jesus ensinou?', o: [['⛰️', 'Num monte'], ['🌊', 'No fundo do mar'], ['🚀', 'No espaço']] },
        { q: 'O que somos, segundo Jesus?', o: [['💡', 'A luz do mundo'], ['🌑', 'A escuridão'], ['🪨', 'Pedras']] },
        { q: 'O que o sal faz?', o: [['🧂', 'Dá sabor'], ['🍬', 'Deixa doce'], ['🧊', 'Congela']] }
      ],
      big: [
        { q: 'O que Jesus diz dos pobres de espírito?', o: ['Deles é o Reino dos céus', 'Vão ficar ricos', 'Vão sofrer', 'Nada'], e: 'Mateus 5:3.' },
        { q: 'O que vão herdar os mansos?', o: ['A terra', 'Ouro', 'Um castelo', 'Nada'], e: 'Mateus 5:5.' },
        { q: 'Como serão chamados os pacificadores?', o: ['Filhos de Deus', 'Reis', 'Profetas', 'Soldados'], e: 'Mateus 5:9.' },
        { q: 'Para que a nossa luz deve brilhar?', o: ['Para que glorifiquem o Pai', 'Para ficarmos famosos', 'Para iluminar a casa', 'Para nada'], e: 'Mateus 5:16.' }
      ],
      parents: 'As Bem-aventuranças sobre perseguição (5:10-12) foram resumidas. "Bem-aventurados" foi traduzido por "felizes" para as crianças. Ponto central: o caráter do cidadão do Reino, que só Cristo cumpre perfeitamente e forma em nós. Leitura junto: Mateus 5:1-16.'
    },
    {
      id: 'en8', title: 'Jesus ensina a orar', ref: 'Mateus 6:5-15; Lucas 11:1-13', icon: '🙏',
      recap: 'Na lição passada, Jesus ensinou as Bem-aventuranças e disse que somos sal da terra e luz do mundo.',
      scenes: [
        { art: '🧔🙏✨', bg: 'monte', fx: 'luz', text: 'Os discípulos viam Jesus orando muitas vezes. Um dia, um deles pediu: "Senhor, ensina-nos a orar!"', r: 'Lucas 11:1' },
        { art: '📣🙏😏', bg: 'cidade', text: 'Jesus avisou: "Quando orarem, não sejam como os fingidos, que gostam de orar em pé nas praças para serem vistos pelas pessoas."', r: 'Mateus 6:5' },
        { art: '🚪🙏💛', bg: 'cidade', fx: 'coracoes', text: '"Quando você orar, entre no seu quarto, feche a porta e ore ao seu Pai, que está em secreto. E o seu Pai, que vê em secreto, vai te recompensar."', r: 'Mateus 6:6' },
        { art: '🗣️🗣️❌', bg: 'cidade', text: '"E não fiquem repetindo palavras sem sentido, achando que serão ouvidos por falar muito. O Pai de vocês sabe do que vocês precisam antes mesmo de pedirem."', r: 'Mateus 6:7-8' },
        { art: '🙏☁️✨', bg: 'aurora', fx: 'luz', text: '"Portanto, orem assim: Pai nosso, que estás nos céus, santificado seja o teu nome. Venha o teu Reino. Seja feita a tua vontade, assim na terra como no céu."', r: 'Mateus 6:9-10' },
        { art: '🍞🤝🛡️', bg: 'campo', fx: 'brilho', text: '"O pão nosso de cada dia nos dá hoje. Perdoa as nossas dívidas, assim como nós perdoamos aos nossos devedores. E não nos deixes cair em tentação, mas livra-nos do mal."', r: 'Mateus 6:11-13' },
        { art: '👦🍞🐟💛', bg: 'cidade', fx: 'coracoes', text: 'Jesus explicou: "Se um filho pede pão, que pai daria uma pedra? Se vocês, que são maus, sabem dar coisas boas aos filhos, quanto mais o Pai do céu vai dar o Espírito Santo aos que pedirem!"', r: 'Lucas 11:11-13; Mateus 7:9-11' }
      ],
      god: 'Deus é o nosso Pai do céu. Ele sabe do que precisamos, ouve em secreto e dá coisas boas aos seus filhos.',
      jesus: 'Só Jesus podia chamar Deus de "meu Pai" de um jeito único, porque Ele é o Filho eterno. Mas Ele nos ensinou a dizer "Pai nosso"! Por causa de Jesus, quem crê nele é adotado como filho de Deus e pode orar com confiança (Romanos 8:15; Gálatas 4:6).',
      verse: { ref: 'Mateus 6:9', tx: 'Pai nosso, que estás nos céus, santificado seja o teu nome.' },
      small: [
        { q: 'Como começa a oração que Jesus ensinou?', o: [['🙏', '"Pai nosso"'], ['👋', '"Oi"'], ['🎂', '"Parabéns"']] },
        { q: 'Onde Jesus disse para orar?', o: [['🚪', 'No quarto, em secreto'], ['📣', 'Só na praça'], ['🎪', 'No circo']] },
        { q: 'Deus sabe do que precisamos?', o: [['✅', 'Sim, antes de pedirmos'], ['❌', 'Não'], ['🤷', 'Às vezes']] }
      ],
      big: [
        { q: 'O que os discípulos pediram a Jesus?', o: ['"Ensina-nos a orar"', '"Dá-nos ouro"', '"Faz um milagre"', '"Vamos embora"'], e: 'Lucas 11:1.' },
        { q: 'Que pão pedimos no Pai Nosso?', o: ['O pão de cada dia', 'O pão do ano todo', 'Bolo', 'Nenhum'], e: 'Mateus 6:11.' },
        { q: 'Qual é a condição do perdão no Pai Nosso?', o: ['Assim como nós perdoamos', 'Pagar com dinheiro', 'Orar muito alto', 'Nenhuma'], e: 'Mateus 6:12, 14-15.' },
        { q: 'O que o Pai dá aos que pedem, segundo Lucas?', o: ['O Espírito Santo', 'Uma pedra', 'Uma cobra', 'Nada'], e: 'Lucas 11:13.' }
      ],
      parents: 'A doxologia final ("porque teu é o reino...") não aparece nos manuscritos mais antigos de Mateus; o app a omite. Sugestão: orar o Pai Nosso juntos, frase por frase, explicando cada uma. Leitura junto: Mateus 6:5-15.'
    },
    {
      id: 'en9', title: 'Olhai os lírios do campo', ref: 'Mateus 6:19-34', icon: '🌸',
      recap: 'Na lição passada, Jesus ensinou os discípulos a orar o Pai Nosso.',
      scenes: [
        { art: '💰🐛🦹', bg: 'cidade', text: 'Jesus disse: "Não juntem tesouros na terra, onde a traça e a ferrugem estragam, e onde os ladrões roubam."', r: 'Mateus 6:19' },
        { art: '☁️💎❤️', bg: 'aurora', fx: 'luz', text: '"Juntem tesouros no céu. Porque onde estiver o seu tesouro, ali também vai estar o seu coração."', r: 'Mateus 6:20-21' },
        { art: '😟🍽️👕', bg: 'cidade', text: '"Por isso eu digo a vocês: não fiquem ansiosos pela vida, pensando: o que vamos comer? o que vamos beber? o que vamos vestir?"', r: 'Mateus 6:25' },
        { art: '🐦🐦🌾', bg: 'campo', fx: 'vento', text: '"Olhem para as aves do céu: elas não plantam, não colhem, nem guardam em celeiros, e o Pai de vocês, que está no céu, as alimenta. Vocês não valem muito mais do que elas?"', r: 'Mateus 6:26' },
        { art: '📏😟❓', bg: 'campo', text: '"E quem de vocês, por mais que se preocupe, consegue acrescentar uma hora sequer à sua vida?"', r: 'Mateus 6:27' },
        { art: '🌸🌼🌺', bg: 'jardim', fx: 'brilho', text: '"Olhem os lírios do campo, como crescem: eles não trabalham nem fiam roupa. Mas nem Salomão, com toda a sua riqueza, se vestiu como um deles!"', r: 'Mateus 6:28-29' },
        { art: '🌿🔥💛', bg: 'jardim', fx: 'coracoes', text: '"Se Deus veste assim a erva do campo, que hoje existe e amanhã é queimada, quanto mais vai vestir vocês, homens de pouca fé!"', r: 'Mateus 6:30' },
        { art: '👑1️⃣✨', bg: 'aurora', fx: 'luz', text: '"Busquem primeiro o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês. Não se preocupem com o amanhã, porque o amanhã cuidará de si mesmo."', r: 'Mateus 6:33-34' }
      ],
      god: 'Deus é um Pai cuidadoso. Ele alimenta os passarinhos e veste as flores; muito mais cuida de nós.',
      jesus: 'Jesus disse que nem Salomão, o rei mais rico, se vestiu como um lírio. E lembra de Salomão? Ele pediu primeiro sabedoria, e Deus acrescentou o resto (1 Reis 3:11-13). Jesus é "maior que Salomão" e nos convida a buscar primeiro o Reino. Ele mesmo é o nosso maior tesouro no céu.',
      verse: { ref: 'Mateus 6:33', tx: 'Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.' },
      small: [
        { q: 'Quem alimenta os passarinhos?', o: [['✨', 'O Pai do céu'], ['🐱', 'O gato'], ['🚫', 'Ninguém']] },
        { q: 'Que flores Jesus mostrou?', o: [['🌸', 'Os lírios do campo'], ['🌵', 'Cactos'], ['🍄', 'Cogumelos']] },
        { q: 'O que devemos buscar primeiro?', o: [['👑', 'O Reino de Deus'], ['🍦', 'Sorvete'], ['🎮', 'Jogos']] }
      ],
      big: [
        { q: 'Onde Jesus manda juntar tesouros?', o: ['No céu', 'Na terra', 'No banco', 'Debaixo da cama'], e: 'Mateus 6:20.' },
        { q: 'Onde está o nosso coração?', o: ['Onde estiver o nosso tesouro', 'No banco', 'Em lugar nenhum', 'No mar'], e: 'Mateus 6:21.' },
        { q: 'Que rei não se vestiu como um lírio?', o: ['Salomão', 'Davi', 'Saul', 'Herodes'], e: 'Mateus 6:29.' },
        { q: 'O que acontece com quem busca primeiro o Reino?', o: ['As outras coisas são acrescentadas', 'Fica pobre', 'Perde tudo', 'Nada'], e: 'Mateus 6:33.' }
      ],
      parents: 'Ponto central: confiança no cuidado do Pai e prioridade do Reino. Bom para crianças ansiosas: mostrar que Deus cuida até das flores e dos passarinhos. Sugestão: observar juntos um passarinho ou uma flor. Leitura junto: Mateus 6:25-34.'
    },
    {
      id: 'en10', title: 'A casa na rocha', ref: 'Mateus 7:7-29', icon: '🏠',
      recap: 'Na lição passada, Jesus mostrou os lírios do campo e disse para buscarmos primeiro o Reino.',
      scenes: [
        { art: '🙏🔍🚪', bg: 'monte', fx: 'luz', text: 'Jesus continuou ensinando: "Peçam, e será dado a vocês. Busquem, e vão encontrar. Batam, e a porta será aberta."', r: 'Mateus 7:7' },
        { art: '🤝💛🔁', bg: 'cidade', fx: 'coracoes', text: '"Tudo o que vocês querem que as pessoas façam a vocês, façam também a elas." Essa é chamada de regra de ouro!', r: 'Mateus 7:12' },
        { art: '🚪🤏🛤️', bg: 'monte', text: '"Entrem pela porta estreita. Larga é a porta e espaçoso o caminho que leva à perdição, e muitos entram por ela. Mas estreita é a porta e apertado o caminho que leva à vida."', r: 'Mateus 7:13-14' },
        { art: '🌳🍎🌳🥀', bg: 'jardim', text: '"Toda árvore boa dá frutos bons, e a árvore ruim dá frutos ruins. Pelos frutos vocês vão conhecer as pessoas."', r: 'Mateus 7:17-20' },
        { art: '🧔👂🪨🏠', bg: 'monte', fx: 'brilho', text: 'E Jesus contou uma história: "Quem ouve estas minhas palavras e as pratica é como um homem prudente, que construiu a sua casa sobre a rocha."', r: 'Mateus 7:24' },
        { art: '🌧️🌊🌬️🏠', bg: 'monte', fx: 'chuva', text: '"Caiu a chuva, vieram as enchentes, sopraram os ventos e bateram contra aquela casa. E ela não caiu, porque estava firmada na rocha!"', r: 'Mateus 7:25' },
        { art: '🧔🙉🏖️🏠', bg: 'mar', text: '"Mas quem ouve as minhas palavras e não as pratica é como um homem tolo, que construiu a sua casa sobre a areia."', r: 'Mateus 7:26' },
        { art: '🌧️🌊💥🏚️', bg: 'mar', fx: 'chuva', text: '"Caiu a chuva, vieram as enchentes, sopraram os ventos e bateram contra aquela casa. E ela caiu, e foi grande a sua queda!"', r: 'Mateus 7:27' },
        { art: '👥😮✨', bg: 'monte', fx: 'luz', text: 'Quando Jesus terminou, as multidões estavam maravilhadas com o seu ensino, porque Ele ensinava como quem tem autoridade, e não como os mestres da Lei.', r: 'Mateus 7:28-29' }
      ],
      god: 'Deus ouve quem pede. A sua Palavra é a rocha firme para construir a vida.',
      jesus: 'A Bíblia chama Deus de "a Rocha" muitas vezes (Deuteronômio 32:4; Salmos 18:2). E Paulo diz que essa Rocha é Cristo (1 Coríntios 10:4). Construir sobre a rocha é ouvir e praticar as palavras de Jesus. As tempestades vêm para todos, mas quem está firmado em Jesus não cai.',
      verse: { ref: 'Mateus 7:24', tx: 'Todo aquele, pois, que escuta estas minhas palavras, e as pratica, assemelhá-lo-ei ao homem prudente, que edificou a sua casa sobre a rocha.' },
      small: [
        { q: 'Onde o homem prudente construiu a casa?', o: [['🪨', 'Na rocha'], ['🏖️', 'Na areia'], ['☁️', 'Nas nuvens']] },
        { q: 'O que aconteceu com a casa na areia?', o: [['💥', 'Caiu'], ['🏰', 'Virou castelo'], ['🎉', 'Teve festa']] },
        { q: 'O que é a regra de ouro?', o: [['🤝', 'Fazer aos outros o que queremos para nós'], ['🟨', 'Guardar ouro'], ['🏃', 'Correr mais']] }
      ],
      big: [
        { q: 'O que Jesus diz a quem bate?', o: ['A porta será aberta', 'Vá embora', 'Bata mais forte', 'Nada'], e: 'Mateus 7:7.' },
        { q: 'Como é o caminho que leva à vida?', o: ['Estreito e apertado', 'Largo e fácil', 'Escuro', 'Não existe'], e: 'Mateus 7:14.' },
        { q: 'O que significa construir na rocha?', o: ['Ouvir e praticar as palavras de Jesus', 'Só ouvir', 'Ter uma casa grande', 'Morar na montanha'], e: 'Mateus 7:24.' },
        { q: 'Como Jesus ensinava?', o: ['Com autoridade', 'Com dúvida', 'Só com livros', 'Gritando'], e: 'Mateus 7:29.' }
      ],
      parents: 'Para um engenheiro de fundações: esta é a parábola perfeita! Vale mostrar à criança, com areia e uma pedra, por que a fundação importa. Ponto central: ouvir e praticar a palavra de Cristo. Leitura junto: Mateus 7:24-29.'
    },
    {
      id: 'en11', title: 'A parábola do semeador', ref: 'Mateus 13:1-23', icon: '🌱',
      recap: 'Na lição passada, Jesus contou a história da casa na rocha e da casa na areia.',
      scenes: [
        { art: '👥⛵🌊✨', bg: 'mar', fx: 'ondas', text: 'Era tanta gente que Jesus entrou num barco e ensinava dali, enquanto o povo ficava na praia. Ele ensinava muitas coisas por parábolas, histórias do dia a dia que explicam o Reino de Deus.', r: 'Mateus 13:1-3' },
        { art: '🧑‍🌾🌾👋', bg: 'campo', text: '"Um semeador saiu para semear. Enquanto ele jogava as sementes..."', r: 'Mateus 13:3-4' },
        { art: '🛤️🌰🐦', bg: 'campo', text: '"...algumas caíram à beira do caminho, e os passarinhos vieram e comeram."', r: 'Mateus 13:4' },
        { art: '🪨🌱☀️🥀', bg: 'deserto', text: '"Outras caíram em lugares com pedras, onde havia pouca terra. Brotaram logo, mas, quando o sol saiu, elas secaram, porque não tinham raiz."', r: 'Mateus 13:5-6' },
        { art: '🌵🌱😣', bg: 'campo', text: '"Outras caíram entre espinhos, e os espinhos cresceram e sufocaram as plantinhas."', r: 'Mateus 13:7' },
        { art: '🟫🌾🌾🌾', bg: 'campo', fx: 'brilho', text: '"Outras caíram em terra boa e deram fruto: umas cem, outras sessenta, outras trinta vezes mais!"', r: 'Mateus 13:8' },
        { art: '✨💬🧔🧔', bg: 'campo', fx: 'luz', text: 'Depois Jesus explicou aos discípulos: a semente é a Palavra de Deus. O caminho é quem ouve e não entende, e o maligno tira a palavra do coração. O lugar com pedras é quem recebe com alegria, mas desiste quando vem a dificuldade.', r: 'Mateus 13:18-21' },
        { art: '🌵💰😟', bg: 'campo', text: 'Os espinhos são as preocupações da vida e o amor ao dinheiro, que sufocam a Palavra.', r: 'Mateus 13:22' },
        { art: '❤️🌾🌾', bg: 'campo', fx: 'brilho', text: 'E a terra boa é quem ouve a Palavra, entende e dá muito fruto. Que o nosso coração seja terra boa!', r: 'Mateus 13:23' }
      ],
      god: 'Deus espalha a sua Palavra com generosidade. Ele quer que ela cresça e dê fruto no nosso coração.',
      jesus: 'Jesus é o semeador que espalha a Palavra do Reino (Mateus 13:37). E Ele mesmo comparou a sua morte e ressurreição a uma semente: "Se o grão de trigo, caindo na terra, não morrer, fica só; mas, se morrer, dá muito fruto" (João 12:24). Por causa dele, a Palavra dá fruto no mundo inteiro.',
      verse: { ref: 'Mateus 13:23', tx: 'Mas o que foi semeado em boa terra é o que ouve e compreende a palavra; e dá fruto.' },
      small: [
        { q: 'O que o semeador jogava?', o: [['🌰', 'Sementes'], ['🪨', 'Pedras'], ['🍬', 'Balas']] },
        { q: 'O que comeu as sementes do caminho?', o: [['🐦', 'Os passarinhos'], ['🐘', 'O elefante'], ['🐟', 'O peixe']] },
        { q: 'O que é a semente?', o: [['📖', 'A Palavra de Deus'], ['🍎', 'Uma maçã'], ['💰', 'Dinheiro']] }
      ],
      big: [
        { q: 'O que é uma parábola?', o: ['Uma história do dia a dia que ensina sobre o Reino', 'Uma música', 'Um milagre', 'Uma lei'], e: 'Mateus 13:3.' },
        { q: 'Por que a planta no lugar com pedras secou?', o: ['Não tinha raiz', 'Choveu demais', 'Os pássaros comeram', 'Foi cortada'], e: 'Mateus 13:6.' },
        { q: 'O que são os espinhos?', o: ['As preocupações e o amor ao dinheiro', 'Os pássaros', 'O sol', 'A chuva'], e: 'Mateus 13:22.' },
        { q: 'Quanto a terra boa produziu?', o: ['Cem, sessenta e trinta vezes', 'Nada', 'Uma vez', 'Duas vezes'], e: 'Mateus 13:8.' }
      ],
      parents: 'A explicação de por que Jesus usava parábolas (13:10-17, citando Isaías 6) foi omitida. Ponto central: os diferentes corações diante da Palavra. Sugestão: plantar um feijão no algodão com a criança. Leitura junto: Mateus 13:1-9 e 18-23.'
    },
    {
      id: 'en12', title: 'O bom samaritano', ref: 'Lucas 10:25-37', icon: '🩹',
      recap: 'Na lição passada, Jesus contou a parábola do semeador e dos quatro tipos de terra.',
      scenes: [
        { art: '👨‍🏫❓✨', bg: 'cidade', text: 'Um mestre da Lei quis testar Jesus: "Mestre, o que devo fazer para herdar a vida eterna?" Jesus perguntou: "O que está escrito na Lei?"', r: 'Lucas 10:25-26' },
        { art: '❤️⬆️🤝', bg: 'cidade', fx: 'luz', text: 'Ele respondeu: "Amarás o Senhor teu Deus de todo o teu coração, alma, força e entendimento, e o teu próximo como a ti mesmo." Jesus disse: "Respondeu certo. Faça isso e viverá." Mas ele, querendo se justificar, perguntou: "E quem é o meu próximo?"', r: 'Lucas 10:27-29' },
        { art: '🧔🛤️🦹🦹', bg: 'deserto', text: 'Jesus contou uma história: "Um homem descia de Jerusalém para Jericó e caiu nas mãos de assaltantes. Eles tiraram a roupa dele, bateram nele e o deixaram quase morto na estrada."', r: 'Lucas 10:30' },
        { art: '🧔🤕👀🚶', bg: 'deserto', text: '"Por acaso, um sacerdote descia pelo mesmo caminho. Quando viu o homem, passou pelo outro lado da estrada."', r: 'Lucas 10:31' },
        { art: '🧔🤕👀🚶', bg: 'deserto', text: '"Depois, um levita, que servia no templo, também chegou ali, viu o homem e passou pelo outro lado."', r: 'Lucas 10:32' },
        { art: '🧔🐴💛🤕', bg: 'deserto', fx: 'coracoes', text: '"Mas um samaritano, que viajava por ali, chegou perto, viu o homem e teve compaixão!" Lembra que judeus e samaritanos não se davam bem?', r: 'Lucas 10:33' },
        { art: '🩹🫒🍷🤕', bg: 'deserto', fx: 'coracoes', text: '"Ele cuidou das feridas, colocando azeite e vinho, e as enfaixou. Colocou o homem no seu próprio animal e o levou para uma hospedaria, onde cuidou dele."', r: 'Lucas 10:34' },
        { art: '🪙🪙🏠💛', bg: 'cidade', fx: 'coracoes', text: '"No dia seguinte, deu duas moedas de prata ao dono da hospedaria e disse: Cuide dele. Se gastar mais, quando eu voltar eu pago."', r: 'Lucas 10:35' },
        { art: '✨❓👨‍🏫', bg: 'cidade', fx: 'luz', text: 'Jesus perguntou: "Qual dos três foi o próximo do homem assaltado?" Ele respondeu: "O que teve misericórdia dele." Jesus disse: "Vá e faça o mesmo."', r: 'Lucas 10:36-37' }
      ],
      god: 'Deus é cheio de compaixão. Ele quer que amemos o próximo, qualquer pessoa que precise de nós.',
      jesus: 'Nós somos como o homem caído na estrada: feridos pelo pecado, sem poder nos salvar. Jesus é o verdadeiro bom samaritano: Ele, que foi desprezado, chegou perto de nós, teve compaixão e pagou tudo o que precisávamos. E agora Ele nos manda: "Vá e faça o mesmo."',
      verse: { ref: 'Lucas 10:27', tx: 'Amarás ao Senhor teu Deus de todo o teu coração... e ao teu próximo como a ti mesmo.' },
      small: [
        { q: 'O que aconteceu com o homem na estrada?', o: [['🦹', 'Foi assaltado e ferido'], ['🎉', 'Ganhou uma festa'], ['😴', 'Dormiu']] },
        { q: 'Quem ajudou o homem?', o: [['🧔', 'O samaritano'], ['🚶', 'O sacerdote'], ['🦹', 'Os ladrões']] },
        { q: 'O que Jesus disse no final?', o: [['💛', '"Vá e faça o mesmo"'], ['😴', '"Vá dormir"'], ['🏃', '"Fuja"']] }
      ],
      big: [
        { q: 'Qual pergunta o mestre da Lei fez para se justificar?', o: ['"Quem é o meu próximo?"', '"Que horas são?"', '"Onde fica Jericó?"', '"Quem é Jesus?"'], e: 'Lucas 10:29.' },
        { q: 'Quem passou pelo outro lado da estrada?', o: ['Um sacerdote e um levita', 'Dois samaritanos', 'Dois soldados', 'Ninguém'], e: 'Lucas 10:31-32.' },
        { q: 'O que o samaritano colocou nas feridas?', o: ['Azeite e vinho', 'Água e sal', 'Mel', 'Nada'], e: 'Lucas 10:34.' },
        { q: 'Quem foi o próximo do homem?', o: ['O que teve misericórdia dele', 'O sacerdote', 'O levita', 'O dono da hospedaria'], e: 'Lucas 10:37.' }
      ],
      parents: 'A violência do assalto foi descrita sem detalhes. Ponto central: amor ao próximo que atravessa barreiras, e Cristo como o samaritano que nos salva. Bom para conversar sobre ajudar alguém que ninguém quer ajudar. Leitura junto: Lucas 10:25-37.'
    },
    {
      id: 'en13', title: 'A ovelha e a moeda perdidas', ref: 'Lucas 15:1-10', icon: '🐑',
      recap: 'Na lição passada, Jesus contou a história do bom samaritano.',
      scenes: [
        { art: '👥🧔💰✨', bg: 'cidade', text: 'Os cobradores de impostos e outras pessoas conhecidas como pecadoras se aproximavam de Jesus para ouvi-lo.', r: 'Lucas 15:1' },
        { art: '🧔😠👉', bg: 'cidade', text: 'Os fariseus e os mestres da Lei reclamavam: "Este homem recebe pecadores e come com eles!" Então Jesus contou três histórias.', r: 'Lucas 15:2-3' },
        { art: '🧑‍🌾🐑💯', bg: 'campo', text: '"Quem de vocês, tendo cem ovelhas e perdendo uma, não deixa as noventa e nove no campo e vai atrás da perdida até encontrá-la?"', r: 'Lucas 15:4' },
        { art: '🧑‍🌾🔍🏔️🐑', bg: 'monte', fx: 'vento', text: 'O pastor procurou pelos montes e vales, até achar a ovelhinha perdida.', r: 'Lucas 15:4' },
        { art: '🧑‍🌾🐑😊🎉', bg: 'campo', fx: 'coracoes', text: '"Quando a encontra, coloca nos ombros, todo alegre. Chega em casa, chama os amigos e vizinhos e diz: Alegrem-se comigo, porque achei a minha ovelha que estava perdida!"', r: 'Lucas 15:5-6' },
        { art: '✨🎉☁️', bg: 'aurora', fx: 'brilho', text: '"Eu digo a vocês: assim também haverá mais alegria no céu por um pecador que se arrepende do que por noventa e nove justos que não precisam de arrependimento."', r: 'Lucas 15:7' },
        { art: '👩🪙🔟🔍', bg: 'cidade', text: '"Ou que mulher, tendo dez moedas de prata e perdendo uma, não acende uma lamparina, varre a casa e procura com cuidado até encontrá-la?"', r: 'Lucas 15:8' },
        { art: '👩🪙😊👭', bg: 'cidade', fx: 'coracoes', text: '"Quando a encontra, chama as amigas e vizinhas: Alegrem-se comigo, porque achei a moeda que tinha perdido!"', r: 'Lucas 15:9' },
        { art: '✨🪽🎉', bg: 'aurora', fx: 'brilho', text: '"Assim, eu digo a vocês, há alegria diante dos anjos de Deus por um pecador que se arrepende."', r: 'Lucas 15:10' }
      ],
      god: 'Deus vai atrás de quem está perdido. O céu faz festa quando alguém se arrepende e volta para Ele.',
      jesus: 'Ezequiel prometeu que o próprio Deus ia procurar as suas ovelhas perdidas (Ezequiel 34:11-16). Jesus é esse Bom Pastor! Ele disse: "O Filho do homem veio buscar e salvar o que se havia perdido" (Lucas 19:10). E Ele nos carrega nos ombros, com alegria.',
      verse: { ref: 'Lucas 15:7', tx: 'Haverá mais alegria no céu por um pecador que se arrepende.' },
      small: [
        { q: 'Quantas ovelhas o pastor tinha?', o: [['💯', 'Cem'], ['1️⃣0️⃣', 'Dez'], ['2️⃣', 'Duas']] },
        { q: 'O que a mulher perdeu?', o: [['🪙', 'Uma moeda'], ['👟', 'Um sapato'], ['🔑', 'Uma chave']] },
        { q: 'O que o céu faz quando alguém se arrepende?', o: [['🎉', 'Festa'], ['😴', 'Dorme'], ['😠', 'Fica bravo']] }
      ],
      big: [
        { q: 'Por que os fariseus reclamavam?', o: ['Jesus recebia pecadores e comia com eles', 'Jesus estava atrasado', 'Jesus falava baixo', 'Jesus estava cansado'], e: 'Lucas 15:2.' },
        { q: 'O que o pastor fez com a ovelha achada?', o: ['Colocou nos ombros, alegre', 'Deu uma bronca', 'Vendeu', 'Deixou lá'], e: 'Lucas 15:5.' },
        { q: 'Como a mulher procurou a moeda?', o: ['Acendeu a lamparina e varreu a casa', 'Desistiu', 'Pediu outra', 'Chorou'], e: 'Lucas 15:8.' },
        { q: 'Quem é o Bom Pastor?', o: ['Jesus', 'Davi', 'Moisés', 'Pedro'], e: 'João 10:11; Lucas 19:10.' }
      ],
      parents: 'A ovelha perdida também está no Cantinho Kids, numa versão curta. Ponto central: a iniciativa de Deus em buscar e a alegria do céu no arrependimento. Leitura junto: Lucas 15:1-10.'
    },
    {
      id: 'en14', title: 'O pai que correu para o filho', ref: 'Lucas 15:11-32', icon: '🏃',
      recap: 'Na lição passada, Jesus contou as histórias da ovelha e da moeda perdidas.',
      scenes: [
        { art: '👴👦👦', bg: 'campo', text: 'Jesus contou a terceira história: "Um homem tinha dois filhos. O mais novo disse ao pai: Pai, me dê agora a parte da herança que é minha." E o pai repartiu os bens entre eles.', r: 'Lucas 15:11-12' },
        { art: '👦💰🛤️🌆', bg: 'cidade', text: '"Poucos dias depois, o filho mais novo juntou tudo e foi para um país distante. Lá ele gastou todo o dinheiro, vivendo de qualquer jeito."', r: 'Lucas 15:13' },
        { art: '👦😩🐖🌾', bg: 'campo', text: '"Quando acabou tudo, veio uma grande fome naquele país. Ele foi trabalhar cuidando de porcos, e queria comer até a comida dos porcos, mas ninguém dava nada a ele."', r: 'Lucas 15:14-16' },
        { art: '👦💭🏠', bg: 'campo', fx: 'luz', text: '"Então ele caiu em si e pensou: Na casa do meu pai, até os empregados têm comida de sobra, e eu aqui morrendo de fome! Vou voltar e dizer: Pai, pequei contra o céu e contra ti. Não mereço ser chamado teu filho. Me trate como um dos teus empregados."', r: 'Lucas 15:17-19' },
        { art: '👴👀🏃💛', bg: 'campo', fx: 'coracoes', text: '"Ele ainda estava longe quando o pai o viu. O pai teve compaixão, correu, abraçou o filho e o beijou!"', r: 'Lucas 15:20' },
        { art: '👴🧥💍👟', bg: 'campo', fx: 'brilho', text: '"O filho começou: Pai, pequei... Mas o pai disse aos empregados: Depressa! Tragam a melhor roupa e vistam nele. Coloquem um anel no dedo e sandálias nos pés!"', r: 'Lucas 15:21-22' },
        { art: '🎉🍖🎶', bg: 'campo', fx: 'brilho', text: '"Façamos uma festa, porque este meu filho estava morto e voltou a viver; estava perdido e foi achado!" E começaram a festejar.', r: 'Lucas 15:23-24' },
        { art: '👦😠🎶', bg: 'campo', text: '"O filho mais velho voltou do campo, ouviu a música e ficou com raiva. Não quis entrar: Eu te sirvo há tantos anos e nunca ganhei nem um cabrito para festejar com os meus amigos!"', r: 'Lucas 15:25-30' },
        { art: '👴💬👦💛', bg: 'campo', fx: 'coracoes', text: '"O pai saiu e disse: Filho, você está sempre comigo, e tudo o que é meu é seu. Mas era preciso festejar, porque este seu irmão estava perdido e foi achado."', r: 'Lucas 15:28, 31-32' }
      ],
      god: 'Deus é um Pai que espera, corre, abraça e perdoa completamente quem volta para Ele.',
      jesus: 'Os dois filhos estavam longe do pai: um longe de casa, outro longe dentro de casa, com o coração duro. Jesus contou essa história para os pecadores e para os fariseus. Ele é o caminho de volta para o Pai: "Ninguém vem ao Pai senão por mim" (João 14:6). Em Jesus, Deus corre para nos abraçar.',
      verse: { ref: 'Lucas 15:24', tx: 'Porque este meu filho estava morto, e reviveu; tinha-se perdido, e foi achado.' },
      small: [
        { q: 'O que o filho mais novo fez com o dinheiro?', o: [['💸', 'Gastou tudo'], ['🏦', 'Guardou'], ['🎁', 'Deu ao pai']] },
        { q: 'O que o pai fez quando viu o filho voltando?', o: [['🏃', 'Correu e abraçou'], ['😠', 'Ficou bravo'], ['🚪', 'Fechou a porta']] },
        { q: 'O que o pai deu ao filho?', o: [['💍', 'Roupa, anel e sandálias'], ['🧹', 'Uma vassoura'], ['🚫', 'Nada']] }
      ],
      big: [
        { q: 'Que trabalho o filho arrumou no país distante?', o: ['Cuidar de porcos', 'Ser rei', 'Ser pescador', 'Ser soldado'], e: 'Lucas 15:15.' },
        { q: 'O que o filho planejou dizer ao pai?', o: ['"Pequei contra o céu e contra ti"', '"Me dê mais dinheiro"', '"Estou rico"', 'Nada'], e: 'Lucas 15:18.' },
        { q: 'Por que o filho mais velho ficou com raiva?', o: ['Achou injusta a festa para o irmão', 'Estava doente', 'Perdeu as ovelhas', 'Não gostava de música'], e: 'Lucas 15:28-30.' },
        { q: 'Para quem Jesus contou essa história?', o: ['Para pecadores e fariseus', 'Só para crianças', 'Para os romanos', 'Para os anjos'], e: 'Lucas 15:1-3.' }
      ],
      parents: 'Encerramento do arco do ensino. A "vida dissoluta" (15:13, 30) foi resumida como "vivendo de qualquer jeito". Atenção ao filho mais velho: a parábola termina sem dizer se ele entrou, um convite aos "religiosos". Leitura junto: Lucas 15:11-32.'
    }
  ]
};
