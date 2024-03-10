/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,md,mdx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
