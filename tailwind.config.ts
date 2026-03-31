import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7f8fb",
        foreground: "#111827",
        border: "#e5e7eb",
        muted: "#667085",
        surface: "#ffffff",
        primary: {
          DEFAULT: "#5b73f7",
          foreground: "#ffffff",
          soft: "#eef2ff",
        },
        accent: {
          blue: "#dbeafe",
          violet: "#ede9fe",
        },
        success: "#0f9f6e",
        warning: "#f59e0b",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
        panel: "0 10px 30px rgba(15, 23, 42, 0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["Segoe UI", "Arial", "Helvetica", "sans-serif"],
        mono: ["Consolas", "Monaco", "Courier New", "monospace"],
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top right, rgba(91, 115, 247, 0.14), transparent 35%), radial-gradient(circle at top left, rgba(99, 102, 241, 0.08), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;
