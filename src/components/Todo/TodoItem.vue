<script setup lang="ts">
import { useVModels } from '@vueuse/core'
import { PropType } from 'vue'
import type { Todo } from '~/@types'
import { AppCheckbox, AppInput } from '~/components/App'

const props = defineProps({
  todo: { type: Object as PropType<Todo>, required: true },
})
const emit = defineEmits<{
  (event: 'update:todo', todo: Todo): void
  (event: 'delete:todo', todoId: number): void
}>()

const { todo } = useVModels(props, emit)

function onUpdateTitle(newTitle: string): void {
  todo.value.title = newTitle
}
function onUpdateChecked(newChecked: boolean): void {
  todo.value.isDone = newChecked
}
function confirmDelete(todoId: number): void {
  confirm('Are you sure delete?') && emit('delete:todo', todoId)
}
</script>

<template>
  <div class="flex border-b-dark-50 p-2 gap-2 w-full items-center" @click.right.prevent="confirmDelete(todo.id)">
    <AppCheckbox :checked="todo.isDone" @update:checked="onUpdateChecked" />

    <AppInput
      :value="todo.title"
      @update:value="onUpdateTitle"
      :class="{ 'text-gray-400': todo.isDone }"
      @keyup.enter="$event.target.blur()"
    />
  </div>
</template>

<style lang="scss" scoped></style>
