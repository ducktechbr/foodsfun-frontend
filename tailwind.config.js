module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				'1/8': '12.5%',
				'2/8': '25%',
				'3/8': '37.5%',
				'4/8': '50%',
				'5/8': '62.5%',
			},
			colors: {
				themeWhite: '#FFFFFF',
				themeSoft: '#FFF3F0',
				themeOrange: '#FF7527',
				themeGray: 'rgba(0,0,0,0.5)',
				golden: '#D6A84C',
			},
			borderRadius: {
				navBar: '20px',
			},
			dropShadow: { buttonIcon: '0 4px 4px rgba(0, 0, 0, 0.40)' },
			fontFamily: {
				theme: ['MuseoModerno'],
			},
		},
	},
	plugins: [],
};
