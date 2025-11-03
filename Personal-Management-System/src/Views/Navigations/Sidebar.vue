<script setup>
import {Icon} from '@iconify/vue'

</script>

<template>
    <div class = 'border-r-2 border-gray-200 h-screen w-90'>
        <div class = 'pt-10 ml-8 '>
            <h1 class = 'text-2xl mb-3 text-cyan-600 font-semibold '>Expense Manager</h1>
            <p class = 'font-light'> Manage your finances</p>
        </div>
        <div class = 'mt-10 ml-3'>
            <ul class = 'flex flex-col text-lg gap-y-3 font-medium'>
                   <router-link :to ="{name: 'Dashboard' }" active-class= "text-white rounded-lg p-2 w-70 bg-cyan-600" class = 'flex p-2 cursor-pointer  ' >
                        <Icon icon="solar:widget-4-linear" height = "25" class = "mr-2"/>
                        <span>Dashboard</span>
                         </router-link>
                <router-link :to ="{name: 'Add'}" active-class= "text-white rounded-lg p-2 w-70 bg-cyan-600 " class = 'flex cursor-pointer p-2'>
                    <Icon icon = "solar:add-square-outline" height= "25" class = "mr-2"/>
                    <span>Add Expense</span>
                </router-link>
                <router-link :to = "{name: 'Expenses'}"active-class= "text-white rounded-lg p-2 w-70 bg-cyan-600" class = 'flex cursor-pointer p-2'>
                    <Icon icon = "solar:wallet-money-broken" height = "25" class = "mr-2"/>
                    <span>Expenses</span></router-link>
            </ul>
        </div>
    </div>
</template>