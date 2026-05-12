import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui"],
        mono: ["Geist Mono", "ui-monospace"],
        serif: ["Instrument Serif", "serif"],
      },
      colors: {
        ink: {
          950: "#050608",
          900: "#0a0c10",
          850: "#0e1117",
          800: "#13171f",
          700: "#1a1f2a",
          600: "#252a37",
          500: "#3a4150",
          400: "#5a6373",
          300: "#8b94a3",
          200: "#c7ccd4",
          100: "#e8eaed",
        },
        accent: {
          DEFAULT: "#25D366",
          glow: "#25D366",
          deep: "#128c7e",
          soft: "#a7f3c8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
