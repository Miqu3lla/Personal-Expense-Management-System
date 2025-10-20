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
    <div>
        <nav class = 'flex bg-cyan-600 text-white '>
            <div class = "mr-3 ml-3 mt-4">
                <Icon icon = solar:wallet-money-broken width="50" height="30"/>
            </div>
            <div class = 'text-white mt-2 mb-2'>
                <h1 class = 'text-lg font-bold'>Espense Tracker</h1>
                <p class = 'text-sm'> Personal Finance Manager</p>
            </div>
            <div class = "flex justify-end ml-auto  mt-3 bg-cyan-700 text-white p-2 rounded-lg h-9 font-bold text-sm md:mr-10 lg:mr-110" >
                <h1> Total: ₱{{ totalValues()}}</h1>
            </div>
        </nav>
    </div>
  </div>
</template>