/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This maps className="font-hoefler" to your @font-face in index.css
        hoefler: ['"Hoefler Text"', 'serif'],
        // This maps className="font-sans" to Inter
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Hoefler Text', 'Georgia', 'serif'],
      },
      colors: {
        // Optional: Adding your brand colors here makes them easier to use
        brand: {
          midnight: '#030210',
          gold: '#E8A147',
          'gold-dark': '#D4893D',
        }
      }
    },
  },
  plugins: [],
};