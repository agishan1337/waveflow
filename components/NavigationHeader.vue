<template>
    <header class="fixed inset-x-0 top-0 ">
      <div class="relative z-[999] mx-auto mt-5 flex w-full items-start justify-center px-4  ">
        <div class="flex min-h-16 w-full items-center justify-between gap-8 px-5 md:min-h-18 md:px-8 md:w-auto border border-gray-500 rounded-full">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="/" class="text-xl font-bold text-gray-800">
              Waveflow
            </a>
          </div>
  
          <!-- Navigation Links -->
          <nav class="hidden md:flex space-x-6">
            <a
              href="#features"
              class="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              class="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              class="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Contact
            </a>
          </nav>
  
          <!-- CTA Button -->
          <div class="hidden md:block">
            <a
              href="#get-started"
              class="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
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
        class="md:hidden bg-white shadow-md"
      >
        <nav class="space-y-2 py-4 px-4">
          <a
            href="#features"
            class="block text-gray-600 hover:text-gray-900 font-medium transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            class="block text-gray-600 hover:text-gray-900 font-medium transition"
          >
            Pricing
          </a>
          <a
            href="#about"
            class="block text-gray-600 hover:text-gray-900 font-medium transition"
          >
            About
          </a>
          <a
            href="#contact"
            class="block text-gray-600 hover:text-gray-900 font-medium transition"
          >
            Contact
          </a>
          <a
            href="#get-started"
            class="block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
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
  