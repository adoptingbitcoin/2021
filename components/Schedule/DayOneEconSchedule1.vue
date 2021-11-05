<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="7:30- 09:00" :fixedheight="true">
        Registration + coffee & snacks
      </ScheduleRow>

      <ScheduleRow time="09:00 - 09:10" :fixedheight="true">
        Opening Remarks: Chris Hunter
      </ScheduleRow>

      <ScheduleRow time="09:15 - 09:30">
        <b>Welcome to El Salvador!</b> <br><br>
        María Luisa Hayem Brevé <br>
        <small><i>Minister of Economy El Salvador</i></small> <br><br>
        <small>(Spanish / English)</small>
      </ScheduleRow>

      <ScheduleRow time="09:35 - 10:10">
        <b>Bootstrapping Bitcoin Adoption</b> <br><br>
        <nuxt-link to="/speaker/MikePeterson">Mike Peterson</nuxt-link> - Director of Bitcoin Beach <br><br>
        <i>Hosted by: Gerson Martinez</i>
      </ScheduleRow>

      <ScheduleRow time="10:15 - 11:00">
        <b>El Salvador - Paving the Way for Bitcoin Adoption in South America</b> <br><br>

        <nuxt-link to="/speaker/JehudiCastroSierra">Jehudi Castro Sierra</nuxt-link> - Former Vice-Minister of Digital Economy Colombia <br><br>
        <nuxt-link to="/speaker/MonicaTaher">Monica Taher</nuxt-link> - Technological & Economic International Affairs at Trade & Investments Secretariat - Government of El Salvador
        <br><br>

        Host: Camila Campton - Social Media Manager Swan Bitcoin <br><br>
        <small>(Spanish)</small>
      </ScheduleRow>

      <ScheduleRow time="11:05  - 11:40">
        <b>Bitcoin for Non-Profits</b> <br><br>

        <nuxt-link to="/speaker/Bentricia21">Bentricia21</nuxt-link> - Bitcoin Smiles <br>
        <nuxt-link to="/speaker/JoshYoung">Josh Young</nuxt-link> - NewStory <br>
        <nuxt-link to="/speaker/EnriqueBerrios">Enrique Berrios</nuxt-link> - Dentist at Bitcoin Smiles <br><br>

        Host: Chris Hunter - Co-Host / Galoy
      </ScheduleRow>

      <ScheduleRow time="11:45 - 12:10">
        <b>Take BTC to the Third Layer</b> <br><br>

        <nuxt-link to="/speaker/ChasePerkins">Chase Perkins</nuxt-link> - Founder ImperviousAi
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
  name: 'DayOneEconSchedule1',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
