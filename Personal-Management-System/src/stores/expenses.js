import { defineStore } from 'pinia';
import { ref } from 'vue';
let id = 1;
export const useExpenseStore = defineStore('expenses',{
    state: () => {
    return {
        expenses : []
    }
},
    actions: {
        addExpense(expense) {
            // What should happen here?  
            this.expenses.push({
                id: id++, // simple unique id
                name: expense.name,
                amount: expense.amount,
                date: expense.date,
                category: expense.category
            });
        }
    }
});