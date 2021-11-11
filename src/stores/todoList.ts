import { defineStore } from 'pinia'
import { Ref, unref } from 'vue'
import { useLocalStorage, MaybeRef } from '@vueuse/core'
import type { Todo, TodoMode } from '~/@types'
import { toast } from '~/composables'

type TodoStore = {
  todoList: Ref<Todo[]>
  todoMode: Ref<TodoMode>
}

const defaultTodoList: Todo[] = [
  { id: 1, title: 'Open Todo App', isDone: true },
  { id: 2, title: 'Add Todo', isDone: false },
  { id: 3, title: 'Mark Todo Done', isDone: false },
  { id: 4, title: 'Edit Todo', isDone: false },
  { id: 5, title: 'Delete Todo', isDone: false },
]

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todoList: useLocalStorage('todoList', defaultTodoList),
      todoMode: useLocalStorage('todoMode', 'ALL'),
    } as TodoStore
  },

  getters: {
    /** Get todoList filtered by specified mode */
    getTodoList({ todoList, todoMode }) {
      return (mode?: MaybeRef<TodoMode>): Todo[] => {
        mode = mode ? unref(mode) : todoMode

        return todoList.filter((todo: Todo): boolean => {
          if (mode === 'ALL') return true
          if (mode === 'DONE' && todo.isDone) return true
          if (mode === 'UNDONE' && !todo.isDone) return true
          return false
        })
      }
    },

    /** Default isDone value used when adding todo */
    defaultIsDone({ todoMode }): boolean {
      return todoMode === 'DONE'
    },

    /** Get next id for adding todo */
    getNextId({ todoList }): number {
      if (todoList.length === 0) return 1

      const ids = todoList.map((todo) => todo.id)
      return Math.max(...ids) + 1
    },
  },

  actions: {
    /**
     * Add new todo
     */
    addTodo(title: string, isDone?: boolean): void {
      if (title.length === 0) return

      const newTodo: Todo = {
        id: this.getNextId,
        title,
        isDone: isDone || this.defaultIsDone,
      }
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
