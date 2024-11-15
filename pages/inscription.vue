<template>
    <div class="min-h-screen bg-white">
      <nav class="w-full border-b border-gray-200">
        <TheNavbar />
      </nav>
      
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col lg:flex-row justify-between gap-12">
          <!-- Registration Form Section -->
          <div class="w-full lg:w-1/2 max-w-md mx-auto lg:max-w-none">
            <div class="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div class="flex items-center gap-2 mb-8">
                <img src="~/assets/images/logo.png" alt="EDC" class="w-4 h-[17px]" />
                <span class="font-outfit text-lg font-semibold text-gray-900">
                  Electriciensdeconfiance
                </span>
              </div>
  
              <div class="space-y-2 mb-8">
                <h1 class="font-inter text-2xl font-bold text-gray-900">
                  Créez votre compte gratuitement.
                </h1>
                <p class="font-inter text-sm font-medium text-gray-900">
                  Créez votre compte en quelques secondes. Already have an account? 
                  <NuxtLink to="/connexion" class="text-blue-700 hover:text-blue-800 transition-colors">
                    Login here
                  </NuxtLink>
                </p>
              </div>
  
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="email" class="block text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <input
                      id="email"
                      v-model="email"
                      type="email"
                      required
                      placeholder="exemple@gmail.com"
                      class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div class="space-y-2">
                    <label for="fullName" class="block text-sm font-medium text-gray-900">
                      Nom & Prénom
                    </label>
                    <input
                      id="fullName"
                      v-model="fullName"
                      type="text"
                      required
                      placeholder="e.g. Bonnie guedioura"
                      class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div class="space-y-2">
                    <label for="phone" class="block text-sm font-medium text-gray-900">
                      Numéro téléphone
                    </label>
                    <div class="relative">
                      <input
                        id="phone"
                        v-model="phone"
                        type="tel"
                        required
                        placeholder="+0655888999"
                        class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label for="password" class="block text-sm font-medium text-gray-900">
                      Mot de passe
                    </label>
                    <input
                      id="password"
                      v-model="password"
                      type="password"
                      required
                      placeholder="••••••••"
                      class="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
  
                <div class="relative flex items-center">
                  <div class="flex-grow border-t border-gray-200"></div>
                  <span class="flex-shrink mx-4 text-gray-500">or</span>
                  <div class="flex-grow border-t border-gray-200"></div>
                </div>
  
                <button
                  type="button"
                  @click="signUpWithGoogle"
                  class="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <img src="~/assets/images/Google.svg" alt="Google" class="w-5 h-5" />
                  <span class="text-sm font-medium text-gray-900">S'inscrire avec google</span>
                </button>
                  
                    <div class="text-sm text-gray-600"> 
                <label class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    v-model="rememberMe"
                    class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </label> 
                  En créant un compte, vous acceptez nos 
                <a href="#" class="text-blue-700 hover:text-blue-800">Conditions Générales d'Utilisation</a>
                ainsi que notre
                <a href="#" class="text-blue-700 hover:text-blue-800">Politique de Confidentialité</a>.
              </div>
               
                
  
                <button
                  type="submit"
                  class="w-full px-4 py-2 bg-[#233876] text-white rounded-lg hover:bg-[#1E3A8A] transition-colors"
                >
                  Inscription
                </button>
              </form>
            </div>
          </div>
  
          <!-- Illustration -->
          <div class="hidden lg:block w-full lg:w-1/2">
            <img
              src="~/assets/images/IllustrationInsci.svg"
              alt="Illustration"
              class="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </main>
  
      <footer class="border-t border-gray-200 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p class="text-center text-sm text-gray-500">
            © {{ new Date().getFullYear() }} INOVENCIA, Inc. Tout les droits sont résérvés.
          </p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const fullName = ref('')
const phone = ref('')
const password = ref('')
const address = ref('vide')
const birthday = ref('15-09-1998')

const handleSubmit = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        nom: fullName.value.split(' ')[0],
        prenom: fullName.value.split(' ')[1] || '',
        email: email.value,
        password: password.value,
        telephone: phone.value,
        adresse: address.value,
        anniversaire: birthday.value,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Registration failed')
    }

    const data = await response.json()
    console.log('Registration successful', data)


    router.push('/connexion')
  } catch (error) {
    console.error('Registration error:', error)
  }
}

const signUpWithGoogle = () => {
  console.log('Google sign-up clicked')
  // Implement Google sign-up logic here
}
</script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600&family=Inter:wght@400;500;600;700&display=swap');
  
  .font-outfit {
    font-family: 'Outfit', sans-serif;
  }
  
  :root {
    --primary-color: #233876;
    --primary-hover: #1E3A8A;
    --google-btn-hover: #F3F4F6;
  }
  
  /* Add smooth transitions */
  .transition-colors {
    transition: all 0.2s ease-in-out;
  }
  
  /* Improve focus styles */
  input:focus, button:focus {
    outline: none;
    ring-width: 2px;
    ring-color: #3B82F6;
  }
  

  </style>