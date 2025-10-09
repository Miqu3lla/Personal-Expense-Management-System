<script setup>
import {Icon} from '@iconify/vue'

</script>

<template>
    <div class = 'border-r-2 border-gray-200 h-screen w-90 '>
        <div class = 'pt-10 ml-8 '>
            <h1 class = 'text-2xl mb-3 text-cyan-600 font-semibold '>Expense Manager</h1>
            <p class = 'font-light'> Manage your finances</p>
        </div>
        <div class = 'mt-10 ml-3'>
            <ul class = 'flex flex-col text-lg gap-y-3 font-medium'>
                   <router-link :to ="{name: 'Dashboard' }" class = 'flex hover:text-black cursor-pointer focus:bg-cyan-600 focus:text-white rounded-lg p-2 focus:w-70' >
                        <Icon icon="solar:widget-4-linear" height = "25"/>
                        <span>Dashboard</span>
                         </router-link>
                <router-link :to ="{name: 'Add'}" class = 'flex hover:text-black cursor-pointer focus:bg-cyan-600 focus:text-white rounded-lg p-2 focus:w-70'>
                    <span>Add Expense</span>
                </router-link>
                <router-link :to = "{name: 'Expenses'}"class = 'flex hover:text-black cursor-pointer focus:bg-cyan-600 focus:text-white rounded-lg p-2 focus:w-70'>
                    <span>Expenses</span></router-link>
                <li class = 'hover:text-cyan-600 cursor-pointer'>Reports</li>
                <li class = 'hover:text-cyan-600 cursor-pointer'>Settings</li>
            </ul>
        </div>
    </div>
</template>