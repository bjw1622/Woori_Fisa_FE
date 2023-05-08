<script setup>
import { ref, watch } from 'vue'

// 질문에 따라 yes or no가 랜덤으로 반환됨
// 'https://yesno.wtf/api'

</script>

<template>
  <p>
    예/아니오로 대답할 수 있는 질문 ?
    <input v-model="question" />
  </p>
  <p>{{ 'yes or no가 출력됨' }}</p>
</template>