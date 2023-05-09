<script setup>
import { ref, watch } from "vue";
const question = ref("");
const answer = ref("질문 뒤에 ?를 꼭 작성하세요");
const imgSrc = ref("");
// 질문에 따라 yes or no가 랜덤으로 반환됨
// 'https://yesno.wtf/api'

// watch(감시할소스, 콜백함수, )
watch(
  question,
  async (newQ) => {
    if (question.value[question.value.length - 1] === "?") {
      await fetch("https://yesno.wtf/api")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          answer.value = data.answer;
          imgSrc.value = data.image;
        });
    } else {
      answer.value = "생각중";
    }
  },
  // immediate, useEffect처럼 사용
  { immediate: true }
);
</script>

<template>
  <p>
    예/아니오로 대답할 수 있는 질문 ?
    <input v-model="question" />
    <img :src="imgSrc" alt="" />
  </p>
  <p>{{ answer }}</p>
</template>
