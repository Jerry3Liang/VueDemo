import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestOne from '../views/TestOne.vue';
import TestTwo from '../views/TestTwo.vue';
import TestThree from '../views/TestThree.vue';
import TestFour from '../views/TestFour.vue';
import TestFive from '../views/TestFive.vue';
import TestSix from '../views/TestSix.vue';
import TestSeven from '../views/TestSeven.vue';
import TestEight from '../views/TestEight.vue';

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
    },
    {
      path: '/TestThree',
      name: 'testThree',
      component: TestThree
    },
    {
      path: '/TestFour',
      name: 'testFour',
      component: TestFour
    },
    {
      path: '/TestFive',
      name: 'testFive',
      component: TestFive
    },
    {
      path: '/TestSix',
      name: 'testSix',
      component: TestSix
    },
    {
      path: '/TestSeven',
      name: 'testSeven',
      component: TestSeven
    },
    {
      path: '/TestEight',
      name: 'testEight',
      component: TestEight
    }
  ]
});

export default router;
