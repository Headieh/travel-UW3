<template>
<div class='card-single'>
  <app-favs></app-favs>
  <div class="flipper" @click="flip()">
    <h2>{{card.location}}</h2>
  </div>
  <div class="card-flip" v-bind:class="{ 'is-flipped' : flipped }">
    <div class='card__face'>
      <div class="card__face--front">
        <cimg :card='card'></cimg>
      </div>
      <div class="card__face--back">
        <div class="card">
          <div class="card-block">
            <a href="#" ref="btnShow" @click="showModal(card.id+'weather')" class="card-link">Weather</a>
            <b-modal :id="card.id+'weather'" class="weather" title='Weather' size="xl">
              <div class="d-block">
                <b-dropdown class='ddm' id="searchW" :text='card.location' v-on:change="">
                  <b-dropdown-item class='ddi' v-for="d in decks" :key="d.id" :value="d.id" @click="d.id==card.id ? NULL :  hideModal(card.id+'weather'); showModal(d.id+'weather');">
                    {{d.location}}
                  </b-dropdown-item>
                </b-dropdown>
                <weather :card='card'></weather>
              </div>
            </b-modal>
            <a href="#" ref="btnShow" @click="showModal(card.id+'itinerary')" class="card-link">Itenerary Ideas</a>
            <b-modal :id="card.id+'itinerary'" class="itnry" title='Itinerary' size="xl">
              <div class="d-block">
                <b-dropdown id="searchI" :text='card.location' class="modal-title" v-on:change="">
                  <b-dropdown-item class='ddi' v-for="d in decks" :key="d.id" :value="d.id" @click="d.id==card.id ? NULL :  hideModal(card.id+'itinerary'); showModal(d.id+'itinerary');">
                    {{d.location}}
                  </b-dropdown-item>
                </b-dropdown>
                <p>Click on flags to see suggestions!</p>
                <itnry :card='card'></itnry>
              </div>
            </b-modal>
            <currency :card='card' :money='money' v-if="card.cur != 'USD'"></currency>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  decks
} from '../store/util.js'
import $ from 'jquery'
import Favorite from '@/components/Favorite.vue'
import weather from '@/components/weather.vue'
import currency from '@/components/currency.vue'
import itinerary from '@/components/itinerary.vue'
import cardimage from '@/components/Images.vue'

export default {
  name: 'card',
  props: {
    money: {
      Object,
      required: true
    },
    card: {
      type: Object,
      required: true
    }
  },
  components: {
    'app-favs': Favorite,
    'weather': weather,
    'itnry': itinerary,
    'cimg': cardimage,
    'currency': currency,
  },
  data() {
    return {
      flipped: false,
      decks: decks.filter(function(litem) {
        return litem.area != null;
      })
    }
  },
  methods: {
    flip: function() {
      this.flipped = !this.flipped;
      //console.log('flipped', this.flipped)
    },
    getImgUrl: function(pic) {
      return require('@/assets/' + pic)
    },
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

  }
};
</script>

<style scoped lang='scss'>


.ddi, .ddi:hover{
margin-right:.5rem;
text-align: left;
padding-right:.5rem;
background-color:white;
}

.ddm{
  margin:.25rem;
  padding:0rem;
}

.modal-title {
    text-align: center;
    padding-bottom: 1em;
    margin: auto;
}
.card-flip {
    perspective: 1000px;
}
.card-flip,
.card__face--back,
.card__face--front {
    width: auto;
    height: $card-height;
}
.card-flip.is-flipped .card__face {
    transform: rotateY(180deg);
}
.card__face {
    transition: transform 1s;
    transition-timing-function: linear;
    transform-style: preserve-3d;
    position: relative;
}
.card__face--back,
.card__face--front {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.card__face--front {
    width: 100%;
    z-index: 2;
    transform: rotateY(0deg);
}

p,a {
    display: block;
    padding: .25rem;
    &:hover {
        font-weight: bold;
    }
}

.favs {
    margin-top: 2em;
    display: inline-block;
    padding-right: 0.5rem;
}
.card__face--back {
    transform: rotateY(180deg);
}
.card-block {
    height: $card-height;
    width: auto;
    overflow-y: scroll;
    display: flex;
    padding-top: 4%;
    padding-bottom: 4%;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.flipper {
    margin-left: 1em;
    margin-top: 2em;
    width: auto;
    height: 8%;
    color: $lighten-black;
    vertical-align: top;
    position: relative;
    display: inline-block;
    cursor: pointer;
    &:after,
    &:before {
        @include underline-main;
    }
    &:before {
        left: 50%;
    }
    &:after {
        right: 50%;
    }
    &:hover {
        &:after,
        &:before {
            width: 50%;
            opacity: 1;
        }
    }
}

</style>
