import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: "https://portfolio-sam-dev.vercel.app/",
  integrations: [
    sitemap(),
    // robotsTxt({
    //   sitemap: [
    //     "https://gianmarcocavallo.com/sitemap-index.xml",
    //     "https://gianmarcocavallo.com/sitemap-0.xml",
    //   ],
    // }),
    solidJs({
      include: ['**/solid/**/*']
    }),
    icon(),
    svelte({
      include: ['**/svelte/**/*']
    }),
    mdx(),
    react({
      include: ['**/react/**/*', '**/components/**/*']
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  mdx: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    assetsInclude: "**/*.riv",
  },
});