<script setup>
import TodoList from "./todos/TodoList.vue";
import TodoHeader from "./todos/TodoHeader.vue";
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

<template>
  <div>
    <TodoHeader />
    <TodoList :todos="todos" />
  </div>
</template>
