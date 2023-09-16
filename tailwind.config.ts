import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}', 'node_modules/daisyui/dist/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: { 100: '#5e4fff31', 500: '#775aec' },
        secondary: { 100: '#da85c731', 500: '#ff7887' },
        info: { 100: '#57c4ff31', 500: '#789cff' },
        success: { 100: '#7fb88133', 500: '#7fb881' },
        warning: { 100: '#ffb04f45', 500: '#ffb14f' },
        error: { 100: '#ff795736', 500: '#ff7857' },
        accent: '#E3C7F9',
        neutral: '#303030',
        'base-100': '#FFFFFF',
        'secondary-text': '#637381',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: { 100: '#5e4fff31', 500: '#775aec' },
          secondary: { 100: '#da85c731', 500: '#ff7887' },
          info: { 100: '#57c4ff31', 500: '#789cff' },
          success: { 100: '#7fb88133', 500: '#7fb881' },
          warning: { 100: '#ffb04f45', 500: '#ffb14f' },
          error: { 100: '#ff795736', 500: '#ff7857' },
          accent: '#E3C7F9',
          neutral: '#303030',
          'base-100': '#FFFFFF',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
export default config
