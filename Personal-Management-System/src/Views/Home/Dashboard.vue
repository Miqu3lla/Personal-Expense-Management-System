<script setup>
import Card from '@/Components/Card.vue';
import { useExpenseStore } from '@/stores/expenses';
const expenseStore = useExpenseStore();

const total = expenseStore.totalExpense;
const monthly = expenseStore.MonthlyExpense;
</script>

<template>
    <div>
    <div class = 'ml-10 mb-10m'>
        <H1 class = 'text-3xl font-semibold'>Expense Dashboard!</H1>
        <p class = 'text-cyan-600'>Welcome to your Personal Dashboard!</p>
        
    </div>
    <div class = ' grid grid-cols-4 mx-10 mt-10'>
     <Card
      name= "Total Expenses Today"
      :type = "total"/>
      <Card
      name= "Total Expenses This Month"
      :type = "monthly"/>
      
    </div>
        
</div>
</template>