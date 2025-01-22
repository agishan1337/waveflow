<script setup lang="ts">
import PricingCard from './PricingCard.vue';


</script>

<template>
    <section class="relative py-12 md:py-16 lg:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center px-4 md:px-16 lg:px-24 ">
          <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 items-center">
            <Chip label="Pricing"/>
            <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Poppins font-semibold md:font-semibold lg:font-semibold text-center text-textPrimary ">Pay once, use forever!</h2>
            <p class="md:text-body-large text-body-small font-Sora text-textSecondary text-center"> Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.</p>
         </div>
         <div class="flex flex-col lg:flex-row gap-6 w-full max-w-3xl mx-auto">
            <PricingCard
                planType="Lifetime Plan"
                :price="199"
                :features="['Access to all basic features', 'Basic reporting and analytics', 'Up to 10 individual users', '20GB individual data each user']"
                buttonLabel="Get Started"
                buttonVariant="primary"
                />

                <PricingCard
                planType="Lifetime Plan"
                :price="299"
                :features="['Unlimited plugins', 'Feature 2', 'Feature 3', 'Feature 4']"
                buttonLabel="Get Started"
                buttonVariant="tertiary"
                />
         </div>

    </section>
</template>