<template>
  <Container class="mb-10">
    <BlueTitle class="mb-5">
      Join the network in El Salvador!
    </BlueTitle>
    <p class="multicolumn">
      The Lightning Conference is bringing together the Lightning community to build momentum and foster connections
      for the future of the Lightning Network. This intimate gathering will include two days of renowned speakers,
      engaging panels and a plentitude of project demos and hands-on workshops. Welcoming developers, businesses building
      on Lightning, and general enthusiasts to form in-person connections with the largest group of Lightning builders and
      users, The Lightning Conference sets out to accelerate the growth of the network and drive adoption.
    </p>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'JoinTheNetwork',
  components: { BlueTitle, Container }
}
</script>

<style scoped>
@media (min-width: 1024px){
  .multicolumn{
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;

    -webkit-column-gap: 50px;
    -moz-column-gap: 50px;
    column-gap: 50px;

  }
}

</style>
