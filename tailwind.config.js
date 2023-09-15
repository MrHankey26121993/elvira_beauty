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
        cream: {
          DEFAULT: '#e6936a',
          'light': '#bd9c8d'
        },
        gray: {
          DEFAULT:  '#cdcdce',
          100: '#ccc',
          500: '#888'
        }
      },
      lineClamp: {
        8: '8',
        7: '7',
      },
    },
  },
  plugins: [],
}

