/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			primary: {
				DEFAULT: "hsl(217, 71%, 53%)",
				foreground: "hsl(0, 0%, 100%)",
			},
			secondary: {
				DEFAULT: "hsl(0, 0%, 71%)",
				foreground: "hsl(0, 0%, 96%)",
			},
			success: {
				DEFAULT: "hsl(141, 53%, 53%)",
				foreground: "hsl(0, 0%, 100%)",
			},
			warning: {
				DEFAULT: "hsl(48, 100%, 67%)",
				foreground: "hsl(0, 0%, 96%)",
			},
			danger: {
				DEFAULT: "hsl(348, 100%, 61%)",
				foreground: "hsl(0, 0%, 100%)",
			},
			info: {
				DEFAULT: "hsl(204, 86%, 53%)",
				foreground: "hsl(0, 0%, 100%)",
			},
			light: {
				DEFAULT: "hsl(0, 0%, 96%)",
				foreground: "hsl(0, 0%, 21%)",
			},
			dark: {
				DEFAULT: "hsl(0, 0%, 21%)",
				foreground: "hsl(0, 0%, 96%)",
			},
			neo: {
				primary: {
					DEFAULT: "hsl(240, 100%, 50%)",
					foreground: "hsl(0, 0%, 100%)",
				},
				secondary: {
					DEFAULT: "hsl(0, 0%, 50%)",
					foreground: "hsl(0, 0%, 100%)",
				},
				success: {
					DEFAULT: "hsl(120, 100%, 25%)",
					foreground: "hsl(0, 0%, 100%)",
				},
				warning: {
					DEFAULT: "hsl(60, 100%, 50%)",
					foreground: "hsl(0, 0%, 0%)",
				},
				danger: {
					DEFAULT: "hsl(0, 100%, 50%)",
					foreground: "hsl(0, 0%, 100%)",
				},
				info: {
					DEFAULT: "hsl(195, 53%, 79%)",
					foreground: "hsl(0, 0%, 0%)",
				},
				light: {
					DEFAULT: "hsl(0, 0%, 100%)",
					foreground: "hsl(0, 0%, 0%)",
				},
				dark: {
					DEFAULT: "hsl(0, 0%, 0%)",
					foreground: "hsl(0, 0%, 100%)",
				},
			},
		},
		extend: {},
	},
	plugins: [],
};
