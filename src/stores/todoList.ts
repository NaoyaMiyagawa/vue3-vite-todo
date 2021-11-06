import { defineStore } from 'pinia'
import { Ref } from 'vue'
import { useStorage } from '@vueuse/core'

import type { Todo } from '~/@types'

type TodoStore = {
  todoList: Ref<Todo[]>
}

export const useTodoStore = defineStore('main', {
  state: () => {
    return {
      todoList: useStorage('todoList', []),
    } as TodoStore
  },

  actions: {
    /**
     * Add new todo
     */
    addTodo(title: string): void {
      if (title.length === 0) return

      this.todoList.push({
        id: this.todoList.length + 1,
        title,
        isDone: false,
      })
    },
    /**
     * Update existing todo
     */
    updateTodo(todo: Todo) {
      const index = this.todoList.findIndex((t) => t.id === todo.id)
      this.todoList.splice(index, 1, todo)
    },
  },
})
