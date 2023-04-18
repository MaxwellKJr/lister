/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'Electric blue': '#51e5ff',
        Indigo: '#440381',
        BrightPink: '#ff0077',
        Melon: '#ffa5a5',
        Apricot: '#ffd6c0'
      },

      fontFamily: {
        poppins: ["Poppins"],
      }
    },
  },
  plugins: [],
}

