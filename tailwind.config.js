/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './src/js/react-components/*.jsx',
    './src/js/algolia/*.jsx',
    './src/js/algolia/components/*.jsx',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    screens: {
      sm: '375px',
      'md-down': { max: '767.98px'}
    },
    extend: {},
  },
  plugins: [],
}
