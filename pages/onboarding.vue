<template>
  <div class="min-h-screen flex bg-white">
    <div class="hidden md:flex w-[448px] bg-[#233876]">
      <div class="flex flex-col gap-8 p-12">
        <div class="flex items-center  gap-2">
          <img src="~/assets/images/logo.png" alt="Logo" class="logo" />
            <NuxtLink to="/" class="color-white">
              <span class="white">←</span>
              Retour à la page d'acceuil
            </NuxtLink>
        </div>

        <div class="bg-gray-50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">Votre plan actuel</h2>
          <p class="text-lg font-semibold text-[#C27803] mb-6">30 jours essai gratuit</p>
          <ul class="space-y-4">
            <li v-for="feature in features" :key="feature" class="flex gap-3 text-gray-900">
              <img src="~/assets/images/checke.svg" alt="check" class="check-icon" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex-1 px-8 py-8 max-w-4xl mx-auto">
      <div class="max-w-2xl mx-auto mb-12">
        <div class="flex items-center justify-between relative">
          <div class="absolute top-[14px] left-0 right-0 h-[1px] bg-gray-200 -z-10"></div>
          <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center gap-2">
            <div
              :class="[
                'w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium',
                currentStep > index + 1 ? 'bg-[#233876]' : currentStep === index + 1 ? 'bg-[#233876] text-white' : 'bg-gray-100 text-gray-500'
              ]"
            >
              <img 
                v-if="currentStep > index + 1" 
                src="~/assets/images/badge-check.png" 
                alt="check" 
                class="w-4 h-4"
              />
              <span v-else>{{ index + 1 }}</span>
            </div>
            <span
              :class="[
                'text-sm whitespace-nowrap',
                currentStep >= index + 1 ? 'text-[#233876] font-medium' : 'text-gray-500'
              ]"
            >
              {{ step }}
            </span>
          </div>
        </div>
      </div>


      <div class="max-w-2xl mx-auto">
        <div v-if="currentStep === 1">
          <h1 class="text-2xl font-extrabold text-gray-900 mb-2">Faisons connaissance !</h1>
          <h2 class="text-lg text-gray-500 mb-6">Quelle est la taille de votre entreprise ?</h2>
          
          <div class="space-y-3 mb-6">
            <button
              v-for="option in companySizeOptions"
              :key="option.id"
              @click="selectCompanySize(option.id)"
              :class="[
                'w-full flex items-center justify-between p-4 rounded-lg border text-left transition-colors',
                companySize === option.id ? 'border-[#233876] border-2' : 'border-gray-200 hover:bg-gray-50'
              ]"
            >
              <div class="flex items-center gap-3">
                <UsersIcon v-if="option.id !== 'independent'" class="w-4 h-4" />
                <UserIcon v-else class="w-4 h-4" />
                <span>{{ option.label }}</span>
              </div>
              <ChevronRightIcon class="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <button
            @click="nextStep"
            :disabled="!companySize"
            class="w-full py-2.5 px-4 bg-[#233876] text-white rounded-lg font-medium disabled:opacity-50"
          >
            Suivant → Détails sur l'entreprise
          </button>
        </div>

        <div v-if="currentStep === 2">
          <h1 class="text-2xl font-extrabold text-gray-900 mb-6">Détail de l'entreprise</h1>
          
          <form @submit.prevent="nextStep" class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Nom de l'entreprise</label>
              <div class="relative">
                <input
                  v-model="companyDetails.name"
                  type="text"
                  placeholder="Ex : La Place"
                  class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#233876]/20"
                  required
                />
                <SearchIcon class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Adresse</label>
              <input
                v-model="companyDetails.address"
                type="text"
                placeholder="12, rue flacon, paris"
                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#233876]/20"
                required
              />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Zone d'intervention</label>
              <div class="relative">
                <input
                  v-model="companyDetails.serviceArea"
                  type="text"
                  placeholder="Lyon"
                  class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#233876]/20"
                  required
                />
                <SearchIcon class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Site web</label>
              <input
                v-model="companyDetails.website"
                type="url"
                placeholder="www.edc.com"
                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#233876]/20"
              />
            </div>

            <div class="md:col-span-2">
              <button
                type="submit"
                class="w-full py-2.5 px-4 bg-[#233876] text-white rounded-lg font-medium"
              >
                Suivant → Confirmation
              </button>
            </div>
          </form>
        </div>

        <div v-if="currentStep === 3" class="text-center">
          <h1 class="text-2xl font-extrabold text-gray-900 mb-4">Félicitation !</h1>
          
          <p class="text-gray-500 mb-8">
            Vous faites maintenant partie des électriciens les plus fiables et respectés. 
            Grâce à votre inscription, vous avez franchi une étape importante pour renforcer 
            votre réputation et attirer plus de clients.
          </p>

          <div class="inline-flex p-3 rounded-full bg-[#FEF3C7] mb-8">
            <SparklesIcon class="w-8 h-8 text-[#C27803]" />
          </div>

          <div class="mb-4">
            <h2 class="text-gray-900 font-semibold mb-2">
              Vous avez obtenu votre premier badge de réputation :
            </h2>
            <p class="text-[#C27803] text-lg font-semibold">Étincelle de Confiance.</p>
          </div>

          <p class="text-gray-500 mb-6">
            Ce badge symbolise votre engagement à offrir un service de qualité et inspire 
            confiance à vos futurs clients.
          </p>

          <div class="bg-[#FEF3C7] p-4 rounded-lg text-[#92400E] text-sm mb-6">
            Continuez à accumuler des avis positifs et à enrichir votre profil pour débloquer 
            les prochains niveaux de réputation et asseoir votre notoriété dans la communauté.
          </div>

          <button
            @click="viewProfile"
            class="w-full py-2.5 px-4 bg-[#233876] text-white rounded-lg font-medium"
          >
            Voir mon profil
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import { 
  CheckIcon, 
  ChevronRightIcon, 
  SearchIcon, 
  SparklesIcon,
  UserIcon,
  UsersIcon
} from 'lucide-vue-next'

