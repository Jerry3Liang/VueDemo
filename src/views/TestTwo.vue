<template>
  <H1 :class="titleClass">Test2:屬性綁定</H1>
</template>
<script setup>
import { ref } from 'vue';

const titleClass = ref('title');
</script>
<style scoped>
.title {
  color: red;
}
</style>
