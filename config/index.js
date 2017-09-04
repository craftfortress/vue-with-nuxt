// listen input environment as parameter
const argv = require('minimist')(process.argv.slice(2))
const environment = argv.environment || 'development'

// listen input port or default
process.env.PORT = argv.port || 4200

/**
 * Custom configuration nuxt
 */
module.exports = {
  // Root resource code
  srcDir: 'app/',
  // define environment, call with 'process.env.(environmentName)'
  env: require('./environment')(environment),
  // always use example middleware
  router: {
    middleware: 'example'
  },
  // Headers of the page html
  head: {
    title: 'vue-with-nuxt',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Vue.js with Nuxt.js Framework'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  // add css global
  css: ['~assets/css/main.scss'],
  // add plugin here
  plugins: [
    {src: '~/plugins/loader', ssr: false},
    {src: '~/plugins/jquery.min', ssr: false},
    {src: '~/plugins/facebooksdk', ssr: false}
  ],
  // Customize the progress-bar color
  loading: {color: '#3B8070'},
  // Build configuration
  build: {
    // Run ESLINT on save
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
      }
    }
  }
}
