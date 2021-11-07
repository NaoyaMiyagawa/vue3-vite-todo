<script setup lang="ts">
defineProps({
  label: { type: String, default: 'Button' },
})
defineEmits([])
</script>

<template>
  <button class="el_appButton">
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
.el_appButton {
  @apply bg-transparent rounded-lg border-2 border-blue-400 h-8 m-1 text-lg pr-3 pl-3 text-blue-500;
  @apply hover:(bg-blue-500 text-gray-100);
  @apply focus:(border-2 border-blue-300);
}
</style>
