<script setup lang="ts">
const props = defineProps({
  id: { type: String, default: null },
  checked: { type: Boolean, default: false },
})
const emit = defineEmits<{
  (event: 'change', value: boolean): void
}>()
</script>

<template>
  <div class="flex items-center inline-block">
    <input
      :id="id"
      type="checkbox"
      class="rounded bg-gray-50 border-gray-300 h-4 w-4 focus:ring-3 focus:ring-blue-300"
      :checked="checked"
      @change="$emit('change', ($event.target as HTMLInputElement).checked)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
