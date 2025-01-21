<template>
  <section class="py-12 md:py-16 lg:py-32 px-4 md:px-16 lg:px-24">
    <div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 max-w-7xl mx-auto">
      <div class="lg:w-1/3 flex flex-col gap-4">
        <Chip :label="label"/>
        <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Poppins font-medium md:font-medium lg:font-medium text-textPrimary">{{ title }}</h2>
        <p class="text-body-small md:text-body-large font-Sora text-textSecondary">{{ description }}</p>
      </div>

      <div class="lg:w-2/3">
        <FAQDropdown
          v-for="faq in faqs"
          :key="faq.question"
          :question="faq.question"
          :answer="faq.answer"
          :is-open="openFAQ === faq.question"
          @toggle="toggleFAQ(faq.question)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FAQDropdown from './FAQDropdown.vue';

interface FAQ {
  question: string;
  answer: string;
}

defineProps<{
  title: string;
  description: string;
  label: string;
  faqs: FAQ[];
}>();

const openFAQ = ref<string | null>(null);

const toggleFAQ = (question: string) => {
  openFAQ.value = openFAQ.value === question ? null : question;
};
</script>