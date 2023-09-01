import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: "Dashboard",
    component: () => import('@/views/DashboardView.vue'),
    meta: {
      breadCrumb: {
        text: "Dashboard",
      }
    }
  },
  {
    path: '/calendar',
    name: "Calendar",
    component: () => import('@/views/CalendarView.vue'),
    meta: {
      breadCrumb: {
        text: "Kalendarz",
      }
    }
  },
  {
    path: '/news',
    name: "News",
    component: () => import('@/views/NewsView.vue'),
    meta: {
      breadCrumb: {
        text: "Aktualności",
      }
    }
  },
  {
    path: '/profile',
    name: "Profile",
    component: () => import('@/views/PlayerProfileView.vue'),
    meta: {
      breadCrumb: {
        text: "Profil Gracza",
      }
    }
  },
  {
    path: '/settings',
    name: "Settings",
    component: () => import('@/views/SettingsView.vue'),
    meta: {
      breadCrumb: {
        text: "Ustawienia",
      }
    }
  },
  {
    path: '/table',
    name: "Table",
    component: () => import('@/views/TableView.vue'),
    meta: {
      breadCrumb: {
        text: "Tabela",
      }
    }
  },
  {
    path: '/asistant',
    name: "Asistant",
    component: () => import('@/views/VirtualAsistantView.vue'),
    meta: {
      breadCrumb: {
        text: "Virtualny Asystent",
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
