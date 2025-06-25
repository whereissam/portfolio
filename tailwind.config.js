/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
  		},
  		fontSize: {
  			'display': ['3.5rem', { lineHeight: '1.1' }],
  			'h1': ['2.25rem', { lineHeight: '1.2' }],
  			'h2': ['1.875rem', { lineHeight: '1.25' }],
  			'h3': ['1.5rem', { lineHeight: '1.3' }],
  			'h4': ['1.25rem', { lineHeight: '1.35' }],
  			'h5': ['1.125rem', { lineHeight: '1.4' }],
  			'h6': ['1rem', { lineHeight: '1.4' }],
  			'body-lg': ['1.125rem', { lineHeight: '1.5' }],
  			'body-base': ['1rem', { lineHeight: '1.5' }],
  			'body-sm': ['0.875rem', { lineHeight: '1.5' }],
  			'caption': ['0.75rem', { lineHeight: '1.6' }],
  		},
  		fontWeight: {
  			light: 300,
  			normal: 400,
  			medium: 500,
  			semibold: 600,
  			bold: 700,
  			extrabold: 800,
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			'bs-black': {
  				DEFAULT: '#000000',
  				100: '#0A0A0A',
  				200: '#1A1A1A',
  				300: '#2A2A2A',
  				400: '#3A3A3A',
  			},
  			'bs-white': {
  				DEFAULT: '#FFFFFF',
  				100: '#FFFFFF',
  				200: '#F5F5F5',
  				300: '#D4D4D4',
  				400: '#A3A3A3',
  			},
  			'bs-red': {
  				DEFAULT: '#FF6B35',
  				dark: '#E55A2B',
  				light: '#FF8A65',
  			},
  			'bs-success': '#4ADE80',
  			'bs-warning': '#FBBF24',
  			'bs-error': '#EF4444',
  			'bs-info': '#3B82F6',
  			// Keep existing colors for backward compatibility
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}

