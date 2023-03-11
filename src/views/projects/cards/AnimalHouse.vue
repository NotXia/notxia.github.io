<template>
    <ProjectCard 
        title="Animal House" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/animal-house' }
        ]">
        
        <p class="text-center">{{ t("unibo") }}</p>
        <p>{{ t('description') }}</p>
        <ul class="list-inside list-['-_']">
            <li>{{ t('description game') }}</li>
            <li>{{ t('description frontoffice') }}</li>
            <li>{{ t('description backoffice') }}</li>
        </ul>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/animal-house.png";

    const { t } = useI18n({ messages: {
        en: {
            "unibo": "University of Bologna, A.Y. 2021-2022",
            "description":
                "Project for the Web Technology course.\n" +
                "Web app with three sections:",
            "description game": "Game: area with games and facts about animals",
            "description frontoffice": "Frontoffice: area to access services as a logged user",
            "description backoffice": "Backoffice: administration panel"

        },
        it: {
            "unibo": "Università di Bologna, A.A. 2021-2022",
            "description":
                "Progetto per il corso di Tecnologie Web.\n" +
                "Web app suddivisa in tre sezioni:",
            "description game": "Game: area con giochi e curiosità sugli animali",
            "description frontoffice": "Frontoffice: area con servizi per gli utenti autenticati",
            "description backoffice": "Backoffice: pannello di amministrazione"
        }
    } });
</script>