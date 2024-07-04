/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#f7f4ed', // Replace this with your desired color
        text: '#242424',
        
      },
      fontFamily: {
        DM: ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}