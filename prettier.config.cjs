/* eslint-env node */
/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['clsx', 'tv'],
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  singleQuote: true,
};

module.exports = config;
