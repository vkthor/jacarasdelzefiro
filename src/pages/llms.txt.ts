// /llms.txt: resumen en texto plano para asistentes de IA (formato propuesto en llmstxt.org).
// Se genera con los mismos datos que la web, así que se actualiza solo.
import type { APIRoute } from 'astro';
import { programs } from '../data/programs';
import { musicians } from '../data/musicians';
import { concerts } from '../data/concerts';
import { reviews } from '../data/press';
import { site } from '../data/site';
import { routes } from '../i18n';
import { plain, composerName } from '../utils';

const base = 'https://jacarasdelzefiro.es';
const u = (k: keyof typeof routes, l: 'es' | 'en' = 'en') => `${base}${routes[k][l]}`;

export const GET: APIRoute = () => {
  const progs = [programs.avecillas, programs.navidad].map((p) => {
    const composers = [...new Set(p.works.map((w) => composerName(w.composer, 'en')).filter((c) => !c.startsWith('Anonymous')))].join('; ');
    return `### ${p.title} — ${plain(p.subtitle.en)}

${plain(p.lead.en)}

${p.body.en.map(plain).join('\n\n')}

Composers: ${composers}; and anonymous works.

- Program page: ${u(p.key)} (Spanish: ${u(p.key, 'es')})
- Concert booklet with notes and sung texts: ${u(p.bookletKey)}`;
  });

  const people = musicians.map((m) => `- ${m.name} — ${m.role.en}`).join('\n');
  const dates = [...concerts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((c) => `- ${c.date} · ${c.city}, ${c.venue} · ${c.series.en} · ${c.ensemble === 'duo' ? 'Dúo del Zéfiro' : 'Jácaras del Zéfiro'}: ${c.program.en}${c.note ? ` (${c.note.en})` : ''}`)
    .join('\n');
  const press = reviews
    .map((r) => `- ${r.date} · ${r.outlet} · ${r.author}: “${r.headline.en}” — “${r.quote.en}” (${plain(r.context.en)}) ${r.url}`)
    .join('\n');

  const body = `# Jácaras del Zéfiro

> Jácaras del Zéfiro is a Spanish early-music ensemble founded and directed by baritone Víctor Cruz (${site.directorSite}/). It revives the Spanish Baroque and Renaissance repertoire —tonos, villancicos, jácaras and ensaladas— with voices, plucked strings, viola da gamba and percussion, and most of its singers also play. It made its debut in December 2025. Motto: “Soul, fire and truth.”

Website in Spanish (${base}/) and English (${base}/en/). Contact for programmers and press: ${site.email}. Instagram: ${site.instagram}

## Programs

${progs.join('\n\n')}

### Dúo del Zéfiro — The Comical History of Don Quixote

A staged show by Víctor Cruz (baritone) and Juan Carlos de Mulder (plucked strings) on the music by Henry Purcell, John Eccles and Raphael Courteville for Thomas D’Urfey’s trilogy (London, 1694), with stage direction and dramaturgy by Beatriz González Calderón and costumes by Berta Grasset. Page: ${u('duo')}

## Musicians

${people}

Biographies: ${u('ensemble')}

## Concerts

${dates}

## Press

${press}

More: ${u('press')}

## Other pages

- Scores (free transcriptions for study and non-commercial performance): ${u('scores')}
- Dossiers (PDF) and photos: ${u('press')}#kit
- Contact: ${u('contact')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
