<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="7:30- 09:00">
        Registration + café & snacks
      </ScheduleRowRight>

      <ScheduleRowRight time="09:00 - 09:10">
        Opening Remarks: Nicolas Burtey
      </ScheduleRowRight>

      <ScheduleRowRight time="09:15 - 09:40">
        <b>Introduction to Chaincode's Lightning Protocol Development</b> <br><br>
        Josie - Bitcoin Core Contributor
      </ScheduleRowRight>

      <ScheduleRowRight time="09:45 - 10:10">
        <b>Peer Infrastructure Improvement</b> <br><br>

        Warren Togami (Blockstream) <br>
        Konstantin Nick (Donnerlabs)
      </ScheduleRowRight>

      <ScheduleRowRight time="10:15 - 10:40">
        <b>Onboarding a Country to Lightning -
          A Cloud Architecture Approach</b> <br><br>

        Rafael Cordón - CTO IBEX
      </ScheduleRowRight>

      <ScheduleRowRight time="10:45 - 11:10">
        <b>LDK & BDK</b> <br><br>

        Conor Okus - Product Manager Square Crypto
      </ScheduleRowRight>

      <ScheduleRowRight time="11:15 - 11:40">
        <b>Integrating Lightning in an exchange</b> <br><br>
        Francis Pouliot - CEO Founder of Bull Bitcoin
      </ScheduleRowRight>

      <ScheduleRowRight time="11:45 - 12:10">
        <b>Where do you fit in the Lightning Network?</b> <br><br>

        Jesse Jestopher - Co-Founder Amboss Technologies
      </ScheduleRowRight>

      <ScheduleRowRight time="12:10 - 1:30">
        Lunch break
      </ScheduleRowRight>

      <ScheduleRowRight time="1:35 - 2:00">
        <b>Fee-bumping for presigned transactions protocols</b><br><br>

        Antoine Poinsot - Founder Revault
      </ScheduleRowRight>

      <ScheduleRowRight time="2:05 - 2:30">
        <b>Transaction Relay Policy for L2 Developers</b> <br><br>

        Gloria Zhao - Brink Fellow, Bitcoin Core Contributor
      </ScheduleRowRight>

      <ScheduleRowRight time="2:35 - 3:00">
        <b>How to make signing more secure</b> <br><br>

        Paul Itoi - Co-Founder of Sphinx Chat
      </ScheduleRowRight>

      <ScheduleRowRight time="3:05 - 3:55">
        <b>The Future of Lightning Custody</b> <br><br>

        Pierre Marie Padiou - CEO of ACINQ <br>
        Nicolas Burtey - CEO of Galoy <br>
        Roy Sheinfeld - CEO of Breez <br>
        Conor Okus - Product Manager at Square Crypto <br><br>

        Host: Christian Rotzoll - Fulmo
      </ScheduleRowRight>

      <ScheduleRowRight time="4:00 - 4:30">
        Coffee Break
      </ScheduleRowRight>

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

      <ScheduleRowRight time="6:15 - 6:30">
        Closing Remarks: Jeff Gallas
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayOneDevSchedule',
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
