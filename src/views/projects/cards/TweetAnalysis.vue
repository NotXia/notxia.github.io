<template>
    <ProjectCard 
        title="Tweet Analysis" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/tweet-analysis' }
        ]">
        
        <p class="text-center">{{ t("unibo_22-23") }}</p>
        <p>{{ t('tweet_analysis.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/tweet-analysis.png";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>