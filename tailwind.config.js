/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        smilecaretheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          "base-100": "#FFFFFF",
          "base-200": "#F1F5F9",
          "base-300": "#E6E6E6",

          // neutral: "#3D4451",

          // info: "#3ABFF8",

          // success: "#36D399",

          // warning: "#FBBD23",

          // error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
