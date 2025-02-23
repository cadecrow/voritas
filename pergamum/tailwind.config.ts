import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
        // shadcn color theming. add your color theming in section below ---
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
  			},
        "palette-primary": {
					DEFAULT: 'hsl(var(--palette-primary-700))',
					50: 'hsl(var(--palette-primary-50))',
					100: 'hsl(var(--palette-primary-100))',
					200: 'hsl(var(--palette-primary-200))',
					300: 'hsl(var(--palette-primary-300))',
					400: 'hsl(var(--palette-primary-400))',
					500: 'hsl(var(--palette-primary-500))',
					600: 'hsl(var(--palette-primary-600))',
					700: 'hsl(var(--palette-primary-700))',
					800: 'hsl(var(--palette-primary-800))',
					900: 'hsl(var(--palette-primary-900))',
					950: 'hsl(var(--palette-primary-950))'
				},
        "palette-secondary": {
					DEFAULT: 'hsl(var(--palette-primary-700))',
					50: 'hsl(var(--palette-secondary-50))',
					100: 'hsl(var(--palette-secondary-100))',
					200: 'hsl(var(--palette-secondary-200))',
					300: 'hsl(var(--palette-secondary-300))',
					400: 'hsl(var(--palette-secondary-400))',
					500: 'hsl(var(--palette-secondary-500))',
					600: 'hsl(var(--palette-secondary-600))',
					700: 'hsl(var(--palette-secondary-700))',
					800: 'hsl(var(--palette-secondary-800))',
					900: 'hsl(var(--palette-secondary-900))',
					950: 'hsl(var(--palette-secondary-950))'
				}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      // backgroundImage: {
      //   pattern: "url('/images/pattern.webp')",
      // },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
