import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.errorcodezero.dev",
  integrations: [
    mdx(),
    sitemap(),
    robotsTxt(),
    icon(),
    partytown(),
  ],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
});
