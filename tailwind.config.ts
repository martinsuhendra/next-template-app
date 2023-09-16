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
        primary: '#5e4fff31',
        secondary: '#da85c731',
        info: '#57c4ff31',
        success: '#7fb88133',
        warning: '#ffb04f45',
        error: '#ff795736',
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
          primary: '#5e4fff31',
          secondary: '#da85c731',
          info: '#57c4ff31',
          success: '#7fb88133',
          warning: '#ffb04f45',
          error: '#ff795736',
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
