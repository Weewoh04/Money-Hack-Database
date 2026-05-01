import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbf4e8",
        ink: "#1f2a24",
        moss: "#247a4d",
        leaf: "#dcefd8",
        honey: "#f3c969",
        clay: "#d9855b",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(31, 42, 36, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
