// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Outfit",
        cssVariable: "--font-outfit",
        weights: [400, 600, 700],
        styles: ["normal"],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.google(),
        name: "Young Serif",
        cssVariable: "--font-young-serif",
        weights: [400],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
});
