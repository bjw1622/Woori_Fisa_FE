<template>
  <div class="flex items-center justify-between mb-2" id="task-control">
    <button
      class="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
      data-cy="add-todo-button"
    >
      Add Todo
    </button>

    <TodoFilter />
  </div>
</template>

<script setup>
import TodoFilter from "./TodoFilter.vue";
</script>

<style lang="scss" scoped></style>
