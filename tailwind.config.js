module.exports = {
  purge: {
      enabled: false, // change at true for production
      content: ['./dist/**/*.html'],
    },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
