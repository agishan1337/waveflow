<script setup lang="ts">
import Usecases from './components/UseCases/Usecases.vue';

</script>

<template>
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
<FAQSection
  label="Support"
  title="FAQ's"
  description="Everything you need to know about WaveFlow. Can't find the answer you're looking for? Please chat with our friendly team."
  :faqs="[
    {
      question: 'What is WaveFlow?',
      answer: 'WaveFlow is an AI-powered note-taking solution designed for people in back-to-back meetings, helping you capture and organize information effortlessly.'
    },
    {
      question: 'How does the AI integration work?',
      answer: 'Our AI technology automatically captures key points, action items, and insights from your meetings, organizing them into structured notes that you can easily review and share.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take security seriously. All your data is encrypted end-to-end, and we follow industry best practices for data protection and privacy.'
    },
    {
      question: 'Can I integrate with other tools?',
      answer: 'WaveFlow seamlessly integrates with popular tools like Slack, Teams, and Zoom, making it easy to incorporate into your existing workflow.'
    },
    {
      question: 'What\'s the pricing model?',
      answer: 'We offer flexible pricing plans starting with a free tier. Premium features are available through our Pro and Enterprise plans.'
    }
  ]"
/>

</template>

<style>
@import './assets/main.css';
</style>