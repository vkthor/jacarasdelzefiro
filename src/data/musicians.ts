// Formación de la web y biografías (borrador: cada músico debe dar su visto bueno).
import paloma from '../assets/retratos/paloma-friedhoff.jpg';
import bruno from '../assets/retratos/bruno-campelo.jpg';
import ariel from '../assets/retratos/ariel-hernandez.jpg';
import victor from '../assets/retratos/victor-cruz.jpg';
import jorge from '../assets/retratos/jorge-enrique-garcia.jpg';
import jc from '../assets/retratos/juan-carlos-de-mulder.jpg';

export const musicians = [
  {
    id: 'paloma-friedhoff',
    name: 'Paloma Friedhoff',
    role: { es: 'Soprano y percusión', en: 'Soprano and percussion' },
    photo: paloma,
    credit: 'Paloma Friedhoff',
    bio: {
      es: [
        'Soprano hispanoestadounidense nacida en Amberes y criada en Madrid en una familia de músicos. Se formó en la Escuela Superior de Canto de Madrid, en la Hochschule für Musik und Theater de Múnich con Edith Wiens y, con beca de «la Caixa», en la Universidad de Indiana con Sylvia McNair. Ha ganado premios en concursos de Madrid, Barcelona, Lisboa, Washington y St. Louis.',
        'En música antigua ha estrenado y grabado los papeles de Bubaste en *La Nitteti* de Conforto, con Nereydas, y de Sofonisba en *Scipione in Spagna* de Alessandro Scarlatti, con La Ritirata, y ha cantado en el Festival Internacional de Arte Sacro, la Semana de Música Religiosa de Cuenca y Universo Barroco. Debutó en el Teatro Real en 2017 y ha sido solista con la Orquesta y Coro Nacionales de España y con la Film Symphony Orchestra.',
      ],
      en: [
        'A Spanish-American soprano, born in Antwerp and raised in Madrid in a family of musicians. She trained at the Escuela Superior de Canto in Madrid, at the Hochschule für Musik und Theater in Munich with Edith Wiens and, as a “la Caixa” scholar, at Indiana University with Sylvia McNair. She has won prizes at competitions in Madrid, Barcelona, Lisbon, Washington DC and St. Louis.',
        'In early music she has premiered and recorded the roles of Bubaste in Conforto’s *La Nitteti* with Nereydas and Sofonisba in Alessandro Scarlatti’s *Scipione in Spagna* with La Ritirata, and has sung at the Madrid International Festival of Sacred Art, the Cuenca Religious Music Week and Universo Barroco. She made her Teatro Real debut in 2017 and has appeared as a soloist with the Spanish National Orchestra and Choir and the Film Symphony Orchestra.',
      ],
    },
  },
  {
    id: 'bruno-campelo',
    name: 'Bruno Campelo',
    role: { es: 'Alto y percusión', en: 'Alto and percussion' },
    photo: bruno,
    credit: 'José Cáceres',
    bio: {
      es: [
        'Contratenor nacido en Cádiz en 2001. Empezó a cantar en la Escolanía Juvenalia de Jerez mientras estudiaba piano, y se formó con Jorge Enrique García Ortega y con Romina Basso en el Conservatorio Luigi Cherubini de Florencia; ha recibido clases magistrales de Eduardo López Banzo y de Carlos Mena. En 2016 ganó el primer premio del Concurso de Jóvenes Intérpretes «Ciudad de Sanlúcar».',
        'Es miembro del conjunto vocal Altvs y canta con Al Ayre Español, Accademia del Piacere, el Conjunto Vocal Virelay, La Real Capilla, la Orquesta Barroca de Cádiz y Capella Prolationum–La Danserye, a las órdenes de Fahmi Alqhai, López Banzo o Jean Tubéry. Ha actuado en el Festival de Música Española de Cádiz, el Festival de Úbeda y Baeza, Palencia Antigua y la UIMP de Santander, y ha grabado con La Real Capilla la música latina de Antonio Juanas.',
      ],
      en: [
        'A countertenor born in Cádiz in 2001. He began singing in the Escolanía Juvenalia in Jerez while studying piano, and trained with Jorge Enrique García Ortega and with Romina Basso at the Conservatorio Luigi Cherubini in Florence; he has attended masterclasses with Eduardo López Banzo and Carlos Mena. In 2016 he won first prize at the “Ciudad de Sanlúcar” Young Performers Competition.',
        'He is a member of the vocal ensemble Altvs and sings with Al Ayre Español, Accademia del Piacere, Conjunto Vocal Virelay, La Real Capilla, the Orquesta Barroca de Cádiz and Capella Prolationum–La Danserye, under Fahmi Alqhai, López Banzo and Jean Tubéry. He has performed at the Cádiz Festival of Spanish Music, the Úbeda and Baeza Early Music Festival, Palencia Antigua and the UIMP in Santander, and has recorded the Latin music of Antonio Juanas with La Real Capilla.',
      ],
    },
  },
  {
    id: 'ariel-hernandez',
    name: 'Ariel Hernández',
    role: { es: 'Tenor y percusión', en: 'Tenor and percussion' },
    photo: ariel,
    credit: 'Adolfo Añino',
    bio: {
      es: [
        'Tenor cubano afincado en España desde 2004. Licenciado en Música por el Instituto Superior de Arte de La Habana, se formó como percusionista y cantante y fue tenor solista de la Schola Cantorum Coralina, con la que hizo giras y grabaciones.',
        'Ha formado parte del Festival-Ensemble Stuttgart de Helmuth Rilling y de la Europa Chor Akademie, y canta con agrupaciones como la Capilla Real de Madrid —con la que abordó la integral de las cantatas de Bach—, Musica Ficta, Accademia del Piacere, Los Músicos de Su Alteza y Capilla Peñaflorida. Ha trabajado con Ton Koopman, que lo invitó a cantar con la Amsterdam Baroque Orchestra, Kent Nagano, Federico Maria Sardelli, Andreas Spering y Paul Goodwin. Es miembro del Coro Nacional de España desde 2009.',
      ],
      en: [
        'A Cuban tenor based in Spain since 2004. He graduated in Music from the Instituto Superior de Arte in Havana, trained as both percussionist and singer, and was tenor soloist of the Schola Cantorum Coralina, with which he toured and recorded.',
        'He has been a member of Helmuth Rilling’s Festival-Ensemble Stuttgart and the Europa Chor Akademie, and sings with ensembles such as the Capilla Real de Madrid —with which he took part in the complete Bach cantatas—, Musica Ficta, Accademia del Piacere, Los Músicos de Su Alteza and Capilla Peñaflorida. He has worked with Ton Koopman, who invited him to sing with the Amsterdam Baroque Orchestra, Kent Nagano, Federico Maria Sardelli, Andreas Spering and Paul Goodwin. He has been a member of the Spanish National Choir since 2009.',
      ],
    },
  },
  {
    id: 'victor-cruz',
    name: 'Víctor Cruz',
    role: { es: 'Barítono, cuerda pulsada y dirección', en: 'Baritone, plucked strings and direction' },
    photo: victor,
    credit: 'Víctor Cruz',
    bio: {
      es: [
        'Barítono natural de Guadix (Granada), fundador y director de Jácaras del Zéfiro. Se graduó con Matrícula de Honor y Primer Premio en el Conservatorio Superior de Granada y perfeccionó su técnica con Carlos Mena y José Antonio López. Como solista ha cantado Orfeo (Monteverdi) con Los Músicos de Su Alteza, Taddeo (*L’italiana in Algeri*) con Giancarlo Andretta, Eneas (Purcell), el *Oratorio a Santa Bárbara* de José Lidón con Aarón Zapico, las Pasiones de Bach y los réquiems de Mozart, Fauré y Brahms.',
        'Colabora con Al Ayre Español, Vox Luminis, I Gemelli, la Capella Reial de Catalunya, La Grande Chapelle, Capella de Ministrers y la Orquesta Barroca de Sevilla, entre otros. Estudia cuerda pulsada con Fernando Serrano, se acompaña a la guitarra barroca y la tiorba, y transcribe buena parte del repertorio del grupo directamente de los manuscritos. Ha sido profesor de canto en la Florida International University y en el Conservatorio Superior de Extremadura, y trabaja como presentador y actor de voz para Radio Clásica y el Centro Nacional de Difusión Musical.',
      ],
      en: [
        'A baritone from Guadix (Granada), founder and director of Jácaras del Zéfiro. He graduated with highest honours and First Prize from the Conservatorio Superior in Granada and refined his technique with Carlos Mena and José Antonio López. As a soloist he has sung Orfeo (Monteverdi) with Los Músicos de Su Alteza, Taddeo (*L’italiana in Algeri*) under Giancarlo Andretta, Aeneas (Purcell), José Lidón’s *Oratorio a Santa Bárbara* under Aarón Zapico, Bach’s Passions and the Requiems of Mozart, Fauré and Brahms.',
        'He works with Al Ayre Español, Vox Luminis, I Gemelli, the Capella Reial de Catalunya, La Grande Chapelle, Capella de Ministrers and the Orquesta Barroca de Sevilla, among others. He studies plucked strings with Fernando Serrano, accompanies himself on baroque guitar and theorbo, and transcribes much of the ensemble’s repertoire straight from the manuscripts. He has taught singing at Florida International University and the Conservatorio Superior de Extremadura, and works as a presenter and voice actor for Radio Clásica and Spain’s National Centre for Musical Diffusion (CNDM).',
      ],
    },
  },
  {
    id: 'jorge-enrique-garcia',
    name: 'Jorge Enrique García',
    role: { es: 'Viola da gamba y alto', en: 'Viola da gamba and alto' },
    photo: jorge,
    credit: 'Maxine Caulfield',
    bio: {
      es: [
        'Contratenor, gambista y director nacido en Cádiz en 1981. Profesor superior de flauta por el Conservatorio Superior Rafael Orozco de Córdoba, estudió canto con Carole Bajac, Howard Crook, Carlos Mena y Richard Levitt, y dirección con Vasco Negreiros y Martin Schmidt.',
        'Ha cantado con Al Ayre Español, Collegium Vocale Gent, la Capella Reial de Catalunya y La Hispanoflamenca, bajo la dirección de Philippe Herreweghe, Diego Fasolis, Yannick Nézet-Séguin, Eduardo López Banzo o Jordi Savall, en salas como el Concertgebouw de Ámsterdam, el Alice Tully Hall de Nueva York o el Konzerthaus de Viena. Dirige desde 2001 el Conjunto Vocal Virelay, Capilla de Música de la Catedral de Cádiz, con el que ha grabado cuatro volúmenes del archivo musical de la catedral, y la Orquesta Barroca de Cádiz. Fundó la Real Capilla del Pópulo.',
      ],
      en: [
        'A countertenor, viol player and conductor born in Cádiz in 1981. He holds a higher degree in flute from the Conservatorio Superior Rafael Orozco in Córdoba, studied singing with Carole Bajac, Howard Crook, Carlos Mena and Richard Levitt, and conducting with Vasco Negreiros and Martin Schmidt.',
        'He has sung with Al Ayre Español, Collegium Vocale Gent, the Capella Reial de Catalunya and La Hispanoflamenca, under Philippe Herreweghe, Diego Fasolis, Yannick Nézet-Séguin, Eduardo López Banzo and Jordi Savall, in halls such as the Amsterdam Concertgebouw, Alice Tully Hall in New York and the Vienna Konzerthaus. Since 2001 he has directed the Conjunto Vocal Virelay, the music chapel of Cádiz Cathedral, recording four volumes from the cathedral’s music archive, as well as the Orquesta Barroca de Cádiz. He founded the Real Capilla del Pópulo.',
      ],
    },
  },
  {
    id: 'juan-carlos-de-mulder',
    name: 'Juan Carlos de Mulder',
    role: { es: 'Cuerda pulsada', en: 'Plucked strings' },
    photo: jc,
    credit: 'Pablo F. Juárez',
    bio: {
      es: [
        'Nacido en Lima, estudió en los conservatorios de Madrid, La Haya y Toulouse. Especialista en instrumentos antiguos de cuerda pulsada —vihuela, laúd, archilaúd, tiorba y guitarra barroca—, ha sido continuista en producciones de ópera y oratorio con Philippe Herreweghe, Jean-Claude Malgoire, Nigel Rogers, Jordi Savall, Eduardo López Banzo o Enrico Onofri, y ha tocado con Hespèrion XX, La Real Cámara y Capella de Ministrers.',
        'Colabora asiduamente con Al Ayre Español, la Orquesta Barroca de Sevilla y La Ritirata, y dirige Camerata Iberia, con la que ha recuperado repertorios como el Barroco del Perú. Su discografía supera las ochenta grabaciones, entre ellas discos como solista dedicados a Luys Milán y Diego Pisador. Compone y toca para la Compañía Nacional de Teatro Clásico y fue profesor en el Real Conservatorio Superior de Música de Madrid.',
      ],
      en: [
        'Born in Lima, he studied at the conservatories of Madrid, The Hague and Toulouse. A specialist in early plucked instruments —vihuela, lute, archlute, theorbo and baroque guitar—, he has played continuo in opera and oratorio productions under Philippe Herreweghe, Jean-Claude Malgoire, Nigel Rogers, Jordi Savall, Eduardo López Banzo and Enrico Onofri, and has performed with Hespèrion XX, La Real Cámara and Capella de Ministrers.',
        'He works regularly with Al Ayre Español, the Orquesta Barroca de Sevilla and La Ritirata, and directs Camerata Iberia, with which he has revived repertoires such as the music of baroque Peru. His discography exceeds eighty recordings, including solo albums devoted to Luys Milán and Diego Pisador. He composes and performs for Spain’s National Classical Theatre Company and taught at the Real Conservatorio Superior de Música in Madrid.',
      ],
    },
  },
];
