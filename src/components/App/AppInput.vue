<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps({
  label: { type: String, default: '' },
  value: { type: String, default: '' },
})
const emit = defineEmits<{
  (event: 'update:value', value: string): void
}>()

const value = useVModel(props, 'value', emit)

function onInput($event: Event) {
  value.value = ($event.target as HTMLInputElement).value
}
</script>

<template>
  <div class="flex flex-col items-start inline-block">
    <span class="text-sm text-gray-500">
      {{ label }}
    </span>

    <input type="text" :value="value" class="border-b border-gray-300 p-1 px-2" @input="onInput" />
  </div>
</template>

<style lang="scss" scoped></style>
