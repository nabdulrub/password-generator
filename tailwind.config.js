/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "background-clr": "var(--background-clr)",
        "container-clr": "var(--container-clr)",
        "accent-clr": "var(--accent-clr)",
        "title-clr": "var(--title-clr)",
        "text-clr": "var(--text-clr)",
        "strength-clr": "var(--strength-clr)",
      },
    },
  },
  plugins: [],
};
