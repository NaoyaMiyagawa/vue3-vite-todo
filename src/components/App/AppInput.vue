<script setup lang="ts">
import { useVModels } from '@vueuse/core'

const props = defineProps({
  label: { type: String, default: '' },
  value: { type: String, default: '' },
})
const emit = defineEmits<{
  (event: 'update:value', value: string): void
  (event: 'blur', $event: Event): void
}>()

const { value } = useVModels(props, emit)

function onInput($event: Event) {
  value.value = ($event.target as HTMLInputElement).value
}
</script>

<template>
  <div class="flex flex-col items-start inline-block w-full">
    <span class="text-sm text-gray-500">
      {{ label }}
    </span>

    <input
      type="text"
      :value="value"
      class="w-full border-b border-gray-300 p-1 px-2"
      @input="onInput"
      @blur="$emit('blur', $event)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
