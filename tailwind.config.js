/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#efebe9",
          100: "#ded6d2",
          200: "#cec2bc",
          300: "#beaea5",
          400: "#ae9a8f",
          500: "#9d8578",
          600: "#ddb379",
          700: "#7d5d4b",
          800: "#6c4835",
          900: "#5c341e",
        },
        accent: {
          50: "#e7ebed",
          100: "#ced7db",
          200: "#b6c3c9",
          300: "#9eafb7",
          400: "#869ba5",
          500: "#6d8792",
          600: "#557380",
          700: "#3d5f6e",

          800: "#0c374a",
          900: "#082734",
        },
      },
    },
  },
  plugins: [],
};
