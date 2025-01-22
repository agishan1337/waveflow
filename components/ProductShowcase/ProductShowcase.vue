<template>
    <section class="relative py-12 md:py-16 lg:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center px-4 md:px-16 lg:px-24">
        <!-- Header -->
        <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 items-center">
            <Chip label="Features"/>
            <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Poppins font-semibold md:font-semibold lg:font-semibold text-center text-textPrimary">{{ title }}</h2>
            <p class="md:text-body-large text-body-small font-Sora text-textSecondary text-center">{{ description }}</p>
        </div>

        <!-- Main Content -->
        <div class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <!-- Feature List -->
            <div class="flex flex-col gap-8">
                <div v-for="feature in features" :key="feature.title" class="feature-card group">
                    <div class="flex gap-4 items-start">
                        <img class="w-8 h-8" :src="feature.icon" alt="">
                        <div class="flex flex-col gap-2">
                            <h3 class="text-body-large font-Sora font-medium text-textPrimary group-hover:text-primary transition-colors duration-200">
                                {{ feature.title }}
                            </h3>
                            <p class="text-body-medium font-Sora text-textSecondary">
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative">
                <div class="aspect-[4/3] w-full shadow-md rounded-2xl overflow-hidden">
                    <img 
                        :src="productImage" 
                        alt="Product Demo" 
                        class="w-full h-full object-cover"
                    >
                   
                </div>
              
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Chip from '../Chip/Chip.vue';

interface Feature {
    title: string;
    description: string;
    icon: string;
}

interface ProductShowcaseProps {
    title: string;
    description: string;
    productImage: string;
    features: Feature[];
}

defineProps<ProductShowcaseProps>();
</script>

<style scoped>
.feature-card {
    padding: 1.5rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
}

.feature-card:hover {
    background: rgba(var(--color-secondary-rgb), 0.05);
    transform: translateX(0.5rem);
}
</style>