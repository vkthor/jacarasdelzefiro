// Críticas y apariciones en prensa. Citas breves y literales (en inglés, traducidas), con enlace a la fuente.
import type { T } from '../i18n';

export const reviews = [
  {
    outlet: 'Ritmo',
    author: 'Simón Andueza',
    date: '2026-04-09',
    headline: { es: 'Jácaras del Zéfiro y el Festival de Arte Sacro emprenden un vuelo esperanzador', en: 'Jácaras del Zéfiro and the Festival of Sacred Art take wing, full of promise' } as T,
    quote: { es: 'este formidable programa tan coherente, variado y de una calidad musical tan exquisita', en: 'this formidable programme, so coherent, so varied and of such exquisite musical quality' } as T,
    context: {
      es: 'Crítica de *Avecillas* en el Festival Internacional de Arte Sacro de Madrid.',
      en: 'Review of *Avecillas* at the Madrid International Festival of Sacred Art.',
    } as T,
    url: 'https://www.ritmo.es/auditorio/critica-jacaras-del-zefiro-y-el-festival-de-arte-sacro-emprenden-un-vuelo-esperanzador-por-simon-andueza',
  },
  {
    outlet: 'Granada Hoy',
    author: 'Jorge Rodríguez Morata',
    date: '2025-12-28',
    headline: { es: 'Brillante estreno de un prometedor ensemble', en: 'A brilliant debut from a promising ensemble' } as T,
    quote: { es: 'una intensidad vocal poco habitual en la interpretación de este repertorio', en: 'a vocal intensity rarely heard in this repertoire' } as T,
    context: {
      es: 'Crítica del concierto de presentación, con *La gracia y el gozo*, en Almuñécar.',
      en: 'Review of the debut concert, with *La gracia y el gozo*, in Almuñécar.',
    } as T,
    url: 'https://www.granadahoy.com/ocio/jacaras-zefiro-brillante-estreno-ensemble-critica-concierto_0_2005519813.html',
  },
];

// Apariciones en prensa: se describe de qué trata cada pieza en lugar de copiar titulares.
export const mentions: { outlet: string; date: string; what: T; url: string }[] = [
  { outlet: 'Opera World', date: '2025-12-26', what: { es: 'Anuncio del concierto de presentación en Música en Adviento', en: 'Announcement of the debut concert at Música en Adviento' }, url: 'https://www.operaworld.es/jacaras-del-zefiro-la-gracia-y-el-gozo-musica-adviento/' },
  { outlet: 'Costa Digital', date: '2025-12-27', what: { es: 'Crónica del concierto de presentación en Almuñécar', en: 'Report on the debut concert in Almuñécar' }, url: 'https://costadigital.es/el-concierto-la-gracia-y-el-gozo-llena-de-musica-barroca-la-casa-de-la-cultura-de-almunecar/' },
  { outlet: 'Scherzo', date: '2026-02-18', what: { es: 'Presentación del Festival Internacional de Arte Sacro 2026', en: 'Preview of the 2026 Madrid International Festival of Sacred Art' }, url: 'https://scherzo.es/el-36o-festival-internacional-de-arte-sacro-de-la-comunidad-de-madrid-se-centrara-en-la-figura-de-bach/' },
  { outlet: 'Mundoclasico', date: '2026-02-18', what: { es: 'Presentación del FIAS 2026, entre las propuestas de recuperación de patrimonio', en: 'Preview of FIAS 2026, among its heritage-recovery projects' }, url: 'https://www.mundoclasico.com/articulo/45921/el-festival-internacional-de-arte-sacro-apuesta-por-el-barroco-con-william-christie' },
  { outlet: 'Doce Notas', date: '2026-04-06', what: { es: 'El FIAS y los estrenos de patrimonio musical español', en: 'FIAS and its premieres of Spanish musical heritage' }, url: 'https://www.docenotas.com/183869/el-festival-internacional-de-arte-sacro-reivindica-el-valioso-patrimonio-musical-espanol-con-el-estreno-de-obras-vocales-religiosas/' },
  { outlet: 'Scherzo', date: '2026-06-05', what: { es: 'Presentación de la XXXIV edición de Guadix Clásica', en: 'Preview of the 34th Guadix Clásica series' }, url: 'https://scherzo.es/guadix-clasica-presenta-su-xxxiv-edicion-con-manuel-de-falla-y-pedro-antonio-de-alarcon-como-eje-artistico/' },
  { outlet: 'Todalamúsica', date: '2026-10-21', what: { es: 'Presentación del Festival de Cádiz 2026', en: 'Preview of the 2026 Cádiz Festival' }, url: 'https://www.todalamusica.es/el-festival-de-cadiz-2026-reunira-35-conciertos-y-20-estrenos/' },
];

// Comillas según el idioma: «…» en español, “…” en inglés.
export const q = (text: string, lang: string) => (lang === 'en' ? `“${text}”` : `«${text}»`);
