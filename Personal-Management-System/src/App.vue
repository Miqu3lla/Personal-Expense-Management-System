<script setup>
import Chatbot from './Views/ai-chat-bot/chatbot.vue';
import Nav from './Views/Navigations/Nav.vue';
import Sidebar from './Views/Navigations/Sidebar.vue';

</script>

<template>
  <Nav/>
  <div class = 'flex'>
  <Sidebar/>
  <div class = 'ml-5n mt-10 w-full'>
  <router-view/>

  <Chatbot/>
  </div>
  </div>
  
   
</template>
