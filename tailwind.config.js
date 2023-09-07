/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts,html}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        black:  {
          DEFAULT: '#141619',
          500: "#1b1d2180",
        },
        cream: '#ab6e4f',
        gray: {
          DEFAULT:  '#999999',
          100: '#989898',
          500: '#888'
        },
        white: '#bebebe'
      }
    },
  },
  plugins: [],
}

