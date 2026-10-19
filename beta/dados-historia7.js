/* A Grande História da Bíblia — Arco 7: Juízes e Rute
   Regra dos trechos difíceis: nunca mentir nem inventar; sem detalhes; trechos muito pesados viram resumo de uma frase com nota para os pais; toda lição aponta para frente. */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.juizes = {
  id: 'juizes', n: 7, name: 'Juízes e Rute', sub: 'O povo esquece, Deus não', ref: 'Juízes e Rute', icon: '🎺', scene: 'campo',
  intro: 'O povo de Deus já morava na terra prometida. Mas, sem Josué, eles foram esquecendo de Deus. Neste arco, vamos ver um ciclo que se repete muitas vezes, os juízes que Deus levantou para salvar o povo, e uma história linda de amor e fidelidade: a de Rute.',
  lessons: [
    {
      id: 'j1', title: 'O povo esquece', ref: 'Juízes 1 – 2', icon: '🔁',
      recap: 'Nos arcos anteriores, Deus tirou o povo do Egito, cuidou dele no deserto e, com Josué, levou todos para a terra prometida.',
      scenes: [
        { art: '👴⛰️', bg: 'monte', text: 'Josué, o grande líder, morreu já bem velhinho. Enquanto ele e os líderes da sua geração viveram, o povo serviu ao Senhor.' },
        { art: '👦❓', bg: 'campo', text: 'Mas cresceu outra geração, que não conhecia o Senhor nem as coisas incríveis que Ele tinha feito. Os pais não contaram, ou os filhos não quiseram ouvir.' },
        { art: '🗿👥', bg: 'cidade', text: 'O povo começou a imitar os vizinhos e adorar ídolos, como Baal, deuses de mentira feitos por mãos humanas. Eles deixaram o Deus que os tinha tirado do Egito.' },
        { art: '⚔️😢', bg: 'deserto', text: 'Então Deus deixou que os inimigos vencessem o povo. Eles ficaram fracos, oprimidos e muito tristes.' },
        { art: '🙏😭', bg: 'noite', text: 'Quando sofriam, o povo clamava a Deus, gritando por socorro.' },
        { art: '✨🧔', bg: 'aurora', fx: 'luz', text: 'E Deus, cheio de compaixão, levantava um juiz: um líder escolhido por Ele para livrar o povo dos inimigos.' },
        { art: '😊🕊️', bg: 'aurora', text: 'Enquanto o juiz vivia, havia paz. Mas, quando o juiz morria, o povo voltava a fazer coisas piores que antes.' },
        { art: '🔁', bg: 'campo', fx: 'vento', text: 'É um ciclo, uma roda que gira: o povo esquece de Deus, sofre, clama, Deus salva, e depois o povo esquece de novo. Esse ciclo se repete por todo o livro de Juízes.' },
        { art: '💛✨', bg: 'aurora', fx: 'coracoes', text: 'O livro mostra que o povo era infiel. Mas mostra, ainda mais, que Deus continuava fiel. Toda vez que eles clamavam, Ele respondia.' }
      ],
      god: 'Mesmo quando nós esquecemos de Deus, Ele não esquece de nós e responde quando clamamos.',
      jesus: 'Cada juiz salvava o povo por um tempo, mas morria, e tudo voltava a piorar. Jesus é o Libertador que vive para sempre: Ele não morre mais, e o seu socorro nunca acaba (Hebreus 7:25).',
      verse: { ref: 'Salmos 103:8', tx: 'Misericordioso e piedoso é o Senhor; longânimo e grande em benignidade.' },
      small: [
        { q: 'O que o povo começou a adorar?', o: [['🗿', 'Ídolos'], ['✨', 'Só a Deus'], ['🌈', 'O arco-íris']] },
        { q: 'O que o povo fazia quando sofria?', o: [['🙏', 'Clamava a Deus'], ['🎮', 'Jogava videogame'], ['🏖️', 'Ia à praia']] },
        { q: 'Quem Deus mandava para salvar o povo?', o: [['🧔', 'Um juiz'], ['🤡', 'Um palhaço'], ['🐉', 'Um dragão']] }
      ],
      big: [
        { q: 'Por que a nova geração esqueceu de Deus?', o: ['Não conhecia o que Deus tinha feito', 'Porque eram maus desde bebês', 'Porque Josué mandou', 'Porque moravam longe'], e: 'Juízes 2:10. Por isso é tão importante contar a história de Deus às crianças.' },
        { q: 'Quem era Baal?', o: ['Um deus falso dos vizinhos', 'Um juiz de Israel', 'Um anjo', 'Um rei bom'], e: 'Ídolos não veem, não ouvem e não salvam.' },
        { q: 'O que era um juiz na Bíblia?', o: ['Um líder que Deus levantava para salvar o povo', 'Um homem de toga num tribunal', 'Um sacerdote do templo', 'Um rei de outro país'], e: 'Juízes 2:16.' },
        { q: 'Qual é o ciclo do livro de Juízes?', o: ['Esquecer, sofrer, clamar, ser salvo', 'Plantar, colher, comer, dormir', 'Nascer, crescer, viajar, voltar', 'Lutar, vencer, festejar, lutar'], e: 'O ciclo se repete com cada juiz.' }
      ],
      parents: 'Ponto central: Juízes 2:10 é um alerta para a família: cada geração precisa ouvir das obras de Deus. Use o ciclo (esquecer, sofrer, clamar, ser salvo) como chave para todo o arco. Leitura junto: Juízes 2:6-19.'
    },
    {
      id: 'j2', title: 'Otniel e Eúde', ref: 'Juízes 3', icon: '🗡️',
      recap: 'Na lição passada, vimos o ciclo triste: o povo esquecia de Deus, sofria e clamava, e Deus levantava um juiz.',
      scenes: [
        { art: '🗿😢', bg: 'cidade', text: 'O povo fez de novo o que era mau aos olhos do Senhor. E um rei de longe, da Mesopotâmia, dominou Israel por oito anos.' },
        { art: '🙏', bg: 'noite', text: 'O povo clamou ao Senhor. E Deus levantou o primeiro juiz: Otniel, sobrinho de Calebe, aquele espião corajoso que confiou em Deus.' },
        { art: '🧔✨', bg: 'aurora', fx: 'luz', text: 'O Espírito do Senhor veio sobre Otniel. Ele liderou o povo, venceu o inimigo, e a terra teve paz por quarenta anos.' },
        { art: '🔁😞', bg: 'cidade', text: 'Mas Otniel morreu, e o povo voltou a pecar. Dessa vez, Eglom, rei de Moabe, um homem muito gordo, dominou Israel por dezoito anos e cobrava impostos pesados.' },
        { art: '🙏✨', bg: 'noite', text: 'O povo clamou de novo, e Deus levantou outro libertador: Eúde, um homem da tribo de Benjamim que era canhoto.' },
        { art: '🧔🎁👑', bg: 'palacio', text: 'Eúde foi levar o imposto ao rei Eglom. Ele tinha um plano corajoso e escondeu uma espada curta do lado direito, onde ninguém procurava.' },
        { art: '🤫👑', bg: 'palacio', text: 'Eúde disse ao rei: "Tenho uma mensagem secreta de Deus para você." O rei mandou todos saírem. Ali, sozinho com o rei mau, Eúde o derrotou e fugiu.' },
        { art: '🎺⛰️', bg: 'monte', text: 'Eúde tocou a trombeta nas montanhas e chamou o povo: "Sigam-me, porque o Senhor entregou os inimigos nas nossas mãos!"' },
        { art: '🕊️🌾', bg: 'campo', fx: 'brilho', text: 'Israel venceu Moabe, e a terra teve paz por oitenta anos! Depois de Eúde veio Sangar, que também livrou o povo.' }
      ],
      god: 'Deus ouve o clamor do seu povo e usa pessoas que ninguém espera, até um canhoto.',
      jesus: 'Otniel e Eúde livraram o povo de reis maus, por alguns anos. Jesus nos livra do pior inimigo de todos, o pecado e a morte, e para sempre.',
      verse: { ref: 'Juízes 3:9', tx: 'E os filhos de Israel clamaram ao Senhor, e o Senhor levantou aos filhos de Israel um libertador.' },
      small: [
        { q: 'Quem foi o primeiro juiz?', o: [['🧔', 'Otniel'], ['👑', 'Eglom'], ['🦁', 'Um leão']] },
        { q: 'Com qual mão Eúde lutava melhor?', o: [['🤛', 'A esquerda'], ['🦶', 'O pé'], ['👃', 'O nariz']] },
        { q: 'O que Eúde tocou para chamar o povo?', o: [['🎺', 'Uma trombeta'], ['🥁', 'Um tambor'], ['🔔', 'Um sino']] }
      ],
      big: [
        { q: 'De quem Otniel era sobrinho?', o: ['De Calebe', 'De Moisés', 'De Josué', 'De Arão'], e: 'Juízes 3:9. Calebe foi o espião que confiou em Deus (Números 14).' },
        { q: 'Qual era o nome do rei de Moabe?', o: ['Eglom', 'Faraó', 'Golias', 'Sísera'], e: 'Juízes 3:12-14.' },
        { q: 'O que havia de diferente em Eúde?', o: ['Era canhoto', 'Era gigante', 'Era muito velho', 'Era cego'], e: 'Juízes 3:15. Deus usou justamente isso no plano.' },
        { q: 'Quantos anos de paz vieram depois de Eúde?', o: ['Oitenta', 'Quarenta', 'Dez', 'Mil'], e: 'Juízes 3:30.' }
      ],
      parents: 'Atenção: a vitória de Eúde sobre Eglom (Juízes 3:21-22) foi contada sem detalhes: "Eúde o derrotou". Se a criança perguntar, explique que era uma guerra para libertar o povo oprimido. Leitura junto: Juízes 3:7-11 (Otniel) e 3:12-15, 26-31.'
    },
    {
      id: 'j3', title: 'Débora e Baraque', ref: 'Juízes 4 – 5', icon: '🌴',
      recap: 'Na lição passada, Deus levantou Otniel e Eúde para libertar o povo.',
      scenes: [
        { art: '🔁⚔️', bg: 'cidade', text: 'Depois que Eúde morreu, o povo pecou de novo. Jabim, rei de Canaã, dominou Israel por vinte anos. O chefe do exército dele se chamava Sísera.' },
        { art: '🛞🛞🛞', bg: 'campo', text: 'Sísera tinha novecentos carros de ferro, como os tanques de guerra daquela época! Israel não tinha nada parecido e estava apavorado.' },
        { art: '👩🌴', bg: 'jardim', text: 'Naquele tempo, quem julgava Israel era uma mulher: Débora, uma profetisa. Ela se sentava debaixo de uma palmeira, e o povo vinha até ela para resolver suas questões.' },
        { art: '👩💬🧔', bg: 'jardim', fx: 'luz', text: 'Débora chamou Baraque e disse: "O Senhor manda você reunir dez mil homens no monte Tabor. Ele vai entregar Sísera nas suas mãos."' },
        { art: '🧔😟', bg: 'monte', text: 'Baraque respondeu: "Se você for comigo, eu vou. Se não for, não vou." Débora disse: "Eu vou. Mas a honra da vitória não será sua: Deus vai entregar Sísera nas mãos de uma mulher."' },
        { art: '⛰️👥', bg: 'monte', text: 'Débora disse: "Levante-se! Hoje é o dia! O Senhor vai à sua frente!" E Baraque desceu do monte com os dez mil homens.' },
        { art: '🌧️🛞💦', bg: 'mar', fx: 'chuva', text: 'O Senhor confundiu Sísera e o seu exército. A canção de Débora conta que o céu derramou água e o ribeiro de Quisom arrastou os inimigos. Os carros de ferro atolaram!' },
        { art: '🏃⛺', bg: 'deserto', text: 'Sísera fugiu a pé e se escondeu na tenda de uma mulher chamada Jael. E foi ali que Jael derrotou Sísera, como Débora tinha dito.' },
        { art: '🎶👩🧔', bg: 'aurora', fx: 'brilho', text: 'Débora e Baraque cantaram um cântico de louvor a Deus pela vitória. E a terra teve paz por quarenta anos.' }
      ],
      god: 'Nenhum exército é forte demais para Deus. Ele vai à nossa frente.',
      jesus: 'Débora disse a Baraque: "O Senhor vai à sua frente!" Jesus vai à nossa frente e já venceu por nós. Ele disse: "No mundo tereis aflições, mas tende bom ânimo, eu venci o mundo" (João 16:33).',
      verse: { ref: 'Juízes 5:31', tx: 'Porém os que o amam sejam como o sol quando sai na sua força.' },
      small: [
        { q: 'Onde Débora se sentava?', o: [['🌴', 'Debaixo de uma palmeira'], ['🛋️', 'Num sofá'], ['🚌', 'Num ônibus']] },
        { q: 'O que atolou na água?', o: [['🛞', 'Os carros de ferro'], ['🚲', 'As bicicletas'], ['🛶', 'Os barcos']] },
        { q: 'O que Débora e Baraque fizeram no fim?', o: [['🎶', 'Cantaram a Deus'], ['😭', 'Choraram'], ['🏃', 'Fugiram']] }
      ],
      big: [
        { q: 'Quem era Débora?', o: ['Profetisa e juíza de Israel', 'Rainha do Egito', 'Esposa de Sísera', 'Uma soldada inimiga'], e: 'Juízes 4:4.' },
        { q: 'Quantos carros de ferro Sísera tinha?', o: ['Novecentos', 'Dez', 'Cem', 'Um só'], e: 'Juízes 4:3.' },
        { q: 'O que Baraque pediu para Débora?', o: ['Que fosse com ele', 'Que lutasse sozinha', 'Que fugisse', 'Que ficasse em casa'], e: 'Juízes 4:8.' },
        { q: 'Como Deus venceu os carros de ferro?', o: ['Com água e confusão', 'Com um terremoto', 'Com fogo do céu', 'Com gafanhotos'], e: 'Juízes 5:4, 21: o céu gotejou e o ribeiro de Quisom os arrastou.' }
      ],
      parents: 'Atenção: o modo como Jael derrotou Sísera (Juízes 4:21) foi contado sem detalhes. Destaque Débora como líder sábia que confiava em Deus. Leitura junto: Juízes 4:1-16 e 5:1-5, 31.'
    },
    {
      id: 'j4', title: 'Gideão é chamado', ref: 'Juízes 6', icon: '🌾',
      recap: 'Na lição passada, Deus deu vitória a Débora e Baraque sobre os carros de ferro de Sísera.',
      scenes: [
        { art: '🐪🐪🐪', bg: 'deserto', text: 'O povo pecou de novo. Dessa vez vieram os midianitas, com camelos que não se podiam contar, como uma nuvem de gafanhotos. Eles destruíam as plantações e levavam os animais.' },
        { art: '🕳️😟', bg: 'monte', text: 'Por sete anos, o povo ficou tão pobre e com tanto medo que se escondia em cavernas nas montanhas. Então clamaram ao Senhor.' },
        { art: '🧑🌾🍇', bg: 'campo', text: 'Um moço chamado Gideão estava malhando trigo escondido, dentro de um lagar, o lugar de amassar uvas, para os midianitas não verem.' },
        { art: '✨🔥💬🧑', bg: 'campo', fx: 'luz', text: 'O Anjo do Senhor apareceu e disse: "O Senhor é contigo, homem valoroso!" Gideão quase não acreditou. Valoroso? Ele estava escondido com medo!' },
        { art: '🧑😟', bg: 'campo', text: 'Gideão disse: "Se o Senhor está conosco, por que tudo isso aconteceu? E como eu vou salvar Israel? Minha família é a mais pobre, e eu sou o menor da casa do meu pai."' },
        { art: '✨💛', bg: 'aurora', fx: 'coracoes', text: 'Deus respondeu: "Eu estarei com você." O que importa não é o tamanho de Gideão, mas o tamanho de Deus.' },
        { art: '🗿🔨', bg: 'noite', text: 'A primeira missão foi em casa: derrubar o altar do ídolo Baal que era do pai dele. Gideão teve medo e fez isso de noite, mas obedeceu.' },
        { art: '🐑🧶💧', bg: 'aurora', text: 'Gideão ainda estava inseguro e pediu um sinal: "Se amanhã esta lã estiver molhada de orvalho e o chão seco, vou saber que o Senhor vai me usar." E aconteceu!' },
        { art: '🧶☀️', bg: 'aurora', fx: 'brilho', text: 'Ele pediu de novo, ao contrário: a lã seca e o chão molhado. E Deus, com paciência, fez também. Deus é paciente com quem tem medo.' }
      ],
      god: 'Deus enxerga em nós o que Ele mesmo vai fazer. Ele é paciente com os nossos medos.',
      jesus: 'Gideão era o menor da casa do pai. Jesus nasceu numa família simples, numa cidade pequena, e Deus usou isso para salvar o mundo. E Jesus diz a nós o que Deus disse a Gideão: "Eu estou convosco todos os dias" (Mateus 28:20).',
      verse: { ref: 'Juízes 6:12', tx: 'O Senhor é contigo, homem valoroso.' },
      small: [
        { q: 'Onde Gideão estava escondido?', o: [['🍇', 'Num lagar de uvas'], ['🌳', 'Numa árvore'], ['🛁', 'Na banheira']] },
        { q: 'Quem apareceu para Gideão?', o: [['🔥', 'O Anjo do Senhor'], ['🦊', 'Uma raposa'], ['👻', 'Um fantasma']] },
        { q: 'O que Gideão usou para pedir um sinal?', o: [['🧶', 'Lã de ovelha'], ['🎈', 'Um balão'], ['📺', 'Uma TV']] }
      ],
      big: [
        { q: 'Que povo estava destruindo Israel?', o: ['Os midianitas', 'Os egípcios', 'Os romanos', 'Os filisteus'], e: 'Juízes 6:1-6.' },
        { q: 'Do que o anjo chamou Gideão?', o: ['Homem valoroso', 'Homem medroso', 'Rei de Israel', 'Profeta'], e: 'Deus o chamou pelo que Ele faria nele.' },
        { q: 'Qual foi a primeira missão de Gideão?', o: ['Derrubar o altar de Baal', 'Lutar contra um gigante', 'Construir um templo', 'Ir para o Egito'], e: 'Juízes 6:25-27.' },
        { q: 'O que o sinal da lã mostra sobre Deus?', o: ['Ele é paciente com nosso medo', 'Ele gosta de lã', 'Ele queria brincar', 'Ele estava bravo'], e: 'Deus respondeu as duas vezes (Juízes 6:36-40).' }
      ],
      parents: 'Ponto central: Deus chama pessoas fracas e medrosas e as fortalece com a sua presença. Pergunte: "Do que você tem medo? Lembre que Deus está com você." Leitura junto: Juízes 6:11-16 e 36-40.'
    },
    {
      id: 'j5', title: 'Gideão e os 300', ref: 'Juízes 7', icon: '🎺',
      recap: 'Na lição passada, Deus chamou Gideão, que era medroso, e disse: "Eu estarei com você."',
      scenes: [
        { art: '👥👥👥', bg: 'campo', text: 'Gideão chamou o povo para a batalha e vieram trinta e dois mil homens. Os midianitas eram muitos mais, mas era um exército bom.' },
        { art: '✨✋', bg: 'aurora', fx: 'luz', text: 'Deus disse: "Tem gente demais! Se vencerem, vão dizer que foi pela própria força." E mandou: "Quem estiver com medo, pode voltar para casa."' },
        { art: '🚶🚶🚶', bg: 'campo', text: 'Vinte e dois mil foram embora! Ficaram dez mil. Mas Deus disse: "Ainda é muita gente. Leve-os até a água."' },
        { art: '💧👥', bg: 'mar', fx: 'ondas', text: 'Na beira da água, a maioria se ajoelhou para beber. Só trezentos homens levaram a água até a boca com a mão, lambendo-a como faz um cachorro.' },
        { art: '3️⃣0️⃣0️⃣', bg: 'campo', text: 'Deus disse: "Com esses trezentos eu vou salvar vocês." Trezentos contra um exército enorme, como gafanhotos! Agora todo mundo ia saber que a vitória era de Deus.' },
        { art: '🌙👂', bg: 'noite', fx: 'estrelas', text: 'De noite, Deus mandou Gideão espiar o acampamento inimigo. Ele ouviu um soldado contando um sonho, e outro dizendo: "Deus entregou Midiã nas mãos de Gideão!" Gideão adorou a Deus ali mesmo.' },
        { art: '🎺🏺🔥', bg: 'noite', fx: 'estrelas', text: 'Gideão deu a cada homem uma trombeta e um cântaro vazio com uma tocha acesa escondida dentro. Nada de espadas na mão!' },
        { art: '💥🔥🎺', bg: 'noite', fx: 'luz', text: 'No meio da noite, cercaram o acampamento. Tocaram as trombetas, quebraram os cântaros, levantaram as tochas e gritaram: "Espada do Senhor e de Gideão!"' },
        { art: '😱🏃🏃', bg: 'noite', text: 'Os midianitas acordaram apavorados, com luzes e barulho por todo lado. Na confusão, lutaram uns contra os outros e fugiram.' },
        { art: '✨🏆', bg: 'aurora', fx: 'brilho', text: 'Deus deu a vitória a Israel com só trezentos homens, trombetas e tochas. Ninguém podia dizer que foi força humana. Foi o Senhor!' }
      ],
      god: 'Deus não precisa de muitos nem de fortes. A vitória vem dele, para que toda a glória seja dele.',
      jesus: 'Deus venceu com poucos homens e cântaros quebrados com luz dentro. Jesus venceu sozinho, na cruz, quando todos achavam que Ele era fraco. E a Bíblia diz que nós somos vasos de barro com um tesouro de luz dentro (2 Coríntios 4:7).',
      verse: { ref: 'Zacarias 4:6', tx: 'Não por força nem por violência, mas sim pelo meu Espírito, diz o Senhor dos Exércitos.' },
      small: [
        { q: 'Com quantos homens Deus deu a vitória?', o: [['3️⃣', 'Trezentos'], ['🔟', 'Dez mil'], ['1️⃣', 'Um só']] },
        { q: 'O que estava dentro dos cântaros?', o: [['🔥', 'Tochas acesas'], ['🍯', 'Mel'], ['🐸', 'Sapos']] },
        { q: 'O que eles tocaram?', o: [['🎺', 'Trombetas'], ['🎸', 'Guitarras'], ['🎹', 'Pianos']] }
      ],
      big: [
        { q: 'Por que Deus diminuiu o exército?', o: ['Para todos saberem que a vitória era dele', 'Porque faltava comida', 'Porque estava chovendo', 'Porque eram fracos demais'], e: 'Juízes 7:2.' },
        { q: 'Como os trezentos beberam água?', o: ['Levando a água à boca com a mão', 'De joelhos com a boca na água', 'Num copo de ouro', 'Não beberam'], e: 'Juízes 7:5-7.' },
        { q: 'O que os homens gritaram?', o: ['"Espada do Senhor e de Gideão!"', '"Vitória para Israel!"', '"Corram!"', '"Viva o rei!"'], e: 'Juízes 7:20.' },
        { q: 'O que os midianitas fizeram na confusão?', o: ['Lutaram entre si e fugiram', 'Se renderam com festa', 'Atacaram Gideão', 'Continuaram dormindo'], e: 'Juízes 7:22.' }
      ],
      parents: 'Ponto central: Deus reduz o exército para que a glória seja dele (Juízes 7:2). Paralelo com 2 Coríntios 12:9: "o meu poder se aperfeiçoa na fraqueza". Leitura junto: Juízes 7:1-22.'
    },
    {
      id: 'j6', title: 'Depois de Gideão', ref: 'Juízes 8 – 10', icon: '👑',
      recap: 'Na lição passada, Deus deu vitória a Gideão com só trezentos homens.',
      scenes: [
        { art: '👥👑🧔', bg: 'cidade', text: 'Depois da vitória, o povo disse a Gideão: "Seja nosso rei, você, seu filho e seu neto!"' },
        { art: '🧔✋', bg: 'cidade', fx: 'luz', text: 'Gideão respondeu muito bem: "Eu não vou reinar sobre vocês, nem meu filho. O Senhor é quem reina sobre vocês."' },
        { art: '💍🟨', bg: 'palacio', text: 'Mas Gideão pediu os brincos de ouro que tinham ficado dos inimigos e fez com eles um éfode, uma peça de roupa especial de sacerdote, e o colocou na sua cidade.' },
        { art: '🗿😞', bg: 'cidade', text: 'O que parecia uma lembrança virou uma armadilha: o povo começou a adorar aquele objeto de ouro, em vez de adorar a Deus. Até coisas boas podem virar ídolos.' },
        { art: '🔁🗿', bg: 'cidade', text: 'Quando Gideão morreu, o povo voltou a adorar Baal. E se esqueceu de Deus, que os tinha livrado, e da família de Gideão.' },
        { art: '😈👑', bg: 'palacio', text: 'Um filho de Gideão, chamado Abimeleque, quis ser rei de qualquer jeito. Ele fez coisas muito más contra a própria família para conseguir o trono, e trouxe guerra e destruição.' },
        { art: '🪨⬇️', bg: 'monte', text: 'Mas Deus não deixou o mal ficar sem resposta: Abimeleque reinou só três anos e caiu numa batalha. A Bíblia diz que Deus fez voltar sobre ele o mal que ele tinha feito.' },
        { art: '🧔🧔', bg: 'campo', text: 'Depois disso, Deus levantou dois juízes mais tranquilos, Tola e Jair, que julgaram Israel em paz por muitos anos.' },
        { art: '🙏💔', bg: 'noite', text: 'Mas o povo voltou a adorar ídolos de todos os vizinhos. Quando os inimigos vieram, eles clamaram: "Pecamos! Faze conosco o que quiseres, mas livra-nos hoje!" E jogaram fora os deuses estranhos.' },
        { art: '💛✨', bg: 'aurora', fx: 'coracoes', text: 'A Bíblia diz uma das frases mais lindas do livro: o coração do Senhor se angustiou com o sofrimento de Israel. Deus sente a nossa dor.' }
      ],
      god: 'Só Deus deve reinar no nosso coração. Ele vê o mal, faz justiça, e se compadece de quem se arrepende.',
      jesus: 'Gideão disse que só o Senhor devia reinar. Abimeleque tomou o trono à força e fez mal à própria família. Jesus é o Rei verdadeiro: em vez de tomar a vida dos outros, Ele deu a própria vida por nós.',
      verse: { ref: 'Juízes 8:23', tx: 'Não dominarei sobre vós, nem tampouco meu filho sobre vós dominará; o Senhor sobre vós dominará.' },
      small: [
        { q: 'O que o povo queria que Gideão fosse?', o: [['👑', 'Rei'], ['🧑‍🍳', 'Cozinheiro'], ['🤡', 'Palhaço']] },
        { q: 'O que Gideão fez com o ouro?', o: [['🟨', 'Um éfode'], ['🏰', 'Um castelo'], ['🚗', 'Um carro']] },
        { q: 'Deus se importa quando sofremos?', o: [['💛', 'Sim, muito'], ['❌', 'Não'], ['🤷', 'Às vezes']] }
      ],
      big: [
        { q: 'O que Gideão respondeu quando quiseram fazê-lo rei?', o: ['"O Senhor reinará sobre vocês"', '"Sim, serei rei"', '"Meu filho será rei"', '"Vou pensar"'], e: 'Juízes 8:23.' },
        { q: 'O que aconteceu com o éfode de ouro?', o: ['O povo passou a adorá-lo', 'Foi guardado no templo', 'Foi derretido', 'Foi dado aos pobres'], e: 'Juízes 8:27: tornou-se um laço para Gideão e sua casa.' },
        { q: 'Quem quis ser rei de qualquer jeito?', o: ['Abimeleque', 'Tola', 'Jair', 'Baraque'], e: 'Juízes 9.' },
        { q: 'Como Deus reagiu ao sofrimento do povo arrependido?', o: ['Seu coração se angustiou', 'Ficou indiferente', 'Riu deles', 'Foi embora'], e: 'Juízes 10:16.' }
      ],
      parents: 'Atenção: a história de Abimeleque (Juízes 9), que matou os próprios irmãos para reinar, foi resumida em uma frase: "fez coisas muito más contra a própria família". Se quiser, leia antes Juízes 9 sozinho. Destaque Juízes 10:16, que mostra a compaixão de Deus. Leitura junto: Juízes 8:22-28 e 10:10-16.'
    },
    {
      id: 'j7', title: 'Jefté', ref: 'Juízes 11 – 12', icon: '⚠️',
      recap: 'Na lição passada, Abimeleque quis ser rei de qualquer jeito, e o povo, de novo, precisou clamar a Deus.',
      scenes: [
        { art: '🧔💔', bg: 'deserto', text: 'Jefté era um guerreiro valente de Gileade. Mas os irmãos dele o expulsaram de casa, dizendo que ele não tinha direito à herança. Ele foi rejeitado pela própria família.' },
        { art: '🧔🏜️', bg: 'deserto', text: 'Jefté foi morar longe, numa terra chamada Tobe, e juntou um grupo de homens ao seu redor.' },
        { art: '⚔️🙏', bg: 'cidade', text: 'Quando os amonitas atacaram Israel, os líderes de Gileade, os mesmos que o tinham rejeitado, foram pedir ajuda: "Venha ser o nosso chefe!"' },
        { art: '📜💬', bg: 'palacio', text: 'Jefté tentou resolver sem guerra primeiro. Mandou uma mensagem ao rei dos amonitas, contando a história de como Deus deu aquela terra a Israel. Mas o rei não quis ouvir.' },
        { art: '✨🧔', bg: 'aurora', fx: 'luz', text: 'O Espírito do Senhor veio sobre Jefté, e Deus deu a ele a vitória sobre os amonitas.' },
        { art: '🗣️⚠️', bg: 'noite', text: 'Mas, antes da batalha, Jefté fez um voto, uma promessa a Deus, sem pensar direito no que estava prometendo. E essa promessa apressada trouxe uma tristeza enorme para ele e para a sua única filha.' },
        { art: '😢👧', bg: 'noite', text: 'A Bíblia conta que, todo ano, as moças de Israel se lembravam da filha de Jefté e choravam por ela. Deus não tinha pedido aquela promessa. Ela veio do coração confuso de um povo que tinha esquecido como Deus é.' },
        { art: '⚔️👥', bg: 'monte', text: 'Depois disso, até os homens da tribo de Efraim brigaram com Jefté. O povo de Deus estava lutando contra si mesmo. O ciclo estava ficando cada vez pior.' },
        { art: '✨💛', bg: 'aurora', fx: 'coracoes', text: 'A história de Jefté nos ensina a pensar antes de prometer e a conhecer bem quem Deus é. Deus é bom, e nunca quer o mal dos seus filhos.' }
      ],
      god: 'Deus é bom e conhecê-lo de verdade nos protege de escolhas apressadas.',
      jesus: 'Jefté foi rejeitado pelos irmãos, e depois eles precisaram dele para serem salvos. Jesus também foi rejeitado pelo seu povo e se tornou o Salvador de todos. E, diferente de Jefté, tudo o que Jesus promete é sábio e bom.',
      verse: { ref: 'Tiago 1:19', tx: 'Portanto, meus amados irmãos, todo o homem seja pronto para ouvir, tardio para falar, tardio para se irar.' },
      small: [
        { q: 'Como os irmãos trataram Jefté?', o: [['💔', 'Mandaram ele embora'], ['🎁', 'Deram presentes'], ['🎂', 'Fizeram festa']] },
        { q: 'Antes de prometer, o que devemos fazer?', o: [['🤔', 'Pensar bem'], ['🏃', 'Sair correndo'], ['🙈', 'Fechar os olhos']] },
        { q: 'Quem deu a vitória a Jefté?', o: [['✨', 'Deus'], ['🦅', 'Uma águia'], ['⚡', 'Um raio']] }
      ],
      big: [
        { q: 'Por que Jefté foi morar longe?', o: ['Os irmãos o expulsaram', 'Ele quis viajar', 'Ficou rico', 'Foi preso'], e: 'Juízes 11:1-3.' },
        { q: 'O que Jefté tentou fazer antes da guerra?', o: ['Resolver conversando', 'Fugir', 'Construir um muro', 'Se esconder'], e: 'Juízes 11:12-28: ele mandou mensageiros ao rei de Amom.' },
        { q: 'Qual foi o erro de Jefté?', o: ['Fazer um voto apressado', 'Lutar com coragem', 'Ouvir a Deus', 'Perdoar os irmãos'], e: 'A promessa sem pensar trouxe grande tristeza.' },
        { q: 'O que aprendemos com Jefté?', o: ['Pensar antes de prometer e conhecer a Deus', 'Que promessas não importam', 'Que guerras são boas', 'Que famílias não brigam'], e: 'Eclesiastes 5:2: não te precipites com a tua boca.' }
      ],
      parents: 'Atenção: esta é uma das passagens mais difíceis da Bíblia. O voto de Jefté e o que aconteceu com sua filha (Juízes 11:30-40) foram resumidos sem detalhes. Os estudiosos discutem se ela foi sacrificada ou consagrada a Deus para nunca se casar; o texto bíblico condena os sacrifícios humanos (Deuteronômio 12:31). Sugestão: leia a passagem sozinho antes e responda a perguntas com calma, mostrando que Deus não pediu esse voto. Leitura junto: Juízes 11:1-11 e 29-33.'
    },
    {
      id: 'j8', title: 'Sansão nasce', ref: 'Juízes 13', icon: '👶',
      recap: 'Na lição passada, Jefté fez uma promessa apressada, e aprendemos a pensar antes de prometer.',
      scenes: [
        { art: '🔁🗿', bg: 'cidade', text: 'O povo de novo fez o mal aos olhos do Senhor, e Deus os entregou aos filisteus por quarenta anos. Dessa vez, o povo nem clamou a Deus. Mas Deus agiu mesmo assim.' },
        { art: '👩😢', bg: 'campo', text: 'Na tribo de Dã morava um homem chamado Manoá. Sua esposa não podia ter filhos, e isso a deixava muito triste.' },
        { art: '✨🔥👩', bg: 'aurora', fx: 'luz', text: 'O Anjo do Senhor apareceu à mulher: "Você vai ter um filho! Ele vai começar a livrar Israel dos filisteus."' },
        { art: '✂️🚫', bg: 'aurora', text: 'O anjo explicou: "O menino será nazireu, separado para Deus desde o ventre. Ninguém pode cortar o cabelo dele, e ele não pode beber vinho."' },
        { art: '🧔🙏', bg: 'campo', text: 'Quando Manoá soube, orou: "Senhor, manda de novo o homem de Deus, para nos ensinar o que fazer com o menino." Que bonito: ele queria criar o filho do jeito de Deus!' },
        { art: '🔥⬆️✨', bg: 'monte', fx: 'luz', text: 'O anjo voltou. Manoá ofereceu um sacrifício a Deus, e o anjo subiu ao céu na chama do altar! Manoá e a esposa se prostraram com o rosto em terra.' },
        { art: '👶💛', bg: 'aurora', fx: 'coracoes', text: 'A mulher teve um filho e deu a ele o nome de Sansão. O menino cresceu, e o Senhor o abençoou.' },
        { art: '✨🧒', bg: 'aurora', fx: 'brilho', text: 'E o Espírito do Senhor começou a agir em Sansão. Deus tinha um plano para ele, desde antes de ele nascer.' }
      ],
      god: 'Deus age mesmo quando ninguém pede. Ele tem planos para cada criança desde antes de nascer.',
      jesus: 'Um anjo anunciou o nascimento de Sansão, que ia começar a livrar Israel. Muito tempo depois, um anjo anunciou o nascimento de Jesus, que ia salvar o seu povo dos seus pecados, não só começar, mas terminar a obra (Mateus 1:21).',
      verse: { ref: 'Juízes 13:24', tx: 'Depois teve esta mulher um filho, e chamou o seu nome Sansão; e o menino cresceu, e o Senhor o abençoou.' },
      small: [
        { q: 'Quem apareceu para a mãe de Sansão?', o: [['🔥', 'O Anjo do Senhor'], ['🦉', 'Uma coruja'], ['👮', 'Um guarda']] },
        { q: 'O que não podia cortar de Sansão?', o: [['💇', 'O cabelo'], ['💅', 'As unhas'], ['👕', 'A roupa']] },
        { q: 'Como o anjo subiu ao céu?', o: [['🔥', 'Na chama do altar'], ['🎈', 'Num balão'], ['🪜', 'Numa escada']] }
      ],
      big: [
        { q: 'Que povo dominava Israel nessa época?', o: ['Os filisteus', 'Os midianitas', 'Os amonitas', 'Os egípcios'], e: 'Juízes 13:1.' },
        { q: 'O que era um nazireu?', o: ['Alguém separado para Deus', 'Alguém de Nazaré', 'Um soldado', 'Um sacerdote do templo'], e: 'Números 6 explica o voto de nazireu.' },
        { q: 'O que Manoá pediu a Deus?', o: ['Que ensinasse como criar o menino', 'Que o menino fosse rico', 'Que o anjo fosse embora', 'Uma casa nova'], e: 'Juízes 13:8.' },
        { q: 'O que aconteceu com Sansão enquanto crescia?', o: ['O Senhor o abençoou', 'Ele fugiu de casa', 'Ele ficou doente', 'Ele virou rei'], e: 'Juízes 13:24-25.' }
      ],
      parents: 'Ponto central: a oração de Manoá ("ensina-nos o que devemos fazer ao menino", Juízes 13:8) é um modelo para pais. Ore com a criança pelo futuro dela. Leitura junto: Juízes 13:2-25.'
    },
    {
      id: 'j9', title: 'Sansão, o forte', ref: 'Juízes 14 – 15', icon: '🦁',
      recap: 'Na lição passada, Sansão nasceu, separado para Deus, com a promessa de começar a livrar Israel dos filisteus.',
      scenes: [
        { art: '🧔💍', bg: 'cidade', text: 'Sansão cresceu e quis se casar com uma moça filisteia. Seus pais ficaram preocupados: ela não era do povo de Deus. Mas Sansão fazia o que achava bom aos próprios olhos.' },
        { art: '🦁🧔', bg: 'campo', text: 'No caminho, um leão novo veio rugindo contra ele. O Espírito do Senhor veio sobre Sansão e, sem nenhuma arma, ele venceu o leão com as próprias mãos!' },
        { art: '🐝🍯', bg: 'campo', fx: 'brilho', text: 'Tempos depois, ele passou de novo por ali e viu que um enxame de abelhas tinha feito mel no corpo do leão. Sansão pegou o mel e comeu. Nazireus não deviam tocar em animais mortos, mas Sansão não ligou.' },
        { art: '❓🎉', bg: 'palacio', text: 'Na festa do casamento, Sansão contou uma adivinha aos filisteus: "Do que come saiu comida, e do forte saiu doçura." Ninguém conseguia adivinhar!' },
        { art: '😠🔥', bg: 'cidade', text: 'Os filisteus pressionaram a noiva para descobrir a resposta, e ela contou. A festa acabou em briga, e começou uma grande inimizade entre Sansão e os filisteus.' },
        { art: '🦊🔥🌾', bg: 'campo', fx: 'vento', text: 'Com raiva, Sansão pegou raposas, amarrou tochas nelas e soltou nas plantações dos filisteus. O trigo, as vinhas e as oliveiras pegaram fogo.' },
        { art: '🪢💪', bg: 'monte', text: 'Os filisteus vieram atrás dele. O próprio povo de Israel, com medo, amarrou Sansão com cordas novas e o entregou. Mas o Espírito do Senhor veio sobre ele, e as cordas se partiram como fios queimados!' },
        { art: '🦴💪', bg: 'monte', text: 'Com uma queixada de jumento que estava no chão, Sansão venceu mil filisteus. Deus usava a força de Sansão para livrar Israel.' },
        { art: '💧🙏', bg: 'deserto', fx: 'luz', text: 'Depois, Sansão sentiu uma sede enorme e clamou a Deus. E Deus abriu uma fonte de água ali mesmo! Sansão bebeu e recuperou as forças. Ele julgou Israel por vinte anos.' }
      ],
      god: 'A força vem de Deus. Mas Deus quer mais que força: quer um coração obediente.',
      jesus: 'Sansão foi amarrado e entregue aos inimigos pelo próprio povo, mas as cordas se partiram. Jesus também foi amarrado e entregue pelos seus, e nem a morte conseguiu segurá-lo: Ele ressuscitou!',
      verse: { ref: 'Filipenses 4:13', tx: 'Posso todas as coisas em Cristo que me fortalece.' },
      small: [
        { q: 'Que animal Sansão venceu?', o: [['🦁', 'Um leão'], ['🐭', 'Um ratinho'], ['🐌', 'Uma lesma']] },
        { q: 'O que as abelhas fizeram?', o: [['🍯', 'Mel'], ['🍞', 'Pão'], ['🧀', 'Queijo']] },
        { q: 'De onde vinha a força de Sansão?', o: [['✨', 'De Deus'], ['💊', 'De remédio'], ['🥫', 'De espinafre']] }
      ],
      big: [
        { q: 'Por que os pais de Sansão ficaram preocupados?', o: ['A noiva não era do povo de Deus', 'Ela era muito pobre', 'Ela morava longe', 'Ela era mais velha'], e: 'Juízes 14:3.' },
        { q: 'Qual era a resposta da adivinha de Sansão?', o: ['O mel no leão', 'A chuva', 'O pão', 'O sol'], e: '"Que coisa há mais doce do que o mel, e mais forte do que o leão?" (Juízes 14:18).' },
        { q: 'O que aconteceu com as cordas novas?', o: ['Se partiram como fios queimados', 'Prenderam Sansão para sempre', 'Viraram cobras', 'Sumiram'], e: 'Juízes 15:14.' },
        { q: 'O que Deus fez quando Sansão teve sede?', o: ['Abriu uma fonte de água', 'Mandou chuva', 'Mandou um anjo com suco', 'Nada'], e: 'Juízes 15:18-19.' }
      ],
      parents: 'Ponto central: Sansão é forte por fora, mas guiado pelos próprios desejos ("agrada aos meus olhos", Juízes 14:3). As batalhas foram contadas sem detalhes. Converse sobre a diferença entre ser forte e ser obediente. Leitura junto: Juízes 14:5-9 e 15:14-19.'
    },
    {
      id: 'j10', title: 'Sansão e Dalila', ref: 'Juízes 16', icon: '✂️',
      recap: 'Na lição passada, Deus deu a Sansão uma força enorme, mas Sansão vivia fazendo o que ele mesmo achava bom.',
      scenes: [
        { art: '👩💰', bg: 'palacio', text: 'Sansão gostou de uma mulher chamada Dalila. Os príncipes dos filisteus foram até ela e ofereceram muito dinheiro: "Descubra de onde vem a força dele!"' },
        { art: '👩❓🧔', bg: 'palacio', text: 'Dalila perguntou: "Qual é o segredo da sua força?" Sansão inventou: "Se me amarrarem com sete cordas de arco novas, fico fraco." Mas, quando ela tentou, ele arrebentou tudo.' },
        { art: '🪢🪢🪢', bg: 'palacio', text: 'Ela perguntou de novo, e de novo, e de novo. Ele inventou outras respostas, e sempre se soltava. Mas Dalila insistiu todos os dias, até ele ficar cansado.' },
        { art: '🧔💬✂️', bg: 'noite', text: 'Por fim, Sansão contou a verdade: "Nunca passou navalha na minha cabeça, porque sou nazireu de Deus. Se cortarem o meu cabelo, a força vai embora."' },
        { art: '😴✂️', bg: 'noite', text: 'Dalila fez Sansão dormir e chamou um homem, que cortou as sete tranças do cabelo dele. A força não estava no cabelo: o cabelo era o sinal da promessa a Deus, e Sansão tinha desprezado essa promessa.' },
        { art: '😰⛓️', bg: 'noite', text: 'Sansão acordou e pensou: "Vou me soltar como das outras vezes." Mas ele não sabia que o Senhor tinha se retirado dele. Os filisteus o prenderam e o deixaram sem enxergar.' },
        { art: '⛓️🌾', bg: 'cidade', text: 'Sansão, o homem mais forte, agora girava um moinho na prisão, como um animal. Foi muito triste. Mas a Bíblia conta um detalhe cheio de esperança: o cabelo dele começou a crescer de novo.' },
        { art: '🏛️🎉', bg: 'palacio', text: 'Os filisteus fizeram uma grande festa para o seu deus, Dagom, e trouxeram Sansão para zombar dele. O templo estava lotado.' },
        { art: '🧔🙏🏛️', bg: 'palacio', fx: 'luz', text: 'Sansão encostou nas duas colunas do meio e orou: "Senhor Deus, lembra-te de mim e fortalece-me só mais esta vez!" Pela primeira vez, ele pediu humildemente a ajuda de Deus.' },
        { art: '🏛️💥', bg: 'palacio', text: 'Deus ouviu. Sansão empurrou as colunas com toda a força, e o templo de Dagom caiu. Naquele dia, Sansão venceu mais inimigos do que em toda a sua vida, e morreu junto.' },
        { art: '💛✨', bg: 'aurora', fx: 'coracoes', text: 'Sansão errou muito. Mas, no fim, ele se voltou para Deus, e Deus o ouviu. Hebreus 11 coloca Sansão na lista dos que viveram pela fé. Deus nunca desiste de quem volta para Ele.' }
      ],
      god: 'Deus é fiel até quando nós falhamos, e ouve quem volta para Ele com humildade.',
      jesus: 'Sansão abriu os braços entre duas colunas e, morrendo, venceu os inimigos. Jesus abriu os braços na cruz e, morrendo, venceu o pecado e a morte. Mas Sansão ficou no túmulo; Jesus ressuscitou ao terceiro dia!',
      verse: { ref: 'Juízes 16:28', tx: 'Senhor Deus, peço-te que te lembres de mim, e esforça-me agora só esta vez.' },
      small: [
        { q: 'O que cortaram de Sansão?', o: [['✂️', 'O cabelo'], ['👟', 'O sapato'], ['🧣', 'O cachecol']] },
        { q: 'O que Sansão fez no final?', o: [['🙏', 'Orou a Deus'], ['🎤', 'Cantou'], ['🏃', 'Fugiu']] },
        { q: 'Deus ouviu a oração de Sansão?', o: [['✅', 'Sim'], ['❌', 'Não'], ['🤷', 'Talvez']] }
      ],
      big: [
        { q: 'O que os filisteus ofereceram a Dalila?', o: ['Muito dinheiro', 'Um castelo', 'Um casamento', 'Um cavalo'], e: 'Cada príncipe ofereceu mil e cem moedas de prata (Juízes 16:5).' },
        { q: 'De onde vinha, de verdade, a força de Sansão?', o: ['Do Senhor', 'Do cabelo', 'Dos músculos', 'Do mel'], e: 'O cabelo era o sinal do voto; a força vinha do Senhor (Juízes 16:20).' },
        { q: 'O que começou a acontecer na prisão?', o: ['O cabelo voltou a crescer', 'Ele fugiu', 'Ele ficou rico', 'Ele virou filisteu'], e: 'Juízes 16:22: um sinal de esperança.' },
        { q: 'Em que lista do Novo Testamento Sansão aparece?', o: ['Na lista dos heróis da fé, em Hebreus 11', 'Na lista dos apóstolos', 'Na lista dos reis', 'Em nenhuma'], e: 'Hebreus 11:32.' }
      ],
      parents: 'Atenção: a prisão de Sansão (os filisteus lhe furaram os olhos) foi contada como "o deixaram sem enxergar", e a queda do templo sem detalhes. O ponto alto é a oração humilde de Sansão e a fidelidade de Deus. Leitura junto: Juízes 16:4-6, 15-22 e 28-30.'
    },
    {
      id: 'j11', title: 'Cada um fazia o que queria', ref: 'Juízes 17 – 21', icon: '🧭',
      recap: 'Na lição passada, Sansão falhou muito, mas no fim orou a Deus com humildade, e Deus o ouviu.',
      scenes: [
        { art: '📖🔚', bg: 'noite', text: 'Os últimos capítulos de Juízes não contam histórias de heróis. Contam como o povo estava perdido, longe de Deus. São capítulos tristes, mas importantes.' },
        { art: '🧑🗿🏠', bg: 'cidade', text: 'Um homem chamado Mica fez um ídolo e montou na própria casa um templo de mentira. Ele até contratou um sacerdote. Achava que estava agradando a Deus, mas fazia tudo do seu próprio jeito.' },
        { art: '👥🗿', bg: 'cidade', text: 'Depois, a tribo de Dã pegou aquele ídolo e o sacerdote para eles. E a idolatria se espalhou ainda mais.' },
        { art: '⚔️💔', bg: 'deserto', text: 'Mais tarde, aconteceu um crime horrível numa cidade da tribo de Benjamim. E, por causa disso, as tribos de Israel entraram em guerra umas contra as outras. Irmãos lutando contra irmãos.' },
        { art: '😢👥', bg: 'noite', text: 'Muita gente sofreu. Quase uma tribo inteira desapareceu. O povo chorou diante de Deus, triste com o que tinha acontecido.' },
        { art: '🧭❓', bg: 'campo', fx: 'vento', text: 'A Bíblia explica tudo isso com uma frase, repetida várias vezes: "Naqueles dias não havia rei em Israel; cada um fazia o que parecia certo aos seus próprios olhos."' },
        { art: '👁️👉', bg: 'aurora', text: 'Quando cada pessoa decide sozinha o que é certo, sem ouvir a Deus, tudo vira confusão. O povo precisava de um rei bom, que os guiasse no caminho de Deus.' },
        { art: '👑✨', bg: 'aurora', fx: 'brilho', text: 'Deus ia mandar esse rei. Primeiro viria Davi, o rei pastor. E, muito depois, da família de Davi, viria o Rei perfeito: Jesus, o Rei que nunca erra e nos ensina o que é certo.' }
      ],
      god: 'O certo não é o que eu acho: é o que Deus diz. Ele nos dá um Rei bom para nos guiar.',
      jesus: 'O povo vivia perdido, cada um fazendo o que achava certo, e precisava de um rei que mostrasse o caminho. Jesus é esse Rei, e Ele mesmo disse: "Eu sou o caminho, e a verdade, e a vida" (João 14:6).',
      verse: { ref: 'Juízes 21:25', tx: 'Naqueles dias não havia rei em Israel; porém cada um fazia o que parecia reto aos seus olhos.' },
      small: [
        { q: 'O que Mica fez na casa dele?', o: [['🗿', 'Um ídolo'], ['🍰', 'Um bolo'], ['🧸', 'Um ursinho']] },
        { q: 'Quem decide o que é certo?', o: [['✨', 'Deus'], ['🐒', 'O macaco'], ['🎲', 'O dado']] },
        { q: 'Quem é o Rei perfeito que Deus mandou?', o: [['✝️', 'Jesus'], ['🤴', 'Um príncipe'], ['🦁', 'Um leão']] }
      ],
      big: [
        { q: 'Qual frase se repete no fim de Juízes?', o: ['"Cada um fazia o que parecia certo aos seus olhos"', '"E houve paz por quarenta anos"', '"E o Senhor os abençoou"', '"E todos foram felizes"'], e: 'Juízes 17:6 e 21:25.' },
        { q: 'O que estava errado no templo de Mica?', o: ['Ele adorava do seu jeito, com um ídolo', 'Era pequeno demais', 'Era longe', 'Não tinha telhado'], e: 'Juízes 17:5-6.' },
        { q: 'O que aconteceu entre as tribos de Israel?', o: ['Entraram em guerra entre si', 'Fizeram uma grande festa', 'Construíram um templo', 'Voltaram ao Egito'], e: 'Juízes 20.' },
        { q: 'Do que o povo precisava?', o: ['De um rei bom que os guiasse a Deus', 'De mais ídolos', 'De mais dinheiro', 'De muros mais altos'], e: 'Esse desejo prepara a história de Samuel, Saul e Davi.' }
      ],
      parents: 'Atenção: Juízes 19–21 descreve violência grave contra uma mulher e uma guerra civil. O app apenas diz que "aconteceu um crime horrível" e que as tribos guerrearam. Recomendamos que adultos leiam esses capítulos sozinhos. O foco para a criança é a frase-chave (Juízes 21:25) e a necessidade de um Rei bom, que aponta para Davi e para Jesus.'
    },
    {
      id: 'j12', title: 'Rute e Noemi', ref: 'Rute 1', icon: '🤝',
      recap: 'Terminamos o livro de Juízes, um tempo muito confuso. Agora, uma história de amor e fidelidade que aconteceu nesse mesmo tempo.',
      scenes: [
        { art: '🌾🚫', bg: 'deserto', text: 'Nos dias em que os juízes governavam, houve fome em Israel. Em Belém, que quer dizer "casa do pão", não tinha pão!' },
        { art: '👨👩👦👦🚶', bg: 'deserto', fx: 'vento', text: 'Um homem chamado Elimeleque foi com a esposa, Noemi, e os dois filhos morar em Moabe, uma terra estrangeira, para fugir da fome.' },
        { art: '😢🕯️', bg: 'noite', text: 'Lá, Elimeleque morreu. Os filhos se casaram com duas moças moabitas, Orfa e Rute. Mas, depois de uns dez anos, os dois filhos também morreram. Noemi ficou sozinha, com as duas noras.' },
        { art: '🌾✨', bg: 'aurora', fx: 'luz', text: 'Um dia, Noemi soube que o Senhor tinha visitado o seu povo e dado pão de novo em Belém. Ela decidiu voltar para casa.' },
        { art: '👵💬👩👩', bg: 'deserto', text: 'No caminho, Noemi disse às noras: "Voltem para a casa das suas mães. Que o Senhor seja bom com vocês, como vocês foram comigo." E as beijou, e todas choraram.' },
        { art: '👋👩', bg: 'deserto', text: 'Orfa beijou a sogra e voltou para o seu povo. Mas Rute se agarrou a Noemi e não quis deixá-la.' },
        { art: '🤝💛', bg: 'aurora', fx: 'coracoes', text: 'Rute disse uma das frases mais lindas da Bíblia: "Aonde você for, eu irei. Onde você morar, eu morarei. O seu povo será o meu povo, e o seu Deus será o meu Deus."' },
        { art: '✨👩', bg: 'aurora', fx: 'brilho', text: 'Rute era estrangeira, mas escolheu o Deus de Israel. Ela deixou tudo para trás para cuidar da sogra e confiar no Senhor.' },
        { art: '🏘️👵👩', bg: 'campo', text: 'As duas chegaram a Belém no começo da colheita da cevada. A cidade toda se agitou: "Não é a Noemi?" Ela respondeu: "Não me chamem de Noemi, que quer dizer agradável. Me chamem de Mara, que quer dizer amarga."' }
      ],
      god: 'Deus recebe todos os que confiam nele, de qualquer povo. E Ele está agindo mesmo quando a vida está triste.',
      jesus: 'Rute era estrangeira, mas escolheu o Deus de Israel e foi recebida no povo de Deus. Em Jesus, pessoas de todos os povos, como nós aqui no Brasil, são recebidas na família de Deus.',
      verse: { ref: 'Rute 1:16', tx: 'Aonde quer que tu fores irei eu, e onde quer que pousares, ali pousarei eu; o teu povo é o meu povo, o teu Deus é o meu Deus.' },
      small: [
        { q: 'Por que a família foi para Moabe?', o: [['🌾', 'Porque havia fome'], ['🏖️', 'Para passear'], ['🎪', 'Para ver o circo']] },
        { q: 'Quem ficou com Noemi?', o: [['👩', 'Rute'], ['🐱', 'Um gatinho'], ['👑', 'Uma rainha']] },
        { q: 'Para qual cidade elas voltaram?', o: [['🏘️', 'Belém'], ['🗼', 'Babel'], ['🏰', 'Egito']] }
      ],
      big: [
        { q: 'O que quer dizer Belém?', o: ['Casa do pão', 'Cidade do rei', 'Terra das ovelhas', 'Lugar de festa'], e: 'Por isso era irônico haver fome em Belém.' },
        { q: 'Como se chamava a nora que voltou para o seu povo?', o: ['Orfa', 'Rute', 'Raquel', 'Sara'], e: 'Rute 1:14.' },
        { q: 'O que Rute prometeu a Noemi?', o: ['"O teu Deus é o meu Deus"', '"Vou voltar para casa"', '"Vou ficar rica"', '"Vou me casar logo"'], e: 'Rute 1:16.' },
        { q: 'Por que Noemi pediu para ser chamada de Mara?', o: ['Porque estava muito triste', 'Porque gostava do nome', 'Porque era rainha', 'Porque era estrangeira'], e: 'Mara significa amarga (Rute 1:20).' }
      ],
      parents: 'Ponto central: fidelidade (em hebraico, hesed: amor leal). Rute, estrangeira, entra no povo de Deus pela fé. Se a criança perguntar sobre as mortes, diga apenas que a família passou por muita tristeza, e que Deus não abandonou Noemi. Leitura junto: Rute 1.'
    },
    {
      id: 'j13', title: 'Rute no campo de Boaz', ref: 'Rute 2 – 3', icon: '🌾',
      recap: 'Na lição passada, Rute escolheu o Deus de Israel e foi com Noemi para Belém.',
      scenes: [
        { art: '👩🌾', bg: 'campo', text: 'Rute disse: "Deixe-me ir ao campo catar espigas." Na lei de Deus, os pobres e os estrangeiros podiam recolher as espigas que sobravam atrás dos ceifeiros.' },
        { art: '🧔🌾', bg: 'campo', text: 'Sem saber, Rute foi justamente para o campo de Boaz, um homem rico e bondoso, parente de Elimeleque, o marido de Noemi. Parecia sorte, mas era Deus guiando.' },
        { art: '🧔💬👨‍🌾', bg: 'campo', text: 'Boaz chegou e cumprimentou os trabalhadores: "O Senhor seja convosco!" Eles responderam: "O Senhor te abençoe!" Boaz amava a Deus.' },
        { art: '🧔👀👩', bg: 'campo', text: 'Boaz perguntou quem era aquela moça. Contaram que era Rute, a moabita que tinha voltado com Noemi, e que trabalhava sem parar desde cedo.' },
        { art: '🧔💛👩', bg: 'campo', fx: 'coracoes', text: 'Boaz disse a Rute: "Fique no meu campo. Ninguém vai incomodar você. Eu soube de tudo o que você fez pela sua sogra. Que o Deus de Israel, debaixo de cujas asas você veio se abrigar, recompense você."' },
        { art: '🍞🌾', bg: 'campo', fx: 'brilho', text: 'Na hora do almoço, Boaz deu pão e grão tostado a Rute, até ela ficar satisfeita. E mandou os trabalhadores deixarem cair espigas de propósito para ela.' },
        { art: '👵😮👩', bg: 'cidade', text: 'À noite, Rute chegou em casa com muita cevada. Noemi ficou surpresa e, quando soube que era o campo de Boaz, louvou a Deus: "Esse homem é nosso parente, um dos nossos remidores!"' },
        { art: '🛡️❓', bg: 'aurora', text: 'Remidor era um parente próximo que, pela lei de Deus, podia resgatar a família: comprar de volta a terra perdida e cuidar da viúva. Era como um protetor da família.' },
        { art: '🌾🌙', bg: 'noite', fx: 'estrelas', text: 'Rute trabalhou até o fim das colheitas. Então, seguindo o conselho de Noemi, foi até Boaz e pediu, de forma respeitosa, que ele fosse o remidor da família.' },
        { art: '🧔🤝', bg: 'aurora', fx: 'luz', text: 'Boaz ficou muito feliz: "Todo o povo sabe que você é uma mulher virtuosa! Eu vou fazer o que você pediu." Mas havia um parente ainda mais próximo. Boaz prometeu resolver tudo do jeito certo.' }
      ],
      god: 'Deus cuida dos detalhes da nossa vida. O que parece acaso, muitas vezes, é a mão de Deus.',
      jesus: 'Boaz, o remidor, abrigou Rute com bondade. Jesus é o nosso Remidor: Ele nos resgata e nos protege. Jesus disse que queria juntar o seu povo "como a galinha ajunta os seus pintinhos debaixo das asas" (Mateus 23:37).',
      verse: { ref: 'Rute 2:12', tx: 'O Senhor galardoe o teu feito; e te seja concedido pleno galardão da parte do Senhor Deus de Israel, sob cujas asas te vieste abrigar.' },
      small: [
        { q: 'O que Rute catava no campo?', o: [['🌾', 'Espigas'], ['🐚', 'Conchas'], ['🍄', 'Cogumelos']] },
        { q: 'Como Boaz tratou Rute?', o: [['💛', 'Com bondade'], ['😠', 'Com raiva'], ['🙈', 'Ignorou']] },
        { q: 'Quem guiou Rute ao campo de Boaz?', o: [['✨', 'Deus'], ['🗺️', 'Um mapa'], ['🐕', 'Um cachorro']] }
      ],
      big: [
        { q: 'Por que Rute podia catar espigas no campo?', o: ['A lei de Deus cuidava dos pobres e estrangeiros', 'Ela era dona do campo', 'Ela pagou', 'Ela era da família de Boaz'], e: 'Levítico 19:9-10.' },
        { q: 'O que Boaz mandou os trabalhadores fazerem?', o: ['Deixar cair espigas para ela', 'Mandá-la embora', 'Cobrar dela', 'Vigiá-la'], e: 'Rute 2:15-16.' },
        { q: 'O que era um remidor?', o: ['Um parente que resgatava a família', 'Um juiz', 'Um rei', 'Um ceifeiro'], e: 'Levítico 25:25 e Deuteronômio 25:5-6.' },
        { q: 'O que parecia sorte na história?', o: ['Rute ir parar no campo de Boaz', 'A fome', 'A colheita', 'O almoço'], e: 'Rute 2:3: "caiu-lhe em sorte"... mas era Deus guiando.' }
      ],
      parents: 'Ponto central: a providência de Deus nos detalhes, e Boaz como figura do Redentor (Cristo, que nos resgata). A cena na eira (Rute 3) foi resumida como um pedido respeitoso para que Boaz fosse o remidor, que é o sentido do texto. Leitura junto: Rute 2.'
    },
    {
      id: 'j14', title: 'O bisavô de Davi', ref: 'Rute 4', icon: '👶',
      recap: 'Na lição passada, Rute trabalhou no campo de Boaz, e Boaz prometeu ser o remidor da família.',
      scenes: [
        { art: '🚪🏘️', bg: 'cidade', text: 'Boaz foi até a porta da cidade, onde os anciãos resolviam os assuntos importantes, e esperou o parente que era mais próximo que ele.' },
        { art: '🧔💬🧔', bg: 'cidade', text: 'Boaz perguntou: "Você quer resgatar o campo de Elimeleque?" O homem disse que sim. Mas, quando soube que teria de cuidar de Rute também, desistiu: "Não posso. Resgate você."' },
        { art: '👡🤝', bg: 'cidade', text: 'Naquele tempo, para fechar um negócio, a pessoa tirava a sandália e entregava ao outro. O parente tirou a sandália, e pronto: Boaz era o remidor!' },
        { art: '👥✨', bg: 'cidade', fx: 'brilho', text: 'Boaz disse diante de todos: "Vocês são testemunhas de que eu resgato tudo o que era da família, e de que Rute será minha esposa." E o povo abençoou o casal.' },
        { art: '💍💛', bg: 'aurora', fx: 'coracoes', text: 'Boaz se casou com Rute. A moça estrangeira, viúva e pobre agora fazia parte do povo de Deus, com uma família e um lar.' },
        { art: '👶😊', bg: 'aurora', fx: 'brilho', text: 'Deus deu a eles um filho! As mulheres de Belém disseram a Noemi: "Bendito seja o Senhor, que não deixou você sem remidor! Sua nora, que te ama, vale mais que sete filhos."' },
        { art: '👵👶', bg: 'aurora', fx: 'coracoes', text: 'Noemi pegou o bebê no colo e cuidou dele. Aquela que tinha voltado amarga agora estava cheia de alegria. Deus transformou a tristeza dela.' },
        { art: '👶➡️👑', bg: 'palacio', fx: 'luz', text: 'O bebê se chamou Obede. Obede foi pai de Jessé, e Jessé foi pai de Davi, o grande rei de Israel! Rute, a moabita, foi bisavó do rei Davi.' },
        { art: '👑✝️', bg: 'aurora', fx: 'brilho', text: 'E tem mais: no Evangelho de Mateus, o nome de Rute aparece na lista da família de Jesus! Num tempo tão confuso como o dos juízes, Deus estava preparando o caminho para o Rei.' }
      ],
      god: 'Deus transforma tristeza em alegria e usa histórias simples para cumprir o seu grande plano.',
      jesus: 'Do bebê Obede veio o rei Davi, e da família de Davi veio Jesus, nascido em Belém, a cidade de Rute e Boaz! Boaz pagou para resgatar Rute; Jesus pagou com a própria vida para nos resgatar.',
      verse: { ref: 'Rute 4:17', tx: 'E chamaram o seu nome Obede. Este é o pai de Jessé, pai de Davi.' },
      small: [
        { q: 'Com quem Rute se casou?', o: [['🧔', 'Com Boaz'], ['🤴', 'Com o Faraó'], ['🧙', 'Com um mágico']] },
        { q: 'Quem nasceu?', o: [['👶', 'O bebê Obede'], ['🐣', 'Um pintinho'], ['🐶', 'Um cachorrinho']] },
        { q: 'Qual rei veio dessa família?', o: [['👑', 'O rei Davi'], ['🃏', 'O rei de copas'], ['🦁', 'O rei leão']] }
      ],
      big: [
        { q: 'Onde Boaz resolveu o assunto?', o: ['Na porta da cidade', 'No templo', 'No campo', 'Na casa de Noemi'], e: 'A porta da cidade era o lugar dos anciãos e dos acordos (Rute 4:1).' },
        { q: 'Como fechavam um negócio naquele tempo?', o: ['Entregando a sandália', 'Assinando um papel', 'Dando um aperto de mão', 'Com uma festa'], e: 'Rute 4:7-8.' },
        { q: 'O que Obede era de Davi?', o: ['Avô', 'Pai', 'Irmão', 'Tio'], e: 'Obede foi pai de Jessé, que foi pai de Davi.' },
        { q: 'Em que livro do Novo Testamento Rute aparece?', o: ['Mateus, na genealogia de Jesus', 'Apocalipse', 'Atos', 'Romanos'], e: 'Mateus 1:5.' }
      ],
      parents: 'Ponto central: Boaz, o remidor, prefigura Cristo, que nos resgata a um alto preço. Rute, estrangeira, entra na linhagem do Messias (Mateus 1:5), mostrando que o evangelho é para todos os povos. Leitura junto: Rute 4:9-22.'
    }
  ]
};
