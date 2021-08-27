<template>
  <div class="">
    <img :src="computedImg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Sponsor',
  props: {
    sponsor: Object
  },
  computed: {
    computedImg () {
      if (this.sponsor.img) {
        return require('~/assets/images/sponsor/' + this.sponsor.img)
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
