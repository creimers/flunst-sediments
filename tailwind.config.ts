import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mud: {
          "50": "#efebe6",
          "100": "#dfd6cc",
          "200": "#bfad99",
          "300": "#9f8566",
          "400": "#7f5c33",
          "500": "#5f3300",
          "600": "#4c2900",
          "700": "#391f00",
          "800": "#261400",
          "900": "#130a00",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
