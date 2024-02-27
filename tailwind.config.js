/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			tablet: "640px",
			laptop: "1024px",
			desktop: "1280px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: {
				DEFAULT: "#ffffff",
				50: "#f1f5f8",
			},
			gray: {
				light: "#E9EAF2",
				dark: "#c3c2c5",
			},
			// label: "#382f26",
			label: "#0a0049",
			orange: {
				DEFAULT: "#f7ba90",
				100: "#f18943",
				200: "#ef721e",
			},
			yellow: "#ffc600",
			lilac: {
				DEFAULT: "#e6d7fc",
				200: "#9282ff",
			},
		},
	},
	plugins: [],
};
