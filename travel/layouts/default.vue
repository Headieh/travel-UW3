<template>
<div id="app">
  <header class='navs'>
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="head-collapse"></b-navbar-toggle>
      <b-collapse id="head-collapse" is-nav>
        <b-navbar-nav class="mr-auto">
          <ul>
            <li class="list-unstyled">
              <div class="fb-share-button" data-href="https://nichole-travel.netlify.app" data-layout="button"></div>
            </li>
            <li class="list-unstyled">
              <a class="twitter-share-button" href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-show-count="false">Tweet</a>
            </li>
          </ul>

          <ul>
            <li class="list-unstyled">
              <nuxt-link class="nav-item" to="/">Intro</nuxt-link>
            </li>
          </ul>

          <ul>
            <li class="list-unstyled">
              <nuxt-link class="nav-item" to="/trips">Trips</nuxt-link>
            </li>
          </ul>
          <ul>
            <li class="list-unstyled">
              <a href="#" ref="btnShow" @click="showModal('photocred')">Photo Credits</a></li>
          </ul>

        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <ul>
            <li class="list-unstyled">
              <a href="https://HNGodwin.com">Return to Portfolio </a></li>
          </ul>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
  <div id="bod">
    <nuxt />
  </div>

  <b-modal id="photocred" title='Photo Credits' size="xl">
    <div class="d-block">

      <p style="font-size: 0.9rem;font-style: italic;">
        <a href="https://www.flickr.com/photos/10185281@N05/1007499510" target="_blank">"....."</a>
        <span> by <a href="https://www.flickr.com/photos/10185281@N05" target="_blank">friedwater</a></span>
        is licensed under
        <a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" target="_blank" style="margin-right: 5px;">CC BY 2.0</a>
      </p>

      <p style="font-size: 0.9rem;font-style: italic;">
        <a href="https://www.flickr.com/photos/66003893@N00/819233982" target="_blank">"Trevi Fountain"</a>
        <span> by <a href="https://www.flickr.com/photos/66003893@N00" target="_blank">trozbo</a></span>
        is licensed under
        <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" target="_blank" style="margin-right: 5px;">CC BY-NC-SA 2.0</a>
      </p>

      <p style="font-size: 0.9rem;font-style: italic;">
        <a href="https://www.flickr.com/photos/33997420@N00/14879203024" target="_blank">"Hvar"</a>
        <span> by <a href="https://www.flickr.com/photos/33997420@N00" target="_blank">alchen_x</a></span>
        is licensed under
        <a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" target="_blank" style="margin-right: 5px;">CC BY-SA 2.0</a>
      </p>

      <p style="font-size: 0.9rem;font-style: italic;">
        <a href="https://www.flickr.com/photos/20777644@N05/3536595790" target="_blank">"DSC_0381"</a>
        <span> by <a href="https://www.flickr.com/photos/20777644@N05" target="_blank">amslerPIX</a></span>
        is licensed under <a target="_blank" href="https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC 2.0</a>
      </p>

      <p style="font-size: 0.9rem;font-style: italic;">
        <a href="https://www.flickr.com/photos/88827093@N00/32293308606" target="_blank">"Mask Temple"</a>
        <span> by <a href="https://www.flickr.com/photos/88827093@N00" target="_blank">SdosRemedios</a></span>
        is licensed under
        <a href="https://creativecommons.org/licenses/by-nd/2.0/?ref=ccsearch&atype=html" target="_blank" style="margin-right: 5px;">CC BY-ND 2.0</a>
      </p>

      <p style="font-size: 0.9rem;font-style: italic;">
        <a href="http://pngimg.com/download/4311" target="_blank">Clouds</a>
        <span> by <a href="http://pngimg.com/imgs/nature/cloud/" target="_blank">cloud PNG image</a></span>
        is licensed under
        <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" style="margin-right: 5px;">Creative Commons 4.0 BY-NC</a>
      </p>

    </div>
  </b-modal>

</div>
</template>

<style lang='scss'>
ul {
    display: inline-block;
    list-style-type: none;
    vertical-align: text-top;
    text-align: left;
}
ul[data-title]::before {
    content: attr(data-title);
    text-decoration: underline;
    font-weight: bold;
}
li {
    text-align: center;
    a {
        color: $lighten-black;
        display: block;
        padding: 0.5em;
        margin: 0.5em;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        &:focus,
        &:hover {
            text-decoration: underline;
            color: $darken-blue;
        }
    }
    a.router-link-exact-active {
        color: $black;
        font-weight: bold;
    }
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

<script>
export default {
  methods: {
    showModal(id) {
      console.log('modal id', id)
      this.$root.$emit('bv::show::modal', id, '#btnShow')
    },
    hideModal(id) {
      this.$root.$emit('bv::hide::modal', id, '#btnShow')
    },
    toggleModal(id) {
      this.$root.$emit('bv::toggle::modal', id, '#btnToggle')
    }
  },
  data() {
    return {}
  }
};
</script>
