/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '0px',
      // => @media (min-width: 320px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1024px) { ... }
      //detect hover exists
      'betterhover': {'raw': '(hover: hover)'}
    },
    extend: {
      colors: {
        'primary': '#378E87',
        'secondary': '#CD2E70',
        'hoversecondary': '#A52359',
        'background': '#10292E',
        'hoverbg': '#183D44'
      },
      maxWidth: {
        'page': '1536px',
        'prodBox': '220px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}