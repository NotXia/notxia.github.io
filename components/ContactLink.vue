<template>
    <div class="my-4 text-left md:text-center">
        <a :href="props.url">
            <div class="inline-flex items-center">
                <img :src="props.icon" alt="Github" class="h-7 mr-2 select-none dark:invert" /> 
                <span class="text-xl text-left">{{ props.label }}</span>
            </div>
        </a>
    </div>
</template>


<script setup lang="ts">
    const props = defineProps({
        url: String,
        label: String,
        icon: String, alt: String
    });
</script>