/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        screen: '100vh',
      },
      height: {
        screen: '100vh',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s infinite',
        'float': 'float 3s infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'float-delay-1': 'float 3s infinite 1s',
        'float-delay-2': 'float 3s infinite 2s',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(244, 114, 182, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(244, 114, 182, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}