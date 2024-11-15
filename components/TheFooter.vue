<template>
  <footer class="bg-[#F9FAFB] border-t border-[#F3F4F6]">
    <div class="mx-auto w-[1440px]">
      <div class="mx-auto w-[1280px] py-16 space-y-12">
        <div class="space-y-8">
          <h2 class="font-inter text-[36px] font-bold leading-[45px] text-center text-[#111928]">
            Commencez Maintenant
          </h2>
          <div class="flex justify-center">
            <button class="w-[468px] rounded-lg bg-[#C27803] py-[10px] px-5 font-inter text-sm font-medium text-white hover:bg-[#9A6700] transition-colors">
              Demander l'accès au réseau électriciens de confiance
            </button>
          </div>
        </div>

        <div class="flex h-[221px] w-full justify-between">
          <div class="w-[176px] space-y-4">
            <h3 class="font-inter text-sm font-semibold uppercase leading-[21px] text-[#111928]">
              Contact
            </h3>
            <div class="space-y-4">
              <a href="mailto:Contact@electriciensdeconfiance.com" class="block font-inter text-base font-normal leading-6 text-[#6B7280]">
                Contact@electriciensdeconfiance.com
              </a>
            </div>
          </div>

          <div class="w-[176px] space-y-4">
            <h3 class="font-inter text-sm font-semibold uppercase leading-[21px] text-[#111928]">
              Légale
            </h3>
            <div class="space-y-4">
              <NuxtLink 
                v-for="link in legalLinks" 
                :key="link.text"
                :to="link.href"
                class="block font-inter text-base font-normal leading-6 text-[#6B7280] hover:text-[#4B5563] transition-colors"
              >
                {{ link.text }}
              </NuxtLink>
            </div>
          </div>

          <div class="w-[176px] space-y-4">
            <h3 class="font-inter text-sm font-semibold uppercase leading-[21px] text-[#111928]">
              Navigation
            </h3>
            <div class="space-y-4">
              <NuxtLink 
                v-for="link in navigationLinks" 
                :key="link.text"
                :to="link.href"
                class="block font-inter text-base font-normal leading-6 text-[#6B7280] hover:text-[#4B5563] transition-colors"
              >
                {{ link.text }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="h-px w-full bg-[#E5E7EB]"></div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img src="~/assets/images/logo.png" alt="EDC" class="h-[35.42px] w-[32px]" />
            <span class="font-outfit text-2xl font-semibold leading-9 text-[#111928]">
              Electriciensdeconfiance
            </span>
          </div>

          <p class="font-inter text-base font-normal leading-6 text-[#6B7280]">
            © 2022 INOVENCIA, Inc. Tout les droits sont résérvés.
          </p>

          <img src="~/assets/images/frFlag.webp" alt="FR" class="h-[13.31px] w-5" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const legalLinks = [
  { text: 'Mention légale', href: '/mention-legale' },
  { text: 'CGU', href: '/cgu' },
  { text: 'Politique de confidentialité', href: '/confidentialite' },
]

const navigationLinks = [
  { text: 'Annuaire EDC', href: '/annuaire-edc' },
  { text: 'Blog', href: '/blog' },
  { text: 'FAQ', href: '/faq' },
  { text: 'Tarif', href: '/tarif' },
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600&family=Inter:wght@400;500;600;700&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>