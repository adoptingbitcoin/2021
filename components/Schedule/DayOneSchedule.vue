<template>
  <div class="my-12">
    <div class="grid-cols-2 my-5 gap-5  hidden md:grid">
      <div class="">
        <GradientHeader class="mx-auto">
          ECON
        </GradientHeader>
        <div class="text-center my-5">
          <h4 class="text-3xl">
            MC: Stephan Livera
          </h4>
          <span>Host of the Bitcoin Podcast</span>
        </div>
      </div>
      <div class="">
        <GradientHeader class="mx-auto">
          DEV
        </GradientHeader>
        <div class="text-center my-5">
          <h4 class="text-3xl">
            MC: Pablo Fernandez
          </h4>
          <span>Software Engineer SwanBitcoin</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 my-5 gap-5 md:gap-0">
      <div class="md:hidden">
        <GradientHeader class="mx-auto">
          ECON
        </GradientHeader>
        <div class="text-center my-5">
          <h4 class="text-3xl">
            MC: Stephan Livera
          </h4>
          <span>Host of the Bitcoin Podcast</span>
        </div>
      </div>
      <DayOneEconSchedule class="text-sm" />
      <div class="md:hidden mt-12">
        <GradientHeader class="mx-auto">
          DEV
        </GradientHeader>
        <div class="text-center my-5">
          <h4 class="text-3xl">
            MC: Pablo Fernandez
          </h4>
          <span>Software Engineer SwanBitcoin</span>
        </div>
      </div>
      <DayOneDevSchedule class="text-sm" />
    </div>
  </div>
</template>

<script>
import DayOneEconSchedule from '~/components/Schedule/DayOneEconSchedule'
import DayOneDevSchedule from '~/components/Schedule/DayOneDevSchedule'
import GradientHeader from '~/components/GradientHeader'
export default {
  name: 'DayOneSchedule',
  components: { GradientHeader, DayOneDevSchedule, DayOneEconSchedule }
}
</script>

<style scoped>

</style>
