<script setup>
import {Icon} from '@iconify/vue'
import {ref,reactive} from 'vue'
import { useExpenseStore } from '@/stores/expenses'

// TODO: Add comment - Why do we need the store here?
// to access the expenses array in the store
const expenseStore = useExpenseStore()


// TODO: Add comment - What does this function do? What parameter does it need?
//delets an expense by id
function deleteExpense(id) {
    // TODO: Add comment - What happens here?
    //gets the parameter id and calls the removeExpense method from the store to delete the expense with that id
    expenseStore.removeExpense(id)
}
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
                    <!-- TODO: Add comment above v-for - What is this loop doing? -->
                    <tr v-for="expense in expenseStore.expenses" :key="expense.id" class = 'text-center hover:bg-gray-100'>
                        <!-- TODO: Add comments - What data is being displayed? -->
                        <td class = ' p-2 pr-45'>{{ expense.date }}</td>
                        <td class = ' p-2 pr-45'>{{ expense.name }}</td>
                        <td class = ' p-2 pr-13'>{{ expense.category }}</td>
                        <td class = ' p-2 pr-34'>${{ expense.amount }}</td>
                        <td class = ' p-2 pr-10 flex gap-x-3 justify-center'>
                            <button @click = "deleteExpense(expense.id)"class = 'text-red-600 hover:text-red-800 font-bold'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
                
</template>