import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  integrations: [react({ experimentalReactChildren: true }), tailwind(), mdx()],

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing:{
      prefixDefaultLocale: true,
    }
  },

  output: "server",
  adapter: netlify(),
});