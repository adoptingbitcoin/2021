<template>
  <div class="">
  <div class="header">
    <Container class="title-container">
      <h5 class="text-2xl">Come join us in beautiful El Salvador</h5>
        <div class="bg-gradient-to-r from-yellow via-red to-red rounded my-5" style="height: 5px"></div>
      <h5 class="text-2xl">16. - 18. November 2021</h5>
      <CTA href="#tickets">GRAB YOUR TICKET NOW</CTA>
      <p class="hidden md:block">
        There is no better place than El Sal- vador to celebrate the leaps we‘ve been making in LN development. The world is our oyster and it‘s waiting to be cracked
      </p>
    </Container>
    </div>
    <Container class="block md:hidden">
      <p>
        There is no better place than El Sal- vador to celebrate the leaps we‘ve been making in LN development. The world is our oyster and it‘s waiting to be cracked
      </p>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/Container'
export default {
  name: 'ComeJoinUs',
  components: { Container }
}
</script>

<style scoped>
.title-container{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
  .header{
    color: white;
    position: relative;
    height: 90vh;
    width: 100%;
    background-image: url("~/assets/images/adopting_bitcoin_el_zonte.jpg");
    background-size: cover;
    background-position: center center;
  }
</style>
