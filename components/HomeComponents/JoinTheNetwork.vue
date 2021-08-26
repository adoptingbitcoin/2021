<template>
  <Container>
    <h2 class="text-3xl mb-5">
      Join the Network in El Salvador!
    </h2>
    <p class="multicolumn">
      The adoption of Bitcoin in the Republic of El Salvador caused excitement around the world. It’s time to shine! Adopting Bitcoin is bringing together the Bitcoin and Lightning  community in San Salvador and El Zonte to create connections and foster the future of money and payments in the Central American republic. This conference will include three days of renowned speakers, engaging panels, educational tracks, demos and hands-on workshops in English and Spanish. Welcoming developers, businesses and general enthusiasts to network and form in-person connections. Vamos!
    </p>
  </Container>
</template>

<script>
import Container from '~/components/Container'
export default {
  name: 'JoinTheNetwork',
  components: { Container }
}
</script>

<style scoped>
@media (min-width: 1024px){
  .multicolumn{
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;

    -webkit-column-gap: 20px;
    -moz-column-gap: 20px;
    column-gap: 20px;

  }
}

</style>
