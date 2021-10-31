<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { AppCheckbox, AppInput } from '../components/AppComponents'

type Todo = {
  id: number
  title: string
  isDone: boolean
}

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
})
const emit = defineEmits<{
  (event: 'update', todo: Todo): void
}>()

function onUpdateTitle(event: Event) {
  if (!(event.target instanceof HTMLInputElement)) return

  const { value } = event.target
  emit('update', { ...props.todo, title: value })
}
function onUpdateIsDone(event: Event) {
  if (!(event.target instanceof HTMLInputElement)) return

  const { checked } = event.target
  emit('update', { ...props.todo, isDone: checked })
}
</script>

<template>
  <div class="flex border-b-dark-50 p-2 gap-2 align-middle">
    <AppCheckbox :id="String(todo.id)" :is-done="todo.isDone" @change="onUpdateIsDone" />

    <AppInput v-model:value="todo.title" :class="{ 'text-gray-400': todo.isDone }" @update:title="onUpdateTitle" />
  </div>
</template>

<style lang="scss" scoped></style>
