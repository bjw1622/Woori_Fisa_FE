<template>
    <div>
        <TodoHeader @add-todo="addTodo"/>
        <TodoList :todos="todos"/>
    </div>
</template>

<script setup>
import TodoHeader from './todos/TodoHeader.vue';
import TodoList from './todos/TodoList.vue';

defineProps({
  todos: {
    type: Array,
  }
});

const addTodo = (todo) => emit('add-todo', todo);

const emit = defineEmits(['add-todo']);

</script>