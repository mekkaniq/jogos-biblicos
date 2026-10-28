/* A Grande História da Bíblia — Arco 2: Abraão, o amigo de Deus (Gênesis 12–25)
   Regra: nenhuma imagem de Jesus nem de Deus; quando o Senhor aparece, usamos luz (✨). */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.abraao = {
  id: 'abraao', n: 2, name: 'Abraão, o amigo de Deus', sub: 'A promessa começa com uma família', ref: 'Gênesis 12–25', icon: '⭐', scene: 'deserto',
  intro: 'Depois de Babel, as pessoas estavam espalhadas pelo mundo e longe de Deus. Então Deus chamou um homem, Abrão, e fez com ele uma promessa enorme: por meio da família dele, todas as famílias da terra seriam abençoadas. Vamos acompanhar a vida desse homem que aprendeu a confiar em Deus.',
  lessons: [
    {
      id: 'a1', title: 'O chamado de Abrão', ref: 'Gênesis 12:1-9', icon: '🧭',
      recap: 'No arco passado, a família de Terá saiu de Ur e parou em Harã. Abrão e Sarai não tinham filhos.',
      scenes: [
        { art: '🏙️👴', bg: 'cidade', text: 'Abrão morava em Harã com a família. Seu pai, Terá, morreu ali. Abrão já tinha setenta e cinco anos.', r: 'Gênesis 11:31-32; 12:4' },
        { art: '✨💬👴', bg: 'aurora', fx: 'luz', text: 'Então o Senhor falou com Abrão: "Saia da sua terra, do meio dos seus parentes e da casa do seu pai, e vá para a terra que eu vou te mostrar."', r: 'Gênesis 12:1' },
        { art: '❓🗺️', bg: 'deserto', text: 'Deus não disse o nome da terra nem mostrou o mapa. Só disse: vá! Abrão teria que confiar em Deus a cada passo.', r: 'Gênesis 12:1; Hebreus 11:8' },
        { art: '✨🌍', bg: 'aurora', fx: 'brilho', text: 'E Deus prometeu: "Eu vou fazer de você uma grande nação. Vou te abençoar e engrandecer o seu nome. E em você serão benditas todas as famílias da terra."', r: 'Gênesis 12:2-3' },
        { art: '🗼➡️⭐', bg: 'aurora', text: 'Lembra de Babel? Lá as pessoas queriam fazer um nome para si mesmas. Agora é Deus quem promete engrandecer o nome de Abrão. A grandeza verdadeira vem de Deus.', r: 'Gênesis 11:4; 12:2' },
        { art: '👴👵🐪', bg: 'deserto', fx: 'vento', text: 'E Abrão foi, como o Senhor tinha mandado! Levou a esposa Sarai, o sobrinho Ló, os empregados e os animais.', r: 'Gênesis 12:4-5' },
        { art: '⛺🌳', bg: 'campo', text: 'Eles chegaram à terra de Canaã e pararam perto de um grande carvalho, em Siquém. Mas a terra já tinha moradores: os cananeus.', r: 'Gênesis 12:6' },
        { art: '✨👴', bg: 'aurora', fx: 'luz', text: 'Ali o Senhor apareceu a Abrão e disse: "Esta terra eu vou dar aos seus descendentes." Abrão nem tinha filhos ainda, mas creu.', r: 'Gênesis 12:7' },
        { art: '🪨🔥🙏', bg: 'monte', fx: 'luz', text: 'Abrão construiu um altar e adorou ao Senhor. E, por onde ia, montando sua tenda, ele construía altares e invocava o nome do Senhor.', r: 'Gênesis 12:7-9' }
      ],
      god: 'Deus chama e promete. Ele cumpre a sua palavra, mesmo quando ainda não vemos como.',
      jesus: 'Deus prometeu que, pela família de Abrão, todas as famílias da terra seriam abençoadas. Essa bênção é Jesus! Gálatas 3:8 diz que essa promessa já era o evangelho anunciado a Abraão. E Jesus também chama: "Vem e segue-me."',
      verse: { ref: 'Gênesis 12:2', tx: 'E far-te-ei uma grande nação, e abençoar-te-ei e engrandecerei o teu nome; e tu serás uma bênção.' },
      small: [
        { q: 'O que Deus pediu para Abrão?', o: [['🚶', 'Sair e ir para outra terra'], ['🏠', 'Ficar em casa'], ['😴', 'Dormir']] },
        { q: 'Abrão obedeceu?', o: [['✅', 'Sim, ele foi'], ['❌', 'Não'], ['🤷', 'Mais ou menos']] },
        { q: 'O que Abrão construía por onde passava?', o: [['🪨', 'Altares para Deus'], ['🏰', 'Castelos'], ['🎡', 'Parquinhos']] }
      ],
      big: [
        { q: 'Quantos anos Abrão tinha quando saiu de Harã?', o: ['75 anos', '10 anos', '30 anos', '100 anos'], e: 'Gênesis 12:4.' },
        { q: 'O que Deus prometeu a Abrão?', o: ['Que nele todas as famílias seriam abençoadas', 'Que ele seria rei do Egito', 'Que nunca ia envelhecer', 'Que ia ganhar muito ouro'], e: 'Gênesis 12:3.' },
        { q: 'Qual a diferença entre Babel e Abrão?', o: ['Em Babel queriam fazer um nome; com Abrão, é Deus quem engrandece', 'Não há diferença', 'Abrão também fez uma torre', 'Babel ficava em Canaã'], e: 'A grandeza verdadeira vem de Deus.' },
        { q: 'Como se chamava a terra para onde Abrão foi?', o: ['Canaã', 'Egito', 'Babilônia', 'Roma'], e: 'Gênesis 12:5.' }
      ],
      parents: 'Ponto central: fé é obedecer antes de entender tudo (Hebreus 11:8). Gênesis 12:1-3 é uma das passagens-chave da Bíblia inteira: a bênção para todas as famílias da terra se cumpre em Cristo (Gálatas 3:8, 16). Leitura junto: Gênesis 12:1-9.'
    },
    {
      id: 'a2', title: 'Abrão no Egito', ref: 'Gênesis 12:10-20', icon: '🐫',
      recap: 'Na lição passada, Abrão obedeceu a Deus e foi para Canaã, a terra que Deus prometeu.',
      scenes: [
        { art: '🌾🚫😟', bg: 'deserto', text: 'Pouco tempo depois, veio uma fome muito forte na terra de Canaã. Não havia comida para as pessoas nem para os animais.', r: 'Gênesis 12:10' },
        { art: '🐪➡️🏛️', bg: 'deserto', fx: 'vento', text: 'Então Abrão desceu para o Egito, onde havia comida. A Bíblia não diz que ele perguntou a Deus antes.', r: 'Gênesis 12:10' },
        { art: '👴😨👵', bg: 'deserto', text: 'Sarai era muito bonita. Abrão ficou com medo: "Os egípcios vão querer você e vão me matar." E pediu: "Diga que você é minha irmã."', r: 'Gênesis 12:11-13' },
        { art: '🤥', bg: 'cidade', text: 'Era uma meia verdade, que funcionava como mentira. Sarai era parente de Abrão, mas era a esposa dele! O homem de fé teve medo e não confiou que Deus podia protegê-lo.', r: 'Gênesis 12:13; 20:12' },
        { art: '👑🏛️👵', bg: 'palacio', text: 'Os oficiais do Faraó, o rei do Egito, viram Sarai e falaram dela para o rei. E Sarai foi levada para o palácio do Faraó.', r: 'Gênesis 12:14-15' },
        { art: '🐑🐪🎁', bg: 'palacio', text: 'Por causa dela, o Faraó deu a Abrão muitos presentes: ovelhas, bois, jumentos, camelos e servos. Mas Abrão tinha perdido a sua esposa por causa da mentira.', r: 'Gênesis 12:16' },
        { art: '✨🛡️', bg: 'aurora', fx: 'luz', text: 'Mas Deus não abandonou Sarai nem a promessa. O Senhor mandou grandes pragas sobre o Faraó e a casa dele.', r: 'Gênesis 12:17' },
        { art: '👑😠💬', bg: 'palacio', text: 'O Faraó chamou Abrão: "Por que você não me disse que ela era sua esposa? Por que disse que era sua irmã? Pegue-a e vá embora!"', r: 'Gênesis 12:18-19' },
        { art: '🐪⬅️⛺', bg: 'deserto', text: 'Abrão saiu do Egito com Sarai e tudo o que tinha. Foi uma vergonha: até um rei pagão teve que corrigir o homem de Deus. Mas Deus guardou a promessa mesmo quando Abrão falhou.', r: 'Gênesis 12:20; 13:1' }
      ],
      god: 'Deus é fiel mesmo quando nós falhamos. Ele protege a sua promessa.',
      jesus: 'Abrão teve medo e mentiu para salvar a própria vida, e Sarai ficou em perigo. Jesus fez o contrário: Ele falou a verdade mesmo quando isso custou a sua vida, para salvar a sua noiva, que é a Igreja. Jesus é o Marido fiel que nunca nos entrega.',
      verse: { ref: 'Provérbios 12:22', tx: 'Os lábios mentirosos são abomináveis ao Senhor, mas os que agem fielmente são o seu deleite.' },
      small: [
        { q: 'Por que Abrão foi para o Egito?', o: [['🌾', 'Porque havia fome'], ['🏖️', 'Para passear'], ['⚽', 'Para jogar bola']] },
        { q: 'Como Abrão se sentiu no Egito?', o: [['😨', 'Com medo'], ['😄', 'Muito feliz'], ['😴', 'Com sono']] },
        { q: 'Quem protegeu Sarai?', o: [['✨', 'Deus'], ['🦁', 'Um leão'], ['👮', 'Um guarda']] }
      ],
      big: [
        { q: 'O que Abrão pediu para Sarai dizer?', o: ['Que era irmã dele', 'Que era rainha', 'Que era egípcia', 'Que estava doente'], e: 'Gênesis 12:13.' },
        { q: 'Por que Abrão mentiu?', o: ['Teve medo de ser morto', 'Queria ficar rico', 'O Faraó mandou', 'Esqueceu'], e: 'O medo o fez esquecer que Deus podia protegê-lo.' },
        { q: 'O que Deus fez para proteger Sarai?', o: ['Mandou pragas sobre o Faraó', 'Mandou um dilúvio', 'Mandou um exército', 'Nada'], e: 'Gênesis 12:17.' },
        { q: 'O que essa história ensina?', o: ['Até os heróis da fé falham, mas Deus é fiel', 'Mentir às vezes é bom', 'Abrão não tinha fé', 'O Egito era bom'], e: 'A Bíblia não esconde os erros de ninguém. Só Deus é perfeito.' }
      ],
      parents: 'A Bíblia mostra os heróis com seus pecados. A questão de Sarai no palácio foi contada sem detalhes: "foi levada para o palácio". Bom momento para conversar sobre medo e mentira. Abrão repete o mesmo erro em Gênesis 20. Leitura junto: Gênesis 12:10-20.'
    },
    {
      id: 'a3', title: 'Abrão e Ló se separam', ref: 'Gênesis 13', icon: '⛰️',
      recap: 'Na lição passada, Abrão teve medo e mentiu no Egito, mas Deus protegeu Sarai e a promessa.',
      scenes: [
        { art: '⛺🪨🙏', bg: 'monte', fx: 'luz', text: 'De volta a Canaã, Abrão foi até o lugar do primeiro altar, entre Betel e Ai, e ali invocou de novo o nome do Senhor. Ele recomeçou com Deus.', r: 'Gênesis 13:3-4' },
        { art: '🐑🐑🐄🐄', bg: 'campo', text: 'Abrão estava muito rico: tinha gado, prata e ouro. Ló, o sobrinho dele, também tinha muitos rebanhos e tendas.', r: 'Gênesis 13:2, 5' },
        { art: '😠👨‍🌾😠', bg: 'campo', text: 'A terra não dava para os dois. Não havia pasto e água para tantos animais, e os pastores de Abrão começaram a brigar com os pastores de Ló.', r: 'Gênesis 13:6-7' },
        { art: '👴🤝👨', bg: 'campo', fx: 'coracoes', text: 'Abrão disse a Ló: "Não haja briga entre nós, porque somos irmãos. A terra toda está aí. Escolha: se você for para a esquerda, eu vou para a direita."', r: 'Gênesis 13:8-9' },
        { art: '👨👀🏞️', bg: 'campo', text: 'Abrão era o mais velho e o líder. Ele podia escolher primeiro, mas deixou Ló escolher. Abrão confiava que Deus ia cuidar dele.', r: 'Gênesis 13:9' },
        { art: '🏞️💧🏙️', bg: 'mar', fx: 'ondas', text: 'Ló olhou e viu a planície do rio Jordão, toda regada, verde e bonita, como o jardim do Senhor. E escolheu a melhor parte para ele.', r: 'Gênesis 13:10-11' },
        { art: '🏙️😈', bg: 'cidade', text: 'Ló foi armando suas tendas cada vez mais perto de Sodoma. Mas a Bíblia avisa: os homens de Sodoma eram maus e pecavam muito contra o Senhor.', r: 'Gênesis 13:12-13' },
        { art: '✨👴⬆️', bg: 'monte', fx: 'luz', text: 'Depois que Ló foi embora, o Senhor disse a Abrão: "Levante os olhos e olhe para o norte, para o sul, para o leste e para o oeste. Toda esta terra eu vou dar a você e aos seus descendentes."', r: 'Gênesis 13:14-15' },
        { art: '🟤✨', bg: 'deserto', fx: 'brilho', text: '"Vou fazer os seus descendentes como o pó da terra. Se alguém conseguir contar os grãos de pó, vai conseguir contar a sua família." Abrão mudou-se para Hebrom e construiu mais um altar ao Senhor.', r: 'Gênesis 13:16-18' }
      ],
      god: 'Quem confia em Deus pode ser generoso. Deus cuida de quem o coloca em primeiro lugar.',
      jesus: 'Abrão abriu mão do melhor para ter paz com Ló. Jesus fez muito mais: Ele era rico, morava no céu, mas se fez pobre por nós, para que fôssemos ricos com Ele (2 Coríntios 8:9). Jesus é o nosso promotor de paz.',
      verse: { ref: 'Mateus 6:33', tx: 'Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.' },
      small: [
        { q: 'Por que os pastores brigavam?', o: [['🐑', 'Não havia pasto para todos'], ['⚽', 'Por causa de um jogo'], ['🍰', 'Por um bolo']] },
        { q: 'Quem escolheu primeiro a terra?', o: [['👨', 'Ló'], ['👴', 'Abrão'], ['🐪', 'O camelo']] },
        { q: 'Com o que Deus comparou a família de Abrão?', o: [['🟤', 'Com o pó da terra'], ['🍬', 'Com balas'], ['🎈', 'Com balões']] }
      ],
      big: [
        { q: 'O que Abrão disse a Ló?', o: ['"Não haja briga entre nós"', '"Vá embora agora"', '"Eu escolho primeiro"', '"Vamos para o Egito"'], e: 'Gênesis 13:8.' },
        { q: 'Qual parte Ló escolheu?', o: ['A planície do Jordão, perto de Sodoma', 'As montanhas', 'O deserto', 'O Egito'], e: 'Ele escolheu pelo que os olhos viam (Gênesis 13:10-11).' },
        { q: 'O que a Bíblia diz sobre os homens de Sodoma?', o: ['Eram maus e pecavam muito', 'Eram muito bondosos', 'Eram pescadores', 'Eram juízes'], e: 'Gênesis 13:13.' },
        { q: 'Para onde Abrão se mudou?', o: ['Hebrom', 'Sodoma', 'Egito', 'Ur'], e: 'Gênesis 13:18.' }
      ],
      parents: 'Ponto central: generosidade e paz entre irmãos nascem da confiança em Deus. Contraste: Ló escolhe pelo que vê; Abrão espera o que Deus promete. Leitura junto: Gênesis 13.'
    },
    {
      id: 'a4', title: 'Abrão e Melquisedeque', ref: 'Gênesis 14', icon: '🍞',
      recap: 'Na lição passada, Ló escolheu morar perto de Sodoma, e Deus prometeu a Abrão uma família como o pó da terra.',
      scenes: [
        { art: '👑👑👑👑', bg: 'deserto', text: 'Naquele tempo houve uma guerra entre reis. Quatro reis de longe atacaram cinco reis da região, incluindo o rei de Sodoma.', r: 'Gênesis 14:1-9' },
        { art: '🏙️⛓️👨', bg: 'cidade', text: 'Os reis de longe venceram, saquearam Sodoma e levaram muitas pessoas como prisioneiras. Entre elas estava Ló, o sobrinho de Abrão!', r: 'Gênesis 14:11-12' },
        { art: '🏃💬👴', bg: 'campo', text: 'Um homem que escapou correu e contou tudo a Abrão.', r: 'Gênesis 14:13' },
        { art: '👴👥🌙', bg: 'noite', fx: 'estrelas', text: 'Abrão não pensou duas vezes. Reuniu trezentos e dezoito homens treinados da sua casa e saiu atrás dos inimigos, de noite.', r: 'Gênesis 14:14-15' },
        { art: '🏆👨🤗', bg: 'aurora', text: 'Deus deu a vitória a Abrão. Ele resgatou Ló, as mulheres, as pessoas e todos os bens que tinham sido levados.', r: 'Gênesis 14:15-16' },
        { art: '👑🍞🍷', bg: 'aurora', fx: 'luz', text: 'Na volta, apareceu um rei diferente de todos: Melquisedeque, rei de Salém e sacerdote do Deus Altíssimo. Ele trouxe pão e vinho para Abrão.', r: 'Gênesis 14:18' },
        { art: '🙌✨👴', bg: 'aurora', fx: 'brilho', text: 'Melquisedeque abençoou Abrão: "Bendito seja Abrão pelo Deus Altíssimo, dono dos céus e da terra! E bendito seja o Deus que entregou os seus inimigos nas suas mãos!"', r: 'Gênesis 14:19-20' },
        { art: '👴🎁👑', bg: 'aurora', text: 'Abrão deu a Melquisedeque o dízimo, a décima parte de tudo o que tinha recuperado. Foi um jeito de dizer: "A vitória foi de Deus."', r: 'Gênesis 14:20' },
        { art: '👴✋👑', bg: 'cidade', text: 'O rei de Sodoma ofereceu a Abrão todas as riquezas. Mas Abrão recusou: "Não vou aceitar nem um fio, para você não dizer: eu enriqueci Abrão." Abrão queria que só Deus recebesse a glória.', r: 'Gênesis 14:21-24' }
      ],
      god: 'Deus é o Altíssimo, dono dos céus e da terra. Tudo o que temos vem dele.',
      jesus: 'Melquisedeque era rei e sacerdote ao mesmo tempo, e trouxe pão e vinho. A Bíblia diz que Jesus é sacerdote "segundo a ordem de Melquisedeque" (Hebreus 7). Jesus é o nosso Rei e Sacerdote para sempre, e na Santa Ceia nos dá pão e vinho para lembrarmos dele.',
      verse: { ref: 'Salmos 110:4', tx: 'Tu és um sacerdote eterno, segundo a ordem de Melquisedeque.' },
      small: [
        { q: 'Quem foi levado prisioneiro?', o: [['👨', 'Ló'], ['🐪', 'Um camelo'], ['👑', 'Melquisedeque']] },
        { q: 'O que Melquisedeque trouxe para Abrão?', o: [['🍞', 'Pão e vinho'], ['🍕', 'Pizza'], ['🍦', 'Sorvete']] },
        { q: 'Quem deu a vitória a Abrão?', o: [['✨', 'Deus'], ['🦅', 'Uma águia'], ['🐉', 'Um dragão']] }
      ],
      big: [
        { q: 'Quantos homens Abrão levou para resgatar Ló?', o: ['318', '3', '1000', '12'], e: 'Gênesis 14:14.' },
        { q: 'Quem era Melquisedeque?', o: ['Rei de Salém e sacerdote do Deus Altíssimo', 'Rei de Sodoma', 'Um dos inimigos', 'O pai de Abrão'], e: 'Gênesis 14:18.' },
        { q: 'O que Abrão deu a Melquisedeque?', o: ['O dízimo de tudo', 'Um camelo', 'Sua tenda', 'Nada'], e: 'Gênesis 14:20; Hebreus 7:4.' },
        { q: 'Por que Abrão recusou as riquezas do rei de Sodoma?', o: ['Para que só Deus recebesse a glória', 'Porque já tinha muito', 'Porque eram falsas', 'Porque estava cansado'], e: 'Gênesis 14:22-23.' }
      ],
      parents: 'A guerra foi contada sem detalhes. Melquisedeque é uma figura de Cristo, rei e sacerdote (Salmo 110:4; Hebreus 7:1-3). Ótima lição para falar do dízimo como gratidão. Leitura junto: Gênesis 14:12-24.'
    },
    {
      id: 'a5', title: 'As estrelas e a aliança', ref: 'Gênesis 15', icon: '🌌',
      recap: 'Na lição passada, Abrão resgatou Ló e foi abençoado por Melquisedeque, rei e sacerdote.',
      scenes: [
        { art: '✨💬👴', bg: 'noite', fx: 'luz', text: 'Depois disso, a palavra do Senhor veio a Abrão numa visão: "Não tenha medo, Abrão. Eu sou o seu escudo, e a sua recompensa será muito grande."', r: 'Gênesis 15:1' },
        { art: '👴😢', bg: 'noite', text: 'Abrão abriu o coração: "Senhor, o que vale tudo isso, se eu não tenho filhos? O meu herdeiro vai ser um servo, Eliézer de Damasco."', r: 'Gênesis 15:2-3' },
        { art: '✨👶❗', bg: 'noite', fx: 'luz', text: 'Deus respondeu: "Não, ele não será o seu herdeiro. Um filho que vai sair de você mesmo, esse será o seu herdeiro."', r: 'Gênesis 15:4' },
        { art: '👴🌌', bg: 'noite', fx: 'estrelas', text: 'Então Deus levou Abrão para fora da tenda e disse: "Olhe para o céu e conte as estrelas, se é que consegue contar." E completou: "Assim será a sua descendência."', r: 'Gênesis 15:5' },
        { art: '💛✨', bg: 'noite', fx: 'estrelas', text: 'E Abrão creu no Senhor. E Deus considerou isso como justiça. Ou seja: Deus aceitou Abrão não pelo que ele fazia, mas porque ele confiou na promessa.', r: 'Gênesis 15:6; Romanos 4:3' },
        { art: '🐄🐐🐏🕊️', bg: 'deserto', text: 'Deus mandou Abrão preparar alguns animais e dividi-los em duas fileiras, como se fazia naquele tempo para firmar um acordo muito sério.', r: 'Gênesis 15:9-11' },
        { art: '😴🌑', bg: 'noite', text: 'Ao pôr do sol, Abrão caiu num sono profundo. Deus contou o futuro: seus descendentes seriam estrangeiros e escravos numa terra que não era deles, por quatrocentos anos, mas depois Deus os libertaria.', r: 'Gênesis 15:12-14' },
        { art: '🔥💨', bg: 'noite', fx: 'luz', text: 'Quando escureceu, apareceu um forno fumegando e uma tocha de fogo, que passaram entre as fileiras de animais. Era Deus fazendo a aliança sozinho!', r: 'Gênesis 15:17' },
        { art: '🤝✨', bg: 'aurora', fx: 'brilho', text: 'Normalmente, os dois lados passavam pelo meio. Mas só Deus passou. Era como dizer: "Eu mesmo garanto esta promessa." Naquele dia, o Senhor fez uma aliança com Abrão.', r: 'Gênesis 15:17-18' }
      ],
      god: 'Deus nos aceita quando confiamos nele. Ele mesmo garante as suas promessas.',
      jesus: 'Abrão foi aceito por Deus porque creu, não porque era perfeito. É assim com a gente: somos salvos pela fé em Jesus (Romanos 4:23-25). E, assim como só Deus passou entre os animais, foi Jesus, sozinho, quem pagou o preço da aliança na cruz.',
      verse: { ref: 'Gênesis 15:6', tx: 'E creu ele no Senhor, e imputou-lhe isto por justiça.' },
      small: [
        { q: 'O que Deus mandou Abrão contar?', o: [['⭐', 'As estrelas'], ['🐑', 'As ovelhas'], ['🪙', 'As moedas']] },
        { q: 'O que Abrão fez com a promessa?', o: [['💛', 'Creu em Deus'], ['😂', 'Riu e foi embora'], ['🙈', 'Fingiu não ouvir']] },
        { q: 'O que passou entre os animais?', o: [['🔥', 'Uma tocha de fogo'], ['🚗', 'Um carro'], ['🐕', 'Um cachorro']] }
      ],
      big: [
        { q: 'Do que Deus disse que era para Abrão?', o: ['O seu escudo', 'O seu servo', 'O seu rei', 'O seu camelo'], e: 'Gênesis 15:1.' },
        { q: 'O que quer dizer "imputou-lhe por justiça"?', o: ['Deus o aceitou por causa da fé', 'Deus o castigou', 'Deus deu ouro a ele', 'Abrão virou juiz'], e: 'Romanos 4:3-5.' },
        { q: 'O que Deus revelou sobre o futuro?', o: ['Os descendentes seriam escravos e depois libertados', 'Que haveria outro dilúvio', 'Que Abrão viraria rei', 'Que Babel voltaria'], e: 'Isso se cumpre no Egito e no Êxodo (Gênesis 15:13-14).' },
        { q: 'Por que só Deus passou entre os animais?', o: ['Ele mesmo garantiu a promessa', 'Abrão estava com medo', 'Era um jogo', 'Esqueceram Abrão'], e: 'A aliança depende da fidelidade de Deus.' }
      ],
      parents: 'Ponto central: justificação pela fé (Gênesis 15:6, citado em Romanos 4 e Gálatas 3). O rito dos animais divididos era a forma antiga de firmar alianças; contamos sem detalhes. Leitura junto: Gênesis 15:1-6 e 17-18.'
    },
    {
      id: 'a6', title: 'O Deus que me vê', ref: 'Gênesis 16', icon: '👁️',
      recap: 'Na lição passada, Deus prometeu a Abrão uma família como as estrelas, e Abrão creu.',
      scenes: [
        { art: '👵⏳', bg: 'deserto', text: 'Dez anos se passaram em Canaã, e Sarai continuava sem filhos. Ela foi ficando impaciente.', r: 'Gênesis 16:1, 3' },
        { art: '👵💡👩', bg: 'deserto', text: 'Sarai tinha uma serva egípcia chamada Hagar. Ela teve uma ideia comum naquele tempo, mas que não era de Deus: que Abrão tivesse um filho com Hagar, e a criança seria como filho de Sarai.', r: 'Gênesis 16:1-2' },
        { art: '👴👂', bg: 'deserto', text: 'Abrão ouviu Sarai, em vez de esperar a promessa de Deus. E Hagar ficou grávida.', r: 'Gênesis 16:2-4' },
        { art: '😤😢', bg: 'deserto', text: 'Logo começaram os problemas. Hagar passou a desprezar Sarai, e Sarai passou a maltratar Hagar. Quando a gente tenta resolver do nosso jeito, muitas vezes tudo piora.', r: 'Gênesis 16:4-6' },
        { art: '👩🏃🏜️', bg: 'deserto', fx: 'vento', text: 'Hagar fugiu para o deserto, sozinha e grávida. Ela parou perto de uma fonte de água, no caminho de volta para o Egito.', r: 'Gênesis 16:6-7' },
        { art: '✨💧👩', bg: 'deserto', fx: 'luz', text: 'Ali, o Anjo do Senhor a encontrou: "Hagar, serva de Sarai, de onde você vem e para onde vai?" Deus foi procurar uma serva estrangeira, sozinha no deserto!', r: 'Gênesis 16:7-8' },
        { art: '👶✨', bg: 'aurora', fx: 'brilho', text: 'O Anjo disse: "Volte. Você vai ter um filho e vai chamá-lo de Ismael, que quer dizer: Deus ouve. Porque o Senhor ouviu a sua aflição."', r: 'Gênesis 16:9-11' },
        { art: '👩👁️💛', bg: 'aurora', fx: 'coracoes', text: 'Hagar deu um nome ao Senhor que falou com ela: "Tu és o Deus que me vê." E o poço ali ficou conhecido como o poço daquele que vive e me vê.', r: 'Gênesis 16:13-14' },
        { art: '👴👶', bg: 'campo', text: 'Hagar voltou, e nasceu Ismael. Abrão tinha oitenta e seis anos. Mas Ismael não era o filho da promessa. Deus ainda ia cumprir do jeito dele.', r: 'Gênesis 16:15-16; 17:19' }
      ],
      god: 'Deus vê e ouve todos, até quem se sente sozinho e esquecido.',
      jesus: 'Deus foi procurar Hagar no deserto. Jesus também foi atrás das pessoas que todos desprezavam, como a mulher samaritana junto ao poço (João 4). Jesus vê você, ouve você, e veio buscar quem estava perdido.',
      verse: { ref: 'Gênesis 16:13', tx: 'Tu és Deus que me vê.' },
      small: [
        { q: 'Para onde Hagar fugiu?', o: [['🏜️', 'Para o deserto'], ['🏖️', 'Para a praia'], ['🎢', 'Para o parque']] },
        { q: 'O que Deus fez com Hagar?', o: [['👁️', 'Viu e cuidou dela'], ['🙈', 'Não viu'], ['😠', 'Brigou com ela']] },
        { q: 'Como se chamou o filho de Hagar?', o: [['👶', 'Ismael'], ['🦁', 'Leão'], ['⭐', 'Estrela']] }
      ],
      big: [
        { q: 'Qual foi o erro de Sarai e Abrão?', o: ['Tentar cumprir a promessa do seu jeito', 'Orar demais', 'Ir para o Egito', 'Construir um altar'], e: 'Eles não esperaram em Deus (Gênesis 16:2).' },
        { q: 'O que quer dizer o nome Ismael?', o: ['Deus ouve', 'Deus é rei', 'Filho do deserto', 'Riso'], e: 'Gênesis 16:11.' },
        { q: 'Como Hagar chamou o Senhor?', o: ['"O Deus que me vê"', '"O Deus do Egito"', '"O Deus que dorme"', '"O Deus distante"'], e: 'Gênesis 16:13.' },
        { q: 'Ismael era o filho da promessa?', o: ['Não, a promessa viria por Sara', 'Sim', 'Ninguém sabe', 'Era o filho de Ló'], e: 'Gênesis 17:19-21. Mas Deus também abençoou Ismael.' }
      ],
      parents: 'A prática de dar uma serva ao marido para gerar herdeiros era um costume da época, contado aqui sem detalhes. A Bíblia mostra as consequências ruins. O centro é El-Roi, "o Deus que me vê", cuidando de uma estrangeira sem voz. Leitura junto: Gênesis 16:6-14.'
    },
    {
      id: 'a7', title: 'Abraão e Sara: nomes novos', ref: 'Gênesis 17', icon: '✍️',
      recap: 'Na lição passada, Deus viu e cuidou de Hagar no deserto, e nasceu Ismael.',
      scenes: [
        { art: '👴⏳', bg: 'deserto', text: 'Passaram-se mais treze anos. Abrão já tinha noventa e nove anos! E ainda nada do filho da promessa.', r: 'Gênesis 17:1' },
        { art: '✨💬👴', bg: 'aurora', fx: 'luz', text: 'O Senhor apareceu a Abrão e disse: "Eu sou o Deus Todo-Poderoso. Ande na minha presença e seja íntegro."', r: 'Gênesis 17:1' },
        { art: '👴🙇', bg: 'aurora', text: 'Abrão se ajoelhou e encostou o rosto no chão. E Deus falou de novo da aliança: "Você será pai de muitas nações. Reis vão sair de você."', r: 'Gênesis 17:3-6' },
        { art: '✍️👴➡️', bg: 'aurora', fx: 'brilho', text: 'Deus mudou o nome dele: "Você não vai mais se chamar Abrão, mas Abraão, porque eu fiz de você pai de muitas nações." O nome novo era uma promessa.', r: 'Gênesis 17:5' },
        { art: '✍️👵👑', bg: 'aurora', fx: 'brilho', text: 'E Deus mudou também o nome de Sarai: "Ela vai se chamar Sara, que quer dizer princesa. Eu vou abençoá-la e dar a você um filho por meio dela."', r: 'Gênesis 17:15-16' },
        { art: '👴😂', bg: 'campo', text: 'Abraão caiu com o rosto em terra e riu, pensando: "Um homem de cem anos vai ter filho? E Sara, com noventa, vai dar à luz?"', r: 'Gênesis 17:17' },
        { art: '✨👶📅', bg: 'aurora', fx: 'luz', text: 'Deus respondeu: "Sim! Sara, sua esposa, vai ter um filho, e você vai chamá-lo de Isaque. Com ele eu vou firmar a minha aliança. Vai ser daqui a um ano, nesta mesma época."', r: 'Gênesis 17:19, 21' },
        { art: '👦💛', bg: 'campo', text: 'Deus prometeu abençoar também Ismael e fazer dele uma grande nação. Deus não se esqueceu do menino.', r: 'Gênesis 17:20' },
        { art: '👴👦✅', bg: 'campo', text: 'Deus deu um sinal da aliança para os meninos da família: a circuncisão, uma marca no corpo. Naquele mesmo dia, Abraão obedeceu, com todos os homens da sua casa.', r: 'Gênesis 17:10-11, 23-27' }
      ],
      god: 'Deus é Todo-Poderoso: nada é impossível para Ele. E Ele nos dá uma identidade nova.',
      jesus: 'Deus deu nomes novos a Abraão e Sara. Quem crê em Jesus também recebe um nome novo: filho de Deus (João 1:12)! E a Bíblia diz que, em Jesus, nós também somos filhos de Abraão pela fé (Gálatas 3:29).',
      verse: { ref: 'Gênesis 17:1', tx: 'Eu sou o Deus Todo-Poderoso, anda em minha presença e sê perfeito.' },
      small: [
        { q: 'Qual foi o nome novo de Abrão?', o: [['👴', 'Abraão'], ['🦁', 'Leão'], ['🌳', 'Árvore']] },
        { q: 'Como Deus se apresentou?', o: [['💪', 'Deus Todo-Poderoso'], ['😴', 'Deus cansado'], ['🐢', 'Deus devagar']] },
        { q: 'Qual seria o nome do bebê?', o: [['👶', 'Isaque'], ['🐶', 'Totó'], ['👑', 'Faraó']] }
      ],
      big: [
        { q: 'O que quer dizer o nome Abraão?', o: ['Pai de muitas nações', 'Homem velho', 'Amigo de Ló', 'Rei de Canaã'], e: 'Gênesis 17:5.' },
        { q: 'O que quer dizer o nome Sara?', o: ['Princesa', 'Estrela', 'Riso', 'Viajante'], e: 'Sara significa princesa.' },
        { q: 'Quantos anos Abraão tinha?', o: ['99', '75', '50', '120'], e: 'Gênesis 17:1, 24.' },
        { q: 'O que Deus prometeu sobre Ismael?', o: ['Que o abençoaria e faria dele uma nação', 'Que ele seria o filho da promessa', 'Nada', 'Que ele seria rei de Israel'], e: 'Gênesis 17:20.' }
      ],
      parents: 'A circuncisão foi explicada apenas como "um sinal no corpo dos meninos". Se a criança perguntar, explique de forma simples, conforme a idade. No Novo Testamento, o sinal da aliança aponta para o batismo e para a "circuncisão do coração" (Colossenses 2:11-12; Romanos 2:29). Leitura junto: Gênesis 17:1-8 e 15-21.'
    },
    {
      id: 'a8', title: 'Três visitantes', ref: 'Gênesis 18:1-15', icon: '⛺',
      recap: 'Na lição passada, Deus deu nomes novos a Abraão e Sara e prometeu: daqui a um ano vocês terão um filho.',
      scenes: [
        { art: '⛺🌳☀️', bg: 'deserto', text: 'Era a hora mais quente do dia. Abraão estava sentado na entrada da sua tenda, perto dos carvalhos de Manre.', r: 'Gênesis 18:1' },
        { art: '✨✨✨', bg: 'deserto', fx: 'luz', text: 'Abraão olhou e viu três homens em pé ali perto. A Bíblia conta que era o Senhor que estava visitando Abraão, junto com dois anjos.', r: 'Gênesis 18:1-2; 19:1' },
        { art: '👴🏃🙇', bg: 'deserto', text: 'Abraão correu até eles, se curvou e pediu: "Por favor, não passem sem parar! Descansem debaixo da árvore. Vou trazer água para lavar os pés e um pouco de pão."', r: 'Gênesis 18:2-5' },
        { art: '👵🍞🥛🍖', bg: 'deserto', text: 'Abraão foi depressa até Sara: "Rápido, faça pães!" Ele mesmo escolheu um bezerro, e serviu também coalhada e leite. Que hospitalidade!', r: 'Gênesis 18:6-8' },
        { art: '💬👵❓', bg: 'deserto', text: 'Os visitantes perguntaram: "Onde está Sara, sua esposa?" "Está lá dentro da tenda." O Senhor disse: "Daqui a um ano eu volto, e Sara terá um filho."', r: 'Gênesis 18:9-10' },
        { art: '👵🤭', bg: 'deserto', text: 'Sara estava escutando na porta da tenda, escondida. Ela riu por dentro, pensando: "Velha como eu sou, e meu marido também, isso vai acontecer?"', r: 'Gênesis 18:10-12' },
        { art: '✨❓', bg: 'aurora', fx: 'luz', text: 'O Senhor perguntou a Abraão: "Por que Sara riu? Será que existe alguma coisa difícil demais para o Senhor?"', r: 'Gênesis 18:13-14' },
        { art: '👵😳', bg: 'deserto', text: 'Sara ficou com medo e disse: "Eu não ri." Mas o Senhor respondeu, com firmeza e bondade: "Riu, sim." Deus sabe tudo o que pensamos.', r: 'Gênesis 18:15' },
        { art: '💛⏳', bg: 'aurora', fx: 'coracoes', text: 'Deus não desistiu de Sara por causa da dúvida dela. A promessa continuava de pé: no tempo certo, o bebê ia nascer.', r: 'Gênesis 18:14; Hebreus 11:11' }
      ],
      god: 'Não há nada difícil demais para Deus. Ele conhece até o que pensamos em segredo.',
      jesus: 'Muitos anos depois, um anjo disse a Maria que ela teria um filho, e ela perguntou como seria possível. O anjo respondeu quase com as mesmas palavras: "Para Deus nada é impossível" (Lucas 1:37). Isaque nasceu de uma velhinha; Jesus nasceu de uma virgem. Deus faz o impossível para nos salvar!',
      verse: { ref: 'Gênesis 18:14', tx: 'Haveria coisa alguma difícil ao Senhor?' },
      small: [
        { q: 'Onde Abraão estava sentado?', o: [['⛺', 'Na porta da tenda'], ['🛋️', 'No sofá'], ['🚌', 'No ônibus']] },
        { q: 'O que Sara fez quando ouviu a promessa?', o: [['🤭', 'Riu'], ['😭', 'Chorou'], ['💃', 'Dançou']] },
        { q: 'Existe algo difícil demais para Deus?', o: [['❌', 'Não, nada!'], ['✅', 'Sim, muitas coisas'], ['🤷', 'Às vezes']] }
      ],
      big: [
        { q: 'Como Abraão recebeu os visitantes?', o: ['Com água, pão e uma refeição', 'Mandou embora', 'Fingiu não ver', 'Pediu dinheiro'], e: 'Hebreus 13:2 lembra: alguns, sem saber, hospedaram anjos.' },
        { q: 'Onde Sara estava escutando?', o: ['Na porta da tenda', 'No campo', 'No poço', 'Em Sodoma'], e: 'Gênesis 18:10.' },
        { q: 'O que Deus perguntou?', o: ['"Haveria coisa alguma difícil ao Senhor?"', '"Por que vocês estão aqui?"', '"Onde está Ló?"', '"Quem fez esta comida?"'], e: 'Gênesis 18:14.' },
        { q: 'Quando o filho ia nascer?', o: ['Daqui a um ano', 'Daqui a dez anos', 'No dia seguinte', 'Nunca'], e: 'Gênesis 18:10, 14.' }
      ],
      parents: 'Sobre o segundo mandamento: o texto diz que o Senhor visitou Abraão em forma humana, junto com dois anjos. No app, não representamos o Senhor; usamos apenas luz. Bom tema: hospitalidade (Hebreus 13:2) e a dúvida tratada com paciência. Leitura junto: Gênesis 18:1-15.'
    },
    {
      id: 'a9', title: 'Abraão ora por Sodoma', ref: 'Gênesis 18:16 – 19:29', icon: '🙏',
      recap: 'Na lição passada, o Senhor visitou Abraão e prometeu que Sara teria um filho dali a um ano.',
      scenes: [
        { art: '✨⛰️🏙️', bg: 'monte', fx: 'luz', text: 'Os visitantes olharam na direção de Sodoma, e Abraão foi acompanhá-los. O Senhor contou a Abraão que ia julgar Sodoma e Gomorra, porque o pecado delas era muito grande.', r: 'Gênesis 18:16, 20-21' },
        { art: '👴🙏', bg: 'monte', text: 'Abraão se lembrou de Ló, que morava lá, e começou a orar: "Será que o Senhor vai destruir o justo com o ímpio? E se houver cinquenta justos na cidade?"', r: 'Gênesis 18:23-24' },
        { art: '5️⃣0️⃣➡️4️⃣5️⃣', bg: 'monte', text: 'Deus respondeu: "Se eu encontrar cinquenta justos, vou poupar a cidade inteira." Abraão continuou: "E se forem quarenta e cinco? E quarenta? E trinta?"', r: 'Gênesis 18:26-30' },
        { art: '1️⃣0️⃣💛', bg: 'monte', fx: 'coracoes', text: 'Abraão foi pedindo, com respeito, até chegar a dez. E Deus disse: "Por causa de dez, não vou destruir." Deus é paciente com quem ora.', r: 'Gênesis 18:31-33' },
        { art: '✨✨🏙️👨', bg: 'cidade', fx: 'luz', text: 'À tarde, os dois anjos chegaram a Sodoma. Ló os recebeu em casa. Mas os homens da cidade cercaram a casa, querendo fazer muito mal aos visitantes. A cidade era mesmo muito má.', r: 'Gênesis 19:1-5' },
        { art: '✨🙈🚪', bg: 'noite', fx: 'luz', text: 'Os anjos protegeram Ló e fecharam a porta. E disseram: "O Senhor nos mandou destruir esta cidade. Saia daqui com a sua família!"', r: 'Gênesis 19:10-13' },
        { art: '👨👩👧👧🏃', bg: 'aurora', text: 'Ló demorou, e os anjos tiveram que pegá-lo pela mão, com a esposa e as duas filhas, e levá-los para fora. A Bíblia diz: porque o Senhor teve compaixão dele.', r: 'Gênesis 19:15-16' },
        { art: '🔥🏙️', bg: 'deserto', fx: 'luz', text: 'Os anjos avisaram: "Fujam e não olhem para trás!" Então o Senhor fez chover fogo e enxofre do céu sobre Sodoma e Gomorra.', r: 'Gênesis 19:17, 24-25' },
        { art: '🧂👩', bg: 'deserto', text: 'Mas a esposa de Ló olhou para trás, com o coração ainda preso àquela cidade, e virou uma estátua de sal. Jesus mandou: "Lembrem-se da mulher de Ló."', r: 'Gênesis 19:26; Lucas 17:32' },
        { art: '👴👀💨', bg: 'monte', text: 'Na manhã seguinte, Abraão olhou para a planície e viu a fumaça subindo. E a Bíblia diz: Deus se lembrou de Abraão e tirou Ló do meio da destruição.', r: 'Gênesis 19:27-29' }
      ],
      god: 'Deus é justo e julga o mal. E Ele ouve quem ora pelos outros.',
      jesus: 'Abraão orou por Sodoma, mas não havia dez justos. A Bíblia diz que não há nenhum justo, nem um sequer (Romanos 3:10). Por isso Jesus, o único Justo, veio: Ele intercede por nós e recebeu o juízo no nosso lugar, para que fôssemos tirados da destruição, como Ló.',
      verse: { ref: 'Gênesis 18:25', tx: 'Não faria justiça o Juiz de toda a terra?' },
      small: [
        { q: 'Por quem Abraão orou?', o: [['🏙️', 'Pela cidade de Ló'], ['🍦', 'Por sorvete'], ['🧸', 'Por um brinquedo']] },
        { q: 'Quem tirou Ló da cidade?', o: [['✨', 'Os anjos de Deus'], ['🐴', 'Um cavalo'], ['🚒', 'Os bombeiros']] },
        { q: 'O que não podiam fazer na fuga?', o: [['👀', 'Olhar para trás'], ['🏃', 'Correr'], ['🤝', 'Dar as mãos']] }
      ],
      big: [
        { q: 'Até quantos justos Abraão pediu?', o: ['Dez', 'Cinquenta', 'Um', 'Cem'], e: 'Gênesis 18:32.' },
        { q: 'Por que os anjos levaram Ló pela mão?', o: ['O Senhor teve compaixão dele', 'Ló estava doente', 'Era noite', 'Ló quis ficar'], e: 'Gênesis 19:16.' },
        { q: 'O que aconteceu com a esposa de Ló?', o: ['Virou uma estátua de sal', 'Fugiu para o Egito', 'Ficou em Sodoma', 'Virou anjo'], e: 'Gênesis 19:26.' },
        { q: 'O que Jesus disse sobre ela?', o: ['"Lembrem-se da mulher de Ló"', 'Nada', '"Ela era sábia"', '"Ela foi rainha"'], e: 'Lucas 17:32: não ficar com o coração preso ao mundo.' }
      ],
      parents: 'Atenção: o pecado de Sodoma (Gênesis 19:4-9) foi descrito apenas como "queriam fazer muito mal aos visitantes". O episódio das filhas de Ló (Gênesis 19:30-38) foi omitido; leia-o sozinho, se quiser. O centro é a intercessão de Abraão e a misericórdia que tira Ló. Leitura junto: Gênesis 18:16-33.'
    },
    {
      id: 'a10', title: 'Isaque nasce: o riso', ref: 'Gênesis 20 – 21', icon: '👶',
      recap: 'Na lição passada, Abraão orou por Sodoma, e Deus tirou Ló do meio da destruição.',
      scenes: [
        { art: '👴🤥', bg: 'cidade', text: 'Abraão foi morar em Gerar e, por medo, repetiu o erro antigo: disse que Sara era sua irmã. Mais uma vez, Deus protegeu Sara e avisou o rei Abimeleque num sonho.', r: 'Gênesis 20:1-7' },
        { art: '👴🙏💛', bg: 'aurora', text: 'Abraão orou por Abimeleque, e Deus curou a casa do rei. Deus continuava fiel, mesmo com um Abraão imperfeito.', r: 'Gênesis 20:17' },
        { art: '✨👵', bg: 'aurora', fx: 'luz', text: 'E então aconteceu! A Bíblia diz: o Senhor visitou Sara, como tinha dito, e fez com Sara o que havia prometido.', r: 'Gênesis 21:1' },
        { art: '👵👶😄', bg: 'aurora', fx: 'coracoes', text: 'Sara ficou grávida e teve um filho, no tempo exato que Deus tinha marcado. Abraão tinha cem anos!', r: 'Gênesis 21:2, 5' },
        { art: '👴✍️👶', bg: 'aurora', fx: 'brilho', text: 'Abraão deu ao menino o nome de Isaque, como Deus mandou. Isaque quer dizer "ele ri".', r: 'Gênesis 21:3' },
        { art: '😂💛', bg: 'aurora', fx: 'coracoes', text: 'Sara disse: "Deus me fez rir! Todos que souberem vão rir comigo." Antes, ela riu de dúvida. Agora, ria de alegria!', r: 'Gênesis 21:6-7' },
        { art: '🎉🍰', bg: 'campo', fx: 'brilho', text: 'Quando Isaque cresceu um pouco e deixou de mamar, Abraão fez uma grande festa.', r: 'Gênesis 21:8' },
        { art: '👩👦🏜️', bg: 'deserto', fx: 'vento', text: 'Na festa, Ismael zombou de Isaque. Sara pediu que Hagar e Ismael fossem embora. Abraão ficou muito triste, mas Deus disse: "Pode deixar. Eu vou cuidar do menino também."', r: 'Gênesis 21:9-13' },
        { art: '💧👦✨', bg: 'deserto', fx: 'luz', text: 'No deserto, a água acabou, e Hagar chorou. Mas Deus ouviu a voz do menino e mostrou a ela um poço de água. Deus estava com Ismael, e ele cresceu.', r: 'Gênesis 21:14-20' }
      ],
      god: 'Deus cumpre as promessas no tempo exato. Ele transforma a nossa dúvida em alegria.',
      jesus: 'Isaque foi o filho prometido, que nasceu por um milagre, no tempo certo de Deus. Jesus é o Filho prometido por excelência: nasceu "na plenitude dos tempos" (Gálatas 4:4) e trouxe uma alegria muito maior. Os anjos disseram aos pastores: "Trago-vos novas de grande alegria!"',
      verse: { ref: 'Gênesis 21:1', tx: 'E o Senhor visitou a Sara, como tinha dito; e fez o Senhor a Sara como tinha prometido.' },
      small: [
        { q: 'Quem nasceu?', o: [['👶', 'O bebê Isaque'], ['🐣', 'Um pintinho'], ['🐴', 'Um potrinho']] },
        { q: 'O que quer dizer Isaque?', o: [['😂', 'Ele ri'], ['😢', 'Ele chora'], ['😴', 'Ele dorme']] },
        { q: 'O que Deus mostrou a Hagar no deserto?', o: [['💧', 'Um poço de água'], ['🍕', 'Uma pizzaria'], ['🚗', 'Um carro']] }
      ],
      big: [
        { q: 'Quantos anos Abraão tinha quando Isaque nasceu?', o: ['100', '75', '86', '99'], e: 'Gênesis 21:5.' },
        { q: 'Por que Sara disse "Deus me fez rir"?', o: ['De alegria pelo filho', 'Porque ouviu uma piada', 'Porque duvidava', 'Porque Abraão caiu'], e: 'Gênesis 21:6.' },
        { q: 'Qual erro Abraão repetiu em Gerar?', o: ['Disse que Sara era sua irmã', 'Construiu uma torre', 'Foi para o Egito', 'Brigou com Ló'], e: 'Gênesis 20:2.' },
        { q: 'O que Deus fez por Ismael?', o: ['Ouviu sua voz e o salvou', 'Esqueceu dele', 'Mandou-o para o Egito', 'Fez dele o filho da promessa'], e: 'Gênesis 21:17-20.' }
      ],
      parents: 'Ponto central: Deus cumpre no tempo dele (25 anos depois do chamado). A saída de Hagar e Ismael é uma cena triste; destaque que Deus ouviu o menino (o nome Ismael significa "Deus ouve"). Paulo usa essa história em Gálatas 4:21-31. Leitura junto: Gênesis 21:1-8 e 14-20.'
    },
    {
      id: 'a11', title: 'Deus proverá o cordeiro', ref: 'Gênesis 22', icon: '🐏',
      recap: 'Na lição passada, nasceu Isaque, o filho da promessa, e Sara riu de alegria.',
      scenes: [
        { art: '👴👦💛', bg: 'campo', text: 'Isaque foi crescendo, e Abraão o amava muito. Era o filho da promessa, o filho que ele esperou por vinte e cinco anos.', r: 'Gênesis 22:2' },
        { art: '✨💬👴', bg: 'noite', fx: 'luz', text: 'Um dia, Deus provou Abraão. Disse: "Pegue o seu filho, o seu único filho, Isaque, a quem você ama, e vá ao monte Moriá. Ofereça-o ali a mim."', r: 'Gênesis 22:1-2' },
        { art: '👴😟', bg: 'noite', text: 'Era o pedido mais difícil do mundo. Mas a Bíblia diz que Abraão confiou: ele creu que Deus era poderoso até para trazer Isaque de volta da morte, porque a promessa viria por Isaque.', r: 'Hebreus 11:17-19' },
        { art: '🫏🪵👴👦', bg: 'deserto', fx: 'vento', text: 'Bem cedo, Abraão preparou o jumento, cortou lenha e partiu com Isaque e dois servos. A viagem durou três dias.', r: 'Gênesis 22:3-4' },
        { art: '👴💬👥', bg: 'monte', text: 'Ao ver o monte, Abraão disse aos servos: "Fiquem aqui. Eu e o menino vamos até lá, vamos adorar e depois voltaremos." Ele disse: voltaremos!', r: 'Gênesis 22:5' },
        { art: '👦🪵❓', bg: 'monte', text: 'Isaque carregava a lenha. No caminho, perguntou: "Pai, a lenha está aqui, e o fogo também. Mas onde está o cordeiro?"', r: 'Gênesis 22:6-7' },
        { art: '👴💛', bg: 'monte', fx: 'coracoes', text: 'Abraão respondeu: "Deus proverá para si o cordeiro, meu filho." E os dois continuaram caminhando juntos.', r: 'Gênesis 22:8' },
        { art: '🪨🔥✋', bg: 'monte', fx: 'luz', text: 'No alto do monte, Abraão preparou o altar. Quando estava pronto para obedecer até o fim, o Anjo do Senhor chamou do céu: "Abraão! Abraão! Não faça nada ao menino! Agora sei que você teme a Deus."', r: 'Gênesis 22:9-12' },
        { art: '🐏🌿', bg: 'monte', fx: 'brilho', text: 'Abraão olhou e viu um carneiro preso pelos chifres num arbusto. Ele ofereceu o carneiro no lugar do filho. Deus mesmo tinha providenciado!', r: 'Gênesis 22:13' },
        { art: '⛰️✨', bg: 'aurora', fx: 'brilho', text: 'Abraão chamou aquele lugar de "O Senhor proverá". E Deus repetiu a promessa: por meio da família de Abraão, todos os povos da terra iam ser abençoados, porque ele tinha obedecido.', r: 'Gênesis 22:14-18' }
      ],
      god: 'Deus provê. O que Ele pede, Ele mesmo providencia.',
      jesus: 'Isaque perguntou: "Onde está o cordeiro?" A resposta veio muitos anos depois, quando João Batista viu Jesus e disse: "Eis o Cordeiro de Deus, que tira o pecado do mundo!" (João 1:29). Deus poupou o filho de Abraão, mas não poupou o seu próprio Filho, e o entregou por nós (Romanos 8:32). E a Bíblia diz que o monte Moriá é onde depois ficou Jerusalém.',
      verse: { ref: 'Gênesis 22:8', tx: 'Deus proverá para si o cordeiro para o holocausto, meu filho.' },
      small: [
        { q: 'O que Isaque carregava?', o: [['🪵', 'A lenha'], ['🎒', 'Uma mochila'], ['🎈', 'Balões']] },
        { q: 'O que Deus providenciou no monte?', o: [['🐏', 'Um carneiro'], ['🐘', 'Um elefante'], ['🍎', 'Uma maçã']] },
        { q: 'Quem é o Cordeiro de Deus?', o: [['✝️', 'Jesus'], ['🦁', 'Um leão'], ['🐐', 'Uma cabra']] }
      ],
      big: [
        { q: 'Para qual monte Deus mandou Abraão ir?', o: ['Moriá', 'Sinai', 'Ararate', 'Carmelo'], e: 'Gênesis 22:2; 2 Crônicas 3:1.' },
        { q: 'O que Abraão disse aos servos?', o: ['"Vamos adorar e voltaremos"', '"Esperem para sempre"', '"Vão para casa"', '"Não sei se volto"'], e: 'Gênesis 22:5: ele confiava em Deus.' },
        { q: 'O que Abraão respondeu quando Isaque perguntou pelo cordeiro?', o: ['"Deus proverá"', '"Esqueci"', '"Vamos comprar"', '"Não há cordeiro"'], e: 'Gênesis 22:8.' },
        { q: 'Como Abraão chamou o lugar?', o: ['"O Senhor proverá"', '"Monte do medo"', '"Lugar do carneiro"', '"Casa de Deus"'], e: 'Gênesis 22:14.' }
      ],
      parents: 'Atenção: esta passagem pode assustar. Deixe claro que Deus não queria a morte de Isaque, e que o próprio Deus o impediu e providenciou o substituto. Hebreus 11:17-19 mostra a fé de Abraão na ressurreição. O centro é o cordeiro substituto, que aponta para Cristo. Leitura junto: Gênesis 22:1-14.'
    },
    {
      id: 'a12', title: 'Uma noiva para Isaque', ref: 'Gênesis 23 – 25:11', icon: '💍',
      recap: 'Na lição passada, Deus providenciou um carneiro no lugar de Isaque no monte Moriá.',
      scenes: [
        { art: '👵🕯️', bg: 'noite', text: 'Sara viveu cento e vinte e sete anos e morreu em Hebrom. Abraão chorou por ela. Ele comprou uma caverna, em Macpela, e ali a sepultou. Foi o primeiro pedaço da terra prometida que a família teve.', r: 'Gênesis 23:1-2, 19-20' },
        { art: '👴💬🧔', bg: 'campo', text: 'Abraão já estava bem velho. Ele chamou o seu servo mais antigo e de confiança e pediu: "Vá à minha terra e escolha uma esposa para Isaque entre os meus parentes, não entre os cananeus."', r: 'Gênesis 24:1-4' },
        { art: '🐪🐪🐪🎁', bg: 'deserto', fx: 'vento', text: 'O servo levou dez camelos carregados de presentes e viajou até a cidade de Naor, na Mesopotâmia. Ao entardecer, parou junto a um poço.', r: 'Gênesis 24:10-11' },
        { art: '🧔🙏💧', bg: 'deserto', fx: 'luz', text: 'O servo orou: "Senhor, Deus de Abraão, mostra a tua bondade. Que a moça a quem eu pedir água e que disser: beba, e vou dar água também aos seus camelos, seja a escolhida."', r: 'Gênesis 24:12-14' },
        { art: '👩🏺💧', bg: 'deserto', text: 'Antes de ele terminar de orar, chegou Rebeca com o cântaro no ombro. O servo pediu um pouco de água, e ela disse: "Beba, meu senhor! E vou tirar água também para os seus camelos."', r: 'Gênesis 24:15-19' },
        { art: '🐪🐪💧😮', bg: 'deserto', text: 'Dez camelos com sede bebem muita água! Rebeca correu várias vezes ao poço. O servo olhava em silêncio, admirado. E descobriu que ela era da família de Abraão!', r: 'Gênesis 24:20-24' },
        { art: '🧔🙇✨', bg: 'aurora', fx: 'brilho', text: 'O servo se curvou e adorou: "Bendito seja o Senhor, que não deixou de ser bondoso e fiel com o meu senhor Abraão, e me guiou no caminho!"', r: 'Gênesis 24:26-27' },
        { art: '👩✅🐪', bg: 'cidade', text: 'A família de Rebeca reconheceu: "Isso vem do Senhor." E perguntaram a ela: "Você quer ir com este homem?" Rebeca respondeu: "Irei."', r: 'Gênesis 24:50-51, 57-58' },
        { art: '👦🌅👩', bg: 'campo', fx: 'coracoes', text: 'Ao entardecer, Isaque estava meditando no campo e viu os camelos chegando. Rebeca se tornou esposa de Isaque, e ele a amou. Assim Isaque foi consolado depois da morte da mãe.', r: 'Gênesis 24:63-67' },
        { art: '👴🌄', bg: 'aurora', fx: 'brilho', text: 'Abraão viveu cento e setenta e cinco anos e morreu numa boa velhice. Isaque e Ismael o sepultaram junto de Sara. E Deus abençoou Isaque. A promessa continuava, agora com ele.', r: 'Gênesis 25:7-11' }
      ],
      god: 'Deus guia os passos de quem ora e confia nele. Ele é bondoso e fiel de geração em geração.',
      jesus: 'O servo foi buscar uma noiva para o filho do seu senhor, e Rebeca disse: "Irei." A Bíblia diz que Jesus também tem uma noiva: a Igreja, todas as pessoas que creem nele (Efésios 5:25). E o Espírito Santo nos chama para ir até Jesus. Quando dizemos "sim" a Ele, fazemos parte dessa grande família.',
      verse: { ref: 'Gênesis 24:27', tx: 'Bendito seja o Senhor Deus de meu senhor Abraão, que não retirou a sua benignidade e a sua verdade de meu senhor.' },
      small: [
        { q: 'Onde o servo encontrou Rebeca?', o: [['💧', 'Num poço'], ['🏫', 'Na escola'], ['🛒', 'No mercado']] },
        { q: 'Para quem Rebeca deu água?', o: [['🐪', 'Para os camelos'], ['🌵', 'Para os cactos'], ['🐟', 'Para os peixes']] },
        { q: 'O que o servo fez antes de escolher?', o: [['🙏', 'Orou a Deus'], ['🎲', 'Jogou um dado'], ['😴', 'Dormiu']] }
      ],
      big: [
        { q: 'Onde Abraão sepultou Sara?', o: ['Na caverna de Macpela', 'No Egito', 'Em Sodoma', 'No monte Moriá'], e: 'Gênesis 23:19.' },
        { q: 'Qual foi o sinal que o servo pediu a Deus?', o: ['A moça daria água também aos camelos', 'Uma estrela no céu', 'Chuva no deserto', 'Um anjo aparecer'], e: 'Gênesis 24:14.' },
        { q: 'O que Rebeca respondeu quando perguntaram se ela iria?', o: ['"Irei"', '"Não vou"', '"Vou pensar"', '"Daqui a um ano"'], e: 'Gênesis 24:58.' },
        { q: 'Quantos anos Abraão viveu?', o: ['175', '100', '969', '120'], e: 'Gênesis 25:7.' }
      ],
      parents: 'Ponto central: a providência de Deus respondendo à oração (o servo orou e "antes que acabasse de falar", a resposta veio). Fechamento do arco: Abraão morre sem ver a promessa completa, mas confiando (Hebreus 11:13). Os filhos de Quetura (Gênesis 25:1-6) foram omitidos. Leitura junto: Gênesis 24:10-27.'
    }
  ]
};
