<template>
  <article class="p-3">
    <div class="image-border bg-red-400 rounded-full">
      <img :src="computedImg" alt="" class="rounded-full object-cover p-1"/>
    </div>
    <h2 class="text-lg font-semibold text-blue my-2 text-center">
      {{ speaker.name }}
    </h2>
  </article>
</template>

<script>
export default {
  name: 'Speaker',
  props: {
    speaker: Object
  },
  computed: {
    computedImg () {
      if (this.speaker.img) {
        return require('~/assets/images/person/' + this.speaker.img)
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>
article{
  filter: none;
}
.image-border{
  background: linear-gradient(to right, #ffcc00, #e60000);
  width: fit-content;
  height: fit-content;
  margin: auto;
}
img{
  max-height: 250px;
}
</style>
