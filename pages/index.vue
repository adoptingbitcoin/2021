<template>
  <div class="w-full">
    <Header/>
    <JoinTheNetwork/>
    <SpeakerList/>
    <Header/>
  </div>
</template>

<script>
import JoinTheNetwork from '~/components/HomeComponents/JoinTheNetwork'
import Header from '~/components/HomeComponents/Header'
import SpeakerList from '~/components/HomeComponents/SpeakerList'
export default {
  components: { SpeakerList, JoinTheNetwork, Header }
}
</script>

<style scoped>
</style>
