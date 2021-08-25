<template>
  <BGGrey>
    <Container>
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
    </Container>
  </BGGrey>
</template>

<script>
import GradientHeader from '~/components/GradientHeader'
import Container from '~/components/Container'
import BGGrey from '~/components/BGGrey'
export default {
  name: 'Schedule',
  components: { BGGrey, Container, GradientHeader }
}
</script>

<style scoped>
ul{
  list-style: initial;
  padding-left: 20pt;
}
</style>
