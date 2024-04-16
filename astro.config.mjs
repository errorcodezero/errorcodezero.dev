import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.errorcodezero.dev',
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt(), icon()],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha"
    }
  }
});