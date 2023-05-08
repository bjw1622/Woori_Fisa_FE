<script setup>
import { ref } from 'vue';

</script>

<template>
<!-- Chrome Developer Tools - Elements에서 바인딩 여부 확인 -->


<!-- submit 버튼으로 동작하는 form태그의 기본 동작(Default behavior)에 의해 화면이 새로고침됨 -->
<form action="someServerUrl">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

<!-- without modifier -->
<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="button" value="Submit">
</form>

<!-- using modifier -->
<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

</template>

<style scoped></style>