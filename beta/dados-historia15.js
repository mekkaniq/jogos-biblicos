/* A Grande História da Bíblia — Arco 15: Salomão: sabedoria e templo (1 Reis 1–11; 2 Crônicas 1–9; Provérbios; Eclesiastes; Cantares) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.salomao = {
  id: 'salomao', n: 15, name: 'Salomão: sabedoria e templo', sub: 'O rei mais sábio e o seu grande erro', ref: '1 Reis 1–11, Provérbios, Eclesiastes, Cantares', icon: '🏛️', scene: 'palacio',
  intro: 'Salomão, o filho de Davi, pediu a Deus sabedoria, e Deus o fez o homem mais sábio do mundo. Ele construiu o templo de Jerusalém e escreveu milhares de provérbios. Foi o tempo mais rico e pacífico da história de Israel. Mas, no fim da vida, Salomão deixou o coração se afastar de Deus. Neste arco, vamos ver o seu reinado e os livros de sabedoria que ele nos deixou.',
  lessons: [
    {
      id: 'sl1', title: 'Salomão se torna rei', ref: '1 Reis 1 – 2', icon: '👑',
      recap: 'No arco de Davi, Deus prometeu que um filho de Davi construiria o templo e que o seu reino duraria para sempre.',
      scenes: [
        { art: '👴🛌', bg: 'palacio', text: 'O rei Davi estava muito velho e fraco, quase sempre na cama.', r: '1 Reis 1:1' },
        { art: '🧑👑😏', bg: 'cidade', text: 'Um dos filhos de Davi, Adonias, decidiu: "Eu é que vou ser rei!" Juntou carruagens, cavalos e homens, e fez uma grande festa para se declarar rei, sem perguntar ao pai e sem perguntar a Deus.', r: '1 Reis 1:5-9' },
        { art: '🧔👩💬👴', bg: 'palacio', text: 'O profeta Natã e Bate-Seba, a mãe de Salomão, foram depressa falar com Davi: "O senhor não tinha prometido que Salomão seria o rei depois do senhor?"', r: '1 Reis 1:11-27' },
        { art: '👴✋📣', bg: 'palacio', fx: 'luz', text: 'Davi respondeu com firmeza: "Tão certo como vive o Senhor, que me livrou de toda angústia: Salomão, o seu filho, vai reinar depois de mim. E vai ser hoje!"', r: '1 Reis 1:29-30' },
        { art: '🫏🫗👑', bg: 'cidade', fx: 'brilho', text: 'Colocaram Salomão montado na mula do rei Davi e o levaram até a fonte de Giom. Ali o sacerdote Zadoque e o profeta Natã o ungiram com azeite.', r: '1 Reis 1:33-34, 38-39' },
        { art: '🎺🎶👥', bg: 'cidade', fx: 'brilho', text: 'Tocaram a trombeta, e todo o povo gritou: "Viva o rei Salomão!" Tocavam flautas e se alegravam tanto que a terra parecia tremer com o barulho.', r: '1 Reis 1:39-40' },
        { art: '👴💬👦', bg: 'palacio', fx: 'luz', text: 'Antes de morrer, Davi deu conselhos a Salomão: "Seja forte e seja homem! Guarde os mandamentos do Senhor, o seu Deus, e ande nos seus caminhos. Assim você vai prosperar em tudo o que fizer."', r: '1 Reis 2:1-4' },
        { art: '👴🕊️👑', bg: 'aurora', text: 'Davi morreu depois de reinar quarenta anos e foi sepultado na cidade de Davi. E o trono de Salomão ficou firme.', r: '1 Reis 2:10-12' }
      ],
      god: 'Deus cumpre as suas promessas e coloca no trono quem Ele escolhe, apesar dos planos humanos.',
      jesus: 'Salomão entrou na cidade montado numa mula, como rei escolhido. Mil anos depois, Jesus, o Filho de Davi, entrou em Jerusalém montado num jumentinho, e o povo gritou: "Hosana ao Filho de Davi!" (Mateus 21:5-9). Jesus é o Rei que Deus escolheu, o verdadeiro herdeiro do trono de Davi.',
      verse: { ref: '1 Reis 2:2-3', tx: 'Esforça-te, pois, e sê homem. E guarda a ordenança do Senhor teu Deus, para andares nos seus caminhos.' },
      small: [
        { q: 'Quem Davi escolheu para ser rei?', o: [['👑', 'Salomão'], ['🧌', 'Golias'], ['🐑', 'Uma ovelha']] },
        { q: 'Em que animal Salomão foi montado?', o: [['🫏', 'Na mula do rei'], ['🐘', 'Num elefante'], ['🐪', 'Num camelo']] },
        { q: 'O que o povo gritou?', o: [['📣', '"Viva o rei Salomão!"'], ['😴', '"Boa noite"'], ['🏃', '"Fujam!"']] }
      ],
      big: [
        { q: 'Quem tentou ser rei sem a escolha de Davi?', o: ['Adonias', 'Absalão', 'Natã', 'Joabe'], e: '1 Reis 1:5.' },
        { q: 'Quem avisou Davi sobre Adonias?', o: ['Natã e Bate-Seba', 'Saul', 'Golias', 'Jônatas'], e: '1 Reis 1:11-27.' },
        { q: 'Onde Salomão foi ungido?', o: ['Na fonte de Giom', 'Em Belém', 'No templo', 'No monte Sinai'], e: '1 Reis 1:38-39.' },
        { q: 'Qual foi o conselho de Davi a Salomão?', o: ['Guardar os mandamentos do Senhor', 'Ficar rico', 'Fazer guerras', 'Construir um palácio'], e: '1 Reis 2:3.' }
      ],
      parents: 'A disputa pela sucessão e as execuções no início do reinado (1 Reis 2:13-46) foram omitidas. Ponto central: Deus cumpre a promessa de 2 Samuel 7 e 1 Crônicas 22:9. Leitura junto: 1 Reis 1:28-40 e 2:1-4.'
    },
    {
      id: 'sl2', title: 'Salomão pede sabedoria', ref: '1 Reis 3:1-15', icon: '💭',
      recap: 'Na lição passada, Salomão foi ungido rei, e Davi o aconselhou a seguir os caminhos de Deus.',
      scenes: [
        { art: '👑💛🙏', bg: 'monte', text: 'Salomão amava o Senhor e andava nos conselhos de Davi, seu pai. Ele foi a Gibeom, onde estava o tabernáculo, e ofereceu mil sacrifícios a Deus.', r: '1 Reis 3:3-4' },
        { art: '🌙😴👑', bg: 'noite', fx: 'estrelas', text: 'Naquela noite, o Senhor apareceu a Salomão num sonho e disse: "Peça o que você quiser, e eu vou te dar."', r: '1 Reis 3:5' },
        { art: '👑🤔💭', bg: 'noite', fx: 'estrelas', text: 'Imagine! Deus deixando você pedir qualquer coisa! Salomão podia pedir ouro, vida longa ou vitória sobre os inimigos.', r: '1 Reis 3:5, 11' },
        { art: '👑👶🙏', bg: 'noite', fx: 'luz', text: 'Mas Salomão respondeu com humildade: "Senhor, eu sou como uma criança pequena, não sei nem como sair e entrar. E o teu povo é tão grande que nem dá para contar."', r: '1 Reis 3:7-8' },
        { art: '❤️👂⚖️', bg: 'noite', fx: 'luz', text: '"Dá ao teu servo um coração que entenda, para julgar o teu povo e saber distinguir o bem do mal." Salomão pediu sabedoria!', r: '1 Reis 3:9' },
        { art: '✨😊', bg: 'aurora', fx: 'brilho', text: 'O pedido agradou muito ao Senhor. Deus disse: "Porque você pediu isso, e não vida longa, nem riquezas, nem a morte dos inimigos, eu vou te dar um coração sábio como nunca houve antes, nem haverá depois."', r: '1 Reis 3:10-12' },
        { art: '💰👑🎁', bg: 'aurora', fx: 'brilho', text: '"E vou te dar também o que você não pediu: riquezas e glória, mais do que qualquer rei do seu tempo. E, se você andar nos meus caminhos, vou te dar vida longa."', r: '1 Reis 3:13-14' },
        { art: '👑🌅🙏', bg: 'aurora', fx: 'luz', text: 'Salomão acordou e entendeu que tinha sido um sonho de Deus. Voltou a Jerusalém, ofereceu sacrifícios diante da arca da aliança e fez uma festa para todos os seus servos.', r: '1 Reis 3:15' }
      ],
      god: 'Deus dá sabedoria a quem pede com humildade. Ele dá muito mais do que pedimos.',
      jesus: 'Salomão pediu sabedoria e foi o homem mais sábio do seu tempo. Mas a Bíblia diz que em Jesus "estão escondidos todos os tesouros da sabedoria e da ciência" (Colossenses 2:3). E Jesus nos ensinou a pedir primeiro o Reino de Deus, prometendo que todas as outras coisas seriam acrescentadas (Mateus 6:33), como aconteceu com Salomão.',
      verse: { ref: 'Tiago 1:5', tx: 'E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada.' },
      small: [
        { q: 'O que Deus disse a Salomão no sonho?', o: [['🎁', '"Peça o que quiser"'], ['😴', '"Vá dormir"'], ['🏃', '"Corra"']] },
        { q: 'O que Salomão pediu?', o: [['💭', 'Sabedoria'], ['💰', 'Ouro'], ['🍰', 'Bolo']] },
        { q: 'Deus deu mais do que ele pediu?', o: [['✅', 'Sim, muito mais'], ['❌', 'Não'], ['🤏', 'Menos']] }
      ],
      big: [
        { q: 'Onde Salomão ofereceu mil sacrifícios?', o: ['Em Gibeom', 'Em Belém', 'Em Siló', 'No Egito'], e: '1 Reis 3:4.' },
        { q: 'Como Salomão se descreveu?', o: ['Como uma criança pequena', 'Como o maior rei', 'Como um gigante', 'Como um guerreiro'], e: '1 Reis 3:7.' },
        { q: 'Por que o pedido agradou a Deus?', o: ['Não pediu coisas para si mesmo', 'Foi muito longo', 'Foi muito rápido', 'Pediu ouro'], e: '1 Reis 3:10-11.' },
        { q: 'O que Deus deu além da sabedoria?', o: ['Riquezas e glória', 'Nada', 'Só cavalos', 'Um exército'], e: '1 Reis 3:13.' }
      ],
      parents: 'O casamento de Salomão com a filha do Faraó (3:1) foi omitido; é o primeiro sinal do problema do capítulo 11. Ponto central: pedir a Deus sabedoria (Tiago 1:5). Sugestão: orar como Salomão antes das provas da escola. Leitura junto: 1 Reis 3:5-14.'
    },
    {
      id: 'sl3', title: 'As duas mães e o bebê', ref: '1 Reis 3:16-28', icon: '👶',
      recap: 'Na lição passada, Salomão pediu sabedoria a Deus, e Deus deu a ele um coração sábio.',
      scenes: [
        { art: '👩👩👑', bg: 'palacio', text: 'Um dia, duas mulheres apareceram diante do rei Salomão para resolver um problema muito difícil.', r: '1 Reis 3:16' },
        { art: '👩💬🏠', bg: 'palacio', text: 'A primeira disse: "Ó meu senhor, esta mulher e eu moramos na mesma casa. Eu tive um bebê. Três dias depois, ela também teve um bebê. Não havia mais ninguém conosco na casa."', r: '1 Reis 3:17-18' },
        { art: '🌙😢👶', bg: 'noite', text: '"De noite, o bebê dela morreu. Então ela se levantou no meio da noite, pegou o meu filho do meu lado enquanto eu dormia, e colocou o bebê que tinha morrido no meu colo."', r: '1 Reis 3:19-20' },
        { art: '🌅👀❗', bg: 'aurora', text: '"De manhã, quando fui amamentar, vi que o bebê não era o meu!"', r: '1 Reis 3:21' },
        { art: '👩😠👩', bg: 'palacio', text: 'A outra mulher gritou: "Não! O filho vivo é o meu, e o que morreu é o seu!" E as duas ficaram discutindo na frente do rei. Não havia testemunhas. Como saber quem falava a verdade?', r: '1 Reis 3:22' },
        { art: '👑🗡️❓', bg: 'palacio', text: 'Salomão pediu: "Tragam uma espada." E disse algo assustador, como um teste: "Dividam o menino vivo em duas partes e deem metade a cada uma."', r: '1 Reis 3:24-25' },
        { art: '👩😭🙏', bg: 'palacio', fx: 'coracoes', text: 'A mãe verdadeira, cheia de amor pelo filho, gritou: "Ah, meu senhor! Dê o menino vivo para ela! Não o matem de jeito nenhum!" A outra disse: "Nem meu nem seu! Dividam!"', r: '1 Reis 3:26' },
        { art: '👑👉👩👶', bg: 'palacio', fx: 'luz', text: 'Salomão nunca quis machucar o bebê: era só um teste para descobrir o coração das mães. Ele disse: "Deem o menino vivo à primeira mulher. Não o matem. Ela é a mãe dele."', r: '1 Reis 3:27' },
        { art: '👥😮✨', bg: 'aurora', fx: 'brilho', text: 'Todo Israel ouviu falar daquele julgamento, e o povo respeitou o rei, porque viu que a sabedoria de Deus estava nele para fazer justiça.', r: '1 Reis 3:28' }
      ],
      god: 'A sabedoria de Deus enxerga o coração e faz justiça. O amor verdadeiro se sacrifica pelo outro.',
      jesus: 'A mãe verdadeira preferiu perder o filho a vê-lo morrer: o amor verdadeiro se sacrifica. Jesus é ainda mais sábio que Salomão (Mateus 12:42) e conhece o coração de cada pessoa. E Jesus mostrou o amor mais verdadeiro de todos: deu a própria vida para que nós vivêssemos.',
      verse: { ref: '1 Reis 3:28', tx: 'Viram que havia nele a sabedoria de Deus, para fazer justiça.' },
      small: [
        { q: 'O que as duas mulheres disputavam?', o: [['👶', 'Um bebê'], ['🐱', 'Um gatinho'], ['💍', 'Um anel']] },
        { q: 'Salomão queria machucar o bebê?', o: [['❌', 'Não, era só um teste'], ['✅', 'Sim'], ['🤷', 'Não sabia']] },
        { q: 'Quem era a mãe verdadeira?', o: [['💛', 'A que quis salvar o bebê'], ['😠', 'A que quis dividir'], ['👑', 'O rei']] }
      ],
      big: [
        { q: 'Por que o caso era tão difícil?', o: ['Não havia testemunhas', 'Era de noite', 'O rei estava cansado', 'O bebê chorava'], e: '1 Reis 3:18.' },
        { q: 'O que Salomão queria descobrir com o teste?', o: ['O coração verdadeiro de cada mãe', 'Se a espada era boa', 'Quem era mais forte', 'Nada'], e: '1 Reis 3:26-27.' },
        { q: 'O que a mãe verdadeira disse?', o: ['"Deem o menino para ela, não o matem!"', '"Dividam"', '"Não ligo"', '"Fique o rei com ele"'], e: '1 Reis 3:26.' },
        { q: 'O que o povo percebeu?', o: ['Que a sabedoria de Deus estava em Salomão', 'Que o rei era cruel', 'Que as mães eram iguais', 'Nada'], e: '1 Reis 3:28.' }
      ],
      parents: 'A história fala da morte de um bebê e da ordem de "dividir" o menino. Deixe claro que era um teste e que nenhuma criança foi machucada. Ponto central: sabedoria que discerne o coração e amor que se sacrifica. Leitura junto: 1 Reis 3:16-28.'
    },
    {
      id: 'sl4', title: 'O homem mais sábio do mundo', ref: '1 Reis 4 – 5', icon: '🦉',
      recap: 'Na lição passada, Salomão descobriu quem era a mãe verdadeira do bebê.',
      scenes: [
        { art: '🏖️👥😊', bg: 'cidade', fx: 'brilho', text: 'No reinado de Salomão, o povo de Israel era muito numeroso, como a areia da praia. Todos comiam, bebiam e viviam alegres.', r: '1 Reis 4:20' },
        { art: '🍇🌳🕊️', bg: 'campo', fx: 'brilho', text: 'Havia paz em todas as fronteiras. A Bíblia diz que cada um morava em segurança "debaixo da sua videira e debaixo da sua figueira". Era um tempo de paz e fartura.', r: '1 Reis 4:24-25' },
        { art: '✨🧠🏖️', bg: 'aurora', fx: 'luz', text: 'Deus deu a Salomão muita sabedoria e inteligência, e um entendimento tão grande quanto a areia que está na praia do mar.', r: '1 Reis 4:29' },
        { art: '👑🌍🏆', bg: 'palacio', text: 'A sabedoria de Salomão era maior que a de todos os sábios do Oriente e do Egito. O nome dele ficou famoso em todas as nações ao redor.', r: '1 Reis 4:30-31' },
        { art: '📜3️⃣0️⃣0️⃣0️⃣', bg: 'palacio', text: 'Ele falou três mil provérbios e escreveu mil e cinco cânticos! Muitos desses provérbios estão no livro de Provérbios, na Bíblia.', r: '1 Reis 4:32' },
        { art: '🌲🌿🦁🐦🐍🐟', bg: 'jardim', fx: 'vento', text: 'Salomão também estudava a natureza: falava das árvores, desde o grande cedro do Líbano até a plantinha que nasce no muro. Falava dos animais, das aves, dos répteis e dos peixes. Ele era como um cientista!', r: '1 Reis 4:33' },
        { art: '🌍🚶👑', bg: 'palacio', text: 'Gente de todos os povos vinha para ouvir a sabedoria de Salomão, mandada pelos reis da terra.', r: '1 Reis 4:34' },
        { art: '🤝🌲🪵', bg: 'monte', text: 'Hirão, rei de Tiro, que tinha sido amigo de Davi, ficou alegre quando Salomão pediu madeira de cedro para o templo: "Bendito seja o Senhor, que deu a Davi um filho sábio!"', r: '1 Reis 5:1-7' }
      ],
      god: 'Deus é a fonte de toda sabedoria. Estudar a criação também é conhecer a sabedoria do Criador.',
      jesus: 'Gente de todos os povos vinha ouvir Salomão. Jesus disse: "Aqui está quem é mais do que Salomão" (Mateus 12:42). Pessoas de todas as nações vêm até Jesus para aprender. E Jesus também ensinava com a natureza: "Olhai para os lírios do campo... olhai para as aves do céu" (Mateus 6:26-28).',
      verse: { ref: 'Provérbios 9:10', tx: 'O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo a prudência.' },
      small: [
        { q: 'Como estava Israel no tempo de Salomão?', o: [['🕊️', 'Em paz e alegre'], ['⚔️', 'Em guerra'], ['😢', 'Triste']] },
        { q: 'Quantos provérbios Salomão falou?', o: [['3️⃣', 'Três mil'], ['1️⃣', 'Um'], ['🔟', 'Dez']] },
        { q: 'O que Salomão estudava?', o: [['🌳', 'As plantas e os animais'], ['🎮', 'Videogames'], ['🚀', 'Foguetes']] }
      ],
      big: [
        { q: 'Com o que a sabedoria de Salomão é comparada?', o: ['Com a areia da praia', 'Com as estrelas', 'Com o mar', 'Com uma montanha'], e: '1 Reis 4:29.' },
        { q: 'Quantos cânticos Salomão escreveu?', o: ['Mil e cinco', 'Cem', 'Dez', 'Três mil'], e: '1 Reis 4:32.' },
        { q: 'Onde fica o começo da sabedoria, segundo Provérbios?', o: ['No temor do Senhor', 'Na escola', 'No dinheiro', 'Na idade'], e: 'Provérbios 9:10; 1:7.' },
        { q: 'Quem mandou madeira de cedro para Salomão?', o: ['Hirão, rei de Tiro', 'O Faraó', 'A rainha de Sabá', 'Golias'], e: '1 Reis 5:1-10.' }
      ],
      parents: 'Ponto central: toda sabedoria verdadeira começa com o temor do Senhor (Provérbios 1:7; 9:10). Salomão como "cientista" mostra que estudar a criação glorifica a Deus. Os detalhes da administração e o trabalho forçado (4:1-28; 5:13-18) foram omitidos. Leitura junto: 1 Reis 4:29-34.'
    },
    {
      id: 'sl5', title: 'Provérbios: conselhos de pai para filho', ref: 'Provérbios 1 – 4', icon: '👨‍👦',
      recap: 'Na lição passada, Salomão ficou famoso no mundo todo pela sua sabedoria e pelos seus provérbios.',
      scenes: [
        { art: '📜👑', bg: 'palacio', text: 'O livro de Provérbios começa assim: "Provérbios de Salomão, filho de Davi, rei de Israel." Um provérbio é uma frase curta e sábia, fácil de lembrar.', r: 'Provérbios 1:1' },
        { art: '🎯🧠', bg: 'aurora', text: 'Salomão explica por que escreveu: para que as pessoas aprendam sabedoria e disciplina, entendam palavras sábias e aprendam a viver com justiça. E também "para dar aos jovens conhecimento".', r: 'Provérbios 1:2-4' },
        { art: '🙇✨📖', bg: 'aurora', fx: 'luz', text: 'E dá a frase mais importante do livro: "O temor do Senhor é o princípio do conhecimento." Temer a Deus é respeitá-lo e amá-lo tanto que queremos obedecê-lo.', r: 'Provérbios 1:7' },
        { art: '👨👦💬', bg: 'campo', fx: 'coracoes', text: 'Muitos provérbios são como cartas de um pai para o filho: "Filho meu, ouça a instrução do seu pai e não abandone o ensino da sua mãe."', r: 'Provérbios 1:8' },
        { art: '👥🚫🛤️', bg: 'cidade', text: '"Filho meu, se os pecadores quiserem te convencer, não aceite. Não ande no caminho deles." Escolher bem os amigos é questão de sabedoria.', r: 'Provérbios 1:10, 15' },
        { art: '❤️🛤️✨', bg: 'aurora', fx: 'luz', text: '"Confie no Senhor de todo o seu coração e não se apoie no seu próprio entendimento. Reconheça o Senhor em todos os seus caminhos, e Ele vai endireitar as suas veredas."', r: 'Provérbios 3:5-6' },
        { art: '💎👑', bg: 'aurora', fx: 'brilho', text: '"Feliz quem acha a sabedoria! Ela vale mais que a prata e o ouro, mais que as pedras preciosas. Nada do que você deseja se compara a ela."', r: 'Provérbios 3:13-15' },
        { art: '❤️🛡️💧', bg: 'aurora', fx: 'coracoes', text: '"Acima de tudo o que se deve guardar, guarde o seu coração, porque dele brotam as fontes da vida." O que entra no coração sai nas palavras e nas ações.', r: 'Provérbios 4:23' }
      ],
      god: 'Deus nos dá sabedoria pela sua Palavra e pelos pais. Temer a Deus é o começo de tudo.',
      jesus: 'Provérbios fala muito da sabedoria como algo precioso, mais que ouro. Paulo diz que Jesus "para nós foi feito por Deus sabedoria" (1 Coríntios 1:30). E Jesus, quando menino, era obediente aos pais e "crescia em sabedoria" (Lucas 2:51-52). Ele viveu Provérbios perfeitamente.',
      verse: { ref: 'Provérbios 4:23', tx: 'Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.' },
      small: [
        { q: 'O que é um provérbio?', o: [['📜', 'Uma frase curta e sábia'], ['🍕', 'Uma comida'], ['🎮', 'Um jogo']] },
        { q: 'Quem devemos ouvir, segundo Provérbios?', o: [['👨‍👩‍👦', 'O pai e a mãe'], ['🐒', 'O macaco'], ['📺', 'Só a TV']] },
        { q: 'O que devemos guardar acima de tudo?', o: [['❤️', 'O coração'], ['🧸', 'O ursinho'], ['🍬', 'As balas']] }
      ],
      big: [
        { q: 'Qual é o princípio do conhecimento?', o: ['O temor do Senhor', 'Ler muito', 'Ser velho', 'Ser rico'], e: 'Provérbios 1:7.' },
        { q: 'O que fazer se os pecadores quiserem nos convencer?', o: ['Não aceitar', 'Ir com eles', 'Fingir', 'Esconder dos pais'], e: 'Provérbios 1:10.' },
        { q: 'Em que não devemos nos apoiar?', o: ['No nosso próprio entendimento', 'Em Deus', 'Na Bíblia', 'Nos pais'], e: 'Provérbios 3:5.' },
        { q: 'Por que guardar o coração?', o: ['Dele brotam as fontes da vida', 'Para não doer', 'Porque é pequeno', 'Não precisa'], e: 'Provérbios 4:23.' }
      ],
      parents: 'Provérbios é um livro feito para pais e filhos ("filho meu"). Sugestão: ler um capítulo de Provérbios por dia, conforme o dia do mês (são 31). As advertências sobre a "mulher estranha" (Provérbios 5–7) foram omitidas para esta idade. Leitura junto: Provérbios 3:1-15.'
    },
    {
      id: 'sl6', title: 'Provérbios: a formiga e a língua', ref: 'Provérbios 6, 15, 18 e outros', icon: '🐜',
      recap: 'Na lição passada, Salomão aconselhou como um pai: "Confie no Senhor de todo o seu coração."',
      scenes: [
        { art: '🐜🐜🐜', bg: 'campo', text: 'Salomão gostava de ensinar com a natureza. Ele disse: "Vá olhar a formiga, preguiçoso! Observe o que ela faz e aprenda a ser sábio."', r: 'Provérbios 6:6' },
        { art: '🐜🌾📦', bg: 'campo', fx: 'brilho', text: '"Ela não tem chefe, nem fiscal, nem governante, mas no verão prepara a sua comida e na colheita junta o seu alimento." A formiga trabalha sem ninguém mandar!', r: 'Provérbios 6:7-8' },
        { art: '😴🛌⏰', bg: 'noite', text: '"Até quando você vai dormir, preguiçoso? Um pouco de sono, um pouco de cochilo, um pouco de cruzar os braços... e a pobreza chega como um ladrão."', r: 'Provérbios 6:9-11' },
        { art: '🗣️🔥💧', bg: 'aurora', text: 'Provérbios fala muito das palavras: "A resposta branda desvia o furor, mas a palavra dura faz subir a raiva." Uma palavra calma apaga a briga, como água no fogo.', r: 'Provérbios 15:1' },
        { art: '👅⚖️', bg: 'aurora', text: '"A morte e a vida estão no poder da língua." Com as palavras podemos machucar muito ou fazer muito bem.', r: 'Provérbios 18:21' },
        { art: '🍯💬💛', bg: 'aurora', fx: 'coracoes', text: '"Palavras bondosas são como mel: doces para a alma e saudáveis para o corpo."', r: 'Provérbios 16:24' },
        { art: '🤝👥', bg: 'campo', fx: 'coracoes', text: '"O amigo ama em todos os momentos, e o irmão nasce para a hora da angústia." E: "Quem anda com os sábios fica sábio."', r: 'Provérbios 17:17; 13:20' },
        { art: '👦🌱🌳', bg: 'jardim', fx: 'brilho', text: '"Ensine a criança no caminho em que deve andar, e, até quando envelhecer, não vai se desviar dele." O que aprendemos de pequenos fica para a vida toda!', r: 'Provérbios 22:6' }
      ],
      god: 'Deus se importa com o nosso trabalho, com as nossas palavras e com as nossas amizades.',
      jesus: 'Provérbios diz que a vida e a morte estão no poder da língua. Jesus ensinou que "a boca fala do que o coração está cheio" (Mateus 12:34), e que vamos dar contas de cada palavra. As palavras de Jesus eram sempre cheias de graça (Lucas 4:22). Quando Jesus muda o nosso coração, Ele muda também as nossas palavras.',
      verse: { ref: 'Provérbios 6:6', tx: 'Vai ter com a formiga, ó preguiçoso; olha para os seus caminhos, e sê sábio.' },
      small: [
        { q: 'Que bichinho ensina a trabalhar?', o: [['🐜', 'A formiga'], ['🦥', 'A preguiça'], ['🐌', 'A lesma']] },
        { q: 'Como são as palavras bondosas?', o: [['🍯', 'Doces como mel'], ['🍋', 'Azedas'], ['🔥', 'Quentes como fogo']] },
        { q: 'O que apaga uma briga?', o: [['💧', 'Uma resposta calma'], ['📣', 'Gritar mais'], ['👊', 'Bater']] }
      ],
      big: [
        { q: 'O que a formiga faz no verão?', o: ['Prepara a comida para depois', 'Dorme', 'Brinca', 'Viaja'], e: 'Provérbios 6:8.' },
        { q: 'O que diz Provérbios 15:1?', o: ['A resposta branda desvia o furor', 'Grite mais alto', 'Não responda nunca', 'Fale sempre'], e: 'Provérbios 15:1.' },
        { q: 'O que está no poder da língua?', o: ['A morte e a vida', 'Só o sabor', 'Nada', 'O dinheiro'], e: 'Provérbios 18:21.' },
        { q: 'Com quem devemos andar para ficar sábios?', o: ['Com os sábios', 'Com os tolos', 'Sozinhos', 'Com qualquer um'], e: 'Provérbios 13:20.' }
      ],
      parents: 'Lição prática para a família: trabalho (a formiga), palavras e amizades. Provérbios 22:6 é uma promessa e um chamado para os pais. Sugestão: escolham um provérbio por semana para colocar na geladeira. Leitura junto: Provérbios 6:6-11 e 15:1-4.'
    },
    {
      id: 'sl7', title: 'A construção do templo', ref: '1 Reis 5 – 7; 2 Crônicas 2 – 4', icon: '🔨',
      recap: 'Na lição passada, aprendemos com os provérbios de Salomão sobre o trabalho, as palavras e as amizades.',
      scenes: [
        { art: '👑💬🏛️', bg: 'palacio', text: 'Salomão disse: "Meu pai, Davi, não pôde construir uma casa para o nome do Senhor por causa das guerras. Mas agora Deus me deu descanso. Por isso vou construir o templo."', r: '1 Reis 5:3-5' },
        { art: '🌲🪵🌊', bg: 'mar', fx: 'ondas', text: 'Os trabalhadores do rei Hirão cortavam os grandes cedros do Líbano. As toras eram amarradas como jangadas e levadas pelo mar até perto de Jerusalém.', r: '1 Reis 5:8-9' },
        { art: '⛏️🪨🪨', bg: 'monte', text: 'Milhares de homens cortavam pedras enormes nas montanhas. As pedras já eram preparadas lá na pedreira.', r: '1 Reis 5:15-18' },
        { art: '🔇🏛️', bg: 'cidade', text: 'Por isso, enquanto o templo era construído, não se ouvia martelo, nem machado, nem nenhuma ferramenta de ferro no lugar da obra! Era um trabalho silencioso e reverente.', r: '1 Reis 6:7' },
        { art: '📅4️⃣8️⃣0️⃣', bg: 'aurora', text: 'A construção começou quatrocentos e oitenta anos depois que Israel saiu do Egito, no quarto ano do reinado de Salomão, no monte Moriá.', r: '1 Reis 6:1; 2 Crônicas 3:1' },
        { art: '🏛️🟨✨', bg: 'aurora', fx: 'brilho', text: 'Por dentro, as paredes eram de cedro, com flores e palmeiras entalhadas, e tudo foi coberto de ouro puro: as paredes, o chão e o altar. Brilhava!', r: '1 Reis 6:15, 18, 21-22, 29-30' },
        { art: '🏛️🧶📦', bg: 'aurora', fx: 'luz', text: 'O templo tinha o mesmo desenho do tabernáculo, só que maior e feito de pedra: o pátio, o lugar santo e o Lugar Santíssimo, onde ficaria a arca da aliança.', r: '1 Reis 6:16-20' },
        { art: '🏛️🔁🌊', bg: 'cidade', text: 'Havia também duas grandes colunas de bronze na entrada e um enorme tanque de bronze cheio de água, chamado "mar", em cima de doze bois de bronze, para os sacerdotes se lavarem.', r: '1 Reis 7:15-26' },
        { art: '7️⃣🏛️✅', bg: 'aurora', fx: 'brilho', text: 'Depois de sete anos de trabalho, o templo ficou pronto, exatamente como Deus tinha mostrado a Davi.', r: '1 Reis 6:38; 1 Crônicas 28:19' }
      ],
      god: 'Deus merece o melhor que temos. Ele quer morar no meio do seu povo.',
      jesus: 'O templo era o lugar onde Deus morava no meio do povo. Jesus disse que o seu próprio corpo era o templo verdadeiro (João 2:19-21). E, quando cremos em Jesus, Deus faz de nós "pedras vivas", construindo uma casa espiritual, a Igreja (1 Pedro 2:5), da qual Jesus é a pedra principal (Efésios 2:20-22).',
      verse: { ref: 'Salmos 127:1', tx: 'Se o Senhor não edificar a casa, em vão trabalham os que a edificam.' },
      small: [
        { q: 'O que Salomão construiu para Deus?', o: [['🏛️', 'O templo'], ['🎢', 'Um parque'], ['🏟️', 'Um estádio']] },
        { q: 'Com o que cobriram o templo por dentro?', o: [['🟨', 'Ouro'], ['🎨', 'Tinta'], ['🧻', 'Papel']] },
        { q: 'Que barulho não se ouvia na obra?', o: [['🔨', 'De martelo'], ['🎶', 'De música'], ['🐦', 'De passarinho']] }
      ],
      big: [
        { q: 'De onde vinha a madeira de cedro?', o: ['Do Líbano', 'Do Egito', 'De Belém', 'Do deserto'], e: '1 Reis 5:6.' },
        { q: 'Por que não se ouviam ferramentas na obra?', o: ['As pedras vinham prontas da pedreira', 'Era proibido trabalhar', 'Os homens eram mudos', 'Usavam máquinas'], e: '1 Reis 6:7.' },
        { q: 'Quanto tempo levou a construção?', o: ['Sete anos', 'Um mês', 'Quarenta anos', 'Um dia'], e: '1 Reis 6:38.' },
        { q: 'Que desenho o templo seguia?', o: ['O mesmo do tabernáculo, maior', 'O de uma pirâmide', 'O da torre de Babel', 'O de um palácio'], e: '1 Reis 6.' }
      ],
      parents: 'Para um engenheiro: vale explorar com a criança as dimensões do templo (1 Reis 6:2) e a pré-fabricação das pedras (6:7). Ponto central: a habitação de Deus, cumprida em Cristo e na Igreja. O trabalho forçado (5:13-16) foi omitido. Leitura junto: 1 Reis 6:1-14.'
    },
    {
      id: 'sl8', title: 'A glória enche o templo', ref: '1 Reis 8; 2 Crônicas 5 – 7', icon: '☁️',
      recap: 'Na lição passada, depois de sete anos, o templo ficou pronto, todo coberto de ouro.',
      scenes: [
        { art: '👥🎉🏛️', bg: 'cidade', fx: 'brilho', text: 'Salomão reuniu todo o povo de Israel em Jerusalém para a dedicação do templo, uma grande festa de inauguração.', r: '1 Reis 8:1-2' },
        { art: '🧔🧔📦', bg: 'cidade', fx: 'luz', text: 'Os sacerdotes levaram a arca da aliança, do jeito certo, nos ombros, e a colocaram no Lugar Santíssimo. Dentro da arca estavam só as duas tábuas de pedra que Moisés recebeu no Sinai.', r: '1 Reis 8:3-9' },
        { art: '🎺🎶🎶', bg: 'aurora', fx: 'brilho', text: 'Cento e vinte sacerdotes tocavam trombetas, e os cantores levitas cantavam todos juntos, como uma só voz: "O Senhor é bom, e a sua misericórdia dura para sempre!"', r: '2 Crônicas 5:12-13' },
        { art: '☁️🏛️✨', bg: 'aurora', fx: 'luz', text: 'Nesse momento, uma nuvem encheu o templo! Era a glória do Senhor, tão forte que os sacerdotes nem conseguiam ficar em pé para servir. Como no tabernáculo, Deus veio morar ali!', r: '1 Reis 8:10-11; 2 Crônicas 5:13-14' },
        { art: '👑🙇🙌', bg: 'aurora', fx: 'luz', text: 'Salomão se ajoelhou diante de todo o povo, levantou as mãos para o céu e orou: "Ó Senhor, Deus de Israel, não há Deus como tu, no céu nem na terra, que guardas a aliança e a misericórdia!"', r: '1 Reis 8:22-23; 2 Crônicas 6:13' },
        { art: '🌌🏛️🤏', bg: 'noite', fx: 'estrelas', text: '"Mas será que Deus vai mesmo morar na terra? Nem o céu dos céus consegue te conter, quanto menos esta casa que eu construí!" Salomão sabia que Deus é muito maior que o templo.', r: '1 Reis 8:27' },
        { art: '🙏👂💛', bg: 'aurora', fx: 'coracoes', text: '"Ouve as orações que forem feitas nesta casa. E, quando ouvires, perdoa!" Salomão pediu que Deus ouvisse o povo e até os estrangeiros que viessem orar ali.', r: '1 Reis 8:28-30, 41-43' },
        { art: '🔥⬇️🏛️', bg: 'aurora', fx: 'luz', text: 'Quando Salomão terminou de orar, desceu fogo do céu e consumiu os sacrifícios, e a glória do Senhor encheu o templo. Todo o povo se ajoelhou com o rosto em terra: "Ele é bom, e a sua misericórdia dura para sempre!"', r: '2 Crônicas 7:1-3' },
        { art: '✨🌙💬', bg: 'noite', fx: 'luz', text: 'Depois, Deus apareceu a Salomão de noite: "Se o meu povo, que se chama pelo meu nome, se humilhar, orar, me buscar e se converter dos seus maus caminhos, eu vou ouvir dos céus, perdoar o seu pecado e sarar a sua terra."', r: '2 Crônicas 7:12-14' }
      ],
      god: 'Deus é grande demais para caber num templo, mas mesmo assim Ele vem morar com o seu povo e ouve as orações.',
      jesus: 'A glória de Deus encheu o templo de Salomão. Quando Jesus nasceu, a glória de Deus veio morar num bebê: "E vimos a sua glória" (João 1:14). E, no Pentecostes, desceu fogo sobre os discípulos (Atos 2:3): agora o Espírito Santo mora em cada um que crê em Jesus. Por meio de Jesus, Deus ouve as nossas orações de qualquer lugar.',
      verse: { ref: '2 Crônicas 7:14', tx: 'Se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face e se converter dos seus maus caminhos, então eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra.' },
      small: [
        { q: 'O que encheu o templo?', o: [['☁️', 'A nuvem da glória de Deus'], ['💧', 'Água'], ['🎈', 'Balões']] },
        { q: 'O que desceu do céu quando Salomão orou?', o: [['🔥', 'Fogo'], ['❄️', 'Neve'], ['🍬', 'Balas']] },
        { q: 'Deus cabe numa casa?', o: [['🌌', 'Não, Ele é muito maior'], ['🏠', 'Sim'], ['🤏', 'Numa caixinha']] }
      ],
      big: [
        { q: 'O que havia dentro da arca?', o: ['Só as duas tábuas da Lei', 'Ouro', 'Maná e a vara', 'Nada'], e: '1 Reis 8:9.' },
        { q: 'O que os cantores cantavam?', o: ['"O Senhor é bom, e a sua misericórdia dura para sempre"', '"Viva Salomão"', '"Somos fortes"', 'Nada'], e: '2 Crônicas 5:13.' },
        { q: 'O que Salomão disse sobre o tamanho de Deus?', o: ['Nem o céu dos céus o contém', 'Que Deus cabe no templo', 'Que Deus é pequeno', 'Nada'], e: '1 Reis 8:27.' },
        { q: 'Quem Salomão pediu que Deus ouvisse no templo?', o: ['O povo e até os estrangeiros', 'Só os sacerdotes', 'Só o rei', 'Ninguém'], e: '1 Reis 8:41-43.' }
      ],
      parents: 'Ponto central: a habitação de Deus e a oração (a grande oração de 1 Reis 8). 2 Crônicas 7:14 é um chamado ao arrependimento muito conhecido. Os 22 mil bois e 120 mil ovelhas sacrificados (8:63) foram omitidos. Leitura junto: 1 Reis 8:22-30 e 2 Crônicas 7:1-3.'
    },
    {
      id: 'sl9', title: 'A rainha de Sabá', ref: '1 Reis 10', icon: '👸',
      recap: 'Na lição passada, a glória de Deus encheu o templo, e Salomão orou diante de todo o povo.',
      scenes: [
        { art: '👸👂🌍', bg: 'palacio', text: 'Muito longe de Israel, no sul da Arábia, vivia a rainha de Sabá. Ela ouviu falar da fama de Salomão e do nome do Senhor, e decidiu ir ver com os próprios olhos.', r: '1 Reis 10:1' },
        { art: '🐪🐪🐪🎁', bg: 'deserto', fx: 'vento', text: 'Ela viajou com uma caravana enorme, com camelos carregados de perfumes, muito ouro e pedras preciosas.', r: '1 Reis 10:2' },
        { art: '👸❓👑', bg: 'palacio', text: 'A rainha veio testar Salomão com perguntas difíceis, enigmas que ninguém conseguia responder. Ela contou a ele tudo o que tinha no coração.', r: '1 Reis 10:1-2' },
        { art: '👑💡✅', bg: 'palacio', fx: 'brilho', text: 'Salomão respondeu todas as perguntas. Nenhuma era difícil demais para ele!', r: '1 Reis 10:3' },
        { art: '👸😮🏛️', bg: 'palacio', text: 'A rainha viu a sabedoria de Salomão, o palácio, a comida da mesa, os servos bem vestidos e as ofertas que ele levava ao templo do Senhor. Ela ficou sem fôlego!', r: '1 Reis 10:4-5' },
        { art: '👸💬', bg: 'palacio', text: 'Ela disse: "Era verdade o que ouvi na minha terra! Eu não acreditava, até vir e ver com os meus olhos. E não me contaram nem a metade! A sua sabedoria é muito maior do que a fama!"', r: '1 Reis 10:6-7' },
        { art: '👸🙌✨', bg: 'aurora', fx: 'luz', text: '"Bendito seja o Senhor, o seu Deus, que se agradou de você e o colocou no trono de Israel! Por causa do amor eterno do Senhor por Israel, Ele fez você rei, para fazer justiça."', r: '1 Reis 10:9' },
        { art: '🎁↔️🎁', bg: 'palacio', fx: 'brilho', text: 'A rainha deu a Salomão muito ouro, perfumes e pedras preciosas. E Salomão deu a ela tudo o que ela quis pedir. Depois, ela voltou para a sua terra.', r: '1 Reis 10:10, 13' },
        { art: '🟨🐎💰', bg: 'palacio', text: 'Salomão ficou riquíssimo: a prata em Jerusalém era tão comum quanto as pedras! Mas ele também começou a juntar muitos cavalos e muito ouro, as coisas que a Lei avisava para um rei não juntar.', r: '1 Reis 10:21, 26-28; Deuteronômio 17:16-17' }
      ],
      god: 'A sabedoria e a bondade de Deus atraem pessoas de longe. O que Deus dá é sempre maior do que imaginamos.',
      jesus: 'Jesus contou essa história: "A rainha do Sul veio dos confins da terra para ouvir a sabedoria de Salomão. E eis aqui está quem é mais do que Salomão" (Mateus 12:42). A rainha viajou muito para ouvir Salomão; nós podemos ouvir Jesus todos os dias, pela Bíblia! E, como ela, quem conhece Jesus diz: "Não me contaram nem a metade!"',
      verse: { ref: 'Mateus 12:42', tx: 'E eis que está aqui quem é mais do que Salomão.' },
      small: [
        { q: 'Quem veio visitar Salomão?', o: [['👸', 'A rainha de Sabá'], ['🧌', 'Um gigante'], ['🐉', 'Um dragão']] },
        { q: 'Como ela viajou?', o: [['🐪', 'Com camelos'], ['✈️', 'De avião'], ['🚂', 'De trem']] },
        { q: 'Quem é mais sábio que Salomão?', o: [['👑', 'Jesus'], ['🦉', 'A coruja'], ['👸', 'A rainha']] }
      ],
      big: [
        { q: 'Por que a rainha foi visitar Salomão?', o: ['Ouviu da sua fama e do nome do Senhor', 'Para fazer guerra', 'Para morar lá', 'Porque se perdeu'], e: '1 Reis 10:1.' },
        { q: 'O que a rainha disse sobre a fama de Salomão?', o: ['"Não me contaram nem a metade"', '"Era mentira"', '"Era exagero"', '"Esperava mais"'], e: '1 Reis 10:7.' },
        { q: 'A quem a rainha louvou?', o: ['Ao Senhor, o Deus de Salomão', 'Ao Faraó', 'A Baal', 'A ela mesma'], e: '1 Reis 10:9.' },
        { q: 'Que perigo começou a aparecer na vida de Salomão?', o: ['Juntar muito ouro e cavalos, contra a Lei', 'Ficar pobre', 'Perder a sabedoria', 'Ficar doente'], e: 'Deuteronômio 17:16-17.' }
      ],
      parents: 'Ponto central: a sabedoria de Deus atrai as nações (cumprimento parcial de Gênesis 12:3), e Jesus é "mais do que Salomão". A última cena prepara a queda do próximo capítulo. Leitura junto: 1 Reis 10:1-10.'
    },
    {
      id: 'sl10', title: 'Cantares: o amor que Deus criou', ref: 'Cântico dos Cânticos', icon: '💐',
      recap: 'Na lição passada, a rainha de Sabá visitou Salomão e disse: "Não me contaram nem a metade!"',
      scenes: [
        { art: '📜💐', bg: 'jardim', text: 'Salomão escreveu mil e cinco cânticos. Um deles está na Bíblia com um nome especial: "Cântico dos Cânticos", ou seja, "o mais bonito de todos os cânticos".', r: 'Cantares 1:1; 1 Reis 4:32' },
        { art: '💍👫', bg: 'jardim', fx: 'coracoes', text: 'É um poema de amor entre um noivo e uma noiva, que depois se casam. Ele mostra que o amor entre marido e mulher é um presente bonito que Deus criou, desde o jardim do Éden.', r: 'Cantares 3:11; Gênesis 2:24' },
        { art: '🌸🌿🕊️', bg: 'jardim', fx: 'brilho', text: 'O poema é cheio de imagens da natureza: flores, vinhas, pombas, gazelas e jardins perfumados. "O inverno passou, a chuva acabou, as flores aparecem na terra, e chegou o tempo de cantar!"', r: 'Cantares 2:11-12' },
        { art: '💛🔁💛', bg: 'aurora', fx: 'coracoes', text: 'A noiva diz: "O meu amado é meu, e eu sou dele." É um amor fiel, de um só para um só, para a vida inteira.', r: 'Cantares 2:16' },
        { art: '⏳💐', bg: 'jardim', text: 'O livro dá um conselho repetido várias vezes: não apressar o amor, esperar o tempo certo. "Não despertem o amor antes da hora."', r: 'Cantares 2:7; 8:4' },
        { art: '🌊🔥💛', bg: 'mar', fx: 'ondas', text: 'E diz uma frase linda: "As muitas águas não conseguem apagar este amor, nem os rios conseguem afogá-lo." O amor verdadeiro é forte e não desiste.', r: 'Cantares 8:6-7' },
        { art: '✨👰', bg: 'aurora', fx: 'luz', text: 'Por muitos séculos, a igreja também leu esse cântico como uma figura de um amor ainda maior: o amor de Deus pelo seu povo, e de Cristo pela sua Igreja.', r: 'Efésios 5:25-32' }
      ],
      god: 'Deus criou o amor e o casamento. O amor que Ele dá é fiel, forte e não desiste.',
      jesus: 'A Bíblia chama a Igreja de "noiva de Cristo" (Apocalipse 19:7; 21:2). Paulo diz que o casamento é uma figura do amor de Jesus pela Igreja: "Cristo amou a igreja, e a si mesmo se entregou por ela" (Efésios 5:25). O amor de Jesus por nós é como o de Cantares: nenhuma água consegue apagar.',
      verse: { ref: 'Cantares 8:7', tx: 'As muitas águas não podem apagar este amor, nem os rios afogá-lo.' },
      small: [
        { q: 'Sobre o que fala Cantares?', o: [['💍', 'O amor entre marido e mulher'], ['⚽', 'Futebol'], ['🚀', 'Foguetes']] },
        { q: 'Quem criou o amor e o casamento?', o: [['✨', 'Deus'], ['🤖', 'Os robôs'], ['🐒', 'Os macacos']] },
        { q: 'A água consegue apagar o amor verdadeiro?', o: [['❌', 'Não'], ['✅', 'Sim'], ['🤷', 'Às vezes']] }
      ],
      big: [
        { q: 'O que quer dizer "Cântico dos Cânticos"?', o: ['O mais bonito de todos os cânticos', 'Um cântico pequeno', 'Um cântico triste', 'Um cântico de guerra'], e: 'Cantares 1:1.' },
        { q: 'O que a noiva diz em Cantares 2:16?', o: ['"O meu amado é meu, e eu sou dele"', '"Vou embora"', '"Não sei"', '"Quero ouro"'], e: 'Cantares 2:16.' },
        { q: 'Qual conselho se repete no livro?', o: ['Não despertar o amor antes da hora', 'Casar muito cedo', 'Nunca casar', 'Ter muitas esposas'], e: 'Cantares 2:7; 3:5; 8:4.' },
        { q: 'De que amor maior Cantares é uma figura?', o: ['Do amor de Cristo pela Igreja', 'Do amor pelos animais', 'Do amor pelo dinheiro', 'De nenhum'], e: 'Efésios 5:25-32.' }
      ],
      parents: 'Cântico dos Cânticos é um poema de amor conjugal com linguagem adulta; o app apresenta só o tema geral, de forma adequada para crianças. Recomendamos que os pais leiam e decidam o que compartilhar. Ponto central: o amor e o casamento são criação de Deus, e Cristo ama a Igreja. Leitura junto: Cantares 2:10-13 e 8:6-7.'
    },
    {
      id: 'sl11', title: 'O coração de Salomão se desvia', ref: '1 Reis 11', icon: '💔',
      recap: 'Na lição passada, vimos que Cantares fala do amor fiel que Deus criou.',
      scenes: [
        { art: '👑⚠️📜', bg: 'palacio', text: 'Deus tinha avisado na Lei que o rei não devia ter muitas esposas, para que o seu coração não se afastasse de Deus.', r: 'Deuteronômio 17:17' },
        { art: '👑👸👸👸', bg: 'palacio', text: 'Mas Salomão desobedeceu. Ele se casou com muitas mulheres de outros povos, que adoravam outros deuses, e que Deus tinha mandado não trazer para Israel.', r: '1 Reis 11:1-3' },
        { art: '👴🗿🗿', bg: 'monte', text: 'Quando Salomão ficou velho, as suas esposas desviaram o coração dele para outros deuses. O homem mais sábio do mundo começou a adorar ídolos!', r: '1 Reis 11:4' },
        { art: '⛰️🗿🏗️', bg: 'monte', text: 'Ele chegou a construir altares para os deuses falsos de Moabe e de Amom, num monte bem em frente a Jerusalém, perto do templo que ele mesmo tinha construído para o Senhor.', r: '1 Reis 11:5-8' },
        { art: '💔❤️⬇️', bg: 'noite', text: 'A Bíblia diz uma frase muito triste: "O coração de Salomão não era inteiro com o Senhor, como tinha sido o de Davi, seu pai."', r: '1 Reis 11:4, 6' },
        { art: '✨😞💬', bg: 'noite', fx: 'luz', text: 'O Senhor ficou irado com Salomão, porque Ele tinha aparecido a ele duas vezes. Deus disse: "Vou tirar o reino de você e dar a um servo seu. Mas, por amor a Davi, não vou fazer isso enquanto você viver, e vou deixar uma tribo para o seu filho."', r: '1 Reis 11:9-13' },
        { art: '🧑🧥✂️1️⃣0️⃣', bg: 'campo', text: 'Um profeta chamado Aías encontrou um jovem trabalhador chamado Jeroboão, rasgou uma capa nova em doze pedaços e disse: "Pegue dez pedaços. Deus vai te dar dez tribos de Israel."', r: '1 Reis 11:29-31' },
        { art: '👑🕊️⏳', bg: 'palacio', text: 'Salomão reinou quarenta anos e morreu. O reino tinha começado tão bem... mas um coração dividido trouxe uma grande tristeza para Israel, como veremos no próximo arco.', r: '1 Reis 11:41-43' }
      ],
      god: 'Deus quer o nosso coração inteiro. Começar bem não basta: precisamos perseverar até o fim.',
      jesus: 'Até o rei mais sábio caiu. Isso mostra que Israel precisava de um Rei melhor que Salomão. Jesus é esse Rei: Ele foi tentado em tudo, mas nunca desviou o coração do Pai (Hebreus 4:15). E Jesus promete guardar até o fim os que confiam nele: "Ninguém as arrebatará da minha mão" (João 10:28).',
      verse: { ref: '1 Coríntios 10:12', tx: 'Aquele, pois, que cuida estar em pé, olhe não caia.' },
      small: [
        { q: 'O que aconteceu com o coração de Salomão?', o: [['💔', 'Se desviou de Deus'], ['💪', 'Ficou mais forte'], ['😴', 'Dormiu']] },
        { q: 'O que Salomão construiu de errado?', o: [['🗿', 'Altares para ídolos'], ['🏛️', 'O templo'], ['🏰', 'Um castelo']] },
        { q: 'Em quantos pedaços a capa foi rasgada?', o: [['1️⃣2️⃣', 'Doze'], ['2️⃣', 'Dois'], ['💯', 'Cem']] }
      ],
      big: [
        { q: 'Qual mandamento para os reis Salomão quebrou?', o: ['Não ter muitas esposas', 'Não ter cavalos', 'Não construir templos', 'Não escrever provérbios'], e: 'Deuteronômio 17:17; 1 Reis 11:2-3.' },
        { q: 'O que as esposas fizeram com o coração de Salomão?', o: ['Desviaram para outros deuses', 'Deixaram mais sábio', 'Nada', 'Fizeram-no orar mais'], e: '1 Reis 11:4.' },
        { q: 'Por que Deus não tirou o reino enquanto Salomão vivia?', o: ['Por amor a Davi', 'Porque esqueceu', 'Porque Salomão se arrependeu', 'Por acaso'], e: '1 Reis 11:12.' },
        { q: 'Quem receberia dez tribos?', o: ['Jeroboão', 'Roboão', 'Aías', 'Hirão'], e: '1 Reis 11:31.' }
      ],
      parents: 'As "setecentas mulheres e trezentas concubinas" (11:3) e os nomes dos ídolos (Quemós, Moloque) foram resumidos. Ponto central: idolatria e coração dividido, e o perigo de pequenas desobediências acumuladas (casamento com a filha do Faraó, cavalos, ouro). Leitura junto: 1 Reis 11:1-13.'
    },
    {
      id: 'sl12', title: 'Eclesiastes: tudo é vazio sem Deus', ref: 'Eclesiastes', icon: '🌬️',
      recap: 'Na lição passada, o coração de Salomão se desviou de Deus no fim da sua vida.',
      scenes: [
        { art: '👴📜🌬️', bg: 'deserto', fx: 'vento', text: 'O livro de Eclesiastes é escrito pelo "Pregador", filho de Davi, rei em Jerusalém, alguém que tinha experimentado de tudo na vida. Ele começa assim: "Vaidade de vaidades! Tudo é vaidade!"', r: 'Eclesiastes 1:1-2' },
        { art: '🫧💨', bg: 'deserto', fx: 'vento', text: '"Vaidade" quer dizer vapor, fumaça, sopro: algo que parece importante, mas some num instante, como uma bolha de sabão.', r: 'Eclesiastes 1:2, 14' },
        { art: '🏰🌳🎶💰', bg: 'palacio', text: 'O Pregador conta que procurou a felicidade em tudo: construiu palácios, plantou jardins e pomares, juntou prata e ouro, teve cantores, festas e tudo o que os olhos desejaram.', r: 'Eclesiastes 2:4-10' },
        { art: '🤷💨', bg: 'deserto', fx: 'vento', text: '"Então olhei para tudo o que eu tinha feito... e tudo era vaidade, como correr atrás do vento." Nada daquilo enchia o coração dele.', r: 'Eclesiastes 2:11' },
        { art: '⏰🌱🍂', bg: 'campo', fx: 'vento', text: 'Ele percebeu que Deus organiza o tempo: "Tudo tem o seu tempo determinado: tempo de nascer e tempo de morrer, tempo de plantar e tempo de colher, tempo de chorar e tempo de rir, tempo de calar e tempo de falar."', r: 'Eclesiastes 3:1-7' },
        { art: '♾️❤️', bg: 'aurora', fx: 'luz', text: '"Deus fez tudo bonito no seu tempo, e colocou a eternidade no coração do homem." Por isso, só as coisas deste mundo nunca nos satisfazem: fomos feitos para Deus!', r: 'Eclesiastes 3:11' },
        { art: '👦🌅💛', bg: 'aurora', fx: 'brilho', text: 'E deu um conselho especial para os jovens e as crianças: "Lembre-se do seu Criador nos dias da sua juventude, antes que cheguem os dias difíceis."', r: 'Eclesiastes 12:1' },
        { art: '🎯📖🙇', bg: 'aurora', fx: 'luz', text: 'E terminou o livro assim: "De tudo o que se ouviu, a conclusão é esta: tema a Deus e guarde os seus mandamentos, porque isso é o dever de todo homem." Depois de procurar em tudo, ele descobriu: só Deus dá sentido à vida.', r: 'Eclesiastes 12:13' }
      ],
      god: 'Sem Deus, tudo passa como o vento. Com Ele, a vida tem sentido. Ele colocou a eternidade no nosso coração.',
      jesus: 'O Pregador procurou a felicidade em tudo e só encontrou vento. Jesus disse à mulher samaritana: "Quem beber desta água tornará a ter sede, mas aquele que beber da água que eu lhe der nunca terá sede" (João 4:13-14). E Jesus veio para que tenhamos "vida, e vida com abundância" (João 10:10). Só Ele enche o coração que Deus fez para a eternidade.',
      verse: { ref: 'Eclesiastes 12:1', tx: 'Lembra-te também do teu Criador nos dias da tua mocidade.' },
      small: [
        { q: 'Com o que se parecem as coisas sem Deus?', o: [['🫧', 'Bolhas que somem'], ['🪨', 'Pedras firmes'], ['🏔️', 'Montanhas']] },
        { q: 'Quando devemos lembrar do Criador?', o: [['👦', 'Desde pequenos'], ['👴', 'Só quando velhos'], ['🚫', 'Nunca']] },
        { q: 'Quem dá sentido à vida?', o: [['✨', 'Deus'], ['💰', 'O dinheiro'], ['🎮', 'Os jogos']] }
      ],
      big: [
        { q: 'O que quer dizer "vaidade" em Eclesiastes?', o: ['Vapor, sopro, algo que some', 'Ficar se olhando no espelho', 'Orgulho', 'Beleza'], e: 'Eclesiastes 1:2.' },
        { q: 'O que o Pregador concluiu depois de ter tudo?', o: ['Era como correr atrás do vento', 'Era o mais feliz do mundo', 'Precisava de mais', 'Nada'], e: 'Eclesiastes 2:11.' },
        { q: 'O que Deus colocou no coração do homem?', o: ['A eternidade', 'O medo', 'A preguiça', 'Nada'], e: 'Eclesiastes 3:11.' },
        { q: 'Qual é a conclusão de Eclesiastes?', o: ['Temer a Deus e guardar os seus mandamentos', 'Aproveitar tudo', 'Ficar rico', 'Não fazer nada'], e: 'Eclesiastes 12:13.' }
      ],
      parents: 'Encerramento do arco de Salomão. A tradição atribui Eclesiastes a Salomão (o "filho de Davi", 1:1), talvez como reflexão no fim da vida. Ponto central: sem Deus, tudo é "hebel" (vapor); o coração foi feito para a eternidade (3:11). Partes pessimistas do livro foram omitidas. Leitura junto: Eclesiastes 3:1-11 e 12:1, 13.'
    }
  ]
};
