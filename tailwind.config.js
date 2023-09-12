/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary:"#05808c",
        secondary:"#749467",
      },
      fontFamily: {
        'sans':["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}