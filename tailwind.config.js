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
				darker: "#3d4852bf",
			},
			label: "#0a0049",
			orange: {
				DEFAULT: "#f7ba90",
				100: "#f18943",
				200: "#ef721e",
			},
			yellow: {
				DEFAULT: "#ffc600",
				light: "#ffe244",
				dark: "#cc9b00",
			},
			lilac: {
				DEFAULT: "#e6d7fc",
				200: "#9282ff",
			},
			green: {
				DEFAULT: "#4DB350",
				100: "#dcfce7",
				200: "#a6f7c2",
				dark: "#356737",
				darker: "#253D26",
				faded: "#6DA36F",
				cta: "#39a23c",
			},
			blue: "#1e90ff",
			pink: "#ff36a3",
		},
	},
	plugins: [],
};
