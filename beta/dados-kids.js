/* Área Kids — histórias com a Lumi. Cada história: cenas narradas, perguntas para Pequeninos (figuras) e Leitores (texto) e uma figurinha.
   Em cada pergunta a PRIMEIRA opção é a certa (o app embaralha na hora de mostrar).
   fx da cena (opcional): chuva, estrelas, brilho, ondas, coracoes, luz, vento */
window.KIDS_DATA = {
  stories: [
    {
      id: 'criacao', name: 'A Criação', icon: '🌍', sticker: '🌍', scene: 'jardim', ref: 'Gênesis 1–2',
      scenes: [
        { art: '🌑✨', bg: 'noite', fx: 'brilho', text: 'No princípio, tudo era escuro e vazio. Então Deus disse: "Haja luz!" E a luz apareceu!' },
        { art: '☁️🌊', bg: 'mar', fx: 'ondas', text: 'Deus separou as águas lá de cima e as águas cá de baixo. Fez o céu bem azul e os mares bem grandes.' },
        { art: '🌳🌻🍎', bg: 'jardim', text: 'Depois Deus fez a terra seca aparecer, com árvores, flores e frutas gostosas.' },
        { art: '☀️🌙⭐', bg: 'noite', fx: 'estrelas', text: 'Deus colocou o sol para brilhar de dia, e a lua e as estrelas para enfeitar a noite.' },
        { art: '🐟🐦🦁🐑', bg: 'campo', text: 'Deus encheu o mar de peixes, o céu de passarinhos e a terra de bichos: leões, coelhos e ovelhinhas!' },
        { art: '👫💛', bg: 'jardim', fx: 'coracoes', text: 'Por último, Deus fez o homem e a mulher, Adão e Eva, e cuidou deles com amor. Deus viu tudo e disse: "É muito bom!" E no sétimo dia, descansou.' }
      ],
      small: [
        { q: 'Quem fez o mundo?', o: [['✨', 'Deus'], ['🤖', 'Um robô'], ['🐶', 'Um cachorro']] },
        { q: 'O que brilha no céu de dia?', o: [['☀️', 'O sol'], ['🌙', 'A lua'], ['🔦', 'Uma lanterna']] },
        { q: 'Onde Deus colocou os peixes?', o: [['🌊', 'No mar'], ['🌳', 'Na árvore'], ['☁️', 'Na nuvem']] },
        { q: 'O que Deus disse de tudo que fez?', o: [['👍', 'É muito bom!'], ['😢', 'Ficou feio'], ['😴', 'Que sono']] }
      ],
      big: [
        { q: 'Qual foi a primeira coisa que Deus criou?', o: ['A luz', 'Os peixes', 'As pessoas', 'As flores'], e: 'Deus disse "Haja luz", e houve luz (Gênesis 1:3).' },
        { q: 'Para que Deus fez a lua e as estrelas?', o: ['Para brilhar à noite', 'Para esquentar a terra', 'Para molhar as plantas', 'Para fazer barulho'], e: 'O sol governa o dia, e a lua e as estrelas, a noite.' },
        { q: 'Como se chamavam o primeiro homem e a primeira mulher?', o: ['Adão e Eva', 'Abraão e Sara', 'José e Maria', 'Isaque e Rebeca'], e: 'Deus os colocou no jardim do Éden para cuidar dele.' },
        { q: 'O que Deus fez no sétimo dia?', o: ['Descansou', 'Fez os peixes', 'Fez o sol', 'Fez a chuva'], e: 'Deus abençoou o sétimo dia e descansou da sua obra.' },
        { q: 'O que Deus achou de tudo o que criou?', o: ['Que era muito bom', 'Que era pequeno', 'Que era escuro', 'Que era chato'], e: '"E viu Deus tudo quanto tinha feito, e eis que era muito bom" (Gênesis 1:31).' }
      ]
    },
    {
      id: 'noe', name: 'Noé e a arca', icon: '🛶', sticker: '🌈', scene: 'mar', ref: 'Gênesis 6–9',
      scenes: [
        { art: '🧔🙏', bg: 'campo', text: 'Há muito tempo, muitas pessoas esqueceram de Deus. Mas Noé amava a Deus e obedecia a Ele.' },
        { art: '🔨🪵🛶', bg: 'campo', text: 'Deus disse a Noé: "Construa uma arca bem grande!" E Noé obedeceu e trabalhou muito.' },
        { art: '🦁🐘🦒🐑', bg: 'jardim', text: 'Os animais vieram de dois em dois: leões, elefantes, girafas e ovelhinhas. Todos entraram na arca!' },
        { art: '🛶', bg: 'mar', fx: 'chuva', text: 'Então choveu muito, quarenta dias e quarenta noites. A arca flutuava, e todos lá dentro estavam seguros.' },
        { art: '🕊️🌿', bg: 'aurora', fx: 'vento', text: 'Quando a chuva parou, Noé soltou uma pomba. Ela voltou trazendo uma folhinha de oliveira!' },
        { art: '🌈😊', bg: 'aurora', fx: 'brilho', text: 'Deus colocou um arco-íris no céu. Era a promessa do seu amor e do seu cuidado com todos nós.' }
      ],
      small: [
        { q: 'Quem construiu a arca?', o: [['🧔', 'Noé'], ['👑', 'Um rei'], ['🐟', 'Um peixe']] },
        { q: 'O que Noé construiu?', o: [['🛶', 'Uma arca'], ['🏠', 'Uma casa'], ['🚗', 'Um carro']] },
        { q: 'Que passarinho trouxe a folhinha?', o: [['🕊️', 'A pomba'], ['🦆', 'O pato'], ['🦉', 'A coruja']] },
        { q: 'O que Deus colocou no céu?', o: [['🌈', 'Um arco-íris'], ['⭐', 'Uma estrela'], ['☁️', 'Uma nuvem']] }
      ],
      big: [
        { q: 'Por que Noé construiu a arca?', o: ['Porque Deus mandou', 'Para pescar no mar', 'Para fazer uma viagem', 'Para morar sozinho'], e: 'Noé obedeceu a Deus, mesmo sem ver chuva nenhuma ainda.' },
        { q: 'Como os animais entraram na arca?', o: ['De dois em dois', 'Correndo sozinhos', 'Em filas de dez', 'Só os passarinhos'], e: 'Entraram macho e fêmea de cada espécie.' },
        { q: 'Quantos dias choveu?', o: ['40 dias', '7 dias', '100 dias', '3 dias'], e: 'Choveu quarenta dias e quarenta noites.' },
        { q: 'O que a pomba trouxe no bico?', o: ['Uma folha de oliveira', 'Uma flor', 'Uma pedrinha', 'Um peixinho'], e: 'Assim Noé soube que as águas estavam baixando.' },
        { q: 'O que o arco-íris quer dizer?', o: ['A promessa de Deus', 'Que vai chover mais', 'Que já é noite', 'Que é aniversário'], e: 'É o sinal da aliança de Deus: nunca mais um dilúvio destruiria a terra.' }
      ]
    },
    {
      id: 'abraao', name: 'Abraão e as estrelas', icon: '⭐', sticker: '✨', scene: 'noite', ref: 'Gênesis 12, 15 e 21',
      scenes: [
        { art: '👴🐪⛺', bg: 'deserto', text: 'Deus chamou Abraão: "Saia da sua terra e vá para o lugar que eu vou te mostrar." E Abraão foi, confiando em Deus.' },
        { art: '👴👵', bg: 'deserto', text: 'Abraão e Sara já eram bem velhinhos, e não tinham nenhum filho. Eles ficavam tristes com isso.' },
        { art: '👴🌌', bg: 'noite', fx: 'estrelas', text: 'Uma noite, Deus disse: "Olhe para o céu e conte as estrelas, se puder!" Eram tantas que ninguém conseguia contar.' },
        { art: '✨👨‍👩‍👧‍👦✨', bg: 'noite', fx: 'estrelas', text: '"Assim será a sua família", disse Deus. "Tão grande como as estrelas do céu!" E Abraão creu em Deus.' },
        { art: '👵👶😄', bg: 'aurora', fx: 'coracoes', text: 'Deus cumpriu a promessa! Sara teve um bebê, chamado Isaque. O nome dele quer dizer "riso", porque todos ficaram muito alegres.' },
        { art: '🙏⭐', bg: 'aurora', fx: 'brilho', text: 'Deus sempre cumpre o que promete. Podemos confiar nele, como Abraão confiou.' }
      ],
      small: [
        { q: 'O que Abraão olhou no céu?', o: [['⭐', 'As estrelas'], ['🎈', 'Balões'], ['✈️', 'Um avião']] },
        { q: 'Quem nasceu na família de Abraão?', o: [['👶', 'Um bebê'], ['🐱', 'Um gatinho'], ['🐴', 'Um cavalo']] },
        { q: 'Como Sara ficou quando o bebê nasceu?', o: [['😄', 'Muito alegre'], ['😠', 'Brava'], ['😴', 'Com sono']] },
        { q: 'Quem cumpre todas as promessas?', o: [['✨', 'Deus'], ['🦊', 'A raposa'], ['🎩', 'Um mágico']] }
      ],
      big: [
        { q: 'O que Deus pediu para Abraão contar?', o: ['As estrelas', 'As ovelhas', 'As moedas', 'As pedras'], e: 'Deus prometeu uma família tão numerosa quanto as estrelas.' },
        { q: 'Como se chamava a esposa de Abraão?', o: ['Sara', 'Rute', 'Ester', 'Maria'], e: 'Sara foi a mãe de Isaque.' },
        { q: 'Qual o nome do filho que Deus deu a Abraão e Sara?', o: ['Isaque', 'Davi', 'Moisés', 'Pedro'], e: 'Isaque quer dizer "riso".' },
        { q: 'O que Abraão fez quando Deus prometeu?', o: ['Creu em Deus', 'Riu e foi embora', 'Ficou com medo', 'Esqueceu'], e: '"E creu ele no Senhor, e imputou-lhe isto por justiça" (Gênesis 15:6).' },
        { q: 'O que aprendemos com Abraão?', o: ['Deus cumpre suas promessas', 'Estrelas são fáceis de contar', 'Velhinhos não viajam', 'Não precisa confiar'], e: 'Mesmo quando parece impossível, Deus é fiel.' }
      ]
    },
    {
      id: 'jose', name: 'José e sua túnica', icon: '🧥', sticker: '🌾', scene: 'deserto', ref: 'Gênesis 37–45',
      scenes: [
        { art: '👦🧥🌈', bg: 'campo', fx: 'brilho', text: 'Jacó tinha doze filhos. Ele deu para José uma túnica de muitas cores, linda!' },
        { art: '😠😠😠', bg: 'deserto', text: 'Os irmãos de José ficaram com ciúmes e fizeram uma coisa muito feia: venderam José para uns viajantes, que o levaram para o Egito.' },
        { art: '👦🙏', bg: 'palacio', text: 'Lá no Egito, José passou por momentos difíceis. Mas ele não ficou longe de Deus, e Deus estava com ele.' },
        { art: '👑💭🐄🌾', bg: 'palacio', text: 'O rei do Egito, o Faraó, teve sonhos estranhos. Deus ajudou José a explicar: "Vêm sete anos de muita comida e depois sete anos de fome."' },
        { art: '🌾🏛️🌾', bg: 'palacio', fx: 'brilho', text: 'O Faraó colocou José para cuidar de tudo! José guardou muito trigo, e ninguém passou fome.' },
        { art: '🤗👨‍👦‍👦', bg: 'aurora', fx: 'coracoes', text: 'Um dia, os irmãos vieram comprar comida. José os perdoou e deu um abraço bem apertado em cada um. A família ficou junta de novo!' }
      ],
      small: [
        { q: 'O que José ganhou do pai?', o: [['🧥', 'Uma túnica colorida'], ['⚽', 'Uma bola'], ['🎸', 'Um violão']] },
        { q: 'Quem estava sempre com José?', o: [['✨', 'Deus'], ['🦁', 'Um leão'], ['🤡', 'Um palhaço']] },
        { q: 'O que José guardou para não faltar comida?', o: [['🌾', 'Trigo'], ['🧸', 'Brinquedos'], ['👟', 'Sapatos']] },
        { q: 'O que José fez com os irmãos no final?', o: [['🤗', 'Perdoou e abraçou'], ['😡', 'Brigou'], ['🏃', 'Fugiu']] }
      ],
      big: [
        { q: 'Quantos filhos Jacó tinha?', o: ['Doze', 'Dois', 'Cinco', 'Vinte'], e: 'Os doze filhos de Jacó deram origem às doze tribos de Israel.' },
        { q: 'Por que os irmãos venderam José?', o: ['Porque tinham ciúmes', 'Porque ele pediu', 'Porque era muito alto', 'Porque ele era rei'], e: 'O ciúme levou os irmãos a fazerem uma coisa muito errada.' },
        { q: 'Para onde José foi levado?', o: ['Para o Egito', 'Para Roma', 'Para Belém', 'Para o mar'], e: 'Foi vendido a mercadores que iam para o Egito.' },
        { q: 'O que os sonhos do Faraó avisavam?', o: ['Sete anos de fartura e sete de fome', 'Uma grande chuva', 'Que viria uma festa', 'Que o rio ia secar para sempre'], e: 'Deus deu a José a explicação dos sonhos (Gênesis 41).' },
        { q: 'O que José fez quando reencontrou os irmãos?', o: ['Perdoou', 'Mandou prender para sempre', 'Fingiu não ver', 'Foi embora'], e: 'José disse que Deus tinha transformado o mal em bem (Gênesis 50:20).' }
      ]
    },
    {
      id: 'moises', name: 'Moisés no cestinho', icon: '🧺', sticker: '🧺', scene: 'mar', ref: 'Êxodo 2',
      scenes: [
        { art: '👩👶', bg: 'cidade', text: 'No Egito, uma mamãe teve um bebezinho lindo. Mas o rei mau não queria que os meninos do povo de Deus crescessem.' },
        { art: '👩🧺👶', bg: 'cidade', text: 'A mamãe escondeu o bebê por três meses. Depois, fez um cestinho bem fechadinho, para a água não entrar.' },
        { art: '🧺🌿', bg: 'mar', fx: 'ondas', text: 'Ela colocou o bebê no cestinho e deixou entre os juncos, na beira do rio. A irmã dele, Miriã, ficou olhando de longe.' },
        { art: '👸🧺', bg: 'mar', fx: 'ondas', text: 'A filha do Faraó, a princesa, foi se banhar no rio e encontrou o cestinho. O bebê chorava, e ela teve dó dele.' },
        { art: '👧💬👸', bg: 'palacio', text: 'Miriã correu e perguntou: "Quer que eu chame uma mulher para cuidar dele?" E chamou a própria mamãe do bebê!' },
        { art: '👸👦💛', bg: 'palacio', fx: 'coracoes', text: 'A princesa deu a ele o nome de Moisés. Deus cuidou de Moisés desde bebê, porque tinha um plano lindo para ele.' }
      ],
      small: [
        { q: 'Onde o bebê Moisés ficou no rio?', o: [['🧺', 'Num cestinho'], ['🚤', 'Numa lancha'], ['🛁', 'Numa banheira']] },
        { q: 'Quem achou o cestinho?', o: [['👸', 'A princesa'], ['🐊', 'Um jacaré'], ['🧑‍🚀', 'Um astronauta']] },
        { q: 'Quem ficou olhando o bebê de longe?', o: [['👧', 'A irmã dele'], ['🐒', 'Um macaco'], ['👮', 'Um guarda']] },
        { q: 'Quem cuidou de Moisés desde bebê?', o: [['✨', 'Deus'], ['🐸', 'Um sapo'], ['🌵', 'Um cacto']] }
      ],
      big: [
        { q: 'Por quanto tempo a mãe escondeu o bebê?', o: ['Três meses', 'Um dia', 'Dez anos', 'Uma semana'], e: 'Êxodo 2:2 diz que ela o escondeu três meses.' },
        { q: 'Onde a mãe colocou o cestinho?', o: ['Entre os juncos do rio', 'No alto de um monte', 'Dentro do palácio', 'No deserto'], e: 'Ela o pôs nos juncos, à beira do rio Nilo.' },
        { q: 'Como se chamava a irmã de Moisés?', o: ['Miriã', 'Marta', 'Raquel', 'Débora'], e: 'Miriã cresceu e mais tarde cantou louvores a Deus.' },
        { q: 'Quem a irmã chamou para cuidar do bebê?', o: ['A própria mãe dele', 'Uma rainha', 'Uma vizinha estranha', 'Ninguém'], e: 'Assim Moisés foi cuidado pela sua mãe verdadeira.' },
        { q: 'O que aprendemos com essa história?', o: ['Deus cuida de nós desde pequenos', 'Rio é lugar de brincar sozinho', 'Bebês não precisam de cuidado', 'Princesas não gostam de bebês'], e: 'Deus protegeu Moisés porque tinha um plano para ele.' }
      ]
    },
    {
      id: 'mar', name: 'A travessia do mar', icon: '🌊', sticker: '🌊', scene: 'mar', ref: 'Êxodo 14',
      scenes: [
        { art: '🧔👥🏜️', bg: 'deserto', text: 'Moisés cresceu, e Deus o escolheu para tirar o seu povo do Egito, onde eles eram escravos.' },
        { art: '👥🌊', bg: 'mar', fx: 'ondas', text: 'O povo caminhou até a beira de um mar enorme. E o Faraó veio atrás deles com muitos carros e cavalos!' },
        { art: '😨👥', bg: 'mar', fx: 'vento', text: 'O povo ficou com medo. Mas Moisés disse: "Não tenham medo! Fiquem firmes e vejam o que Deus vai fazer!"' },
        { art: '🧔🙌🌊', bg: 'mar', fx: 'vento', text: 'Moisés levantou a vara, e Deus mandou um vento forte. O mar se abriu no meio, com uma parede de água de cada lado!' },
        { art: '🌊👣🌊', bg: 'mar', fx: 'ondas', text: 'E o povo atravessou pelo meio do mar, andando em terra seca! Ninguém molhou nem os pés.' },
        { art: '🥁💃🎶', bg: 'aurora', fx: 'brilho', text: 'Do outro lado, todos cantaram e dançaram para agradecer a Deus. Miriã tocava o tamborim. Deus salvou o seu povo!' }
      ],
      small: [
        { q: 'O que Deus abriu no meio?', o: [['🌊', 'O mar'], ['🍉', 'Uma melancia'], ['🚪', 'Uma porta']] },
        { q: 'Quem levantou a vara?', o: [['🧔', 'Moisés'], ['🤴', 'O Faraó'], ['🐕', 'Um cachorro']] },
        { q: 'Como o povo passou pelo mar?', o: [['👣', 'Andando no seco'], ['🏊', 'Nadando'], ['✈️', 'De avião']] },
        { q: 'O que o povo fez do outro lado?', o: [['🎶', 'Cantou para Deus'], ['😭', 'Chorou'], ['😴', 'Dormiu']] }
      ],
      big: [
        { q: 'Quem perseguiu o povo até o mar?', o: ['O Faraó e seu exército', 'Os filisteus', 'Os leões', 'Os romanos'], e: 'O Faraó mudou de ideia e foi atrás do povo.' },
        { q: 'O que Moisés disse ao povo com medo?', o: ['Não tenham medo', 'Voltem para o Egito', 'Corram para o mato', 'Façam silêncio'], e: '"Não temais; estai quietos, e vede o livramento do Senhor" (Êxodo 14:13).' },
        { q: 'O que Deus usou para abrir o mar?', o: ['Um vento forte', 'Um terremoto', 'Uma ponte', 'Um barco'], e: 'Um forte vento oriental soprou a noite toda.' },
        { q: 'Como estava o chão no meio do mar?', o: ['Seco', 'Cheio de lama', 'Cheio de peixes', 'Com neve'], e: 'Os filhos de Israel passaram em seco.' },
        { q: 'Quem tocou tamborim depois da travessia?', o: ['Miriã', 'Eva', 'Sara', 'Ana'], e: 'Miriã e as mulheres louvaram a Deus com tamborins (Êxodo 15:20).' }
      ]
    },
    {
      id: 'davi', name: 'Davi e Golias', icon: '🪨', sticker: '🪨', scene: 'campo', ref: '1 Samuel 17',
      scenes: [
        { art: '👦🐑🐑', bg: 'campo', text: 'Davi era um menino pastor. Ele cuidava das ovelhas do pai e tocava harpa para Deus.' },
        { art: '🛡️🧌🛡️', bg: 'monte', text: 'Um dia, um gigante chamado Golias desafiou o povo de Deus. Ele era enorme, e todos os soldados tinham medo.' },
        { art: '👦💪🙏', bg: 'monte', text: 'Davi disse: "Eu vou! Deus me ajudou a proteger as ovelhas do leão e do urso, e vai me ajudar agora!"' },
        { art: '👦🪨🪨🪨', bg: 'campo', fx: 'brilho', text: 'Davi não quis armadura. Pegou só sua funda e cinco pedrinhas lisas do riacho.' },
        { art: '👦🪨💫', bg: 'monte', fx: 'vento', text: 'Davi girou a funda e lançou uma pedrinha. Ela acertou a testa do gigante, e Golias caiu no chão: tum!' },
        { art: '👦🎉👥', bg: 'aurora', fx: 'brilho', text: 'Todos comemoraram! Davi era pequeno, mas confiava num Deus muito grande.' }
      ],
      small: [
        { q: 'O que Davi cuidava?', o: [['🐑', 'Ovelhas'], ['🐔', 'Galinhas'], ['🐠', 'Peixinhos']] },
        { q: 'Como era Golias?', o: [['🧌', 'Um gigante'], ['🐜', 'Bem pequeno'], ['👶', 'Um bebê']] },
        { q: 'O que Davi jogou com a funda?', o: [['🪨', 'Uma pedrinha'], ['🍌', 'Uma banana'], ['⚽', 'Uma bola']] },
        { q: 'Quem ajudou Davi a vencer?', o: [['✨', 'Deus'], ['🦸', 'Um super-herói'], ['🐉', 'Um dragão']] }
      ],
      big: [
        { q: 'Qual era o trabalho de Davi quando menino?', o: ['Pastor de ovelhas', 'Pescador', 'Soldado', 'Rei'], e: 'Davi cuidava do rebanho do seu pai, Jessé.' },
        { q: 'Quantas pedras Davi pegou no riacho?', o: ['Cinco', 'Uma', 'Dez', 'Três'], e: '"Escolheu para si cinco seixos lisos do ribeiro" (1 Samuel 17:40).' },
        { q: 'Por que Davi não teve medo?', o: ['Porque confiava em Deus', 'Porque era maior que Golias', 'Porque tinha uma espada', 'Porque Golias dormia'], e: 'Davi disse que ia lutar em nome do Senhor.' },
        { q: 'Que animais Davi já tinha enfrentado?', o: ['Um leão e um urso', 'Um tubarão e uma cobra', 'Um tigre e um lobo', 'Nenhum'], e: 'Ele contou isso ao rei Saul (1 Samuel 17:34-37).' },
        { q: 'O que Davi se tornou quando cresceu?', o: ['Rei de Israel', 'Faraó do Egito', 'Pescador', 'Gigante'], e: 'Davi foi o grande rei de Israel e escreveu muitos Salmos.' }
      ]
    },
    {
      id: 'daniel', name: 'Daniel e os leões', icon: '🦁', sticker: '🦁', scene: 'palacio', ref: 'Daniel 6',
      scenes: [
        { art: '🧔🙏🪟', bg: 'palacio', text: 'Daniel amava a Deus. Três vezes por dia, ele abria a janela e orava, agradecendo a Deus.' },
        { art: '👑📜😈', bg: 'palacio', text: 'Uns homens invejosos enganaram o rei e fizeram uma lei: "Ninguém pode orar a Deus, só ao rei!"' },
        { art: '🧔🙏💛', bg: 'palacio', fx: 'luz', text: 'Mas Daniel continuou orando a Deus, como sempre fazia. Ele não tinha vergonha de amar a Deus.' },
        { art: '🦁🦁🧔🦁', bg: 'noite', text: 'Então jogaram Daniel numa cova cheia de leões famintos! O rei ficou muito triste e passou a noite sem dormir.' },
        { art: '😇🦁😴', bg: 'noite', fx: 'luz', text: 'Mas Deus mandou um anjo, que fechou a boca dos leões! Eles não fizeram nada com Daniel. Ficaram mansinhos.' },
        { art: '👑😄🧔', bg: 'aurora', fx: 'brilho', text: 'De manhã, o rei correu até a cova: "Daniel, você está bem?" "Estou, ó rei! Deus me protegeu!" E o rei louvou o Deus de Daniel.' }
      ],
      small: [
        { q: 'O que Daniel fazia três vezes por dia?', o: [['🙏', 'Orava'], ['🍦', 'Tomava sorvete'], ['📺', 'Via TV']] },
        { q: 'Que bichos estavam na cova?', o: [['🦁', 'Leões'], ['🐰', 'Coelhos'], ['🐢', 'Tartarugas']] },
        { q: 'Quem Deus mandou para fechar a boca dos leões?', o: [['😇', 'Um anjo'], ['👮', 'Um policial'], ['🐘', 'Um elefante']] },
        { q: 'Como Daniel saiu da cova?', o: [['😄', 'Bem e feliz'], ['🤕', 'Machucado'], ['😭', 'Chorando']] }
      ],
      big: [
        { q: 'Quantas vezes por dia Daniel orava?', o: ['Três', 'Uma', 'Sete', 'Nenhuma'], e: 'Ele se ajoelhava três vezes no dia e orava (Daniel 6:10).' },
        { q: 'O que dizia a lei que enganou o rei?', o: ['Que só podiam orar ao rei', 'Que ninguém podia comer', 'Que todos deviam dormir', 'Que leões eram proibidos'], e: 'Os invejosos queriam pegar Daniel em sua fé.' },
        { q: 'O que Daniel fez depois da lei?', o: ['Continuou orando a Deus', 'Parou de orar', 'Fugiu do país', 'Orou ao rei'], e: 'Daniel foi fiel a Deus mesmo com perigo.' },
        { q: 'Como Deus salvou Daniel?', o: ['Mandou um anjo fechar a boca dos leões', 'Fez os leões fugirem', 'Deu uma espada a Daniel', 'Fez chover'], e: '"O meu Deus enviou o seu anjo, e fechou a boca dos leões" (Daniel 6:22).' },
        { q: 'O que o rei fez no final?', o: ['Louvou o Deus de Daniel', 'Ficou bravo com Daniel', 'Comprou mais leões', 'Foi dormir'], e: 'O rei mandou que todos respeitassem o Deus de Daniel.' }
      ]
    },
    {
      id: 'jonas', name: 'Jonas e o grande peixe', icon: '🐋', sticker: '🐋', scene: 'mar', ref: 'Jonas 1–3',
      scenes: [
        { art: '🧔🏃⛵', bg: 'mar', text: 'Deus pediu a Jonas: "Vá à cidade de Nínive e fale de mim." Mas Jonas não quis e entrou num barco para o lado contrário.' },
        { art: '⛵🌊', bg: 'mar', fx: 'chuva', text: 'Veio uma tempestade enorme! O barco balançava para lá e para cá. Os marinheiros ficaram com muito medo.' },
        { art: '🧔💦🌊', bg: 'mar', fx: 'ondas', text: 'Jonas disse: "A culpa é minha, eu fugi de Deus. Joguem-me no mar." Eles jogaram, e o mar se acalmou.' },
        { art: '🐋🧔', bg: 'mar', fx: 'ondas', text: 'Então Deus mandou um grande peixe, que engoliu Jonas! Jonas ficou três dias e três noites dentro da barriga do peixe.' },
        { art: '🧔🙏🐋', bg: 'mar', fx: 'luz', text: 'Lá dentro, Jonas orou e pediu perdão a Deus. E Deus mandou o peixe soltar Jonas na praia: bluuurp!' },
        { art: '🧔🏙️💛', bg: 'cidade', fx: 'coracoes', text: 'Dessa vez Jonas obedeceu e foi a Nínive. O povo da cidade se arrependeu, e Deus teve compaixão de todos.' }
      ],
      small: [
        { q: 'Quem engoliu Jonas?', o: [['🐋', 'Um grande peixe'], ['🐊', 'Um jacaré'], ['🦖', 'Um dinossauro']] },
        { q: 'Onde Jonas entrou para fugir?', o: [['⛵', 'Num barco'], ['🚂', 'Num trem'], ['🚀', 'Num foguete']] },
        { q: 'O que Jonas fez dentro do peixe?', o: [['🙏', 'Orou a Deus'], ['🎮', 'Jogou videogame'], ['🍕', 'Comeu pizza']] },
        { q: 'O que veio quando o barco estava no mar?', o: [['⛈️', 'Uma tempestade'], ['🌈', 'Um arco-íris'], ['❄️', 'Neve']] }
      ],
      big: [
        { q: 'Para qual cidade Deus mandou Jonas?', o: ['Nínive', 'Jerusalém', 'Belém', 'Roma'], e: 'Nínive era uma cidade grande e muito longe de Deus.' },
        { q: 'O que Jonas fez primeiro?', o: ['Fugiu num barco', 'Obedeceu na hora', 'Foi dormir em casa', 'Chamou os amigos'], e: 'Jonas tentou fugir para Társis.' },
        { q: 'Quanto tempo Jonas ficou no peixe?', o: ['Três dias e três noites', 'Uma hora', 'Um mês', 'Dez anos'], e: 'Jesus lembrou desse sinal em Mateus 12:40.' },
        { q: 'O que aconteceu com o povo de Nínive?', o: ['Se arrependeu', 'Expulsou Jonas', 'Não ouviu nada', 'Foi para o mar'], e: 'O povo deixou o mal, e Deus teve misericórdia.' },
        { q: 'O que aprendemos com Jonas?', o: ['É melhor obedecer a Deus', 'Peixe é perigoso', 'Barco é ruim', 'Não precisa orar'], e: 'E Deus nos dá uma nova chance quando pedimos perdão.' }
      ]
    },
    {
      id: 'natal', name: 'O nascimento de Jesus', icon: '⭐', sticker: '⭐', scene: 'noite', ref: 'Lucas 2 e Mateus 2',
      scenes: [
        { art: '😇👩', bg: 'aurora', fx: 'luz', text: 'O anjo Gabriel visitou Maria e disse: "Você vai ter um bebê, e ele vai se chamar Jesus. Ele é o Filho de Deus!"' },
        { art: '🧔👩🫏', bg: 'deserto', text: 'Maria e José viajaram até a cidade de Belém. Era longe, e Maria ia montada num jumentinho.' },
        { art: '🏠🚫🐄', bg: 'noite', fx: 'estrelas', text: 'Em Belém não havia lugar na hospedaria. Então eles ficaram num lugar simples, onde moravam os animais.' },
        { art: '👩🌾🧔', bg: 'noite', fx: 'luz', text: 'Ali nasceu Jesus! Maria o enrolou em panos e o deitou numa manjedoura, o cocho onde os animais comem.' },
        { art: '😇🐑👨‍🌾', bg: 'campo', fx: 'estrelas', text: 'No campo, anjos apareceram aos pastores: "Nasceu o Salvador!" Os pastores correram para ver o menino Jesus.' },
        { art: '⭐🐪🎁', bg: 'noite', fx: 'brilho', text: 'Uma estrela brilhante guiou uns sábios do Oriente, os magos, que vieram adorar Jesus e trouxeram presentes. Jesus é o maior presente de Deus!' }
      ],
      small: [
        { q: 'Quem nasceu em Belém?', o: [['✝️', 'O menino Jesus'], ['🐣', 'Um pintinho'], ['🤴', 'Um príncipe bravo']] },
        { q: 'Onde Jesus foi deitado?', o: [['🌾', 'Na manjedoura'], ['🛏️', 'Numa cama de rei'], ['🚗', 'Num carro']] },
        { q: 'Quem cantou para os pastores?', o: [['😇', 'Os anjos'], ['🐸', 'Os sapos'], ['🎤', 'Um cantor']] },
        { q: 'O que guiou os magos?', o: [['⭐', 'Uma estrela'], ['🗺️', 'Um mapa'], ['📱', 'Um celular']] }
      ],
      big: [
        { q: 'Qual anjo visitou Maria?', o: ['Gabriel', 'Miguel', 'Rafael', 'Nenhum'], e: 'O anjo Gabriel anunciou o nascimento de Jesus (Lucas 1:26-31).' },
        { q: 'Em que cidade Jesus nasceu?', o: ['Belém', 'Nazaré', 'Jerusalém', 'Jericó'], e: 'Belém é a cidade de Davi.' },
        { q: 'Por que Jesus nasceu num lugar simples?', o: ['Não havia lugar na hospedaria', 'Maria quis assim', 'Estava chovendo', 'Os animais pediram'], e: '"Porque não havia lugar para eles na estalagem" (Lucas 2:7).' },
        { q: 'O que os anjos anunciaram aos pastores?', o: ['Que nasceu o Salvador', 'Que ia chover', 'Que as ovelhas fugiram', 'Que era hora de dormir'], e: '"Hoje vos nasceu o Salvador, que é Cristo, o Senhor" (Lucas 2:11).' },
        { q: 'O que os magos levaram para Jesus?', o: ['Ouro, incenso e mirra', 'Brinquedos', 'Frutas e pão', 'Roupas novas'], e: 'Eles adoraram Jesus e abriram seus tesouros (Mateus 2:11).' }
      ]
    },
    {
      id: 'tempestade', name: 'Jesus acalma o mar', icon: '⛵', sticker: '⛵', scene: 'galileia', ref: 'Marcos 4:35-41',
      scenes: [
        { art: '⛵👥', bg: 'galileia', text: 'Depois de um dia ensinando muita gente, Jesus disse aos discípulos: "Vamos para o outro lado do lago." E entraram no barco.' },
        { art: '⛵💤🌙', bg: 'galileia', fx: 'ondas', text: 'Jesus estava cansado e dormiu num travesseiro, lá na parte de trás do barco.' },
        { art: '⛈️⛵🌊', bg: 'mar', fx: 'chuva', text: 'De repente, veio uma tempestade fortíssima! O vento soprava, e as ondas jogavam água para dentro do barco.' },
        { art: '😱👥', bg: 'mar', fx: 'chuva', text: 'Os discípulos ficaram apavorados e acordaram Jesus: "Mestre, não se importa que vamos afundar?"' },
        { art: '💬🌊✨', bg: 'galileia', fx: 'luz', text: 'Jesus se levantou e disse ao vento e ao mar: "Cale-se! Aquiete-se!" E na mesma hora, tudo ficou calmo.' },
        { art: '⛵☀️😮', bg: 'galileia', fx: 'brilho', text: 'Os discípulos se perguntavam: "Quem é este, que até o vento e o mar lhe obedecem?" É Jesus, o Filho de Deus!' }
      ],
      small: [
        { q: 'Onde Jesus estava dormindo?', o: [['⛵', 'No barco'], ['🌳', 'Na árvore'], ['🏰', 'No castelo']] },
        { q: 'O que veio enquanto Jesus dormia?', o: [['⛈️', 'Uma tempestade'], ['🎂', 'Um bolo'], ['🦋', 'Uma borboleta']] },
        { q: 'O que aconteceu quando Jesus falou?', o: [['☀️', 'Tudo ficou calmo'], ['🌪️', 'Ventou mais'], ['🌙', 'Virou noite']] },
        { q: 'Quem manda no vento e no mar?', o: [['✝️', 'Jesus'], ['🐙', 'O polvo'], ['🧜', 'Uma sereia']] }
      ],
      big: [
        { q: 'O que Jesus fazia quando veio a tempestade?', o: ['Dormia', 'Pescava', 'Remava', 'Cantava'], e: 'Ele dormia sobre uma almofada na popa (Marcos 4:38).' },
        { q: 'O que os discípulos sentiram?', o: ['Muito medo', 'Muita fome', 'Muito sono', 'Muita alegria'], e: 'Eles acharam que o barco ia afundar.' },
        { q: 'O que Jesus disse ao mar?', o: ['Cale-se, aquiete-se', 'Pode continuar', 'Vamos nadar', 'Fique bravo'], e: '"Cala-te, aquieta-te" (Marcos 4:39).' },
        { q: 'O que aconteceu depois que Jesus falou?', o: ['Houve grande bonança', 'O barco afundou', 'Choveu mais', 'Os discípulos fugiram'], e: 'O vento parou e tudo ficou calmo.' },
        { q: 'O que essa história nos ensina?', o: ['Jesus cuida de nós nas tempestades', 'Barcos são perigosos', 'Não se pode dormir', 'O mar é sempre bravo'], e: 'Quando tivermos medo, podemos chamar por Jesus.' }
      ]
    },
    {
      id: 'ovelha', name: 'A ovelha perdida', icon: '🐑', sticker: '🐑', scene: 'campo', ref: 'Lucas 15:3-7',
      scenes: [
        { art: '🐑🐑🐑🐑', bg: 'campo', text: 'Jesus contou uma história: um pastor tinha cem ovelhas. Ele conhecia cada uma e cuidava de todas com carinho.' },
        { art: '🔢🐑', bg: 'campo', text: 'Um dia, ao contar as ovelhas, ele percebeu: "Noventa e oito, noventa e nove... Está faltando uma!"' },
        { art: '🐑😢🌵', bg: 'monte', fx: 'vento', text: 'Uma ovelhinha tinha se perdido lá longe, no meio das pedras e dos espinhos. Ela estava sozinha e com medo.' },
        { art: '🔦👣⛰️', bg: 'noite', fx: 'estrelas', text: 'O pastor deixou as outras noventa e nove em segurança e foi procurar a ovelhinha perdida, até encontrar.' },
        { art: '🐑💛', bg: 'aurora', fx: 'coracoes', text: 'Quando a achou, ficou tão feliz que a colocou nos ombros e levou para casa, cantando de alegria!' },
        { art: '🎉🐑👥', bg: 'aurora', fx: 'brilho', text: 'Ele chamou os amigos: "Alegrem-se comigo! Achei a minha ovelha!" Jesus é o Bom Pastor, e ama cada um de nós, até você! 🐑' }
      ],
      small: [
        { q: 'Quantas ovelhas se perderam?', o: [['☝️', 'Uma'], ['🖐️', 'Cinco'], ['🔟', 'Dez']] },
        { q: 'Quem foi procurar a ovelhinha?', o: [['👣', 'O pastor'], ['🐺', 'O lobo'], ['🦅', 'A águia']] },
        { q: 'Como o pastor levou a ovelha para casa?', o: [['🤗', 'Nos ombros'], ['🚲', 'De bicicleta'], ['🚁', 'De helicóptero']] },
        { q: 'Quem é o Bom Pastor?', o: [['✝️', 'Jesus'], ['🤴', 'Um rei'], ['🐄', 'Uma vaca']] }
      ],
      big: [
        { q: 'Quantas ovelhas o pastor tinha?', o: ['Cem', 'Dez', 'Mil', 'Doze'], e: 'Ele tinha cem e uma se perdeu (Lucas 15:4).' },
        { q: 'O que o pastor fez com as outras 99?', o: ['Deixou em segurança e foi procurar', 'Vendeu todas', 'Esqueceu delas', 'Levou para passear'], e: 'Cada ovelha era importante para ele.' },
        { q: 'Como o pastor se sentiu ao achar a ovelha?', o: ['Muito feliz', 'Bravo', 'Cansado demais', 'Triste'], e: 'Ele a pôs nos ombros, cheio de alegria.' },
        { q: 'O que o pastor fez quando chegou em casa?', o: ['Chamou os amigos para festejar', 'Brigou com a ovelha', 'Foi dormir sozinho', 'Mudou de casa'], e: '"Alegrai-vos comigo, porque já achei a minha ovelha perdida" (Lucas 15:6).' },
        { q: 'O que Jesus quis ensinar?', o: ['Deus ama e procura cada pessoa', 'Ovelhas são bobas', 'Cem é um número grande', 'É bom se perder'], e: 'Há alegria no céu por cada um que volta para Deus.' }
      ]
    }
  ],
  soon: []
};
