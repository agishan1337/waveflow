<script setup lang="ts">
import UsecasesCard from './UsecasesCard.vue';

</script>

<template >
    <section class="relative py-12 md:py-16 lg:py-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center px-4 md:px-16 lg:px-24 bg-bgDark">
          <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10 justify-center items-center">
            <h2 class="text-h2 font-Poppins font-medium text-center text-white">Built for every knowledge worker across your team</h2> 
            <Button label="Get Started" />  
         </div>
         <div class="lg:max-w-7xl z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <UsecasesCard icon="/assets/Usecases/Icons/Icon1.svg" title="Sales" description="Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration."/>
            <UsecasesCard icon="/assets/Usecases/Icons/Icon2.svg" title="Engineering" description="Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration."/>
            <UsecasesCard icon="/assets/Usecases/Icons/Icon3.svg" title="Recruiting" description="Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration."/>
            <UsecasesCard icon="/assets/Usecases/Icons/Icon4.svg" title="Marketing" description="Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration."/>
            <UsecasesCard icon="/assets/Usecases/Icons/Icon5.svg" title="Education" description="Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration."/>
            <UsecasesCard icon="/assets/Usecases/Icons/Icon6.svg" title="Media & Podcasting" description="Automate your web interactions effortlessly with customizable, user-friendly plugins designed for seamless integration."/>
         </div>
          <div class="absolute inset-x-0 bottom-0 w-full h-1/2 z-0 overflow-hidden">
            <img class="w-full  object-cover" src="/assets/UseCases/Background.png" alt="">
        </div>
    </section>
     
</template>