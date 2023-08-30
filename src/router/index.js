import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: "Dashboard",
    component: () => import('@/views/DashboardView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
