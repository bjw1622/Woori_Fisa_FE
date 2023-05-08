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
        <input v-model="counterData.title" type="text"/>
      </div>
  
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted, onUnmounted, computed, watch, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUpdated, onActivated, onDeactivated } from 'vue'
    
    const appTitle = 'Counter App';
  
    const appTitleRef = ref(null);

    const counterData = ref({
      count: 0,
      title: 'My Counter',
    });
  
  </script>
  
  <style>
  .home {
    text-align: center;
    padding: 20px;
  }
  .btn, .counter {
    font-size: 40px;
    margin: 10px;
  }
  .edit {
    margin-top: 60px;
  }
  </style>