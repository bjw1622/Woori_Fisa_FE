<script setup>
import { ref, watch } from "vue";
const x = ref(0);
const y = ref(0);

// 특정 값을 통해서 실행 시키고 싶을 떄
// watch(감시할 반응형 소스, 반응형 소스의 값이 변경될 경우 동작할 콜백함수)
watch(x, (newX) => {
  console.log(`x값 : ${newX}`);
});

watch(x, (newX, oldX) => {
  console.log(newX, oldX);
});

//반응형 객체의 속성을 감시할 수는 없음
// watch(x.value, (newX) => {
//   console.log(newX);
// });
</script>

<template>
  <button
    @click="
      () => {
        x += 1;
      }
    "
  >
    x값 1 증가
  </button>
  <div>x : {{ x }}</div>
  <button>y값 1 증가</button>
  <div>y : {{ y }}</div>
</template>

<style lang="scss" scoped></style>
