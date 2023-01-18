<template>
    <ProjectCard 
        title="PandOS+" 
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/pandos-plus' }
        ]"/>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";

    const { t } = useI18n({ messages: {
        en: {
            description:
                "Project for the Operating Systems course (University of Bologna, A.Y. 2021-2022).\n" +
                "Minimal operating system for the MIPS architecture."
        },
        it: {
            description:
                "Progetto per il corso di Sistemi Operativi (Università di Bologna, A.A. 2021-2022).\n" +
                "Sistema operativo minimale per architettura MIPS."
        }
    } });
</script>