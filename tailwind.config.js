/** @type {import('tailwindcss').Config} */
// export default module.exports = {
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#00040f",
				secondary: "#00f6ff",
				secondaryTransparent: "rgba(0, 246, 255, 0.5)",
				dimWhite: "rgba(255, 255, 255, 0.7)",
				dimBlue: "rgba(9, 151, 124, 0.1)",
			},

			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},

			transitionProperty: {
				'color': 'color',
				'bg': 'background-color',
				'outline': 'outline',
				// 'spacing': 'margin, padding',
			}
		},
		screens: {
			xs: { "min": "480px" },
			ss: { "min": "620px" },
			sm: { "min": "768px" },
			md: { "min": "1060px" },
			lg: { "min": "1200px" },
			xl: { "min": "1700px" },
		},
	},
	plugins: [],
};
