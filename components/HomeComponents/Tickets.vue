<template>
  <Container id="tickets py-16 mb-16">
    <GradientHeader class="">
      GET YOUR TICKET HERE
    </GradientHeader>
    <p class="text-xl my-5">
      and get the <b>early-bird special</b> with an stunning <b>15% discount on all tickets</b> until 15 September.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3  grid-flow-row gap-4">
      <div class="ticket ticket-1 p-10 text-center text-white">
        <h5 class="text-3xl">
          Basic
        </h5>
        <span>100 $</span>
      </div>
      <div class="ticket ticket-2 p-10 text-center text-white">
        <h5 class="text-3xl">
          Exclusive
        </h5>
        <span>200 $</span>
      </div>
      <div class="ticket ticket-3 p-10 text-center text-white">
        <h5 class="text-3xl">
          VIP
        </h5>
        <span>500 $</span>
      </div>
    </div>
    <BlueTitle class="mt-8">
      Early Adopter
    </BlueTitle>
    <p class="mb-10">
      Pay over the lightning network and get another <b>5% discount on all tickets.</b> Bitcoin onchain payment give you 2% discount.
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
