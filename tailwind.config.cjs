/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-radix")()],
};
