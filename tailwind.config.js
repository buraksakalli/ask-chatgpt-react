/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        inter: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        "chat-bg": "#363636",
        "chat-placeholder": "#AFAFAF",
        "chat-button": "#D9D9D9",
        "primary-100": "#D9D9D9",
        "primary-44": "#B0B0B0",
        "secondary-100": "#363636",
        "secondary-60": "#8A8A8A",
      },
    },
  },
  plugins: [],
};
