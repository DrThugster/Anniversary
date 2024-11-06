// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s infinite',
        'bounce-in': 'bounceIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(244, 114, 182, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(244, 114, 182, 0.8)' },
        },
        bounceIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-500px) translateX(-50%)'
          },
          '60%': {
            opacity: '1',
            transform: 'translateY(30px) translateX(-50%)'
          },
          '80%': {
            transform: 'translateY(-10px) translateX(-50%)'
          },
          '100%': {
            transform: 'translateY(0) translateX(-50%)'
          },
        },
      },
    },
  },
  plugins: [],
}