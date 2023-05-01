import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/PageHome.vue'),
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: () => import('../components/PageThreadShow.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
