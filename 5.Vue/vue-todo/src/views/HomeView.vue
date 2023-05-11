<script setup>
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppSection from '../components/AppSection.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useTodoStore } from '../stores/todo'
import { storeToRefs } from 'pinia'

// pinia의 store를 사용하려면 해당 store import
const todoStore = useTodoStore()
const { filteredTodoByCategory } = storeToRefs(todoStore)
const dummyTodos = filteredTodoByCategory
const addTodo = (todo) => dummyTodos.value.push(todo)
</script>

<template>
  <DefaultLayout>
    <AppHeader />
    <AppSection @add-todo="addTodo" :todos="dummyTodos" />
  </DefaultLayout>
</template>
