/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-nutmeg": "hsl(14, 45%, 36%)",
        "primary-dark-raspberry": "hsl(332, 51%, 32%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-rose-white": "hsl(330, 100%, 98%)",
        "neutral-eggshell": "hsl(30, 54%, 90%)",
        "neutral-light-grey": "hsl(30, 18%, 87%)",
        "neutral-wenge-brown": "hsl(30, 10%, 34%)",
        "neutral-dark-charcoal": "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        "outfit": ["outfit", "sans-serif"],
        "young-serif": ["young serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
