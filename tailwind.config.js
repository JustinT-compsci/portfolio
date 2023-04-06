/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["./dist/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'body': '#000012',
      },
      fontFamily: {
        syne: "'Syne', 'sans-serif'",
      },
    },
  },
  plugins: [],
};
