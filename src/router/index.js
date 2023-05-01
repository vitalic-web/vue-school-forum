import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/data.json';

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
    beforeEnter(to, from, next) {
      const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id);
      if (threadExists) {
        return next();
      }
      next({
        name: 'NotFound',
        params: { pathMatch: to.path.substring(1).split('/') }, // to stay on the wrong route
        query: to.query, // to save wrong query in the route
        hash: to.hash, // to save wrong hash in the route
      });
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../components/PageNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
