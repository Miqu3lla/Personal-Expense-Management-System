<script setup>
import {Icon} from '@iconify/vue'
</script>

<template>
    <div class = 'border-r-2 border-gray-200 h-screen w-90 '>
        <div class = 'pt-10 ml-8 '>
            <h1 class = 'text-2xl mb-3 text-cyan-600 font-semibold '>Expense Manager</h1>
            <p class = 'font-light'> Manage your finances</p>
        </div>
        <div class = 'mt-10 ml-8'>
            <ul class = 'flex flex-col text-lg gap-y-6 font-medium'>
                    <li class = 'flex hover:text-cyan-600 cursor-pointer'>
                        <Icon icon="solar:widget-4-linear" height = "25"/>
                        <span>Dashboard</span>
                    </li>
                <router-link to =''><li class = 'hover:text-cyan-600 cursor-pointer'>Transactions</li></router-link>
                <li class = 'hover:text-cyan-600 cursor-pointer'>Categories</li>
                <li class = 'hover:text-cyan-600 cursor-pointer'>Reports</li>
                <li class = 'hover:text-cyan-600 cursor-pointer'>Settings</li>
            </ul>
        </div>
    </div>
</template>