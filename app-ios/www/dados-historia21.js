/* A Grande História da Bíblia — Arco 21: No exílio da Babilônia (Daniel; Ezequiel) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.exilio = {
  id: 'exilio', n: 21, name: 'No exílio da Babilônia', sub: 'Daniel e Ezequiel longe de casa', ref: 'Daniel, Ezequiel', icon: '🦁', scene: 'palacio',
  intro: 'O povo de Judá foi levado para a Babilônia, um império enorme, com deuses falsos por todo lado. Será que Deus tinha abandonado o seu povo? Neste arco, vamos ver Daniel e os seus amigos sendo fiéis num país estranho, e Deus mostrando o seu poder aos reis mais poderosos do mundo. E vamos ver o profeta Ezequiel, que recebeu visões de esperança: até ossos secos iam voltar a viver!',
  lessons: [
    {
      id: 'dn1', title: 'Daniel e a comida do rei', ref: 'Daniel 1', icon: '🥗',
      recap: 'No arco passado, Jerusalém foi destruída, e o povo foi levado para a Babilônia.',
      scenes: [
        { art: '👑🏙️👦👦👦👦', bg: 'palacio', text: 'O rei Nabucodonosor levou para a Babilônia alguns jovens de Judá, das melhores famílias, inteligentes e bonitos, para serem treinados para servir no palácio. Entre eles estavam Daniel, Hananias, Misael e Azarias.', r: 'Daniel 1:1-6' },
        { art: '📛🔄🗿', bg: 'palacio', text: 'O chefe dos servos mudou os nomes deles para nomes babilônicos, de deuses falsos: Daniel virou Beltessazar, e os amigos viraram Sadraque, Mesaque e Abede-Nego.', r: 'Daniel 1:7' },
        { art: '🍖🍷👑', bg: 'palacio', text: 'Eles iam comer a comida da mesa do rei e beber o vinho dele, por três anos. Mas aquela comida provavelmente tinha sido oferecida aos ídolos e não seguia a Lei de Deus.', r: 'Daniel 1:5' },
        { art: '👦❤️🙏', bg: 'palacio', fx: 'luz', text: 'Daniel decidiu no seu coração não se contaminar com a comida do rei. Ele ia ser fiel a Deus, mesmo longe de casa.', r: 'Daniel 1:8' },
        { art: '👦💬🧔😟', bg: 'palacio', text: 'Daniel pediu com educação. O responsável ficou com medo: "Se vocês ficarem mais magros que os outros, o rei vai cortar a minha cabeça!"', r: 'Daniel 1:9-10' },
        { art: '👦🥗💧🔟', bg: 'palacio', text: 'Daniel propôs um teste: "Por favor, experimente com a gente por dez dias. Deixe a gente comer só legumes e beber água. Depois, compare com os outros jovens."', r: 'Daniel 1:11-13' },
        { art: '👦👦👦👦💪😊', bg: 'aurora', fx: 'brilho', text: 'Depois de dez dias, Daniel e os amigos estavam com aparência melhor e mais fortes que todos os jovens que comiam a comida do rei!', r: 'Daniel 1:15-16' },
        { art: '✨🧠📚', bg: 'aurora', fx: 'luz', text: 'Deus deu aos quatro conhecimento e inteligência em todas as letras e na sabedoria. E Daniel recebeu de Deus o dom de entender visões e sonhos.', r: 'Daniel 1:17' },
        { art: '👑😮🔟', bg: 'palacio', fx: 'brilho', text: 'Quando o rei conversou com eles, viu que eram dez vezes mais sábios que todos os magos e sábios do seu reino!', r: 'Daniel 1:19-20' }
      ],
      god: 'Deus honra quem decide ser fiel a Ele, mesmo longe de casa e mesmo nas coisas pequenas.',
      jesus: 'Daniel decidiu no coração ser fiel a Deus num lugar onde ninguém mais era. Jesus, quando foi tentado com comida no deserto, respondeu: "Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus" (Mateus 4:4). E Jesus orou por nós, para que fôssemos guardados do mal mesmo estando no mundo (João 17:15).',
      verse: { ref: 'Daniel 1:8', tx: 'E Daniel propôs no seu coração não se contaminar com a porção das iguarias do rei.' },
      small: [
        { q: 'O que Daniel decidiu?', o: [['❤️', 'Ser fiel a Deus'], ['🍖', 'Comer tudo do rei'], ['🏃', 'Fugir']] },
        { q: 'O que Daniel e os amigos comeram?', o: [['🥗', 'Legumes e água'], ['🍔', 'Hambúrguer'], ['🍰', 'Bolo']] },
        { q: 'Como eles ficaram depois de dez dias?', o: [['💪', 'Mais fortes'], ['😩', 'Fracos'], ['🤒', 'Doentes']] }
      ],
      big: [
        { q: 'Qual era o nome babilônico de Daniel?', o: ['Beltessazar', 'Sadraque', 'Nabucodonosor', 'Belsazar'], e: 'Daniel 1:7.' },
        { q: 'Quantos dias durou o teste?', o: ['Dez', 'Três', 'Quarenta', 'Sete'], e: 'Daniel 1:12.' },
        { q: 'Que dom especial Daniel recebeu?', o: ['Entender visões e sonhos', 'Ser muito forte', 'Voar', 'Cantar'], e: 'Daniel 1:17.' },
        { q: 'Quantas vezes eles eram mais sábios que os magos?', o: ['Dez vezes', 'Duas', 'Cem', 'Igual'], e: 'Daniel 1:20.' }
      ],
      parents: 'A história de Daniel também aparece no Cantinho Kids (cova dos leões). Os jovens provavelmente foram feitos eunucos (1:3), detalhe omitido. Ponto central: fidelidade em terra estranha, com respeito e sabedoria (Daniel pede, não se revolta). Leitura junto: Daniel 1:8-20.'
    },
    {
      id: 'dn2', title: 'O sonho da grande estátua', ref: 'Daniel 2', icon: '🗿',
      recap: 'Na lição passada, Daniel e os amigos foram fiéis a Deus e ficaram dez vezes mais sábios.',
      scenes: [
        { art: '👑😴💭😨', bg: 'noite', fx: 'estrelas', text: 'Uma noite, o rei Nabucodonosor teve um sonho que o deixou muito perturbado, e ele não conseguia mais dormir.', r: 'Daniel 2:1' },
        { art: '👑😠🧙🧙', bg: 'palacio', text: 'Ele chamou todos os magos e sábios e disse: "Contem qual foi o meu sonho e o que ele significa!" Eles disseram: "Conte o sonho, e a gente explica." Mas o rei exigiu: "Não! Vocês têm que adivinhar o sonho também!"', r: 'Daniel 2:2-9' },
        { art: '🧙😰🤷', bg: 'palacio', text: 'Os sábios disseram: "Ninguém na terra consegue fazer isso! Só os deuses, e eles não moram com os homens." O rei ficou furioso e mandou matar todos os sábios da Babilônia, inclusive Daniel e os amigos.', r: 'Daniel 2:10-13' },
        { art: '👦👦👦👦🙏', bg: 'noite', fx: 'luz', text: 'Daniel pediu tempo ao rei e foi para casa orar com os seus amigos. Eles pediram misericórdia ao Deus do céu.', r: 'Daniel 2:16-18' },
        { art: '🌙✨👦', bg: 'noite', fx: 'estrelas', text: 'Naquela noite, Deus revelou o segredo a Daniel numa visão! Daniel louvou: "Bendito seja o nome de Deus para sempre! Ele muda os tempos e as estações, remove reis e coloca reis. Ele revela as coisas profundas e escondidas."', r: 'Daniel 2:19-22' },
        { art: '👦💬👑', bg: 'palacio', text: 'Daniel foi até o rei e disse: "Nenhum sábio pode revelar isso. Mas há um Deus no céu que revela os mistérios. Ó rei, você viu uma estátua enorme e brilhante."', r: 'Daniel 2:27-31' },
        { art: '🟨⬜🟫⬛🧱', bg: 'palacio', fx: 'brilho', text: '"A cabeça era de ouro, o peito e os braços de prata, a barriga de bronze, as pernas de ferro, e os pés eram de ferro misturado com barro."', r: 'Daniel 2:32-33' },
        { art: '🪨💥🗿⛰️', bg: 'monte', fx: 'vento', text: '"Então uma pedra foi cortada, sem ajuda de mão humana, bateu nos pés da estátua e a despedaçou. E a pedra virou uma grande montanha, que encheu toda a terra!"', r: 'Daniel 2:34-35' },
        { art: '👑🙇👦', bg: 'palacio', fx: 'luz', text: 'Daniel explicou: os metais eram reinos que iam vir, um depois do outro. "Mas o Deus do céu vai levantar um reino que nunca vai ser destruído, e vai durar para sempre." O rei se ajoelhou: "O seu Deus é o Deus dos deuses e o Senhor dos reis!"', r: 'Daniel 2:36-47' }
      ],
      god: 'Deus revela os segredos e governa sobre todos os reinos da história. O reino dele vai durar para sempre.',
      jesus: 'A pedra cortada sem mãos humanas, que vira uma montanha e enche a terra, é o Reino de Deus que veio com Jesus. Jesus começou pregando: "O reino dos céus está próximo" (Mateus 4:17), e disse que ele cresce como uma sementinha que vira árvore (Mateus 13:31-32). Jesus também se chamou de "a pedra" que os construtores rejeitaram (Mateus 21:42-44).',
      verse: { ref: 'Daniel 2:44', tx: 'O Deus do céu levantará um reino que não será jamais destruído.' },
      small: [
        { q: 'Do que era a cabeça da estátua?', o: [['🟨', 'De ouro'], ['🍫', 'De chocolate'], ['🧀', 'De queijo']] },
        { q: 'O que destruiu a estátua?', o: [['🪨', 'Uma pedra'], ['🔨', 'Um martelo'], ['🌧️', 'A chuva']] },
        { q: 'Quem revelou o sonho a Daniel?', o: [['✨', 'Deus'], ['🧙', 'Os magos'], ['🦉', 'Uma coruja']] }
      ],
      big: [
        { q: 'O que o rei exigiu dos sábios?', o: ['Contar o sonho e explicar', 'Só explicar', 'Fazer uma estátua', 'Cantar'], e: 'Daniel 2:5-9.' },
        { q: 'O que Daniel fez antes de ir ao rei?', o: ['Orou com os amigos', 'Fugiu', 'Leu livros de magia', 'Dormiu'], e: 'Daniel 2:17-18.' },
        { q: 'Do que eram os pés da estátua?', o: ['Ferro misturado com barro', 'Ouro', 'Prata', 'Pedra'], e: 'Daniel 2:33.' },
        { q: 'O que a pedra virou?', o: ['Uma grande montanha que encheu a terra', 'Pó', 'Uma estátua nova', 'Um rio'], e: 'Daniel 2:35.' }
      ],
      parents: 'A interpretação tradicional dos metais: Babilônia, Medo-Pérsia, Grécia e Roma; a pedra é o Reino de Cristo. O app não fixou os nomes dos reinos, só a ideia. Ponto central: Deus governa a história. Leitura junto: Daniel 2:19-23 e 31-45.'
    },
    {
      id: 'dn3', title: 'Os três amigos na fornalha', ref: 'Daniel 3', icon: '🔥',
      recap: 'Na lição passada, Deus revelou a Daniel o sonho da grande estátua.',
      scenes: [
        { art: '👑🗿🟨📏', bg: 'deserto', text: 'O rei Nabucodonosor mandou fazer uma estátua enorme de ouro, com trinta metros de altura, e colocou na planície de Dura.', r: 'Daniel 3:1' },
        { art: '📣🎺🙇🙇', bg: 'deserto', text: 'Um mensageiro anunciou: "Quando vocês ouvirem a música dos instrumentos, todos devem se ajoelhar e adorar a estátua de ouro. Quem não se ajoelhar vai ser jogado numa fornalha de fogo!"', r: 'Daniel 3:4-6' },
        { art: '🎶🙇🙇🧍🧍🧍', bg: 'deserto', text: 'A música tocou, e todos se ajoelharam... menos três jovens: Sadraque, Mesaque e Abede-Nego! Eles ficaram de pé.', r: 'Daniel 3:7-12' },
        { art: '👑😡🧍🧍🧍', bg: 'palacio', text: 'O rei ficou furioso: "Vou dar mais uma chance. Se não adorarem, vão para a fornalha. E que deus vai livrar vocês da minha mão?"', r: 'Daniel 3:13-15' },
        { art: '🧍🧍🧍💪✨', bg: 'palacio', fx: 'luz', text: 'Eles responderam: "O nosso Deus, a quem servimos, pode nos livrar da fornalha. E Ele vai nos livrar. Mas, mesmo que não livre, saiba, ó rei, que não vamos servir os seus deuses, nem adorar a estátua de ouro!"', r: 'Daniel 3:16-18' },
        { art: '🔥🔥🔥7️⃣', bg: 'noite', text: 'O rei mandou aquecer a fornalha sete vezes mais que o normal! Os três foram amarrados e jogados lá dentro.', r: 'Daniel 3:19-21' },
        { art: '👑😮🔥✨', bg: 'noite', fx: 'luz', text: 'De repente, o rei deu um pulo: "Não jogamos três homens amarrados? Eu estou vendo quatro homens soltos, andando no meio do fogo, sem nenhum dano! E o quarto tem um brilho como de um filho dos deuses!"', r: 'Daniel 3:24-25' },
        { art: '🧍🧍🧍😊🚫🔥', bg: 'aurora', fx: 'brilho', text: 'O rei chamou: "Servos do Deus Altíssimo, saiam!" Eles saíram, e o fogo não tinha queimado nem um fio de cabelo. As roupas não estavam chamuscadas, e eles nem tinham cheiro de fumaça!', r: 'Daniel 3:26-27' },
        { art: '👑🙌✨', bg: 'aurora', fx: 'luz', text: 'Nabucodonosor disse: "Bendito seja o Deus de Sadraque, Mesaque e Abede-Nego, que enviou o seu anjo e livrou os seus servos que confiaram nele! Não há outro deus que possa livrar assim."', r: 'Daniel 3:28-29' }
      ],
      god: 'Deus está conosco no meio do fogo. Devemos adorar só a Ele, mesmo que custe caro.',
      jesus: 'No meio do fogo, os três amigos não estavam sozinhos: havia um quarto, que brilhava. Deus prometeu: "Quando passares pelo fogo, não te queimarás" (Isaías 43:2). Jesus prometeu: "Eis que eu estou convosco todos os dias, até a consumação dos séculos" (Mateus 28:20). Jesus não nos tira de todas as dificuldades, mas entra nelas conosco.',
      verse: { ref: 'Isaías 43:2', tx: 'Quando passares pelo fogo, não te queimarás, nem a chama arderá em ti.' },
      small: [
        { q: 'Os três amigos se ajoelharam para a estátua?', o: [['🧍', 'Não, ficaram de pé'], ['🙇', 'Sim'], ['🏃', 'Fugiram']] },
        { q: 'Quantos o rei viu no fogo?', o: [['4️⃣', 'Quatro'], ['3️⃣', 'Três'], ['1️⃣', 'Um']] },
        { q: 'O fogo queimou os amigos?', o: [['🚫', 'Nem um fio de cabelo'], ['🔥', 'Sim'], ['🤏', 'Só um pouco']] }
      ],
      big: [
        { q: 'Do que era a estátua do rei?', o: ['De ouro', 'De barro', 'De madeira', 'De ferro'], e: 'Daniel 3:1.' },
        { q: 'O que os amigos disseram "mesmo que não"?', o: ['Mesmo que Deus não livre, não vamos adorar a estátua', 'Mesmo que não chova', 'Mesmo que o rei peça desculpas', 'Nada'], e: 'Daniel 3:18.' },
        { q: 'Quantas vezes mais a fornalha foi aquecida?', o: ['Sete', 'Duas', 'Dez', 'Cem'], e: 'Daniel 3:19.' },
        { q: 'O que não tinham as roupas deles?', o: ['Nem cheiro de fumaça', 'Cor', 'Botões', 'Bolsos'], e: 'Daniel 3:27.' }
      ],
      parents: 'O quarto homem no fogo é mostrado só como brilho (✨). Muitos o entendem como uma aparição do Filho de Deus antes da encarnação; o próprio rei o chama de "anjo" (3:28). Os soldados mortos pelo calor (3:22) foram omitidos. A frase "mesmo que não" (3:18) é central: fé que não depende do livramento. Leitura junto: Daniel 3:13-28.'
    },
    {
      id: 'dn4', title: 'O rei que comeu capim', ref: 'Daniel 4', icon: '🌳',
      recap: 'Na lição passada, Deus livrou os três amigos da fornalha de fogo.',
      scenes: [
        { art: '👑😴🌳', bg: 'noite', fx: 'estrelas', text: 'Nabucodonosor teve outro sonho: uma árvore enorme, que chegava até o céu. Ela dava sombra e comida para todos os animais e pássaros.', r: 'Daniel 4:10-12' },
        { art: '✨🪓🌳🪵', bg: 'noite', fx: 'luz', text: 'Então um mensageiro santo desceu do céu e disse: "Derrubem a árvore, mas deixem o toco com as raízes na terra, amarrado com ferro e bronze, até que passem sete tempos."', r: 'Daniel 4:13-16' },
        { art: '👦😟👑', bg: 'palacio', text: 'Daniel ficou preocupado ao entender o sonho. Mas falou com coragem: "Ó rei, a árvore é você. Você vai ser afastado das pessoas e vai viver como os animais do campo, até reconhecer que o Altíssimo governa sobre os reinos dos homens."', r: 'Daniel 4:19-25' },
        { art: '👦🙏👑', bg: 'palacio', fx: 'luz', text: 'Daniel aconselhou: "Deixe os seus pecados e seja bondoso com os pobres. Talvez a sua paz dure mais."', r: 'Daniel 4:27' },
        { art: '👑😏🏙️', bg: 'palacio', text: 'Um ano depois, o rei passeava no terraço do palácio e disse, cheio de orgulho: "Não é esta a grande Babilônia que eu construí com o meu poder e para a minha glória?"', r: 'Daniel 4:29-30' },
        { art: '📣✨⬇️', bg: 'palacio', fx: 'luz', text: 'A frase ainda estava na boca do rei quando veio uma voz do céu: "O reino foi tirado de você!"', r: 'Daniel 4:31' },
        { art: '👑🐂🌾', bg: 'campo', text: 'Na mesma hora, o rei perdeu o juízo. Foi viver no campo e comia capim como os bois. O cabelo dele cresceu como penas de águia, e as unhas como garras de pássaro!', r: 'Daniel 4:33' },
        { art: '👑👀⬆️✨', bg: 'aurora', fx: 'luz', text: 'Depois de sete tempos, Nabucodonosor levantou os olhos para o céu, e o seu juízo voltou. Ele louvou o Altíssimo: "O seu domínio é eterno! Ele faz o que quer com o exército do céu e com os moradores da terra."', r: 'Daniel 4:34-35' },
        { art: '👑🙇💛', bg: 'palacio', fx: 'brilho', text: 'O reino voltou para ele, e ele disse: "Agora eu louvo, exalto e glorifico o Rei do céu, porque todas as suas obras são verdade, e Ele pode humilhar os que andam com orgulho."', r: 'Daniel 4:36-37' }
      ],
      god: 'Deus resiste aos orgulhosos e dá graça aos humildes. Ele governa sobre todos, até sobre os maiores reis.',
      jesus: 'Nabucodonosor se exaltou e foi humilhado. Jesus fez o caminho contrário: sendo Deus, "a si mesmo se humilhou, sendo obediente até a morte, e morte de cruz. Por isso, também Deus o exaltou soberanamente" (Filipenses 2:8-9). Jesus ensinou: "Qualquer que a si mesmo se exaltar será humilhado, e aquele que a si mesmo se humilhar será exaltado" (Lucas 14:11).',
      verse: { ref: 'Tiago 4:6', tx: 'Deus resiste aos soberbos, dá, porém, graça aos humildes.' },
      small: [
        { q: 'O que o rei viu no sonho?', o: [['🌳', 'Uma árvore enorme'], ['🚀', 'Um foguete'], ['🐉', 'Um dragão']] },
        { q: 'O que o rei comeu no campo?', o: [['🌾', 'Capim'], ['🍕', 'Pizza'], ['🍎', 'Maçã']] },
        { q: 'O que o rei fez no final?', o: [['🙇', 'Louvou a Deus'], ['😠', 'Ficou bravo'], ['😴', 'Dormiu']] }
      ],
      big: [
        { q: 'O que ficou da árvore cortada?', o: ['O toco com as raízes', 'Nada', 'Só as folhas', 'Os frutos'], e: 'Daniel 4:15.' },
        { q: 'O que o rei disse no terraço?', o: ['"Esta é a grande Babilônia que eu construí"', '"Obrigado, Deus"', '"Estou cansado"', 'Nada'], e: 'Daniel 4:30.' },
        { q: 'Como ficou o cabelo do rei?', o: ['Como penas de águia', 'Careca', 'Branco', 'Cacheado'], e: 'Daniel 4:33.' },
        { q: 'Quando o juízo do rei voltou?', o: ['Quando ele olhou para o céu', 'Quando acordou', 'Quando comeu', 'Nunca'], e: 'Daniel 4:34.' }
      ],
      parents: 'O capítulo é escrito pelo próprio Nabucodonosor, como testemunho (4:1-3). O "vigia" ou mensageiro santo é mostrado só como luz. Ponto central: orgulho e humildade, e o arrependimento de um rei pagão. Leitura junto: Daniel 4:28-37.'
    },
    {
      id: 'dn5', title: 'A mão que escreveu na parede', ref: 'Daniel 5', icon: '✋',
      recap: 'Na lição passada, o orgulhoso Nabucodonosor foi humilhado e depois louvou a Deus.',
      scenes: [
        { art: '👑🎉🍷👥', bg: 'palacio', text: 'Anos depois, o rei da Babilônia era Belsazar. Ele fez uma festa enorme para mil convidados importantes.', r: 'Daniel 5:1' },
        { art: '👑🏆🗿😏', bg: 'palacio', text: 'No meio da festa, ele mandou trazer os vasos de ouro e de prata que tinham sido tirados do templo de Jerusalém. Beberam vinho neles e louvaram os deuses de ouro, de prata e de pedra. Que desrespeito com Deus!', r: 'Daniel 5:2-4' },
        { art: '✋✍️🧱', bg: 'palacio', fx: 'luz', text: 'Na mesma hora, apareceram dedos de uma mão de homem, que começaram a escrever na parede do palácio, perto do candelabro! O rei viu a mão escrevendo.', r: 'Daniel 5:5' },
        { art: '👑😱🦵', bg: 'palacio', text: 'O rosto do rei ficou pálido, ele ficou tão assustado que os joelhos batiam um no outro!', r: 'Daniel 5:6' },
        { art: '🧙🤷❓', bg: 'palacio', text: 'Ele chamou todos os sábios, mas nenhum conseguiu ler nem explicar o que estava escrito.', r: 'Daniel 5:7-8' },
        { art: '👸💬👴', bg: 'palacio', text: 'A rainha disse: "Há um homem no seu reino que tem o espírito dos deuses santos. Chame Daniel!" Daniel já era velhinho.', r: 'Daniel 5:10-13' },
        { art: '👴💬👑', bg: 'palacio', fx: 'luz', text: 'Daniel recusou os presentes e disse: "Você sabia o que aconteceu com Nabucodonosor, e mesmo assim não se humilhou. Você se levantou contra o Senhor do céu e não glorificou o Deus que tem a sua vida na mão."', r: 'Daniel 5:17-23' },
        { art: '🧱📜⚖️', bg: 'palacio', fx: 'luz', text: 'Daniel leu: "MENE, MENE, TEQUEL, PARSIM. Deus contou os dias do seu reino e o fez terminar. Você foi pesado na balança e achado em falta. O seu reino foi dividido e dado aos medos e persas."', r: 'Daniel 5:25-28' },
        { art: '🌙⚔️🏰', bg: 'noite', fx: 'estrelas', text: 'Naquela mesma noite, os medos e os persas entraram na Babilônia, e o reino de Belsazar acabou. A palavra de Deus se cumpriu.', r: 'Daniel 5:30-31' }
      ],
      god: 'Deus é santo e não aceita ser desrespeitado. Ele pesa o coração de cada um e tem a nossa vida nas suas mãos.',
      jesus: 'Belsazar foi "pesado na balança e achado em falta". Se Deus nos pesar pelo que fazemos, todos nós vamos ser achados em falta (Romanos 3:23). Mas Jesus foi pesado e achado perfeito, e entregou a sua vida para que fôssemos aceitos. "Agora nenhuma condenação há para os que estão em Cristo Jesus" (Romanos 8:1).',
      verse: { ref: 'Daniel 5:23', tx: 'Mas a Deus, em cuja mão está a tua vida, e de quem são todos os teus caminhos, a ele não glorificaste.' },
      small: [
        { q: 'O que apareceu na parede?', o: [['✋', 'Uma mão escrevendo'], ['🕷️', 'Uma aranha'], ['🖼️', 'Um quadro']] },
        { q: 'Quem conseguiu ler a escrita?', o: [['👴', 'Daniel'], ['🧙', 'Os magos'], ['👑', 'O rei']] },
        { q: 'O que o rei fez com os vasos do templo?', o: [['🍷', 'Usou para beber numa festa'], ['🙏', 'Devolveu ao templo'], ['🧹', 'Limpou']] }
      ],
      big: [
        { q: 'Quem era o rei nesta história?', o: ['Belsazar', 'Nabucodonosor', 'Dario', 'Ciro'], e: 'Daniel 5:1.' },
        { q: 'Quem sugeriu chamar Daniel?', o: ['A rainha', 'Os magos', 'Os guardas', 'Ninguém'], e: 'Daniel 5:10-12.' },
        { q: 'O que significa TEQUEL?', o: ['Pesado na balança e achado em falta', 'Contado', 'Dividido', 'Abençoado'], e: 'Daniel 5:27.' },
        { q: 'Quem conquistou a Babilônia naquela noite?', o: ['Os medos e persas', 'Os egípcios', 'Os gregos', 'Os israelitas'], e: 'Daniel 5:28-31.' }
      ],
      parents: 'A morte de Belsazar (5:30) foi suavizada para "o reino acabou". A Babilônia caiu em 539 a.C. A mão é mostrada como um emoji simples. Ponto central: a santidade de Deus e a responsabilidade de quem conhece a verdade e não se humilha. Leitura junto: Daniel 5:17-28.'
    },
    {
      id: 'dn6', title: 'Daniel na cova dos leões', ref: 'Daniel 6', icon: '🦁',
      recap: 'Na lição passada, a mão escreveu na parede, e a Babilônia caiu diante dos medos e persas.',
      scenes: [
        { art: '👑🧔👴', bg: 'palacio', text: 'O novo rei, Dario, colocou cento e vinte governadores no reino, e acima deles três chefes. Daniel era um deles, e o rei pensava em colocá-lo acima de todos, porque nele havia um espírito excelente.', r: 'Daniel 6:1-3' },
        { art: '🧔🧔🔍😠', bg: 'palacio', text: 'Os outros chefes ficaram com inveja e procuraram um erro em Daniel. Mas não acharam nada, porque ele era fiel. Então disseram: "Só vamos conseguir alguma coisa contra ele na lei do seu Deus."', r: 'Daniel 6:4-5' },
        { art: '📜✍️👑', bg: 'palacio', text: 'Eles convenceram o rei a fazer uma lei: "Durante trinta dias, quem orar a qualquer deus ou homem, a não ser ao rei, vai ser jogado na cova dos leões." E o rei assinou. Uma lei dos medos e persas não podia ser mudada.', r: 'Daniel 6:6-9' },
        { art: '👴🪟🙏3️⃣', bg: 'cidade', fx: 'luz', text: 'Daniel soube da lei. Mesmo assim, foi para casa, abriu a janela voltada para Jerusalém, se ajoelhou e orou, dando graças a Deus, três vezes por dia, como sempre fazia.', r: 'Daniel 6:10' },
        { art: '🧔🧔👀👉', bg: 'cidade', text: 'Os inimigos o pegaram orando e foram correndo contar ao rei. Dario ficou muito triste e tentou até o pôr do sol salvar Daniel, mas não conseguiu mudar a lei.', r: 'Daniel 6:11-14' },
        { art: '👴⬇️🦁🦁', bg: 'noite', text: 'Daniel foi jogado na cova dos leões. O rei disse: "O seu Deus, a quem você serve sempre, vai te livrar." E taparam a cova com uma pedra.', r: 'Daniel 6:16-17' },
        { art: '👑😟🌙', bg: 'noite', fx: 'estrelas', text: 'O rei voltou ao palácio e passou a noite sem comer e sem dormir, de tanta preocupação.', r: 'Daniel 6:18' },
        { art: '👑🏃🌅📣', bg: 'aurora', text: 'De manhã bem cedinho, o rei correu até a cova e gritou com voz triste: "Daniel, servo do Deus vivo! O seu Deus conseguiu te livrar dos leões?"', r: 'Daniel 6:19-20' },
        { art: '👴😊🦁😴', bg: 'aurora', fx: 'luz', text: 'E Daniel respondeu: "Ó rei, vive para sempre! O meu Deus enviou o seu anjo e fechou a boca dos leões, e eles não me fizeram mal nenhum!" Tiraram Daniel da cova, e ele não tinha nenhum arranhão, porque confiou no seu Deus.', r: 'Daniel 6:21-23' },
        { art: '👑📜🌍', bg: 'palacio', fx: 'brilho', text: 'O rei Dario escreveu a todos os povos: "Que todos temam o Deus de Daniel, porque Ele é o Deus vivo, e o seu reino nunca vai ser destruído. Ele livra, salva e faz maravilhas no céu e na terra!"', r: 'Daniel 6:25-27' }
      ],
      god: 'Deus é o Deus vivo, que livra quem confia nele. Vale a pena ser fiel e orar sempre.',
      jesus: 'Daniel foi colocado numa cova, taparam com uma pedra, e de manhã cedo ele saiu vivo! Jesus foi colocado num túmulo, taparam com uma pedra, e de manhã cedinho, no terceiro dia, a pedra foi removida e Jesus estava vivo (Marcos 16:2-6)! Daniel foi livrado da morte; Jesus venceu a morte para sempre.',
      verse: { ref: 'Daniel 6:22', tx: 'O meu Deus enviou o seu anjo, e fechou a boca dos leões, para que não me fizessem dano.' },
      small: [
        { q: 'Quantas vezes por dia Daniel orava?', o: [['3️⃣', 'Três'], ['🚫', 'Nenhuma'], ['💯', 'Cem']] },
        { q: 'Onde jogaram Daniel?', o: [['🦁', 'Na cova dos leões'], ['🌊', 'No mar'], ['🔥', 'No fogo']] },
        { q: 'O que Deus fez com os leões?', o: [['🤐', 'Fechou a boca deles'], ['🍖', 'Deu fome'], ['🎉', 'Fez festa']] }
      ],
      big: [
        { q: 'Por que os inimigos não acharam erro em Daniel?', o: ['Ele era fiel', 'Ele se escondia', 'Eles eram cegos', 'O rei proibiu'], e: 'Daniel 6:4.' },
        { q: 'Para onde ficava a janela onde Daniel orava?', o: ['Para Jerusalém', 'Para o Egito', 'Para o rio', 'Para o palácio'], e: 'Daniel 6:10; 1 Reis 8:48.' },
        { q: 'Como o rei passou a noite?', o: ['Sem comer e sem dormir', 'Numa festa', 'Dormindo bem', 'Viajando'], e: 'Daniel 6:18.' },
        { q: 'Como o rei chamou Deus no final?', o: ['O Deus vivo', 'Um deus pequeno', 'O deus dos leões', 'Nenhum nome'], e: 'Daniel 6:26.' }
      ],
      parents: 'A punição dos acusadores e das suas famílias (6:24) foi omitida. O anjo é mostrado só como luz. A janela voltada para Jerusalém lembra a oração de Salomão (1 Reis 8:48). Esta história também está no Cantinho Kids. Leitura junto: Daniel 6:10-23.'
    },
    {
      id: 'dn7', title: 'O Filho do Homem nas nuvens', ref: 'Daniel 7', icon: '☁️',
      recap: 'Na lição passada, Deus fechou a boca dos leões, e Daniel saiu da cova sem nenhum arranhão.',
      scenes: [
        { art: '👴😴🌊🌬️', bg: 'noite', fx: 'ondas', text: 'Daniel teve um sonho: os quatro ventos do céu agitavam o grande mar, e do mar saíram quatro animais enormes, diferentes uns dos outros.', r: 'Daniel 7:1-3' },
        { art: '🦁🐻🐆🐉', bg: 'noite', fx: 'ondas', text: 'O primeiro era como um leão com asas de águia, o segundo como um urso, o terceiro como um leopardo com quatro asas, e o quarto era terrível e muito forte, com dentes de ferro.', r: 'Daniel 7:4-7' },
        { art: '🪑🔥✨', bg: 'aurora', fx: 'luz', text: 'Então Daniel viu tronos sendo colocados. E o Ancião de Dias se sentou. A sua roupa era branca como a neve, e o seu trono era de chamas de fogo.', r: 'Daniel 7:9' },
        { art: '🔥🌊👥👥', bg: 'aurora', fx: 'luz', text: 'Um rio de fogo saía de diante dele. Milhares de milhares o serviam, e milhões de milhões estavam diante dele. Os livros foram abertos, e o tribunal começou.', r: 'Daniel 7:10' },
        { art: '🐉⚖️💨', bg: 'aurora', fx: 'vento', text: 'Os animais perderam o seu poder. Os reinos cruéis do mundo não iam durar para sempre.', r: 'Daniel 7:11-12' },
        { art: '☁️☁️✨', bg: 'aurora', fx: 'luz', text: 'Depois, Daniel viu algo maravilhoso: "Eis que vinha com as nuvens do céu alguém como um Filho do Homem. Ele chegou até o Ancião de Dias, e o levaram até a sua presença."', r: 'Daniel 7:13' },
        { art: '👑🌍♾️', bg: 'aurora', fx: 'brilho', text: '"E foi dado a Ele domínio, glória e um reino, para que todos os povos, nações e línguas o servissem. O seu domínio é eterno e não vai passar, e o seu reino nunca vai ser destruído."', r: 'Daniel 7:14' },
        { art: '👥👑💛', bg: 'aurora', fx: 'brilho', text: 'E o reino ia ser dado também "aos santos do Altíssimo", o povo de Deus, que ia reinar com Ele para sempre.', r: 'Daniel 7:18, 27' }
      ],
      god: 'Deus está no trono, acima de todos os reinos do mundo. O seu reino é eterno e é dado ao seu povo.',
      jesus: 'O nome que Jesus mais usava para si mesmo era "Filho do Homem", tirado de Daniel 7. Quando o sumo sacerdote perguntou se Ele era o Cristo, Jesus respondeu: "Eu sou, e vereis o Filho do homem assentado à direita do Poder, e vindo sobre as nuvens do céu" (Marcos 14:61-62). Jesus é o Filho do Homem que recebeu todo o domínio, e um dia voltará nas nuvens (Atos 1:11).',
      verse: { ref: 'Daniel 7:14', tx: 'E foi-lhe dado o domínio, e a honra, e o reino, para que todos os povos, nações e línguas o servissem; o seu domínio é um domínio eterno, que não passará.' },
      small: [
        { q: 'De onde saíram os quatro animais?', o: [['🌊', 'Do mar'], ['🌳', 'Da floresta'], ['🏰', 'Do castelo']] },
        { q: 'Como veio o Filho do Homem?', o: [['☁️', 'Com as nuvens do céu'], ['🚗', 'De carro'], ['🐴', 'A cavalo']] },
        { q: 'Quanto tempo vai durar o reino dele?', o: [['♾️', 'Para sempre'], ['📅', 'Um ano'], ['⏳', 'Pouco']] }
      ],
      big: [
        { q: 'Como era a roupa do Ancião de Dias?', o: ['Branca como a neve', 'Vermelha', 'Dourada', 'Preta'], e: 'Daniel 7:9.' },
        { q: 'O que aconteceu com o poder dos animais?', o: ['Foi tirado', 'Aumentou', 'Durou para sempre', 'Nada'], e: 'Daniel 7:12.' },
        { q: 'Quem vai servir o Filho do Homem?', o: ['Todos os povos, nações e línguas', 'Só Israel', 'Só os reis', 'Ninguém'], e: 'Daniel 7:14.' },
        { q: 'Que nome Jesus usava muito para si mesmo?', o: ['Filho do Homem', 'Ancião de Dias', 'Rei da Babilônia', 'Leão alado'], e: 'Marcos 14:62; Daniel 7:13.' }
      ],
      parents: 'O Ancião de Dias e o Filho do Homem são mostrados só com luz, trono e nuvens, sem figura humana. As visões detalhadas do chifre pequeno (7:8, 19-26) e dos capítulos 8–12 foram omitidas. Ponto central: o Reino eterno do Filho do Homem, título central de Jesus. Leitura junto: Daniel 7:9-14.'
    },
    {
      id: 'dn8', title: 'Ezequiel, o vigia', ref: 'Ezequiel 1 – 3; 10', icon: '👁️',
      recap: 'Na lição passada, Daniel viu o Filho do Homem receber um reino eterno.',
      scenes: [
        { art: '🧔🏞️👥', bg: 'campo', text: 'Entre os prisioneiros levados para a Babilônia, estava um jovem sacerdote chamado Ezequiel. Ele morava junto ao rio Quebar, longe do templo onde devia servir.', r: 'Ezequiel 1:1-3' },
        { art: '🌪️☁️🔥', bg: 'deserto', fx: 'vento', text: 'Um dia, ele viu um vento de tempestade vindo do norte, uma grande nuvem com fogo brilhando ao redor, e no meio uma luz como de metal reluzente.', r: 'Ezequiel 1:4' },
        { art: '🪽🛞👀🛞', bg: 'aurora', fx: 'luz', text: 'Ele viu seres celestiais com asas, e ao lado deles rodas dentro de rodas, cheias de olhos, que andavam para todos os lados sem virar. Era o trono de Deus, que se movia!', r: 'Ezequiel 1:5-21' },
        { art: '🌈🪑✨', bg: 'aurora', fx: 'luz', text: 'Acima de tudo, havia um trono, e ao redor dele um brilho como o do arco-íris num dia de chuva. "Esta era a aparência da glória do Senhor." Ezequiel caiu com o rosto em terra.', r: 'Ezequiel 1:26-28' },
        { art: '✨💡🌍', bg: 'aurora', fx: 'luz', text: 'Que notícia! A glória de Deus não estava presa no templo de Jerusalém. Deus estava ali, na Babilônia, com o seu povo exilado!', r: 'Ezequiel 1:1; 11:16' },
        { art: '📜🍯😋', bg: 'aurora', fx: 'brilho', text: 'Deus deu a Ezequiel um rolo escrito e disse: "Coma este rolo." Ezequiel comeu, e era doce como mel na sua boca! Ele tinha que guardar a Palavra dentro de si antes de falar.', r: 'Ezequiel 2:9 – 3:3' },
        { art: '🧔🏰👁️', bg: 'cidade', fx: 'luz', text: 'Deus disse: "Filho do homem, eu te coloquei como vigia sobre a casa de Israel." O vigia ficava no alto do muro e avisava quando o perigo chegava. Ezequiel devia avisar o povo, quer eles ouvissem, quer não.', r: 'Ezequiel 3:17; 2:5' },
        { art: '✨🏛️➡️⛰️', bg: 'monte', text: 'Mais tarde, numa visão, Ezequiel viu algo muito triste: por causa dos ídolos no templo, a glória do Senhor saiu do templo de Jerusalém e foi para o monte a leste da cidade.', r: 'Ezequiel 10:18-19; 11:23' }
      ],
      god: 'Deus é glorioso e está com o seu povo em qualquer lugar. Ele avisa antes do perigo, porque não quer que ninguém se perca.',
      jesus: 'A glória de Deus saiu do templo e foi para o monte a leste de Jerusalém: o monte das Oliveiras. Séculos depois, a glória de Deus voltou a Jerusalém em Jesus (João 1:14), que muitas vezes ensinou no monte das Oliveiras e de lá subiu ao céu (Atos 1:9-12). E Jesus, como um vigia, avisou com amor: "Vigiai!" (Marcos 13:37).',
      verse: { ref: 'Ezequiel 3:3', tx: 'Então o comi, e era na minha boca doce como o mel.' },
      small: [
        { q: 'Onde Ezequiel morava?', o: [['🏞️', 'Junto a um rio na Babilônia'], ['🏛️', 'No templo'], ['🌙', 'Na lua']] },
        { q: 'O que Ezequiel comeu?', o: [['📜', 'Um rolo da Palavra'], ['🍕', 'Uma pizza'], ['🥦', 'Brócolis']] },
        { q: 'Que gosto tinha o rolo?', o: [['🍯', 'Doce como mel'], ['🍋', 'Azedo'], ['🧂', 'Salgado']] }
      ],
      big: [
        { q: 'Qual era a profissão de Ezequiel antes do exílio?', o: ['Sacerdote', 'Pastor', 'Pescador', 'Rei'], e: 'Ezequiel 1:3.' },
        { q: 'Com o que era parecido o brilho ao redor do trono?', o: ['O arco-íris', 'O sol', 'Uma fogueira', 'A lua'], e: 'Ezequiel 1:28.' },
        { q: 'Qual era a missão do vigia?', o: ['Avisar o povo do perigo', 'Dormir no muro', 'Construir', 'Plantar'], e: 'Ezequiel 3:17.' },
        { q: 'Para onde foi a glória quando saiu do templo?', o: ['Para o monte a leste da cidade', 'Para o Egito', 'Para o mar', 'Para Babilônia'], e: 'Ezequiel 11:23.' }
      ],
      parents: 'A visão do capítulo 1 é complexa; foi resumida. Os seres viventes (querubins) e o trono aparecem só como asas, rodas e luz, sem figura de Deus. As ações simbólicas de Ezequiel (capítulos 4–5) e as visões das abominações (capítulo 8) foram omitidas. Leitura junto: Ezequiel 1:26-28 e 3:1-3.'
    },
    {
      id: 'dn9', title: 'O vale dos ossos secos', ref: 'Ezequiel 37', icon: '🦴',
      recap: 'Na lição passada, Ezequiel viu a glória de Deus e foi chamado para ser vigia.',
      scenes: [
        { art: '✨🧔🏜️', bg: 'deserto', fx: 'luz', text: 'A mão do Senhor veio sobre Ezequiel e, pelo Espírito, o levou para um vale.', r: 'Ezequiel 37:1' },
        { art: '🦴🦴🦴🦴🦴', bg: 'deserto', fx: 'vento', text: 'O vale estava cheio de ossos! Eram muitos, muitos, e estavam sequinhos, como se estivessem ali há muito tempo.', r: 'Ezequiel 37:1-2' },
        { art: '✨❓🦴', bg: 'deserto', fx: 'luz', text: 'Deus perguntou: "Filho do homem, será que estes ossos podem voltar a viver?" Ezequiel respondeu: "Senhor Deus, tu é que sabes."', r: 'Ezequiel 37:3' },
        { art: '🧔📣🦴', bg: 'deserto', text: 'Deus disse: "Profetize a estes ossos: Ossos secos, ouçam a palavra do Senhor! Eu vou colocar fôlego em vocês, e vocês vão viver!"', r: 'Ezequiel 37:4-6' },
        { art: '🦴🔊🦴🦴', bg: 'deserto', fx: 'brilho', text: 'Ezequiel profetizou e, enquanto falava, ouviu um barulho, um chocalhar! Os ossos se juntaram, cada osso com o seu osso!', r: 'Ezequiel 37:7' },
        { art: '🦴➡️🧍🧍', bg: 'deserto', fx: 'brilho', text: 'Ezequiel olhou, e apareceram músculos, carne e pele sobre os ossos. Mas ainda não tinham fôlego, não respiravam.', r: 'Ezequiel 37:8' },
        { art: '🌬️🌬️🌬️', bg: 'deserto', fx: 'vento', text: 'Deus disse: "Profetize ao vento: Venha dos quatro ventos, ó espírito, e sopre sobre estes mortos, para que vivam!"', r: 'Ezequiel 37:9' },
        { art: '🧍🧍🧍🧍💪', bg: 'aurora', fx: 'luz', text: 'Ezequiel profetizou, e o fôlego entrou neles. Eles viveram e ficaram de pé, um exército enorme!', r: 'Ezequiel 37:10' },
        { art: '✨💬👥🔙', bg: 'aurora', fx: 'brilho', text: 'Deus explicou: "Estes ossos são o povo de Israel. Eles dizem: os nossos ossos secaram, e a nossa esperança acabou. Mas eu vou abrir as suas sepulturas, colocar o meu Espírito em vocês, e vocês vão viver. Vou levar vocês de volta para a sua terra."', r: 'Ezequiel 37:11-14' }
      ],
      god: 'Deus dá vida onde não há vida e esperança onde não há esperança. O seu Espírito faz os mortos viverem.',
      jesus: 'Na criação, Deus soprou o fôlego da vida no homem (Gênesis 2:7). No vale, o Espírito soprou e os mortos viveram. Depois de ressuscitar, Jesus soprou sobre os discípulos e disse: "Recebei o Espírito Santo" (João 20:22). Jesus é a ressurreição e a vida, e pelo seu Espírito nós, que estávamos mortos no pecado, recebemos vida nova (Efésios 2:4-5).',
      verse: { ref: 'Ezequiel 37:14', tx: 'E porei em vós o meu Espírito, e vivereis.' },
      small: [
        { q: 'Do que estava cheio o vale?', o: [['🦴', 'De ossos secos'], ['🌸', 'De flores'], ['🐑', 'De ovelhas']] },
        { q: 'O que fez os ossos se juntarem?', o: [['📣', 'A palavra de Deus'], ['🧲', 'Um ímã'], ['🧵', 'Uma linha']] },
        { q: 'O que entrou neles para viverem?', o: [['🌬️', 'O fôlego, o Espírito'], ['💧', 'Água'], ['🍕', 'Comida']] }
      ],
      big: [
        { q: 'O que Ezequiel respondeu quando Deus perguntou se os ossos podiam viver?', o: ['"Senhor, tu é que sabes"', '"Não"', '"Sim, claro"', 'Nada'], e: 'Ezequiel 37:3.' },
        { q: 'Que barulho os ossos fizeram?', o: ['Um chocalhar, juntando-se', 'Música', 'Um grito', 'Nenhum'], e: 'Ezequiel 37:7.' },
        { q: 'O que os ossos representavam?', o: ['O povo de Israel sem esperança', 'Os animais', 'Os egípcios', 'Os dinossauros'], e: 'Ezequiel 37:11.' },
        { q: 'O que Jesus fez que lembra esta visão?', o: ['Soprou e disse: Recebei o Espírito Santo', 'Pescou', 'Dormiu', 'Viajou'], e: 'João 20:22.' }
      ],
      parents: 'Em hebraico, "ruach" significa vento, fôlego e espírito; a visão joga com as três ideias. Ossos podem assustar crianças pequenas; a lição foca na vida que volta. A visão dos dois pedaços de madeira (37:15-28) foi omitida. Leitura junto: Ezequiel 37:1-14.'
    },
    {
      id: 'dn10', title: 'O bom pastor e o rio do templo', ref: 'Ezequiel 34; 36; 47', icon: '🏞️',
      recap: 'Na lição passada, Deus fez os ossos secos voltarem a viver pelo seu Espírito.',
      scenes: [
        { art: '🧔‍🌾😴🐑🐑', bg: 'campo', text: 'Deus falou contra os pastores de Israel, os líderes do povo: "Vocês cuidam de si mesmos e não das ovelhas! Não fortaleceram a fraca, não curaram a doente, não buscaram a perdida."', r: 'Ezequiel 34:2-4' },
        { art: '🐑🐑🏔️😢', bg: 'monte', fx: 'vento', text: '"As minhas ovelhas se espalharam pelos montes, e ninguém foi procurá-las."', r: 'Ezequiel 34:6' },
        { art: '✨🐑🔍💛', bg: 'campo', fx: 'coracoes', text: 'Então Deus prometeu: "Eu mesmo vou procurar as minhas ovelhas e cuidar delas. Vou buscar a perdida, trazer de volta a desgarrada, enfaixar a ferida e fortalecer a doente."', r: 'Ezequiel 34:11, 16' },
        { art: '👑🧔‍🌾🐑', bg: 'campo', fx: 'brilho', text: '"Vou colocar sobre elas um só pastor, o meu servo Davi. Ele vai apascentá-las e vai ser o pastor delas."', r: 'Ezequiel 34:23' },
        { art: '🪨❤️➡️❤️✨', bg: 'aurora', fx: 'luz', text: 'E Deus fez uma promessa para o coração: "Vou tirar de vocês o coração de pedra e dar um coração de carne. Vou colocar dentro de vocês o meu Espírito."', r: 'Ezequiel 36:26-27' },
        { art: '🏛️💧➡️', bg: 'aurora', fx: 'luz', text: 'No fim do livro, Ezequiel teve a visão de um templo novo, e a glória do Senhor voltando para ele! E de debaixo da porta do templo saía um fio de água.', r: 'Ezequiel 43:4-5; 47:1' },
        { art: '💧🦶🦵🏊', bg: 'mar', fx: 'ondas', text: 'A água ia ficando mais funda: primeiro até os tornozelos, depois até os joelhos, depois até a cintura, e então virou um rio tão fundo que só dava para atravessar nadando!', r: 'Ezequiel 47:3-5' },
        { art: '🌳🌳🐟🐟', bg: 'jardim', fx: 'brilho', text: 'Por onde o rio passava, tudo ganhava vida! Árvores frutíferas cresciam nas margens, com frutos todo mês e folhas que curavam. Até o mar Morto, salgado, ficava cheio de peixes!', r: 'Ezequiel 47:8-12' },
        { art: '🏙️✨📛', bg: 'aurora', fx: 'luz', text: 'E a nova cidade ganhou um nome lindo: "O Senhor está ali."', r: 'Ezequiel 48:35' }
      ],
      god: 'Deus é o pastor que procura a ovelha perdida. Ele dá coração novo e faz a vida brotar por onde passa a sua presença.',
      jesus: 'Jesus disse: "Eu sou o bom Pastor; o bom Pastor dá a sua vida pelas ovelhas" (João 10:11). Ele veio "buscar e salvar o que se havia perdido" (Lucas 19:10), como Ezequiel 34. Jesus também disse: "Quem crê em mim, rios de água viva correrão do seu ventre", falando do Espírito (João 7:38-39). E no Apocalipse, o rio da vida sai do trono de Deus e do Cordeiro, com a árvore da vida cujas folhas curam as nações (Apocalipse 22:1-2).',
      verse: { ref: 'Ezequiel 36:26', tx: 'E vos darei um coração novo, e porei dentro de vós um espírito novo; e tirarei da vossa carne o coração de pedra, e vos darei um coração de carne.' },
      small: [
        { q: 'Quem vai procurar as ovelhas perdidas?', o: [['✨', 'O próprio Deus'], ['🐺', 'O lobo'], ['🚫', 'Ninguém']] },
        { q: 'Que coração Deus vai tirar?', o: [['🪨', 'O coração de pedra'], ['❤️', 'O coração bom'], ['🍫', 'O de chocolate']] },
        { q: 'O que acontecia por onde o rio passava?', o: [['🌳', 'Tudo ganhava vida'], ['🏜️', 'Tudo secava'], ['❄️', 'Congelava']] }
      ],
      big: [
        { q: 'Qual era a falha dos pastores de Israel?', o: ['Cuidavam de si e não das ovelhas', 'Trabalhavam demais', 'Eram muito bondosos', 'Nada'], e: 'Ezequiel 34:2-4.' },
        { q: 'Quem seria o pastor prometido?', o: ['"O meu servo Davi"', 'Moisés', 'Ezequiel', 'Nabucodonosor'], e: 'Ezequiel 34:23.' },
        { q: 'Até onde chegou a água do rio?', o: ['Tão funda que era preciso nadar', 'Só nos tornozelos', 'Secou', 'Até o joelho'], e: 'Ezequiel 47:5.' },
        { q: 'Qual o nome da nova cidade?', o: ['"O Senhor está ali"', 'Babilônia', 'Nova Nínive', 'Cidade do Rei'], e: 'Ezequiel 48:35.' }
      ],
      parents: 'Encerramento do arco do exílio. "Davi" em 34:23 é o Messias, descendente de Davi (Ezequiel escreve séculos depois de Davi). As medidas detalhadas do templo (capítulos 40–46) foram omitidas. Ponto central: o Pastor messiânico, o coração novo e o rio da vida (João 7; Apocalipse 22). Leitura junto: Ezequiel 34:11-16 e 47:1-12.'
    }
  ]
};
