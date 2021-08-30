<template>
  <Container class="mb-10">
    <BlueTitle class="mb-5">
      {{ $t('jointhenetwork.title') }}
    </BlueTitle>
    <div class="grid grid-cols-1 md:grid-cols-2  grid-flow-row gap-4 mb-10">
      <p v-html="$t('jointhenetwork.text1')" />
      <p v-html="$t('jointhenetwork.text2')" />
    </div>
    <p class="text-center my-2 text-blue text-xl" v-html="$t('jointhenetwork.textCenter1')" />
    <p class="text-center my-2 text-xl" v-html="$t('jointhenetwork.textCenter2')" />
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
