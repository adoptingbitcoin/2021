<template>
  <BGGrey>
    <Container>
      <GradientHeader class="mb-10">
        AMAZING SPONSORS
      </GradientHeader>
      <div class="grid grid-cols-3 md:grid-cols-6  grid-flow-row gap-4">
        <Sponsor v-for="(sponsor, i) in sponsors" :key="i" :index="i" :sponsor="sponsor" :class="'p-5 my-auto col-span-'+sponsor.width " />
      </div>
      <CTA href="#" class="mx-auto">
        SEE ALL SPONSORS
      </CTA>
    </Container>
  </BGGrey>
</template>

<script>
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
import CTA from '~/components/CTA'
import Sponsor from '~/components/Sponsor'
export default {
  name: 'Sponsors',
  components: { Sponsor, CTA, GradientHeader, Container, BGGrey },
  props: [
    'sponsors'
  ]
}
</script>

<style scoped>
</style>
