<script setup lang="ts">
import { ref } from 'vue'
import { AppButtonCircle, AppInput } from '~/components/App'
import { useTodoStore } from '~/stores'

const props = defineProps({
  defaultIsDone: { type: Boolean, default: false },
})
const emit = defineEmits([])

const store = useTodoStore()
const newTodoTitle = ref<string>('')

function addTodo() {
  store.addTodo(newTodoTitle.value, props.defaultIsDone)
  newTodoTitle.value = ''
}
</script>

<template>
  <div class="flex border-b-dark-50 p-2 gap-2 align-middle w-full">
    <AppButtonCircle label="+" :is-disabled="newTodoTitle.length === 0" @click="addTodo" class="m-auto" />

    <AppInput v-model:value="newTodoTitle" @keyup.enter="addTodo" />
  </div>
</template>

<style lang="scss" scoped></style>
