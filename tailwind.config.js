/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#195de6',
        'background-light': '#f8f9fc',
        'background-dark': '#111621',
        'surface-light': '#ffffff',
        'surface-dark': '#1a2233',
        'text-main': '#0e121b',
        'text-secondary': '#4e6797',
      },
      fontFamily: {
        display: ['Newsreader', 'serif'],
        sans: ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
