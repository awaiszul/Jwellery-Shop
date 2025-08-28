/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ovo: ['var(--font-ovo)'],
        outfit: ['var(--font-outfit)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
