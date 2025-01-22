<script setup lang="ts">
import TestimonialsCard from './TestimonialsCard.vue';
import { ref, computed } from 'vue';

interface TestimonialProps {
    title: string;
    description: string;
    testimonials: Array<{
        avatar: string;
        name: string;
        designation: string;
        testimonialTitle: string;
        testimonialDescription: string;
    }>;
}

const props = defineProps<TestimonialProps>();

const isHovered = ref(false);

const firstHalfTestimonials = computed(() => {
    const halfLength = Math.ceil(props.testimonials.length / 2);
    return props.testimonials.slice(0, halfLength);
});

const secondHalfTestimonials = computed(() => {
    const halfLength = Math.ceil(props.testimonials.length / 2);
    return props.testimonials.slice(halfLength);
});

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
  overflow: hidden;
}

.ticker-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
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
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 1rem));
  }
}

@keyframes ticker-reverse {
  0% {
    transform: translateX(calc(-50% - 1rem));
  }
  100% {
    transform: translateX(0);
  }
}

.testimonials-row {
  display: flex;
  gap: 2rem;
  padding: 0.5rem 0;
}

.card-container {
  width: 400px;
  min-width: 400px;
  flex-shrink: 0;
}
</style>

<template>
    <section class="relative py-12 md:py-16 lg:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center">
        <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 items-center px-4 md:px-16 lg:px-24">
            <Chip label="Testimonials"/>
            <h2 class="text-body-extra-large md:text-h3 lg:text-h2 font-Poppins font-semibold md:font-semibold lg:font-semibold text-center text-textPrimary">{{ props.title }}</h2>
            <p class="md:text-body-large text-body-small font-Sora text-textSecondary text-center">{{ props.description }}</p>
        </div>
        
        <div class="testimonials-wrapper">
            <div class="ticker-container">
                <div class="ticker-wrapper" :style="{ animationPlayState: isHovered ? 'paused' : 'running' }">
                    <div class="testimonials-row">
                        <div v-for="testimonial in firstHalfTestimonials" :key="testimonial.name" class="card-container">
                            <TestimonialsCard v-bind="testimonial"/>
                        </div>
                    </div>
                    <div class="testimonials-row">
                        <div v-for="testimonial in firstHalfTestimonials" :key="testimonial.name + '_dup'" class="card-container">
                            <TestimonialsCard v-bind="testimonial"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ticker-container">
                <div class="ticker-wrapper reverse" :style="{ animationPlayState: isHovered ? 'paused' : 'running' }">
                    <div class="testimonials-row">
                        <div v-for="testimonial in secondHalfTestimonials" :key="testimonial.name + '_rev'" class="card-container">
                            <TestimonialsCard v-bind="testimonial"/>
                        </div>
                    </div>
                    <div class="testimonials-row">
                        <div v-for="testimonial in secondHalfTestimonials" :key="testimonial.name + '_rev_dup'" class="card-container">
                            <TestimonialsCard v-bind="testimonial"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>