<script setup lang="ts">
import { ref, reactive } from 'vue'
import TodoItem from '~/components/TodoItem.vue'
import { AppButton, AppInput } from '../components/AppComponents'

type Todo = {
  id: number
  title: string
  isDone: boolean
}
const todoList = reactive<Todo[]>([
  { id: 1, title: 'Learn Vue', isDone: false },
  { id: 2, title: 'Learn Vuex', isDone: false },
])
const newTodoTitle = ref<string>('')
const addTodo = (title: string) => {
  if (title.length === 0) return

  todoList.push({
    id: todoList.length + 1,
    title,
    isDone: false,
  })
  newTodoTitle.value = ''
}
const updateTodo = (todo: Todo) => {
  const index = todoList.findIndex((t) => t.id === todo.id)
  todoList[index] = todo
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Task</h1>

    <div class="flex flex-col p-5 w-100 items-start justify-end">
      <div class="flex mb-4 gap-4 items-end">
        <AppButton label="Add" @click="addTodo(newTodoTitle)" />

        <AppInput label="New task" v-model:value="newTodoTitle" />
      </div>

      <template v-for="todo in todoList" :key="todo.id">
        <TodoItem :todo="todo" @update="updateTodo" />
      </template>
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
