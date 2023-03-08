<template>
    <ProjectCard 
        title="Image deblur" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/imaging' }
        ]">
        
        <p class="text-center">{{ t("unibo") }}</p>
        <p>{{ t('description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/imaging.png";

    const { t } = useI18n({ messages: {
        en: {
            unibo: "University of Bologna, A.Y. 2021-2022",
            description:
                "Project for the Numerical Computing course.\n" +
                "Image deblurring solved as a minimization problem."
        },
        it: {
            unibo: "Università di Bologna, A.A. 2021-2022",
            description:
                "Progetto per il corso di Calcolo Numerico.\n" +
                "Deblurring di immagini risolto come problema di minimizzazione."
        }
    } });
</script>