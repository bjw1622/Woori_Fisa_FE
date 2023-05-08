<template>
    <form>
        <label for="password">비밀번호</label>
        <input placeholder="비밀번호를 입력하세요" id="password"/>
        <p class="weak" >Weak Password</p>
        <p class="fairly-strong" >Fairly Strong Password</p>
        <p class="strong" >Strong Password</p>
    </form>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>
label {
    font-size: 1.25rem;
    display: block;
    margin-bottom: 0.5rem;
}

input {
    margin-bottom: 20px;
    padding: 1rem;
    height: 2rem;
    font-size: 1.25rem;
    border: 2px dashed gray;
    outline: none;
}

p {
    font-size: 1.5rem;
}

.weak {
    color: red;
}

.fairly-strong {
    color: coral;
}

.strong {
    color: rgb(14, 218, 17);
}
</style>
