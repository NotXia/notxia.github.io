<template>
    <ProjectCard 
        title="Pathfinding visualizer" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/pathfinding-visualizer' },
            { label: 'Demo', url: 'https://notxia.github.io/pathfinding-visualizer/' }
        ]">

        {{ t('pathfinding_visualizer.description') }}
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/pathfinding-visualizer.png";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>