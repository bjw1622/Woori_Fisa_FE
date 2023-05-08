<template>
  <!-- Chrome Developer Tools - Elements에서 바인딩 여부 확인 -->
  <div id="{{dynamicId}}">값 바인딩 불가능</div>
  <!-- v-bind 디렉티브를 활용하여 값 바인딩 가능 -->
  <div v-bind:id="dynamicId">Attribute 바인딩</div>
  <!-- v-bind shorthand, : 기호만 사용 -->
  <div :id="dynamicId">shortcut</div>
  <!-- Boolean attribute -->
  <button :disabled="isButtonDisabled">Button</button>

  <div :id="objectOfAttrs.id" :class="objectOfAttrs.class">
    Multiple binding
  </div>

  <div v-bind="objectOfAttrs">동시에</div>

  <p v-if="seen">now you see me</p>
</template>

<script setup>
import { ref } from "vue";

const dynamicId = ref("userId-152");
const isButtonDisabled = true; // true일 경우, button 비활성화(disabled)

const objectOfAttrs = {
  id: "container",
  class: "wrapper",
};

const seen = ref(true);
</script>
