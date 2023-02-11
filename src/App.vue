<template>
    <div class="bg-gray-100 text-gray-900 min-h-screen h-full
                dark:bg-gray-900 dark:text-slate-50"
         style="font-family: 'Comfortaa'; overflow-x: hidden; ">
        
        <!-- Prevents scrollbar shift -->
         <div style="margin-right: calc(-1 * (100vw - 100%));">
            <div class="container mx-auto pb-8 px-3 md:px-8 min-h-screen w-screen flex flex-col">
                <RouterView />
            </div>
        </div>

        <Cookie />
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { RouterView } from "vue-router";
    import { applyTheme } from "./utilities/theme_handler";
    import Cookie from "@/components/cookie/Cookie.vue";
    
    onMounted(() => {
        applyTheme();
    })
</script>