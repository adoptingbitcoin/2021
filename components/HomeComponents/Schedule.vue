<template>
  <div class="background">
    <div class="container mx-auto px-4 py-10">
      <GradientHeader class="mx-auto">
        CONVENTION SCHEDULE
      </GradientHeader>
      <div class="my-10 scheduleDay mx-auto">
        <h3 class="text-4xl text-blue">DAY 1</h3>
        <span class="font-bold">Tuesday 16, San Salvador</span>
        <ul>
          <li>101 workshop on Lightning</li>
          <li>Tech/developer track (research/tech, for developers)</li>
          <li>Economic track</li>
        </ul>
      </div>
      <div class="my-10 scheduleDay mx-auto">
        <h3 class="text-4xl text-blue">DAY 2</h3>
        <span class="font-bold">Wednesday 17, San Salvador</span>
        <ul>
          <li>101 workshop on Lightning</li>
          <li>Tech/developer track (research/tech, for developers)</li>
          <li>Economic track</li>
        </ul>
      </div>

      <div class="my-10 scheduleDay mx-auto">
        <h3 class="text-4xl text-blue">DAY 3</h3>
        <span class="font-bold">Thursday 18, El Zonte/El Tunco</span>
        <ul>
          <li>Meet the local people who started the bitcoin initiative @BitcoinBeach</li>
          <li>Food court 10a - 6p in El Zonte</li>
          <li>Party in El Tunco for the night</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule'
}
</script>

<style scoped>
.background::before{
  background-image: url("~/assets/images/lightning_background_color.jpeg");
  background-size: cover;
  background-position: center center;
  filter: grayscale(100%) brightness(270%);
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
.scheduleDay{
}
</style>
