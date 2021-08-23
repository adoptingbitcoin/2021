<template>
  <article class="p-3">
    <div class="image-border bg-red-400 rounded-full">
      <img :src="computedImg" alt="" class="w-18 h-18 rounded-full object-cover p-1 md:p-2"/>
    </div>
    <h2 class="text-lg font-semibold text-white my-2 text-center">
      {{ name }}
    </h2>
  </article>
</template>

<script>
export default {
  name: 'Speaker',
  props: {
    name: String,
    image: String
  },
  computed: {
    computedImg () {
      return require('~/assets/images/person/' + this.image)
    }
  }
}
</script>

<style scoped>
article{
  filter: none;
}
.image-border{
  background: linear-gradient(to right, red, purple);
}
</style>
