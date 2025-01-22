<template>
  <footer class="bg-bgDark text-white py-16 px-4 md:px-16 lg:px-24">
    <div class="max-w-7xl mx-auto">

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

        <div class="flex flex-col gap-6 items-start md:col-span-4">
          <img src="/assets/LogoWhite.svg" alt="Waveflow Logo" class="h-12" />
          <p class="text-gray-400 text-body-small max-w-sm font-Sora">
            Empowering businesses with innovative solutions for a digital future.
          </p>
        </div>

        <div class="md:col-span-3 md:justify-self-end">
          <h3 class="text-body-small font-Sora font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div class="md:col-span-4 md:justify-self-end">
          <h3 class="text-body-small font-Sora font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-center gap-2">
              <i class="text-body-medium"></i>
              <span>Contact@waveflow.com</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="text-body-medium"></i>
              <span>+1 (555) 123-4567</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="text-body-medium"></i>
              <span>123 Tech Street, Valley View, CA 94041</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-darkStrokeColour pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">

          <p class="text-gray-400 text-body-medium text-center md:text-left">
            {{ new Date().getFullYear() }} Waveflow Inc. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-gray-400 text-body-medium hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-400 text-body-medium hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" class="text-gray-400 text-body-medium hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>