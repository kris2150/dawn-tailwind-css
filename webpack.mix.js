const mix = require('laravel-mix');
const tailwindCSS = require('tailwindcss');

mix.js('src/js/app.js', 'assets')
   .sass('src/scss/app.scss', 'assets')
   .options({
    processCssUrls: false,
    postCss: [ tailwindCSS('tailwind.config.js') ]
   });