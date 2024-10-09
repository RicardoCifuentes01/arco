/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',

	],
	theme: {
		screens: {
			sm: '300px',
			md: '600px',
			lg: '800px',
			xl: '1200px'
		},
		colors: {
			'red': '#FF332F',
			'yellow': '#FFA42F',
			'white': '#FFFFFF',
			'lightGrey': '#E2E2E2',
			'darkGrey': 'A3A3A3',
			'black': '#5F5F5F'
		},
		extend: {},
	},
	plugins: [
	],
}