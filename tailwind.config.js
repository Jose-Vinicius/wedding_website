/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      spacing:{
        "500": '31.25rem'
      },
      fontFamily:{
        "josefin":["Josefin Slab", "sans-serif"],
        "amsterdan":["Amsterdam Four", "sans-serif"],
        "adamina": ["Adamina", "sans-serif"],
        "meaCulpa": ["Mea Culpa", "sans-serif"],
      }
    },
    colors:{
      "white": "#FFFFFF",
      "purple": "#ABABF3",
      "old_paper": "#FDF5E6",
      "black": "#000000",
    },
    
  },
  plugins: [],
}