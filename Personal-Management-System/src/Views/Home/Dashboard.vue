<script setup>
import Card from '@/Components/Card.vue';
import { useExpenseStore } from '@/stores/expenses';
const expenseStore = useExpenseStore();
</script>

<template>
    <div>
    <div class = 'ml-10 mb-10m'>
        <H1 class = 'text-3xl font-semibold'>Expense Dashboard!</H1>
        <p class = 'text-cyan-600'>Welcome to your Personal Dashboard!</p>
        
    </div>
        
</div>
</template>