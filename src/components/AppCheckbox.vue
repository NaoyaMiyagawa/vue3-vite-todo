<script setup lang="ts">
defineProps({
  id: { type: String, default: null },
  isDone: { type: Boolean, default: false },
})
defineEmits([])
</script>

<template>
  <div class="flex items-center">
    <input
      :id="id"
      type="checkbox"
      class="rounded bg-gray-50 border-gray-300 h-4 w-4 focus:ring-3 focus:ring-blue-300"
      :checked="isDone"
    />
  </div>
</template>

<style lang="scss" scoped></style>
