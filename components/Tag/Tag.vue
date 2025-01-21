<template>
    <a class="flex bg-white items-center justify-center gap-1 rounded-full border border-strokeColor px-4 py-2 mx-auto shadow-sm cursor-pointer transition hover:bg-greyHover">
        <img class="w-4 h-4" :src="icon" alt="">
        <p class="text-body-small font-Sora font-medium text-textPrimary">{{ label }}</p> 
        <img class="ml-1 w-4 h-4" src="/assets/Icons/chevron-right.svg" alt="">

    </a>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
  icon: {
      type: String,
      required: true
  }

  }
}
</script>