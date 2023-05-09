<script setup></script>

<template>
  <div class="w-full h-full overflow-y-scroll bg-slate-500">
    <div class="max-w-xl mx-auto">
      <!-- 공통 레이아웃 작성 부분 -->

      <!-- vue 제공 태그 -->
      <!-- 자식 컴포넌트들을 갖겠다 -->
      <slot />
    </div>
  </div>
</template>
