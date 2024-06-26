import catppuccin from "@catppuccin/tailwindcss";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", "sans-serif"],
        mono: ["Geist Mono", "sans-serif"],
      },
    },
  },
  plugins: [
    catppuccin({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
    typography({
      target: "modern",
    }),
  ],
};
