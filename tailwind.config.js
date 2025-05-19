/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F5F6FA',
          100: '#E6E9F2',
          200: '#CBD2E5',
          300: '#9BA8CD',
          400: '#6B7DB4',
          500: '#3C3B6E', // American flag navy blue
          600: '#2E2E54',
          700: '#1F1F39',
          800: '#15152B',
          900: '#0A0A14',
        },
        secondary: {
          50: '#FFF5F5',
          100: '#FFE6E6',
          200: '#FFC7C7',
          300: '#FF9999',
          400: '#FF6B6B',
          500: '#B22234', // American flag red
          600: '#8E1B29',
          700: '#6B141F',
          800: '#470D14',
          900: '#24070A',
        },
        accent: {
          50: '#FFFBEA',
          100: '#FFF3C4',
          200: '#FCE588',
          300: '#FADB5F',
          400: '#F7C948',
          500: '#C5A02C', // Gold from logo
          600: '#A17E22',
          700: '#7D5D19',
          800: '#593C10',
          900: '#351B07',
        },
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};