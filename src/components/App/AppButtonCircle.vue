<script setup lang="ts">
defineProps({
  label: { type: String, default: 'Button' },
  isDisabled: { type: Boolean, default: false },
})
defineEmits([])
</script>

<template>
  <button
    :disabled="isDisabled"
    class="rounded-full h-6 text-white w-6"
    :class="[!isDisabled ? 'bg-gray-400' : 'bg-gray-200', { 'cursor-default': isDisabled }]"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped></style>
