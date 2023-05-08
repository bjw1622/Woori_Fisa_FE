<template>
  <div>
    <input v-model="searchQuery" type="text" placeholder="Search the fruits" />
    <div v-for="newFruit in resultQuery">
      <div class="fruit-name">{{ newFruit.name }}</div>
      <div class="fruit-image">
        <img v-bind:src="newFruit.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const fruits = [
  {
    id: 1,
    name: "Apple",
    image: "http://placehold.it/320x100/E8117F/ffffff?text=Apple",
  },
  {
    id: 2,
    name: "Melon",
    image: "http://placehold.it/320x100/A0D8B3/ffffff?text=Melon",
  },
  {
    id: 3,
    name: "Avocado",
    image: "http://placehold.it/320x100/7C96AB/ffffff?text=Avocado",
  },
];

const searchQuery = ref("");
const newFruits = ref(fruits);
const resultQuery = computed(() => {
  return newFruits.value.filter((newFruit) => {
    if (searchQuery.value.toLowerCase() === newFruit.name.toLowerCase()) {
      return newFruit;
    } else if (searchQuery.value === "") {
      return newFruit;
    }
  });
});
</script>

<style scoped>
input {
  margin-bottom: 20px;
  padding: 1rem;
  height: 2rem;
  font-size: 1.25rem;
  border: 2px dashed gray;
  outline: none;
}

.fruit-name {
  font-size: 1.25rem;
}
</style>

<!-- <template>
  <div>
    <input v-model="searchQuery" type="text" placeholder="Search the fruits" />
    <div v-for="result in resultQuery">
      <div class="fruit-name">{{ result.name }}</div>
      <div class="fruit-image">
        <img :src="result.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const fruits = [
  {
    id: 1,
    name: "Apple",
    image: "http://placehold.it/320x100/E8117F/ffffff?text=Apple",
  },
  {
    id: 2,
    name: "Melon",
    image: "http://placehold.it/320x100/A0D8B3/ffffff?text=Melon",
  },
  {
    id: 3,
    name: "Avocado",
    image: "http://placehold.it/320x100/7C96AB/ffffff?text=Avocado",
  },
];

const searchQuery = ref("");
const fruitData = ref(fruits);
const resultQuery = computed(() => {
  if (searchQuery.value) {
    // 검색창에 어떤 텍스트가 있을 때
    return fruits.filter((fruit) => {
      return searchQuery.value
        .toLowerCase()
        .split(" ")
        .every((value) => {
          console.log(value);
          return fruit.name.toLowerCase().includes(value);
        });
    });
  } else {
    return fruitData.value;
  }
});
</script>

<style scoped>
input {
  margin-bottom: 20px;
  padding: 1rem;
  height: 2rem;
  font-size: 1.25rem;
  border: 2px dashed gray;
  outline: none;
}

.fruit-name {
  font-size: 1.25rem;
}
</style> -->
