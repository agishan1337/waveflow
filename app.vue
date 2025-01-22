<script setup lang="ts">
import Usecases from './components/UseCases/Usecases.vue';


const testimonialData = {
  title: "What our users are saying",
  description: "Hear what our users have to say about Waveflow's user-friendly interface and powerful automation features.",
  testimonials: [
    {
      avatar: "/assets/Testimonials/Avatar1.png",
      name: "Ishan Gupta",
      designation: "CEO, AcornGlobus",
      testimonialTitle: "Highly recommend their service",
      testimonialDescription: "I had the privilege of working with them and am truly impressed by their professionalism, expertise, and commitment to excellence. From start to finish, their attention to detail and ability to deliver high-quality results exceeded my expectations."
    },
    {
      avatar: "/assets/Testimonials/Avatar2.png",
      name: "Sarah Chen",
      designation: "CTO, TechFlow",
      testimonialTitle: "Exceptional automation platform",
      testimonialDescription: "Waveflow has transformed how we handle our workflows. The automation capabilities are powerful yet intuitive, and the results have been remarkable. Our team's productivity has increased significantly."
    },
    {
      avatar: "/assets/Testimonials/Avatar3.png",
      name: "Michael Ross",
      designation: "Lead Developer, CloudScale",
      testimonialTitle: "Game-changing solution",
      testimonialDescription: "The integration capabilities and ease of use make Waveflow stand out. We've been able to automate complex processes with minimal effort, and the support team has been exceptional throughout."
    },
    {
      avatar: "/assets/Testimonials/Avatar4.png",
      name: "Emma Wilson",
      designation: "Product Manager, InnovateTech",
      testimonialTitle: "Streamlined our workflow",
      testimonialDescription: "Waveflow has become an integral part of our development process. The intuitive interface and powerful features have helped us automate routine tasks and focus on what matters most."
    }
  ]
};

const faqData = {
  label: "Support",
  title: "FAQ's",
  description: "Everything you need to know about WaveFlow. Can't find the answer you're looking for? Please chat with our friendly team.",
  faqs: [
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
    },
    {
      question: 'How can I get started?',
      answer: 'To get started, simply sign up for an account and start capturing and organizing your meeting notes.'
    }
  ]
};

const useCases = {
  title: "Built for every knowledge worker across your team",
  buttonLabel: "Get Started for Free",
  useCases: [
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
      title: 'Financial',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    },
    {
      icon: '/assets/Usecases/Icons/Icon4.svg',
      title: 'Human Resources',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    },
    {
      icon: '/assets/Usecases/Icons/Icon5.svg',
      title: 'Marketing',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    },
    {
      icon: '/assets/Usecases/Icons/Icon6.svg',
      title: 'Product Management',
      description: 'Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration.'
    }
  ]
}


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
  :title="useCases.title"
  :buttonLabel="useCases.buttonLabel"
  :useCases="useCases.useCases"
/>
<TestimonialsSection 
  :title="testimonialData.title"
  :description="testimonialData.description"
  :testimonials="testimonialData.testimonials"
/>
<FAQSection
  :label="faqData.label"
  :title="faqData.title"
  :description="faqData.description"
  :faqs="faqData.faqs"
/>
 
<Footer/>
</template>

<style>
@import './assets/main.css';
</style>