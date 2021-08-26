<template>
  <Container>
    <GradientHeader class="mb-5">
      THE LOCATIONS
    </GradientHeader>
    <div class="grid grid-cols-1 md:grid-cols-2  grid-flow-row gap-4">
      <Location v-for="(location, i) in locations" :key="i" :index="i" :location="location" />
    </div>

    <GradientHeader class="mb-5">
      DIRECTIONS
    </GradientHeader>

  </Container>
</template>

<script>
import GradientHeader from '~/components/GradientHeader'
import Container from '~/components/Container'
import Location from '~/components/Location'
export default {
  name: 'Locations',
  components: { Location, Container, GradientHeader },
  props: [
    'locations'
  ]
}
</script>

<style scoped>
</style>
