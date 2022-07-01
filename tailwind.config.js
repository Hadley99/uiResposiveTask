/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inputShadow:
          "0 3px 9px rgb(50 50 9 / 0%), 3px 4px 8px rgb(0 131 255 / 10%)",
      },
      colors: {
        primary: "#0083ff",
        customGray: "#a7a8af",
        customRed: "#f0345d",
        customGreen: "#2ecf88",
        customYellow: "#faad40",
        customOrange: "#e8934d",
        customPurple: "#c02aa3",
      },
    },
  },
};
// screens: {
//   xs: "0px",
//   sm: "600px",
//   md: "900px",
//   lg: "1200px",
//   xl: "1536px",
// },
// container: {
//   center: true,
//   padding: "16px",
// },
