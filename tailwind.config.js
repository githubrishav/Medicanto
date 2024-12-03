/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ['"Open Sans"','Playfair Display', 'sans-serif'], // Add Open Sans to the sans-serif stack
      },
  },
},
plugins: [],
};