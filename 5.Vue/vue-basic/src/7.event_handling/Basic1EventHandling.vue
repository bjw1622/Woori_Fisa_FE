<script setup>
import { ref } from "vue";

const count = ref(0);
const clicked = () => {
  count.value++;
};
</script>

<template>
  <button @click="clicked()">Add</button>
  <p>Count is: {{ count }}</p>
</template>

<style scoped>
button {
  letter-spacing: 0.1rem;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  background: transparent;
  color: black;
  display: inline-block;
  border: 2px dashed black;
  font-size: 1rem;
  font-weight: 700;
}

p {
  font-size: 1.5rem;
}
</style>
