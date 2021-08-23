<template>
  <div class="background">
    <div class="container mx-auto px-4 py-10">
      <h2 class="text-3xl mb-5 text-white text-center">
        ANNOUNCED SPEAKERS
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3  grid-flow-row gap-4">
        <Speaker v-for="(speaker, i) in speakers" :key="i" :index="i" :speaker="speaker" />
      </div>
    </div>
  </div>
</template>

<script>
import Speaker from '~/components/Speaker'
export default {
  name: 'SpeakerList',
  components: { Speaker },
  props: ['speakers']
}
</script>

<style scoped>
  .background::before{
    background-image: url("~/assets/images/lightning_background_color.jpeg");
    background-size: cover;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    z-index: -99999;
  }
  .background{
    position: relative;
  }
</style>
