module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bgdark":"#141414"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
