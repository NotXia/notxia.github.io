<template>
    <ProjectCard 
        title="Animal House" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/animal-house' }
        ]">
        
        <p class="text-center">{{ t("unibo") }}</p>
        <p>{{ t('description') }}</p>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/animal-house.png";

    const { t } = useI18n({ messages: {
        en: {
            unibo: "University of Bologna, A.Y. 2021-2022",
            description:
                "Project for the Web Technology course.\n" +
                "Web app with three sections:.\n" +
                "- Game: area with games and facts about animals\n" +
                "- Frontoffice: area to access services as logged users\n" +
                "- Backoffice: administration panel"

        },
        it: {
            unibo: "Università di Bologna, A.A. 2021-2022",
            description:
                "Progetto per il corso di Tecnologie Web.\n" +
                "Web app suddivisa in tre sezioni:\n" +
                "- Game: area con giochi e fatti sugli animali\n" +
                "- Frontoffice: area con servizi per gli utenti\n" +
                "- Backoffice: pannello di amministrazione"
        }
    } });
</script>