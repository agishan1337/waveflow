<template>
  <button :class="[
    'flex',
    'items-center',
    'rounded-full',
    iconPath ? 'pl-4 pr-6' : 'px-6',
    'py-3',
    'transition',
    'text-body-small',
    'font-Poppins',
    variant === 'secondary' ? 'bg-secondary hover:bg-secondaryHover text-textPrimary' : 'bg-primary hover:bg-primarydarkHover text-white',
    { 'w-full': fullwidth, 'justify-center': fullwidth }
  ]">
    <img class="w-5 h-5" v-if="iconPath" :src=iconPath alt="icon" />
    <p class="text-body-small font-Poppins font-medium" :class="{ 'ml-2': iconPath }">{{ label }}</p>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    iconPath: {
      type: String,
      required: false
    },
    fullwidth: {
      type: Boolean,
      required: false
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary'].includes(value)
    }
  }
}
</script>

<style scoped></style>