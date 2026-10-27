import { DiaryEntry } from '../types/diary';

// Adiciona o base ('/' no dev local ou '/diario-marie-cursive/' no deploy)
const asset = (file: string) => `${import.meta.env.BASE_URL}assets/aistudio/${file}`;

// Real photo assets provided by Gabriel's family
export const REAL_BERRANTE = asset('image_c50cd66e.png');
export const REAL_MARIE_PORTRAIT = asset('WhatsApp_Image_2026-10-27_at_15.12.34__1__77c9ed81.jpeg');
export const REAL_CHRISTMAS_TREE = asset('WhatsApp_Image_2026-10-27_at_15.12.32_cede95f8.jpeg');
export const REAL_DOG_RAVENA = asset('WhatsApp_Image_2026-10-27_at_15.12.33__1__4797b1fe.jpeg');
export const REAL_MINECRAFT_LANTERN = asset('WhatsApp_Image_2026-10-27_at_15.12.33__2__74a16e5f.jpeg');
export const REAL_HOMEWORK = asset('WhatsApp_Image_2026-10-27_at_15.12.33__3__c69ca0a7.jpeg');
export const REAL_DOG_ALT = asset('WhatsApp_Image_2026-10-27_at_15.12.33_dd85e389.jpeg');
export const REAL_SLEEPING = asset('WhatsApp_Image_2026-10-27_at_15.12.34_ed2a562e.jpeg');
export const REAL_WALK_WITH_DAD = asset('WhatsApp_Image_2026-10-27_at_15.12.35__1__9b8ff0f3.jpeg');
export const REAL_SWITCH_CLOSEUP = asset('WhatsApp_Image_2026-10-27_at_15.12.35__2__6002ea4a.jpeg');
export const REAL_ESFIHAS = asset('WhatsApp_Image_2026-10-27_at_15.12.35__3__d80750d3.jpeg');
export const REAL_WAFFLE = asset('WhatsApp_Image_2026-10-27_at_15.12.35_ceb1ea72.jpeg');
export const REAL_CAT_FULI = asset('WhatsApp_Image_2026-10-27_at_15.12.36_76088d3b.jpeg');
export const REAL_SWITCH_BED = asset('WhatsApp_Image_2026-10-27_at_15.12.36__1__8a9237d3.jpeg');
export const MARIE_AVATAR_IMAGE = REAL_MARIE_PORTRAIT;
export const MARIE_COVER_IMAGE = REAL_HOMEWORK;

export const STUDENT_INFO = {
  name: 'Gabriel Fontolan',
  grade: '2° ano B',
  age: 7,
  schoolGrade: '2° ano B',
  projectTitle: 'Diário de Aventuras com a Marie Cursive',
  mascotName: 'Marie Cursive',
  colors: {
    primaryCrimson: '#820101', // Boina e cachecol da Marie
    secondaryTeal: '#02A2BB',  // Listras da blusa da Marie
    white: '#FFFFFF',
    cream: '#FFFDF8',
  },
};

