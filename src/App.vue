<template>
    <div class="bg-white text-gray-900
                dark:bg-gray-900 min-h-screen dark:text-slate-50"
         style="font-family: 'Comfortaa';">
        <div class="container mx-auto md:px-8">
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