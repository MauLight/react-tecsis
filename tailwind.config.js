/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Rubik',
        stoke: 'Stoke',
        zen: 'Zen Antique',
        papillon: ['PAPILLON', 'serif'],
        jeckle: ['JECKLE', 'sans-serif'],
        pitagon: ['PITAGON', 'sans-serif'],
        alt: ['ALT', 'sans-serif'],
        altbold: ['ALTBOLD', 'sans-serif'],
      }
    },
  },
  plugins: [],
}