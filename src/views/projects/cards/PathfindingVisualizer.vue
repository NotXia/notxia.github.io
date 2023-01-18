<template>
    <ProjectCard 
        title="Pathfinding visualizer" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/pathfinding-visualizer' },
            { label: 'Demo', url: 'https://notxia.github.io/pathfinding-visualizer/' }
        ]" />
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/projects/pathfinding-visualizer.png";

    const { t } = useI18n({ messages: {
        en: {
            description:
                "Visualizer for some graph search algorithms."
        },
        it: {
            description:
                "Visualizzazione di alcuni algoritmi di ricerca su grafi."
        }
    } });
</script>