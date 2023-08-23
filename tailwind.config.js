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
          DEFAULT: '#1b1d21',
          500: "#1b1d2180",
        },
        cream: '#e6936a',
        gray: {
          DEFAULT:  '#cdcdce',
          100: '#ccc',
          500: '#888'
        }


      }
    },
  },
  plugins: [],
}

