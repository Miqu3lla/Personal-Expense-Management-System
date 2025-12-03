<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend,  ArcElement} from 'chart.js'
import { useExpenseStore } from '@/stores/expenses';

ChartJS.register(Title, Tooltip, Legend, ArcElement)
const expenseStore = useExpenseStore();

const expenseData = expenseStore.expenses;



const chartData = {
    labels: expenseData.map(expense => expense.category),
    datasets: [
        {
            label: 'Expenses',
            data: expenseData.map(expense => expense.amount),
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
            ],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 0.5,
            
        }
    ]
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        animateRotate: true,
        duration: 3000
    },
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 14
                }
            }
        }
    }
}
</script>

<template>
    <div class = 'w-67 ml-10 mt-10 mb-3'>
        <Pie :data="chartData" :options="chartOptions"/>
    </div>
</template>