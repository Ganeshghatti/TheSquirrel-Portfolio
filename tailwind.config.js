/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        days: ['Days One', 'sans-serif'],
        darker: ['Darker Grotesque', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite ',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-400%)' },
        },
      },
    },
  },
  plugins: [],
}