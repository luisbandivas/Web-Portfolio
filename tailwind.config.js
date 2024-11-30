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
      keyframes: {
        slideInL: {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideInR: {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideOutL: {
          from: { transform: "translateX(0)", opacity: "1" },
          to: { transform: "translateX(-100%)", opacity: "0" },
        },
        slideOutR: {
          from: { transform: "translateX(0)", opacity: "1" },
          to: { transform: "translateX(100%)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "100%": { opacity: 1 },
          "0%": { opacity: 0 },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slideInL: "slideInL 1s ease-out forwards",
        slideInR: "slideInR 1s ease-out forwards",
        slideOutL: "slideOutL 1s ease-in forwards",
        slideOutR: "slideOutR 1s ease-in forwards",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        spin: "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
