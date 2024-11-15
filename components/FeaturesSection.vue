<template>
  <section class="w-[1442px] h-[739px] bg-[#F9FAFB] pt-[96px]  -ml-[2px]">
    <div class="w-[1280px] h-[547px] mx-auto flex flex-col gap-4">
      <!-- CTA Card -->
      <div class="w-full h-[121px] flex flex-col gap-1">
        <h2 class="font-['Inter'] text-[36px] font-extrabold leading-[45px] tracking-[-0.01em] text-[#233876]">
          Ce qu'on fait pour vous
        </h2>
        <p class="font-['Inter'] text-xl font-normal leading-[30px] text-[#6D7280]">
          Pendant que vous vous concentrez sur ce que vous aimez faire, nous veillons à ce que votre expertise soit mise en avant et que votre notoriété attire l'attention qu'elle mérite.
        </p>
      </div>

      <!-- Features Row -->
      <div class="w-full h-[362px] flex gap-2">
        <!-- Column 1 -->
        <div class="w-[392px] h-[314px] flex flex-col gap-[20px]">
          <img src="~/assets/images/shape-9.svg" alt="Reputation Icon" class="w-16 h-16" />
          <div class="flex flex-col gap-[20px]">
            <h3 class="font-['Inter'] text-xl font-bold leading-[30px] text-[#111928]">
              Gestion de votre réputation
            </h3>
            <ul class="w-full h-[184px] flex flex-col gap-4">
              <li v-for="(item, index) in reputationItems" :key="index" class="flex items-start gap-3">
                <img src="~/assets/images/shape-10.svg" alt="Check" class="w-4 h-4 mt-1" />
                <span class="font-['Inter'] text-base font-medium leading-6 text-[#6B7280]">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="w-[392px] h-[314px] flex flex-col gap-[20px]">
          <img src="~/assets/images/shape-11.svg" alt="Profitability Icon" class="w-16 h-16" />
          <div class="flex flex-col gap-[20px]">
            <h3 class="font-['Inter'] text-xl font-bold leading-[30px] text-[#111928]">
              Boost de la profitabilité
            </h3>
            <ul class="w-full h-[184px] flex flex-col gap-4">
              <li v-for="(item, index) in profitabilityItems" :key="index" class="flex items-start gap-3">
                <img src="~/assets/images/shape-10.svg" alt="Check" class="w-4 h-4 mt-1" />
                <span class="font-['Inter'] text-base font-medium leading-6 text-[#6B7280]">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Column 3 -->
        <div class="w-[392px] h-[314px] flex flex-col gap-[20px]">
          <img src="~/assets/images/shape-12.svg" alt="Marketing Icon" class="w-16 h-16" />
          <div class="flex flex-col gap-[20px]">
            <h3 class="font-['Inter'] text-xl font-bold leading-[30px] text-[#111928]">
              Marketing et notoriété
            </h3>
            <ul class="w-full h-[184px] flex flex-col gap-4">
              <li v-for="(item, index) in marketingItems" :key="index" class="flex items-start gap-3">
                <img src="~/assets/images/shape-10.svg" alt="Check" class="w-4 h-4 mt-1" />
                <span class="font-['Inter'] text-base font-medium leading-6 text-[#6B7280]">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reputationItems = [
  'Vérification de tout les avis',
  'Elimination des faux avis',
  'Collecte des avis positifs des réseaux sociaux',
  'Collecte des avis positifs de google',
  'Centralisation des avis'
]

const profitabilityItems = [
  'Référencement parmi les electriciens de confiance',
  'Accès à une clientèle qualifiée',
  'Crédibilité et présence en ligne',
  'Affichage de vos coordonnées à plus de 15 000 visiteurs par jour',
  '1 visiteur = 1 client potentiel'
]

const marketingItems = [
  'Page web vitrine gratuite',
  'Référencement sur google',
  'Des articles rédigés par nos experts pour valoriser votre entreprise',
  'Réponses personnalisées aux questions de la communauté, en adéquation avec les valeurs de votre entreprise'
]
</script>