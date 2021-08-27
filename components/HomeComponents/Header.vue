<template>
  <div class="header">
    <Logo class="absolute left-0 top-0 p-10"/>
    <Container class="title-container">
      <h1 class="text-3xl md:text-5xl">Adopting Bitcoin</h1>
      <h5 class="text-lg md:text-2xl">A Lightning Summit in El Salvador</h5>
      <div class="bg-gradient-to-r from-yellow via-red to-red rounded my-5" style="height: 5px"></div>
      <h5 class="text-2xl">16. - 18. November 2021</h5>
      <CTA href="#tickets">GRAB YOUR TICKET NOW</CTA>
    </Container>
  </div>
</template>

<script>
import CTA from '~/components/CTA'
import Container from '~/components/Container'
import Logo from '~/components/Logo'
export default {
  name: 'Header',
  components: { Logo, Container, CTA }
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
    height: 80vh;
    width: 100%;
    background-image: url("~/assets/images/adopting_bitcoin_the_lightning_network.jpg");
    background-size: cover;
  }
</style>
