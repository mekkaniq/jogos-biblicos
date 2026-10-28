/* A Grande História da Bíblia — Arco 27: Jesus cura e faz milagres (Os Evangelhos) */
window.HISTORIA = window.HISTORIA || { arcs: {} };
window.HISTORIA.arcs.milagres = {
  id: 'milagres', n: 27, name: 'Jesus cura e faz milagres', sub: 'Sinais de quem Ele é', ref: 'Os Evangelhos', icon: '🐟', scene: 'galileia',
  intro: 'Jesus não só ensinava: Ele mostrava o poder de Deus. Transformou água em vinho, acalmou o mar, multiplicou pães, curou cegos e doentes, perdoou pecados e até ressuscitou mortos. João chama esses milagres de "sinais", porque eles apontam para quem Jesus é: o Filho de Deus, o Senhor da criação, que veio desfazer tudo o que o pecado estragou. (Jesus aparece só como luz ✨.)',
  lessons: [
    {
      id: 'mi1', title: 'Água em vinho nas bodas de Caná', ref: 'João 2:1-11', icon: '🍷',
      recap: 'No arco passado, Jesus ensinou as multidões e contou parábolas sobre o Reino e o amor do Pai.',
      scenes: [
        { art: '💍🎉🏘️', bg: 'cidade', fx: 'brilho', text: 'Houve um casamento na cidade de Caná, na Galileia. Maria, a mãe de Jesus, estava lá, e Jesus e os seus discípulos também foram convidados.', r: 'João 2:1-2' },
        { art: '🍷🫙❌😟', bg: 'cidade', text: 'No meio da festa, o vinho acabou! Naquele tempo, isso seria uma grande vergonha para os noivos.', r: 'João 2:3' },
        { art: '👩💬✨', bg: 'cidade', text: 'Maria disse a Jesus: "Eles não têm mais vinho." E disse aos empregados: "Façam tudo o que Ele mandar."', r: 'João 2:3-5' },
        { art: '🏺🏺🏺🏺🏺🏺', bg: 'cidade', text: 'Havia ali seis talhas de pedra, enormes jarros para a água de purificação dos judeus. Cada uma cabia uns cem litros!', r: 'João 2:6' },
        { art: '✨💬💧🏺', bg: 'cidade', fx: 'luz', text: 'Jesus disse aos empregados: "Encham as talhas de água." E eles encheram até a boca.', r: 'João 2:7' },
        { art: '🏺➡️🍷✨', bg: 'cidade', fx: 'brilho', text: 'Então Jesus disse: "Agora tirem um pouco e levem ao mestre-sala." Eles levaram, e a água tinha virado vinho!', r: 'João 2:8-9' },
        { art: '🧔😋🍷', bg: 'cidade', fx: 'brilho', text: 'O mestre-sala provou e, sem saber de onde vinha, chamou o noivo: "Todo mundo serve primeiro o vinho bom, e depois o inferior. Mas você guardou o melhor vinho até agora!"', r: 'João 2:9-10' },
        { art: '✨🌟👥🙏', bg: 'aurora', fx: 'luz', text: 'Esse foi o primeiro dos sinais de Jesus. Assim Ele mostrou quem Ele era, cheio de glória, e os discípulos creram nele.', r: 'João 2:11' }
      ],
      god: 'Deus se importa até com uma festa de casamento. Ele dá o melhor, e com abundância.',
      jesus: 'Os profetas diziam que, quando o Messias viesse, os montes iam "gotejar vinho" (Amós 9:13; Isaías 25:6). O vinho novo e melhor mostrava que a alegria do Reino tinha chegado com Jesus. E a Bíblia termina com uma grande festa de casamento: as bodas do Cordeiro com a sua Igreja (Apocalipse 19:7-9).',
      verse: { ref: 'João 2:5', tx: 'Fazei tudo quanto ele vos disser.' },
      small: [
        { q: 'O que acabou na festa?', o: [['🍷', 'O vinho'], ['🎂', 'O bolo'], ['🎈', 'Os balões']] },
        { q: 'Em que Jesus transformou a água?', o: [['🍷', 'Em vinho'], ['🥛', 'Em leite'], ['🧊', 'Em gelo']] },
        { q: 'O que Maria disse aos empregados?', o: [['✨', '"Façam tudo o que Ele mandar"'], ['😴', '"Vão dormir"'], ['🏃', '"Corram"']] }
      ],
      big: [
        { q: 'Em que cidade foi o casamento?', o: ['Caná', 'Belém', 'Jericó', 'Nazaré'], e: 'João 2:1.' },
        { q: 'Quantas talhas de pedra havia?', o: ['Seis', 'Duas', 'Doze', 'Cem'], e: 'João 2:6.' },
        { q: 'O que o mestre-sala disse?', o: ['Que o melhor vinho foi guardado para o fim', 'Que o vinho estava ruim', 'Que era água', 'Nada'], e: 'João 2:10.' },
        { q: 'O que esse sinal mostrou?', o: ['A glória de Jesus', 'A riqueza do noivo', 'A força de Maria', 'Nada'], e: 'João 2:11.' }
      ],
      parents: 'Ponto central: o primeiro "sinal" do Evangelho de João, que revela a glória de Cristo e a abundância do Reino. A frase de Jesus à mãe (2:4) foi omitida por ser difícil de explicar a crianças. Leitura junto: João 2:1-11.'
    },
    {
      id: 'mi2', title: 'O paralítico que desceu pelo telhado', ref: 'Marcos 2:1-12', icon: '🏠',
      recap: 'Na lição passada, Jesus transformou água em vinho num casamento.',
      scenes: [
        { art: '🏠👥👥✨', bg: 'cidade', text: 'Jesus estava numa casa em Cafarnaum, e juntou tanta gente para ouvi-lo que não cabia mais ninguém, nem na porta!', r: 'Marcos 2:1-2' },
        { art: '🧔🧔🛏️🧔🧔', bg: 'cidade', text: 'Chegaram quatro homens carregando um amigo paralítico numa maca. Ele não conseguia andar. Mas, por causa da multidão, eles não conseguiam chegar perto de Jesus.', r: 'Marcos 2:3-4' },
        { art: '🧔🧗🏠⬆️', bg: 'cidade', text: 'Então tiveram uma ideia: subiram no telhado da casa, que era plano, e abriram um buraco bem em cima de onde Jesus estava!', r: 'Marcos 2:4' },
        { art: '🪢🛏️⬇️✨', bg: 'cidade', fx: 'luz', text: 'Com cordas, desceram a maca com o amigo até o chão, bem na frente de Jesus!', r: 'Marcos 2:4; Lucas 5:19' },
        { art: '✨💬🛏️💛', bg: 'cidade', fx: 'luz', text: 'Vendo a fé deles, Jesus disse ao paralítico: "Filho, os seus pecados estão perdoados."', r: 'Marcos 2:5' },
        { art: '👨‍🏫🤨💭', bg: 'cidade', text: 'Alguns mestres da Lei pensaram: "Como Ele fala assim? Isso é blasfêmia! Quem pode perdoar pecados, a não ser Deus?" E eles tinham razão nisso: só Deus pode perdoar!', r: 'Marcos 2:6-7' },
        { art: '✨💬👨‍🏫', bg: 'cidade', fx: 'luz', text: 'Jesus sabia o que eles pensavam e disse: "O que é mais fácil dizer: seus pecados estão perdoados, ou levante-se e ande? Pois, para que vocês saibam que o Filho do homem tem autoridade na terra para perdoar pecados..."', r: 'Marcos 2:8-10' },
        { art: '🧔🧍🛏️🎉', bg: 'cidade', fx: 'brilho', text: '"...eu digo a você: levante-se, pegue a sua maca e vá para casa!" E o homem se levantou na mesma hora, pegou a maca e saiu na frente de todos!', r: 'Marcos 2:11-12' },
        { art: '👥😮🙌', bg: 'cidade', fx: 'brilho', text: 'Todos ficaram admirados e glorificaram a Deus, dizendo: "Nunca vimos nada assim!"', r: 'Marcos 2:12' }
      ],
      god: 'Só Deus pode perdoar pecados. Ele se alegra com a fé que leva os amigos até Ele.',
      jesus: 'Os mestres da Lei estavam certos: só Deus pode perdoar pecados. E Jesus perdoou! Com a cura, Ele provou que tem essa autoridade, porque Ele é Deus. O nome que Ele usou, "Filho do homem", vem de Daniel 7. O maior problema do paralítico não eram as pernas, era o pecado, e Jesus cuidou dos dois.',
      verse: { ref: 'Marcos 2:10', tx: 'O Filho do homem tem na terra poder para perdoar pecados.' },
      small: [
        { q: 'Por onde os amigos desceram o paralítico?', o: [['🏠', 'Pelo telhado'], ['🚪', 'Pela porta'], ['🪟', 'Pela janela']] },
        { q: 'O que Jesus disse primeiro?', o: [['💛', '"Seus pecados estão perdoados"'], ['😠', '"Saiam daqui"'], ['😴', '"Durma"']] },
        { q: 'O homem conseguiu andar?', o: [['🧍', 'Sim!'], ['❌', 'Não'], ['🤷', 'Mais ou menos']] }
      ],
      big: [
        { q: 'Quantos amigos carregaram o paralítico?', o: ['Quatro', 'Dois', 'Doze', 'Um'], e: 'Marcos 2:3.' },
        { q: 'O que Jesus viu nos amigos?', o: ['A fé deles', 'A força deles', 'O dinheiro deles', 'A pressa deles'], e: 'Marcos 2:5.' },
        { q: 'O que os mestres da Lei pensaram?', o: ['Só Deus pode perdoar pecados', 'Que Jesus era fraco', 'Que o telhado era caro', 'Nada'], e: 'Marcos 2:7.' },
        { q: 'O que a cura provou?', o: ['Que Jesus tem autoridade para perdoar pecados', 'Que o homem fingia', 'Que os amigos eram fortes', 'Nada'], e: 'Marcos 2:10.' }
      ],
      parents: 'Ponto central: a divindade de Cristo mostrada no perdão dos pecados, e a fé dos amigos que intercedem. Bom para conversar sobre levar amigos a Jesus. Leitura junto: Marcos 2:1-12.'
    },
    {
      id: 'mi3', title: 'Até o vento e o mar obedecem', ref: 'Marcos 4:35-41', icon: '🌊',
      recap: 'Na lição passada, Jesus perdoou e curou o paralítico que desceu pelo telhado.',
      scenes: [
        { art: '🌅⛵✨', bg: 'mar', fx: 'ondas', text: 'No fim de um dia de ensino, Jesus disse aos discípulos: "Vamos passar para o outro lado do lago." Eles entraram no barco e partiram.', r: 'Marcos 4:35-36' },
        { art: '✨😴🛶', bg: 'noite', fx: 'estrelas', text: 'Jesus estava cansado e dormia na parte de trás do barco, com a cabeça num travesseiro.', r: 'Marcos 4:38' },
        { art: '🌪️🌊⛵', bg: 'mar', fx: 'chuva', text: 'De repente, veio uma tempestade fortíssima! As ondas batiam no barco, e ele já estava se enchendo de água.', r: 'Marcos 4:37' },
        { art: '🧔😱💦', bg: 'mar', fx: 'chuva', text: 'Os discípulos, alguns deles pescadores experientes, ficaram apavorados. Acordaram Jesus: "Mestre, o Senhor não se importa que a gente morra?"', r: 'Marcos 4:38' },
        { art: '✨✋🌊', bg: 'mar', fx: 'luz', text: 'Jesus se levantou, repreendeu o vento e disse ao mar: "Silêncio! Aquiete-se!"', r: 'Marcos 4:39' },
        { art: '🌊➡️😌🌅', bg: 'mar', fx: 'brilho', text: 'O vento parou, e houve uma grande calmaria. O mar ficou liso como um espelho!', r: 'Marcos 4:39' },
        { art: '✨💬🧔', bg: 'mar', fx: 'luz', text: 'Jesus perguntou aos discípulos: "Por que vocês estão com tanto medo? Ainda não têm fé?"', r: 'Marcos 4:40' },
        { art: '🧔😮❓', bg: 'mar', fx: 'brilho', text: 'Eles ficaram cheios de temor e diziam uns aos outros: "Quem é este, que até o vento e o mar lhe obedecem?"', r: 'Marcos 4:41' }
      ],
      god: 'Deus manda no vento e no mar. Ele está conosco nas tempestades, mesmo quando parece dormir.',
      jesus: 'No Antigo Testamento, só Deus acalmava o mar: "Faz cessar a tormenta, e as ondas se acalmam" (Salmos 107:29). Quando Jesus fez isso, os discípulos perguntaram: "Quem é este?" A resposta: o próprio Senhor do mar! Jonas dormia no barco fugindo de Deus; Jesus dormia confiando no Pai, e salvou todos do barco.',
      verse: { ref: 'Marcos 4:41', tx: 'Quem é este, que até o vento e o mar lhe obedecem?' },
      small: [
        { q: 'O que Jesus fazia no barco?', o: [['😴', 'Dormia'], ['🎣', 'Pescava'], ['🍕', 'Comia']] },
        { q: 'O que veio sobre o lago?', o: [['🌪️', 'Uma tempestade'], ['🌈', 'Um arco-íris'], ['🐋', 'Uma baleia']] },
        { q: 'O que Jesus disse ao mar?', o: [['✋', '"Aquiete-se!"'], ['🌊', '"Mais ondas!"'], ['🤐', 'Nada']] }
      ],
      big: [
        { q: 'Para onde Jesus queria ir?', o: ['Para o outro lado do lago', 'Para Jerusalém', 'Para o Egito', 'Para casa'], e: 'Marcos 4:35.' },
        { q: 'O que os discípulos perguntaram ao acordar Jesus?', o: ['"Não se importa que a gente morra?"', '"Está com fome?"', '"Vamos pescar?"', 'Nada'], e: 'Marcos 4:38.' },
        { q: 'O que aconteceu quando Jesus falou?', o: ['Houve uma grande calmaria', 'A tempestade aumentou', 'O barco afundou', 'Nada'], e: 'Marcos 4:39.' },
        { q: 'Que Salmo diz que Deus acalma a tormenta?', o: ['Salmo 107', 'Salmo 1', 'Salmo 23', 'Salmo 150'], e: 'Salmos 107:29.' }
      ],
      parents: 'A tempestade também está no Cantinho Kids. Ponto central: a pergunta "quem é este?", com a resposta do Salmo 107: Jesus é Deus. Bom para crianças com medo: Jesus está no barco. Leitura junto: Marcos 4:35-41.'
    },
    {
      id: 'mi4', title: 'A filha de Jairo e a mulher que tocou na roupa', ref: 'Marcos 5:21-43', icon: '👧',
      recap: 'Na lição passada, Jesus acalmou o vento e o mar com uma palavra.',
      scenes: [
        { art: '🧔🙇✨', bg: 'mar', text: 'Um chefe da sinagoga chamado Jairo se jogou aos pés de Jesus: "A minha filhinha está morrendo! Venha, coloque as mãos sobre ela, para que ela seja curada e viva!" Jesus foi com ele.', r: 'Marcos 5:22-24' },
        { art: '👥👥👥✨', bg: 'cidade', text: 'Uma multidão enorme seguia Jesus e o apertava de todos os lados.', r: 'Marcos 5:24' },
        { art: '👩😢⏳1️⃣2️⃣', bg: 'cidade', text: 'No meio da multidão havia uma mulher que estava doente havia doze anos. Tinha gastado todo o seu dinheiro com médicos, e só piorava.', r: 'Marcos 5:25-26' },
        { art: '👩🤏🧥✨', bg: 'cidade', fx: 'luz', text: 'Ela pensou: "Se eu apenas tocar na roupa dele, vou ficar curada." Chegou por trás e tocou na capa de Jesus. Na mesma hora, ela sentiu no corpo que estava curada!', r: 'Marcos 5:27-29' },
        { art: '✨❓👥', bg: 'cidade', fx: 'luz', text: 'Jesus parou: "Quem tocou na minha roupa?" Os discípulos estranharam: "Com essa multidão te apertando, o Senhor pergunta quem tocou?" Mas Jesus sabia que tinha saído poder dele.', r: 'Marcos 5:30-32' },
        { art: '👩🙇✨💛', bg: 'cidade', fx: 'coracoes', text: 'A mulher, tremendo, se ajoelhou e contou toda a verdade. Jesus disse com carinho: "Filha, a sua fé te salvou. Vá em paz, e fique livre do seu sofrimento."', r: 'Marcos 5:33-34' },
        { art: '🧔😭📣', bg: 'cidade', text: 'Enquanto Jesus falava, chegaram pessoas da casa de Jairo: "A sua filha morreu. Não incomode mais o Mestre." Mas Jesus disse a Jairo: "Não tenha medo; apenas creia."', r: 'Marcos 5:35-36' },
        { art: '✨🤲👧🛏️', bg: 'cidade', fx: 'luz', text: 'Na casa, todos choravam. Jesus entrou no quarto com os pais e três discípulos, pegou a mão da menina e disse: "Talita cumi!", que quer dizer: "Menina, eu te digo: levante-se!"', r: 'Marcos 5:38-41' },
        { art: '👧🚶😊🎉', bg: 'aurora', fx: 'brilho', text: 'Na mesma hora, a menina, que tinha doze anos, se levantou e começou a andar! Todos ficaram muito espantados. E Jesus mandou que dessem comida a ela.', r: 'Marcos 5:42-43' }
      ],
      god: 'Deus tem tempo para cada pessoa. Ele cura, consola e tem poder até sobre a morte.',
      jesus: 'Jesus não teve pressa: parou para a mulher que todos ignoravam e a chamou de "filha". E, para Jairo, disse: "Não tenha medo; apenas creia." Elias e Eliseu oraram muito para os meninos reviverem; Jesus só pegou a mão e falou. Ele é a ressurreição e a vida (João 11:25).',
      verse: { ref: 'Marcos 5:36', tx: 'Não temas, crê somente.' },
      small: [
        { q: 'O que a mulher tocou?', o: [['🧥', 'A roupa de Jesus'], ['🌳', 'Uma árvore'], ['🐴', 'Um cavalo']] },
        { q: 'O que Jesus disse a Jairo?', o: [['💛', '"Não tenha medo; apenas creia"'], ['😴', '"Desista"'], ['🏃', '"Fuja"']] },
        { q: 'O que aconteceu com a menina?', o: [['🚶', 'Levantou e andou'], ['😴', 'Continuou dormindo'], ['🏃', 'Fugiu']] }
      ],
      big: [
        { q: 'Quem era Jairo?', o: ['Um chefe da sinagoga', 'Um soldado', 'Um pescador', 'Um rei'], e: 'Marcos 5:22.' },
        { q: 'Há quanto tempo a mulher estava doente?', o: ['Doze anos', 'Um dia', 'Quarenta anos', 'Uma semana'], e: 'Marcos 5:25.' },
        { q: 'O que quer dizer "Talita cumi"?', o: ['"Menina, levante-se"', '"Vá em paz"', '"Durma"', '"Coma"'], e: 'Marcos 5:41.' },
        { q: 'O que Jesus mandou fazer depois?', o: ['Dar comida à menina', 'Fazer festa', 'Contar a todos', 'Nada'], e: 'Marcos 5:43.' }
      ],
      parents: 'A doença da mulher (fluxo de sangue, 5:25) foi descrita só como "doente". Há a morte de uma criança, com final feliz. Ponto central: compaixão e poder de Cristo sobre a doença e a morte. Leitura junto: Marcos 5:21-43.'
    },
    {
      id: 'mi5', title: 'Cinco pães e dois peixinhos', ref: 'João 6:1-14, 35', icon: '🍞',
      recap: 'Na lição passada, Jesus curou a mulher e trouxe de volta à vida a filha de Jairo.',
      scenes: [
        { art: '👥👥👥⛰️✨', bg: 'monte', text: 'Uma multidão enorme seguia Jesus, porque via os sinais que Ele fazia nos doentes. Jesus subiu a um monte e se sentou com os discípulos.', r: 'João 6:1-3' },
        { art: '✨❓🍞', bg: 'monte', fx: 'luz', text: 'Vendo a multidão, Jesus perguntou a Filipe: "Onde vamos comprar pão para toda essa gente comer?" Ele disse isso para testar Filipe, porque já sabia o que ia fazer.', r: 'João 6:5-6' },
        { art: '🧔💰🤷', bg: 'monte', text: 'Filipe respondeu: "Nem duzentos dias de salário dariam para cada um comer um pedacinho!"', r: 'João 6:7' },
        { art: '🧔👦🍞🐟', bg: 'monte', text: 'André, o irmão de Pedro, disse: "Tem um menino aqui com cinco pães de cevada e dois peixinhos. Mas o que é isso para tanta gente?"', r: 'João 6:8-9' },
        { art: '✨💬🌿👥', bg: 'campo', fx: 'luz', text: 'Jesus disse: "Mandem o povo se sentar." Havia muita grama naquele lugar, e sentaram-se uns cinco mil homens, fora as mulheres e as crianças.', r: 'João 6:10; Mateus 14:21' },
        { art: '✨🙏🍞🐟', bg: 'campo', fx: 'luz', text: 'Jesus pegou os pães, deu graças a Deus e os repartiu entre os que estavam sentados. E fez o mesmo com os peixes, quanto quiseram!', r: 'João 6:11' },
        { art: '👥😋🍞🍞🍞', bg: 'campo', fx: 'brilho', text: 'Todos comeram até ficarem satisfeitos! Então Jesus disse: "Recolham os pedaços que sobraram, para que nada se perca."', r: 'João 6:12' },
        { art: '🧺1️⃣2️⃣🍞', bg: 'campo', fx: 'brilho', text: 'Eles recolheram e encheram doze cestos com os pedaços que sobraram dos cinco pães! Sobrou mais do que tinha no começo!', r: 'João 6:13' },
        { art: '✨🍞♾️', bg: 'aurora', fx: 'luz', text: 'No dia seguinte, Jesus explicou o sinal: "Eu sou o pão da vida. Quem vem a mim nunca vai ter fome, e quem crê em mim nunca vai ter sede."', r: 'João 6:35' }
      ],
      god: 'Deus usa o pouco que entregamos a Ele. Ele dá com abundância e não desperdiça nada.',
      jesus: 'No deserto, Deus alimentou Israel com o maná, o pão do céu (Êxodo 16). Jesus disse que Ele é o verdadeiro pão do céu: "Eu sou o pão da vida" (João 6:32-35). O pão alimenta o corpo por um dia; Jesus alimenta a alma para sempre. E na Santa Ceia lembramos disso com o pão.',
      verse: { ref: 'João 6:35', tx: 'Eu sou o pão da vida; aquele que vem a mim não terá fome.' },
      small: [
        { q: 'O que o menino tinha?', o: [['🍞', 'Cinco pães e dois peixes'], ['🍕', 'Uma pizza'], ['🍎', 'Uma maçã']] },
        { q: 'Quantos cestos sobraram?', o: [['1️⃣2️⃣', 'Doze'], ['0️⃣', 'Nenhum'], ['1️⃣', 'Um']] },
        { q: 'Quem é o pão da vida?', o: [['✨', 'Jesus'], ['🧑‍🍳', 'O padeiro'], ['👦', 'O menino']] }
      ],
      big: [
        { q: 'A quem Jesus perguntou onde comprar pão?', o: ['Filipe', 'Pedro', 'João', 'Judas'], e: 'João 6:5.' },
        { q: 'Quem encontrou o menino?', o: ['André', 'Tomé', 'Mateus', 'Tiago'], e: 'João 6:8.' },
        { q: 'Quantos homens comeram?', o: ['Uns cinco mil', 'Cem', 'Doze', 'Um milhão'], e: 'João 6:10.' },
        { q: 'Que pão do Antigo Testamento Jesus lembrou?', o: ['O maná do deserto', 'O pão de Elias', 'O pão de Davi', 'Nenhum'], e: 'João 6:31-35.' }
      ],
      parents: 'É o único milagre contado nos quatro Evangelhos. Ponto central: Cristo, o pão da vida, e o pouco que entregamos nas suas mãos. Sugestão: fazer pão juntos e ler João 6:35. Leitura junto: João 6:1-14.'
    },
    {
      id: 'mi6', title: 'Jesus anda sobre as águas', ref: 'Mateus 14:22-33', icon: '🌊',
      recap: 'Na lição passada, Jesus alimentou cinco mil pessoas com cinco pães e dois peixes.',
      scenes: [
        { art: '✨⛰️🙏🌙', bg: 'noite', fx: 'estrelas', text: 'Depois de alimentar a multidão, Jesus mandou os discípulos entrarem no barco e irem na frente. Ele subiu sozinho ao monte para orar.', r: 'Mateus 14:22-23' },
        { art: '⛵🌊🌬️', bg: 'mar', fx: 'vento', text: 'O barco já estava longe da terra, e as ondas batiam forte, porque o vento era contrário. Os discípulos remavam com dificuldade.', r: 'Mateus 14:24' },
        { art: '✨🚶🌊🌙', bg: 'noite', fx: 'ondas', text: 'De madrugada, Jesus foi até eles, andando sobre o mar!', r: 'Mateus 14:25' },
        { art: '🧔😱❓', bg: 'noite', fx: 'ondas', text: 'Quando os discípulos o viram andando sobre a água, ficaram apavorados: "É um fantasma!" E gritaram de medo.', r: 'Mateus 14:26' },
        { art: '✨💬💛', bg: 'noite', fx: 'luz', text: 'Mas Jesus logo falou com eles: "Tenham coragem! Sou eu. Não tenham medo!"', r: 'Mateus 14:27' },
        { art: '🧔🦶🌊✨', bg: 'mar', fx: 'luz', text: 'Pedro disse: "Senhor, se és tu, manda que eu vá até aí, andando sobre as águas." Jesus disse: "Venha!" Pedro desceu do barco e começou a andar sobre a água em direção a Jesus!', r: 'Mateus 14:28-29' },
        { art: '🧔😨🌬️⬇️', bg: 'mar', fx: 'vento', text: 'Mas, quando reparou no vento forte, ficou com medo e começou a afundar. Gritou: "Senhor, salva-me!"', r: 'Mateus 14:30' },
        { art: '✨🤝🧔', bg: 'mar', fx: 'luz', text: 'Na mesma hora, Jesus estendeu a mão, segurou Pedro e disse: "Homem de pouca fé, por que você duvidou?"', r: 'Mateus 14:31' },
        { art: '⛵😌🙇✨', bg: 'aurora', fx: 'brilho', text: 'Quando entraram no barco, o vento parou. E os que estavam no barco adoraram Jesus, dizendo: "Verdadeiramente tu és o Filho de Deus!"', r: 'Mateus 14:32-33' }
      ],
      god: 'Deus está acima de tudo o que nos assusta. Quando gritamos por socorro, Ele estende a mão.',
      jesus: 'Jó disse que só Deus "anda sobre as ondas do mar" (Jó 9:8). E Jesus disse "Sou eu", que em grego é "Eu sou", o mesmo nome que Deus revelou a Moisés na sarça (Êxodo 3:14). Os discípulos entenderam e adoraram: "Tu és o Filho de Deus!" Quando afundamos, podemos orar como Pedro: "Senhor, salva-me!"',
      verse: { ref: 'Mateus 14:27', tx: 'Tende bom ânimo, sou eu, não temais.' },
      small: [
        { q: 'Sobre o que Jesus andou?', o: [['🌊', 'Sobre as águas'], ['🔥', 'Sobre o fogo'], ['☁️', 'Sobre as nuvens']] },
        { q: 'Quem tentou andar até Jesus?', o: [['🧔', 'Pedro'], ['👦', 'Um menino'], ['🐟', 'Um peixe']] },
        { q: 'O que Pedro gritou ao afundar?', o: [['🙏', '"Senhor, salva-me!"'], ['🏊', '"Vou nadar"'], ['😂', 'Riu']] }
      ],
      big: [
        { q: 'O que Jesus foi fazer no monte?', o: ['Orar', 'Dormir', 'Pescar', 'Comer'], e: 'Mateus 14:23.' },
        { q: 'O que os discípulos pensaram que era Jesus?', o: ['Um fantasma', 'Um peixe grande', 'Um anjo', 'Um barco'], e: 'Mateus 14:26.' },
        { q: 'Por que Pedro começou a afundar?', o: ['Reparou no vento e teve medo', 'Estava pesado', 'Jesus mandou', 'Escorregou'], e: 'Mateus 14:30.' },
        { q: 'O que os discípulos disseram no final?', o: ['"Verdadeiramente tu és o Filho de Deus"', '"Que susto"', '"Vamos voltar"', 'Nada'], e: 'Mateus 14:33.' }
      ],
      parents: 'Os discípulos falam em "fantasma" (14:26); explique que era só o medo deles. Ponto central: o "Eu sou" de Cristo, a fé que olha para Ele e a oração de socorro. Leitura junto: Mateus 14:22-33.'
    },
    {
      id: 'mi7', title: 'O cego de nascença', ref: 'João 9', icon: '👀',
      recap: 'Na lição passada, Jesus andou sobre as águas e salvou Pedro.',
      scenes: [
        { art: '✨👣🦯🛤️', bg: 'cidade', text: 'Jesus e os discípulos passaram por um homem que tinha nascido cego. Ele nunca tinha visto nada: nem o sol, nem as cores, nem o rosto da sua mãe.', r: 'João 9:1' },
        { art: '🧔❓✨', bg: 'cidade', text: 'Os discípulos perguntaram: "Mestre, quem pecou para ele nascer cego: ele ou os pais dele?" Eles achavam que toda doença era castigo por algum pecado.', r: 'João 9:2' },
        { art: '✨💬💡', bg: 'aurora', fx: 'luz', text: 'Jesus respondeu: "Nem ele nem os pais pecaram. Isso aconteceu para que as obras de Deus se manifestem nele. Enquanto estou no mundo, eu sou a luz do mundo."', r: 'João 9:3, 5' },
        { art: '✨🟫👀', bg: 'cidade', fx: 'luz', text: 'Então Jesus cuspiu no chão, fez um pouco de lama com a saliva, passou nos olhos do cego e disse: "Vá se lavar no tanque de Siloé."', r: 'João 9:6-7' },
        { art: '🧔💧👀✨', bg: 'mar', fx: 'brilho', text: 'O homem foi, se lavou e voltou enxergando! Pela primeira vez na vida, ele viu a luz!', r: 'João 9:7' },
        { art: '👥🤔🧔', bg: 'cidade', text: 'Os vizinhos ficaram confusos: "Não é aquele que ficava sentado pedindo esmola?" Uns diziam: "É ele!" Outros: "Não, é só parecido." Ele dizia: "Sou eu mesmo!"', r: 'João 9:8-9' },
        { art: '👨‍🏫😠🧔', bg: 'cidade', text: 'Os fariseus interrogaram o homem várias vezes. Ficaram bravos porque Jesus tinha curado num sábado, e não queriam acreditar.', r: 'João 9:13-16' },
        { art: '🧔💪💬', bg: 'cidade', fx: 'luz', text: 'O homem respondeu com coragem: "Se Ele é pecador, eu não sei. Uma coisa eu sei: eu era cego e agora vejo!" Por causa disso, o expulsaram.', r: 'João 9:25, 34' },
        { art: '✨🤝🧔🙇', bg: 'aurora', fx: 'luz', text: 'Jesus foi procurá-lo e perguntou: "Você crê no Filho do homem?" Ele disse: "Quem é, Senhor, para que eu creia nele?" Jesus disse: "Você o está vendo; é quem fala com você." Então o homem respondeu: "Eu creio, Senhor!" e se ajoelhou para adorá-lo.', r: 'João 9:35-38' }
      ],
      god: 'Deus pode usar até o sofrimento para mostrar a sua glória. Ele abre os olhos de quem não vê.',
      jesus: 'Isaías disse que o Messias ia "abrir os olhos dos cegos" (Isaías 35:5; 42:7). Jesus é a luz do mundo: Ele abriu os olhos do corpo e, depois, os olhos do coração daquele homem. Todos nascemos cegos para Deus por causa do pecado, e só Jesus pode nos fazer enxergar.',
      verse: { ref: 'João 9:25', tx: 'Uma coisa sei, e é que, havendo eu sido cego, agora vejo.' },
      small: [
        { q: 'Desde quando o homem era cego?', o: [['👶', 'Desde que nasceu'], ['📅', 'Desde ontem'], ['🤷', 'Nunca foi']] },
        { q: 'Onde ele foi se lavar?', o: [['💧', 'No tanque de Siloé'], ['🛁', 'Na banheira'], ['🌊', 'No mar']] },
        { q: 'Quem é a luz do mundo?', o: [['✨', 'Jesus'], ['☀️', 'O sol'], ['🔦', 'A lanterna']] }
      ],
      big: [
        { q: 'O que os discípulos perguntaram?', o: ['Quem pecou para ele nascer cego?', 'Onde ele mora?', 'Quanto ele ganha?', 'Nada'], e: 'João 9:2.' },
        { q: 'O que Jesus colocou nos olhos do homem?', o: ['Lama', 'Azeite', 'Água', 'Mel'], e: 'João 9:6.' },
        { q: 'Por que os fariseus ficaram bravos?', o: ['Jesus curou num sábado', 'O homem mentiu', 'O tanque era deles', 'Nada'], e: 'João 9:14-16.' },
        { q: 'O que o homem disse no fim?', o: ['"Creio, Senhor!"', '"Não acredito"', '"Vou embora"', '"Quero dinheiro"'], e: 'João 9:38.' }
      ],
      parents: 'Ponto central: nem toda doença é castigo por um pecado específico (9:3), e Cristo é a luz que dá visão física e espiritual. A ironia do capítulo é que os "que veem" (fariseus) ficam cegos (9:39-41). Leitura junto: João 9:1-11 e 35-38.'
    },
    {
      id: 'mi8', title: 'Os dez leprosos', ref: 'Lucas 17:11-19', icon: '🙏',
      recap: 'Na lição passada, Jesus deu visão ao homem que nasceu cego.',
      scenes: [
        { art: '✨🛤️🏘️', bg: 'deserto', text: 'Jesus estava a caminho de Jerusalém e passava entre Samaria e Galileia. Ao entrar numa aldeia...', r: 'Lucas 17:11-12' },
        { art: '🧔🧔🧔🧔🔟', bg: 'deserto', text: '...dez homens com lepra vieram ao seu encontro. Eles ficaram de longe, porque a lei mandava que os doentes de lepra vivessem separados de todos.', r: 'Lucas 17:12; Levítico 13:45-46' },
        { art: '🧔📣🙏', bg: 'deserto', text: 'Eles gritaram: "Jesus, Mestre, tem compaixão de nós!"', r: 'Lucas 17:13' },
        { art: '✨💬🏛️', bg: 'deserto', fx: 'luz', text: 'Jesus olhou para eles e disse: "Vão e mostrem-se aos sacerdotes." Os sacerdotes eram quem confirmava se alguém estava curado.', r: 'Lucas 17:14; Levítico 14:2' },
        { art: '🧔🚶✨🩹', bg: 'deserto', fx: 'brilho', text: 'E, enquanto iam pelo caminho, ficaram limpos! A pele de todos os dez estava curada!', r: 'Lucas 17:14' },
        { art: '🧔🔙🎶🙌', bg: 'deserto', fx: 'brilho', text: 'Um deles, quando viu que estava curado, voltou, louvando a Deus em voz alta.', r: 'Lucas 17:15' },
        { art: '🧔🙇✨', bg: 'deserto', fx: 'luz', text: 'Ele se jogou aos pés de Jesus, com o rosto no chão, agradecendo. E ele era samaritano!', r: 'Lucas 17:16' },
        { art: '✨❓9️⃣', bg: 'deserto', fx: 'luz', text: 'Jesus perguntou: "Não foram dez os curados? Onde estão os outros nove? Só este estrangeiro voltou para dar glória a Deus?"', r: 'Lucas 17:17-18' },
        { art: '✨💬🧔💛', bg: 'aurora', fx: 'coracoes', text: 'E disse a ele: "Levante-se e vá. A sua fé te salvou."', r: 'Lucas 17:19' }
      ],
      god: 'Deus é bondoso com todos, até com os que não agradecem. Ele se alegra com um coração grato.',
      jesus: 'A lepra separava as pessoas de todos. Jesus não tinha medo de chegar perto dos leprosos (Marcos 1:41). E, como Naamã, o sírio que foi curado no tempo de Eliseu (2 Reis 5), quem voltou para agradecer foi um estrangeiro. Os dez foram curados no corpo, mas só ele ouviu: "A sua fé te salvou."',
      verse: { ref: '1 Tessalonicenses 5:18', tx: 'Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.' },
      small: [
        { q: 'Quantos leprosos foram curados?', o: [['🔟', 'Dez'], ['1️⃣', 'Um'], ['💯', 'Cem']] },
        { q: 'Quantos voltaram para agradecer?', o: [['1️⃣', 'Só um'], ['🔟', 'Todos'], ['0️⃣', 'Nenhum']] },
        { q: 'O que devemos fazer quando Deus nos ajuda?', o: [['🙏', 'Agradecer'], ['😴', 'Esquecer'], ['😠', 'Reclamar']] }
      ],
      big: [
        { q: 'Por que os leprosos ficaram de longe?', o: ['A lei mandava os doentes viverem separados', 'Eram tímidos', 'Tinham pressa', 'Não gostavam de Jesus'], e: 'Lucas 17:12; Levítico 13:46.' },
        { q: 'Para onde Jesus mandou os leprosos?', o: ['Aos sacerdotes', 'Ao rio', 'Ao rei', 'Para casa'], e: 'Lucas 17:14.' },
        { q: 'De onde era o homem que voltou?', o: ['De Samaria', 'De Jerusalém', 'De Roma', 'Do Egito'], e: 'Lucas 17:16.' },
        { q: 'Que outro estrangeiro foi curado de lepra no Antigo Testamento?', o: ['Naamã, o sírio', 'Golias', 'Faraó', 'Jonas'], e: '2 Reis 5; Lucas 4:27.' }
      ],
      parents: 'Ponto central: a gratidão e a fé que salva, além da cura física. Sugestão: fazer uma "lista de agradecimentos" em família. Leitura junto: Lucas 17:11-19.'
    },
    {
      id: 'mi9', title: 'Lázaro, saia para fora!', ref: 'João 11:1-44', icon: '🪨',
      recap: 'Na lição passada, só um dos dez leprosos curados voltou para agradecer a Jesus.',
      scenes: [
        { art: '🧔👩👩🏠', bg: 'cidade', text: 'Em Betânia, perto de Jerusalém, moravam três irmãos que Jesus amava muito: Marta, Maria e Lázaro.', r: 'João 11:1, 5' },
        { art: '🧔🛏️🤒📨', bg: 'cidade', text: 'Lázaro ficou muito doente. As irmãs mandaram avisar Jesus: "Senhor, aquele que tu amas está doente."', r: 'João 11:3' },
        { art: '✨⏳🤔', bg: 'aurora', fx: 'luz', text: 'Jesus disse: "Essa doença não é para morte, mas para a glória de Deus." E, por estranho que pareça, ficou ainda mais dois dias onde estava.', r: 'João 11:4-6' },
        { art: '👩😢🪨', bg: 'cidade', text: 'Quando Jesus chegou, Lázaro já tinha morrido e estava no túmulo havia quatro dias. Marta foi encontrar Jesus: "Senhor, se o Senhor estivesse aqui, meu irmão não teria morrido."', r: 'João 11:17, 20-21' },
        { art: '✨💬♾️', bg: 'aurora', fx: 'luz', text: 'Jesus disse: "Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá. Você crê nisso?" Marta respondeu: "Sim, Senhor! Eu creio que tu és o Cristo, o Filho de Deus."', r: 'João 11:25-27' },
        { art: '👩😭✨😢', bg: 'cidade', text: 'Maria também veio chorando, e os amigos choravam com ela. Quando Jesus viu isso, comoveu-se profundamente. E Jesus chorou.', r: 'João 11:32-35' },
        { art: '✨🪨➡️', bg: 'cidade', fx: 'luz', text: 'Jesus foi até o túmulo, uma caverna com uma pedra na entrada, e disse: "Tirem a pedra." Marta disse: "Senhor, já faz quatro dias!" Jesus respondeu: "Eu não disse que, se você crer, vai ver a glória de Deus?"', r: 'João 11:38-40' },
        { art: '✨🙏📣🪨', bg: 'cidade', fx: 'luz', text: 'Tiraram a pedra. Jesus olhou para o céu e orou ao Pai. Depois gritou com voz forte: "Lázaro, venha para fora!"', r: 'João 11:41-43' },
        { art: '🧔🚶🎉😊', bg: 'aurora', fx: 'brilho', text: 'E Lázaro saiu, vivo, ainda enrolado nos panos do sepultamento! Jesus disse: "Desamarrem-no e deixem-no ir." E muitos creram em Jesus.', r: 'João 11:44-45' }
      ],
      god: 'Deus chora com quem chora, e tem poder sobre a morte. Às vezes Ele demora, mas nunca se atrasa.',
      jesus: 'Jesus chorou de verdade: Ele é homem e sente a nossa tristeza. E Jesus chamou um morto para fora do túmulo: Ele é Deus. Esse milagre aponta para a ressurreição do próprio Jesus, poucos dias depois, e para o dia em que todos os que estão nos túmulos vão ouvir a sua voz (João 5:28-29). A morte não tem a última palavra!',
      verse: { ref: 'João 11:25', tx: 'Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá.' },
      small: [
        { q: 'Quem eram as irmãs de Lázaro?', o: [['👩', 'Marta e Maria'], ['👸', 'Ester e Rute'], ['👵', 'Sara e Ana']] },
        { q: 'O que Jesus fez quando viu todos chorando?', o: [['😢', 'Chorou também'], ['😂', 'Riu'], ['😴', 'Dormiu']] },
        { q: 'O que Lázaro fez quando Jesus chamou?', o: [['🚶', 'Saiu do túmulo, vivo'], ['😴', 'Continuou dormindo'], ['🙈', 'Se escondeu']] }
      ],
      big: [
        { q: 'Em que cidade moravam os três irmãos?', o: ['Betânia', 'Nazaré', 'Belém', 'Caná'], e: 'João 11:1.' },
        { q: 'Há quantos dias Lázaro estava no túmulo?', o: ['Quatro', 'Um', 'Três', 'Sete'], e: 'João 11:17.' },
        { q: 'O que Jesus disse a Marta?', o: ['"Eu sou a ressurreição e a vida"', '"Não posso fazer nada"', '"Chegamos tarde"', '"Vá embora"'], e: 'João 11:25.' },
        { q: 'Qual é o menor versículo da Bíblia, deste capítulo?', o: ['"Jesus chorou"', '"Deus é amor"', '"Orai sempre"', '"Alegrai-vos"'], e: 'João 11:35.' }
      ],
      parents: 'A lição trata de morte e luto; foi contada com esperança. "Jesus chorou" (11:35) mostra que a tristeza não é falta de fé. O mau cheiro (11:39) foi resumido como "já faz quatro dias". A conspiração que segue (11:45-53) prepara a cruz. Leitura junto: João 11:17-44.'
    },
    {
      id: 'mi10', title: 'Bartimeu, o cego que gritou', ref: 'Marcos 10:46-52', icon: '📣',
      recap: 'Na lição passada, Jesus chamou Lázaro para fora do túmulo.',
      scenes: [
        { art: '🏘️🌴👥✨', bg: 'cidade', text: 'Jesus estava saindo da cidade de Jericó com os discípulos e uma grande multidão.', r: 'Marcos 10:46' },
        { art: '🧔🦯🛤️🪙', bg: 'deserto', text: 'Na beira da estrada estava sentado um cego chamado Bartimeu, pedindo esmola.', r: 'Marcos 10:46' },
        { art: '🧔👂📣', bg: 'deserto', text: 'Quando ouviu que era Jesus de Nazaré que estava passando, começou a gritar: "Jesus, Filho de Davi, tem misericórdia de mim!"', r: 'Marcos 10:47' },
        { art: '👥🤫😠', bg: 'deserto', text: 'Muitos o repreendiam, mandando que ficasse calado.', r: 'Marcos 10:48' },
        { art: '🧔📣📣📣', bg: 'deserto', fx: 'vento', text: 'Mas ele gritava ainda mais alto: "Filho de Davi, tem misericórdia de mim!"', r: 'Marcos 10:48' },
        { art: '✨✋🛑', bg: 'deserto', fx: 'luz', text: 'Jesus parou e disse: "Chamem-no." Então chamaram o cego: "Coragem! Levante-se, Ele está te chamando!"', r: 'Marcos 10:49' },
        { art: '🧔🧥💨🏃', bg: 'deserto', fx: 'brilho', text: 'Bartimeu jogou fora a sua capa, deu um pulo e foi até Jesus!', r: 'Marcos 10:50' },
        { art: '✨❓🧔', bg: 'deserto', fx: 'luz', text: 'Jesus perguntou: "O que você quer que eu faça por você?" O cego respondeu: "Mestre, que eu volte a ver!"', r: 'Marcos 10:51' },
        { art: '🧔👀😊👣✨', bg: 'aurora', fx: 'brilho', text: 'Jesus disse: "Vá, a sua fé te salvou." Na mesma hora, ele passou a enxergar e foi seguindo Jesus pelo caminho!', r: 'Marcos 10:52' }
      ],
      god: 'Deus ouve quem clama por misericórdia, mesmo quando os outros mandam calar.',
      jesus: 'Bartimeu era cego, mas "enxergou" algo que muitos não viam: chamou Jesus de "Filho de Davi", o Rei prometido. Jesus estava indo para Jerusalém para morrer, e mesmo assim parou por um mendigo. Quando é curado, Bartimeu não volta para a estrada: segue Jesus pelo caminho. É isso que Jesus faz conosco.',
      verse: { ref: 'Marcos 10:47', tx: 'Jesus, filho de Davi, tem misericórdia de mim.' },
      small: [
        { q: 'O que Bartimeu fazia na estrada?', o: [['🪙', 'Pedia esmola'], ['🏃', 'Corria'], ['🎣', 'Pescava']] },
        { q: 'O que ele fez quando mandaram ficar quieto?', o: [['📣', 'Gritou ainda mais'], ['🤐', 'Ficou calado'], ['😴', 'Dormiu']] },
        { q: 'O que ele fez depois de enxergar?', o: [['👣', 'Seguiu Jesus'], ['🏠', 'Foi para casa'], ['🛤️', 'Voltou a pedir']] }
      ],
      big: [
        { q: 'De que cidade Jesus estava saindo?', o: ['Jericó', 'Nazaré', 'Jerusalém', 'Caná'], e: 'Marcos 10:46.' },
        { q: 'Como Bartimeu chamou Jesus?', o: ['"Filho de Davi"', '"Rei de Roma"', '"Profeta Elias"', '"Senhor rico"'], e: 'Marcos 10:47.' },
        { q: 'O que Bartimeu jogou fora?', o: ['A sua capa', 'O seu dinheiro', 'O seu bastão', 'Nada'], e: 'Marcos 10:50.' },
        { q: 'O que Jesus perguntou a ele?', o: ['"O que você quer que eu faça por você?"', '"Quem é você?"', '"Por que gritou?"', '"Onde mora?"'], e: 'Marcos 10:51.' }
      ],
      parents: 'Ponto central: a oração persistente por misericórdia e o reconhecimento de Jesus como o Filho de Davi. A oração "Jesus, Filho de Davi, tem misericórdia de mim" é ótima para ensinar às crianças. Leitura junto: Marcos 10:46-52.'
    },
    {
      id: 'mi11', title: 'Zaqueu, desce depressa!', ref: 'Lucas 19:1-10', icon: '🌳',
      recap: 'Na lição passada, Jesus curou o cego Bartimeu, que passou a segui-lo.',
      scenes: [
        { art: '🧔💰🏘️', bg: 'cidade', text: 'Em Jericó morava um homem chamado Zaqueu. Ele era chefe dos cobradores de impostos e muito rico. Os cobradores muitas vezes cobravam mais do que deviam e eram odiados pelo povo.', r: 'Lucas 19:1-2' },
        { art: '🧔🤏👥👥', bg: 'cidade', text: 'Zaqueu queria ver quem era Jesus, mas não conseguia, porque a multidão era grande e ele era baixinho.', r: 'Lucas 19:3' },
        { art: '🧔🏃🌳⬆️', bg: 'jardim', text: 'Então ele correu na frente e subiu numa árvore, um sicômoro, para ver Jesus passar por ali.', r: 'Lucas 19:4' },
        { art: '✨👀🌳', bg: 'jardim', fx: 'luz', text: 'Quando Jesus chegou àquele lugar, olhou para cima e disse: "Zaqueu, desça depressa, porque hoje eu preciso ficar na sua casa!" Jesus sabia o nome dele!', r: 'Lucas 19:5' },
        { art: '🧔⬇️😊🏠', bg: 'cidade', fx: 'coracoes', text: 'Zaqueu desceu correndo e recebeu Jesus com alegria na sua casa.', r: 'Lucas 19:6' },
        { art: '👥😠👉', bg: 'cidade', text: 'Todos que viram começaram a reclamar: "Ele foi se hospedar na casa de um pecador!"', r: 'Lucas 19:7' },
        { art: '🧔💰➗🤲', bg: 'cidade', fx: 'brilho', text: 'Mas Zaqueu se levantou e disse: "Senhor, vou dar a metade dos meus bens aos pobres. E, se roubei alguém, vou devolver quatro vezes mais!" O coração dele tinha mudado!', r: 'Lucas 19:8' },
        { art: '✨💬🏠💛', bg: 'aurora', fx: 'luz', text: 'Jesus disse: "Hoje a salvação entrou nesta casa! Porque o Filho do homem veio buscar e salvar o que se havia perdido."', r: 'Lucas 19:9-10' }
      ],
      god: 'Deus conhece cada um pelo nome. Ele busca os perdidos, e o seu amor muda o coração.',
      jesus: 'Jesus foi até Zaqueu antes de Zaqueu mudar: o amor de Jesus veio primeiro, e a mudança veio depois. A frase "o Filho do homem veio buscar e salvar o que se havia perdido" resume toda a missão de Jesus. Ele é o Bom Pastor que vai atrás da ovelha perdida, até em cima de uma árvore!',
      verse: { ref: 'Lucas 19:10', tx: 'Porque o Filho do homem veio buscar e salvar o que se havia perdido.' },
      small: [
        { q: 'Onde Zaqueu subiu?', o: [['🌳', 'Numa árvore'], ['🏠', 'No telhado'], ['🐪', 'Num camelo']] },
        { q: 'Por que ele subiu?', o: [['🤏', 'Era baixinho'], ['🍎', 'Queria frutas'], ['🐦', 'Viu um ninho']] },
        { q: 'Jesus sabia o nome dele?', o: [['✅', 'Sim!'], ['❌', 'Não'], ['🤷', 'Adivinhou']] }
      ],
      big: [
        { q: 'Qual era o trabalho de Zaqueu?', o: ['Chefe dos cobradores de impostos', 'Pescador', 'Sacerdote', 'Pastor'], e: 'Lucas 19:2.' },
        { q: 'O que o povo reclamou?', o: ['Que Jesus foi à casa de um pecador', 'Que Jesus estava atrasado', 'Que a árvore caiu', 'Nada'], e: 'Lucas 19:7.' },
        { q: 'Quanto Zaqueu prometeu devolver a quem roubou?', o: ['Quatro vezes mais', 'O mesmo valor', 'Nada', 'Metade'], e: 'Lucas 19:8.' },
        { q: 'Para que o Filho do homem veio?', o: ['Buscar e salvar o que se havia perdido', 'Ficar rico', 'Ser rei de Jericó', 'Cobrar impostos'], e: 'Lucas 19:10.' }
      ],
      parents: 'Ponto central: a graça vem antes da mudança, e o arrependimento verdadeiro aparece em atitudes (restituição, Êxodo 22:1). Leitura junto: Lucas 19:1-10.'
    },
    {
      id: 'mi12', title: 'A glória no monte: a transfiguração', ref: 'Mateus 17:1-9', icon: '☀️',
      recap: 'Na lição passada, Jesus chamou Zaqueu e a salvação entrou na sua casa.',
      scenes: [
        { art: '✨🧔🧔🧔⛰️', bg: 'monte', text: 'Seis dias depois, Jesus levou Pedro, Tiago e João, sozinhos, para um monte alto.', r: 'Mateus 17:1' },
        { art: '☀️✨⛰️', bg: 'monte', fx: 'luz', text: 'Lá, Jesus foi transfigurado diante deles: o seu rosto brilhou como o sol, e as suas roupas ficaram brancas como a luz! Os discípulos viram um pouquinho da glória de Jesus.', r: 'Mateus 17:2' },
        { art: '🧔🧔✨', bg: 'monte', fx: 'luz', text: 'De repente, apareceram Moisés e Elias conversando com Jesus! Moisés representava a Lei, e Elias, os profetas. Eles falavam da morte que Jesus ia enfrentar em Jerusalém.', r: 'Mateus 17:3; Lucas 9:30-31' },
        { art: '🧔💬⛺⛺⛺', bg: 'monte', text: 'Pedro, sem saber bem o que dizer, falou: "Senhor, que bom estarmos aqui! Se quiseres, vou montar três tendas: para ti, para Moisés e para Elias."', r: 'Mateus 17:4; Marcos 9:6' },
        { art: '☁️✨📣', bg: 'monte', fx: 'luz', text: 'Enquanto ele ainda falava, uma nuvem luminosa os cobriu, e uma voz disse da nuvem: "Este é o meu Filho amado, em quem me comprazo. Escutem-no!"', r: 'Mateus 17:5' },
        { art: '🧔🧔🧔🙇😨', bg: 'monte', text: 'Ao ouvirem isso, os discípulos caíram com o rosto em terra, cheios de medo.', r: 'Mateus 17:6' },
        { art: '✨🤝🧔', bg: 'monte', fx: 'luz', text: 'Jesus chegou perto, tocou neles e disse: "Levantem-se e não tenham medo." Quando olharam, não viram mais ninguém, a não ser Jesus.', r: 'Mateus 17:7-8' },
        { art: '✨🛤️⬇️⏳', bg: 'aurora', fx: 'brilho', text: 'Descendo do monte, Jesus disse: "Não contem a ninguém o que viram, até que o Filho do homem ressuscite dos mortos." A glória que viram era uma prévia do que viria depois da cruz.', r: 'Mateus 17:9' }
      ],
      god: 'O Pai quer que escutemos o seu Filho. A glória de Deus é tão grande que nos faz cair de joelhos.',
      jesus: 'Moisés viu as costas da glória de Deus no Sinai (Êxodo 33); agora, num monte, Moisés e Elias viam a glória no rosto de Jesus. Toda a Lei e os Profetas apontam para Ele, e no fim "não viram mais ninguém, a não ser Jesus". É Ele que devemos escutar. Pedro nunca esqueceu: "Nós fomos testemunhas oculares da sua majestade" (2 Pedro 1:16-18).',
      verse: { ref: 'Mateus 17:5', tx: 'Este é o meu amado Filho, em quem me comprazo; escutai-o.' },
      small: [
        { q: 'Como ficou o rosto de Jesus?', o: [['☀️', 'Brilhando como o sol'], ['🌑', 'Escuro'], ['😴', 'Com sono']] },
        { q: 'Quem apareceu conversando com Jesus?', o: [['🧔', 'Moisés e Elias'], ['👑', 'Davi e Salomão'], ['🦁', 'Dois leões']] },
        { q: 'O que a voz do céu disse para fazer?', o: [['👂', 'Escutar Jesus'], ['🏃', 'Correr'], ['😴', 'Dormir']] }
      ],
      big: [
        { q: 'Quais discípulos foram ao monte?', o: ['Pedro, Tiago e João', 'Todos os doze', 'Judas e Tomé', 'André e Filipe'], e: 'Mateus 17:1.' },
        { q: 'Sobre o que Moisés e Elias conversavam com Jesus?', o: ['A morte de Jesus em Jerusalém', 'O tempo', 'A pescaria', 'Nada'], e: 'Lucas 9:31.' },
        { q: 'O que Pedro quis construir?', o: ['Três tendas', 'Um templo', 'Uma casa', 'Um barco'], e: 'Mateus 17:4.' },
        { q: 'Quando os discípulos podiam contar o que viram?', o: ['Depois da ressurreição', 'Na hora', 'Nunca', 'No dia seguinte'], e: 'Mateus 17:9.' }
      ],
      parents: 'Encerramento do arco dos milagres. A transfiguração é mostrada só com luz e sol, sem imagem de Jesus. Ponto central: a glória divina de Cristo, testemunhada pela Lei (Moisés), pelos Profetas (Elias) e pelo Pai. Leitura junto: Mateus 17:1-9.'
    }
  ]
};
