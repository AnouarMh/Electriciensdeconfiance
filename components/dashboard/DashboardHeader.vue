<template>
    <header class="bg-white h-[100px] flex items-center justify-between px-11">
      <!-- Logo -->
     
  
      <!-- CTA (Return to homepage) -->
      <NuxtLink 
        to="/" 
        class="flex items-center gap-1 text-sm font-medium text-[#233876] hover:underline"
      >
        <img src="~/assets/images/chevron-left.svg" alt="Chevron Left" class="w-5 h-5" />
        Retour à la page d'accueil
      </NuxtLink>
  
      <!-- User Profile and Notification -->
      <div class="flex items-center gap-[35px]">
        <div class="relative">
          <img src="~/assets/images/Notification.png" alt="Notifications" class="w-[50px] h-[50px]" />
        </div>
        <img src="~/assets/images/Mask Group.png" alt="User Profile" class="w-[60px] h-[60px] rounded-full" />
      </div>
    </header>
  </template>
  
  <script setup>
  // No additional script needed for this component
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>