<template>
    <div class="p-8 border border-strokeColor h-full rounded-xl bg-greyHover gap-6 justify-between flex flex-col">
        <div class="flex flex-col gap-2 ">
            <p class="text-body-medium font-Sora font-semibold md:font-semibold lg:font-semibold  text-textPrimary ">{{ testimonialTitle }}</p>
            <p class="text-body-small font-Sora text-textSecondary ">{{ testimonialDescription }}</p>
        </div>
        <div class="flex items-center gap-4">
            <img class="w-12 h-12 rounded-full" :src="avatar" alt="">
            <div class="flex flex-col gap-1">
                <p class="text-body-small font-Sora font-semibold text-textPrimary ">{{ name }}</p>
                <p class="text-body-small font-Sora text-textSecondary ">{{ designation }}</p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    avatar: string;
    name: string;
    designation: string;
    testimonialTitle: string;
    testimonialDescription: string;
}>();
</script>