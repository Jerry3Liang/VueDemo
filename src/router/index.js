import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestOne from '../views/TestOne.vue';
import TestTwo from '../views/TestTwo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/TestOne',
      name: 'testOne',
      component: TestOne
    },
    {
      path: '/TestTwo',
      name: 'testTwo',
      component: TestTwo
    }
  ]
});

export default router;
