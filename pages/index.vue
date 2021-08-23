<template>
  <div class="w-full">
    <Header />
    <JoinTheNetwork />
    <SpeakerList :speakers="speakers" />
    <ComeJoinUs />
    <NoBetterPlace />
    <Schedule />
  </div>
</template>

<script>
import JoinTheNetwork from '~/components/HomeComponents/JoinTheNetwork'
import Header from '~/components/HomeComponents/Header'
import SpeakerList from '~/components/HomeComponents/SpeakerList'
import ComeJoinUs from '~/components/HomeComponents/ComeJoinUs'
import NoBetterPlace from '~/components/HomeComponents/NoBetterPlace'
import Schedule from '~/components/HomeComponents/Schedule'
export default {
  components: { Schedule, NoBetterPlace, ComeJoinUs, SpeakerList, JoinTheNetwork, Header },
  async asyncData ({ $content, params }) {
    const speakers = await $content('speakers', params.slug)
      .only(['name', 'excerpt', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      speakers
    }
  }
}
</script>

<style scoped>
</style>
