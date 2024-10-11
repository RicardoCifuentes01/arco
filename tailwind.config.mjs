

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
			xl: '1200px',
		},
		colors: {
			'red': '#FF332F',
			'yellow': '#FFA42F',
			'white': '#FFFFFF',
			'lightGrey': '#E2E2E2',
			'darkGrey': '#A3A3A3',
			'black': '#5F5F5F'
		},
		extend: {
			gridTemplateAreas: {
				'smMain': [
					'title',
					'description',
					'violin',
					'title2',
					'description2a',
					'description2b',
					'description2c'
				],
				'mdMain': [
					'title violin',
					'description violin',
					'title2 violin',
					'description2a violin',
					'description2b description2b',
					'description2c description2c'
				],
				'lgMain': [
					'title violin',
					'description violin',
					'title2 violin',
					'description2a violin',
					'description2b violin',
					'description2c description2c'
				],
				'xlMain': [
					'aboutMenu title violin description',
					'description2b description2b violin title2',
					'description2c description2c violin description2a',
				],
			},
			gridTemplateRows: {
				'smRowslMain': 'repeat(7, auto)',
				'mdRowsMain': 'repeat(6, auto)',
				'lgRowsMain': 'repeat(6, auto)',
				'xlRowsMain': 'repeat(3, auto',
			},
			gridTemplateColumns: {
				'mdColumnsMain': 'repeat(2, 1fr)',
				'lgColumnsMain': 'repeat(2, 1fr)',
				'xlColumnsMain': 'min-content',
			},
			fontFamily: {
				'italiana': ['Italiana', 'serif'],
				'inter': ['Inter Variable', 'serif']
			}
		},
	},
	plugins: [
		require('@savvywombat/tailwindcss-grid-areas')
	],
}