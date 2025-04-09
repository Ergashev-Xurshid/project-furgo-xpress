/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mdplus': '770px', 
        'lgplus': '1025px',
      },
    },
  },
  plugins: [],
}

