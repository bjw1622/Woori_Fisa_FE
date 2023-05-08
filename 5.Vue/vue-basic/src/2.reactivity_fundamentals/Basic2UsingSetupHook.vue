<template>
  <div>{{ state.count }}</div>
  <button @click="increment"></button>
</template>

<script setup>
// setup attribute는 Composition API를 위한 특별한 hooks

import { reactive } from "vue";

// 별도의 setup()을 직접 정의하지 않고, reactive state 사용 가능
const state = reactive({ count: 0 });
const increment = () => {
  return state.count++;
};
</script>
<style scoped></style>
