<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="1:35 - 2:00">
        <b>Bitcoin as the Next Internet</b><br><br>

        Max Webster - Hivemind <br>
        James Andrew - Global Liquidity <br><br>

        Host: Jeff Gallas
      </ScheduleRow>

      <ScheduleRow time="2:05 - 2:30">
        Hong Fang - CEO Okcoin
      </ScheduleRow>

      <ScheduleRow time="2:35 - 3:00">
        <b>El Salvador - The global pilot for the Bitcoin circular economy: A progress report</b><br><br>
        
        Sergej Kotliar - Founder & CEO Bitrefill
      </ScheduleRow>

      <ScheduleRow time="3:05 - 3:45">
        <b>Fireside: The Cure for Financial Apartheid</b><br><br>

        Ray Youssef - CEO of Paxful <br><br>

        Host: Rodrigo Gomez - Country Manager of Bitrefill - El Salvador
      </ScheduleRow>

      <ScheduleRow time="3:50 - 4:15" :fixedheight="true">
        Coffee Break
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayTwoEconSchedule2',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
