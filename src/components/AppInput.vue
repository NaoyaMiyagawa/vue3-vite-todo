<script setup lang="ts">
const props = defineProps({
  value: { type: String, default: '' },
  label: { type: String, default: '' },
})
const emit = defineEmits(['update:value'])

function onUpdate(event: Event) {
  if (!(event.target instanceof HTMLInputElement)) return

  const { value } = event.target
  emit('update:value', value)
}
</script>

<template>
  <div class="flex flex-col items-start">
    <span class="text-sm text-gray-500">
      {{ label }}
    </span>

    <input type="text" :value="value" class="border border-blue-300 p-1 px-2" @keyup="onUpdate" />
  </div>
</template>

<style lang="scss" scoped></style>
