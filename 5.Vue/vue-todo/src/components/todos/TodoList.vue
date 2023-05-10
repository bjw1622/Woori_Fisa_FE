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

// const todos = ref([
//   {
//     id: 1,
//     title: "물 마시기",
//     summary: "물을 마신다",
//     category: "todo",
//   },
//   {
//     id: 2,
//     title: "콜라 마시기",
//     summary: "콜라를 마신다",
//     category: "progress",
//   },
//   {
//     id: 3,
//     title: "우유 마시기",
//     summary: "우유를 마신다",
//     category: "done",
//   },
// ]);

defineProps({
  todos: {
    type: Array, // 받은 데이터의 형태는 객체여야한다 정의
    default() {
      // 받은 데이터가 없을 때 이것으로 하겠다
      return {
        id: "",
        title: "",
        summary: "",
        category: "",
      };
    },
  },
});
</script>
