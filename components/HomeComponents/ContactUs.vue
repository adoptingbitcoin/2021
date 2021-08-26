<template>
  <BGColor class="container mx-auto">
    <Container class="text-white">
      <h2 class="text-4xl font-bold text-white text-center">CONTACT US</h2>
      <div class="my-10 mx-auto">
        <div class="my-5">
          <h5 class="font-bold text-2xl">
            lightning summit
          </h5>
          <p>
            4923 Market Street, Orlando FL
          </p>
        </div>
        <div class="my-5">
          <h5 class="font-bold text-2xl">
            Email
          </h5>
          <a href="#">
            info@adoptingbitcoin.org
          </a>
        </div>
        <div class="my-5">
          <h5 class="font-bold text-2xl">
            Phone
          </h5>
          <p>
            +1 (555) 902-8832
          </p>
        </div>
      </div>
      <div class="text-center my-16">
        <a href="#">IMPRINT</a><br>
        <a href="#">PRIVACY POLICY</a><br>
        <a href="#">DISCLAIMER</a>
      </div>
      <p class="text-center">
        <span class="text-xs">hosted by</span> <span class="font-bold text-xl">galoy.io</span>
      </p>
    </Container>
  </BGColor>
</template>

<script>
import BGColor from '~/components/BGColor'
import Container from '~/components/Container'
export default {
  name: 'ContactUs',
  components: { Container, BGColor }
}
</script>

<style scoped>
.contact-container{
  width: fit-content;
}
</style>
