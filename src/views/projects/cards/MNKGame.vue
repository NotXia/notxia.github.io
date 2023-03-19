<template>
    <ProjectCard 
        title="MNK Game" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/MNKGame' }
        ]">
        
        <p class="text-center">{{ t("unibo_20-21") }}</p>
        <p>{{ t('mnk.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/mnkgame.png";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>