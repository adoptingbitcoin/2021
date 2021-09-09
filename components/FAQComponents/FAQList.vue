<template>
  <div class="">
    <div :key="q.question" class="" v-for="q in faqList.faq">
      <FAQItem :item="q" />
    </div>
  </div>
</template>

<script>
import FAQItem from '~/components/FAQComponents/FAQItem'
export default {
  name: 'FAQList',
  components: { FAQItem },
  props: ['faqList']
}
</script>

<style scoped>

</style>
