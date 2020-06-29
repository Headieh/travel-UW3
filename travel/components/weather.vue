<template>
  <div class="wrapper">
    <section class="container" v-if="countries">
<p> Average Weather Data Collected from {{countries.meta.start}} to {{countries.meta.end}} </p>
        <chart :country="countries.data"/>
    </section>
  </div>
</template>

<script>
import chart from './chart.vue'
import axios from 'axios'
import {
wapi
} from '../store/apidefaults.js'

export default {
  components: {
    chart
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      url_base: 'https://api.meteostat.net/v2/point/',
      loading: true,
      countries: null,
      errored: false
    }
  },
  mounted () {
  axios
    .get(`${this.url_base}climate?lat=${this.card.lat}&lon=${this.card.lon}`)

    .then(
      response => {
        (this.countries = response.data);
        console.log('Weather API Data:', this.countries);
      }
    )
    .catch(
      response => {
        console.log(
          'The Weather API has errored - uses defined values below for default');
        //console.log(response);
        (this.countries = wapi);
      },
      error => {
        console.log('ERROR');
        //console.log(error);
        this.errored = true;
      })



    .finally(() => this.loading = false)
  }

}
</script>

<style scoped lang='scss'>
.container {
  margin: auto;
  text-align: center;
}
p{
  padding:0;
  margin:0;
  display:block;
}

</style>
