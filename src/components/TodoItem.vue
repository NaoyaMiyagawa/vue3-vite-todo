<script setup lang="ts">
import { PropType } from 'vue'
import type { Todo } from '~/@types'
import { AppCheckbox, AppInput } from '~/components/App'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
})
const emit = defineEmits<{
  (event: 'update', todo: Todo): void
}>()

function onUpdateTodoTitle(newTitle: string): void {
  emit('update', { ...props.todo, title: newTitle })
}
function onUpdateChecked(newChecked: boolean): void {
  emit('update', { ...props.todo, isDone: newChecked })
}
</script>

<template>
  <div class="flex border-b-dark-50 p-2 gap-2 items-center">
    <AppCheckbox :id="String(todo.id)" :checked="todo.isDone" @change="onUpdateChecked" />

    <AppInput
      :value="todo.title"
      @input="onUpdateTodoTitle(($event.target as HTMLInputElement).value)"
      :class="{ 'text-gray-400': todo.isDone }"
    />
  </div>
</template>

<style lang="scss" scoped></style>
