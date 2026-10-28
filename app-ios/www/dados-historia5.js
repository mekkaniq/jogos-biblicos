/* A Grande História da Bíblia — Arco 5: Jó, a fé no sofrimento */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.jo = {
  id: 'jo', n: 5, name: 'Jó: a fé no sofrimento', sub: 'Quando coisas ruins acontecem com quem ama a Deus', ref: 'Jó', icon: '🌪️', scene: 'deserto',
  intro: 'O livro de Jó provavelmente aconteceu no tempo dos patriarcas, como Abraão e Jacó. Ele conta a história de um homem bom que sofreu muito sem saber por quê. É um livro que nos ajuda quando a vida dói, e nos mostra que Deus é grande, sábio e bom, mesmo quando não entendemos.',
  lessons: [
    {
      id: 'o1', title: 'Jó, um homem íntegro', ref: 'Jó 1:1-12', icon: '🙏',
      recap: 'No arco passado, terminamos o livro de Gênesis com José. Agora vamos conhecer um homem que viveu mais ou menos no tempo dos patriarcas.',
      scenes: [
        { art: '🏜️🧔', bg: 'deserto', text: 'Na terra de Uz, morava um homem chamado Jó. A Bíblia diz que ele era íntegro e reto, temia a Deus e se afastava do mal.', r: 'Jó 1:1' },
        { art: '👨‍👩‍👧‍👦🐑🐪', bg: 'campo', text: 'Jó tinha sete filhos e três filhas. Tinha também milhares de ovelhas, camelos, bois e jumentas, e muitos servos. Ele era o homem mais importante de todo o Oriente.', r: 'Jó 1:2-3' },
        { art: '🎉👨‍👩‍👧‍👦', bg: 'cidade', fx: 'brilho', text: 'Os filhos de Jó costumavam fazer festas, cada um no seu dia, e convidavam as irmãs para comer e beber juntos.', r: 'Jó 1:4' },
        { art: '🧔🔥🙏', bg: 'aurora', fx: 'luz', text: 'Depois das festas, Jó se levantava cedo e oferecia sacrifícios a Deus por cada filho, pensando: "Talvez eles tenham pecado no coração." Jó fazia isso sempre. Ele orava pela família.', r: 'Jó 1:5' },
        { art: '✨✨☁️', bg: 'aurora', fx: 'brilho', text: 'Então a Bíblia nos mostra uma cena no céu, que Jó não viu: um dia, os anjos vieram se apresentar diante do Senhor. E Satanás, o acusador, veio também.', r: 'Jó 1:6' },
        { art: '✨💬', bg: 'aurora', fx: 'luz', text: 'O Senhor disse: "Você reparou no meu servo Jó? Não há ninguém na terra como ele: íntegro, reto, que teme a Deus e se afasta do mal."', r: 'Jó 1:8' },
        { art: '😈💬', bg: 'noite', text: 'Satanás acusou: "Jó só serve a Deus por interesse! O Senhor protege tudo o que ele tem. Tire tudo dele, e ele vai amaldiçoar o Senhor!"', r: 'Jó 1:9-11' },
        { art: '✨⚖️', bg: 'aurora', fx: 'luz', text: 'O Senhor permitiu que Satanás tocasse nas coisas de Jó, mas colocou um limite: "Nele mesmo, não toque." Satanás só pode ir até onde Deus deixa.', r: 'Jó 1:12' },
        { art: '❓💛', bg: 'aurora', text: 'A grande pergunta do livro é: será que alguém ama a Deus só por quem Ele é, e não pelo que Ele dá? Vamos ver o que Jó fez.', r: 'Jó 1:9' }
      ],
      god: 'Deus é soberano até sobre o mal: nada acontece sem a sua permissão, e Ele coloca limites.',
      jesus: 'Satanás é chamado de acusador, e ele acusou Jó diante de Deus. Mas a Bíblia diz que nós temos um Advogado junto ao Pai: Jesus Cristo, o Justo (1 João 2:1). Quando o inimigo nos acusa, Jesus nos defende, porque Ele pagou pelos nossos pecados.',
      verse: { ref: 'Jó 1:1', tx: 'Havia um homem na terra de Uz, cujo nome era Jó; e era este homem íntegro, reto e temente a Deus e desviava-se do mal.' },
      small: [
        { q: 'Como era Jó?', o: [['🙏', 'Amava a Deus'], ['😈', 'Era mau'], ['😴', 'Só dormia']] },
        { q: 'O que Jó fazia pelos filhos?', o: [['🙏', 'Orava por eles'], ['🙈', 'Não ligava'], ['🎮', 'Jogava videogame']] },
        { q: 'Quem colocou um limite para Satanás?', o: [['✨', 'Deus'], ['🦸', 'Um super-herói'], ['🐶', 'Um cachorro']] }
      ],
      big: [
        { q: 'Onde Jó morava?', o: ['Na terra de Uz', 'No Egito', 'Em Jerusalém', 'Em Babel'], e: 'Jó 1:1.' },
        { q: 'Quantos filhos Jó tinha?', o: ['Sete filhos e três filhas', 'Doze filhos', 'Um filho', 'Nenhum'], e: 'Jó 1:2.' },
        { q: 'Do que Satanás acusou Jó?', o: ['De servir a Deus só por interesse', 'De roubar', 'De mentir', 'De ser preguiçoso'], e: 'Jó 1:9-11.' },
        { q: 'O que essa cena do céu nos ensina?', o: ['Satanás só vai até onde Deus deixa', 'Satanás é mais forte que Deus', 'Deus não sabe o que acontece', 'Deus não liga para Jó'], e: 'Jó 1:12; 2:6.' }
      ],
      parents: 'Ponto central: a soberania de Deus inclui limites ao mal. A cena celestial é vista pelo leitor, não por Jó. Evite dar à criança a ideia de que Deus "aposta" com Satanás; o foco é que Deus confia na fé verdadeira de Jó e mantém o controle. Leitura junto: Jó 1:1-12.'
    },
    {
      id: 'o2', title: 'Jó perde tudo', ref: 'Jó 1:13 – 2:13', icon: '💔',
      recap: 'Na lição passada, Satanás acusou Jó de amar a Deus só por interesse, e Deus permitiu que ele fosse provado.',
      scenes: [
        { art: '🏃💬😱', bg: 'campo', text: 'Num só dia, chegaram mensageiros, um atrás do outro. "Ladrões levaram os bois e as jumentas!" "Caiu fogo do céu e queimou as ovelhas!" "Levaram os camelos!"', r: 'Jó 1:13-17' },
        { art: '🏠💨😭', bg: 'noite', fx: 'vento', text: 'E chegou a pior notícia: um vento muito forte derrubou a casa onde os filhos de Jó estavam reunidos, e todos eles morreram.', r: 'Jó 1:18-19' },
        { art: '🧔💔', bg: 'noite', text: 'Jó rasgou a sua roupa e rapou a cabeça, como as pessoas faziam quando estavam de luto. Ele estava com uma dor enorme.', r: 'Jó 1:20' },
        { art: '🧔🙇✨', bg: 'aurora', fx: 'luz', text: 'Então Jó se ajoelhou com o rosto no chão e adorou a Deus: "Nu eu saí do ventre da minha mãe, e nu voltarei. O Senhor deu, e o Senhor tomou: bendito seja o nome do Senhor."', r: 'Jó 1:20-21' },
        { art: '✅💛', bg: 'aurora', fx: 'brilho', text: 'A Bíblia diz: em tudo isso, Jó não pecou e não culpou a Deus de nada errado. Satanás estava errado: Jó amava a Deus de verdade.', r: 'Jó 1:22' },
        { art: '😈🩹', bg: 'deserto', text: 'Satanás acusou de novo, e Deus permitiu que ele tocasse no corpo de Jó, mas não na sua vida. Jó ficou cheio de feridas doloridas, da cabeça aos pés.', r: 'Jó 2:3-7' },
        { art: '👩💬🧔', bg: 'deserto', text: 'A esposa de Jó, também muito triste, disse: "Você ainda continua firme? Amaldiçoe a Deus e morra!" Jó respondeu: "Você fala como uma tola. Vamos aceitar o bem de Deus e não aceitar o mal?" E Jó não pecou com os lábios.', r: 'Jó 2:9-10' },
        { art: '🧔🧔🧔', bg: 'deserto', text: 'Três amigos de Jó, Elifaz, Bildade e Zofar, souberam e vieram consolá-lo. De longe, nem reconheceram Jó, de tão machucado. Choraram alto e rasgaram as roupas.', r: 'Jó 2:11-12' },
        { art: '🤫7️⃣', bg: 'noite', fx: 'estrelas', text: 'Os amigos se sentaram no chão com Jó por sete dias e sete noites, sem dizer nada, porque viam que a dor dele era muito grande. Às vezes, estar junto em silêncio é o melhor jeito de consolar.', r: 'Jó 2:13' }
      ],
      god: 'Deus continua sendo digno de adoração, mesmo quando perdemos o que amamos.',
      jesus: 'Jó sofreu muito sem ter feito nada para merecer aquilo. Jesus também sofreu sem nenhuma culpa, e foi muito mais longe: Ele sofreu no nosso lugar. Por isso, quando sofremos, Jesus entende a nossa dor, porque Ele também passou por ela (Hebreus 4:15).',
      verse: { ref: 'Jó 1:21', tx: 'O Senhor o deu, e o Senhor o tomou: bendito seja o nome do Senhor.' },
      small: [
        { q: 'Como Jó ficou quando perdeu tudo?', o: [['💔', 'Muito triste'], ['😂', 'Rindo'], ['😴', 'Com sono']] },
        { q: 'O que Jó fez mesmo triste?', o: [['🙇', 'Adorou a Deus'], ['😠', 'Xingou Deus'], ['🏃', 'Fugiu']] },
        { q: 'O que os amigos fizeram primeiro?', o: [['🤫', 'Ficaram juntos em silêncio'], ['🎉', 'Fizeram festa'], ['📺', 'Viram TV']] }
      ],
      big: [
        { q: 'O que Jó disse depois de perder tudo?', o: ['"O Senhor deu, o Senhor tomou: bendito seja"', '"Deus é injusto"', '"Vou embora"', '"Não acredito mais"'], e: 'Jó 1:21.' },
        { q: 'O que Jó respondeu à esposa?', o: ['Vamos aceitar o bem e não o mal?', 'Você tem razão', 'Vou amaldiçoar a Deus', 'Nada'], e: 'Jó 2:10.' },
        { q: 'Quanto tempo os amigos ficaram em silêncio?', o: ['Sete dias e sete noites', 'Uma hora', 'Um mês', 'Três dias'], e: 'Jó 2:13.' },
        { q: 'Satanás estava certo sobre Jó?', o: ['Não, Jó amava a Deus de verdade', 'Sim', 'Ninguém sabe', 'Mais ou menos'], e: 'Jó 1:22; 2:10.' }
      ],
      parents: 'Atenção: a morte dos filhos de Jó foi dita sem detalhes. Se a criança já perdeu alguém, esta lição pode tocar fundo; acolha. Mostre que chorar e ficar triste não é pecado (Jó rasgou as roupas e também adorou). Leitura junto: Jó 1:20-22 e 2:11-13.'
    },
    {
      id: 'o3', title: 'Eu sei que o meu Redentor vive', ref: 'Jó 3 – 31', icon: '💬',
      recap: 'Na lição passada, Jó perdeu tudo, mas adorou a Deus, e três amigos vieram ficar com ele.',
      scenes: [
        { art: '🧔😭', bg: 'noite', text: 'Depois dos sete dias, Jó falou. E ele abriu o coração, com muita sinceridade: estava tão triste que desejou nunca ter nascido. A Bíblia não esconde que pessoas de fé também sentem dores fortes.', r: 'Jó 3:1-3, 11' },
        { art: '🧔💬👉', bg: 'deserto', text: 'Então os amigos começaram a falar. Elifaz disse: "Quem é inocente e sofre? Deus castiga quem faz o mal. Você deve ter pecado!"', r: 'Jó 4:7-8' },
        { art: '🧔🧔👉👉', bg: 'deserto', text: 'Bildade e Zofar disseram a mesma coisa, de jeitos diferentes: "Se você fosse bom, Deus não deixaria isso acontecer. Confesse o seu pecado!" Eles achavam que todo sofrimento era castigo.', r: 'Jó 8:3-6; 11:13-15' },
        { art: '🧔✋', bg: 'deserto', text: 'Mas Jó sabia que não tinha feito nada para merecer aquilo. Ele dizia: "Vocês são consoladores que só pioram as coisas!" Os amigos começaram bem, em silêncio, mas depois machucaram com palavras.', r: 'Jó 16:2; 13:4' },
        { art: '🧔❓☁️', bg: 'noite', text: 'Jó também fez muitas perguntas a Deus: "Por quê? Por que eu? Onde o Senhor está?" Ele queria falar diretamente com Deus e entender.', r: 'Jó 23:3-4, 8-9' },
        { art: '🧔✨💛', bg: 'aurora', fx: 'luz', text: 'Mas, no meio da dor, Jó disse uma das frases mais lindas da Bíblia: "Eu sei que o meu Redentor vive, e que no fim se levantará sobre a terra. E, depois que a minha pele for destruída, ainda em carne verei a Deus!"', r: 'Jó 19:25-26' },
        { art: '🧔⛏️💎', bg: 'monte', text: 'Jó falou também sobre a sabedoria: as pessoas cavam a terra para achar ouro e pedras preciosas, mas a verdadeira sabedoria só Deus tem. "O temor do Senhor é a sabedoria."', r: 'Jó 28:1-2, 12, 28' },
        { art: '🧔📜✅', bg: 'deserto', text: 'No fim, Jó contou como tinha vivido: ajudava os pobres, os órfãos e as viúvas, era honesto e não confiava no dinheiro. E pediu que Deus o respondesse.', r: 'Jó 29:12-16; 31:24-25, 35' },
        { art: '🤐', bg: 'noite', text: 'Os três amigos pararam de falar. Eles não convenceram Jó, porque estavam errados: nem todo sofrimento é castigo por um pecado.', r: 'Jó 32:1' }
      ],
      god: 'Nem todo sofrimento é castigo. Podemos levar as nossas perguntas sinceras a Deus.',
      jesus: 'Jó disse: "Eu sei que o meu Redentor vive!" Esse Redentor é Jesus. Ele veio, morreu e ressuscitou, e vive para sempre! E por causa dele, como Jó disse, um dia nós também vamos ressuscitar e ver a Deus com os nossos próprios olhos (1 Coríntios 15:20-22).',
      verse: { ref: 'Jó 19:25', tx: 'Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.' },
      small: [
        { q: 'O que os amigos diziam a Jó?', o: [['👉', 'Que a culpa era dele'], ['🤗', 'Que o amavam'], ['🎁', 'Que tinham presentes']] },
        { q: 'O que Jó disse que sabia?', o: [['💛', 'Que o Redentor vive'], ['🍕', 'Que pizza é boa'], ['🌧️', 'Que ia chover']] },
        { q: 'Todo sofrimento é castigo?', o: [['❌', 'Não'], ['✅', 'Sim, sempre'], ['🤷', 'Não sei']] }
      ],
      big: [
        { q: 'Quais eram os nomes dos três amigos?', o: ['Elifaz, Bildade e Zofar', 'Pedro, Tiago e João', 'Sem, Cam e Jafé', 'Sadraque, Mesaque e Abede-Nego'], e: 'Jó 2:11.' },
        { q: 'Qual era o erro dos amigos?', o: ['Achar que todo sofrimento era castigo', 'Ficar em silêncio', 'Chorar com Jó', 'Visitar Jó'], e: 'João 9:1-3: Jesus também corrigiu essa ideia.' },
        { q: 'O que Jó disse sobre o seu Redentor?', o: ['Que Ele vive e se levantará sobre a terra', 'Que estava morto', 'Que não existia', 'Que era um dos amigos'], e: 'Jó 19:25.' },
        { q: 'Onde está a verdadeira sabedoria, segundo Jó 28?', o: ['No temor do Senhor', 'No ouro', 'Nas minas', 'Nos amigos'], e: 'Jó 28:28.' }
      ],
      parents: 'Os capítulos 3 a 31 são longos diálogos poéticos; o app resume as ideias principais. Ponto central: o erro da "teologia da retribuição" dos amigos (Jó 42:7 confirma que eles falaram errado) e a esperança de Jó 19:25. Jesus corrige a mesma ideia em João 9:1-3. Leitura junto: Jó 19:23-27.'
    },
    {
      id: 'o4', title: 'Eliú fala', ref: 'Jó 32 – 37', icon: '🌩️',
      recap: 'Na lição passada, os amigos acusaram Jó, mas ele disse: "Eu sei que o meu Redentor vive."',
      scenes: [
        { art: '👦👂', bg: 'deserto', text: 'Havia um moço mais novo ouvindo toda a conversa: Eliú. Ele esperou os mais velhos falarem, por respeito.', r: 'Jó 32:2-6' },
        { art: '👦😠', bg: 'deserto', text: 'Eliú ficou incomodado com os três amigos, porque acusavam Jó sem ter razão. E também com Jó, porque às vezes ele falava como se fosse mais justo que Deus.', r: 'Jó 32:2-3' },
        { art: '👦💬✨', bg: 'aurora', fx: 'luz', text: 'Eliú disse: "Não é a idade que dá sabedoria, é o Espírito de Deus." E começou a falar com cuidado.', r: 'Jó 32:8-9' },
        { art: '💭🌙', bg: 'noite', fx: 'estrelas', text: '"Deus fala com as pessoas de muitos jeitos, até em sonhos de noite, e às vezes pela dor, para nos ensinar e nos afastar do mal."', r: 'Jó 33:14-19' },
        { art: '⚖️✨', bg: 'aurora', text: '"Longe de Deus fazer o mal! O Todo-Poderoso nunca é injusto. Ele vê todos os caminhos das pessoas."', r: 'Jó 34:10-12, 21' },
        { art: '🌧️⚡☁️', bg: 'mar', fx: 'chuva', text: 'Eliú falou da grandeza de Deus na natureza: "Ele junta as gotas de água e faz a chuva. Quem entende como Ele espalha as nuvens e faz os trovões?"', r: 'Jó 36:26-29' },
        { art: '❄️🌬️', bg: 'monte', fx: 'vento', text: '"Ele diz à neve: caia sobre a terra! O gelo e o vento obedecem a Ele." Deus é tão grande que não conseguimos entender tudo o que Ele faz.', r: 'Jó 37:5-6, 10' },
        { art: '🌪️👀', bg: 'deserto', fx: 'vento', text: 'Enquanto Eliú falava, uma tempestade começou a se formar ao longe. Algo muito maior estava chegando...', r: 'Jó 37:1-2, 22; 38:1' }
      ],
      god: 'Deus é grande demais para ser entendido por inteiro, e Ele é sempre justo.',
      jesus: 'Eliú disse que Deus fala de muitos jeitos. Hebreus 1:1-2 diz que Deus falou muitas vezes e de muitas maneiras, mas nestes últimos dias nos falou pelo seu Filho, Jesus. Se queremos saber como Deus é, olhamos para Jesus.',
      verse: { ref: 'Jó 36:26', tx: 'Eis que Deus é grande, e nós não o compreendemos.' },
      small: [
        { q: 'Quem era Eliú?', o: [['👦', 'Um moço mais novo'], ['👑', 'Um rei'], ['🐑', 'Uma ovelha']] },
        { q: 'Quem manda na chuva e na neve?', o: [['✨', 'Deus'], ['☃️', 'O boneco de neve'], ['🌂', 'O guarda-chuva']] },
        { q: 'O que estava chegando no fim?', o: [['🌪️', 'Uma tempestade'], ['🎪', 'Um circo'], ['🚌', 'Um ônibus']] }
      ],
      big: [
        { q: 'Por que Eliú esperou para falar?', o: ['Por respeito aos mais velhos', 'Porque estava dormindo', 'Porque tinha medo', 'Porque não sabia falar'], e: 'Jó 32:4, 6.' },
        { q: 'O que Eliú disse que dá sabedoria?', o: ['O Espírito de Deus', 'A idade', 'O dinheiro', 'Os livros'], e: 'Jó 32:8.' },
        { q: 'Por quais jeitos Eliú disse que Deus fala?', o: ['Por sonhos e até pela dor', 'Só por cartas', 'Só pelo rádio', 'Deus não fala'], e: 'Jó 33:14-19.' },
        { q: 'O que Eliú ensinou sobre Deus?', o: ['Que Ele é grande e nunca é injusto', 'Que Ele é pequeno', 'Que Ele esquece', 'Que Ele faz o mal'], e: 'Jó 34:10, 12.' }
      ],
      parents: 'Eliú prepara a fala de Deus. Ele corrige tanto os amigos quanto Jó, e destaca que Deus pode usar o sofrimento para ensinar (Jó 33:19; Hebreus 12:10-11). Leitura junto: Jó 37:1-13.'
    },
    {
      id: 'o5', title: 'Deus responde no redemoinho', ref: 'Jó 38 – 41', icon: '🌍',
      recap: 'Na lição passada, Eliú falou da grandeza de Deus, e uma tempestade se aproximava.',
      scenes: [
        { art: '🌪️✨', bg: 'deserto', fx: 'vento', text: 'Então o Senhor respondeu a Jó, falando do meio de um redemoinho, uma tempestade enorme! Jó tinha pedido para falar com Deus, e Deus veio.', r: 'Jó 38:1' },
        { art: '🌍❓', bg: 'aurora', fx: 'luz', text: 'Deus perguntou: "Onde você estava quando eu lancei os alicerces da terra? Conte, se você sabe! Quem decidiu o tamanho dela?"', r: 'Jó 38:4-5' },
        { art: '⭐🎶', bg: 'noite', fx: 'estrelas', text: '"Quando as estrelas da manhã cantavam juntas, e todos os anjos gritavam de alegria, onde você estava?"', r: 'Jó 38:7' },
        { art: '🌊🚧', bg: 'mar', fx: 'ondas', text: '"Quem colocou limites para o mar e disse: até aqui você pode vir, e não mais; aqui param as suas ondas orgulhosas?"', r: 'Jó 38:8-11' },
        { art: '❄️🌧️⚡', bg: 'monte', fx: 'chuva', text: '"Você já entrou nos depósitos da neve? Sabe por onde o raio vai? Quem dá chuva até para o deserto onde ninguém mora?"', r: 'Jó 38:22, 25-27, 35' },
        { art: '✨🌌', bg: 'noite', fx: 'estrelas', text: '"Você pode amarrar as estrelas das Plêiades ou soltar as do Órion? Você manda nas constelações?"', r: 'Jó 38:31-33' },
        { art: '🦁🦅🐐🐴', bg: 'campo', text: 'E Deus falou dos animais: "Quem dá comida aos filhotes de leão e de corvo? Quem ensina a águia a voar alto e fazer o ninho nas rochas? Quem deu força ao cavalo?"', r: 'Jó 38:39-41; 39:19, 27' },
        { art: '🦛🐊', bg: 'mar', fx: 'ondas', text: 'Deus mostrou dois animais enormes e fortíssimos, o Beemote e o Leviatã, que nenhum homem consegue dominar. Se não conseguimos com eles, imagine com quem os criou!', r: 'Jó 40:15-19; 41:1-10' },
        { art: '🙇💛', bg: 'aurora', fx: 'brilho', text: 'Deus não explicou a Jó por que ele sofreu. Mas mostrou algo maior: "Eu sou Deus. Eu cuido do universo inteiro, das estrelas até os filhotes de corvo. Você pode confiar em mim."', r: 'Jó 40:1-2; 42:1-2' }
      ],
      god: 'Deus governa o universo inteiro com sabedoria. Mesmo sem entender tudo, podemos confiar nele.',
      jesus: 'Deus mostrou a Jó que manda no mar e nas tempestades. Muito tempo depois, os discípulos viram Jesus mandar no vento e no mar, e perguntaram: "Quem é este, que até o vento e o mar lhe obedecem?" (Marcos 4:41). Jesus é o mesmo Deus que falou com Jó do redemoinho!',
      verse: { ref: 'Jó 38:4', tx: 'Onde estavas tu, quando eu lançava os fundamentos da terra?' },
      small: [
        { q: 'De onde Deus falou com Jó?', o: [['🌪️', 'De um redemoinho'], ['📞', 'Pelo telefone'], ['📺', 'Pela TV']] },
        { q: 'Quem dá comida aos filhotes de leão?', o: [['✨', 'Deus'], ['🧑‍🍳', 'Um cozinheiro'], ['🐒', 'Um macaco']] },
        { q: 'Quem colocou limite para o mar?', o: [['✨', 'Deus'], ['🏖️', 'O salva-vidas'], ['🐟', 'Os peixes']] }
      ],
      big: [
        { q: 'Qual foi a primeira pergunta de Deus a Jó?', o: ['"Onde estavas quando lancei os fundamentos da terra?"', '"Por que você pecou?"', '"Onde estão seus amigos?"', '"Você está bem?"'], e: 'Jó 38:4.' },
        { q: 'Quem cantava quando Deus criou a terra?', o: ['As estrelas da manhã e os anjos', 'Os amigos de Jó', 'Os passarinhos', 'Ninguém'], e: 'Jó 38:7.' },
        { q: 'Quais animais enormes Deus mostrou?', o: ['O Beemote e o Leviatã', 'O leão e o urso', 'A baleia e o tubarão', 'O dragão e o unicórnio'], e: 'Jó 40 e 41.' },
        { q: 'Deus explicou a Jó por que ele sofreu?', o: ['Não, mas mostrou que é digno de confiança', 'Sim, contou tudo', 'Disse que era castigo', 'Disse que foi sem querer'], e: 'A resposta de Deus foi Ele mesmo.' }
      ],
      parents: 'Ponto central: Deus não "explica" o sofrimento a Jó; Ele se revela. A criação mostra sabedoria e cuidado (Jó 38:41). Ótimo para olhar o céu à noite juntos. Beemote e Leviatã são criaturas descritas poeticamente; não é preciso identificar espécies. Leitura junto: Jó 38:1-11.'
    },
    {
      id: 'o6', title: 'Jó vê a Deus', ref: 'Jó 42', icon: '🌅',
      recap: 'Na lição passada, Deus falou com Jó do meio de um redemoinho e mostrou a sua grandeza.',
      scenes: [
        { art: '🧔🙇', bg: 'aurora', text: 'Jó respondeu ao Senhor com humildade: "Eu sei que tudo podes, e nenhum dos teus planos pode ser impedido. Eu falei de coisas que não entendia."', r: 'Jó 42:1-3' },
        { art: '👂➡️👀', bg: 'aurora', fx: 'luz', text: '"Antes, eu só tinha ouvido falar de ti. Mas agora os meus olhos te veem." Jó conheceu a Deus de um jeito novo, mais profundo, por causa daquele sofrimento.', r: 'Jó 42:5' },
        { art: '🧔💧', bg: 'aurora', text: 'Jó se arrependeu das palavras apressadas que tinha dito e se humilhou diante de Deus.', r: 'Jó 42:6' },
        { art: '✨💬🧔🧔🧔', bg: 'deserto', fx: 'luz', text: 'Depois, o Senhor falou com Elifaz: "Estou bravo com você e com os seus dois amigos, porque vocês não falaram de mim o que é certo, como o meu servo Jó falou."', r: 'Jó 42:7' },
        { art: '🧔🙏🧔🧔🧔', bg: 'aurora', fx: 'coracoes', text: 'Deus mandou que eles oferecessem um sacrifício e pedissem a Jó para orar por eles. E Jó orou pelos amigos que tinham sido tão duros com ele! Ele perdoou.', r: 'Jó 42:8-9' },
        { art: '🐑🐑🐪🐪', bg: 'campo', fx: 'brilho', text: 'Quando Jó orou pelos amigos, o Senhor mudou a sorte dele e deu a Jó o dobro de tudo o que ele tinha antes!', r: 'Jó 42:10, 12' },
        { art: '👨‍👩‍👧‍👦🤗', bg: 'cidade', fx: 'coracoes', text: 'Os irmãos, as irmãs e os conhecidos vieram comer com Jó e consolá-lo, e cada um trouxe um presente.', r: 'Jó 42:11' },
        { art: '👦👦👧👧👧', bg: 'aurora', fx: 'brilho', text: 'Deus deu a Jó mais sete filhos e três filhas. As filhas foram as moças mais bonitas da terra, e Jó deu herança a elas também, junto com os irmãos.', r: 'Jó 42:13-15' },
        { art: '👴🌅', bg: 'aurora', fx: 'brilho', text: 'Jó viveu mais cento e quarenta anos e viu os netos e bisnetos. O sofrimento não foi o fim da história de Jó, e não é o fim da história de quem confia em Deus.', r: 'Jó 42:16-17; Tiago 5:11' }
      ],
      god: 'Deus é cheio de misericórdia. O sofrimento pode nos levar a conhecê-lo melhor, e Ele restaura.',
      jesus: 'Jó orou pelos amigos que o machucaram. Jesus orou pelos que o crucificavam: "Pai, perdoa-lhes" (Lucas 23:34), e hoje Ele vive para orar por nós (Romanos 8:34). Depois do sofrimento de Jó veio a restauração; depois da cruz de Jesus veio a ressurreição, e um dia Ele vai restaurar todas as coisas.',
      verse: { ref: 'Jó 42:2', tx: 'Bem sei eu que tudo podes, e nenhum dos teus propósitos pode ser impedido.' },
      small: [
        { q: 'Por quem Jó orou no fim?', o: [['🙏', 'Pelos amigos'], ['🍦', 'Por sorvete'], ['🚗', 'Por um carro']] },
        { q: 'Quanto Deus devolveu a Jó?', o: [['2️⃣', 'O dobro'], ['0️⃣', 'Nada'], ['½', 'A metade']] },
        { q: 'O sofrimento foi o fim da história de Jó?', o: [['❌', 'Não'], ['✅', 'Sim'], ['🤷', 'Talvez']] }
      ],
      big: [
        { q: 'O que Jó disse que mudou nele?', o: ['"Antes ouvia falar, agora te vejo"', '"Agora sou rico"', '"Agora não preciso de Deus"', '"Agora entendo tudo"'], e: 'Jó 42:5.' },
        { q: 'Por que Deus ficou bravo com os amigos?', o: ['Não falaram o que era certo sobre Ele', 'Porque visitaram Jó', 'Porque ficaram em silêncio', 'Porque eram ricos'], e: 'Jó 42:7.' },
        { q: 'Quando Deus mudou a sorte de Jó?', o: ['Quando ele orou pelos amigos', 'Quando ficou bravo', 'Quando fugiu', 'Quando dormiu'], e: 'Jó 42:10.' },
        { q: 'O que Tiago 5:11 diz sobre Jó?', o: ['Que o Senhor é cheio de misericórdia', 'Que Jó era mau', 'Que Jó nunca existiu', 'Que Jó não teve paciência'], e: 'Tiago 5:11: ouvistes da paciência de Jó.' }
      ],
      parents: 'Ponto central: Jó não recebe todas as respostas, mas recebe Deus (Jó 42:5). A restauração em dobro não é uma "fórmula" de prosperidade; ela aponta para a esperança final de restauração em Cristo (Apocalipse 21:4). Leitura junto: Jó 42:1-17.'
    }
  ]
};
