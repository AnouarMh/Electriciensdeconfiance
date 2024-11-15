<template>
    <div class="bg-white rounded-lg shadow-[0px_1px_2px_0px_#00000014]">
      <!-- Form Header -->
      <div class="px-8 pt-8">
        <div class="w-full h-[46px] pb-4">
          <h2 class="font-['Inter'] text-xl font-bold leading-[30px] text-[#111928]">
            Informations personnelles
          </h2>
        </div>
  
        <!-- Form Content -->
        <form @submit.prevent="savePersonalInfo" class="w-full">
          <div class="flex gap-4 mb-4">
            <!-- Left Column -->
            <div class="w-1/2 space-y-4">
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Nom *
                </label>
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="Thomas"
                />
              </div>
  
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  E-mail *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="name@example.com"
                />
              </div>
  
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Adresse
                </label>
                <input
                  v-model="form.address"
                  type="text"
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="Themenzerg"
                />
              </div>
            </div>
  
            <!-- Right Column -->
            <div class="w-1/2 space-y-4">
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Prénom *
                </label>
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="Lean"
                />
              </div>
  
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Numéro téléphone *
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="e.g. San Francisco"
                />
              </div>
  
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Anniversaire
                </label>
                <input
                  v-model="form.birthday"
                  type="date"
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                />
              </div>
            </div>
          </div>
  
          <!-- Action Button -->
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
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  address: '',
  birthday: ''
})

const fetchPersonalInfo = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    })
    if (!response.ok) throw new Error('Failed to fetch personal info')
    const data = await response.json()
    form.value = {
      lastName: data.user.nom,
      firstName: data.user.prenom,
      email: data.user.email,
      phone: data.user.telephone,
      address: data.user.adresse,
      birthday: data.user.anniversaire
    }
  } catch (error) {
    console.error('Error fetching personal info:', error)
  }
}

onMounted(fetchPersonalInfo)
const savePersonalInfo = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify({
        nom: form.value.lastName,
        prenom: form.value.firstName,
        email: form.value.email,
        telephone: form.value.phone,
        adresse: form.value.address,
        anniversaire: form.value.birthday
      })
    })
    if (!response.ok) throw new Error('Failed to update personal info')
  } catch (error) {
    console.error('Error updating personal info:', error)
  }
}
  </script>