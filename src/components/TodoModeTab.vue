<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { PropType } from 'vue'
import { TodoMode } from '~/@types'

const props = defineProps({
  mode: { type: String as PropType<TodoMode>, default: 'ALL' },
})
const emit = defineEmits(['update:mode'])
const mode = useVModel(props, 'mode', emit)

const modeList: TodoMode[] = ['ALL', 'UNDONE', 'DONE']
</script>

<template>
  <div class="flex items-start flex-row p-4">
    <template v-for="modeItem in modeList" :key="modeItem">
      <div
        class="p-1 pt-2 px-6"
        :class="{ 'border-b-2 border-blue-400 bg-blue-100 rounded-t-2xl': mode === modeItem }"
        @click="mode = modeItem"
      >
        {{ modeItem }}
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
