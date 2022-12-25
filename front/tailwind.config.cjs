/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')",
      },
    },
    fontFamily: {
      'pokemon':'Rajdhani'
    },
   
  },
  plugins: [],
}
