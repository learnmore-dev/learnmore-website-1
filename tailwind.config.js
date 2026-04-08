/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e63946",
        "primary-dark": "#d00000",
        secondary: "#7209b7",
        accent: "#4cc9f0",
        dark: "#1a1a2e",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in": "slideInRight 0.5s ease-out",
        "pulse-ring": "pulseRing 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(230, 57, 70, 0.4)" },
          "70%": { boxShadow: "0 0 0 10px rgba(230, 57, 70, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(230, 57, 70, 0)" },
        },
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 20px rgba(0, 0, 0, 0.08)",
        large: "0 8px 30px rgba(0, 0, 0, 0.12)",
        xl: "0 20px 40px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },
    },
  },
  plugins: [],
};
