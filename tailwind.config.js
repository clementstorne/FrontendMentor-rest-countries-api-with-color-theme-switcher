/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      darkBackground: "#202c36",
      darkElement: "#2a3744",
      darkText: "#ffffff",
      lightBackground: "#fafafa",
      lightElement: "#ffffff",
      lightText: "#111517",
      lightInput: "#858585",
    },
    fontFamily: {
      sans: ["Nunito Sans"],
    },
    extend: {},
  },
  plugins: [],
};
