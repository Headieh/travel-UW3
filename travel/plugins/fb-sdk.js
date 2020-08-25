const vue_fb = {}

vue_fb.install = function install(Vue, options) {
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
        console.log('setting fb sdk')
    }(document, 'script', 'facebook-jssdk'))

  /* window.fbAsyncInit = function onSDKInit() {
        FB.init(options)
        FB.AppEvents.logPageView()
        Vue.FB = FB
        window.dispatchEvent(new Event('fb-sdk-ready'))
    } */
    Vue.FB = undefined
}

import Vue from 'vue'

Vue.use(vue_fb, {
    appId: '670822760024262',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.9'
})
