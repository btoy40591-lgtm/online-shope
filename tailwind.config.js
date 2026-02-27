export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#b31d6c", // add custom color
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
