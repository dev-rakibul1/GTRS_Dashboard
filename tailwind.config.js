/** @type {import('tailwindcss').Config} */
// 0161CD

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0161CD",
          secondary: "#8cff95",
          accent: "#e276ac",
          neutral: "#1D262D",
          "base-100": "#F1F2F4",
          info: "#88A9D7",
          success: "#20D565",
          warning: "#FAA020",
          error: "#E74B36",
          // dipDark: "#1D262D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
