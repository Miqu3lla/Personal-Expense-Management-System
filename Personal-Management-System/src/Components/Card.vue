<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';
const props = defineProps({
   name: String,
   type: Number,
   icon: String
});

</script>

<template>
    <div>
        <div> 
            <div class = 'bg-gray-100 p-5 rounded-lg w-90 h-30 shadow-md hover:shadow-lg transition-shadow duration-300'>
                <div class = 'flex justify-between  gap-3'>
                    <h1 class = ' font-bold text-lg'>{{ props.name }}</h1>
                    <Icon :icon="props.icon" height="25" class = 'text-cyan-600 ml-3 '/>

                </div>
                <p class = 'text-cyan-900 font-bold text-2xl mt-2'>₱{{ props.type}}</p>
            </div>
        </div>
    </div>


</template>