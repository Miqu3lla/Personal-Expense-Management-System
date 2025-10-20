<script setup>
import Chatbot from './Views/ai-chat-bot/chatbot.vue';
import Nav from './Views/Navigations/Nav.vue';
import Sidebar from './Views/Navigations/Sidebar.vue';

</script>

<template>
  <div class="min-h-screen overflow-x-hidden">
    <Nav/>
    <div class="flex">
      <Sidebar/>
      <div class="  ml-5 mt-10 pr-5">
        <router-view/>
        <Chatbot/>
      </div>
    </div>
  </div>
</template>
