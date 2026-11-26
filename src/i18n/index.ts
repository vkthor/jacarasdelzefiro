// Idiomas, rutas traducidas y textos de la interfaz.
export type Lang = 'es' | 'en';
export type T = { es: string; en: string };

export const langs: Lang[] = ['es', 'en'];

/** Devuelve el texto en el idioma pedido. */
export const tr = (v: T | string, lang: Lang): string => (typeof v === 'string' ? v : v[lang]);

/** Rutas de cada página en los dos idiomas (siempre con barra final). */
export const routes = {
  home: { es: '/', en: '/en/' },
  ensemble: { es: '/grupo/', en: '/en/ensemble/' },
  programs: { es: '/programas/', en: '/en/programs/' },
  avecillas: { es: '/programas/avecillas/', en: '/en/programs/avecillas/' },
  navidad: { es: '/programas/la-gracia-y-el-gozo/', en: '/en/programs/la-gracia-y-el-gozo/' },
  bookletAvecillas: { es: '/programa-de-mano/avecillas/', en: '/en/booklet/avecillas/' },
  bookletNavidad: { es: '/programa-de-mano/la-gracia-y-el-gozo/', en: '/en/booklet/la-gracia-y-el-gozo/' },
  scores: { es: '/partituras/', en: '/en/scores/' },
  duo: { es: '/duo-del-zefiro/', en: '/en/duo-del-zefiro/' },
  concerts: { es: '/conciertos/', en: '/en/concerts/' },
  press: { es: '/prensa/', en: '/en/press/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  legal: { es: '/aviso-legal/', en: '/en/legal-notice/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof routes;
export const url = (key: RouteKey, lang: Lang) => routes[key][lang];

export const nav: RouteKey[] = ['ensemble', 'programs', 'duo', 'press', 'scores', 'contact'];

export const ui = {
  siteName: { es: 'Jácaras del Zéfiro', en: 'Jácaras del Zéfiro' },
  tagline: {
    es: 'Barroco con acento hispano',
    en: 'Baroque with a Spanish accent',
  },
  motto: { es: 'Alma, fuego y verdad.', en: 'Soul, fire and truth.' },
  nav: {
    home: { es: 'Inicio', en: 'Home' },
    ensemble: { es: 'El grupo', en: 'Ensemble' },
    programs: { es: 'Programas', en: 'Programmes' },
    duo: { es: 'Dúo del Zéfiro', en: 'Dúo del Zéfiro' },
    concerts: { es: 'Conciertos', en: 'Concerts' },
    press: { es: 'Prensa', en: 'Press' },
    scores: { es: 'Partituras', en: 'Scores' },
    contact: { es: 'Contacto', en: 'Contact' },
    legal: { es: 'Aviso legal', en: 'Legal notice' },
    privacy: { es: 'Privacidad', en: 'Privacy' },
  } as Record<string, T>,
  menu: { es: 'Menú', en: 'Menu' },
  close: { es: 'Cerrar', en: 'Close' },
  skip: { es: 'Saltar al contenido', en: 'Skip to content' },
  otherLang: { es: 'English', en: 'Español' },
  otherLangShort: { es: 'EN', en: 'ES' },
  seeProgram: { es: 'Ver el programa', en: 'See the programme' },
  booklet: { es: 'Programa de mano', en: 'Concert booklet' },
  bookletLong: { es: 'Notas y textos cantados', en: 'Notes and sung texts' },
  dossier: { es: 'Dossier (PDF)', en: 'Dossier (PDF)' },
  premiere: { es: 'Estreno en tiempos modernos', en: 'Modern-day premiere' },
  transcription: { es: 'Transcripción de', en: 'Transcription by' },
  watchVideo: { es: 'Ver el vídeo', en: 'Watch the video' },
  readReview: { es: 'Leer la crítica completa', en: 'Read the full review' },
  photo: { es: 'Foto', en: 'Photo' },
  backTo: { es: 'Volver a', en: 'Back to' },
  download: { es: 'Descargar', en: 'Download' },
  writeUs: { es: 'Escríbenos', en: 'Write to us' },
  forProgrammers: { es: 'Para programadores', en: 'For programmers' },
  allPrograms: { es: 'Todos los programas', en: 'All programmes' },
  meetEnsemble: { es: 'Conoce al grupo', en: 'Meet the ensemble' },
  videoConsent: {
    es: 'Al reproducir el vídeo se cargará YouTube, que puede usar cookies.',
    en: 'Playing the video will load YouTube, which may set cookies.',
  },
  play: { es: 'Reproducir', en: 'Play' },
};
