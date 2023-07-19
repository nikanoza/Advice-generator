/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "'Manrope', sans-serif",
      },
      boxShadow: {
        custom: "2px 0px 45px 10px #53FFAA;",
      },
    },
  },
  plugins: [],
};
