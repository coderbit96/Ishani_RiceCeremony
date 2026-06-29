/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#3d2a2d',
        rosewood: '#6f3e49',
        blush: '#f7d9dc',
        petal: '#eeb9bf',
        cream: '#fffaf1',
        champagne: '#c79856',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        bengali: ['Noto Serif Bengali', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(111, 62, 73, 0.12)',
        gold: '0 12px 40px rgba(199, 152, 86, 0.22)',
      },
    },
  },
  plugins: [],
}
