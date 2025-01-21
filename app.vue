<script setup lang="ts">
import Usecases from './components/UseCases/Usecases.vue';

</script>

<template >
<NavigationHeader/>
<HeroSection 
  title='The <span class="text-primary">AI notepad</span> people in back-to-back meetings'
  description="Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration."
  tagLabel="We have just launched!"
  tagIcon="/assets/Icons/Bolt.png"
  heroImage="/assets/HeroAssets/HeroImage.png"
/>
<ProductShowcase/>
<Usecases
  title="Built for every knowledge worker across your team"
  buttonLabel="Get Started for Free"
  :useCases="[
    {
      icon: '/assets/Usecases/Icons/Icon1.svg',
      title: 'Sales',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    },
    {
      icon: '/assets/Usecases/Icons/Icon2.svg',
      title: 'Engineering',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    },
    {
      icon: '/assets/Usecases/Icons/Icon3.svg',
      title: 'Recruiting',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    },
    {
      icon: '/assets/Usecases/Icons/Icon4.svg',
      title: 'Marketing',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    },
    {
      icon: '/assets/Usecases/Icons/Icon5.svg',
      title: 'Education',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    },
    {
      icon: '/assets/Usecases/Icons/Icon6.svg',
      title: 'Media & Podcasting',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    }
  ]"
/>

</template>

<style>
@import './assets/main.css';
</style>