const currentStep = ref(1)
const companySize = ref('')
const companyDetails = ref({
  name: '',
  address: '',
  serviceArea: '',
  website: ''
})

const steps = [
  "Taille de l'entreprise",
  "Détails de l'entreprise",
  "Confirmation"
]

const features = [
  "Collecte des avis des différentes plateformes et réseaux sociaux",
  "Rédaction d'articles de blog de qualité au nom de votre société",
  "Vérification des avis",
  "Elimination des avis mensongés",
  "Réponse aux questions de la communauté"
]

const companySizeOptions = [
  {
    id: 'independent',
    label: 'Indépendant'
  },
  {
    id: 'small',
    label: 'Moin de 10 salariés'
  },
  {
    id: 'medium',
    label: 'Entre 10 et 20 salariés'
  },
  {
    id: 'large',
    label: 'Plus de 20 salariés'
  }
]

const selectCompanySize = (size) => {
  companySize.value = size
}

const nextStep = async () => {
  console.log(companyDetails.value.name, companySize.value)
  if (currentStep.value === 1) {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/entreprise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify({
          taille: companySize.value
        })
      })

      if (!response.ok) {
        throw new Error('Failed to save company size')
      }

      currentStep.value++
    } catch (error) {
      console.error('Error saving company size:', error)
    }
  } else if (currentStep.value === 2) {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/entreprise', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify({
          nom: companyDetails.value.name,
          adresse: companyDetails.value.address,
          zone_intervention: companyDetails.value.serviceArea,
          site_web: companyDetails.value.website
        })
      })

      if (!response.ok) {
        throw new Error('Failed to save company details')
      }

      currentStep.value++
    } catch (error) {
      console.error('Error saving company details:', error)
    }
  }
}

const viewProfile = () => {
  router.push('/dashboard')

}
</script>
<style>
.color-white {
    color: white;
}

.white {
    color: white;
}
</style>