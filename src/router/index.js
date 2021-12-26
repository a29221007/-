import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('@/views/layout.vue'),
  children: [
    {
      path: '/',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/category/:id',
      component: () => import('@/views/category/index.vue')
    },
    {
      path: '/category/sub/:id',
      component: () => import('@/views/category/sub.vue')
    }
  ]
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
