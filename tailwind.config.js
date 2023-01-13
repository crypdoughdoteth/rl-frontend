/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    daisyui: {
      themes: [
        {
          mytheme: {

            "primary": "#9A45DD",

            "secondary": "#A3C950",

            "accent": "#FFFFFF",

            "neutral": "#000000",

            "base-100": "#111827",

            "info": "#3ABFF8",

            "success": "#36D399",

            "warning": "#FBBD23",

            "error": "#F87272",
          },
        },
      ],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}