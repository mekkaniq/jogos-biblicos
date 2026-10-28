/* A Grande História da Bíblia — Arco 25: Jesus nasce e cresce (Mateus 1 – 2; Lucas 1 – 2) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.nasce = {
  id: 'nasce', n: 25, name: 'Jesus nasce e cresce', sub: 'A promessa chegou', ref: 'Mateus 1 – 2, Lucas 1 – 2', icon: '⭐', scene: 'noite',
  intro: 'Depois de quatrocentos anos de silêncio, Deus falou de novo! Todas as promessas do Antigo Testamento, o Descendente da mulher, o Filho de Abraão, o Rei da família de Davi, o Servo, o Emanuel, iam se cumprir num bebê nascido em Belém. Neste arco, vamos ver como Deus preparou tudo: anjos, sonhos, pastores, magos e uma estrela. (Lembrete: nesta história nós não fazemos imagem de Jesus; usamos a luz para lembrar da sua presença.)',
  lessons: [
    {
      id: 'na1', title: 'O anjo e o sacerdote Zacarias', ref: 'Lucas 1:5-25', icon: '👴',
      recap: 'No fim do Antigo Testamento, Malaquias prometeu um mensageiro que prepararia o caminho do Senhor. Depois, houve quatrocentos anos de silêncio.',
      scenes: [
        { art: '👴👵💛', bg: 'cidade', text: 'No tempo do rei Herodes, vivia um sacerdote chamado Zacarias, com a sua esposa Isabel. Os dois eram justos e obedeciam a Deus. Mas eles não tinham filhos, e já estavam bem velhinhos.', r: 'Lucas 1:5-7' },
        { art: '👴🏛️🔥', bg: 'aurora', fx: 'luz', text: 'Um dia, Zacarias foi sorteado para entrar no templo e queimar o incenso no lugar santo, enquanto todo o povo orava do lado de fora. Era um momento muito especial.', r: 'Lucas 1:8-10' },
        { art: '✨👴😨', bg: 'aurora', fx: 'luz', text: 'De repente, um anjo do Senhor apareceu ao lado do altar! Zacarias ficou muito assustado.', r: 'Lucas 1:11-12' },
        { art: '✨💬👶', bg: 'aurora', fx: 'luz', text: 'O anjo disse: "Não tenha medo, Zacarias! A sua oração foi ouvida. Isabel vai ter um filho, e você vai dar a ele o nome de João."', r: 'Lucas 1:13' },
        { art: '👶🛤️📣', bg: 'deserto', fx: 'brilho', text: '"Ele vai ser grande diante do Senhor e vai trazer muitos de volta para Deus. Ele vai vir no espírito e no poder de Elias, para preparar um povo para o Senhor."', r: 'Lucas 1:15-17' },
        { art: '👴🤔❓', bg: 'aurora', text: 'Zacarias duvidou: "Como vou saber se isso é verdade? Eu sou velho, e minha esposa também!"', r: 'Lucas 1:18' },
        { art: '✨📛🤐', bg: 'aurora', fx: 'luz', text: 'O anjo respondeu: "Eu sou Gabriel, que fico diante de Deus. Fui enviado para trazer esta boa notícia. Como você não acreditou, vai ficar mudo até o dia em que isso acontecer."', r: 'Lucas 1:19-20' },
        { art: '👴🤐👋👥', bg: 'cidade', text: 'O povo lá fora estranhou a demora. Quando Zacarias saiu, não conseguia falar, só fazia sinais com as mãos. E todos entenderam que ele tinha tido uma visão no templo.', r: 'Lucas 1:21-22' },
        { art: '👵🤰😊', bg: 'aurora', fx: 'coracoes', text: 'Pouco tempo depois, Isabel ficou grávida! Ela disse: "Assim o Senhor fez comigo, olhando para mim com bondade."', r: 'Lucas 1:24-25' }
      ],
      god: 'Deus ouve as orações, mesmo as que parecem esquecidas. Ele quebrou o silêncio no tempo certo.',
      jesus: 'Malaquias tinha prometido que viria um mensageiro "no espírito de Elias" para preparar o caminho do Senhor (Malaquias 3:1; 4:5-6). Esse mensageiro era o bebê João! E, se o mensageiro estava chegando, isso significava que o Senhor, Jesus, também estava chegando.',
      verse: { ref: 'Lucas 1:37', tx: 'Porque para Deus nada é impossível.' },
      small: [
        { q: 'Onde o anjo apareceu a Zacarias?', o: [['🏛️', 'No templo'], ['🏖️', 'Na praia'], ['🌳', 'Na floresta']] },
        { q: 'Que nome o bebê ia ter?', o: [['👶', 'João'], ['👑', 'Davi'], ['🦁', 'Leão']] },
        { q: 'O que aconteceu com Zacarias?', o: [['🤐', 'Ficou mudo'], ['🦘', 'Pulou muito'], ['😴', 'Dormiu']] }
      ],
      big: [
        { q: 'Qual era o nome da esposa de Zacarias?', o: ['Isabel', 'Maria', 'Ana', 'Sara'], e: 'Lucas 1:5.' },
        { q: 'Qual era o nome do anjo?', o: ['Gabriel', 'Miguel', 'Rafael', 'Elias'], e: 'Lucas 1:19.' },
        { q: 'No espírito de qual profeta João ia vir?', o: ['Elias', 'Moisés', 'Jonas', 'Daniel'], e: 'Lucas 1:17; Malaquias 4:5.' },
        { q: 'Por que Zacarias ficou mudo?', o: ['Porque não acreditou nas palavras do anjo', 'Porque gritou muito', 'Porque estava doente', 'Porque quis'], e: 'Lucas 1:20.' }
      ],
      parents: 'Início do Novo Testamento. O anjo Gabriel é mostrado só como luz (✨), seguindo a regra do projeto. Ponto central: Deus quebra o silêncio e cumpre Malaquias. Leitura junto: Lucas 1:5-25.'
    },
    {
      id: 'na2', title: 'O anjo visita Maria', ref: 'Lucas 1:26-38', icon: '👩',
      recap: 'Na lição passada, o anjo Gabriel anunciou a Zacarias que ele teria um filho chamado João.',
      scenes: [
        { art: '🏘️👩💛', bg: 'campo', text: 'Seis meses depois, Deus enviou o anjo Gabriel a uma cidadezinha da Galileia chamada Nazaré. Lá morava uma jovem chamada Maria, noiva de um homem chamado José, que era da família do rei Davi.', r: 'Lucas 1:26-27' },
        { art: '✨👩😮', bg: 'aurora', fx: 'luz', text: 'O anjo entrou e disse: "Alegre-se, muito favorecida! O Senhor está com você." Maria ficou confusa, pensando no que aquela saudação queria dizer.', r: 'Lucas 1:28-29' },
        { art: '✨💬👩', bg: 'aurora', fx: 'luz', text: '"Não tenha medo, Maria, porque você encontrou graça diante de Deus. Você vai ficar grávida e vai ter um filho, e vai dar a ele o nome de Jesus."', r: 'Lucas 1:30-31' },
        { art: '📛✨', bg: 'aurora', fx: 'brilho', text: 'O nome Jesus quer dizer "o Senhor salva". O anjo explicou por que esse nome era tão especial.', r: 'Mateus 1:21' },
        { art: '👑🪑♾️', bg: 'palacio', fx: 'brilho', text: '"Ele vai ser grande e vai ser chamado Filho do Altíssimo. O Senhor Deus vai dar a ele o trono de Davi, seu pai. Ele vai reinar para sempre, e o seu reino não vai ter fim!" Era a promessa feita a Davi mil anos antes!', r: 'Lucas 1:32-33; 2 Samuel 7:16' },
        { art: '👩❓✨', bg: 'aurora', text: 'Maria perguntou: "Como isso vai acontecer, se eu ainda não sou casada?"', r: 'Lucas 1:34' },
        { art: '🕊️✨☁️', bg: 'aurora', fx: 'luz', text: 'O anjo respondeu: "O Espírito Santo vai vir sobre você, e o poder do Altíssimo vai te cobrir com a sua sombra. Por isso, o santo que vai nascer vai ser chamado Filho de Deus. Porque para Deus nada é impossível!"', r: 'Lucas 1:35-37' },
        { art: '👩🙇💛', bg: 'aurora', fx: 'coracoes', text: 'Maria respondeu com fé e humildade: "Eis aqui a serva do Senhor. Que aconteça comigo conforme a tua palavra." E o anjo foi embora.', r: 'Lucas 1:38' }
      ],
      god: 'Para Deus nada é impossível. Ele cumpre as promessas de um jeito maravilhoso.',
      jesus: 'Lá no jardim do Éden, Deus prometeu que o Descendente da mulher ia esmagar a cabeça da serpente (Gênesis 3:15). Isaías disse que uma virgem daria à luz o Emanuel (Isaías 7:14). E Deus prometeu a Davi um Rei para sempre. Agora tudo se juntava: Jesus é verdadeiro homem, nascido de Maria, e verdadeiro Deus, o Filho do Altíssimo.',
      verse: { ref: 'Lucas 1:38', tx: 'Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra.' },
      small: [
        { q: 'Quem o anjo visitou?', o: [['👩', 'Maria'], ['👑', 'O rei'], ['🐑', 'Uma ovelha']] },
        { q: 'Que nome o bebê ia ter?', o: [['✨', 'Jesus'], ['🦁', 'Sansão'], ['🌊', 'Moisés']] },
        { q: 'Existe algo impossível para Deus?', o: [['❌', 'Não, nada'], ['✅', 'Sim'], ['🤷', 'Talvez']] }
      ],
      big: [
        { q: 'Em que cidade Maria morava?', o: ['Nazaré', 'Belém', 'Jerusalém', 'Roma'], e: 'Lucas 1:26-27.' },
        { q: 'O que quer dizer o nome Jesus?', o: ['O Senhor salva', 'Rei forte', 'Luz', 'Pastor'], e: 'Mateus 1:21.' },
        { q: 'Que trono Jesus ia receber?', o: ['O trono de Davi', 'O trono de César', 'O trono de Faraó', 'Nenhum'], e: 'Lucas 1:32.' },
        { q: 'O que Maria respondeu ao anjo?', o: ['"Eis aqui a serva do Senhor"', '"Não quero"', '"Vou pensar"', '"Impossível"'], e: 'Lucas 1:38.' }
      ],
      parents: 'A concepção virginal foi explicada com as palavras do próprio texto (o Espírito Santo, 1:35), sem detalhes biológicos. Jesus não aparece em imagem: usamos luz, coroa e símbolos. Ponto central: Jesus, verdadeiro Deus e verdadeiro homem. Leitura junto: Lucas 1:26-38.'
    },
    {
      id: 'na3', title: 'O cântico de Maria e o nascimento de João', ref: 'Lucas 1:39-80', icon: '🎶',
      recap: 'Na lição passada, o anjo Gabriel disse a Maria que ela seria a mãe de Jesus.',
      scenes: [
        { art: '👩🏃⛰️', bg: 'monte', text: 'Maria se apressou e foi para uma cidade nas montanhas de Judá, para visitar Isabel, a sua parente, que também estava esperando um bebê.', r: 'Lucas 1:39-40' },
        { art: '👩🤝👵🤰', bg: 'cidade', fx: 'coracoes', text: 'Quando Isabel ouviu a saudação de Maria, o bebê pulou de alegria dentro da sua barriga! E Isabel, cheia do Espírito Santo, disse em voz alta: "Bendita é você entre as mulheres! Como é que a mãe do meu Senhor vem me visitar?"', r: 'Lucas 1:41-43' },
        { art: '👩🎶✨', bg: 'aurora', fx: 'brilho', text: 'Maria cantou um louvor lindo: "A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus, meu Salvador! Porque Ele olhou para a humildade da sua serva."', r: 'Lucas 1:46-48' },
        { art: '👑⬇️🧑‍🌾⬆️', bg: 'campo', fx: 'luz', text: '"Ele derrubou os poderosos dos seus tronos e levantou os humildes. Encheu de coisas boas os famintos." E Maria lembrou: "Ele fez isso conforme prometeu a Abraão e aos seus descendentes."', r: 'Lucas 1:52-55' },
        { art: '👶🎉👥', bg: 'cidade', fx: 'brilho', text: 'Três meses depois, Isabel teve o seu bebê, um menino! Os vizinhos e parentes se alegraram com ela, porque o Senhor tinha sido muito bondoso.', r: 'Lucas 1:56-58' },
        { art: '👥❓📛', bg: 'cidade', text: 'No oitavo dia, todos queriam chamar o menino de Zacarias, como o pai. Mas Isabel disse: "Não! Ele vai se chamar João." E perguntaram ao pai por sinais.', r: 'Lucas 1:59-62' },
        { art: '👴✍️📜', bg: 'cidade', fx: 'luz', text: 'Zacarias pediu uma tabuinha e escreveu: "O nome dele é João." Na mesma hora, a sua boca se abriu, e ele começou a falar, louvando a Deus!', r: 'Lucas 1:63-64' },
        { art: '👴🎶👶', bg: 'aurora', fx: 'luz', text: 'Cheio do Espírito Santo, Zacarias cantou: "Bendito seja o Senhor, que visitou e redimiu o seu povo! E você, menino, vai ser chamado profeta do Altíssimo, porque vai na frente do Senhor preparar os seus caminhos."', r: 'Lucas 1:67-68, 76' },
        { art: '👦🏜️💪', bg: 'deserto', fx: 'vento', text: 'O menino João cresceu e ficou forte no espírito. Ele morou nos lugares desertos até o dia de se apresentar a Israel.', r: 'Lucas 1:80' }
      ],
      god: 'Deus olha para os humildes e cumpre as promessas que fez há muito tempo. Ele merece o nosso louvor.',
      jesus: 'Antes mesmo de nascer, João pulou de alegria perto de Jesus. A vida inteira de João foi apontar para Jesus. Zacarias cantou que Deus ia trazer a salvação da família de Davi, como os profetas tinham dito (Lucas 1:69-70). E o próprio João diria depois: "É necessário que ele cresça e que eu diminua" (João 3:30).',
      verse: { ref: 'Lucas 1:46-47', tx: 'A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus meu Salvador.' },
      small: [
        { q: 'Quem Maria foi visitar?', o: [['👵', 'Isabel'], ['👑', 'O rei'], ['🐪', 'Um camelo']] },
        { q: 'O que o bebê de Isabel fez?', o: [['🦘', 'Pulou de alegria'], ['😭', 'Chorou'], ['😴', 'Dormiu']] },
        { q: 'O que Zacarias fez quando voltou a falar?', o: [['🎶', 'Louvou a Deus'], ['😠', 'Reclamou'], ['🏃', 'Fugiu']] }
      ],
      big: [
        { q: 'Como começa o cântico de Maria?', o: ['"A minha alma engrandece ao Senhor"', '"O Senhor é meu pastor"', '"Santo, santo, santo"', '"Glória a Deus"'], e: 'Lucas 1:46.' },
        { q: 'A quem Deus tinha feito a promessa, segundo Maria?', o: ['A Abraão e aos seus descendentes', 'A Faraó', 'A Golias', 'A César'], e: 'Lucas 1:55.' },
        { q: 'O que Zacarias escreveu na tabuinha?', o: ['"O nome dele é João"', '"O nome dele é Zacarias"', '"Estou cansado"', 'Nada'], e: 'Lucas 1:63.' },
        { q: 'Onde João morou enquanto crescia?', o: ['Nos lugares desertos', 'No palácio', 'No Egito', 'Em Roma'], e: 'Lucas 1:80.' }
      ],
      parents: 'O cântico de Maria (Magnificat) e o de Zacarias (Benedictus) estão cheios de frases do Antigo Testamento, como o cântico de Ana (1 Samuel 2). Bom para mostrar a continuidade da história. Leitura junto: Lucas 1:39-56.'
    },
    {
      id: 'na4', title: 'O sonho de José', ref: 'Mateus 1:18-25', icon: '💭',
      recap: 'Na lição passada, Maria visitou Isabel, e o bebê João nasceu.',
      scenes: [
        { art: '🧔🔨🪵', bg: 'cidade', text: 'José era um carpinteiro de Nazaré, um homem justo, da família do rei Davi. Ele estava noivo de Maria.', r: 'Mateus 1:18-19; 13:55' },
        { art: '🧔😟💭', bg: 'noite', text: 'Quando soube que Maria estava esperando um bebê, José ficou muito preocupado e triste, porque ainda não estavam casados. Ele não queria envergonhar Maria, e pensou em desfazer o noivado em segredo.', r: 'Mateus 1:18-19' },
        { art: '🌙😴✨', bg: 'noite', fx: 'estrelas', text: 'Enquanto ele pensava nisso, um anjo do Senhor apareceu a ele num sonho.', r: 'Mateus 1:20' },
        { art: '✨💬🧔', bg: 'noite', fx: 'luz', text: '"José, filho de Davi, não tenha medo de receber Maria como sua esposa, porque o bebê que ela espera vem do Espírito Santo."', r: 'Mateus 1:20' },
        { art: '📛✨💛', bg: 'aurora', fx: 'luz', text: '"Ela vai ter um filho, e você vai dar a ele o nome de Jesus, porque Ele vai salvar o seu povo dos pecados deles."', r: 'Mateus 1:21' },
        { art: '📜✨👶', bg: 'aurora', fx: 'brilho', text: 'Tudo isso aconteceu para se cumprir o que o Senhor tinha dito pelo profeta Isaías: "A virgem vai conceber e dar à luz um filho, e o chamarão pelo nome de Emanuel", que quer dizer "Deus conosco".', r: 'Mateus 1:22-23; Isaías 7:14' },
        { art: '🧔🌅✅', bg: 'aurora', fx: 'brilho', text: 'Quando José acordou, fez exatamente o que o anjo do Senhor tinha mandado. Ele recebeu Maria como sua esposa.', r: 'Mateus 1:24' },
        { art: '👨‍👩🏠💛', bg: 'cidade', fx: 'coracoes', text: 'E, quando o bebê nasceu, José deu a ele o nome de Jesus, como o anjo tinha dito. José ia cuidar de Jesus como pai aqui na terra.', r: 'Mateus 1:25' }
      ],
      god: 'Deus conhece as nossas preocupações e guia quem quer obedecê-lo. Ele cumpre tudo o que prometeu.',
      jesus: 'O anjo disse que Jesus ia "salvar o seu povo dos seus pecados". Esse é o maior problema da humanidade desde Adão e Eva, e só Jesus pode resolver. E Jesus é Emanuel, "Deus conosco": Deus mesmo veio morar com a gente. Mateus começa o seu livro mostrando que Jesus é filho de Davi e filho de Abraão (Mateus 1:1).',
      verse: { ref: 'Mateus 1:21', tx: 'E chamarás o seu nome Jesus; porque ele salvará o seu povo dos seus pecados.' },
      small: [
        { q: 'Qual era o trabalho de José?', o: [['🔨', 'Carpinteiro'], ['🎣', 'Pescador'], ['👑', 'Rei']] },
        { q: 'Como o anjo falou com José?', o: [['💭', 'Num sonho'], ['📱', 'Pelo celular'], ['📨', 'Por carta']] },
        { q: 'O que quer dizer Emanuel?', o: [['💛', 'Deus conosco'], ['🦁', 'Leão'], ['⭐', 'Estrela']] }
      ],
      big: [
        { q: 'De que família era José?', o: ['Da família do rei Davi', 'Da família de Faraó', 'Da família de Herodes', 'De nenhuma'], e: 'Mateus 1:20.' },
        { q: 'O que José pensou em fazer no começo?', o: ['Desfazer o noivado em segredo', 'Fugir para o Egito', 'Contar para todos', 'Nada'], e: 'Mateus 1:19.' },
        { q: 'Por que o bebê ia se chamar Jesus?', o: ['Porque ia salvar o povo dos seus pecados', 'Porque era nome de rei', 'Porque era bonito', 'Porque José escolheu'], e: 'Mateus 1:21.' },
        { q: 'Qual profeta anunciou o Emanuel?', o: ['Isaías', 'Jonas', 'Elias', 'Amós'], e: 'Isaías 7:14; Mateus 1:23.' }
      ],
      parents: 'A preocupação de José foi explicada de forma simples ("ainda não estavam casados"). A genealogia de Mateus 1:1-17 (com Tamar, Raabe, Rute e Bate-Seba) foi omitida, mas vale mostrar aos maiores como ela liga Jesus a Abraão e Davi. Leitura junto: Mateus 1:18-25.'
    },
    {
      id: 'na5', title: 'Nasceu em Belém!', ref: 'Lucas 2:1-20', icon: '🌟',
      recap: 'Na lição passada, um anjo disse a José, num sonho, que o bebê se chamaria Jesus.',
      scenes: [
        { art: '👑📜🌍', bg: 'cidade', text: 'O imperador romano, César Augusto, mandou fazer um recenseamento: cada pessoa devia ir para a cidade da sua família, para ser contada.', r: 'Lucas 2:1-3' },
        { art: '🧔👩🫏🛤️', bg: 'deserto', text: 'Por isso, José foi de Nazaré até Belém, a cidade de Davi, porque era da família de Davi. Maria foi com ele, e já estava quase na hora do bebê nascer.', r: 'Lucas 2:4-5' },
        { art: '🏘️🚫🛏️', bg: 'noite', fx: 'estrelas', text: 'Em Belém, não havia lugar para eles na hospedaria. Belém era a pequena cidade de que o profeta Miqueias tinha falado!', r: 'Lucas 2:7; Miqueias 5:2' },
        { art: '🐄🌾⭐', bg: 'noite', fx: 'luz', text: 'E ali, onde ficavam os animais, Maria deu à luz o seu filho primogênito. Ela o enrolou em panos e o deitou numa manjedoura, o cocho onde os animais comiam. O Rei dos reis nasceu num lugar simples!', r: 'Lucas 2:6-7' },
        { art: '🧑‍🌾🐑🌙', bg: 'campo', fx: 'estrelas', text: 'Naquela mesma noite, nos campos perto de Belém, havia pastores cuidando das suas ovelhas.', r: 'Lucas 2:8' },
        { art: '✨🧑‍🌾😨', bg: 'campo', fx: 'luz', text: 'Um anjo do Senhor apareceu a eles, e a glória do Senhor brilhou ao redor deles. Eles ficaram com muito medo.', r: 'Lucas 2:9' },
        { art: '✨📣💛', bg: 'campo', fx: 'luz', text: 'O anjo disse: "Não tenham medo! Eu trago boas notícias de grande alegria para todo o povo: hoje, na cidade de Davi, nasceu para vocês o Salvador, que é Cristo, o Senhor! O sinal é este: vocês vão encontrar um bebê enrolado em panos e deitado numa manjedoura."', r: 'Lucas 2:10-12' },
        { art: '✨✨✨🎶', bg: 'noite', fx: 'estrelas', text: 'De repente, apareceu junto com o anjo uma multidão de anjos, louvando a Deus: "Glória a Deus lá no alto do céu, e paz aqui na terra para as pessoas que Ele ama!"', r: 'Lucas 2:13-14' },
        { art: '🧑‍🌾🏃🌾⭐', bg: 'noite', fx: 'luz', text: 'Os pastores correram para Belém e encontraram Maria, José e o bebê deitado na manjedoura, exatamente como o anjo tinha dito!', r: 'Lucas 2:15-16' },
        { art: '🧑‍🌾📣🎉', bg: 'aurora', fx: 'brilho', text: 'Os pastores contaram a todos o que tinham ouvido sobre o menino, e todos ficaram admirados. Maria guardava todas essas coisas no coração. E os pastores voltaram glorificando e louvando a Deus.', r: 'Lucas 2:17-20' }
      ],
      god: 'Deus é tão humilde que nasceu num lugar simples. A boa notícia dele é para todo o povo, até para os pastores.',
      jesus: 'Miqueias disse que o Rei eterno ia nascer em Belém (Miqueias 5:2), e Deus usou até a ordem de um imperador para levar Maria e José até lá. Jesus é o Salvador, o Cristo (o Messias prometido) e o Senhor. Ele, que é Deus, se fez pequeno por nós: "sendo rico, por amor de vós se fez pobre" (2 Coríntios 8:9).',
      verse: { ref: 'Lucas 2:11', tx: 'Pois, na cidade de Davi, vos nasceu hoje o Salvador, que é Cristo, o Senhor.' },
      small: [
        { q: 'Em que cidade Jesus nasceu?', o: [['⭐', 'Belém'], ['🗼', 'Paris'], ['🏙️', 'Nínive']] },
        { q: 'Onde o bebê foi deitado?', o: [['🌾', 'Numa manjedoura'], ['🛏️', 'Numa cama de rei'], ['🚗', 'Num carro']] },
        { q: 'Quem recebeu a notícia primeiro?', o: [['🧑‍🌾', 'Os pastores'], ['👑', 'O rei'], ['🐟', 'Os pescadores']] }
      ],
      big: [
        { q: 'Por que José e Maria foram a Belém?', o: ['Por causa do recenseamento de César', 'Para passear', 'Para fugir', 'Para pescar'], e: 'Lucas 2:1-4.' },
        { q: 'Que profeta disse que o Rei nasceria em Belém?', o: ['Miqueias', 'Jonas', 'Malaquias', 'Naum'], e: 'Miqueias 5:2.' },
        { q: 'Qual era o sinal para os pastores?', o: ['Um bebê em panos, numa manjedoura', 'Uma coroa', 'Uma estrela caindo', 'Um palácio'], e: 'Lucas 2:12.' },
        { q: 'O que os anjos cantaram?', o: ['"Glória a Deus nas alturas"', '"Santo, santo, santo"', '"Hosana"', '"Aleluia"'], e: 'Lucas 2:14.' }
      ],
      parents: 'O bebê Jesus não é representado: usamos a manjedoura (🌾) e a luz (⭐). A palavra "Cristo" quer dizer "Ungido", o Messias. Ponto central: o Salvador prometido nasceu, e a notícia é para todos, começando pelos simples. Leitura junto: Lucas 2:1-20.'
    },
    {
      id: 'na6', title: 'Simeão e Ana veem a salvação', ref: 'Lucas 2:21-40', icon: '👴',
      recap: 'Na lição passada, Jesus nasceu em Belém, e os pastores foram adorá-lo.',
      scenes: [
        { art: '🧔👩🕊️🕊️', bg: 'cidade', text: 'Quarenta dias depois, como a Lei de Moisés mandava, Maria e José levaram o bebê ao templo de Jerusalém para apresentá-lo ao Senhor. Eles ofereceram duas pombinhas, a oferta das famílias pobres.', r: 'Lucas 2:22-24; Levítico 12:8' },
        { art: '👴🙏⏳', bg: 'cidade', text: 'Em Jerusalém, vivia um homem justo e piedoso chamado Simeão. Ele esperava o dia em que Deus ia consolar Israel, e o Espírito Santo tinha prometido a ele que ele não ia morrer antes de ver o Cristo do Senhor.', r: 'Lucas 2:25-26' },
        { art: '👴🏃🏛️', bg: 'cidade', fx: 'luz', text: 'Guiado pelo Espírito, Simeão foi ao templo bem na hora em que Maria e José chegavam com o menino.', r: 'Lucas 2:27' },
        { art: '👴🤲✨', bg: 'aurora', fx: 'luz', text: 'Simeão pegou o menino nos braços e louvou a Deus: "Agora, Senhor, podes deixar o teu servo ir em paz, conforme a tua palavra, porque os meus olhos já viram a tua salvação!"', r: 'Lucas 2:28-30' },
        { art: '🌍💡👥', bg: 'aurora', fx: 'brilho', text: '"Ela é luz para iluminar as nações e glória do teu povo Israel." Simeão entendeu que Jesus era a salvação para o mundo inteiro!', r: 'Lucas 2:31-32' },
        { art: '👴💬👩💔', bg: 'cidade', text: 'Depois, Simeão disse a Maria, com carinho e seriedade, que muitos iam se levantar contra aquele menino, e que uma espada ia atravessar a alma dela. Era um aviso do sofrimento que viria na cruz.', r: 'Lucas 2:34-35' },
        { art: '👵🙏🏛️', bg: 'cidade', fx: 'luz', text: 'Havia também no templo uma profetisa muito velhinha, Ana, de oitenta e quatro anos. Ela não saía do templo, adorando a Deus com jejuns e orações, dia e noite.', r: 'Lucas 2:36-37' },
        { art: '👵📣👥', bg: 'cidade', fx: 'brilho', text: 'Naquela mesma hora, Ana chegou, deu graças a Deus e falava do menino a todos os que esperavam a redenção de Jerusalém.', r: 'Lucas 2:38' },
        { art: '🏘️🌱💪', bg: 'campo', fx: 'brilho', text: 'Depois, a família voltou para Nazaré. E o menino crescia, ficava forte e cada vez mais sábio, e Deus o enchia de graça.', r: 'Lucas 2:39-40' }
      ],
      god: 'Deus recompensa quem espera nele com paciência. Ele guia pelo seu Espírito os que o buscam.',
      jesus: 'Simeão chamou Jesus de "a tua salvação" e "luz para iluminar as nações". Deus tinha prometido a Abraão que todas as famílias da terra seriam abençoadas pela sua descendência (Gênesis 12:3), e Isaías falou do Servo que seria "luz para os gentios" (Isaías 49:6). Jesus é essa luz para o mundo inteiro, inclusive para nós!',
      verse: { ref: 'Lucas 2:30', tx: 'Porque já os meus olhos viram a tua salvação.' },
      small: [
        { q: 'Onde Maria e José levaram o bebê?', o: [['🏛️', 'Ao templo'], ['🏖️', 'À praia'], ['🎪', 'Ao circo']] },
        { q: 'Quem pegou o menino nos braços e louvou a Deus?', o: [['👴', 'Simeão'], ['👑', 'Herodes'], ['🐪', 'Um camelo']] },
        { q: 'O que Jesus é para as nações, segundo Simeão?', o: [['💡', 'Luz'], ['🌑', 'Escuridão'], ['🌧️', 'Chuva']] }
      ],
      big: [
        { q: 'Que oferta Maria e José levaram?', o: ['Duas pombinhas', 'Um boi', 'Ouro', 'Um carneiro'], e: 'Lucas 2:24.' },
        { q: 'O que o Espírito Santo tinha prometido a Simeão?', o: ['Que veria o Cristo antes de morrer', 'Que ficaria rico', 'Que seria rei', 'Nada'], e: 'Lucas 2:26.' },
        { q: 'Quantos anos tinha a profetisa Ana?', o: ['Oitenta e quatro', 'Vinte', 'Cem', 'Quarenta'], e: 'Lucas 2:37.' },
        { q: 'Como o menino Jesus crescia?', o: ['Forte, cheio de sabedoria e de graça', 'Fraco e triste', 'Sozinho', 'Sem aprender'], e: 'Lucas 2:40.' }
      ],
      parents: 'A oferta das pombinhas mostra que a família de Jesus era pobre (Levítico 12:8). A profecia da "espada" (2:35) foi explicada como aviso do sofrimento de Maria na cruz. Ponto central: Jesus é a salvação e a luz das nações. Leitura junto: Lucas 2:25-38.'
    },
    {
      id: 'na7', title: 'Os magos e a estrela', ref: 'Mateus 2', icon: '🐪',
      recap: 'Na lição passada, Simeão e Ana viram o menino Jesus no templo e louvaram a Deus.',
      scenes: [
        { art: '🧙🧙🧙⭐', bg: 'noite', fx: 'estrelas', text: 'Algum tempo depois, chegaram a Jerusalém uns magos do Oriente, homens sábios que estudavam as estrelas. Eles perguntavam: "Onde está o rei dos judeus que nasceu? Vimos a sua estrela e viemos adorá-lo."', r: 'Mateus 2:1-2' },
        { art: '👑😠😟', bg: 'palacio', text: 'Quando o rei Herodes ouviu isso, ficou muito perturbado. Ele não queria outro rei! E toda Jerusalém ficou agitada com ele.', r: 'Mateus 2:3' },
        { art: '👑📜🧔', bg: 'palacio', text: 'Herodes reuniu os sacerdotes e os mestres da Lei e perguntou onde o Cristo devia nascer. Eles responderam: "Em Belém da Judeia, porque assim escreveu o profeta Miqueias."', r: 'Mateus 2:4-6' },
        { art: '👑🤫🧙', bg: 'palacio', text: 'Herodes chamou os magos em segredo e disse, mentindo: "Vão a Belém e procurem o menino. Quando encontrarem, me avisem, para eu ir adorá-lo também." Mas ele queria fazer mal ao menino.', r: 'Mateus 2:7-8' },
        { art: '⭐➡️🏠🧙', bg: 'noite', fx: 'estrelas', text: 'Os magos partiram, e aquela mesma estrela que tinham visto no Oriente foi na frente deles, até parar em cima do lugar onde estava o menino. Quando viram a estrela, ficaram muito, muito alegres!', r: 'Mateus 2:9-10' },
        { art: '🧙🙇🎁✨', bg: 'noite', fx: 'luz', text: 'Entraram na casa, viram o menino com Maria, sua mãe, e se ajoelharam para adorá-lo. Abriram os seus tesouros e deram presentes: ouro, incenso e mirra.', r: 'Mateus 2:11' },
        { art: '🧙💭🛤️', bg: 'noite', fx: 'estrelas', text: 'Deus avisou os magos num sonho para não voltarem a Herodes. Então eles voltaram para a sua terra por outro caminho.', r: 'Mateus 2:12' },
        { art: '🧔👩🫏🌙', bg: 'deserto', fx: 'vento', text: 'Um anjo apareceu a José num sonho: "Levante-se, pegue o menino e a mãe dele e fuja para o Egito, porque Herodes vai procurar o menino." José se levantou de noite e foi com eles para o Egito.', r: 'Mateus 2:13-14' },
        { art: '🏜️🔙🏘️', bg: 'campo', fx: 'brilho', text: 'Quando Herodes morreu, o anjo mandou José voltar. Assim se cumpriu o que o profeta Oseias disse: "Do Egito chamei o meu Filho." E a família foi morar em Nazaré.', r: 'Mateus 2:15, 19-23; Oseias 11:1' }
      ],
      god: 'Deus guia quem o procura de verdade, até de muito longe. Nenhum plano mau consegue vencer o plano de Deus.',
      jesus: 'Os magos eram estrangeiros, mas vieram adorar Jesus: era o começo do cumprimento da promessa de que as nações viriam à sua luz (Isaías 60:3). Herodes tentou destruir o menino, como Faraó e Atalia tentaram antes, mas Deus o guardou. E, como Israel, Jesus foi ao Egito e foi chamado de volta: Ele é o verdadeiro Filho, que obedece em tudo.',
      verse: { ref: 'Mateus 2:11', tx: 'E, prostrando-se, o adoraram; e abrindo os seus tesouros, ofertaram-lhe dádivas: ouro, incenso e mirra.' },
      small: [
        { q: 'O que guiou os magos?', o: [['⭐', 'Uma estrela'], ['🗺️', 'Um mapa'], ['📱', 'Um GPS']] },
        { q: 'O que os magos fizeram quando viram o menino?', o: [['🙇', 'Adoraram'], ['😂', 'Riram'], ['🏃', 'Fugiram']] },
        { q: 'Para onde a família fugiu?', o: [['🏜️', 'Para o Egito'], ['🏝️', 'Para uma ilha'], ['🏔️', 'Para a neve']] }
      ],
      big: [
        { q: 'De onde vieram os magos?', o: ['Do Oriente', 'De Roma', 'Do Egito', 'De Nazaré'], e: 'Mateus 2:1.' },
        { q: 'Que presentes os magos deram?', o: ['Ouro, incenso e mirra', 'Prata, pão e vinho', 'Ovelhas e bois', 'Roupas'], e: 'Mateus 2:11.' },
        { q: 'Por que os magos voltaram por outro caminho?', o: ['Deus os avisou num sonho', 'Se perderam', 'O camelo quis', 'Para ver o mar'], e: 'Mateus 2:12.' },
        { q: 'Que profecia se cumpriu com a volta do Egito?', o: ['"Do Egito chamei o meu Filho"', '"Nasceu em Belém"', '"Será chamado nazareno"', 'Nenhuma'], e: 'Mateus 2:15; Oseias 11:1.' }
      ],
      parents: 'A matança dos meninos de Belém (2:16-18) foi omitida; os pais podem contar aos maiores, com cuidado. Note que os magos encontram o menino numa "casa" (2:11), algum tempo depois do nascimento. Jesus não aparece em imagem. Leitura junto: Mateus 2:1-12.'
    },
    {
      id: 'na8', title: 'Jesus aos doze anos no templo', ref: 'Lucas 2:41-52', icon: '📜',
      recap: 'Na lição passada, os magos adoraram Jesus, e Deus protegeu a família na fuga para o Egito.',
      scenes: [
        { art: '👨‍👩‍👦🛤️🏛️', bg: 'deserto', text: 'Todos os anos, José e Maria iam a Jerusalém para a festa da Páscoa. Quando Jesus tinha doze anos, eles foram juntos, como de costume.', r: 'Lucas 2:41-42' },
        { art: '👥👥🛤️🏘️', bg: 'deserto', text: 'Quando a festa terminou, a família voltou para casa numa caravana enorme, com muitos parentes e conhecidos. Mas o menino Jesus ficou em Jerusalém, e eles não perceberam.', r: 'Lucas 2:43-44' },
        { art: '🧔👩😟🔍', bg: 'cidade', text: 'Depois de um dia de viagem, procuraram o menino entre os parentes e não o acharam. Voltaram correndo para Jerusalém, muito preocupados, procurando por todo lado.', r: 'Lucas 2:44-45' },
        { art: '🏛️📜👴👴✨', bg: 'cidade', fx: 'luz', text: 'Depois de três dias, o encontraram no templo, sentado no meio dos mestres da Lei, ouvindo e fazendo perguntas.', r: 'Lucas 2:46' },
        { art: '👴😮💡', bg: 'cidade', fx: 'brilho', text: 'Todos os que o ouviam ficavam admirados com a inteligência dele e com as suas respostas.', r: 'Lucas 2:47' },
        { art: '👩💬✨', bg: 'cidade', text: 'Maria disse: "Filho, por que você fez isso conosco? Seu pai e eu estávamos aflitos procurando você!"', r: 'Lucas 2:48' },
        { art: '✨💬🏛️', bg: 'aurora', fx: 'luz', text: 'Jesus respondeu: "Por que vocês me procuravam? Não sabiam que eu devia estar na casa de meu Pai?" Jesus sabia que Deus era o seu Pai de um jeito único! Mas eles não entenderam o que Ele quis dizer.', r: 'Lucas 2:49-50' },
        { art: '👨‍👩🏠🙇', bg: 'campo', fx: 'coracoes', text: 'Então Jesus voltou com eles para Nazaré e era obediente a eles. E Maria guardava todas essas coisas no coração.', r: 'Lucas 2:51' },
        { art: '🌱🌳📏💛', bg: 'campo', fx: 'brilho', text: 'E Jesus crescia em sabedoria, em estatura e em graça diante de Deus e das pessoas. Ele cresceu como uma criança de verdade, aprendendo, trabalhando e obedecendo.', r: 'Lucas 2:52' }
      ],
      god: 'Deus é o Pai de Jesus de um jeito único. Ele se alegra quando crescemos em sabedoria e obediência.',
      jesus: 'Jesus, que é o próprio Filho de Deus, foi uma criança de verdade e obedecia a Maria e José. Ele viveu a infância sem pecado, cumprindo perfeitamente o mandamento "Honra a teu pai e a tua mãe" no nosso lugar. Por isso Jesus entende as crianças, e Ele é o exemplo perfeito de como crescer amando a Deus e as pessoas (Hebreus 4:15).',
      verse: { ref: 'Lucas 2:52', tx: 'E crescia Jesus em sabedoria, e em estatura, e em graça para com Deus e os homens.' },
      small: [
        { q: 'Quantos anos Jesus tinha?', o: [['1️⃣2️⃣', 'Doze'], ['3️⃣', 'Três'], ['💯', 'Cem']] },
        { q: 'Onde encontraram Jesus?', o: [['🏛️', 'No templo'], ['🏪', 'Na loja'], ['🏖️', 'Na praia']] },
        { q: 'Jesus obedecia aos pais?', o: [['✅', 'Sim'], ['❌', 'Não'], ['🤷', 'Às vezes']] }
      ],
      big: [
        { q: 'Para qual festa a família ia todo ano a Jerusalém?', o: ['A Páscoa', 'O Natal', 'O Purim', 'O Ano Novo'], e: 'Lucas 2:41.' },
        { q: 'Depois de quantos dias encontraram Jesus?', o: ['Três', 'Um', 'Sete', 'Quarenta'], e: 'Lucas 2:46.' },
        { q: 'O que Jesus disse a Maria?', o: ['"Não sabiam que eu devia estar na casa de meu Pai?"', '"Me deixem em paz"', '"Estou com fome"', '"Vou morar aqui"'], e: 'Lucas 2:49.' },
        { q: 'Em que Jesus crescia?', o: ['Em sabedoria, estatura e graça', 'Só em altura', 'Em riqueza', 'Em fama'], e: 'Lucas 2:52.' }
      ],
      parents: 'Encerramento do arco do nascimento. O único episódio da infância de Jesus nos Evangelhos. Jesus não aparece em imagem; os mestres e a família, sim. Ponto central: a filiação única de Jesus e a sua obediência perfeita. Bom para conversar sobre obediência aos pais. Leitura junto: Lucas 2:41-52.'
    }
  ]
};
