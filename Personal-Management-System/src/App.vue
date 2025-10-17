<script setup>
import Nav from './Views/Navigations/Nav.vue';
import Sidebar from './Views/Navigations/Sidebar.vue';

</script>

<template>
  <Nav/>
  <div class = 'flex'>

  <Sidebar/>
  <div class = 'ml-5n mt-10 w-full'>
  <router-view/>
  </div>
  </div>
  
   
</template>
