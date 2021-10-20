<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="7:30- 09:00">
        Registration + café & snacks
      </ScheduleRow>

      <ScheduleRow time="09:00 - 09:10">
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
        Mike Peterson - Director of Bitcoin Beach <br><br>
        <i>Hosted by: Gerson Martinez</i>
      </ScheduleRow>

      <ScheduleRow time="10:15 - 11:00">
        <b>El Salvador - Paving the Way for Bitcoin Adoption in South America</b> <br><br>

        Jehudi Castro Sierra - Former Vice-Minister of Digital Economy Colombia <br><br>
        Monica Taher - Technological & Economic International Affairs at Trade & Investments Secretariat - Government of El Salvador
        <br><br>

        Host: Camila Campton - Social Media Manager Swan Bitcoin <br><br>
        <small>(Spanish)</small>
      </ScheduleRow>

      <ScheduleRow time="11:05  - 11:40">
        <b>Bitcoin Smiles Q&A</b> <br><br>

        Patricia Robinson - Bitcoin Smiles <br>
        Pavlenex - BTCPayServer <br>
        Enrique Berrios - Dentist at Bitcoin Smiles
      </ScheduleRow>

      <ScheduleRow time="11:45 - 12:10">
        <b>Take BTC to the Third Layer</b> <br><br>

        Chase Perkins - Founder ImperviousAi
      </ScheduleRow>

      <ScheduleRow time="12:10 - 1:30">
        Lunch break
      </ScheduleRow>

      <ScheduleRow time="1:35 - 2:00">
        <b>Free Private Cities</b> <br><br>

        Veronika Kutt / Tipolis
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

      <ScheduleRow time="4:00 - 4:30">
        Coffee Break
      </ScheduleRow>

      <ScheduleRow time="4:35 - 5:00">
        <b>Self-Custody Solutions for Salvadoran Companies</b> <br><br>

        Moritz Wietersheim - Founder of Specter Solutions <br><br>
        (Spanish)
      </ScheduleRow>

      <ScheduleRow time="5:05 - 5:30">
        <b>Taking local commerce off-the-chain</b> <br><br>

        Michael Atwood - Founder of Oshi
      </ScheduleRow>

      <ScheduleRow time="5:35 - 6:15">
        <b>Bitcoin for Institutions</b> <br><br>

        Alexander Leishman (River) <br>
        Chris Hunter (Galoy) <br> <br>

        Host: Mark Moss
      </ScheduleRow>

      <ScheduleRow time="6:15 - 6:30">
        Closing Remarks: Moritz Wietersheim
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayOneEconSchedule',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
