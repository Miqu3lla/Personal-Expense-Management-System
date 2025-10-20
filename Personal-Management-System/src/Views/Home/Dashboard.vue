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
    <div>
    <div class = 'ml-10 mb-10'>
        <H1 class = 'text-4xl font-semibold mb-3'>Expense Dashboard</H1>
        <p class = 'text-cyan-600 font-serif text-xl'>Welcome to your Personal Dashboard!</p>
    </div>
    <div class = 'grid grid-cols-2 mx-10 mt-10 gap-3 sm:grid-cols-1 lg:grid-cols-3 gap-4  md:grid-cols-1'>
        <Card
      name= "Total Expenses"
      icon = "mdi:currency-php"
      :type = "total"/>
     <Card
      name= " Expenses Today"
      icon= "mdi:calendar-today"
      :type = "daily"/>
      <Card
      name= "Expenses This Month"
      icon = 'solar:calendar-linear'
      :type = "monthly"/>
      
    </div>
    <div class = 'mt-30'>
        <Chart/>
    </div>
        
</div>
</template>