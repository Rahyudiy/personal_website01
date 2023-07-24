/** @type {import('tailwindcss').Config} **/
module.exports = {
  darkMode: 'class',
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      italianno: ['Italianno', 'cursive'],
      poppins: ['Poppins', 'sans-serif'],
      alata: ['Alata', 'sans-serif'],
      arvo: ['Arvo', 'serif'],
      figtree: ['Figtree', 'sans-serif'],
      unna: [ 'Unna', 'serif'],
      lexend: ['Lexend', 'sans-serif'],
      quickSand: ['Quicksand', 'sans-serif']
    },
    animation: {
      updown: "moveUpDown 4s infinite ease-in-out",
    },
    keyframes: {
      moveUpDown: {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-20px)",
        },
      },
  },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}