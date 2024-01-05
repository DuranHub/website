/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#ff004e',
					light: '#ff6695',
					dark: '#ff3371',
				},
				accent: {
					DEFAULT: '#283043',
					light: '#535969',
					dark: '#181d28',
				},
				success: {
					DEFAULT: '#13C144',
					light: '#2BC757',
					dark: '#0D8730',
				},
				tertiary: {
					DEFAULT: '#78a2bb',
					light: '#a1becf',
					dark: '#486170',
				},
				error: {
					DEFAULT: '#ff001f',
					light: '#ff1a35',
					dark: '#b30016',
				},
			},
		},
	},
	plugins: [],
}
