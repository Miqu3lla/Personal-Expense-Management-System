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
    <div class = 'grid grid-cols-4 mx-10 mt-10'>
        <Card
      name= "Total Expenses"
      :type = "total"/>
     <Card
      name= "Total Expenses Today"
      :type = "daily"/>
      <Card
      name= "Total Expenses This Month"
      :type = "monthly"/>
      
    </div>
    <div class = 'mt-30'>
        <Chart/>
    </div>
        
</div>
</template>