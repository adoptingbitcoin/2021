<template>
  <BGGrey class="pb-16">
    <Container>
      <GradientHeader class="mb-10">
        CONFIRMED SPEAKERS
      </GradientHeader>
      <div class="grid grid-cols-2 md:grid-cols-5  grid-flow-row gap-4">
        <Speaker v-for="(speaker, i) in speakers" :key="i" :index="i" :speaker="speaker" />
      </div>
    </Container>
  </BGGrey>
</template>

<script>
import Speaker from '~/components/Speaker'
import GradientHeader from '~/components/GradientHeader'
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
export default {
  name: 'SpeakerList',
  components: { Container, BGGrey, GradientHeader, Speaker },
  props: ['speakers']
}
</script>

<style scoped>
</style>
