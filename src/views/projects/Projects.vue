<template>
    <Navbar />

    <main>
        <h1 class="text-5xl font-bold text-center mb-5">{{ t("projects") }}</h1>
        
        <h2 class="text-3xl text-center mt-10 mb-3">{{ t("wip") }}</h2>
        <div class="[&>*]:my-14 first:[&>*]:mt-8">
            <Wirefilter />
            <NotXiaGithubio />
        </div>


        <h2 class="text-3xl text-center mt-10 mb-3">{{ t("completed") }}</h2>
        <div class="[&>*]:my-14 first:[&>*]:mt-8">
            <TweetAnalysis />
            <AnimalHouse />
            <PandOSplus />
            <Imaging />
            <MNKGame />
            <Platform />
            <PathfindingVisualizer />
            <SortingVisualizer />
        </div>
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
    import NotXiaGithubio from "./cards/NotXiaGithubio.vue";
    import AnimalHouse from "./cards/AnimalHouse.vue";
    import TweetAnalysis from "./cards/TweetAnalysis.vue";
    import { useI18n } from "vue-i18n";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>