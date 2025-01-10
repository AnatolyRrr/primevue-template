import tailwindcssPrimeui from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ['"IBM Plex Sans"', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.5rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
      },
      colors: {
        // https://tailwindcss.com/docs/customizing-colors#using-custom-colors
        // add new color variables here
        blackText: 'rgba(44, 44, 44, 1)',
        greyText: 'rgba(108, 117, 125, 1)',
        darkBlueText: 'rgba(0, 109, 175, 1)',
        bodyBackground: 'rgba(248, 249, 250, 1)',
        headerBackground: 'rgba(51, 47, 55, 1)',
        lightBlueBackground: 'rgba(205, 236, 255, 1)',
      },
    },
  },
  plugins: [tailwindcssPrimeui],
}

