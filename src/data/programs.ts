// Programas del sexteto. Atribuciones revisadas por Víctor el 22 nov 2026.
import type { T } from '../i18n';

export type Work = {
  title: string;
  voices?: T;
  composer: string;
  dates?: string;
  genre: T;
  source: T;
  transcription: string;
  premiere?: boolean;
};

const BNE = { es: 'Biblioteca Nacional de España', en: 'Biblioteca Nacional de España' };
const tonoSS = { es: 'Tono al Santísimo Sacramento', en: 'Tono to the Blessed Sacrament' };
const a4 = { es: 'a 4', en: 'a 4' };
const duo = { es: 'dúo', en: 'duet' };
const solo = { es: 'solo', en: 'solo' };
const ensalada = { es: 'Ensalada', en: 'Ensalada' };
const praga = { es: '*Las ensaladas* (Praga, 1581)', en: '*Las ensaladas* (Prague, 1581)' };
const josaLambea = 'Lola Josa y Mariano Lambea';

const cantiga: Work = {
  title: 'Maravillosos et piadosos',
  voices: { es: 'arr. a 4', en: 'arr. a 4' },
  composer: 'Alfonso X «el Sabio»',
  dates: '1221–1284',
  genre: { es: 'Cantiga de Santa María n.º 139', en: 'Cantiga de Santa María no. 139' },
  source: BNE,
  transcription: 'Enrique López-Cortón',
};

