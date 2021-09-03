<template>
  <div class="header">
    <Nav />
    <div class="SpeakerInfo absolute bottom-0 left-0 w-100-vw">
      <Container>
        <div class="grid grid-cols-3">
          <div class="image-border bg-red-400 rounded-full p-0 m-0">
            <img :src="computedImg" alt="" class="rounded-full object-cover p-1" />
          </div>
          <div class=""></div>
          <div class="">
            <ul>
              <li>Twitter</li>
              <li>Github</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </Container>

    </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Container from '~/components/Container'
export default {
  name: 'Header',
  components: { Container, Nav },
  props: ['speaker'],
  computed: {
    computedImg () {
      if (this.speaker.img) {
        return require('~/assets/images/person/' + this.speaker.img)
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>
.header{
  color: white;
  position: relative;
  height: 60vh;
  width: 100%;
  background-image: url("~/assets/images/adopting_bitcoin_the_lightning_network.jpg");
  background-size: cover;
  background-position: top center;
}

.image-border{
  background: linear-gradient(to right, #ffcc00, #e60000);
  width: fit-content;
  height: fit-content;
}
img{
  max-height: 250px;
}
</style>
