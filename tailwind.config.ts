import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        'bk-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'bk-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'bk-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
} satisfies Config;

export default config;
