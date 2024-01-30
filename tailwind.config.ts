import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-light': '#44bef1',
        'primary': '#24a3d8',
        'primary-dark': '#323946',
        'light-gray': '#666666',
        'extra-light-gray': '#999999',
        'off-white': '#ebebeb',
        'silver': '#bab8b8',
        'blue-gray': '#888c94'
      },
      boxShadow: {
        light: 'rgba(174, 174, 174, 0.05) 0px 0px 6px 3px'
      },
      keyframes: {
        'scroll-left': {
          '0%': {
            transform: 'translateX(-200%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        'scroll-right': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        'scroll-left': 'scroll-left 0.3s 1 ease-in-out',
        'scroll-right': 'scroll-right 0.3s 1 ease-in-out'
      }
    },
  },
  plugins: [],
}
export default config
