import { defineStore } from 'pinia';

// Initialize ID counter for generating unique expense IDs
let id = 0;

// Define the expenses store - this is the central place for all expense data
export const useExpenseStore = defineStore('expenses',{
    state: () => {
        return {
            // Array that holds all expense objects
            // Each expense has: id, name, amount, date, category
            expenses : []
        }
    },
    
    actions: {
        // Action to add a new expense to the store
        // @param expense - object containing name, amount, date, category
        addExpense(expense) {
            // Create new expense object with auto-generated ID
            this.expenses.push({
                id: id++, // Auto-increment ID for uniqueness
                name: expense.name,
                amount: expense.amount,
                date: expense.date,
                category: expense.category
            });
        },
        // Action to remove an expense by ID
        // @param id - the unique ID of the expense to remove
        removeExpense() {
            // Filter out the expense with matching ID
            this.expenses = this.expenses.filter(expense => expense.id !== expense.id);
        }
    },

    getters: {
        totalExpense: (state) => {
            return state.expenses.reduce((total, expense) => total + expense.amount, 0);
        }
    }
});