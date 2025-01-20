<template>
  <button :class="['flex', 'rounded-full', 'px-6', 'py-3', 'bg-primary', 'hover:bg-primarydarkHover', 'transition', 'text-white', 'text-body-small', 'font-Poppins', { 'w-full': fullwidth, 'justify-center': fullwidth }]">
    <img v-if="iconPath" :src=iconPath alt="icon" />
    <span>{{ label }}</span>
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
    }
  }
}
</script>

<style scoped></style>