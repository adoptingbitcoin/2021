<template>
  <div class="image-border rounded-full">
    <img :src="computedImg" alt="" class="rounded-full p-1 h-full w-auto">
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

.image-border{
  background: linear-gradient(to right, #ffcc00, #e60000);
  width: fit-content;
  height: fit-content;
  margin: auto;
}
</style>
