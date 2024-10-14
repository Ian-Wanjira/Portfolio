import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '3rem',
    },
    extend: {
      colors: {
        primary: '#00122C',
        secondary: '#0FEE82',
        darkPrimary: '#00122C',
        blue: {
          100: '#00275F',
        },
        white: {
          200: '#D4DCFF',
          300: '#8E9AAB',
          400: '#838B8A',
        },
      },
      rotate: {
        '90': '90deg',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        firaMono: ['var(--font-fira-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
