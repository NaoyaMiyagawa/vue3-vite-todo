import { defineStore } from 'pinia'
import { Ref, unref } from 'vue'
import { useLocalStorage, MaybeRef } from '@vueuse/core'
import type { Todo, TodoMode } from '~/@types'
import { toast } from '~/composables'

type TodoStore = {
  todoList: Ref<Todo[]>
  todoMode: Ref<TodoMode>
}

export const useTodoStore = defineStore('main', {
  state: () => {
    return {
      todoList: useLocalStorage('todoList', []),
      todoMode: useLocalStorage('todoMode', 'ALL'),
    } as TodoStore
  },

  getters: {
    getTodoList: (state) => {
      return (mode: MaybeRef<TodoMode>) => {
        mode = unref(mode)
        return state.todoList.filter((todo: Todo) => {
          if (mode === 'ALL') return true
          if (mode === 'DONE' && todo.isDone) return true
          if (mode === 'UNDONE' && !todo.isDone) return true
        })
      }
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
    /**
     * Update TodoMode
     */
    updateTodoMode(mode: TodoMode) {
      this.todoMode = mode
    },
  },
})
