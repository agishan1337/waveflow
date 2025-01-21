<script setup lang="ts">
import TestimonialsCard from './TestimonialsCard.vue';

</script>

<template>
    <section class="relative py-12 md:py-16 lg:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center px-4 md:px-16 lg:px-24 ">
          <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 items-center">
            <Chip label="Testimonials"/>
            <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Poppins font-semibold md:font-semibold lg:font-semibold text-center text-textPrimary ">What our users are say</h2>
            <p class="md:text-body-large text-body-small font-Sora text-textSecondary text-center"> Hear what our users have to say about Waveflow's user-friendly interface and powerful automation features.</p>
         </div>
    </section>
    <TestimonialsCard/>
</template>