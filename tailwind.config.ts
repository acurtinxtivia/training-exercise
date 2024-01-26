import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        'silver': '#bab8b8'
      },
      boxShadow: {
        light: 'rgba(174, 174, 174, 0.05) 0px 0px 6px 3px'
      }
      
    },
  },
  plugins: [],
}
export default config
