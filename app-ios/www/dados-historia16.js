/* A Grande História da Bíblia — Arco 16: O reino dividido (1 Reis 12 – 16; 2 Crônicas 10 – 20) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.divisao = {
  id: 'divisao', n: 16, name: 'O reino dividido', sub: 'Israel ao norte, Judá ao sul', ref: '1 Reis 12 – 16, 2 Crônicas 10 – 20', icon: '💔', scene: 'cidade',
  intro: 'Depois de Salomão, o reino se partiu em dois: dez tribos ao norte, chamadas Israel, e Judá ao sul, com Jerusalém e os reis da família de Davi. Neste arco, vamos ver como isso aconteceu, os reis que se afastaram de Deus e os reis que confiaram nele, e como Deus continuou guardando a promessa feita a Davi.',
  lessons: [
    {
      id: 'dv1', title: 'Roboão e o conselho errado', ref: '1 Reis 12:1-24; 2 Crônicas 10', icon: '🪓',
      recap: 'No arco de Salomão, Deus avisou que, por causa da idolatria, o reino seria dividido depois da morte do rei.',
      scenes: [
        { art: '👑🧑', bg: 'palacio', text: 'Depois que Salomão morreu, o seu filho Roboão foi para a cidade de Siquém, onde todo Israel tinha se reunido para fazê-lo rei.', r: '1 Reis 12:1' },
        { art: '👥🙏🪨', bg: 'cidade', text: 'O povo, junto com Jeroboão, pediu: "O seu pai colocou sobre nós um peso muito grande, com trabalho duro e impostos. Alivie esse peso, e nós vamos servir você."', r: '1 Reis 12:3-4' },
        { art: '👴👴💬', bg: 'palacio', text: 'Roboão perguntou aos homens mais velhos, que tinham servido Salomão. Eles aconselharam: "Se você for bondoso com o povo e falar com eles palavras boas, eles vão te servir para sempre."', r: '1 Reis 12:6-7' },
        { art: '🧑🧑😏', bg: 'palacio', text: 'Mas Roboão não gostou desse conselho. Foi perguntar aos jovens que tinham crescido com ele. Eles disseram: "Diga a eles: se o meu pai foi duro, eu vou ser ainda mais duro!"', r: '1 Reis 12:8-11' },
        { art: '👑😠📣', bg: 'cidade', text: 'Roboão seguiu o conselho dos jovens e falou com aspereza ao povo: "O meu pai colocou um peso pesado; eu vou aumentar esse peso!"', r: '1 Reis 12:13-14' },
        { art: '👥🔙🏠', bg: 'cidade', fx: 'vento', text: 'O povo ficou revoltado: "Que temos nós com a família de Davi? Para as suas tendas, ó Israel!" E dez tribos foram embora e fizeram Jeroboão o rei delas.', r: '1 Reis 12:16, 20' },
        { art: '⬆️🏔️⬇️🏛️', bg: 'monte', text: 'Assim, o reino se dividiu em dois. Ao norte, o reino de Israel, com dez tribos. Ao sul, o reino de Judá, com Jerusalém e o templo, onde só ficaram Judá e Benjamim com Roboão.', r: '1 Reis 12:19-21' },
        { art: '⚔️🛑✨', bg: 'aurora', fx: 'luz', text: 'Roboão juntou um exército para lutar contra o norte. Mas Deus mandou o profeta Semaías dizer: "Não lutem contra os seus irmãos! Isto veio de mim." E eles obedeceram e voltaram para casa.', r: '1 Reis 12:21-24' }
      ],
      god: 'Deus é soberano até sobre as más escolhas dos reis. Ele também quer que ouçamos os conselhos sábios.',
      jesus: 'Roboão disse: "Vou aumentar o peso!" Jesus, o Filho de Davi verdadeiro, disse o contrário: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei... o meu jugo é suave, e o meu fardo é leve" (Mateus 11:28-30). Jesus é o Rei que serve o povo, e um dia vai juntar de novo todos os filhos de Deus num só rebanho (João 10:16).',
      verse: { ref: 'Provérbios 15:22', tx: 'Quando não há conselhos os planos se dispersam, mas havendo muitos conselheiros eles se firmam.' },
      small: [
        { q: 'Quem foi rei depois de Salomão?', o: [['🧑', 'Roboão'], ['🧌', 'Golias'], ['🦁', 'Um leão']] },
        { q: 'De quem Roboão seguiu o conselho?', o: [['😏', 'Dos jovens amigos'], ['👴', 'Dos sábios velhos'], ['✨', 'De Deus']] },
        { q: 'Em quantas partes o reino se dividiu?', o: [['2️⃣', 'Duas'], ['🔟', 'Dez'], ['1️⃣', 'Nenhuma']] }
      ],
      big: [
        { q: 'O que o povo pediu a Roboão?', o: ['Que aliviasse o peso', 'Mais trabalho', 'Um templo novo', 'Uma guerra'], e: '1 Reis 12:4.' },
        { q: 'Qual foi o conselho dos mais velhos?', o: ['Ser bondoso e falar palavras boas', 'Ser mais duro', 'Fugir', 'Fazer guerra'], e: '1 Reis 12:7.' },
        { q: 'Quem se tornou rei das dez tribos do norte?', o: ['Jeroboão', 'Roboão', 'Semaías', 'Davi'], e: '1 Reis 12:20.' },
        { q: 'Por que Roboão não lutou contra o norte?', o: ['Deus mandou pelo profeta que não lutasse', 'Teve medo', 'Perdeu as armas', 'Choveu'], e: '1 Reis 12:22-24.' }
      ],
      parents: 'Mapa útil: Israel (norte, capital depois em Samaria) e Judá (sul, Jerusalém). Daqui em diante, a Bíblia alterna os reis dos dois reinos. Ponto central: ouvir bons conselhos e a soberania de Deus (12:15). Leitura junto: 1 Reis 12:1-17.'
    },
    {
      id: 'dv2', title: 'Os bezerros de ouro de Jeroboão', ref: '1 Reis 12:25-33', icon: '🐂',
      recap: 'Na lição passada, o reino se dividiu, e Jeroboão se tornou rei das dez tribos do norte.',
      scenes: [
        { art: '👑🤔😟', bg: 'palacio', text: 'Jeroboão ficou preocupado: "O templo está em Jerusalém, no reino de Judá. Se o povo continuar indo lá adorar a Deus, o coração deles vai voltar para o rei de Judá, e eles vão me matar."', r: '1 Reis 12:26-27' },
        { art: '👑🐂🐂', bg: 'palacio', text: 'Então ele teve uma ideia muito ruim: mandou fazer dois bezerros de ouro, igual ao do deserto no tempo de Moisés!', r: '1 Reis 12:28' },
        { art: '👑📣🐂', bg: 'cidade', text: 'E disse ao povo: "É muito trabalho subir até Jerusalém. Eis aqui os seus deuses, ó Israel, que tiraram vocês do Egito!" Ele repetiu as mesmas palavras do bezerro de ouro do Sinai.', r: '1 Reis 12:28; Êxodo 32:4' },
        { art: '⬆️🐂⬇️🐂', bg: 'monte', text: 'Colocou um bezerro em Betel, no sul do seu reino, e outro em Dã, no extremo norte, para o povo não precisar ir a Jerusalém.', r: '1 Reis 12:29-30' },
        { art: '🧔🚫📜', bg: 'cidade', text: 'Jeroboão também inventou sacerdotes que não eram da tribo de Levi e uma festa com data inventada por ele, "no mês que ele mesmo escolheu". Ele mudou a adoração do jeito que quis.', r: '1 Reis 12:31-33' },
        { art: '😢📜⬇️', bg: 'noite', text: 'Isso se tornou um grande pecado para Israel. Por muitos anos, quase todos os reis do norte seguiram "o caminho de Jeroboão", que fez Israel pecar.', r: '1 Reis 12:30; 13:34; 15:34' },
        { art: '🧔🏃⬇️🏛️', bg: 'aurora', fx: 'luz', text: 'Mas nem todos aceitaram. Os sacerdotes e os levitas, e todos de todas as tribos que queriam buscar o Senhor de verdade, se mudaram para Judá para continuar adorando no templo.', r: '2 Crônicas 11:13-16' }
      ],
      god: 'Deus deve ser adorado do jeito que Ele mesmo ensinou, e não do jeito que inventamos.',
      jesus: 'Jeroboão separou o povo do templo por medo de perder o trono. Jesus fez o contrário: abriu o caminho para todos chegarem a Deus. Ele disse à mulher samaritana, que vivia no norte: "Vem a hora em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade" (João 4:21-24). Em Jesus, o caminho para Deus está aberto para todos.',
      verse: { ref: 'João 4:24', tx: 'Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade.' },
      small: [
        { q: 'O que Jeroboão mandou fazer?', o: [['🐂', 'Dois bezerros de ouro'], ['🏛️', 'Um templo para Deus'], ['🍞', 'Pão']] },
        { q: 'Por que ele fez isso?', o: [['😟', 'Medo de perder o trono'], ['💛', 'Amor a Deus'], ['🎉', 'Para uma festa']] },
        { q: 'Isso agradou a Deus?', o: [['❌', 'Não'], ['✅', 'Sim'], ['🤷', 'Tanto faz']] }
      ],
      big: [
        { q: 'Onde Jeroboão colocou os bezerros?', o: ['Em Betel e em Dã', 'Em Jerusalém', 'No Egito', 'No templo'], e: '1 Reis 12:29.' },
        { q: 'Que palavras ele repetiu?', o: ['As do bezerro de ouro do Sinai', 'As de Davi', 'As de Salomão', 'As de Abraão'], e: '1 Reis 12:28; Êxodo 32:4.' },
        { q: 'Quem Jeroboão colocou como sacerdotes?', o: ['Pessoas que não eram de Levi', 'Só levitas', 'Os profetas', 'Os anjos'], e: '1 Reis 12:31.' },
        { q: 'O que fizeram os que queriam buscar o Senhor?', o: ['Mudaram-se para Judá', 'Adoraram os bezerros', 'Ficaram calados', 'Foram para o Egito'], e: '2 Crônicas 11:16.' }
      ],
      parents: 'O "pecado de Jeroboão" é o refrão de 1 e 2 Reis para os reis do norte. Ponto central: a adoração inventada (12:33, "o mês que ele inventou") contra a adoração ordenada por Deus. Leitura junto: 1 Reis 12:25-33.'
    },
    {
      id: 'dv3', title: 'O homem de Deus e o altar', ref: '1 Reis 13', icon: '🔥',
      recap: 'Na lição passada, Jeroboão fez dois bezerros de ouro e inventou uma religião nova para o povo.',
      scenes: [
        { art: '👑🔥🐂', bg: 'cidade', text: 'Jeroboão estava em pé junto ao altar de Betel, queimando incenso, quando chegou de Judá um homem de Deus, enviado pela palavra do Senhor.', r: '1 Reis 13:1' },
        { art: '🧔📣🔥', bg: 'cidade', fx: 'luz', text: 'O homem de Deus gritou contra o altar: "Altar, altar! Assim diz o Senhor: um filho vai nascer na família de Davi, e o nome dele será Josias. Ele vai destruir você!"', r: '1 Reis 13:2' },
        { art: '🧔💥🔥', bg: 'cidade', fx: 'luz', text: '"E este é o sinal: o altar vai se rachar, e a cinza que está sobre ele vai se derramar."', r: '1 Reis 13:3' },
        { art: '👑👉😠✋', bg: 'cidade', text: 'Jeroboão esticou a mão e gritou: "Prendam esse homem!" Na mesma hora, a mão do rei secou, e ele não conseguia mais dobrá-la. E o altar se rachou, e a cinza se derramou!', r: '1 Reis 13:4-5' },
        { art: '👑🙏🧔✋', bg: 'cidade', fx: 'brilho', text: 'O rei pediu: "Ore por mim ao Senhor, para que a minha mão volte!" O homem de Deus orou, e a mão do rei ficou boa de novo.', r: '1 Reis 13:6' },
        { art: '🧔🚫🍞💧', bg: 'campo', text: 'Deus tinha dado ao homem de Deus uma ordem clara: "Não coma pão, não beba água nesse lugar e volte por outro caminho." Por isso ele recusou o convite do rei para comer.', r: '1 Reis 13:7-10' },
        { art: '👴🤥🧔', bg: 'campo', text: 'Mas um velho profeta de Betel foi atrás dele e mentiu: "Um anjo me disse que você pode vir comer na minha casa." O homem de Deus acreditou, desobedeceu à ordem de Deus e foi comer.', r: '1 Reis 13:11-19' },
        { art: '🦁🫏🛤️', bg: 'campo', text: 'Por ter desobedecido, quando voltava para casa, um leão o encontrou no caminho e o matou. Que triste! Ele foi tão corajoso diante do rei, mas não obedeceu até o fim.', r: '1 Reis 13:20-25' },
        { art: '📜⏳✅', bg: 'aurora', fx: 'luz', text: 'E a profecia? Trezentos anos depois, nasceu um rei chamado Josias, da família de Davi, e ele destruiu exatamente aquele altar de Betel, como o homem de Deus tinha dito!', r: '2 Reis 23:15-16' }
      ],
      god: 'A palavra de Deus sempre se cumpre. Devemos obedecer ao que Deus disse, mesmo quando alguém diz o contrário.',
      jesus: 'O homem de Deus foi corajoso, mas foi enganado e desobedeceu. Jesus também foi tentado com palavras falsas, mas sempre respondeu: "Está escrito!" (Mateus 4:4-10). Jesus obedeceu ao Pai até o fim, em tudo. Por isso podemos confiar nele, e Ele nos ensina a conhecer a Palavra para não sermos enganados.',
      verse: { ref: 'Gálatas 1:8', tx: 'Mas, ainda que nós mesmos ou um anjo do céu vos anuncie outro evangelho além do que já vos tenho anunciado, seja anátema.' },
      small: [
        { q: 'O que aconteceu com o altar?', o: [['💥', 'Se rachou'], ['🌸', 'Floresceu'], ['🚀', 'Voou']] },
        { q: 'O que aconteceu com a mão do rei?', o: [['✋', 'Secou e depois sarou'], ['🎨', 'Ficou azul'], ['👍', 'Nada']] },
        { q: 'Devemos obedecer a Deus mesmo se alguém disser o contrário?', o: [['✅', 'Sim'], ['❌', 'Não'], ['🤷', 'Só às vezes']] }
      ],
      big: [
        { q: 'Que nome o homem de Deus anunciou?', o: ['Josias', 'Davi', 'Jeroboão', 'Elias'], e: '1 Reis 13:2.' },
        { q: 'Qual era a ordem de Deus ao homem de Deus?', o: ['Não comer nem beber ali e voltar por outro caminho', 'Ficar morando em Betel', 'Prender o rei', 'Construir um altar'], e: '1 Reis 13:9.' },
        { q: 'Como o velho profeta o enganou?', o: ['Disse que um anjo tinha mandado', 'Com dinheiro', 'Com uma espada', 'Com música'], e: '1 Reis 13:18.' },
        { q: 'Quando a profecia sobre o altar se cumpriu?', o: ['Uns trezentos anos depois, com Josias', 'No mesmo dia', 'Nunca', 'Com Salomão'], e: '2 Reis 23:15-16.' }
      ],
      parents: 'Capítulo difícil: o homem de Deus morre por desobedecer, enganado por um profeta mentiroso. Foi apresentado com cuidado. Ponto central: a Palavra de Deus é a autoridade final, acima até de quem diz falar em nome de um anjo (Gálatas 1:8). Leitura junto: 1 Reis 13:1-10.'
    },
    {
      id: 'dv4', title: 'Asa confia no Senhor', ref: '1 Reis 15:9-24; 2 Crônicas 14 – 16', icon: '🛡️',
      recap: 'Na lição passada, a palavra do homem de Deus contra o altar de Betel se cumpriu.',
      scenes: [
        { art: '👑🏛️✨', bg: 'palacio', text: 'No reino de Judá, depois de Roboão e do seu filho, reinou Asa, bisneto de Salomão. A Bíblia diz que Asa fez o que era bom e reto aos olhos do Senhor.', r: '2 Crônicas 14:2' },
        { art: '🔨🗿💥', bg: 'cidade', fx: 'vento', text: 'Ele tirou os altares dos deuses falsos, quebrou os ídolos e mandou o povo de Judá buscar o Senhor e obedecer à sua Lei.', r: '2 Crônicas 14:3-5' },
        { art: '⚔️⚔️⚔️🌍', bg: 'deserto', text: 'Um dia, veio contra Judá um exército enorme, de Zerá, o etíope, com muito mais soldados e carros de guerra do que Asa tinha.', r: '2 Crônicas 14:9' },
        { art: '👑🙏✨', bg: 'deserto', fx: 'luz', text: 'Asa clamou: "Senhor, para ti não faz diferença ajudar o forte ou o fraco. Ajuda-nos, Senhor, nosso Deus, porque em ti confiamos, e em teu nome viemos contra esta multidão!"', r: '2 Crônicas 14:11' },
        { art: '🏃🏃💨🛡️', bg: 'deserto', fx: 'brilho', text: 'E o Senhor derrotou o grande exército diante de Asa e de Judá. Os inimigos fugiram!', r: '2 Crônicas 14:12' },
        { art: '🧔📣👑', bg: 'cidade', fx: 'luz', text: 'O profeta Azarias disse a Asa: "O Senhor está com vocês enquanto vocês estiverem com Ele. Se vocês o buscarem, vão encontrá-lo." E o povo fez uma aliança de buscar o Senhor de todo o coração.', r: '2 Crônicas 15:1-2, 12' },
        { art: '👑💰🤝', bg: 'palacio', text: 'Mas, anos depois, quando outro rei atacou, Asa não orou. Pegou o ouro do templo e pagou o rei da Síria para ajudá-lo. Ele confiou num homem, e não em Deus.', r: '2 Crônicas 16:1-3' },
        { art: '🧔💬👀🌍', bg: 'aurora', fx: 'luz', text: 'O profeta Hanani disse: "Você confiou no rei da Síria, e não no Senhor! Os olhos do Senhor passam por toda a terra, para mostrar a sua força em favor daqueles que têm o coração inteiro com Ele."', r: '2 Crônicas 16:7-9' }
      ],
      god: 'Deus ajuda quem confia nele, seja forte ou fraco. Os seus olhos procuram corações inteiros.',
      jesus: 'Asa confiou em Deus na primeira batalha, mas depois confiou num rei estrangeiro. Jesus confiou no Pai sempre, até na cruz: "Pai, nas tuas mãos entrego o meu espírito" (Lucas 23:46). E Jesus nos ensina: "Não se turbe o vosso coração; credes em Deus, crede também em mim" (João 14:1).',
      verse: { ref: '2 Crônicas 16:9', tx: 'Porque, quanto ao Senhor, seus olhos passam por toda a terra, para mostrar-se forte para com aqueles cujo coração é perfeito para com ele.' },
      small: [
        { q: 'O que Asa fez com os ídolos?', o: [['🔨', 'Quebrou'], ['🙇', 'Adorou'], ['🎁', 'Deu de presente']] },
        { q: 'O que Asa fez diante do grande exército?', o: [['🙏', 'Orou a Deus'], ['🏃', 'Fugiu'], ['😴', 'Dormiu']] },
        { q: 'Para onde olham os olhos de Deus?', o: [['🌍', 'Para toda a terra'], ['🙈', 'Para lugar nenhum'], ['🏠', 'Só para uma casa']] }
      ],
      big: [
        { q: 'O que Asa disse na oração?', o: ['Para Deus não faz diferença ajudar o forte ou o fraco', 'Que tinha muitos soldados', 'Que ia fugir', 'Nada'], e: '2 Crônicas 14:11.' },
        { q: 'O que o profeta Azarias prometeu?', o: ['Se o buscarem, vão encontrá-lo', 'Que haveria fome', 'Que Asa perderia', 'Nada'], e: '2 Crônicas 15:2.' },
        { q: 'Qual foi o erro de Asa depois?', o: ['Confiou no rei da Síria, e não em Deus', 'Quebrou ídolos', 'Orou demais', 'Foi ao templo'], e: '2 Crônicas 16:2-7.' },
        { q: 'Quem Deus procura com os seus olhos?', o: ['Os que têm o coração inteiro com Ele', 'Os mais ricos', 'Os mais fortes', 'Os mais velhos'], e: '2 Crônicas 16:9.' }
      ],
      parents: 'A rainha-mãe Maacá removida (15:16) e a doença dos pés de Asa (16:12) foram omitidas. Ponto central: confiar em Deus no começo e perseverar no fim. Leitura junto: 2 Crônicas 14:9-12 e 16:7-9.'
    },
    {
      id: 'dv5', title: 'Josafá ensina a Lei ao povo', ref: '2 Crônicas 17; 19', icon: '📜',
      recap: 'Na lição passada, o rei Asa confiou em Deus e venceu, mas depois confiou num rei estrangeiro.',
      scenes: [
        { art: '👑💛📖', bg: 'palacio', text: 'Depois de Asa, reinou o seu filho Josafá. O Senhor estava com ele, porque ele andou nos primeiros caminhos de Davi e buscou o Deus do seu pai.', r: '2 Crônicas 17:3-4' },
        { art: '👑🔨🗿', bg: 'cidade', text: 'O coração de Josafá tinha coragem nos caminhos do Senhor. Ele tirou os lugares de adoração aos ídolos de Judá.', r: '2 Crônicas 17:6' },
        { art: '🧔🧔📜🛤️', bg: 'campo', fx: 'brilho', text: 'Então fez algo muito especial: enviou príncipes, levitas e sacerdotes por todas as cidades de Judá, levando o livro da Lei do Senhor, para ensinar o povo!', r: '2 Crônicas 17:7-9' },
        { art: '🏘️👥📖', bg: 'cidade', fx: 'luz', text: 'Eles iam de cidade em cidade, e o povo aprendia a Palavra de Deus. Era como uma grande escola bíblica que andava pelo país!', r: '2 Crônicas 17:9' },
        { art: '🌍😨🎁', bg: 'palacio', text: 'O temor do Senhor caiu sobre os reinos vizinhos, e eles não fizeram guerra contra Josafá. Ao contrário: traziam presentes para ele!', r: '2 Crônicas 17:10-11' },
        { art: '⚖️👑🧔', bg: 'cidade', text: 'Josafá também colocou juízes em todas as cidades e disse a eles: "Vejam bem o que vocês fazem! Vocês não julgam em nome de homens, mas em nome do Senhor."', r: '2 Crônicas 19:5-6' },
        { art: '🚫💰⚖️', bg: 'cidade', fx: 'luz', text: '"Que o temor do Senhor esteja com vocês! Porque no Senhor não há injustiça, nem favoritismo, nem suborno." Os juízes deviam ser justos como Deus é justo.', r: '2 Crônicas 19:7' },
        { art: '👑⚠️🤝', bg: 'palacio', text: 'Josafá teve um erro: fez amizade e aliança com Acabe, o rei mau do norte. O profeta Jeú o repreendeu: "Você deve ajudar o ímpio e amar os que odeiam o Senhor?" Mas disse também: "Há coisas boas em você."', r: '2 Crônicas 18:1; 19:2-3' }
      ],
      god: 'Deus quer que o seu povo conheça a sua Palavra. Ele é justo e não faz favoritismo.',
      jesus: 'Josafá enviou mestres pelas cidades para ensinar a Lei. Jesus fez o mesmo e muito mais: "Percorria Jesus todas as cidades e aldeias, ensinando" (Mateus 9:35). E, antes de subir ao céu, mandou os discípulos irem por todo o mundo: "Ensinando-as a guardar todas as coisas que eu vos tenho mandado" (Mateus 28:19-20).',
      verse: { ref: '2 Crônicas 19:7', tx: 'Porque no Senhor nosso Deus não há iniquidade nem acepção de pessoas, nem aceitação de suborno.' },
      small: [
        { q: 'O que os enviados de Josafá levavam?', o: [['📜', 'O livro da Lei'], ['🍕', 'Pizza'], ['⚽', 'Uma bola']] },
        { q: 'O que eles faziam nas cidades?', o: [['📖', 'Ensinavam a Palavra'], ['🎢', 'Brincavam'], ['⚔️', 'Brigavam']] },
        { q: 'Deus é justo?', o: [['⚖️', 'Sim, sempre'], ['❌', 'Não'], ['🤷', 'Às vezes']] }
      ],
      big: [
        { q: 'Nos caminhos de quem Josafá andou?', o: ['Nos primeiros caminhos de Davi', 'Nos de Jeroboão', 'Nos de Saul', 'Nos de Acabe'], e: '2 Crônicas 17:3.' },
        { q: 'O que os reinos vizinhos faziam?', o: ['Traziam presentes e não faziam guerra', 'Atacavam', 'Fugiam', 'Nada'], e: '2 Crônicas 17:10-11.' },
        { q: 'O que Josafá disse aos juízes?', o: ['Vocês julgam em nome do Senhor', 'Aceitem presentes', 'Julguem como quiserem', 'Não julguem'], e: '2 Crônicas 19:6.' },
        { q: 'Qual foi o erro de Josafá?', o: ['Fazer aliança com o rei mau Acabe', 'Ensinar a Lei', 'Colocar juízes', 'Orar'], e: '2 Crônicas 19:2.' }
      ],
      parents: 'A batalha de Ramote-Gileade com Acabe (2 Crônicas 18) será contada no arco de Elias. Ponto central: o ensino da Palavra e a justiça sem favoritismo. Sugestão: conversar sobre como a família pode "levar a Palavra" a outras pessoas. Leitura junto: 2 Crônicas 17:3-10.'
    },
    {
      id: 'dv6', title: 'A batalha vencida com louvor', ref: '2 Crônicas 20', icon: '🎶',
      recap: 'Na lição passada, Josafá enviou mestres para ensinar a Lei de Deus em todas as cidades.',
      scenes: [
        { art: '🏃📣👑', bg: 'palacio', text: 'Um dia, chegaram mensageiros correndo: "Uma grande multidão vem contra você! Moabitas, amonitas e outros povos, todos juntos, e já estão perto!"', r: '2 Crônicas 20:1-2' },
        { art: '👑😨🙏', bg: 'palacio', text: 'Josafá teve medo. Mas, em vez de correr, ele se pôs a buscar o Senhor e mandou todo o povo de Judá jejuar e orar.', r: '2 Crônicas 20:3' },
        { art: '👨‍👩‍👧‍👦🏛️🙏', bg: 'cidade', fx: 'luz', text: 'O povo veio de todas as cidades. Homens, mulheres e até as crianças pequenas ficaram em pé diante do Senhor, no templo.', r: '2 Crônicas 20:4, 13' },
        { art: '👑🙏👀⬆️', bg: 'cidade', fx: 'luz', text: 'Josafá orou: "Ó nosso Deus, nós não temos força contra esta grande multidão, e não sabemos o que fazer. Mas os nossos olhos estão em ti!"', r: '2 Crônicas 20:12' },
        { art: '🧔✨📣', bg: 'cidade', fx: 'luz', text: 'O Espírito do Senhor veio sobre um levita, Jaaziel, que disse: "Não tenham medo! A batalha não é de vocês, mas de Deus. Fiquem parados e vejam o livramento do Senhor!"', r: '2 Crônicas 20:14-17' },
        { art: '🎶🧔🧔⬆️', bg: 'aurora', fx: 'brilho', text: 'De manhã cedo, Josafá fez algo surpreendente: colocou os cantores na frente do exército! Eles saíram cantando: "Louvem o Senhor, porque a sua misericórdia dura para sempre!"', r: '2 Crônicas 20:20-21' },
        { art: '⚔️🔄⚔️💨', bg: 'deserto', fx: 'vento', text: 'Quando começaram a cantar, o Senhor colocou emboscadas contra os inimigos, e eles se confundiram e lutaram uns contra os outros. Ninguém escapou!', r: '2 Crônicas 20:22-23' },
        { art: '💰💰💰3️⃣', bg: 'deserto', fx: 'brilho', text: 'Quando Judá chegou ao lugar, a batalha já tinha acabado! Eles encontraram tantas riquezas que levaram três dias para juntar tudo.', r: '2 Crônicas 20:24-25' },
        { art: '🎶🎺🏛️', bg: 'aurora', fx: 'brilho', text: 'Eles chamaram aquele vale de Beraca, que quer dizer "bênção". E voltaram para Jerusalém com harpas e trombetas, alegres, para o templo do Senhor.', r: '2 Crônicas 20:26-28' }
      ],
      god: 'Quando não sabemos o que fazer, podemos olhar para Deus. A batalha é dele.',
      jesus: 'Josafá disse: "Não sabemos o que fazer, mas os nossos olhos estão em ti." A Bíblia nos ensina a correr a carreira "olhando para Jesus, autor e consumador da fé" (Hebreus 12:2). E a maior batalha de todas, contra o pecado e a morte, Jesus venceu sozinho, na cruz. Nós só precisamos confiar e louvar!',
      verse: { ref: '2 Crônicas 20:15', tx: 'Não temais, nem vos assusteis por causa desta grande multidão; pois a peleja não é vossa, mas de Deus.' },
      small: [
        { q: 'O que Josafá fez quando teve medo?', o: [['🙏', 'Buscou o Senhor'], ['🏃', 'Fugiu'], ['😴', 'Foi dormir']] },
        { q: 'Quem foi na frente do exército?', o: [['🎶', 'Os cantores'], ['🐘', 'Elefantes'], ['🚜', 'Tratores']] },
        { q: 'De quem era a batalha?', o: [['✨', 'De Deus'], ['👑', 'Só do rei'], ['🐜', 'Das formigas']] }
      ],
      big: [
        { q: 'Quem estava no templo orando?', o: ['Homens, mulheres e crianças', 'Só o rei', 'Só os soldados', 'Ninguém'], e: '2 Crônicas 20:13.' },
        { q: 'O que Josafá disse na oração?', o: ['"Não sabemos o que fazer, mas os nossos olhos estão em ti"', '"Somos fortes"', '"Vamos fugir"', '"Não precisamos de ti"'], e: '2 Crônicas 20:12.' },
        { q: 'O que aconteceu com os inimigos?', o: ['Lutaram uns contra os outros', 'Venceram', 'Fizeram as pazes', 'Dormiram'], e: '2 Crônicas 20:23.' },
        { q: 'O que quer dizer Beraca?', o: ['Bênção', 'Guerra', 'Medo', 'Pedra'], e: '2 Crônicas 20:26.' }
      ],
      parents: 'Encerramento do arco do reino dividido. As crianças estavam presentes na oração (20:13), um bom detalhe para destacar. Ponto central: oração e louvor diante do impossível. Sugestão: quando a família não souber o que fazer, orar com as palavras de 20:12. Leitura junto: 2 Crônicas 20:1-22.'
    }
  ]
};
