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
      <div class="cta-border-grey p-1 rounded mx-auto my-10 text-center w-auto">
        <div class="bg-white">
          <button id="mc-embedded-subscribe" class="cursor-pointer px-5 py-2" @click="toggleSpeakerSignup">
            {{ $t('speakers.callforparticipation')}}
          </button>
        </div>
      </div>
    </BGGrey>
    <SpeakerSignup v-if="showSpeakerSignup" />
  </div>
</template>

<script>
import Speaker from '~/components/Speaker'
import GradientHeader from '~/components/GradientHeader'
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
import SpeakerSignup from '~/components/HomeComponents/SpeakerSignup'
export default {
  name: 'SpeakerList',
  components: { SpeakerSignup, Container, BGGrey, GradientHeader, Speaker },
  props: ['speakers'],
  data () {
    return {
      showSpeakerSignup: Boolean(false)
    }
  },
  methods: {
    toggleSpeakerSignup () {
      this.showSpeakerSignup = !this.showSpeakerSignup
    }
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
