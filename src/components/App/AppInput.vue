<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: '' },
  value: { type: String, default: '' },
})
const emit = defineEmits<{
  (event: 'input', value: string): void
}>()
</script>

<template>
  <div class="flex flex-col items-start inline-block">
    <span class="text-sm text-gray-500">
      {{ label }}
    </span>

    <input
      type="text"
      :value="value"
      class="border-b border-gray-300 p-1 px-2"
      @input="$emit('input', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
