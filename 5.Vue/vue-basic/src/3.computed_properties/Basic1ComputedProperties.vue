<template>
  <p>출판된 도서가 최소 1권 이상 있는지?</p>
  <span>{{ '??' }}</span>
</template>

<script setup>
import { reactive } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

</script>