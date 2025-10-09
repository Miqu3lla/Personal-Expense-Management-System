<script setup>
import {Icon} from '@iconify/vue'
import {ref,reactive} from 'vue'
let id = 0;
const Expenses = reactive([
    {id: id++, name: 'Groceries', amount: 50, date: '2023-10-01', category: 'Food'},

])
</script>

<template>
    <div>
        <div class = 'ml-10'>
            <h1 class = 'text-3xl font-semibold mb-2'>All Expenses</h1>
            <p>View and manage all your recorded expenses</p>
        </div>
        <div>
            <table class = 'w-11/12 mt-10 '>
                <thead>
                    <tr class = 'text-left'>
                        <th class = 'p-2 pl-10'>Date</th>
                        <th class = 'p-2 pl-10'>Expense</th>
                        <th class = 'p-2 pl-10'>Category</th>
                        <th class = 'p-2 pl-10'>Amount</th>
                        <th class = 'p-2 pl-10'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="expense in Expenses" :key="expense.id" class = 'text-center hover:bg-gray-100'>
                        <td class = ' p-2 pr-45'>{{ expense.date }}</td>
                        <td class = ' p-2 pr-45'>{{ expense.name }}</td>
                        <td class = ' p-2 pr-13'>{{ expense.category }}</td>
                        <td class = ' p-2 pr-34'>${{ expense.amount }}</td>
                        <td class = ' p-2 pr-34'>
                            <button class = 'text-red-600 hover:text-red-800 font-bold'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
                
</template>