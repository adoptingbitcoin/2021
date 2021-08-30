<template>
  <div>
    <BGGrey class="pb-16">
      <Container>
        <GradientHeader class="mb-10">
          {{ $t('speakers.title') }}
        </GradientHeader>
        <div class="grid grid-cols-2 md:grid-cols-5  grid-flow-row gap-4">
          <Speaker v-for="(speaker, i) in speakers" :key="i" :index="i" :speaker="speaker" />
        </div>
      </Container>
      <div class="mx-auto w-content">
        <div class="inline-block w-content cursor-pointer mx-2" @click="toggleSpeakerSignup">
          <CTA>{{ $t('speakers.callforparticipation')}}</CTA>
        </div>
<!--        <div class="inline-block w-content cursor-pointer mx-2" @click="toggleSponsorSignup">-->
<!--          <CTA>-->
<!--            {{ $t('sponsors.callforsponsors') }}-->
<!--          </CTA>-->
<!--        </div>-->
      </div>
    </BGGrey>
    <SpeakerSignup v-if="showSpeakerSignup" />
<!--    <div v-if="showSponsorSignup" class="mx-auto">-->
<!--      <iframe-->
<!--        src="https://docs.google.com/forms/d/e/1FAIpQLScua1nBLTbhShvWH1d4LowWwawvdt4OokZ0BkumDosTvrFDrA/viewform?embedded=true"-->
<!--        width="100%"-->
<!--        height="600"-->
<!--        frameborder="0"-->
<!--        marginheight="0"-->
<!--        marginwidth="0"-->
<!--      >Loading…</iframe>-->
<!--    </div>-->
  </div>
</template>

<script>
import Speaker from '~/components/Speaker'
import GradientHeader from '~/components/GradientHeader'
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
import SpeakerSignup from '~/components/HomeComponents/SpeakerSignup'
import CTA from '~/components/CTA'
export default {
  name: 'SpeakerList',
  components: { CTA, SpeakerSignup, Container, BGGrey, GradientHeader, Speaker },
  props: ['speakers'],
  data () {
    return {
      showSpeakerSignup: Boolean(false),
      showSponsorSignup: Boolean(false)
    }
  },
  methods: {
    toggleSpeakerSignup () {
      this.showSpeakerSignup = !this.showSpeakerSignup
    }
  },
  toggleSponsorSignup () {
    this.showSponsorSignup = !this.showSponsorSignup
  }
}
</script>

<style scoped>
.cta-border-grey{
  background: darkgrey;
  height: fit-content;
  width: fit-content;
}
</style>
