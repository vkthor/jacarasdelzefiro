// Trayectoria del sexteto y del dúo. Las fechas futuras se mostrarán como «Próximos conciertos».
import type { T } from '../i18n';

export type Concert = {
  date: string; // AAAA-MM-DD
  time?: string;
  endDate?: string; // AAAA-MM-DD, si dura más de un día
  city: string;
  venue: string;
  series: T;
  program: T;
  note?: T;
  url?: string;
  ensemble: 'jacaras' | 'duo';
};

export const concerts: Concert[] = [
  {
    date: '2026-11-14', time: '12:00', city: 'Cádiz', venue: 'Casa de Iberoamérica',
    series: { es: '24.º Festival de Cádiz. Música Española', en: '24th Cádiz Festival of Spanish Music' },
    program: { es: 'Avecillas', en: 'Avecillas' },
    note: { es: 'Lleno absoluto.', en: 'Sold out.' },
    url: 'https://www.juntadeandalucia.es/cultura/agendaculturaldeandalucia/evento/jacaras-del-zefiro-avecillas',
    ensemble: 'jacaras',
  },
  {
    date: '2026-08-14', endDate: '2026-08-16', city: 'Comunidad de Madrid', venue: 'San Martín de Valdeiglesias, Pinilla del Valle y Berzosa de Lozoya',
    series: { es: 'Clásicos en Verano', en: 'Clásicos en Verano' },
    program: { es: 'La Cómica Historia de Don Quijote', en: 'The Comical History of Don Quixote' },
    note: { es: 'Estreno. Tres funciones, del 14 al 16 de agosto.', en: 'Premiere. Three performances, 14–16 August.' },
    ensemble: 'duo',
  },
  {
    date: '2026-06-12', time: '21:15', city: 'Guadix (Granada)', venue: 'Catedral de Guadix',
    series: { es: 'XXXIV Ciclo Internacional Guadix Clásica (inauguración)', en: '34th Guadix Clásica International Series (opening concert)' },
    program: { es: 'Avecillas', en: 'Avecillas' },
    url: 'https://guadixclasica.com/xxxiv-edicion-ciclo-internacional-de-musica-guadix-clasica/jacaras-del-zefiro/',
    ensemble: 'jacaras',
  },
  {
    date: '2026-04-07', time: '20:00', city: 'Madrid', venue: 'Basílica Pontificia de San Miguel',
    series: { es: 'Festival Internacional de Arte Sacro de la Comunidad de Madrid', en: 'Madrid International Festival of Sacred Art' },
    program: { es: 'Avecillas', en: 'Avecillas' },
    note: { es: 'Estreno del programa.', en: 'Programme premiere.' },
    url: 'https://www.madrid.org/fias/2026/jacaras-zefiro.html',
    ensemble: 'jacaras',
  },
  {
    date: '2025-12-26', time: '20:00', city: 'Almuñécar (Granada)', venue: 'Iglesia de la Encarnación',
    series: { es: 'Música en Adviento (Junta de Andalucía)', en: 'Música en Adviento (Junta de Andalucía)' },
    program: { es: 'La gracia y el gozo', en: 'La gracia y el gozo' },
    note: { es: 'Concierto de presentación del grupo.', en: 'The ensemble’s debut concert.' },
    ensemble: 'jacaras',
  },
];

const months = {
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

export function formatDate(iso: string, lang: 'es' | 'en') {
  const [y, m, d] = iso.split('-').map(Number);
  return lang === 'es' ? `${d} de ${months.es[m - 1]} de ${y}` : `${d} ${months.en[m - 1]} ${y}`;
}

export function splitConcerts(today = new Date()) {
  const t = today.toISOString().slice(0, 10);
  return {
    upcoming: concerts.filter((c) => c.date >= t).sort((a, b) => a.date.localeCompare(b.date)),
    past: concerts.filter((c) => c.date < t).sort((a, b) => b.date.localeCompare(a.date)),
  };
}
