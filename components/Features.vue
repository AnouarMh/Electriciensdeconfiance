<template>
  <section class="border-y border-[#F3F4F6] bg-white">
    <div class="mx-auto w-[1440px] py-24">
      <div class="mx-auto w-[1280px] space-y-16">
        <div class="space-y-4">
          <h2 class="text-center font-inter text-[36px] font-extrabold leading-[45px] tracking-[-0.01em] text-[#233876]">
            Pourquoi c'est toujours les mauvais avis qui tombent ?
          </h2>
          <p class="mx-auto w-[788.82px] text-center font-inter text-xl font-normal leading-[30px] text-[#6B7280]">
            Les avis ? C'est un peu comme les fusibles : quand tout va bien, personne n'y pense, mais dès que ça saute, tout le monde s'énerve. Bizarrement, personne n'écrit : "L'électricité fonctionne parfaitement" Pourtant, ce serait sympa, non ?
          </p>
        </div>

        <div class="flex gap-8">
          <div class="w-[608px] space-y-5">
            <div class="flex justify-center">
              <img 
                src="~/assets/images/Icon ShapesFe1.svg"
                alt="Exclamation icon"
                class="h-24 w-24"
              />
            </div>
            <div class="space-y-4">
              <h3 class="text-center font-inter text-2xl font-bold leading-9 tracking-[-0.01em] text-[#111928]">
                Parce que "le client est roi" ?
              </h3>
              <p class="text-center font-inter text-lg font-normal leading-[27px] text-[#6B7280]">
                Ce dicton est célèbre, mais parfois, même les rois se trompent. Vous avez fait votre boulot, et malgré tout, une prise mal utilisée ou un fusible sauté, et c'est vous le coupable. Eh bien, non, le client n'a pas toujours raison, et ça fait du bien de le dire.
              </p>
            </div>
          </div>

          <div class="h-[249px] w-px bg-[#E5E7EB]" />

          <div class="w-[608px] space-y-5">
            <div class="flex justify-center">
              <img 
                src="~/assets/images/Icon ShapesFe2.svg"
                alt="Star icon"
                class="h-24 w-24"
              />
            </div>
            <div class="space-y-4">
              <h3 class="text-center font-inter text-2xl font-bold leading-9 tracking-[-0.01em] text-[#111928]">
                Parce qu'on ne demande pas un bon avis ?
              </h3>
              <p class="text-center font-inter text-lg font-normal leading-[27px] text-[#6B7280]">
                Soyons réalistes : combien d'entre vous disent "Laissez un bon avis" après un chantier ? On est des pros, pas des commerciaux. Pourtant, sans demander, on rate l'essentiel : les bons retours. Nous, on vous donne un lien simple à partager pour récolter ce que vous méritez.
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <a 
            href="#" 
            class="inline-flex items-center gap-2 font-inter text-base font-medium text-[#C27803] hover:text-[#9A6700] transition-colors"
          >
            Rejoignez notre réseau d'Électriciens de Confiance
            <ChevronRightIcon class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
</script>

<style>

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>