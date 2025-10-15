<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Expenses Over Time',
            backgroundColor: '#3b82f6',
            borderColor: '#3b82f6',
            data: [400, 300, 500, 200, 600, 700, 400],
            fill: false,
            tension: 0.1
        }
    ]
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
</script>

<template>
    <div class = 'w-11/12 ml-10 mt-10 mb-10'>
        <Line :data="chartData" :options="chartOptions"/>
    </div>
</template>