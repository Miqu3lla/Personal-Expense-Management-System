<script setup>
import Card from '@/Components/Card.vue';
import Chart from '@/Components/chart.vue';
import { useExpenseStore } from '@/stores/expenses';
const expenseStore = useExpenseStore();
const daily = expenseStore.dailyExpense;
const monthly = expenseStore.monthlyExpense;
const total = expenseStore.totalExpense;
</script>

<template>
  <div class="w-full">
    <div class="mb-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left md:text-center lg:text-left xl:text-left">
      <h1 class="text-4xl font-semibold mb-3">Expense Dashboard</h1>
      <p class="text-cyan-600 font-serif text-xl">Welcome to your Personal Dashboard!</p>
    </div>
    
    <div class="grid grid-cols-1 gap-4 px-4 sm:px-6 lg:px-8 mt-10 sm:grid-cols-1 md:grid-cols-1 gap-5 lg:grid-cols-2 gap-5 xl:grid-cols-3">
      <Card
        name="Total Expenses:"
        icon="mdi:currency-php"
        :type="total"
      />
      <Card
        name="Expenses Today:"
        icon="mdi:calendar-today"
        :type="daily"
      />
      <Card
        name="Expenses This Month:"
        icon="solar:calendar-linear"
        :type="monthly"
      />
    </div>
    
    <div class="mt-10">
      <Chart/>
    </div>
  </div>
</template>