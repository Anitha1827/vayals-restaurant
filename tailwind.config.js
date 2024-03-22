/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custgreen: "rgb(213, 237, 196)",
        custdarkgreen: "rgb(0,44,31)",
        custorange: "rgb(253 150 30)",
      },
    },
  },
  plugins: [],
};
