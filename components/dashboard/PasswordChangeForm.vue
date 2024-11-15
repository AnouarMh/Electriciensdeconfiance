<template>
    <div class="bg-white rounded-lg shadow-[0px_1px_2px_0px_#00000014]">
      <!-- Form Header -->
      <div class="px-8 pt-8">
        <div class="w-full h-[46px] pb-4">
          <h2 class="font-['Inter'] text-xl font-bold leading-[30px] text-[#111928]">
            Mot de passe
          </h2>
        </div>
  
        <!-- Form Content -->
        <form @submit.prevent="changePassword" class="w-full">
          <div class="flex gap-4 mb-4">
            <!-- Left Column -->
            <div class="w-1/2 space-y-4">
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Mot de passe actuel
                </label>
                <input
                  v-model="form.currentPassword"
                  type="password"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="Enter your current password"
                />
              </div>
            </div>
  
            <!-- Right Column -->
            <div class="w-1/2 space-y-4">
              <div class="h-[71px]">
                <label class="block text-sm font-medium text-[#111928] mb-2">
                  Nouveau mot de passe
                </label>
                <input
                  v-model="form.newPassword"
                  type="password"
                  required
                  class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                  placeholder="Enter your new password"
                />
              </div>
            </div>
          </div>
  
          <div class="w-full mb-4">
            <div class="h-[71px] w-[300px]">
              <label class="block text-sm font-medium text-[#111928] mb-2">
                Confirmez le nouveau mot de passe
              </label>
              <input
                v-model="form.confirmPassword"
                type="password"
                required
                class="w-full h-[42px] px-4 py-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#6B7280] leading-[17.5px] focus:ring-2 focus:ring-[#233876] focus:border-transparent"
                placeholder="Confirm your new password"
              />
            </div>
          </div>
  
          <!-- Password Requirements -->
          <div class="bg-[#F9FAFB] p-4 rounded-lg mb-6">
            <h3 class="text-sm font-medium text-[#111928] mb-2">Password requirements:</h3>
            <ul class="text-sm text-[#6B7280] space-y-1">
              <li>Au moin 10 caractères</li>
              <li>Au moin une lettre majuscule</li>
              <li>Au moin un caractère spécial e.g., ! @ # ?</li>
            </ul>
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
  import { ref } from 'vue'
  
  const form = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  
  const changePassword = () => {
    console.log('Changing password:', form.value)
  }
  </script>