<template>
<div :key=isFav class="favs">
  <div v-if="isFav">
    <button v-on:click="isFav = !isFav"><i class="fav fas fa-heart"></i></button>
  </div>
  <div v-if='!isFav'>
    <button v-on:click="isFav = !isFav"><i class="notfav far fa-heart"></i></button>
  </div>
</div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
  name: 'favs',
  data() {
    return {
      isFav: false
    }
  },

};
</script>


<style scoped lang='scss'>
.notfav {
    color: $c-heart;
    animation: $a-heart;
    display: inline;
    &:hover {
        transform: scale(1.6);
        animation: NULL;
        cursor: pointer;
        opacity: 0.8;
    }
}
.fav {
    color: $c-heart;
    transform: scale(1.7);
    animation: NULL;
    cursor: pointer;
    opacity: 1;
    display: inline;
    &:hover {
        transform: scale(1.6);
        cursor: pointer;
        opacity: 0.8;
    }
}

button {
    border: none;
    background: transparent;
}

.favs {
    display: inline;
}
</style>
