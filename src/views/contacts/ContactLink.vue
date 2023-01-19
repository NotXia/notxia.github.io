<template>
    <p class="my-4 text-center">
        <a :href="props.url">
            <div class="inline-flex items-center">
                <img :src="props.icon" alt="Github" class="h-7 mr-2 select-none dark:invert" /> 
                <span class="text-xl truncate">{{ props.label }}</span>
            </div>
        </a>
    </p>
</template>


<script setup lang="ts">
    const props = defineProps({
        url: String,
        label: String,
        icon: String, alt: String
    });
</script>