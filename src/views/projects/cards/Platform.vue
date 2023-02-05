<template>
    <ProjectCard 
        title="Platform game" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/platform-game' }
        ]">
        
        <p class="text-center">{{ t("unibo") }}</p>
        <p>{{ t('description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/projects/platform.png";

    const { t } = useI18n({ messages: {
        en: {
            unibo: "University of Bologna, A.Y. 2020-2021",
            description:
                "Project for the Programmin course.\n" +
                "Text based platform game with randomly generated levels."
        },
        it: {
            unibo: "Università di Bologna, A.A. 2020-2021",
            description:
                "Progetto per il corso di Programmazione.\n" +
                "Gioco platform su terminale con livelli generati casualmente."
        }
    } });
</script>