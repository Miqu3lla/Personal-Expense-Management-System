<script setup>
import {Icon} from '@iconify/vue'
import { useExpenseStore } from '@/stores/expenses'

const expenseStore = useExpenseStore()

function totalValues() {
    return expenseStore.totalExpense
}
</script>
<template>
  <div>
    <nav class="flex items-center bg-cyan-600 text-white px-3 sm:px-6 py-3 sm:py-4">
      <!-- Logo Icon -->
      <div class="flex-shrink-0 mr-3">
        <Icon icon="solar:wallet-money-broken" width="40" height="30" class="sm:w-12 sm:h-8"/>
      </div>

      <!-- Brand Info -->
      <div class="flex-1 min-w-0">
        <h1 class="text-base sm:text-lg font-bold truncate">Expense Tracker</h1>
        <p class="text-xs sm:text-sm text-cyan-100 hidden sm:block">Personal Finance Manager</p>
      </div>

      <!-- Total Display -->
      <div class="flex-shrink-0 bg-cyan-700 text-white px-3 py-2 rounded-lg font-bold text-xs sm:text-sm">
        <span class="hidden sm:inline">Total: </span>₱{{ totalValues()}}
      </div>
    </nav>
  </div>
</template>