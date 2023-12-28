vite install link::
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite

1:: npm create vite ---then select correct framework/language
2:: cd project --- npm run dev
3:: install tailwind CSS with Vite::link::  https://tailwindcss.com/docs/guides/vite
 npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

4::
Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.
tailwind.config.js


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


5:: npm run dev for build process

6:: added font config in the tailwind.config.js file::

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['Helvetica', 'Arial', 'sans-serif'],
      'display': ['Oswald',],
      'body': ['"Open Sans"', ],
    }

    7:: added percentage width for our tailwind main application container, to  contain application in a readable format 
    percentage width:. Percentage widths

Use w-{fraction} or w-full to set an element to a percentage based width.


8:: installed react ag charts:: npm install ag-charts-react --- link::  https://charts.ag-grid.com/react/quick-start/
use the array with objects and properties react charts