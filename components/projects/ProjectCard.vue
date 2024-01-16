<template>
    <div class="w-100 p-5 h-full">
        <div class="border border-gray-500 dark:border-gray-300 rounded-md p-3 w-full h-full flex items-center justify-center">
            <div class="w-full relative">
                <div v-if="wip" class="sm:absolute sm:float-left flex items-center justify-center">
                    <img src="~/assets/images/icons/wip.svg" class="h-6 sm:h-8 dark:invert"/>
                    <span class="sm:text-lg font-bold ml-2">WIP</span>
                </div>
                <h3 class="text-2xl font-semibold text-center text-gray-900 dark:text-white">{{ props.title }}</h3>
                <h4 v-if="props.subtitle" class="text font-semibold text-center text-gray-700 dark:text-gray-300">{{ props.subtitle }}</h4>
                <div class="text-center mb-2">
                    <a v-for="link in props.links" :href="link.url" class="font-mono inline-block hover:underline mx-2">{{ link.label }}</a>
                </div>
                <p class="w-full text-lg whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
                    <slot></slot>
                </p>
                <img v-if="props.image" :src="props.image" alt="" class="max-w-full max-h-96 mx-auto">
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
    import type { PropType } from "vue";

    const props = defineProps({
        title: String,
        subtitle: { type: String, required: false },
        links: Object as PropType<{ label: string, url: string }[]>,
        image: String,
        wip: { type: Boolean, required: false }
    });
</script>