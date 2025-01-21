<template>
  <div class="border-b border-strokeColor  overflow-hidden">
    <button 
      @click="toggleDropdown"
      class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
    >
      <h3 class=" sm:text-body-medium lg:text-body-large font-Sora font-medium text-textPrimary">{{ question }}</h3>
      <img 
        src="/assets/Icons/chevron-down.svg" 
        :class="['w-6 h-6 transition-transform duration-300', isOpen ? 'rotate-180' : '']" 
        alt="Toggle"
      />
    </button>
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="isOpen" class="px-6 pb-6">
        <p class="text-body-small font-Sora text-textSecondary">{{ answer }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  question: string;
  answer: string;
}>();

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>