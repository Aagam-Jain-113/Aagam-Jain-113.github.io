module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        blue: {
          light: '#4660AC',
          DEFAULT: '#36E7F7',
          dark: '#0A236D',
          darker: '#3f569a'
        },
        offwhite: '#f5f5f5',
        dark:{
          DEFAULT: "#010101",
          100: "#0a0b1e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
