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

function onUpdateTitle(newTitle: string): void {
  emit('update', { ...props.todo, title: newTitle })
}
function onUpdateChecked(newChecked: boolean): void {
  emit('update', { ...props.todo, isDone: newChecked })
}
</script>

<template>
  <div class="flex border-b-dark-50 p-2 gap-2 items-center">
    <AppCheckbox :id="String(todo.id)" :checked="todo.isDone" @change="onUpdateChecked" />

    <AppInput v-model:value="todo.title" :class="{ 'text-gray-400': todo.isDone }" @input="onUpdateTitle" />
  </div>
</template>

<style lang="scss" scoped></style>
