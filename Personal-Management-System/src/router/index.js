import AddExpense from '@/Components/AddExpense.vue'
import Dashboard from '@/Views/Home/Dashboard.vue'
import Expenses from '@/Views/Home/Expenses.vue'

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {path: '/',
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
    }
  ],
})

export default router
