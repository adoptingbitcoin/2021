<template>
  <div class="header">
    <Container class="md:hidden"><Logo/></Container>
    <Container class="title-container">

      <div class="md:inline-block mr-4 hidden">
        <Logo/>
      </div>
      <div class="inline-block vertical-align-bottom">
        <h1 class="text-3xl md:text-5xl">{{ $t('header.title') }}</h1>
        <h5 class="text-lg md:text-2xl">{{ $t('header.subtitle') }}</h5>
      </div>
      <div class="bg-gradient-to-r from-yellow via-red to-red rounded my-5" style="height: 5px"></div>
      <h5 class="text-lg md:text-2xl">{{ $t('header.date') }}</h5>
<!--      <CTA href="#tickets">GET YOUR TICKET NOW</CTA>/-->
    </Container>
  </div>
</template>

<script>
import Container from '~/components/Container'
import Logo from '~/components/Logo'
import Nav from '~/components/Nav'
export default {
  name: 'Header',
  components: { Nav, Logo, Container }
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
  .vertical-align-bottom{
    vertical-align: bottom;
  }
</style>
