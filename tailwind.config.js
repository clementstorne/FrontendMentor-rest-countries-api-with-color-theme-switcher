/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      gunmetal: "#202c36",
      gunmetalLight: "#2a3744",
      white: "#ffffff",
      seasalt: "#fafafa",
      night: "#111517",
      battleshipGray: "#848484",
    },
    fontFamily: {
      sans: ["Nunito Sans"],
    },
    dropShadow: {
      base: "0px 2px 4px rgba(0, 0, 0, 0.0562)",
    },
    extend: {
      spacing: {
        15: "30px",
      },
    },
  },
  plugins: [],
};
