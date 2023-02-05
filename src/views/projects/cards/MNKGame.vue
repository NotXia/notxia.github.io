<template>
    <ProjectCard 
        title="MNK Game" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/MNKGame' }
        ]">
        
        <p class="text-center">{{ t("unibo") }}</p>
        <p>{{ t('description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/projects/mnkgame.png";

    const { t } = useI18n({ messages: {
        en: {
            unibo: "University of Bologna, A.Y. 2020-2021",
            description:
                "Project for the Algorithms and Data Structures course.\n" +
                "Algorithm able to efficiently play a generalized version of tic-tac-toe."
        },
        it: {
            unibo: "Università di Bologna, A.A. 2020-2021",
            description:
                "Progetto per il corso di Algoritmi e Strutture Dati.\n" +
                "Algoritmo in grado di giocare in modo efficiente ad una versione generalizzata del tris."
        }
    } });
</script>