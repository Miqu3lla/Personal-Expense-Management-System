<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    amount: Number,

})
</script>

<template>
    <div>
        <div> 
            <div class = 'bg-cyan-100 p-5 rounded-lg w-40 h-20 text-center'>
                <h1 class = 'text-cyan-700 font-bold text-lg'>Total Expenses</h1>
                <p class = 'text-cyan-900 font-bold text-2xl mt-2'>${{ props.amount }}</p>
            </div>
        </div>
    </div>


</template>