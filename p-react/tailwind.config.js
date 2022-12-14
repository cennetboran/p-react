/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5E6085",
        secondary: "#000958",
        navbar: "#232323",
        background: "#fffaf5",
        text: "#555555",
      },
      fontFamily: {
        heading: ["Slackey-Regular"],
      },
    },
  },
  plugins: [],
};
