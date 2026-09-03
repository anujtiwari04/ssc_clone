import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Official SSC Maroon / Burgundy Palette
        maroon: {
          50: '#fdf2f2',
          100: '#fbe4e5',
          200: '#f7cdd0',
          300: '#f0a7ad',
          400: '#e3737e',
          500: '#d04655',
          600: '#b82f3f',
          700: '#9b2432',
          800: '#800000', // Traditional SSC Maroon
          850: '#741620',
          900: '#63131c',
          950: '#38060c',
        },
        primary: {
          DEFAULT: '#800000',
          foreground: '#ffffff',
          light: '#9b2432',
          dark: '#63131c',
        },
        secondary: {
          DEFAULT: '#f8fafc',
          foreground: '#0f172a',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#64748b',
        },
        accent: {
          DEFAULT: '#b45309', // Warm gold/amber accent for GoI seals
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        gov: '0 2px 8px -1px rgba(0, 0, 0, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'gov-hover': '0 8px 16px -2px rgba(128, 0, 0, 0.12), 0 3px 6px -2px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
