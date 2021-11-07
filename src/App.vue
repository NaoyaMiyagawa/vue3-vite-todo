<script setup lang="ts">
import TodoList from '~/components/TodoList.vue'
</script>

<template>
  <TodoList />
</template>

<style lang="scss">
#app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* stylelint-disable */
.el_toast.Vue-Toastification__toast {
  @apply p-4 min-h-8 text-sm text-opacity-100 bg-opacity-80;

  &.Vue-Toastification__toast--default {
    @apply bg-light-blue-400;

    .Vue-Toastification__progress-bar {
      @apply bg-light-blue-500;
    }
  }
  &.Vue-Toastification__toast--success {
    @apply bg-green-400;

    .Vue-Toastification__progress-bar {
      @apply bg-green-500;
    }
  }
  &.Vue-Toastification__toast--info {
    @apply bg-light-blue-400;

    .Vue-Toastification__progress-bar {
      @apply bg-light-blue-500;
    }
  }
}
</style>
