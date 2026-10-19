/* A Grande História da Bíblia — Arco 1: O Começo (Gênesis 1–11)
   Cada lição: recap (onde paramos), cenas, sobre Deus, versículo ACF, perguntas (small: figuras / big: palavras; a 1ª opção é a certa) e nota para os pais. */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.comeco = {
  id: 'comeco', n: 1, name: 'O Começo', sub: 'Criação, queda, Noé e Babel', ref: 'Gênesis 1–11', icon: '🌍', scene: 'jardim',
  intro: 'Antes de tudo existir, só Deus existia. Nesta primeira parte da grande história, vamos ver como Deus fez o mundo, por que as coisas ficaram tristes e como Deus fez uma promessa que atravessa a Bíblia inteira.',
  lessons: [
    {
      id: 'c1', title: 'No princípio, Deus', ref: 'Gênesis 1:1-13', icon: '✨',
      recap: 'Esta é a primeira lição da grande história da Bíblia! Vamos começar bem do comecinho.',
      scenes: [
        { art: '🌑', bg: 'noite', text: 'Antes de existir o céu, a terra, as pessoas e os bichos, só uma pessoa existia: Deus. Ele sempre existiu e nunca vai deixar de existir.' },
        { art: '🌊🌑', bg: 'noite', fx: 'ondas', text: 'A Bíblia conta que a terra era sem forma e vazia, e havia escuridão. E o Espírito de Deus se movia sobre as águas.' },
        { art: '✨💡', bg: 'aurora', fx: 'luz', text: 'Então Deus falou: "Haja luz!" E a luz apareceu! Deus não precisou de ferramentas. Ele só falou, e aconteceu.' },
        { art: '☀️🌙', bg: 'aurora', fx: 'brilho', text: 'Deus viu que a luz era boa. Ele separou a luz da escuridão. Chamou a luz de dia e a escuridão de noite. Esse foi o primeiro dia.' },
        { art: '☁️💧🌊', bg: 'mar', fx: 'ondas', text: 'No segundo dia, Deus separou as águas de cima das águas de baixo, e fez o céu bem grande no meio.' },
        { art: '🏔️🌊', bg: 'monte', text: 'No terceiro dia, Deus juntou as águas num lugar só, e apareceu a terra seca. As águas juntas viraram mares.' },
        { art: '🌱🌳🍎', bg: 'jardim', text: 'Ainda no terceiro dia, Deus mandou a terra produzir plantas: grama, flores, árvores com frutas, todas com sementes para nascerem outras.' },
        { art: '😊👍', bg: 'jardim', fx: 'brilho', text: 'E cada vez que Deus terminava, Ele olhava e dizia: "Isso é bom!" Tudo o que Deus faz é bom.' }
      ],
      god: 'Deus sempre existiu. Ele é tão poderoso que criou tudo só com a sua palavra.',
      jesus: 'O Evangelho de João começa igual a Gênesis: "No princípio era o Verbo." Jesus já estava lá na criação, e tudo foi feito por meio dele! E quando Jesus veio ao mundo, disse: "Eu sou a luz do mundo."',
      verse: { ref: 'Gênesis 1:1', tx: 'No princípio criou Deus os céus e a terra.' },
      small: [
        { q: 'Quem existia antes de tudo?', o: [['✨', 'Deus'], ['🦖', 'Os dinossauros'], ['👨', 'As pessoas']] },
        { q: 'O que Deus falou primeiro?', o: [['💡', 'Haja luz!'], ['🍕', 'Quero pizza!'], ['😴', 'Boa noite!']] },
        { q: 'O que Deus fez no terceiro dia?', o: [['🌳', 'Plantas e árvores'], ['🚗', 'Carros'], ['📱', 'Celulares']] }
      ],
      big: [
        { q: 'Como Deus criou a luz?', o: ['Falando: "Haja luz!"', 'Acendendo uma vela', 'Usando o sol', 'Pedindo aos anjos'], e: 'Deus cria com a sua palavra. Ele falou, e a luz existiu (Gênesis 1:3).' },
        { q: 'Como Deus chamou a luz e a escuridão?', o: ['Dia e noite', 'Manhã e tarde', 'Sol e lua', 'Claro e escuro'], e: 'Gênesis 1:5: Deus chamou à luz Dia, e às trevas Noite.' },
        { q: 'O que Deus dizia quando terminava cada coisa?', o: ['Que era bom', 'Que estava cansado', 'Que ia mudar depois', 'Nada'], e: 'Tudo o que Deus criou era bom.' },
        { q: 'O que apareceu quando Deus juntou as águas?', o: ['A terra seca', 'O sol', 'As estrelas', 'Os peixes'], e: 'Deus chamou a terra seca de Terra, e as águas juntas de Mares.' }
      ],
      parents: 'Ponto central: Deus é eterno e criador; nada existia antes dele. Pergunte à criança: "O que você mais gosta de tudo o que Deus fez?" Leitura junto: Gênesis 1:1-13 e Salmo 33:6-9.'
    },
    {
      id: 'c2', title: 'Deus enche o mundo', ref: 'Gênesis 1:14 – 2:3', icon: '🐟',
      recap: 'Na lição passada, Deus criou a luz, o céu, os mares e as plantas, só com a sua palavra.',
      scenes: [
        { art: '☀️🌙⭐', bg: 'noite', fx: 'estrelas', text: 'No quarto dia, Deus colocou luzes no céu: o sol para o dia, a lua e as estrelas para a noite. Elas marcam os dias, os meses e os anos.' },
        { art: '🐟🐬🐙', bg: 'mar', fx: 'ondas', text: 'No quinto dia, Deus encheu os mares de peixes e de animais enormes, e os céus de passarinhos voando de um lado para o outro.' },
        { art: '🐦🦅🦜', bg: 'aurora', fx: 'vento', text: 'Deus abençoou os peixes e as aves e disse: "Cresçam e se multipliquem!" Logo o mundo estava cheio de vida.' },
        { art: '🦁🐘🐑🐇', bg: 'campo', text: 'No sexto dia, Deus fez os animais da terra: os grandes, os pequenos, os que andam e os que rastejam. Cada um do seu jeitinho.' },
        { art: '✨👫', bg: 'jardim', fx: 'luz', text: 'Depois, Deus fez algo muito especial: o homem e a mulher. Deus disse: "Vamos fazer o ser humano à nossa imagem."' },
        { art: '👫💛', bg: 'jardim', fx: 'coracoes', text: 'Ser feito à imagem de Deus quer dizer que nós podemos conhecer a Deus, amar, pensar e cuidar. Nenhum bicho é assim. Cada pessoa é muito valiosa para Deus.' },
        { art: '🌍🌳🐑', bg: 'jardim', text: 'Deus deu às pessoas um trabalho: cuidar da terra e dos animais. O mundo é de Deus, e Ele nos deixou para cuidar dele.' },
        { art: '😊🌍', bg: 'aurora', fx: 'brilho', text: 'Deus olhou tudo o que tinha feito, e era muito bom! Não só bom: muito bom!' },
        { art: '😌🌅', bg: 'aurora', text: 'No sétimo dia, Deus descansou. Não porque estava cansado, mas porque tinha terminado. E Ele abençoou o sétimo dia como um dia especial.' }
      ],
      god: 'Deus fez cada pessoa à sua imagem. Por isso todo mundo tem muito valor para Ele.',
      jesus: 'Adão foi o primeiro homem feito à imagem de Deus. Jesus é a imagem perfeita do Deus invisível (Colossenses 1:15). Por meio de Jesus, Deus vai nos refazendo para sermos parecidos com Ele.',
      verse: { ref: 'Gênesis 1:27', tx: 'E criou Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou.' },
      small: [
        { q: 'O que Deus colocou no céu para a noite?', o: [['🌙', 'A lua e as estrelas'], ['🎈', 'Balões'], ['🪁', 'Pipas']] },
        { q: 'Quem Deus fez à sua imagem?', o: [['👫', 'As pessoas'], ['🐒', 'Os macacos'], ['🌳', 'As árvores']] },
        { q: 'O que Deus fez no sétimo dia?', o: [['😌', 'Descansou'], ['🏗️', 'Construiu'], ['🏃', 'Correu']] }
      ],
      big: [
        { q: 'Em que dia Deus fez o sol, a lua e as estrelas?', o: ['No quarto dia', 'No primeiro dia', 'No sétimo dia', 'No segundo dia'], e: 'A luz veio no primeiro dia; o sol, a lua e as estrelas, no quarto.' },
        { q: 'O que quer dizer ser feito à imagem de Deus?', o: ['Que podemos conhecer e amar a Deus', 'Que somos iguais a Deus', 'Que parecemos anjos', 'Que nunca erramos'], e: 'Fomos feitos para refletir quem Deus é e ter amizade com Ele.' },
        { q: 'Qual trabalho Deus deu às pessoas?', o: ['Cuidar da terra e dos animais', 'Fazer novas estrelas', 'Mandar no sol', 'Não fazer nada'], e: 'Gênesis 1:28: Deus deu às pessoas a tarefa de cuidar da criação.' },
        { q: 'Por que Deus descansou no sétimo dia?', o: ['Porque tinha terminado a criação', 'Porque estava muito cansado', 'Porque estava doente', 'Porque choveu'], e: 'Deus não se cansa; Ele descansou porque a obra estava completa (Gênesis 2:2).' }
      ],
      parents: 'Ponto central: o ser humano é a coroa da criação, feito à imagem de Deus, com valor e responsabilidade. Bom momento para falar sobre tratar bem as pessoas e cuidar da natureza. Leitura junto: Gênesis 1:26-31 e Salmo 8.'
    },
    {
      id: 'c3', title: 'O jardim do Éden', ref: 'Gênesis 2:4-25', icon: '🌳',
      recap: 'Na lição passada, Deus encheu o mundo de vida e fez as pessoas à sua imagem.',
      scenes: [
        { art: '✨🧑', bg: 'campo', fx: 'luz', text: 'A Bíblia conta com mais detalhes como Deus fez o primeiro homem: Ele formou o homem do pó da terra e soprou nele o fôlego da vida. E o homem ganhou vida!' },
        { art: '🌳🍎🌸', bg: 'jardim', text: 'O nome dele era Adão. Deus plantou um jardim lindo, no Éden, cheio de árvores com frutas gostosas, e colocou Adão lá.' },
        { art: '🏞️💧', bg: 'jardim', fx: 'ondas', text: 'Um rio passava pelo jardim e regava tudo. No meio do jardim havia duas árvores especiais: a árvore da vida e a árvore do conhecimento do bem e do mal.' },
        { art: '🧑🌱', bg: 'jardim', text: 'Deus deu a Adão um trabalho: cuidar do jardim e guardá-lo. Trabalhar é uma coisa boa, que Deus criou.' },
        { art: '🌳🚫', bg: 'jardim', text: 'Deus disse: "Pode comer de todas as árvores, menos de uma: a árvore do conhecimento do bem e do mal. Se comer dela, você vai morrer."' },
        { art: '🦁🐘🦒', bg: 'campo', text: 'Deus trouxe os animais até Adão, e Adão deu um nome para cada um. Mas, entre todos os animais, não havia ninguém como ele, para ser sua companhia.' },
        { art: '😴🧑', bg: 'noite', text: 'Deus disse: "Não é bom que o homem esteja sozinho." Então fez Adão dormir um sono bem profundo, tirou uma costela dele e, dela, formou a mulher.' },
        { art: '🧑💛👩', bg: 'aurora', fx: 'coracoes', text: 'Quando Adão viu a mulher, ficou muito feliz: "Esta, sim, é como eu!" Deus os uniu, e eles viraram uma família. O nome dela, mais tarde, foi Eva.' },
        { art: '🌳😊👫', bg: 'jardim', fx: 'brilho', text: 'Adão e Eva viviam no jardim com Deus, sem medo, sem vergonha e sem tristeza. Era tudo do jeito que Deus planejou.' }
      ],
      god: 'Deus cuida de nós e sabe do que precisamos. Ele nos deu família, trabalho e regras boas.',
      jesus: 'No Éden, Deus morava pertinho das pessoas. Jesus veio morar entre nós (João 1:14), e prometeu um lugar novo onde vamos viver com Deus para sempre, com a árvore da vida (Apocalipse 22).',
      verse: { ref: 'Gênesis 2:15', tx: 'E tomou o Senhor Deus o homem, e o pôs no jardim do Éden para o lavrar e o guardar.' },
      small: [
        { q: 'De que Deus formou Adão?', o: [['🟤', 'Do pó da terra'], ['🧊', 'Do gelo'], ['🍫', 'De chocolate']] },
        { q: 'Onde Adão e Eva moravam?', o: [['🌳', 'Num jardim'], ['🏙️', 'Numa cidade'], ['🚀', 'Num foguete']] },
        { q: 'Quem deu nome aos animais?', o: [['🧑', 'Adão'], ['🐒', 'O macaco'], ['🦉', 'A coruja']] }
      ],
      big: [
        { q: 'Como Adão ganhou vida?', o: ['Deus soprou nele o fôlego da vida', 'Um raio caiu nele', 'Ele acordou sozinho', 'Um anjo o tocou'], e: 'Gênesis 2:7: Deus soprou em suas narinas o fôlego da vida.' },
        { q: 'De qual árvore Deus disse para não comer?', o: ['Do conhecimento do bem e do mal', 'Da árvore da vida', 'Da figueira', 'Da macieira'], e: 'Era só uma regra, e todo o resto do jardim era deles.' },
        { q: 'Por que Deus fez a mulher?', o: ['Não era bom o homem estar sozinho', 'Para cuidar dos bichos sozinha', 'Porque Adão pediu um animal', 'Para morar em outro jardim'], e: 'Deus criou a família: homem e mulher, para serem companhia um do outro.' },
        { q: 'Qual trabalho Adão recebeu no jardim?', o: ['Cuidar dele e guardá-lo', 'Construir uma torre', 'Pescar no rio', 'Contar as estrelas'], e: 'O trabalho existe desde antes do pecado; é um presente de Deus.' }
      ],
      parents: 'Ponto central: Deus provê tudo (comida, trabalho, companhia) e dá uma única regra por amor. Se a criança perguntar sobre a costela, diga simplesmente que Deus pode criar como quiser. Leitura junto: Gênesis 2:4-25.'
    },
    {
      id: 'c4', title: 'A serpente e a escolha errada', ref: 'Gênesis 3:1-7', icon: '🐍',
      recap: 'Na lição passada, Adão e Eva viviam felizes no jardim. Deus tinha dado só uma regra: não comer da árvore do conhecimento do bem e do mal.',
      scenes: [
        { art: '🐍🌳', bg: 'jardim', text: 'No jardim havia uma serpente, mais esperta que todos os animais. A Bíblia mostra depois que, por trás dela, estava Satanás, o inimigo de Deus.' },
        { art: '🐍💬👩', bg: 'jardim', text: 'A serpente perguntou para Eva: "É verdade que Deus disse que vocês não podem comer de nenhuma árvore do jardim?" Era uma pergunta para confundir.' },
        { art: '👩🌳', bg: 'jardim', text: 'Eva respondeu: "Podemos comer de todas! Só daquela do meio Deus disse: não comam, para não morrerem."' },
        { art: '🐍😏', bg: 'jardim', text: 'A serpente mentiu: "Vocês não vão morrer coisa nenhuma! Deus sabe que, se comerem, vão ficar como Ele." Ela queria que Eva duvidasse do amor de Deus.' },
        { art: '👩🍎👀', bg: 'jardim', text: 'Eva olhou a fruta. Parecia gostosa, bonita, e ela queria ser sábia. Então pegou a fruta e comeu.' },
        { art: '👩🍎🧑', bg: 'jardim', text: 'Eva deu também para Adão, que estava com ela. E ele comeu. Os dois desobedeceram a Deus.' },
        { art: '😟🍃', bg: 'campo', fx: 'vento', text: 'Na mesma hora, tudo mudou por dentro deles. Sentiram vergonha pela primeira vez, e tentaram se cobrir com folhas de figueira.' },
        { art: '💔', bg: 'noite', text: 'Isso se chama pecado: escolher o nosso caminho em vez do caminho de Deus. Foi assim que a tristeza, a dor e a morte entraram no mundo.' }
      ],
      god: 'Deus fala a verdade e as suas regras são para o nosso bem. Desobedecer sempre traz tristeza.',
      jesus: 'Adão desobedeceu num jardim. Jesus, no jardim do Getsêmani, orou: "Não seja como eu quero, mas como tu queres." Onde Adão falhou, Jesus obedeceu, por nós.',
      verse: { ref: 'Romanos 3:23', tx: 'Porque todos pecaram e destituídos estão da glória de Deus.' },
      small: [
        { q: 'Que animal falou com Eva?', o: [['🐍', 'A serpente'], ['🐰', 'O coelho'], ['🐶', 'O cachorro']] },
        { q: 'O que Eva e Adão fizeram?', o: [['🍎', 'Comeram a fruta proibida'], ['🏊', 'Nadaram no rio'], ['🎂', 'Fizeram um bolo']] },
        { q: 'Como eles se sentiram depois?', o: [['😟', 'Com vergonha'], ['😄', 'Muito felizes'], ['😴', 'Com sono']] }
      ],
      big: [
        { q: 'O que a serpente queria que Eva pensasse?', o: ['Que Deus não queria o bem dela', 'Que Deus era muito bom', 'Que a fruta era ruim', 'Que ela devia orar'], e: 'A mentira da serpente foi fazer Eva duvidar da bondade de Deus.' },
        { q: 'Qual foi a mentira da serpente?', o: ['"Vocês não vão morrer"', '"Deus ama vocês"', '"O jardim é bonito"', '"Obedeçam a Deus"'], e: 'Deus tinha avisado que a desobediência traria a morte (Gênesis 2:17).' },
        { q: 'Com o que Adão e Eva tentaram se cobrir?', o: ['Folhas de figueira', 'Pele de leão', 'Panos coloridos', 'Lama'], e: 'Gênesis 3:7: coseram folhas de figueira.' },
        { q: 'O que é pecado?', o: ['Escolher o nosso caminho e não o de Deus', 'Ficar triste às vezes', 'Comer fruta', 'Brincar no jardim'], e: 'O pecado é desobedecer a Deus, e ele entrou no mundo ali.' }
      ],
      parents: 'Ponto central: o pecado começa duvidando da palavra e da bondade de Deus. Evite reduzir a história a "comer o que não devia"; o centro é a desconfiança e a desobediência. Pergunte: "Você já quis fazer algo mesmo sabendo que era errado?" Leitura junto: Gênesis 3:1-7.'
    },
    {
      id: 'c5', title: 'Deus procura e promete', ref: 'Gênesis 3:8-24', icon: '💛',
      recap: 'Na lição passada, Adão e Eva escutaram a serpente e desobedeceram a Deus. O pecado entrou no mundo.',
      scenes: [
        { art: '🌳🙈', bg: 'jardim', text: 'À tardinha, Adão e Eva ouviram Deus andando no jardim. Em vez de correrem para Ele, como antes, se esconderam entre as árvores.' },
        { art: '💬🌳', bg: 'jardim', fx: 'luz', text: 'Deus chamou: "Onde você está?" Deus sabia onde eles estavam. Mas Ele foi procurá-los mesmo assim. Deus sempre vem procurar.' },
        { art: '🧑👉👩👉🐍', bg: 'jardim', text: 'Adão disse: "Foi a mulher que me deu!" Eva disse: "Foi a serpente que me enganou!" Cada um colocou a culpa em outro.' },
        { art: '🐍⬇️', bg: 'campo', text: 'Deus castigou a serpente. E disse algo muito importante para ela: um dia, um descendente da mulher ia esmagar a cabeça da serpente.' },
        { art: '✨⭐✨', bg: 'aurora', fx: 'brilho', text: 'Essa foi a primeira promessa de Deus sobre um Salvador! Muito tempo depois, a gente vai descobrir quem é: Jesus, que venceu o mal.' },
        { art: '🌾😓', bg: 'deserto', text: 'Deus explicou que, por causa do pecado, a vida ia ficar mais difícil: o trabalho ia cansar, haveria dor, e um dia as pessoas iam morrer.' },
        { art: '✨🧥', bg: 'campo', fx: 'coracoes', text: 'Mas Deus ainda cuidou deles: fez roupas de pele para Adão e Eva, bem melhores que as folhas. Mesmo quando erramos, Deus continua cuidando de nós.' },
        { art: '🚪👫', bg: 'deserto', text: 'Adão e Eva tiveram que sair do jardim. Deus colocou querubins, que são anjos, e uma espada de fogo guardando o caminho da árvore da vida.' },
        { art: '🌄💛', bg: 'aurora', fx: 'brilho', text: 'Foi um dia muito triste. Mas a promessa de Deus ficou de pé. Toda a Bíblia, daqui para frente, é a história de Deus cumprindo essa promessa.' }
      ],
      god: 'Mesmo quando erramos, Deus vem nos procurar e promete um Salvador.',
      jesus: 'Gênesis 3:15 promete alguém que ia esmagar a cabeça da serpente. Esse é Jesus! Na cruz, a serpente feriu o calcanhar dele, mas Jesus ressuscitou e venceu o mal. E, assim como Deus vestiu Adão e Eva, Ele nos veste com a justiça de Jesus.',
      verse: { ref: 'Gênesis 3:15', tx: 'E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar.' },
      small: [
        { q: 'O que Adão e Eva fizeram quando ouviram Deus?', o: [['🙈', 'Se esconderam'], ['💃', 'Dançaram'], ['🍦', 'Tomaram sorvete']] },
        { q: 'O que Deus fez de roupa para eles?', o: [['🧥', 'Roupas de pele'], ['👗', 'Vestidos de festa'], ['🩱', 'Roupas de banho']] },
        { q: 'Quem Deus prometeu mandar?', o: [['✝️', 'Um Salvador'], ['🦖', 'Um dinossauro'], ['🤖', 'Um robô']] }
      ],
      big: [
        { q: 'O que Deus perguntou a Adão?', o: ['"Onde você está?"', '"O que você comeu?"', '"Por que fugiu?"', '"Quem é você?"'], e: 'Gênesis 3:9. Deus sabia, mas foi procurá-lo.' },
        { q: 'O que Adão e Eva fizeram quando Deus perguntou?', o: ['Colocaram a culpa em outro', 'Pediram perdão na hora', 'Fugiram do jardim', 'Ficaram calados'], e: 'Adão culpou Eva, e Eva culpou a serpente.' },
        { q: 'Qual foi a promessa de Deus em Gênesis 3:15?', o: ['Um descendente da mulher venceria a serpente', 'Eles voltariam ao jardim amanhã', 'A serpente viraria boazinha', 'Nunca mais haveria trabalho'], e: 'É a primeira promessa sobre Jesus na Bíblia.' },
        { q: 'O que guardava o caminho da árvore da vida?', o: ['Querubins e uma espada de fogo', 'Um leão', 'Um muro de pedra', 'Ninguém'], e: 'Gênesis 3:24.' }
      ],
      parents: 'Ponto central: Gênesis 3:15 é a primeira promessa do evangelho (o "protoevangelho"). Mostre que Deus disciplina, mas também cobre e cuida. Converse sobre não culpar os outros e pedir perdão. Leitura junto: Gênesis 3:8-24.'
    },
    {
      id: 'c6', title: 'Caim e Abel', ref: 'Gênesis 4', icon: '🌾',
      recap: 'Na lição passada, Adão e Eva saíram do jardim, mas levaram a promessa de Deus de um Salvador.',
      scenes: [
        { art: '👫👶👶', bg: 'campo', text: 'Fora do jardim, Adão e Eva tiveram filhos. O primeiro se chamou Caim, e o segundo, Abel.' },
        { art: '🧑‍🌾🌾', bg: 'campo', text: 'Caim cresceu e cuidava da terra, plantando e colhendo. Abel cuidava das ovelhas: era pastor.' },
        { art: '🌾🐑🔥', bg: 'monte', text: 'Um dia, os dois trouxeram ofertas para Deus. Caim trouxe frutos da terra. Abel trouxe o melhor das suas ovelhas, as primeiras do rebanho.' },
        { art: '💛🐑', bg: 'aurora', fx: 'luz', text: 'Deus se agradou de Abel e da sua oferta, mas não da oferta de Caim. A Bíblia diz que Abel ofereceu com fé. Deus olha o coração de quem oferece.' },
        { art: '😠', bg: 'deserto', text: 'Caim ficou muito bravo, com o rosto fechado. Deus falou com ele: "Por que você está bravo? Se fizer o bem, será aceito. Cuidado: o pecado quer te dominar, mas você deve vencê-lo."' },
        { art: '💔🌾', bg: 'deserto', text: 'Mas Caim não escutou. Ele chamou Abel para o campo e, cheio de raiva, matou o próprio irmão. Foi uma coisa terrível, e Deus viu tudo.' },
        { art: '💬❓', bg: 'deserto', text: 'Deus perguntou: "Onde está Abel, seu irmão?" Caim respondeu: "Não sei. Por acaso eu sou o guarda do meu irmão?"' },
        { art: '🚶🏜️', bg: 'deserto', fx: 'vento', text: 'Caim foi castigado e teve que viver longe, andando pela terra. Mas Deus colocou nele um sinal, para que ninguém o matasse. Até ali, Deus mostrou misericórdia.' },
        { art: '👫👶✨', bg: 'aurora', fx: 'brilho', text: 'Depois, Deus deu a Adão e Eva outro filho, chamado Sete. Na família de Sete, as pessoas começaram a invocar o nome do Senhor. A promessa continuava viva.' }
      ],
      god: 'Deus vê o nosso coração. Ele nos avisa sobre o pecado e quer que a gente o vença.',
      jesus: 'O sangue de Abel clamou da terra pedindo justiça. Hebreus 12:24 diz que o sangue de Jesus fala melhor que o de Abel: ele pede perdão. Caim não quis cuidar do irmão; Jesus é o Irmão mais velho que cuida de nós.',
      verse: { ref: '1 João 4:7', tx: 'Amados, amemo-nos uns aos outros; porque o amor é de Deus.' },
      small: [
        { q: 'O que Abel cuidava?', o: [['🐑', 'Ovelhas'], ['🐟', 'Peixes'], ['🐝', 'Abelhas']] },
        { q: 'Como Caim ficou?', o: [['😠', 'Muito bravo'], ['😄', 'Feliz'], ['😴', 'Com sono']] },
        { q: 'Qual filho Deus deu depois a Adão e Eva?', o: [['👶', 'Sete'], ['🐶', 'Um cachorrinho'], ['👑', 'Um rei']] }
      ],
      big: [
        { q: 'O que Caim fazia de trabalho?', o: ['Cuidava da terra', 'Era pastor', 'Era pescador', 'Era rei'], e: 'Caim era lavrador; Abel era pastor de ovelhas.' },
        { q: 'Por que Deus se agradou da oferta de Abel?', o: ['Abel ofereceu com fé', 'Era a oferta maior', 'Abel era o mais velho', 'Abel ofereceu flores'], e: 'Hebreus 11:4: pela fé Abel ofereceu melhor sacrifício.' },
        { q: 'O que Deus disse a Caim antes de ele pecar?', o: ['Que ele devia dominar o pecado', 'Que ele podia fazer o que quisesse', 'Que Abel era culpado', 'Nada'], e: 'Gênesis 4:7. Deus avisou Caim antes.' },
        { q: 'O que Caim respondeu quando Deus perguntou por Abel?', o: ['"Sou eu o guarda do meu irmão?"', '"Ele está em casa"', '"Me perdoe"', '"Ele foi pescar"'], e: 'Caim mentiu e não quis assumir o que fez.' }
      ],
      parents: 'Atenção: esta lição tem a primeira morte da Bíblia. O texto diz que aconteceu, sem detalhes. Bom tema: raiva e ciúmes (Deus avisou Caim antes de ele agir). Pergunte: "O que podemos fazer quando ficamos com muita raiva?" Leitura junto: Gênesis 4:1-16.'
    },
    {
      id: 'c7', title: 'Enoque andou com Deus', ref: 'Gênesis 5', icon: '👣',
      recap: 'Na lição passada, Caim deixou a raiva vencer. Mas Deus deu a Adão e Eva um novo filho, Sete.',
      scenes: [
        { art: '👴👨👦', bg: 'campo', text: 'Gênesis 5 é como um álbum de família. Ele conta os filhos, netos e bisnetos de Adão, passando por Sete, até chegar em Noé.' },
        { art: '👴⏳', bg: 'aurora', text: 'Naquele tempo, as pessoas viviam muitos e muitos anos! Adão viveu 930 anos. Mas a frase que se repete é triste: "e morreu". O pecado trouxe a morte.' },
        { art: '🧔👣✨', bg: 'monte', fx: 'luz', text: 'No meio dessa lista, aparece alguém diferente: Enoque. A Bíblia diz que Enoque andava com Deus.' },
        { art: '🧔🙏', bg: 'monte', text: 'Andar com Deus quer dizer viver perto dele todos os dias, conversando com Ele, obedecendo e confiando, como quem anda de mãos dadas com um amigo.' },
        { art: '✨☁️', bg: 'aurora', fx: 'brilho', text: 'E aconteceu algo incrível: Enoque não morreu! A Bíblia diz que ele "não apareceu mais, porque Deus o tomou para si". Deus levou Enoque direto para junto dele.' },
        { art: '👴', bg: 'campo', text: 'O filho de Enoque se chamava Matusalém. Ele foi a pessoa que mais viveu na Bíblia: 969 anos!' },
        { art: '👶🌧️', bg: 'campo', text: 'O neto de Matusalém nasceu, e seu pai, Lameque, deu a ele o nome de Noé. Ele disse: "Este nos trará descanso." Logo vamos ver por quê.' },
        { art: '👣💛', bg: 'aurora', fx: 'coracoes', text: 'Mesmo num mundo onde as pessoas morriam por causa do pecado, Deus mostrou com Enoque que a amizade com Ele é mais forte que tudo.' }
      ],
      god: 'Deus quer ser nosso amigo e andar com a gente todos os dias.',
      jesus: 'Enoque andou com Deus e não viu a morte. Jesus foi mais longe: Ele entrou na morte e saiu vitorioso! E promete: "Quem crê em mim, ainda que esteja morto, viverá" (João 11:25).',
      verse: { ref: 'Gênesis 5:24', tx: 'E andou Enoque com Deus; e não apareceu mais, porquanto Deus para si o tomou.' },
      small: [
        { q: 'Com quem Enoque andava?', o: [['✨', 'Com Deus'], ['🐘', 'Com um elefante'], ['🚲', 'De bicicleta']] },
        { q: 'Quem viveu mais anos na Bíblia?', o: [['👴', 'Matusalém'], ['👶', 'Um bebê'], ['🐢', 'Uma tartaruga']] },
        { q: 'Que bebê nasceu no fim da lista?', o: [['👶', 'Noé'], ['👸', 'Uma princesa'], ['🐱', 'Um gatinho']] }
      ],
      big: [
        { q: 'O que quer dizer "andar com Deus"?', o: ['Viver perto dele e obedecer', 'Fazer caminhadas longas', 'Morar num templo', 'Nunca sair de casa'], e: 'É ter amizade com Deus no dia a dia.' },
        { q: 'O que aconteceu com Enoque?', o: ['Deus o levou sem ele morrer', 'Ele virou rei', 'Ele construiu uma arca', 'Ele viveu 969 anos'], e: 'Hebreus 11:5: pela fé Enoque foi trasladado para não ver a morte.' },
        { q: 'Quantos anos Matusalém viveu?', o: ['969', '100', '365', '40'], e: 'Gênesis 5:27. Enoque, o pai dele, viveu 365 anos na terra.' },
        { q: 'Qual frase triste se repete em Gênesis 5?', o: ['"E morreu"', '"E fugiu"', '"E chorou"', '"E dormiu"'], e: 'A morte entrou no mundo pelo pecado, como Deus tinha avisado.' }
      ],
      parents: 'Ponto central: em meio à morte que se repete, Enoque mostra a comunhão com Deus. Sugestão prática: combine um "andar com Deus" da família, como uma oração curta antes de dormir. Leitura junto: Gênesis 5:21-32 e Hebreus 11:5-6.'
    },
    {
      id: 'c8', title: 'Noé constrói a arca', ref: 'Gênesis 6', icon: '🔨',
      recap: 'Na lição passada, conhecemos Enoque, que andava com Deus, e vimos nascer um bebê chamado Noé.',
      scenes: [
        { art: '🌍😢', bg: 'cidade', text: 'As pessoas foram se espalhando pela terra. Mas foram ficando cada vez mais más. Pensavam em fazer o mal o tempo todo, e havia muita violência.' },
        { art: '💔✨', bg: 'noite', text: 'A Bíblia diz que Deus ficou triste no coração por ver o mundo assim. Ele decidiu que ia acabar com aquela maldade toda.' },
        { art: '🧔💛', bg: 'aurora', fx: 'luz', text: 'Mas havia um homem diferente: Noé. A Bíblia diz que Noé achou graça aos olhos do Senhor. Ele andava com Deus, como Enoque.' },
        { art: '✨💬🧔', bg: 'campo', text: 'Deus contou a Noé o seu plano: ia mandar um dilúvio, muita água sobre a terra. E mandou: "Construa uma arca!"' },
        { art: '📏🪵', bg: 'campo', text: 'Deus deu as medidas certinhas: uma arca enorme, de madeira, com três andares, uma porta do lado e uma janela em cima. Por dentro e por fora, cobertas de piche, para não entrar água.' },
        { art: '🔨🪵🧔', bg: 'campo', text: 'Noé obedeceu e trabalhou muito, muito tempo, junto com seus filhos: Sem, Cam e Jafé.' },
        { art: '🤔👥', bg: 'cidade', text: 'Não havia mar ali perto. Imagine o que as pessoas pensavam vendo um barco gigante no seco! Mas Noé confiou em Deus mesmo sem ver chuva nenhuma.' },
        { art: '🤝✨', bg: 'aurora', fx: 'brilho', text: 'Deus fez uma aliança, uma promessa especial, com Noé: "Você vai entrar na arca com sua esposa, seus filhos e suas noras. E vai levar animais de cada tipo, para salvá-los."' },
        { art: '🧔✅', bg: 'campo', text: 'E a Bíblia termina o capítulo assim: "Noé fez tudo o que Deus lhe mandou." Tudo, sem deixar nada de fora.' }
      ],
      god: 'Deus é justo e não fica indiferente ao mal. E Ele sempre prepara um jeito de salvar quem confia nele.',
      jesus: 'Num mundo caído, Noé ouviu Deus, construiu a arca e avisou as pessoas, mas só a família dele entrou. Jesus também ouviu o Pai e veio salvar o mundo, e Ele conseguiu! Jesus é a arca perfeita: todo aquele que entra por Ele é salvo.',
      verse: { ref: 'Gênesis 6:8', tx: 'Noé, porém, achou graça aos olhos do Senhor.' },
      small: [
        { q: 'O que Deus mandou Noé construir?', o: [['🛶', 'Uma arca'], ['🏰', 'Um castelo'], ['🎡', 'Uma roda-gigante']] },
        { q: 'De que era feita a arca?', o: [['🪵', 'De madeira'], ['🧱', 'De tijolo'], ['🧊', 'De gelo']] },
        { q: 'Noé obedeceu a Deus?', o: [['✅', 'Sim, em tudo'], ['❌', 'Não'], ['🤷', 'Só um pouco']] }
      ],
      big: [
        { q: 'Por que Deus ficou triste com o mundo?', o: ['As pessoas faziam muito mal', 'Faltava chuva', 'Os bichos fugiram', 'Ninguém plantava'], e: 'Gênesis 6:5-6.' },
        { q: 'Como se chamavam os filhos de Noé?', o: ['Sem, Cam e Jafé', 'Caim, Abel e Sete', 'Abraão, Isaque e Jacó', 'Pedro, Tiago e João'], e: 'Os três filhos de Noé entraram na arca com ele.' },
        { q: 'O que quer dizer "Noé achou graça"?', o: ['Deus foi bondoso com ele', 'Noé contou uma piada', 'Noé era rico', 'Noé era famoso'], e: 'Graça é o favor de Deus que não merecemos.' },
        { q: 'O que a Bíblia diz que Noé fez?', o: ['Tudo o que Deus mandou', 'Metade do que Deus mandou', 'O que ele achou melhor', 'Nada'], e: 'Gênesis 6:22.' }
      ],
      parents: 'Ponto central: Deus julga o mal, mas providencia salvação; Noé responde com fé e obediência completa (Hebreus 11:7). Leitura junto: Gênesis 6:5-22.'
    },
    {
      id: 'c9', title: 'O dilúvio', ref: 'Gênesis 7–8', icon: '🌧️',
      recap: 'Na lição passada, Noé construiu a arca, do jeitinho que Deus mandou.',
      scenes: [
        { art: '🦁🦁🐘🐘', bg: 'campo', text: 'Quando a arca ficou pronta, os animais vieram. De cada espécie, um macho e uma fêmea. E dos animais limpos e das aves, sete casais.' },
        { art: '👨‍👩‍👦‍👦🛶', bg: 'campo', text: 'Noé, sua esposa, seus três filhos e as três noras entraram. Eram oito pessoas ao todo. E o próprio Senhor fechou a porta da arca.' },
        { art: '🌧️🛶', bg: 'mar', fx: 'chuva', text: 'Sete dias depois, as fontes do grande abismo se romperam e as janelas do céu se abriram. Choveu quarenta dias e quarenta noites!' },
        { art: '🛶🌊', bg: 'mar', fx: 'ondas', text: 'A água subiu tanto que cobriu até os montes mais altos. Tudo o que vivia na terra seca morreu. Mas a arca flutuava em cima das águas.' },
        { art: '🛶💛', bg: 'mar', fx: 'ondas', text: 'Lá dentro, Noé e todos os animais estavam seguros. As águas ficaram sobre a terra por cento e cinquenta dias.' },
        { art: '✨🌬️', bg: 'aurora', fx: 'vento', text: 'Então a Bíblia diz: "Deus se lembrou de Noé." Deus mandou um vento, e as águas começaram a baixar.' },
        { art: '🛶⛰️', bg: 'monte', text: 'A arca parou em cima dos montes de Ararate. Mas ainda havia água por todo lado.' },
        { art: '🐦‍⬛🕊️', bg: 'aurora', fx: 'vento', text: 'Noé soltou um corvo, que ficou indo e voltando. Depois soltou uma pomba, que não achou onde pousar e voltou.' },
        { art: '🕊️🌿', bg: 'aurora', fx: 'brilho', text: 'Sete dias depois, soltou a pomba de novo. À tarde ela voltou com uma folha de oliveira no bico! Na vez seguinte, ela não voltou mais: a terra estava secando.' },
        { art: '🛶🚪🦁🐑', bg: 'campo', fx: 'brilho', text: 'Quando a terra secou, Deus disse: "Saia da arca!" Noé, a família e os animais saíram. Fazia mais de um ano que eles tinham entrado.' }
      ],
      god: 'Deus se lembra dos seus. Ele protege quem confia nele, mesmo no meio da tempestade.',
      jesus: 'Deus mesmo fechou a porta da arca, e quem estava lá dentro ficou seguro. Jesus disse: "Eu sou a porta; se alguém entrar por mim, será salvo" (João 10:9). Em Jesus, estamos seguros até nas piores tempestades.',
      verse: { ref: 'Salmos 46:1', tx: 'Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.' },
      small: [
        { q: 'Quem fechou a porta da arca?', o: [['✨', 'O próprio Deus'], ['🐘', 'O elefante'], ['💨', 'O vento']] },
        { q: 'Quantas pessoas entraram na arca?', o: [['8️⃣', 'Oito'], ['💯', 'Cem'], ['1️⃣', 'Uma']] },
        { q: 'O que a pomba trouxe?', o: [['🌿', 'Uma folha de oliveira'], ['🍬', 'Uma bala'], ['🔑', 'Uma chave']] }
      ],
      big: [
        { q: 'Quem fechou a porta da arca?', o: ['O Senhor', 'Noé', 'Os filhos de Noé', 'Ficou aberta'], e: 'Gênesis 7:16: e o Senhor a fechou por fora.' },
        { q: 'Onde a arca parou?', o: ['Nos montes de Ararate', 'No monte Sinai', 'No rio Jordão', 'Em Jerusalém'], e: 'Gênesis 8:4.' },
        { q: 'Qual foi a primeira ave que Noé soltou?', o: ['Um corvo', 'Uma pomba', 'Uma águia', 'Um pardal'], e: 'Primeiro o corvo, depois a pomba (Gênesis 8:7-8).' },
        { q: 'O que quer dizer "Deus se lembrou de Noé"?', o: ['Deus agiu para cuidar dele', 'Deus tinha esquecido', 'Noé mandou uma carta', 'Deus viu uma foto'], e: 'Na Bíblia, Deus se lembrar é Deus agir com fidelidade.' }
      ],
      parents: 'Atenção: o dilúvio é um juízo real; o app diz que tudo o que vivia na terra seca morreu, sem detalhes. Se a criança ficar preocupada, mostre a segurança dentro da arca e a promessa da próxima lição. A arca aponta para Cristo, nosso lugar seguro (1 Pedro 3:20-21). Leitura junto: Gênesis 7:1-16 e 8:1-19.'
    },
    {
      id: 'c10', title: 'O arco-íris e a aliança', ref: 'Gênesis 8:20 – 9:17', icon: '🌈',
      recap: 'Na lição passada, Deus protegeu Noé na arca durante o dilúvio, e a família saiu para uma terra nova.',
      scenes: [
        { art: '🧔🔥🙏', bg: 'monte', fx: 'luz', text: 'A primeira coisa que Noé fez ao sair da arca foi construir um altar e adorar a Deus, agradecendo por ter salvado sua família.' },
        { art: '✨💛', bg: 'aurora', fx: 'coracoes', text: 'Deus se agradou e fez uma promessa: "Enquanto a terra durar, não vão faltar plantação e colheita, frio e calor, verão e inverno, dia e noite."' },
        { art: '👨‍👩‍👦‍👦🌍', bg: 'campo', text: 'Deus abençoou Noé e seus filhos e disse, como tinha dito a Adão: "Cresçam, multipliquem-se e encham a terra."' },
        { art: '🧑✨', bg: 'aurora', text: 'Deus lembrou que a vida das pessoas é preciosa, porque o ser humano foi feito à imagem de Deus. Ninguém deve tirar a vida de outra pessoa.' },
        { art: '🤝✨', bg: 'aurora', fx: 'brilho', text: 'Então Deus fez uma aliança com Noé, com todos os seus descendentes, e até com os animais: "Nunca mais vou destruir a terra com um dilúvio."' },
        { art: '🌈', bg: 'aurora', fx: 'brilho', text: 'E Deus deu um sinal dessa promessa: o arco-íris nas nuvens. Deus disse: "Quando o arco aparecer, eu vou me lembrar da minha aliança."' },
        { art: '🌧️🌈😊', bg: 'campo', fx: 'chuva', text: 'Por isso, toda vez que você vir um arco-íris depois da chuva, lembre: Deus cumpre o que promete. Ele cumpriu com Noé até hoje!' },
        { art: '🧔🍇', bg: 'campo', text: 'Noé plantou uma vinha. Depois, ele errou: bebeu vinho demais e passou vergonha. Mesmo os heróis da Bíblia precisam de Deus, porque todos pecam.' }
      ],
      god: 'Deus é fiel: o que Ele promete, Ele cumpre, para sempre.',
      jesus: 'Até Noé, o herói, errou e precisava de um Salvador. Jesus é o único que nunca pecou. O arco-íris lembra uma aliança que Deus cumpriu; em Jesus, Deus fez uma aliança nova, e nele todas as promessas de Deus têm o "sim" (2 Coríntios 1:20).',
      verse: { ref: 'Gênesis 9:13', tx: 'O meu arco tenho posto nas nuvens; este será por sinal da aliança entre mim e a terra.' },
      small: [
        { q: 'O que Noé fez primeiro ao sair da arca?', o: [['🙏', 'Adorou a Deus'], ['⚽', 'Jogou bola'], ['😴', 'Dormiu']] },
        { q: 'Qual é o sinal da promessa de Deus?', o: [['🌈', 'O arco-íris'], ['⭐', 'Uma estrela'], ['🌙', 'A lua']] },
        { q: 'Deus cumpre o que promete?', o: [['✅', 'Sempre'], ['❌', 'Nunca'], ['🤷', 'Às vezes']] }
      ],
      big: [
        { q: 'O que Deus prometeu a Noé?', o: ['Nunca mais destruir a terra com dilúvio', 'Que nunca mais choveria', 'Que Noé viveria para sempre', 'Que não haveria inverno'], e: 'Gênesis 9:11.' },
        { q: 'Com quem Deus fez essa aliança?', o: ['Com Noé, seus descendentes e os animais', 'Só com Noé', 'Só com os animais', 'Com os anjos'], e: 'Gênesis 9:9-10: a aliança é com toda a vida na terra.' },
        { q: 'Por que a vida humana é tão preciosa?', o: ['Fomos feitos à imagem de Deus', 'Porque somos fortes', 'Porque vivemos muito', 'Porque somos muitos'], e: 'Gênesis 9:6.' },
        { q: 'O que o erro de Noé nos ensina?', o: ['Todos precisam de Deus', 'Noé era mau', 'A arca não serviu', 'Deus mudou de ideia'], e: 'Até os heróis da fé pecam; a esperança está em Deus, não nas pessoas.' }
      ],
      parents: 'Ponto central: a aliança de Deus com Noé garante a estabilidade da criação. A cena da embriaguez de Noé (Gênesis 9:20-27) foi resumida em uma frase, sem detalhes; se quiser, leia a passagem sozinho antes. Leitura junto: Gênesis 8:20 – 9:17.'
    },
    {
      id: 'c11', title: 'A torre de Babel', ref: 'Gênesis 11:1-9', icon: '🗼',
      recap: 'Na lição passada, Deus fez uma aliança com Noé e colocou o arco-íris nas nuvens.',
      scenes: [
        { art: '👥🗣️', bg: 'deserto', text: 'Depois do dilúvio, a família de Noé cresceu muito. Toda a terra falava uma só língua, e todos se entendiam.' },
        { art: '🏜️🚶🚶', bg: 'deserto', text: 'As pessoas foram andando para o oriente e encontraram uma planície na terra de Sinar. E resolveram morar ali.' },
        { art: '🧱🔥', bg: 'deserto', text: 'Eles disseram: "Vamos fazer tijolos e queimá-los bem!" Usaram tijolos no lugar de pedras e betume no lugar de cimento.' },
        { art: '🏙️🗼', bg: 'cidade', text: 'E disseram: "Vamos construir uma cidade e uma torre que chegue até o céu! Vamos ficar famosos, e não vamos nos espalhar pela terra."' },
        { art: '😤🗼', bg: 'cidade', text: 'O problema era o coração deles. Deus tinha mandado encher a terra, mas eles queriam ficar juntos e fazer um nome para si mesmos. Queriam ser grandes sem Deus.' },
        { art: '✨⬇️🗼', bg: 'cidade', fx: 'luz', text: 'A Bíblia diz que o Senhor desceu para ver a cidade e a torre. Ou seja: a torre que eles achavam enorme era pequenininha para Deus!' },
        { art: '🗣️❓🗣️', bg: 'cidade', text: 'Então Deus confundiu a língua deles. De repente, um falava e o outro não entendia nada! Não dava mais para trabalhar juntos.' },
        { art: '🚶🌍🚶', bg: 'campo', fx: 'vento', text: 'Eles pararam de construir e se espalharam pela terra toda, cada grupo com a sua língua. Aquela cidade ficou conhecida como Babel, que lembra "confusão".' },
        { art: '🌍💛', bg: 'aurora', fx: 'brilho', text: 'Muito tempo depois, no livro de Atos, Deus vai fazer o contrário: pessoas de muitas línguas vão ouvir a mesma boa notícia de Jesus, cada uma na sua língua!' }
      ],
      god: 'Deus é muito maior que o orgulho humano. A verdadeira grandeza é obedecer a Ele.',
      jesus: 'Em Babel, as pessoas tentaram subir até o céu para ficarem famosas. Em Jesus, foi Deus quem desceu do céu até nós. E no Pentecostes, o Espírito Santo juntou pessoas de muitas línguas para ouvirem a boa notícia de Jesus.',
      verse: { ref: 'Provérbios 16:18', tx: 'A soberba precede a ruína, e a altivez do espírito precede a queda.' },
      small: [
        { q: 'O que as pessoas quiseram construir?', o: [['🗼', 'Uma torre bem alta'], ['🛶', 'Um barco'], ['🎪', 'Um circo']] },
        { q: 'O que Deus fez com a língua delas?', o: [['🗣️', 'Confundiu'], ['🍭', 'Adoçou'], ['🔇', 'Desligou']] },
        { q: 'O que as pessoas fizeram depois?', o: [['🌍', 'Se espalharam pela terra'], ['🏊', 'Foram nadar'], ['🎉', 'Fizeram uma festa']] }
      ],
      big: [
        { q: 'Por que eles queriam construir a torre?', o: ['Para ficarem famosos sem Deus', 'Para guardar comida', 'Para ver o mar', 'Para adorar a Deus'], e: '"Façamo-nos um nome" (Gênesis 11:4).' },
        { q: 'O que eles usaram no lugar de pedras?', o: ['Tijolos', 'Madeira', 'Ouro', 'Gelo'], e: 'Tijolos queimados, e betume no lugar de argamassa (Gênesis 11:3).' },
        { q: 'O que quer dizer o nome Babel?', o: ['Lembra confusão', 'Cidade grande', 'Torre alta', 'Casa de Deus'], e: 'Ali o Senhor confundiu a língua de toda a terra (Gênesis 11:9).' },
        { q: 'Em que momento da Bíblia acontece o contrário de Babel?', o: ['No Pentecostes, em Atos 2', 'No dilúvio', 'Na criação', 'No Êxodo'], e: 'Em Atos 2 pessoas de muitas línguas entendem a mensagem de Jesus.' }
      ],
      parents: 'Ponto central: o orgulho de querer "fazer um nome" sem Deus. Contraste com a próxima lição: Deus promete a Abrão "engrandecerei o teu nome" (Gênesis 12:2). A grandeza vem de Deus. Leitura junto: Gênesis 11:1-9 e Atos 2:1-11.'
    },
    {
      id: 'c12', title: 'De Sem até Abrão', ref: 'Gênesis 10 – 11:32', icon: '🗺️',
      recap: 'Na lição passada, Deus confundiu as línguas em Babel e as pessoas se espalharam pela terra.',
      scenes: [
        { art: '🗺️👥', bg: 'campo', text: 'Gênesis 10 é como um mapa de famílias. Os filhos de Noé, Sem, Cam e Jafé, tiveram muitos descendentes, e deles vieram os povos da terra.' },
        { art: '🌍🌍🌍', bg: 'aurora', text: 'Cada povo foi morar num lugar, com sua língua e seus costumes. Mas todos vêm da mesma família. Por isso, todas as pessoas do mundo são parentes!' },
        { art: '🧭➡️', bg: 'deserto', text: 'Gênesis 11 segue uma família só: a de Sem. É por essa família que a promessa de Deus vai continuar.' },
        { art: '👴👨👦', bg: 'deserto', text: 'De pai para filho, de geração em geração, a família de Sem foi crescendo, até chegar num homem chamado Terá.' },
        { art: '🏙️🌙', bg: 'cidade', text: 'Terá morava em Ur dos Caldeus, uma cidade grande e rica, onde as pessoas adoravam outros deuses. Terá teve três filhos: Abrão, Naor e Harã.' },
        { art: '👨💛👩', bg: 'cidade', text: 'Abrão se casou com Sarai. Mas a Bíblia conta um detalhe triste: Sarai não podia ter filhos.' },
        { art: '🐪🚶🚶', bg: 'deserto', fx: 'vento', text: 'Terá pegou a família, com Abrão, Sarai e o neto Ló, e saiu de Ur para ir para Canaã. Mas eles pararam no meio do caminho, numa cidade chamada Harã.' },
        { art: '❓✨', bg: 'noite', fx: 'estrelas', text: 'Fica a pergunta: como a promessa de um Salvador vai continuar, se Abrão e Sarai não têm filhos? A resposta vem no próximo arco da grande história!' }
      ],
      god: 'Deus fez todos os povos e tem um plano para o mundo inteiro.',
      jesus: 'Deus seguiu a família de Sem até Abrão, porque dela ia nascer alguém que abençoaria todas as famílias da terra. O Evangelho de Mateus começa assim: "Jesus Cristo, filho de Davi, filho de Abraão." A promessa ia caminhando até Ele.',
      verse: { ref: 'Gênesis 12:3', tx: 'E em ti serão benditas todas as famílias da terra.' },
      small: [
        { q: 'Todas as pessoas do mundo vêm de uma família?', o: [['✅', 'Sim'], ['❌', 'Não'], ['🤷', 'Não sei']] },
        { q: 'Qual o nome do homem que vai continuar a história?', o: [['👨', 'Abrão'], ['🤴', 'Faraó'], ['🦁', 'Leão']] },
        { q: 'Como eles viajavam?', o: [['🐪', 'De camelo e a pé'], ['✈️', 'De avião'], ['🚗', 'De carro']] }
      ],
      big: [
        { q: 'Quem eram os três filhos de Noé?', o: ['Sem, Cam e Jafé', 'Abrão, Naor e Harã', 'Caim, Abel e Sete', 'Jacó, Esaú e José'], e: 'Deles vieram os povos da terra (Gênesis 10:32).' },
        { q: 'Em que cidade Terá morava?', o: ['Ur dos Caldeus', 'Jerusalém', 'Nínive', 'Belém'], e: 'Gênesis 11:31.' },
        { q: 'Qual era o problema de Abrão e Sarai?', o: ['Não podiam ter filhos', 'Não tinham casa', 'Eram muito pobres', 'Estavam doentes'], e: 'Gênesis 11:30: Sarai era estéril.' },
        { q: 'Por que é importante seguir a família de Sem?', o: ['Por ela a promessa de Deus continua', 'Porque era a família mais rica', 'Porque moravam no Éden', 'Porque fizeram a torre'], e: 'De Sem vem Abrão, e de Abrão virá Jesus.' }
      ],
      parents: 'Ponto central: esta é a ponte para o arco de Abraão. Mostre que Deus se importa com todos os povos (Atos 17:26) e escolhe uma família para abençoar todas as famílias da terra. Leitura junto: Gênesis 11:10-32 e 12:1-3.'
    }
  ]
};
