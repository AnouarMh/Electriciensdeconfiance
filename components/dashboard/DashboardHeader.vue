<template>
    <header class="bg-white h-[100px] flex items-center justify-between px-11">
     
  
      <NuxtLink 
        to="/" 
        class="flex items-center gap-1 text-sm font-medium text-[#233876] hover:underline"
      >
        <img src="~/assets/images/chevron-left.svg" alt="Chevron Left" class="w-5 h-5" />
        Retour à la page d'accueil
      </NuxtLink>
  
      <div class="flex items-center gap-[35px]">
        <div class="relative">
          <img src="~/assets/images/Notification.png" alt="Notifications" class="w-[50px] h-[50px]" />
        </div>
        <img :src="userLogoUrl" alt="User Profile" class="w-[60px] h-[60px] rounded-full object-cover" />
      </div>
    </header>
  </template>
  
  <script setup>
  import defaultLogo from '~/assets/images/Mask Group.png'
  import { computed } from 'vue'

const props = defineProps({
  userData: {
    type: Object,
    default: () => ({})
  }
})

const userLogoUrl = computed(() => {
  if (props.userData && props.userData.logo) {
    return `http://127.0.0.1:8000/storage/${props.userData.logo}`
  }
  return defaultLogo
})
</script>
  
  <style scoped>
  </style>