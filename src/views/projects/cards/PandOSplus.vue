<template>
    <ProjectCard 
        title="PandOS+" 
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/pandos-plus' }
        ]">
        
        <p class="text-center">{{ t("unibo_21-22") }}</p>
        <p>{{ t('pandos+.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>