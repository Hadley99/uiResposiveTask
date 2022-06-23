/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
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
  plugins: [],
};
// screens: {
//   xs: "0px",
//   sm: "600px",
//   md: "900px",
//   lg: "1200px",
//   xl: "1536px",
// },
