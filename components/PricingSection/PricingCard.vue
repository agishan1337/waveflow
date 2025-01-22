<template>
    <div class="pricing-card p-8 border border-strokeColor hover:border-primary h-full rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 gap-8 justify-between flex flex-col w-full items-start relative overflow-hidden group">

            <div class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/5 group-hover:to-primary/5 transition-all duration-300"></div>

            <div class="relative flex flex-col gap-4 w-full">
                <div class="flex justify-between items-start">
                    <div>
                        <p class="md:text-body-large text-body-medium font-Poppins text-textPrimary font-medium md:font-medium lg:font-medium">{{ planType }}</p>
                        <p class="text-body-small md:text-body-medium lg:text-body-medium font-Sora text-textSecondary mt-1">{{ planDescription }}</p>
                    </div>
                    <div v-if="isPopular" class="pricing-badge px-3 py-1 bg-secondary/10 rounded-full">
                        <span class="text-sm font-medium text-primary">Popular</span>
                    </div>
                </div>
                
                <div class="flex flex-row gap-2 items-baseline mt-2">
                    <h3 class="text-h3 lg:text-h2 font-Sora font-semibold md:font-semibold lg:font-semibold text-textPrimary">${{ price }}</h3>
                    <p class="md:text-body-medium text-body-small font-Sora text-textSecondary">per month</p>
                </div>
            </div>

            <Button 
                :label="buttonLabel" 
                :variant="buttonVariant" 
                fullwidth 
            class="transform group-hover:scale-[1.02] transition-transform duration-300"
            />

        <div class="w-full pt-6 border-strokeColor border-t">
                <div class="flex items-center gap-2 mb-4">
                    <Chip label="What's included" />
                </div>
                <div class="flex flex-col gap-4">
                    <div v-for="feature in features" 
                         :key="feature" 
                         class="flex gap-3 items-center group/feature">
                        <div class="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center group-hover/feature:bg-primary/10 transition-colors duration-200">
                            <img class="w-4 h-4" src="/assets/Icons/check.svg" alt="">
                        </div>
                        <p class="md:text-body-medium text-body-small font-Sora text-textPrimary group-hover/feature:text-primary transition-colors duration-200">
                            {{ feature }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import Button from '../Button/Button.vue';
import Chip from '../Chip/Chip.vue';

interface PricingCardProps {
    planType: string;
    planDescription: string;
    price: number;
    features: string[];
    buttonLabel: string;
    buttonVariant?: 'primary' | 'secondary' | 'outline' | 'tertiary';
    isPopular?: boolean;
}

withDefaults(defineProps<PricingCardProps>(), {
    buttonVariant: 'primary',
    buttonLabel: 'Buy Now',
    isPopular: false
});
</script>

<style scoped>
.pricing-card {
    backdrop-filter: blur(8px);
    transform: translateZ(0);
    will-change: transform, box-shadow;
}

.pricing-card:hover {
    transform: translateY(-2px);
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>