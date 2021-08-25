<template>
  <div id="tickets" class="container mx-auto px-4 py-10">
    <GradientHeader class="mx-auto">
      GRAB YOU TICKET HERE
    </GradientHeader>
    <p class="text-center text-xl my-5">and get the <b>early-bird special</b> with an stunning <b>15% discount on all tickets</b> until 15 September.</p>

    <div class="ticket ticket-1 m-5 p-10 text-center text-white">
      <h5 class="text-3xl">Basic</h5>
      <span>100 $</span>
    </div>
    <div class="ticket ticket-2 m-5 p-10 text-center text-white">
      <h5 class="text-3xl">Exclusive</h5>
      <span>200 $</span>
    </div>
    <div class="ticket ticket-3 m-5 p-10 text-center text-white">
      <h5 class="text-3xl">VIP</h5>
      <span>500 $</span>
    </div>
    <div class="my-10"></div>
    <h3 class="text-4xl text-blue my-5">Early Adopter</h3>
    <p>
      Pay over the lightning network and get another <b>5% discount on all tickets.</b> Bitcoin onchain payment give you 2% discount.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Tickets'
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
}
.ticket-2{
   background-image: url("~/assets/images/ticket_2.jpg");
 }
.ticket-3{
    background-image: url("~/assets/images/ticket_3.jpg");
  }
</style>
