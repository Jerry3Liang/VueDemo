<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TestEight from './views/TestEight.vue';
import TestNine from './views/TestNine.vue';
import { ref } from 'vue';

const greeting = ref('father: hello world');
const greeting1 = ref('no child message');
const greeting2 = ref('父元件內容');
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <TestEight :message="greeting" @response="(msg) => (greeting1 = msg)"></TestEight>

    <h2>{{ message || '沒使用 props' }}</h2>

    <p>{{ greeting1 }}</p>

    <TestNine>{{ greeting2 }}</TestNine>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/TestOne">TestOne</RouterLink>
      <RouterLink to="/TestTwo">TestTwo</RouterLink>
      <RouterLink to="/TestThree">TestThree</RouterLink>
      <RouterLink to="/TestFour">TestFour</RouterLink>
      <RouterLink to="/TestFive">TestFive</RouterLink>
      <RouterLink to="/TestSix">TestSix</RouterLink>
      <RouterLink to="/TestSeven">TestSeven</RouterLink>
      <RouterLink to="/TestEight">TestEight</RouterLink>
      <RouterLink to="/TestNine">TestNine</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
