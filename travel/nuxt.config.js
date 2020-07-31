export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Travel',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: "This site is Headieh Nichole Godwin's personal project demonstrating Vue.js skills"
      },
      //https://developers.facebook.com/tools/debug
      {
        hid: 'fburl',
        property: 'og:url',
        content: 'https://nichole-travel.netlify.app'
      },
      {
        hid: 'fbtype',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'fbtitle',
        property: 'og:title',
        content: 'Travel'
      },
      {
        hid: 'fdescription',
        property: 'og:description',
        content: 'look at vacation ideas!'
      },
      {
        hid: 'fbimg',
        property: 'og:image',
        content: 'https://nichole-travel.netlify.app/_nuxt/img/costarica.38deea4.png'
      },
      {
        hid: 'fbimgalt',
        property: 'og:image:alt',
        content: 'Costa Rica Beach - Manuel Antonio National Park'
      },
      //https://cards-dev.twitter.com/validator
      {
        hid: 'tcard',
        property: 'twitter:card',
        content: "summary"
      }

    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Dancing+Script:700%7CShadows+Into+Light%7COpen+Sans+Condensed:300&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
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


  plugins: [{
      src: '~plugins/fb-sdk.js',
      ssr: false
    },{
        src: '~plugins/tw-sdk.js',
        ssr: false
      },
    {
      src: '~plugins/vuelayers.js',
      ssr: false
    },
    {
      src: '~plugins/vue-highcharts.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js dev-modules
   */
   buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-173087916-2'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'//,
    //'@nuxtjs/google-analytics'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }

}
