import Dashboard from '@/Views/Home/Dashboard.vue'
import Nav from '@/Views/Navigations/Nav.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
  ],
})

export default router
