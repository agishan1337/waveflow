<script setup lang="ts">
import TestimonialsCard from './TestimonialsCard.vue';
import { ref } from 'vue';

const isHovered = ref(false);

const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<style scoped>
.testimonials-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.ticker-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.ticker-wrapper {
  display: flex;
  gap: 2rem;
  animation: ticker 40s linear infinite;
  padding: 0 2rem;
  width: max-content;
}

.ticker-wrapper.reverse {
  animation: ticker-reverse 40s linear infinite;
}

.ticker-wrapper:hover {
  animation-play-state: paused;
}

@keyframes ticker {
  0% {
    transform: translateX(calc(0%));
  }
  100% {
    transform: translateX(calc(-33.33333%));
  }
}

@keyframes ticker-reverse {
  0% {
    transform: translateX(calc(-33.33333%));
  }
  100% {
    transform: translateX(calc(0%));
  }
}

.testimonials-row {
  display: flex;
  gap: 2rem;
  flex-shrink: 0;
}

.card-container {
  width: calc((100vw - 10rem) / 4);
  min-width: 280px;
  flex-shrink: 0;
}
</style>

<template>
    <section class="relative py-12 md:py-16 lg:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center">
        <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 items-center px-4 md:px-16 lg:px-24">
            <Chip label="Testimonials"/>
            <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Poppins font-semibold md:font-semibold lg:font-semibold text-center text-textPrimary">What our users are say</h2>
            <p class="md:text-body-large text-body-small font-Sora text-textSecondary text-center">Hear what our users have to say about Waveflow's user-friendly interface and powerful automation features.</p>
        </div>
        
        <div class="testimonials-wrapper">
            <div class="ticker-container" 
                @mouseenter="handleMouseEnter" 
                @mouseleave="handleMouseLeave">
                <div class="ticker-wrapper" :style="{ animationPlayState: isHovered ? 'paused' : 'running' }">
                    <!-- First set of cards -->
                    <div class="testimonials-row">
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                    </div>
                    <!-- Duplicate set for seamless loop -->
                    <div class="testimonials-row">
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ticker-container" 
                @mouseenter="handleMouseEnter" 
                @mouseleave="handleMouseLeave">
                <div class="ticker-wrapper reverse" :style="{ animationPlayState: isHovered ? 'paused' : 'running' }">
                    <!-- First set of cards -->
                    <div class="testimonials-row">
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                    </div>
                    <!-- Duplicate set for seamless loop -->
                    <div class="testimonials-row">
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                        <div class="card-container">
                            <TestimonialsCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>