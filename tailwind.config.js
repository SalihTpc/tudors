/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        inter: ["Inter"],
      },
      colors: {
        tudorsGray: "#F0F0F0",
        tudorsBlue: "#2148C0",
      },
    },
  },
  plugins: [],
};
