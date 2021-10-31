<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import AppCheckbox from '~/components/AppCheckbox.vue'

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
  if (event.target instanceof HTMLInputElement) {
    const { value } = event.target
    emit('update', { ...props.todo, title: value })
  }
}
function onUpdateIsDone(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    const { checked } = event.target
    emit('update', { ...props.todo, isDone: checked })
  }
}
</script>

<template>
  <div class="flex border-b-dark-50 p-2 gap-2 align-middle">
    <AppCheckbox :id="String(todo.id)" :is-done="todo.isDone" @change="onUpdateIsDone" />

    <input type="text" :value="todo.title" :class="{ 'line-through': todo.isDone }" @input="onUpdateTitle" />
  </div>
</template>

<style lang="scss" scoped></style>
