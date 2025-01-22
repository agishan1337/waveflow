<template>
        <p class="flex text-body-medium font-semibold font-Sora bg-gradient-to-r from-primary to-[#1B68CC] bg-clip-text text-transparent">{{ label}}</p>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>