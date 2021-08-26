<template>
  <div class="container mx-auto">
    <div class="header">
      <Container class="title-container">
        <h5 class="text-2xl">“We are all equal before a wave.” (Laird Hamilton)</h5>
          <div class="bg-gradient-to-r from-yellow via-red to-red rounded my-5" style="height: 5px"></div>
        <h5 class="text-2xl">16. - 18. November 2021</h5>
        <CTA href="#tickets">GET YOUR TICKET NOW</CTA>
        <p class="hidden md:block">
          And we are all equal before Bitcoin. In this sense, there is no better place than El Salvador to celebrate the leaps we have been making in the LN development and no better place to take greater waves riding the Lightning Network. 
        </p>
      </Container>
    </div>
    <Container class="block md:hidden">
      <p>
        And we are all equal before Bitcoin. In this sense, there is no better place than El Salvador to celebrate the leaps we have been making in the LN development and no better place to take greater waves riding the Lightning Network. 
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
