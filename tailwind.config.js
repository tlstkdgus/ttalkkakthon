/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        boss: {
          primary: '#7C3AED',
          secondary: '#EC4899',
          accent: '#F59E0B',
          bg: '#F8FAFC',
        },
        secret: {
          primary: '#A78BFA',
          secondary: '#F472B6',
          accent: '#34D399',
          bg: '#0F172A',
          surface: '#1E293B',
          text: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          'system-ui',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(15, 23, 42, 0.15)',
        glow: '0 0 0 1px rgba(124, 58, 237, 0.2), 0 18px 50px -24px rgba(124, 58, 237, 0.35)',
        'glow-secret':
          '0 0 0 1px rgba(167, 139, 250, 0.25), 0 18px 50px -24px rgba(52, 211, 153, 0.2)',
      },
    },
  },
  plugins: [],
}
