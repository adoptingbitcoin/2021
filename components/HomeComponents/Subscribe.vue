<template>
  <BGGrey>
    <Container>
      <BlueTitle class="mx-auto text-center">
        Subscribe to the latest news!
      </BlueTitle>

      <div class="cta-border p-1 rounded mx-auto my-5 text-center">
        <div class="bg-white px-5 py-2">
          <input type="text" placeholder="ENTER YOUR EMAIL">
        </div>
      </div>

      <CTA class="mx-auto text-center" href="#">
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
.cta-border{
  background: linear-gradient(to right, red, blue);
  width: fit-content;
  height: fit-content;
}
input{
  text-align: center;
}
</style>
