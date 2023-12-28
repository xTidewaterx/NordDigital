/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},


    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['Helvetica', 'Arial', 'sans-serif'],
      'display': ['Oswald',],
      'body': ['"Open Sans"', ],
    }

  },
  plugins: [],
}