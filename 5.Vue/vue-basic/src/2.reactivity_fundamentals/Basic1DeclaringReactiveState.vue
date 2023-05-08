<template>
  <div>{{ state.count }}</div>
  <button @click="increment"></button>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({ count: 0 });
    console.log(state);
    const increment = () => {
      return state.count++;
    };
    return { state, increment };
  },
};
</script>

<style lang="scss" scoped></style>
