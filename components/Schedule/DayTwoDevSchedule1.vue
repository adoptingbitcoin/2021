<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="7:30- 09:00" fixedheight="true">
        Registration + coffee & snacks
      </ScheduleRowRight>

      <ScheduleRowRight time="9:05 - 9:25" fixedheight="true">
        <b>The perfect LN wallet: what we dream of, what we have now</b><br><br>
        Giacomo Zucco / BHB Network
      </ScheduleRowRight>

      <ScheduleRowRight time="09:30 - 9:55">
        <b>Mass Adoption, But Decentralized</b><br><br>
        Jonas Nick - Bitcoin Research Blockstream
      </ScheduleRowRight>

      <ScheduleRowRight time="10:00 - 10:25">
        <b>A Short History of Double Spend Protection</b><br><br>
        Peter Todd - Bitcoin Core Developer
      </ScheduleRowRight>

      <ScheduleRowRight time="10:30 - 11:10">
        <b>Optimally Reliable & Cheap Payment Flows on the Lightning Network</b><br><br>
        Rene Pickhardt - Bitcoin & Lightning Network Developer & Educator <br>
        Stefan Richter -  netpositive.money and host of the Honigdachs Podcast
      </ScheduleRowRight>

      <ScheduleRowRight time="11:35 - 12:00">
        <b>All About LNbits and Local Custodianship</b><br><br>
        Ben Arc - Teacher LNBits
      </ScheduleRowRight>

      <ScheduleRowRight time="12:10 - 1:30" fixedheight="true">
        Lunch break
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayTwoDevSchedule1',
  components: { ScheduleRowRight }
}
</script>

<style scoped>

</style>
