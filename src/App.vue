<template>
    <div class="bg-white text-gray-900
                dark:bg-gray-900 min-h-screen dark:text-slate-50">
        <RouterView />
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { RouterView } from "vue-router";

    onMounted(() => {
        document.documentElement.classList.add("dark");
    })
</script>