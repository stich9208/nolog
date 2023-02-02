/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    borderWidth: {
      10: "10px",
    },
    fontSize: {
      mainFontSize: "min(7vw, 70px)",
    },
    extend: {
      colors: {
        navy: "#000080",
      },
    },
  },

  plugins: [],
};
