<template>
  <BGGrey>
    <Container>
      <BlueTitle class="mx-auto">
        Subscribe to the latest news!
      </BlueTitle>
      <CTA class="mx-auto" href="#">
        YES SIGN ME UP!
      </CTA>
    </Container>
  </BGGrey>
</template>

<script>
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
import BlueTitle from '~/components/BlueTitle'
import CTA from '~/components/CTA'
export default {
  name: 'Subscribe',
  components: { CTA, BlueTitle, Container, BGGrey }
}
</script>

<style scoped>
</style>
