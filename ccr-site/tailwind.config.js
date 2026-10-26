/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        void: '#05040a',
        gold: '#f5c451',
        neon: '#39ffb6',
        plasma: '#a35bff',
        hot: '#ff4d9d',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        marker: ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [],
};
