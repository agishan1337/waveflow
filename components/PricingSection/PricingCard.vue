<template>
    <div class="p-6 border border-strokeColor h-full rounded-2xl shadow-sm gap-6 justify-between flex flex-col w-full items-start">
        <div class="flex flex-col gap-4 ">
            <p class="md:text-body-large text-body-small font-Sora text-textPrimary">{{ planType }}</p>
        </div>
        <div class="flex flex-row gap-2 justify-end items-end ">
            <h3 class="text-h3 lg:text-h2 font-Poppins font-semibold md:font-semibold lg:font-semibold text-textPrimary ">${{ price }}</h3>
            <p class="md:text-body-medium text-body-small font-Sora text-textSecondary pb-2"> per month</p>
        </div>
        <Button :label="buttonLabel" :variant="buttonVariant" fullwidth/>
        <div class="w-full pt-4 border-strokeColor border-t">
            <Chip label="Features"/>
        </div >
        
        <div class="flex flex-col gap-4 ">
            <div v-for="feature in features" :key="feature" class="flex gap-2">
                <img class="w-6 h-6" src="/assets/Icons/check.svg" alt="">
                <p class="md:text-body-medium text-body-small font-Sora text-textPrimary">{{ feature }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../Button/Button.vue';
import Chip from '../Chip/Chip.vue';

interface PricingCardProps {
    planType: string;
    price: number;
    features: string[];
    buttonLabel: string;
    buttonVariant?: 'primary' | 'secondary' | 'outline';
}

withDefaults(defineProps<PricingCardProps>(), {
    buttonVariant: 'primary',
    buttonLabel: 'Buy Now'
});
</script>