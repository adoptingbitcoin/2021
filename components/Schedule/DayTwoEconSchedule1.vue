<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="7:30- 09:00" :fixedheight="true">
        Registration + coffee & snacks
      </ScheduleRow>

      <ScheduleRow time="9:05 - 9:25">
        <b>Bitcoin is Hope!</b> <br><br>

        Alex Gladstein - Chief Strategy Officer at Human Rights Foundation
      </ScheduleRow>

      <ScheduleRow time="09:30 - 9:55">
        <b>The State of Lightning - a Helicopter View</b><br><br>
        Anders Helseth  - Senior Analyst Arcane Crypto
      </ScheduleRow>

      <ScheduleRow time="10:00 - 10:25">
        <b>Challenges for the African Market</b><br><br>
        Bernard Parah - CEO and Co-Founder Bitnob
      </ScheduleRow>

      <ScheduleRow time="10:30 - 11:10">
        <b>Lightning and the Creator Economy</b><br><br>

        Roy Sheinfeld - Co-founder & CEO of Breez <br>
        Adam Curry - Podfather 2.0 <br>
        Michael Tidwell - Head of System Operations of Zebedee <br>
        Colin Harper - Content and Tech LuxorTechnologies <br><br>

        Host: Anita Posch - Bitcoin Advocate, Author and Podcaster
      </ScheduleRow>

      <ScheduleRow time="11:35 - 12:00">
        <b>Fireside Chat: El Salvador's Future is Bright with Bitcoin</b><br><br>

        Monica Taher - Technological & Economic International Affairs at Trade & Investments Secretariat - Government of El Salvador
        <br><br>

        Host: Will Hernandez - Growth & Business Manager Paxful
      </ScheduleRow>

      <ScheduleRow time="12:10 - 1:30" :fixedheight="true">
        Lunch break
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayTwoEconSchedule1',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
