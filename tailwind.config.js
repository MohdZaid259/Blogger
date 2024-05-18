const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      content:["Caveat", 'cursive'],
      heading:["Josefin Sans", 'sans-serif'],
      footer:["Libre Baskerville", 'serif'],
      auth:[ "Sora", 'sans-serif']
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};