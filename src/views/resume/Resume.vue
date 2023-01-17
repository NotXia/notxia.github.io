<template>
    <Navbar />

    <main>
        <ExperienceTimeline />
    </main>
</template>


<script setup lang="ts">
    import Navbar from "@/components/navbar/Navbar.vue";
    import ExperienceTimeline from "./ExperienceTimeline.vue";
    import { useI18n } from "vue-i18n";
    import locale from "./locale.json";

    const { t } = useI18n({ messages: locale });
</script>