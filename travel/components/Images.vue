<template>
<div>
  <div class="wrapper">
    <div class="zoom-effect-container">
      <div class="image-card">
        <b-img title="Click name above to see more!" fluid :src="getImgUrl(card.images)" :alt="card.text | titleize "></b-img>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Images',
  data() {
    return {
      //bordered: false
    }
  },
  filters: {
    titleize(value) {
      //first letter of each word capitalized
      return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
      //all capitalized
      //return value.replace(value, x => x.toUpperCase());
    }
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl: function(pic) {
      return require('@/assets/' + pic)
    },


  }
};
</script>

<style scoped lang='scss'>
.wrapper {
    width: auto;
    height: 100%;
    margin: 0 auto;
}
.zoom-effect-container {
    position: relative;
    width: auto;
    height: $card-height;
    margin: 0 auto;
    overflow: hidden;
}
.image-card {
    margin: -9rem 0 -4rem;
}
.image-card img {
    transition: 3s ease;
    object-fit: cover;
    width: 100%;
    height: 480px;
}
.zoom-effect-container:hover .image-card img {
    transform: scale(1.08);
}
</style>
