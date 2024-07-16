<template>
  <h1>子組件</h1>
  <h2>Vue is great!</h2>
  <h2>{{ props.message || '沒使用 props' }}</h2>
</template>

<script setup>
const props = defineProps({
  message: String
});

const emit = defineEmits(['response']);
emit('response', 'Hello Father');
</script>

<style scoped></style>
