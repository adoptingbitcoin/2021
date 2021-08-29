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
    </Container>
  </BGGrey>
</template>

<script>
import GradientHeader from '~/components/GradientHeader'
import Container from '~/components/Container'
import BGGrey from '~/components/BGGrey'
export default {
  name: 'Schedule',
  components: { BGGrey, Container, GradientHeader }
}
</script>

<style scoped>
ul{
  list-style: initial;
  padding-left: 20pt;
}
</style>
