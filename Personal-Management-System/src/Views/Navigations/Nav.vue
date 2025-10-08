<script setup>
import {Icon} from '@iconify/vue'

</script>
<template>
  <div>
    <div>
        <nav class = 'flex bg-cyan-600 text-white '>
            <div class = "mr-3 ml-3 mt-4">
                <Icon icon = solar:wallet-money-broken width="50" height="30"/>
            </div>
            <div class = 'text-white mt-2 mb-2'>
                <h1 class = 'text-lg font-bold'>Espense Tracker</h1>
                <p class = 'text-sm'> Personal Finance Manager</p>
            </div>
            <div class = "flex justify-end ml-auto mr-110 mt-3 bg-cyan-700 text-white p-2 rounded-lg h-9 font-bold text-sm">
                <h1> Total: {{  }}</h1>
            </div>
        </nav>
    </div>
  </div>
</template>