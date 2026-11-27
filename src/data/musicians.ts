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
    web: { es: 'https://www.palomafriedhoff.com/', en: 'https://www.palomafriedhoff.com/bio' },
    bio: {
      es: [
        'Soprano hispanoestadounidense nacida en Amberes y criada en Madrid en una familia de músicos. Se formó en la Escuela Superior de Canto de Madrid, en la Hochschule für Musik und Theater de Múnich con Edith Wiens y, con beca de «la Caixa», en la Universidad de Indiana con Sylvia McNair. Ha ganado premios en concursos de Madrid, Barcelona, Lisboa, Washington y St. Louis.',
        'En música antigua ha estrenado y grabado los papeles de Bubaste en *La Nitteti* de Conforto, con Nereydas, y de Sofonisba en *Scipione in Spagna* de Alessandro Scarlatti, con La Ritirata, y ha cantado en el Festival Internacional de Arte Sacro, la Semana de Música Religiosa de Cuenca y Universo Barroco. Debutó en el Teatro Real en 2017 y ha sido solista con la Orquesta y Coro Nacionales de España y con la Film Symphony Orchestra. Más sobre ella en [palomafriedhoff.com](https://www.palomafriedhoff.com/).',
      ],
      en: [
        'A Spanish-American soprano, born in Antwerp and raised in Madrid in a family of musicians. She trained at the Escuela Superior de Canto in Madrid, at the Hochschule für Musik und Theater in Munich with Edith Wiens and, as a “la Caixa” scholar, at Indiana University with Sylvia McNair. She has won prizes at competitions in Madrid, Barcelona, Lisbon, Washington DC and St. Louis.',
        'In early music she has premiered and recorded the roles of Bubaste in Conforto’s *La Nitteti* with Nereydas and Sofonisba in Alessandro Scarlatti’s *Scipione in Spagna* with La Ritirata, and has sung at the Madrid International Festival of Sacred Art, the Cuenca Religious Music Week and Universo Barroco. She made her Teatro Real debut in 2017 and has appeared as a soloist with the Spanish National Orchestra and Choir and the Film Symphony Orchestra. More at [palomafriedhoff.com](https://www.palomafriedhoff.com/bio).',
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
        'Ha formado parte del Festival-Ensemble Stuttgart de Helmuth Rilling y de la Europa Chor Akademie, y canta con agrupaciones como la Capilla Real de Madrid —con la que abordó la integral de las cantatas de Bach—, Musica Ficta, Accademia del Piacere, Los Músicos de Su Alteza y Capilla Peñaflorida. Ha trabajado con Ton Koopman, que lo invitó a cantar con la Amsterdam Baroque Orchestra, Kent Nagano, Federico Maria Sardelli, Andreas Spering y Paul Goodwin. Es Jefe de Cuerda de Tenores del Coro Nacional de España.',
      ],
      en: [
        'A Cuban tenor based in Spain since 2004. He graduated in Music from the Instituto Superior de Arte in Havana, trained as both percussionist and singer, and was tenor soloist of the Schola Cantorum Coralina, with which he toured and recorded.',
        'He has been a member of Helmuth Rilling’s Festival-Ensemble Stuttgart and the Europa Chor Akademie, and sings with ensembles such as the Capilla Real de Madrid —with which he took part in the complete Bach cantatas—, Musica Ficta, Accademia del Piacere, Los Músicos de Su Alteza and Capilla Peñaflorida. He has worked with Ton Koopman, who invited him to sing with the Amsterdam Baroque Orchestra, Kent Nagano, Federico Maria Sardelli, Andreas Spering and Paul Goodwin. He is head of the tenor section of the Spanish National Choir.',
      ],
    },
  },
  {
    id: 'victor-cruz',
    name: 'Víctor Cruz',
    role: { es: 'Barítono, cuerda pulsada y dirección', en: 'Baritone, plucked strings and direction' },
    photo: victor,
    credit: 'Víctor Cruz',
    web: { es: 'https://www.victorcruz.es/', en: 'https://www.victorcruz.es/en/' },
    bio: {
      es: [
        'Barítono natural de Guadix (Granada), fundador y director de Jácaras del Zéfiro, cuyo repertorio transcribe en buena parte directamente de los manuscritos. Se graduó con matrícula de honor y primer premio en el Conservatorio Superior de Granada y perfeccionó su técnica con Carlos Mena y José Antonio López. Se forma como intérprete de cuerda pulsada con Jesús Sánchez y Fernando Serrano.',
        'Colabora con Al Ayre Español, Vox Luminis, I Gemelli, La Capella Reial de Catalunya de Jordi Savall y La Ritirata, entre otros. Como solista ha cantado Orfeo (Monteverdi) con Los Músicos de Su Alteza, Taddeo (*L’italiana in Algeri*) con Giancarlo Andretta, Eneas (Purcell) y las Pasiones de Bach. Es profesor de técnica vocal del Joven Coro de Andalucía, ha sido presentador en Radio Clásica y el Centro Nacional de Difusión Musical y es realizador audiovisual para conjuntos y solistas. Más sobre él en [victorcruz.es](https://www.victorcruz.es/).',
      ],
      en: [
        'A baritone from Guadix (Granada), founder and director of Jácaras del Zéfiro, much of whose repertoire he transcribes straight from the manuscripts. He graduated with highest honours and First Prize from the Conservatorio Superior in Granada and refined his technique with Carlos Mena and José Antonio López. He is training as a plucked-string player with Jesús Sánchez and Fernando Serrano.',
        'He works with Al Ayre Español, Vox Luminis, I Gemelli, Jordi Savall’s La Capella Reial de Catalunya and La Ritirata, among others. As a soloist he has sung Orfeo (Monteverdi) with Los Músicos de Su Alteza, Taddeo (*L’italiana in Algeri*) under Giancarlo Andretta, Aeneas (Purcell) and Bach’s Passions. He teaches vocal technique to the Joven Coro de Andalucía, has worked as a presenter for Radio Clásica and Spain’s National Centre for Musical Diffusion (CNDM), and is a filmmaker for ensembles and soloists. More at [victorcruz.es](https://www.victorcruz.es/en/).',
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
        'Contratenor, gambista y director nacido en Cádiz. Empezó a cantar de niño en la Escolanía Municipal Añil de su ciudad, donde a los catorce años ya era asistente de dirección. Profesor superior de flauta por el Conservatorio Superior Rafael Orozco de Córdoba, amplió estudios de flauta en París con François Veilhan; estudió canto con Carole Bajac, Howard Crook, David Mason, Carlos Mena y Richard Levitt, con titulación del Trinity College de Londres, y dirección con Vasco Negreiros y Martin Schmidt.',
        'Ha cantado con Al Ayre Español, Collegium Vocale Gent, la Capella Reial de Catalunya, La Hispanoflamenca y el Coro Barroco de Andalucía, bajo la dirección de Philippe Herreweghe, Diego Fasolis, Yannick Nézet-Séguin, Eduardo López Banzo o Jordi Savall, en salas como el Concertgebouw de Ámsterdam, el Alice Tully Hall de Nueva York, el Théâtre des Champs-Élysées de París o el Konzerthaus de Viena. Con Collegium Vocale Gent grabó la Novena de Beethoven y *The Dream of Gerontius* de Elgar. Dirige desde 2001 el Conjunto Vocal Virelay, Capilla de Música de la Catedral de Cádiz, con el que ha grabado cuatro volúmenes del archivo musical de la catedral, y la Orquesta Barroca de Cádiz, y fundó la Real Capilla del Pópulo. Ha sido director invitado de la orquesta Archivo 415 y del Coro Barroco de Andalucía, enseña canto y es cotranscriptor, con Víctor Cruz, de varias obras del repertorio de Jácaras del Zéfiro.',
      ],
      en: [
        'A countertenor, viol player and conductor born in Cádiz. He began singing as a boy in the city’s Escolanía Municipal Añil, where he was already assistant conductor at fourteen. He holds a higher degree in flute from the Conservatorio Superior Rafael Orozco in Córdoba and did postgraduate flute studies in Paris with François Veilhan; he studied singing with Carole Bajac, Howard Crook, David Mason, Carlos Mena and Richard Levitt, graduating from Trinity College London, and conducting with Vasco Negreiros and Martin Schmidt.',
        'He has sung with Al Ayre Español, Collegium Vocale Gent, the Capella Reial de Catalunya, La Hispanoflamenca and the Coro Barroco de Andalucía, under Philippe Herreweghe, Diego Fasolis, Yannick Nézet-Séguin, Eduardo López Banzo and Jordi Savall, in halls such as the Amsterdam Concertgebouw, Alice Tully Hall in New York, the Théâtre des Champs-Élysées in Paris and the Vienna Konzerthaus. With Collegium Vocale Gent he recorded Beethoven’s Ninth Symphony and Elgar’s *The Dream of Gerontius*. Since 2001 he has directed the Conjunto Vocal Virelay, the music chapel of Cádiz Cathedral, recording four volumes from the cathedral’s music archive, as well as the Orquesta Barroca de Cádiz, and he founded the Real Capilla del Pópulo. He has been guest conductor of the orchestra Archivo 415 and the Coro Barroco de Andalucía, teaches singing, and has co-transcribed several works in the Jácaras del Zéfiro repertoire with Víctor Cruz.',
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
