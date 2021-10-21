<template>
  <table class="table text-center">
    <tbody class="">
      <ScheduleRow time="4:15 - 4:40">
        Fode Diop - Bitcoin Application Developper at the Global Mesh Lab
      </ScheduleRow>

      <ScheduleRow time="4:45 - 5:10">
        <b>Building for the Remnant</b><br><br>

        Aleks Svetski - Co Founder at Amber, Writer, Speaker
      </ScheduleRow>

      <ScheduleRow time="5:15 - 6:10">
        <b>Lightning Payments from a Merchant's Perspective</b><br><br>

        Max Bloch - COO <br>
        Starbucks <br>
        OpenNode <br>
        McDonald's <br><br>

        Host: Mario Aguiluz - CSO IBEX
      </ScheduleRow>

      <ScheduleRow time="6:15 - 6:25" fixedheight="true">
        Closing Remarks: Chris Hunter
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayTwoEconSchedule3',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
