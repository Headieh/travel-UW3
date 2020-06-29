<template>
<article class="mconv">
  <!--{{this.money}}-->
  <label for="usmoney">USD:
  <input v-on:click='reset()' v-on:change='updateValue()' ref="usmoney" type="number"  min="0" step="0.01" id="usmoney" name="usmoney"><br>
</label>
  <label for="othermoney"> {{this.cur}}:
  <input v-on:click='reset()' v-on:change='updateValue()' ref="othermoney" type="number" min="0" step="0.01" id="othermoney" name="othermoney">
</label>
  <br>
</article>
</template>

<script>
export default {
  props: {
    money: Object,
    cur: String
  },
  methods: {
    reset() {
      this.$refs['othermoney'].value = '';
      this.$refs['usmoney'].value = '';
    },
    updateValue() {
      let o = this.c[this.otherList[0]]
      let u = this.c.USD
      let e = this.c.EUR
      if (this.$refs['usmoney'].value != '') {
        let preround = (e/u) * o * this.$refs['usmoney'].value
        this.$refs['othermoney'].value = +(preround.toFixed(2))
      } else if (this.$refs['othermoney'].value != '') {
        let preround = (u/o) * this.$refs['othermoney'].value
        this.$refs['usmoney'].value = +(preround.toFixed(2))
      }
    }
  },
  data() {
    let c = this.money
    let ky = Object.keys(c)
    let usdList = ['USD']
    let eurList = ['EUR']
    let otherList = [this.cur.toUpperCase()]
    console.log('convert currency to: ', otherList)

    return {

      c: c,
      usdList: usdList,
      eurList: eurList,
      otherList: otherList

    }
  }

}
</script>

<style scoped lang="scss">

.mconv{
  width: auto;
  display: flex;
  padding: .15em;
  margin: .15em;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>
