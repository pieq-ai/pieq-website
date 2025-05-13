/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDEAE5',
          100: '#FBD5CB',
          200: '#F7AB96',
          300: '#F38262',
          400: '#EF582D',
          500: '#E43A19', // Main primary color (tomato red)
          600: '#B62E14',
          700: '#88230F',
          800: '#5B170A',
          900: '#2D0C05',
        },
        secondary: {
          50: '#FEF8E9',
          100: '#FDF1D3',
          200: '#FBE3A8',
          300: '#F9D57C',
          400: '#F7C750',
          500: '#F6AE2D', // Main secondary color (cheese gold)
          600: '#DF9308',
          700: '#A56E06',
          800: '#6C4904',
          900: '#342302',
        },
        neutral: {
          50: '#EAEAEB',
          100: '#D5D5D7',
          200: '#ABABAF',
          300: '#818188',
          400: '#575760',
          500: '#2F3037', // Main neutral color (deep charcoal)
          600: '#26262C',
          700: '#1C1C21',
          800: '#131316',
          900: '#09090B',
        },
        background: '#FAFAFA', // Soft white background
        success: '#10B981', // Success color
        warning: '#FBBF24', // Warning color
        error: '#EF4444', // Error color
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};