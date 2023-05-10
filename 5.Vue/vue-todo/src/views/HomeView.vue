<script setup>
import { ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppSection from "../components/AppSection.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
const dummyTodos = ref([
  {
    id: 1,
    title: "물 마시기",
    summary: "물을 마신다",
    category: "todo",
  },
  {
    id: 2,
    title: "콜라 마시기",
    summary: "콜라를 마신다",
    category: "progress",
  },
  {
    id: 3,
    title: "우유 마시기",
    summary: "우유를 마신다",
    category: "done",
  },
]);
</script>

<template>
  <DefaultLayout>
    <AppHeader></AppHeader>
    <AppSection :todos="dummyTodos"></AppSection>
  </DefaultLayout>
</template>
