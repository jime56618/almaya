/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'almaya-yellow': '#FFC311',
        'almaya-black': '#0D0D0D',
        'almaya-gray': '#1F1F1F',
      },
    },
  },
  plugins: [],
}