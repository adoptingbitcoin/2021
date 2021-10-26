<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="4:15 - 4:40">
        <b>Bitcoin Beach Wallet - Building your own Bank</b><br><br>
        Justin Carter (Galoy)
      </ScheduleRowRight>

      <ScheduleRowRight time="4:45 - 5:10">
        <b>Improving Bitcoin Privacy with Federated E-Cash Mints</b><br><br>

        elsirion - Blockstream
      </ScheduleRowRight>

      <ScheduleRowRight time="5:15 - 6:10">
        <b>Onboarding Bitcoin and Lightning Developers</b><br><br>

        Will Clark - Lightning Application Engineer at Global Mesh Labs <br>
        Gloria Zhao - Brink Fellow, Bitcoin Core Contributor <br>
        Josie - Bitcoin Core Contributor <br>
        Jonas Nick - Bitcoin Research Blockstream <br><br>

        Host: Pablo Fernandez
      </ScheduleRowRight>

      <ScheduleRowRight time="6:15 - 6:25" :fixedheight="true">
        Closing Remarks: Nicolas Burtey
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayTwoDevSchedule3',
  components: { ScheduleRowRight }
}
</script>

<style scoped>

</style>
