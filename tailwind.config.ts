import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: { DEFAULT: '#5C6B4A', light: '#E8EDE4', dark: '#3D4832' },
        stone: '#9B8E7E',
        cream: '#F7F3EE',
        charcoal: '#2D2D2D',
        gold: '#C9A96E',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section: '120px',
      },
    },
  },
  plugins: [],
}

export default config
