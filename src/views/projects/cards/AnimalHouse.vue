<template>
    <ProjectCard 
        title="Animal House" :image="image"
        :description="t('description')" 
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/animal-house' }
        ]">
        
        <p class="text-center">{{ t("unibo_21-22") }}</p>
        <p>{{ t('animalhouse.description') }}</p>
        <ul class="list-inside list-['-_']">
            <li>{{ t('animalhouse.description.game') }}</li>
            <li>{{ t('animalhouse.description.frontoffice') }}</li>
            <li>{{ t('animalhouse.description.backoffice') }}</li>
        </ul>
    </ProjectCard>
</template>


<script setup lang="ts">
    import ProjectCard from "../ProjectCard.vue";
    import { useI18n } from "vue-i18n";
    import image from "@/assets/images/projects/animal-house.png";
    import locale from "@/locales/projects";

    const { t } = useI18n({ messages: locale });
</script>