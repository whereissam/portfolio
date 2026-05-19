# Sam's Portfolio

Personal portfolio site — a single-page, bento-style layout with a blog, 3D globe, and a sprinkle of motion. Built on Astro 6 with islands of React, Solid, and Svelte where each makes sense.

## Features

- Bento-grid layout, fully responsive
- Blog with MDX + RSS feed (`/rss.xml`) and on-site search via Pagefind
- 3D globe (D3 + Solid island)
- Page transitions and scroll animations (Motion + Lenis)
- Installable PWA with offline cache
- SEO defaults: sitemap, robots, Open Graph

## Tech Stack

- **Framework:** [Astro 6](https://astro.build) (SSR via Vercel adapter)
- **UI islands:** React 19, Solid.js, Svelte 5
- **Styling:** Tailwind CSS 4 (Vite plugin, CSS-first `@theme`)
- **Content:** MDX, `@astrojs/rss`, `astro-pagefind`
- **Motion & viz:** Motion, GSAP, Lenis, D3, Rive
- **Deploy:** Vercel (Netlify adapter also available)

## Getting Started

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # build for production
bun run preview  # preview the production build
```

> Node ≥ 22.12 required by the Astro 6 toolchain.

## Project Layout

```
src/
  pages/        # routes (.astro)
  components/   # split into react/, solid/, svelte/ — picked up by integration include globs
  content/      # blog entries (MDX/MD)
  layouts/
  styles/       # globals.css holds the Tailwind 4 @theme
  lib/
public/         # static assets, PWA icons, .riv files
```

Framework integrations are scoped by directory (`src/**/react/**`, `src/**/solid/**`, `src/**/svelte/**`) in `astro.config.mjs` — drop a component into the matching folder to render it as that island.

## Deployment

The default adapter is Vercel (`@astrojs/vercel`). To deploy to Netlify instead, swap the adapter in `astro.config.mjs`:

```js
import netlify from '@astrojs/netlify';
// adapter: netlify(),
```
