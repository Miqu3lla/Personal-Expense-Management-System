<script setup>
import {Icon} from '@iconify/vue'
import {ref, defineEmits} from 'vue'
import { useExpenseStore } from '@/stores/expenses'

const expenseStore = useExpenseStore()

const emit = defineEmits(['add-expense'])

function submitExpense() {
    emit('add-expense', {
        name: expenseName.value,
        amount: amount.value,
        date: date.value,
        category: category.value
    })
}
</script>

<template>
    <div>
        <div class = 'ml-10'>
            <h1 class = 'text-3xl font-semibold'>Add New Expense</h1>
            <p class = 'text-cyan-600 mt-2'>Here you can add your expenses.</p>
        </div>
        <div class = 'mt-20 ml-100 '>
         <div class = 'flex gap-x-3'>
         <Icon icon = "solar:clipboard-add-bold" height = "25" color="#124170"/>
            <h1>Record New Expense</h1>
            </div>
             <div class =  'text-cyan-700 mt-2'>
                 <p>Fill out the form below to add a new expense to your tracker.</p>
             </div>
             <div>
                <form>
                    <input type = "text" placeholder = "Expense" class = 'border-0 border focus:border-red-300 rounded-lg p-2 w-100 mt-5 mb-5 '/>
                    <div>
                    <div class = 'flex justify-between w-110'>
                    <p class = 'font-semibold text-md'>Amount</p>
                    <p class = 'font-bold text-md'>Date</p>
                    </div>
                    <input type = "number" placeholder = "Amount" class = ' border-0 border focus:border-red-300 rounded-lg p-2 w-100'/>
                    <input type = "date" placeholder = "Date" class = ' border-0 border focus:border-red-300 rounded-lg p-2 w-100'/>
                    </div>
                    <select class = ' border-0 border focus:border-red-300 rounded-lg p-2 w-100 mt-5 '>
                        <option value = "">Select Category</option>
                        <option value = "Food">Food</option>
                        <option value = "Transportation">Transportation</option>
                        <option value = "Utilities">Utilities</option>
                        <option value = "Entertainment">Entertainment</option>
                        <option value = "Healthcare">Healthcare</option>
                        <option value = "Other">Other</option>
                    </select>
                    <div>
                    <button @click = 'expenseStore.addExpense'class = 'bg-cyan-600 text-white rounded-lg p-2 mt-5 hover:bg-cyan-700'>Add Expense</button>
                    </div>
                </form>
             </div>
        </div>
    </div>
</template>