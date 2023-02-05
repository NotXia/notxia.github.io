<template>
    <ProjectCard 
        title="PandOS+" 
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/pandos-plus' }
        ]">
        
        <p class="text-center">{{ t("unibo") }}</p>
        <p>{{ t('description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";

    const { t } = useI18n({ messages: {
        en: {
            unibo: "University of Bologna, A.Y. 2021-2022",
            description:
                "Project for the Operating Systems course.\n" +
                "Minimal operating system for the MIPS architecture."
        },
        it: {
            unibo: "Università di Bologna, A.A. 2021-2022",
            description:
                "Progetto per il corso di Sistemi Operativi.\n" +
                "Sistema operativo minimale per architettura MIPS."
        }
    } });
</script>