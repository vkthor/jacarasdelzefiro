import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.URL || 'https://jacarasdelzefiro.es',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Aviso legal y privacidad llevan noindex: fuera del mapa del sitio.
      filter: (page) => !/\/(aviso-legal|privacidad|legal-notice|privacy)\//.test(page),
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en' } },
    }),
  ],
});
