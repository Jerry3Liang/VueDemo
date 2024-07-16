<template>
  <h1>生命週期</h1>
  <p ref="pElementRef">Hello</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const pElementRef = ref(null);

onMounted(() => {
  pElementRef.value.textContent = 'mounted!';
});
</script>

<style scoped></style>
