import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/posts/:id',
      component: () => import('../views/PostPage.vue')
    },
    {
      path: '/:slug',
      component: () => import('../views/DynamicPage.vue')
    },
    {
      path: '/not-found',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
