
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
      { hid: 'description', name: 'description', content: "This site is Headieh Nichole Godwin's personal project demonstrating Vue.js skills" },//process.env.npm_package_description ||
      { hid: 'fburl', property: 'og:url', content: 'https://nichole-travel.netlify.app'},
      { hid: 'fbttype', property: 'og:type', content: 'website'},
      { hid: 'fbtitle', property:'og:title', content:'Travel' },
      { hid: 'fdescription', property:'og:description', content:'look at vacation ideas!' },
      { hid: 'fbimg', property:'og:image', content:'https://raw.githubusercontent.com/Headieh/travel-UW3/master/travel/assets/costarica.png' },


      {hid: 'tcard', property:'twitter:card', content:"This site is Headieh Nichole Godwin's personal project demonstrating Vue.js skills" },
      {hid: 'ttitle', property:'twitter:title', content:'Travel' },
      {hid: 'tdescription', property:'twitter:description', content:'look at vacation ideas!' },
      {hid: 'timg', property:'twitter:image', content:'https://raw.githubusercontent.com/Headieh/travel-UW3/master/travel/assets/costarica.png' }

      //<meta name="twitter:card" content="summary">
      //<meta name="twitter:site" content="@publisher_handle">
      //<meta name="twitter:title" content="Page Title">
      //<meta name="twitter:description" content="Page description less than 200 characters">
      //<meta name="twitter:creator" content="@author_handle">
      //<meta name="twitter:image" content="http://www.example.com/image.jpg">


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
{src: '~plugins/fb-sdk.js', ssr: false},
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
