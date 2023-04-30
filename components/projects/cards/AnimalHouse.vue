<template>
    <ProjectCard 
        title="Animal House" :image="image"
        :links="[ 
            { label: 'Repository', url: 'https://github.com/NotXia/animal-house' }
        ]">
        
        <p class="text-center">{{ $t("unibo_21-22") }}</p>
        <p>{{ $t('animalhouse.description') }}</p>
        <ul class="list-inside list-['-_']">
            <li>{{ $t('animalhouse.description.game') }}</li>
            <li>{{ $t('animalhouse.description.frontoffice') }}</li>
            <li>{{ $t('animalhouse.description.backoffice') }}</li>
        </ul>
    </ProjectCard>
</template>


<script setup lang="ts">
    import image from "@/assets/images/projects/animal-house.png";
</script>