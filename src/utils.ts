// Utilidades de texto: cursivas con *asteriscos* y escape de HTML.
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Convierte *texto* en <em>texto</em> y **texto** en <strong>texto</strong>. */
export function inline(s: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener">$1</a>');
}

/** Nombre de compositor en el idioma pedido (sólo cambian apodos y «Anónimo»). */
export function composerName(name: string, lang: 'es' | 'en'): string {
  if (lang === 'es') return name;
  return name
    .replace('Anónimo, atribuido a', 'Anonymous, attributed to')
    .replace(/^Anónimo$/, 'Anonymous')
    .replace('«el Viejo»', '“the Elder”')
    .replace('«el Joven»', '“the Younger”')
    .replace('«el Sabio»', '“the Wise”');
}

/** «A y B» → «A and B» en inglés. */
export const names = (s: string, lang: 'es' | 'en') => (lang === 'en' ? s.replace(/ y /g, ' and ') : s);

/** Quita las marcas de cursiva y de enlace (para atributos y metadatos). */
export const plain = (s: string) => s.replace(/\*\*?(.+?)\*\*?/g, '$1').replace(/\[(.+?)\]\((https?:\/\/[^)\s]+)\)/g, '$1');
