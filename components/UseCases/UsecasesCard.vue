<template>
    <div class="rounded-xl flex flex-col gap-4 p-6 border border-strokeColor hover:bg-greyHover transition-all duration-300">
        <img class="w-8 h-8 " :src="icon" alt="">
        <h3 class="text-body-large text-textPrimary text-regular font-Sora font-medium">{{ title }}</h3>
        <p class="text-small text-textSecondary text-regular text-opacity-75 font-Sora">{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>