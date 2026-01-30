// tailwind.config.js (alebo .ts)
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        xl: "86.25rem",
      },
      fontFamily: {
        sans: ["Manrope", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        "text-neutral-primary": "#333333",
        "text-neutral-secondary": "#848080",
      },
    },
  },
  plugins: [],
};
