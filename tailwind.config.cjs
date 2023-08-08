/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'farmer-landing': "url('./src/assets/farmer-landing.jpg')",
			},
		},
	},
	plugins: [],
};
