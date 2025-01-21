<template>
    <section class="relative pt-40 pb-12 md:pb-16 lg:pb-32 flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center px-4 md:px-16 lg:px-24 ">
        <div class="flex flex-col gap-4 md:gap-8 lg:max-w-4xl z-10">
            <Tag :label="tagLabel" :icon="tagIcon" />
            <h1 class="text-h3 md:text-h2 md:font-semibold lg:text-h1 lg:font-semibold font-Poppins text-center font-semibold text-textPrimary" v-html="title"></h1>
            <p class="text-body-large font-Sora text-textSecondary text-center">{{ description }}</p>
        </div>
        <div class="z-10 ">
            <img :src="heroImage" alt="Hero Image">
        </div>
        <div class="absolute inset-0  w-full h-full z-0 ">
            <img class="w-full opacity-60" src="/assets/HeroAssets/Background.png" alt="">
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        tagLabel: {
            type: String,
            required: true
        },
        tagIcon: {
            type: String,
            required: true
        },
        heroImage: {
            type: String,
            default: '/assets/HeroAssets/HeroImage.png'
        },
    }
}
</script>