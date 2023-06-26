/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pGold: '#D4AF37',
        pBg: '#FFFFFF',
        pYellow: '#FFFFE8',
        pBlue: '#0121E3',
        pCyan: '#DEF7F6',
      },
      screens:{
        xs: '360px',
        ml: '820px',
      }
    },
  },
  plugins: [],
}
