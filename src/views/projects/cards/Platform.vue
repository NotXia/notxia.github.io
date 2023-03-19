<template>
    <ProjectCard 
        title="Platform game" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/platform-game' }
        ]">
        
        <p class="text-center">{{ t("unibo_20-21") }}</p>
        <p>{{ t('platform.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/platform.png";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>