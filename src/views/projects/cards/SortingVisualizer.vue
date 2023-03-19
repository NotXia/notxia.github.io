<template>
    <ProjectCard 
        title="Sorting visualizer" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/sorting-visualizer' },
            { label: 'Demo', url: 'https://notxia.github.io/sorting-visualizer/' }
        ]">
              
        {{ t('sort_visualizer.description') }}
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/sorting-visualizer.png";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>