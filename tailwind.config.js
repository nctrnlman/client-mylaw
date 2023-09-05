/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#005289",
        secondary: "#b69025",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
