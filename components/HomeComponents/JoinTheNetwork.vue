<template>
  <Container class="mb-10">
    <BlueTitle class="mb-5">
      {{ $t('jointhenetwork.title') }}
    </BlueTitle>
    <p class="multicolumn" v-html="$t('jointhenetwork.text')" />
  </Container>
</template>

<script>
import Container from '~/components/Container'
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'JoinTheNetwork',
  components: { BlueTitle, Container }
}
</script>

<style scoped>
@media (min-width: 1024px){
  .multicolumn{
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;

    -webkit-column-gap: 50px;
    -moz-column-gap: 50px;
    column-gap: 50px;

  }
}

</style>
