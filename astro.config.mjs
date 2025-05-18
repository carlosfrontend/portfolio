import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';

import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: 'https://carlospulido.netlify.app',

  integrations: [
    react({ experimentalReactChildren: true }),
    tailwind(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-GB'
        }
      }
    }),
    compressor({ gzip: false, brotli: true, })
  ],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  image: {
    domains: ['astro.build'],
    remotePatterns: [{ protocol: 'https' }]
  },

  output: 'server',
  adapter: netlify()
});