<script setup>
import {ref, computed} from 'vue'
import { useExpenseStore } from '@/stores/expenses';
//call the store
const expenseStore = useExpenseStore()
//call the function from the store
function deleteExpense(id) {
    expenseStore.removeExpense(id)
}
const expenses = expenseStore.expenses
const searchQuery = ref('')
const categoryQuery = ref('')
//computed property that filters the expenses based on the search query and category
const searchExpenses = computed(() => {
    //shows entire expenses if no search query or category is selected or if category is All
    if (!searchQuery.value && !categoryQuery.value || categoryQuery.value === 'All') {
        return expenses
    }
    //filters the expense name to match the value inside the search query so that it shows the matched result
    return expenses.filter(expense =>
        expense.name.toLowerCase().includes(searchQuery.value.toLowerCase() 
    )).filter(expense => expense.category.includes(categoryQuery.value) //filters the category to match the value inside the category query so that it shows the matched result
)});

</script>

<template>
    <div>
        <div class = "flex ">
            <input type="text" v-model="searchQuery" placeholder="Search..." class="border-b border-gray-300 rounded-md px-4 py-2 w-250 ml-10 mt-5 focus:outline focus:ring-2 focus:ring-blue-500"/>
            <select v-model="categoryQuery" class = "border-b border-gray-300 rounded-md px-4 py-2 w-50 ml-5 mt-5 focus:outline focus:ring-2 focus:ring-blue-500">
                <option value="" disabled selected>Filter by Category</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Healthcare">Healthcare</option>
                <option value="All">All</option>
            </select>
        </div>
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
                    <tr v-for="expense in searchExpenses" :key="expense.id" class = 'text-center hover:bg-gray-100'>
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