export const INITIAL_ENTRIES: DiaryEntry[] = [
  {
    id: 1,
    dayNumber: 1,
    title: 'Jogando Subnautica: Below Zero',
    date: '10 de Março',
    weekday: 'Segunda-feira',
    location: 'Meu Quarto na Cama',
    weather: 'sunny',
    mood: 'super',
    photoUrl: REAL_SWITCH_BED,
    secondaryPhotoUrl: REAL_SWITCH_CLOSEUP,
    photoCaption: 'Depois do almoço a Marie jogou Subnautica below zero comigo.',
    secondaryCaption: 'A tela do videogame mostrando o fundo do mar.',
    story: 'Depois do almoço, peguei meu Nintendo Switch e deitei na cama com a Marie Cursive. Jogamos Subnautica: Below Zero juntos! Mostrei para ela os peixes brilhantes, as baleias submarinas e a água gelada. A Marie sentou do meu ladinho e foi a melhor copiloto de todas.',
    marieSecret: 'A Marie disse que no fundo do mar a boina dela quase virou touca de mergulhador!',
    activityTag: 'Videogame & Switch',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-1', emoji: '🎮', name: 'Switch', x: 82, y: 14 },
      { id: 'stk-2', emoji: '🐟', name: 'Peixe', x: 16, y: 80 },
    ],
  },
  {
    id: 2,
    dayNumber: 2,
    title: 'Conhecendo Meus Bichinhos',
    date: '11 de Março',
    weekday: 'Terça-feira',
    location: 'Meu Quarto e Sala',
    weather: 'sunny',
    mood: 'loved',
    photoUrl: REAL_CAT_FULI,
    secondaryPhotoUrl: REAL_DOG_RAVENA,
    photoCaption: 'Ela conheceu meu gato Fuli e a minha cachorra Ravena',
    secondaryCaption: 'Apresentando a Marie para a Ravena.',
    story: 'Apresentei a Marie para os meus bichinhos de estimação! O meu gato Fuli, que é siamês e tem olhos azuis lindos, veio cheirar a Marie bem pertinho na cama. Depois a minha cachorra Ravena, toda pretinha e carinhosa, veio brincar e dar lambeijos!',
    marieSecret: 'O Fuli ronronou bem baixinho e a Ravena abanou o rabo de tanta alegria ao conhecer a Marie!',
    activityTag: 'Fuli & Ravena',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-3', emoji: '🐱', name: 'Fuli', x: 80, y: 15 },
      { id: 'stk-4', emoji: '🐶', name: 'Ravena', x: 15, y: 82 },
    ],
  },
  {
    id: 3,
    dayNumber: 3,
    title: 'Hora da Esfiha de Queijo',
    date: '12 de Março',
    weekday: 'Quarta-feira',
    location: 'Mesa de Jantar',
    weather: 'stars',
    mood: 'happy',
    photoUrl: REAL_ESFIHAS,
    photoCaption: 'Comemos esfiha de queijo',
    story: 'Hoje chegou uma caixa bem quentinha de esfihas abertas de queijo e de carne! Sentei na mesa com a Marie. As esfihas de queijo estavam muito gostosas e comi até a barriga ficar cheinha.',
    marieSecret: 'A Marie sentiu o cheirinho gostoso de esfiha assada e quase lambeu os beiços de pano!',
    activityTag: 'Comida Gostosa',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-5', emoji: '🧀', name: 'Queijo', x: 82, y: 12 },
      { id: 'stk-6', emoji: '😋', name: 'Hummm', x: 14, y: 82 },
    ],
  },
  {
    id: 4,
    dayNumber: 4,
    title: 'A Tarefa de Casa',
    date: '13 de Março',
    weekday: 'Quinta-feira',
    location: 'Mesa de Estudos',
    weather: 'sunny',
    mood: 'creative',
    photoUrl: REAL_HOMEWORK,
    photoCaption: 'Fizemos a tarefa de casa',
    story: 'Sentamos na mesa de estudos para fazer o dever de casa! Abri meu caderno e peguei meu lápis. A Marie sentou de pernas cruzadas acompanhando cada linha da lição para eu não errar a caligrafia cursiva.',
    marieSecret: 'A Marie me deu nota dez com estrelinha pelo capricho no caderno!',
    activityTag: 'Lição & Caderno',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-7', emoji: '📚', name: 'Caderno', x: 82, y: 12 },
      { id: 'stk-8', emoji: '✏️', name: 'Lápis', x: 14, y: 80 },
    ],
  },
  {
    id: 5,
    dayNumber: 5,
    title: 'Passeio com a Ravena',
    date: '14 de Março',
    weekday: 'Sexta-feira',
    location: 'Rua',
    weather: 'cloudy',
    mood: 'adventurous',
    photoUrl: REAL_WALK_WITH_DAD,
    photoCaption: 'Levamos a Ravena para passear',
    story: 'Coloquei meu moletom e saímos para passear na rua com o papai e com a Ravena, Levei a Marie no colo para ela respirar um ar puro.',
    marieSecret: 'A Marie achou que a Ravena é uma cachorrinha muito esperta e protetora!',
    activityTag: 'Passeio na Rua',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-9', emoji: '🐕', name: 'Ravena', x: 78, y: 14 },
      { id: 'stk-10', emoji: '🚶‍♂️', name: 'Caminhada', x: 15, y: 82 },
    ],
  },
  {
    id: 6,
    dayNumber: 6,
    title: 'Lanche da Tarde com Waffles',
    date: '15 de Março',
    weekday: 'Sábado à Tarde',
    location: 'Mesa da Copa',
    weather: 'sunny',
    mood: 'happy',
    photoUrl: REAL_WAFFLE,
    photoCaption: 'Comemos Waffles',
    story: 'No lanche da tarde teve waffle quentinho e crocante! A Marie sentou na mesa com meus outros bichinhos de pelucia para participar da festinha de lanche.',
    marieSecret: 'A Marie adorou os quadradinhos crocantes do waffle e deu nota 10!',
    activityTag: 'Lanche & Pelúcias',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-11', emoji: '🧇', name: 'Waffle', x: 80, y: 12 },
      { id: 'stk-12', emoji: '🧸', name: 'Pelúcia', x: 15, y: 82 },
    ],
  },
  {
    id: 7,
    dayNumber: 7,
    title: 'O Som do Berrante',
    date: '15 de Março',
    weekday: 'Sábado à Tarde',
    location: 'Sala de Estar',
    weather: 'sunny',
    mood: 'creative',
    photoUrl: REAL_BERRANTE,
    photoCaption: 'A Marie tocou berrante comigo',
    story: 'Peguei um berrante grandão e mostrei para a Marie como se faz som! Segurei pertinho da boquinha dela. O som do berrante ecoou pela casa inteira!',
    marieSecret: 'A Marie disse que o berrante quase tinha o tamanho dela, mas ela adorou tocar!',
    activityTag: 'Música & Berrante',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-13', emoji: '🎺', name: 'Berrante', x: 82, y: 14 },
      { id: 'stk-14', emoji: '🤠', name: 'Boiadeiro', x: 14, y: 82 },
    ],
  },
  {
    id: 8,
    dayNumber: 8,
    title: 'Decoração de Natal',
    date: '16 de Março',
    weekday: 'Domingo',
    location: 'Sala',
    weather: 'rainbow',
    mood: 'loved',
    photoUrl: REAL_CHRISTMAS_TREE,
    photoCaption: 'Decoramos a casa para o natal',
    story: 'Decoramos a árvore de Natal cheia de bolinhas vermelhas! Coloquei um gorrinho vermelho de Papai Noel na cabeça da Marie para ela ficar no clima.',
    marieSecret: 'A Marie ficou super feliz com o gorro de Papai Noel combinando com a árvore!',
    activityTag: 'Espírito Natalino',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-15', emoji: '🎄', name: 'Árvore', x: 84, y: 12 },
      { id: 'stk-16', emoji: '🎅', name: 'Gorro', x: 14, y: 82 },
    ],
  },
  {
    id: 9,
    dayNumber: 9,
    title: 'A Costura no Pé da Marie',
    date: '16 de Março',
    weekday: 'Domingo à Tarde',
    location: 'Quarto com a Mamãe',
    weather: 'sunny',
    mood: 'loved',
    photoUrl: REAL_MARIE_PORTRAIT,
    photoCaption: 'A minha mãe costurou o pé da Marie',
    story: 'O pezinho da Marie estava precisando de um remendo carinhoso. A minha mãe pegou a agulha e o carretel de linha preta e costurou o pezinho dela com todo o amor do mundo para deixar ela novinha!',
    marieSecret: 'A Marie não sentiu dor nenhuma e agradeceu à mamãe com um sorriso de pano lindo!',
    activityTag: 'Cuidado & Costura',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-17', emoji: '🧵', name: 'Linha', x: 80, y: 14 },
      { id: 'stk-18', emoji: '❤️', name: 'Carinho', x: 14, y: 82 },
    ],
  },
  {
    id: 10,
    dayNumber: 10,
    title: 'Soninho dos Justos',
    date: '16 de Março',
    weekday: 'Domingo à Noite',
    location: 'Minha Cama com Travesseiro Pac-Man',
    weather: 'stars',
    mood: 'loved',
    photoUrl: REAL_SLEEPING,
    photoCaption: 'e Fomos Dormir',
    story: 'Depois de um dia cheio de diversão, brincadeiras, comida e histórias, deitamos debaixo do cobertor azul quentinho com o travesseiro do Pac-Man. A Marie se aconchegou do meu lado e fomos dormir!',
    marieSecret: 'A Marie dormiu a noite inteira bem quentinha sonhando com todas as aventuras!',
    activityTag: 'Hora de Dormir',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-19', emoji: '💤', name: 'Zzz', x: 82, y: 12 },
      { id: 'stk-20', emoji: '⭐', name: 'Estrela', x: 14, y: 82 },
    ],
  },
  {
    id: 11,
    dayNumber: 11,
    title: 'Despedida Especial e Agradecimento',
    date: '17 de Março',
    weekday: 'Segunda-feira',
    location: 'Quarto com a Lanterna',
    weather: 'rainbow',
    mood: 'super',
    photoUrl: REAL_MINECRAFT_LANTERN,
    photoCaption: 'Foi muito legal ficar com a Marie .. Abraços Gabriel',
    story: 'Acendemos a lanterna de blocos estilo Minecraft para comemorar nossa amizade! Foram dias inesquecíveis e vou guardar cada momento no meu coração e no meu diário!',
    marieSecret: 'A Marie disse: "Gabriel, você foi um dos melhores guardiões que eu já tive! Obrigado, amigo!" ❤️',
    activityTag: 'Despedida',
    isCustomPhoto: true,
    stickers: [
      { id: 'stk-21', emoji: '👍', name: 'Joinha', x: 82, y: 12 },
      { id: 'stk-22', emoji: '💡', name: 'Lanterna', x: 14, y: 82 },
      { id: 'stk-23', emoji: '🏆', name: 'Troféu', x: 82, y: 75 },
    ],
  },
];
