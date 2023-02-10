<template>
    <div class="md:ml-2 mt-4">
        <div class="flex justify-between">
            <h3 class="text-xl font-semibold tracking-wide">{{ props.title }}</h3>
            <div class="text-right text-gray-500 dark:text-gray-400">{{ props.right_text }}</div>
        </div>
        <div class="leading-5 text-gray-500 dark:text-gray-400">{{ props.subtitle }}</div>

        <div class="mt-1 whitespace-pre-wrap">
            <slot></slot>
        </div>
    </div>
</template>


<script setup lang="ts">
    const props = defineProps({
        title: String,
        subtitle: String,
        right_text: String
    });
</script>