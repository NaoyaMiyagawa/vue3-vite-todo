<script setup lang="ts">
import { useVModels } from '@vueuse/core'
import { PropType } from 'vue'
import type { TodoMode } from '~/@types'

const props = defineProps({
  mode: { type: String as PropType<TodoMode>, default: 'ALL' },
})
const emit = defineEmits<{
  (event: 'update:mode', value: TodoMode): void
}>()
const { mode } = useVModels(props, emit)

const modeList: TodoMode[] = ['ALL', 'UNDONE', 'DONE']
</script>

<template>
  <div class="flex gap-2 items-start flex-row p-4">
    <template v-for="modeItem in modeList" :key="modeItem">
      <div
        class="p-1 pt-2 px-6 border-b-1 w-30"
        :class="{ 'border-b-2 border-blue-400 bg-blue-100 rounded-t-2xl': mode === modeItem }"
        @click="mode = modeItem"
      >
        {{ modeItem }}
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
