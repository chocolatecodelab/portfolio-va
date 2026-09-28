import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4F0E8',
        'paper-raised': '#EAE4D6',
        ink: '#171717',
        'ink-soft': '#4A4640',
        accent: '#D94F35',
        'accent-ink': '#FFFFFF',
        line: '#171717',
        focus: '#2F6FED',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '2px',
        lg: '2px',
      },
      maxWidth: {
        content: '1120px',
        prose: '65ch',
      },
      boxShadow: {
        brutal: '3px 3px 0px #171717',
        'brutal-sm': '2px 2px 0px #171717',
        'brutal-pressed': '1px 1px 0px #171717',
      },
      screens: {
        xs: '375px',
        sm: '480px',
        md: '768px',
        lg: '1025px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
