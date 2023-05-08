<template>
  <p>출판된 도서가 최소 1권 이상 있는지?</p>
  <span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>
  <p>{{ fullName }}</p>
</template>

<script setup>
import { computed, ref } from "vue";

const author = ref({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

const publishedBooks = computed(() => (author.books.length > 0 ? "Yes" : "No"));

const firstName = ref("John");
const lastName = ref("Doe");
const fullName = computed(() => {
  return firstName.value + lastName.value;
});
</script>
