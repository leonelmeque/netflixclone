module.exports = {
  prefix:'tw',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "red": "#db0000",
      "black": "#000000",
      "white": "#fff",
      "brown": "#564d4d",
      "red-dark": "#831010"
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['serif']
    },
    extend: {},
  },
  plugins: [],
}