/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Corrected typo: 'defaulktTheme' to 'defaultTheme'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Jomolhari', ...defaultTheme.fontFamily.serif], // Corrected typo: 'sans' to 'serif'
      },
    },
  },
  plugins: [],
};
