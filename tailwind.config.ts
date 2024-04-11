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
                orange: "#ed9012",
                grey: "#222222",
            },
            gridTemplateColumns: {
                box: "repeat(8, minmax(30px, 190px))",
                md: "repeat(8, 80px)",
                lr: "repeat(8, 190px)",
            },
            screens: {
                xsm: "375px",
                sm: "425px",
                md: "768px",
                lr: "1024px",
                xl: "1440px",
                "2xl": "2560px",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;
