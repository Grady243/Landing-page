/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
    fontFamily: {
        'dm': ['dm', 'sans-serif'],
        'karla': ['karla', 'sans-serif'],

      },
  
    },
  },
  plugins: [],
}
