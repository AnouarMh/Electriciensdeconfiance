<template>
    <div class="bg-white rounded-lg shadow-[0px_1px_2px_0px_#00000014]">
      <div class="px-8 pt-8">
        <div class="w-full h-[46px] pb-4">
          <h2 class="font-['Inter'] text-xl font-bold leading-[30px] text-[#111928]">
            Détails de l'entreprise
          </h2>
        </div>
  
        <form @submit.prevent="saveCompanyDetails" class="w-full">
          <div class="flex gap-4 mb-4">
            <div class="w-1/2 space-y-4">
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Nom / Raison sociale *
                </label>
                <input
                  v-model="form.companyName"
                  type="text"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="Thomas"
                />
              </div>
  
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Zone d'intervention *
                </label>
                <select
                  v-model="form.zone"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                >
                  <option value="US">United States</option>
                  <option value="FR">France</option>
                </select>
              </div>
  
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Taille de l'entreprise *
                </label>
                <input
                  v-model="form.size"
                  type="text"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="e.g. California"
                />
              </div>
            </div>
  
            <div class="w-1/2 space-y-4">
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Adresse *
                </label>
                <input
                  v-model="form.address"
                  type="text"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="Lean"
                />
              </div>
  
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Site web
                </label>
                <input
                  v-model="form.website"
                  type="url"
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="https://example.com"
                />
              </div>
  
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Email professionnel
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>
  
          <div class="w-full pt-6 pb-8">
            <button
              type="submit"
              class="w-[259px] h-12 px-5 py-3 bg-[#233876] text-white rounded-lg text-base font-medium hover:bg-opacity-90"
            >
              Enregistrer les changements
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'
  
const form = ref({
  companyName: '',
  address: '',
  zone: '',
  website: '',
  size: '',
  email: ''
})
const fetchCompanyDetails = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    })
    if (!response.ok) throw new Error('Failed to fetch company details')
    const data = await response.json()
    form.value = {
      companyName: data.entreprise.nom,
      address: data.entreprise.adresse,
      zone: data.entreprise.zone_intervention,
      website: data.entreprise.site_web,
      size: data.entreprise.taille,
      email: data.user.email
    }
  } catch (error) {
    console.error('Error fetching company details:', error)
  }
}

onMounted(fetchCompanyDetails)

const saveCompanyDetails = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/entreprise', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify({
        nom: form.value.companyName,
        adresse: form.value.address,
        zone_intervention: form.value.zone,
        site_web: form.value.website,
        taille: form.value.size
      })
    })
    if (!response.ok) throw new Error('Failed to update company details')
  } catch (error) {
    console.error('Error updating company details:', error)
  }
}

  </script>