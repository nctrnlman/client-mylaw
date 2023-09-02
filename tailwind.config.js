/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#005289",
          secondary: "#897500",
          accent: "#004960",
          neutral: "#222f35",
          "base-100": "#f4f4fa",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
