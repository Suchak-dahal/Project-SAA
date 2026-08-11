/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FBF9F5",
          "cream-dark": "#F8F5F0",
          espresso: "#3B2F2F",
          gold: "#C5A059",
          "gold-hover": "#B59049",
          olive: "#7E775B",
          "olive-hover": "#68624B",
          rose: "#B39A8E",
          offwhite: "#F4EFE6",
          "offwhite-dark": "#EAE3D5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
