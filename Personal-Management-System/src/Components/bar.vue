<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { useExpenseStore } from '@/stores/expenses';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const expenseStore = useExpenseStore();
const expenseData = expenseStore.expenses;


const chartData = {
    labels: expenseData.map(data => data.date),
    datasets: [
        {
            label: 'Monthly Expenses',
            data: expenseData.map(data => data.amount),
            backgroundColor: 'rgba(8, 145, 178, 0.8)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 0.5,
        }
    ]
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        animateScale: true,
        duration: 3000
    },
    plugins: {
        legend: {
            display: false  // ✅ Hide legend
        },
        title: {
            display: false  // ✅ Hide title
        },
        
    },
    scales: {
        x: { grid: { display: false } },  // Remove vertical lines
        y: { grid: { display: false } }   // Remove horizontal lines
    }
}
</script>

<template>
    <div class = 'w-150 ml-10 mt-10 mb-10' style="height: 500px;">
        <Bar :data="chartData" :options="chartOptions"/>
    </div>
</template>