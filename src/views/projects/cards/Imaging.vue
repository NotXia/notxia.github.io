<template>
    <ProjectCard 
        title="Image deblur" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/imaging' }
        ]">
        
        <p class="text-center">{{ t("unibo_21-22") }}</p>
        <p>{{ t('imaging.description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/imaging.png";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>