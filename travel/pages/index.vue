<template>
<div class='home'>
  <div class='scroll-container'>
    <div class='clouds'>
<img class='cloud' src='@/assets/clouds.png'></div>
</div>
<div class='scroll-container2'>
  <div class='clouds2'>
<img class='cloud2' src='@/assets/clouds.png'></div>
</div>
  <!--<nuxt-link class="card-link" to="/trips">Enter Site</nuxt-link>-->
  <div class='quote-container'>
      <p v-if='this.quotes.q' class="quote">{{this.quotes.q.toLowerCase() | ALLCAPs }}</p>
      <p v-if='this.quotes.a' class='author'>{{this.quotes.a.toLowerCase() | PascalCase }}</p>
</div></div>
</template>
<script>
import {
  quotes
} from '../store/util.js'
export default {
  name: 'Home',
  methods: {
    startInterval: function() {
      setInterval(() => {
        if (this.textIndex < quotes.length){
          this.quotes = quotes[this.textIndex]
          this.textIndex = this.textIndex + 1
        }
        else {
          this.textIndex = 0
          this.quotes = quotes[this.textIndex]
        }
      }, 6500);
    }
  },
  mounted() {
    this.quotes = quotes[0];
    this.startInterval();
  },
  filters: {
      PascalCase(value) {
          return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
      },
      ALLCAPs(value) {
          return value.replace(value, x => x.toUpperCase());
      }
  },
  data() {
    var textIndex = 1
    return {
      quotes: quotes,
      textIndex: textIndex
    }
  },
}
</script>
<style scoped lang='scss'>
.quote-container{
  position: relative;
  z-index: 2;
  font-family: 'Shadows Into Light', sans-serif;
  margin-left: auto;
  margin-right: auto;
  padding-top: .5em;
 }
 .home{
   position: relative;
   height: 100vh;
   min-height: 12rem;
   width: 100%;
   overflow: hidden;
   margin:0;
   padding:0;
   z-index: -1;
  background-image: linear-gradient(to bottom right, grey, lightblue);
}
.scroll-container{
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;
  .clouds {
    height: 100%;
    overflow: hidden;
    position: relative;
    transform:translateX(100%);
    animation: clouds 120s linear infinite;
    .cloud{
      width:100%;
    }
  }
}
.scroll-container2{
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;
  .clouds2 {
    height: 100%;
    overflow: hidden;
    position: relative;
    transform:translateX(100%);
    animation: clouds 120s linear 60s infinite;
    .cloud2{
      width:100%;
    }
  }
}
.quote{
  font-size:6vw;
  font-weight: boldest;
  color: black;
}
.author{
  font-size: 3vh;
  color: black;
}
</style>
