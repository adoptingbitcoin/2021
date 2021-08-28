<template>
  <div class="w-full">
    <Header />
    <JoinTheNetwork />
    <SpeakerList :speakers="speakers" />
    <ComeJoinUs />
    <Schedule />
<!--    <Tickets />-->
<!--    <Sponsors :sponsors="sponsors" />-->
    <Locations :locations="locations" />
    <OrganizerList :speakers="organizers" />
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
import Locations from '~/components/HomeComponents/Locations'
import Subscribe from '~/components/HomeComponents/Subscribe'
import ContactUs from '~/components/HomeComponents/ContactUs'
import OrganizerList from '~/components/HomeComponents/OrganizerList'
export default {
  components: { OrganizerList, ContactUs, Subscribe, Locations, Schedule, ComeJoinUs, SpeakerList, JoinTheNetwork, Header },
  async asyncData ({ $content, params }) {
    const speakers = await $content('speakers', params.slug)
      .only(['name', 'function', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const organizers = await $content('organizers', params.slug)
      .only(['name', 'function', 'img', 'slug'])
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
      organizers,
      locations,
      sponsors
    }
  }
}
</script>

<style scoped>
</style>
