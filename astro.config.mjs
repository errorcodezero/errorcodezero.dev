import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.errorcodezero.dev",
  integrations: [mdx(), sitemap({}), icon(), partytown()],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
  vite: {
    resolve: {
      alias: {
        "~": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
