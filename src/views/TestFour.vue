<template>
  <h1>v-if 及 v-show</h1>
  <button @click="toggle">Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <button @click="toggle1">Toggle1</button>
  <h1 v-show="awesome1">Vue is awesome!</h1>
  <h1 v-show="!awesome1">Oh no 😢</h1>
</template>

<script setup>
import { ref } from 'vue';

const awesome = ref(true);
const awesome1 = ref(true);

function toggle() {
  awesome.value = !awesome.value;
}

function toggle1() {
  awesome1.value = !awesome1.value;
}
</script>

<style scoped></style>
