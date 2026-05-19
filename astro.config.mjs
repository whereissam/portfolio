import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import AstroPWA from '@vite-pwa/astro';

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
      include: ['src/**/solid/**/*', 'src/**/components/Globe.tsx', 'src/**/components/Tooltip/**/*', 'src/**/components/HoverTooltip/**/*']
    }),
    icon(),
    svelte({
      include: ['src/**/svelte/**/*']
    }),
    mdx(),
    react({
      include: ['src/**/react/**/*']
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false
      },
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        globPatterns: ['**/*.{js,css,svg,png,ico,webp,woff,woff2}'],
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages',
              networkTimeoutSeconds: 3,
            },
          },
        ],
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
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  mdx: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    assetsInclude: "**/*.riv",
    plugins: [tailwindcss()],
  },
});