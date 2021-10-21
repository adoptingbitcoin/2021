<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="1:35 - 2:00">
        <b>Free Private Cities</b> <br><br>

        Veronika Kuett / Tipolis
      </ScheduleRow>

      <ScheduleRow time="2:05 - 2:30">
        <b>Architecting a Self-Sovereign Economy</b> <br><br>
        John Carvalho - CEO of Stealth Company
      </ScheduleRow>

      <ScheduleRow time="2:35 - 3:00">
        <b>Mystery Speaker</b> <br><br>

        (TBA)
      </ScheduleRow>

      <ScheduleRow time="3:05 - 3:55">
        <b>If it looks better, it works better</b> <br><br>

        Anthony Potdevin - Co-Founder Amboss Technologies <br>
        Pavlenex - BTCPay & Bitcoin Design <br>
        Johns Beharry - Bitcoin designer at Peak Shift <br>
        John Carvalho - The Biz <br> <br>

        Host: Alexandra Moxin - Advance Tech Podcast <br>
      </ScheduleRow>

      <ScheduleRow time="4:00 - 4:30" fixedheight="true">
        Coffee Break
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayOneEconSchedule2',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
