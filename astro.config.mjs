import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

import vitePwa from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.errorcodezero.dev',
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt(), icon(), vitePwa({
    mode: "production",
    registerType: "autoUpdate",
    includeAssets: "logo.png",
    workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    },
    manifest: {
        name: "ErrorCode0",
        theme_color: "#89b4fa"
    }
  })],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha"
    }
  }
});
