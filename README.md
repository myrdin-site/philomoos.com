# Site internet Philomoos.com
Website for Philomoos workshops.

## Include
- PostCSS
- autoprefixer
- tailwindcss

## Install dependancies
Run `npm install` in project directory to install the needed dependancies.

## Compile CSS
Run `npm run build` to compile CSS.

## Optimizing before production
Change `purge` value to `true` in `tailwind.config.js` and run `npm run build` to purge unused CSS classes from
production CSS file.