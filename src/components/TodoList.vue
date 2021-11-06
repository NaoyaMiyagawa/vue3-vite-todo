<script setup lang="ts">
import { ref, computed } from 'vue'
import TodoItem from '~/components/TodoItem.vue'
import { AppButtonCircle, AppInput } from '~/components/App'
import { useTodoStore } from '~/stores'

const store = useTodoStore()
const todoList = computed(() => store.todoList)
const newTodoTitle = ref<string>('')

function addTodo() {
  store.addTodo(newTodoTitle.value)
  newTodoTitle.value = ''
}
function updateTodo(todo: Todo) {
  store.updateTodo(todo)
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Task</h1>

    <div class="flex flex-col p-5 w-100 items-start justify-end">
      <template v-for="todo in todoList" :key="todo.id">
        <TodoItem :todo="todo" @update="updateTodo" />
      </template>

      <div class="flex border-b-dark-50 p-2 gap-2 align-middle">
        <AppButtonCircle label="+" :is-disabled="newTodoTitle.length === 0" @click="addTodo" class="m-auto" />

        <AppInput v-model:value="newTodoTitle" />
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  padding: 2px 4px;
  color: #304455;
  background-color: #eee;
  border-radius: 4px;
}
</style>
