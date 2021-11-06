import { defineStore } from 'pinia'
import type { Todo } from '~/@types'

type TodoStore = {
  todoList: Todo[]
}

export const useTodoStore = defineStore('main', {
  state: () => {
    return {
      todoList: [
        { id: 1, title: 'Learn Vue', isDone: false },
        { id: 2, title: 'Learn Vuex', isDone: false },
      ],
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
