/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      // sans: ['"Segoe UI"', "Roboto", "sans-serif"],
      // poppins: ["Poppins", "sans-serif"],
      // roboto: ["Roboto", "sans-serif"],
      gothamMedium: ["Gotham Medium", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
