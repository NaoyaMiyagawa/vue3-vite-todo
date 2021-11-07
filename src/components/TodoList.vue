<script setup lang="ts">
import { computed } from 'vue'
import { useTodoStore } from '~/stores'
import TodoItem from '~/components/TodoItem.vue'
import TodoAddForm from '~/components/TodoAddForm.vue'

const store = useTodoStore()
const todoList = computed(() => store.getTodoList)
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Task</h1>

    <div class="flex flex-col p-5 w-100 items-start justify-end">
      <template v-for="todo in todoList" :key="todo.id">
        <TodoItem :todo="todo" @update="store.updateTodo" @deleteTodo="store.deleteTodo" />
      </template>

      <TodoAddForm />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
