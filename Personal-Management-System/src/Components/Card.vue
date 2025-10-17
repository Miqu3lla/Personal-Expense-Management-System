<script setup>
const props = defineProps({
   name: String,
   type: Number
});

</script>

<template>
    <div>
        <div> 
            <div class = 'bg-gray-100 p-5 rounded-lg w-70 h-30  text-center'>
                <h1 class = ' font-bold text-lg'>{{ props.name }}</h1>
                <p class = 'text-cyan-900 font-bold text-2xl mt-2'>${{ props.type}}</p>
            </div>
        </div>
    </div>


</template>