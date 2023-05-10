<template>
  <ul class="'text-white px-0 my-0'">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      class="text-white"
      :todo="todo"
    />
  </ul>
</template>

<script setup>
import TodoItem from "./TodoItem.vue";
import { ref } from "vue";

const todos = ref([
  {
    id: 1,
    title: "물 마시기",
    summary: "물을 마신다",
    category: "todo",
  },
  {
    id: 2,
    title: "콜라 마시기",
    summary: "콜라를 마신다",
    category: "progress",
  },
  {
    id: 3,
    title: "우유 마시기",
    summary: "우유를 마신다",
    category: "done",
  },
]);
</script>
