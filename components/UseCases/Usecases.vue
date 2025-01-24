<script setup lang="ts">
import UsecasesCard from './UsecasesCard.vue';

interface UseCase {
  icon: string;
  title: string;
  description: string;
}

defineProps<{
  title: string;
  buttonLabel: string;
  useCases: UseCase[];
}>();
</script>

<template >
    <section class="relative py-12 md:py-16 lg:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center px-4 md:px-16 lg:px-24 ">
          <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 justify-center items-center">
            <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Sora font-semibold lg:font-semibold text-center text-textPrimary">{{ title }}</h2> 
            <Button :label="buttonLabel" variant="primary"/>  
         </div>
         <div class="lg:max-w-7xl z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <UsecasesCard 
              v-for="useCase in useCases" 
              :key="useCase.title"
              :icon="useCase.icon"
              :title="useCase.title"
              :description="useCase.description"
            />
         </div>
    </section>
</template>