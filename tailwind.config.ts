import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                red: "#ff0000",
                green: "#00ff00",
                blue: "#0000ff",
                white: "#fff",
                black: "#000",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;
