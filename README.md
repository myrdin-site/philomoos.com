# Site internet Philomoos

Website for Philomoos workshops.

## Inclus
- PostCSS
- autoprefixer
- tailwindcss

## Compile CSS
Run `npm run build` to compile CSS.

## Optimizing before production
Change `purge` at `true` in `tailwind.config.js` and run `npm run build` to purge unused CSS classes from
production CSS file.
