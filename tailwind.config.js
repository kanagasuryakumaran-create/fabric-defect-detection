/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 20px 45px -18px rgba(15, 23, 42, 0.18)',
      },
      colors: {
        fabric: {
          50: '#f7f5f2',
          100: '#efe8e0',
          200: '#e0d4ca',
          300: '#c8b3a4',
          400: '#ae8d7d',
          500: '#8e6b5e',
          600: '#675247',
          700: '#4b3f3c',
          800: '#2c2626',
          900: '#1b1818',
        },
      },
    },
  },
  plugins: [],
};
