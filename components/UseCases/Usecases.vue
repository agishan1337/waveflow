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
    <section id="usecases" class="relative py-12 md:py-16 lg:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center px-4 md:px-16 lg:px-24 bg-bgDark">
          <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 justify-center items-center">
            <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Sora font-medium text-center text-white">{{ title }}</h2> 
            <Button :label="buttonLabel" variant="secondary"/>  
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
          <div class="absolute inset-x-0 bottom-0 w-full h-full z-0">
            <img class="absolute bottom-0 w-full h-1/2 object-bottom" src="/assets/UseCases/Background.png" alt="">
          </div>
    </section>
</template>