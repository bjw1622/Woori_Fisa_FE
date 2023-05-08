<template>
  <button @click="x += 1">x값 1 증가</button>
  <div>{{ x }}</div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue'

</script>