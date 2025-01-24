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
    <section class="py-12 md:py-16 lg:py-32 px-4 md:px-16 lg:px-24">
        <div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 max-w-7xl mx-auto">
            <div class="lg:w-1/3 flex flex-col gap-4">
                <Chip label="Pricing"/>
                <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Poppins font-semibold md:font-semibold lg:font-semibold text-textPrimary">{{ title }}</h2>
                <p class="md:text-body-large text-body-small font-Sora text-textSecondary">{{ description }}</p>
            </div>
            <div class="lg:w-2/3">
                <div class="flex flex-col lg:flex-row gap-6">
                    <div v-for="card in pricingCards" :key="card.planType" class="flex-1 h-full">
                        <PricingCard v-bind="card" class="h-full"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>