<template>
 <div class="min-h-screen bg-white">
  <nav class="w-full border-b border-gray-200">
    <TheNavbar />
  </nav>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col lg:flex-row justify-between gap-12">
        <!-- Login Form Section -->
        <div class="w-full lg:w-1/2 max-w-md mx-auto lg:max-w-none">
          <div class="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div class="flex items-center gap-2 mb-8">
              <img src="~/assets/images/logo.png" alt="EDC" class="w-4 h-17px" />
              <span class="font-outfit text-lg font-semibold text-gray-900">
                Electriciensdeconfiance
              </span>
            </div>

            <div class="space-y-2 mb-8">
              <h1 class="font-inter text-2xl font-bold text-gray-900">Bienvenue !</h1>
              <p class="font-inter text-sm font-medium text-gray-900">
                Vous n'avez pas de compte?
                <a href="/inscription" class="text-blue-700 hover:text-blue-800 transition-colors">
                  Inscrivez-vous
                </a>
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="flex space-x-4">
                <div class="space-y-2 w-1/2">
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
                <div class="space-y-2 w-1/2">
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
                <span class="flex-shrink mx-4 text-gray-500">ou</span>
                <div class="flex-grow border-t border-gray-200"></div>
              </div>

              <button
                type="button"
                @click="signInWithGoogle"
                class="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img src="~/assets/images/Google.svg" alt="Google" class="w-5 h-5" />
                <span class="text-sm font-medium text-gray-900">Se connecter avec Google</span>
              </button>

              <div class="flex items-center justify-between">
                <label class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    v-model="rememberMe"
                    class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span class="text-sm text-gray-500">Se souvenir de moi</span>
                </label>
                <a href="#" class="text-sm text-blue-700 hover:text-blue-800 transition-colors">
                  Mot de passe oublié ?
                </a>
              </div>

              <button
                type="submit"
                class="w-full px-4 py-2 bg-[#233876] text-white rounded-lg hover:bg-[#1E3A8A] transition-colors"
              >
                Connexion
              </button>
            </form>
          </div>
        </div>

        <!-- Illustration -->
        <div class="hidden lg:block w-full lg:w-1/2">
          <img
          src="~/assets/images/electricians-illustration.svg" 
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
const password = ref('')
const rememberMe = ref(false)

const handleSubmit = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Login failed')
    }

    const data = await response.json()
    console.log('Login successful', data)

    localStorage.setItem('auth_token', data.access_token)

    router.push('/onboarding')
  } catch (error) {
    console.error('Login error:', error)
  }
}

const signInWithGoogle = () => {
  console.log('Google sign-in clicked')
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