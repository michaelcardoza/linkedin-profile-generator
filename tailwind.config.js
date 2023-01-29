/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)', ...fontFamily.sans],
      },
      colors: {
        cblack: '#282A37',
        cslate: {
          800: '#323744',
          700: '#424756',
          600: '#4C5163',
        },
        cblue: '#1C90F5',
      },
    },
  },
  plugins: [],
};
