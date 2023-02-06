<template>
    
    <div class="inline-block">
        <div class="flex items-center">
            <img :src="props.logo" alt="" :class="`h-5 mr-1 ${props.needInvert ? 'dark:invert' : ''}`">
            {{ props.language }}
        </div>
    </div>

</template>


<script setup lang="ts">
    const props = defineProps({
        language: String,
        logo: String,
        needInvert: Boolean
    });
</script>