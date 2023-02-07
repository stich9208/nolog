/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontSize: {
      mainFontSize: "min(7vw, 70px)",
      introFontSize: "60px",
    },
    extend: {
      keyframes: {
        fadeInOut: {
          "0%, 100%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
        },
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
      borderWidth: {
        10: "10px",
      },
      colors: {
        navy: "#000080",
      },
    },
  },
  plugins: [],
};
