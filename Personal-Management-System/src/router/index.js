import AddExpense from '@/Views/Home/AddExpense.vue'
import Dashboard from '@/Views/Home/Dashboard.vue'
import Expenses from '@/Views/Home/Expenses.vue'


import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {path: '/',
      redirect: '/Dashboard'
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {path: '/Add',
      name: 'Add',
      component: AddExpense
    },
    {
      path: '/Expenses',
      name: 'Expenses',
      component: Expenses
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import ('@/Views/Error/404.vue')
    }
  ],
})

export default router
