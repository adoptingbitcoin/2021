<template>
  <BGGrey class="container mx-auto">
    <Container>
      <GradientHeader class="mx-auto">
        AMAZING SPONSORS
      </GradientHeader>
      <br><br><br>
      <br><br><br>
      <br><br><br>
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
export default {
  name: 'Sponsors',
  components: { CTA, GradientHeader, Container, BGGrey }
}
</script>

<style scoped>
</style>
