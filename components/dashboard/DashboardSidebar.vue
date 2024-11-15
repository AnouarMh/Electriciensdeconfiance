<template>
  <aside class="fixed left-0 top-0 h-full w-[240px] bg-white border-r border-gray-200">
    <!-- Logo -->
    <div class="p-4">
        <div class="flex items-center gap-3">
        <img src="~/assets/images/logo.png" alt="Logo" class="w-32px h-35.5px" />
      </div>
    </div>

    <!-- Navigation -->
    <nav class="mt-6">
      <ul class="space-y-1">
        <li v-for="item in navItems" :key="item.route">
          <NuxtLink
            :to="item.route"
            :class="[
              'flex items-center gap-3 px-4 py-2 text-sm font-medium',
              activeRoute === item.route
                ? 'text-[#233876] bg-[#233876]/5'
                : 'text-gray-600 hover:bg-gray-50'
            ]"
          >
            <component :is="item.icon" class="w-5 h-5" />
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { 
  HomeIcon, 
  SettingsIcon, 
  StarIcon, 
  UsersIcon, 
  CreditCardIcon, 
  MessageCircle,
  Heading
} from 'lucide-vue-next'

defineProps({
  activeRoute: {
    type: String,
    required: true
  }
})

const navItems = [
  { label: 'Résultats', route: '/resultats', icon: HomeIcon },
  { label: 'Compte', route: 'compte', icon: SettingsIcon },
  { label: 'Avis', route: 'avis', icon: StarIcon },
  { label: 'Contributions', route: 'contributions', icon: MessageCircle },
  { label: 'Abonnement', route: 'abonnement', icon: UsersIcon }
]
</script>