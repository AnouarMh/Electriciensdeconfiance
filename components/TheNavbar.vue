<template>
  <nav class="bg-[#F9FAFB] py-6">
    <div class="mx-auto w-[1440px]">
      <div class="mx-auto flex h-[41px] w-[1280px] items-center justify-between gap-8">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="~/assets/images/logo.png" alt="EDC" class="h-[35.42px] w-[32px]" />
          <span class="font-outfit text-2xl font-semibold leading-9 text-[#111928]">
            Electriciensdeconfiance
          </span>
        </NuxtLink>

        <!-- Nav Links -->
        <div class="flex h-6 w-[740px] items-center justify-center gap-8 px-10">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.text"
            :to="link.href"
            class="font-inter text-base font-medium leading-6 text-[#111928] hover:text-[#4B5563] transition-colors"
          >
            {{ link.text }}
          </NuxtLink>
        </div>

        <!-- CTA Buttons -->
        <div class="flex h-[41px] items-center gap-4">
          <NuxtLink 
            to="/inscription"
            class="font-inter text-sm font-medium leading-[21px] text-[#111928] hover:text-[#4B5563] transition-colors"
          >
            Inscription
          </NuxtLink>
          <NuxtLink
            to="/connexion"
            class="flex h-[41px] items-center rounded-lg bg-[#C27803] px-5 font-inter text-sm font-medium leading-[21px] text-white hover:bg-[#9A6700] transition-colors"
          >
            Connexion
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { text: 'Accueil', href: '/' },
  { text: 'Annuaire', href: '/annuaire' },
  { text: 'Tarif', href: '/tarif' },
  { text: 'Blog', href: '/blog' },
  { text: 'Forum', href: '/forum' },
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600&family=Inter:wght@400;500;600&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>