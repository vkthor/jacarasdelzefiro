# Web de Jácaras del Zéfiro (jacarasdelzefiro.es)

Web estática hecha con [Astro](https://astro.build). Se escribe en `src/` y se genera en `dist/` una carpeta de HTML, CSS e imágenes que se sube tal cual al alojamiento.

## Comandos

```
npm install        # sólo la primera vez en cada ordenador
npm run dev        # vista previa en http://localhost:4321 mientras se edita
npm run build      # genera la web final en dist/
```

## Dónde está cada cosa

- `src/data/`: los contenidos.
  - `concerts.ts`: conciertos. Las fechas futuras salen solas en «Próximos conciertos».
  - `programs.ts`: programas, obras, fuentes y transcripciones.
  - `musicians.ts`: biografías (español e inglés).
  - `press.ts`: críticas y apariciones en prensa.
  - `scores.ts`: partituras descargables (los PDF van en `public/partituras/`).
  - `notes.ts` y `textos/*.json`: notas y textos cantados del programa de mano.
  - `site.ts`: correo, redes, vídeos y créditos.
- `src/views/`: el diseño de cada página (las rutas de `src/pages/` sólo las llaman, en español y en inglés).
- `src/i18n/index.ts`: rutas traducidas y textos de la interfaz.
- `src/assets/`: fotos, retratos y gráficos (Astro los convierte a WebP del tamaño justo).
- `public/dossieres/`: versiones web de los dossieres (sin teléfono). Se generan desde los originales de Proyecto-Jacaras (`*-v2.pdf`).

## Ver la web en tu ordenador

Doble clic en `Ver-web.cmd`: arranca un pequeño servidor y abre http://localhost:4321 en el navegador. Abrir los `.html` de `dist/` directamente no funciona, porque las rutas de la web empiezan por `/` y sólo se resuelven a través de un servidor.

## Publicar

Cada cambio subido a la rama `main` se publica solo en GitHub Pages (ver `.github/workflows/pages.yml`). El dominio jacarasdelzefiro.es se registra en IONOS y apunta a GitHub Pages.

## Privacidad

La web no usa cookies ni analítica. Las tipografías van en el propio servidor y los vídeos de YouTube no se cargan hasta que se pulsa «reproducir».

## Derechos

El código de la web es visible, pero los textos, fotografías, logotipo, dossieres y partituras pertenecen a Jácaras del Zéfiro o a sus autores y no se pueden reutilizar sin permiso (las partituras, sólo para estudio e interpretación sin fines comerciales). Ver el aviso legal de la web.
