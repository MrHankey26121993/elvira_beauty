export default {
  /*
  ** Headers of the page
  */
  ssr: false,
  // proxy: {
  //   '/api/': {target: process.env.BASE_URL, changeOrigin: true}
  // },
  //
  axios: {
    proxy: false,
    baseURL: process.env.BASE_URL + 'api', // Used as fallback if no runtime config is provided
  },

  privateRuntimeConfig: {
    url_api: process.env.BASE_URL,
    axios: {
      baseURL: process.env.BASE_URL + 'api'
    }
  },
  publicRuntimeConfig: {
    url_api: process.env.BASE_URL,
    axios: {
      baseURL: process.env.BASE_URL + 'api'
    }
  },

  head: {
    title: 'Studio Elvira Beauty',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description', name: 'description', content: '🌟 Réveillez-vous avec du maquillage !  🌟\n' +
          '\n' +
          ' Fatigué des routines de maquillage quotidiennes ?  Dites adieu à l\'eye-liner taché, aux sourcils inégaux et à la couleur des lèvres qui s\'estompe !  Découvrez la beauté du maquillage permanent chez Elvira Beauty.'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */

  server: {
    port: 3000, // default: 3000
    host: '127.0.0.1' // default: localhost
  },

  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "~/plugins/gsap", ssr: true},
    {src: '~/plugins/slick', mode: 'client'},
    '@/plugins/global',
    '@/plugins/vueeditor',
    '@/plugins/modal',
    '@/plugins/custom-directive',
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['nuxt-gsap-module'],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/gtm'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    extend(config, ctx) {
    },
    transpile: ["gsap", '@boyuai/vue-clamp', 'resize-detector']
  },

  gtm: {
    id: 'G-355K9CC0PT'
  },


  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/cp',
      home: '/cp'
    },

    strategies: {
      local: false,
      cookie: {
        token: {
          property: 'response.access_token',
          maxAge: 3600,
          required: true,
          type: 'Bearer',
          global: true
        },
        user: {
          property: 'response',
          scope: 'scope'
        },
        endpoints: {
          login: {url: '/data/login', method: 'post'},
          user: false,
        }
      }
    }
  },


}
