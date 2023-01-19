<template>
    <Navbar />

    <main>
        <h1 class="text-5xl font-bold text-center mb-5">{{ t("projects") }}</h1>
        <h2 class="text-3xl text-center mt-10 mb-3">{{ t("wip") }}</h2>

        <Wirefilter />

        <h2 class="text-3xl text-center mt-10 mb-3">{{ t("completed") }}</h2>

        <PandOSplus />
        <Imaging />
        <MNKGame />
        <Platform />
        <PathfindingVisualizer />
        <SortingVisualizer />
    </main>
</template>


<script setup lang="ts">
    import Navbar from "@/components/navbar/Navbar.vue";
    import Wirefilter from "./cards/Wirefilter.vue";
    import SortingVisualizer from "./cards/SortingVisualizer.vue";
    import PathfindingVisualizer from "./cards/PathfindingVisualizer.vue";
    import MNKGame from "./cards/MNKGame.vue";
    import Imaging from "./cards/Imaging.vue";
    import Platform from "./cards/Platform.vue";
    import PandOSplus from "./cards/PandOSplus.vue";
    import { useI18n } from "vue-i18n";
    import locale from "./locale.json";

    const { t } = useI18n({ messages: locale });
</script>