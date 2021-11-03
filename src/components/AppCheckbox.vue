<script setup lang="ts">
const props = defineProps({
  id: { type: String, default: null, required: true },
  checked: { type: Boolean, default: false },
})
const emit = defineEmits<{
  (event: 'change', value: boolean): void
}>()
</script>

<template>
  <div
    class="border rounded-full border-1 h-6 w-6 inline-flex relative items-center align-middle"
    :class="[!checked ? 'bg-white border-gray-300' : 'bg-purple-400 border-purple-600']"
  >
    <input
      type="checkbox"
      :id="id"
      class="hidden el_checkbox"
      :checked="checked"
      @change="$emit('change', ($event.target as HTMLInputElement).checked)"
    />
    <label :for="id" class="cursor-pointer el_checkbox" :class="{ 'border-4 border-white': checked }"></label>
  </div>
</template>

<style lang="scss" scoped>
.el_checkbox {
  @apply rounded-full h-full w-full;
}
</style>