export const programs = {
  avecillas: {
    key: 'avecillas' as const,
    bookletKey: 'bookletAvecillas' as const,
    title: 'Avecillas',
    subtitle: { es: 'Tonos al Santísimo Sacramento', en: 'Tonos to the Blessed Sacrament' },
    lead: {
      es: 'El ave como imagen del alma que vuela hacia lo divino: un recorrido por los tonos y villancicos al Santísimo Sacramento del Barroco hispánico.',
      en: 'The bird as an image of the soul soaring towards the divine: a journey through tonos and villancicos to the Blessed Sacrament from the Hispanic Baroque.',
    },
    body: {
      es: [
        'La devoción eucarística impulsada por la Contrarreforma impregnó todas las artes del Barroco español. *Avecillas* la recorre a través de una imagen muy querida por la época: jilgueros, calandrias y pajarillos que cantan al «Sol» sacramental con trinos, onomatopeyas e imitaciones polifónicas, en obras de Sebastián Durón, Juan Hidalgo, Alonso de Torices, José de Cáseda o Joan Barter. Varias de ellas llegan al altar mediante el *contrafactum*, que convierte tonos profanos en piezas devotas sin perder su frescura teatral.',
        'Más de la mitad del programa son estrenos en tiempos modernos: obras que llevaban siglos sin sonar, recuperadas de los archivos catedralicios de Barcelona, Burgos y Guatemala y del fondo parroquial de Canet de Mar gracias a la colaboración con musicólogos y archivos. Cuatro de ellas las han transcrito miembros del propio grupo.',
      ],
      en: [
        'The Eucharistic devotion fostered by the Counter-Reformation permeated every art of the Spanish Baroque. *Avecillas* explores it through an image much loved at the time: goldfinches, larks and little birds singing to the sacramental “Sun” with trills, onomatopoeia and polyphonic imitation, in works by Sebastián Durón, Juan Hidalgo, Alonso de Torices, José de Cáseda and Joan Barter. Several of them reached the altar through *contrafactum*, which turns secular tonos into devotional pieces without losing their theatrical freshness.',
        'More than half of the programme consists of modern-day premieres: works unheard for centuries, recovered from the cathedral archives of Barcelona, Burgos and Guatemala and from the parish collection of Canet de Mar thanks to our collaboration with musicologists and archives. Four of them were transcribed by members of the ensemble.',
      ],
    },
    facts: [
      { label: { es: 'Formación', en: 'Ensemble' }, value: { es: 'Seis músicos: cuatro voces, viola da gamba y cuerda pulsada. Los cantantes tocan también percusión y cuerda.', en: 'Six musicians: four voices, viola da gamba and plucked strings. The singers also play percussion and strings.' } },
      { label: { es: 'Repertorio', en: 'Repertoire' }, value: { es: '12 obras, 7 de ellas estrenos en tiempos modernos.', en: '12 works, including 7 modern-day premieres.' } },
      { label: { es: 'Duración', en: 'Duration' }, value: { es: 'Unos 70 minutos, sin descanso.', en: 'Approx. 70 minutes, no interval.' } },
      { label: { es: 'Estreno', en: 'Premiere' }, value: { es: 'Festival Internacional de Arte Sacro de la Comunidad de Madrid, Basílica de San Miguel, 7 de abril de 2026.', en: 'Madrid International Festival of Sacred Art, Basílica de San Miguel, 7 April 2026.' } },
      { label: { es: 'Producción', en: 'Production' }, value: { es: 'Necesidades técnicas mínimas: cada músico lleva sus instrumentos.', en: 'Minimal technical requirements: each musician brings their own instruments.' } },
    ],
    works: [
      cantiga,
      { title: 'A batalla con los rayos', voices: a4, composer: 'Alonso de Torices', dates: '1634–1684', genre: tonoSS, source: { es: 'Catedral de Barcelona', en: 'Barcelona Cathedral' }, transcription: 'Víctor Cruz', premiere: true },
      { title: 'Jilguerillo parlero', voices: duo, composer: 'José de Cáseda', dates: '1660–1725', genre: tonoSS, source: { es: 'Fondo de Sant Pere i Sant Pau de Canet de Mar', en: 'Sant Pere i Sant Pau collection, Canet de Mar' }, transcription: 'Víctor Cruz y Jorge Enrique García', premiere: true },
      { title: 'Pajarillos, ¡cantad!', voices: duo, composer: 'Sebastián Durón', dates: '1660–1716', genre: { es: 'Dúo al Santísimo Sacramento', en: 'Duet to the Blessed Sacrament' }, source: { es: 'Catedral de Burgos', en: 'Burgos Cathedral' }, transcription: josaLambea, premiere: true },
      { title: 'Callad, pensamientos', voices: a4, composer: 'Sebastián Durón', dates: '1660–1716', genre: { es: 'Tono al Santísimo Sacramento, *contrafactum* de «Abril floreciente»', en: 'Tono to the Blessed Sacrament, *contrafactum* of “Abril floreciente”' }, source: BNE, transcription: 'Víctor Cruz' },
      { title: '¡Jilguerillos, cantad!', voices: { es: 'trío', en: 'trio' }, composer: 'Joan Barter', dates: '1648–1706', genre: tonoSS, source: { es: 'Catedral de Barcelona', en: 'Barcelona Cathedral' }, transcription: josaLambea, premiere: true },
      { title: 'Antorcha brillante', voices: solo, composer: 'Juan Hidalgo', dates: '1614–1685', genre: tonoSS, source: { es: 'Catedral de Segovia', en: 'Segovia Cathedral' }, transcription: josaLambea },
      { title: 'Gorjeos de las aves', voices: { es: 'a 3', en: 'a 3' }, composer: 'Anónimo', genre: { es: 'Villancico al Santísimo Sacramento', en: 'Villancico to the Blessed Sacrament' }, source: { es: 'Catedral de Guatemala', en: 'Guatemala Cathedral' }, transcription: 'Víctor Cruz y Jorge Enrique García', premiere: true },
      { title: 'Vaya, pues, rompiendo el velo', voices: solo, composer: 'Sebastián Durón', dates: '1660–1716', genre: { es: 'Jácara al Santísimo Sacramento, *contrafactum* de «Vaya, pues, rompiendo el aire»', en: 'Jácara to the Blessed Sacrament, *contrafactum* of “Vaya, pues, rompiendo el aire”' }, source: { es: 'Archivo Histórico Arquidiocesano de Guatemala', en: 'Archivo Histórico Arquidiocesano, Guatemala' }, transcription: 'Víctor Cruz' },
      { title: 'Canten dos pajaritos', voices: duo, composer: 'Sebastián Durón', dates: '1660–1716', genre: { es: 'Dúo al Santísimo Sacramento', en: 'Duet to the Blessed Sacrament' }, source: { es: 'Biblioteca de Catalunya', en: 'Biblioteca de Catalunya' }, transcription: 'Víctor Cruz', premiere: true },
      { title: 'Pájaros, hojas y ramas', voices: a4, composer: 'Juan Hidalgo', dates: '1614–1685', genre: tonoSS, source: { es: 'Catedral de Barcelona', en: 'Barcelona Cathedral' }, transcription: 'Raúl Angulo', premiere: true },
      { title: 'La Negrina', voices: a4, composer: 'Mateo Flecha «el Viejo»', dates: 'c. 1481–1553', genre: ensalada, source: praga, transcription: 'Nancho Álvarez' },
    ] as Work[],
    video: 'batalla' as const,
    dossier: { es: '/dossieres/JdZ-Avecillas-dossier-ES.pdf', en: '/dossieres/JdZ-Avecillas-dossier-EN.pdf' },
  },

  navidad: {
    key: 'navidad' as const,
    bookletKey: 'bookletNavidad' as const,
    title: 'La gracia y el gozo',
    subtitle: { es: 'Ensaladas y villancicos al Nacimiento', en: 'Ensaladas and villancicos for the Nativity' },
    lead: {
      es: 'La alegría del Nacimiento en la música hispánica del Renacimiento y el Barroco: villancicos y tonos donde lo sagrado y lo popular se dan la mano.',
      en: 'The joy of the Nativity in Hispanic music of the Renaissance and Baroque: villancicos and tonos where the sacred and the popular go hand in hand.',
    },
    body: {
      es: [
        'Durante siglos, la Navidad fue en el mundo hispánico una fiesta tan devota como teatral. Catedrales y capillas encargaban cada año nuevos villancicos para los maitines del Nacimiento, y en ellos cabían el asombro ante el misterio, la ternura de la nana y el bullicio de los pastores que acudían al portal.',
        'Tras una cantiga de Alfonso X a modo de pórtico, *La gracia y el gozo* reúne villancicos y ensaladas del siglo XVI, como el célebre *Ríu, ríu, chíu* del Cancionero de Upsala, con tonos y villancicos barrocos de Sebastián Durón, Juan Hidalgo, José de Torres o Manuel de Egüés, conservados en archivos de Burgos, Salamanca, Segovia, Barcelona o Guatemala. Varios llegaron al pesebre mediante el *contrafactum*, que viste de Navidad tonos profanos sin perder su frescura teatral.',
        'Las ensaladas de Mateo Flecha «el Viejo» —*El Fuego*, *La Negrina*, *La Bomba*— ponen el contrapunto festivo: mezclas de lenguas, ritmos y registros, de lo culto y lo popular, que no buscan la pulcritud, sino el impacto.',
      ],
      en: [
        'For centuries, Christmas in the Hispanic world was a feast as devout as it was theatrical. Each year, cathedrals and chapels commissioned new villancicos for Christmas matins, full of wonder at the mystery, the tenderness of the lullaby and the bustle of shepherds at the manger.',
        'Opening with a cantiga by Alfonso X, *La gracia y el gozo* brings together sixteenth-century villancicos and ensaladas, such as the celebrated *Ríu, ríu, chíu* from the Uppsala Songbook, with Baroque tonos and villancicos by Sebastián Durón, Juan Hidalgo, José de Torres and Manuel de Egüés, preserved in Burgos, Salamanca, Segovia, Barcelona and Guatemala. Several reached the manger through *contrafactum*, dressing secular tonos for Christmas without losing their theatrical freshness.',
        'The ensaladas of Mateo Flecha “the Elder” —*El Fuego*, *La Negrina*, *La Bomba*— provide the festive counterpoint: mixtures of languages, rhythms and registers, of the learned and the popular, that seek impact rather than polish.',
      ],
    },
    facts: [
      { label: { es: 'Formación', en: 'Ensemble' }, value: { es: 'Seis músicos: cuatro voces, viola da gamba y cuerda pulsada. Los cantantes tocan también percusión y cuerda.', en: 'Six musicians: four voices, viola da gamba and plucked strings. The singers also play percussion and strings.' } },
      { label: { es: 'Repertorio', en: 'Repertoire' }, value: { es: '11 obras del Renacimiento y el Barroco hispánicos.', en: '11 works from the Hispanic Renaissance and Baroque.' } },
      { label: { es: 'Duración', en: 'Duration' }, value: { es: 'Unos 70 minutos, sin descanso.', en: 'Approx. 70 minutes, no interval.' } },
      { label: { es: 'Estreno', en: 'Premiere' }, value: { es: 'Ciclo Música en Adviento de la Junta de Andalucía, Iglesia de la Encarnación de Almuñécar, 26 de diciembre de 2025.', en: 'Música en Adviento series of the Junta de Andalucía, Iglesia de la Encarnación, Almuñécar, 26 December 2025.' } },
      { label: { es: 'Producción', en: 'Production' }, value: { es: 'Necesidades técnicas mínimas: cada músico lleva sus instrumentos.', en: 'Minimal technical requirements: each musician brings their own instruments.' } },
    ],
    works: [
      cantiga,
      { title: 'El Fuego', voices: a4, composer: 'Mateo Flecha «el Viejo»', dates: 'c. 1481–1553', genre: ensalada, source: praga, transcription: 'Maricarmen Gómez Muntané' },
      { title: 'Yo canto, yo lloro', voices: { es: 'a 2, soprano y alto', en: 'a 2, soprano and alto' }, composer: 'Manuel de Egüés', dates: '1657–1729', genre: { es: 'Dúo a Nuestra Señora de la Concepción', en: 'Duet to Our Lady of the Conception' }, source: { es: 'Catedral de Burgos', en: 'Burgos Cathedral' }, transcription: 'Roberto Alonso' },
      { title: 'Ríu, ríu, chíu', voices: a4, composer: 'Anónimo, atribuido a Mateo Flecha «el Viejo»', genre: { es: 'Villancico de Navidad', en: 'Christmas villancico' }, source: { es: 'Cancionero de Upsala', en: 'Uppsala Songbook' }, transcription: 'Nancho Álvarez' },
      { title: 'Quedito airecillo', voices: { es: 'alto', en: 'alto' }, composer: 'Sebastián Durón', dates: '1660–1716', genre: { es: 'Tono al Nacimiento, *contrafactum* de «Abril floreciente»', en: 'Tono for the Nativity, *contrafactum* of “Abril floreciente”' }, source: BNE, transcription: josaLambea },
      { title: 'Pues el cielo y la tierra', voices: a4, composer: 'José de Torres', dates: 'c. 1670–1738', genre: { es: 'Villancico de Navidad', en: 'Christmas villancico' }, source: { es: 'Catedral de Salamanca', en: 'Salamanca Cathedral' }, transcription: 'Eduardo López Banzo' },
      { title: 'Antorcha brillante', voices: { es: 'bajete', en: 'bajete' }, composer: 'Juan Hidalgo', dates: '1614–1685', genre: { es: 'Tono al Nacimiento, *contrafactum* del tono a solo', en: 'Tono for the Nativity, *contrafactum* of the solo tono' }, source: { es: 'Catedral de Segovia', en: 'Segovia Cathedral' }, transcription: josaLambea },
      { title: 'La Negrina', voices: a4, composer: 'Mateo Flecha «el Viejo»', dates: 'c. 1481–1553', genre: ensalada, source: praga, transcription: 'Nancho Álvarez' },
      { title: 'Vaya, pues, rompiendo el aire', voices: { es: 'tenor', en: 'tenor' }, composer: 'Sebastián Durón', dates: '1660–1716', genre: { es: 'Jácara sola muy airosa', en: 'Jácara sola muy airosa' }, source: { es: 'Archivo Histórico Arquidiocesano de Guatemala', en: 'Archivo Histórico Arquidiocesano, Guatemala' }, transcription: 'Víctor Cruz' },
      { title: 'Canten dos pajarillos', voices: { es: 'a 2, altos', en: 'a 2, altos' }, composer: 'Sebastián Durón', dates: '1660–1716', genre: { es: 'Dúo al Nacimiento', en: 'Duet for the Nativity' }, source: { es: 'Biblioteca de Catalunya', en: 'Biblioteca de Catalunya' }, transcription: 'Eduardo López Banzo' },
      { title: 'La Bomba', voices: a4, composer: 'Mateo Flecha «el Viejo»', dates: 'c. 1481–1553', genre: ensalada, source: praga, transcription: 'Maricarmen Gómez Muntané' },
    ] as Work[],
    video: 'teaser' as const,
    dossier: { es: '/dossieres/JdZ-La-gracia-y-el-gozo-dossier-ES.pdf', en: '/dossieres/JdZ-La-gracia-y-el-gozo-dossier-EN.pdf' },
  },
};

export type ProgramKey = keyof typeof programs;
