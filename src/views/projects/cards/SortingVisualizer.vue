<template>
    <ProjectCard 
        title="Sorting visualizer" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/sorting-visualizer' },
            { label: 'Demo', url: 'https://notxia.github.io/sorting-visualizer/' }
        ]">
              
        {{ t('description') }}
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/projects/sorting-visualizer.png";

    const { t } = useI18n({ messages: {
        en: {
            description:
                "Visualizer for some sorting algorithms."
        },
        it: {
            description:
                "Visualizzazione di algoritmi di ordinamento."
        }
    } });
</script>