<template>
  <h1>表單綁定</h1>
  <input v-model="text" placeholder="Type here" />
  <p>{{ text }}</p>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('');
</script>

<style scoped></style>
