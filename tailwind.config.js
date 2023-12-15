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
      button: "0px 0px 7px rgba(0, 0, 0, 0.2931)",
    },
    borderRadius: {
      DEFAULT: "5px",
    },
    extend: {
      spacing: {
        1.25: "5px",
        1.75: "7px",
        4.5: "18px",
        4.75: "19px",
        5.25: "21px",
        5.5: "22px",
        7.5: "30px",
        9.75: "39px",
        12.5: "50px",
        13: "52px",
        15: "60px",
        15.5: "62px",
        18.5: "74px",
        18.75: "75px",
        26: "104px",
        34: "136px",
        50: "200px",
        66: "264px",
        84: "336px",
        120: "480px",
      },
      minWidth: {
        50: "200px",
      },
      maxWidth: {
        120: "480px",
      },
    },
  },
  plugins: [],
};
