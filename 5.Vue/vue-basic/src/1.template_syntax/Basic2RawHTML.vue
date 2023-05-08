<template>
  <p>Using text interpolation: {{ rawHTML }}</p>
  <p>Using v-html directive: <span v-html="rawHTML"></span></p>
</template>

<script setup>
import { ref } from "vue";
//'<span style="color: red">This should be red.</span>'
const rawHTML = ref('<span style="color: red">This should be red.</span>');
</script>
