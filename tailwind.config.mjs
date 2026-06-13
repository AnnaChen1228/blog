import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FFFFFF',
				'secondary': '#EAB308',
				'accent': '#B45309',
				'text': '#292524',
				'card-bg': '#FFFBEB',
				'dk-primary': '#1C1917',
				'dk-secondary': '#FDE047',
				'dk-accent': '#F59E0B',
				'dk-text': '#E7E5E4',
				'dk-card-bg': '#292524',
			},
			fontFamily: {
				'display': ['"Space Grotesk"', 'Iansui', 'sans-serif'],
				'body': ['Iansui', 'Inter', 'sans-serif'],
			},
		},
	},
	darkMode: 'class',
	plugins: [
		typography,
	],
}
