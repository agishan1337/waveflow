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
    {
      'bg-primary hover:bg-primarydarkHover text-white': variant === 'primary',
      'bg-secondary hover:bg-secondaryHover text-textPrimary': variant === 'secondary',
      'bg-transparent hover:bg-secondary text-textPrimary border border-primary': variant === 'tertiary'
    },
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
      validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value)
    }
  }
}
</script>

<style scoped></style>