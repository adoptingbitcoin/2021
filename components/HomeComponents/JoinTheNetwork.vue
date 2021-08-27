<template>
  <Container class="mb-10">
    <BlueTitle class="mb-5">
      Join the network in El Salvador!
    </BlueTitle>
    <p class="multicolumn">
      The adoption of Bitcoin in the Republic of El Salvador caused excitement around the world. It’s time to shine! Adopting Bitcoin is bringing together the Bitcoin and Lightning  community in San Salvador and El Zonte to create connections and foster the future of money and payments in the Central American republic.
      <br>This conference will include three days of renowned speakers, engaging panels, educational tracks, demos and hands-on workshops in English and Spanish. Welcoming developers, businesses and general enthusiasts to network and form in-person connections. Vamos!
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
