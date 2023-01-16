<template>
    <Navbar />

    <main>
        <div class="container mx-auto">
            <h1 class="text-5xl font-bold">
                {{ t("hello") }}
            </h1>
        </div>
    </main>
</template>


<script setup lang="ts">
    import Navbar from "@/components/navbar/Navbar.vue";
    import { useI18n } from "vue-i18n";
    import locale from "./locale.json";

    const { t } = useI18n({ messages: locale });
</script>