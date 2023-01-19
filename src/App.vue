<template>
    <div class="bg-white text-gray-900 min-h-screen h-full
                dark:bg-gray-900 dark:text-slate-50"
         style="font-family: 'Comfortaa';">
        <div class="container mx-auto pb-8 md:px-8 h-full w-full">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { RouterView } from "vue-router";
    import { applyTheme } from "./utilities/theme_handler";
    
    onMounted(() => {
        applyTheme();
    })
</script>