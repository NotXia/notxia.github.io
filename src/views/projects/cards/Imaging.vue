<template>
    <ProjectCard 
        title="Image deblur" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/imaging' }
        ]" />
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/projects/imaging.png";

    const { t } = useI18n({ messages: {
        en: {
            description:
                "Project for the Numerical Computing course (University of Bologna, A.Y. 2021-2022).\n" +
                "Image deblurring solved as a minimization problem."
        },
        it: {
            description:
                "Progetto per il corso di Calcolo Numerico (Università di Bologna, A.A. 2021-2022).\n" +
                "Deblurring di immagini risolto come problema di minimizzazione."
        }
    } });
</script>