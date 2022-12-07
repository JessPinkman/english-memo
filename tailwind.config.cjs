/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        prim: "#feeafa",
        sec: "#8e9aaf",
        success: "#2a9d8f",
        alert: "#f4a261",
        cta: "#a2d2ff",
        shy: "#bde0fe",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
