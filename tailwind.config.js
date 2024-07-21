/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-main': '#FFCF4B',
        'primary-stroke': '#27AE60',
        'secondary-main':'#F9F9F9',
        'secondary-stroke':'#CEC6C6',
        'text-main':'#263238',
        'text-secondary':'65624C'
      }
    },
  },
  plugins: [],
}
