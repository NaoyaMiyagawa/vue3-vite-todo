<script setup lang="ts">
import { computed } from 'vue'
import { useTodoStore } from '~/stores'
import { TodoModeTab, TodoItem, TodoAddForm } from '~/components/Todo'

const store = useTodoStore()
const mode = computed(() => store.todoMode)
const defaultIsDone = computed(() => mode.value === 'DONE')
const todoList = computed(() => store.getTodoList(mode))
</script>

<template>
  <div class="flex justify-center p-4">
    <div class="flex flex-col items-center w-[95%] bg-white pt-6 pb-14 rounded-2xl">
      <h1>Task</h1>

      <TodoModeTab :mode="mode" @update:mode="store.updateTodoMode" />

      <div class="flex flex-col items-start justify-end">
        <transition-group name="list-complete">
          <template v-for="todo in todoList" :key="todo.id">
            <TodoItem
              class="list-complete-item"
              :todo="todo"
              @update:todo="store.updateTodo"
              @delete:todo="store.deleteTodo"
            />
          </template>
        </transition-group>

        <TodoAddForm :defaultIsDone="defaultIsDone" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 0.2s ease;
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
