/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryNutmeg: "hsl(14, 45%, 36%)",
        primaryDarkRaspberry: "hsl(332, 51%, 32%)",
        neutralWhite: "hsl(0, 0%, 100%)",
        neutralRoseWhite: "hsl(330, 100%, 98%)",
        neutralEggshell: "hsl(30, 54%, 90%)",
        neutralLightGrey: "hsl(30, 18%, 87%)",
        neutralWengeBrown: "hsl(30, 10%, 34%)",
        neutralDarkCharcoal: "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
        youngSerif: ["young serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
