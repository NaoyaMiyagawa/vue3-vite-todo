import { defineStore } from 'pinia'

type Todo = {
  id: number
  title: string
  isDone: boolean
}

export const useTodoList = defineStore('main', {
  state: () => {
    const todoList: Todo[] = [
      { id: 1, title: 'Learn Vue', isDone: false },
      { id: 2, title: 'Learn Vuex', isDone: false },
    ]

    return {
      todoList,
    }
  },

  actions: {
    addTodo(title: string) {
      if (title.length === 0) return

      this.todoList.push({
        id: this.todoList.length + 1,
        title,
        isDone: false,
      })
    },
    updateTodo(todo: Todo) {
      const index = this.todoList.findIndex((t) => t.id === todo.id)
      this.todoList.splice(index, 1, todo)
    },
  },
})
