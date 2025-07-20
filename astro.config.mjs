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
import { VitePWA } from 'vite-plugin-pwa';

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
      include: ['**/solid/**/*', '**/components/Globe.tsx', '**/components/Tooltip/**/*', '**/components/HoverTooltip/**/*']
    }),
    icon(),
    svelte({
      include: ['**/svelte/**/*']
    }),
    mdx(),
    react({
      include: ['**/react/**/*']
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
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: false
        },
        workbox: {
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true
        },
        manifest: {
          name: 'Sam - Full-stack Developer',
          short_name: 'Sam Portfolio',
          description: 'Full-stack developer specializing in blockchain and Web3 development',
          theme_color: '#FF6B35',
          background_color: '#000000',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        }
      })
    ]
  },
});