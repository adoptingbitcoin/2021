<template>
  <tr>
    <td class="text-xs whitespace-nowrap bg-red text-white border border-white">
      {{ time }}
    </td>
    <td class="border border-red  box-border">
      <slot />
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ScheduleRow',
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
