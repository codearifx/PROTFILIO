/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        surface: 'var(--color-surface)',
        glass: 'var(--color-glass)',
        textMain: 'var(--color-text)',
        textMuted: 'var(--color-text-muted)',
      },
      boxShadow: {
        glow: '0 12px 40px rgba(56, 189, 248, 0.2)',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        gradient: 'gradient 15s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        blob: 'blob 7s infinite',
        'skills-marquee': 'skills-marquee 35s linear infinite',
      },
      keyframes: {
        'skills-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

