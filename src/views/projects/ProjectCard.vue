<template>
    <div class="border rounded-md p-3 px-3 mx-auto my-5 w-full lg:w-2/3 xl:w-1/2">
        <h3 class="text-2xl font-semibold text-center text-gray-900 dark:text-white">{{ props.title }}</h3>
        <div class="text-center mb-2">
            <a v-for="link in props.links" :href="link.url" class="font-mono inline-block hover:underline mx-2">{{ link.label }}</a>
        </div>
        <p class="text-lg whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
            <slot></slot>
        </p>
        <img :src="props.image" alt="" class="max-w-full max-h-96 mx-auto">
    </div>
</template>


<script setup lang="ts">
    import type { PropType } from "vue";

    const props = defineProps({
        title: String,
        links: Object as PropType<{ label: string, url: string }[]>,
        image: String
    });
</script>