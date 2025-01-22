<script setup lang="ts">
import PricingCard from './PricingCard.vue';
import Chip from '../Chip/Chip.vue';

interface PricingCardData {
    planType: string;
    planDescription: string;
    price: number;
    features: string[];
    buttonLabel: string;
    buttonVariant: 'primary' | 'secondary' | 'outline' | 'tertiary';
    isPopular?: boolean;
}

interface PricingSectionProps {
    title: string;
    description: string;
    pricingCards: PricingCardData[];
}

defineProps<PricingSectionProps>();
</script>

<template>
    <section class="relative py-12 md:py-16 lg:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center">
         <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 items-center px-4 md:px-16 lg:px-24">
            <Chip label="Pricing"/>
            <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Poppins font-semibold md:font-semibold lg:font-semibold text-center text-textPrimary">{{ title }}</h2>
            <p class="md:text-body-large text-body-small font-Sora text-textSecondary text-center">{{ description }}</p>
         </div>
         <div class="flex flex-col lg:flex-row gap-6 w-full max-w-5xl mx-auto h-full px-4 md:px-16 lg:px-24">
            <div v-for="card in pricingCards" :key="card.planType" class="flex-1 h-full">
                <PricingCard v-bind="card" class="h-full"/>
            </div>
         </div>
    </section>
</template>