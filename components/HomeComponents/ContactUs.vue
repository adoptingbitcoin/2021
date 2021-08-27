<template>
  <BGColor class="container mx-auto">
    <Container class="text-white">
      <h2 class="text-4xl font-bold text-white">CONTACT US</h2>
      <div class="my-10 mx-auto grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
        <div class="my-5">
          <h5 class="font-bold text-2xl">
            Adopting Bitcoin
          </h5>
          <p>
            4923 Market Street, Orlando FL
          </p>
        </div>
        <div class="my-5">
          <h5 class="font-bold text-2xl">
            Email
          </h5>
          <a href="mailto:adoptingbitcoin@galoy.io">
            adoptingbitcoin@galoy.io
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
      <div class="py-16"></div>
      <div class="text-center md:text-left md:float-left my-5">
        <a href="#">IMPRINT</a> |
        <a href="#">PRIVACY POLICY</a> |
        <a href="#">DISCLAIMER</a>
      </div>
      <div class="text-center md:text-left md:float-right my-5">
        <a href="https://galoy.io/" target="_blank"><span class="text-xs">hosted by</span> <span class="font-bold text-xl">galoy.io</span></a>
      </div>
      <div class="py-4"></div>
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
