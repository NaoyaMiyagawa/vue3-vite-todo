<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTodoStore } from '~/stores'
import TodoItem from '~/components/TodoItem.vue'
import TodoAddForm from '~/components/TodoAddForm.vue'
import TodoModeTab from '~/components/TodoModeTab.vue'
import { TodoMode } from '~/@types'

const mode = ref<TodoMode>('UNDONE')

const store = useTodoStore()
const todoList = computed(() => store.getTodoList(mode))
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Task</h1>

    <TodoModeTab v-model:mode="mode" />

    <div class="flex flex-col p-5 w-100 items-start justify-end">
      <transition-group name="list-complete">
        <template v-for="todo in todoList" :key="todo.id">
          <TodoItem class="list-complete-item" :todo="todo" @update="store.updateTodo" @deleteTodo="store.deleteTodo" />
        </template>
      </transition-group>

      <TodoAddForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 0.5s ease;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
