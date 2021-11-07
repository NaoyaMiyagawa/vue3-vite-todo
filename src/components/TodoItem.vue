<script setup lang="ts">
import { PropType } from 'vue'
import type { Todo } from '~/@types'
import { AppButton, AppCheckbox, AppInput } from '~/components/App'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
})
const emit = defineEmits<{
  (event: 'update', todo: Todo): void
  (event: 'deleteTodo', todoId: number): void
}>()

function onUpdateTitle(newTitle: string): void {
  emit('update', { ...props.todo, title: newTitle })
}
function onUpdateChecked(newChecked: boolean): void {
  emit('update', { ...props.todo, isDone: newChecked })
}
function confirmDelete(todoId: number): void {
  confirm('Are you sure delete?') && emit('deleteTodo', todoId)
}
</script>

<template>
  <div class="flex border-b-dark-50 p-2 gap-2 w-full items-center" @click.right.prevent="confirmDelete(todo.id)">
    <AppCheckbox :checked="todo.isDone" @update:checked="onUpdateChecked" />

    <AppInput :value="todo.title" @update:value="onUpdateTitle" :class="{ 'text-gray-400': todo.isDone }" />
  </div>
</template>

<style lang="scss" scoped></style>
