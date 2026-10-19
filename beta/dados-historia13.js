/* A Grande História da Bíblia — Arco 13: Davi, o pastor e rei (1 Samuel 16 – 2 Samuel 24; 1 Crônicas) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.davi = {
  id: 'davi', n: 13, name: 'Davi, o pastor e rei', sub: 'Um homem segundo o coração de Deus', ref: '1 Samuel 16 – 2 Samuel 24 e 1 Crônicas', icon: '🪨', scene: 'campo',
  intro: 'Deus rejeitou Saul e escolheu um menino pastor de Belém para ser rei: Davi. Ele venceu um gigante, foi perseguido, tornou-se o maior rei de Israel e recebeu de Deus uma promessa enorme: da sua família viria um Rei que reinaria para sempre. Davi também pecou muito, mas se arrependeu de verdade. É uma das histórias mais emocionantes da Bíblia.',
  lessons: [
    {
      id: 'v1', title: 'Deus olha o coração', ref: '1 Samuel 16:1-13', icon: '🫗',
      recap: 'No arco passado, Saul desobedeceu, e Samuel disse que Deus daria o reino a outro, melhor que ele.',
      scenes: [
        { art: '👴😢', bg: 'cidade', text: 'Samuel estava triste por causa de Saul. Mas o Senhor disse: "Até quando você vai chorar por Saul? Encha o seu chifre de azeite e vá a Belém, à casa de Jessé. Eu escolhi um dos filhos dele para ser rei."', r: '1 Samuel 16:1' },
        { art: '👴🐄🏘️', bg: 'cidade', text: 'Samuel foi a Belém, preparou um sacrifício e convidou Jessé e os seus filhos.', r: '1 Samuel 16:4-5' },
        { art: '🧔⬆️👀', bg: 'campo', text: 'Quando chegou o filho mais velho, Eliabe, alto e bonito, Samuel pensou: "Com certeza é este o ungido do Senhor!"', r: '1 Samuel 16:6' },
        { art: '✨❤️👀', bg: 'aurora', fx: 'luz', text: 'Mas Deus disse a Samuel: "Não olhe para a aparência nem para a altura dele, porque eu o rejeitei. O homem vê o que está diante dos olhos, mas o Senhor olha para o coração."', r: '1 Samuel 16:7' },
        { art: '🧔🧔🧔🧔🧔🧔🧔', bg: 'campo', text: 'Jessé foi chamando os filhos, um por um. Sete filhos passaram diante de Samuel, e Samuel disse: "O Senhor não escolheu nenhum destes."', r: '1 Samuel 16:8-10' },
        { art: '👴❓', bg: 'campo', text: 'Samuel perguntou: "Esses são todos os seus filhos?" Jessé respondeu: "Ainda falta o mais novo. Ele está cuidando das ovelhas." Ninguém tinha lembrado de chamá-lo!', r: '1 Samuel 16:11' },
        { art: '👦🐑🏃', bg: 'campo', text: 'Mandaram buscar o menino. Ele era corado, com olhos bonitos e boa aparência. O seu nome era Davi.', r: '1 Samuel 16:11-12' },
        { art: '✨👉👦', bg: 'aurora', fx: 'luz', text: 'E o Senhor disse: "Levante-se e unja-o, porque é este!"', r: '1 Samuel 16:12' },
        { art: '🫗👦✨', bg: 'aurora', fx: 'brilho', text: 'Samuel derramou o azeite sobre a cabeça de Davi, no meio dos irmãos. E, daquele dia em diante, o Espírito do Senhor veio com poder sobre Davi.', r: '1 Samuel 16:13' }
      ],
      god: 'Deus não escolhe pela aparência, mas pelo coração. Ele vê quem os outros esquecem.',
      jesus: 'Davi era o filho mais novo, o que ninguém lembrou de chamar, e cuidava das ovelhas em Belém. Mil anos depois, em Belém, nasceu Jesus, o Filho de Davi, de uma família simples, e os primeiros a visitá-lo foram pastores! Isaías disse que Jesus não teria "beleza nem formosura" para atrair os olhos (Isaías 53:2), mas é o Rei que Deus escolheu.',
      verse: { ref: '1 Samuel 16:7', tx: 'O homem vê o que está diante dos olhos, porém o Senhor olha para o coração.' },
      small: [
        { q: 'O que Davi fazia?', o: [['🐑', 'Cuidava das ovelhas'], ['🚗', 'Dirigia'], ['🍳', 'Cozinhava']] },
        { q: 'Para onde Deus olha?', o: [['❤️', 'Para o coração'], ['👟', 'Para o sapato'], ['💇', 'Para o cabelo']] },
        { q: 'O que Samuel derramou em Davi?', o: [['🫗', 'Azeite'], ['🧃', 'Suco'], ['🎨', 'Tinta']] }
      ],
      big: [
        { q: 'Em que cidade morava a família de Jessé?', o: ['Belém', 'Jerusalém', 'Jericó', 'Siló'], e: '1 Samuel 16:1.' },
        { q: 'Por que Samuel achou que Eliabe era o escolhido?', o: ['Era alto e bonito', 'Era o mais sábio', 'Tocava harpa', 'Venceu um gigante'], e: '1 Samuel 16:6-7.' },
        { q: 'Quantos filhos passaram antes de Davi?', o: ['Sete', 'Dois', 'Doze', 'Um'], e: '1 Samuel 16:10.' },
        { q: 'O que aconteceu com Davi depois de ungido?', o: ['O Espírito do Senhor veio sobre ele', 'Virou rei no mesmo dia', 'Foi para o palácio', 'Nada'], e: '1 Samuel 16:13.' }
      ],
      parents: 'Ponto central: Deus olha o coração (16:7). Bom momento para conversar sobre não julgar pela aparência e sobre o valor de quem é esquecido. Leitura junto: 1 Samuel 16:1-13.'
    },
    {
      id: 'v2', title: 'O pastor que tocava harpa', ref: '1 Samuel 16:14-23; Salmo 23', icon: '🎵',
      recap: 'Na lição passada, Samuel ungiu o menino Davi, e o Espírito do Senhor veio sobre ele.',
      scenes: [
        { art: '👑😣', bg: 'palacio', text: 'O Espírito do Senhor tinha se retirado de Saul, e o rei vivia muito perturbado, com medo e tristeza.', r: '1 Samuel 16:14' },
        { art: '🧔💬👑', bg: 'palacio', text: 'Os servos de Saul disseram: "Vamos procurar alguém que toque harpa bem. Quando o senhor estiver perturbado, ele toca, e o senhor vai se sentir melhor."', r: '1 Samuel 16:15-16' },
        { art: '🧔💡👦', bg: 'palacio', text: 'Um dos servos disse: "Eu conheço um filho de Jessé, de Belém, que toca muito bem. É corajoso, fala bem, tem boa aparência, e o Senhor está com ele."', r: '1 Samuel 16:18' },
        { art: '👦🎵👑', bg: 'palacio', fx: 'coracoes', text: 'Davi foi para o palácio. Toda vez que Saul ficava perturbado, Davi tocava a harpa, e Saul se acalmava e se sentia bem.', r: '1 Samuel 16:21-23' },
        { art: '👦🐑🌙', bg: 'noite', fx: 'estrelas', text: 'Quando não estava no palácio, Davi continuava cuidando das ovelhas do pai. No campo, ele compunha canções para Deus. Muitas delas estão no livro de Salmos.', r: '1 Samuel 17:15; 2 Samuel 23:1' },
        { art: '🐑🌿💧', bg: 'campo', fx: 'ondas', text: 'Uma das mais famosas é o Salmo 23: "O Senhor é o meu pastor, nada me faltará. Ele me faz deitar em pastos verdes e me guia para águas tranquilas."', r: 'Salmos 23:1-2' },
        { art: '🌑🦯💛', bg: 'noite', fx: 'luz', text: '"Ainda que eu ande pelo vale da sombra da morte, não vou ter medo de mal nenhum, porque Tu estás comigo. A tua vara e o teu cajado me consolam."', r: 'Salmos 23:4' },
        { art: '🍽️🫗🏠', bg: 'aurora', fx: 'brilho', text: '"A bondade e a misericórdia vão me seguir todos os dias da minha vida, e eu vou morar na casa do Senhor para sempre." Davi, o pastor, sabia que ele mesmo era uma ovelha cuidada por Deus.', r: 'Salmos 23:5-6' }
      ],
      god: 'O Senhor é o nosso Pastor. Ele cuida, guia e protege, até nos momentos escuros.',
      jesus: 'Davi escreveu: "O Senhor é o meu pastor." Jesus disse: "Eu sou o bom Pastor; o bom Pastor dá a sua vida pelas ovelhas" (João 10:11). Jesus é o Pastor do Salmo 23 em pessoa! E a música de Davi acalmava Saul; a paz de Jesus acalma o nosso coração de verdade (João 14:27).',
      verse: { ref: 'Salmos 23:1', tx: 'O Senhor é o meu pastor, nada me faltará.' },
      small: [
        { q: 'Que instrumento Davi tocava?', o: [['🎵', 'Harpa'], ['🎸', 'Guitarra'], ['🥁', 'Bateria']] },
        { q: 'Quem é o nosso Pastor?', o: [['✨', 'O Senhor'], ['🐺', 'O lobo'], ['🐄', 'A vaca']] },
        { q: 'Como Saul ficava quando Davi tocava?', o: [['😌', 'Calmo'], ['😠', 'Bravo'], ['😴', 'Dormindo']] }
      ],
      big: [
        { q: 'Por que Davi foi chamado ao palácio?', o: ['Para tocar harpa para Saul', 'Para ser rei', 'Para lutar', 'Para cozinhar'], e: '1 Samuel 16:16-19.' },
        { q: 'O que o servo disse sobre Davi?', o: ['Que o Senhor estava com ele', 'Que era muito alto', 'Que era rico', 'Que era preguiçoso'], e: '1 Samuel 16:18.' },
        { q: 'Em que livro estão as canções de Davi?', o: ['Salmos', 'Gênesis', 'Juízes', 'Rute'], e: 'Davi é chamado "o suave salmista de Israel" (2 Samuel 23:1).' },
        { q: 'O que Davi diz no vale da sombra da morte?', o: ['"Não temerei mal algum"', '"Estou perdido"', '"Vou fugir"', '"Ninguém me ajuda"'], e: 'Salmos 23:4.' }
      ],
      parents: 'O "espírito mau da parte do Senhor" que perturbava Saul (16:14) foi descrito como perturbação, medo e tristeza. O Salmo 23 é ótimo para decorar em família e orar antes de dormir. Leitura junto: Salmos 23.'
    },
    {
      id: 'v3', title: 'Davi e Golias', ref: '1 Samuel 17', icon: '🪨',
      recap: 'Na lição passada, Davi tocava harpa para Saul e compunha canções como o Salmo 23.',
      scenes: [
        { art: '⛰️🏞️⛰️', bg: 'monte', text: 'Os filisteus e Israel estavam em guerra, um exército em cada monte, com um vale no meio, o vale de Elá.', r: '1 Samuel 17:1-3' },
        { art: '🧌🛡️⚔️', bg: 'monte', text: 'Todo dia, um gigante filisteu chamado Golias, de Gate, saía para o meio do vale. Ele tinha quase três metros de altura e usava uma armadura de bronze pesadíssima.', r: '1 Samuel 17:4-7' },
        { art: '🧌📣😨', bg: 'monte', text: 'Golias gritava: "Mandem um homem para lutar comigo! Se ele me vencer, seremos seus escravos." Por quarenta dias ele desafiou o exército de Deus, e Saul e todos os soldados tremiam de medo.', r: '1 Samuel 17:8-11, 16' },
        { art: '👦🧺🍞', bg: 'campo', text: 'Jessé mandou Davi levar comida para os irmãos que estavam no exército. Quando Davi chegou, ouviu Golias gritando.', r: '1 Samuel 17:17-23' },
        { art: '👦❓😤', bg: 'monte', text: 'Davi ficou indignado: "Quem é esse filisteu para desafiar os exércitos do Deus vivo?" O irmão mais velho, Eliabe, brigou com ele: "Você só veio para ver a guerra!" Mas Davi não desistiu.', r: '1 Samuel 17:26-30' },
        { art: '👦💬👑', bg: 'palacio', text: 'Davi foi até Saul: "Que ninguém desanime! Eu vou lutar com ele." Saul disse: "Você é só um menino!" Davi respondeu: "Eu já matei um leão e um urso que atacaram as ovelhas. O Senhor me livrou deles e vai me livrar deste filisteu."', r: '1 Samuel 17:32-37' },
        { art: '🛡️❌👦🪨', bg: 'monte', text: 'Saul vestiu Davi com a sua armadura, mas era grande e pesada demais. Davi tirou tudo. Pegou o cajado, escolheu cinco pedras lisas no riacho, colocou na bolsa de pastor e foi com a sua funda.', r: '1 Samuel 17:38-40' },
        { art: '🧌😂👦', bg: 'monte', text: 'Golias viu Davi e riu: "Sou por acaso um cachorro, para você vir com pedaços de pau?" E ameaçou Davi.', r: '1 Samuel 17:42-44' },
        { art: '👦✨📣', bg: 'aurora', fx: 'luz', text: 'Davi respondeu: "Você vem contra mim com espada e lança, mas eu vou contra você em nome do Senhor dos Exércitos! Hoje toda a terra vai saber que há Deus em Israel, porque a batalha é do Senhor!"', r: '1 Samuel 17:45-47' },
        { art: '👦🪨💫🧌', bg: 'monte', fx: 'vento', text: 'Davi correu em direção a Golias, colocou uma pedra na funda e atirou. A pedra acertou bem na testa do gigante, que caiu com o rosto no chão. Os filisteus fugiram, e Israel venceu!', r: '1 Samuel 17:48-52' }
      ],
      god: 'A batalha é do Senhor. Deus usa os pequenos que confiam nele para vencer os gigantes.',
      jesus: 'O povo de Deus tremia de medo, e ninguém conseguia vencer o gigante. Então veio Davi, sozinho, e venceu no lugar de todos. Jesus é o nosso Davi: Ele enfrentou sozinho os nossos maiores gigantes, o pecado, o diabo e a morte, e venceu na cruz por nós (Hebreus 2:14-15). A vitória dele é a nossa vitória!',
      verse: { ref: '1 Samuel 17:45', tx: 'Tu vens a mim com espada, e com lança, e com escudo; porém eu venho a ti em nome do Senhor dos Exércitos.' },
      small: [
        { q: 'Como era Golias?', o: [['🧌', 'Um gigante'], ['🐜', 'Pequenininho'], ['👶', 'Um bebê']] },
        { q: 'Quantas pedras Davi pegou?', o: [['🖐️', 'Cinco'], ['1️⃣', 'Uma'], ['🔟', 'Dez']] },
        { q: 'De quem é a batalha?', o: [['✨', 'Do Senhor'], ['🧌', 'Do gigante'], ['👑', 'Do Faraó']] }
      ],
      big: [
        { q: 'Por quantos dias Golias desafiou Israel?', o: ['Quarenta', 'Sete', 'Um', 'Cem'], e: '1 Samuel 17:16.' },
        { q: 'Que animais Davi já tinha enfrentado?', o: ['Um leão e um urso', 'Um lobo e uma serpente', 'Um tigre e um elefante', 'Nenhum'], e: '1 Samuel 17:34-36.' },
        { q: 'Por que Davi não usou a armadura de Saul?', o: ['Era grande e pesada demais', 'Estava quebrada', 'Era de outro rei', 'Ele esqueceu'], e: '1 Samuel 17:39.' },
        { q: 'Em nome de quem Davi foi lutar?', o: ['Do Senhor dos Exércitos', 'De Saul', 'De Jessé', 'Dele mesmo'], e: '1 Samuel 17:45.' }
      ],
      parents: 'A morte de Golias (Davi cortou-lhe a cabeça, 17:51) foi resumida como "o gigante caiu". Ponto central: não é "seja como Davi e vença seus gigantes", e sim "Deus luta por nós", e Cristo é o nosso campeão. Leitura junto: 1 Samuel 17:32-50.'
    },
    {
      id: 'v4', title: 'Davi e Jônatas: amigos para sempre', ref: '1 Samuel 18 – 20', icon: '🤝',
      recap: 'Na lição passada, Davi venceu o gigante Golias em nome do Senhor.',
      scenes: [
        { art: '🧑💛👦', bg: 'palacio', fx: 'coracoes', text: 'Depois da vitória contra Golias, Jônatas, o filho do rei Saul, ficou muito amigo de Davi. A Bíblia diz que Jônatas amava Davi como a si mesmo.', r: '1 Samuel 18:1' },
        { art: '🧑🧥🗡️🏹', bg: 'palacio', fx: 'brilho', text: 'Jônatas fez uma aliança de amizade com Davi e deu a ele a sua capa, a sua espada, o seu arco e o seu cinto. Jônatas era o herdeiro do trono, mas deu tudo a Davi.', r: '1 Samuel 18:3-4' },
        { art: '👩🎶👦', bg: 'cidade', text: 'Quando os soldados voltavam da batalha, as mulheres cantavam: "Saul matou milhares, mas Davi, dezenas de milhares!"', r: '1 Samuel 18:6-7' },
        { art: '👑😠👀', bg: 'palacio', text: 'Saul ficou com muita inveja e raiva. Daquele dia em diante, passou a olhar Davi com desconfiança. Chegou até a tentar acertá-lo com uma lança enquanto Davi tocava harpa!', r: '1 Samuel 18:8-11' },
        { art: '👦✨', bg: 'aurora', fx: 'luz', text: 'Mas o Senhor estava com Davi, e tudo o que ele fazia dava certo. Todo o povo amava Davi.', r: '1 Samuel 18:12-16' },
        { art: '🧑🗣️👑', bg: 'palacio', text: 'Saul disse aos servos e a Jônatas que queria matar Davi. Jônatas defendeu o amigo diante do pai: "Ele não fez nada contra o senhor! Por que derramar sangue inocente?"', r: '1 Samuel 19:1-6' },
        { art: '🏹🏹🌾', bg: 'campo', text: 'A raiva de Saul voltou, e Davi precisou se esconder. Jônatas combinou um sinal: ia atirar flechas no campo. Se dissesse ao menino "as flechas estão mais longe", era para Davi fugir.', r: '1 Samuel 20:18-22' },
        { art: '🏹➡️😢', bg: 'campo', text: 'Jônatas descobriu que o pai queria mesmo matar Davi. Atirou as flechas e gritou: "As flechas estão mais longe! Depressa!" Era o sinal.', r: '1 Samuel 20:35-38' },
        { art: '🧑🤗👦😭', bg: 'campo', fx: 'coracoes', text: 'Davi saiu do esconderijo, e os dois amigos se abraçaram e choraram juntos. Jônatas disse: "Vá em paz. O Senhor será testemunha da nossa amizade, entre nós e entre os nossos filhos, para sempre."', r: '1 Samuel 20:41-42' }
      ],
      god: 'Deus nos dá amigos verdadeiros. Amigo de verdade é fiel, mesmo quando custa caro.',
      jesus: 'Jônatas era príncipe e deu a Davi a sua capa e as suas armas, abrindo mão do trono por amor. Jesus fez muito mais: Ele, o Filho do Rei, deixou a sua glória e nos deu a sua própria vida. E Jesus nos chama de amigos: "Já não vos chamo servos... mas tenho-vos chamado amigos" (João 15:15).',
      verse: { ref: 'Provérbios 17:17', tx: 'Em todo o tempo ama o amigo e para a hora da angústia nasce o irmão.' },
      small: [
        { q: 'Quem era o melhor amigo de Davi?', o: [['🧑', 'Jônatas'], ['🧌', 'Golias'], ['👑', 'Saul']] },
        { q: 'O que Jônatas deu para Davi?', o: [['🧥', 'Sua capa e suas armas'], ['🍕', 'Uma pizza'], ['🎮', 'Um jogo']] },
        { q: 'Como os amigos se despediram?', o: [['🤗', 'Com um abraço'], ['👊', 'Brigando'], ['🙈', 'Sem se ver']] }
      ],
      big: [
        { q: 'Por que Saul ficou com inveja de Davi?', o: ['O povo cantava que Davi venceu mais', 'Davi era mais alto', 'Davi era mais rico', 'Davi roubou a coroa'], e: '1 Samuel 18:7-8.' },
        { q: 'Por que era especial Jônatas dar suas coisas a Davi?', o: ['Ele era o herdeiro do trono', 'Eram coisas velhas', 'Ele não gostava delas', 'Era aniversário de Davi'], e: '1 Samuel 18:4; 23:17.' },
        { q: 'Qual era o sinal combinado por Jônatas?', o: ['As flechas atiradas no campo', 'Uma trombeta', 'Uma fogueira', 'Uma carta'], e: '1 Samuel 20:20-22.' },
        { q: 'O que Jesus nos chama em João 15:15?', o: ['Amigos', 'Servos', 'Estranhos', 'Soldados'], e: 'João 15:13-15.' }
      ],
      parents: 'Ponto central: amizade leal e sacrificial. Os dotes exigidos por Saul para Mical (18:25-27) e a fuga com a ajuda de Mical (19:11-17) foram omitidos. Bom momento para falar sobre ser um bom amigo. Leitura junto: 1 Samuel 18:1-4 e 20:35-42.'
    },
    {
      id: 'v5', title: 'Davi foge e se esconde na caverna', ref: '1 Samuel 21 – 23; Salmo 34', icon: '🕳️',
      recap: 'Na lição passada, Jônatas avisou Davi com as flechas, e os amigos se despediram.',
      scenes: [
        { art: '👦🏃🏜️', bg: 'deserto', fx: 'vento', text: 'Davi precisou fugir de Saul. De repente, o herói de Israel não tinha casa, nem comida, nem armas. Estava sozinho.', r: '1 Samuel 21:1' },
        { art: '🍞🗡️⛪', bg: 'cidade', text: 'Em Nobe, o sacerdote Aimeleque deu a Davi os pães sagrados, os únicos que havia, e a espada de Golias, que estava guardada lá.', r: '1 Samuel 21:1-9' },
        { art: '👦😨🤪', bg: 'palacio', text: 'Davi fugiu para Gate, a cidade de Golias! Quando o reconheceram, Davi ficou com muito medo e fingiu estar louco para escapar. Depois disso, escreveu o Salmo 34.', r: '1 Samuel 21:10-15; Salmo 34 (título)' },
        { art: '🎶✨', bg: 'aurora', fx: 'brilho', text: 'No Salmo 34, Davi canta: "Busquei o Senhor, e Ele me respondeu, e me livrou de todos os meus temores. Provem e vejam que o Senhor é bom!"', r: 'Salmos 34:4, 8' },
        { art: '🕳️⛰️👦', bg: 'monte', text: 'Davi se escondeu na caverna de Adulão. E começaram a chegar pessoas: os irmãos, a família, e também gente que estava em dificuldade, endividada ou triste. Uns quatrocentos homens!', r: '1 Samuel 22:1-2' },
        { art: '👦👥💛', bg: 'monte', fx: 'coracoes', text: 'Davi se tornou o líder daquele grupo de pessoas que ninguém queria. Ele cuidou deles, e eles foram ficando fortes e fiéis.', r: '1 Samuel 22:2' },
        { art: '👦🙏❓', bg: 'monte', fx: 'luz', text: 'Davi aprendeu a perguntar ao Senhor antes de agir: "Devo ir? Devo lutar?" E Deus respondia. Ele salvou a cidade de Queila dos filisteus porque o Senhor mandou.', r: '1 Samuel 23:1-5' },
        { art: '🧑🤝👦🌳', bg: 'campo', fx: 'coracoes', text: 'Enquanto Davi estava escondido no deserto, Jônatas foi encontrá-lo em segredo e fortaleceu a fé dele em Deus: "Não tenha medo. Você vai ser rei de Israel, e eu serei o segundo depois de você."', r: '1 Samuel 23:15-18' }
      ],
      god: 'Deus está conosco até nos lugares mais escuros. Ele ouve quem clama e nos ensina a perguntar a Ele.',
      jesus: 'Davi, o rei ungido, foi rejeitado e vivia como fugitivo, e reuniu ao redor dele os que estavam endividados e tristes. Jesus também foi rejeitado e chamou para perto de si os pecadores, os doentes e os cansados: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei" (Mateus 11:28). Jesus até lembrou do pão que Davi comeu em Nobe (Marcos 2:25-26).',
      verse: { ref: 'Salmos 34:8', tx: 'Provai, e vede que o Senhor é bom; bem-aventurado o homem que nele confia.' },
      small: [
        { q: 'Onde Davi se escondeu?', o: [['🕳️', 'Numa caverna'], ['🏰', 'Num castelo'], ['🛳️', 'Num navio']] },
        { q: 'Que espada Davi recebeu?', o: [['🗡️', 'A espada de Golias'], ['🪄', 'Uma varinha'], ['🔪', 'Uma faca de cozinha']] },
        { q: 'Quem veio fortalecer Davi no deserto?', o: [['🧑', 'Jônatas'], ['🧌', 'Um gigante'], ['🐻', 'Um urso']] }
      ],
      big: [
        { q: 'O que o sacerdote deu a Davi em Nobe?', o: ['Os pães sagrados e a espada de Golias', 'Ouro', 'Um cavalo', 'Uma coroa'], e: '1 Samuel 21:6, 9.' },
        { q: 'Que salmo Davi escreveu depois de escapar de Gate?', o: ['Salmo 34', 'Salmo 23', 'Salmo 1', 'Salmo 150'], e: 'Título do Salmo 34.' },
        { q: 'Que tipo de pessoas se juntaram a Davi na caverna?', o: ['Pessoas em dificuldade, endividadas e tristes', 'Só reis', 'Só soldados', 'Só sacerdotes'], e: '1 Samuel 22:2.' },
        { q: 'O que Davi fazia antes de agir?', o: ['Perguntava ao Senhor', 'Jogava um dado', 'Perguntava a Saul', 'Nada'], e: '1 Samuel 23:2, 4.' }
      ],
      parents: 'Atenção: a vingança de Saul contra os sacerdotes de Nobe (1 Samuel 22:6-23) foi omitida por ser muito violenta; leia sozinho se quiser. O título do Salmo 34 menciona "Abimeleque", título dos reis filisteus. Jesus cita os pães de Nobe em Marcos 2:25-26. Leitura junto: 1 Samuel 22:1-2 e Salmos 34:1-8.'
    },
    {
      id: 'v6', title: 'Davi poupa a vida de Saul', ref: '1 Samuel 24', icon: '✂️',
      recap: 'Na lição passada, Davi vivia escondido em cavernas, e Jônatas fortaleceu a fé dele.',
      scenes: [
        { art: '👑⚔️👥', bg: 'deserto', text: 'Saul soube que Davi estava no deserto de En-Gedi e foi atrás dele com três mil soldados escolhidos.', r: '1 Samuel 24:1-2' },
        { art: '🕳️👑', bg: 'monte', text: 'No caminho, Saul entrou sozinho numa caverna para descansar um pouco. Ele não sabia, mas Davi e os seus homens estavam escondidos bem no fundo daquela mesma caverna!', r: '1 Samuel 24:3' },
        { art: '👥🤫💬', bg: 'noite', text: 'Os homens de Davi cochicharam: "É hoje! Deus entregou o seu inimigo nas suas mãos. Faça com ele o que quiser!"', r: '1 Samuel 24:4' },
        { art: '👦✂️🧥', bg: 'noite', text: 'Davi se aproximou devagarzinho, sem barulho... mas, em vez de atacar, cortou só uma pontinha do manto de Saul.', r: '1 Samuel 24:4' },
        { art: '👦💔', bg: 'noite', text: 'Logo depois, o coração de Davi doeu até por isso. Ele disse aos homens: "Que o Senhor me livre de fazer mal ao meu senhor, o ungido do Senhor!" E não deixou ninguém atacar Saul.', r: '1 Samuel 24:5-7' },
        { art: '👑🚶👦📣', bg: 'monte', text: 'Saul saiu da caverna e seguiu. Então Davi saiu atrás e gritou: "Meu senhor, o rei!" Saul se virou, e Davi se curvou até o chão.', r: '1 Samuel 24:8' },
        { art: '👦🧥✋', bg: 'monte', fx: 'luz', text: 'Davi mostrou o pedaço do manto: "Hoje o Senhor te entregou nas minhas mãos na caverna, e eu não te fiz mal. Que o Senhor julgue entre nós dois. Mas a minha mão não vai se levantar contra você."', r: '1 Samuel 24:9-15' },
        { art: '👑😭', bg: 'monte', fx: 'coracoes', text: 'Saul começou a chorar alto: "Você é mais justo do que eu, Davi! Você me pagou com o bem, e eu te paguei com o mal. Agora eu sei que você vai ser rei." E voltou para casa.', r: '1 Samuel 24:16-22' }
      ],
      god: 'A vingança pertence a Deus. Quem confia nele pode responder o mal com o bem.',
      jesus: 'Davi teve a chance de se vingar e preferiu poupar o seu inimigo. Jesus ensinou: "Amai os vossos inimigos, e orai pelos que vos perseguem" (Mateus 5:44). E Ele fez isso na cruz, orando pelos que o crucificavam: "Pai, perdoa-lhes" (Lucas 23:34). Nós também éramos inimigos de Deus, e Ele nos amou (Romanos 5:10).',
      verse: { ref: 'Romanos 12:19', tx: 'Não vos vingueis a vós mesmos, amados, mas dai lugar à ira, porque está escrito: Minha é a vingança; eu recompensarei, diz o Senhor.' },
      small: [
        { q: 'Onde Saul entrou para descansar?', o: [['🕳️', 'Numa caverna'], ['🏊', 'Numa piscina'], ['🛒', 'Num mercado']] },
        { q: 'O que Davi cortou?', o: [['🧥', 'Um pedaço do manto'], ['💇', 'O cabelo'], ['🎂', 'Um bolo']] },
        { q: 'Davi se vingou de Saul?', o: [['❌', 'Não, poupou a vida dele'], ['✅', 'Sim'], ['🤷', 'Mais ou menos']] }
      ],
      big: [
        { q: 'Quantos soldados Saul levou para pegar Davi?', o: ['Três mil', 'Trezentos', 'Doze', 'Cem mil'], e: '1 Samuel 24:2.' },
        { q: 'O que os homens de Davi queriam que ele fizesse?', o: ['Atacasse Saul', 'Fugisse', 'Dormisse', 'Cantasse'], e: '1 Samuel 24:4.' },
        { q: 'Por que Davi não fez mal a Saul?', o: ['Saul era o ungido do Senhor', 'Tinha medo', 'Estava escuro', 'Era fraco'], e: '1 Samuel 24:6.' },
        { q: 'O que Saul disse a Davi no fim?', o: ['"Você é mais justo do que eu"', '"Vou te pegar"', '"Fuja"', 'Nada'], e: '1 Samuel 24:17.' }
      ],
      parents: 'Ponto central: confiar a justiça a Deus e responder o mal com o bem (Romanos 12:17-21). Um detalhe de 24:3 ("para cobrir os pés") foi apresentado como "descansar". Converse sobre não revidar. Leitura junto: 1 Samuel 24:1-17.'
    },
    {
      id: 'v7', title: 'Abigail, a mulher sábia', ref: '1 Samuel 25', icon: '🧺',
      recap: 'Na lição passada, Davi poupou a vida de Saul na caverna.',
      scenes: [
        { art: '👴🕯️', bg: 'cidade', text: 'O profeta Samuel morreu, e todo Israel chorou por ele. Davi continuava no deserto com os seus homens.', r: '1 Samuel 25:1' },
        { art: '🐑🐑🐑💰', bg: 'campo', text: 'Ali perto vivia Nabal, um homem muito rico, com três mil ovelhas. Mas ele era grosseiro e mau. Sua esposa, Abigail, era muito sábia e bonita.', r: '1 Samuel 25:2-3' },
        { art: '👥🛡️🐑', bg: 'campo', text: 'Durante muito tempo, os homens de Davi protegeram os pastores e as ovelhas de Nabal no deserto, sem pegar nada. Eram como um muro de proteção para eles.', r: '1 Samuel 25:7, 15-16' },
        { art: '👦💬🧔😠', bg: 'campo', text: 'Davi mandou pedir a Nabal, com educação, um pouco de comida para os seus homens, num dia de festa. Nabal respondeu com desprezo: "Quem é Davi? Não vou dar nada!"', r: '1 Samuel 25:4-11' },
        { art: '👦😡⚔️', bg: 'deserto', text: 'Davi ficou furioso e decidiu se vingar: pegou quatrocentos homens com espadas para atacar a casa de Nabal. O Davi que poupou Saul estava prestes a fazer uma coisa errada por raiva.', r: '1 Samuel 25:12-13, 21-22' },
        { art: '👩🫏🍞🍇', bg: 'campo', text: 'Um dos servos contou tudo a Abigail. Ela agiu depressa: carregou jumentos com pães, vinho, ovelhas preparadas, grãos, passas e figos, e foi ao encontro de Davi, sem contar ao marido.', r: '1 Samuel 25:14-20' },
        { art: '👩🙇💬👦', bg: 'monte', fx: 'luz', text: 'Quando viu Davi, Abigail se curvou até o chão e falou com sabedoria: "Não se vingue com as próprias mãos. O Senhor vai fazer de você rei. E, quando isso acontecer, você não vai ter na consciência o peso de ter derramado sangue sem motivo."', r: '1 Samuel 25:23-31' },
        { art: '👦🙏👩', bg: 'aurora', fx: 'coracoes', text: 'Davi caiu em si: "Bendito seja o Senhor, que hoje mandou você me encontrar! E bendita seja a sua sabedoria, que me impediu de me vingar!" E voltou em paz.', r: '1 Samuel 25:32-35' },
        { art: '⚖️✨', bg: 'aurora', text: 'Dez dias depois, o Senhor feriu Nabal, e ele morreu. Davi viu que Deus mesmo tinha feito justiça. Mais tarde, Abigail se tornou esposa de Davi.', r: '1 Samuel 25:37-42' }
      ],
      god: 'Deus usa pessoas sábias para nos impedir de pecar. Uma palavra calma pode evitar uma tragédia.',
      jesus: 'Abigail se colocou no meio, entre a raiva de Davi e a culpa do marido, e pediu: "Que a culpa caia sobre mim" (1 Samuel 25:24). Jesus é o mediador perfeito: Ele se colocou entre nós e a ira justa de Deus contra o pecado, e levou a culpa sobre si (1 Timóteo 2:5).',
      verse: { ref: 'Provérbios 15:1', tx: 'A resposta branda desvia o furor, mas a palavra dura suscita a ira.' },
      small: [
        { q: 'Como era Nabal?', o: [['😠', 'Grosseiro e mau'], ['😇', 'Bondoso'], ['😴', 'Dorminhoco']] },
        { q: 'O que Abigail levou para Davi?', o: [['🍞', 'Muita comida'], ['💣', 'Bombas'], ['🧸', 'Brinquedos']] },
        { q: 'Como Abigail falou com Davi?', o: [['🕊️', 'Com calma e sabedoria'], ['📣', 'Gritando'], ['🤐', 'Não falou']] }
      ],
      big: [
        { q: 'Como os homens de Davi tinham ajudado Nabal?', o: ['Protegendo os pastores e as ovelhas', 'Construindo casas', 'Pagando dívidas', 'Não ajudaram'], e: '1 Samuel 25:15-16.' },
        { q: 'O que Davi decidiu fazer depois do desprezo de Nabal?', o: ['Se vingar com espadas', 'Perdoar logo', 'Fugir', 'Mandar presentes'], e: '1 Samuel 25:13.' },
        { q: 'O que Abigail pediu a Davi?', o: ['Que não se vingasse com as próprias mãos', 'Que matasse Nabal', 'Que fosse embora do país', 'Dinheiro'], e: '1 Samuel 25:26, 31.' },
        { q: 'O que Davi disse sobre Abigail?', o: ['Que Deus a mandou e que ela era sábia', 'Que ela era culpada', 'Que ela era como Nabal', 'Nada'], e: '1 Samuel 25:32-33.' }
      ],
      parents: 'Ponto central: a sabedoria e a mansidão evitam o pecado da vingança (Provérbios 15:1). O fato de Davi ter várias esposas (25:42-44) foi apenas mencionado; a poligamia não é aprovada pela Bíblia. Leitura junto: 1 Samuel 25:14-35.'
    },
    {
      id: 'v8', title: 'O fim do rei Saul', ref: '1 Samuel 26 – 31', icon: '🌙',
      recap: 'Na lição passada, Abigail, com sabedoria, impediu Davi de se vingar.',
      scenes: [
        { art: '👑⚔️🌙', bg: 'noite', fx: 'estrelas', text: 'Saul, mais uma vez, saiu para perseguir Davi com três mil soldados. Mas, de noite, Davi e um amigo entraram no acampamento, onde todos dormiam profundamente.', r: '1 Samuel 26:1-7, 12' },
        { art: '👦🗡️🏺', bg: 'noite', fx: 'estrelas', text: 'De novo, Davi poupou Saul. Só pegou a lança e a jarra de água que estavam perto da cabeça do rei, e saiu. Depois, de longe, mostrou que podia tê-lo matado, mas não fez.', r: '1 Samuel 26:8-16' },
        { art: '👑😢💬', bg: 'monte', text: 'Saul disse: "Eu pequei! Volte, meu filho Davi. Agi como um tolo." Mas não mudou de verdade, e Davi preferiu não voltar.', r: '1 Samuel 26:21-25' },
        { art: '👑😨🔮', bg: 'noite', text: 'Quando os filisteus atacaram de novo, Saul ficou desesperado. Deus não respondia, porque Saul tinha se afastado dele. Então Saul fez uma coisa proibida: procurou uma médium para falar com os mortos.', r: '1 Samuel 28:5-8' },
        { art: '⚠️📜', bg: 'noite', text: 'Ali, Saul ouviu uma mensagem terrível: no dia seguinte, ele e os seus filhos iam cair na batalha, e o reino seria dado a Davi, como Deus tinha dito.', r: '1 Samuel 28:15-19' },
        { art: '⛰️⚔️💔', bg: 'monte', text: 'No monte Gilboa, os filisteus venceram Israel. Jônatas, o amigo de Davi, morreu na batalha, e também o rei Saul. Foi um dia muito triste.', r: '1 Samuel 31:1-6' },
        { art: '🏘️💛', bg: 'cidade', fx: 'coracoes', text: 'Os homens de Jabes-Gileade, aquela cidade que Saul tinha salvado no começo do seu reinado, foram de noite buscar os corpos de Saul e dos filhos, e os sepultaram com respeito.', r: '1 Samuel 31:11-13' },
        { art: '👦😭🎶', bg: 'aurora', text: 'Quando Davi soube, não comemorou. Ele rasgou as roupas, chorou e escreveu um cântico triste por Saul e por Jônatas: "Como caíram os valentes! Jônatas, meu irmão, como você me era querido!"', r: '2 Samuel 1:11-12, 17, 25-27' }
      ],
      god: 'Afastar-se de Deus leva à tristeza e à ruína. Mas Deus sempre cumpre o que promete.',
      jesus: 'Saul começou bem, mas terminou longe de Deus, procurando respostas no lugar errado. Jesus nos convida a buscar a Deus nele: "Eu sou o caminho, e a verdade, e a vida" (João 14:6). E Davi chorou pelo seu inimigo, como Jesus chorou por Jerusalém, que o rejeitava (Lucas 19:41).',
      verse: { ref: 'Salmos 57:1', tx: 'Tem misericórdia de mim, ó Deus, tem misericórdia de mim, porque a minha alma confia em ti.' },
      small: [
        { q: 'O que Davi pegou de Saul dormindo?', o: [['🗡️', 'A lança e a jarra'], ['👑', 'A coroa'], ['👟', 'O sapato']] },
        { q: 'Davi comemorou quando Saul morreu?', o: [['😭', 'Não, chorou'], ['🎉', 'Sim'], ['😴', 'Dormiu']] },
        { q: 'Quem morreu junto com Saul?', o: [['🧑', 'Jônatas'], ['👦', 'Davi'], ['👴', 'Samuel']] }
      ],
      big: [
        { q: 'Quantas vezes Davi poupou a vida de Saul?', o: ['Duas', 'Uma', 'Dez', 'Nenhuma'], e: '1 Samuel 24 e 26.' },
        { q: 'O que Saul fez de proibido quando ficou desesperado?', o: ['Procurou uma médium', 'Orou a Deus', 'Fugiu', 'Fez as pazes com Davi'], e: '1 Samuel 28:7; Deuteronômio 18:10-11.' },
        { q: 'Onde foi a última batalha de Saul?', o: ['No monte Gilboa', 'Em Jericó', 'No Sinai', 'Em Belém'], e: '1 Samuel 31:1.' },
        { q: 'O que Davi fez quando soube da morte de Saul e Jônatas?', o: ['Chorou e escreveu um cântico', 'Fez uma festa', 'Ficou calado', 'Foi dormir'], e: '2 Samuel 1:17-27.' }
      ],
      parents: 'Atenção: a consulta à médium de En-Dor (1 Samuel 28) foi contada sem detalhes sobrenaturais; e a morte de Saul (que se lançou sobre a própria espada, 31:4) foi resumida como "morreu na batalha". Recomendamos que os adultos leiam antes. Os capítulos 27 e 29–30 (Davi entre os filisteus, Ziclague) foram omitidos. Leitura junto: 1 Samuel 26:7-12 e 2 Samuel 1:17-27.'
    },
    {
      id: 'v9', title: 'Davi, rei em Jerusalém', ref: '2 Samuel 2 – 5', icon: '👑',
      recap: 'Na lição passada, Saul e Jônatas morreram na batalha, e Davi chorou por eles.',
      scenes: [
        { art: '👦🙏❓', bg: 'aurora', fx: 'luz', text: 'Depois da morte de Saul, Davi perguntou ao Senhor: "Devo subir para alguma cidade de Judá?" E o Senhor disse: "Suba para Hebrom."', r: '2 Samuel 2:1' },
        { art: '👑🏘️', bg: 'cidade', text: 'Em Hebrom, os homens de Judá ungiram Davi como rei sobre a sua tribo. As outras tribos ainda seguiam um filho de Saul, e houve uma longa disputa entre os dois lados.', r: '2 Samuel 2:4, 8-10; 3:1' },
        { art: '⏳7️⃣', bg: 'cidade', text: 'Davi reinou em Hebrom por sete anos e meio. Ele foi esperando o tempo de Deus, sem tentar tomar o trono à força.', r: '2 Samuel 2:11; 5:5' },
        { art: '👥1️⃣2️⃣👑', bg: 'cidade', fx: 'brilho', text: 'Por fim, todas as tribos de Israel vieram a Davi em Hebrom: "Somos da mesma família! O Senhor disse a você: Você vai apascentar o meu povo e ser o líder dele." E ungiram Davi como rei de todo Israel.', r: '2 Samuel 5:1-3' },
        { art: '3️⃣0️⃣👑', bg: 'palacio', text: 'Davi tinha trinta anos quando começou a reinar, e reinou quarenta anos.', r: '2 Samuel 5:4' },
        { art: '🏰⛰️', bg: 'cidade', text: 'Havia uma cidade no alto de um monte, muito bem protegida, onde moravam os jebuseus. Eles zombavam: "Você nunca vai entrar aqui!" Era Jerusalém.', r: '2 Samuel 5:6' },
        { art: '💧🕳️⬆️', bg: 'cidade', text: 'Mas Davi conquistou a fortaleza de Sião, entrando pelo canal de água. E Jerusalém passou a se chamar "a cidade de Davi".', r: '2 Samuel 5:7-9' },
        { art: '🏰✨', bg: 'aurora', fx: 'brilho', text: 'A Bíblia diz: "Davi ia crescendo cada vez mais, porque o Senhor, o Deus dos Exércitos, estava com ele." E Davi entendeu que Deus o tinha colocado como rei por amor ao povo de Israel.', r: '2 Samuel 5:10, 12' }
      ],
      god: 'Deus cumpre as suas promessas no tempo certo. Quem espera nele não precisa tomar nada à força.',
      jesus: 'As tribos disseram a Davi: "Você vai apascentar o meu povo." Davi foi rei e pastor. Jesus é o Rei Pastor perfeito, da família de Davi. E Jerusalém, a cidade de Davi, foi justamente onde Jesus morreu e ressuscitou. A Bíblia fala de uma Nova Jerusalém, onde Jesus vai reinar para sempre com o seu povo (Apocalipse 21:2).',
      verse: { ref: '2 Samuel 5:10', tx: 'E Davi ia cada vez mais crescendo, porque o Senhor Deus dos Exércitos era com ele.' },
      small: [
        { q: 'Que cidade Davi conquistou?', o: [['🏰', 'Jerusalém'], ['🗼', 'Babel'], ['🏖️', 'Uma praia']] },
        { q: 'Com quantos anos Davi começou a reinar?', o: [['3️⃣0️⃣', 'Trinta'], ['5️⃣', 'Cinco'], ['💯', 'Cem']] },
        { q: 'Quem estava com Davi?', o: [['✨', 'O Senhor'], ['🧌', 'Golias'], ['🐻', 'Um urso']] }
      ],
      big: [
        { q: 'Onde Davi foi ungido rei de Judá?', o: ['Em Hebrom', 'Em Belém', 'Em Jerusalém', 'Em Siló'], e: '2 Samuel 2:4.' },
        { q: 'Quanto tempo Davi reinou em Hebrom?', o: ['Sete anos e meio', 'Quarenta anos', 'Um ano', 'Três meses'], e: '2 Samuel 5:5.' },
        { q: 'Como Jerusalém passou a ser chamada?', o: ['A cidade de Davi', 'A cidade das palmeiras', 'Casa do pão', 'Babel'], e: '2 Samuel 5:7, 9.' },
        { q: 'Por que Davi crescia cada vez mais?', o: ['O Senhor estava com ele', 'Tinha o maior exército', 'Era o mais alto', 'Era rico'], e: '2 Samuel 5:10.' }
      ],
      parents: 'A guerra civil entre a casa de Saul e a de Davi, com as mortes de Abner e Isbosete (2 Samuel 2–4), foi resumida como "uma longa disputa". Ponto central: Davi espera o tempo de Deus. Leitura junto: 2 Samuel 5:1-12.'
    },
    {
      id: 'v10', title: 'A arca chega a Jerusalém', ref: '2 Samuel 6; 1 Crônicas 15 – 16', icon: '💃',
      recap: 'Na lição passada, Davi se tornou rei de todo Israel e conquistou Jerusalém.',
      scenes: [
        { art: '👑📦', bg: 'cidade', text: 'Davi queria que a arca da aliança, sinal da presença de Deus, estivesse no centro do reino, em Jerusalém. Fazia muitos anos que ela estava esquecida numa casa.', r: '2 Samuel 6:1-2; 1 Crônicas 13:3' },
        { art: '🛒🐂📦', bg: 'campo', text: 'Eles colocaram a arca numa carroça nova, puxada por bois, como os filisteus tinham feito. Mas Deus tinha mandado que a arca fosse carregada nos ombros dos levitas, com varas.', r: '2 Samuel 6:3; Números 4:15' },
        { art: '🐂⚠️✋', bg: 'campo', text: 'No caminho, os bois tropeçaram, e um homem chamado Uzá estendeu a mão e segurou a arca, o que era proibido. E Uzá morreu ali. Deus mostrou que é santo e deve ser tratado do jeito que Ele ensina.', r: '2 Samuel 6:6-7' },
        { art: '👑😨🏠', bg: 'cidade', text: 'Davi ficou triste e com medo, e deixou a arca na casa de um homem chamado Obede-Edom. Por três meses, o Senhor abençoou muito aquela casa.', r: '2 Samuel 6:8-11' },
        { art: '🧔🧔📦🪵', bg: 'aurora', fx: 'luz', text: 'Davi estudou a Lei e fez do jeito certo: os levitas carregaram a arca nos ombros. "Da primeira vez não buscamos o Senhor como Ele mandou", Davi reconheceu.', r: '1 Crônicas 15:2, 13-15' },
        { art: '🎺🥁🎶', bg: 'cidade', fx: 'brilho', text: 'Foi uma festa enorme! Havia trombetas, harpas, címbalos e cantores. Davi oferecia sacrifícios e todo o povo celebrava.', r: '2 Samuel 6:13-15; 1 Crônicas 15:16, 28' },
        { art: '👑💃✨', bg: 'cidade', fx: 'coracoes', text: 'E o rei Davi dançava com todas as suas forças diante do Senhor, vestido com uma roupa simples de linho, como os levitas. Ele não estava preocupado em parecer importante: estava feliz com Deus!', r: '2 Samuel 6:14' },
        { art: '👩😒🪟', bg: 'palacio', text: 'Mical, filha de Saul e esposa de Davi, olhou pela janela e desprezou Davi no coração. Depois disse: "Que bonito o rei se rebaixando assim!" Davi respondeu: "Foi diante do Senhor! E vou me rebaixar ainda mais."', r: '2 Samuel 6:16, 20-22' },
        { art: '⛺📦🎶', bg: 'aurora', fx: 'brilho', text: 'A arca foi colocada numa tenda em Jerusalém. Davi abençoou o povo e deu pão e frutas para cada pessoa. E escreveu um cântico: "Louvem ao Senhor, porque Ele é bom; a sua misericórdia dura para sempre!"', r: '2 Samuel 6:17-19; 1 Crônicas 16:34' }
      ],
      god: 'Deus é santo e merece ser adorado do jeito dele, com alegria e de todo o coração.',
      jesus: 'A arca, sinal da presença de Deus, entrou em Jerusalém com festa e música. Muitos anos depois, Jesus entrou em Jerusalém montado num jumentinho, e o povo cantava: "Hosana ao Filho de Davi!" (Mateus 21:9). Jesus é Deus presente no meio do seu povo, e por isso adoramos com alegria.',
      verse: { ref: 'Salmos 24:7', tx: 'Levantai, ó portas, as vossas cabeças; levantai-vos, ó entradas eternas, e entrará o Rei da Glória.' },
      small: [
        { q: 'O que Davi levou para Jerusalém?', o: [['📦', 'A arca da aliança'], ['🎁', 'Um presente'], ['🧸', 'Um ursinho']] },
        { q: 'O que Davi fez de alegria?', o: [['💃', 'Dançou diante do Senhor'], ['😴', 'Dormiu'], ['😠', 'Brigou']] },
        { q: 'Como a arca devia ser carregada?', o: [['🧔', 'Nos ombros dos levitas'], ['🚚', 'De caminhão'], ['🐘', 'Num elefante']] }
      ],
      big: [
        { q: 'Qual foi o erro da primeira tentativa?', o: ['Carregar a arca numa carroça', 'Fazer festa', 'Levar para Jerusalém', 'Cantar'], e: '1 Crônicas 15:13; Números 4:15.' },
        { q: 'O que aconteceu na casa de Obede-Edom?', o: ['O Senhor abençoou a casa', 'Pegou fogo', 'Nada', 'Foi roubada'], e: '2 Samuel 6:11.' },
        { q: 'Como Davi estava vestido para dançar?', o: ['Com uma roupa simples de linho', 'Com a coroa e o manto', 'Com armadura', 'De pastor'], e: '2 Samuel 6:14.' },
        { q: 'O que diz o cântico de Davi em 1 Crônicas 16:34?', o: ['A misericórdia do Senhor dura para sempre', 'Que Davi era o maior', 'Que a arca era bonita', 'Que Mical estava certa'], e: '1 Crônicas 16:34.' }
      ],
      parents: 'A morte de Uzá foi contada sem detalhes; ela mostra a santidade de Deus e a importância de adorar como Ele ordena (o princípio regulador). A adoração alegre de Davi contrasta com o desprezo de Mical. Leitura junto: 2 Samuel 6:12-19 e 1 Crônicas 15:11-15.'
    },
    {
      id: 'v11', title: 'Uma casa para sempre', ref: '2 Samuel 7', icon: '🏠',
      recap: 'Na lição passada, Davi trouxe a arca para Jerusalém, dançando de alegria diante do Senhor.',
      scenes: [
        { art: '👑🏰😌', bg: 'palacio', text: 'Davi estava morando no seu palácio, e Deus tinha dado descanso de todos os inimigos.', r: '2 Samuel 7:1' },
        { art: '👑💭⛺', bg: 'palacio', text: 'Davi disse ao profeta Natã: "Eu moro numa casa de cedro, e a arca de Deus mora numa tenda! Quero construir uma casa para Deus, um templo."', r: '2 Samuel 7:2' },
        { art: '✨🌙💬', bg: 'noite', fx: 'luz', text: 'Mas naquela noite Deus falou com Natã: "Diga ao meu servo Davi: você vai construir uma casa para mim? Eu nunca pedi isso. Eu tirei você do pasto, de trás das ovelhas, para ser líder do meu povo."', r: '2 Samuel 7:4-8' },
        { art: '🐑➡️👑', bg: 'aurora', fx: 'brilho', text: '"Eu estive com você por onde você andou e vou fazer o seu nome grande, como o dos grandes da terra."', r: '2 Samuel 7:9' },
        { art: '✨🏠❗', bg: 'aurora', fx: 'luz', text: 'E então Deus fez uma promessa surpreendente: "Você queria construir uma casa para mim. Mas eu é que vou construir uma casa para você! Uma família, uma dinastia de reis."', r: '2 Samuel 7:11' },
        { art: '👶👑🏛️', bg: 'aurora', fx: 'brilho', text: '"Um filho seu vai reinar depois de você, e ele vai construir o templo para o meu nome. Eu serei para ele um Pai, e ele será para mim um filho."', r: '2 Samuel 7:12-14' },
        { art: '👑♾️', bg: 'aurora', fx: 'brilho', text: '"A sua casa e o seu reino vão durar para sempre diante de mim. O seu trono vai ser firme para sempre." Para sempre! Nenhum rei humano vive para sempre... então como seria isso?', r: '2 Samuel 7:16' },
        { art: '👑🙇🙏', bg: 'noite', fx: 'luz', text: 'Davi entrou e se sentou diante do Senhor, emocionado: "Quem sou eu, Senhor Deus, e quem é a minha família, para me trazeres até aqui? Tu és grande, Senhor! Não há ninguém como tu!"', r: '2 Samuel 7:18, 22' }
      ],
      god: 'Deus é sempre mais generoso do que nós. Ele promete coisas muito maiores do que pedimos.',
      jesus: 'Deus prometeu a Davi um rei da sua família que reinaria para sempre. Isso só podia se cumprir em alguém que vive para sempre: Jesus! O anjo disse a Maria: "O Senhor Deus lhe dará o trono de Davi, seu pai, e reinará eternamente... e o seu reino não terá fim" (Lucas 1:32-33). Jesus é o "Filho de Davi".',
      verse: { ref: '2 Samuel 7:16', tx: 'Porém a tua casa e o teu reino serão firmados para sempre diante de ti; teu trono será firme para sempre.' },
      small: [
        { q: 'O que Davi queria construir para Deus?', o: [['🏛️', 'Um templo'], ['🎡', 'Uma roda-gigante'], ['🏊', 'Uma piscina']] },
        { q: 'O que Deus prometeu construir para Davi?', o: [['🏠', 'Uma família de reis para sempre'], ['🚗', 'Um carro'], ['⛺', 'Uma barraca']] },
        { q: 'Quem é o Rei da família de Davi que reina para sempre?', o: [['✝️', 'Jesus'], ['👑', 'Saul'], ['🧌', 'Golias']] }
      ],
      big: [
        { q: 'Por que Davi queria construir um templo?', o: ['A arca morava numa tenda e ele num palácio', 'Para ficar famoso', 'Para guardar ouro', 'Porque Natã mandou'], e: '2 Samuel 7:2.' },
        { q: 'De onde Deus lembrou que tirou Davi?', o: ['Do pasto, de trás das ovelhas', 'Do Egito', 'De Babel', 'Do palácio'], e: '2 Samuel 7:8.' },
        { q: 'Quem construiria o templo?', o: ['Um filho de Davi', 'Davi mesmo', 'Natã', 'Os filisteus'], e: '2 Samuel 7:13.' },
        { q: 'Como essa promessa se cumpre para sempre?', o: ['Em Jesus, que reina eternamente', 'Em Salomão', 'Nos reis de hoje', 'Não se cumpre'], e: 'Lucas 1:32-33.' }
      ],
      parents: 'Ponto central: a aliança davídica (2 Samuel 7:12-16), uma das promessas mais importantes da Bíblia, cumprida em Cristo, o Filho de Davi (Lucas 1:32-33; Atos 2:29-36). Leitura junto: 2 Samuel 7:8-22.'
    },
    {
      id: 'v12', title: 'Mefibosete à mesa do rei', ref: '2 Samuel 9', icon: '🍽️',
      recap: 'Na lição passada, Deus prometeu a Davi um reino que duraria para sempre.',
      scenes: [
        { art: '👑💭🧑', bg: 'palacio', text: 'Davi se lembrou da promessa que tinha feito ao seu grande amigo Jônatas. Perguntou: "Ainda ficou alguém da família de Saul, a quem eu possa mostrar bondade por causa de Jônatas?"', r: '2 Samuel 9:1; 1 Samuel 20:14-15' },
        { art: '🧔💬👑', bg: 'palacio', text: 'Um antigo servo de Saul, chamado Ziba, disse: "Ainda há um filho de Jônatas. Ele é aleijado dos dois pés."', r: '2 Samuel 9:2-3' },
        { art: '👶🏃💔', bg: 'cidade', text: 'O nome dele era Mefibosete. Quando ele tinha cinco anos e chegou a notícia da morte de Saul e Jônatas, a babá fugiu com ele no colo, com pressa, e ele caiu. Desde então, não conseguia andar.', r: '2 Samuel 4:4' },
        { art: '🏚️🧑', bg: 'deserto', text: 'Mefibosete morava longe, num lugar chamado Lo-Debar, que quer dizer "lugar sem pasto". Ele era neto do rei anterior, e devia ter muito medo de Davi.', r: '2 Samuel 9:4' },
        { art: '🧑🙇😨', bg: 'palacio', text: 'Davi mandou buscá-lo. Mefibosete chegou, se curvou com o rosto no chão e disse: "Aqui está o seu servo." Ele achava que ia ser castigado.', r: '2 Samuel 9:5-6' },
        { art: '👑💛🧑', bg: 'palacio', fx: 'coracoes', text: 'Mas Davi disse: "Não tenha medo! Eu vou mostrar bondade a você por causa de Jônatas, seu pai. Vou te devolver todas as terras do seu avô Saul, e você vai comer sempre à minha mesa."', r: '2 Samuel 9:7' },
        { art: '🧑😮', bg: 'palacio', text: 'Mefibosete não acreditava: "Quem sou eu, para o senhor olhar para um cachorro morto como eu?" Ele se achava sem valor nenhum.', r: '2 Samuel 9:8' },
        { art: '🍽️👑🧑', bg: 'palacio', fx: 'brilho', text: 'E assim foi: Mefibosete morou em Jerusalém e comia sempre à mesa do rei, como um dos filhos de Davi. A mesa escondia os seus pés, e ninguém lembrava das suas limitações: ele era da família.', r: '2 Samuel 9:11-13' }
      ],
      god: 'Deus é bondoso com quem não merece. Ele nos chama para a sua mesa como filhos.',
      jesus: 'Mefibosete não podia andar, não tinha nada para oferecer e achava que seria castigado. Mas o rei o buscou, o perdoou e o colocou à sua mesa como filho. É isso que Jesus faz conosco! Nós não podíamos chegar até Deus sozinhos, mas Jesus nos buscou e nos convida para a mesa do Rei (Lucas 14:21; Apocalipse 19:9).',
      verse: { ref: '2 Samuel 9:7', tx: 'Não temas, porque decerto usarei contigo de beneficência por amor de Jônatas, teu pai.' },
      small: [
        { q: 'Mefibosete conseguia andar?', o: [['🦽', 'Não'], ['🏃', 'Sim, corria'], ['🛹', 'Andava de skate']] },
        { q: 'Onde Mefibosete passou a comer?', o: [['🍽️', 'Na mesa do rei'], ['🌳', 'Debaixo da árvore'], ['🚫', 'Em lugar nenhum']] },
        { q: 'Por que Davi foi bondoso com ele?', o: [['🤝', 'Por amor a Jônatas'], ['💰', 'Por dinheiro'], ['🎲', 'Por sorte']] }
      ],
      big: [
        { q: 'De quem Mefibosete era filho?', o: ['De Jônatas', 'De Saul', 'De Davi', 'De Natã'], e: '2 Samuel 9:3, 6.' },
        { q: 'Como Mefibosete ficou aleijado?', o: ['Caiu do colo da babá na fuga', 'Numa batalha', 'Nasceu assim', 'Caiu de um cavalo'], e: '2 Samuel 4:4.' },
        { q: 'O que quer dizer Lo-Debar?', o: ['Lugar sem pasto', 'Casa do rei', 'Cidade de Davi', 'Monte santo'], e: 'Ele morava num lugar pobre e esquecido.' },
        { q: 'Como Mefibosete se chamou diante do rei?', o: ['Um cachorro morto', 'Um príncipe', 'Um guerreiro', 'Um rei'], e: '2 Samuel 9:8.' }
      ],
      parents: 'Ponto central: graça (hesed). Mefibosete é uma bela figura do pecador que nada pode oferecer e é adotado à mesa do Rei. Ótima lição para crianças com alguma deficiência ou que se sentem diferentes: na mesa do Rei, todos são filhos. Leitura junto: 2 Samuel 9.'
    },
    {
      id: 'v13', title: 'O grande pecado de Davi', ref: '2 Samuel 11', icon: '💔',
      recap: 'Na lição passada, Davi foi bondoso com Mefibosete e o colocou à sua mesa.',
      scenes: [
        { art: '⚔️👥🏰', bg: 'palacio', text: 'Era a época do ano em que os reis saíam para a guerra. Davi mandou o seu exército, com o general Joabe, mas ele mesmo ficou em Jerusalém, descansando no palácio. Ele não estava onde devia estar.', r: '2 Samuel 11:1' },
        { art: '🌆👑👀', bg: 'cidade', text: 'Uma tarde, Davi passeava no terraço do palácio e viu uma mulher muito bonita. Ele perguntou quem era e soube: "É Bate-Seba, esposa de Urias", um dos seus soldados mais fiéis, que estava na guerra.', r: '2 Samuel 11:2-3' },
        { art: '👑💔', bg: 'palacio', text: 'Mesmo sabendo que ela era casada, Davi a quis para si e a trouxe ao palácio. Ele quebrou o mandamento "não adulterarás" e o "não cobiçarás". Pouco tempo depois, Bate-Seba mandou avisar que estava esperando um bebê.', r: '2 Samuel 11:4-5' },
        { art: '👑😰🤥', bg: 'palacio', text: 'Davi ficou com medo de que todos descobrissem e tentou esconder o que tinha feito. Chamou Urias da guerra, tentou enganá-lo, mas não deu certo: Urias era fiel demais e não quis descansar enquanto os amigos lutavam.', r: '2 Samuel 11:6-13' },
        { art: '📜✍️😈', bg: 'noite', text: 'Então Davi fez algo ainda pior. Escreveu uma carta para o general Joabe: "Coloquem Urias na frente, onde a batalha é mais forte, e deixem-no sozinho." E mandou a carta pelas mãos do próprio Urias.', r: '2 Samuel 11:14-15' },
        { art: '⚔️💔🕯️', bg: 'monte', text: 'E aconteceu como Davi planejou: Urias morreu na batalha. Um pecado levou a outro, e o homem segundo o coração de Deus cometeu dois pecados terríveis.', r: '2 Samuel 11:16-17' },
        { art: '👑😐🏠', bg: 'palacio', text: 'Davi recebeu a notícia e disse a Joabe, como se nada fosse: "Não fique triste, a guerra é assim." Depois do luto, trouxe Bate-Seba para o palácio, e ela se tornou sua esposa. Parecia que ninguém ia saber.', r: '2 Samuel 11:25-27' },
        { art: '✨👁️', bg: 'noite', fx: 'luz', text: 'Mas a Bíblia termina o capítulo com uma frase séria: "Isso que Davi fez foi mau aos olhos do Senhor." Ninguém sabia... mas Deus viu tudo.', r: '2 Samuel 11:27' }
      ],
      god: 'Deus vê tudo, até o que escondemos. Um pecado escondido costuma puxar outro.',
      jesus: 'Davi, o grande rei, mostrou que até o melhor de nós é pecador e precisa de um Salvador. O nome de Bate-Seba aparece na genealogia de Jesus como "a que foi mulher de Urias" (Mateus 1:6). Deus não escondeu essa história: Jesus veio justamente para salvar pecadores como Davi e como nós.',
      verse: { ref: 'Provérbios 15:3', tx: 'Os olhos do Senhor estão em todo lugar, contemplando os maus e os bons.' },
      small: [
        { q: 'Onde Davi devia estar?', o: [['⚔️', 'Com o exército'], ['🛌', 'Na cama'], ['🏖️', 'Na praia']] },
        { q: 'Davi fez uma coisa certa ou errada?', o: [['💔', 'Muito errada'], ['✅', 'Certa'], ['🤷', 'Tanto faz']] },
        { q: 'Deus viu o que Davi fez?', o: [['👁️', 'Sim, viu tudo'], ['🙈', 'Não'], ['😴', 'Estava dormindo']] }
      ],
      big: [
        { q: 'Qual foi o primeiro erro de Davi no capítulo 11?', o: ['Ficar em casa em vez de ir à guerra', 'Ir à guerra', 'Orar demais', 'Escrever salmos'], e: '2 Samuel 11:1.' },
        { q: 'Quais mandamentos Davi quebrou?', o: ['Não cobiçar, não adulterar e não matar', 'Só o do sábado', 'Nenhum', 'Honrar pai e mãe'], e: 'Êxodo 20:13-14, 17.' },
        { q: 'Como era Urias?', o: ['Um soldado muito fiel', 'Um traidor', 'Um filisteu inimigo', 'Um profeta'], e: '2 Samuel 11:11; 23:39.' },
        { q: 'Como termina o capítulo 11?', o: ['"Isso foi mau aos olhos do Senhor"', '"E todos foram felizes"', '"Davi venceu a guerra"', '"Ninguém soube"'], e: '2 Samuel 11:27.' }
      ],
      parents: 'Atenção: esta é uma das lições mais delicadas. O adultério foi descrito como "a quis para si mesmo sabendo que era casada", e o assassinato de Urias de forma clara, mas sem detalhes. Recomendamos que os adultos leiam o capítulo antes e decidam se a criança está pronta. Ponto central: pecado leva a pecado, e Deus vê. A próxima lição traz o arrependimento. Leitura (adultos): 2 Samuel 11.'
    },
    {
      id: 'v14', title: '"Tu és esse homem"', ref: '2 Samuel 12; Salmo 51', icon: '😢',
      recap: 'Na lição passada, Davi cometeu um pecado terrível e tentou esconder, mas Deus viu tudo.',
      scenes: [
        { art: '✨💬🧔', bg: 'aurora', fx: 'luz', text: 'Deus mandou o profeta Natã falar com Davi. Mas Natã não começou acusando: ele contou uma história.', r: '2 Samuel 12:1' },
        { art: '🧔💰🐑🐑🐑', bg: 'campo', text: '"Numa cidade havia dois homens: um rico, com muitíssimas ovelhas e bois, e um pobre, que só tinha uma ovelhinha. Ele a criou com carinho, junto com os filhos. Ela comia do prato dele e dormia no colo dele, como uma filha."', r: '2 Samuel 12:1-3' },
        { art: '🧔😈🐑', bg: 'campo', text: '"Chegou uma visita na casa do homem rico. Ele não quis pegar nenhuma das suas ovelhas para preparar o almoço. Pegou a única ovelhinha do pobre."', r: '2 Samuel 12:4' },
        { art: '👑😡', bg: 'palacio', text: 'Davi ficou furioso: "Tão certo como vive o Senhor, o homem que fez isso merece morrer! E vai ter que pagar quatro vezes, porque não teve compaixão!"', r: '2 Samuel 12:5-6' },
        { art: '🧔👉👑', bg: 'palacio', fx: 'luz', text: 'Então Natã olhou para o rei e disse: "Tu és esse homem!" E falou em nome do Senhor: "Eu te dei tudo, e você desprezou a minha palavra e fez o que é mau aos meus olhos."', r: '2 Samuel 12:7-9' },
        { art: '👑😭🙇', bg: 'palacio', text: 'Davi não deu desculpas, não culpou ninguém, não mandou prender o profeta. Ele disse: "Pequei contra o Senhor."', r: '2 Samuel 12:13' },
        { art: '✨💛', bg: 'aurora', fx: 'coracoes', text: 'Natã respondeu: "O Senhor perdoou o seu pecado. Você não vai morrer." Mas avisou que o pecado traria consequências tristes para a família de Davi.', r: '2 Samuel 12:13-14' },
        { art: '👑🙏📜', bg: 'noite', fx: 'luz', text: 'Foi nessa época que Davi escreveu o Salmo 51: "Tem misericórdia de mim, ó Deus! Lava-me de toda a minha culpa e purifica-me do meu pecado. Cria em mim, ó Deus, um coração puro!"', r: 'Salmos 51:1-2, 10' },
        { art: '👶💛👑', bg: 'aurora', fx: 'brilho', text: 'Depois de um tempo muito triste, Deus deu a Davi e Bate-Seba outro filho: Salomão. E a Bíblia diz que o Senhor o amou. Deus ainda tinha um plano para aquela família.', r: '2 Samuel 12:24-25' }
      ],
      god: 'Deus perdoa de verdade quem confessa o pecado com sinceridade. Ele cria um coração novo.',
      jesus: 'Davi foi perdoado, mas alguém precisava pagar pelo pecado. Natã disse: "Você não vai morrer." Por quê? Porque, muitos anos depois, o Filho de Davi, Jesus, morreria no lugar de Davi e no nosso. Por isso Deus pode perdoar e continuar justo (Romanos 3:25-26). E Salomão, o filho que nasceu depois do perdão, também está na família de Jesus.',
      verse: { ref: 'Salmos 51:10', tx: 'Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.' },
      small: [
        { q: 'O que Natã contou para Davi?', o: [['🐑', 'A história de uma ovelhinha'], ['🐉', 'Uma história de dragão'], ['🚀', 'Uma história do espaço']] },
        { q: 'O que Davi disse quando entendeu?', o: [['😭', '"Pequei contra o Senhor"'], ['😠', '"A culpa não é minha"'], ['🤐', 'Nada']] },
        { q: 'Deus perdoou Davi?', o: [['💛', 'Sim'], ['❌', 'Não'], ['🤷', 'Talvez']] }
      ],
      big: [
        { q: 'Por que Natã contou uma história em vez de acusar?', o: ['Para Davi ver o pecado com clareza', 'Porque tinha medo', 'Para distrair', 'Porque gostava de histórias'], e: '2 Samuel 12:1-7.' },
        { q: 'O que Natã disse a Davi?', o: ['"Tu és esse homem!"', '"Você é inocente"', '"Fuja"', '"Você é o melhor rei"'], e: '2 Samuel 12:7.' },
        { q: 'Que salmo Davi escreveu depois?', o: ['Salmo 51', 'Salmo 23', 'Salmo 1', 'Salmo 100'], e: 'Título do Salmo 51.' },
        { q: 'Qual filho nasceu depois e foi amado pelo Senhor?', o: ['Salomão', 'Absalão', 'Amnom', 'Jônatas'], e: '2 Samuel 12:24.' }
      ],
      parents: 'Atenção: a morte do primeiro bebê de Davi e Bate-Seba (12:14-23) foi resumida como "um tempo muito triste". Se a criança perguntar, diga com calma que o bebê morreu e que Davi disse: "Eu irei a ele" (12:23), uma palavra de esperança. O Salmo 51 é o grande salmo de arrependimento. Leitura junto: 2 Samuel 12:1-13 e Salmos 51:1-12.'
    },
    {
      id: 'v15', title: '"Absalão, meu filho!"', ref: '2 Samuel 13 – 19', icon: '🌳',
      recap: 'Na lição passada, Davi se arrependeu, e Deus o perdoou. Mas o pecado trouxe consequências para a família.',
      scenes: [
        { art: '🏰💔👨‍👩‍👧‍👦', bg: 'palacio', text: 'Como Natã tinha avisado, começaram problemas muito tristes na família de Davi. Os filhos de Davi fizeram coisas muito erradas uns contra os outros, e Davi não corrigiu como devia.', r: '2 Samuel 12:10; 13:1-29' },
        { art: '🧑✨💇', bg: 'cidade', text: 'Um dos filhos, Absalão, era muito bonito, famoso pelo cabelo comprido. Depois de um tempo longe, voltou para Jerusalém, mas o coração dele estava cheio de mágoa contra o pai.', r: '2 Samuel 14:25-26' },
        { art: '🧑🚪😏', bg: 'cidade', text: 'Absalão começou a ficar na porta da cidade, conversando com quem vinha pedir justiça ao rei: "Ah, se eu fosse juiz, faria justiça para você!" Assim ele roubou o coração do povo.', r: '2 Samuel 15:1-6' },
        { art: '🧑👑📣', bg: 'cidade', text: 'Por fim, Absalão se declarou rei em Hebrom e juntou muita gente contra o próprio pai. O filho de Davi queria tomar o trono!', r: '2 Samuel 15:10-12' },
        { art: '👴😭🏃⛰️', bg: 'monte', text: 'Davi fugiu de Jerusalém. Subiu o monte das Oliveiras chorando, descalço, com a cabeça coberta. Mas não perdeu a fé: "Se Deus quiser, Ele me traz de volta."', r: '2 Samuel 15:25-26, 30' },
        { art: '🙏📜', bg: 'noite', fx: 'estrelas', text: 'Foi nessa fuga que Davi escreveu o Salmo 3: "Senhor, como têm crescido os meus adversários! Mas tu, Senhor, és o meu escudo. Eu me deito e durmo em paz, porque o Senhor me sustenta."', r: 'Salmos 3:1, 3, 5' },
        { art: '⚔️🌳🐴', bg: 'campo', text: 'Houve uma grande batalha numa floresta. Davi pediu aos soldados: "Tratem com bondade o jovem Absalão, por amor a mim!" Mas Absalão fugiu montado numa mula, e o seu cabelo comprido ficou preso nos galhos de uma árvore.', r: '2 Samuel 18:5, 9' },
        { art: '💔🌳', bg: 'campo', text: 'Mesmo contra o pedido do rei, Joabe e os seus soldados mataram Absalão ali. A revolta tinha acabado.', r: '2 Samuel 18:14-15' },
        { art: '👴😭', bg: 'cidade', text: 'Quando Davi recebeu a notícia, não comemorou a vitória. Subiu a um quarto e chorou: "Meu filho Absalão! Meu filho, meu filho Absalão! Quem me dera ter morrido no seu lugar! Absalão, meu filho, meu filho!"', r: '2 Samuel 18:33' }
      ],
      god: 'O pecado traz dor às famílias. Mas Deus sustenta quem confia nele, mesmo nos piores dias.',
      jesus: 'Davi chorou: "Quem me dera ter morrido no seu lugar!" Davi não pôde morrer no lugar do filho. Mas Deus Pai fez o que Davi desejou: entregou o seu próprio Filho, Jesus, para morrer no lugar de filhos rebeldes, como nós. E Jesus, como Davi, subiu o monte das Oliveiras chorando, na noite em que foi traído (Lucas 22:39-44).',
      verse: { ref: 'Salmos 3:5', tx: 'Eu me deitei e dormi; acordei, porque o Senhor me sustentou.' },
      small: [
        { q: 'Pelo que Absalão era famoso?', o: [['💇', 'Pelo cabelo comprido'], ['🦶', 'Pelo pé grande'], ['👓', 'Pelos óculos']] },
        { q: 'O que Absalão quis fazer?', o: [['👑', 'Tomar o trono do pai'], ['🎁', 'Dar presentes ao pai'], ['🎶', 'Cantar para o pai']] },
        { q: 'O que Davi fez quando soube da morte de Absalão?', o: [['😭', 'Chorou muito'], ['🎉', 'Comemorou'], ['😴', 'Dormiu']] }
      ],
      big: [
        { q: 'Como Absalão roubou o coração do povo?', o: ['Prometendo justiça na porta da cidade', 'Dando ouro', 'Vencendo gigantes', 'Fazendo milagres'], e: '2 Samuel 15:2-6.' },
        { q: 'Que salmo Davi escreveu fugindo de Absalão?', o: ['Salmo 3', 'Salmo 23', 'Salmo 51', 'Salmo 150'], e: 'Título do Salmo 3.' },
        { q: 'O que Davi pediu sobre Absalão antes da batalha?', o: ['Que o tratassem com bondade', 'Que o prendessem', 'Que o expulsassem', 'Nada'], e: '2 Samuel 18:5.' },
        { q: 'O que Davi desejou quando o filho morreu?', o: ['Ter morrido no lugar dele', 'Ser rei para sempre', 'Fugir para longe', 'Esquecer'], e: '2 Samuel 18:33.' }
      ],
      parents: 'Atenção: 2 Samuel 13 relata o abuso de Tamar por Amnom e o assassinato de Amnom por Absalão; o app resume como "os filhos fizeram coisas muito erradas uns contra os outros". Recomendamos fortemente que os adultos leiam antes e não exponham detalhes. A morte de Absalão foi contada de forma breve. O lamento de Davi é uma das cenas mais emocionantes da Bíblia. Leitura junto: 2 Samuel 15:13-14, 30 e 18:31-33; Salmo 3.'
    },
    {
      id: 'v16', title: 'Davi prepara o templo', ref: '2 Samuel 23 – 24; 1 Crônicas 22 – 29', icon: '🏛️',
      recap: 'Na lição passada, Davi chorou por Absalão, o filho que se revoltou contra ele.',
      scenes: [
        { art: '👴📜', bg: 'palacio', text: 'Davi voltou a reinar em Jerusalém. Já velho, ele disse as suas últimas palavras: "O Espírito do Senhor falou por mim, e a sua palavra esteve na minha língua." Davi sabia que os seus salmos vinham de Deus.', r: '2 Samuel 23:1-2' },
        { art: '👑😔📋', bg: 'palacio', text: 'Davi ainda cometeu outro erro: por orgulho, quis contar quantos soldados tinha, como se a força do reino estivesse no exército. Depois o coração dele doeu, e ele confessou: "Pequei gravemente!"', r: '2 Samuel 24:1-10' },
        { art: '⛰️🌾🪨', bg: 'monte', text: 'Para acabar com o castigo que veio, Deus mandou Davi construir um altar num lugar especial: a eira de um homem chamado Araúna, no alto de um monte em Jerusalém.', r: '2 Samuel 24:18' },
        { art: '👑💰🙅', bg: 'monte', text: 'Araúna quis dar o terreno de presente. Mas Davi disse: "Não! Eu vou pagar. Não vou oferecer ao Senhor uma oferta que não me custou nada." Ele comprou o lugar, ofereceu sacrifícios, e Deus atendeu a oração.', r: '2 Samuel 24:21-25' },
        { art: '⛰️✨🏛️', bg: 'aurora', fx: 'luz', text: 'Esse monte era o monte Moriá, onde Abraão tinha levado Isaque! E ali, mais tarde, seria construído o templo de Deus.', r: '2 Crônicas 3:1; Gênesis 22:2' },
        { art: '👴🪵🪨🟨', bg: 'palacio', text: 'Deus não deixou Davi construir o templo, mas Davi preparou tudo para o filho Salomão: juntou pedras, madeira de cedro, ferro, bronze, prata e muito ouro, e organizou os levitas, os cantores e os porteiros.', r: '1 Crônicas 22:2-5; 23 – 26' },
        { art: '👴🤲👦', bg: 'palacio', fx: 'luz', text: 'Davi chamou Salomão e disse: "Meu filho, conheça o Deus do seu pai e sirva a Ele de coração inteiro e com boa vontade, porque o Senhor examina todos os corações. Seja forte e mãos à obra!"', r: '1 Crônicas 28:9-10, 20' },
        { art: '👥🎁🎁', bg: 'cidade', fx: 'brilho', text: 'O povo ofereceu com alegria tudo o que tinha para o templo. E Davi orou diante de todos: "Tua é, Senhor, a grandeza, o poder, a glória e a majestade! Tudo vem de ti, e do que é teu nós te damos."', r: '1 Crônicas 29:9-14' },
        { art: '👴🕊️👑', bg: 'aurora', fx: 'luz', text: 'Davi morreu numa boa velhice, depois de reinar quarenta anos. E Salomão, o seu filho, se sentou no trono. Mas a promessa de Deus a Davi ainda esperava o seu Rei eterno...', r: '1 Crônicas 29:26-28' }
      ],
      god: 'Tudo o que temos vem de Deus. Damos a Ele com alegria, e Ele merece toda a glória.',
      jesus: 'Davi preparou o templo, mas não pôde construí-lo. Jesus disse que Ele mesmo é o templo verdadeiro: "Derribai este templo, e em três dias o levantarei" (João 2:19), falando do seu corpo. E Davi não quis oferecer algo que não lhe custasse nada; Jesus ofereceu tudo: a sua própria vida.',
      verse: { ref: '1 Crônicas 29:11', tx: 'Tua é, Senhor, a magnificência, e o poder, e a honra, e a vitória, e a majestade.' },
      small: [
        { q: 'O que Davi preparou para Salomão?', o: [['🏛️', 'Material para o templo'], ['🎂', 'Um bolo'], ['🚗', 'Um carro']] },
        { q: 'Davi quis oferecer algo sem custo?', o: [['🙅', 'Não, quis pagar'], ['✅', 'Sim'], ['🤷', 'Tanto faz']] },
        { q: 'De quem vem tudo o que temos?', o: [['✨', 'De Deus'], ['🎲', 'Da sorte'], ['🤖', 'Dos robôs']] }
      ],
      big: [
        { q: 'O que Davi disse sobre as suas últimas palavras?', o: ['O Espírito do Senhor falou por ele', 'Que estava cansado', 'Que era o melhor rei', 'Nada'], e: '2 Samuel 23:2.' },
        { q: 'O que Davi disse a Araúna?', o: ['Não ofereceria algo que não lhe custasse nada', 'Que queria de graça', 'Que não queria o terreno', 'Que Araúna era rei'], e: '2 Samuel 24:24.' },
        { q: 'Que monte antigo era o lugar do templo?', o: ['O monte Moriá, de Abraão e Isaque', 'O Sinai', 'O Ararate', 'O Nebo'], e: '2 Crônicas 3:1.' },
        { q: 'O que Davi aconselhou a Salomão?', o: ['Servir a Deus de coração inteiro', 'Ficar rico', 'Lutar sempre', 'Esquecer o templo'], e: '1 Crônicas 28:9.' }
      ],
      parents: 'Encerramento do arco de Davi. O censo e a praga (2 Samuel 24) foram resumidos. A sucessão turbulenta de 1 Reis 1–2 (Adonias) fica para o arco de Salomão. Destaque: generosidade que custa (24:24), a oração de 1 Crônicas 29:10-14 e Moriá ligando Abraão, o templo e a cruz. Leitura junto: 1 Crônicas 29:10-14.'
    }
  ]
};
