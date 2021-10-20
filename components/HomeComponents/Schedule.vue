<template>
  <BGGrey class="pb-16">
    <Container>
      <GradientHeader class="mb-16">
        {{ $t('schedule.title') }}
      </GradientHeader>

      <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-10">
        <div class="scheduleDay mx-auto">
          <h3 class="text-2xl font-bold text-blue">{{ $t('schedule.day') }} 1</h3>
          <span class="font-bold">{{ $t('schedule.date1') }}</span>
          <ul v-html="$t('schedule.day1list')"></ul>
        </div>
        <div class="scheduleDay mx-auto">
          <h3 class="text-2xl font-bold text-blue">{{ $t('schedule.day') }} 2</h3>
          <span class="font-bold">{{ $t('schedule.date2') }}</span>
          <ul v-html="$t('schedule.day2list')"></ul>
        </div>

        <div class="scheduleDay mx-auto">
          <h3 class="text-2xl font-bold text-blue">{{ $t('schedule.day') }} 3</h3>
          <span class="font-bold">{{ $t('schedule.date3') }}</span>
          <ul v-html="$t('schedule.day3list')"></ul>
        </div>
      </div>

      <div class="color-bg p-5 text-white rounded mt-10">
        <p v-html="$t('tickets.otherConferences')"/>
      </div>
      <ConventionSchedule />
    </Container>
  </BGGrey>
</template>

<script>
import GradientHeader from '~/components/GradientHeader'
import Container from '~/components/Container'
import BGGrey from '~/components/BGGrey'
import ConventionSchedule from '~/components/Schedule/ConventionSchedule'
export default {
  name: 'Schedule',
  components: { ConventionSchedule, BGGrey, Container, GradientHeader }
}
</script>

<style scoped>
ul{
  list-style: initial;
  padding-left: 20pt;
}
.color-bg{
  background: -webkit-linear-gradient(10deg, #e60000, #004bb3, #004bb3);
}
</style>
