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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#61278B",
        'dark-blue': '#3642CA',
        'border-line':'#F7ECFF',

      },
      boxShadow: {
        'custom-purple': '0 0 2px #E7C5FF',
      },
    },
  },
  plugins: [],
};
export default config;
