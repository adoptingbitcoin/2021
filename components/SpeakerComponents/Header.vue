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
              <li v-if="speaker.twitter">
                <a :href="'https://twitter.com/' + speaker.twitter" target="_blank"><i class="fab fa-twitter-square" /> {{ speaker.twitter }}</a>
              </li>
              <li v-if="speaker.github">
                <a :href="'https://github.com/' + speaker.github" target="_blank"><i class="fab fa-github-square" /> {{ speaker.github }}</a>
              </li>
              <li v-if="speaker.linkedin">
                <a :href="'https://linkedin.com/in/' + speaker.linkedin" target="_blank"><i class="fab fa-linkedin" /> {{ speaker.linkedin }}</a>
              </li>
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
  height: 70vh;
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
