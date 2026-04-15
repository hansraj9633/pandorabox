import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        background: {
          DEFAULT: "#0a0a0f",
          secondary: "#0f0f1a",
          elevated: "#13131f",
          card: "#15151f",
        },
        // Border system
        border: {
          DEFAULT: "#1e1e2e",
          subtle: "#16161f",
          bright: "#2a2a3f",
        },
        // Brand accent — soft blue-violet
        accent: {
          DEFAULT: "#6366f1",
          soft: "#818cf8",
          muted: "#4f46e5",
          glow: "rgba(99,102,241,0.15)",
          "glow-md": "rgba(99,102,241,0.25)",
        },
        // Secondary accent — violet
        violet: {
          accent: "#8b5cf6",
          muted: "#7c3aed",
          glow: "rgba(139,92,246,0.12)",
        },
        // Text hierarchy
        text: {
          primary: "#f1f0ff",
          secondary: "#a9a8c0",
          muted: "#5f5e7a",
          faint: "#3a3a52",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-geist-sans)", "ui-sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 100%)",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(99,102,241,0.12)",
        "glow-md": "0 0 40px rgba(99,102,241,0.18)",
        "glow-lg": "0 0 80px rgba(99,102,241,0.15)",
        "card": "0 1px 0 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 1px 0 0 rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2)",
        "nav": "0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4)",
        "button-glow": "0 0 20px rgba(99,102,241,0.3), 0 4px 12px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
