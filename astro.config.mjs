import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import vercel from '@astrojs/vercel';

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel";

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
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    assetsInclude: "**/*.riv",
  },
});