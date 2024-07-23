/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8C2A8D",
        secondary: "#381952",
        themeBlack: "#18191F",
        primaryLight: "#7E6E8C",
        iconFooter: "#CAC2D1",
        primaryMediumLight: "#AC83CF",
        primaryDark: "#92278F",
        primaryInputBorder:"#E1D9E9"
      }
    },
  },
  plugins: [],
}

