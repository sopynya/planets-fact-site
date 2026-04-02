/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        leagueSpartan: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

