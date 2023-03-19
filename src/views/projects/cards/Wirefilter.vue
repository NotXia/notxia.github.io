<template>
    <ProjectCard 
        title="Wirefilter" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/vdeplug_wirefilter' },
            { label: 'VirtualSquare', url: 'http://wiki.virtualsquare.org/#!index.md' }
        ]">
        
        <p class="text-center">{{ t("unibo_22-23") }}</p>
        <p>{{ t("wirefilter.description") }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>