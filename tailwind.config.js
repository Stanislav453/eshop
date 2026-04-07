export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        xl: "83.25rem",
      },
      width: {
        "our-product": "18.4375rem",
        "our-product-img-container": "12.5rem",
      },
      height: {
        "shop-product-container": "36.0625rem",
        "our-product-img-container": "12.5rem",
        baners: "630px",
      },
      fontFamily: {
        sans: ["Manrope", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "icon-sm": "1.3rem",
        "section-title": "2rem",
      },
      colors: {
        "box-brand-color": "#F7F7F7",
        "paragraph-primary": "#808080",
        "neutral-primary": "#333333",
        "neutral-secondary": "#848080",
        "neutral-tertiary": "#ffffff",
        "neutral-tertiary-hover": "#e6e6e6",
        "special-primary": "#FBE134",
        "special-primary-hover": "#333333",
        "special-scondary-hover": "#ffffff",
        "button-brand-primary": "#333333",
        "primary-hover": "#FC466B",
      },
    },
  },
  plugins: [],
};
