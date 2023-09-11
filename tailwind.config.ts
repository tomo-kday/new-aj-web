import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				nero: "#222222",
				"night-rider": "#333333",
				"dim-gray": "#646464",
				gainsboro: "#E0E0E0",
				"white-smoke": "#F4F4F4",
				"navy-blue": "#0B82CA",
				"dodger-blue": "#1B9DEA",
				"alice-blue": "#DFF3FF",
				orange: "#FFAE00",
				gorse: "#FFD83B",
				cinnabar: "#E24848",
				"wild-watermelon": "#FF6477",
				malachite: "#06C755",
				"pigment-green": "#09AD43",
			},
			lineHeight: {
				"extra-loose": "2.5",
				"18": "72px",
			},
			fontSize: {
				tiny: ["10px", "15px"],
			},
		},
	},
	plugins: [],
};
export default config;
