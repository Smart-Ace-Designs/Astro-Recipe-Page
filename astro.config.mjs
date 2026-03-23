// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://smart-ace-designs.github.io",
  base: "/astro-recipe-page",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      weights: [400, 600, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Young Serif",
      cssVariable: "--font-young-serif",
      weights: [400],
      styles: ["normal"],
    },
  ],
});
