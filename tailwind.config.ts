import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16a34a",
          dark: "#14532d",
          light: "#f0fdf4",
        },
        ink: "#1f2937",
        soft: "#6b7280",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(20, 83, 45, 0.08)",
        card: "0 4px 14px rgba(0, 0, 0, 0.06)",
      },
      maxWidth: {
        container: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
