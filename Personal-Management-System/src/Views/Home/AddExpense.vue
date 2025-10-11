<script setup>
import {Icon} from '@iconify/vue'
import {ref, reactive} from 'vue'
import { useExpenseStore } from '@/stores/expenses'

// TODO: Add comment - What does this line do?
//it adds the store to this component
const expenseStore = useExpenseStore()

// TODO: Add comments - What do these refs hold?
// in use for the form with the v-model 
const expenseName = ref('')
const expenseAmount = ref(0)
const expenseDate = ref('')
const expenseCategory = ref('')
// uses the addExpense method from the store to add a new expense object with the form data
function submitExpense() {
  //stores the value from the expenseName and etc refs into the store
  expenseStore.addExpense({
    name: expenseName.value,
    amount: expenseAmount.value,
    date: expenseDate.value,
    category: expenseCategory.value,
  })
  
  // TODO: Add comment - Why reset the form?
  //resets the form after submission
  expenseName.value = ''
  expenseAmount.value = 0
  expenseDate.value = ''
  expenseCategory.value = ''
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
                <form @submit.prevent="submitExpense">
                    <input v-model = "expenseName" required type = "text" placeholder = "Expense" class = 'border-0 border focus:border-red-300 rounded-lg p-2 w-100 mt-5 mb-5 '/>
                    <div>
                    <div class = 'flex justify-between w-110'>
                    <p class = 'font-semibold text-md'>Amount</p>
                    <p class = 'font-bold text-md'>Date</p>
                    </div>
                    <input v-model = "expenseAmount" type = "number" placeholder = "Amount" required class = ' border-0 border focus:border-red-300 rounded-lg p-2 w-100'/>
                    <input v-model = "expenseDate" required type = "date" placeholder = "Date" class = ' border-0 border focus:border-red-300 rounded-lg p-2 w-100'/>
                    </div>
                    <select v-model = "expenseCategory" required class = ' border-0 border focus:border-red-300 rounded-lg p-2 w-100 mt-5 '>
                        <option value = "">Select Category</option>
                        <option value = "Food">Food</option>
                        <option value = "Transportation">Transportation</option>
                        <option value = "Utilities">Utilities</option>
                        <option value = "Entertainment">Entertainment</option>
                        <option value = "Healthcare">Healthcare</option>
                        <option value = "Other">Other</option>
                    </select>
                    <div>
                    <input type="submit" value = "Add Expense" class = 'bg-cyan-600 text-white rounded-lg p-2 mt-5 w-200 hover:bg-cyan-700 '/>
                    </div>
                </form>
             </div>
        </div>
    </div>
</template>