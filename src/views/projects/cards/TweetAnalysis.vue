<template>
    <ProjectCard 
        title="Tweet Analysis" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/tweet-analysis' }
        ]">
        
        <p class="text-center">{{ t("unibo") }}</p>
        <p>{{ t('description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/projects/tweet-analysis.png";

    const { t } = useI18n({ messages: {
        en: {
            unibo: "University of Bologna, A.Y. 2022-2023",
            description:
                "Project for the Software Engineering course.\n" +
                "Twitter client with analytics features developed using the Scrum methodology."
        },
        it: {
            unibo: "Università di Bologna, A.A. 2022-2023",
            description:
                "Progetto per il corso di Ingegneria del Software.\n" +
                "Webapp per l'analisi di tweet sviluppato con metodologia Scrum."
        }
    } });
</script>