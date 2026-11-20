/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070709',
          900: '#0B0B0D',
          850: '#101013',
          800: '#141418',
          750: '#1A1A20',
          700: '#23232B',
          600: '#32323D',
        },
        accent: {
          cyan: '#38BDF8',
          blue: '#3B82F6',
          violet: '#8B5CF6',
          emerald: '#10B981',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(56, 189, 248, 0.25)',
        'glow-md': '0 0 35px -5px rgba(56, 189, 248, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

