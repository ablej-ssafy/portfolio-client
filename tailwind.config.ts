import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#6e55ff',
          50: '#f4f2ff',
          100: '#e6e0ff',
          200: '#d1c4ff',
          300: '#b8a0ff',
          400: '#9b7dff',
          500: '#6e55ff',
          600: '#5c3fff',
          700: '#4a2be6',
          800: '#3a1fcc',
          900: '#2a16b3',
          dark: '#5c3fff',
          light: '#9b7dff',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
