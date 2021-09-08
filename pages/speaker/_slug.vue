<template>
  <div class="speaker">
    <Header :speaker="speaker" />
    <Container>
      <nuxt-content :document="speaker" />
    </Container>
    <SpeakerList :speakers="allSpeakers" />
    <Tickets id="tickets" />
    <ContactUs />
  </div>
</template>

<script>
import Header from '~/components/SpeakerComponents/Header'
import Container from '~/components/Container'
import SpeakerList from '~/components/HomeComponents/SpeakerList'
import ContactUs from '~/components/HomeComponents/ContactUs'
import Tickets from '~/components/HomeComponents/Tickets'
export default {
  components: { ContactUs, SpeakerList, Container, Header, Tickets },
  async asyncData ({ $content, params, i18n }) {
    const allSpeakers = await $content('speakers')
      .only(['name', 'function', 'img', 'slug', 'url', 'twitter', 'showPage'])
      .sortBy('prio', 'asc')
      .fetch()

    const speaker = await $content('speakers', params.slug)
      .fetch()

    return {
      allSpeakers,
      speaker
    }
  }
}
</script>

<style scoped>
</style>

<style lang="scss">
.speaker .nuxt-content {
  h1{
    @apply text-5xl text-blue pb-5 font-bold;
  }
  h2{
    @apply text-3xl text-blue;
  }
  a{
    @apply text-blue;
  }
  & > p:nth-of-type(1){
    @apply md:w-2/3;
  }
  img{
    max-width: 100%;
    height: auto;
    @apply md:w-2/3;
  }
}
</style>
