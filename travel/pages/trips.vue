<template>
<div class="Trips">
  <b-row>
    <b-col lg='2' sm="12">
      <div class="search-wrapper">
        <label>
          <h2>Search</h2>
        </label>
        <input class='search' type="text" v-model="search" placeholder="Search Places" />
        <div class='side'>

          <ul class="side__list" data-title="Central America">
            <input checked type="checkbox" v-on:click="checkCA = !checkCA" @click="areaFilter(getSelectedOptions(checkCA, checkA, checkE))" />

            <div v-for="(card, idx) in decks" v-bind:key="idx">
              <div v-if='card.area == "Central America"'>
                <li class="side__item">
                  {{card.location}}
                </li>
              </div>
            </div>
          </ul>
          <ul class="side__list" data-title="Asia">
            <input checked type="checkbox" v-on:click="checkA = !checkA" @click="areaFilter(getSelectedOptions(checkCA, checkA, checkE))" />
            <div v-for="(card, idx) in decks" v-bind:key="idx">
              <div v-if='card.area == "Asia"'>
                <li class="side__item">
                  {{card.location}}
                </li>
              </div>
            </div>
          </ul>
          <ul class="side__list" data-title="Europe">
            <input checked type="checkbox" v-on:click="checkE = !checkE" @click="areaFilter(getSelectedOptions(checkCA, checkA, checkE))" />
            <div v-for="(card, idx) in decks" v-bind:key="idx">
              <div v-if='card.area == "Europe"'>
                <li class="side__item">
                  {{card.location}}
                </li>
              </div>
            </div>
          </ul>
          <!-- Other should not be shown but is there incase
          new continent needs to be added-->
          <div v-for="(card, idx) in decks" v-bind:key="idx">
            <div v-if='!["Europe", "Asia", "Central America"].includes(card.area)'>
              <ul class="side__list" data-title="Other">
                <li class="side__item">
                  {{card.location}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </b-col>
    <b-col lg='10' sm="12">
      <div class='card-multiple'>
        <b-row>

           <b-col md='6' lg='4' sm="12" v-for="(card, idx) in flist"  v-bind:key="idx" :id="card.id">

           <card-single :card='card' :money="money" v-bind:key='card.id'> </card-single>

          </b-col>

        </b-row>
      </div>
    </b-col>
  </b-row>

</div>
</template>

<script>
import {
  decks
} from '../store/util.js'
import {
capi
} from '../store/apidefaults.js'

import Card from '@/components/Card.vue'
import axios from 'axios'

export default {
  name: 'Trips',
  components: {
    'card-single': Card
  },
  computed: {
    flist: function() {
      return this.decks.filter(function(litem) {
        let areaSet = this.area != []
        let searchSet = this.search != ''
        let includesSearchTerm = (litem.location.toLowerCase().includes(this.search.toLowerCase()))
        let isInArea = (this.area.includes(litem.area.toLowerCase()))
        if (areaSet && searchSet) {
          return includesSearchTerm && isInArea
        } else if (areaSet) {
          return isInArea
        } else if (searchSet) {
          return includesSearchTerm
        }
        return true
      }, this)

    }

  },
  mounted() {
    axios
      .get(`${this.url_base}${this.api_key}${this.query}${this.allcur},${this.us},${this.eu}`)
      .then(
        response => {
          (this.money = response.data);
          console.log('Currency API Data:', this.money);
        }
      )
      .catch(
        response => {
          console.log(
            'Currency API has errored - Either max queries have been reached or trying to access on netlify. Netlify only processes data with SSL Encryption, did not pay for that version of the api therefore uses defined values for default');
          (this.money = capi);
        },
        error => {
          console.log('ERROR');
          this.errored = true;
        })

      .finally(() => this.loading = false)
  },

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

    var currencies = [];
    decks.forEach(function(obj) {
      if (obj['cur'] && obj['cur'] != 'EUR' && obj['cur'] != 'USD') {
        currencies.push(obj['cur']);
      }
    })
    var currencies_all = currencies.join(',')


    return {

      url_base: 'http://data.fixer.io/api/latest?access_key=',
      api_key: 'fc2215a03ad52fb8e46911740d64f97a',
      query: '&symbols=',
      us: 'USD',
      eu: 'EUR',
      allcur: currencies_all,
      loading: true,
      money: null,
      errored: false,
      search: '',
      area: '',
      checkCA: true,
      checkA: true,
      checkE: true,

      getSelectedOptions: function(checkCA, checkA, checkE) {
        var opts = [];
        if (checkCA) {
          opts.push('central america')
        }
        if (checkA) {
          opts.push('asia')
        }
        if (checkE) {
          opts.push('europe')
        }

        opts = opts.map(item => item.toLowerCase());
        return opts;
      },


      areaFilter: function(area) {
        console.log("area filter with ", area)
        this.area = area
      },

      currencies: currencies,

      decks: decks.filter(function(litem) {
        return litem.area != null;
      })



    }
  }
};
</script>



<style scoped lang='scss'>

.Trips {
    padding: 1rem;
}
.side {
    margin-top: 1rem;
    text-align: left;
    display: block;
    padding: 0.5rem;
    &__list {
        text-align: right;
    }
    &__list[data-title]::before {
        content: attr(data-title);
    }
}

.search {
    display: block;
    width: 95%;
    padding: 1rem;

    color: rgb(49, 49, 49);
    font-size: 1rem;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    box-shadow: 0 0 8px rgba(0, 0, 0, .25);
    background-color: rgba(255, 255, 255, .5);
    border-radius: 0 16px 0 16px;
    transition: 0.4s;
}

.search:focus {
    box-shadow: 0 0 16px rgba(0, 0, 0, .25);
    background-color: rgba(255,255,255,.75);
    border-radius: 16px 0 16px 0;
}

ul {
    display: block;
    padding-left: 0;
    padding-right: 2rem;
    @include media-query($mq: 'md') {
        display: inline-block;
    }
    li{
      text-align: right;
      padding-right: .75em;
    }
}

ul[data-title]::before {
    content: attr(data-title);
    text-decoration: underline;
    font-weight: bold;
    //padding-right: .5em;
    margin-top: 1rem;

}
footer {
    text-align: left;
}
h2 {
    padding-top: 1rem;
    text-align: center;
}

</style>
