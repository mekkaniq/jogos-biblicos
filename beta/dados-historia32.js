/* A Grande História da Bíblia — Arco 32: As cartas de Paulo (Romanos a Filemom) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.cartas = {
  id: 'cartas', n: 32, name: 'As cartas de Paulo', sub: 'Ensinos para a igreja', ref: 'Romanos a Filemom', icon: '✉️', scene: 'cidade',
  intro: 'Paulo não podia estar em todas as igrejas ao mesmo tempo. Então ele escreveu cartas, inspirado pelo Espírito Santo, para ensinar, corrigir e animar os cristãos. Essas cartas estão na Bíblia: Romanos, Coríntios, Gálatas, Efésios, Filipenses, Colossenses, Tessalonicenses, Timóteo, Tito e Filemom. Neste arco, vamos ouvir alguns dos seus ensinos mais preciosos.',
  lessons: [
    {
      id: 'ca1', title: 'Romanos: o presente que não merecemos', ref: 'Romanos 1:16; 3:10-26; 5:8; 6:23', icon: '🎁',
      recap: 'No arco passado, Paulo levou o evangelho por muitas cidades e chegou até Roma.',
      scenes: [
        { art: '🧔✍️📜🏛️', bg: 'cidade', text: 'Antes de ir a Roma, Paulo escreveu uma carta longa para os cristãos de lá. É a carta aos Romanos, que explica o evangelho com muito cuidado.', r: 'Romanos 1:7, 15' },
        { art: '📣💪🌍', bg: 'aurora', fx: 'luz', text: 'Paulo escreveu que não tinha vergonha do evangelho, porque o evangelho é o poder de Deus que salva todo aquele que crê.', r: 'Romanos 1:16' },
        { art: '👥❌⚖️', bg: 'cidade', text: 'Depois explicou o nosso problema: ninguém é justo, nem uma só pessoa. Todos nós, judeus e não judeus, adultos e crianças, desobedecemos a Deus.', r: 'Romanos 3:10, 23' },
        { art: '🎯❌🏹', bg: 'campo', text: '"Todos pecaram e estão destituídos da glória de Deus." Pecar é como errar o alvo: Deus nos fez para refletir a sua glória, e nós erramos.', r: 'Romanos 3:23' },
        { art: '💰⚖️💀🎁✨', bg: 'aurora', fx: 'luz', text: '"O salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, em Cristo Jesus, nosso Senhor." O pecado paga um salário terrível; mas Deus oferece um presente!', r: 'Romanos 6:23' },
        { art: '⚖️✅🪵', bg: 'aurora', fx: 'luz', text: 'Paulo explicou que Deus nos declara justos de graça, por causa do que Jesus fez para nos resgatar. Justificar é como um juiz declarar: "Inocente!" Deus faz isso com quem crê, porque Jesus pagou a pena.', r: 'Romanos 3:24-26' },
        { art: '💛🪵👥', bg: 'aurora', fx: 'coracoes', text: '"Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores." Ele não esperou ficarmos bons para nos amar!', r: 'Romanos 5:8' },
        { art: '🙏❤️🗣️✅', bg: 'aurora', fx: 'brilho', text: '"Se você confessar com a sua boca que Jesus é o Senhor, e crer no seu coração que Deus o ressuscitou dos mortos, você será salvo."', r: 'Romanos 10:9' }
      ],
      god: 'Deus é justo e não ignora o pecado. E Deus é amor: Ele mesmo pagou, em Cristo, para nos dar a vida de presente.',
      jesus: 'Lembra de Abraão? "Abraão creu em Deus, e isso lhe foi imputado como justiça" (Gênesis 15:6). Paulo usa Abraão em Romanos 4 para mostrar que sempre foi assim: somos salvos pela fé, e não pelas nossas obras. Habacuque já dizia: "O justo viverá pela fé" (Romanos 1:17). E o centro de tudo é Jesus, que morreu e ressuscitou por nós.',
      verse: { ref: 'Romanos 6:23', tx: 'Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus nosso Senhor.' },
      small: [
        { q: 'Quantas pessoas pecaram?', o: [['👥', 'Todas'], ['1️⃣', 'Só uma'], ['🚫', 'Ninguém']] },
        { q: 'O que Deus oferece de presente?', o: [['🎁', 'A vida eterna'], ['🧸', 'Um brinquedo'], ['💰', 'Dinheiro']] },
        { q: 'Deus nos amou só depois que ficamos bons?', o: [['❌', 'Não, amou antes'], ['✅', 'Sim'], ['🤷', 'Não sei']] }
      ],
      big: [
        { q: 'De que Paulo não se envergonhava?', o: ['Do evangelho de Cristo', 'Das suas viagens', 'Do seu trabalho', 'De Roma'], e: 'Romanos 1:16.' },
        { q: 'Qual é o salário do pecado?', o: ['A morte', 'Dinheiro', 'Fama', 'Nada'], e: 'Romanos 6:23.' },
        { q: 'O que quer dizer "justificar"?', o: ['Deus declarar o pecador "inocente" por causa de Cristo', 'Fazer desculpas', 'Ficar rico', 'Brigar'], e: 'Romanos 3:24-26.' },
        { q: 'O que devemos confessar e crer, segundo Romanos 10:9?', o: ['Que Jesus é o Senhor e que Deus o ressuscitou', 'Que somos bons', 'Que Paulo é santo', 'Nada'], e: 'Romanos 10:9.' }
      ],
      parents: 'Ponto central: o pecado universal e a justificação pela graça mediante a fé (Romanos 3:21-26), o coração do evangelho. Sugestão: explicar "justificação" com o exemplo do juiz. Leitura junto: Romanos 3:21-26 e 5:6-11.'
    },
    {
      id: 'ca2', title: 'Romanos 8: nada nos separa', ref: 'Romanos 8', icon: '🔗',
      recap: 'Na lição passada, Paulo explicou que todos pecaram, mas Deus dá a vida eterna de presente em Jesus.',
      scenes: [
        { art: '⚖️🚫✨', bg: 'aurora', fx: 'luz', text: 'Paulo escreveu uma das frases mais lindas da Bíblia: "Agora, nenhuma condenação há para os que estão em Cristo Jesus." Nenhuma!', r: 'Romanos 8:1' },
        { art: '🕊️👨‍👧💛', bg: 'aurora', fx: 'coracoes', text: '"Vocês não receberam um espírito de escravidão, para viverem com medo, mas receberam o Espírito de adoção, pelo qual clamamos: Aba, Pai!" Aba é como uma criança chama o pai com carinho: "Papai!"', r: 'Romanos 8:15' },
        { art: '👨‍👩‍👧‍👦👑🎁', bg: 'aurora', fx: 'brilho', text: '"O próprio Espírito confirma, dentro de nós, que somos filhos de Deus. E, se somos filhos, somos também herdeiros de Deus e coerdeiros com Cristo!"', r: 'Romanos 8:16-17' },
        { art: '🌍🌱⏳🌅', bg: 'campo', fx: 'brilho', text: 'Paulo disse que até a criação, que sofre desde a queda de Adão, espera ansiosa pelo dia em que vai ser libertada, quando os filhos de Deus forem revelados.', r: 'Romanos 8:19-22' },
        { art: '🙏🕊️💬', bg: 'aurora', fx: 'luz', text: '"O Espírito nos ajuda na nossa fraqueza. Quando não sabemos orar como devemos, o próprio Espírito intercede por nós."', r: 'Romanos 8:26' },
        { art: '🧩✨💛', bg: 'aurora', fx: 'luz', text: '"Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus." Até as coisas difíceis, Deus usa para o bem dos seus filhos, como fez com José.', r: 'Romanos 8:28; Gênesis 50:20' },
        { art: '🛡️✨❓', bg: 'aurora', fx: 'luz', text: '"Se Deus é por nós, quem será contra nós? Aquele que não poupou o seu próprio Filho, mas o entregou por todos nós, como não nos dará também com Ele todas as coisas?"', r: 'Romanos 8:31-32' },
        { art: '🔗💛♾️', bg: 'aurora', fx: 'coracoes', text: 'Nem a morte, nem a vida, nem anjos, nem o hoje, nem o amanhã, nada lá no alto ou lá no fundo, nada em toda a criação vai conseguir nos separar do amor de Deus que temos em Cristo Jesus, nosso Senhor!', r: 'Romanos 8:38-39' }
      ],
      god: 'Deus nos adota como filhos e nos ama com um amor que nada consegue quebrar.',
      jesus: 'Abraão não poupou o seu filho Isaque, mas Deus o impediu e deu um carneiro no lugar (Gênesis 22). Deus "não poupou o seu próprio Filho": Jesus foi o Cordeiro que ninguém substituiu. Por isso, quem está em Cristo não tem condenação, e nada pode separá-lo do amor de Deus.',
      verse: { ref: 'Romanos 8:28', tx: 'E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.' },
      small: [
        { q: 'Como podemos chamar Deus?', o: [['💛', '"Aba, Pai!"'], ['👋', '"Ei, você"'], ['🤐', 'De nada']] },
        { q: 'O que pode nos separar do amor de Deus?', o: [['🚫', 'Nada!'], ['🌧️', 'A chuva'], ['🌙', 'A noite']] },
        { q: 'Quem ajuda quando não sabemos orar?', o: [['🕊️', 'O Espírito Santo'], ['🤖', 'Um robô'], ['🚫', 'Ninguém']] }
      ],
      big: [
        { q: 'O que não há para quem está em Cristo?', o: ['Nenhuma condenação', 'Nenhuma alegria', 'Nenhum problema', 'Nenhum amigo'], e: 'Romanos 8:1.' },
        { q: 'O que quer dizer "Aba"?', o: ['Pai, como uma criança chama', 'Rei', 'Senhor distante', 'Juiz'], e: 'Romanos 8:15.' },
        { q: 'Para quem todas as coisas cooperam para o bem?', o: ['Para os que amam a Deus', 'Para todos sempre', 'Para os ricos', 'Para ninguém'], e: 'Romanos 8:28.' },
        { q: 'Quem Deus não poupou?', o: ['O seu próprio Filho', 'Os anjos', 'Moisés', 'Paulo'], e: 'Romanos 8:32.' }
      ],
      parents: 'Ponto central: segurança e adoção em Cristo. Romanos 8:28 deve ser lido junto com 8:29 (o "bem" é sermos parecidos com Cristo), não como promessa de que nada ruim vai acontecer. Leitura junto: Romanos 8:28-39.'
    },
    {
      id: 'ca3', title: 'Vencer o mal com o bem', ref: 'Romanos 12', icon: '🤝',
      recap: 'Na lição passada, Paulo ensinou que nada pode nos separar do amor de Deus em Cristo.',
      scenes: [
        { art: '🙇🎁❤️', bg: 'aurora', fx: 'luz', text: 'Depois de explicar o evangelho, Paulo mostrou como viver: "Pelas misericórdias de Deus, ofereçam o corpo de vocês como sacrifício vivo, santo e agradável a Deus."', r: 'Romanos 12:1' },
        { art: '🔄🧠✨', bg: 'aurora', fx: 'luz', text: '"Não se conformem com este mundo, mas sejam transformados pela renovação da mente de vocês." Deus quer mudar o nosso jeito de pensar.', r: 'Romanos 12:2' },
        { art: '👥🧩💛', bg: 'cidade', fx: 'coracoes', text: '"Assim como num só corpo temos muitos membros, nós, sendo muitos, somos um só corpo em Cristo." Cada um recebeu dons diferentes para servir.', r: 'Romanos 12:4-6' },
        { art: '❤️🤗🏠', bg: 'cidade', fx: 'coracoes', text: '"Que o amor seja sincero. Amem-se uns aos outros com amor de irmãos. Pratiquem a hospitalidade."', r: 'Romanos 12:9-10, 13' },
        { art: '😊😢🤝', bg: 'cidade', fx: 'coracoes', text: '"Alegrem-se com os que se alegram e chorem com os que choram."', r: 'Romanos 12:15' },
        { art: '😠🔁❌', bg: 'cidade', text: '"Não paguem a ninguém mal com mal. Se for possível, quanto depender de vocês, vivam em paz com todos."', r: 'Romanos 12:17-18' },
        { art: '🍞💧😠➡️😊', bg: 'campo', fx: 'brilho', text: '"Se o seu inimigo tiver fome, dê de comer a ele; se tiver sede, dê de beber." Como Eliseu fez com os soldados sírios!', r: 'Romanos 12:20; 2 Reis 6:22' },
        { art: '🌑➡️💡', bg: 'aurora', fx: 'luz', text: '"Não se deixem vencer pelo mal, mas vençam o mal com o bem."', r: 'Romanos 12:21' }
      ],
      god: 'Deus quer transformar o nosso jeito de pensar e de tratar os outros. A sua misericórdia nos move a viver para Ele.',
      jesus: 'Jesus foi o verdadeiro sacrifício, uma vez por todas. Agora, em gratidão, nós nos oferecemos como "sacrifícios vivos". E Jesus é o exemplo perfeito de vencer o mal com o bem: na cruz, quando o mal fez o pior, Ele respondeu com perdão (Lucas 23:34). Ele ensinou: "Amai os vossos inimigos" (Mateus 5:44).',
      verse: { ref: 'Romanos 12:21', tx: 'Não te deixes vencer do mal, mas vence o mal com o bem.' },
      small: [
        { q: 'O que fazer se o inimigo tiver fome?', o: [['🍞', 'Dar de comer'], ['😂', 'Rir dele'], ['🏃', 'Fugir']] },
        { q: 'Como vencemos o mal?', o: [['💛', 'Com o bem'], ['👊', 'Com mais mal'], ['😠', 'Com raiva']] },
        { q: 'Com quem devemos chorar?', o: [['😢', 'Com os que choram'], ['🚫', 'Com ninguém'], ['🧅', 'Com a cebola']] }
      ],
      big: [
        { q: 'Como devemos oferecer o nosso corpo a Deus?', o: ['Como sacrifício vivo', 'Como sacrifício morto', 'Não devemos', 'Só no domingo'], e: 'Romanos 12:1.' },
        { q: 'Como somos transformados?', o: ['Pela renovação da mente', 'Pela roupa', 'Pelo dinheiro', 'Pela força'], e: 'Romanos 12:2.' },
        { q: 'Devemos pagar mal com mal?', o: ['Não, a ninguém', 'Sim, sempre', 'Só aos inimigos', 'Às vezes'], e: 'Romanos 12:17.' },
        { q: 'Que profeta deu de comer aos inimigos?', o: ['Eliseu', 'Jonas', 'Elias', 'Daniel'], e: '2 Reis 6:22.' }
      ],
      parents: 'Os capítulos 9–11 (Israel e as nações) foram omitidos neste arco por serem complexos para crianças. Ponto central: a vida cristã como resposta à misericórdia. Ótimo para conflitos entre irmãos. Leitura junto: Romanos 12:9-21.'
    },
    {
      id: 'ca4', title: 'Um corpo, muitos membros', ref: '1 Coríntios 12', icon: '🦶',
      recap: 'Na lição passada, Paulo ensinou a vencer o mal com o bem.',
      scenes: [
        { art: '🧔✍️🏙️😟', bg: 'cidade', text: 'A igreja de Corinto, que Paulo tinha começado, estava com problemas: brigas, divisões, e gente se achando mais importante que os outros. Então Paulo escreveu uma carta, a primeira aos Coríntios.', r: '1 Coríntios 1:10-12' },
        { art: '🕊️🎁🎁🎁', bg: 'aurora', fx: 'luz', text: 'Paulo explicou: "Há diferentes dons, mas o Espírito é o mesmo. Há diferentes serviços, mas o Senhor é o mesmo." Cada um recebe algo para ajudar todos.', r: '1 Coríntios 12:4-7' },
        { art: '🧍👀👂🦶✋', bg: 'cidade', fx: 'brilho', text: 'E usou uma comparação: "O corpo é um só, mas tem muitos membros: olhos, ouvidos, mãos, pés. Assim também é Cristo, a sua igreja."', r: '1 Coríntios 12:12' },
        { art: '🦶😢✋', bg: 'cidade', text: 'Se o pé reclamar: "Eu não sou mão, então não faço parte do corpo", nem por isso ele deixa de fazer parte do corpo! Ninguém deve se sentir sem valor.', r: '1 Coríntios 12:15' },
        { art: '👁️👁️👁️❓', bg: 'cidade', text: '"Se o corpo inteiro fosse olho, onde estaria a audição? Se fosse todo ouvido, onde estaria o olfato?" Um corpo só de olhos seria muito estranho!', r: '1 Coríntios 12:17' },
        { art: '👀✋😏❌', bg: 'cidade', text: 'O olho não pode falar para a mão: "Eu não preciso de você!" Ninguém deve se achar mais importante que os outros.', r: '1 Coríntios 12:21' },
        { art: '🤕💔🤝', bg: 'cidade', fx: 'coracoes', text: '"Se um membro sofre, todos os membros sofrem com ele. Se um membro é honrado, todos se alegram com ele."', r: '1 Coríntios 12:26' },
        { art: '✨👥💛', bg: 'aurora', fx: 'luz', text: '"Vocês são o corpo de Cristo, e cada um de vocês é um membro desse corpo." Até as crianças! Cada um tem um lugar especial na igreja.', r: '1 Coríntios 12:27' }
      ],
      god: 'Deus dá dons diferentes a cada um, para servirmos juntos. Na sua família, todos são importantes.',
      jesus: 'A igreja é o corpo de Cristo, e Jesus é a cabeça (Efésios 1:22-23; Colossenses 1:18). Jesus deu a sua vida pela igreja e mora nela pelo Espírito. Por isso não há cristão sem valor: todos foram comprados pelo mesmo sangue e unidos ao mesmo Senhor.',
      verse: { ref: '1 Coríntios 12:27', tx: 'Ora, vós sois o corpo de Cristo, e seus membros em particular.' },
      small: [
        { q: 'Com o que Paulo comparou a igreja?', o: [['🧍', 'Com um corpo'], ['🏠', 'Com uma casa'], ['🚗', 'Com um carro']] },
        { q: 'O olho pode dizer à mão "não preciso de você"?', o: [['❌', 'Não'], ['✅', 'Sim'], ['🤷', 'Talvez']] },
        { q: 'Crianças fazem parte da igreja?', o: [['💛', 'Sim!'], ['❌', 'Não'], ['🤷', 'Só grandes']] }
      ],
      big: [
        { q: 'Qual era o problema em Corinto?', o: ['Divisões e orgulho', 'Falta de dinheiro', 'Perseguição de Roma', 'Fome'], e: '1 Coríntios 1:10-12.' },
        { q: 'O que todos os dons têm em comum?', o: ['O mesmo Espírito', 'O mesmo tamanho', 'A mesma pessoa', 'Nada'], e: '1 Coríntios 12:4.' },
        { q: 'O que acontece quando um membro sofre?', o: ['Todos sofrem com ele', 'Ninguém liga', 'Ele sai do corpo', 'Nada'], e: '1 Coríntios 12:26.' },
        { q: 'Quem é a cabeça do corpo?', o: ['Cristo', 'O pastor', 'Paulo', 'O mais velho'], e: 'Colossenses 1:18.' }
      ],
      parents: 'A discussão sobre os dons específicos (línguas, profecia, 12:8-10; capítulo 14) foi omitida; cada igreja tem o seu entendimento. Ponto central: unidade na diversidade e o valor de cada membro. Leitura junto: 1 Coríntios 12:12-27.'
    },
    {
      id: 'ca5', title: 'O amor é paciente', ref: '1 Coríntios 13', icon: '❤️',
      recap: 'Na lição passada, Paulo disse que a igreja é como um corpo, com muitos membros.',
      scenes: [
        { art: '🗣️🔔💨', bg: 'cidade', text: 'Paulo escreveu: mesmo que eu falasse todas as línguas das pessoas e até a dos anjos, se não tivesse amor, seria como um sino barulhento.', r: '1 Coríntios 13:1' },
        { art: '🧠⛰️❌❤️', bg: 'monte', text: '"Ainda que eu soubesse todos os mistérios, e tivesse uma fé capaz de mover montanhas, se não tivesse amor, eu não seria nada."', r: '1 Coríntios 13:2' },
        { art: '🎁🔥❌❤️', bg: 'cidade', text: '"Ainda que eu desse tudo o que tenho aos pobres, se não tivesse amor, nada disso me adiantaria." O amor é o mais importante!', r: '1 Coríntios 13:3' },
        { art: '❤️⏳🤗', bg: 'aurora', fx: 'coracoes', text: '"O amor é paciente, o amor é bondoso."', r: '1 Coríntios 13:4' },
        { art: '❤️🚫😤🚫🎺', bg: 'aurora', fx: 'coracoes', text: '"O amor não tem inveja, não se gaba, não é orgulhoso. Não é grosseiro, não procura os seus interesses, não se irrita facilmente, não guarda rancor."', r: '1 Coríntios 13:4-5' },
        { art: '❤️✅💡', bg: 'aurora', fx: 'luz', text: '"O amor não se alegra com a injustiça, mas se alegra com a verdade. O amor aguenta tudo, crê sempre, espera sempre e nunca desiste."', r: '1 Coríntios 13:6-7' },
        { art: '❤️♾️✨', bg: 'aurora', fx: 'brilho', text: '"O amor nunca falha." Um dia, muitas coisas vão passar, mas o amor fica para sempre.', r: '1 Coríntios 13:8' },
        { art: '🙏🌅❤️👑', bg: 'aurora', fx: 'coracoes', text: 'Três coisas continuam para sempre: a fé, a esperança e o amor. E a maior das três é o amor.', r: '1 Coríntios 13:13' }
      ],
      god: 'Deus é amor. Sem amor, nada do que fazemos tem valor para Ele.',
      jesus: 'Experimente ler este capítulo trocando a palavra "amor" por "Jesus": "Jesus é paciente, Jesus é bondoso, Jesus não guarda rancor..." Combina perfeitamente! Só Jesus amou assim, e Ele nos ama assim. João escreveu: "Nós o amamos porque ele nos amou primeiro" (1 João 4:19). O amor de Jesus em nós nos ensina a amar.',
      verse: { ref: '1 Coríntios 13:4', tx: 'O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece.' },
      small: [
        { q: 'Como é o amor?', o: [['⏳', 'Paciente e bondoso'], ['😤', 'Bravo'], ['😴', 'Preguiçoso']] },
        { q: 'O amor guarda rancor?', o: [['❌', 'Não'], ['✅', 'Sim'], ['🤷', 'Às vezes']] },
        { q: 'Qual é o maior: fé, esperança ou amor?', o: [['❤️', 'O amor'], ['🙏', 'A fé'], ['🌅', 'A esperança']] }
      ],
      big: [
        { q: 'Com o que fica parecido quem fala sem amor?', o: ['Com um sino barulhento', 'Com um anjo', 'Com um rei', 'Com um passarinho'], e: '1 Coríntios 13:1.' },
        { q: 'O que o amor não faz?', o: ['Não tem inveja nem se gaba', 'Não espera', 'Não acredita', 'Não sofre'], e: '1 Coríntios 13:4.' },
        { q: 'Com o que o amor se alegra?', o: ['Com a verdade', 'Com a injustiça', 'Com a mentira', 'Com nada'], e: '1 Coríntios 13:6.' },
        { q: 'O que nunca falha?', o: ['O amor', 'O dinheiro', 'A força', 'A fama'], e: '1 Coríntios 13:8.' }
      ],
      parents: 'A parte sobre o fim dos dons e o "ver face a face" (13:8-12) foi resumida. Sugestão: a brincadeira de trocar "amor" por "Jesus" e depois pelo próprio nome, para ver onde precisamos crescer. Leitura junto: 1 Coríntios 13.'
    },
    {
      id: 'ca6', title: 'Onde está, ó morte, a tua vitória?', ref: '1 Coríntios 15', icon: '🌱',
      recap: 'Na lição passada, Paulo ensinou que o amor é paciente, bondoso e nunca falha.',
      scenes: [
        { art: '🧔📜💛', bg: 'aurora', fx: 'luz', text: 'Paulo lembrou aos coríntios o que é mais importante: "Cristo morreu pelos nossos pecados, segundo as Escrituras; foi sepultado; e ressuscitou ao terceiro dia, segundo as Escrituras."', r: '1 Coríntios 15:3-4' },
        { art: '👥👥5️⃣0️⃣0️⃣', bg: 'campo', fx: 'brilho', text: '"Ele apareceu a Pedro, depois aos doze, depois a mais de quinhentos irmãos de uma vez, e a maioria deles ainda está viva!" Eram muitas testemunhas, que podiam ser perguntadas.', r: '1 Coríntios 15:5-6' },
        { art: '❓🪨🚫', bg: 'cidade', text: 'Alguns diziam que os mortos não ressuscitam. Paulo respondeu: "Se Cristo não ressuscitou, a nossa fé é inútil, e ainda estamos nos nossos pecados."', r: '1 Coríntios 15:12-17' },
        { art: '🌾✨🌅', bg: 'campo', fx: 'brilho', text: '"Mas, de fato, Cristo ressuscitou dos mortos, e é as primícias dos que dormem!" As primícias eram os primeiros frutos da colheita: sinal de que o resto viria depois.', r: '1 Coríntios 15:20' },
        { art: '👨➡️💀👑➡️🌅', bg: 'aurora', fx: 'luz', text: '"Assim como em Adão todos morrem, assim também em Cristo todos serão vivificados." O primeiro Adão trouxe a morte; Jesus, o último Adão, traz a vida.', r: '1 Coríntios 15:22, 45' },
        { art: '🌰⬇️🌱🌳', bg: 'jardim', fx: 'brilho', text: 'Como vai ser o corpo ressuscitado? Paulo comparou com uma semente: você planta uma sementinha, e nasce uma planta muito mais bonita. "Semeia-se um corpo fraco, ressuscita em poder."', r: '1 Coríntios 15:36-44' },
        { art: '🎺⚡👥✨', bg: 'aurora', fx: 'luz', text: 'Num instante, num piscar de olhos, ao som da última trombeta, os mortos vão ressuscitar, e nós vamos ser transformados!', r: '1 Coríntios 15:51-52' },
        { art: '💀❌🏆🙌', bg: 'aurora', fx: 'brilho', text: '"Onde está, ó morte, a tua vitória? Onde está, ó morte, o teu aguilhão? Graças a Deus, que nos dá a vitória por nosso Senhor Jesus Cristo!"', r: '1 Coríntios 15:55-57' }
      ],
      god: 'Deus é mais forte que a morte. Ele vai ressuscitar o seu povo com corpos novos e gloriosos.',
      jesus: 'Por causa de Adão, a morte entrou no mundo (Gênesis 3). Por causa de Jesus, a ressurreição entrou no mundo! Ele é o "último Adão" e as "primícias": a primeira colheita que garante a grande colheita final. Isaías já tinha prometido: "Aniquilará a morte para sempre" (Isaías 25:8), e Jesus cumpriu.',
      verse: { ref: '1 Coríntios 15:57', tx: 'Mas graças a Deus que nos dá a vitória por nosso Senhor Jesus Cristo.' },
      small: [
        { q: 'Quantas pessoas viram Jesus de uma vez?', o: [['5️⃣', 'Mais de quinhentas'], ['1️⃣', 'Uma'], ['0️⃣', 'Nenhuma']] },
        { q: 'Com o que Paulo comparou a ressurreição?', o: [['🌱', 'Com uma semente'], ['🪨', 'Com uma pedra'], ['🚗', 'Com um carro']] },
        { q: 'Quem venceu a morte?', o: [['✨', 'Jesus'], ['🦸', 'Um super-herói'], ['🚫', 'Ninguém']] }
      ],
      big: [
        { q: 'O que é "de primeira importância" para Paulo?', o: ['Cristo morreu, foi sepultado e ressuscitou', 'As viagens', 'Os dons', 'O templo'], e: '1 Coríntios 15:3-4.' },
        { q: 'O que aconteceria se Cristo não tivesse ressuscitado?', o: ['A nossa fé seria inútil', 'Nada mudaria', 'Seríamos ricos', 'Seria melhor'], e: '1 Coríntios 15:17.' },
        { q: 'O que são as "primícias"?', o: ['Os primeiros frutos da colheita', 'Os últimos frutos', 'As sementes ruins', 'As flores'], e: '1 Coríntios 15:20.' },
        { q: 'Como Paulo chama Jesus em comparação com Adão?', o: ['O último Adão', 'O segundo Moisés', 'O novo Davi', 'Nada'], e: '1 Coríntios 15:45.' }
      ],
      parents: 'Ponto central: a ressurreição de Cristo é histórica (testemunhas) e garante a nossa ressurreição corporal. Ótimo para conversar sobre a morte de alguém querido com esperança. Leitura junto: 1 Coríntios 15:3-8, 20-22 e 51-57.'
    },
    {
      id: 'ca7', title: 'Tesouro em vasos de barro', ref: '2 Coríntios 4; 5; 9', icon: '🏺',
      recap: 'Na lição passada, Paulo explicou que, por causa de Jesus, a morte foi vencida.',
      scenes: [
        { art: '🧔✍️📜💛', bg: 'cidade', text: 'Paulo escreveu uma segunda carta aos Coríntios. Nela ele abriu o coração e contou das suas lutas e da sua alegria em servir a Jesus.', r: '2 Coríntios 1:3-4; 6:11' },
        { art: '🌑💡✨', bg: 'aurora', fx: 'luz', text: '"O mesmo Deus que disse: Das trevas brilhe a luz, foi quem brilhou no nosso coração, para iluminar o conhecimento da glória de Deus, no rosto de Cristo." Como na criação, Deus acende a luz no coração!', r: '2 Coríntios 4:6; Gênesis 1:3' },
        { art: '🏺💎✨', bg: 'aurora', fx: 'brilho', text: 'Paulo disse que carregamos um tesouro em potes de barro, para todos verem que o poder enorme vem de Deus, e não de nós. Nós somos simples como potes de barro, mas carregamos um tesouro: Jesus!', r: '2 Coríntios 4:7' },
        { art: '😓💪🙏', bg: 'cidade', text: 'Paulo contou: "Passamos por muitos apertos, mas não ficamos esmagados; ficamos sem saber o que fazer, mas não perdemos a esperança; somos perseguidos, mas não abandonados; derrubados, mas não destruídos."', r: '2 Coríntios 4:8-9' },
        { art: '🐛➡️🦋✨', bg: 'jardim', fx: 'brilho', text: '"Se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo!"', r: '2 Coríntios 5:17' },
        { art: '🤝🕊️📣', bg: 'aurora', fx: 'luz', text: '"Deus nos reconciliou consigo mesmo por meio de Cristo." Reconciliar é fazer as pazes. "Por isso, nós somos embaixadores de Cristo, e pedimos: reconciliem-se com Deus!"', r: '2 Coríntios 5:18-20' },
        { art: '⚖️🔄💛', bg: 'aurora', fx: 'luz', text: 'Jesus nunca pecou, mas Deus colocou sobre Ele o nosso pecado, para que, nele, nós fôssemos declarados justos diante de Deus. Uma troca maravilhosa: Jesus levou o nosso pecado, e nós recebemos a justiça dele!', r: '2 Coríntios 5:21' },
        { art: '🌰🌾🎁😊', bg: 'campo', fx: 'brilho', text: 'Paulo também falou de generosidade: "Quem semeia pouco, pouco colhe; quem semeia com fartura, com fartura colhe. Cada um dê como decidiu no coração, não com tristeza ou por obrigação, porque Deus ama quem dá com alegria."', r: '2 Coríntios 9:6-7' }
      ],
      god: 'Deus usa pessoas simples, como vasos de barro, para carregar o tesouro do evangelho. Ele faz novas todas as coisas.',
      jesus: 'A "grande troca" de 2 Coríntios 5:21 resume a cruz: Jesus, sem pecado, ficou no nosso lugar, e nós recebemos a sua justiça. E, como na criação, Deus acendeu a luz no nosso coração mostrando "a glória de Deus no rosto de Cristo". Em Jesus, começa a nova criação.',
      verse: { ref: '2 Coríntios 5:17', tx: 'Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo.' },
      small: [
        { q: 'O que somos, segundo Paulo?', o: [['🏺', 'Vasos de barro com um tesouro'], ['🏆', 'Troféus de ouro'], ['🪨', 'Pedras']] },
        { q: 'O que acontece com quem está em Cristo?', o: [['🦋', 'Vira nova criatura'], ['😴', 'Dorme'], ['🐛', 'Fica igual']] },
        { q: 'Como Deus ama que demos?', o: [['😊', 'Com alegria'], ['😢', 'Com tristeza'], ['😠', 'Bravos']] }
      ],
      big: [
        { q: 'Qual é o tesouro nos vasos de barro?', o: ['O conhecimento da glória de Deus em Cristo', 'Ouro', 'Prata', 'Joias'], e: '2 Coríntios 4:6-7.' },
        { q: 'O que quer dizer "reconciliar"?', o: ['Fazer as pazes', 'Brigar', 'Esquecer', 'Viajar'], e: '2 Coríntios 5:18-20.' },
        { q: 'O que é a "grande troca" de 2 Coríntios 5:21?', o: ['Jesus levou o nosso pecado e nós recebemos a justiça dele', 'Trocar presentes', 'Trocar de igreja', 'Nada'], e: '2 Coríntios 5:21.' },
        { q: 'O que acontece com quem semeia com fartura?', o: ['Colhe com fartura', 'Não colhe nada', 'Perde tudo', 'Colhe pouco'], e: '2 Coríntios 9:6.' }
      ],
      parents: 'Ponto central: a força de Deus na fraqueza humana (4:7; 12:9), a nova criação e a substituição (5:21). Sugestão: mostrar à criança um pote de barro simples com algo precioso dentro. Leitura junto: 2 Coríntios 4:6-9 e 5:17-21.'
    },
    {
      id: 'ca8', title: 'Gálatas: o fruto do Espírito', ref: 'Gálatas 2:16, 20; 5:1, 13-26', icon: '🍇',
      recap: 'Na lição passada, Paulo disse que somos vasos de barro carregando um tesouro: Jesus.',
      scenes: [
        { art: '🧔😟✍️📜', bg: 'cidade', text: 'As igrejas da Galácia estavam sendo enganadas: alguns diziam que, para ser salvo, era preciso crer em Jesus e também cumprir os costumes da Lei de Moisés. Paulo escreveu uma carta firme.', r: 'Gálatas 1:6-7' },
        { art: '⚖️🙏✨', bg: 'aurora', fx: 'luz', text: 'Paulo ensinou que ninguém fica justo diante de Deus por cumprir a Lei, mas pela fé em Jesus Cristo. Era a mesma verdade do concílio de Jerusalém!', r: 'Gálatas 2:16' },
        { art: '🧔🪵💛', bg: 'aurora', fx: 'coracoes', text: 'Paulo escreveu: "Já estou crucificado com Cristo. Agora não sou mais eu quem vive: é Cristo que vive em mim. E vivo pela fé no Filho de Deus, que me amou e se entregou por mim."', r: 'Gálatas 2:20' },
        { art: '⛓️💥🕊️', bg: 'aurora', fx: 'luz', text: '"Foi para a liberdade que Cristo nos libertou. Fiquem firmes e não voltem a ser escravos!"', r: 'Gálatas 5:1' },
        { art: '🕊️🤝❤️', bg: 'cidade', fx: 'coracoes', text: '"Vocês foram chamados para a liberdade. Mas não usem a liberdade para fazer o mal; ao contrário, sirvam uns aos outros com amor."', r: 'Gálatas 5:13' },
        { art: '🌳🍎🍇🍊', bg: 'jardim', fx: 'brilho', text: 'Paulo comparou a vida com o Espírito a uma árvore que dá frutos: "O fruto do Espírito é: amor, alegria, paz..."', r: 'Gálatas 5:22' },
        { art: '🍇⏳🤗😇', bg: 'jardim', fx: 'brilho', text: '"...paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio." É um fruto só, com nove "sabores"!', r: 'Gálatas 5:22-23' },
        { art: '🕊️👣💛', bg: 'aurora', fx: 'luz', text: '"Se vivemos pelo Espírito, andemos também pelo Espírito." O fruto não nasce do nosso esforço sozinho, mas do Espírito Santo morando em nós.', r: 'Gálatas 5:25' }
      ],
      god: 'Deus nos salva pela fé e nos dá liberdade. O seu Espírito faz crescer em nós o fruto do caráter de Jesus.',
      jesus: 'Jesus disse: "Eu sou a videira, vós sois as varas; quem está em mim, e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer" (João 15:5). O fruto do Espírito é o próprio caráter de Jesus crescendo em nós. Ele amou, teve alegria, paz, paciência, mansidão... perfeitamente.',
      verse: { ref: 'Gálatas 5:22-23', tx: 'Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.' },
      small: [
        { q: 'Como somos justificados?', o: [['🙏', 'Pela fé em Jesus'], ['💪', 'Pela força'], ['💰', 'Pagando']] },
        { q: 'Qual é o primeiro fruto do Espírito?', o: [['❤️', 'Amor'], ['🍌', 'Banana'], ['😠', 'Raiva']] },
        { q: 'Quem faz o fruto crescer em nós?', o: [['🕊️', 'O Espírito Santo'], ['☀️', 'O sol'], ['🌧️', 'A chuva']] }
      ],
      big: [
        { q: 'Qual era o problema nas igrejas da Galácia?', o: ['Diziam que era preciso cumprir a Lei para ser salvo', 'Falta de líderes', 'Perseguição', 'Fome'], e: 'Gálatas 1:6-7.' },
        { q: 'Quem vive em Paulo, segundo Gálatas 2:20?', o: ['Cristo', 'Moisés', 'Pedro', 'Ninguém'], e: 'Gálatas 2:20.' },
        { q: 'Para que devemos usar a liberdade?', o: ['Para servir uns aos outros com amor', 'Para fazer o que quiser', 'Para nada', 'Para ficar rico'], e: 'Gálatas 5:13.' },
        { q: 'Quantas qualidades tem o fruto do Espírito?', o: ['Nove', 'Três', 'Doze', 'Uma'], e: 'Gálatas 5:22-23.' }
      ],
      parents: 'As "obras da carne" (5:19-21) foram omitidas. A palavra "longanimidade" virou "paciência", e "temperança", "domínio próprio". Sugestão: escolher um "sabor" do fruto para orar e praticar na semana. Leitura junto: Gálatas 5:13-26.'
    },
    {
      id: 'ca9', title: 'Efésios: salvos pela graça e filhos que obedecem', ref: 'Efésios 2:1-10; 6:1-4', icon: '👨‍👩‍👧',
      recap: 'Na lição passada, Paulo ensinou sobre a liberdade em Cristo e o fruto do Espírito.',
      scenes: [
        { art: '🧔⛓️✍️📜', bg: 'cidade', text: 'Paulo escreveu à igreja de Éfeso, a cidade onde ele tinha ensinado por dois anos. Ele estava preso, mas a carta é cheia de louvor!', r: 'Efésios 1:1-3; 3:1' },
        { art: '💀🌑😔', bg: 'noite', text: '"Vocês estavam mortos nos seus delitos e pecados." Paulo quis dizer que, sem Deus, estávamos espiritualmente sem vida, como Lázaro no túmulo: não podíamos nos salvar sozinhos.', r: 'Efésios 2:1' },
        { art: '💛⚡🌅', bg: 'aurora', fx: 'luz', text: '"Mas Deus, que é rico em misericórdia, pelo grande amor com que nos amou, nos deu vida juntamente com Cristo!" Duas palavras lindas: "Mas Deus".', r: 'Efésios 2:4-5' },
        { art: '🎁🙏🚫💪', bg: 'aurora', fx: 'brilho', text: '"Porque pela graça vocês são salvos, por meio da fé. E isso não vem de vocês: é presente de Deus. Não é pelo que fazemos, e por isso ninguém pode se gabar."', r: 'Efésios 2:8-9' },
        { art: '🎨🖌️✨🤲', bg: 'aurora', fx: 'brilho', text: 'Paulo disse que somos obra das mãos de Deus, criados em Cristo Jesus para fazer coisas boas, que Deus já tinha preparado para nós. Somos como uma obra de arte de Deus!', r: 'Efésios 2:10' },
        { art: '🧱💥👥🤝', bg: 'cidade', fx: 'coracoes', text: 'Paulo também disse que Jesus derrubou o muro que separava judeus e não judeus, e fez dos dois um só povo, uma só família de Deus.', r: 'Efésios 2:14-19' },
        { art: '👧👦🙇👨‍👩', bg: 'cidade', fx: 'coracoes', text: 'No fim da carta, Paulo falou às crianças: "Filhos, obedeçam a seus pais no Senhor, porque isso é justo. Honre seu pai e sua mãe, que é o primeiro mandamento com promessa: para que tudo te vá bem e tenhas longa vida."', r: 'Efésios 6:1-3; Êxodo 20:12' },
        { art: '👨👦💛📖', bg: 'cidade', fx: 'coracoes', text: 'E aos pais: "Pais, não irritem os seus filhos, mas criem-nos na disciplina e na instrução do Senhor."', r: 'Efésios 6:4' }
      ],
      god: 'Deus é rico em misericórdia. A salvação é presente dele, e Ele prepara boas obras para os seus filhos.',
      jesus: 'Estávamos mortos como Lázaro, e Jesus nos chamou para a vida! "Mas Deus" mudou tudo, por causa de Jesus. E Jesus também foi uma criança obediente aos seus pais (Lucas 2:51). Ele cumpriu o mandamento "Honra a teu pai e a tua mãe" perfeitamente, no nosso lugar, e nos ajuda a obedecer.',
      verse: { ref: 'Efésios 2:8', tx: 'Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.' },
      small: [
        { q: 'A salvação é presente ou pagamento?', o: [['🎁', 'Presente de Deus'], ['💰', 'Pagamento'], ['🏆', 'Prêmio por ser bom']] },
        { q: 'O que os filhos devem fazer, segundo Paulo?', o: [['🙇', 'Obedecer aos pais'], ['😠', 'Brigar'], ['🙉', 'Não ouvir']] },
        { q: 'O que somos para Deus?', o: [['🎨', 'Uma obra de arte dele'], ['🗑️', 'Lixo'], ['🤖', 'Robôs']] }
      ],
      big: [
        { q: 'Como Paulo descreve quem está sem Deus?', o: ['Morto nos delitos e pecados', 'Muito bom', 'Doente só um pouco', 'Rico'], e: 'Efésios 2:1.' },
        { q: 'Por que a salvação não vem das obras?', o: ['Para que ninguém se orgulhe', 'Porque as obras são proibidas', 'Porque Deus esqueceu', 'Nada'], e: 'Efésios 2:9.' },
        { q: 'Para que fomos criados em Cristo?', o: ['Para as boas obras', 'Para dormir', 'Para nada', 'Para ser famosos'], e: 'Efésios 2:10.' },
        { q: 'Qual é o primeiro mandamento com promessa?', o: ['Honrar pai e mãe', 'Não matar', 'Não furtar', 'Guardar o sábado'], e: 'Efésios 6:2; Êxodo 20:12.' }
      ],
      parents: 'Ponto central: a graça soberana (2:1-10) e a família cristã (6:1-4). Atenção, pais: o versículo 4 é para nós! Sugestão: os pais também pedirem perdão quando erram com os filhos. Leitura junto: Efésios 2:1-10 e 6:1-4.'
    },
    {
      id: 'ca10', title: 'A armadura de Deus', ref: 'Efésios 6:10-18', icon: '🛡️',
      recap: 'Na lição passada, Paulo ensinou que somos salvos pela graça e falou aos pais e filhos.',
      scenes: [
        { art: '🧔⛓️🪖👀', bg: 'cidade', text: 'Paulo estava preso, acorrentado a um soldado romano. Olhando para a armadura do soldado, ele teve uma ideia para ensinar a igreja.', r: 'Efésios 6:20; Atos 28:16' },
        { art: '💪✨🛡️', bg: 'aurora', fx: 'luz', text: '"Fortaleçam-se no Senhor e na força do seu poder. Vistam toda a armadura de Deus, para poderem ficar firmes contra as armadilhas do diabo."', r: 'Efésios 6:10-11' },
        { art: '🌑⚔️🙏', bg: 'noite', text: '"Porque a nossa luta não é contra pessoas, mas contra as forças espirituais do mal." O inimigo de verdade não é o colega da escola, mas o mal.', r: 'Efésios 6:12' },
        { art: '🎗️💡', bg: 'aurora', fx: 'luz', text: '"Fiquem firmes, tendo a cintura cingida com a verdade." O cinto segurava a roupa do soldado. A verdade segura toda a nossa vida.', r: 'Efésios 6:14' },
        { art: '🦺⚖️', bg: 'aurora', fx: 'luz', text: '"Vistam a couraça da justiça." A couraça protegia o coração. A justiça que Jesus nos dá protege o nosso coração.', r: 'Efésios 6:14' },
        { art: '👟🕊️📣', bg: 'aurora', fx: 'luz', text: '"Calcem os pés com a prontidão para anunciar o evangelho da paz." Sapatos firmes para andar levando a boa notícia!', r: 'Efésios 6:15' },
        { art: '🛡️🔥❌', bg: 'aurora', fx: 'luz', text: '"Sobretudo, peguem o escudo da fé, com o qual vocês podem apagar todas as flechas inflamadas do maligno." Confiar em Deus apaga as mentiras do inimigo.', r: 'Efésios 6:16' },
        { art: '⛑️🗡️📖', bg: 'aurora', fx: 'luz', text: 'Paulo manda pegar a salvação como capacete, e como espada a Palavra de Deus, que o Espírito nos dá. A espada foi o que Jesus usou no deserto: "Está escrito!"', r: 'Efésios 6:17; Mateus 4:4' },
        { art: '🙏🙏🙏💛', bg: 'aurora', fx: 'coracoes', text: '"Orem em todo o tempo, no Espírito, com toda oração e súplica, por todos os santos." A oração é o que liga toda a armadura!', r: 'Efésios 6:18' }
      ],
      god: 'Deus nos dá força e proteção para ficarmos firmes. A sua Palavra é a nossa espada, e a oração, a nossa conexão com Ele.',
      jesus: 'Isaías descreveu o próprio Deus vestido de "justiça como couraça e o capacete da salvação" (Isaías 59:17). A armadura é do Senhor, e quem a vestiu primeiro foi Jesus, que venceu o diabo no deserto e na cruz. Paulo diz em outro lugar: "Revesti-vos do Senhor Jesus Cristo" (Romanos 13:14). Vestir a armadura é se vestir de Jesus.',
      verse: { ref: 'Efésios 6:10', tx: 'No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder.' },
      small: [
        { q: 'Qual é a espada do Espírito?', o: [['📖', 'A Palavra de Deus'], ['🗡️', 'Uma espada de ferro'], ['🪄', 'Uma varinha']] },
        { q: 'O que apaga as flechas de fogo?', o: [['🛡️', 'O escudo da fé'], ['💧', 'Um balde de água'], ['🌬️', 'O vento']] },
        { q: 'O que liga toda a armadura?', o: [['🙏', 'A oração'], ['🧵', 'Uma linha'], ['🔗', 'Uma corrente']] }
      ],
      big: [
        { q: 'Contra quem é a nossa luta?', o: ['Contra as forças espirituais do mal', 'Contra as pessoas', 'Contra os vizinhos', 'Contra ninguém'], e: 'Efésios 6:12.' },
        { q: 'Com o que a cintura deve ser cingida?', o: ['Com a verdade', 'Com ouro', 'Com uma corda', 'Com nada'], e: 'Efésios 6:14.' },
        { q: 'Qual é o capacete?', o: ['O capacete da salvação', 'O capacete da força', 'O capacete do rei', 'Nenhum'], e: 'Efésios 6:17.' },
        { q: 'Que profeta descreveu Deus com couraça e capacete?', o: ['Isaías', 'Jonas', 'Amós', 'Daniel'], e: 'Isaías 59:17.' }
      ],
      parents: 'Ponto central: a força vem do Senhor; a armadura é Cristo e as suas dádivas. Cuidado para não assustar as crianças com o "maligno": enfatize que Jesus já venceu. Sugestão: montar a armadura com objetos de casa. Leitura junto: Efésios 6:10-18.'
    },
    {
      id: 'ca11', title: 'Filipenses: alegria na prisão', ref: 'Filipenses 2:3-11; 4:4-13', icon: '😊',
      recap: 'Na lição passada, Paulo ensinou a vestir toda a armadura de Deus.',
      scenes: [
        { art: '🧔⛓️😊✍️', bg: 'cidade', text: 'Paulo escreveu à igreja de Filipos, a igreja de Lídia e do carcereiro. Ele estava preso, mas a carta é a mais alegre de todas! A palavra "alegria" aparece muitas vezes.', r: 'Filipenses 1:3-4, 13' },
        { art: '🙇🤝💛', bg: 'cidade', fx: 'coracoes', text: '"Não façam nada por rivalidade ou orgulho, mas com humildade considerem os outros mais importantes que vocês mesmos."', r: 'Filipenses 2:3-4' },
        { art: '👑⬇️🧺🪵', bg: 'aurora', fx: 'luz', text: '"Tenham a mesma atitude de Cristo Jesus: Ele, sendo Deus, não se agarrou a isso, mas esvaziou-se a si mesmo, tomou a forma de servo e se fez homem. Humilhou-se, sendo obediente até a morte, e morte de cruz!"', r: 'Filipenses 2:5-8' },
        { art: '👑⬆️🙇🌍', bg: 'aurora', fx: 'brilho', text: '"Por isso Deus o exaltou muito e lhe deu o nome que está acima de todo nome, para que, ao nome de Jesus, todo joelho se dobre, no céu e na terra, e todos reconheçam que Jesus Cristo é o Senhor, para a glória de Deus Pai!"', r: 'Filipenses 2:9-11' },
        { art: '😊😊📣', bg: 'aurora', fx: 'brilho', text: '"Alegrem-se sempre no Senhor; outra vez digo: alegrem-se!"', r: 'Filipenses 4:4' },
        { art: '😟➡️🙏💬', bg: 'aurora', fx: 'luz', text: '"Não fiquem ansiosos por coisa alguma. Em tudo, pela oração e súplica, com ação de graças, apresentem os seus pedidos a Deus."', r: 'Filipenses 4:6' },
        { art: '🕊️🛡️❤️', bg: 'aurora', fx: 'coracoes', text: '"E a paz de Deus, que vai além de todo entendimento, vai guardar o coração e a mente de vocês em Cristo Jesus."', r: 'Filipenses 4:7' },
        { art: '💪✨😌', bg: 'aurora', fx: 'luz', text: '"Aprendi a estar contente em qualquer situação: com fome ou com fartura, tendo muito ou passando necessidade. Tudo posso naquele que me fortalece."', r: 'Filipenses 4:11-13' }
      ],
      god: 'Deus dá uma alegria e uma paz que nem a prisão tira. Ele nos fortalece para enfrentar qualquer situação.',
      jesus: 'Filipenses 2 resume toda a história de Jesus: Ele era Deus, desceu, se fez servo, morreu na cruz e foi exaltado acima de tudo. Isaías tinha dito que diante do Senhor "todo joelho se dobrará" (Isaías 45:23); Paulo diz que isso é para Jesus! E o "tudo posso" não é força nossa: é "naquele que me fortalece", Jesus.',
      verse: { ref: 'Filipenses 4:13', tx: 'Posso todas as coisas naquele que me fortalece.' },
      small: [
        { q: 'Onde Paulo estava quando escreveu?', o: [['⛓️', 'Na prisão'], ['🏖️', 'Na praia'], ['🏰', 'Num castelo']] },
        { q: 'O que fazer quando ficamos ansiosos?', o: [['🙏', 'Orar e agradecer'], ['😱', 'Gritar'], ['🙈', 'Esconder']] },
        { q: 'Em quem tudo podemos?', o: [['✨', 'Em Jesus, que nos fortalece'], ['💪', 'Nos músculos'], ['💰', 'No dinheiro']] }
      ],
      big: [
        { q: 'Que atitude devemos ter?', o: ['A mesma de Cristo, humilde', 'De orgulho', 'De rivalidade', 'De preguiça'], e: 'Filipenses 2:5.' },
        { q: 'Até onde Jesus foi obediente?', o: ['Até a morte de cruz', 'Até cansar', 'Até a adolescência', 'Não foi'], e: 'Filipenses 2:8.' },
        { q: 'O que a paz de Deus guarda?', o: ['O coração e a mente', 'A casa', 'O dinheiro', 'Nada'], e: 'Filipenses 4:7.' },
        { q: 'O que Paulo aprendeu?', o: ['A estar contente em qualquer situação', 'A ser rico', 'A nunca sofrer', 'A reclamar'], e: 'Filipenses 4:11.' }
      ],
      parents: 'Ponto central: o "hino de Cristo" (2:5-11), um dos textos mais altos sobre a encarnação, e a paz que vem da oração (4:6-7). Ótimo para crianças ansiosas. Leitura junto: Filipenses 2:5-11 e 4:4-13.'
    },
    {
      id: 'ca12', title: 'Cristo acima de tudo e a sua volta', ref: 'Colossenses 1:15-20; 1 Tessalonicenses 4:13-18', icon: '👑',
      recap: 'Na lição passada, Paulo escreveu aos filipenses sobre a alegria e a humildade de Cristo.',
      scenes: [
        { art: '🧔✍️📜🏘️', bg: 'cidade', text: 'Paulo escreveu à igreja de Colossos, numa cidade pequena. Alguns estavam ensinando ideias confusas, como se Jesus fosse só mais um entre muitos. Paulo respondeu mostrando quem Jesus é.', r: 'Colossenses 2:8' },
        { art: '✨🖼️👀', bg: 'aurora', fx: 'luz', text: '"Ele é a imagem do Deus invisível." Ninguém pode ver Deus, mas, olhando para Jesus, conhecemos como Deus é!', r: 'Colossenses 1:15' },
        { art: '🌌🌍🦁🌳✨', bg: 'noite', fx: 'estrelas', text: 'Por meio de Jesus, Deus criou tudo, no céu e na terra, o que dá para ver e o que não dá. Tudo foi feito por Ele e para Ele. O Jesus do Novo Testamento é o Criador de Gênesis 1!', r: 'Colossenses 1:16; João 1:3' },
        { art: '🧲🌍✨', bg: 'aurora', fx: 'luz', text: 'Jesus já existia antes de tudo, e é nele que tudo se mantém de pé. É Jesus quem segura o universo inteiro no lugar!', r: 'Colossenses 1:17; Hebreus 1:3' },
        { art: '👑🪵🕊️', bg: 'aurora', fx: 'luz', text: '"Ele é a cabeça da igreja. E agradou a Deus reconciliar todas as coisas consigo por meio dele, fazendo a paz pelo sangue da sua cruz."', r: 'Colossenses 1:18-20' },
        { art: '😢🪦❓', bg: 'cidade', text: 'Na cidade de Tessalônica, alguns cristãos estavam tristes porque irmãos queridos tinham morrido. Será que eles iam perder a volta de Jesus?', r: '1 Tessalonicenses 4:13' },
        { art: '☁️🎺✨⬇️', bg: 'aurora', fx: 'luz', text: 'Paulo escreveu que o próprio Senhor vai descer do céu, com uma ordem forte, com a voz do arcanjo e o som da trombeta de Deus. E os que morreram crendo em Cristo vão ressuscitar primeiro.', r: '1 Tessalonicenses 4:16' },
        { art: '👥⬆️☁️💛♾️', bg: 'aurora', fx: 'brilho', text: '"Depois, nós, os que estivermos vivos, seremos levados com eles nas nuvens, para nos encontrarmos com o Senhor no ar. E vamos ficar com o Senhor para sempre. Consolem-se uns aos outros com estas palavras."', r: '1 Tessalonicenses 4:17-18' }
      ],
      god: 'Deus se mostra em Jesus, o Criador e Sustentador de tudo. Ele vai trazer Jesus de volta para juntar o seu povo para sempre.',
      jesus: 'No começo da Bíblia, Deus criou tudo pela sua palavra (Gênesis 1). Colossenses revela que foi por meio de Jesus! Ele é o Criador, o Sustentador, a cabeça da igreja e o Reconciliador. E Ele vai voltar, como os anjos disseram na ascensão (Atos 1:11). A história começou com Ele e vai terminar com Ele.',
      verse: { ref: '1 Tessalonicenses 4:17', tx: 'E assim estaremos sempre com o Senhor.' },
      small: [
        { q: 'Por meio de quem tudo foi criado?', o: [['✨', 'De Jesus'], ['🤖', 'De robôs'], ['🐒', 'Dos macacos']] },
        { q: 'Jesus vai voltar?', o: [['☁️', 'Sim, do céu!'], ['❌', 'Não'], ['🤷', 'Talvez']] },
        { q: 'Com quem vamos estar para sempre?', o: [['💛', 'Com o Senhor'], ['🚫', 'Com ninguém'], ['🐶', 'Só com o cachorro']] }
      ],
      big: [
        { q: 'Jesus é a imagem de quem?', o: ['Do Deus invisível', 'De Moisés', 'Dos anjos', 'De Paulo'], e: 'Colossenses 1:15.' },
        { q: 'O que "subsiste" em Jesus?', o: ['Todas as coisas', 'Só a igreja', 'Só os anjos', 'Nada'], e: 'Colossenses 1:17.' },
        { q: 'Como Jesus fez a paz?', o: ['Pelo sangue da sua cruz', 'Por um acordo', 'Com uma guerra', 'Não fez'], e: 'Colossenses 1:20.' },
        { q: 'Por que os tessalonicenses estavam tristes?', o: ['Irmãos queridos tinham morrido', 'Perderam dinheiro', 'Estavam presos', 'Choveu'], e: '1 Tessalonicenses 4:13.' }
      ],
      parents: 'Imagem de Jesus evitada mesmo no texto "imagem do Deus invisível": usamos luz e moldura vazia. Detalhes de escatologia (arrebatamento, ordem dos eventos) variam entre as tradições; o app conta só o que o texto diz. Leitura junto: Colossenses 1:15-20 e 1 Tessalonicenses 4:13-18.'
    },
    {
      id: 'ca13', title: 'Timóteo: desde criança, as Escrituras', ref: '1 Timóteo 4:12; 2 Timóteo 1:5; 3:14-17', icon: '📖',
      recap: 'Na lição passada, Paulo mostrou que Jesus está acima de tudo e vai voltar.',
      scenes: [
        { art: '🧔💛🧑', bg: 'cidade', text: 'Timóteo era um jovem que viajou com Paulo desde a segunda viagem. Paulo o amava como a um filho, e o chamava de "meu verdadeiro filho na fé".', r: 'Atos 16:1-3; 1 Timóteo 1:2' },
        { art: '👵👩👦📖', bg: 'cidade', fx: 'coracoes', text: 'Timóteo tinha aprendido a fé em casa: com a sua avó Loide e a sua mãe Eunice. Paulo escreveu: "Lembro-me da sua fé sincera, que habitou primeiro na sua avó Loide e na sua mãe Eunice."', r: '2 Timóteo 1:5' },
        { art: '🧑🏛️👴👴', bg: 'cidade', text: 'Paulo deixou Timóteo em Éfeso para cuidar da igreja. Alguns podiam achar que ele era jovem demais para isso.', r: '1 Timóteo 1:3' },
        { art: '🧑💪⭐', bg: 'aurora', fx: 'brilho', text: 'Paulo escreveu: "Ninguém despreze a sua juventude. Pelo contrário, seja um exemplo para os fiéis, na palavra, no comportamento, no amor, na fé e na pureza."', r: '1 Timóteo 4:12' },
        { art: '👶📖🌱🌳', bg: 'jardim', fx: 'brilho', text: 'Na segunda carta, Paulo lembrou: "Desde criança você conhece as Sagradas Escrituras, que podem te dar sabedoria para a salvação, pela fé em Cristo Jesus." Timóteo aprendeu a Bíblia pequenininho!', r: '2 Timóteo 3:15' },
        { art: '📖🌬️✨', bg: 'aurora', fx: 'luz', text: '"Toda a Escritura é inspirada por Deus." Inspirada quer dizer "soprada por Deus": Deus guiou as pessoas que escreveram, de modo que a Bíblia é a Palavra dele.', r: '2 Timóteo 3:16; 2 Pedro 1:21' },
        { art: '📖🧭🔧💪', bg: 'aurora', fx: 'luz', text: '"E é útil para ensinar, para repreender, para corrigir e para educar na justiça, para que o homem de Deus seja preparado para toda boa obra."', r: '2 Timóteo 3:16-17' },
        { art: '🏃🏁🏆', bg: 'aurora', fx: 'brilho', text: 'Quase no fim da vida, Paulo escreveu: "Combati o bom combate, terminei a corrida, guardei a fé. Agora me está guardada a coroa da justiça."', r: '2 Timóteo 4:7-8' }
      ],
      god: 'Deus usa os jovens e as crianças. Ele nos deu a Bíblia, inspirada por Ele, para nos ensinar a viver.',
      jesus: 'As Escrituras dão "sabedoria para a salvação pela fé em Cristo Jesus": a Bíblia inteira aponta para Jesus! É o que fizemos em toda esta Grande História. E, como Timóteo, as crianças que aprendem a Bíblia desde pequenas podem conhecer Jesus desde cedo. Jesus mesmo disse: "Deixai vir a mim os pequeninos."',
      verse: { ref: '2 Timóteo 3:15', tx: 'E que desde a tua meninice sabes as sagradas Escrituras, que podem fazer-te sábio para a salvação, pela fé que há em Cristo Jesus.' },
      small: [
        { q: 'Quem ensinou a fé a Timóteo?', o: [['👵', 'A avó e a mãe'], ['🐶', 'O cachorro'], ['📺', 'A TV']] },
        { q: 'Desde quando Timóteo conhecia a Bíblia?', o: [['👶', 'Desde criança'], ['👴', 'Desde velho'], ['🚫', 'Nunca']] },
        { q: 'Quem inspirou a Bíblia?', o: [['✨', 'Deus'], ['🤖', 'Um robô'], ['🧔', 'Só Paulo']] }
      ],
      big: [
        { q: 'Quais eram os nomes da avó e da mãe de Timóteo?', o: ['Loide e Eunice', 'Sara e Rebeca', 'Maria e Marta', 'Ana e Isabel'], e: '2 Timóteo 1:5.' },
        { q: 'Em que Timóteo devia ser exemplo?', o: ['Na palavra, comportamento, amor, fé e pureza', 'Só na força', 'Na riqueza', 'Na fama'], e: '1 Timóteo 4:12.' },
        { q: 'O que quer dizer "inspirada por Deus"?', o: ['Soprada por Deus', 'Escrita sem pensar', 'Inventada', 'Copiada'], e: '2 Timóteo 3:16.' },
        { q: 'O que Paulo disse no fim da vida?', o: ['"Combati o bom combate, terminei a corrida"', '"Desisti"', '"Estou cansado"', 'Nada'], e: '2 Timóteo 4:7.' }
      ],
      parents: 'Esta lição é sobre vocês, pais e avós: Loide e Eunice! Ponto central: a inspiração da Escritura e o valor de ensinar a Bíblia às crianças desde cedo. Tito (presbíteros, sã doutrina) foi omitido por brevidade. Leitura junto: 2 Timóteo 1:5 e 3:14-17.'
    },
    {
      id: 'ca14', title: 'Filemom: receba-o como a mim', ref: 'Filemom', icon: '✉️',
      recap: 'Na lição passada, Paulo lembrou que Timóteo conhecia as Escrituras desde criança.',
      scenes: [
        { art: '🧔🏠👥', bg: 'cidade', text: 'Filemom era um cristão rico da cidade de Colossos. A igreja se reunia na casa dele. Ele era amigo de Paulo.', r: 'Filemom 1:1-2' },
        { art: '🧑🏃💨', bg: 'deserto', fx: 'vento', text: 'Filemom tinha um escravo chamado Onésimo, nome que quer dizer "útil". Mas Onésimo fugiu, e talvez tenha levado algo que não era dele.', r: 'Filemom 1:15, 18' },
        { art: '🧑🏙️⛓️🧔', bg: 'cidade', text: 'Longe de casa, Onésimo encontrou Paulo, que estava preso. E Paulo falou de Jesus a ele, e Onésimo creu! Agora ele era um irmão em Cristo.', r: 'Filemom 1:10' },
        { art: '🧔✍️📜💛', bg: 'cidade', fx: 'coracoes', text: 'Paulo mandou Onésimo de volta para Filemom, com uma carta curtinha, de um capítulo só: a carta a Filemom.', r: 'Filemom 1:12' },
        { art: '🧑❌➡️✅', bg: 'aurora', fx: 'luz', text: 'Paulo escreveu brincando com o nome: "Antes ele era inútil para você, mas agora é útil para você e para mim."', r: 'Filemom 1:11' },
        { art: '🧔🤝🧑💛', bg: 'aurora', fx: 'coracoes', text: '"Receba-o não mais como escravo, mas como irmão amado. Se você me considera seu companheiro, receba-o como se fosse eu mesmo."', r: 'Filemom 1:16-17' },
        { art: '🧔✍️💰📜', bg: 'aurora', fx: 'luz', text: '"Se ele te deu algum prejuízo ou te deve alguma coisa, coloque na minha conta. Eu, Paulo, escrevo com a minha própria mão: eu pagarei."', r: 'Filemom 1:18-19' },
        { art: '🤗🏠🎉', bg: 'cidade', fx: 'coracoes', text: 'Paulo tinha certeza de que Filemom ia perdoar e fazer até mais do que ele pedia. Em Cristo, um senhor e um escravo podiam ser irmãos de verdade!', r: 'Filemom 1:21; Gálatas 3:28' }
      ],
      god: 'Deus transforma pessoas e relacionamentos. Ele nos ensina a perdoar e a receber os outros como irmãos.',
      jesus: 'O que Paulo fez por Onésimo, Jesus fez por nós de um jeito muito maior. Nós fugimos de Deus e tínhamos uma dívida que não podíamos pagar. Jesus disse ao Pai: "Coloque na minha conta. Eu pago." E agora o Pai nos recebe como recebe o próprio Filho. Isso se chama graça!',
      verse: { ref: 'Colossenses 3:13', tx: 'Perdoando-vos uns aos outros... assim como Cristo vos perdoou, assim fazei vós também.' },
      small: [
        { q: 'Quem fugiu de Filemom?', o: [['🧑', 'Onésimo'], ['🧔', 'Paulo'], ['🐶', 'O cachorro']] },
        { q: 'O que Paulo pediu a Filemom?', o: [['🤗', 'Receber Onésimo como irmão'], ['⛓️', 'Prender Onésimo'], ['🏃', 'Mandar embora']] },
        { q: 'Quem pagou a dívida de Onésimo?', o: [['🧔', 'Paulo'], ['🧑', 'Ele mesmo'], ['🚫', 'Ninguém']] }
      ],
      big: [
        { q: 'O que quer dizer Onésimo?', o: ['Útil', 'Fujão', 'Rico', 'Forte'], e: 'Filemom 1:11.' },
        { q: 'Onde a igreja de Colossos se reunia?', o: ['Na casa de Filemom', 'No templo', 'Na sinagoga', 'Na praia'], e: 'Filemom 1:2.' },
        { q: 'O que Paulo disse sobre o prejuízo?', o: ['"Coloque na minha conta, eu pagarei"', '"Esqueça"', '"Cobre dele"', 'Nada'], e: 'Filemom 1:18-19.' },
        { q: 'Como Filemom devia receber Onésimo?', o: ['Como irmão amado, como se fosse o próprio Paulo', 'Como escravo', 'Como inimigo', 'Não devia receber'], e: 'Filemom 1:16-17.' }
      ],
      parents: 'Encerramento do arco das cartas de Paulo. A escravidão do mundo romano foi mencionada com cuidado; o evangelho a minou por dentro, tornando senhor e escravo irmãos (Gálatas 3:28). Ponto central: perdão e a imagem da imputação ("ponha na minha conta"). Leitura junto: Filemom 1:8-21.'
    }
  ]
};
