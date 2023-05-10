<template>
  <div class="flex items-center justify-between mb-2" id="task-control">
    <button
      class="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
      data-cy="add-todo-button"
    >
      Add Todo
    </button>
    <Teleport to="body">
      <DefaultModal>
        <template #header>
          <h3>New Code</h3>
        </template>
        <template #body><NewTodo></NewTodo> </template>
      </DefaultModal>
    </Teleport>
    <TodoFilter />
  </div>
</template>

<script setup>
import DefaultModal from "../DefaultModal.vue";
import TodoFilter from "./TodoFilter.vue";
import NewTodo from "./NewTodo..vue";
</script>

<style lang="scss" scoped></style>
