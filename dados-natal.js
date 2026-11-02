/* Edição de Natal — "Caminho até Belém". Mesmo formato das histórias do Kids (cenas, perguntas para Pequeninos e Leitores, figurinha).
   Regras: sem imagem de Jesus nem de anjos (só luz e estrelas); toda história aponta para Jesus; versículo à vista.
   Em cada pergunta a PRIMEIRA opção é a certa (o app embaralha na hora de mostrar). TEXTOS PARA REVISÃO DO PASTOR. */
window.NATAL_DATA = {
  stories: [
    {
      id: 'natal1', natal: 1, name: 'Uma boa notícia para Maria', icon: '🌟', sticker: '🌟', scene: 'noite', ref: 'Lucas 1:26-38',
      scenes: [
        { art: '🏡🙏', bg: 'galileia', text: 'Numa cidadezinha chamada Nazaré vivia uma moça chamada Maria. Ela amava a Deus e confiava nele.', r: 'Lucas 1:26-27' },
        { art: '✨🕯️', bg: 'noite', fx: 'luz', text: 'Um dia, Deus enviou um anjo com uma mensagem especial. Maria levou um susto! Mas o anjo disse: "Maria, não temas, porque achaste graça diante de Deus."', r: 'Lucas 1:28-30' },
        { art: '⭐👑', bg: 'noite', fx: 'estrelas', text: 'O anjo contou que ela teria um filho e que o nome dele seria Jesus. Ele seria chamado Filho do Altíssimo, e o seu reino não teria fim.', r: 'Lucas 1:31-33' },
        { art: '💛🙏', bg: 'aurora', fx: 'coracoes', text: 'Maria respondeu com confiança: "Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra." Ela acreditou na promessa de Deus.', r: 'Lucas 1:38' }
      ],
      small: [
        { q: 'Qual era o nome da moça de Nazaré?', o: [['💛', 'Maria'], ['🐑', 'Lumi'], ['🌟', 'Estrela']] },
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
        { art: '🛠️🏠', bg: 'galileia', text: 'José era um homem bom, que trabalhava com madeira. Ele ia se casar com Maria. Mas José ficou preocupado e pensativo.', r: 'Mateus 1:18-19' },
        { art: '🌙💤', bg: 'noite', fx: 'estrelas', text: 'De noite, enquanto dormia, Deus falou com José num sonho: "José, não temas receber Maria, tua mulher, porque o que nela está gerado é do Espírito Santo."', r: 'Mateus 1:20' },
        { art: '⭐✝️', bg: 'aurora', fx: 'luz', text: 'E Deus disse também: "Ela dará à luz um filho, e chamarás o seu nome Jesus, porque ele salvará o seu povo dos seus pecados."', r: 'Mateus 1:21' },
        { art: '💛🏡', bg: 'jardim', fx: 'coracoes', text: 'Quando acordou, José fez exatamente o que Deus mandou. Ele cuidou de Maria e confiou no plano de Deus.', r: 'Mateus 1:24' }
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
        { art: '📜👑', bg: 'cidade', text: 'O imperador mandou que todo mundo fosse se registrar na cidade de sua família. José era da família do rei Davi, por isso precisava ir a Belém.', r: 'Lucas 2:1-4' },
        { art: '🫏🌄', bg: 'campo', text: 'Foi uma viagem longa, de Nazaré até Belém. José cuidou de Maria com carinho por todo o caminho, entre pedras e poeira.', r: 'Lucas 2:4-5' },
        { art: '🌙⭐', bg: 'noite', fx: 'estrelas', text: 'Há muitos anos, o profeta Miqueias tinha dito que o Salvador nasceria em Belém. Deus estava cumprindo a sua promessa!', r: 'Miqueias 5:2' },
        { art: '🏘️💛', bg: 'cidade', fx: 'luz', text: 'Quando chegaram, Belém estava cheia de gente. Mas Deus já sabia de tudo e cuidava de cada passo.', r: 'Lucas 2:5-6' }
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
        { art: '🌙🏚️', bg: 'noite', fx: 'estrelas', text: 'Em Belém não havia lugar para eles na hospedaria. Então ficaram num lugar simples, onde se guardavam os animais.', r: 'Lucas 2:7' },
        { art: '⭐🌾', bg: 'noite', fx: 'luz', text: 'Ali nasceu Jesus, o Filho de Deus. Maria o envolveu em panos e o deitou numa manjedoura, que é uma caminha de palha para os animais.', r: 'Lucas 2:7' },
        { art: '👑💛', bg: 'aurora', fx: 'coracoes', text: 'O Rei dos reis não nasceu num palácio, mas num lugar humilde. Ele veio para ficar perto de todos nós.', r: 'Filipenses 2:6-7' },
        { art: '🕊️✨', bg: 'aurora', fx: 'brilho', text: 'O nome Emanuel quer dizer "Deus conosco". Jesus é Deus que veio morar entre nós, por amor.', r: 'Mateus 1:23' }
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
        { art: '🌙🐑', bg: 'campo', fx: 'estrelas', text: 'Perto de Belém havia pastores cuidando das ovelhas durante a noite. Era uma noite calma, com as ovelhinhas dormindo.', r: 'Lucas 2:8' },
        { art: '✨🌟', bg: 'noite', fx: 'luz', text: 'De repente, uma luz grande brilhou no céu, e os pastores sentiram muito medo! Mas ouviram: "Não temais, porque eis que vos trago novas de grande alegria."', r: 'Lucas 2:9-10' },
        { art: '⭐💛', bg: 'aurora', fx: 'brilho', text: 'E disseram: "Hoje, na cidade de Davi, vos nasceu o Salvador, que é Cristo, o Senhor." Era a melhor notícia do mundo!', r: 'Lucas 2:11' },
        { art: '🎶🌌', bg: 'noite', fx: 'estrelas', text: 'Então o céu se encheu de louvor: "Glória a Deus nas alturas, paz na terra, boa vontade para com os homens!"', r: 'Lucas 2:13-14' }
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
