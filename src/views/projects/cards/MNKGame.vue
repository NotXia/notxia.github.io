<template>
    <ProjectCard 
        title="MNK Game" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/MNKGame' }
        ]" />
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/projects/mnkgame.png";

    const { t } = useI18n({ messages: {
        en: {
            description:
                "Project for the Algorithms and Data Structures course (University of Bologna, A.Y. 2020-2021).\n" +
                "Algorithm able to efficiently play a generalized version of tic-tac-toe."
        },
        it: {
            description:
                "Progetto per il corso di Algoritmi e Strutture Dati (Università di Bologna, A.A. 2020-2021).\n" +
                "Algoritmo in grado di giocare in modo efficiente ad una versione generalizzata del tris."
        }
    } });
</script>