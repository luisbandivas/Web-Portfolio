/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "f-light": "#F5F5F5", "bg-dark": "#292929" },
      fontSize: {
        "p-sm": "13.33px",
        "p-rg": "16px",
        "p-lg": "22.62px",
        h5: "31.99px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
