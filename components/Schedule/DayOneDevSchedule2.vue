<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="1:35 - 2:00">
        <b>Fee-bumping for presigned transactions protocols</b><br><br>

        Antoine Poinsot - Founder Revault
      </ScheduleRowRight>

      <ScheduleRowRight time="2:05 - 2:30">
        <b>Transaction Relay Policy for L2 Developers</b> <br><br>

        Gloria Zhao - Brink Fellow, Bitcoin Core Contributor
      </ScheduleRowRight>

      <ScheduleRowRight time="2:35 - 3:00">
        <b>Lightning Native Teams</b> <br><br>

        Paul Itoi - Co-Founder of Sphinx Chat
      </ScheduleRowRight>

      <ScheduleRowRight time="3:05 - 3:55">
        <b>The Future of Lightning Custody</b> <br><br>

        Pierre Marie Padiou - CEO of ACINQ <br>
        Nicolas Burtey - CEO of Galoy <br>
        Roy Sheinfeld - CEO of Breez <br>
        Conor Okus - Product Manager at Square Crypto <br><br>

        Host: Aaron van Wirdum - Bitcoin Magazine
      </ScheduleRowRight>

      <ScheduleRowRight time="4:00 - 4:30" :fixedheight="true">
        Coffee Break
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayOneDevSchedule2',
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
