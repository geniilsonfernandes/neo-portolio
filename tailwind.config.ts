import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-left": "fade-in-left 0.5s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        yeseva: ["Yeseva One", "cursive"],
        inria: ["Inria Sans", "sans-serif"],
        purple: ["Purple Purse", "cursive"],
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "768px",
          xl: "768px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },

        center: true,
      },
      colors: {
        midnight: {
          950: "#000000",
          900: "#121212",
          800: "#1f1f1f",
          700: "#2c2c2c",
          600: "#383838",
          500: "#444444",
          400: "#505050",
          300: "#5d5d5d",
          200: "#6a6a6a",
          100: "#777777",
          50: "#838383",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
