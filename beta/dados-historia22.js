/* A Grande História da Bíblia — Arco 22: A volta para casa (Esdras; Ageu; Zacarias) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.volta = {
  id: 'volta', n: 22, name: 'A volta para casa', sub: 'Reconstruindo o templo', ref: 'Esdras, Ageu, Zacarias', icon: '🧱', scene: 'cidade',
  intro: 'Depois de setenta anos na Babilônia, como Jeremias tinha dito, Deus tocou o coração de um rei estrangeiro, Ciro, e o povo pôde voltar para Jerusalém. Mas a cidade estava em ruínas, e o templo, destruído. Neste arco, vamos ver o povo reconstruindo o templo, enfrentando inimigos e desânimo, e os profetas Ageu e Zacarias animando todos com promessas sobre o Rei que viria.',
  lessons: [
    {
      id: 'vt1', title: 'O rei Ciro e a grande volta', ref: 'Esdras 1 – 2; Isaías 44:28', icon: '📜',
      recap: 'No arco passado, Daniel e Ezequiel foram fiéis na Babilônia, e Deus prometeu trazer o povo de volta.',
      scenes: [
        { art: '👑🏰🌍', bg: 'palacio', text: 'O império da Babilônia caiu, e agora quem governava o mundo era Ciro, o rei da Pérsia.', r: 'Esdras 1:1; Daniel 5:28-31' },
        { art: '📜⏳7️⃣0️⃣', bg: 'aurora', fx: 'luz', text: 'Os setenta anos que Jeremias tinha anunciado estavam terminando. E o Senhor despertou o espírito de Ciro.', r: 'Esdras 1:1; Jeremias 29:10' },
        { art: '📜✨👑', bg: 'aurora', fx: 'luz', text: 'Uns cento e cinquenta anos antes, Isaías tinha até escrito o nome dele! Deus disse por Isaías: "Ciro é o meu pastor. Ele vai cumprir todo o meu desejo, dizendo a Jerusalém: Seja reconstruída!"', r: 'Isaías 44:28; 45:1' },
        { art: '👑📣📜', bg: 'palacio', text: 'Ciro mandou anunciar em todo o reino: "O Senhor, o Deus do céu, me mandou construir uma casa para Ele em Jerusalém. Quem for do povo dele pode voltar e construir o templo!"', r: 'Esdras 1:2-3' },
        { art: '🎁💰🐪', bg: 'cidade', fx: 'brilho', text: 'Os vizinhos ajudaram com prata, ouro, animais e ofertas. E Ciro devolveu os vasos de ouro e prata que Nabucodonosor tinha tirado do templo, mais de cinco mil!', r: 'Esdras 1:4-11' },
        { art: '👥👥🛤️🏔️', bg: 'deserto', fx: 'vento', text: 'Cerca de cinquenta mil pessoas fizeram a longa viagem de volta, com cavalos, mulas, camelos e jumentos. Era como um novo êxodo!', r: 'Esdras 2:64-67' },
        { art: '🏚️🏙️😮', bg: 'cidade', text: 'Quando chegaram, encontraram Jerusalém em ruínas. Mas eles estavam em casa! E cada família deu ofertas, de boa vontade, para reconstruir o templo.', r: 'Esdras 2:68-70' }
      ],
      god: 'Deus governa até o coração dos reis. Ele cumpre exatamente o que promete, no tempo certo.',
      jesus: 'Deus usou Ciro para libertar o povo e trazê-lo para casa. Jesus fez uma libertação muito maior: Ele veio "proclamar libertação aos cativos" (Lucas 4:18), nos tirar da escravidão do pecado e nos levar de volta para Deus, a nossa verdadeira casa. Em Jesus, a volta do exílio se completa.',
      verse: { ref: 'Provérbios 21:1', tx: 'Como ribeiros de águas assim é o coração do rei na mão do Senhor, que o inclina a todo o seu querer.' },
      small: [
        { q: 'Quem deixou o povo voltar?', o: [['👑', 'O rei Ciro'], ['🦁', 'Um leão'], ['🧙', 'Um mago']] },
        { q: 'Quantos anos o povo ficou longe?', o: [['7️⃣', 'Setenta'], ['1️⃣', 'Um'], ['💯', 'Mil']] },
        { q: 'O que eles iam construir?', o: [['🏛️', 'O templo'], ['🎡', 'Uma roda-gigante'], ['🏟️', 'Um estádio']] }
      ],
      big: [
        { q: 'Que profeta tinha anunciado os setenta anos?', o: ['Jeremias', 'Jonas', 'Elias', 'Amós'], e: 'Jeremias 29:10; Esdras 1:1.' },
        { q: 'Que profeta escreveu o nome de Ciro antes dele nascer?', o: ['Isaías', 'Daniel', 'Ezequiel', 'Oseias'], e: 'Isaías 44:28; 45:1.' },
        { q: 'O que Ciro devolveu?', o: ['Os vasos do templo', 'A arca', 'As tábuas da Lei', 'Nada'], e: 'Esdras 1:7-11.' },
        { q: 'Mais ou menos quantas pessoas voltaram?', o: ['Cinquenta mil', 'Cem', 'Um milhão', 'Doze'], e: 'Esdras 2:64-65.' }
      ],
      parents: 'O decreto de Ciro (538 a.C.) é confirmado pelo "Cilindro de Ciro", que mostra a sua política de devolver povos às suas terras. A longa lista de famílias (Esdras 2) foi resumida. Leitura junto: Esdras 1:1-8 e Isaías 44:24-28.'
    },
    {
      id: 'vt2', title: 'Choro e alegria na fundação', ref: 'Esdras 3', icon: '🎺',
      recap: 'Na lição passada, o rei Ciro deixou o povo voltar para Jerusalém.',
      scenes: [
        { art: '👥🏙️🪨', bg: 'cidade', text: 'No sétimo mês, todo o povo se reuniu em Jerusalém como se fosse um só homem.', r: 'Esdras 3:1' },
        { art: '🧔🧔🔥🪨', bg: 'cidade', fx: 'luz', text: 'Antes de construir qualquer coisa, eles levantaram o altar do Senhor no seu lugar e voltaram a oferecer sacrifícios todos os dias, de manhã e de tarde. Primeiro, a adoração!', r: 'Esdras 3:2-3' },
        { art: '⛺🌿🎉', bg: 'cidade', fx: 'brilho', text: 'Celebraram a Festa dos Tabernáculos, como estava escrito na Lei. Mesmo com medo dos povos vizinhos, eles adoraram a Deus.', r: 'Esdras 3:3-4' },
        { art: '🌲🪵👷', bg: 'mar', fx: 'ondas', text: 'Contrataram pedreiros e carpinteiros, e mandaram buscar madeira de cedro no Líbano, pelo mar, como no tempo de Salomão.', r: 'Esdras 3:7' },
        { art: '🧱🪨📐', bg: 'cidade', text: 'No segundo ano, os construtores lançaram os alicerces do templo do Senhor.', r: 'Esdras 3:8-10' },
        { art: '🎺🎶🙌', bg: 'aurora', fx: 'brilho', text: 'Os sacerdotes tocaram trombetas, e os levitas tocaram címbalos, e todos cantaram: "Ele é bom, e a sua misericórdia dura para sempre sobre Israel!" E o povo gritou de alegria.', r: 'Esdras 3:10-11' },
        { art: '👴😭🧒😄', bg: 'aurora', fx: 'coracoes', text: 'Mas muitos velhos, que tinham visto o primeiro templo, o de Salomão, choravam alto, porque o novo parecia pequeno. E outros gritavam de alegria.', r: 'Esdras 3:12' },
        { art: '🔊😭😄🌍', bg: 'aurora', fx: 'brilho', text: 'Era tanto barulho que não dava para distinguir o som da alegria do som do choro. E o barulho era ouvido de muito longe!', r: 'Esdras 3:13' }
      ],
      god: 'Deus merece o primeiro lugar. Ele se alegra com o nosso louvor, mesmo quando o começo parece pequeno.',
      jesus: 'Os velhos choraram porque o novo templo era menor. Mas o profeta Ageu prometeu que a glória dele seria maior que a do primeiro (Ageu 2:9). Por quê? Porque Jesus ia entrar nesse templo! Jesus é a "pedra principal da esquina" do verdadeiro templo de Deus (Efésios 2:20). E Ele diz: "Não desprezeis o dia das coisas pequenas" (Zacarias 4:10).',
      verse: { ref: 'Esdras 3:11', tx: 'Porque ele é bom, porque a sua benignidade dura para sempre sobre Israel.' },
      small: [
        { q: 'O que eles construíram primeiro?', o: [['🔥', 'O altar para adorar'], ['🏠', 'As casas deles'], ['🏪', 'Uma loja']] },
        { q: 'O que o povo cantou?', o: [['🎶', '"Ele é bom!"'], ['🎂', '"Parabéns"'], ['😴', 'Nada']] },
        { q: 'Por que os velhos choravam?', o: [['😭', 'O templo novo parecia pequeno'], ['🧅', 'Cortaram cebola'], ['🤕', 'Machucaram']] }
      ],
      big: [
        { q: 'Como o povo se reuniu?', o: ['Como se fosse um só homem', 'Separados', 'Brigando', 'Poucos'], e: 'Esdras 3:1.' },
        { q: 'De onde veio a madeira de cedro?', o: ['Do Líbano', 'Do Egito', 'Da Babilônia', 'De Belém'], e: 'Esdras 3:7.' },
        { q: 'Que festa eles celebraram?', o: ['A Festa dos Tabernáculos', 'O Natal', 'A Páscoa', 'O Purim'], e: 'Esdras 3:4.' },
        { q: 'Por que não dava para distinguir os sons?', o: ['Choro e alegria estavam misturados', 'Era de noite', 'Ninguém falava', 'Havia vento'], e: 'Esdras 3:13.' }
      ],
      parents: 'Para um engenheiro: a fundação como etapa de celebração! Ponto central: adoração antes da construção (o altar vem antes das paredes) e o valor dos começos pequenos. Leitura junto: Esdras 3:10-13.'
    },
    {
      id: 'vt3', title: 'Ageu: "Pensem no que estão fazendo!"', ref: 'Esdras 4 – 5; Ageu 1 – 2', icon: '🏚️',
      recap: 'Na lição passada, o povo lançou os alicerces do templo, com choro e com alegria.',
      scenes: [
        { art: '😠📜👑', bg: 'cidade', text: 'Os inimigos que moravam ao redor não queriam o templo reconstruído. Assustaram os construtores, pagaram conselheiros contra eles e escreveram cartas mentirosas aos reis da Pérsia.', r: 'Esdras 4:1-5' },
        { art: '🛑🧱⏳', bg: 'cidade', text: 'E a obra parou. O povo ficou desanimado, e o templo ficou parado só nos alicerces, por uns dezesseis anos!', r: 'Esdras 4:24' },
        { art: '🏠✨🏚️', bg: 'cidade', text: 'Mas, enquanto isso, o povo construiu casas bonitas para si mesmo, com paredes forradas de madeira. Diziam: "Ainda não chegou o tempo de construir a casa do Senhor."', r: 'Ageu 1:2-4' },
        { art: '🧔📣🤔', bg: 'cidade', fx: 'luz', text: 'Então Deus mandou o profeta Ageu: "É tempo de vocês morarem em casas bonitas, enquanto a minha casa está em ruínas? Pensem bem nos seus caminhos!"', r: 'Ageu 1:3-5' },
        { art: '🌾🤏👛🕳️', bg: 'campo', text: '"Vocês plantam muito e colhem pouco, comem e não se satisfazem. Quem ganha salário coloca numa bolsa furada!" Nada dava certo, porque eles tinham deixado Deus em último lugar.', r: 'Ageu 1:6, 9' },
        { art: '👥👂💪', bg: 'monte', fx: 'luz', text: 'Dessa vez, o povo ouviu! O governador Zorobabel, o sumo sacerdote Josué e todo o povo temeram o Senhor. E Deus disse: "Eu estou com vocês." Em três semanas, eles voltaram ao trabalho!', r: 'Ageu 1:12-15' },
        { art: '✨🏛️🌟', bg: 'aurora', fx: 'luz', text: 'Ageu animou o povo: "Sejam fortes e trabalhem, porque eu estou com vocês, diz o Senhor! A glória desta última casa vai ser maior do que a da primeira, e neste lugar eu vou dar a paz."', r: 'Ageu 2:4, 9' }
      ],
      god: 'Deus quer o primeiro lugar na nossa vida. Quando colocamos Deus em primeiro, Ele está conosco e abençoa.',
      jesus: 'Ageu prometeu que a glória do segundo templo seria maior que a do primeiro, mesmo sendo menor e mais simples. Isso se cumpriu quando Jesus entrou nele: o próprio Senhor do templo! Ali Jesus foi apresentado como bebê, ensinou e curou (Lucas 2:27-32; Mateus 21:14). E Jesus ensinou: "Buscai primeiro o reino de Deus" (Mateus 6:33).',
      verse: { ref: 'Ageu 2:4', tx: 'Esforçai-vos... e trabalhai, porque eu sou convosco, diz o Senhor dos Exércitos.' },
      small: [
        { q: 'Por que a obra parou?', o: [['😠', 'Os inimigos assustaram o povo'], ['🌧️', 'Choveu'], ['🎉', 'Era feriado']] },
        { q: 'O que o povo construiu enquanto isso?', o: [['🏠', 'Casas bonitas para si'], ['🏛️', 'O templo'], ['🏰', 'Um castelo']] },
        { q: 'O que Deus disse ao povo?', o: [['💪', '"Eu estou com vocês"'], ['😴', '"Vão dormir"'], ['🏃', '"Fujam"']] }
      ],
      big: [
        { q: 'Quanto tempo a obra ficou parada?', o: ['Uns dezesseis anos', 'Um dia', 'Setenta anos', 'Uma semana'], e: 'Esdras 4:24; Ageu 1:1.' },
        { q: 'O que Ageu disse sobre o salário do povo?', o: ['Era como uma bolsa furada', 'Era muito alto', 'Era justo', 'Nada'], e: 'Ageu 1:6.' },
        { q: 'Quem eram os líderes do povo?', o: ['Zorobabel e o sumo sacerdote Josué', 'Moisés e Arão', 'Davi e Natã', 'Ciro e Dario'], e: 'Ageu 1:12.' },
        { q: 'O que Ageu disse sobre a glória do novo templo?', o: ['Seria maior que a do primeiro', 'Seria menor', 'Não teria glória', 'Igual'], e: 'Ageu 2:9.' }
      ],
      parents: 'As cartas aos reis persas (Esdras 4:6-23) são complexas e foram resumidas. Ponto central: prioridades (Deus primeiro) e a presença de Deus que anima o trabalho. Bom para conversar sobre como a família organiza tempo e dinheiro. Leitura junto: Ageu 1:2-14.'
    },
    {
      id: 'vt4', title: 'Zacarias: o Rei montado num jumentinho', ref: 'Zacarias 4; 9; 12 – 14', icon: '🫏',
      recap: 'Na lição passada, Ageu animou o povo a voltar a construir o templo.',
      scenes: [
        { art: '🧑📣✨', bg: 'cidade', fx: 'luz', text: 'Junto com Ageu, Deus chamou um profeta jovem, Zacarias, para animar o povo. Ele recebeu muitas visões durante uma noite.', r: 'Zacarias 1:1, 8; Esdras 5:1' },
        { art: '🪔🫒🫒', bg: 'noite', fx: 'luz', text: 'Numa visão, Zacarias viu um candelabro de ouro, com duas oliveiras ao lado, que davam azeite sem parar para as lâmpadas ficarem acesas.', r: 'Zacarias 4:1-3, 11-12' },
        { art: '💪❌🕊️✅', bg: 'aurora', fx: 'luz', text: 'O anjo explicou a mensagem para o governador Zorobabel: "Não por força, nem por violência, mas pelo meu Espírito, diz o Senhor dos Exércitos." O templo ia ser terminado pelo poder de Deus!', r: 'Zacarias 4:6' },
        { art: '⛰️➡️🏞️', bg: 'monte', fx: 'brilho', text: '"Quem é você, ó grande monte? Diante de Zorobabel você vai virar uma planície!" Os problemas que pareciam montanhas iam ser removidos. "Quem despreza o dia das coisas pequenas?"', r: 'Zacarias 4:7, 10' },
        { art: '🎉👧👑🫏', bg: 'cidade', fx: 'brilho', text: 'Zacarias também profetizou sobre o futuro: "Alegre-se muito, ó filha de Sião! Grite de alegria, ó filha de Jerusalém! Eis que o seu Rei vem a você, justo e salvador, humilde, montado num jumentinho."', r: 'Zacarias 9:9' },
        { art: '⚔️❌🕊️🌍', bg: 'aurora', fx: 'luz', text: '"Ele vai tirar os carros de guerra e quebrar os arcos de guerra, e vai anunciar paz às nações. O seu domínio vai de mar a mar, até os confins da terra."', r: 'Zacarias 9:10' },
        { art: '💰3️⃣0️⃣🪙', bg: 'cidade', text: 'Zacarias também escreveu coisas misteriosas: um pastor rejeitado pelo povo, avaliado por trinta moedas de prata. E disse que um dia o povo ia olhar para "aquele a quem traspassaram" e chorar.', r: 'Zacarias 11:12-13; 12:10' },
        { art: '⛲✨♾️', bg: 'aurora', fx: 'brilho', text: 'E terminou com esperança: "Naquele dia, haverá uma fonte aberta para lavar o pecado. E o Senhor vai reinar sobre o mundo inteiro."', r: 'Zacarias 13:1; 14:9' }
      ],
      god: 'A obra de Deus é feita pelo seu Espírito, não pela nossa força. Ele não despreza os começos pequenos.',
      jesus: 'Quinhentos anos depois, Jesus entrou em Jerusalém montado num jumentinho, e a multidão gritava: "Hosana!" Mateus diz: "Isso aconteceu para que se cumprisse o que foi dito pelo profeta" (Mateus 21:4-5). E outras profecias de Zacarias também se cumpriram em Jesus: Judas o traiu por trinta moedas de prata (Mateus 26:15; 27:9-10), e o seu lado foi traspassado na cruz (João 19:34-37). A fonte para lavar o pecado é o sangue de Jesus.',
      verse: { ref: 'Zacarias 4:6', tx: 'Não por força nem por violência, mas sim pelo meu Espírito, diz o Senhor dos Exércitos.' },
      small: [
        { q: 'Em que animal o Rei vem montado?', o: [['🫏', 'Num jumentinho'], ['🐎', 'Num cavalo de guerra'], ['🐘', 'Num elefante']] },
        { q: 'Como a obra de Deus é feita?', o: [['🕊️', 'Pelo Espírito de Deus'], ['💪', 'Só pela força'], ['💰', 'Só com dinheiro']] },
        { q: 'O que o Rei vai trazer às nações?', o: [['🕊️', 'Paz'], ['⚔️', 'Guerra'], ['🌧️', 'Chuva']] }
      ],
      big: [
        { q: 'Com quem Zacarias profetizou ao mesmo tempo?', o: ['Ageu', 'Elias', 'Isaías', 'Jonas'], e: 'Esdras 5:1.' },
        { q: 'O que o candelabro e as oliveiras mostravam?', o: ['O Espírito de Deus sustentando a obra', 'Uma festa', 'Comida', 'Um castelo'], e: 'Zacarias 4:6.' },
        { q: 'Como é descrito o Rei de Zacarias 9:9?', o: ['Justo, salvador e humilde', 'Orgulhoso e rico', 'Violento', 'Fraco e injusto'], e: 'Zacarias 9:9.' },
        { q: 'Por quantas moedas Judas traiu Jesus?', o: ['Trinta', 'Dez', 'Cem', 'Mil'], e: 'Mateus 26:15; Zacarias 11:12.' }
      ],
      parents: 'As oito visões noturnas (1–6) e as profecias apocalípticas (12–14) foram muito resumidas. O "anjo intérprete" é mencionado sem figura. Ponto central: "não por força, mas pelo Espírito" e as profecias messiânicas cumpridas na Semana Santa. Leitura junto: Zacarias 4:6-10 e 9:9-10.'
    },
    {
      id: 'vt5', title: 'O templo fica pronto', ref: 'Esdras 5 – 6', icon: '🏛️',
      recap: 'Na lição passada, Zacarias disse que a obra seria feita pelo Espírito de Deus e anunciou o Rei no jumentinho.',
      scenes: [
        { art: '👷🧱🔨', bg: 'cidade', text: 'Animados por Ageu e Zacarias, Zorobabel e Josué voltaram a construir o templo, e os profetas estavam com eles, ajudando.', r: 'Esdras 5:1-2' },
        { art: '🧔📜❓', bg: 'cidade', text: 'O governador da região, Tatenai, veio perguntar: "Quem deu ordem para vocês construírem isso?" E mandou uma carta ao novo rei, Dario, para investigar.', r: 'Esdras 5:3-8' },
        { art: '👁️✨🧱', bg: 'cidade', fx: 'luz', text: 'Mas a Bíblia diz: "Os olhos do seu Deus estavam sobre os anciãos dos judeus", e eles não foram impedidos de trabalhar enquanto a resposta não chegava.', r: 'Esdras 5:5' },
        { art: '👑🔍📜📚', bg: 'palacio', text: 'O rei Dario mandou procurar nos arquivos, e acharam o decreto antigo de Ciro, que mandava reconstruir o templo!', r: 'Esdras 6:1-5' },
        { art: '👑📜💰🐂', bg: 'palacio', fx: 'brilho', text: 'Então Dario escreveu: "Deixem a obra continuar! E paguem os custos com o dinheiro dos impostos do rei, e deem a eles os animais para os sacrifícios." Os inimigos acabaram tendo que ajudar!', r: 'Esdras 6:6-10' },
        { art: '🏛️✅🎉', bg: 'aurora', fx: 'brilho', text: 'Assim, o templo foi terminado no sexto ano do rei Dario, conforme a ordem de Deus. Uns vinte anos depois de lançados os alicerces!', r: 'Esdras 6:14-15' },
        { art: '👥🎶🏛️', bg: 'aurora', fx: 'brilho', text: 'O povo dedicou a casa de Deus com grande alegria, e os sacerdotes voltaram a servir, como estava escrito no livro de Moisés.', r: 'Esdras 6:16-18' },
        { art: '🐑🍞🎉', bg: 'cidade', fx: 'coracoes', text: 'E celebraram a Páscoa, a festa da libertação do Egito, muito felizes, porque foi Deus quem encheu o coração deles de alegria.', r: 'Esdras 6:19-22' }
      ],
      god: 'Deus protege a sua obra e vira até os planos dos inimigos a favor do seu povo. Os seus olhos estão sobre nós.',
      jesus: 'Os inimigos quiseram parar o templo, mas Deus fez o próprio rei pagar a obra. Na cruz, os inimigos de Jesus acharam que tinham vencido, mas Deus usou até isso para trazer a salvação (Atos 2:23-24). E Jesus disse: "Edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela" (Mateus 16:18).',
      verse: { ref: 'Esdras 5:5', tx: 'Porém os olhos de Deus estavam sobre os anciãos dos judeus.' },
      small: [
        { q: 'O templo ficou pronto?', o: [['✅', 'Sim!'], ['❌', 'Não'], ['🤷', 'Pela metade']] },
        { q: 'Quem pagou parte da obra?', o: [['👑', 'O rei Dario'], ['🐶', 'Um cachorro'], ['🚫', 'Ninguém']] },
        { q: 'Que festa eles celebraram?', o: [['🐑', 'A Páscoa'], ['🎄', 'O Natal'], ['🎃', 'Halloween']] }
      ],
      big: [
        { q: 'Quem perguntou quem tinha dado ordem para construir?', o: ['O governador Tatenai', 'O rei Ciro', 'Ageu', 'Nabucodonosor'], e: 'Esdras 5:3.' },
        { q: 'O que acharam nos arquivos do rei?', o: ['O decreto de Ciro', 'Um mapa', 'Ouro', 'Nada'], e: 'Esdras 6:1-5.' },
        { q: 'Em que ano de Dario o templo foi terminado?', o: ['No sexto', 'No primeiro', 'No décimo', 'No quadragésimo'], e: 'Esdras 6:15.' },
        { q: 'Por que o povo celebrou com alegria?', o: ['O Senhor os tinha alegrado', 'Ganharam dinheiro', 'O rei mandou', 'Era feriado'], e: 'Esdras 6:22.' }
      ],
      parents: 'O templo foi concluído em 516 a.C., cerca de 70 anos depois da destruição (586 a.C.). Este é o "segundo templo", depois ampliado por Herodes, onde Jesus esteve. Leitura junto: Esdras 6:6-16.'
    },
    {
      id: 'vt6', title: 'Esdras, o mestre da Palavra', ref: 'Esdras 7 – 8', icon: '✍️',
      recap: 'Na lição passada, o templo foi terminado, e o povo celebrou a Páscoa.',
      scenes: [
        { art: '🧔📜🏙️', bg: 'palacio', text: 'Uns sessenta anos depois, ainda na Pérsia, vivia um sacerdote e escriba chamado Esdras. Ele era um especialista na Lei de Moisés.', r: 'Esdras 7:1-6' },
        { art: '❤️📖➡️🧑‍🏫', bg: 'aurora', fx: 'luz', text: 'A Bíblia diz algo lindo sobre ele: "Esdras tinha decidido no seu coração estudar a Lei do Senhor, praticá-la e ensinar a Israel os seus mandamentos." Primeiro estudar, depois viver, depois ensinar!', r: 'Esdras 7:10' },
        { art: '👑📜💰', bg: 'palacio', fx: 'brilho', text: 'O rei Artaxerxes deu a Esdras uma carta de permissão e muito ouro e prata para levar ao templo, porque "a mão do Senhor, o seu Deus, estava sobre ele".', r: 'Esdras 7:6, 11-20' },
        { art: '🧔🤔🛤️⚠️', bg: 'deserto', text: 'Esdras ia levar muitas famílias e muito tesouro numa viagem longa e perigosa, com ladrões no caminho. Ele podia pedir soldados ao rei.', r: 'Esdras 8:21-22' },
        { art: '🧔😳💬', bg: 'deserto', text: 'Mas ficou com vergonha de pedir, porque já tinha dito ao rei: "A mão do nosso Deus protege todos os que o buscam."', r: 'Esdras 8:22' },
        { art: '👥🙏🏞️', bg: 'campo', fx: 'luz', text: 'Então Esdras reuniu o povo junto ao rio Aava, e todos jejuaram e oraram, pedindo a Deus um caminho seguro para eles, para as crianças e para os bens.', r: 'Esdras 8:21, 23' },
        { art: '🛤️🛡️✨', bg: 'deserto', fx: 'luz', text: 'E Deus ouviu! Durante quatro meses de viagem, a mão de Deus esteve sobre eles e os livrou dos inimigos e dos ladrões no caminho.', r: 'Esdras 7:9; 8:31' },
        { art: '🏛️💰⚖️✅', bg: 'cidade', fx: 'brilho', text: 'Chegaram a Jerusalém, e todo o ouro e a prata foram contados e pesados, sem faltar nada! Então Esdras começou a ensinar a Palavra de Deus ao povo.', r: 'Esdras 8:32-34; 7:25' }
      ],
      god: 'Deus protege quem confia nele. Ele quer que o seu povo estude, viva e ensine a sua Palavra.',
      jesus: 'Esdras estudou, praticou e ensinou a Palavra. Jesus é o Mestre perfeito: Ele não só ensinou a Palavra, Ele a cumpriu toda (Mateus 5:17). Até os seus inimigos diziam: "Nunca homem algum falou assim como este homem" (João 7:46). E Jesus nos manda fazer o mesmo que Esdras: "Ensinando-as a guardar todas as coisas que eu vos tenho mandado" (Mateus 28:20).',
      verse: { ref: 'Esdras 7:10', tx: 'Porque Esdras tinha preparado o seu coração para buscar a lei do Senhor, e para a cumprir e para ensinar em Israel os seus estatutos e os seus direitos.' },
      small: [
        { q: 'O que Esdras gostava de estudar?', o: [['📖', 'A Lei de Deus'], ['🎮', 'Videogame'], ['⚽', 'Futebol']] },
        { q: 'O que o povo fez antes da viagem?', o: [['🙏', 'Jejuou e orou'], ['🎉', 'Fez festa'], ['😴', 'Dormiu']] },
        { q: 'Deus protegeu a viagem?', o: [['🛡️', 'Sim'], ['❌', 'Não'], ['🤷', 'Mais ou menos']] }
      ],
      big: [
        { q: 'Quais as três coisas que Esdras decidiu fazer com a Lei?', o: ['Estudar, praticar e ensinar', 'Ler, vender e esconder', 'Copiar, guardar e esquecer', 'Nenhuma'], e: 'Esdras 7:10.' },
        { q: 'Por que Esdras não pediu soldados ao rei?', o: ['Tinha dito que Deus protege quem o busca', 'O rei não tinha soldados', 'Esqueceu', 'Não precisava viajar'], e: 'Esdras 8:22.' },
        { q: 'Onde o povo jejuou?', o: ['Junto ao rio Aava', 'No templo', 'No Egito', 'No mar'], e: 'Esdras 8:21.' },
        { q: 'Quanto tempo durou a viagem?', o: ['Quatro meses', 'Um dia', 'Quarenta anos', 'Uma semana'], e: 'Esdras 7:9.' }
      ],
      parents: 'Encerramento do arco da volta. Os casamentos mistos e a separação (Esdras 9–10) foram omitidos; é um tema delicado para os pais conversarem depois. Esdras 7:10 é um ótimo versículo para quem ensina na escola dominical. Leitura junto: Esdras 7:6-10 e 8:21-23.'
    }
  ]
};
