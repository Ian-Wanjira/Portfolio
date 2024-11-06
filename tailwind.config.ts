import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: '3rem',
    // },
    extend: {
      colors: {
        primary: '#00122C',
        secondary: '#0FEE82',
        darkPrimary: '#00122C',
        blue: {
          100: '#00275F',
          200: '#85c7f2',
          300: '#00275F',
          400: '#003C92',
          500: '#001734',
        },
        white: {
          200: '#D4DCFF',
          300: '#8E9AAB',
          400: '#838B8A',
        },
        sand: {
          100: '#f3d3bd',
        },
        green: {
          100: '#3DF39B',
        },
      },
      rotate: {
        '90': '90deg',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        firaMono: ['var(--font-fira-mono)', 'monospace'],
      },
      fontSize: {
        '4xl': '2.5rem',
      },
      backgroundImage: {
        health: "url('/assets/images/onboarding.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
