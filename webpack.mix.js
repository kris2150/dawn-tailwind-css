const mix = require('laravel-mix');
const tailwindCSS = require('tailwindcss');

mix.js('src/js/app.js', 'assets/app.js')
   .js('src/js/react-components/CartToolTip.jsx', 'assets/react-components.js').react()
   .js('src/js/algolia/AlgoliaSearch.jsx', 'assets/react-algolia.js').react()
   .sass('src/scss/app.scss', 'assets/app.css')
   .options({
    processCssUrls: false,
    postCss: [ tailwindCSS('tailwind.config.js') ]
   });