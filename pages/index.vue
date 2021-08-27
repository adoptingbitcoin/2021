<template>
  <div class="w-full">
    <Header />
    <JoinTheNetwork />
    <SpeakerList :speakers="speakers" />
    <ComeJoinUs />
    <Schedule />
    <Tickets />
    <Sponsors :sponsors="sponsors" />
    <Locations :locations="locations" />
    <Subscribe />
    <ContactUs></ContactUs>
  </div>
</template>

<script>
import JoinTheNetwork from '~/components/HomeComponents/JoinTheNetwork'
import Header from '~/components/HomeComponents/Header'
import SpeakerList from '~/components/HomeComponents/SpeakerList'
import ComeJoinUs from '~/components/HomeComponents/ComeJoinUs'
import Schedule from '~/components/HomeComponents/Schedule'
import Tickets from '~/components/HomeComponents/Tickets'
import Sponsors from '~/components/HomeComponents/Sponsors'
import Locations from '~/components/HomeComponents/Locations'
import Subscribe from '~/components/HomeComponents/Subscribe'
import ContactUs from '~/components/HomeComponents/ContactUs'
export default {
  components: { ContactUs, Subscribe, Locations, Sponsors, Tickets, Schedule, ComeJoinUs, SpeakerList, JoinTheNetwork, Header },
  async asyncData ({ $content, params }) {
    const speakers = await $content('speakers', params.slug)
      .only(['name', 'excerpt', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const locations = await $content('locations', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('prio', 'asc')
      .fetch()

    const sponsors = await $content('sponsors', params.slug)
      .only(['width', 'img', 'slug'])
      .sortBy('width', 'desc')
      .fetch()

    return {
      speakers,
      locations,
      sponsors
    }
  }
}
</script>

<style scoped>
</style>
