/* Edição de Natal — Calendário do Advento (29/11 a 25/12). Uma porta por dia, que abre à meia-noite do horário do aparelho.
   Lições no mesmo formato das histórias do Kids (cenas, perguntas para Pequeninos e Leitores, figurinha).
   Regras: sem imagem de Jesus nem de anjos (só luz e estrelas); toda lição aponta para Jesus; versículo à vista.
   Em cada pergunta a PRIMEIRA opção é a certa (o app embaralha na hora de mostrar).
   TEXTOS PARA REVISÃO DO PASTOR (Rev. Wellington). Citações entre aspas: conferir palavra por palavra na ACF. */
window.ADVENTO_DATA = {
  // m = mês, d = dia; story = id da lição (adv* são novas; natal* já existem em dados-natal.js)
  // talk = pergunta para conversar em família; learn = frase do "Hoje aprendi" para compartilhar
  days: [
    { m: 11, d: 29, story: 'adv1', talk: 'Que promessa você já recebeu de alguém e que foi cumprida? Deus sempre cumpre as dele!', learn: 'Desde o começo, Deus prometeu um Salvador que venceria o mal.', verse: 'Esta te ferirá a cabeça, e tu lhe ferirás o calcanhar.', vref: 'Gênesis 3:15', pray: 'Querido Deus, obrigado porque o Senhor não desistiu de nós. Obrigado por prometer Jesus desde o começo. Ajuda a gente a confiar no Senhor. Em nome de Jesus, amém.', next: 'Amanhã no caminho: Deus chama um homem a sair de casa e olhar as estrelas.' },
    { m: 11, d: 30, story: 'adv2', talk: 'Quem são as famílias que você gostaria que conhecessem Jesus? Vamos orar por elas?', learn: 'Deus prometeu abençoar todas as famílias da terra, e essa bênção chega por Jesus.', verse: 'Em ti serão benditas todas as famílias da terra.', vref: 'Gênesis 12:3', pray: 'Senhor, obrigado porque a sua bênção é para todas as famílias. Abençoa a nossa família e as famílias dos nossos amigos. Ensina a gente a confiar como Abraão. Em nome de Jesus, amém.', next: 'Amanhã no caminho: um homem que não queria abençoar acaba vendo uma estrela.' },
    { m: 12, d: 1, story: 'adv3', talk: 'Quando vocês olharem para as estrelas hoje, lembrem: Deus cuida até das estrelas e cumpre o que promete.', learn: 'Deus anunciou uma estrela e um Rei que viria de Israel: Jesus.', verse: 'Uma estrela procederá de Jacó e um cetro subirá de Israel.', vref: 'Números 24:17', pray: 'Deus, obrigado porque ninguém pode desfazer as suas promessas. Obrigado por Jesus, a estrela que brilha para nós. Ajuda a gente a seguir a luz dele. Em nome de Jesus, amém.', next: 'Amanhã no caminho: um menino pastor vira rei e recebe uma promessa para sempre.' },
    { m: 12, d: 2, story: 'adv4', talk: 'Como seria um rei que nunca deixa de ser bom? Jesus é assim!', learn: 'Deus prometeu a Davi um Rei que reinaria para sempre: Jesus.', verse: 'Teu trono será firme para sempre.', vref: '2 Samuel 7:16', pray: 'Senhor, obrigado porque Jesus é o nosso Rei para sempre. Olha o nosso coração e faz ele parecido com o de Davi, que amava o Senhor. Em nome de Jesus, amém.', next: 'Amanhã no caminho: um rei com medo recebe um sinal, e um nome muito especial.' },
    { m: 12, d: 3, story: 'adv5', talk: 'Em que momentos você gosta de saber que Deus está com você?', learn: 'Emanuel quer dizer "Deus conosco". Em Jesus, Deus veio ficar perto de nós.', verse: 'E chamará o seu nome Emanuel.', vref: 'Isaías 7:14', pray: 'Querido Deus, obrigado porque, em Jesus, o Senhor está com a gente. Quando a gente tiver medo, lembra a gente de que o Senhor está perto. Em nome de Jesus, amém.', next: 'Amanhã no caminho: uma grande luz para quem estava no escuro, e quatro nomes maravilhosos.' },
    { m: 12, d: 4, story: 'adv6', talk: 'Qual dos nomes do menino você mais gostou: Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade ou Príncipe da Paz? Por quê?', learn: 'Jesus é a grande luz que brilha para quem está nas trevas.', verse: 'O povo que andava em trevas viu uma grande luz.', vref: 'Isaías 9:2', pray: 'Jesus, o Senhor é Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade e Príncipe da Paz. Brilha no nosso coração e enche a nossa casa da sua paz. Amém.', next: 'Amanhã no caminho: uma árvore cortada, e um brotinho que ninguém esperava.' },
    { m: 12, d: 5, story: 'adv7', talk: 'Já viu uma plantinha nascer de um toco de árvore cortada? Deus faz nascer esperança onde parecia não ter mais nada.', learn: 'Quando parecia não haver mais esperança, Deus fez nascer Jesus da família de Davi.', verse: 'Brotará um rebento do tronco de Jessé.', vref: 'Isaías 11:1', pray: 'Senhor, obrigado porque o Senhor faz nascer esperança onde parecia não ter mais nada. Quando a gente ficar triste, lembra a gente de Jesus. Em nome de Jesus, amém.', next: 'Amanhã no caminho: uma cidade pequenininha que Deus escolheu para algo muito grande.' },
    { m: 12, d: 6, story: 'adv8', talk: 'Deus escolheu uma cidade pequena. Você já se sentiu pequeno? Deus também cuida de você!', learn: 'Deus escolheu a pequena Belém para o nascimento do Rei Jesus.', verse: 'E tu, Belém Efrata, posto que pequena entre os milhares de Judá, de ti me sairá o que governará em Israel.', vref: 'Miqueias 5:2', pray: 'Senhor, obrigado porque o Senhor cuida das coisas pequenas e de gente pequena também. Obrigado por Jesus, o Rei que nasceu em Belém. Em nome de Jesus, amém.', next: 'Amanhã no caminho: uma voz no deserto pede para preparar o caminho.' },
    { m: 12, d: 7, story: 'adv9', talk: 'Como a nossa família pode preparar o coração para o Natal?', learn: 'Deus mandou alguém preparar o caminho para Jesus chegar.', verse: 'Preparai o caminho do Senhor.', vref: 'Isaías 40:3', pray: 'Jesus, queremos preparar o nosso coração para o Senhor. Perdoa os nossos pecados e tira de nós o que atrapalha. Vem morar em nós. Amém.', next: 'Amanhã no caminho: a última promessa antes de um longo silêncio, e um sol que nasce.' },
    { m: 12, d: 8, story: 'adv10', talk: 'Esperar é difícil! O que vocês estão esperando? Deus nunca se esquece das promessas dele.', learn: 'Mesmo depois de 400 anos de silêncio, Deus não esqueceu: Jesus é o Sol da justiça.', verse: 'Nascerá o sol da justiça, e cura trará nas suas asas.', vref: 'Malaquias 4:2', pray: 'Senhor, às vezes esperar é difícil. Ensina a gente a esperar no Senhor com paciência e alegria. Obrigado por Jesus, o nosso Sol. Em nome de Jesus, amém.', next: 'Amanhã no caminho: o silêncio acaba, dentro do templo, com um sacerdote bem velhinho.' },
    { m: 12, d: 9, story: 'adv11', talk: 'Zacarias orou por muitos anos. Pelo que vocês têm orado em família?', learn: 'Deus ouve as orações e estava preparando a chegada de Jesus.', verse: 'Não temas, porque a tua oração foi ouvida.', vref: 'Lucas 1:13', pray: 'Deus, obrigado porque o Senhor ouve as nossas orações. Ajuda a gente a continuar orando e a confiar, mesmo quando a resposta demora. Em nome de Jesus, amém.', next: 'Amanhã no caminho: Isabel em casa, esperando com fé um milagre.' },
    { m: 12, d: 10, story: 'adv12', talk: 'Existe algo que parece impossível para vocês? Vamos entregar isso a Deus em oração.', learn: 'Para Deus nada é impossível: Ele cumpre tudo o que promete.', verse: 'Porque para Deus nada é impossível.', vref: 'Lucas 1:37', pray: 'Senhor, para o Senhor nada é impossível. Entregamos hoje nas suas mãos as coisas que parecem difíceis para nós. Em nome de Jesus, amém.', next: 'Amanhã no caminho: Gabriel visita Maria em Nazaré, com a notícia mais importante de todas.' },
    { m: 12, d: 11, story: 'natal1', talk: 'Maria disse "sim" para Deus. Como podemos dizer "sim" para Deus no nosso dia a dia?', learn: 'Maria confiou na promessa de Deus: o seu Filho se chamaria Jesus.', verse: 'Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra.', vref: 'Lucas 1:38', pray: 'Querido Deus, obrigado por Jesus, o Salvador. Ajuda a gente a confiar no Senhor como Maria confiou, e a dizer sim para o Senhor todos os dias. Em nome de Jesus, amém.', next: 'Amanhã no caminho: Maria faz uma viagem pelas montanhas, e um bebê pula de alegria.' },
    { m: 12, d: 12, story: 'adv13', talk: 'Quem você pode visitar ou chamar nesta semana para levar uma alegria?', learn: 'Antes mesmo de nascer, Jesus já trazia alegria.', verse: 'Bem-aventurada a que creu.', vref: 'Lucas 1:45', pray: 'Jesus, obrigado pela alegria que o Senhor traz. Ajuda a gente a levar essa alegria para outras pessoas, visitando, ajudando e contando de ti. Amém.', next: 'Amanhã no caminho: Maria canta uma canção que a gente pode cantar também.' },
    { m: 12, d: 13, story: 'adv14', talk: 'Pelo que vocês querem agradecer a Deus hoje? Façam uma oração de louvor, como Maria.', learn: 'Maria louvou a Deus, o seu Salvador, que olha para os humildes.', verse: 'A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus meu Salvador.', vref: 'Lucas 1:46-47', pray: 'Senhor, como Maria, queremos contar como o Senhor é grande. Obrigado por cuidar de nós e por Jesus, o nosso Salvador. Em nome de Jesus, amém.', next: 'Amanhã no caminho: o bebê de Isabel nasce, e todo mundo quer saber o nome dele.' },
    { m: 12, d: 14, story: 'adv15', talk: 'Vocês sabem o que o seu nome quer dizer? Peça para alguém contar a história do seu nome.', learn: 'Deus cumpriu a promessa e mandou João, que prepararia o caminho de Jesus.', verse: 'O seu nome é João.', vref: 'Lucas 1:63', pray: 'Deus, obrigado porque o Senhor é bondoso e cumpre o que promete. Ajuda a gente a obedecer ao Senhor, como Zacarias e Isabel. Em nome de Jesus, amém.', next: 'Amanhã no caminho: Zacarias, que ficou mudo tanto tempo, faz uma canção sobre o sol que nasce.' },
    { m: 12, d: 15, story: 'adv16', talk: 'O que ajuda você quando está com medo do escuro? Jesus é a luz que vem do alto.', learn: 'Jesus é a luz que veio do alto para nos guiar no caminho da paz.', verse: 'Bendito o Senhor Deus de Israel, porque visitou e remiu o seu povo.', vref: 'Lucas 1:68', pray: 'Senhor, obrigado porque o Senhor veio nos visitar em Jesus. Ilumina o nosso caminho e guia os nossos pés no caminho da paz. Em nome de Jesus, amém.', next: 'Amanhã no caminho: José tem um sonho, e precisa tomar uma decisão.' },
    { m: 12, d: 16, story: 'natal2', talk: 'José obedeceu a Deus mesmo sem entender tudo. Quando é difícil obedecer?', learn: 'José confiou em Deus e obedeceu ao que Ele mandou.', verse: 'Ele salvará o seu povo dos seus pecados.', vref: 'Mateus 1:21', pray: 'Deus, quando a gente não entender tudo, ajuda a gente a confiar e obedecer como José. Obrigado por Jesus, que veio nos salvar. Em nome de Jesus, amém.', next: 'Amanhã no caminho: o homem que Deus escolheu para ser o pai de Jesus aqui na terra.' },
    { m: 12, d: 17, story: 'adv17', talk: 'Quem cuida de você todos os dias? Agradeça a Deus por essa pessoa e, se puder, dê um abraço nela hoje.', learn: 'Deus deu a Jesus um pai aqui na terra, José, que cuidou dele com amor.', verse: 'E crescia Jesus em sabedoria, e em estatura, e em graça para com Deus e os homens.', vref: 'Lucas 2:52', pray: 'Pai nosso que estás no céu, obrigado pelos pais e por quem cuida de nós. Abençoa e protege a nossa família, como o Senhor protegeu a família de Jesus. Em nome de Jesus, amém.', next: 'Amanhã no caminho: uma ordem do imperador, uma viagem longa e um burrinho. Rumo a Belém!' },
    { m: 12, d: 18, story: 'natal3', talk: 'Você já fez uma viagem longa? Como foi esperar para chegar?', learn: 'Até a ordem de um imperador serviu ao plano de Deus: Jesus nasceria em Belém.', verse: 'O Senhor guardará a tua entrada e a tua saída.', vref: 'Salmo 121:8', pray: 'Senhor, obrigado porque o Senhor cuida de cada detalhe. Guarda a nossa família quando a gente sai e quando a gente volta, como guardou Maria e José. Em nome de Jesus, amém.', next: 'Amanhã no caminho: por que Jesus nasceu exatamente naquela época? Deus tinha um tempo certo.' },
    { m: 12, d: 19, story: 'adv18', talk: 'O que quer dizer ser filho de Deus? Como é bom fazer parte da família dele!', learn: 'No tempo certo, Deus enviou seu Filho para nos fazer filhos de Deus.', verse: 'Mas, vindo a plenitude dos tempos, Deus enviou seu Filho.', vref: 'Gálatas 4:4', pray: 'Pai, obrigado porque o tempo do Senhor é perfeito. Obrigado por enviar Jesus e por nos receber na sua família. Ensina a gente a esperar no Senhor. Em nome de Jesus, amém.', next: 'Amanhã no caminho: voltamos lá para antes do jardim, antes de tudo existir.' },
    { m: 12, d: 20, story: 'adv19', talk: 'Antes de você nascer, você já existia? E Jesus? Ele sempre existiu, porque Ele é Deus!', learn: 'Jesus já existia antes de nascer em Belém: Ele é Deus desde sempre.', verse: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.', vref: 'João 1:1', pray: 'Jesus, o Senhor criou todas as coisas e é a luz do mundo. Obrigado por vir até nós. Brilha no nosso coração e espanta todo escuro. Amém.', next: 'Amanhã no caminho: o Criador de tudo se faz pequeno e vem morar com a gente.' },
    { m: 12, d: 21, story: 'adv20', talk: 'Jesus foi bebê, criança e adulto como nós. Do que você mais gosta em saber que Ele sabe como é ser criança?', learn: 'O Filho de Deus se fez gente como nós e veio morar entre nós.', verse: 'E o Verbo se fez carne, e habitou entre nós.', vref: 'João 1:14', pray: 'Jesus, obrigado por vir morar com a gente. Queremos receber o Senhor no nosso coração e na nossa casa. Ensina a gente a ser cheio de graça e verdade. Amém.', next: 'Amanhã no caminho: o Rei que deixou o trono e escolheu ser servo.' },
    { m: 12, d: 22, story: 'adv21', talk: 'Como podemos ser humildes e servir uns aos outros, como Jesus fez?', learn: 'Jesus, o Rei, se fez pequeno por amor a nós.', verse: 'De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus.', vref: 'Filipenses 2:5', pray: 'Jesus, o Senhor era Rei e escolheu ser servo por amor a nós. Ensina a gente a ser humilde e a servir as pessoas com alegria, como o Senhor. Amém.', next: 'Amanhã no caminho: o nome Belém esconde um segredo. Tem a ver com pão!' },
    { m: 12, d: 23, story: 'adv22', talk: 'Qual é o seu pão ou comida preferida? Jesus é ainda melhor: Ele é o pão que sustenta o nosso coração.', learn: 'Jesus nasceu em Belém, a "casa do pão", e Ele é o Pão da vida.', verse: 'Eu sou o pão da vida.', vref: 'João 6:35', pray: 'Jesus, o Senhor é o pão da vida. Obrigado pela comida da nossa mesa e por alimentar o nosso coração. Faz a gente ter fome do Senhor. Amém.', next: 'Amanhã no caminho: a noite mais esperada de todas. Chegamos a Belém!' },
    { m: 12, d: 24, story: 'natal4', talk: 'Por que o Rei dos reis nasceu num lugar tão simples?', learn: 'O Salvador nasceu num lugar humilde, para ficar perto de todos nós.', verse: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.', vref: 'João 3:16', pray: 'Querido Deus, obrigado por esta noite tão especial. Obrigado por cumprir todas as suas promessas e por nos dar Jesus. Que Ele tenha lugar no nosso coração. Em nome de Jesus, amém.', next: 'Amanhã é Natal! Uns pastores no campo vão receber a notícia mais alegre do mundo.' },
    { m: 12, d: 25, story: 'natal5', talk: 'Feliz Natal! Qual é o maior presente que Deus nos deu? Agradeçam juntos por Jesus.', learn: 'Hoje é dia de alegria: nasceu o Salvador, que é Cristo, o Senhor!', verse: 'Na cidade de Davi, vos nasceu hoje o Salvador, que é Cristo, o Senhor.', vref: 'Lucas 2:11', pray: 'Jesus, feliz aniversário! Obrigado por vir como nosso Salvador. Enche a nossa família de alegria e ajuda a gente a contar essa boa notícia para todo mundo. Amém.', next: 'O caminho chegou a Belém! Ainda tem três histórias de Natal para continuar: os pastores, a estrela dos magos e os presentes para o Rei.' }
  ],
  stories: [
    {
      id: 'adv1', natal: 1, name: 'A promessa no jardim', icon: '🌿', sticker: '🌿', scene: 'jardim', ref: 'Gênesis 3:15',
      scenes: [
        { art: '🌳🌸', bg: 'jardim', fx: 'brilho', text: 'Hoje começa o nosso Caminho até Belém! E ele começa lá no início de tudo. Deus criou o céu, a terra, os rios, os animais e as flores. E viu que tudo era muito bom.', r: 'Gênesis 1:31; 2:8' },
        { art: '🌿🦋', bg: 'jardim', text: 'Deus plantou um jardim lindo, chamado Éden, e colocou ali o primeiro homem, Adão, e a primeira mulher, Eva. Eles cuidavam do jardim e viviam pertinho de Deus.', r: 'Gênesis 2:8, 15' },
        { art: '💛🌳', bg: 'jardim', fx: 'coracoes', text: 'Deus deu tudo para eles com amor. Só pediu uma coisa: que não comessem do fruto de uma árvore. Era um jeito de mostrar que confiavam nele.', r: 'Gênesis 2:16-17' },
        { art: '🐍🍎', bg: 'jardim', text: 'Mas apareceu uma serpente muito esperta, e ela enganou Eva. Disse que Deus estava escondendo algo bom deles. Era mentira!', r: 'Gênesis 3:1-5' },
        { art: '🍎😟', bg: 'jardim', fx: 'vento', text: 'Eva comeu do fruto e deu a Adão, e ele também comeu. Eles desobedeceram a Deus. Na mesma hora, sentiram vergonha e medo.', r: 'Gênesis 3:6-7' },
        { art: '🌳🙈', bg: 'jardim', fx: 'vento', text: 'Quando ouviram Deus andando no jardim, Adão e Eva se esconderam atrás das árvores. O pecado tinha estragado a amizade com Deus.', r: 'Gênesis 3:8-10' },
        { art: '🌧️💔', bg: 'aurora', fx: 'chuva', text: 'O pecado é quando a gente desobedece a Deus. Ele entrou no mundo naquele dia, e trouxe tristeza, dor e morte. Nós também erramos e precisamos de ajuda.', r: 'Romanos 5:12' },
        { art: '✨💛', bg: 'aurora', fx: 'luz', text: 'Mas Deus não desistiu deles. Ele foi procurar Adão e Eva! E, ali mesmo, fez uma promessa maravilhosa, a primeira promessa do Natal.', r: 'Gênesis 3:9, 15' },
        { art: '👣🐍', bg: 'aurora', fx: 'brilho', text: 'Deus disse que um dia nasceria um menino, um descendente da mulher, que esmagaria a cabeça da serpente. Ele venceria o mal de uma vez por todas.', r: 'Gênesis 3:15' },
        { art: '🧥💛', bg: 'jardim', fx: 'coracoes', text: 'Antes de Adão e Eva saírem do jardim, Deus fez roupas para eles. Mesmo quando erramos, Deus continua cuidando de nós.', r: 'Gênesis 3:21' },
        { art: '👣⭐', bg: 'noite', fx: 'estrelas', text: 'A partir daquele dia, todo o povo de Deus ficou esperando o menino prometido. Esse caminho de espera é o Advento, e ele vai nos levar até Belém!', r: 'Gálatas 4:4' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'O menino prometido é Jesus! Ele nasceu, viveu sem pecado, morreu na cruz e ressuscitou para vencer o pecado e o mal. Deus sempre cumpre o que promete.', r: '1 João 3:8' }
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
        { art: '👣🌿', bg: 'aurora', fx: 'luz', text: 'Ontem, no jardim, Deus prometeu um menino que venceria o mal. Muitos e muitos anos se passaram, e o mundo ficou cheio de gente. Mas Deus não tinha esquecido!', r: 'Gênesis 3:15' },
        { art: '🏙️👴', bg: 'cidade', text: 'Numa cidade chamada Ur vivia um homem chamado Abrão, com sua esposa, Sarai. Um dia, Deus falou com ele.', r: 'Gênesis 11:31; 12:1' },
        { art: '🗣️✨', bg: 'aurora', fx: 'luz', text: 'Deus disse: "Sai da tua terra e da casa de teu pai, e vai para a terra que eu te mostrarei." Abrão nem sabia para onde ia!', r: 'Gênesis 12:1' },
        { art: '⛺🐪', bg: 'deserto', fx: 'vento', text: 'Mas Abrão confiou em Deus e obedeceu. Arrumou as tendas, os camelos, as ovelhas e a família, e partiu pela estrada.', r: 'Gênesis 12:4-5' },
        { art: '💛👨‍👩‍👧', bg: 'aurora', fx: 'coracoes', text: 'No caminho, Deus fez uma promessa enorme: "Em ti serão benditas todas as famílias da terra." Todas mesmo, até a sua família!', r: 'Gênesis 12:2-3' },
        { art: '👵⏳', bg: 'deserto', text: 'Só tinha um problema: Abrão e Sarai eram bem velhinhos e não tinham filhos. Como a família deles ia abençoar o mundo inteiro?', r: 'Gênesis 15:2-3' },
        { art: '🌌⭐', bg: 'noite', fx: 'estrelas', text: 'Numa noite, Deus levou Abrão para fora da tenda e disse: "Olha agora para os céus, e conta as estrelas." Abrão olhou, olhou... eram estrelas demais!', r: 'Gênesis 15:5' },
        { art: '⭐🙏', bg: 'noite', fx: 'estrelas', text: '"Assim será a tua descendência", disse Deus. E Abrão creu no Senhor. Deus até mudou o nome dele para Abraão, que quer dizer "pai de muitos povos".', r: 'Gênesis 15:5-6' },
        { art: '👶🎉', bg: 'deserto', fx: 'coracoes', text: 'E Deus cumpriu a promessa: Sara, já velhinha, teve um bebê chamado Isaque! O nome dele lembra riso, porque a família ficou muito feliz.', r: 'Gênesis 21:1-3' },
        { art: '🐑⛰️', bg: 'monte', fx: 'luz', text: 'Mais tarde, num monte, Abraão disse a Isaque: "Deus proverá para si o cordeiro." E Deus mandou um carneiro no lugar de Isaque. Isso apontava para algo ainda maior.', r: 'Gênesis 22:8, 13' },
        { art: '🌳👨‍👩‍👧‍👦', bg: 'campo', text: 'Da família de Abraão nasceu Isaque, depois Jacó, e muitos outros. Geração depois de geração, o caminho da promessa continuava.', r: 'Mateus 1:1-2' },
        { art: '🌍✝️', bg: 'aurora', fx: 'luz', text: 'Jesus nasceu da família de Abraão. Ele é o Cordeiro de Deus que tira o pecado do mundo. Por meio de Jesus, a bênção chega a todas as famílias, e também à nossa!', r: 'Gálatas 3:8, 14; João 1:29' }
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
        { art: '👣⭐', bg: 'noite', fx: 'estrelas', text: 'Lembra das estrelas de Abraão? A família dele cresceu tanto que virou um povo enorme, o povo de Israel. Agora eles estavam viajando pelo deserto, rumo à terra prometida.', r: 'Gênesis 15:5' },
        { art: '⛺⛺⛺', bg: 'deserto', text: 'O povo acampou perto das terras de Moabe. Eram tantas tendas que pareciam um mar de tendas no deserto!', r: 'Números 22:1' },
        { art: '👑😠', bg: 'palacio', text: 'O rei de Moabe, chamado Balaque, ficou com medo daquele povo tão grande. Então chamou um homem chamado Balaão e pediu: "Vem e amaldiçoa esse povo para mim."', r: 'Números 22:2-6' },
        { art: '🫏🛤️', bg: 'deserto', fx: 'vento', text: 'Balaão subiu na sua jumenta e foi pela estrada. Mas Deus não queria que ele amaldiçoasse o seu povo.', r: 'Números 22:21-22' },
        { art: '🫏🗣️', bg: 'deserto', fx: 'brilho', text: 'No caminho, a jumenta parou e não quis andar mais. E então aconteceu algo incrível: Deus fez a jumenta falar! Balaão levou o maior susto.', r: 'Números 22:28' },
        { art: '⛰️👀', bg: 'monte', text: 'Balaão subiu num monte e olhou para as tendas de Israel. Abriu a boca para amaldiçoar, mas só conseguiu abençoar. Ninguém pode amaldiçoar quem Deus abençoou!', r: 'Números 23:7-8' },
        { art: '🙏✨', bg: 'monte', fx: 'luz', text: 'Balaão disse: "Deus não é homem, para que minta." Quando Deus promete, Ele cumpre. Sempre!', r: 'Números 23:19' },
        { art: '🌌⭐', bg: 'noite', fx: 'estrelas', text: 'Então Deus deu a Balaão uma visão do futuro, bem lá longe: "Uma estrela procederá de Jacó e um cetro subirá de Israel."', r: 'Números 24:17' },
        { art: '⭐👑', bg: 'noite', fx: 'luz', text: 'A estrela e o cetro eram sinais de um Rei. Um Rei muito especial ia nascer da família de Jacó, neto de Abraão. Mas não seria logo: "não agora", disse Balaão.', r: 'Números 24:17' },
        { art: '😤👑', bg: 'palacio', text: 'O rei Balaque ficou muito bravo e mandou Balaão embora. O plano dele não deu certo. O plano de Deus sempre dá.', r: 'Números 24:10-11' },
        { art: '🐪⭐', bg: 'deserto', fx: 'estrelas', text: 'Muitos e muitos anos depois, uns sábios do Oriente viram uma estrela no céu e saíram procurando o Rei que tinha nascido. Vamos encontrar com eles no fim do nosso caminho!', r: 'Mateus 2:1-2' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Esse Rei é Jesus. Ele mesmo disse: "Eu sou a resplandecente estrela da manhã." Jesus é a luz que Deus prometeu.', r: 'Apocalipse 22:16' }
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
        { art: '👣👑', bg: 'aurora', fx: 'luz', text: 'Ontem vimos que um Rei ia nascer da família de Jacó. O povo de Israel chegou à terra prometida e, depois de muito tempo, pediu um rei.', r: 'Números 24:17' },
        { art: '🐑🌾', bg: 'campo', text: 'Em Belém, um menino chamado Davi cuidava das ovelhas do pai. Ele era o mais novo da família, e ninguém imaginava que ele seria rei.', r: '1 Samuel 16:11' },
        { art: '🎵🐑', bg: 'campo', fx: 'coracoes', text: 'Enquanto cuidava das ovelhas, Davi tocava harpa e cantava para Deus. Ele escreveu: "O Senhor é o meu pastor, nada me faltará."', r: 'Salmo 23:1' },
        { art: '🫒✨', bg: 'campo', fx: 'luz', text: 'Deus mandou o profeta Samuel a Belém e escolheu Davi para ser rei. As pessoas olham por fora, mas Deus olha o coração.', r: '1 Samuel 16:7, 13' },
        { art: '🪨💪', bg: 'monte', text: 'Davi confiava tanto em Deus que enfrentou um gigante chamado Golias só com uma funda e uma pedrinha. E Deus deu a vitória!', r: '1 Samuel 17:45, 50' },
        { art: '👑🏰', bg: 'palacio', fx: 'brilho', text: 'Depois de muitos anos, Davi se tornou rei de todo o povo de Israel. Ele morava num palácio em Jerusalém.', r: '2 Samuel 5:3-4' },
        { art: '🏠💭', bg: 'palacio', text: 'Um dia, Davi pensou: "Eu moro numa casa bonita, e a arca de Deus fica numa tenda. Vou construir uma casa para Deus!"', r: '2 Samuel 7:1-2' },
        { art: '🗣️✨', bg: 'noite', fx: 'luz', text: 'Mas, naquela noite, Deus falou com o profeta Natã: "Diga a Davi que eu é que vou construir uma casa para ele." Uma casa que quer dizer família.', r: '2 Samuel 7:4-5, 11' },
        { art: '👑♾️', bg: 'aurora', fx: 'brilho', text: 'Deus prometeu que da família de Davi viria um Rei, e que o reino dele seria firmado para sempre. Para sempre mesmo, sem fim!', r: '2 Samuel 7:12-13, 16' },
        { art: '🙏💛', bg: 'palacio', fx: 'coracoes', text: 'Davi ficou tão emocionado que se sentou diante de Deus e disse: "Quem sou eu, Senhor Deus, para que me tenhas trazido até aqui?"', r: '2 Samuel 7:18' },
        { art: '📜⏳', bg: 'cidade', text: 'Os reis que vieram depois de Davi foram passando, um por um. Alguns foram bons, outros não. Nenhum reinou para sempre. O povo continuou esperando.', r: 'Isaías 9:7' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Até que um anjo disse a Maria: "Deus lhe dará o trono de Davi, seu pai, e o seu reino não terá fim." Jesus é o Rei para sempre, e Ele é bom o tempo todo.', r: 'Lucas 1:32-33' }
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
        { art: '👣👑', bg: 'aurora', fx: 'luz', text: 'Ontem, Deus prometeu a Davi um Rei para sempre. Passaram-se muitos anos, e agora quem reinava em Jerusalém era Acaz, da família de Davi.', r: '2 Samuel 7:16' },
        { art: '⚔️😨', bg: 'cidade', fx: 'vento', text: 'Dois reis inimigos vinham atacar Jerusalém. O rei Acaz e o povo tremiam de medo, como as árvores tremem quando bate o vento.', r: 'Isaías 7:1-2' },
        { art: '👴📜', bg: 'cidade', text: 'Deus mandou o profeta Isaías falar com o rei: "Não temas. Fica tranquilo. Esses reis não vão vencer."', r: 'Isaías 7:3-4' },
        { art: '🙏❓', bg: 'palacio', text: 'Isaías disse: "Pede um sinal a Deus." Mas Acaz não quis. Ele não queria confiar em Deus; preferia pedir ajuda a outros reis.', r: 'Isaías 7:10-12' },
        { art: '✨🎁', bg: 'aurora', fx: 'luz', text: 'Então Isaías disse: "Portanto o mesmo Senhor vos dará um sinal." Era um sinal que Deus mesmo ia dar, um sinal para todos nós.', r: 'Isaías 7:13-14' },
        { art: '🤰💛', bg: 'aurora', fx: 'brilho', text: '"Eis que a virgem conceberá, e dará à luz um filho, e chamará o seu nome Emanuel." Uma moça que nunca tinha se casado teria um filho. Só Deus poderia fazer isso!', r: 'Isaías 7:14' },
        { art: '🔤💛', bg: 'aurora', fx: 'coracoes', text: 'E o nome do menino seria Emanuel. Sabe o que quer dizer? "Deus conosco." Deus mesmo viria ficar com o seu povo.', r: 'Mateus 1:23' },
        { art: '🌙⏳', bg: 'noite', fx: 'estrelas', text: 'O povo guardou essa promessa no coração. Os anos passaram, os reis passaram, e eles continuavam lembrando: um dia virá o Emanuel.', r: 'Isaías 7:14' },
        { art: '🌙💤', bg: 'noite', fx: 'estrelas', text: 'Uns setecentos anos depois, Deus falou com José num sonho e lembrou dessa promessa: Maria teria um filho, e Ele seria o Emanuel.', r: 'Mateus 1:20-23' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Esse menino é Jesus! Em Jesus, Deus não ficou longe, lá no céu. Ele veio morar perto de nós, como um de nós.', r: 'Mateus 1:23' },
        { art: '🏠💛', bg: 'jardim', fx: 'coracoes', text: 'Quando temos medo, como o rei Acaz, podemos lembrar: Jesus disse "Eis que eu estou convosco todos os dias." Deus está com a gente na escola, em casa e de noite também.', r: 'Mateus 28:20' }
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
        { art: '👣💛', bg: 'aurora', fx: 'luz', text: 'Ontem aprendemos o nome Emanuel, Deus conosco. Hoje o profeta Isaías tem mais uma notícia sobre esse menino.', r: 'Isaías 7:14' },
        { art: '🌑😔', bg: 'noite', text: 'Naquele tempo, o povo estava triste. Tinham se afastado de Deus, e era como se andassem no escuro, sem ver o caminho.', r: 'Isaías 9:2' },
        { art: '🏞️🌑', bg: 'noite', fx: 'vento', text: 'A região da Galileia, no norte, era a que mais sofria. Inimigos tinham passado por lá, e as pessoas estavam sem esperança.', r: 'Isaías 9:1' },
        { art: '🌅✨', bg: 'aurora', fx: 'luz', text: 'Mas Isaías anunciou: "O povo que andava em trevas viu uma grande luz." Uma luz ia brilhar justamente ali, na Galileia!', r: 'Isaías 9:2' },
        { art: '😄🎉', bg: 'aurora', fx: 'coracoes', text: 'A tristeza ia virar alegria, como a alegria de quem faz uma grande colheita ou de quem ganha uma festa.', r: 'Isaías 9:3' },
        { art: '🎁💛', bg: 'aurora', fx: 'brilho', text: 'E qual seria o motivo dessa alegria? "Porque um menino nos nasceu, um filho se nos deu." Um presente de Deus!', r: 'Isaías 9:6' },
        { art: '🌟🧭', bg: 'aurora', fx: 'estrelas', text: 'Esse menino teria nomes muito especiais. O primeiro: Maravilhoso, Conselheiro. Ele é maravilhoso e sabe nos ensinar o melhor caminho.', r: 'Isaías 9:6' },
        { art: '💪🛡️', bg: 'aurora', fx: 'luz', text: 'O segundo: Deus Forte. Ele não seria só um homem bom: seria o próprio Deus, forte para salvar.', r: 'Isaías 9:6' },
        { art: '🤗♾️', bg: 'aurora', fx: 'coracoes', text: 'O terceiro: Pai da Eternidade. Ele cuida do seu povo com amor, como um pai, para sempre.', r: 'Isaías 9:6' },
        { art: '🕊️🌿', bg: 'jardim', fx: 'brilho', text: 'E o quarto: Príncipe da Paz. Ele traz paz com Deus e paz no coração. E o seu reino nunca teria fim.', r: 'Isaías 9:6-7' },
        { art: '🏞️⭐', bg: 'galileia', fx: 'luz', text: 'Sabe onde Jesus cresceu e começou a ensinar? Na Galileia! A luz brilhou exatamente onde Deus tinha prometido.', r: 'Mateus 4:13-16' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Jesus disse: "Eu sou a luz do mundo; quem me segue não andará em trevas." Quando estamos tristes ou com medo do escuro, Jesus é a nossa luz.', r: 'João 8:12' }
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
        { art: '👣💛', bg: 'aurora', fx: 'luz', text: 'Ontem, Isaías falou dos quatro nomes maravilhosos do menino prometido. Hoje ele usa uma figura bem diferente: uma árvore.', r: 'Isaías 9:6' },
        { art: '🌳👑', bg: 'campo', text: 'Lembra do rei Davi? O pai dele se chamava Jessé. A família de Jessé e Davi era como uma árvore grande e forte, cheia de galhos: os reis de Israel.', r: '1 Samuel 16:1' },
        { art: '😔🏚️', bg: 'cidade', fx: 'vento', text: 'Mas o povo desobedeceu a Deus muitas vezes. Os reis se afastaram do Senhor, e inimigos vieram, destruíram Jerusalém e levaram o povo para longe.', r: '2 Reis 25:9-11' },
        { art: '🪵🪓', bg: 'campo', fx: 'vento', text: 'Era como se aquela árvore grande tivesse sido cortada. Sobrou só um toco no chão. Parecia o fim da família de Davi.', r: 'Isaías 6:13' },
        { art: '😢❓', bg: 'noite', text: 'O povo chorava e pensava: "E agora? E a promessa do Rei para sempre? Será que Deus esqueceu?"', r: 'Salmo 137:1' },
        { art: '🌱✨', bg: 'aurora', fx: 'luz', text: 'Mas Isaías já tinha anunciado: "Brotará um rebento do tronco de Jessé." Do toco cortado ia nascer um brotinho verde!', r: 'Isaías 11:1' },
        { art: '🕊️💛', bg: 'aurora', fx: 'brilho', text: 'Sobre esse brotinho, o Rei prometido, ia repousar o Espírito do Senhor: espírito de sabedoria, de entendimento, de conselho e de força.', r: 'Isaías 11:2' },
        { art: '⚖️💛', bg: 'palacio', text: 'Esse Rei seria justo. Ele não julgaria só pela aparência, mas cuidaria dos pobres e dos pequenos com bondade.', r: 'Isaías 11:3-4' },
        { art: '🐺🐑', bg: 'campo', fx: 'coracoes', text: 'E no reino dele haveria uma paz tão grande que "morará o lobo com o cordeiro", e uma criancinha conduziria os animais. Imagina só!', r: 'Isaías 11:6' },
        { art: '🌍💧', bg: 'mar', fx: 'ondas', text: 'A terra inteira ficaria cheia do conhecimento do Senhor, como as águas cobrem o mar.', r: 'Isaías 11:9' },
        { art: '🌱⭐', bg: 'aurora', fx: 'luz', text: 'Muito tempo depois, da família de Jessé e Davi, quase esquecida e sem palácio, nasceu um menino em Belém. O brotinho tinha nascido!', r: 'Mateus 1:6, 16' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Esse brotinho é Jesus. Quando parece que não há mais esperança, Deus faz nascer vida nova. Jesus traz esperança para nós também.', r: 'Romanos 15:12' }
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
        { art: '👣🌱', bg: 'aurora', fx: 'luz', text: 'Já sabemos que o Rei prometido viria da família de Davi. Mas onde Ele ia nascer? Deus contou isso também!', r: 'Isaías 11:1' },
        { art: '🏘️🌾', bg: 'campo', text: 'Belém era uma cidadezinha pequena, perto de Jerusalém, cercada de campos de trigo e cevada. Lá viveram Rute e Boaz, os bisavós de Davi.', r: 'Rute 1:22; 2:3' },
        { art: '🐑🎵', bg: 'campo', fx: 'coracoes', text: 'E foi em Belém que o menino Davi cresceu cuidando das ovelhas. Belém era a cidade de Davi.', r: '1 Samuel 16:1, 11' },
        { art: '👴📜', bg: 'cidade', text: 'Uns setecentos anos antes de Jesus nascer, Deus falou com um profeta chamado Miqueias.', r: 'Miqueias 1:1' },
        { art: '😔🏙️', bg: 'cidade', fx: 'vento', text: 'Miqueias via que os chefes do povo eram injustos e não amavam a Deus. Ele avisou que viriam tempos difíceis.', r: 'Miqueias 3:9-12' },
        { art: '✨🏘️', bg: 'aurora', fx: 'luz', text: 'Mas também trouxe uma promessa: "E tu, Belém Efrata, posto que pequena entre os milhares de Judá, de ti me sairá o que governará em Israel."', r: 'Miqueias 5:2' },
        { art: '♾️⭐', bg: 'noite', fx: 'estrelas', text: 'E disse mais: esse Governante seria muito antigo, "desde os dias da eternidade". Como um bebê pode ser tão antigo? Porque Ele é Deus!', r: 'Miqueias 5:2' },
        { art: '🐑🧑‍🌾', bg: 'campo', fx: 'coracoes', text: 'E esse Rei cuidaria do povo como um bom pastor, com a força do Senhor. E Ele seria a nossa paz.', r: 'Miqueias 5:4' },
        { art: '👑❓', bg: 'palacio', text: 'Muito tempo depois, quando os magos chegaram perguntando pelo Rei, os sábios de Jerusalém abriram os livros e responderam: "Em Belém de Judeia, porque assim está escrito pelo profeta."', r: 'Mateus 2:4-6' },
        { art: '🫏🛤️', bg: 'campo', fx: 'vento', text: 'E, para que a promessa se cumprisse, Deus fez Maria e José viajarem de Nazaré até Belém. Vamos acompanhar essa viagem daqui a alguns dias!', r: 'Lucas 2:4' },
        { art: '⭐✝️', bg: 'noite', fx: 'luz', text: 'Jesus nasceu em Belém, a cidade pequena. Deus gosta de usar as coisas pequenas e simples. Você pode se sentir pequeno, mas é muito importante para Deus.', r: 'João 7:42' }
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
        { art: '👣🏘️', bg: 'aurora', fx: 'luz', text: 'Já sabemos onde o Rei ia nascer: em Belém. Mas, antes de um rei chegar, alguém precisa preparar o caminho.', r: 'Miqueias 5:2' },
        { art: '👑🛣️', bg: 'deserto', text: 'Antigamente, quando um rei ia visitar uma cidade, mandavam um mensageiro na frente. O povo limpava a estrada, tirava as pedras e tapava os buracos.', r: 'Isaías 40:3' },
        { art: '😢⛓️', bg: 'cidade', fx: 'vento', text: 'O povo de Deus estava longe de casa, triste por causa dos seus pecados. Mas Deus mandou Isaías dizer: "Consolai, consolai o meu povo."', r: 'Isaías 40:1-2' },
        { art: '🗣️🏜️', bg: 'deserto', fx: 'vento', text: 'E Isaías ouviu: "Voz do que clama no deserto: Preparai o caminho do Senhor; endireitai no ermo vereda a nosso Deus."', r: 'Isaías 40:3' },
        { art: '⛰️🛤️', bg: 'monte', text: 'Todo vale seria levantado e todo monte seria abaixado. O caminho ficaria reto e plano, pronto para o Rei passar.', r: 'Isaías 40:4' },
        { art: '✨🌍', bg: 'aurora', fx: 'luz', text: '"E a glória do Senhor se manifestará, e toda a carne juntamente a verá." Deus mesmo estava vindo!', r: 'Isaías 40:5' },
        { art: '🌸🍂', bg: 'jardim', fx: 'vento', text: 'Isaías também disse: "Seca-se a erva, e caem as flores, mas a palavra de nosso Deus subsiste eternamente." As promessas de Deus não murcham!', r: 'Isaías 40:8' },
        { art: '🐑🤗', bg: 'campo', fx: 'coracoes', text: 'E como Deus viria? Como um pastor que carrega os cordeirinhos no colo e guia as ovelhas com carinho.', r: 'Isaías 40:11' },
        { art: '🐫🏜️', bg: 'deserto', text: 'Centenas de anos depois, apareceu no deserto um homem chamado João, vestido com pelo de camelo, comendo gafanhotos e mel silvestre.', r: 'Mateus 3:1-4' },
        { art: '🗣️💧', bg: 'mar', fx: 'ondas', text: 'João dizia: "Arrependei-vos, porque é chegado o Reino dos céus!" Ele era a voz no deserto. Daqui a alguns dias vamos ver como ele nasceu!', r: 'Mateus 3:2-3' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Quando Jesus chegou, João apontou para Ele e disse: "Eis o Cordeiro de Deus, que tira o pecado do mundo." Jesus é o Rei que veio pelo caminho preparado.', r: 'João 1:29' },
        { art: '💛🏠', bg: 'jardim', fx: 'coracoes', text: 'E nós? No Advento, preparamos o coração para Jesus: pedimos perdão, tiramos as pedras da briga e abrimos espaço para Ele.', r: 'Lucas 3:4' }
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
        { art: '👣🗣️', bg: 'aurora', fx: 'luz', text: 'Ontem ouvimos a voz no deserto. Hoje encontramos o último profeta do Antigo Testamento, chamado Malaquias.', r: 'Isaías 40:3' },
        { art: '🏛️😕', bg: 'cidade', text: 'O povo já tinha voltado para casa e reconstruído o templo. Mas o coração deles estava frio: davam a Deus as sobras e reclamavam muito.', r: 'Malaquias 1:6; 3:7' },
        { art: '💬❓', bg: 'cidade', fx: 'vento', text: 'Eles até diziam: "Onde está o Deus do juízo?" Era como se achassem que Deus não ia fazer mais nada.', r: 'Malaquias 2:17' },
        { art: '📯✨', bg: 'aurora', fx: 'luz', text: 'Mas Deus respondeu: "Eis que eu envio o meu anjo, que preparará o caminho diante de mim; e de repente virá ao seu templo o Senhor."', r: 'Malaquias 3:1' },
        { art: '🔥💛', bg: 'aurora', fx: 'brilho', text: 'Deus ia limpar o coração do povo, como quem limpa o ouro no fogo para que ele brilhe.', r: 'Malaquias 3:2-3' },
        { art: '🌅☀️', bg: 'aurora', fx: 'luz', text: 'E Deus fez uma promessa linda: "Mas para vós, que temeis o meu nome, nascerá o sol da justiça, e cura trará nas suas asas."', r: 'Malaquias 4:2' },
        { art: '🐄🎉', bg: 'campo', fx: 'coracoes', text: '"E saireis e crescereis como os bezerros do cevadouro." Sabe aqueles bezerrinhos que pulam de alegria quando saem para o pasto? Assim seria!', r: 'Malaquias 4:2' },
        { art: '🗣️👨‍👦', bg: 'cidade', text: 'Malaquias disse que viria um mensageiro como o profeta Elias, que faria o coração dos pais se voltar para os filhos, e o dos filhos para os pais.', r: 'Malaquias 4:5-6' },
        { art: '🤫⏳', bg: 'noite', fx: 'estrelas', text: 'E então... silêncio. Durante uns quatrocentos anos, Deus não mandou nenhum profeta novo. As famílias esperavam, esperavam...', r: 'Malaquias 4:6' },
        { art: '🌙🕯️', bg: 'noite', fx: 'estrelas', text: 'Imagina esperar tanto tempo! Mas quem confiava em Deus continuava lendo as promessas e orando. Esperar em Deus é bom.', r: 'Lamentações 3:25-26' },
        { art: '🌅⭐', bg: 'aurora', fx: 'luz', text: 'Até que um dia, no templo, Deus quebrou o silêncio. O mensageiro como Elias ia nascer. Isso é a história de amanhã!', r: 'Lucas 1:17' },
        { art: '☀️✝️', bg: 'aurora', fx: 'luz', text: 'Jesus é o Sol da justiça. Assim como o sol espanta a noite, Jesus espanta o medo, cura e traz alegria. Deus nunca esquece o que prometeu.', r: 'Lucas 1:78-79' }
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
        { art: '👣☀️', bg: 'aurora', fx: 'luz', text: 'Depois de quatrocentos anos de silêncio, a história do Natal começa a acontecer de verdade! Vamos a Jerusalém, no tempo do rei Herodes.', r: 'Malaquias 4:2' },
        { art: '👴👵', bg: 'cidade', text: 'Ali vivia um sacerdote chamado Zacarias, com sua esposa, Isabel. Os dois amavam a Deus e obedeciam aos seus mandamentos.', r: 'Lucas 1:5-6' },
        { art: '😢🙏', bg: 'cidade', text: 'Mas eles estavam tristes, porque não tinham filhos. E agora já eram bem velhinhos. Mesmo assim, continuavam orando.', r: 'Lucas 1:7' },
        { art: '🏛️🎲', bg: 'palacio', text: 'Havia muitos sacerdotes, e eles faziam um sorteio para ver quem entraria no lugar santo do templo. Naquele dia, o escolhido foi Zacarias!', r: 'Lucas 1:8-9' },
        { art: '🕯️🌫️', bg: 'palacio', fx: 'brilho', text: 'Zacarias entrou para queimar o incenso, que subia como uma fumacinha cheirosa, como as orações que sobem a Deus. Lá fora, o povo orava.', r: 'Lucas 1:9-10' },
        { art: '✨😨', bg: 'palacio', fx: 'luz', text: 'De repente, apareceu uma luz ao lado do altar: era um anjo do Senhor! Zacarias ficou muito assustado.', r: 'Lucas 1:11-12' },
        { art: '💛👶', bg: 'palacio', fx: 'coracoes', text: 'O anjo disse: "Zacarias, não temas, porque a tua oração foi ouvida, e Isabel, tua mulher, dará à luz um filho, e lhe porás o nome de João."', r: 'Lucas 1:13' },
        { art: '🎉🗣️', bg: 'aurora', fx: 'brilho', text: 'O menino traria muita alegria. Ele seria cheio do Espírito Santo e prepararia o povo para o Senhor, como Elias. Era a voz no deserto!', r: 'Lucas 1:14-17' },
        { art: '🤔❓', bg: 'palacio', text: 'Mas Zacarias não acreditou. Perguntou: "Como vou saber disso? Eu sou velho, e minha mulher também."', r: 'Lucas 1:18' },
        { art: '📯🌟', bg: 'palacio', fx: 'luz', text: 'O anjo respondeu: "Eu sou Gabriel, que assisto diante de Deus, e fui enviado a falar-te e dar-te estas alegres novas."', r: 'Lucas 1:19' },
        { art: '🤐⏳', bg: 'palacio', text: 'Por não ter acreditado, Zacarias ficou mudo até o menino nascer. Quando saiu, só conseguia fazer sinais com as mãos!', r: 'Lucas 1:20-22' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'João ia preparar o caminho, e Jesus era Aquele que vinha depois dele. Deus ouve as nossas orações, até as que fazemos há muito tempo.', r: 'Lucas 1:76' }
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
        { art: '👣🕯️', bg: 'aurora', fx: 'luz', text: 'Ontem, no templo, Gabriel anunciou que Zacarias e Isabel teriam um filho. E Zacarias ficou mudinho! Agora ele volta para casa.', r: 'Lucas 1:13' },
        { art: '🏡⛰️', bg: 'monte', text: 'Zacarias e Isabel moravam numa cidade nas montanhas da Judeia. Quando terminou o seu trabalho no templo, ele foi para casa.', r: 'Lucas 1:23, 39' },
        { art: '✍️😮', bg: 'monte', text: 'Imagina Zacarias tentando contar tudo para Isabel sem conseguir falar! Talvez ele tenha escrito a mensagem do anjo.', r: 'Lucas 1:22' },
        { art: '🤰💛', bg: 'monte', fx: 'coracoes', text: 'E aconteceu exatamente como Deus disse: Isabel ficou grávida! Na sua velhice, ia ter um bebê.', r: 'Lucas 1:24' },
        { art: '🏠🌿', bg: 'jardim', text: 'Isabel ficou em casa por cinco meses, cuidando de si e do bebê que crescia dentro dela, guardando no coração o que Deus estava fazendo.', r: 'Lucas 1:24' },
        { art: '🙏😊', bg: 'jardim', fx: 'brilho', text: 'Ela dizia: "Assim me fez o Senhor, nos dias em que atentou em mim." Isabel sabia que aquele bebê era um presente de Deus.', r: 'Lucas 1:25' },
        { art: '😢➡️😄', bg: 'aurora', fx: 'coracoes', text: 'Por muitos anos, as pessoas olharam para ela com pena, porque não tinha filhos. Mas Deus tirou essa tristeza e lhe deu alegria.', r: 'Lucas 1:25' },
        { art: '🌟📜', bg: 'noite', fx: 'estrelas', text: 'Lembra de Abraão e Sara, que também eram velhinhos? Naquela época Deus perguntou: "Haveria coisa alguma difícil ao Senhor?"', r: 'Gênesis 18:14' },
        { art: '📯🏡', bg: 'galileia', fx: 'luz', text: 'E, no sexto mês da gravidez de Isabel, Deus mandou o anjo Gabriel de novo, agora a uma cidadezinha chamada Nazaré, para falar com uma parente de Isabel.', r: 'Lucas 1:26, 36' },
        { art: '✨💬', bg: 'aurora', fx: 'luz', text: 'Gabriel contou a essa moça que Isabel estava esperando um bebê, e disse uma frase que vale a pena guardar: "Porque para Deus nada é impossível."', r: 'Lucas 1:36-37' },
        { art: '🌙🙏', bg: 'noite', fx: 'estrelas', text: 'Isabel esperava com fé. Esperar com fé é continuar confiando, mesmo antes de ver tudo acontecer.', r: 'Lucas 1:45' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'E logo, logo, Deus ia fazer o maior milagre de todos: o seu próprio Filho ia nascer. Para Deus nada é impossível!', r: 'Lucas 1:37' }
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
        { art: '👣💛', bg: 'aurora', fx: 'luz', text: 'Ontem Maria disse sim a Deus. E o anjo tinha contado que Isabel, sua parente, também ia ter um bebê. Maria não quis esperar!', r: 'Lucas 1:38' },
        { art: '🎒🛤️', bg: 'monte', fx: 'vento', text: 'Logo depois, Maria arrumou suas coisas e foi depressa para as montanhas da Judeia, até a cidade onde moravam Zacarias e Isabel.', r: 'Lucas 1:39' },
        { art: '⛰️🌄', bg: 'monte', text: 'Era uma viagem longa, de vários dias, subindo e descendo montanhas. Maria levava no coração a notícia mais linda do mundo.', r: 'Lucas 1:39' },
        { art: '🚪🏡', bg: 'monte', text: 'Quando chegou, Maria entrou na casa de Zacarias e cumprimentou Isabel: "Shalom!", que quer dizer "paz".', r: 'Lucas 1:40' },
        { art: '🤰💫', bg: 'monte', fx: 'brilho', text: 'Assim que Isabel ouviu a voz de Maria, o bebê dentro da barriga dela pulou! E Isabel ficou cheia do Espírito Santo.', r: 'Lucas 1:41' },
        { art: '🗣️💛', bg: 'aurora', fx: 'coracoes', text: 'Isabel exclamou bem alto: "Bendita és tu entre as mulheres, e bendito o fruto do teu ventre!"', r: 'Lucas 1:42' },
        { art: '🙇‍♀️👑', bg: 'aurora', fx: 'luz', text: 'E disse mais: "E de onde me provém isto a mim, que venha visitar-me a mãe do meu Senhor?" Isabel chamou o bebê de Maria de "meu Senhor"!', r: 'Lucas 1:43' },
        { art: '👶🎉', bg: 'monte', fx: 'coracoes', text: '"Pois eis que, ao chegar aos meus ouvidos a voz da tua saudação, a criancinha saltou de alegria no meu ventre." O pequeno João já estava feliz com Jesus!', r: 'Lucas 1:44' },
        { art: '🙏✨', bg: 'aurora', fx: 'brilho', text: '"Bem-aventurada a que creu, pois hão de cumprir-se as coisas que da parte do Senhor lhe foram ditas." Maria acreditou, e Deus ia cumprir.', r: 'Lucas 1:45' },
        { art: '🏡🤗', bg: 'monte', fx: 'coracoes', text: 'Maria ficou com Isabel uns três meses. As duas conversavam, oravam e se ajudavam. Que bom ter alguém para alegrar-se com a gente!', r: 'Lucas 1:56' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Antes mesmo de nascer, Jesus já trazia alegria. E até hoje, onde Jesus chega, chega alegria de verdade.', r: 'Lucas 1:43-44' }
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
        { art: '👣🤗', bg: 'aurora', fx: 'luz', text: 'Ontem, na casa de Isabel, o bebê João pulou de alegria. E Maria ficou tão feliz que começou a cantar!', r: 'Lucas 1:41-44' },
        { art: '🎶💛', bg: 'aurora', fx: 'coracoes', text: 'Maria cantou: "A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus meu Salvador." Engrandecer quer dizer contar como Deus é grande!', r: 'Lucas 1:46-47' },
        { art: '🙇‍♀️👀', bg: 'galileia', text: '"Porque atentou na humildade de sua serva." Maria era uma moça simples de uma cidade pequena. E Deus olhou para ela com amor.', r: 'Lucas 1:48' },
        { art: '👨‍👩‍👧‍👦⏳', bg: 'campo', fx: 'coracoes', text: '"Pois eis que desde agora todas as gerações me chamarão bem-aventurada." Até hoje, dois mil anos depois, lembramos de Maria.', r: 'Lucas 1:48' },
        { art: '💪✨', bg: 'aurora', fx: 'luz', text: '"Porque me fez grandes coisas o Poderoso; e santo é o seu nome." Quem fez grandes coisas foi Deus. Maria louvava a Ele.', r: 'Lucas 1:49' },
        { art: '🤍♾️', bg: 'aurora', fx: 'brilho', text: '"E a sua misericórdia é de geração em geração sobre os que o temem." A bondade de Deus vale para os avós, os pais, as crianças... e os filhos das crianças!', r: 'Lucas 1:50' },
        { art: '👑⬇️', bg: 'palacio', fx: 'vento', text: '"Depôs dos tronos os poderosos, e elevou os humildes." Deus não se impressiona com quem se acha importante. Ele se aproxima de quem é humilde.', r: 'Lucas 1:51-52' },
        { art: '🍞🧺', bg: 'campo', fx: 'coracoes', text: '"Encheu de bens os famintos." Deus cuida de quem precisa e de quem sabe que precisa dele.', r: 'Lucas 1:53' },
        { art: '📜⭐', bg: 'noite', fx: 'estrelas', text: '"Como falou a nossos pais, para com Abraão e a sua posteridade, para sempre." Maria lembrou da promessa a Abraão! Deus estava cumprindo tudo.', r: 'Lucas 1:54-55' },
        { art: '👣✨', bg: 'aurora', fx: 'luz', text: 'Do jardim até Abraão, de Abraão até Davi, de Davi até Maria: o canto de Maria mostra que o caminho todo era um plano de Deus.', r: 'Gênesis 12:3; Lucas 1:55' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Maria chamou Deus de "meu Salvador". Ela também precisava de Jesus, como todos nós. Jesus é o Salvador de quem confia nele.', r: 'Lucas 1:47' },
        { art: '🎵🏠', bg: 'jardim', fx: 'coracoes', text: 'Que tal fazer como Maria? Podemos cantar, agradecer e contar para alguém hoje as coisas boas que Deus fez por nós.', r: 'Salmo 34:3' }
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
        { art: '👣🎶', bg: 'aurora', fx: 'luz', text: 'Ontem Maria cantou para Deus na casa de Isabel. Depois de três meses, ela voltou para Nazaré. E chegou a hora do bebê de Isabel nascer!', r: 'Lucas 1:46' },
        { art: '👶🎉', bg: 'monte', fx: 'coracoes', text: 'Isabel deu à luz um menino! Depois de tantos anos de espera e de oração, o bebê prometido tinha chegado.', r: 'Lucas 1:57' },
        { art: '👨‍👩‍👧‍👦🏡', bg: 'monte', fx: 'coracoes', text: 'Os vizinhos e parentes ouviram que o Senhor tinha sido tão bondoso com Isabel, e vieram todos se alegrar com ela.', r: 'Lucas 1:58' },
        { art: '📅👶', bg: 'monte', text: 'No oitavo dia, como mandava a lei de Deus, a família se reuniu para a cerimônia do bebê e para dar a ele um nome.', r: 'Lucas 1:59' },
        { art: '🗣️👴', bg: 'monte', text: 'Todo mundo dizia: "Vamos chamar ele de Zacarias, como o pai!" Era costume dar ao filho o nome de alguém da família.', r: 'Lucas 1:59' },
        { art: '🙅‍♀️💬', bg: 'monte', text: 'Mas Isabel disse: "Não, porém será chamado João." Os parentes estranharam: "Ninguém na família tem esse nome!"', r: 'Lucas 1:60-61' },
        { art: '🤐✍️', bg: 'monte', text: 'Então perguntaram por sinais a Zacarias, que continuava mudo. Ele pediu uma tabuinha e escreveu: "O seu nome é João."', r: 'Lucas 1:62-63' },
        { art: '🗣️✨', bg: 'aurora', fx: 'luz', text: 'Na mesma hora, a boca de Zacarias se abriu, a língua se soltou, e ele começou a falar louvando a Deus! Ele tinha obedecido ao anjo.', r: 'Lucas 1:64' },
        { art: '😮⛰️', bg: 'monte', fx: 'vento', text: 'Todos ficaram admirados, e a notícia correu por todas as montanhas da Judeia. As pessoas comentavam umas com as outras.', r: 'Lucas 1:65' },
        { art: '❓💭', bg: 'monte', fx: 'brilho', text: 'E perguntavam: "Quem será, pois, este menino?" Porque a mão do Senhor estava com ele.', r: 'Lucas 1:66' },
        { art: '🌱🏜️', bg: 'deserto', text: 'O menino João crescia e ficava forte no espírito. Quando ficou grande, foi morar no deserto. Ele seria a voz no deserto, lembra?', r: 'Lucas 1:80' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'O nome João quer dizer "Deus é bondoso". João não era a luz, mas veio para falar da luz, que é Jesus. Jesus estava quase chegando!', r: 'João 1:6-8' }
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
        { art: '👣👶', bg: 'aurora', fx: 'luz', text: 'Ontem nasceu João, e Zacarias voltou a falar! Sabe qual foi a primeira coisa que ele fez com a voz de volta? Louvou a Deus!', r: 'Lucas 1:63-64' },
        { art: '🕊️🎶', bg: 'aurora', fx: 'brilho', text: 'Zacarias ficou cheio do Espírito Santo e começou a cantar uma profecia, uma mensagem de Deus.', r: 'Lucas 1:67' },
        { art: '🙌💛', bg: 'aurora', fx: 'coracoes', text: '"Bendito o Senhor Deus de Israel, porque visitou e remiu o seu povo." Deus veio visitar o seu povo e salvá-lo!', r: 'Lucas 1:68' },
        { art: '👑🏘️', bg: 'palacio', fx: 'luz', text: '"E nos levantou uma salvação poderosa na casa de Davi, seu servo." Zacarias estava falando de Jesus, o Rei da família de Davi.', r: 'Lucas 1:69' },
        { art: '📜👴', bg: 'cidade', text: '"Como falou pela boca dos seus santos profetas." Isaías, Miqueias, Malaquias... todos tinham falado disso!', r: 'Lucas 1:70' },
        { art: '⭐🤝', bg: 'noite', fx: 'estrelas', text: '"Para lembrar-se da sua santa aliança e do juramento que jurou a Abraão, nosso pai." Deus nunca esqueceu a promessa a Abraão.', r: 'Lucas 1:72-73' },
        { art: '🛡️🕊️', bg: 'jardim', fx: 'coracoes', text: 'Por causa dessa salvação, o povo poderia servir a Deus sem medo, com o coração puro, todos os dias da vida.', r: 'Lucas 1:74-75' },
        { art: '👶🗣️', bg: 'monte', fx: 'luz', text: 'Depois Zacarias olhou para o seu bebê e disse: "E tu, ó menino, serás chamado profeta do Altíssimo, porque hás de ir ante a face do Senhor, a preparar os seus caminhos."', r: 'Lucas 1:76' },
        { art: '💧🤍', bg: 'mar', fx: 'ondas', text: 'João ensinaria o povo que a salvação vem pelo perdão dos pecados. Deus quer perdoar a gente!', r: 'Lucas 1:77' },
        { art: '🌄☀️', bg: 'aurora', fx: 'luz', text: '"Pelas entranhas da misericórdia do nosso Deus, com que o oriente do alto nos visitou." O oriente é onde o sol nasce. Lembra do Sol da justiça de Malaquias?', r: 'Lucas 1:78' },
        { art: '🌑➡️🌅', bg: 'noite', fx: 'luz', text: '"Para iluminar os que estão assentados em trevas e sombra de morte; a fim de dirigir os nossos pés pelo caminho da paz."', r: 'Lucas 1:79' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Esse sol que nasce é Jesus! Ele ilumina quem está no escuro e guia os nossos pés no caminho da paz. Faltam poucas paradas para Belém!', r: 'João 8:12' }
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
        { art: '👣🛠️', bg: 'aurora', fx: 'luz', text: 'Ontem José obedeceu a Deus e recebeu Maria como esposa. Deus escolheu José para uma missão enorme: ser o pai de Jesus aqui na terra.', r: 'Mateus 1:24' },
        { art: '🤍👑', bg: 'aurora', fx: 'brilho', text: 'Jesus é o Filho de Deus. O Pai dele está no céu. Mas Deus quis que Jesus crescesse numa família, com um pai que cuidasse dele: José.', r: 'Lucas 1:35; 2:49' },
        { art: '🔤💛', bg: 'jardim', fx: 'coracoes', text: 'Quando o menino nasceu, foi José quem deu o nome a Ele, como o anjo mandou: Jesus. Naquele tempo, dar o nome era coisa de pai.', r: 'Mateus 1:25' },
        { art: '🌙⚠️', bg: 'noite', fx: 'estrelas', text: 'Um dia, o rei Herodes quis fazer mal ao menino. De noite, Deus avisou José num sonho: "Levanta-te, e toma o menino e sua mãe, e foge para o Egito."', r: 'Mateus 2:13' },
        { art: '🫏🌙', bg: 'deserto', fx: 'vento', text: 'José não esperou amanhecer! Levantou-se de noite, pegou Maria e o menino, e partiu para o Egito. Ele protegeu a sua família.', r: 'Mateus 2:14' },
        { art: '🌴⏳', bg: 'deserto', text: 'A família morou no Egito até Herodes morrer. Então Deus avisou José de novo, e ele levou todos de volta para casa.', r: 'Mateus 2:15, 19-21' },
        { art: '🏡🌿', bg: 'galileia', fx: 'coracoes', text: 'Eles foram morar em Nazaré, na Galileia. Ali Jesus cresceu brincando, aprendendo e ajudando em casa.', r: 'Mateus 2:23' },
        { art: '🪵🔨', bg: 'galileia', text: 'José ensinou a Jesus o trabalho com madeira. Jesus ficou conhecido como "o carpinteiro" e "o filho do carpinteiro".', r: 'Marcos 6:3; Mateus 13:55' },
        { art: '📜🛤️', bg: 'cidade', text: 'Todo ano, José e Maria iam a Jerusalém para a festa da Páscoa. Quando Jesus tinha doze anos, foi junto.', r: 'Lucas 2:41-42' },
        { art: '🏛️💬', bg: 'palacio', fx: 'brilho', text: 'Jesus ficou no templo conversando com os mestres, e José e Maria o procuraram por três dias! Jesus disse: "Não sabeis que me convém tratar dos negócios de meu Pai?"', r: 'Lucas 2:46-49' },
        { art: '🏡🌱', bg: 'galileia', fx: 'coracoes', text: 'Jesus voltou com eles para Nazaré e lhes era obediente. "E crescia Jesus em sabedoria, e em estatura, e em graça para com Deus e os homens."', r: 'Lucas 2:51-52' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'José cuidou de Jesus na terra, e Deus Pai cuida de nós do céu. Por causa de Jesus, nós também podemos chamar Deus de "Pai nosso".', r: 'Mateus 6:9' }
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
        { art: '👣🏘️', bg: 'cidade', fx: 'luz', text: 'Maria e José chegaram a Belém. Enquanto eles esperam, vamos pensar numa pergunta: por que Jesus nasceu exatamente naquele tempo?', r: 'Lucas 2:6' },
        { art: '⏳🌿', bg: 'jardim', text: 'Desde a promessa no jardim até Belém passaram-se milhares de anos! Para nós, parece muito tempo. Mas Deus nunca se atrasa.', r: 'Gênesis 3:15' },
        { art: '🍞🔥', bg: 'jardim', text: 'Sabe quando a gente faz um bolo? Se tirar do forno antes, ele fica cru. Tudo tem o seu tempo certo. "Tudo tem o seu tempo determinado."', r: 'Eclesiastes 3:1' },
        { art: '📜⭐', bg: 'noite', fx: 'estrelas', text: 'O apóstolo Paulo escreveu: "Mas, vindo a plenitude dos tempos, Deus enviou seu Filho." Plenitude dos tempos quer dizer: quando chegou a hora exata.', r: 'Gálatas 4:4' },
        { art: '🛣️🏛️', bg: 'cidade', text: 'Naquele tempo, havia estradas ligando muitos países, e muita gente falava a mesma língua. A boa notícia de Jesus ia poder viajar pelo mundo!', r: 'Gálatas 4:4' },
        { art: '📖👴', bg: 'cidade', fx: 'brilho', text: 'E havia pessoas como Simeão e Ana, que esperavam no templo, lendo as promessas e orando. Os corações estavam prontos.', r: 'Lucas 2:25, 38' },
        { art: '👶🤍', bg: 'aurora', fx: 'coracoes', text: '"Nascido de mulher." Jesus não apareceu já grande, de repente: Ele nasceu bebê, de uma mãe, como nós.', r: 'Gálatas 4:4' },
        { art: '📜⚖️', bg: 'palacio', text: '"Nascido sob a lei, para remir os que estavam debaixo da lei." Ninguém conseguia obedecer à lei de Deus de forma perfeita. Jesus veio fazer o que nós não conseguimos.', r: 'Gálatas 4:4-5' },
        { art: '🔓💛', bg: 'aurora', fx: 'luz', text: 'Remir quer dizer pagar o preço para libertar alguém. Jesus veio pagar o preço do nosso pecado, para nos libertar.', r: 'Gálatas 4:5' },
        { art: '👨‍👩‍👧💛', bg: 'jardim', fx: 'coracoes', text: 'E tem mais: Ele veio "a fim de recebermos a adoção de filhos". Quem confia em Jesus entra para a família de Deus!', r: 'Gálatas 4:5-7' },
        { art: '🗣️👨‍👧', bg: 'aurora', fx: 'brilho', text: 'E Deus coloca no nosso coração o seu Espírito, que nos faz chamar Deus de "Aba, Pai", que é como dizer "Papai".', r: 'Gálatas 4:6' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Deus enviou Jesus no tempo certo. Quando a gente estiver esperando alguma coisa, podemos lembrar: o tempo de Deus é perfeito.', r: '2 Pedro 3:9' }
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
        { art: '👣⏳', bg: 'aurora', fx: 'luz', text: 'Ontem vimos que Deus enviou seu Filho no tempo certo. Mas onde estava o Filho antes de nascer em Belém? Vamos voltar lá para o começo de tudo.', r: 'Gálatas 4:4' },
        { art: '🌌✨', bg: 'noite', fx: 'estrelas', text: 'O apóstolo João, amigo de Jesus, começou o seu livro assim: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus."', r: 'João 1:1' },
        { art: '💬💛', bg: 'aurora', fx: 'brilho', text: 'Verbo quer dizer Palavra. A gente usa palavras para mostrar o que pensa e sente. Jesus é a Palavra de Deus: Ele nos mostra quem Deus é.', r: 'João 1:1, 14' },
        { art: '♾️🤍', bg: 'aurora', fx: 'luz', text: 'Antes do mundo existir, antes do jardim, antes das estrelas, o Filho já estava com o Pai. Ele nunca teve começo, porque Ele é Deus.', r: 'João 1:2; 17:5' },
        { art: '🌍🌱', bg: 'jardim', fx: 'brilho', text: '"Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez." As montanhas, os mares, os bichinhos e você também!', r: 'João 1:3' },
        { art: '☀️🌳', bg: 'jardim', fx: 'luz', text: 'Pensa só: o bebê que vai nascer em Belém é o mesmo que fez o sol, as árvores e as estrelas. E é Ele quem mantém tudo funcionando.', r: 'Colossenses 1:16-17' },
        { art: '💓💡', bg: 'aurora', fx: 'coracoes', text: '"Nele estava a vida, e a vida era a luz dos homens." Toda vida vem de Jesus, e Ele é a luz que mostra o caminho.', r: 'João 1:4' },
        { art: '🌑🌟', bg: 'noite', fx: 'luz', text: '"E a luz resplandece nas trevas, e as trevas não a compreenderam." Sabe quando a gente acende uma vela num quarto escuro? A escuridão não consegue apagar a luz.', r: 'João 1:5' },
        { art: '🐍🌑', bg: 'jardim', fx: 'vento', text: 'Desde o dia do jardim, o mal tentou apagar a luz de Deus. Mas não conseguiu! A luz continua brilhando.', r: 'Gênesis 3:15; João 1:5' },
        { art: '🗣️🏜️', bg: 'deserto', text: 'João Batista, o menino que nasceu de Isabel, veio para falar dessa luz, para que todos acreditassem.', r: 'João 1:6-8' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Jesus é "a luz verdadeira, que alumia a todo homem". O Criador de tudo está chegando a Belém, para ser a nossa luz.', r: 'João 1:9' }
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
        { art: '👣💬', bg: 'aurora', fx: 'luz', text: 'Ontem aprendemos que Jesus é o Verbo, a Palavra que estava com Deus no princípio. Hoje, João conta a coisa mais surpreendente de todas.', r: 'João 1:1' },
        { art: '🤍👶', bg: 'aurora', fx: 'brilho', text: '"E o Verbo se fez carne." O Filho de Deus, que criou tudo, se tornou um ser humano de verdade, com corpo, como nós.', r: 'João 1:14' },
        { art: '🍼😴', bg: 'noite', fx: 'coracoes', text: 'Jesus foi bebê. Teve fome, sono, aprendeu a andar e a falar. Mais tarde, ficou cansado, chorou com os amigos e sentiu dor.', r: 'Lucas 2:7, 40' },
        { art: '💛❌', bg: 'aurora', fx: 'luz', text: 'Ele foi igual a nós em tudo, menos numa coisa: Jesus nunca pecou. Nem uma vezinha!', r: 'Hebreus 4:15' },
        { art: '⛺✨', bg: 'deserto', fx: 'luz', text: '"E habitou entre nós." A palavra que João usou lembra uma tenda. No deserto, Deus mostrava a sua presença numa tenda no meio do acampamento.', r: 'Êxodo 40:34; João 1:14' },
        { art: '🏕️🏘️', bg: 'cidade', fx: 'coracoes', text: 'Agora Deus não ia ficar só numa tenda: Ele mesmo veio morar no meio do seu povo, como vizinho, como amigo.', r: 'João 1:14' },
        { art: '🌟👀', bg: 'aurora', fx: 'brilho', text: '"E vimos a sua glória." Os amigos de Jesus viram com os próprios olhos as coisas maravilhosas que Ele fez: curou doentes, acalmou o mar, deu vida.', r: 'João 1:14' },
        { art: '🤍✨', bg: 'aurora', fx: 'luz', text: 'Ele era "cheio de graça e de verdade". Graça é o amor que a gente não merece, e verdade é que Jesus nunca engana ninguém.', r: 'João 1:14' },
        { art: '🎁🙏', bg: 'jardim', fx: 'coracoes', text: '"Mas a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus." Quem recebe Jesus ganha o maior presente.', r: 'João 1:12' },
        { art: '🙈🚪', bg: 'cidade', fx: 'vento', text: 'Mas muitos não reconheceram Jesus. Ele veio para o seu povo, e muitos não o receberam. Daqui a pouco vamos ver que nem lugar na hospedaria Ele teve.', r: 'João 1:10-11' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'Ninguém nunca viu Deus. Mas Jesus veio para nos mostrar como Deus é. Quer saber como Deus é? Olhe para Jesus!', r: 'João 1:18' }
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
        { art: '👣⛺', bg: 'aurora', fx: 'luz', text: 'Ontem vimos que o Verbo se fez carne. Hoje o apóstolo Paulo nos ajuda a entender o tamanho desse amor.', r: 'João 1:14' },
        { art: '👑✨', bg: 'palacio', fx: 'luz', text: 'Jesus sempre foi Deus, com toda a glória e o poder. Ele tinha tudo no céu.', r: 'Filipenses 2:6' },
        { art: '🤝❓', bg: 'palacio', text: 'Mas Ele não ficou agarrado a isso, como uma criança que não quer emprestar o brinquedo. Ele pensou em nós.', r: 'Filipenses 2:6' },
        { art: '⬇️💛', bg: 'aurora', fx: 'brilho', text: '"Mas esvaziou-se a si mesmo, tomando a forma de servo, fazendo-se semelhante aos homens." O Rei de tudo escolheu ser servo!', r: 'Filipenses 2:7' },
        { art: '🏰➡️🌾', bg: 'campo', text: 'Ele não nasceu num palácio, com cama de ouro. Nasceu numa família simples, e a sua primeira caminha foi uma manjedoura de palha.', r: 'Lucas 2:7' },
        { art: '🧺💧', bg: 'jardim', fx: 'coracoes', text: 'Quando cresceu, Jesus fez coisas que só os servos faziam. Uma vez, lavou os pés sujos dos seus amigos!', r: 'João 13:4-5, 14' },
        { art: '🙇💛', bg: 'aurora', fx: 'coracoes', text: '"Humilhou-se a si mesmo, sendo obediente até à morte, e morte de cruz." Ele obedeceu ao Pai até o fim, por amor a nós.', r: 'Filipenses 2:8' },
        { art: '✝️🌅', bg: 'aurora', fx: 'luz', text: 'Mas a história não acabou na cruz! Jesus ressuscitou, e Deus "o exaltou soberanamente, e lhe deu um nome que é sobre todo o nome".', r: 'Filipenses 2:9' },
        { art: '🙌🌍', bg: 'aurora', fx: 'brilho', text: 'Um dia, todo mundo vai dobrar os joelhos e dizer que Jesus Cristo é o Senhor. O bebê da manjedoura é o Rei de todos!', r: 'Filipenses 2:10-11' },
        { art: '🤗🏠', bg: 'jardim', fx: 'coracoes', text: 'E Paulo diz que nós podemos ter "o mesmo sentimento que houve também em Cristo Jesus": ajudar, servir, pensar nos outros.', r: 'Filipenses 2:3-5' },
        { art: '🎁🙏', bg: 'jardim', fx: 'coracoes', text: 'No Natal, além de ganhar presentes, podemos fazer como Jesus: servir alguém em casa, emprestar, ajudar sem que peçam.', r: 'Filipenses 2:4' },
        { art: '⭐✝️', bg: 'noite', fx: 'luz', text: 'Jesus, que era rico, se fez pobre por amor de nós, para que nós fôssemos enriquecidos com o seu amor. Que Rei maravilhoso!', r: '2 Coríntios 8:9' }
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
        { art: '👣👑', bg: 'aurora', fx: 'luz', text: 'Ontem vimos o Rei que se fez pequeno. Amanhã é véspera de Natal! Hoje vamos descobrir um segredo escondido no nome da cidade onde Jesus ia nascer.', r: 'Filipenses 2:7' },
        { art: '🏘️🍞', bg: 'campo', fx: 'brilho', text: 'Na língua do povo de Israel, Belém quer dizer "casa do pão". Era uma terra boa, cheia de campos de trigo e cevada.', r: 'Miqueias 5:2' },
        { art: '🌾🧺', bg: 'campo', fx: 'vento', text: 'Lembra de Rute? Ela colhia espigas de cevada nos campos de Belém para fazer pão para ela e a sogra, Noemi.', r: 'Rute 2:2-3' },
        { art: '🏜️😟', bg: 'deserto', text: 'Muito tempo antes, no deserto, o povo de Israel teve fome e reclamou. Não tinha pão, nem mercado, nem plantação.', r: 'Êxodo 16:3' },
        { art: '🌅⚪', bg: 'deserto', fx: 'brilho', text: 'E Deus mandou do céu um pão diferente, o maná! Toda manhã o chão amanhecia coberto de flocos branquinhos e doces, como mel.', r: 'Êxodo 16:14-15' },
        { art: '🌾🐑', bg: 'campo', text: 'E foi justamente em Belém, a casa do pão, que Jesus ia nascer e ser deitado numa manjedoura, que é onde os animais comem.', r: 'Lucas 2:7' },
        { art: '👥🧺', bg: 'mar', fx: 'ondas', text: 'Quando Jesus cresceu, multiplicou cinco pães e dois peixinhos de um menino, e alimentou mais de cinco mil pessoas!', r: 'João 6:9-11' },
        { art: '🗣️🍞', bg: 'mar', fx: 'luz', text: 'No dia seguinte, Jesus disse: "Eu sou o pão da vida; aquele que vem a mim não terá fome, e quem crê em mim nunca terá sede."', r: 'João 6:35' },
        { art: '💛🍞', bg: 'aurora', fx: 'coracoes', text: 'O pão alimenta o corpo por um dia. Mas Jesus alimenta o coração para sempre. Ele é o pão que desceu do céu e dá vida ao mundo.', r: 'João 6:33' },
        { art: '🍷🍞', bg: 'palacio', fx: 'luz', text: 'Na última ceia, Jesus partiu o pão e disse: "Isto é o meu corpo, que por vós é dado." Ele deu a vida por nós na cruz.', r: 'Lucas 22:19' },
        { art: '🙏🍽️', bg: 'jardim', fx: 'coracoes', text: 'Quando a gente ora "o pão nosso de cada dia nos dá hoje", lembra que tudo vem de Deus: a comida da mesa e Jesus, o pão do coração.', r: 'Mateus 6:11' },
        { art: '⭐✝️', bg: 'noite', fx: 'luz', text: 'Amanhã, em Belém, a casa do pão, vai nascer o Pão da vida. O caminho está chegando ao fim. Está quase!', r: 'João 6:51' }
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
