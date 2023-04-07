/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["./dist/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'body': '#000011',
      },
      fontFamily: {
        syne: "'Syne', 'sans-serif'",
      },
    },
  },
  plugins: [],
};
