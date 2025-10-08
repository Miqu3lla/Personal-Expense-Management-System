import Nav from '@/Views/Navigations/Nav.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',
      name: 'nav',
      component: Nav
    }
  ],
})

export default router
