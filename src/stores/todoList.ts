import { defineStore } from 'pinia'
import { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { Todo } from '~/@types'
import { toast } from '~/composables/toast'

type TodoStore = {
  todoList: Ref<Todo[]>
}

export const useTodoStore = defineStore('main', {
  state: () => {
    return {
      todoList: useLocalStorage('todoList', []),
    } as TodoStore
  },

  getters: {
    getTodoList(): Todo[] {
      return this.todoList
    },

    getNextId(): number {
      const ids = this.todoList.map((todo) => todo.id)
      return Math.max(...ids) + 1
    },
  },

  actions: {
    /**
     * Add new todo
     */
    addTodo(title: string): void {
      if (title.length === 0) return

      const newTodo: Todo = { id: this.getNextId, title, isDone: false }
      this.todoList.push(newTodo)
      toast.success('Todo added')
    },
    /**
     * Update existing todo
     */
    updateTodo(todo: Todo) {
      const index = this.todoList.findIndex((t) => t.id === todo.id)
      this.todoList.splice(index, 1, todo)
    },
    /**
     * Delete todo
     */
    deleteTodo(id: number) {
      const index = this.todoList.findIndex((t) => t.id === id)
      this.todoList.splice(index, 1)
      toast.info('Todo deleted')
    },
  },
})
