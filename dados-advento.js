/* Edição de Natal — Calendário do Advento (29/11 a 25/12). Uma porta por dia, que abre à meia-noite do horário do aparelho.
   Lições no mesmo formato das histórias do Kids (cenas, perguntas para Pequeninos e Leitores, figurinha).
   Regras: sem imagem de Jesus nem de anjos (só luz e estrelas); toda lição aponta para Jesus; versículo à vista.
   Em cada pergunta a PRIMEIRA opção é a certa (o app embaralha na hora de mostrar).
   TEXTOS PARA REVISÃO DO PASTOR (Rev. Wellington). Citações entre aspas: conferir palavra por palavra na ACF. */
window.ADVENTO_DATA = {
  // m = mês, d = dia; story = id da lição (adv* são novas; natal* já existem em dados-natal.js)
  // talk = pergunta para conversar em família; learn = frase do "Hoje aprendi" para compartilhar
  days: [
    { m: 11, d: 29, story: 'adv1', talk: 'Que promessa você já recebeu de alguém e que foi cumprida? Deus sempre cumpre as dele!', learn: 'Desde o começo, Deus prometeu um Salvador que venceria o mal.' },
    { m: 11, d: 30, story: 'adv2', talk: 'Quem são as famílias que você gostaria que conhecessem Jesus? Vamos orar por elas?', learn: 'Deus prometeu abençoar todas as famílias da terra, e essa bênção chega por Jesus.' },
    { m: 12, d: 1, story: 'adv3', talk: 'Quando vocês olharem para as estrelas hoje, lembrem: Deus cuida até das estrelas e cumpre o que promete.', learn: 'Deus anunciou uma estrela e um Rei que viria de Israel: Jesus.' },
    { m: 12, d: 2, story: 'adv4', talk: 'Como seria um rei que nunca deixa de ser bom? Jesus é assim!', learn: 'Deus prometeu a Davi um Rei que reinaria para sempre: Jesus.' },
    { m: 12, d: 3, story: 'adv5', talk: 'Em que momentos você gosta de saber que Deus está com você?', learn: 'Emanuel quer dizer "Deus conosco". Em Jesus, Deus veio ficar perto de nós.' },
    { m: 12, d: 4, story: 'adv6', talk: 'Qual dos nomes do menino você mais gostou: Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade ou Príncipe da Paz? Por quê?', learn: 'Jesus é a grande luz que brilha para quem está nas trevas.' },
    { m: 12, d: 5, story: 'adv7', talk: 'Já viu uma plantinha nascer de um toco de árvore cortada? Deus faz nascer esperança onde parecia não ter mais nada.', learn: 'Quando parecia não haver mais esperança, Deus fez nascer Jesus da família de Davi.' },
    { m: 12, d: 6, story: 'adv8', talk: 'Deus escolheu uma cidade pequena. Você já se sentiu pequeno? Deus também cuida de você!', learn: 'Deus escolheu a pequena Belém para o nascimento do Rei Jesus.' },
    { m: 12, d: 7, story: 'adv9', talk: 'Como a nossa família pode preparar o coração para o Natal?', learn: 'Deus mandou alguém preparar o caminho para Jesus chegar.' },
    { m: 12, d: 8, story: 'adv10', talk: 'Esperar é difícil! O que vocês estão esperando? Deus nunca se esquece das promessas dele.', learn: 'Mesmo depois de 400 anos de silêncio, Deus não esqueceu: Jesus é o Sol da justiça.' },
    { m: 12, d: 9, story: 'adv11', talk: 'Zacarias orou por muitos anos. Pelo que vocês têm orado em família?', learn: 'Deus ouve as orações e estava preparando a chegada de Jesus.' },
    { m: 12, d: 10, story: 'adv12', talk: 'Existe algo que parece impossível para vocês? Vamos entregar isso a Deus em oração.', learn: 'Para Deus nada é impossível: Ele cumpre tudo o que promete.' },
    { m: 12, d: 11, story: 'natal1', talk: 'Maria disse "sim" para Deus. Como podemos dizer "sim" para Deus no nosso dia a dia?', learn: 'Maria confiou na promessa de Deus: o seu Filho se chamaria Jesus.' },
    { m: 12, d: 12, story: 'adv13', talk: 'Quem você pode visitar ou chamar nesta semana para levar uma alegria?', learn: 'Antes mesmo de nascer, Jesus já trazia alegria.' },
    { m: 12, d: 13, story: 'adv14', talk: 'Pelo que vocês querem agradecer a Deus hoje? Façam uma oração de louvor, como Maria.', learn: 'Maria louvou a Deus, o seu Salvador, que olha para os humildes.' },
    { m: 12, d: 14, story: 'adv15', talk: 'Vocês sabem o que o seu nome quer dizer? Peça para alguém contar a história do seu nome.', learn: 'Deus cumpriu a promessa e mandou João, que prepararia o caminho de Jesus.' },
    { m: 12, d: 15, story: 'adv16', talk: 'O que ajuda você quando está com medo do escuro? Jesus é a luz que vem do alto.', learn: 'Jesus é a luz que veio do alto para nos guiar no caminho da paz.' },
    { m: 12, d: 16, story: 'natal2', talk: 'José obedeceu a Deus mesmo sem entender tudo. Quando é difícil obedecer?', learn: 'José confiou em Deus e obedeceu ao que Ele mandou.' },
    { m: 12, d: 17, story: 'adv17', talk: 'Quem cuida de você todos os dias? Agradeça a Deus por essa pessoa e, se puder, dê um abraço nela hoje.', learn: 'Deus deu a Jesus um pai aqui na terra, José, que cuidou dele com amor.' },
    { m: 12, d: 18, story: 'natal3', talk: 'Você já fez uma viagem longa? Como foi esperar para chegar?', learn: 'Até a ordem de um imperador serviu ao plano de Deus: Jesus nasceria em Belém.' },
    { m: 12, d: 19, story: 'adv18', talk: 'O que quer dizer ser filho de Deus? Como é bom fazer parte da família dele!', learn: 'No tempo certo, Deus enviou seu Filho para nos fazer filhos de Deus.' },
    { m: 12, d: 20, story: 'adv19', talk: 'Antes de você nascer, você já existia? E Jesus? Ele sempre existiu, porque Ele é Deus!', learn: 'Jesus já existia antes de nascer em Belém: Ele é Deus desde sempre.' },
    { m: 12, d: 21, story: 'adv20', talk: 'Jesus foi bebê, criança e adulto como nós. Do que você mais gosta em saber que Ele sabe como é ser criança?', learn: 'O Filho de Deus se fez gente como nós e veio morar entre nós.' },
    { m: 12, d: 22, story: 'adv21', talk: 'Como podemos ser humildes e servir uns aos outros, como Jesus fez?', learn: 'Jesus, o Rei, se fez pequeno por amor a nós.' },
    { m: 12, d: 23, story: 'adv22', talk: 'Qual é o seu pão ou comida preferida? Jesus é ainda melhor: Ele é o pão que sustenta o nosso coração.', learn: 'Jesus nasceu em Belém, a "casa do pão", e Ele é o Pão da vida.' },
    { m: 12, d: 24, story: 'natal4', talk: 'Por que o Rei dos reis nasceu num lugar tão simples?', learn: 'O Salvador nasceu num lugar humilde, para ficar perto de todos nós.' },
    { m: 12, d: 25, story: 'natal5', talk: 'Feliz Natal! Qual é o maior presente que Deus nos deu? Agradeçam juntos por Jesus.', learn: 'Hoje é dia de alegria: nasceu o Salvador, que é Cristo, o Senhor!' }
  ],
  stories: [
    {
      id: 'adv1', natal: 1, name: 'A promessa no jardim', icon: '🌿', sticker: '🌿', scene: 'jardim', ref: 'Gênesis 3:15',
      scenes: [
        { art: '🌳🌸', bg: 'jardim', fx: 'brilho', text: 'No começo, Deus fez um jardim lindo e colocou ali Adão e Eva. Tudo era muito bom, e eles viviam perto de Deus.', r: 'Gênesis 2:8' },
        { art: '🐍🍎', bg: 'jardim', text: 'Mas a serpente enganou Eva, e eles desobedeceram a Deus. O pecado entrou no mundo, e Adão e Eva ficaram com medo e se esconderam.', r: 'Gênesis 3:1-8' },
        { art: '✨💛', bg: 'aurora', fx: 'luz', text: 'Mesmo assim, Deus não desistiu deles. Ele fez uma promessa: um dia nasceria um descendente da mulher que esmagaria a cabeça da serpente.', r: 'Gênesis 3:15' },
        { art: '⭐✝️', bg: 'aurora', fx: 'estrelas', text: 'Essa foi a primeira promessa do Natal! Muitos anos depois, Jesus nasceu para vencer o pecado e o mal. Deus sempre cumpre o que promete.', r: 'Gálatas 4:4' }
      ],
      small: [
        { q: 'Onde Adão e Eva moravam?', o: [['🌳', 'Num jardim'], ['🏰', 'Num castelo'], ['🚀', 'Num foguete']] },
        { q: 'Depois que eles desobedeceram, Deus desistiu deles?', o: [['💛', 'Não, fez uma promessa'], ['😠', 'Sim, desistiu'], ['😴', 'Foi dormir']] },
        { q: 'Quem venceu a serpente e o mal?', o: [['⭐', 'Jesus'], ['🦁', 'Um leão'], ['🐑', 'A Nine']] }
      ],
      big: [
        { q: 'O que Deus prometeu logo depois que Adão e Eva pecaram?', o: ['Que alguém esmagaria a cabeça da serpente', 'Que eles voltariam ao jardim no dia seguinte', 'Que a serpente seria a rainha', 'Que nunca mais choveria'], e: '"Esta te ferirá a cabeça, e tu lhe ferirás o calcanhar" (Gênesis 3:15).' },
        { q: 'Quem é o descendente prometido que vence o mal?', o: ['Jesus', 'Abraão', 'Moisés', 'Davi'], e: 'Jesus venceu o pecado e o mal na cruz e ressuscitou (1 João 3:8).' },
        { q: 'O que essa promessa ensina sobre Deus?', o: ['Que Ele não desiste do seu povo', 'Que Ele se esquece das promessas', 'Que Ele só ama quem nunca erra', 'Que Ele está longe de nós'], e: 'Mesmo depois do pecado, Deus prometeu salvação (Gênesis 3:15).' }
      ]
    },
    {
      id: 'adv2', natal: 1, name: 'Abraão, bênção para todas as famílias', icon: '⭐', sticker: '⭐', scene: 'deserto', ref: 'Gênesis 12:1-3',
      scenes: [
        { art: '⛺🐪', bg: 'deserto', text: 'Deus chamou um homem chamado Abraão e disse: "Sai da tua terra e vai para a terra que eu te mostrarei." E Abraão obedeceu.', r: 'Gênesis 12:1, 4' },
        { art: '💛👨‍👩‍👧', bg: 'aurora', fx: 'luz', text: 'Deus fez uma promessa enorme: por meio da família de Abraão, todas as famílias da terra seriam abençoadas.', r: 'Gênesis 12:3' },
        { art: '🌌⭐', bg: 'noite', fx: 'estrelas', text: 'Abraão olhou para o céu cheio de estrelas, e Deus disse que a sua família seria assim, grande demais para contar. Abraão creu em Deus.', r: 'Gênesis 15:5-6' },
        { art: '🌍✝️', bg: 'aurora', fx: 'coracoes', text: 'Jesus nasceu da família de Abraão. Por meio de Jesus, a bênção de Deus chega a pessoas do mundo inteiro, e também à nossa família!', r: 'Gálatas 3:8, 14' }
      ],
      small: [
        { q: 'Quem Deus chamou para ir a uma nova terra?', o: [['⛺', 'Abraão'], ['🐟', 'Jonas'], ['🦁', 'Daniel']] },
        { q: 'Abraão olhou para o céu e viu muitas...', o: [['⭐', 'Estrelas'], ['🎈', 'Bexigas'], ['🦋', 'Borboletas']] },
        { q: 'Quem traz a bênção de Deus para todas as famílias?', o: [['✝️', 'Jesus'], ['💰', 'O dinheiro'], ['👑', 'Um rei qualquer']] }
      ],
      big: [
        { q: 'O que Deus prometeu a Abraão?', o: ['Que nele seriam benditas todas as famílias da terra', 'Que ele seria o homem mais rico do mundo', 'Que ele nunca ficaria velho', 'Que ele seria rei do Egito'], e: '"Em ti serão benditas todas as famílias da terra" (Gênesis 12:3).' },
        { q: 'Como Abraão respondeu ao chamado de Deus?', o: ['Obedeceu e partiu', 'Fingiu que não ouviu', 'Pediu dinheiro antes', 'Ficou em casa'], e: '"Assim partiu Abrão, como o Senhor lhe tinha dito" (Gênesis 12:4).' },
        { q: 'Como a promessa feita a Abraão chega até nós?', o: ['Por meio de Jesus, descendente de Abraão', 'Por meio de uma herança em ouro', 'Por meio de um castelo', 'Ela não chega até nós'], e: 'A bênção de Abraão chega a todos os povos em Cristo Jesus (Gálatas 3:14).' }
      ]
    },
    {
      id: 'adv3', natal: 1, name: 'A estrela de Jacó', icon: '🌟', sticker: '🌟', scene: 'noite', ref: 'Números 24:17',
      scenes: [
        { art: '⛺⛺⛺', bg: 'deserto', text: 'O povo de Deus estava acampado no deserto. Um rei inimigo chamou um homem chamado Balaão para falar mal do povo de Deus.', r: 'Números 22:4-6' },
        { art: '🗣️💛', bg: 'monte', fx: 'brilho', text: 'Mas Deus não deixou! Toda vez que Balaão abria a boca, só conseguia dizer as bênçãos que Deus colocava nela.', r: 'Números 23:11-12' },
        { art: '🌟👑', bg: 'noite', fx: 'estrelas', text: 'E Deus fez Balaão anunciar algo maravilhoso: "Uma estrela procederá de Jacó e um cetro subirá de Israel." Um Rei viria do povo de Deus!', r: 'Números 24:17' },
        { art: '⭐✝️', bg: 'noite', fx: 'luz', text: 'Muitos anos depois, uma estrela guiou os magos até o menino Jesus. Ele é o Rei prometido, e nenhum plano contra o povo de Deus pode impedir as promessas dele.', r: 'Mateus 2:2' }
      ],
      small: [
        { q: 'O que Balaão anunciou que viria de Jacó?', o: [['🌟', 'Uma estrela'], ['🌧️', 'Uma chuva'], ['🐸', 'Um sapo']] },
        { q: 'Deus deixou Balaão falar mal do seu povo?', o: [['🙅', 'Não deixou'], ['👍', 'Deixou'], ['🤷', 'Não ligou']] },
        { q: 'Quem é o Rei que a estrela anunciava?', o: [['⭐', 'Jesus'], ['👑', 'O rei inimigo'], ['🐪', 'Um camelo']] }
      ],
      big: [
        { q: 'O que aconteceu quando Balaão tentou falar mal do povo de Deus?', o: ['Só conseguiu abençoar', 'Conseguiu amaldiçoar', 'Ficou rico', 'Foi embora calado'], e: 'Deus transformou a maldição em bênção (Números 23:11-12; Deuteronômio 23:5).' },
        { q: 'O que procederia de Jacó, segundo a profecia?', o: ['Uma estrela e um cetro', 'Um exército de gigantes', 'Uma grande muralha', 'Uma arca de ouro'], e: '"Uma estrela procederá de Jacó e um cetro subirá de Israel" (Números 24:17).' },
        { q: 'Que estrela, muitos anos depois, levou pessoas até Jesus?', o: ['A estrela que guiou os magos', 'A estrela de Davi na bandeira', 'O sol da manhã', 'A estrela cadente de Abraão'], e: '"Vimos a sua estrela no oriente, e viemos a adorá-lo" (Mateus 2:2).' }
      ]
    },
    {
      id: 'adv4', natal: 1, name: 'Um rei para sempre', icon: '👑', sticker: '👑', scene: 'palacio', ref: '2 Samuel 7:12-13',
      scenes: [
        { art: '🐑🎶', bg: 'campo', text: 'Davi era um pastorzinho que cuidava de ovelhas e tocava harpa. Deus o escolheu para ser rei de Israel.', r: '1 Samuel 16:11-13' },
        { art: '🏛️💭', bg: 'palacio', text: 'Já rei, Davi queria construir uma casa para Deus. Mas Deus disse que Ele é quem faria uma "casa" para Davi: uma família de reis.', r: '2 Samuel 7:2, 11' },
        { art: '👑✨', bg: 'aurora', fx: 'luz', text: 'Deus prometeu: "Confirmarei o trono do seu reino para sempre." Da família de Davi viria um Rei que nunca deixaria de reinar.', r: '2 Samuel 7:13' },
        { art: '⭐👑', bg: 'aurora', fx: 'estrelas', text: 'Esse Rei é Jesus! O anjo disse a Maria que Deus daria a Jesus o trono de Davi, e que o seu reino não teria fim.', r: 'Lucas 1:32-33' }
      ],
      small: [
        { q: 'O que Davi fazia quando era menino?', o: [['🐑', 'Cuidava de ovelhas'], ['🚗', 'Dirigia carros'], ['🎮', 'Jogava videogame']] },
        { q: 'Até quando vai durar o reino de Jesus?', o: [['♾️', 'Para sempre'], ['⏰', 'Só um dia'], ['📅', 'Uma semana']] },
        { q: 'Jesus é da família de qual rei?', o: [['👑', 'Do rei Davi'], ['🦁', 'Do rei leão'], ['🃏', 'Do rei do baralho']] }
      ],
      big: [
        { q: 'O que Deus prometeu à família de Davi?', o: ['Um trono para sempre', 'Muito ouro e prata', 'Que nunca haveria guerras', 'Um palácio no Egito'], e: '"Confirmarei o trono do seu reino para sempre" (2 Samuel 7:13).' },
        { q: 'Quem cumpre essa promessa de um Rei eterno?', o: ['Jesus, o Filho de Davi', 'Salomão', 'Saul', 'Herodes'], e: '"O Senhor Deus lhe dará o trono de Davi, seu pai... e o seu reino não terá fim" (Lucas 1:32-33).' },
        { q: 'Antes de ser rei, Davi era...', o: ['Pastor de ovelhas', 'Pescador', 'Carpinteiro', 'Cobrador de impostos'], e: 'Deus escolheu Davi quando ele cuidava das ovelhas do pai (1 Samuel 16:11-13).' }
      ]
    },
    {
      id: 'adv5', natal: 1, name: 'O menino chamado Emanuel', icon: '💛', sticker: '💛', scene: 'cidade', ref: 'Isaías 7:14',
      scenes: [
        { art: '📜🕯️', bg: 'cidade', text: 'Isaías era um profeta, alguém que levava ao povo as mensagens de Deus. Naquele tempo, o povo e o rei estavam com muito medo dos inimigos.', r: 'Isaías 7:1-2' },
        { art: '✨💛', bg: 'aurora', fx: 'luz', text: 'Deus mandou Isaías dar um sinal: "Eis que a virgem conceberá, e dará à luz um filho, e chamará o seu nome Emanuel."', r: 'Isaías 7:14' },
        { art: '💛🤝', bg: 'aurora', fx: 'coracoes', text: 'Emanuel quer dizer "Deus conosco". Deus estava dizendo: "Não tenham medo, eu vou estar com vocês."', r: 'Mateus 1:23' },
        { art: '⭐🏘️', bg: 'noite', fx: 'estrelas', text: 'Essa promessa se cumpriu quando Jesus nasceu da virgem Maria. Em Jesus, Deus veio estar conosco de verdade, e Ele prometeu estar conosco todos os dias.', r: 'Mateus 28:20' }
      ],
      small: [
        { q: 'O que quer dizer Emanuel?', o: [['💛', 'Deus conosco'], ['🍞', 'Pão quentinho'], ['🌧️', 'Dia de chuva']] },
        { q: 'Quem levava as mensagens de Deus ao povo?', o: [['📜', 'O profeta Isaías'], ['📮', 'O carteiro'], ['🐦', 'Um passarinho']] },
        { q: 'Jesus prometeu estar com a gente...', o: [['♾️', 'Todos os dias'], ['🎂', 'Só no aniversário'], ['🌙', 'Só de noite']] }
      ],
      big: [
        { q: 'Qual foi o sinal que Deus deu por meio de Isaías?', o: ['Uma virgem teria um filho chamado Emanuel', 'O sol pararia no céu', 'Choveria fogo', 'Um rio secaria'], e: '"Eis que a virgem conceberá, e dará à luz um filho, e chamará o seu nome Emanuel" (Isaías 7:14).' },
        { q: 'O que significa o nome Emanuel?', o: ['Deus conosco', 'Rei forte', 'Filho da paz', 'Luz do dia'], e: 'Mateus explica: "Emanuel, que traduzido é: Deus conosco" (Mateus 1:23).' },
        { q: 'Em quem essa promessa se cumpriu?', o: ['Em Jesus, nascido de Maria', 'Em João Batista', 'Em Isaías', 'No rei Acaz'], e: 'Mateus 1:22-23 mostra que o nascimento de Jesus cumpriu Isaías 7:14.' }
      ]
    },
    {
      id: 'adv6', natal: 1, name: 'Maravilhoso, Conselheiro', icon: '🕯️', sticker: '🕯️', scene: 'noite', ref: 'Isaías 9:2, 6',
      scenes: [
        { art: '🌑😟', bg: 'noite', text: 'Houve um tempo em que o povo de Deus estava triste, como quem anda no escuro sem enxergar o caminho.', r: 'Isaías 9:1' },
        { art: '🕯️✨', bg: 'aurora', fx: 'luz', text: 'Mas Deus prometeu: "O povo que andava em trevas viu uma grande luz." A tristeza não ia durar para sempre!', r: 'Isaías 9:2' },
        { art: '⭐💛', bg: 'aurora', fx: 'estrelas', text: '"Porque um menino nos nasceu, um filho se nos deu." E os nomes dele seriam: Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade, Príncipe da Paz.', r: 'Isaías 9:6' },
        { art: '🕊️✝️', bg: 'aurora', fx: 'coracoes', text: 'Esse menino é Jesus! Ele disse: "Eu sou a luz do mundo." Quem segue Jesus não anda nas trevas.', r: 'João 8:12' }
      ],
      small: [
        { q: 'O povo que andava no escuro viu uma grande...', o: [['🕯️', 'Luz'], ['🐘', 'Elefante'], ['🌊', 'Onda']] },
        { q: 'Qual destes é um nome do menino prometido?', o: [['🕊️', 'Príncipe da Paz'], ['🦖', 'Dinossauro'], ['🍕', 'Pizzaiolo']] },
        { q: 'Quem é a luz do mundo?', o: [['✝️', 'Jesus'], ['💡', 'Uma lâmpada'], ['🔦', 'Uma lanterna']] }
      ]
      ,
      big: [
        { q: 'O que o povo que andava em trevas viu?', o: ['Uma grande luz', 'Um grande exército', 'Uma grande cidade', 'Um grande mar'], e: '"O povo que andava em trevas viu uma grande luz" (Isaías 9:2).' },
        { q: 'Qual destes NÃO é um dos nomes do menino em Isaías 9:6?', o: ['Rei do Egito', 'Maravilhoso', 'Deus Forte', 'Príncipe da Paz'], e: 'Os nomes são: Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade, Príncipe da Paz (Isaías 9:6).' },
        { q: 'O que Jesus disse sobre si mesmo que lembra Isaías 9?', o: ['"Eu sou a luz do mundo"', '"Eu sou o rei do mar"', '"Eu sou um profeta qualquer"', '"Eu sou o dono do templo"'], e: '"Eu sou a luz do mundo; quem me segue não andará em trevas" (João 8:12).' }
      ]
    },
    {
      id: 'adv7', natal: 1, name: 'Um renovo do tronco de Jessé', icon: '🌱', sticker: '🌱', scene: 'campo', ref: 'Isaías 11:1-2',
      scenes: [
        { art: '🪵🪓', bg: 'campo', text: 'Imagine uma árvore grande que foi cortada. Sobrou só o tronco no chão. Parece que acabou tudo, não é?', r: 'Isaías 11:1' },
        { art: '👑😢', bg: 'cidade', text: 'A família do rei Davi era como essa árvore. Os reis desobedeceram a Deus, o reino caiu, e o povo pensou que nunca mais teria um rei da família de Davi.', r: '2 Reis 25:9-11' },
        { art: '🌱✨', bg: 'aurora', fx: 'luz', text: 'Mas Deus prometeu: "Brotará um rebento do tronco de Jessé." Jessé era o pai de Davi. Do tronco cortado ia nascer um broto novo, cheio do Espírito de Deus!', r: 'Isaías 11:1-2' },
        { art: '🌿⭐', bg: 'aurora', fx: 'estrelas', text: 'Esse broto é Jesus, que nasceu da família de Davi. Quando tudo parecia perdido, Deus fez nascer a maior esperança do mundo.', r: 'Romanos 15:12' }
      ],
      small: [
        { q: 'O que nasceu do tronco cortado?', o: [['🌱', 'Um broto novo'], ['🍄', 'Um cogumelo'], ['🐛', 'Uma lagarta']] },
        { q: 'Jessé era o pai de quem?', o: [['👑', 'Do rei Davi'], ['🐟', 'De Jonas'], ['⛵', 'De Noé']] },
        { q: 'Quem é o broto que Deus prometeu?', o: [['✝️', 'Jesus'], ['🌳', 'Uma árvore'], ['🌻', 'Um girassol']] }
      ],
      big: [
        { q: 'O que o tronco cortado representa?', o: ['A família de Davi, que parecia acabada', 'Uma floresta do Egito', 'O templo de Salomão', 'A arca de Noé'], e: 'O reino de Davi caiu, mas Deus prometeu um novo Rei da sua família (Isaías 11:1).' },
        { q: 'O que estaria sobre o rebento prometido?', o: ['O Espírito do Senhor', 'Uma coroa de ouro', 'Um manto de rei', 'Uma nuvem de chuva'], e: '"E repousará sobre ele o Espírito do Senhor" (Isaías 11:2).' },
        { q: 'Quem é a raiz de Jessé que traz esperança a todos os povos?', o: ['Jesus', 'Salomão', 'Ezequias', 'Josias'], e: 'Paulo cita Isaías: "Nele os gentios esperarão" (Romanos 15:12).' }
      ]
    },
    {
      id: 'adv8', natal: 1, name: 'Belém, pequena mas escolhida', icon: '🏘️', sticker: '🏘️', scene: 'campo', ref: 'Miqueias 5:2',
      scenes: [
        { art: '🏘️🌾', bg: 'campo', text: 'Belém era uma cidade bem pequena, cercada de campos de trigo e de pastores com suas ovelhas. Lá tinha nascido o rei Davi.', r: '1 Samuel 16:1' },
        { art: '📜✨', bg: 'aurora', fx: 'luz', text: 'Uns 700 anos antes de Jesus nascer, Deus falou por meio do profeta Miqueias: "E tu, Belém Efrata, posto que pequena entre os milhares de Judá, de ti me sairá o que governará em Israel."', r: 'Miqueias 5:2' },
        { art: '♾️⭐', bg: 'noite', fx: 'estrelas', text: 'E Miqueias disse algo surpreendente: as "saídas" desse Rei são desde a eternidade. Ele já existia antes de nascer!', r: 'Miqueias 5:2' },
        { art: '🏘️💛', bg: 'aurora', fx: 'coracoes', text: 'E foi em Belém que Jesus nasceu, exatamente como Deus disse. Deus gosta de usar coisas pequenas para fazer coisas grandes.', r: 'Mateus 2:5-6' }
      ],
      small: [
        { q: 'Belém era uma cidade...', o: [['🏘️', 'Pequena'], ['🏙️', 'Gigante'], ['🏝️', 'No meio do mar']] },
        { q: 'Quem nasceu em Belém, como Deus prometeu?', o: [['⭐', 'Jesus'], ['🦊', 'Uma raposa'], ['🐋', 'Uma baleia']] },
        { q: 'Deus usa coisas pequenas para fazer coisas...', o: [['🌟', 'Grandes'], ['🙈', 'Feias'], ['😴', 'Chatas']] }
      ],
      big: [
        { q: 'Qual profeta anunciou que o Rei nasceria em Belém?', o: ['Miqueias', 'Jonas', 'Elias', 'Daniel'], e: '"E tu, Belém Efrata... de ti me sairá o que governará em Israel" (Miqueias 5:2).' },
        { q: 'Que outro rei famoso era de Belém?', o: ['Davi', 'Saul', 'Salomão', 'Herodes'], e: 'Deus mandou Samuel a Belém para ungir Davi, filho de Jessé (1 Samuel 16:1).' },
        { q: 'Quando os magos perguntaram onde nasceria o Cristo, o que os sacerdotes responderam?', o: ['Em Belém da Judeia', 'Em Jerusalém', 'Em Nazaré', 'No Egito'], e: 'Eles citaram Miqueias: "Em Belém da Judeia" (Mateus 2:5-6).' }
      ]
    },
    {
      id: 'adv9', natal: 1, name: 'Uma voz no deserto', icon: '🛤️', sticker: '🛤️', scene: 'deserto', ref: 'Isaías 40:3',
      scenes: [
        { art: '👑🛤️', bg: 'deserto', text: 'Antigamente, quando um rei ia visitar uma cidade, mandavam alguém na frente para arrumar a estrada: tirar pedras, encher buracos e avisar que o rei estava chegando.', r: 'Isaías 40:3-4' },
        { art: '📜🗣️', bg: 'aurora', fx: 'luz', text: 'Deus prometeu pelo profeta Isaías: "Voz do que clama no deserto: Preparai o caminho do Senhor." Alguém viria preparar a chegada do próprio Senhor!', r: 'Isaías 40:3' },
        { art: '🏜️💧', bg: 'deserto', fx: 'brilho', text: 'Essa voz foi João Batista. Ele pregava no deserto e dizia ao povo: "Arrependam-se!", ou seja, voltem o coração para Deus.', r: 'Mateus 3:1-3' },
        { art: '💛✝️', bg: 'aurora', fx: 'coracoes', text: 'João preparou o caminho para Jesus. E no Advento nós também preparamos o coração: pedimos perdão, voltamos para Deus e esperamos Jesus com alegria.', r: 'Lucas 3:4-6' }
      ],
      small: [
        { q: 'Onde a voz clamava?', o: [['🏜️', 'No deserto'], ['🏊', 'Na piscina'], ['🎪', 'No circo']] },
        { q: 'A voz pedia para preparar o caminho de quem?', o: [['👑', 'Do Senhor'], ['🚚', 'Do caminhão'], ['🐌', 'Da lesma']] },
        { q: 'Quem preparou o caminho para Jesus?', o: [['🗣️', 'João Batista'], ['🐑', 'A Nine'], ['🦅', 'Uma águia']] }
      ],
      big: [
        { q: 'O que a voz no deserto dizia?', o: ['Preparai o caminho do Senhor', 'Fugi para as montanhas', 'Construí uma torre', 'Guardai o ouro'], e: '"Voz do que clama no deserto: Preparai o caminho do Senhor" (Isaías 40:3).' },
        { q: 'Quem cumpriu essa profecia?', o: ['João Batista', 'Pedro', 'Elias', 'Isaías'], e: 'Mateus 3:3 diz que João Batista é aquele de quem Isaías falou.' },
        { q: 'Como podemos "preparar o caminho" no nosso coração?', o: ['Voltando o coração para Deus', 'Arrumando a rua de casa', 'Comprando presentes caros', 'Esperando sem pensar em Deus'], e: 'João pregava o arrependimento, para o povo estar pronto para Jesus (Lucas 3:3-4).' }
      ]
    },
    {
      id: 'adv10', natal: 1, name: 'O Sol da justiça', icon: '🌅', sticker: '🌅', scene: 'aurora', ref: 'Malaquias 4:2',
      scenes: [
        { art: '📜🕯️', bg: 'cidade', text: 'Malaquias foi o último profeta do Antigo Testamento. O povo tinha voltado para Jerusalém, mas muitos estavam com o coração frio para Deus.', r: 'Malaquias 1:2' },
        { art: '🌅✨', bg: 'aurora', fx: 'luz', text: 'Mesmo assim, Deus prometeu: "Para vós, que temeis o meu nome, nascerá o sol da justiça, e cura trará nas suas asas."', r: 'Malaquias 4:2' },
        { art: '🤫⏳', bg: 'noite', fx: 'estrelas', text: 'Depois de Malaquias vieram uns 400 anos sem nenhum profeta novo. Será que Deus tinha esquecido? Não! Ele estava preparando tudo.', r: 'Gálatas 4:4' },
        { art: '☀️💛', bg: 'aurora', fx: 'coracoes', text: 'Jesus é o Sol da justiça que nasceu! Ele curou muitos doentes e traz cura para o nosso coração. Deus nunca se esquece das suas promessas.', r: 'Lucas 1:78-79' }
      ],
      small: [
        { q: 'Que sol Deus prometeu que nasceria?', o: [['☀️', 'O Sol da justiça'], ['🌧️', 'Um sol de chuva'], ['🌙', 'Uma lua']] },
        { q: 'Deus esqueceu as promessas dele?', o: [['💛', 'Nunca'], ['😴', 'Esqueceu'], ['🤷', 'Às vezes']] },
        { q: 'Quem trouxe cura para os doentes?', o: [['✝️', 'Jesus'], ['🍬', 'Uma bala'], ['🎈', 'Uma bexiga']] }
      ],
      big: [
        { q: 'O que o Sol da justiça traria nas suas asas?', o: ['Cura', 'Chuva', 'Fogo', 'Ouro'], e: '"Nascerá o sol da justiça, e cura trará nas suas asas" (Malaquias 4:2).' },
        { q: 'Quanto tempo, mais ou menos, passou entre Malaquias e o nascimento de Jesus?', o: ['Uns 400 anos', 'Uns 4 anos', 'Uns 40 dias', 'Uns 4.000 anos'], e: 'Foram cerca de 400 anos sem novos profetas, até João Batista e Jesus.' },
        { q: 'O que esse longo tempo de espera nos ensina?', o: ['Que Deus cumpre no tempo dele', 'Que Deus desistiu do povo', 'Que as promessas eram mentira', 'Que esperar não vale a pena'], e: '"Vindo a plenitude dos tempos, Deus enviou seu Filho" (Gálatas 4:4).' }
      ]
    },
    {
      id: 'adv11', natal: 1, name: 'Zacarias no templo', icon: '🕯️', sticker: '🕯️', scene: 'palacio', ref: 'Lucas 1:5-17',
      scenes: [
        { art: '👴👵', bg: 'cidade', text: 'Zacarias era sacerdote e Isabel era sua esposa. Os dois amavam a Deus e obedeciam a Ele. Mas eram velhinhos e não tinham filhos.', r: 'Lucas 1:5-7' },
        { art: '🕯️💨', bg: 'palacio', fx: 'brilho', text: 'Um dia, Zacarias entrou no templo para queimar o incenso, enquanto o povo orava do lado de fora.', r: 'Lucas 1:8-10' },
        { art: '✨🕯️', bg: 'palacio', fx: 'luz', text: 'De repente, um anjo do Senhor apareceu e disse: "Zacarias, não temas, porque a tua oração foi ouvida, e Isabel, tua mulher, dará à luz um filho, e lhe porás o nome de João."', r: 'Lucas 1:11-13' },
        { art: '🛤️⭐', bg: 'aurora', fx: 'estrelas', text: 'O anjo disse que João seria grande diante de Deus e prepararia o povo para o Senhor. Ele seria a voz no deserto que abriria o caminho para Jesus!', r: 'Lucas 1:15-17' }
      ],
      small: [
        { q: 'Onde Zacarias estava quando o anjo apareceu?', o: [['🏛️', 'No templo'], ['🏖️', 'Na praia'], ['🛒', 'No mercado']] },
        { q: 'Qual seria o nome do bebê?', o: [['👶', 'João'], ['🐻', 'Ursinho'], ['⭐', 'Estrela']] },
        { q: 'Deus ouviu a oração de Zacarias?', o: [['🙏', 'Sim, ouviu'], ['🙉', 'Não ouviu'], ['📵', 'Estava sem sinal']] }
      ],
      big: [
        { q: 'O que o anjo disse a Zacarias logo no começo?', o: ['Não temas, a tua oração foi ouvida', 'Sai daqui agora', 'Esqueça o seu pedido', 'Você vai ficar rico'], e: '"Zacarias, não temas, porque a tua oração foi ouvida" (Lucas 1:13).' },
        { q: 'Que nome o anjo mandou dar ao filho de Zacarias?', o: ['João', 'Zacarias Júnior', 'Elias', 'Samuel'], e: '"E lhe porás o nome de João" (Lucas 1:13).' },
        { q: 'Qual seria a missão de João?', o: ['Preparar o povo para o Senhor', 'Ser rei de Israel', 'Construir um novo templo', 'Ser soldado de Roma'], e: '"Para preparar ao Senhor um povo bem disposto" (Lucas 1:17).' }
      ]
    },
    {
      id: 'adv12', natal: 1, name: 'Isabel espera com fé', icon: '🤫', sticker: '🤫', scene: 'cidade', ref: 'Lucas 1:18-25',
      scenes: [
        { art: '🤔👴', bg: 'palacio', text: 'Zacarias achou difícil acreditar e perguntou ao anjo: "Como saberei isto? Eu sou velho, e minha mulher também."', r: 'Lucas 1:18' },
        { art: '🤫✨', bg: 'palacio', fx: 'luz', text: 'O anjo respondeu que ficaria mudo até o dia em que tudo se cumprisse, porque ele não tinha crido nas palavras de Deus. Era um sinal de que Deus falava sério.', r: 'Lucas 1:19-20' },
        { art: '👵💛', bg: 'cidade', fx: 'coracoes', text: 'E aconteceu como Deus disse: Isabel ficou grávida! Cheia de alegria, ela louvou a Deus, que tinha olhado para ela com bondade.', r: 'Lucas 1:24-25' },
        { art: '🙏⭐', bg: 'aurora', fx: 'estrelas', text: 'Às vezes demoramos para crer, mas Deus continua fiel. "Para Deus nada é impossível!" E Ele estava preparando a chegada de Jesus.', r: 'Lucas 1:37' }
      ],
      small: [
        { q: 'O que aconteceu com Zacarias até o bebê nascer?', o: [['🤫', 'Ficou sem falar'], ['🦘', 'Pulou muito'], ['😴', 'Dormiu sem parar']] },
        { q: 'Isabel ficou feliz com o bebê?', o: [['😊', 'Sim, louvou a Deus'], ['😠', 'Não, ficou brava'], ['🙃', 'Nem ligou']] },
        { q: 'Para Deus existe alguma coisa impossível?', o: [['💛', 'Nada é impossível'], ['🤷', 'Muitas coisas'], ['😟', 'Quase tudo']] }
      ],
      big: [
        { q: 'Por que Zacarias ficou mudo?', o: ['Porque não creu nas palavras do anjo', 'Porque estava doente', 'Porque gritou demais', 'Porque perdeu a voz cantando'], e: '"Porquanto não creste nas minhas palavras, que a seu tempo se hão de cumprir" (Lucas 1:20).' },
        { q: 'O que Isabel fez quando ficou grávida?', o: ['Louvou a Deus pela bondade dele', 'Reclamou da idade', 'Escondeu de todos com medo', 'Foi morar no Egito'], e: '"Assim me fez o Senhor, nos dias em que atentou em mim" (Lucas 1:25).' },
        { q: 'O que essa história ensina sobre as promessas de Deus?', o: ['Deus cumpre o que promete, mesmo quando parece impossível', 'Deus só cumpre se a gente nunca duvidar', 'Deus esquece quem duvida', 'As promessas só valem para os jovens'], e: 'Mesmo com a dúvida de Zacarias, Deus cumpriu a promessa (Lucas 1:20, 57).' }
      ]
    },
    {
      id: 'adv13', natal: 1, name: 'Maria visita Isabel', icon: '🤗', sticker: '🤗', scene: 'campo', ref: 'Lucas 1:39-45',
      scenes: [
        { art: '🚶‍♀️⛰️', bg: 'monte', text: 'Depois da visita do anjo, Maria se apressou e foi até as montanhas da Judeia visitar sua parente Isabel.', r: 'Lucas 1:39-40' },
        { art: '🤗💛', bg: 'cidade', fx: 'coracoes', text: 'Quando Isabel ouviu a saudação de Maria, o bebê João pulou de alegria dentro da barriga dela! E Isabel ficou cheia do Espírito Santo.', r: 'Lucas 1:41' },
        { art: '✨👑', bg: 'aurora', fx: 'luz', text: 'Isabel disse bem alto: "Bendita és tu entre as mulheres, e bendito o fruto do teu ventre!" E chamou Maria de "a mãe do meu Senhor".', r: 'Lucas 1:42-43' },
        { art: '⭐💛', bg: 'aurora', fx: 'estrelas', text: 'Antes mesmo de nascer, Jesus já trazia alegria! O bebê João se alegrou porque o Salvador estava chegando.', r: 'Lucas 1:44-45' }
      ],
      small: [
        { q: 'Quem Maria foi visitar?', o: [['👵', 'Isabel'], ['👑', 'O rei'], ['🐪', 'Os camelos']] },
        { q: 'O que o bebê João fez na barriga de Isabel?', o: [['🦘', 'Pulou de alegria'], ['😴', 'Dormiu'], ['😭', 'Chorou']] },
        { q: 'Quem trazia alegria mesmo antes de nascer?', o: [['⭐', 'Jesus'], ['🍰', 'Um bolo'], ['🎁', 'Um presente']] }
      ],
      big: [
        { q: 'O que aconteceu quando Isabel ouviu a saudação de Maria?', o: ['O bebê saltou no seu ventre', 'Ela desmaiou', 'Ela ficou com medo', 'Começou a chover'], e: '"Ao ouvir Isabel a saudação de Maria, a criancinha saltou no seu ventre" (Lucas 1:41).' },
        { q: 'Como Isabel chamou Maria?', o: ['A mãe do meu Senhor', 'A rainha de Israel', 'A filha de Davi', 'A profetisa'], e: '"E de onde me provém isto a mim, que venha visitar-me a mãe do meu Senhor?" (Lucas 1:43).' },
        { q: 'Por que Isabel disse que Maria era bem-aventurada?', o: ['Porque creu no que Deus disse', 'Porque era rica', 'Porque morava longe', 'Porque era famosa'], e: '"Bem-aventurada a que creu, pois hão de cumprir-se as coisas que da parte do Senhor lhe foram ditas" (Lucas 1:45).' }
      ]
    },
    {
      id: 'adv14', natal: 1, name: 'O cântico de Maria', icon: '🎶', sticker: '🎶', scene: 'aurora', ref: 'Lucas 1:46-55',
      scenes: [
        { art: '🎶💛', bg: 'aurora', fx: 'coracoes', text: 'Na casa de Isabel, Maria cantou uma canção de louvor: "A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus meu Salvador."', r: 'Lucas 1:46-47' },
        { art: '🙏🌾', bg: 'campo', fx: 'brilho', text: 'Maria era uma moça simples, mas Deus olhou para ela com amor. Ela cantou: "Grandes coisas me fez o Poderoso; e santo é seu nome."', r: 'Lucas 1:48-49' },
        { art: '🍞🤲', bg: 'aurora', fx: 'luz', text: 'Maria cantou que Deus cuida dos humildes e dos que têm fome, e que Ele é fiel às promessas que fez a Abraão.', r: 'Lucas 1:52-55' },
        { art: '⭐🎶', bg: 'noite', fx: 'estrelas', text: 'Maria chamou Deus de "meu Salvador". Ela também precisava ser salva, e o bebê que ela esperava era o Salvador prometido: Jesus!', r: 'Lucas 1:47' }
      ],
      small: [
        { q: 'O que Maria fez na casa de Isabel?', o: [['🎶', 'Cantou louvando a Deus'], ['🍳', 'Fez um bolo'], ['💤', 'Tirou uma soneca']] },
        { q: 'Deus olha com amor para os...', o: [['🤲', 'Humildes'], ['😤', 'Orgulhosos'], ['🦖', 'Dinossauros']] },
        { q: 'Quem é o Salvador que Maria esperava?', o: [['⭐', 'Jesus'], ['👮', 'Um guarda'], ['🧙', 'Um mágico']] }
      ],
      big: [
        { q: 'Como começa o cântico de Maria?', o: ['A minha alma engrandece ao Senhor', 'Eu sou a rainha do céu', 'Deus me esqueceu', 'Glória a Davi nas alturas'], e: '"A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus meu Salvador" (Lucas 1:46-47).' },
        { q: 'De quem Maria disse que Deus se lembrou com misericórdia?', o: ['De Abraão e de sua descendência', 'Dos reis de Roma', 'Só dos sacerdotes', 'Dos egípcios'], e: '"Como falou a nossos pais, para com Abraão e a sua posteridade, para sempre" (Lucas 1:55).' },
        { q: 'Como Maria chamou Deus no seu cântico?', o: ['Meu Salvador', 'Meu filho', 'Meu servo', 'Meu rei terreno'], e: 'Maria disse "Deus meu Salvador" (Lucas 1:47): ela também precisava do Salvador.' }
      ]
    },
    {
      id: 'adv15', natal: 1, name: 'Nasce João', icon: '📝', sticker: '📝', scene: 'cidade', ref: 'Lucas 1:57-66',
      scenes: [
        { art: '👶🎉', bg: 'cidade', fx: 'coracoes', text: 'Chegou o dia: Isabel deu à luz um menino! Os vizinhos e parentes se alegraram com ela, porque viram a grande bondade de Deus.', r: 'Lucas 1:57-58' },
        { art: '🤔👨‍👩‍👧', bg: 'cidade', text: 'Todos queriam que o bebê se chamasse Zacarias, como o pai. Mas Isabel disse: "Não, porém será chamado João."', r: 'Lucas 1:59-60' },
        { art: '📝✨', bg: 'aurora', fx: 'luz', text: 'Zacarias, ainda mudo, pediu uma tabuinha e escreveu: "O seu nome é João." Na mesma hora, a boca dele se abriu, e ele louvou a Deus!', r: 'Lucas 1:63-64' },
        { art: '🛤️⭐', bg: 'aurora', fx: 'estrelas', text: 'Todos ficaram admirados e perguntavam: "Quem será este menino?" Ele era João, que ia preparar o caminho para Jesus.', r: 'Lucas 1:65-66' }
      ],
      small: [
        { q: 'Qual foi o nome do bebê de Isabel?', o: [['👶', 'João'], ['🐻', 'Teddy'], ['🌙', 'Lua']] },
        { q: 'Como Zacarias disse o nome, se estava mudo?', o: [['📝', 'Escreveu numa tabuinha'], ['📱', 'Mandou mensagem'], ['📢', 'Gritou']] },
        { q: 'O que Zacarias fez quando voltou a falar?', o: [['🙏', 'Louvou a Deus'], ['😠', 'Reclamou'], ['😂', 'Contou piada']] }
      ],
      big: [
        { q: 'Por que os parentes estranharam o nome João?', o: ['Ninguém na família tinha esse nome', 'Era um nome de rei estrangeiro', 'Era um nome muito comprido', 'Era o nome de um profeta mau'], e: '"Ninguém há na tua parentela que se chame por este nome" (Lucas 1:61).' },
        { q: 'O que Zacarias escreveu na tabuinha?', o: ['O seu nome é João', 'Chamem-no Zacarias', 'Eu não sei o nome', 'Perguntem ao anjo'], e: '"E, pedindo uma tabuinha de escrever, escreveu, dizendo: O seu nome é João" (Lucas 1:63).' },
        { q: 'O que aconteceu logo depois que Zacarias obedeceu?', o: ['Voltou a falar e louvou a Deus', 'Ficou mudo para sempre', 'Foi expulso do templo', 'Esqueceu o que tinha acontecido'], e: '"E logo a boca se lhe abriu, e a língua se lhe soltou; e falava, louvando a Deus" (Lucas 1:64).' }
      ]
    },
    {
      id: 'adv16', natal: 1, name: 'O cântico de Zacarias', icon: '🌄', sticker: '🌄', scene: 'aurora', ref: 'Lucas 1:67-79',
      scenes: [
        { art: '🎶👴', bg: 'cidade', fx: 'brilho', text: 'Cheio do Espírito Santo, Zacarias cantou: "Bendito o Senhor Deus de Israel, porque visitou e remiu o seu povo."', r: 'Lucas 1:67-68' },
        { art: '👑📜', bg: 'palacio', fx: 'luz', text: 'Ele louvou a Deus porque estava enviando o Salvador da casa de Davi, como os profetas tinham prometido havia muito tempo.', r: 'Lucas 1:69-70' },
        { art: '👶🛤️', bg: 'aurora', text: 'Depois Zacarias olhou para o seu bebê e disse: "E tu, ó menino, serás chamado profeta do Altíssimo, porque hás de ir ante a face do Senhor, a preparar os seus caminhos."', r: 'Lucas 1:76' },
        { art: '🌄⭐', bg: 'aurora', fx: 'estrelas', text: 'E terminou falando de Jesus como o sol que nasce: "O oriente do alto nos visitou, para iluminar aos que estão assentados em trevas." Jesus é a nossa luz!', r: 'Lucas 1:78-79' }
      ],
      small: [
        { q: 'O que Zacarias fez cheio do Espírito Santo?', o: [['🎶', 'Cantou louvando a Deus'], ['🏃', 'Saiu correndo'], ['🧹', 'Varreu a casa']] },
        { q: 'João ia preparar o caminho de quem?', o: [['✝️', 'Do Senhor Jesus'], ['🚗', 'De um carro'], ['🐢', 'De uma tartaruga']] },
        { q: 'Jesus é como a luz que...', o: [['🌄', 'Ilumina quem está no escuro'], ['🌑', 'Apaga tudo'], ['🌫️', 'Esconde o caminho']] }
      ],
      big: [
        { q: 'Como começa o cântico de Zacarias?', o: ['Bendito o Senhor Deus de Israel', 'A minha alma engrandece ao Senhor', 'Glória a Deus nas alturas', 'O Senhor é o meu pastor'], e: '"Bendito o Senhor Deus de Israel, porque visitou e remiu o seu povo" (Lucas 1:68).' },
        { q: 'Como Zacarias disse que o seu filho seria chamado?', o: ['Profeta do Altíssimo', 'Rei de Israel', 'Sumo sacerdote', 'Filho de Davi'], e: '"E tu, ó menino, serás chamado profeta do Altíssimo" (Lucas 1:76).' },
        { q: 'O que o "oriente do alto" veio fazer?', o: ['Iluminar os que estão em trevas', 'Trazer chuva para as plantações', 'Vencer os romanos com espadas', 'Construir um palácio'], e: '"Para iluminar aos que estão assentados em trevas e na sombra da morte" (Lucas 1:79).' }
      ]
    },
    {
      id: 'adv17', natal: 1, name: 'José, o pai que cuidou de Jesus', icon: '🪚', sticker: '🪚', scene: 'galileia', ref: 'Mateus 1:24-25; 2:13-15; Lucas 2:51-52',
      scenes: [
        { art: '🪚🏠', bg: 'galileia', text: 'José era carpinteiro em Nazaré. Ele não era o pai biológico de Jesus, porque Jesus é o Filho de Deus. Mas Deus escolheu José para ser o pai de Jesus aqui na terra.', r: 'Mateus 1:18, 20; 13:55' },
        { art: '💛🙏', bg: 'aurora', fx: 'coracoes', text: 'Quando Deus falou com ele em sonho, José obedeceu na hora: recebeu Maria como esposa e deu ao bebê o nome que Deus mandou, Jesus.', r: 'Mateus 1:24-25' },
        { art: '🌙🫏', bg: 'noite', fx: 'estrelas', text: 'Depois que Jesus nasceu, Deus avisou José que o rei Herodes queria fazer mal ao menino. José se levantou de noite, pegou o menino e sua mãe e os levou para o Egito, para protegê-los.', r: 'Mateus 2:13-14' },
        { art: '🪵🌱', bg: 'galileia', fx: 'luz', text: 'Na casa de José, Jesus cresceu obedecendo a seus pais e aprendendo o trabalho de carpinteiro. "Crescia Jesus em sabedoria, e em estatura, e em graça para com Deus e os homens."', r: 'Lucas 2:51-52' }
      ],
      small: [
        { q: 'Qual era o trabalho de José?', o: [['🪚', 'Carpinteiro'], ['🚀', 'Astronauta'], ['🎤', 'Cantor']] },
        { q: 'Quando Deus avisou do perigo, o que José fez?', o: [['🫏', 'Levou a família para longe'], ['😴', 'Voltou a dormir'], ['🙈', 'Fingiu que não ouviu']] },
        { q: 'José cuidou de Jesus com...', o: [['💛', 'Amor'], ['😠', 'Raiva'], ['🥱', 'Preguiça']] }
      ],
      big: [
        { q: 'José era o pai biológico de Jesus?', o: ['Não: Jesus é o Filho de Deus, e José foi o pai que cuidou dele na terra', 'Sim, como qualquer pai', 'José nunca conheceu Jesus', 'José era o avô de Jesus'], e: 'O que foi gerado em Maria "é do Espírito Santo" (Mateus 1:20), e Deus deu José como pai aqui na terra.' },
        { q: 'Para onde José levou Maria e o menino para protegê-los?', o: ['Para o Egito', 'Para Roma', 'Para a Babilônia', 'Para o deserto do Sinai'], e: '"Levantando-se ele, tomou o menino e sua mãe, de noite, e foi para o Egito" (Mateus 2:14).' },
        { q: 'Como Jesus cresceu na casa de José e Maria?', o: ['Em sabedoria, estatura e graça', 'Sem obedecer a ninguém', 'Longe dos pais', 'Sem aprender nada'], e: '"E crescia Jesus em sabedoria, e em estatura, e em graça para com Deus e os homens" (Lucas 2:52).' }
      ]
    },
    {
      id: 'adv18', natal: 1, name: 'No tempo certo', icon: '⏳', sticker: '⏳', scene: 'noite', ref: 'Gálatas 4:4-5',
      scenes: [
        { art: '⏳📜', bg: 'noite', fx: 'estrelas', text: 'Deus fez muitas promessas durante milhares de anos: para Adão e Eva, para Abraão, para Davi e pelos profetas. O povo esperou muito!', r: 'Hebreus 1:1' },
        { art: '⏰✨', bg: 'aurora', fx: 'luz', text: 'E quando chegou o tempo certo, Deus cumpriu: "Mas, vindo a plenitude dos tempos, Deus enviou seu Filho, nascido de mulher."', r: 'Gálatas 4:4' },
        { art: '👨‍👩‍👧💛', bg: 'aurora', fx: 'coracoes', text: 'E por que Deus enviou seu Filho? Para nos resgatar e nos fazer filhos de Deus! Quem crê em Jesus entra na família de Deus.', r: 'Gálatas 4:5; João 1:12' },
        { art: '🙏⭐', bg: 'noite', fx: 'estrelas', text: 'Deus nunca está atrasado. Quando temos que esperar, podemos confiar: o tempo dele é sempre o melhor.', r: 'Eclesiastes 3:11' }
      ],
      small: [
        { q: 'Deus enviou o seu Filho no tempo...', o: [['⏰', 'Certo'], ['🐢', 'Atrasado'], ['❓', 'Errado']] },
        { q: 'Quem crê em Jesus entra na família de...', o: [['💛', 'Deus'], ['🦁', 'Um leão'], ['🏰', 'Um rei de castelo']] },
        { q: 'Deus está sempre atrasado?', o: [['🙅', 'Nunca'], ['😟', 'Sempre'], ['🤷', 'Às vezes']] }
      ],
      big: [
        { q: 'O que Deus fez "vindo a plenitude dos tempos"?', o: ['Enviou seu Filho, nascido de mulher', 'Construiu um novo templo', 'Mandou um dilúvio', 'Escolheu um novo rei em Roma'], e: '"Mas, vindo a plenitude dos tempos, Deus enviou seu Filho, nascido de mulher" (Gálatas 4:4).' },
        { q: 'Para que Deus enviou seu Filho, segundo Gálatas 4:5?', o: ['Para recebermos a adoção de filhos', 'Para sermos famosos', 'Para termos mais leis', 'Para ficarmos ricos'], e: '"A fim de recebermos a adoção de filhos" (Gálatas 4:5).' },
        { q: 'O que a "plenitude dos tempos" nos ensina?', o: ['Deus age no tempo certo', 'Deus faz tudo correndo', 'Deus perdeu a hora', 'O tempo não importa para Deus'], e: 'Depois de séculos de promessas, Deus enviou Jesus no momento que Ele escolheu (Gálatas 4:4).' }
      ]
    },
    {
      id: 'adv19', natal: 1, name: 'No princípio era o Verbo', icon: '📖', sticker: '📖', scene: 'noite', ref: 'João 1:1-5',
      scenes: [
        { art: '🌌✨', bg: 'noite', fx: 'estrelas', text: 'Antes de existir o céu, a terra, as estrelas e as pessoas, já existia Alguém. O apóstolo João o chama de "o Verbo", que quer dizer "a Palavra".', r: 'João 1:1' },
        { art: '📖💛', bg: 'aurora', fx: 'luz', text: '"No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus." O Verbo é Jesus! Ele é Deus e sempre existiu.', r: 'João 1:1-2' },
        { art: '🌍🌳', bg: 'jardim', fx: 'brilho', text: 'Tudo o que existe foi feito por meio dele: as montanhas, os mares, os animais, as estrelas e até você!', r: 'João 1:3' },
        { art: '🕯️⭐', bg: 'noite', fx: 'luz', text: '"Nele estava a vida, e a vida era a luz dos homens." O bebê que nasceu em Belém é o Criador de tudo, que veio trazer luz e vida para nós.', r: 'João 1:4-5' }
      ],
      small: [
        { q: 'Jesus já existia antes de nascer em Belém?', o: [['♾️', 'Sim, sempre existiu'], ['🙅', 'Não existia'], ['🤷', 'Ninguém sabe']] },
        { q: 'Quem fez as estrelas, os mares e os animais?', o: [['✨', 'Deus, por meio de Jesus'], ['🤖', 'Um robô'], ['🧙', 'Um mágico']] },
        { q: 'Jesus é a luz que vence o...', o: [['🌑', 'Escuro'], ['☀️', 'Sol'], ['🌈', 'Arco-íris']] }
      ],
      big: [
        { q: 'Como João começa o seu Evangelho?', o: ['No princípio era o Verbo', 'No princípio criou Deus os céus e a terra', 'Livro da geração de Jesus Cristo', 'Princípio do evangelho de Jesus'], e: '"No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus" (João 1:1).' },
        { q: 'O que João diz sobre o Verbo?', o: ['Que Ele era Deus', 'Que Ele era um anjo', 'Que Ele foi criado depois', 'Que Ele era só um profeta'], e: '"E o Verbo era Deus" (João 1:1).' },
        { q: 'O que foi feito por meio do Verbo?', o: ['Todas as coisas', 'Só os anjos', 'Só o templo', 'Nada'], e: '"Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez" (João 1:3).' }
      ]
    },
    {
      id: 'adv20', natal: 1, name: 'O Verbo se fez carne', icon: '🏕️', sticker: '🏕️', scene: 'aurora', ref: 'João 1:14',
      scenes: [
        { art: '♾️✨', bg: 'noite', fx: 'estrelas', text: 'Ontem vimos que Jesus é Deus e sempre existiu. Hoje vem uma notícia maravilhosa: esse mesmo Jesus se tornou gente como nós!', r: 'João 1:1, 14' },
        { art: '💛🏕️', bg: 'aurora', fx: 'luz', text: '"E o Verbo se fez carne, e habitou entre nós." Habitar é morar. É como se Deus armasse a sua tenda bem no meio do nosso acampamento.', r: 'João 1:14' },
        { art: '🍼🌱', bg: 'galileia', fx: 'brilho', text: 'Jesus foi bebê, aprendeu a andar, a falar e a trabalhar. Sentiu fome, sono e cansaço. Ele sabe como é ser criança e como é ser gente.', r: 'Lucas 2:40; Hebreus 4:15' },
        { art: '✨⭐', bg: 'aurora', fx: 'coracoes', text: 'Mas Jesus nunca deixou de ser Deus. Os discípulos viram a sua glória, "cheio de graça e de verdade". No Natal celebramos isto: Deus veio morar conosco!', r: 'João 1:14' }
      ],
      small: [
        { q: 'Jesus se tornou gente como...', o: [['🧒', 'Nós'], ['🐟', 'Um peixe'], ['🌳', 'Uma árvore']] },
        { q: 'Jesus sentia fome e sono?', o: [['😴', 'Sim, como nós'], ['🙅', 'Nunca'], ['🤖', 'Ele era um robô']] },
        { q: 'No Natal celebramos que Deus veio...', o: [['🏕️', 'Morar conosco'], ['🎢', 'Passear no parque'], ['🛸', 'Voar num disco']] }
      ],
      big: [
        { q: 'O que quer dizer "o Verbo se fez carne"?', o: ['O Filho de Deus se tornou homem de verdade', 'Jesus deixou de ser Deus', 'Jesus era só um espírito', 'Jesus foi só uma ideia'], e: '"E o Verbo se fez carne, e habitou entre nós" (João 1:14).' },
        { q: 'De que Jesus era cheio, segundo João 1:14?', o: ['De graça e de verdade', 'De ouro e prata', 'De medo e dúvida', 'De orgulho'], e: '"...como a glória do unigênito do Pai, cheio de graça e de verdade" (João 1:14).' },
        { q: 'Por que é bom saber que Jesus foi humano como nós?', o: ['Porque Ele entende as nossas fraquezas', 'Porque assim Ele não é Deus', 'Porque Ele precisava de ajuda', 'Não faz diferença'], e: 'Jesus pode "compadecer-se das nossas fraquezas", porque foi tentado em tudo, mas sem pecado (Hebreus 4:15).' }
      ]
    },
    {
      id: 'adv21', natal: 1, name: 'O Rei que se fez pequeno', icon: '🤲', sticker: '🤲', scene: 'palacio', ref: 'Filipenses 2:6-8',
      scenes: [
        { art: '👑✨', bg: 'palacio', fx: 'luz', text: 'Jesus é Deus. Ele tinha toda a glória do céu, mais do que todos os reis e palácios do mundo juntos.', r: 'Filipenses 2:6' },
        { art: '🤲💛', bg: 'aurora', fx: 'coracoes', text: 'Mas, por amor, Ele não se agarrou a essa glória. Ele se esvaziou e tomou a forma de servo, fazendo-se semelhante aos homens.', r: 'Filipenses 2:7' },
        { art: '🌾🐑', bg: 'campo', fx: 'brilho', text: 'O Rei dos reis nasceu num lugar de animais. Depois serviu as pessoas, lavou os pés dos discípulos e foi obediente até a cruz, para nos salvar.', r: 'Filipenses 2:8; João 13:5' },
        { art: '✝️⭐', bg: 'aurora', fx: 'estrelas', text: 'Por isso Deus o exaltou, e um dia todo joelho vai se dobrar diante de Jesus. E Ele nos ensina a servir uns aos outros com humildade.', r: 'Filipenses 2:5, 9-11' }
      ],
      small: [
        { q: 'Jesus, o Rei dos reis, nasceu num...', o: [['🌾', 'Lugar simples'], ['🏰', 'Castelo de ouro'], ['🛳️', 'Navio']] },
        { q: 'Por que Jesus se fez pequeno?', o: [['💛', 'Por amor a nós'], ['😴', 'Por preguiça'], ['🎲', 'Por acaso']] },
        { q: 'Jesus nos ensina a...', o: [['🤲', 'Servir uns aos outros'], ['😤', 'Ser orgulhosos'], ['🙈', 'Não ajudar ninguém']] }
      ],
      big: [
        { q: 'O que Jesus fez, segundo Filipenses 2:7?', o: ['Tomou a forma de servo', 'Deixou de ser Deus para sempre', 'Fez-se rei de Roma', 'Escondeu-se no céu'], e: 'Ele se esvaziou, "tomando a forma de servo, fazendo-se semelhante aos homens" (Filipenses 2:7) — conferir a redação exata na ACF.' },
        { q: 'Até onde foi a obediência de Jesus?', o: ['Até a morte de cruz', 'Até o primeiro problema', 'Até ficar cansado', 'Até os 12 anos'], e: '"Humilhou-se a si mesmo, sendo obediente até à morte, e morte de cruz" (Filipenses 2:8).' },
        { q: 'O que Paulo pede que tenhamos?', o: ['O mesmo sentimento que houve em Cristo Jesus', 'Muito dinheiro guardado', 'Um lugar de honra', 'Medo dos outros'], e: '"De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus" (Filipenses 2:5).' }
      ]
    },
    {
      id: 'adv22', natal: 1, name: 'Belém, a casa do pão', icon: '🍞', sticker: '🍞', scene: 'campo', ref: 'João 6:35',
      scenes: [
        { art: '🌾🏘️', bg: 'campo', fx: 'brilho', text: 'Você sabia que o nome Belém quer dizer "casa do pão"? A cidade ficava cercada de campos de trigo, de onde se fazia o pão.', r: 'Rute 1:22; 2:3' },
        { art: '🍞💛', bg: 'aurora', fx: 'luz', text: 'Deus escolheu a "casa do pão" para Jesus nascer. E o bebê foi deitado numa manjedoura, o cocho onde os animais comiam!', r: 'Lucas 2:7' },
        { art: '🧺🐟', bg: 'mar', fx: 'ondas', text: 'Quando cresceu, Jesus alimentou mais de cinco mil pessoas com cinco pães e dois peixes. E depois explicou que Ele mesmo era um pão ainda melhor.', r: 'João 6:9-11' },
        { art: '🍞⭐', bg: 'aurora', fx: 'coracoes', text: 'Jesus disse: "Eu sou o pão da vida; aquele que vem a mim não terá fome." O pão alimenta o corpo; Jesus alimenta o nosso coração para sempre.', r: 'João 6:35' }
      ],
      small: [
        { q: 'O nome Belém quer dizer...', o: [['🍞', 'Casa do pão'], ['🍕', 'Casa da pizza'], ['🍦', 'Casa do sorvete']] },
        { q: 'Jesus foi deitado numa...', o: [['🌾', 'Manjedoura'], ['🛏️', 'Cama de rei'], ['🛶', 'Canoa']] },
        { q: 'Jesus disse: "Eu sou o pão da..."', o: [['💛', 'Vida'], ['🌙', 'Noite'], ['🥐', 'Padaria']] }
      ],
      big: [
        { q: 'O que significa o nome Belém?', o: ['Casa do pão', 'Cidade do rei', 'Lugar da luz', 'Monte santo'], e: 'Belém (Bet Lechem, em hebraico) quer dizer "casa do pão".' },
        { q: 'O que Jesus disse sobre si mesmo em João 6:35?', o: ['Eu sou o pão da vida', 'Eu sou o bom pastor', 'Eu sou a porta', 'Eu sou a videira'], e: '"Eu sou o pão da vida; aquele que vem a mim não terá fome" (João 6:35).' },
        { q: 'Quantos pães o menino entregou para Jesus multiplicar?', o: ['Cinco pães', 'Dois pães', 'Doze pães', 'Sete pães'], e: 'Eram cinco pães de cevada e dois peixinhos (João 6:9).' }
      ]
    }
  ]
};
