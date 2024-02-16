/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},

		fontFamily: {
			"han-zi": "Han Zi",
			"dm-sans": "DM Sans",
		},

		colors: {
			white: "#DADAC2",
			yellow: "#FFBE3B",
			black: "#332022",
			red: "#A51C2C",
		},
	},
	plugins: [],
};
