<template>
    <div class="min-h-screen">
      <!-- Left Sidebar -->
      <DashboardSidebar :activeRoute="'compte'" />
      
      <!-- Vertical Line between Sidebar and Content -->
      <div class="fixed left-[249px] top-0 w-[1px] h-[1062px] bg-[#E6EFF5]"></div>
      
      <div class="ml-[250px]">
        <!-- Top Header -->
        <DashboardHeader />
        
        <!-- Horizontal Line below Header -->
        <div class="w-[1190px] h-[1px] bg-[#E6EFF5]"></div>
        
        <!-- Main Content Area -->
        <div class="bg-[#F5F7FA] min-h-[2102px]">
          <div class="container mx-auto pt-[32px] px-[35px]">
            <div class="grid grid-cols-12 gap-[32px]">
              <!-- Column 1 -->
              <div class="col-span-5 space-y-[32px]">
                <!-- Company Profile Widget -->
                <div class="bg-white rounded-lg shadow-[0px_1px_2px_0px_#00000014] p-8">
                  <div class="flex gap-4">
                    <div class="w-[112px] h-[112px] flex items-center justify-center">
                      <img 
                      :src="logoUrl"
                      :alt="userData?.logo ? 'User Logo' : 'Default Logo'"
                      class="w-[112px] h-[112px] object-cover"
                    />
                    </div>
                    <div class="flex-1">
                      <div class="space-y-1">
                        <h1 class="text-[24px] font-bold leading-9 text-[#111928] tracking-[-0.01em]">
                          {{ entrepriseData?.nom || 'Entreprise X' }}
                        </h1>
                        <p class="text-base text-[#6B7280]">Étincelle de confiance</p>
                      </div>
                      <input
                        type="file"
                        ref="fileInput"
                        @change="handleFileUpload"
                        accept="image/*"
                        class="hidden"
                      />
                      <button 
                        @click="$refs.fileInput.click()"
                        class="mt-4 h-[32px] px-4 bg-[#233876] text-white rounded-lg text-sm font-medium hover:bg-opacity-90 flex items-center gap-2"
                      >
                        <UploadIcon class="w-4 h-4" />
                        Ajoutez un logo
                      </button>
                    </div>
                  </div>
                </div>
  
                <!-- Preferences Widget -->
                <div class="bg-white rounded-lg shadow-[0px_1px_2px_0px_#00000014] p-8">
                  <h2 class="text-xl font-bold text-[#111928] mb-4">Préférences</h2>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <span class="text-base text-[#232323]">Recevoir des notifications</span>
                      <Switch v-model="preferences.notifications" />
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-base text-[#232323]">Réponses automatiques aux questions de la communauté</span>
                      <Switch v-model="preferences.autoResponses" />
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-base text-[#232323]">Publication d'articles de blog automatique</span>
                      <Switch v-model="preferences.autoBlog" />
                    </div>
                  </div>
                </div>
  
                <!-- Company Description Widget -->
                <div class="bg-white rounded-lg shadow-[0px_1px_2px_0px_#00000014]">
                  <div class="p-8">
                    <div class="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
                      <h2 class="text-xl font-bold text-[#111928]">Description de l'entreprise</h2>
                      <button class="p-[2.7px]">
                        <PencilIcon class="w-[18px] h-[18px] text-gray-500" />
                      </button>
                    </div>
                    <div class="py-4">
                      <textarea
                        v-model="companyDescription"
                        rows="6"
                        class="w-full p-4 text-sm text-[#6B7280] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#233876] focus:border-transparent resize-none"
                      ></textarea>
                      <button class="mt-4 w-full h-12 bg-[#233876] text-white rounded-lg text-base font-medium hover:bg-opacity-90">
                        Enregistrer les changements
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Column 2 -->
              <div class="col-span-7 space-y-[32px]">
                <PersonalInfoForm />
                <CompanyDetailsForm />
                <PasswordChangeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted,computed } from 'vue'
  import defaultLogo from '~/assets/images/svelte.png'

  import { PencilIcon, UploadIcon } from 'lucide-vue-next'
  import DashboardSidebar from '~/components/dashboard/DashboardSidebar.vue'
  import DashboardHeader from '~/components/dashboard/DashboardHeader.vue'
  import Switch from '~/components/ui/Switch.vue'
  import PersonalInfoForm from '~/components/dashboard/PersonalInfoForm.vue'
  import CompanyDetailsForm from '~/components/dashboard/CompanyDetailsForm.vue'
  import PasswordChangeForm from '~/components/dashboard/PasswordChangeForm.vue'
  
  const userData = ref(null)
  const entrepriseData = ref(null)
  const companyDescription = ref(`Comptoir des Pros est un site spécialisé dans la vente de matériel Pro pour tous : électroportatif, outillage à main, nettoyage, équipement de la maison (électricité, plomberie, chauffage,...) et jardinage. Nous vous proposons les marques reconnues par les Professionnels comme Festool, Bosch, Karcher, Thermor, Atlantic, Loctite, Facom, Virax...`)
  const fileInput = ref(null)

  const logoUrl = computed(() => {
  if (userData.value && userData.value.logo) {
    return `http://127.0.0.1:8000/storage/${userData.value.logo}`
  }
  return defaultLogo
})
const handleFileUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  const formData = new FormData()
  formData.append('logo', file)

  try {
    const response = await fetch('http://127.0.0.1:8000/api/user/logo', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: formData
    })

    if (!response.ok) throw new Error('Failed to upload logo')

    const data = await response.json()
    userData.value = { ...userData.value, logo: data.logo }
  } catch (error) {
    console.error('Error uploading logo:', error)
  }
}
  const preferences = ref({
    notifications: true,
    autoResponses: false,
    autoBlog: true
  })
  const fetchUserData = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    })
    if (!response.ok) throw new Error('Failed to fetch user data')
    const data = await response.json()
    userData.value = data.user
    entrepriseData.value = data.entreprise
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

onMounted(fetchUserData)

const updateUserPreferences = async (preferences) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify(preferences)
    })
    if (!response.ok) throw new Error('Failed to update preferences')
  } catch (error) {
    console.error('Error updating preferences:', error)
  }
}

const updateCompanyDescription = async (description) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/entreprise', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify({ description })
    })
    if (!response.ok) throw new Error('Failed to update company description')
  } catch (error) {
    console.error('Error updating company description:', error)
  }
}

  </script>