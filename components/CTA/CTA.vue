<template>
    <section id="cta" class="relative pt-12 md:pt-16 lg:pt-32 flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 bg-bgDark">
        <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 items-center">
            <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Sora font-medium text-center text-white">{{ title }}</h2>
            <Button :label="buttonLabel" variant="secondary"/>
        </div>
        <div class="lg:max-w-7xl z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        </div>
        <div>
          <img src="/assets/CTAAssets/Banner.png" alt="">
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from '../Button/Button.vue';

interface CTAProps {
    title: string;
    buttonLabel: string;
}

defineProps<CTAProps>();
</script>