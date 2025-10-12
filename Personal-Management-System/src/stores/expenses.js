import { defineStore } from 'pinia';

// Define the expenses store - this is the central place for all expense data
let id = 0;
export const useExpenseStore = defineStore('expenses',{
    state: () => {
            // Array that holds all expense objects
            // Each expense has: id, name, amount, date, category
            const savedExpenses = localStorage.getItem('myExpenses')  // Use the same key as where you save expenses
            const expenseObject = savedExpenses ? JSON.parse(savedExpenses) : []// Parse the JSON string from localStorage

            if (expenseObject.length > 0) {

                 id = Math.max(...expenseObject.map(expense => expense.id)) + 1
            } // Update id to be one more than the highest existing id

            return {

                  expenses: expenseObject  // Initialize with parsed expenses or empty array
            }

            

        
    },
    
    actions: {
        // Action to add a new expense to the store
        // @param expense - object containing name, amount, date, category
        addExpense(expense) {
            // Create new expense object with auto-generated ID
            this.expenses.push({
                id: id++,
                name: expense.name,
                amount: expense.amount,
                date: expense.date,
                category: expense.category
            });
            // Save updated expenses array to localStoragezm
            localStorage.setItem('myExpenses', JSON.stringify(this.expenses));
        },
        // Action to remove an expense by ID
        // @param id - the unique ID of the expense to remove
        removeExpense(id) {
            // Filter out the expense with matching ID
            this.expenses = this.expenses.filter(expense => expense.id !== id);
            // Save updated expenses array to localStorage
            localStorage.setItem('myExpenses', JSON.stringify(this.expenses));
        }
    },

    getters: {
        // Getter to calculate the total amount of all expenses
        totalExpense: (state) => {
            state.expenses.reduce((total, expense) => total + expense.amount, 0);
            localStorage.setItem("myExpenses", JSON.stringify(state.expenses));
        
        },
    }
});