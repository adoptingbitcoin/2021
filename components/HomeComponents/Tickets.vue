<template>
  <Container id="tickets py-16 mb-16">
    <GradientHeader class="">
      GET YOUR TICKET HERE
    </GradientHeader>
    <p class="text-xl my-5">
      and get the <b>early-bird special</b> with a <b>21% discount </b> until September 21st.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3  grid-flow-row gap-4">
      <a href="https://pretix.eu/galoy/adoptingbitcoin/" target="_blank" class="ticket ticket-1 p-10 text-center text-white">
        <h5 class="text-3xl">
          Early Bird
        </h5>
        <span>95 $</span>
      </a>
      <a href="https://pretix.eu/galoy/adoptingbitcoin/" target="_blank" class="ticket ticket-2 p-10 text-center text-white">
        <h5 class="text-3xl">
          Regular
        </h5>
        <span>121 $</span>
      </a>

      <a href="https://pretix.eu/galoy/adoptingbitcoin/" target="_blank" class="ticket ticket-3 p-10 text-center text-white">
        <h5 class="text-3xl">
          Speaker
        </h5>
        <span>free (with voucher only)</span>
      </a>
    </div>
    <BlueTitle class="mt-8">
      Early Adopters only
    </BlueTitle>
    <p class="mb-10">
      Tickets for this event can be paid with bitcoin over Lightning only.
    </p>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'Tickets',
  components: { BlueTitle, GradientHeader, Container }
}
</script>

<style scoped>
.ticket{
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.ticket-1{
  background-image: url("~/assets/images/ticket_1.jpg");
  backdrop-filter: grayscale();
}
.ticket-2{
   background-image: url("~/assets/images/ticket_2.jpg");
 }
.ticket-3{
    background-image: url("~/assets/images/ticket_3.jpg");
  }
</style>
