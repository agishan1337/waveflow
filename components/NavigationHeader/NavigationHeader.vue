<template>
  <header class="fixed inset-x-0 top-0 z-40" :class="{ 'animate-slideDown': true }">
    <div class="relative mx-auto mt-5 flex w-full items-start justify-center px-4">
      <div :class="[
        'flex min-h-16 w-full items-center justify-between gap-8 px-5 md:min-h-18 md:px-4 md:w-auto rounded-full shadow-sm transition-all duration-300',
        isDark 
          ? 'border border-darkStrokeColour bg-darkHover bg-opacity-100 backdrop-blur-lg' 
          : 'border border-strokeColor bg-white'
      ]">
        <!-- Logo -->
        <div>
          <img 
            class="h-8 w-auto md:h-10 md:w-auto"
            :src="isDark ? '/assets/LogoWhite.svg' : '/assets/Logo.svg'"  
            alt="Logo"
          />
        </div>

        <!-- Navigation Links -->
        <nav class="hidden md:flex">
          <a
            href="#features"
            :class="[
              'font-Poppins py-2 px-4 text-body-small font-medium transition rounded-full',
              isDark ? 'text-white hover:text-primary' : 'text-textSecondary hover:text-primary hover:bg-primaryHover'
            ]"
          >
            Features
          </a>
          <a
            href="#pricing"
            :class="[
              'font-Poppins py-2 px-4 text-body-small font-medium transition rounded-full',
              isDark ? 'text-white hover:text-primary' : 'text-textSecondary hover:text-primary hover:bg-primaryHover'
            ]"
          >
            Pricing
          </a>
          <a
            href="#contact"
            :class="[
              'font-Poppins py-2 px-4 text-body-small font-medium transition rounded-full',
              isDark ? 'text-white hover:text-primary' : 'text-textSecondary hover:text-primary hover:bg-primaryHover'
            ]"
          >
            Contact
          </a>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:block">
         <Button iconPath="/assets/Icons/Apple.svg" label="Download for Mac" />
        </div>

        <!-- Mobile Menu Button -->
        <button
          :class="[
            'md:hidden focus:outline-none',
            isDark ? 'text-white' : 'text-gray-800'
          ]"
          @click="toggleMobileMenu"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="isDark ? 'white' : 'currentColor'"
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
      :class="[
        'md:hidden shadow-md mx-4 mt-2 rounded-xl transition-all duration-300',
        isDark 
          ? 'border border-darkStrokeColour bg-darkHover bg-opacity-100 backdrop-blur-lg' 
          : 'bg-white'
      ]"
    >
      <nav class="space-y-2 py-4 px-4">
          <a
            href="#features"
            :class="[
              'block font-Poppins py-2 px-4 text-body-small font-medium transition rounded-full',
              isDark ? 'text-white hover:text-primary' : 'text-textSecondary hover:text-primary hover:bg-primaryHover'
            ]"
          >
            Features
          </a>
          <a
            href="#pricing"
            :class="[
              'block font-Poppins py-2 px-4 text-body-small font-medium transition rounded-full',
              isDark ? 'text-white hover:text-primary' : 'text-textSecondary hover:text-primary hover:bg-primaryHover'
            ]"
          >
            Pricing
          </a>
          <a
            href="#contact"
            :class="[
              'block font-Poppins py-2 px-4 text-body-small font-medium transition rounded-full',
              isDark ? 'text-white hover:text-primary' : 'text-textSecondary hover:text-primary hover:bg-primaryHover'
            ]"
          >
            Contact
          </a>
         <Button iconPath="/assets/Icons/Apple.svg" label="Download for Mac" fullwidth />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      isDark: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    handleScroll() {
      const usecasesSection = document.getElementById('usecases')
      if (!usecasesSection) return

      const rect = usecasesSection.getBoundingClientRect()
      const headerHeight = 80 // Approximate header height
      
      // Check if we're within the Usecases section
      // Top of section is at or above header bottom AND bottom of section is below header
      this.isDark = rect.top <= headerHeight && rect.bottom > headerHeight
    }
  }
}
</script>

<style scoped>
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slideDown {
  animation: slideDown 0.4s ease-in-out forwards;
}

.navbar-glass {
  background: rgba(255, 255, 255, 0.85);
  -webkit-backdrop-filter: blur(45px);
  backdrop-filter: blur(10px);
}

@supports not (backdrop-filter: blur(45px)) {
  .navbar-glass {
    background: rgba(255, 255, 255, 0.95);
  }
}
</style>