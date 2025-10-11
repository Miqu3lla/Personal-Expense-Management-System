<script setup>
import { useExpenseStore } from '@/stores/expenses';
//call the store
const expenseStore = useExpenseStore()
//call the function from the store
function deleteExpense(id) {
    expenseStore.removeExpense(id)
}

</script>

<template>
    <div>
            <table class = 'w-11/12 mt-10 '>
                <thead>
                    <tr class = 'text-left'>
                        <th class = 'p-2 pl-35'>Date</th>
                        <th class = 'p-2 pl-35'>Expense</th>
                        <th class = 'p-2 pl-35'>Category</th>
                        <th class = 'p-2 pl-35'>Amount</th>
                        <th class = 'p-2 pl-35'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="expense in expenseStore.expenses" :key="expense.id" class = 'text-center hover:bg-gray-100'>
                        <td class = ' p-2 pl-25'>{{ expense.date }}</td>
                        <td class = ' p-2 pl-14'>{{ expense.name }}</td>
                        <td class="p-2 pl-23">
                            <span 
                                :class="
                                    expense.category === 'Food' ? 'bg-red-100 text-red-700 border border-red-200' : 
                                    expense.category === 'Transportation' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 
                                    expense.category === 'Utilities' ? 'bg-green-100 text-green-700 border border-green-200' : 
                                    expense.category === 'Entertainment' ? 'bg-purple-100 text-purple-700 border border-purple-200' : 
                                    expense.category === 'Healthcare' ? 'bg-orange-100 text-orange-700 border border-orange-200' : 
                                    'bg-gray-100 text-gray-700 border border-gray-200'" 
                                    class="px-3 py-1 rounded-full text-sm font-medium inline-block">
                                {{ expense.category }}
                            </span>
                        </td>
                        <td class = ' p-2 pl-23'>₱{{ expense.amount }}</td>
                        <td class = ' p-2 pl-35 '>
                            <button @click = "deleteExpense(expense.id)"class = 'text-red-600 hover:text-red-800 font-bold'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>