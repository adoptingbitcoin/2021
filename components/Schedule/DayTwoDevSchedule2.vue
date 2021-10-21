<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="1:35 - 2:00">
        <b>Bitcoin Applied to Digital Truth</b><br><br>
        Gilles Cadigan - CEO Woolet
      </ScheduleRowRight>

      <ScheduleRowRight time="2:05 - 2:30">
        <b>DLCs and Lightning</b><br><br>
        Ben Carman
      </ScheduleRowRight>

      <ScheduleRowRight time="2:35 - 3:00">
        <b>Running a big Lightning node: challenges, findings and next steps</b><br><br>
        Victor Afanassieff and Romain Rouphael from LN Markets
      </ScheduleRowRight>

      <ScheduleRowRight time="3:05 - 3:45">
        <b>Lightning Privacy</b><br><br>

        Adam Ficsor - Wasabi Wallet <br>
        Peter Todd  - Bitcoin Core Developer <br>
        Bastien Teinturier - Software Developer ACINQ <br>
        Openoms (Raspiblitz) <br><br>

        Host: Stephan Livera - Host of the Bitcoin Podcast
      </ScheduleRowRight>

      <ScheduleRowRight time="3:50 - 4:15" fixedheight="true">
        Coffee Break
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayTwoDevSchedule2',
  components: { ScheduleRowRight }
}
</script>

<style scoped>

</style>
