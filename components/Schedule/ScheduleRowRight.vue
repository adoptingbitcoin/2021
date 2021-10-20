<template>
  <tr>
    <td class="border border-blue box-border">
      <slot />
    </td>
    <td class="text-xs whitespace-nowrap bg-blue text-white border border-white">
      {{ time }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ScheduleRowRight',
  props: {
    time: {
      type: String,
      default: () => { return '' }
    }
  }
}
</script>

<style scoped>
  td{
    @apply p-5;
  }
</style>
