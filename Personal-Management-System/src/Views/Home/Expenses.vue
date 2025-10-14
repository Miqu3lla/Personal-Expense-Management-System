<script setup>

import ExpenseTable from '@/Components/ExpenseTable.vue'



</script>

<template>
    <div>
        <div class = 'ml-10'>
            <h1 class = 'text-3xl font-semibold mb-2'>All Expenses</h1>
            <p>View and manage all your recorded expenses</p>
        </div>
    </div>
    <div>
        <ExpenseTable/>
    </div>
                        
</template>