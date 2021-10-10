module.exports = {
  purge: {
    enabled: true,
    content: ["./dist/**/*.html"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {
      fontFamily: {
        headline: [""],
      },
      colors: {
        primaryColor: "#2aafc0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
