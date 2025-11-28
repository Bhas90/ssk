/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#2ccedf',
        customDark: '#182033',
        customWhite: '#fffff',
        customGray: '#fffff',
        customlight: '#0064a4',
      },
    },
  },
  plugins: [],
}