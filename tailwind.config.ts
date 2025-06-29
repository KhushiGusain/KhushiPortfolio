import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: {
  				light: '#F9FAFB',
  				dark: '#0F172A',
  			},
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
  				DEFAULT: '#4F46E5', // Indigo
  				foreground: 'hsl(var(--primary-foreground))',
  				dark: '#4F46E5',
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
  				DEFAULT: '#14B8A6', // Teal
  				foreground: 'hsl(var(--accent-foreground))',
  				dark: '#14B8A6',
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: {
  				light: '#E5E7EB',
  				dark: '#334155',
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			surface: {
  				light: '#FFFFFF',
  				dark: '#1E293B',
  			},
  			text: {
  				primary: {
  					light: '#111827',
  					dark: '#F9FAFB',
  				},
  				secondary: {
  					light: '#6B7280',
  					dark: '#94A3B8',
  				},
  			},
  			amber: {
  				DEFAULT: '#F59E0B', // Vibrant Accent
  			},
  			indigo: {
  				soft: '#6366F1', // Soft Indigo
  			},
  			dark: {
  				DEFAULT: '#1a1a1a',
  				'50': '#f6f6f6',
  				'100': '#e7e7e7',
  				'200': '#d1d1d1',
  				'300': '#b0b0b0',
  				'400': '#888888',
  				'500': '#6d6d6d',
  				'600': '#5d5d5d',
  				'700': '#4f4f4f',
  				'800': '#454545',
  				'900': '#3d3d3d',
  				'950': '#1a1a1a',
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'scroll-slow': 'scroll 40s linear infinite',
  			'float': 'float 6s ease-in-out infinite',
  			'float-slow': 'float 8s ease-in-out infinite',
  			'float-slow-delayed': 'float 8s ease-in-out 2s infinite',
  			'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  		},
  		keyframes: {
  			scroll: {
  				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(-50%)' },
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-20px)' },
  			},
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  		},
  	}
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};

export default config;
