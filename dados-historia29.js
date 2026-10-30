/* A Grande História da Bíblia — Arco 29: A cruz e a ressurreição (Mateus 26 – 28; Marcos 14 – 16; Lucas 22 – 24; João 18 – 21) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.cruz = {
  id: 'cruz', n: 29, name: 'A cruz e a ressurreição', sub: 'O centro de toda a história', ref: 'Os Evangelhos', icon: '🪨', scene: 'monte',
  intro: 'Este é o coração da Bíblia inteira. Tudo o que vimos, desde a promessa no Éden, os cordeiros, a Páscoa, o tabernáculo, o Servo de Isaías, apontava para este momento. Jesus foi preso, julgado injustamente e morreu na cruz no nosso lugar, levando os nossos pecados. Mas ao terceiro dia o túmulo ficou vazio: Ele ressuscitou! (Nestas lições não há imagem de Jesus; a cruz e a luz lembram o que Ele fez.)',
  lessons: [
    {
      id: 'cz1', title: 'A oração no Getsêmani', ref: 'Mateus 26:36-46; Lucas 22:39-46', icon: '🫒',
      recap: 'No arco passado, Jesus celebrou a última ceia e prometeu o Espírito Santo aos discípulos.',
      scenes: [
        { art: '🫒🌳🌙✨', bg: 'noite', fx: 'estrelas', text: 'Depois da ceia, Jesus foi com os discípulos para um jardim de oliveiras, chamado Getsêmani, no monte das Oliveiras.', r: 'Mateus 26:36' },
        { art: '✨🧔🧔🧔', bg: 'noite', fx: 'estrelas', text: 'Ele levou Pedro, Tiago e João um pouco mais adiante e disse: "A minha alma está muito triste, até a morte. Fiquem aqui e vigiem comigo."', r: 'Mateus 26:37-38' },
        { art: '✨🙇🌙', bg: 'noite', fx: 'luz', text: 'Jesus foi um pouco mais à frente, caiu com o rosto no chão e orou: "Meu Pai, se possível, afasta de mim este cálice. Mas não seja como eu quero, e sim como tu queres."', r: 'Mateus 26:39' },
        { art: '🍷⬛⚖️', bg: 'noite', text: 'O "cálice" era o sofrimento da cruz e a ira de Deus contra o pecado, que Jesus ia beber no nosso lugar. Era muito pesado!', r: 'Isaías 51:17; Mateus 20:22' },
        { art: '✨💧😰', bg: 'noite', text: 'Jesus estava em tanta angústia que o seu suor era como grandes gotas de sangue caindo no chão. E um anjo do céu apareceu para fortalecê-lo.', r: 'Lucas 22:43-44' },
        { art: '🧔🧔🧔😴', bg: 'noite', fx: 'estrelas', text: 'Quando Jesus voltou, encontrou os discípulos dormindo. Disse a Pedro: "Vocês não conseguiram vigiar comigo nem uma hora? Vigiem e orem para não caírem em tentação. O espírito está pronto, mas a carne é fraca."', r: 'Mateus 26:40-41' },
        { art: '✨🙏🙏🙏', bg: 'noite', fx: 'luz', text: 'Três vezes Jesus foi orar, dizendo as mesmas palavras: "Meu Pai, se este cálice não pode passar sem que eu o beba, seja feita a tua vontade."', r: 'Mateus 26:42-44' },
        { art: '✨🧍🔦👥', bg: 'noite', text: 'Então Jesus disse: "Levantem-se, vamos! Aquele que me trai está chegando." Jesus não fugiu. Ele escolheu ir em frente, por amor a nós.', r: 'Mateus 26:46' }
      ],
      god: 'O Pai tinha um plano para nos salvar, e o Filho escolheu obedecer, mesmo custando tudo.',
      jesus: 'No jardim do Éden, Adão disse "não" à vontade de Deus, e o pecado entrou no mundo. No jardim do Getsêmani, Jesus disse "seja feita a tua vontade", e a salvação começou. Jesus, que nunca pecou, ia beber o cálice que nós merecíamos beber. Ele nos ensina a orar: "Seja feita a tua vontade."',
      verse: { ref: 'Mateus 26:39', tx: 'Meu Pai, se é possível, passe de mim este cálice; todavia, não seja como eu quero, mas como tu queres.' },
      small: [
        { q: 'Onde Jesus foi orar?', o: [['🫒', 'Num jardim de oliveiras'], ['🏖️', 'Na praia'], ['🏰', 'Num castelo']] },
        { q: 'O que os discípulos fizeram?', o: [['😴', 'Dormiram'], ['🙏', 'Oraram a noite toda'], ['🏃', 'Correram']] },
        { q: 'O que Jesus disse ao Pai?', o: [['🙏', '"Seja feita a tua vontade"'], ['😠', '"Não quero"'], ['🤐', 'Nada']] }
      ],
      big: [
        { q: 'Como se chamava o jardim?', o: ['Getsêmani', 'Éden', 'Betânia', 'Jericó'], e: 'Mateus 26:36.' },
        { q: 'Quais discípulos foram mais perto com Jesus?', o: ['Pedro, Tiago e João', 'Judas e Tomé', 'André e Filipe', 'Todos'], e: 'Mateus 26:37.' },
        { q: 'O que era o "cálice" que Jesus ia beber?', o: ['O sofrimento da cruz pelo nosso pecado', 'Vinho de festa', 'Água do poço', 'Remédio'], e: 'Mateus 26:39; Isaías 51:17.' },
        { q: 'O que Jesus disse sobre o espírito e a carne?', o: ['O espírito está pronto, mas a carne é fraca', 'A carne é forte', 'Os dois são fracos', 'Nada'], e: 'Mateus 26:41.' }
      ],
      parents: 'O suor "como gotas de sangue" (Lucas 22:44) foi mantido de forma breve. O anjo é mencionado sem imagem. Ponto central: a obediência voluntária de Cristo e o peso do "cálice" da ira que Ele bebeu por nós. Leitura junto: Mateus 26:36-46.'
    },
    {
      id: 'cz2', title: 'A prisão e as três negações de Pedro', ref: 'Mateus 26:47-75; João 18:1-27', icon: '🐓',
      recap: 'Na lição passada, Jesus orou no Getsêmani: "Seja feita a tua vontade."',
      scenes: [
        { art: '🧔👥🔦⚔️', bg: 'noite', text: 'Judas chegou ao jardim com uma multidão armada com espadas e paus, mandada pelos chefes dos sacerdotes. Ele tinha combinado: "Aquele que eu beijar é Ele. Prendam-no."', r: 'Mateus 26:47-48' },
        { art: '🧔💋✨', bg: 'noite', text: 'Judas se aproximou de Jesus: "Salve, Mestre!" e o beijou. Jesus disse: "Amigo, para que você veio?"', r: 'Mateus 26:49-50' },
        { art: '✨💬🧍📣', bg: 'noite', fx: 'luz', text: 'Jesus perguntou: "A quem vocês procuram?" Eles disseram: "Jesus de Nazaré." Jesus respondeu: "Sou eu." E todos recuaram e caíram no chão!', r: 'João 18:4-6' },
        { art: '🧔⚔️👂✨🩹', bg: 'noite', text: 'Pedro puxou uma espada e cortou a orelha de um servo. Mas Jesus disse: "Guarde a espada!" e curou a orelha do homem. Jesus podia pedir doze legiões de anjos, mas não pediu.', r: 'Mateus 26:51-53; Lucas 22:51; João 18:10' },
        { art: '🧔🧔🏃💨', bg: 'noite', text: 'Então todos os discípulos abandonaram Jesus e fugiram. Levaram Jesus preso para a casa do sumo sacerdote Caifás.', r: 'Mateus 26:56-57' },
        { art: '🧔🔥👩❓', bg: 'noite', text: 'Pedro seguiu de longe e ficou no pátio, perto de uma fogueira. Uma criada disse: "Você também estava com Jesus!" Pedro negou: "Não sei do que você está falando."', r: 'Mateus 26:58, 69-70' },
        { art: '🧔❌❌', bg: 'noite', text: 'Outra pessoa disse: "Este também estava com Jesus." Pedro negou de novo, jurando: "Não conheço esse homem!" Depois, mais gente insistiu: "O seu jeito de falar te entrega!" E Pedro negou a terceira vez.', r: 'Mateus 26:71-74' },
        { art: '🐓📣🧔😭', bg: 'aurora', text: 'Na mesma hora, um galo cantou. Pedro lembrou do que Jesus tinha dito: "Antes que o galo cante, você vai me negar três vezes." E Pedro saiu dali e chorou amargamente.', r: 'Mateus 26:74-75; Lucas 22:61-62' }
      ],
      god: 'Deus está no controle mesmo quando tudo parece dar errado. Ele conhece as nossas fraquezas e não desiste de nós.',
      jesus: 'Jesus foi traído por um amigo, abandonado por todos e negado por Pedro. Ele enfrentou tudo sozinho, para que nós nunca fôssemos abandonados por Deus. E, quando disse "Sou eu" (o "Eu Sou" da sarça), todos caíram: Ele podia escapar, mas se entregou por amor. Pedro chorou, mas Jesus ia restaurá-lo depois da ressurreição.',
      verse: { ref: 'Isaías 53:6', tx: 'Todos nós andávamos desgarrados como ovelhas... mas o Senhor fez cair sobre ele a iniquidade de nós todos.' },
      small: [
        { q: 'Quem traiu Jesus?', o: [['🧔', 'Judas'], ['🧔', 'João'], ['👩', 'Maria']] },
        { q: 'Quantas vezes Pedro negou Jesus?', o: [['3️⃣', 'Três'], ['1️⃣', 'Uma'], ['🔟', 'Dez']] },
        { q: 'Que bicho cantou?', o: [['🐓', 'O galo'], ['🐦', 'O passarinho'], ['🐸', 'O sapo']] }
      ],
      big: [
        { q: 'Qual foi o sinal combinado por Judas?', o: ['Um beijo', 'Um aceno', 'Um grito', 'Uma tocha'], e: 'Mateus 26:48.' },
        { q: 'O que aconteceu quando Jesus disse "Sou eu"?', o: ['Todos recuaram e caíram no chão', 'Todos riram', 'Nada', 'Choveu'], e: 'João 18:6.' },
        { q: 'O que Jesus fez com a orelha do servo?', o: ['Curou', 'Deixou assim', 'Brigou com ele', 'Nada'], e: 'Lucas 22:51.' },
        { q: 'O que Pedro fez depois que o galo cantou?', o: ['Saiu e chorou amargamente', 'Riu', 'Fugiu para casa', 'Dormiu'], e: 'Mateus 26:75.' }
      ],
      parents: 'A agressão a Jesus na casa de Caifás (26:67-68) foi omitida. Ponto central: Cristo abandonado por todos para que não sejamos abandonados; e a fraqueza humana (Pedro) diante da fidelidade de Cristo. Leitura junto: Mateus 26:47-56 e 69-75.'
    },
    {
      id: 'cz3', title: 'Diante de Pilatos', ref: 'Mateus 27:11-26; João 18:28 – 19:16', icon: '⚖️',
      recap: 'Na lição passada, Jesus foi preso, e Pedro o negou três vezes.',
      scenes: [
        { art: '🏛️⚖️👑', bg: 'palacio', text: 'De manhã cedo, os chefes dos sacerdotes levaram Jesus amarrado a Pôncio Pilatos, o governador romano. Só ele podia condenar alguém à morte.', r: 'Mateus 27:1-2; João 18:31' },
        { art: '👑❓✨', bg: 'palacio', text: 'Pilatos perguntou: "Você é o rei dos judeus?" Jesus respondeu: "O meu Reino não é deste mundo. Eu vim ao mundo para dar testemunho da verdade." Pilatos perguntou: "O que é a verdade?"', r: 'João 18:33-38' },
        { art: '👥📣😠✨🤐', bg: 'palacio', text: 'Os sacerdotes acusavam Jesus de muitas coisas, mas Jesus não respondia nada. Pilatos ficou muito admirado. Era como Isaías tinha dito: "como a ovelha muda diante dos tosquiadores".', r: 'Mateus 27:12-14; Isaías 53:7' },
        { art: '👑💬✅', bg: 'palacio', text: 'Pilatos disse: "Eu não acho nenhum crime neste homem." Ele sabia que o tinham entregado por inveja.', r: 'João 18:38; Mateus 27:18' },
        { art: '🧔⛓️✨❓', bg: 'palacio', text: 'Na festa, o governador costumava soltar um preso. Havia um preso famoso, Barrabás, que era assassino. Pilatos perguntou: "Quem vocês querem que eu solte: Barrabás ou Jesus, chamado Cristo?"', r: 'Mateus 27:15-17; Marcos 15:7' },
        { art: '👥📣🧔', bg: 'palacio', text: 'Os sacerdotes convenceram a multidão a pedir Barrabás. E o povo gritou: "Barrabás!" Pilatos perguntou: "E o que eu faço com Jesus?" Todos gritaram: "Crucifica-o!"', r: 'Mateus 27:20-22' },
        { art: '👑💧🤲', bg: 'palacio', text: 'Pilatos viu que não adiantava. Pegou água, lavou as mãos na frente de todos e disse: "Eu sou inocente do sangue deste justo." Mas ele, que podia soltar Jesus, o entregou para ser crucificado.', r: 'Mateus 27:24-26' },
        { art: '🧔🔓➡️✨⛓️', bg: 'aurora', fx: 'luz', text: 'E Barrabás, o culpado, foi solto. Jesus, o inocente, ficou no lugar dele. É isso que Jesus faz por nós: o justo no lugar dos culpados!', r: 'Mateus 27:26; 1 Pedro 3:18' }
      ],
      god: 'Deus é justo e usou até a injustiça dos homens para cumprir o seu plano de salvação.',
      jesus: 'Pilatos disse três vezes que Jesus era inocente (Lucas 23:4, 14, 22), e mesmo assim o condenou. Jesus foi o Cordeiro sem defeito que Isaías descreveu, calado diante dos acusadores. E a troca com Barrabás é a história de todos nós: nós somos os culpados que saem livres, porque o Justo tomou o nosso lugar. "Cristo padeceu uma vez pelos pecados, o justo pelos injustos" (1 Pedro 3:18).',
      verse: { ref: '1 Pedro 3:18', tx: 'Porque também Cristo padeceu uma vez pelos pecados, o justo pelos injustos, para levar-nos a Deus.' },
      small: [
        { q: 'Quem era Pilatos?', o: [['👑', 'O governador romano'], ['🎣', 'Um pescador'], ['🧑‍🌾', 'Um pastor']] },
        { q: 'Jesus tinha culpa de algum crime?', o: [['❌', 'Não, era inocente'], ['✅', 'Sim'], ['🤷', 'Não sei']] },
        { q: 'Quem foi solto no lugar de Jesus?', o: [['🧔', 'Barrabás'], ['🧔', 'Pedro'], ['👑', 'Herodes']] }
      ],
      big: [
        { q: 'O que Jesus disse sobre o seu Reino?', o: ['"O meu Reino não é deste mundo"', '"Sou rei de Roma"', '"Não tenho reino"', 'Nada'], e: 'João 18:36.' },
        { q: 'Por que os sacerdotes entregaram Jesus, segundo Pilatos?', o: ['Por inveja', 'Por amor', 'Por medo', 'Por acaso'], e: 'Mateus 27:18.' },
        { q: 'O que Pilatos fez para dizer que era inocente?', o: ['Lavou as mãos', 'Rasgou a roupa', 'Fugiu', 'Chorou'], e: 'Mateus 27:24.' },
        { q: 'Que verdade a troca com Barrabás mostra?', o: ['O justo morreu no lugar dos culpados', 'Que Barrabás era bom', 'Que Pilatos era justo', 'Nada'], e: '1 Pedro 3:18.' }
      ],
      parents: 'Os açoites, a coroa de espinhos e as zombarias dos soldados (Mateus 27:26-31; João 19:1-3) foram omitidos ou apenas sugeridos; os pais podem decidir o quanto contar. Ponto central: a inocência de Cristo e a substituição. Leitura junto: Mateus 27:15-26.'
    },
    {
      id: 'cz4', title: 'Na cruz, no nosso lugar', ref: 'Lucas 23:26-49; João 19:17-30', icon: '🪵',
      recap: 'Na lição passada, Pilatos condenou Jesus, embora soubesse que Ele era inocente.',
      scenes: [
        { art: '🛤️🪵⛰️', bg: 'monte', text: 'Os soldados levaram Jesus para fora da cidade, até um lugar chamado Calvário, ou Gólgota, que quer dizer "Lugar da Caveira". No caminho, obrigaram um homem chamado Simão, de Cirene, a carregar a cruz atrás de Jesus.', r: 'Lucas 23:26, 33; João 19:17' },
        { art: '⛰️🪵🪵🪵', bg: 'monte', text: 'Ali crucificaram Jesus, entre dois criminosos, um à direita e outro à esquerda. Isaías tinha dito: "Foi contado com os transgressores."', r: 'Lucas 23:33; Isaías 53:12' },
        { art: '✨🙏💛', bg: 'monte', fx: 'luz', text: 'E Jesus orou: "Pai, perdoa-lhes, porque não sabem o que fazem." Mesmo na cruz, Ele perdoava!', r: 'Lucas 23:34' },
        { art: '📜✍️👑', bg: 'monte', text: 'Pilatos mandou escrever uma placa em cima da cruz, em três línguas: "Jesus de Nazaré, o Rei dos Judeus." Era verdade, mesmo que eles não acreditassem.', r: 'João 19:19-20' },
        { art: '🧔🙏✨🌅', bg: 'monte', fx: 'luz', text: 'Um dos criminosos disse: "Jesus, lembra de mim quando vieres no teu Reino." Jesus respondeu: "Eu te digo a verdade: hoje você vai estar comigo no paraíso."', r: 'Lucas 23:42-43' },
        { art: '☀️⬛🌑', bg: 'noite', text: 'Ao meio-dia, o sol escureceu, e houve trevas sobre toda a terra até as três horas da tarde. Jesus gritou: "Deus meu, Deus meu, por que me desamparaste?", as palavras do Salmo 22. Ele estava levando o castigo do nosso pecado.', r: 'Lucas 23:44-45; Mateus 27:46; Salmos 22:1' },
        { art: '✨📣✅', bg: 'noite', fx: 'luz', text: 'Então Jesus disse: "Está consumado!" Quer dizer: "Está tudo pago, terminado!" Depois, com voz forte, entregou o seu espírito nas mãos do Pai, e morreu.', r: 'João 19:30; Lucas 23:46' },
        { art: '🏛️🧶✂️', bg: 'cidade', fx: 'luz', text: 'Na mesma hora, o véu do templo, a cortina grossa que separava o Lugar Santíssimo, rasgou-se ao meio, de cima até embaixo! O caminho até Deus estava aberto.', r: 'Mateus 27:51; Hebreus 10:19-20' },
        { art: '🪖🙇✨', bg: 'monte', text: 'O oficial romano que estava de guarda viu tudo e disse: "Este homem era mesmo o Filho de Deus!"', r: 'Mateus 27:54' }
      ],
      god: 'Deus é justo e castiga o pecado. E Deus é amor: Ele mesmo pagou o castigo em Jesus, para nos perdoar.',
      jesus: 'Aqui toda a Bíblia se encontra. O cordeiro no lugar de Isaque, o sangue da Páscoa, a serpente levantada no deserto, o bode do Dia da Expiação, o Servo ferido de Isaías 53, tudo apontava para este momento. "Está consumado!" O preço foi pago por completo. E o véu rasgado mostra que agora, por meio de Jesus, qualquer pessoa pode chegar perto de Deus.',
      verse: { ref: 'Romanos 5:8', tx: 'Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.' },
      small: [
        { q: 'O que Jesus pediu ao Pai na cruz?', o: [['💛', 'Que perdoasse'], ['😠', 'Que castigasse'], ['🤐', 'Nada']] },
        { q: 'O que aconteceu com o sol?', o: [['🌑', 'Escureceu'], ['🌈', 'Fez arco-íris'], ['☀️', 'Brilhou mais']] },
        { q: 'O que Jesus disse antes de morrer?', o: [['✅', '"Está consumado!"'], ['😴', '"Vou dormir"'], ['🏃', '"Vou fugir"']] }
      ],
      big: [
        { q: 'Quem carregou a cruz atrás de Jesus?', o: ['Simão de Cirene', 'Pedro', 'João', 'Barrabás'], e: 'Lucas 23:26.' },
        { q: 'O que Jesus prometeu ao criminoso arrependido?', o: ['"Hoje você vai estar comigo no paraíso"', '"Você vai ser solto"', '"Não posso fazer nada"', 'Nada'], e: 'Lucas 23:43.' },
        { q: 'O que quer dizer "Está consumado"?', o: ['Está tudo pago, terminado', 'Estou com sede', 'Vou descansar', 'Começou'], e: 'João 19:30.' },
        { q: 'O que o véu rasgado do templo mostra?', o: ['O caminho até Deus foi aberto', 'Que o templo era velho', 'Que houve um terremoto só', 'Nada'], e: 'Mateus 27:51; Hebreus 10:19-20.' }
      ],
      parents: 'Lição central e delicada. Os detalhes físicos da crucificação (pregos, açoites, lança) não foram descritos; usamos a placa, as trevas, as palavras de Jesus e o véu. Não há imagem de Jesus nem da cruz com corpo. Ponto central: a expiação substitutiva e o amor de Deus. Leitura junto: Lucas 23:33-47 e João 19:28-30.'
    },
    {
      id: 'cz5', title: 'Sepultado no túmulo novo', ref: 'Mateus 27:57-66; João 19:38-42', icon: '🪨',
      recap: 'Na lição passada, Jesus morreu na cruz no nosso lugar, dizendo: "Está consumado!"',
      scenes: [
        { art: '🧔💰🏛️', bg: 'cidade', text: 'Ao entardecer, um homem rico chamado José, da cidade de Arimateia, que também era discípulo de Jesus em segredo, foi com coragem até Pilatos pedir o corpo de Jesus.', r: 'Mateus 27:57-58; João 19:38' },
        { art: '🧔🧔🌿🤍', bg: 'cidade', text: 'Nicodemos, aquele que tinha visitado Jesus de noite, veio também, trazendo uns trinta quilos de mirra e aloés, especiarias para o sepultamento. Eles envolveram o corpo em panos de linho, como era costume.', r: 'João 19:39-40' },
        { art: '🌳🪨🕳️', bg: 'jardim', text: 'Perto do lugar da cruz havia um jardim, e no jardim um túmulo novo, cavado na rocha, onde ninguém tinha sido colocado ainda. Ali puseram Jesus.', r: 'João 19:41-42' },
        { art: '📜💰⚰️', bg: 'jardim', text: 'Assim se cumpriu o que Isaías tinha dito do Servo: "Com o rico esteve na sua morte."', r: 'Isaías 53:9' },
        { art: '🪨➡️🕳️', bg: 'jardim', text: 'Depois, rolaram uma pedra grande para fechar a entrada do túmulo.', r: 'Mateus 27:60' },
        { art: '👩👩👀', bg: 'jardim', text: 'Maria Madalena e a outra Maria ficaram sentadas em frente ao túmulo, olhando onde Ele tinha sido colocado.', r: 'Mateus 27:61; Lucas 23:55' },
        { art: '👨‍🏫💬👑', bg: 'palacio', text: 'No dia seguinte, os chefes dos sacerdotes foram a Pilatos: "Lembramos que aquele enganador disse: depois de três dias vou ressuscitar. Mande guardar o túmulo!"', r: 'Mateus 27:62-64' },
        { art: '🪨🔒🪖🪖', bg: 'noite', fx: 'estrelas', text: 'Pilatos disse: "Vocês têm guardas. Vão e guardem como acharem melhor." Eles lacraram a pedra com um selo e colocaram soldados de guarda. Mas nenhuma pedra, selo ou soldado consegue segurar o Filho de Deus!', r: 'Mateus 27:65-66' }
      ],
      god: 'Deus cumpre cada detalhe da sua Palavra. Nada consegue impedir o seu plano.',
      jesus: 'Jesus morreu de verdade e foi sepultado de verdade. Por isso a ressurreição foi verdadeira. O sábado em que o corpo dele descansou no túmulo foi como o sinal de Jonas: três dias no seio da terra (Mateus 12:40). E até os inimigos, com selo e guardas, acabaram sendo testemunhas de que o túmulo estava bem fechado.',
      verse: { ref: '1 Coríntios 15:3-4', tx: 'Que Cristo morreu por nossos pecados, segundo as Escrituras, e que foi sepultado, e que ressuscitou ao terceiro dia, segundo as Escrituras.' },
      small: [
        { q: 'Onde Jesus foi colocado?', o: [['🪨', 'Num túmulo na rocha'], ['🏠', 'Numa casa'], ['⛵', 'Num barco']] },
        { q: 'O que fecharam na entrada?', o: [['🪨', 'Uma pedra grande'], ['🚪', 'Uma porta de vidro'], ['🧸', 'Um ursinho']] },
        { q: 'O que os soldados faziam?', o: [['🪖', 'Guardavam o túmulo'], ['🎣', 'Pescavam'], ['😴', 'Brincavam']] }
      ],
      big: [
        { q: 'Quem pediu o corpo de Jesus a Pilatos?', o: ['José de Arimateia', 'Pedro', 'Judas', 'Herodes'], e: 'Mateus 27:57-58.' },
        { q: 'Quem trouxe as especiarias?', o: ['Nicodemos', 'Zaqueu', 'Lázaro', 'Tomé'], e: 'João 19:39.' },
        { q: 'Que profecia se cumpriu no sepultamento?', o: ['"Com o rico esteve na sua morte"', '"Nasceu em Belém"', '"Do Egito chamei"', 'Nenhuma'], e: 'Isaías 53:9.' },
        { q: 'Por que os sacerdotes pediram guardas?', o: ['Jesus tinha dito que ressuscitaria ao terceiro dia', 'Para honrar Jesus', 'Por causa de ladrões', 'Por costume'], e: 'Mateus 27:63-64.' }
      ],
      parents: 'Ponto central: a morte real e o sepultamento real de Cristo (1 Coríntios 15:3-4), e o cumprimento de Isaías 53:9. A lição termina em suspense para a próxima. Leitura junto: Mateus 27:57-66.'
    },
    {
      id: 'cz6', title: 'Ele ressuscitou!', ref: 'Mateus 28:1-10; João 20:1-18', icon: '🌅',
      recap: 'Na lição passada, Jesus foi sepultado num túmulo novo, fechado com uma pedra e guardado por soldados.',
      scenes: [
        { art: '👩👩🌿🌅', bg: 'aurora', text: 'No primeiro dia da semana, bem cedinho, quando ainda estava escuro, Maria Madalena e outras mulheres foram ao túmulo levando especiarias.', r: 'Mateus 28:1; Marcos 16:1-2; João 20:1' },
        { art: '🌍💥✨🪨', bg: 'aurora', fx: 'luz', text: 'De repente, houve um grande terremoto! Um anjo do Senhor desceu do céu, rolou a pedra da entrada e sentou-se em cima dela. A aparência dele era como um relâmpago, e a roupa, branca como a neve.', r: 'Mateus 28:2-3' },
        { art: '🪖😱💤', bg: 'aurora', text: 'Os guardas tremeram de medo e ficaram como mortos!', r: 'Mateus 28:4' },
        { art: '✨💬👩👩', bg: 'aurora', fx: 'luz', text: 'O anjo disse às mulheres: "Não tenham medo! Eu sei que vocês procuram Jesus, que foi crucificado. Ele não está aqui! Ressuscitou, como tinha dito. Venham ver o lugar onde Ele estava."', r: 'Mateus 28:5-6' },
        { art: '🕳️🤍🤍', bg: 'aurora', fx: 'brilho', text: 'O túmulo estava vazio! Só estavam lá os panos de linho dobrados.', r: 'João 20:5-7' },
        { art: '👩😭🌳', bg: 'jardim', text: 'Maria Madalena ficou chorando do lado de fora do túmulo. Ela achava que tinham levado o corpo de Jesus. Então viu alguém que ela pensou que era o jardineiro.', r: 'João 20:11-15' },
        { art: '✨💬👩📛', bg: 'jardim', fx: 'luz', text: 'Ele disse: "Maria!" Ela reconheceu aquela voz! Virou-se e disse: "Raboni!", que quer dizer "Mestre!" Era Jesus, vivo!', r: 'João 20:16' },
        { art: '👩🏃📣🎉', bg: 'aurora', fx: 'brilho', text: 'Jesus a mandou contar aos discípulos. E Maria Madalena correu e anunciou: "Eu vi o Senhor!"', r: 'João 20:17-18' },
        { art: '🌅✨🙌', bg: 'aurora', fx: 'brilho', text: 'Jesus venceu a morte! O túmulo vazio é a prova de que o pagamento na cruz foi aceito pelo Pai, e de que quem crê nele também vai ressuscitar.', r: 'Romanos 4:25; 1 Coríntios 15:20' }
      ],
      god: 'Deus é mais forte que a morte! Ele cumpriu a promessa e ressuscitou Jesus ao terceiro dia.',
      jesus: 'No Éden, Deus prometeu que o Descendente da mulher ia esmagar a cabeça da serpente (Gênesis 3:15). Na cruz, a serpente feriu o calcanhar dele; na ressurreição, Jesus esmagou a cabeça do inimigo e venceu a morte! "Onde está, ó morte, o teu aguilhão?" (1 Coríntios 15:55). Jesus é "as primícias dos que dormem": a primeira colheita de uma grande ressurreição.',
      verse: { ref: 'Mateus 28:6', tx: 'Ele não está aqui, porque já ressuscitou, como havia dito.' },
      small: [
        { q: 'Quem rolou a pedra?', o: [['✨', 'Um anjo do Senhor'], ['🪖', 'Os soldados'], ['👩', 'As mulheres']] },
        { q: 'Como estava o túmulo?', o: [['🕳️', 'Vazio!'], ['🪨', 'Fechado'], ['🌊', 'Cheio de água']] },
        { q: 'Jesus está vivo?', o: [['🌅', 'Sim, ressuscitou!'], ['❌', 'Não'], ['🤷', 'Não sei']] }
      ],
      big: [
        { q: 'Em que dia Jesus ressuscitou?', o: ['No primeiro dia da semana', 'No sábado', 'Na sexta', 'Na segunda'], e: 'Mateus 28:1.' },
        { q: 'O que o anjo disse às mulheres?', o: ['"Ele não está aqui; ressuscitou"', '"Vão embora"', '"Ele foi levado"', 'Nada'], e: 'Mateus 28:6.' },
        { q: 'Como Maria Madalena reconheceu Jesus?', o: ['Quando Ele a chamou pelo nome', 'Pela roupa', 'Pela altura', 'Não reconheceu'], e: 'João 20:16.' },
        { q: 'O que Maria anunciou aos discípulos?', o: ['"Eu vi o Senhor!"', '"Roubaram o corpo"', '"Estou com medo"', 'Nada'], e: 'João 20:18.' }
      ],
      parents: 'O anjo é mostrado só como luz; Jesus ressuscitado também (não há imagem). Ponto central: a ressurreição corporal de Cristo como fato histórico e como vitória sobre a morte. Domingo, o "dia do Senhor", celebra isso. Leitura junto: Mateus 28:1-10 e João 20:11-18.'
    },
    {
      id: 'cz7', title: 'Emaús e Tomé: Ele está vivo!', ref: 'Lucas 24:13-35; João 20:19-29', icon: '🛤️',
      recap: 'Na lição passada, o túmulo estava vazio, e Maria Madalena viu Jesus ressuscitado.',
      scenes: [
        { art: '🧔🧔🛤️😔', bg: 'deserto', text: 'Naquele mesmo dia, dois discípulos caminhavam tristes de Jerusalém para uma aldeia chamada Emaús, conversando sobre tudo o que tinha acontecido.', r: 'Lucas 24:13-14' },
        { art: '🧔🧔✨🛤️', bg: 'deserto', fx: 'luz', text: 'Jesus se aproximou e começou a caminhar com eles, mas os olhos deles estavam impedidos de reconhecê-lo. Eles contaram, tristes: "Nós esperávamos que Ele fosse o Salvador de Israel..."', r: 'Lucas 24:15-21' },
        { art: '✨📜📜📜', bg: 'deserto', fx: 'luz', text: 'Jesus disse: "Como vocês demoram a crer em tudo o que os profetas disseram! Não era necessário que o Cristo sofresse e entrasse na sua glória?" E, começando por Moisés e todos os profetas, explicou o que dizia a respeito dele em todas as Escrituras!', r: 'Lucas 24:25-27' },
        { art: '🏠🍞✨', bg: 'noite', fx: 'luz', text: 'Na aldeia, convidaram Jesus para ficar. À mesa, Ele pegou o pão, deu graças, partiu e deu a eles. Nisso, os olhos deles se abriram e o reconheceram! E Jesus desapareceu da vista deles.', r: 'Lucas 24:29-31' },
        { art: '🧔🧔❤️🔥🏃', bg: 'noite', fx: 'luz', text: 'Eles disseram: "Não estava o nosso coração ardendo, quando Ele nos explicava as Escrituras?" E voltaram correndo para Jerusalém, de noite mesmo, para contar aos outros!', r: 'Lucas 24:32-35' },
        { art: '🚪🔒✨🧔🧔', bg: 'noite', fx: 'luz', text: 'Os discípulos estavam reunidos, com as portas trancadas por medo. De repente, Jesus apareceu no meio deles e disse: "Paz seja com vocês!" Mostrou as mãos e o lado, e eles se alegraram ao ver o Senhor.', r: 'João 20:19-20' },
        { art: '🧔🤨✋', bg: 'cidade', text: 'Tomé não estava lá. Quando contaram, ele disse: "Se eu não vir as marcas dos pregos nas mãos dele e não tocar nelas, não vou acreditar."', r: 'João 20:24-25' },
        { art: '✨🤲🧔🙇', bg: 'cidade', fx: 'luz', text: 'Oito dias depois, Jesus apareceu de novo e disse a Tomé: "Veja as minhas mãos. Não seja incrédulo, mas creia!" Tomé respondeu: "Senhor meu e Deus meu!"', r: 'João 20:26-28' },
        { art: '✨💬👥💛', bg: 'aurora', fx: 'coracoes', text: 'Jesus disse: "Porque me viu, você creu. Felizes os que não viram e creram!" Isso é para nós, que cremos sem ter visto!', r: 'João 20:29' }
      ],
      god: 'Deus abre os nossos olhos pela sua Palavra. Ele é paciente com as nossas dúvidas.',
      jesus: 'No caminho de Emaús, Jesus mostrou que toda a Bíblia, de Moisés aos profetas, fala dele. É exatamente o que estamos fazendo nesta Grande História! E Tomé disse a frase mais clara: "Senhor meu e Deus meu!" Jesus é Deus. E Ele fala de nós: "Felizes os que não viram e creram."',
      verse: { ref: 'João 20:29', tx: 'Bem-aventurados os que não viram e creram.' },
      small: [
        { q: 'Para onde os dois discípulos iam?', o: [['🛤️', 'Para Emaús'], ['🏖️', 'Para a praia'], ['🏔️', 'Para a neve']] },
        { q: 'Quando eles reconheceram Jesus?', o: [['🍞', 'Quando Ele partiu o pão'], ['🌧️', 'Quando choveu'], ['😴', 'Quando dormiram']] },
        { q: 'O que Tomé disse no fim?', o: [['🙇', '"Senhor meu e Deus meu!"'], ['🤨', '"Não acredito"'], ['🏃', '"Vou embora"']] }
      ],
      big: [
        { q: 'O que Jesus explicou no caminho?', o: ['O que as Escrituras diziam sobre Ele', 'O caminho mais curto', 'A previsão do tempo', 'Nada'], e: 'Lucas 24:27.' },
        { q: 'Como os discípulos sentiram o coração?', o: ['Ardendo', 'Gelado', 'Cansado', 'Bravo'], e: 'Lucas 24:32.' },
        { q: 'O que Tomé queria ver para crer?', o: ['As marcas dos pregos', 'Um anjo', 'Um milagre', 'Nada'], e: 'João 20:25.' },
        { q: 'Quem Jesus chamou de felizes?', o: ['Os que não viram e creram', 'Só os que viram', 'Os ricos', 'Ninguém'], e: 'João 20:29.' }
      ],
      parents: 'As "marcas dos pregos" foram mencionadas de forma breve. Ponto central: toda a Escritura aponta para Cristo (Lucas 24:27, 44) e a confissão "Senhor meu e Deus meu". É o versículo-tema de todo este app! Leitura junto: Lucas 24:13-32.'
    },
    {
      id: 'cz8', title: 'Pedro perdoado e a grande missão', ref: 'João 21:1-19; Mateus 28:16-20', icon: '🔥',
      recap: 'Na lição passada, Jesus apareceu aos discípulos no caminho de Emaús e a Tomé.',
      scenes: [
        { art: '🧔🧔⛵🌙', bg: 'mar', fx: 'ondas', text: 'Alguns discípulos voltaram para a Galileia. Pedro disse: "Vou pescar." Os outros foram com ele. Pescaram a noite inteira e não pegaram nada.', r: 'João 21:1-3' },
        { art: '🌅✨🏖️', bg: 'mar', fx: 'luz', text: 'De manhã, Jesus estava na praia, mas eles não sabiam que era Ele. Jesus gritou: "Joguem a rede do lado direito do barco!"', r: 'João 21:4-6' },
        { art: '🥅🐟🐟🐟', bg: 'mar', fx: 'brilho', text: 'Eles jogaram, e a rede ficou tão cheia que não conseguiam puxar! Igualzinho ao dia em que Jesus os chamou. João disse: "É o Senhor!"', r: 'João 21:6-7; Lucas 5:6' },
        { art: '🧔🏊💦✨', bg: 'mar', fx: 'ondas', text: 'Pedro, quando ouviu, se jogou no mar e nadou até a praia!', r: 'João 21:7' },
        { art: '🔥🐟🍞✨', bg: 'mar', fx: 'luz', text: 'Na praia havia uma fogueira de brasas, com peixe e pão. Jesus disse: "Venham comer." E serviu o café da manhã para eles.', r: 'João 21:9, 12-13' },
        { art: '✨❓🧔💛3️⃣', bg: 'mar', fx: 'coracoes', text: 'Depois, Jesus perguntou a Pedro três vezes: "Simão, você me ama?" E três vezes Pedro respondeu: "Sim, Senhor, tu sabes que eu te amo." Três negações, três declarações de amor!', r: 'João 21:15-17' },
        { art: '✨💬🧔🐑', bg: 'mar', fx: 'luz', text: 'E, cada vez, Jesus disse: "Cuide das minhas ovelhas." Jesus perdoou Pedro e deu a ele uma nova missão: ser pastor do povo de Deus.', r: 'João 21:15-17' },
        { art: '⛰️✨🧔🧔🧔', bg: 'monte', fx: 'luz', text: 'Depois, num monte da Galileia, Jesus disse aos discípulos: "Toda a autoridade me foi dada no céu e na terra. Portanto, vão a todos os povos e façam discípulos, batizando no nome do Pai, do Filho e do Espírito Santo."', r: 'Mateus 28:16-19' },
        { art: '🌍✨💛♾️', bg: 'aurora', fx: 'brilho', text: '"Ensinem a obedecer a tudo o que eu ordenei. E eu estou com vocês todos os dias, até o fim dos tempos!"', r: 'Mateus 28:20' }
      ],
      god: 'Deus perdoa de verdade e restaura quem caiu. Ele quer que pessoas de todas as nações o conheçam.',
      jesus: 'Pedro negou Jesus três vezes perto de uma fogueira; agora, perto de outra fogueira, declarou o seu amor três vezes. Jesus não apagou só o pecado: deu uma missão nova. E a promessa feita a Abraão, "em ti serão benditas todas as famílias da terra" (Gênesis 12:3), agora seria levada a todas as nações pelos discípulos de Jesus, até chegar a nós!',
      verse: { ref: 'Mateus 28:19-20', tx: 'Portanto ide, ensinai todas as nações... e eis que eu estou convosco todos os dias, até a consumação dos séculos.' },
      small: [
        { q: 'Onde Jesus preparou o café da manhã?', o: [['🏖️', 'Na praia'], ['🏠', 'Na cozinha'], ['⛰️', 'No monte']] },
        { q: 'Quantas vezes Jesus perguntou a Pedro se ele o amava?', o: [['3️⃣', 'Três'], ['1️⃣', 'Uma'], ['🔟', 'Dez']] },
        { q: 'Para onde Jesus mandou levar a boa notícia?', o: [['🌍', 'Para todas as nações'], ['🏠', 'Só para casa'], ['🚫', 'Para ninguém']] }
      ],
      big: [
        { q: 'O que Pedro fez quando soube que era Jesus?', o: ['Jogou-se no mar e nadou até a praia', 'Ficou no barco', 'Fugiu', 'Dormiu'], e: 'João 21:7.' },
        { q: 'O que Jesus disse a Pedro depois de cada resposta?', o: ['"Cuide das minhas ovelhas"', '"Vá pescar"', '"Vá embora"', 'Nada'], e: 'João 21:15-17.' },
        { q: 'Em nome de quem os discípulos deviam batizar?', o: ['Do Pai, do Filho e do Espírito Santo', 'De Pedro', 'De Moisés', 'De ninguém'], e: 'Mateus 28:19.' },
        { q: 'Por quanto tempo Jesus prometeu estar conosco?', o: ['Todos os dias, até o fim dos tempos', 'Um ano', 'Até a Páscoa', 'Só no domingo'], e: 'Mateus 28:20.' }
      ],
      parents: 'Encerramento do arco da cruz. Ponto central: restauração completa (três negações, três confissões) e a Grande Comissão, cumprimento da promessa a Abraão. Os 40 dias de aparições (Atos 1:3; 1 Coríntios 15:5-8) foram resumidos. Leitura junto: João 21:15-19 e Mateus 28:18-20.'
    }
  ]
};
