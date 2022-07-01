/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent': 'hsl(25, 97%, 53%)',
        'rating': {
          100: 'hsl(0, 0%, 100%)',
          500: 'hsl(217, 12%, 63%)',
          600: 'hsl(216, 12%, 54%)',
          800: 'hsl(213, 19%, 18%)',
          900: 'hsl(216, 12%, 8%)',
        }
      }
    },
  },
  plugins: [],
}
