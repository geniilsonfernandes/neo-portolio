import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
          lg: "904px",
          xl: "904px",
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
          100: "#121212",
        },
      },
    },
  },
  plugins: [],
};
export default config;
