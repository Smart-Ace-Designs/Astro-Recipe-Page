/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-nutmeg": "hsl(14, 45%, 36%)",
        "theme-dark-raspberry": "hsl(332, 51%, 32%)",
        "theme-white": "hsl(0, 0%, 100%)",
        "theme-rose-white": "hsl(330, 100%, 98%)",
        "theme-eggshell": "hsl(30, 54%, 90%)",
        "theme-light-grey": "hsl(30, 18%, 87%)",
        "theme-wenge-brown": "hsl(30, 10%, 34%)",
        "theme-dark-charcoal": "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "young-serif": ["Young Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
