/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-green':'#068F26',
        'navbar-bg':'#F4F4F4',
        'Ad-color1': '#F8E7E7',
        'Ad-color2': '#FAEDDD',
        'Ad-color3': '#DFF9F9',
      }
    },
  },
  plugins: [],
}

