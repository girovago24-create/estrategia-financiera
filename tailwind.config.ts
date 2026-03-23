import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#000c1e',
        'primary-container': '#002344',
        'on-primary': '#ffffff',
        surface: '#f8f9fa',
        'surface-low': '#f3f4f5',
        'surface-lowest': '#ffffff',
        'surface-high': '#eceef0',
        'on-surface': '#191c1d',
        'outline-variant': '#caced2',
        tertiary: '#130b00',
        'tertiary-accent': '#e9c176',
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.2', fontWeight: '300' }],
        'headline-md': ['1.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        'title-lg': ['1.375rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label-md': ['0.75rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
      backgroundColor: {
        surface: '#f8f9fa',
        'surface-low': '#f3f4f5',
        'surface-lowest': '#ffffff',
        primary: '#000c1e',
      },
      textColor: {
        primary: '#000c1e',
        'on-surface': '#191c1d',
        'tertiary-accent': '#e9c176',
      },
      spacing: {
        'sp-4': '1.4rem',
        'sp-10': '3.5rem',
        'sp-20': '7rem',
        'sp-24': '8.5rem',
      },
      borderRadius: {
        none: '0px',
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        ambient: '0 40px 60px rgba(25, 28, 29, 0.04)',
        'ambient-lg': '0 60px 80px rgba(25, 28, 29, 0.06)',
      },
    },
  },
  plugins: [],
}

export default config
