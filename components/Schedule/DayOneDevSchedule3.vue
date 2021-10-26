<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="4:35 - 5:00">
        <b>Lightning Node Observability</b> <br><br>

        Bob the Coder - Backend Engineer at Voltage
      </ScheduleRowRight>

      <ScheduleRowRight time="5:05 - 5:30">
        <b>Lightning Watchtowers and Why You Should Use Them if You're Not</b> <br><br>

        Sergi Delgado Segura - CEO of Talaia Labs <br><br>

        (Spanish)
      </ScheduleRowRight>

      <ScheduleRowRight time="5:35 - 6:15">
        <b>Privacy on Lightning</b> <br><br>

        Bastien Teinturier - Software Developer ACINQ
      </ScheduleRowRight>

      <ScheduleRowRight time="6:15 - 6:30" :fixedheight="true">
        Closing Remarks: Jeff Gallas
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayOneDevSchedule3',
  components: { ScheduleRowRight }
}
</script>

<style>
  tbody tr:nth-child(odd) {
    @apply bg-gray-300;
  }
  tbody tr:nth-child(even) {
    @apply bg-white;
  }

</style>
