<template>
  <ul class="text-white px-0 my-8">
    <TodoItem v-for="item in todos" @delete-Todo="deleteTodo" :key="item.id" :todo="item" />
  </ul>
</template>

<script setup>
import TodoItem from './TodoItem.vue'

defineProps({
  todos: {
    type: Array
  }
})
const emit = defineEmits(['delete-Todo'])
const deleteTodo = () => emit('delete-Todo')
</script>
