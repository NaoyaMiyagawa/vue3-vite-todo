<script setup lang="ts">
import { useVModels } from '@vueuse/core'

const props = defineProps({
  checked: { type: Boolean, default: false },
})
const emit = defineEmits<{
  (event: 'update:checked', value: boolean): void
}>()

const { checked } = useVModels(props, emit)

function toggleChecked(): void {
  checked.value = !checked.value
}
</script>

<template>
  <div
    class="border rounded-full h-6 w-6 inline-flex relative items-center align-middle flex-none"
    :class="[!checked ? 'bg-white border-gray-300' : 'bg-purple-400 border-purple-600']"
  >
    <input type="checkbox" class="hidden el_checkbox" :checked="checked" />
    <label
      class="cursor-pointer el_checkbox"
      :class="{ 'border-4 border-white': checked }"
      @click="toggleChecked"
    ></label>
  </div>
</template>

<style lang="scss" scoped>
.el_checkbox {
  @apply rounded-full h-full w-full;
}
</style>
