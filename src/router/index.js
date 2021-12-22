import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('@/views/layout.vue'),
  children: [
    {
      path: '/',
      component: () => import('@/views/home/index.vue')
    }
  ]
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
