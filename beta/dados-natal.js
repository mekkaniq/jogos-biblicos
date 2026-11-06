/* Edição de Natal — "Caminho até Belém". Mesmo formato das histórias do Kids (cenas, perguntas para Pequeninos e Leitores, figurinha).
   Regras: sem imagem de Jesus nem de anjos (só luz e estrelas); toda história aponta para Jesus; versículo à vista.
   Em cada pergunta a PRIMEIRA opção é a certa (o app embaralha na hora de mostrar). TEXTOS PARA REVISÃO DO PASTOR. */
window.NATAL_DATA = {
  stories: [
    {
      id: 'natal1', natal: 1, name: 'Uma boa notícia para Maria', icon: '🌟', sticker: '🌟', scene: 'noite', ref: 'Lucas 1:26-38',
      scenes: [
        { art: '👣💛', bg: 'aurora', fx: 'luz', text: 'Ontem aprendemos que para Deus nada é impossível. Hoje chegamos à notícia mais importante de todo o nosso caminho!', r: 'Lucas 1:37' },
        { art: '🏡🌿', bg: 'galileia', text: 'Numa cidadezinha da Galileia chamada Nazaré vivia uma moça chamada Maria. Ela era noiva de José, um homem da família do rei Davi.', r: 'Lucas 1:26-27' },
        { art: '🙏💛', bg: 'galileia', fx: 'coracoes', text: 'Maria amava a Deus e confiava nele. Um dia, o anjo Gabriel foi enviado por Deus até ela.', r: 'Lucas 1:28' },
        { art: '✨🕯️', bg: 'noite', fx: 'luz', text: 'O anjo disse: "Salve, agraciada; o Senhor é contigo." Maria ficou assustada e pensou: "Que saudação é essa?"', r: 'Lucas 1:28-29' },
        { art: '💛😌', bg: 'noite', fx: 'brilho', text: 'Gabriel disse: "Maria, não temas, porque achaste graça diante de Deus." Graça é um presente que a gente não merece, mas Deus dá por amor.', r: 'Lucas 1:30' },
        { art: '⭐🔤', bg: 'noite', fx: 'estrelas', text: '"E eis que em teu ventre conceberás e darás à luz um filho, e pôr-lhe-ás o nome de Jesus." O nome Jesus quer dizer "o Senhor salva".', r: 'Lucas 1:31' },
        { art: '👑♾️', bg: 'aurora', fx: 'luz', text: '"Este será grande, e será chamado Filho do Altíssimo; e o Senhor Deus lhe dará o trono de Davi, seu pai, e o seu reino não terá fim." Lembra da promessa a Davi?', r: 'Lucas 1:32-33' },
        { art: '❓🤔', bg: 'galileia', text: 'Maria perguntou: "Como se fará isto, visto que não conheço homem?" Ela ainda não era casada.', r: 'Lucas 1:34' },
        { art: '🕊️✨', bg: 'aurora', fx: 'brilho', text: 'O anjo explicou: "Descerá sobre ti o Espírito Santo, e a virtude do Altíssimo te cobrirá com a sua sombra." Seria um milagre de Deus, como Isaías tinha prometido: a virgem teria um filho!', r: 'Lucas 1:35' },
        { art: '👵🤰', bg: 'monte', fx: 'coracoes', text: 'E Gabriel contou: "Isabel, tua parente, também concebeu um filho em sua velhice. Porque para Deus nada é impossível."', r: 'Lucas 1:36-37' },
        { art: '🙏💛', bg: 'aurora', fx: 'coracoes', text: 'Maria respondeu: "Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra." Maria disse sim a Deus!', r: 'Lucas 1:38' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'O Filho de Maria é Jesus, o Salvador prometido. Como Maria, nós também podemos confiar em Deus e dizer: "Sim, Senhor, eu confio em ti."', r: 'Mateus 1:21' }
      ],
      small: [
        { q: 'Qual era o nome da moça de Nazaré?', o: [['💛', 'Maria'], ['🐑', 'Nine'], ['🌟', 'Estrela']] },
        { q: 'Que nome o menino ia ter?', o: [['⭐', 'Jesus'], ['🦁', 'Leão'], ['🌳', 'Árvore']] },
        { q: 'Maria confiou em quem?', o: [['🙏', 'Em Deus'], ['🤖', 'Num robô'], ['🐶', 'Num cachorro']] }
      ],
      big: [
        { q: 'O que o anjo disse para Maria não sentir?', o: ['Medo', 'Sono', 'Fome', 'Pressa'], e: '"Maria, não temas, porque achaste graça diante de Deus" (Lucas 1:30).' },
        { q: 'Que nome Maria daria ao seu filho?', o: ['Jesus', 'Davi', 'Moisés', 'João'], e: 'O nome Jesus quer dizer "o Senhor salva" (Lucas 1:31).' },
        { q: 'Como Maria respondeu a Deus?', o: ['Confiando nele', 'Fugindo', 'Duvidando', 'Chorando de raiva'], e: '"Cumpra-se em mim segundo a tua palavra" (Lucas 1:38).' }
      ]
    },
    {
      id: 'natal2', natal: 1, name: 'José confia em Deus', icon: '🛠️', sticker: '🛠️', scene: 'noite', ref: 'Mateus 1:18-25',
      scenes: [
        { art: '👣🌅', bg: 'aurora', fx: 'luz', text: 'Ontem Zacarias cantou sobre o sol que nasce do alto. Agora voltamos para Nazaré, para conhecer melhor um homem muito importante nessa história: José.', r: 'Lucas 1:78' },
        { art: '🛠️🪵', bg: 'galileia', text: 'José era carpinteiro. Ele trabalhava com madeira, fazendo portas, mesas e ferramentas. Era um homem trabalhador e bom.', r: 'Mateus 13:55' },
        { art: '💍💛', bg: 'galileia', fx: 'coracoes', text: 'José estava noivo de Maria. Os dois iam se casar e começar uma família.', r: 'Mateus 1:18' },
        { art: '😟💭', bg: 'galileia', fx: 'vento', text: 'Mas José descobriu que Maria estava esperando um bebê, e ele sabia que o bebê não era dele. José ficou muito preocupado e triste.', r: 'Mateus 1:18-19' },
        { art: '🤫💛', bg: 'galileia', text: 'José era justo e bondoso. Ele não queria envergonhar Maria na frente de ninguém. Pensou em desfazer o noivado em segredo.', r: 'Mateus 1:19' },
        { art: '🌙💤', bg: 'noite', fx: 'estrelas', text: 'Enquanto José pensava nisso, adormeceu. E, num sonho, um anjo do Senhor falou com ele.', r: 'Mateus 1:20' },
        { art: '✨🗣️', bg: 'noite', fx: 'luz', text: '"José, filho de Davi, não temas receber a Maria, tua mulher, porque o que nela está gerado é do Espírito Santo."', r: 'Mateus 1:20' },
        { art: '⭐🔤', bg: 'noite', fx: 'brilho', text: '"E dará à luz um filho, e chamarás o seu nome Jesus; porque ele salvará o seu povo dos seus pecados."', r: 'Mateus 1:21' },
        { art: '📜💛', bg: 'aurora', fx: 'luz', text: 'Tudo isso aconteceu para cumprir o que Deus tinha dito pelo profeta Isaías: "Eis que a virgem conceberá, e dará à luz um filho, e chamá-lo-ão pelo nome de Emanuel."', r: 'Mateus 1:22-23' },
        { art: '🌅🙏', bg: 'aurora', fx: 'coracoes', text: 'Quando José acordou, fez exatamente como o anjo mandou. Não esperou, não reclamou: obedeceu a Deus.', r: 'Mateus 1:24' },
        { art: '🏡💍', bg: 'jardim', fx: 'coracoes', text: 'José recebeu Maria como sua esposa e cuidou dela com carinho. E, quando o menino nasceu, foi José quem deu a ele o nome: Jesus.', r: 'Mateus 1:24-25' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'José confiou em Deus mesmo sem entender tudo. Nós também podemos confiar. O nome de Jesus nos lembra: Ele veio nos salvar.', r: 'Mateus 1:21' }
      ],
      small: [
        { q: 'No que José trabalhava?', o: [['🛠️', 'Com madeira'], ['🐟', 'Com peixes'], ['🍞', 'Com pão']] },
        { q: 'Quando Deus falou com José?', o: [['🌙', 'Num sonho'], ['☀️', 'No almoço'], ['🏊', 'Na piscina']] },
        { q: 'José fez o que Deus mandou?', o: [['💛', 'Sim, obedeceu'], ['🙈', 'Não quis'], ['😴', 'Esqueceu']] }
      ],
      big: [
        { q: 'Como Deus falou com José?', o: ['Num sonho', 'Numa carta', 'Por um mensageiro do rei', 'Numa nuvem escura'], e: 'Deus falou a José em sonho, e ele acreditou (Mateus 1:20).' },
        { q: 'Por que o menino se chamaria Jesus?', o: ['Porque salvaria o seu povo dos pecados', 'Porque era o nome do avô', 'Porque José gostava', 'Porque era o nome de uma cidade'], e: '"Ele salvará o seu povo dos seus pecados" (Mateus 1:21).' },
        { q: 'O que José fez quando acordou?', o: ['Obedeceu a Deus', 'Foi embora', 'Ficou com medo e se escondeu', 'Voltou a dormir'], e: 'José fez como o anjo do Senhor lhe tinha mandado (Mateus 1:24).' }
      ]
    },
    {
      id: 'natal3', natal: 1, name: 'A viagem a Belém', icon: '🫏', sticker: '🫏', scene: 'campo', ref: 'Lucas 2:1-5',
      scenes: [
        { art: '👣🫏', bg: 'aurora', fx: 'luz', text: 'Lembra da promessa de Miqueias? O Rei nasceria em Belém. Mas Maria e José moravam em Nazaré, bem longe dali. Como Deus ia resolver isso?', r: 'Miqueias 5:2' },
        { art: '👑📜', bg: 'palacio', text: 'Lá em Roma, o imperador César Augusto deu uma ordem: todas as pessoas do império precisavam ser contadas e escrever o nome numa lista.', r: 'Lucas 2:1' },
        { art: '🏘️👣', bg: 'cidade', text: 'Cada pessoa tinha que ir para a cidade da sua família. E sabe de que família José era? Da família de Davi!', r: 'Lucas 2:3' },
        { art: '🏘️⭐', bg: 'campo', fx: 'luz', text: 'Então José precisava ir para Belém, a cidade de Davi. O imperador nem sabia, mas Deus estava usando aquela ordem para cumprir a sua promessa.', r: 'Lucas 2:4' },
        { art: '🎒🤰', bg: 'galileia', text: 'Maria foi com José. A barriga dela já estava grande: o bebê ia nascer logo, logo.', r: 'Lucas 2:5' },
        { art: '🫏🛤️', bg: 'campo', fx: 'vento', text: 'Eles pegaram a estrada. Eram uns 150 quilômetros, por caminhos de terra, subindo e descendo morros. Muita gente fazia essa viagem a pé.', r: 'Lucas 2:4-5' },
        { art: '⛰️☀️', bg: 'monte', text: 'Foram vários dias de caminhada. De dia, o sol esquentava. José cuidava de Maria e ia devagar, um passo de cada vez.', r: 'Lucas 2:4' },
        { art: '🌙🔥', bg: 'noite', fx: 'estrelas', text: 'De noite, paravam para descansar, faziam uma fogueirinha e olhavam as estrelas. Talvez lembrassem das estrelas de Abraão e da estrela de Jacó.', r: 'Lucas 2:4' },
        { art: '🙏💛', bg: 'noite', fx: 'coracoes', text: 'Mesmo cansados, eles confiavam em Deus. "O Senhor guardará a tua entrada e a tua saída."', r: 'Salmo 121:7-8' },
        { art: '🏘️🌅', bg: 'cidade', fx: 'brilho', text: 'Até que, num fim de tarde, apareceram as casinhas de Belém lá no alto do morro. Chegaram!', r: 'Lucas 2:4' },
        { art: '🏘️👥', bg: 'cidade', text: 'A cidade estava lotada de gente que tinha vindo para a contagem. Maria e José estavam em Belém, esperando a hora do bebê nascer.', r: 'Lucas 2:6' },
        { art: '⭐✝️', bg: 'noite', fx: 'luz', text: 'Deus cuida de cada detalhe para cumprir as suas promessas. Enquanto Maria e José esperam em Belém, nos próximos dias vamos descobrir quem é esse menino tão esperado.', r: 'Lucas 2:6' }
      ],
      small: [
        { q: 'Para onde José e Maria foram?', o: [['🏘️', 'Belém'], ['🌊', 'O mar'], ['🏝️', 'Uma ilha']] },
        { q: 'Quem foi com Maria na viagem?', o: [['🛠️', 'José'], ['🦁', 'Um leão'], ['🤖', 'Um robô']] },
        { q: 'Quem cuidava deles na viagem?', o: [['🙏', 'Deus'], ['👾', 'Um monstro'], ['🤖', 'Um robô']] }
      ],
      big: [
        { q: 'Por que José precisou ir a Belém?', o: ['Para se registrar, pois era da família de Davi', 'Para vender madeira', 'Para visitar um amigo', 'Para fugir do rei'], e: 'José era da casa e da família de Davi (Lucas 2:4).' },
        { q: 'O que o profeta Miqueias tinha dito sobre Belém?', o: ['Que o Salvador nasceria lá', 'Que ela seria destruída', 'Que lá faltaria água', 'Que lá moraria o imperador'], e: 'Deus prometeu o Salvador em Belém muitos anos antes (Miqueias 5:2).' },
        { q: 'O que Deus estava fazendo naquela viagem?', o: ['Cumprindo a sua promessa', 'Castigando José', 'Esquecendo Maria', 'Procurando um tesouro'], e: 'Deus guiava tudo para cumprir o que tinha prometido pelo profeta (Miqueias 5:2; Lucas 2:4-6).' }
      ]
    },
    {
      id: 'natal4', natal: 1, name: 'Nasceu o Salvador', icon: '⭐', sticker: '⭐', scene: 'noite', ref: 'Lucas 2:6-7',
      scenes: [
        { art: '👣🍞', bg: 'noite', fx: 'estrelas', text: 'Do jardim até aqui, foram muitas paradas: promessas, profetas, anjos, sonhos e uma longa viagem. Esta é a noite mais esperada de todo o caminho!', r: 'Gênesis 3:15' },
        { art: '🏘️🌙', bg: 'cidade', fx: 'estrelas', text: 'Maria e José estavam em Belém. E, enquanto eles estavam ali, chegou o dia: o bebê ia nascer.', r: 'Lucas 2:6' },
        { art: '🚪🙅', bg: 'cidade', fx: 'vento', text: 'Mas a cidade estava cheia de gente, e não havia lugar para eles na hospedaria. Todas as portas pareciam fechadas.', r: 'Lucas 2:7' },
        { art: '🐄🫏', bg: 'noite', text: 'Então eles ficaram num lugar simples, onde se guardavam os animais. Tinha cheiro de palha, de bicho e de feno.', r: 'Lucas 2:7' },
        { art: '🌌🤫', bg: 'noite', fx: 'estrelas', text: 'A noite estava silenciosa. Ninguém em Belém sabia o que estava para acontecer ali.', r: 'Lucas 2:7' },
        { art: '⭐🌾', bg: 'noite', fx: 'luz', text: 'E ali nasceu Jesus, o Filho de Deus! Maria o envolveu em panos e o deitou numa manjedoura, uma caminha de palha onde os animais comiam.', r: 'Lucas 2:7' },
        { art: '📜✅', bg: 'aurora', fx: 'brilho', text: 'A promessa do jardim se cumpriu. A estrela de Jacó, o Rei de Davi, o Emanuel de Isaías, o menino de Belém de Miqueias: tudo se cumpriu naquela noite!', r: 'Gênesis 3:15; Miqueias 5:2' },
        { art: '👑🌾', bg: 'aurora', fx: 'coracoes', text: 'O Rei dos reis não nasceu num palácio, mas num lugar humilde. O Criador do mundo estava deitado na palha.', r: 'Filipenses 2:6-7' },
        { art: '🍞🏘️', bg: 'campo', fx: 'luz', text: 'Na casa do pão, nasceu o Pão da vida. O Verbo se fez carne. A luz chegou na escuridão.', r: 'João 6:35' },
        { art: '💛🤍', bg: 'aurora', fx: 'coracoes', text: 'Maria olhava para o seu bebê e guardava tudo no coração. José estava ali, cuidando dos dois.', r: 'Lucas 2:19' },
        { art: '🕊️✨', bg: 'aurora', fx: 'brilho', text: 'O nome Emanuel quer dizer "Deus conosco". Naquela noite, Deus veio morar entre nós, por amor.', r: 'Mateus 1:23' },
        { art: '⭐✝️', bg: 'noite', fx: 'luz', text: '"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito." Na noite de Natal, o maior presente de todos é Jesus.', r: 'João 3:16' }
      ],
      small: [
        { q: 'Onde Jesus foi deitado?', o: [['🌾', 'Na manjedoura'], ['🛏️', 'Numa cama de rei'], ['🏰', 'Num castelo']] },
        { q: 'Quem nasceu em Belém?', o: [['⭐', 'Jesus'], ['🦁', 'Um leão'], ['🐑', 'Uma ovelha']] },
        { q: 'O que "Emanuel" quer dizer?', o: [['💛', 'Deus conosco'], ['🍞', 'Pão quente'], ['🌧️', 'Chuva forte']] }
      ],
      big: [
        { q: 'Onde Maria deitou o seu filho?', o: ['Numa manjedoura', 'Num berço de ouro', 'No chão da estrada', 'Numa cadeira'], e: '"Deitou-o numa manjedoura, porque não havia lugar para eles na estalagem" (Lucas 2:7).' },
        { q: 'O que significa o nome Emanuel?', o: ['Deus conosco', 'Rei dos reis', 'Pastor de ovelhas', 'Filho do carpinteiro'], e: '"Emanuel, que traduzido é: Deus conosco" (Mateus 1:23).' },
        { q: 'Por que Jesus veio ao mundo?', o: ['Para nos salvar, por amor', 'Para ser rico', 'Para viajar', 'Para construir uma casa'], e: '"Deus amou o mundo de tal maneira que deu o seu Filho unigênito" (João 3:16).' }
      ]
    },
    {
      id: 'natal5', natal: 1, name: 'Boas novas aos pastores', icon: '🐑', sticker: '🐑', scene: 'campo', ref: 'Lucas 2:8-14',
      scenes: [
        { art: '👣⭐', bg: 'aurora', fx: 'luz', text: 'Feliz Natal! Ontem à noite, Jesus nasceu em Belém. Mas quem ia ficar sabendo dessa notícia primeiro?', r: 'Lucas 2:7' },
        { art: '🌙🐑', bg: 'campo', fx: 'estrelas', text: 'Nos campos perto de Belém, havia pastores cuidando das ovelhas durante a noite. Eram homens simples, que muita gente nem notava.', r: 'Lucas 2:8' },
        { art: '✨😨', bg: 'noite', fx: 'luz', text: 'De repente, um anjo do Senhor apareceu, e a glória do Senhor brilhou ao redor deles. Os pastores ficaram com muito medo!', r: 'Lucas 2:9' },
        { art: '💛🗣️', bg: 'noite', fx: 'brilho', text: 'Mas o anjo disse: "Não temais, porque eis aqui vos trago novas de grande alegria, que será para todo o povo." Para todo o povo: para você também!', r: 'Lucas 2:10' },
        { art: '⭐🏘️', bg: 'aurora', fx: 'luz', text: '"Pois, na cidade de Davi, vos nasceu hoje o Salvador, que é Cristo, o Senhor." Era a melhor notícia do mundo!', r: 'Lucas 2:11' },
        { art: '🌾🔍', bg: 'noite', fx: 'estrelas', text: '"E isto vos será por sinal: achareis o menino envolto em panos, e deitado numa manjedoura." Um Rei numa manjedoura! Que sinal diferente.', r: 'Lucas 2:12' },
        { art: '🎶🌌', bg: 'noite', fx: 'estrelas', text: 'Então o céu se encheu de louvor: "Glória a Deus nas alturas, paz na terra, boa vontade para com os homens!"', r: 'Lucas 2:13-14' },
        { art: '🏃‍♂️🌙', bg: 'campo', fx: 'vento', text: 'Quando a luz sumiu, os pastores disseram: "Vamos até Belém!" E foram depressa, correndo pela noite.', r: 'Lucas 2:15-16' },
        { art: '🌾💛', bg: 'noite', fx: 'coracoes', text: 'Chegando lá, encontraram Maria, José e o menino deitado na manjedoura, exatamente como o anjo tinha dito.', r: 'Lucas 2:16' },
        { art: '📣😄', bg: 'cidade', fx: 'coracoes', text: 'Os pastores contaram para todo mundo o que tinham ouvido sobre o menino. E todos que ouviam ficavam maravilhados.', r: 'Lucas 2:17-18' },
        { art: '👣✨', bg: 'aurora', fx: 'luz', text: 'O nosso caminho começou num jardim, com uma promessa, e terminou numa manjedoura, com o Salvador. Os pastores voltaram louvando a Deus, e nós também!', r: 'Gênesis 3:15; Lucas 2:20' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'O bebê de Belém cresceu, morreu na cruz por nós e ressuscitou. Ele é o Salvador, Cristo, o Senhor. Essa boa notícia é para você contar também. Feliz Natal!', r: 'Lucas 2:11' }
      ],
      small: [
        { q: 'Quem cuidava das ovelhas?', o: [['🐑', 'Os pastores'], ['👑', 'Os reis'], ['🐟', 'Os pescadores']] },
        { q: 'O que brilhou no céu?', o: [['✨', 'Uma grande luz'], ['🌈', 'Um arco-íris'], ['🔥', 'Uma fogueira']] },
        { q: 'Que notícia eles ouviram?', o: [['⭐', 'Nasceu o Salvador!'], ['🌧️', 'Vai chover'], ['🍞', 'Tem pão']] }
      ],
      big: [
        { q: 'Para quem Deus contou primeiro a notícia?', o: ['Para pastores', 'Para o rei Herodes', 'Para os sacerdotes', 'Para os soldados'], e: 'Deus deu a boa notícia a pastores simples (Lucas 2:8-11).' },
        { q: 'O que disseram aos pastores que estavam com medo?', o: ['"Não temais"', '"Fujam daqui"', '"Fiquem quietos"', '"Acordem as ovelhas"'], e: '"Não temais, porque eis que vos trago novas de grande alegria" (Lucas 2:10).' },
        { q: 'Quem é o Salvador que nasceu?', o: ['Cristo, o Senhor', 'Davi', 'Moisés', 'Um profeta qualquer'], e: '"Vos nasceu o Salvador, que é Cristo, o Senhor" (Lucas 2:11).' }
      ]
    },
    {
      id: 'natal6', natal: 1, name: 'Os pastores correm a Belém', icon: '🏃', sticker: '🏃', scene: 'campo', ref: 'Lucas 2:15-20',
      scenes: [
        { art: '🐑🏃', bg: 'campo', text: 'Quando a luz sumiu, os pastores disseram uns aos outros: "Vamos até Belém ver o que o Senhor nos anunciou!"', r: 'Lucas 2:15' },
        { art: '🌟🏘️', bg: 'noite', fx: 'estrelas', text: 'Eles foram depressa, sem esperar. Passaram pelas colinas, com o coração cheio de alegria.', r: 'Lucas 2:16' },
        { art: '🌾⭐', bg: 'aurora', fx: 'luz', text: 'Chegando lá, encontraram Maria, José e o menino deitado na manjedoura, exatamente como tinham ouvido.', r: 'Lucas 2:16' },
        { art: '🗣️💛', bg: 'jardim', fx: 'coracoes', text: 'Os pastores voltaram louvando a Deus por tudo o que viram e ouviram. E contaram a todos a boa notícia sobre Jesus!', r: 'Lucas 2:17-20' }
      ],
      small: [
        { q: 'O que os pastores fizeram?', o: [['🏃', 'Foram depressa a Belém'], ['😴', 'Voltaram a dormir'], ['🙈', 'Se esconderam']] },
        { q: 'O que eles acharam em Belém?', o: [['⭐', 'Jesus, como Deus disse'], ['🏰', 'Um castelo'], ['🌵', 'Um deserto']] },
        { q: 'O que os pastores fizeram depois?', o: [['🗣️', 'Contaram a boa notícia'], ['🤐', 'Ficaram calados'], ['🛒', 'Foram ao mercado']] }
      ],
      big: [
        { q: 'O que os pastores decidiram fazer?', o: ['Ir a Belém ver o que Deus anunciou', 'Ficar com as ovelhas e esquecer', 'Esperar o dia seguinte', 'Chamar o rei'], e: '"Vamos até Belém e vejamos isso que aconteceu" (Lucas 2:15).' },
        { q: 'Como eles foram?', o: ['Apressadamente', 'Devagar e com medo', 'De barco', 'Cada um por um lado'], e: '"Foram apressadamente" (Lucas 2:16).' },
        { q: 'O que fizeram ao voltar?', o: ['Louvaram a Deus e contaram a todos', 'Guardaram segredo', 'Foram dormir', 'Pediram presentes'], e: 'Voltaram "glorificando e louvando a Deus" (Lucas 2:20).' }
      ]
    },
    {
      id: 'natal7', natal: 1, name: 'A estrela dos magos', icon: '🌟', sticker: '🌟', scene: 'deserto', ref: 'Mateus 2:1-10',
      scenes: [
        { art: '🐪🐪🐪', bg: 'deserto', fx: 'estrelas', text: 'Muito longe, no Oriente, uns sábios que estudavam as estrelas viram uma estrela nova e diferente. Eles entenderam que um grande Rei tinha nascido.', r: 'Mateus 2:1-2' },
        { art: '🧭🌌', bg: 'noite', fx: 'estrelas', text: 'Então se prepararam e saíram em viagem. Perguntaram: "Onde está aquele que é nascido rei dos judeus? Porque vimos a sua estrela e viemos adorá-lo."', r: 'Mateus 2:2' },
        { art: '⭐🏘️', bg: 'noite', fx: 'luz', text: 'A estrela os guiou, até parar sobre o lugar onde estava o menino. Quando viram a estrela, os magos se alegraram muito!', r: 'Mateus 2:9-10' },
        { art: '💛📖', bg: 'aurora', fx: 'brilho', text: 'Os magos não eram da família de Jesus nem do mesmo povo, mas Deus os chamou. Jesus veio para todos os povos.', r: 'Isaías 60:3' }
      ],
      small: [
        { q: 'O que os magos viram no céu?', o: [['🌟', 'Uma estrela'], ['🌈', 'Um arco-íris'], ['🎈', 'Um balão']] },
        { q: 'Para quem eles foram a Belém?', o: [['⭐', 'Para adorar o Rei'], ['🏖️', 'Para passear'], ['🛍️', 'Para comprar']] },
        { q: 'De onde os magos vieram?', o: [['🌄', 'De longe, do Oriente'], ['🏠', 'Da casa ao lado'], ['🌙', 'Da lua']] }
      ],
      big: [
        { q: 'O que os magos estavam procurando?', o: ['O Rei que nasceu', 'Um tesouro escondido', 'Uma cidade nova', 'Um amigo perdido'], e: '"Onde está aquele que é nascido rei dos judeus?" (Mateus 2:2).' },
        { q: 'Como os magos souberam que o Rei tinha nascido?', o: ['Pela estrela que viram', 'Por uma carta', 'Pelo rei Herodes', 'Por um mensageiro'], e: '"Vimos a sua estrela no oriente" (Mateus 2:2).' },
        { q: 'O que eles queriam fazer com o Rei?', o: ['Adorá-lo', 'Prendê-lo', 'Esconder-se dele', 'Levá-lo embora'], e: '"Viemos adorá-lo" (Mateus 2:2).' }
      ]
    },
    {
      id: 'natal8', natal: 1, name: 'Presentes para o Rei', icon: '🎁', sticker: '🎁', scene: 'palacio', ref: 'Mateus 2:11-12',
      scenes: [
        { art: '🏠🌟', bg: 'noite', fx: 'luz', text: 'Os magos chegaram à casa onde estava o menino com Maria, sua mãe. Quando viram Jesus, se ajoelharam e o adoraram.', r: 'Mateus 2:11' },
        { art: '🎁💛', bg: 'palacio', fx: 'brilho', text: 'Eles abriram os seus tesouros e deram presentes: ouro, incenso e mirra. Eram presentes especiais, dignos de um Rei.', r: 'Mateus 2:11' },
        { art: '🛤️🌙', bg: 'noite', fx: 'estrelas', text: 'Deus avisou os magos em sonho para não voltarem pelo mesmo caminho. Eles obedeceram e voltaram por outra estrada.', r: 'Mateus 2:12' },
        { art: '❤️⭐', bg: 'aurora', fx: 'coracoes', text: 'O maior presente de Natal é o que Deus nos deu: o seu Filho Jesus. "Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."', r: 'João 3:16' }
      ],
      small: [
        { q: 'O que os magos fizeram ao ver Jesus?', o: [['🙏', 'Adoraram'], ['🙈', 'Foram embora'], ['🎮', 'Foram brincar']] },
        { q: 'Quais presentes eles levaram?', o: [['🎁', 'Ouro, incenso e mirra'], ['🍫', 'Chocolate'], ['⚽', 'Uma bola']] },
        { q: 'Qual é o maior presente de Natal?', o: [['⭐', 'Jesus'], ['🧸', 'Um brinquedo'], ['🍰', 'Um bolo']] }
      ],
      big: [
        { q: 'Quais foram os presentes dos magos?', o: ['Ouro, incenso e mirra', 'Pão, peixe e vinho', 'Prata, seda e sal', 'Trigo, azeite e mel'], e: '"Ofereceram-lhe presentes: ouro, incenso e mirra" (Mateus 2:11).' },
        { q: 'O que Deus avisou aos magos em sonho?', o: ['Não voltar por onde vieram', 'Ficar em Belém', 'Procurar outro rei', 'Esperar a estrela voltar'], e: 'Avisados em sonho, "regressaram por outro caminho" (Mateus 2:12).' },
        { q: 'Qual é o maior presente que Deus nos deu?', o: ['O seu Filho Jesus', 'Uma estrela', 'Um palácio', 'Ouro'], e: '"Deus amou o mundo de tal maneira que deu o seu Filho unigênito" (João 3:16).' }
      ]
    }
  ]
};
