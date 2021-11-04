<script setup lang="ts">
defineProps({
  label: { type: String, default: 'Button' },
})
defineEmits([])
</script>

<template>
  <button
    class="
      bg-transparent
      rounded-lg
      border-2 border-blue-400
      h-8
      m-1
      text-lg
      pr-3
      pl-3
      text-blue-500
      00
      hover:bg-blue-500 hover:text-gray-100
      focus:border-2 focus:border-blue-300
    "
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped></style>
