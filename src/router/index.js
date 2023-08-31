import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: "Dashboard",
    component: () => import('@/views/DashboardView.vue'),
  },
  {
    path: '/calendar',
    name: "Calendar",
    component: () => import('@/views/CalendarView.vue'),
  },
  {
    path: '/news',
    name: "News",
    component: () => import('@/views/NewsView.vue'),
  },
  {
    path: '/profile',
    name: "Profile",
    component: () => import('@/views/PlayerProfileView.vue'),
  },
  {
    path: '/settings',
    name: "Settings",
    component: () => import('@/views/SettingsView.vue'),
  },
  {
    path: '/table',
    name: "Table",
    component: () => import('@/views/TableView.vue'),
  },
  {
    path: '/asistant',
    name: "Asistant",
    component: () => import('@/views/VirtualAsistantView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
