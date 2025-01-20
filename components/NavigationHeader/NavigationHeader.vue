<template>
  <header class="fixed inset-x-0 top-0 z-40 ">
    <div class="relative mx-auto mt-5 flex w-full items-start justify-center px-4">
      <div class="flex min-h-16 w-full items-center justify-between gap-8 px-5 md:min-h-18 md:px-4 md:w-auto border border-strokeColor rounded-full shadow-sm bg-white bg-opacity-80 backdrop-blur-md">
        <!-- Logo -->
        <div>
          <img 
            class="h-8 w-auto md:h-10 md:w-auto"
            src="/assets/Logo.svg"  
            alt="Logo" />
          
        </div>

        <!-- Navigation Links -->
        <nav class="hidden md:flex">
          <a
            href="#features"
            class="text-textSecondary font-Poppins hover:text-primary hover:bg-primaryHover py-2 px-4 text-body-small font-medium transition rounded-full"
          >
            Features
          </a>
          <a
            href="#pricing"
            class="text-textSecondary font-Poppins hover:text-primary hover:bg-primaryHover py-2 px-4 text-body-small font-medium transition rounded-full"   
          >
            Pricing
          </a>
          <a
            href="#contact"
            class="text-textSecondary font-Poppins hover:text-primary hover:bg-primaryHover py-2 px-4  text-body-small font-medium transition rounded-full"
          >
            Contact
          </a>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:block">
         <Button label="Get Started" />
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-gray-800 focus:outline-none"
          @click="toggleMobileMenu"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white shadow-md mx-4 mt-2 rounded-xl"
    >
      <nav class="space-y-2 py-4 px-4">
        <a
            href="#features"
            class="block text-textSecondary font-Poppins hover:text-primary hover:bg-primaryHover py-2 px-4 text-body-small font-medium transition rounded-full"
          >
            Features
          </a>
          <a
            href="#pricing"
            class="block text-textSecondary font-Poppins hover:text-primary hover:bg-primaryHover py-2 px-4 text-body-small font-medium transition rounded-full"   
          >
            Pricing
          </a>
          <a
            href="#contact"
            class="block text-textSecondary font-Poppins hover:text-primary hover:bg-primaryHover py-2 px-4  text-body-small font-medium transition rounded-full"
          >
            Contact
          </a>
          <Button label="Get Started" fullwidth/>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>