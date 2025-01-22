<script setup lang="ts">
import Usecases from './components/UseCases/Usecases.vue';
import TestimonialsSection from './components/Testimonials/TestimonialsSection.vue';

const testimonialData = {
  title: "What our users are saying",
  description: "Hear what our users have to say about Waveflow's user-friendly interface and powerful automation features.",
  testimonials: [
    {
      avatar: "/assets/Testimonials/Avatar-1.png",
      name: "John Doe",
      designation: "CEO, TechHorizon",
      testimonialTitle: "Outstanding platform for businesses",
      testimonialDescription: "Waveflow has completely revolutionized our approach to managing workflows. Its intuitive design and advanced automation tools have saved us time and resources, making our operations smoother and more efficient than ever before."
    },
    {
      avatar: "/assets/Testimonials/Avatar-2.png",
      name: "Jane Smith",
      designation: "CTO, SmartGrid Solutions",
      testimonialTitle: "A must-have for efficiency",
      testimonialDescription: "Using Waveflow has streamlined our workflow and drastically improved our team's productivity. The automation features are easy to use and highly effective, helping us achieve more in less time without compromising on quality."
    },
    {
      avatar: "/assets/Testimonials/Avatar-3.png",
      name: "Robert Brown",
      designation: "Lead Developer, FutureTech",
      testimonialTitle: "Incredibly user-friendly platform",
      testimonialDescription: "Waveflow’s clean interface and robust functionality make it a game-changer. We've managed to automate repetitive tasks seamlessly, allowing our developers to focus on innovation and critical aspects of our projects."
    },
    {
      avatar: "/assets/Testimonials/Avatar-4.png",
      name: "Emily Davis",
      designation: "Product Manager, VisionAI",
      testimonialTitle: "Simplifies complex processes effortlessly",
      testimonialDescription: "Waveflow has enabled us to automate time-consuming processes and reduce errors significantly. The platform's reliability and ease of use have been instrumental in helping us meet deadlines and exceed client expectations."
    },
    {
      avatar: "/assets/Testimonials/Avatar-5.png",
      name: "Michael Lee",
      designation: "Operations Head, Finova",
      testimonialTitle: "Excellent tool for automation",
      testimonialDescription: "We’ve achieved unprecedented efficiency with Waveflow. Its powerful features and excellent customer support have made it an essential tool for managing our operations effectively."
    },
    {
      avatar: "/assets/Testimonials/Avatar-6.png",
      name: "Sophia White",
      designation: "Team Lead, CodeCraft",
      testimonialTitle: "Improved team productivity",
      testimonialDescription: "Waveflow has been instrumental in automating our daily processes, resulting in improved productivity and reduced errors. The intuitive dashboard makes it simple to use for our entire team."
    },
    {
      avatar: "/assets/Testimonials/Avatar-7.png",
      name: "William Green",
      designation: "Founder, Innovent",
      testimonialTitle: "Streamlines tasks effectively",
      testimonialDescription: "With Waveflow, our business processes have become more streamlined. The platform is highly intuitive, saving us countless hours every week."
    },
    {
      avatar: "/assets/Testimonials/Avatar-8.png",
      name: "Chloe Martinez",
      designation: "Marketing Manager, BrandHive",
      testimonialTitle: "Boosted campaign management",
      testimonialDescription: "The automation tools in Waveflow have made managing campaigns easier and faster. Our marketing team has significantly benefited from the platform’s robust features."
    },
    {
      avatar: "/assets/Testimonials/Avatar-9.png",
      name: "Daniel Carter",
      designation: "Analyst, DataSphere",
      testimonialTitle: "Great for data workflows",
      testimonialDescription: "Waveflow has simplified our data workflows and allowed us to focus on insights rather than tedious tasks. The automation features are top-notch and reliable."
    },
    {
      avatar: "/assets/Testimonials/Avatar-10.png",
      name: "Emma Johnson",
      designation: "Consultant, Stratify",
      testimonialTitle: "Highly intuitive platform",
      testimonialDescription: "Waveflow’s ease of use and powerful automation tools make it stand out. It has saved us valuable time and effort in managing our clients’ needs."
    },
    {
      avatar: "/assets/Testimonials/Avatar-11.png",
      name: "James Patel",
      designation: "Director, NexTech",
      testimonialTitle: "Essential for business automation",
      testimonialDescription: "Waveflow is a game-changer for businesses looking to automate repetitive tasks. The platform is intuitive and comes with excellent customer support."
    },
    {
      avatar: "/assets/Testimonials/Avatar-12.png",
      name: "Olivia Walker",
      designation: "Head of Design, CreativeEdge",
      testimonialTitle: "Transformed our workflow",
      testimonialDescription: "Waveflow has transformed how our team collaborates and manages tasks. The automation features have made our processes faster and more efficient than ever."
    }
  ]
};

const pricingData = {
  title: "Pay once, use forever!",
  description: "Choose the perfect plan for your needs. All plans include access to our core features and regular updates.",
  pricingCards: [
    {
      planType: "Lifetime Plan",
      planDescription: "Perfect for small businesses",
      price: 199,
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user"
      ],
      buttonLabel: "Get Started",
      buttonVariant: "primary",
      isPopular: true
    },
    {
      planType: "Lifetime Pro Plan",
      planDescription: "Perfect for growing businesses",
      price: 299,
      features: [
        "Everything in Basic, plus:",
        "Advanced analytics",
        "Unlimited team members",
        "100GB storage per user",
       
      ],
      buttonLabel: "Get Started",
      buttonVariant: "tertiary"
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
<PricingSection
  :title="pricingData.title"
  :description="pricingData.description"
  :pricingCards="pricingData.pricingCards"
/>
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