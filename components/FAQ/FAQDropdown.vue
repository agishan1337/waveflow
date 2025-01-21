<template>
  <div class="border-b border-strokeColor overflow-hidden">
    <button 
      @click="$emit('toggle')"
      class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
    >
      <h3 class="text-body-medium lg:text-body-large font-Sora font-medium text-textPrimary">{{ question }}</h3>
      <img 
        src="/assets/Icons/chevron-down.svg" 
        :class="['w-6 h-6 transition-transform duration-300', isOpen ? 'rotate-180' : '']" 
        alt="Toggle"
      />
    </button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="isOpen" ref="contentRef" class="transition-all duration-300 ease-in-out">
        <div class="px-6 pb-6">
          <p class="text-body-small font-Sora text-textSecondary">{{ answer }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  question: string;
  answer: string;
  isOpen: boolean;
}>();

defineEmits<{
  (e: 'toggle'): void;
}>();

const contentRef = ref<HTMLElement | null>(null);

const beforeEnter = (el: HTMLElement) => {
  el.style.height = '0';
  el.style.overflow = 'hidden';
};

const enter = (el: HTMLElement) => {
  el.style.height = el.scrollHeight + 'px';
};

const afterEnter = (el: HTMLElement) => {
  el.style.height = 'auto';
  el.style.overflow = 'visible';
};

const beforeLeave = (el: HTMLElement) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.overflow = 'hidden';
};

const leave = (el: HTMLElement) => {
  // Trigger reflow
  el.scrollHeight;
  el.style.height = '0';
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>