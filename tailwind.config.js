/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "josefin":["Josefin Slab", "sans-serif"]
      }
    },
    colors:{
      "white": "#FFFFFF"
    },
  },
  plugins: [],
}