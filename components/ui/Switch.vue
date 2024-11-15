<template>
    <button
      type="button"
      :class="[
        'relative inline-flex h-6 w-11 items-center rounded-full',
        modelValue ? 'bg-[#233876]' : 'bg-gray-200'
      ]"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span
        :class="[
          'inline-block h-4 w-4 transform rounded-full bg-white transition',
          modelValue ? 'translate-x-6' : 'translate-x-1'
        ]"
      />
    </button>
  </template>
  
  <script setup>
  defineProps({
    modelValue: {
      type: Boolean,
      required: true
    }
  })
  
  defineEmits(['update:modelValue'])
  </script>