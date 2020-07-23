
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Travel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "This site is Headieh Nichole Godwin's personal project demonstrating Vue.js skills" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script:700%7CShadows+Into+Light%7COpen+Sans+Condensed:300&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [

  ],

  //css: [
  //  '@/assets/scss/main.scss'
//]

  /*
  ** Plugins to load before mounting the App
  */


  plugins: [

     {src: '~plugins/vuelayers.js', ssr: false},
   { src: '~plugins/vue-highcharts.js', ssr: false }],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
