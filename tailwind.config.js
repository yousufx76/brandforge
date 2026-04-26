/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Removed the second 'extend' wrapper here
      colors: {
        bg: '#3E2723',
        bg2: '#2C1A17',
        bg3: '#4A3330',
        cream: '#F5E9DA',
        cream2: '#E8D5C0',
        cream3: '#C4A98A',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}