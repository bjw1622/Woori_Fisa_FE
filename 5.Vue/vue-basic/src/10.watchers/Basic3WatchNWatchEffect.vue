<script setup>
import { ref, watch, watchEffect } from "vue";
const x = ref("123");
// watch는 기본적으로 lazy하기 때문에 감시할 소스(이 맥락에서는 x)가 변경되기 전까지는 콜백함수가 동작 X
// 처음 컴포넌트 랜더링 시 즉시 동작하도록 하기 위해서는 세번쨰 인수로 {}형태로 작성 필요
// watch(x, (newX) => {}, { immediate: true });

// watchEffect() - watch와 다르게 컴포넌트 렌더링 시 먼저 한 번 호출됨
watch(
  x,
  () => {
    console.log("213");
  }
  // { immediate: true }
);

// watchEffect(() => {
//   console.log(x.value);
// });
</script>

<template>
  <button @click="x += 1">x값 1 증가</button>
  <div>{{ x }}</div>
</template>
