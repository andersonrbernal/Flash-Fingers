/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px'
      },
      colors: {
        'primary': '#0468D7',
        'green-sea': '#14C2AD',
        'violet': '#833EF2',
      }
    },
  },
  plugins: [],
}

