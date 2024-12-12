/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    fontFamily:{
      "Inter":["Inter"],
      "Syne":["Syne"],
      "Roboto":["Roboto"],
      "Plus-Jakarta-Sans":["Plus Jakarta Sans"]
    },
    extend: {
      backgroundImage: {
        'background': "url('banner-bg.png')", 
        'gradient-bg':"url('gradient-bg.svg')",
        'gradient-bg2':"url('gradient-bg2.svg')"
      },
    },
  },
  plugins: [],
}

