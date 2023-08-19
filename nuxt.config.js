export default {
  /*
  ** Headers of the page
  */
  ssr: false,
  proxy: {
    '/api/': {target: 'http://elvira.locl/', changeOrigin: true}
  },

  axios: {
    proxy: true,
  },

  privateRuntimeConfig: {
    url_api: 'http://elvira.locl/',
    axios: {
      baseURL: '/'
    }
  },
  publicRuntimeConfig: {
    url_api: 'http://elvira.locl/',
    axios: {
      baseURL: '/api'
    }
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
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
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next',],
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
          autoprefixer: {}
        }
      }
    },
    extend(config, ctx) {
    },
    transpile: ["gsap"]
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
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
