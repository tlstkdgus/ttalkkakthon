/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /** 부장님 모드 — Win95 데스크톱 */
        boss: {
          primary: '#000080',
          secondary: '#808080',
          accent: '#000080',
          bg: '#008080',
          surface: '#c0c0c0',
          ink: '#000000',
          muted: '#404040',
          window: '#ffffff',
          border: '#808080',
        },
        /** 속마음 모드 — Microsoft Excel / Office 느낌 (Fluent 그린) */
        secret: {
          primary: '#217346',
          ribbon: '#217346',
          'ribbon-dark': '#185c37',
          accent: '#107c41',
          bg: '#f3f2f1',
          surface: '#ffffff',
          text: '#323130',
          muted: '#605e5c',
          border: '#edebe9',
          grid: '#e1dfdd',
        },
      },
      fontFamily: {
        jua: ['Jua', 'sans-serif'],
        /** 부장님 모드 폰트 */
        gungsuh: ['RoundedFixedsys', 'monospace'],
        /** 속마음 모드 폰트 */
        excel: ['"YoonChildfundkoreaManSeh"', 'sans-serif'],
        sans: [
          '"Noto Sans KR"',
          'Pretendard Variable',
          'Pretendard',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        excel: '0 1.6px 3.6px rgba(0,0,0,0.13), 0 0.3px 0.9px rgba(0,0,0,0.11)',
        'excel-inset': 'inset 0 0 0 1px #edebe9',
        card: '0 2px 8px rgba(0,0,0,0.06)',
        glow: '0 2px 0 #404040',
        'glow-secret':
          '0 0 0 1px rgba(167, 139, 250, 0.25), 0 18px 50px -24px rgba(52, 211, 153, 0.2)',
      },
    },
  },
  plugins: [],
}
