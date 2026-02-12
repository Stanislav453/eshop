// tailwind.config.js (alebo .ts)
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        // xl: "86.25rem",
        xl: "71.25rem",
      },
      fontFamily: {
        sans: ["Manrope", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "icon-sm": "1.3rem",
      },
      colors: {
        "box-brand-color": "#F7F7F7",
        "neutral-primary": "#333333",
        "neutral-secondary": "#848080",
        "neutral-tertiary": "#ffffff",
        "neutral-tertiary-hover": "#e6e6e6",
        "special-primary": "#FBE134",
        "special-primary-hover": "#333333",
        "special-scondary-hover": "#ffffff",
        "button-brand-primary": "#333333",
        "button-brand-primary-hover": "#FC466B",
      },
    },
  },
  plugins: [],
};
