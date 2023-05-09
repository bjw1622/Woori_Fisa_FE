<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  computed,
  watch,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onUpdated,
  onActivated,
  onDeactivated,
} from "vue";

const appTitle = "Counter App";

const appTitleRef = ref(null);

const counterData = ref({
  count: 0,
  title: "My Counter",
});
const increaseCounter = (amount) => (counterData.value.count += amount);
const decreaseCounter = (amount) => (counterData.value.count -= amount);

onBeforeMount(() => {
  console.log("beforeMount");
});

watch(
  () => counterData.value.count,
  (newCount) => {
    if (newCount === 10) {
      alert("10 combo!");
    }
  }
);

const oddOrEven = computed(() => {
  if (counterData.value.count % 2 === 0) return "even";
  return "odd";
});

onMounted(() => {
  console.log("mounted");
  console.log("The app title is", appTitleRef.value);
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});

onUpdated(() => {
  console.log("onUpdated");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});

onUnmounted(() => {
  console.log("unmounted");
});
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
